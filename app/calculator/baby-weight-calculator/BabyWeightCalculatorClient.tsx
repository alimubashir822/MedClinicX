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
  Scale,
  Sparkles
} from "lucide-react";

interface BabyRecord {
  id: string;
  timestamp: string;
  ageMonths: number;
  ageWeeksDays: string;
  gender: string;
  weight: number;
  weightUnit: string;
  percentile: number;
  healthLevel: string;
}

interface DataPoint {
  month: number;
  p5: number;   // kg
  p50: number;  // kg
  p95: number;  // kg
}

// WHO Weight-for-Age Standards for Boys (birth to 24 months)
const boysData: DataPoint[] = [
  { month: 0, p5: 2.5, p50: 3.3, p95: 4.4 },
  { month: 1, p5: 3.4, p50: 4.5, p95: 5.8 },
  { month: 2, p5: 4.3, p50: 5.6, p95: 7.1 },
  { month: 3, p5: 5.0, p50: 6.4, p95: 8.0 },
  { month: 4, p5: 5.6, p50: 7.0, p95: 8.7 },
  { month: 5, p5: 6.0, p50: 7.5, p95: 9.3 },
  { month: 6, p5: 6.4, p50: 7.9, p95: 9.8 },
  { month: 7, p5: 6.7, p50: 8.3, p95: 10.3 },
  { month: 8, p5: 6.9, p50: 8.6, p95: 10.7 },
  { month: 9, p5: 7.1, p50: 8.9, p95: 11.0 },
  { month: 10, p5: 7.4, p50: 9.2, p95: 11.4 },
  { month: 11, p5: 7.6, p50: 9.4, p95: 11.7 },
  { month: 12, p5: 7.7, p50: 9.6, p95: 12.0 },
  { month: 15, p5: 8.3, p50: 10.3, p95: 12.7 },
  { month: 18, p5: 8.8, p50: 10.9, p95: 13.5 },
  { month: 21, p5: 9.2, p50: 11.5, p95: 14.3 },
  { month: 24, p5: 9.7, p50: 12.2, p95: 15.0 }
];

// WHO Weight-for-Age Standards for Girls (birth to 24 months)
const girlsData: DataPoint[] = [
  { month: 0, p5: 2.4, p50: 3.2, p95: 4.2 },
  { month: 1, p5: 3.2, p50: 4.2, p95: 5.5 },
  { month: 2, p5: 3.9, p50: 5.1, p95: 6.6 },
  { month: 3, p5: 4.5, p50: 5.8, p95: 7.5 },
  { month: 4, p5: 5.0, p50: 6.4, p95: 8.1 },
  { month: 5, p5: 5.4, p50: 6.9, p95: 8.7 },
  { month: 6, p5: 5.7, p50: 7.3, p95: 9.2 },
  { month: 7, p5: 6.0, p50: 7.6, p95: 9.6 },
  { month: 8, p5: 6.2, p50: 7.9, p95: 10.0 },
  { month: 9, p5: 6.4, p50: 8.2, p95: 10.4 },
  { month: 10, p5: 6.6, p50: 8.5, p95: 10.7 },
  { month: 11, p5: 6.8, p50: 8.7, p95: 11.1 },
  { month: 12, p5: 7.0, p50: 8.9, p95: 11.5 },
  { month: 15, p5: 7.5, p50: 9.6, p95: 12.2 },
  { month: 18, p5: 8.0, p50: 10.2, p95: 13.0 },
  { month: 21, p5: 8.5, p50: 10.9, p95: 13.7 },
  { month: 24, p5: 9.0, p50: 11.5, p95: 14.5 }
];

