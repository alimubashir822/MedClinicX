"use client";

import { useState, useEffect } from "react";
import { 
  Calculator, 
  BookOpen, 
  Trash2, 
  FileText, 
  AlertTriangle,
  Info,
  Activity,
  PlusCircle,
  ChevronDown,
  Scale,
  Sparkles,
  Shield,
  Printer,
  History,
  TrendingDown,
  TrendingUp,
  Heart
} from "lucide-react";

interface FatLogRecord {
  id: string;
  timestamp: string;
  calorieGoal: number;
  activityLevel: string;
  nutritionGoal: string;
  fatPct: number;
  fatGrams: number;
  fatCalories: number;
  satFatLimitGrams: number;
}

export default function FatIntakeCalculatorClient() {
  const [activeTab, setActiveTab] = useState<"calculator" | "logger" | "education">("calculator");
  
  // Toggle calorie input method
  const [calorieMethod, setCalorieMethod] = useState<"direct" | "estimate">("direct");
  
  // Inputs - Direct Calorie
  const [directCalorieGoal, setDirectCalorieGoal] = useState<string>("2000");

  // Inputs - TDEE Calorie Estimation Helper
  const [gender, setGender] = useState<"male" | "female">("male");
  const [age, setAge] = useState<string>("30");
  const [weight, setWeight] = useState<string>("70");
  const [weightUnit, setWeightUnit] = useState<"kg" | "lbs">("kg");
  const [heightUnit, setHeightUnit] = useState<"cm" | "ft-in">("cm");
  const [heightCm, setHeightCm] = useState<string>("175");
  const [heightFt, setHeightFt] = useState<string>("5");
  const [heightIn, setHeightIn] = useState<string>("9");
  
  // Core Settings
  const [activity, setActivity] = useState<string>("moderately");
  const [nutritionGoal, setNutritionGoal] = useState<string>("maintenance");
  
  // Fat target preference
  const [fatPercentageMethod, setFatPercentageMethod] = useState<"recommended" | "custom">("recommended");
  const [customFatPct, setCustomFatPct] = useState<string>("25");

  // Health Logger entries
  const [records, setRecords] = useState<FatLogRecord[]>([]);
  const [toastMessage, setToastMessage] = useState<string>("");

  // Load records from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem("medclinicx_fat_intake_logs");
    if (saved) {
      try {
        setRecords(JSON.parse(saved));
      } catch (e) {
        console.error("Error reading fat intake logs", e);
      }
    } else {
      // Seed default log
      setRecords([
        {
          id: "1",
          timestamp: "Initial Estimate",
          calorieGoal: 2000,
          activityLevel: "Moderately Active",
          nutritionGoal: "Weight maintenance",
          fatPct: 25,
          fatGrams: 55.6,
          fatCalories: 500,
          satFatLimitGrams: 22.2
        }
      ]);
    }
  }, []);

  const saveRecords = (newRecords: FatLogRecord[]) => {
    setRecords(newRecords);
    localStorage.setItem("medclinicx_fat_intake_logs", JSON.stringify(newRecords));
  };

  // Activity labels helper
  const getActivityLabel = (key: string) => {
    switch (key) {
      case "sedentary": return "Sedentary";
      case "lightly": return "Lightly Active";
      case "moderately": return "Moderately Active";
      case "very": return "Very Active";
      case "extra": return "Extra Active";
      default: return "Moderately Active";
    }
  };

  // Nutrition goal labels helper
  const getGoalLabel = (key: string) => {
    switch (key) {
      case "maintenance": return "Weight maintenance";
      case "loss": return "Weight loss";
      case "building": return "Muscle building";
      default: return "Weight maintenance";
    }
  };

  // Calculations
  const calculateCalorieTarget = () => {
    if (calorieMethod === "direct") {
      return Math.max(800, Math.min(10000, parseFloat(directCalorieGoal) || 2000));
    }

    // Estimate calorie target via Mifflin-St Jeor TDEE
    const weightKg = weightUnit === "kg" 
      ? (parseFloat(weight) || 70) 
      : (parseFloat(weight) || 154) * 0.45359237;

    let hCm = parseFloat(heightCm) || 175;
    if (heightUnit === "ft-in") {
      const ft = parseFloat(heightFt) || 5;
      const inch = parseFloat(heightIn) || 9;
      hCm = (ft * 12 + inch) * 2.54;
    }

    const ageNum = parseFloat(age) || 30;

    // Mifflin-St Jeor BMR
    const bmr = gender === "male"
      ? (10 * weightKg) + (6.25 * hCm) - (5 * ageNum) + 5
      : (10 * weightKg) + (6.25 * hCm) - (5 * ageNum) - 161;

    // TDEE multiplier
    let multiplier = 1.2;
    if (activity === "lightly") multiplier = 1.375;
    else if (activity === "moderately") multiplier = 1.55;
    else if (activity === "very") multiplier = 1.725;
    else if (activity === "extra") multiplier = 1.9;

    const tdee = bmr * multiplier;

    // Adjust calories for goal
    let targetCalories = tdee;
    if (nutritionGoal === "loss") {
      targetCalories = tdee - 500;
      // Floor calories at safe baseline
      const minCalories = gender === "male" ? 1500 : 1200;
      if (targetCalories < minCalories) targetCalories = minCalories;
    } else if (nutritionGoal === "building") {
      targetCalories = tdee + 300;
    }

    return Math.round(targetCalories);
  };

  // Compute final results
  const calorieTarget = calculateCalorieTarget();
  
  // Determine fat percentage
  let finalFatPct = 25;
  if (fatPercentageMethod === "custom") {
    finalFatPct = Math.max(15, Math.min(50, parseFloat(customFatPct) || 25));
  } else {
    if (nutritionGoal === "loss") finalFatPct = 20;
    else if (nutritionGoal === "building") finalFatPct = 30;
    else finalFatPct = 25;
  }

  // Grams/Calories calculations
  const fatCalories = Math.round(calorieTarget * (finalFatPct / 100));
  const fatGrams = Math.round((fatCalories / 9) * 10) / 10;

  // Ranges
  const minFatGrams = Math.round(((calorieTarget * 0.20) / 9) * 10) / 10;
  const maxFatGrams = Math.round(((calorieTarget * 0.35) / 9) * 10) / 10;

  // Limits
  const satFatLimitGrams = Math.round(((calorieTarget * 0.10) / 9) * 10) / 10;
  const transFatLimitGrams = Math.round(((calorieTarget * 0.01) / 9) * 10) / 10;
  const recommendedUnsatGrams = Math.max(0, Math.round((fatGrams - satFatLimitGrams) * 10) / 10);

  // Quick Action: Add current to logs
  const handleAddLog = () => {
    const timestamp = new Date().toLocaleString([], { 
      month: "short", 
      day: "numeric", 
      hour: "2-digit", 
      minute: "2-digit" 
    });

    const newRecord: FatLogRecord = {
      id: Math.random().toString(36).substr(2, 9),
      timestamp,
      calorieGoal: calorieTarget,
      activityLevel: getActivityLabel(activity),
      nutritionGoal: getGoalLabel(nutritionGoal),
      fatPct: finalFatPct,
      fatGrams,
      fatCalories,
      satFatLimitGrams
    };

    saveRecords([newRecord, ...records]);
    showToast("Added target to nutrition logs");
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 3000);
  };

  const handleDeleteRecord = (id: string) => {
    const updated = records.filter(r => r.id !== id);
    saveRecords(updated);
    showToast("Log entry removed");
  };

  const handleClearLogs = () => {
    if (confirm("Are you sure you want to clear all logged fat intake calculations?")) {
      saveRecords([]);
      showToast("All logs cleared");
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 border border-brand-cyan/40 text-brand-cyan px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2 text-sm font-semibold animate-fade-in">
          <Activity className="w-4 h-4 text-brand-cyan animate-pulse" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Tabs */}
      <div className="flex border-b border-brand-border/40 mb-8 max-w-md mx-auto">
        <button
          onClick={() => setActiveTab("calculator")}
          className={`flex-1 py-3 text-sm font-bold flex items-center justify-center gap-2 border-b-2 transition-all cursor-pointer ${
            activeTab === "calculator"
              ? "border-brand-cyan text-brand-cyan font-extrabold"
              : "border-transparent text-gray-400 hover:text-white"
          }`}
        >
          <Calculator className="w-4 h-4" />
          <span>Calculator</span>
        </button>
        <button
          onClick={() => setActiveTab("logger")}
          className={`flex-1 py-3 text-sm font-bold flex items-center justify-center gap-2 border-b-2 transition-all cursor-pointer ${
            activeTab === "logger"
              ? "border-brand-cyan text-brand-cyan font-extrabold"
              : "border-transparent text-gray-400 hover:text-white"
          }`}
        >
          <History className="w-4 h-4" />
          <span>My Logs ({records.length})</span>
        </button>
        <button
          onClick={() => setActiveTab("education")}
          className={`flex-1 py-3 text-sm font-bold flex items-center justify-center gap-2 border-b-2 transition-all cursor-pointer ${
            activeTab === "education"
              ? "border-brand-cyan text-brand-cyan font-extrabold"
              : "border-transparent text-gray-400 hover:text-white"
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Fats Guide</span>
        </button>
      </div>

      {activeTab === "calculator" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Inputs Section */}
          <div className="lg:col-span-6 space-y-6">
            {/* Calorie Method Switch */}
            <div className="bg-slate-950/60 p-4 rounded-xl border border-brand-border/30">
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                Calorie Goal Source
              </label>
              <div className="grid grid-cols-2 gap-2 p-1 bg-slate-900/80 rounded-lg border border-brand-border/20">
                <button
                  type="button"
                  onClick={() => setCalorieMethod("direct")}
                  className={`py-2 text-xs font-bold rounded-md transition-all cursor-pointer ${
                    calorieMethod === "direct"
                      ? "bg-brand-cyan text-slate-950 shadow-md"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  Enter Daily Calories
                </button>
                <button
                  type="button"
                  onClick={() => setCalorieMethod("estimate")}
                  className={`py-2 text-xs font-bold rounded-md transition-all cursor-pointer ${
                    calorieMethod === "estimate"
                      ? "bg-brand-cyan text-slate-950 shadow-md"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  Estimate Calories (TDEE)
                </button>
              </div>
            </div>

            {/* Calorie Input Fields */}
            {calorieMethod === "direct" ? (
              <div className="bg-slate-950/40 p-5 rounded-2xl border border-brand-border/40 space-y-4">
                <div className="flex justify-between items-center">
                  <label htmlFor="directCalorieInput" className="text-sm font-bold text-white flex items-center gap-1.5">
                    <Activity className="w-4 h-4 text-brand-cyan" />
                    <span>Daily Calorie Goal</span>
                  </label>
                  <span className="text-xs text-brand-cyan font-bold font-sans bg-brand-cyan/10 px-2 py-0.5 rounded">
                    {calorieTarget} kcal
                  </span>
                </div>
                <input
                  id="directCalorieInput"
                  type="range"
                  min="1000"
                  max="5000"
                  step="50"
                  value={directCalorieGoal}
                  onChange={(e) => setDirectCalorieGoal(e.target.value)}
                  className="w-full h-2 bg-brand-border/40 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
                />
                <div className="flex justify-between text-[10px] text-gray-500 font-bold">
                  <span>1000 kcal</span>
                  <span>2500 kcal</span>
                  <span>5000 kcal</span>
                </div>
                <div className="mt-2">
                  <input
                    type="number"
                    value={directCalorieGoal}
                    onChange={(e) => setDirectCalorieGoal(e.target.value)}
                    className="w-full bg-slate-900/60 border border-brand-border/40 rounded-xl px-4 py-2.5 text-white font-mono text-sm focus:outline-none focus:border-brand-cyan/80"
                    placeholder="Enter customized daily calories..."
                    min="800"
                    max="10000"
                  />
                </div>
              </div>
            ) : (
              /* Calorie Estimation Form */
              <div className="bg-slate-950/40 p-5 rounded-2xl border border-brand-border/40 space-y-4">
                <h3 className="text-sm font-bold text-white flex items-center gap-1.5 mb-2 pb-2 border-b border-brand-border/20">
                  <Scale className="w-4 h-4 text-brand-cyan" />
                  <span>Calorie Estimator (Mifflin-St Jeor TDEE)</span>
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  {/* Gender */}
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                      Gender
                    </label>
                    <div className="grid grid-cols-2 gap-2 bg-slate-900/60 p-1 rounded-xl border border-brand-border/20">
                      <button
                        type="button"
                        onClick={() => setGender("male")}
                        className={`py-1.5 text-xs font-bold rounded-lg cursor-pointer ${
                          gender === "male" ? "bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/40" : "text-gray-400"
                        }`}
                      >
                        Male
                      </button>
                      <button
                        type="button"
                        onClick={() => setGender("female")}
                        className={`py-1.5 text-xs font-bold rounded-lg cursor-pointer ${
                          gender === "female" ? "bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/40" : "text-gray-400"
                        }`}
                      >
                        Female
                      </button>
                    </div>
                  </div>

                  {/* Age */}
                  <div>
                    <label htmlFor="ageInput" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                      Age (years)
                    </label>
                    <input
                      id="ageInput"
                      type="number"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      className="w-full bg-slate-900/60 border border-brand-border/40 rounded-xl px-3 py-1.5 text-white font-mono text-sm focus:outline-none focus:border-brand-cyan/80"
                      min="10"
                      max="100"
                    />
                  </div>
                </div>

                {/* Weight */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="col-span-2">
                    <label htmlFor="weightInput" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                      Weight
                    </label>
                    <input
                      id="weightInput"
                      type="number"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      className="w-full bg-slate-900/60 border border-brand-border/40 rounded-xl px-3 py-1.5 text-white font-mono text-sm focus:outline-none focus:border-brand-cyan/80"
                      min="20"
                      max="400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                      Unit
                    </label>
                    <select
                      value={weightUnit}
                      onChange={(e) => setWeightUnit(e.target.value as "kg" | "lbs")}
                      className="w-full bg-slate-900/60 border border-brand-border/40 rounded-xl px-2 py-1.5 text-white text-xs font-bold focus:outline-none focus:border-brand-cyan/80 cursor-pointer"
                    >
                      <option value="kg">kg</option>
                      <option value="lbs">lbs</option>
                    </select>
                  </div>
                </div>

                {/* Height */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Height
                    </label>
                    <div className="flex bg-slate-900 border border-brand-border/30 rounded-lg p-0.5">
                      <button
                        type="button"
                        onClick={() => setHeightUnit("cm")}
                        className={`px-2 py-0.5 text-[10px] font-bold rounded cursor-pointer ${
                          heightUnit === "cm" ? "bg-brand-cyan text-slate-950" : "text-gray-400"
                        }`}
                      >
                        Metric (cm)
                      </button>
                      <button
                        type="button"
                        onClick={() => setHeightUnit("ft-in")}
                        className={`px-2 py-0.5 text-[10px] font-bold rounded cursor-pointer ${
                          heightUnit === "ft-in" ? "bg-brand-cyan text-slate-950" : "text-gray-400"
                        }`}
                      >
                        Imperial (ft)
                      </button>
                    </div>
                  </div>

                  {heightUnit === "cm" ? (
                    <input
                      type="number"
                      value={heightCm}
                      onChange={(e) => setHeightCm(e.target.value)}
                      className="w-full bg-slate-900/60 border border-brand-border/40 rounded-xl px-3 py-1.5 text-white font-mono text-sm focus:outline-none focus:border-brand-cyan/80"
                      placeholder="cm"
                      min="50"
                      max="250"
                    />
                  ) : (
                    <div className="grid grid-cols-2 gap-2">
                      <div className="relative">
                        <input
                          type="number"
                          value={heightFt}
                          onChange={(e) => setHeightFt(e.target.value)}
                          className="w-full bg-slate-900/60 border border-brand-border/40 rounded-xl pl-3 pr-8 py-1.5 text-white font-mono text-sm focus:outline-none focus:border-brand-cyan/80"
                          min="3"
                          max="8"
                        />
                        <span className="absolute right-3 top-2 text-xs font-bold text-gray-500">ft</span>
                      </div>
                      <div className="relative">
                        <input
                          type="number"
                          value={heightIn}
                          onChange={(e) => setHeightIn(e.target.value)}
                          className="w-full bg-slate-900/60 border border-brand-border/40 rounded-xl pl-3 pr-8 py-1.5 text-white font-mono text-sm focus:outline-none focus:border-brand-cyan/80"
                          min="0"
                          max="11"
                        />
                        <span className="absolute right-3 top-2 text-xs font-bold text-gray-500">in</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Activity Level */}
                <div>
                  <label htmlFor="activitySelect" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                    Activity Level
                  </label>
                  <select
                    id="activitySelect"
                    value={activity}
                    onChange={(e) => setActivity(e.target.value)}
                    className="w-full bg-slate-900/60 border border-brand-border/40 rounded-xl px-3 py-2 text-white text-sm focus:outline-none focus:border-brand-cyan/80 cursor-pointer"
                  >
                    <option value="sedentary">Sedentary (No exercise)</option>
                    <option value="lightly">Lightly Active (Exercise 1-3 days/wk)</option>
                    <option value="moderately">Moderately Active (Exercise 3-5 days/wk)</option>
                    <option value="very">Very Active (Hard exercise 6-7 days/wk)</option>
                    <option value="extra">Extra Active (Very hard work/physical job)</option>
                  </select>
                </div>

                <div className="bg-brand-cyan/5 border border-brand-cyan/15 rounded-xl p-3 text-xs text-gray-300 flex items-center justify-between">
                  <span>Estimated Daily Calorie Target:</span>
                  <span className="font-bold text-brand-cyan font-mono text-sm">{calorieTarget} kcal</span>
                </div>
              </div>
            )}

            {/* Goals & Settings */}
            <div className="bg-slate-950/40 p-5 rounded-2xl border border-brand-border/40 space-y-4">
              {/* Nutrition Goal */}
              <div>
                <label htmlFor="nutritionGoalSelect" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                  Nutrition Goal
                </label>
                <select
                  id="nutritionGoalSelect"
                  value={nutritionGoal}
                  onChange={(e) => setNutritionGoal(e.target.value)}
                  className="w-full bg-slate-900/60 border border-brand-border/40 rounded-xl px-3 py-2 text-white text-sm focus:outline-none focus:border-brand-cyan/80 cursor-pointer"
                >
                  <option value="maintenance">Weight maintenance (Healthy balance)</option>
                  <option value="loss">Weight loss (Prioritize higher protein/carb deficit)</option>
                  <option value="building">Muscle building (Support hormone & energy demand)</option>
                </select>
              </div>

              {/* Fat Target Percentage Selection */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Fat Percentage Method
                  </label>
                  <div className="flex bg-slate-900 border border-brand-border/30 rounded-lg p-0.5">
                    <button
                      type="button"
                      onClick={() => setFatPercentageMethod("recommended")}
                      className={`px-2.5 py-0.5 text-[10px] font-bold rounded cursor-pointer ${
                        fatPercentageMethod === "recommended" ? "bg-brand-cyan text-slate-950" : "text-gray-400"
                      }`}
                    >
                      Recommended
                    </button>
                    <button
                      type="button"
                      onClick={() => setFatPercentageMethod("custom")}
                      className={`px-2.5 py-0.5 text-[10px] font-bold rounded cursor-pointer ${
                        fatPercentageMethod === "custom" ? "bg-brand-cyan text-slate-950" : "text-gray-400"
                      }`}
                    >
                      Custom Override
                    </button>
                  </div>
                </div>

                {fatPercentageMethod === "recommended" ? (
                  <div className="bg-slate-900/50 border border-brand-border/20 rounded-xl p-3.5 flex justify-between items-center text-xs">
                    <span className="text-gray-300">Default target for {getGoalLabel(nutritionGoal)}:</span>
                    <span className="font-bold text-brand-cyan font-mono text-sm">{finalFatPct}% of total calories</span>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-gray-400">
                      <span>Enter Fat Percentage Target:</span>
                      <span className="font-mono font-bold text-brand-cyan">{customFatPct}%</span>
                    </div>
                    <input
                      type="range"
                      min="15"
                      max="50"
                      step="1"
                      value={customFatPct}
                      onChange={(e) => setCustomFatPct(e.target.value)}
                      className="w-full h-1.5 bg-brand-border/30 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
                    />
                    <div className="flex justify-between text-[10px] text-gray-500 font-bold">
                      <span>15% (Low fat)</span>
                      <span>30% (Standard)</span>
                      <span>50% (High fat / Keto)</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Primary Action Button */}
            <button
              onClick={handleAddLog}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-brand-cyan to-brand-indigo hover:opacity-95 text-white font-bold py-3.5 rounded-xl transition-all shadow-md shadow-brand-cyan/10 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
            >
              <PlusCircle className="w-5 h-5" />
              <span>Log Target & Save Results</span>
            </button>
          </div>

          {/* Outputs Section */}
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-panel border border-brand-border/80 rounded-3xl p-6 md:p-8 relative overflow-hidden bg-gradient-cyber">
              {/* Background glows */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-cyan/10 rounded-full blur-[60px] pointer-events-none" />
              <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-brand-indigo/5 rounded-full blur-[60px] pointer-events-none" />

              <div className="text-center pb-6 border-b border-brand-border/30">
                <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest font-sans px-2.5 py-1 bg-brand-cyan/10 border border-brand-cyan/20 rounded-full inline-block mb-3">
                  Recommended Intake Target
                </span>
                <div className="flex justify-center items-baseline gap-1.5">
                  <span className="font-display font-extrabold text-5xl md:text-6xl text-white tracking-tight">
                    {fatGrams}
                  </span>
                  <span className="font-sans font-bold text-2xl text-brand-cyan">g</span>
                  <span className="text-gray-400 font-medium text-base ml-1">/ day</span>
                </div>
                <p className="text-xs text-gray-400 mt-2 font-medium">
                  Equivalent to <span className="text-white font-bold">{fatCalories} calories</span> from fat per day ({finalFatPct}% of total calories)
                </p>
              </div>

              {/* Healthy Range Visualizer */}
              <div className="py-6 border-b border-brand-border/30 space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-300 font-medium">Standard Daily Fat Range (20% - 35%)</span>
                  <span className="font-bold text-brand-cyan font-mono">{minFatGrams}g - {maxFatGrams}g</span>
                </div>
                
                {/* Visual indicator bar */}
                <div className="relative w-full h-4 bg-slate-900 border border-brand-border/30 rounded-full overflow-hidden">
                  {/* Highlighted healthy range area (20% - 35%) */}
                  <div 
                    className="absolute top-0 bottom-0 bg-brand-cyan/20 border-x border-brand-cyan/35"
                    style={{ left: "20%", right: "30%" }}
                  />
                  {/* Current selected target needle marker */}
                  <div 
                    className="absolute top-0 bottom-0 w-1 bg-brand-cyan shadow-md shadow-brand-cyan/85 rounded-full z-10 transition-all duration-300"
                    style={{ left: `${Math.max(10, Math.min(90, ((finalFatPct - 10) / 40) * 100))}%` }}
                  />
                </div>
                <div className="flex justify-between text-[9px] text-gray-500 font-bold">
                  <span>10% (Low Limit)</span>
                  <span>20% (Healthy Min)</span>
                  <span>35% (Healthy Max)</span>
                  <span>50% (High Limit)</span>
                </div>
              </div>

              {/* Distribution Breakdown Grid */}
              <div className="py-6 space-y-4">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 text-left flex items-center gap-1">
                  <Info className="w-3.5 h-3.5 text-brand-indigo" />
                  <span>Daily Fat Quality Breakdown</span>
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-left">
                  {/* Unsaturated Fats */}
                  <div className="bg-brand-bg/50 border border-brand-border/40 p-4 rounded-2xl flex flex-col justify-between hover:border-brand-cyan/20 transition-colors">
                    <div>
                      <div className="flex justify-between items-start">
                        <span className="text-xs font-bold text-white">Unsaturated Fats</span>
                        <span className="text-[10px] font-bold text-brand-emerald bg-brand-emerald/10 border border-brand-emerald/20 px-2 py-0.5 rounded">
                          Healthy Bulk
                        </span>
                      </div>
                      <p className="text-[10px] text-gray-400 mt-1 leading-normal">
                        Monounsaturated and polyunsaturated oils. Target as your primary source of fats.
                      </p>
                    </div>
                    <div className="flex items-baseline gap-1 mt-4">
                      <span className="text-xl font-bold text-white">{recommendedUnsatGrams}</span>
                      <span className="text-xs font-medium text-gray-400">g / day</span>
                    </div>
                  </div>

                  {/* Saturated Fats */}
                  <div className="bg-brand-bg/50 border border-brand-border/40 p-4 rounded-2xl flex flex-col justify-between hover:border-brand-cyan/20 transition-colors">
                    <div>
                      <div className="flex justify-between items-start">
                        <span className="text-xs font-bold text-white">Saturated Fats</span>
                        <span className="text-[10px] font-bold text-rose-400 bg-rose-400/10 border border-rose-400/20 px-2 py-0.5 rounded">
                          Max Limit
                        </span>
                      </div>
                      <p className="text-[10px] text-gray-400 mt-1 leading-normal">
                        Limit intake to less than 10% of total calories to support cardiovascular health.
                      </p>
                    </div>
                    <div className="flex items-baseline gap-1 mt-4">
                      <span className="text-xl font-bold text-rose-300">&lt; {satFatLimitGrams}</span>
                      <span className="text-xs font-medium text-gray-400">g / day</span>
                    </div>
                  </div>

                  {/* Trans Fats */}
                  <div className="bg-brand-bg/50 border border-brand-border/40 p-4 rounded-2xl md:col-span-2 flex justify-between items-center hover:border-brand-cyan/20 transition-colors">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-white">Trans Fats Limit</span>
                        <span className="text-[10px] font-bold text-rose-400 bg-rose-400/10 border border-rose-400/20 px-1.5 py-0.2 rounded">
                          Avoid
                        </span>
                      </div>
                      <p className="text-[10px] text-gray-400 mt-0.5 leading-normal">
                        Limit to under 1% of calories (WHO). Avoid hydrogenated oils entirely where possible.
                      </p>
                    </div>
                    <div className="flex items-baseline gap-1 ml-4 shrink-0">
                      <span className="text-base font-bold text-rose-300">&lt; {transFatLimitGrams}</span>
                      <span className="text-xs font-medium text-gray-400">g / day</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action row */}
              <div className="mt-4 pt-4 border-t border-brand-border/30 flex justify-between items-center text-xs">
                <span className="text-[10px] text-gray-500 font-medium font-mono">Calorie Target: {calorieTarget} kcal</span>
                <button
                  onClick={handlePrint}
                  className="flex items-center gap-1 hover:underline text-brand-cyan font-bold cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Download Report</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "logger" && (
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <History className="w-5 h-5 text-brand-cyan" />
              <span>Nutrition Goal History Logs</span>
            </h3>
            {records.length > 0 && (
              <button
                onClick={handleClearLogs}
                className="flex items-center gap-1 text-xs text-rose-400 hover:text-rose-300 font-bold hover:underline cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear All Logs</span>
              </button>
            )}
          </div>

          {records.length === 0 ? (
            <div className="glass-panel border border-brand-border/40 rounded-2xl p-12 text-center text-gray-400 space-y-4">
              <Activity className="w-12 h-12 text-gray-600 mx-auto" />
              <div>
                <p className="font-bold text-white text-base">No Saved Fat Targets</p>
                <p className="text-xs text-gray-400 mt-1">Use the calculator tab above to estimate your daily fats and click &quot;Log Target&quot;.</p>
              </div>
            </div>
          ) : (
            <div className="glass-panel border border-brand-border rounded-2xl overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-900 border-b border-brand-border text-gray-300 font-bold">
                      <th className="p-3">Calculated Date</th>
                      <th className="p-3 text-right">Daily Calories</th>
                      <th className="p-3">Nutrition Goal</th>
                      <th className="p-3 text-right">Target Fat %</th>
                      <th className="p-3 text-right">Fat Target (Grams)</th>
                      <th className="p-3 text-right">Sat. Fat Limit</th>
                      <th className="p-3 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brand-border/30 text-gray-300">
                    {records.map((r) => (
                      <tr key={r.id} className="hover:bg-white/[0.02] transition-all">
                        <td className="p-3 font-medium">{r.timestamp}</td>
                        <td className="p-3 text-right font-mono font-bold text-white">{r.calorieGoal} kcal</td>
                        <td className="p-3 text-gray-400 font-medium">{r.nutritionGoal}</td>
                        <td className="p-3 text-right font-mono">{r.fatPct}%</td>
                        <td className="p-3 text-right font-mono font-bold text-brand-cyan">{r.fatGrams}g ({r.fatCalories} kcal)</td>
                        <td className="p-3 text-right font-mono text-rose-300">&lt; {r.satFatLimitGrams}g</td>
                        <td className="p-3 text-center">
                          <button
                            onClick={() => handleDeleteRecord(r.id)}
                            className="text-gray-500 hover:text-rose-400 p-1 transition-colors cursor-pointer"
                            title="Delete entry"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}

      {activeTab === "education" && (
        <div className="max-w-3xl mx-auto space-y-6 text-left text-gray-300 text-sm leading-relaxed font-sans">
          <div className="glass-panel border border-brand-border p-6 rounded-2xl space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-2">
              <FileText className="w-5 h-5 text-brand-cyan" />
              <span>Nutrition Reference Guide</span>
            </h3>

            <div className="space-y-4">
              <h4 className="text-white font-bold text-base">What Is a Fat Intake Calculator?</h4>
              <p>
                A <strong>Fat Intake Calculator</strong> is a nutrition tool that estimates the recommended amount of dietary fat a person may consume daily.
              </p>
              <p>
                Dietary fat is one of the three main macronutrients (Fat, Protein, and Carbohydrates) needed by the body. Each gram of fat provides approximately <strong>9 calories</strong>, making it the most energy-dense macronutrient.
              </p>

              <h4 className="text-white font-bold text-base pt-2">Why Is Dietary Fat Important?</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Energy Source:</strong> Fat provides concentrated energy for the body and protects vital organs.</li>
                <li><strong>Vitamin Absorption:</strong> Fat-soluble vitamins require dietary fat for proper absorption, including Vitamin A, D, E, and K.</li>
                <li><strong>Hormone Support:</strong> Healthy fat intake supports normal hormone production and cellular function.</li>
                <li><strong>Brain and Cell Health:</strong> Fats are important components of cell membranes and support cognitive processes.</li>
              </ul>

              <h4 className="text-white font-bold text-base pt-2">Types of Dietary Fat</h4>
              <div className="space-y-3">
                <div className="bg-slate-900/40 p-3 rounded-lg border border-brand-border/30">
                  <p className="font-bold text-brand-emerald">Unsaturated Fats (Healthy)</p>
                  <p className="text-xs text-gray-400 mt-1">
                    Considered heart-healthy fats. Found in plant-based sources like avocados, olive oil, seeds, nuts, and fatty fish (salmon).
                  </p>
                </div>
                <div className="bg-slate-900/40 p-3 rounded-lg border border-brand-border/30">
                  <p className="font-bold text-amber-300">Saturated Fats (Limit)</p>
                  <p className="text-xs text-gray-400 mt-1">
                    Found in dairy products (butter, cheese), meats, and tropical oils (coconut oil). Consumed in moderation; AHA recommends limiting to &lt; 10% of total calories.
                  </p>
                </div>
                <div className="bg-slate-900/40 p-3 rounded-lg border border-brand-border/30">
                  <p className="font-bold text-rose-400">Trans Fats (Avoid)</p>
                  <p className="text-xs text-gray-400 mt-1">
                    Processed fats commonly found in fried foods and packaged baked goods. Increase health risks and should be minimized or avoided completely.
                  </p>
                </div>
              </div>

              <h4 className="text-white font-bold text-base pt-2">How Does the Calculator Work?</h4>
              <p>
                The calculator calculates fat targets by using your calorie budget and converting a percentage allocation:
              </p>
              <div className="bg-slate-900 p-4 rounded-xl font-mono text-xs text-brand-cyan text-center border border-brand-border/20">
                Calories from Fat = Total Calories × Fat Percentage<br/>
                Daily Fat Grams = Calories from Fat ÷ 9
              </div>
              <p className="text-xs text-gray-400 italic">
                Example: On a 2000 calorie diet with a 25% target fat allocation: (2000 × 0.25) = 500 calories from fat. 500 ÷ 9 = 55.6 grams of daily fat intake.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
