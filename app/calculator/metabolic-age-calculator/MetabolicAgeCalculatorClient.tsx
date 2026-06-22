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
  TrendingDown,
  TrendingUp,
  Smile,
  Moon,
  Clock,
  Heart,
  Scale
} from "lucide-react";

interface HistoryRecord {
  id: string;
  timestamp: string;
  chronologicalAge: number;
  metabolicAge: number;
  ageDifference: number;
  gender: string;
  weight: number;
  weightUnit: string;
  healthLevel: string;
}

export default function MetabolicAgeCalculatorClient() {
  const [activeTab, setActiveTab] = useState<"calculator" | "logger" | "education">("calculator");
  
  // Input States
  const [gender, setGender] = useState<"male" | "female">("male");
  const [age, setAge] = useState<string>("30");
  const [weight, setWeight] = useState<string>("70");
  const [weightUnit, setWeightUnit] = useState<"kg" | "lbs">("kg");
  const [heightUnit, setHeightUnit] = useState<"cm" | "ft-in">("cm");
  const [heightCm, setHeightCm] = useState<string>("175");
  const [heightFt, setHeightFt] = useState<string>("5");
  const [heightIn, setHeightIn] = useState<string>("9");
  const [activity, setActivity] = useState<string>("moderately");

  // Optional Health & Lifestyle States
  const [showOptional, setShowOptional] = useState<boolean>(false);
  const [bodyFat, setBodyFat] = useState<string>("");
  const [waistCircumference, setWaistCircumference] = useState<string>("");
  const [waistUnit, setWaistUnit] = useState<"cm" | "in">("cm");
  const [restingHeartRate, setRestingHeartRate] = useState<string>("");
  const [sleepHours, setSleepHours] = useState<string>("");
  const [stress, setStress] = useState<string>("moderate");

  // Log Records
  const [records, setRecords] = useState<HistoryRecord[]>([]);

  // Load records from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("medclinicx_metabolic_age_logs");
    if (saved) {
      try {
        setRecords(JSON.parse(saved));
      } catch (e) {
        console.error("Error reading metabolic logs", e);
      }
    } else {
      // Set a default record to populate
      setRecords([
        {
          id: "1",
          timestamp: "Initial Assessment",
          chronologicalAge: 35,
          metabolicAge: 32,
          ageDifference: -3,
          gender: "male",
          weight: 75,
          weightUnit: "kg",
          healthLevel: "Good"
        }
      ]);
    }
  }, []);

  // Save records to localStorage
  const saveRecords = (newRecords: HistoryRecord[]) => {
    setRecords(newRecords);
    localStorage.setItem("medclinicx_metabolic_age_logs", JSON.stringify(newRecords));
  };

  // Calculations
  const calculateMetabolicAgeData = () => {
    const chronologicalAge = parseFloat(age) || 30;
    let weightKg = parseFloat(weight) || 70;
    if (weightUnit === "lbs") {
      weightKg = weightKg * 0.45359237;
    }

    let hCm = parseFloat(heightCm) || 175;
    if (heightUnit === "ft-in") {
      const ft = parseFloat(heightFt) || 5;
      const inch = parseFloat(heightIn) || 0;
      hCm = (ft * 12 + inch) * 2.54;
    }

    // 1. Mifflin-St Jeor baseline BMR
    const genderOffset = gender === "male" ? 5 : -161;
    const baselineBmr = 10 * weightKg + 6.25 * hCm - 5 * chronologicalAge + genderOffset;

    // 2. Body composition effect on BMR
    let actualBmr = baselineBmr;
    let isKatchUsed = false;
    let fatPct = 0;
    
    const inputFat = parseFloat(bodyFat);
    if (!isNaN(inputFat) && inputFat > 0 && inputFat < 100) {
      isKatchUsed = true;
      fatPct = inputFat;
      const lbm = weightKg * (1 - fatPct / 100);
      actualBmr = 370 + 21.6 * lbm;
    } else {
      // Estimate fat percentage based on BMI and Activity adjustments
      const heightM = hCm / 100;
      const bmi = weightKg / (heightM * heightM);
      const calculatedFatPct = gender === "male"
        ? Math.max(5, Math.min(60, 1.20 * bmi + 0.23 * chronologicalAge - 16.2))
        : Math.max(8, Math.min(70, 1.20 * bmi + 0.23 * chronologicalAge - 5.4));
      
      let activityFatOffset = 0;
      if (activity === "sedentary") activityFatOffset = 2.5;
      else if (activity === "very") activityFatOffset = -2;
      else if (activity === "extra") activityFatOffset = -4;

      fatPct = Math.max(4, Math.min(75, calculatedFatPct + activityFatOffset));
    }

    // Compute difference in BMR and impact on age
    // A faster metabolism (higher BMR) decreases metabolic age; a slower metabolism increases it.
    // 25 kcal/day deviation corresponds roughly to 1 year of metabolic age offset.
    let bmrAgeDelta = (baselineBmr - actualBmr) / 25;
    // Limit range of baseline BMR delta to +/- 8 years to maintain physiological safety
    bmrAgeDelta = Math.max(-8, Math.min(8, bmrAgeDelta));

    // 3. Activity Level impact on metabolic age
    let activityDelta = 0;
    switch (activity) {
      case "sedentary": activityDelta = 2.5; break;
      case "light": activityDelta = 0.5; break;
      case "moderately": activityDelta = -1.5; break;
      case "very": activityDelta = -3.5; break;
      case "extra": activityDelta = -5.0; break;
    }

    // 4. Optional Lifestyle impact factors
    let sleepDelta = 0;
    const sleepHrs = parseFloat(sleepHours);
    if (!isNaN(sleepHrs) && sleepHrs > 0) {
      if (sleepHrs < 6) sleepDelta = 1.5;
      else if (sleepHrs >= 6 && sleepHrs < 7) sleepDelta = 0.5;
      else if (sleepHrs >= 7 && sleepHrs <= 9) sleepDelta = -1.0;
      else if (sleepHrs > 9) sleepDelta = 0.5;
    }

    let stressDelta = 0;
    if (stress === "high") stressDelta = 1.5;
    else if (stress === "low") stressDelta = -1.0;

    let rhrDelta = 0;
    const rhr = parseFloat(restingHeartRate);
    if (!isNaN(rhr) && rhr > 0) {
      if (rhr > 80) rhrDelta = 1.5;
      else if (rhr < 60) rhrDelta = -1.5;
    }

    let waistDelta = 0;
    const wc = parseFloat(waistCircumference);
    if (!isNaN(wc) && wc > 0) {
      let wcCm = wc;
      if (waistUnit === "in") wcCm = wc * 2.54;
      if (gender === "male" && wcCm > 102) waistDelta = 2.0;
      if (gender === "female" && wcCm > 88) waistDelta = 2.0;
    }

    // Combine factors
    const estimatedMetAge = chronologicalAge + bmrAgeDelta + activityDelta + sleepDelta + stressDelta + rhrDelta + waistDelta;
    
    // Enforce limits: metabolic age cannot deviate by more than +/- 15 years from actual age.
    // Absolute limits: Minimum 18, Maximum 90.
    const lowerBound = Math.max(18, chronologicalAge - 15);
    const upperBound = Math.min(90, chronologicalAge + 15);
    const finalMetabolicAge = Math.max(lowerBound, Math.min(upperBound, Math.round(estimatedMetAge)));
    const ageDifference = finalMetabolicAge - chronologicalAge;

    // Classify Health Level
    let healthLevel: "Excellent" | "Good" | "Average" | "Attention Required" = "Average";
    if (ageDifference <= -5) {
      healthLevel = "Excellent";
    } else if (ageDifference <= -1) {
      healthLevel = "Good";
    } else if (ageDifference <= 3) {
      healthLevel = "Average";
    } else {
      healthLevel = "Attention Required";
    }

    return {
      metabolicAge: finalMetabolicAge,
      ageDifference,
      healthLevel,
      baselineBmr: Math.round(baselineBmr),
      actualBmr: Math.round(actualBmr),
      fatPct: Math.round(fatPct * 10) / 10,
      isKatchUsed,
      breakdown: {
        bmr: Math.round(bmrAgeDelta * 10) / 10,
        activity: activityDelta,
        sleep: sleepDelta,
        stress: stressDelta,
        rhr: rhrDelta,
        waist: waistDelta
      }
    };
  };

  const results = calculateMetabolicAgeData();

  const handleAddRecord = () => {
    const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const date = new Date().toLocaleDateString([], { month: "short", day: "numeric" });
    
    const newRecord: HistoryRecord = {
      id: Date.now().toString(),
      timestamp: `${date} - ${time}`,
      chronologicalAge: parseFloat(age) || 30,
      metabolicAge: results.metabolicAge,
      ageDifference: results.ageDifference,
      gender,
      weight: parseFloat(weight) || 70,
      weightUnit,
      healthLevel: results.healthLevel
    };
    
    saveRecords([newRecord, ...records]);
  };

  const handleDeleteRecord = (id: string) => {
    const updated = records.filter(r => r.id !== id);
    saveRecords(updated);
  };

  const handleClearRecords = () => {
    saveRecords([]);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full py-4 print:p-0">
      {/* Tabs Selector */}
      <div className="flex border-b border-brand-border/60 mb-8 print:hidden justify-center sm:justify-start">
        {[
          { id: "calculator", label: "Age Calculator", icon: <Calculator className="w-4 h-4" /> },
          { id: "logger", label: "Calculator Logs", icon: <FileText className="w-4 h-4" /> },
          { id: "education", label: "Clinical Guidelines", icon: <BookOpen className="w-4 h-4" /> }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as "calculator" | "logger" | "education")}
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
          {/* Inputs Card */}
          <div className="md:col-span-5 glass-panel border border-brand-border rounded-2xl p-6 space-y-6">
            <h3 className="text-white font-semibold font-display text-sm tracking-wide uppercase flex items-center gap-2 border-b border-brand-border/50 pb-3">
              <Calculator className="w-4 h-4 text-brand-cyan" />
              <span>Personal Details</span>
            </h3>

            {/* Gender Toggle */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block">Gender</label>
              <div className="grid grid-cols-2 gap-2 bg-brand-bg/50 p-1 rounded-xl border border-brand-border">
                <button
                  onClick={() => setGender("male")}
                  className={`py-2 text-[10px] font-bold rounded-lg transition-all cursor-pointer ${
                    gender === "male"
                      ? "bg-brand-cyan text-brand-bg shadow-sm"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Male
                </button>
                <button
                  onClick={() => setGender("female")}
                  className={`py-2 text-[10px] font-bold rounded-lg transition-all cursor-pointer ${
                    gender === "female"
                      ? "bg-brand-cyan text-brand-bg shadow-sm"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Female
                </button>
              </div>
            </div>

            {/* Age input */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block">Chronological Age (Years)</label>
              <input
                type="number"
                min="1"
                max="120"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-brand-cyan"
              />
            </div>

            {/* Height inputs */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Height</label>
                <div className="flex bg-brand-bg/50 p-0.5 rounded-lg border border-brand-border text-[9px] font-bold">
                  <button
                    onClick={() => setHeightUnit("cm")}
                    className={`px-2 py-1 rounded transition-all cursor-pointer ${heightUnit === "cm" ? "bg-brand-cyan text-brand-bg font-extrabold" : "text-gray-400 hover:text-white"}`}
                  >
                    cm
                  </button>
                  <button
                    onClick={() => setHeightUnit("ft-in")}
                    className={`px-2 py-1 rounded transition-all cursor-pointer ${heightUnit === "ft-in" ? "bg-brand-cyan text-brand-bg font-extrabold" : "text-gray-400 hover:text-white"}`}
                  >
                    ft/in
                  </button>
                </div>
              </div>

              {heightUnit === "cm" ? (
                <div className="relative">
                  <input
                    type="number"
                    min="30"
                    max="300"
                    value={heightCm}
                    onChange={(e) => setHeightCm(e.target.value)}
                    className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-3 text-lg font-bold text-white focus:outline-none focus:border-brand-cyan"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-xs text-gray-500">cm</span>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative">
                    <input
                      type="number"
                      min="1"
                      max="10"
                      value={heightFt}
                      onChange={(e) => setHeightFt(e.target.value)}
                      className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-3 text-lg font-bold text-white focus:outline-none focus:border-brand-cyan"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-xs text-gray-500">ft</span>
                  </div>
                  <div className="relative">
                    <input
                      type="number"
                      min="0"
                      max="11"
                      value={heightIn}
                      onChange={(e) => setHeightIn(e.target.value)}
                      className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-3 text-lg font-bold text-white focus:outline-none focus:border-brand-cyan"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-xs text-gray-500">in</span>
                  </div>
                </div>
              )}
            </div>

            {/* Weight inputs */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Weight</label>
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
                  min="5"
                  max="500"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-3 text-lg font-bold text-white focus:outline-none focus:border-brand-cyan"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-xs text-gray-500">{weightUnit}</span>
              </div>
            </div>

            {/* Activity Level Selector */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block">Activity Level</label>
              <select
                value={activity}
                onChange={(e) => setActivity(e.target.value)}
                className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-brand-cyan"
              >
                <option value="sedentary">Sedentary (Little/no exercise)</option>
                <option value="light">Lightly Active (Exercise 1-3 days/wk)</option>
                <option value="moderately">Moderately Active (Exercise 3-5 days/wk)</option>
                <option value="very">Very Active (Hard exercise 6-7 days/wk)</option>
                <option value="extra">Extra Active (Very hard work/athlete)</option>
              </select>
            </div>

            {/* Optional parameters expander */}
            <div className="border border-brand-border/60 rounded-xl overflow-hidden">
              <button
                type="button"
                onClick={() => setShowOptional(!showOptional)}
                className="w-full bg-white/[0.02] hover:bg-white/[0.04] p-3 text-left flex justify-between items-center text-xs font-bold text-gray-300 transition-colors cursor-pointer"
              >
                <span>Optional Health & Lifestyle Details</span>
                <ChevronDown className={`w-4 h-4 text-brand-cyan transition-transform ${showOptional ? "rotate-180" : ""}`} />
              </button>
              
              {showOptional && (
                <div className="p-4 bg-brand-bg/30 space-y-4 border-t border-brand-border/60">
                  {/* Body Fat */}
                  <div className="space-y-1">
                    <label className="text-[9px] font-bold text-gray-500 uppercase tracking-wider block">Body Fat Percentage (%)</label>
                    <div className="relative">
                      <input
                        type="number"
                        min="1"
                        max="95"
                        placeholder="e.g. 18"
                        value={bodyFat}
                        onChange={(e) => setBodyFat(e.target.value)}
                        className="w-full bg-brand-bg/50 border border-brand-border rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-brand-cyan"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-bold text-gray-500">%</span>
                    </div>
                  </div>

                  {/* Waist Circumference */}
                  <div className="space-y-1">
                    <div className="flex justify-between items-center">
                      <label className="text-[9px] font-bold text-gray-500 uppercase tracking-wider">Waist Circumference</label>
                      <div className="flex bg-brand-bg/50 p-0.5 rounded border border-brand-border text-[8px] font-bold">
                        <button
                          type="button"
                          onClick={() => setWaistUnit("cm")}
                          className={`px-1.5 py-0.5 rounded transition-all cursor-pointer ${waistUnit === "cm" ? "bg-brand-cyan text-brand-bg font-extrabold" : "text-gray-400 hover:text-white"}`}
                        >
                          cm
                        </button>
                        <button
                          type="button"
                          onClick={() => setWaistUnit("in")}
                          className={`px-1.5 py-0.5 rounded transition-all cursor-pointer ${waistUnit === "in" ? "bg-brand-cyan text-brand-bg font-extrabold" : "text-gray-400 hover:text-white"}`}
                        >
                          in
                        </button>
                      </div>
                    </div>
                    <div className="relative">
                      <input
                        type="number"
                        placeholder="e.g. 85"
                        value={waistCircumference}
                        onChange={(e) => setWaistCircumference(e.target.value)}
                        className="w-full bg-brand-bg/50 border border-brand-border rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-brand-cyan"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-bold text-gray-500">{waistUnit}</span>
                    </div>
                  </div>

                  {/* Resting Heart Rate */}
                  <div className="space-y-1">
                    <label className="text-[9px] font-bold text-gray-500 uppercase tracking-wider block">Resting Heart Rate (BPM)</label>
                    <input
                      type="number"
                      placeholder="e.g. 68"
                      value={restingHeartRate}
                      onChange={(e) => setRestingHeartRate(e.target.value)}
                      className="w-full bg-brand-bg/50 border border-brand-border rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-brand-cyan"
                    />
                  </div>

                  {/* Sleep Hours */}
                  <div className="space-y-1">
                    <label className="text-[9px] font-bold text-gray-500 uppercase tracking-wider block">Average Sleep (Hours/Night)</label>
                    <input
                      type="number"
                      placeholder="e.g. 7.5"
                      value={sleepHours}
                      onChange={(e) => setSleepHours(e.target.value)}
                      className="w-full bg-brand-bg/50 border border-brand-border rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-brand-cyan"
                    />
                  </div>

                  {/* Stress Level */}
                  <div className="space-y-1">
                    <label className="text-[9px] font-bold text-gray-500 uppercase tracking-wider block">Chronic Stress Level</label>
                    <select
                      value={stress}
                      onChange={(e) => setStress(e.target.value)}
                      className="w-full bg-brand-bg/50 border border-brand-border rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-brand-cyan"
                    >
                      <option value="low">Low (Relaxed, manageable)</option>
                      <option value="moderate">Moderate (Standard daily triggers)</option>
                      <option value="high">High (Constant stress/exhaustion)</option>
                    </select>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={handleAddRecord}
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-cyan to-brand-indigo hover:opacity-95 text-white font-bold text-xs py-3 rounded-xl transition-all shadow-md cursor-pointer"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Log Assessment Entry</span>
            </button>
          </div>

          {/* Results Column */}
          <div className="md:col-span-7 space-y-6">
            <div className="glass-panel border border-brand-border rounded-2xl p-8 relative overflow-hidden bg-gradient-to-br from-brand-cyan/5 via-transparent to-transparent">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brand-cyan/10 to-transparent pointer-events-none" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
                {/* Metabolic Age Result */}
                <div className="text-center sm:text-left space-y-2">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1.5 justify-center sm:justify-start">
                    <Activity className="w-3.5 h-3.5 text-brand-cyan animate-pulse" />
                    <span>Estimated Metabolic Age</span>
                  </p>
                  <div className="space-y-1">
                    <h2 className="text-6xl font-display font-extrabold text-white">
                      {results.metabolicAge}
                      <span className="text-lg font-bold text-gray-500 ml-2">years</span>
                    </h2>
                    
                    {/* Comparison note */}
                    <div className="text-sm font-semibold flex items-center justify-center sm:justify-start gap-1">
                      {results.ageDifference < 0 ? (
                        <span className="text-brand-emerald flex items-center gap-1">
                          <TrendingDown className="w-4 h-4" />
                          {Math.abs(results.ageDifference)} {Math.abs(results.ageDifference) === 1 ? "year" : "years"} younger than actual age
                        </span>
                      ) : results.ageDifference > 0 ? (
                        <span className="text-rose-400 flex items-center gap-1">
                          <TrendingUp className="w-4 h-4" />
                          {results.ageDifference} {results.ageDifference === 1 ? "year" : "years"} older than actual age
                        </span>
                      ) : (
                        <span className="text-brand-cyan">
                          Same as your chronological age
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Health Badge & BMR */}
                <div className="text-center sm:text-right border-t sm:border-t-0 sm:border-l border-brand-border/60 pt-6 sm:pt-0 sm:pl-8 space-y-3">
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Metabolic Health Level</p>
                    <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider ${
                      results.healthLevel === "Excellent" ? "bg-brand-emerald/10 border border-brand-emerald/30 text-brand-emerald" :
                      results.healthLevel === "Good" ? "bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan" :
                      results.healthLevel === "Average" ? "bg-brand-indigo/10 border border-brand-indigo/30 text-brand-indigo" :
                      "bg-rose-500/10 border border-rose-500/30 text-rose-400"
                    }`}>
                      {results.healthLevel}
                    </span>
                  </div>
                  
                  <div className="pt-2">
                    <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Active BMR Estimate</p>
                    <p className="text-lg font-bold text-white mt-0.5">{results.actualBmr} <span className="text-xs text-gray-400 font-medium">kcal/day</span></p>
                    <p className="text-[9px] text-gray-500 leading-none mt-1">
                      {results.isKatchUsed ? "Katch-McArdle (LBM)" : `Mifflin Baseline: ${results.baselineBmr} kcal`}
                    </p>
                  </div>
                </div>
              </div>

              {/* Dynamic Age Comparison Bar */}
              <div className="mt-8 space-y-3">
                <div className="flex justify-between items-center text-xs text-gray-400">
                  <span className="font-semibold">Chronological Age: {age} yrs</span>
                  <span className="font-semibold text-brand-cyan">Metabolic Age: {results.metabolicAge} yrs</span>
                </div>
                <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden relative border border-brand-border/40">
                  {/* Position of Chronological Age relative to min/max range */}
                  {/* We map a scale representing actual age - 15 to actual age + 15 */}
                  <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gray-500 -translate-x-1/2 z-10" title="Actual Age" />
                  
                  {/* Fill progress representing metabolic age location */}
                  {/* If metabolic age is younger, fill is to the left of center. If older, fill is to the right. */}
                  {(() => {
                    const pct = 50 + (results.ageDifference / 15) * 50;
                    const fillPct = Math.max(0, Math.min(100, pct));
                    const isYounger = results.ageDifference < 0;
                    return (
                      <div 
                        style={{ 
                          left: isYounger ? `${fillPct}%` : "50%", 
                          right: isYounger ? "50%" : `${100 - fillPct}%` 
                        }}
                        className={`absolute top-0 bottom-0 rounded-full transition-all duration-700 ease-out ${
                          isYounger ? "bg-gradient-to-r from-brand-emerald to-brand-cyan" : "bg-gradient-to-r from-brand-indigo to-rose-500"
                        }`}
                      />
                    );
                  })()}
                </div>
                <div className="flex justify-between text-[9px] text-gray-500">
                  <span>Younger (-15 yrs)</span>
                  <span>Average</span>
                  <span>Older (+15 yrs)</span>
                </div>
              </div>

              {/* Score breakdown metrics list */}
              <div className="mt-8 pt-6 border-t border-brand-border/40 space-y-3">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1">
                  <Info className="w-3.5 h-3.5 text-brand-cyan" />
                  <span>Factor Breakdown Impact</span>
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {/* BMR Factor */}
                  <div className="flex justify-between items-center bg-slate-900/40 p-2.5 rounded-lg border border-brand-border/40">
                    <span className="text-gray-400 flex items-center gap-1.5"><Scale className="w-3.5 h-3.5 text-gray-400" /> BMR/Composition</span>
                    <span className={`font-bold ${results.breakdown.bmr < 0 ? "text-brand-emerald" : results.breakdown.bmr > 0 ? "text-rose-400" : "text-gray-500"}`}>
                      {results.breakdown.bmr < 0 ? "" : "+"}{results.breakdown.bmr} yrs
                    </span>
                  </div>

                  {/* Activity Factor */}
                  <div className="flex justify-between items-center bg-slate-900/40 p-2.5 rounded-lg border border-brand-border/40">
                    <span className="text-gray-400 flex items-center gap-1.5"><Activity className="w-3.5 h-3.5 text-gray-400" /> Physical Activity</span>
                    <span className={`font-bold ${results.breakdown.activity < 0 ? "text-brand-emerald" : results.breakdown.activity > 0 ? "text-rose-400" : "text-gray-500"}`}>
                      {results.breakdown.activity < 0 ? "" : "+"}{results.breakdown.activity} yrs
                    </span>
                  </div>

                  {/* Sleep Factor */}
                  <div className="flex justify-between items-center bg-slate-900/40 p-2.5 rounded-lg border border-brand-border/40">
                    <span className="text-gray-400 flex items-center gap-1.5"><Moon className="w-3.5 h-3.5 text-gray-400" /> Daily Sleep</span>
                    <span className={`font-bold ${results.breakdown.sleep < 0 ? "text-brand-emerald" : results.breakdown.sleep > 0 ? "text-rose-400" : "text-gray-500"}`}>
                      {results.breakdown.sleep < 0 ? "" : "+"}{results.breakdown.sleep} yrs
                    </span>
                  </div>

                  {/* Stress Factor */}
                  <div className="flex justify-between items-center bg-slate-900/40 p-2.5 rounded-lg border border-brand-border/40">
                    <span className="text-gray-400 flex items-center gap-1.5"><Smile className="w-3.5 h-3.5 text-gray-400" /> Chronic Stress</span>
                    <span className={`font-bold ${results.breakdown.stress < 0 ? "text-brand-emerald" : results.breakdown.stress > 0 ? "text-rose-400" : "text-gray-500"}`}>
                      {results.breakdown.stress < 0 ? "" : "+"}{results.breakdown.stress} yrs
                    </span>
                  </div>

                  {/* RHR Factor */}
                  <div className="flex justify-between items-center bg-slate-900/40 p-2.5 rounded-lg border border-brand-border/40">
                    <span className="text-gray-400 flex items-center gap-1.5"><Heart className="w-3.5 h-3.5 text-gray-400" /> Resting Heart Rate</span>
                    <span className={`font-bold ${results.breakdown.rhr < 0 ? "text-brand-emerald" : results.breakdown.rhr > 0 ? "text-rose-400" : "text-gray-500"}`}>
                      {results.breakdown.rhr < 0 ? "" : "+"}{results.breakdown.rhr} yrs
                    </span>
                  </div>

                  {/* Visceral Fat / Waist Factor */}
                  <div className="flex justify-between items-center bg-slate-900/40 p-2.5 rounded-lg border border-brand-border/40">
                    <span className="text-gray-400 flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-gray-400" /> Visceral Fat Risk</span>
                    <span className={`font-bold ${results.breakdown.waist < 0 ? "text-brand-emerald" : results.breakdown.waist > 0 ? "text-rose-400" : "text-gray-500"}`}>
                      {results.breakdown.waist < 0 ? "" : "+"}{results.breakdown.waist} yrs
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* BMR comparison notes & Print Action */}
            <div className="glass-panel border border-brand-border rounded-2xl p-6 bg-white/[0.01] space-y-3">
              <div className="flex items-center justify-between text-[10px] text-gray-500 border-b border-brand-border/40 pb-3">
                <span className="font-bold uppercase tracking-wider flex items-center gap-1.5 text-brand-cyan">
                  <Activity className="w-3.5 h-3.5" /> Metabolism Mechanics Reference
                </span>
                <span>Clinical Index</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[11px] text-gray-500 uppercase font-bold tracking-wider">Estimated Body Fat %</p>
                  <p className="text-xl font-extrabold text-white mt-1">
                    {results.fatPct}%
                  </p>
                </div>
                <div>
                  <p className="text-[11px] text-gray-500 uppercase font-bold tracking-wider">Metabolism Type</p>
                  <p className="text-xl font-extrabold text-white mt-1">
                    {results.ageDifference < -3 ? "Fast / Hyperactive" : results.ageDifference > 3 ? "Slow / Sub-optimal" : "Typical / Normal"}
                  </p>
                </div>
              </div>
              <div className="pt-2 flex justify-between items-center text-xs text-brand-cyan font-bold border-t border-brand-border/20 mt-2">
                <span>* Outputs represent standard wellness estimates.</span>
                <button 
                  onClick={handlePrint}
                  className="flex items-center gap-1 hover:underline cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Download Metabolic Report</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: LOGGER */}
      {activeTab === "logger" && (
        <div className="glass-panel border border-brand-border rounded-2xl p-6 space-y-6">
          <div className="flex justify-between items-center border-b border-brand-border/50 pb-3">
            <h3 className="text-white font-semibold font-display text-sm tracking-wide uppercase flex items-center gap-2">
              <Scale className="w-4 h-4 text-brand-cyan" />
              <span>Metabolic Age History Records</span>
            </h3>
            {records.length > 0 && (
              <button
                onClick={handleClearRecords}
                className="text-xs font-bold text-rose-400 hover:text-rose-300 transition-colors cursor-pointer"
              >
                Clear All Logs
              </button>
            )}
          </div>

          <div className="space-y-4">
            {records.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs md:text-sm">
                  <thead>
                    <tr className="border-b border-brand-border text-gray-500 uppercase tracking-wider font-bold">
                      <th className="py-2.5 px-3">Date & Time</th>
                      <th className="py-2.5 px-3">Gender & Weight</th>
                      <th className="py-2.5 px-3">Chronological Age</th>
                      <th className="py-2.5 px-3">Metabolic Age</th>
                      <th className="py-2.5 px-3">Age Diff</th>
                      <th className="py-2.5 px-3">Status</th>
                      <th className="py-2.5 px-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brand-border/30">
                    {records.map((r) => (
                      <tr key={r.id} className="hover:bg-white/[0.02] transition-all">
                        <td className="py-3 px-3 text-white font-medium">{r.timestamp}</td>
                        <td className="py-3 px-3 text-gray-300 uppercase">{r.gender} • {r.weight} {r.weightUnit}</td>
                        <td className="py-3 px-3 text-gray-300 font-bold">{r.chronologicalAge} yrs</td>
                        <td className="py-3 px-3 text-brand-cyan font-extrabold">{r.metabolicAge} yrs</td>
                        <td className="py-3 px-3">
                          <span className={`font-bold ${r.ageDifference < 0 ? "text-brand-emerald" : r.ageDifference > 0 ? "text-rose-400" : "text-gray-400"}`}>
                            {r.ageDifference < 0 ? "" : "+"}{r.ageDifference} yrs
                          </span>
                        </td>
                        <td className="py-3 px-3">
                          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                            r.healthLevel === "Excellent" ? "bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald" :
                            r.healthLevel === "Good" ? "bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan" :
                            r.healthLevel === "Average" ? "bg-brand-indigo/10 border border-brand-indigo/20 text-brand-indigo" :
                            "bg-rose-500/10 border border-rose-500/20 text-rose-400"
                          }`}>
                            {r.healthLevel}
                          </span>
                        </td>
                        <td className="py-3 px-3 text-right">
                          <button
                            onClick={() => handleDeleteRecord(r.id)}
                            className="text-gray-500 hover:text-rose-400 p-1.5 rounded transition-colors cursor-pointer"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500 text-sm">
                No logs saved. Return to the Calculator tab and click &quot;Log Assessment Entry&quot; to save.
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 3: REFERENCE GUIDELINES */}
      {activeTab === "education" && (
        <div className="glass-panel border border-brand-border rounded-2xl p-6 space-y-6">
          <h3 className="text-white font-semibold font-display text-sm tracking-wide uppercase flex items-center gap-2 border-b border-brand-border/50 pb-3">
            <BookOpen className="w-4 h-4 text-brand-cyan" />
            <span>Clinical Calculations & Reference Frameworks</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-base text-gray-300 leading-relaxed">
            <div className="space-y-4">
              <h4 className="font-bold text-white text-lg">Understanding Metabolic Age Logic</h4>
              <p>
                Metabolic age compares your Basal Metabolic Rate (BMR) with the population average for your age. If you have higher lean muscle mass or a highly active thyroid and endocrine state, your BMR will be elevated compared to the cohort average, marking a younger cellular/metabolic age.
              </p>
              
              <div className="space-y-2 bg-slate-900/40 border border-brand-border/50 rounded-xl p-5 text-sm">
                <p className="font-bold text-white uppercase tracking-wider text-[10px] text-gray-500">Core Formulas Employed:</p>
                <div className="space-y-3 text-xs leading-normal">
                  <div>
                    <p className="font-bold text-brand-cyan">1. Mifflin-St Jeor Equation (Baseline BMR)</p>
                    <p className="text-gray-400 mt-1">Male: BMR = 10W + 6.25H - 5A + 5</p>
                    <p className="text-gray-400">Female: BMR = 10W + 6.25H - 5A - 161</p>
                  </div>
                  <div>
                    <p className="font-bold text-brand-cyan">2. Katch-McArdle Equation (Lean Mass BMR Override)</p>
                    <p className="text-gray-400 mt-1">BMR = 370 + 21.6 * LBM(kg)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-white text-lg">Lifestyle Offset Ranges</h4>
              <div className="space-y-3 text-xs">
                {[
                  { title: "Physical Activity", range: "-5.0 to +2.5 years", desc: "Regular aerobic and anaerobic exercises increase capillary networks, mitochondria density, and muscle mass, lowering metabolic age." },
                  { title: "Sleep Health", range: "-1.0 to +1.5 years", desc: "Sleep regulates thyroid and cortisol levels. Lack of sleep induces inflammation, slowing basic metabolic activity." },
                  { title: "Chronic Stress", range: "-1.0 to +1.5 years", desc: "Elevated cortisol promotes visceral fat storage and metabolic syndrome, artificially aging metabolic health indices." },
                  { title: "Resting Heart Rate", range: "-1.5 to +1.5 years", desc: "Lower resting heart rate is a strong proxy for elevated cardiovascular stroke volume and efficient oxygen delivery cycles." }
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-900/40 border border-brand-border/40 rounded-xl p-3 flex gap-3 items-start">
                    <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full shrink-0 mt-1.5" />
                    <div>
                      <div className="flex justify-between w-full">
                        <p className="font-bold text-white">{item.title}</p>
                        <p className="font-semibold text-brand-cyan">{item.range}</p>
                      </div>
                      <p className="text-gray-400 mt-1 leading-normal text-[10px]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-brand-cyan/5 border border-brand-cyan/20 rounded-xl p-4 flex gap-3 text-sm">
            <AlertTriangle className="w-5.5 h-5.5 text-brand-cyan shrink-0 mt-0.5" />
            <p className="text-base leading-normal">
              <strong>Clinical Limitation:</strong> Online calculators provide mathematical approximations. Individual variables like hormone levels, thyroid activity, genetics, and clinical history will cause deviations. Consult an endocrinologist or metabolic specialist for precise direct measurements (indirect calorimetry).
            </p>
          </div>
        </div>
      )}

      {/* Printable Report Layout */}
      <div className="hidden print:block text-black bg-white p-8 space-y-6 font-sans">
        <div className="border-b border-gray-300 pb-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 font-display">Daily Metabolic Age Assessment Report</h1>
            <p className="text-xs text-gray-500">Med Clinic X Clinical Analytics Summary</p>
          </div>
          <Activity className="w-8 h-8 text-cyan-600 animate-pulse" />
        </div>

        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <h3 className="font-bold text-gray-700 uppercase text-xs mb-1">User Inputs</h3>
            <p><strong>Biological Gender:</strong> {gender}</p>
            <p><strong>Chronological Age:</strong> {age} years</p>
            <p><strong>Input Height:</strong> {heightUnit === "cm" ? `${heightCm} cm` : `${heightFt}'${heightIn}"`}</p>
            <p><strong>Input Weight:</strong> {weight} {weightUnit}</p>
            <p><strong>Exercise Intensity:</strong> {activity} activity level</p>
            {bodyFat && <p><strong>Body Fat Percentage:</strong> {bodyFat}%</p>}
            {restingHeartRate && <p><strong>Resting Heart Rate:</strong> {restingHeartRate} BPM</p>}
            {sleepHours && <p><strong>Daily Sleep Duration:</strong> {sleepHours} hours</p>}
            {stress && <p><strong>Self-Reported Stress:</strong> {stress} level</p>}
          </div>
          <div>
            <h3 className="font-bold text-gray-700 uppercase text-xs mb-1">Calculated Outputs</h3>
            <p><strong>Estimated Metabolic Age:</strong> {results.metabolicAge} years</p>
            <p><strong>Age Offset:</strong> {results.ageDifference < 0 ? `${Math.abs(results.ageDifference)} years younger` : results.ageDifference > 0 ? `${results.ageDifference} years older` : "Identical"}</p>
            <p><strong>Metabolic Health Level:</strong> {results.healthLevel}</p>
            <p><strong>Basal Metabolic Rate:</strong> {results.actualBmr} kcal/day</p>
            <p><strong>Approximate Body Fat:</strong> {results.fatPct}%</p>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 text-[10px] text-gray-500 text-center space-y-1">
          <p>This report is generated by Med Clinic X calculators. Consult a clinical provider before making major training or dietary adjustments.</p>
          <p>&copy; {new Date().getFullYear()} Med Clinic X Inc. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