export default function BabyWeightCalculatorClient() {
  const [activeTab, setActiveTab] = useState<"calculator" | "logger" | "education">("calculator");

  // Inputs
  const [gender, setGender] = useState<"male" | "female">("male");
  const [ageType, setAgeType] = useState<"months" | "weeks" | "days">("months");
  const [ageValue, setAgeValue] = useState<string>("6");
  const [weight, setWeight] = useState<string>("7.9");
  const [weightUnit, setWeightUnit] = useState<"kg" | "lbs">("kg");
  
  // Optional Inputs
  const [showOptional, setShowOptional] = useState<boolean>(false);
  const [lengthVal, setLengthVal] = useState<string>("");
  const [lengthUnit, setLengthUnit] = useState<"cm" | "in">("cm");

  // Log Records
  const [records, setRecords] = useState<BabyRecord[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("medclinicx_baby_weight_logs");
    if (saved) {
      try {
        setRecords(JSON.parse(saved));
      } catch (e) {
        console.error("Error reading baby weight logs", e);
      }
    } else {
      // Set default log
      setRecords([
        {
          id: "1",
          timestamp: "Initial Growth Check",
          ageMonths: 6.0,
          ageWeeksDays: "6 months",
          gender: "male",
          weight: 7.9,
          weightUnit: "kg",
          percentile: 50,
          healthLevel: "Within Expected Range"
        }
      ]);
    }
  }, []);

  const saveRecords = (newRecords: BabyRecord[]) => {
    setRecords(newRecords);
    localStorage.setItem("medclinicx_baby_weight_logs", JSON.stringify(newRecords));
  };

  // Convert inputs to metric values
  const getCalculatedMetrics = () => {
    const rawAge = parseFloat(ageValue) || 0;
    
    // Convert current age to months float
    let ageMonths = rawAge;
    let ageLabel = `${rawAge} months`;
    if (ageType === "weeks") {
      ageMonths = rawAge / 4.34524;
      ageLabel = `${rawAge} weeks`;
    } else if (ageType === "days") {
      ageMonths = rawAge / 30.4375;
      ageLabel = `${rawAge} days`;
    }
    
    // Clamp months to WHO database range: 0 to 24 months
    const clampedMonths = Math.max(0, Math.min(24, ageMonths));
    
    // Weight Conversion to kg
    let weightKg = parseFloat(weight) || 3.3;
    if (weightUnit === "lbs") {
      weightKg = weightKg * 0.45359237;
    }

    // Length Conversion to meters (optional)
    let lengthM = 0;
    let lengthDisplayVal = "";
    if (lengthVal) {
      const parsedLen = parseFloat(lengthVal);
      if (!isNaN(parsedLen) && parsedLen > 0) {
        let cm = parsedLen;
        if (lengthUnit === "in") {
          cm = parsedLen * 2.54;
        }
        lengthM = cm / 100;
        lengthDisplayVal = `${parsedLen} ${lengthUnit}`;
      }
    }

    // 1. Fetch reference percentiles using WHO interpolation
    const data = gender === "male" ? boysData : girlsData;
    
    let i = 0;
    for (let j = 0; j < data.length; j++) {
      if (data[j].month === clampedMonths) {
        i = j;
        break;
      }
      if (data[j].month > clampedMonths) {
        i = j - 1;
        break;
      }
    }
    
    // Safely linear interpolate if between months
    let p5 = data[0].p5;
    let p50 = data[0].p50;
    let p95 = data[0].p95;

    if (clampedMonths === data[i].month) {
      p5 = data[i].p5;
      p50 = data[i].p50;
      p95 = data[i].p95;
    } else if (i < data.length - 1) {
      const pA = data[i];
      const pB = data[i+1];
      const factor = (clampedMonths - pA.month) / (pB.month - pA.month);
      
      p5 = pA.p5 + (pB.p5 - pA.p5) * factor;
      p50 = pA.p50 + (pB.p50 - pA.p50) * factor;
      p95 = pA.p95 + (pB.p95 - pA.p95) * factor;
    } else {
      p5 = data[data.length-1].p5;
      p50 = data[data.length-1].p50;
      p95 = data[data.length-1].p95;
    }

    // 2. Approximate growth percentile
    let percentile = 50;
    if (weightKg < p5) {
      percentile = Math.max(1, Math.round((weightKg / p5) * 5));
    } else if (weightKg < p50) {
      percentile = Math.round(5 + ((weightKg - p5) / (p50 - p5)) * 45);
    } else if (weightKg < p95) {
      percentile = Math.round(50 + ((weightKg - p50) / (p95 - p50)) * 45);
    } else {
      percentile = Math.min(99, Math.round(95 + ((weightKg - p95) / (p95 * 0.2)) * 4));
    }

    // 3. Category Tier Classification
    let healthLevel: "Within Expected Range" | "Below Expected Range" | "Above Expected Range" = "Within Expected Range";
    if (percentile < 5) {
      healthLevel = "Below Expected Range";
    } else if (percentile > 95) {
      healthLevel = "Above Expected Range";
    }

    // 4. Weight-for-Length index
    let weightForLengthBmi = 0;
    if (lengthM > 0) {
      weightForLengthBmi = weightKg / (lengthM * lengthM);
    }

    return {
      ageMonths: Math.round(ageMonths * 10) / 10,
      ageLabel,
      p5: Math.round(p5 * 10) / 10,
      p50: Math.round(p50 * 10) / 10,
      p95: Math.round(p95 * 10) / 10,
      percentile,
      healthLevel,
      weightForLengthBmi: Math.round(weightForLengthBmi * 10) / 10,
      lengthDisplayVal
    };
  };

  const results = getCalculatedMetrics();

  const handleAddRecord = () => {
    const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const date = new Date().toLocaleDateString([], { month: "short", day: "numeric" });
    
    const newRecord: BabyRecord = {
      id: Date.now().toString(),
      timestamp: `${date} - ${time}`,
      ageMonths: results.ageMonths,
      ageWeeksDays: results.ageLabel,
      gender,
      weight: parseFloat(weight) || 3.3,
      weightUnit,
      percentile: results.percentile,
      healthLevel: results.healthLevel
    };
    
    saveRecords([newRecord, ...records]);
  };

  const handleDeleteRecord = (id: string) => {
    saveRecords(records.filter(r => r.id !== id));
  };

  const handleClearRecords = () => {
    saveRecords([]);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full py-4 print:p-0">
      {/* Tab select bar */}
      <div className="flex border-b border-brand-border/60 mb-8 print:hidden justify-center sm:justify-start">
        {[
          { id: "calculator", label: "Weight Calculator", icon: <Calculator className="w-4 h-4" /> },
          { id: "logger", label: "Growth Log", icon: <FileText className="w-4 h-4" /> },
          { id: "education", label: "WHO Guidelines", icon: <BookOpen className="w-4 h-4" /> }
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
          {/* Inputs Panel */}
          <div className="md:col-span-5 glass-panel border border-brand-border rounded-2xl p-6 space-y-6">
            <h3 className="text-white font-semibold font-display text-sm tracking-wide uppercase flex items-center gap-2 border-b border-brand-border/50 pb-3">
              <Calculator className="w-4 h-4 text-brand-cyan" />
              <span>Baby Details</span>
            </h3>

            {/* Gender Switcher */}
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
                  Boy
                </button>
                <button
                  onClick={() => setGender("female")}
                  className={`py-2 text-[10px] font-bold rounded-lg transition-all cursor-pointer ${
                    gender === "female"
                      ? "bg-brand-cyan text-brand-bg shadow-sm"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Girl
                </button>
              </div>
            </div>

            {/* Age value with type selector */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block">Baby Age</label>
                <div className="flex bg-brand-bg/50 p-0.5 rounded border border-brand-border text-[9px] font-bold">
                  {["months", "weeks", "days"].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => {
                        setAgeType(type as "months" | "weeks" | "days");
                        if (type === "months") setAgeValue("6");
                        else if (type === "weeks") setAgeValue("26");
                        else setAgeValue("180");
                      }}
                      className={`px-2 py-0.5 rounded transition-all capitalize cursor-pointer ${
                        ageType === type ? "bg-brand-cyan text-brand-bg font-extrabold" : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
              <input
                type="number"
                min="0"
                max="1000"
                value={ageValue}
                onChange={(e) => setAgeValue(e.target.value)}
                className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-brand-cyan"
              />
            </div>

            {/* Current Weight input */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block">Current Weight</label>
                <div className="flex bg-brand-bg/50 p-0.5 rounded-lg border border-brand-border text-[9px] font-bold">
                  <button
                    onClick={() => {
                      setWeightUnit("kg");
                      const val = parseFloat(weight);
                      if (!isNaN(val)) setWeight((Math.round(val * 0.453592 * 10) / 10).toString());
                    }}
                    className={`px-2 py-1 rounded transition-all cursor-pointer ${weightUnit === "kg" ? "bg-brand-cyan text-brand-bg font-extrabold" : "text-gray-400 hover:text-white"}`}
                  >
                    kg
                  </button>
                  <button
                    onClick={() => {
                      setWeightUnit("lbs");
                      const val = parseFloat(weight);
                      if (!isNaN(val)) setWeight((Math.round((val / 0.453592) * 10) / 10).toString());
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
                  step="0.1"
                  min="0.5"
                  max="100"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-3 text-lg font-bold text-white focus:outline-none focus:border-brand-cyan"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-xs text-gray-500">{weightUnit}</span>
              </div>
            </div>

            {/* Expandable Optional parameters */}
            <div className="border border-brand-border/60 rounded-xl overflow-hidden">
              <button
                type="button"
                onClick={() => setShowOptional(!showOptional)}
                className="w-full bg-white/[0.02] hover:bg-white/[0.04] p-3 text-left flex justify-between items-center text-xs font-bold text-gray-300 transition-colors cursor-pointer"
              >
                <span>Add Length / Height (Optional)</span>
                <ChevronDown className={`w-4 h-4 text-brand-cyan transition-transform ${showOptional ? "rotate-180" : ""}`} />
              </button>
              
              {showOptional && (
                <div className="p-4 bg-brand-bg/30 space-y-4 border-t border-brand-border/60">
                  {/* Length/Height */}
                  <div className="space-y-1">
                    <div className="flex justify-between items-center">
                      <label className="text-[9px] font-bold text-gray-500 uppercase tracking-wider">Baby Length</label>
                      <div className="flex bg-brand-bg/50 p-0.5 rounded border border-brand-border text-[8px] font-bold">
                        <button
                          type="button"
                          onClick={() => setLengthUnit("cm")}
                          className={`px-1.5 py-0.5 rounded transition-all cursor-pointer ${lengthUnit === "cm" ? "bg-brand-cyan text-brand-bg font-extrabold" : "text-gray-400 hover:text-white"}`}
                        >
                          cm
                        </button>
                        <button
                          type="button"
                          onClick={() => setLengthUnit("in")}
                          className={`px-1.5 py-0.5 rounded transition-all cursor-pointer ${lengthUnit === "in" ? "bg-brand-cyan text-brand-bg font-extrabold" : "text-gray-400 hover:text-white"}`}
                        >
                          in
                        </button>
                      </div>
                    </div>
                    <div className="relative">
                      <input
                        type="number"
                        step="0.1"
                        placeholder="e.g. 65"
                        value={lengthVal}
                        onChange={(e) => setLengthVal(e.target.value)}
                        className="w-full bg-brand-bg/50 border border-brand-border rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-brand-cyan"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-bold text-gray-500">{lengthUnit}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={handleAddRecord}
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-cyan to-brand-indigo hover:opacity-95 text-white font-bold text-xs py-3 rounded-xl transition-all shadow-md cursor-pointer"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Log Growth Assessment</span>
            </button>
          </div>

          {/* Results Display Panel */}
          <div className="md:col-span-7 space-y-6">
            <div className="glass-panel border border-brand-border rounded-2xl p-8 relative overflow-hidden bg-gradient-to-br from-brand-cyan/5 via-transparent to-transparent">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brand-cyan/10 to-transparent pointer-events-none" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
                {/* Growth status */}
                <div className="text-center sm:text-left space-y-2">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1.5 justify-center sm:justify-start">
                    <Activity className="w-3.5 h-3.5 text-brand-cyan animate-pulse" />
                    <span>WHO Growth Percentile</span>
                  </p>
                  <div className="space-y-1">
                    <h2 className="text-5xl font-display font-extrabold text-white">
                      {results.percentile}
                      <span className="text-lg font-bold text-gray-500 ml-1.5">th</span>
                    </h2>
                    <p className="text-sm font-semibold text-brand-cyan">
                      Percentile Group Rank
                    </p>
                  </div>
                </div>

                {/* Status indicator block */}
                <div className="text-center sm:text-right border-t sm:border-t-0 sm:border-l border-brand-border/60 pt-6 sm:pt-0 sm:pl-8 space-y-3">
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Growth Status</p>
                    <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider ${
                      results.healthLevel === "Within Expected Range" ? "bg-brand-emerald/10 border border-brand-emerald/30 text-brand-emerald" :
                      results.healthLevel === "Below Expected Range" ? "bg-rose-500/10 border border-rose-500/30 text-rose-400" :
                      "bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan"
                    }`}>
                      {results.healthLevel}
                    </span>
                  </div>

                  <div className="pt-2">
                    <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Adjusted Age In Months</p>
                    <p className="text-base font-bold text-white mt-0.5">{results.ageMonths} <span className="text-xs text-gray-400 font-medium">months</span></p>
                  </div>
                </div>
              </div>

              {/* Dynamic Percentile Bar */}
              <div className="mt-8 space-y-3">
                <div className="flex justify-between items-center text-xs text-gray-400">
                  <span className="font-semibold">5th Percentile: {weightUnit === "kg" ? results.p5 : Math.round(results.p5 / 0.453592 * 10) / 10} {weightUnit}</span>
                  <span className="font-semibold text-white">Median: {weightUnit === "kg" ? results.p50 : Math.round(results.p50 / 0.453592 * 10) / 10} {weightUnit}</span>
                  <span className="font-semibold text-brand-cyan">95th Percentile: {weightUnit === "kg" ? results.p95 : Math.round(results.p95 / 0.453592 * 10) / 10} {weightUnit}</span>
                </div>
                
                <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden relative border border-brand-border/40">
                  {/* Fill progress up to actual baby percentile */}
                  <div 
                    style={{ width: `${results.percentile}%` }}
                    className={`h-full bg-gradient-to-r transition-all duration-700 ease-out ${
                      results.percentile < 5 ? "from-rose-500 to-rose-400" :
                      results.percentile > 95 ? "from-brand-cyan to-brand-indigo" :
                      "from-brand-emerald to-brand-cyan"
                    }`}
                  />
                </div>
                
                <div className="flex justify-between text-[9px] text-gray-500">
                  <span>Below 5th (Lower)</span>
                  <span>50th Percentile (Average)</span>
                  <span>Above 95th (Higher)</span>
                </div>
              </div>
            </div>

            {/* Height-to-weight proportion reference card */}
            {results.weightForLengthBmi > 0 && (
              <div className="glass-panel border border-brand-border rounded-xl p-5 bg-white/[0.01] space-y-2">
                <p className="font-bold uppercase tracking-wider text-[10px] text-brand-cyan flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> Height-for-Weight Proportion Indexes
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase font-bold">Estimated Infant BMI</p>
                    <p className="text-lg font-bold text-white mt-0.5">{results.weightForLengthBmi} <span className="text-xs text-gray-400 font-medium">kg/m²</span></p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase font-bold">Baby Length Input</p>
                    <p className="text-lg font-bold text-white mt-0.5">{results.lengthDisplayVal}</p>
                  </div>
                </div>
                <p className="text-[10px] text-gray-500 leading-normal border-t border-brand-border/20 pt-2">
                  * Note: In infants under 2 years, pediatricians prioritize weight-for-length percentile curves over body mass index values.
                </p>
              </div>
            )}

            {/* Print Action Trigger */}
            <div className="glass-panel border border-brand-border rounded-xl p-5 bg-slate-950/20 text-xs flex justify-between items-center text-gray-400 font-semibold">
              <span className="flex items-center gap-1"><Info className="w-4 h-4 text-brand-cyan" /> Assessment fits standard WHO percentile profiles.</span>
              <button 
                onClick={handlePrint}
                className="text-brand-cyan hover:underline flex items-center gap-1 cursor-pointer font-bold"
              >
                <FileText className="w-3.5 h-3.5" /> Print Growth Chart
              </button>
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
              <span>Logged Baby Growth History</span>
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
                      <th className="py-2.5 px-3">Gender & Age</th>
                      <th className="py-2.5 px-3">Logged Weight</th>
                      <th className="py-2.5 px-3">Percentile</th>
                      <th className="py-2.5 px-3">Growth status</th>
                      <th className="py-2.5 px-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brand-border/30">
                    {records.map((r) => (
                      <tr key={r.id} className="hover:bg-white/[0.02] transition-all">
                        <td className="py-3 px-3 text-white font-medium">{r.timestamp}</td>
                        <td className="py-3 px-3 text-gray-300 uppercase">{r.gender} • {r.ageWeeksDays}</td>
                        <td className="py-3 px-3 text-gray-300 font-bold">{r.weight} {r.weightUnit}</td>
                        <td className="py-3 px-3 text-brand-cyan font-extrabold">{r.percentile}th Percentile</td>
                        <td className="py-3 px-3">
                          <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded ${
                            r.healthLevel === "Within Expected Range" ? "bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald" :
                            r.healthLevel === "Below Expected Range" ? "bg-rose-500/10 border border-rose-500/20 text-rose-400" :
                            "bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan"
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
                No logs saved. Return to the calculator panel and click &quot;Log Growth Assessment&quot; to save.
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
            <span>WHO Growth Standards & Percentile Calculations</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-base text-gray-300 leading-relaxed">
            <div className="space-y-4">
              <h4 className="font-bold text-white text-lg">Understanding growth percentiles</h4>
              <p>
                Percentiles show how your baby&apos;s weight compares with other healthy babies of the same age and gender. For example, if your baby is in the 50th percentile, it means 50% of healthy babies weigh less and 50% weigh more.
              </p>
              
              <div className="space-y-2 bg-slate-900/40 border border-brand-border/50 rounded-xl p-5 text-xs text-gray-400">
                <p className="font-bold text-white uppercase tracking-wider text-[9px] block mb-1">WHO Growth Benchmarks (50th percentile/Median):</p>
                <div className="flex justify-between border-b border-brand-border/20 py-1">
                  <span>Boys Birth:</span>
                  <span className="font-bold text-brand-cyan">3.3 kg (7.3 lbs)</span>
                </div>
                <div className="flex justify-between border-b border-brand-border/20 py-1">
                  <span>Boys 6 Months:</span>
                  <span className="font-bold text-brand-cyan">7.9 kg (17.4 lbs)</span>
                </div>
                <div className="flex justify-between border-b border-brand-border/20 py-1">
                  <span>Girls Birth:</span>
                  <span className="font-bold text-brand-cyan">3.2 kg (7.1 lbs)</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>Girls 6 Months:</span>
                  <span className="font-bold text-brand-cyan">7.3 kg (16.1 lbs)</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-white text-lg">Growth Chart Classifications</h4>
              <div className="space-y-3 text-xs">
                {[
                  { range: "Below 5th Percentile", meaning: "Weight is lower than 95% of infants of the same age/gender. May suggest the need to review feeding patterns with your pediatrician." },
                  { range: "5th to 95th Percentile", meaning: "Expected weight range for healthy growing infants. Steady growth along a single percentile line is key." },
                  { range: "Above 95th Percentile", meaning: "Weight is higher than 95% of infants of the same age/gender. Indicates higher overall mass; pediatrician checks can evaluate growth proportions." }
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-900/40 border border-brand-border/40 rounded-xl p-3 flex gap-3 items-start">
                    <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full shrink-0 mt-1.5" />
                    <div>
                      <p className="font-bold text-white">{item.range}</p>
                      <p className="text-[10px] text-gray-400 mt-1 leading-normal">{item.meaning}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-brand-cyan/5 border border-brand-cyan/20 rounded-xl p-4 flex gap-3 text-sm">
            <AlertTriangle className="w-5.5 h-5.5 text-brand-cyan shrink-0 mt-0.5" />
            <p className="text-base leading-normal">
              <strong>Pediatrician Note:</strong> Growth calculations are for educational reference. A baby&apos;s growth chart is highly unique and influenced by gestational age, genetics, feeding, and medical history. Diagnostic assessments must be conducted by qualified healthcare professionals.
            </p>
          </div>
        </div>
      )}

      {/* Printable Report Layout */}
      <div className="hidden print:block text-black bg-white p-8 space-y-6 font-sans">
        <div className="border-b border-gray-300 pb-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 font-display">Baby Growth & Weight Assessment</h1>
            <p className="text-xs text-gray-500">Med Clinic X Pediatrics Growth Chart Brief</p>
          </div>
          <Activity className="w-8 h-8 text-cyan-600" />
        </div>

        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <h3 className="font-bold text-gray-700 uppercase text-xs mb-1">Infant Inputs</h3>
            <p><strong>Biological Gender:</strong> {gender}</p>
            <p><strong>Baby Age:</strong> {results.ageLabel}</p>
            <p><strong>Current Weight:</strong> {weight} {weightUnit}</p>
            {lengthVal && <p><strong>Length/Height:</strong> {lengthVal} {lengthUnit}</p>}
          </div>
          <div>
            <h3 className="font-bold text-gray-700 uppercase text-xs mb-1">Percentile Outcomes</h3>
            <p><strong>Growth Percentile:</strong> {results.percentile}th percentile</p>
            <p><strong>Status Level:</strong> {results.healthLevel}</p>
            <p><strong>WHO 5th Percentile Weight:</strong> {results.p5} kg</p>
            <p><strong>WHO 50th Percentile (Median):</strong> {results.p50} kg</p>
            <p><strong>WHO 95th Percentile Weight:</strong> {results.p95} kg</p>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 text-[10px] text-gray-500 text-center space-y-1">
          <p>This report is generated by Med Clinic X calculators using WHO Weight-for-Age parameters. Consult your pediatrician before making major nutrition adjustments.</p>
          <p>&copy; {new Date().getFullYear()} Med Clinic X Inc. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
