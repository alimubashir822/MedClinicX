"use client";

import { useState, useEffect } from "react";
import { 
  Activity, 
  Calculator, 
  BookOpen, 
  Plus, 
  Trash2, 
  FileText, 
  AlertTriangle,
  ArrowRight,
  Sparkles,
  Info,
  Droplet,
  GlassWater,
  CheckCircle
} from "lucide-react";

interface DrinkRecord {
  id: string;
  amount: number; // mL
  type: string; // e.g. "Glass", "Bottle", "Large Bottle"
  timestamp: string;
}

export default function WaterCalculatorClient() {
  const [activeTab, setActiveTab] = useState<"calculator" | "logger" | "education">("calculator");
  
  // Calculator States
  const [weight, setWeight] = useState<string>("70");
  const [weightUnit, setWeightUnit] = useState<"kg" | "lbs">("kg");
  const [age, setAge] = useState<string>("");
  const [activityLevel, setActivityLevel] = useState<"sedentary" | "light" | "active" | "veryActive">("light");
  const [exerciseTime, setExerciseTime] = useState<string>("30");
  const [climate, setClimate] = useState<"temperate" | "hot">("temperate");
  const [lifeStage, setLifeStage] = useState<"none" | "pregnancy" | "breastfeeding">("none");

  // Logger States
  const [drinkRecords, setDrinkRecords] = useState<DrinkRecord[]>([
    { id: "1", amount: 250, type: "Glass of Water", timestamp: "Morning - 08:30 AM" },
    { id: "2", amount: 500, type: "Bottle of Water", timestamp: "Midday - 12:45 PM" }
  ]);
  const [customAddValue, setCustomAddValue] = useState<string>("");

  // Goal calculation logic
  const calculateGoal = () => {
    let weightKg = parseFloat(weight) || 70;
    if (weightUnit === "lbs") {
      weightKg = weightKg * 0.45359237;
    }

    // Baseline: 35 mL per kg
    let targetMl = weightKg * 35;

    // Activity Level offset
    if (activityLevel === "light") {
      targetMl += 150;
    } else if (activityLevel === "active") {
      targetMl += 300;
    } else if (activityLevel === "veryActive") {
      targetMl += 500;
    }

    // Exercise duration offset: +350 mL per 30 mins
    const exerciseMins = parseFloat(exerciseTime) || 0;
    targetMl += (exerciseMins / 30) * 350;

    // Climate offset: Hot/Humid adds 600 mL
    if (climate === "hot") {
      targetMl += 600;
    }

    // Life Stage offset: Pregnancy (+300 mL), Breastfeeding (+700 mL)
    if (lifeStage === "pregnancy") {
      targetMl += 300;
    } else if (lifeStage === "breastfeeding") {
      targetMl += 700;
    }

    const ml = Math.round(targetMl);
    const oz = Math.round((ml / 29.5735) * 10) / 10;
    const cups = Math.round((oz / 8) * 10) / 10;

    return {
      ml,
      liters: Math.round((ml / 1000) * 100) / 100,
      oz,
      cups
    };
  };

  const dailyGoal = calculateGoal();

  // Progress calculations
  const totalDrank = drinkRecords.reduce((sum, r) => sum + r.amount, 0);
  const progressPercent = Math.min(100, Math.round((totalDrank / dailyGoal.ml) * 100));
  const isGoalAchieved = totalDrank >= dailyGoal.ml;

  // Logging handlers
  const handleAddQuickDrink = (amount: number, typeLabel: string) => {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const newRecord: DrinkRecord = {
      id: Date.now().toString(),
      amount,
      type: typeLabel,
      timestamp: `Logged - ${time}`
    };
    setDrinkRecords(prev => [newRecord, ...prev]);
  };

  const handleAddCustomDrink = (e: React.FormEvent) => {
    e.preventDefault();
    const val = parseInt(customAddValue);
    if (!isNaN(val) && val > 0 && val < 5000) {
      handleAddQuickDrink(val, "Custom Drink");
      setCustomAddValue("");
    }
  };

  const handleDeleteRecord = (id: string) => {
    setDrinkRecords(prev => prev.filter(r => r.id !== id));
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full py-4 print:p-0">
      {/* Tabs selector */}
      <div className="flex border-b border-brand-border/60 mb-8 print:hidden justify-center sm:justify-start">
        {[
          { id: "calculator", label: "Intake Calculator", icon: <Calculator className="w-4 h-4" /> },
          { id: "logger", label: "Hydration Progress Log", icon: <GlassWater className="w-4 h-4" /> },
          { id: "education", label: "Clinical Hydration Guide", icon: <BookOpen className="w-4 h-4" /> }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 px-5 py-3 text-xs font-bold border-b-2 transition-all cursor-pointer ${
              activeTab === tab.id
                ? "border-brand-cyan text-brand-cyan font-extrabold"
                : "border-transparent text-gray-400 hover:text-white"
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* TAB 1: CALCULATOR */}
      {activeTab === "calculator" && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left panel parameters form */}
          <div className="md:col-span-5 glass-panel border border-brand-border rounded-2xl p-6 space-y-6">
            <h3 className="text-white font-semibold font-display text-sm tracking-wide uppercase flex items-center gap-2 border-b border-brand-border/50 pb-3">
              <Calculator className="w-4 h-4 text-brand-cyan" />
              <span>Personal Details</span>
            </h3>

            {/* Weight inputs */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Body Weight</label>
                <div className="flex bg-brand-bg/50 p-0.5 rounded-lg border border-brand-border text-[9px] font-bold">
                  <button
                    onClick={() => {
                      setWeightUnit("kg");
                      const val = parseFloat(weight);
                      if (!isNaN(val)) setWeight(Math.round(val * 0.453592).toString());
                    }}
                    className={`px-2 py-1 rounded transition-all cursor-pointer ${weightUnit === "kg" ? "bg-brand-cyan text-brand-bg font-extrabold" : "text-gray-400 hover:text-white"}`}
                  >
                    kg
                  </button>
                  <button
                    onClick={() => {
                      setWeightUnit("lbs");
                      const val = parseFloat(weight);
                      if (!isNaN(val)) setWeight(Math.round(val / 0.453592).toString());
                    }}
                    className={`px-2 py-1 rounded transition-all cursor-pointer ${weightUnit === "lbs" ? "bg-brand-cyan text-brand-bg font-extrabold" : "text-gray-400 hover:text-white"}`}
                  >
                    lbs
                  </button>
                </div>
              </div>
              <div className="relative">
                <input
                  type="number"
                  min="20"
                  max="400"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-3 text-lg font-bold text-white focus:outline-none focus:border-brand-cyan"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-xs text-gray-500">{weightUnit}</span>
              </div>
            </div>

            {/* Age input */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block">Age (Optional)</label>
              <input
                type="number"
                min="1"
                max="120"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Enter age"
                className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-brand-cyan"
              />
            </div>

            {/* Activity Level Selector */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block">Daily Activity Level</label>
              <select
                value={activityLevel}
                onChange={(e) => setActivityLevel(e.target.value as any)}
                className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-brand-cyan"
              >
                <option value="sedentary">Sedentary (desk job, minimal walk)</option>
                <option value="light">Lightly Active (light exercise/walks)</option>
                <option value="active">Active (regular exercise, active job)</option>
                <option value="veryActive">Very Active (heavy physical work, athletic)</option>
              </select>
            </div>

            {/* Exercise duration */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider font-display">Daily Exercise duration</label>
                <span className="text-[10px] font-mono text-gray-500">{exerciseTime} mins</span>
              </div>
              <input
                type="range"
                min="0"
                max="180"
                step="15"
                value={exerciseTime}
                onChange={(e) => setExerciseTime(e.target.value)}
                className="w-full h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
              />
              <div className="flex justify-between text-[8px] font-bold text-gray-600 uppercase">
                <span>0m (None)</span>
                <span>60m (Active)</span>
                <span>120m+ (Athletic)</span>
              </div>
            </div>

            {/* Climate Selection */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Climate / Environment</label>
              <div className="grid grid-cols-2 gap-2 bg-brand-bg/50 p-1 rounded-xl border border-brand-border">
                <button
                  onClick={() => setClimate("temperate")}
                  className={`py-2 text-[10px] font-bold rounded-lg transition-all cursor-pointer ${
                    climate === "temperate"
                      ? "bg-brand-cyan text-brand-bg shadow-sm"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Temperate / Moderate
                </button>
                <button
                  onClick={() => setClimate("hot")}
                  className={`py-2 text-[10px] font-bold rounded-lg transition-all cursor-pointer ${
                    climate === "hot"
                      ? "bg-brand-cyan text-brand-bg shadow-sm"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Hot / Dry / Humid
                </button>
              </div>
            </div>

            {/* Life Stage */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Special Life Stages</label>
              <select
                value={lifeStage}
                onChange={(e) => setLifeStage(e.target.value as any)}
                className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-brand-cyan"
              >
                <option value="none">Standard Adult Needs</option>
                <option value="pregnancy">Pregnancy (+300 mL / 10 oz)</option>
                <option value="breastfeeding">Breastfeeding (+700 mL / 24 oz)</option>
              </select>
            </div>
          </div>

          {/* Right panel target results */}
          <div className="md:col-span-7 space-y-6">
            {/* Main Result Card */}
            <div className="glass-panel border border-brand-border rounded-2xl p-8 relative overflow-hidden bg-gradient-to-br from-brand-cyan/5 via-transparent to-transparent">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brand-cyan/10 to-transparent pointer-events-none" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
                {/* Left side metric summary */}
                <div className="text-center sm:text-left space-y-2">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1 justify-center sm:justify-start">
                    <Droplet className="w-3.5 h-3.5 text-brand-cyan animate-bounce" />
                    <span>Daily Hydration Goal</span>
                  </p>
                  <div className="space-y-1">
                    <h2 className="text-5xl font-display font-extrabold text-white">
                      {dailyGoal.liters} <span className="text-lg font-bold text-gray-500">Liters</span>
                    </h2>
                    <p className="text-lg font-semibold text-brand-cyan">
                      {dailyGoal.ml} <span className="text-xs text-gray-500">mL</span>
                    </p>
                  </div>
                </div>

                {/* Right side imperial summary */}
                <div className="text-center sm:text-right border-t sm:border-t-0 sm:border-l border-brand-border/60 pt-6 sm:pt-0 sm:pl-8 space-y-2">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Imperial Volumes</p>
                  <div>
                    <h2 className="text-4xl font-display font-extrabold text-white">
                      {dailyGoal.cups} <span className="text-base font-bold text-gray-500">Cups</span>
                    </h2>
                    <p className="text-sm font-semibold text-brand-cyan mt-1">
                      {dailyGoal.oz} <span className="text-[10px] text-gray-500">Ounces (oz)</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Progress visualizer preview */}
              <div className="mt-8 pt-6 border-t border-brand-border/40 text-xs text-gray-400 flex flex-col sm:flex-row justify-between items-center gap-3">
                <span className="flex items-center gap-1.5">
                  <Info className="w-4 h-4 text-brand-cyan shrink-0" />
                  Calculated based on clinical hydration guidelines (35mL/kg).
                </span>
                <button
                  onClick={() => setActiveTab("logger")}
                  className="inline-flex items-center gap-1 text-brand-cyan hover:underline font-bold cursor-pointer text-xs"
                >
                  <span>Go to Logger Tab</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Quick Education Card */}
            <div className="glass-panel border border-brand-border rounded-2xl p-6 bg-white/[0.01] space-y-3">
              <div className="flex items-center justify-between text-[10px] text-gray-500 border-b border-brand-border/40 pb-3">
                <span className="font-bold uppercase tracking-wider flex items-center gap-1.5 text-brand-cyan">
                  <Activity className="w-3.5 h-3.5" /> Clinical Guidance Target
                </span>
                <span>Med Clinic X Tools</span>
              </div>
              <p className="text-base text-gray-300 leading-relaxed">
                Adequate hydration maintains body temperature, helps digest food, lubricates joints, and filters cellular wastes. Your baseline increases significantly during workouts, hot weather, and nursing stages to replenish perspiration losses.
              </p>
              <div className="pt-2 flex justify-between items-center text-xs text-brand-cyan font-bold">
                <span>* One standard glass is calculated as 250mL (8.4 oz).</span>
                <button 
                  onClick={handlePrint}
                  className="flex items-center gap-1 hover:underline cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Download Daily Report</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: PROGRESS LOGGER */}
      {activeTab === "logger" && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left panel logger controllers */}
          <div className="md:col-span-5 glass-panel border border-brand-border rounded-2xl p-6 space-y-6">
            <h3 className="text-white font-semibold font-display text-sm tracking-wide uppercase flex items-center gap-2 border-b border-brand-border/50 pb-3">
              <Plus className="w-4 h-4 text-brand-cyan" />
              <span>Log Water Intake</span>
            </h3>

            {/* Quick Add Buttons */}
            <div className="space-y-3">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Quick Log Fluid Containers</label>
              <div className="grid grid-cols-1 gap-2.5">
                {[
                  { amount: 250, label: "Glass of Water (250 mL)", desc: "Standard small glass (~8.4 oz)" },
                  { amount: 500, label: "Bottle of Water (500 mL)", desc: "Standard plastic bottle (~17 oz)" },
                  { amount: 750, label: "Large Bottle (750 mL)", desc: "Sports hydration container (~25 oz)" }
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAddQuickDrink(item.amount, item.label.split(" (")[0])}
                    className="w-full glass-panel border border-brand-border/60 hover:border-brand-cyan/40 p-3 rounded-xl flex items-center justify-between text-left transition-all hover:scale-[1.01] cursor-pointer group"
                  >
                    <div>
                      <p className="text-xs font-bold text-white group-hover:text-brand-cyan transition-colors">{item.label}</p>
                      <p className="text-[9px] text-gray-500 mt-0.5">{item.desc}</p>
                    </div>
                    <span className="text-[10px] font-extrabold text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/20 px-2.5 py-1 rounded-lg">
                      + Add
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Entry Form */}
            <form onSubmit={handleAddCustomDrink} className="space-y-3 border-t border-brand-border/40 pt-4">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block">Custom Volume Entry</label>
              <div className="relative flex gap-2">
                <div className="relative flex-grow">
                  <input
                    type="number"
                    min="50"
                    max="3000"
                    required
                    value={customAddValue}
                    onChange={(e) => setCustomAddValue(e.target.value)}
                    placeholder="Enter custom mL"
                    className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-[10px] text-gray-500">mL</span>
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-brand-cyan to-brand-indigo hover:opacity-95 text-white font-bold text-xs px-4 rounded-xl transition-all shadow-md cursor-pointer whitespace-nowrap"
                >
                  Log Custom
                </button>
              </div>
            </form>
          </div>

          {/* Right panel hydration tracking progress indicator */}
          <div className="md:col-span-7 space-y-6">
            {/* Dynamic Tracker Progress */}
            <div className={`glass-panel border rounded-2xl p-8 relative overflow-hidden transition-all duration-500 ${
              isGoalAchieved 
                ? "border-brand-cyan/50 bg-brand-cyan/5 shadow-lg shadow-brand-cyan/5" 
                : "border-brand-border"
            }`}>
              
              {isGoalAchieved && (
                <div className="absolute top-2 right-2 flex items-center gap-1.5 bg-brand-cyan/20 border border-brand-cyan/35 text-brand-cyan text-[9px] font-extrabold px-3 py-1 rounded-full animate-bounce">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>DAILY GOAL COMPLETED!</span>
                </div>
              )}

              <div className="flex flex-col items-center text-center space-y-4">
                <p className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest">Logged Progress Tracker</p>
                
                {/* Circular / Large Bar Progress Graphic */}
                <div className="relative w-40 h-40 flex items-center justify-center">
                  {/* Outer circle layout */}
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="80"
                      cy="80"
                      r="65"
                      stroke="rgba(255, 255, 255, 0.03)"
                      strokeWidth="10"
                      fill="transparent"
                    />
                    <circle
                      cx="80"
                      cy="80"
                      r="65"
                      stroke="#06b6d4"
                      strokeWidth="10"
                      fill="transparent"
                      strokeDasharray={408.4}
                      strokeDashoffset={408.4 - (408.4 * progressPercent) / 100}
                      className="transition-all duration-700 ease-out"
                    />
                  </svg>
                  
                  {/* Inner text content */}
                  <div className="absolute flex flex-col items-center justify-center">
                    <h2 className="text-3xl font-display font-extrabold text-white leading-none">
                      {progressPercent}%
                    </h2>
                    <p className="text-[9px] text-gray-500 uppercase font-bold tracking-wider mt-1.5">Goal Progress</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8 w-full border-t border-brand-border/40 pt-4 mt-2">
                  <div className="text-center border-r border-brand-border/40">
                    <p className="text-[9px] text-gray-500 uppercase font-bold tracking-wider mb-0.5">Total Logged</p>
                    <p className="text-lg font-extrabold text-white">
                      {totalDrank} <span className="text-[10px] text-brand-cyan font-bold">mL</span>
                    </p>
                    <p className="text-[9px] text-gray-500">
                      {Math.round((totalDrank / 29.5735) * 10) / 10} oz
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-[9px] text-gray-500 uppercase font-bold tracking-wider mb-0.5">Calculated Target</p>
                    <p className="text-lg font-extrabold text-white">
                      {dailyGoal.ml} <span className="text-[10px] text-gray-500">mL</span>
                    </p>
                    <p className="text-[9px] text-gray-500">
                      {dailyGoal.oz} oz
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Log List */}
            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Hydration Entry Log</span>
                {drinkRecords.length > 0 && (
                  <button
                    onClick={() => setDrinkRecords([])}
                    className="text-[9px] font-semibold text-rose-400 hover:text-rose-300 transition-colors cursor-pointer"
                  >
                    Clear Log List
                  </button>
                )}
              </div>

              <div className="space-y-1.5 max-h-[160px] overflow-y-auto pr-1">
                {drinkRecords.length > 0 ? (
                  drinkRecords.map((record) => (
                    <div
                      key={record.id}
                      className="bg-slate-900/60 border border-brand-border rounded-xl p-3 flex justify-between items-center text-[10px] group hover:border-brand-cyan/20 transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan">
                          <Droplet className="w-4.5 h-4.5 shrink-0" />
                        </div>
                        <div>
                          <p className="font-bold text-white">{record.type} ({record.amount} mL)</p>
                          <p className="text-[8px] text-gray-500 mt-0.5">{record.timestamp} &bull; +{Math.round((record.amount / 29.5735) * 10) / 10} oz</p>
                        </div>
                      </div>
                      <button
                        onClick={() => handleDeleteRecord(record.id)}
                        className="text-gray-500 hover:text-rose-400 p-1 rounded transition-colors opacity-0 group-hover:opacity-100 cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))
                ) : (
                  <div className="glass-panel border border-brand-border rounded-xl p-8 text-center text-gray-500 text-xs">
                    No hydration records logged today. Click quick log options above to start tracking!
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: REFERENCE & EDUCATION */}
      {activeTab === "education" && (
        <div className="glass-panel border border-brand-border rounded-2xl p-6 space-y-6">
          <h3 className="text-white font-semibold font-display text-sm tracking-wide uppercase flex items-center gap-2 border-b border-brand-border/50 pb-3">
            <BookOpen className="w-4 h-4 text-brand-cyan" />
            <span>Hydration & Urine Color Reference Guide</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-base text-gray-300 leading-relaxed">
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-bold text-white text-lg">Why Hydration Volume Matters</h4>
                <p>
                  Our body consists of roughly 60% water, making consistent daily fluid intake vital for cellular integrity. Adequate water supports temperature regulation, filters toxic metabolites through kidneys, aids digestion patterns, and lubricates joints.
                </p>
                <p>
                  Relying solely on "feeling thirsty" is often insufficient. Mild dehydration can decrease cognitive alertness, cause fatigue spikes, prompt muscle cramps, and increase heart rate variables.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-white text-lg">Hydration Benefits Summary</h4>
                <ul className="list-none pl-0 space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full mt-2 shrink-0" />
                    <span><strong>Cognitive Performance:</strong> Hydration prevents head aches, fatigue, and memory fog.</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full mt-2 shrink-0" />
                    <span><strong>Physical Stamina:</strong> Keeps joint cartilage cushions hydrated, preserving flexibility index.</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full mt-2 shrink-0" />
                    <span><strong>Metabolic Assist:</strong> Facilitates kidney filtration and gastrointestinal digestion.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Urine Hydration Color Visual Chart */}
            <div className="space-y-4">
              <div className="space-y-3">
                <h4 className="font-bold text-white text-lg">Urine Color Hydration Chart</h4>
                <p className="text-sm">
                  Use this visual chart to screen your hydration state. Healthy urine is pale straw or transparent yellow.
                </p>
                
                <div className="space-y-2.5 mt-4">
                  {[
                    { color: "bg-amber-50 border-yellow-100", label: "Pale Straw / Clear", status: "Optimal Hydration", desc: "You are drinking sufficient water. Keep it up!" },
                    { color: "bg-yellow-100 border-yellow-200", label: "Transparent Yellow", status: "Good Hydration", desc: "Fluid intake is appropriate." },
                    { color: "bg-yellow-300 border-yellow-400", label: "Dark Yellow", status: "Mild Dehydration", desc: "Drink a glass of water now to restore hydration state." },
                    { color: "bg-amber-500 border-amber-600", label: "Amber / Orange", status: "Severe Dehydration", desc: "Fluid levels are critically low. Rehydrate immediately. Consult a clinician if prolonged." }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-slate-900/40 border border-brand-border/40 rounded-xl p-3">
                      <div className={`w-8 h-8 rounded-full border shrink-0 ${item.color}`} />
                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <p className="text-xs font-bold text-white">{item.label}</p>
                          <span className={`text-[8px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded border ${
                            idx < 2 ? "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" :
                            idx === 2 ? "text-amber-400 bg-amber-500/10 border-amber-500/20" :
                            "text-rose-400 bg-rose-500/10 border-rose-500/20"
                          }`}>
                            {item.status}
                          </span>
                        </div>
                        <p className="text-[10px] text-gray-500 mt-0.5 leading-normal">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-brand-cyan/5 border border-brand-cyan/20 rounded-xl p-4 flex gap-3 mt-4">
                <AlertTriangle className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h5 className="font-bold text-white text-[11px] uppercase tracking-wider">Disclaimer</h5>
                  <p className="text-base text-gray-400 leading-normal">
                    This calculator is for educational purposes. Athletes, people with renal conditions, congestive heart failure, or specific prescription guidelines should consult their primary physician to determine safe customized fluid restrictions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Printable Report Layout */}
      <div className="hidden print:block text-black bg-white p-8 space-y-6 font-sans">
        <div className="border-b border-gray-300 pb-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 font-display">Daily Hydration Assessment</h1>
            <p className="text-xs text-gray-500">Med Clinic X Clinical Hydration Brief</p>
          </div>
          <Droplet className="w-8 h-8 text-cyan-600" />
        </div>

        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <h3 className="font-bold text-gray-700 uppercase text-xs mb-1">Input Profile Data</h3>
            <p><strong>Input Weight:</strong> {weight} {weightUnit}</p>
            {age && <p><strong>Input Age:</strong> {age} years</p>}
            <p><strong>Activity Level:</strong> {activityLevel}</p>
            <p><strong>Active Workout Time:</strong> {exerciseTime} mins/day</p>
            <p><strong>Climate Environment:</strong> {climate === "hot" ? "Hot / Humid" : "Temperate"}</p>
            <p><strong>Nursing/Maternity Offset:</strong> {lifeStage !== "none" ? lifeStage : "None"}</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-700 uppercase text-xs mb-1">Hydration Targets</h3>
            <p><strong>Recommended Intake:</strong> {dailyGoal.liters} Liters ({dailyGoal.ml} mL)</p>
            <p><strong>Imperial Fluid Equivalent:</strong> {dailyGoal.cups} Cups ({dailyGoal.oz} oz)</p>
          </div>
        </div>

        {drinkRecords.length > 0 && (
          <div className="space-y-2">
            <h3 className="font-bold text-gray-800 text-xs">Self-Reported Logging Journal</h3>
            <p className="text-xs">Logged count: {drinkRecords.length} items &bull; Total Drank: {totalDrank} mL / {dailyGoal.ml} mL ({progressPercent}% Achieved)</p>
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-gray-200 text-gray-600">
                  <th className="py-1">Drink Type</th>
                  <th className="py-1">Logged Volume</th>
                  <th className="py-1">Timestamp</th>
                </tr>
              </thead>
              <tbody>
                {drinkRecords.map((r, i) => (
                  <tr key={i} className="border-b border-gray-100">
                    <td className="py-1">{r.type}</td>
                    <td className="py-1">{r.amount} mL</td>
                    <td className="py-1">{r.timestamp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="pt-8 border-t border-gray-200 text-[10px] text-gray-500 text-center space-y-1">
          <p>This report is generated by Med Clinic X calculators. Consult a medical provider before making major dietary adjustments.</p>
          <p>&copy; {new Date().getFullYear()} Med Clinic X Inc. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
