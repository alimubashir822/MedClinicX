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
  Sparkles,
  Scale,
  TrendingUp,
  Printer,
  History,
  CheckCircle,
  Baby,
  Shield
} from "lucide-react";

interface GrowthRecord {
  id: string;
  timestamp: string;
  ageMonths: number;
  ageLabel: string;
  gender: "male" | "female";
  weight: number;
  weightUnit: "kg" | "lbs";
  height: number;
  heightUnit: "cm" | "in";
  weightPercentile: number;
  heightPercentile: number;
  interpretation: string;
}

interface WHODataPoint {
  month: number;
  wP5: number;
  wP50: number;
  wP95: number;
  hP5: number;
  hP50: number;
  hP95: number;
}

// WHO Boys Growth Standards (Birth to 60 Months)
const boysData: WHODataPoint[] = [
  { month: 0, wP5: 2.5, wP50: 3.3, wP95: 4.4, hP5: 46.3, hP50: 49.9, hP95: 53.4 },
  { month: 3, wP5: 5.0, wP50: 6.4, wP95: 8.0, hP5: 57.3, hP50: 61.4, hP95: 65.5 },
  { month: 6, wP5: 6.4, wP50: 7.9, wP95: 9.8, hP5: 63.3, hP50: 67.6, hP95: 71.9 },
  { month: 9, wP5: 7.1, wP50: 8.9, wP95: 11.0, hP5: 67.5, hP50: 72.0, hP95: 76.5 },
  { month: 12, wP5: 7.7, wP50: 9.6, wP95: 12.0, hP5: 71.0, hP50: 75.7, hP95: 80.5 },
  { month: 18, wP5: 8.8, wP50: 10.9, wP95: 13.5, hP5: 76.9, hP50: 82.3, hP95: 87.7 },
  { month: 24, wP5: 9.7, wP50: 12.2, wP95: 15.0, hP5: 81.7, hP50: 87.8, hP95: 93.9 },
  { month: 36, wP5: 11.3, wP50: 14.3, wP95: 18.0, hP5: 88.7, hP50: 96.1, hP95: 103.5 },
  { month: 48, wP5: 12.7, wP50: 16.3, wP95: 21.2, hP5: 94.9, hP50: 103.3, hP95: 111.7 },
  { month: 60, wP5: 14.1, wP50: 18.3, wP95: 24.2, hP5: 100.7, hP50: 110.0, hP95: 119.3 }
];

// WHO Girls Growth Standards (Birth to 60 Months)
const girlsData: WHODataPoint[] = [
  { month: 0, wP5: 2.4, wP50: 3.2, wP95: 4.2, hP5: 45.6, hP50: 49.1, hP95: 52.7 },
  { month: 3, wP5: 4.5, wP50: 5.8, wP95: 7.5, hP5: 55.6, hP50: 59.8, hP95: 64.0 },
  { month: 6, wP5: 5.7, wP50: 7.3, wP95: 9.2, hP5: 61.2, hP50: 65.7, hP95: 70.0 },
  { month: 9, wP5: 6.4, wP50: 8.2, wP95: 10.4, hP5: 65.3, hP50: 70.1, hP95: 75.0 },
  { month: 12, wP5: 7.0, wP50: 8.9, wP95: 11.5, hP5: 68.9, hP50: 74.0, hP95: 79.2 },
  { month: 18, wP5: 8.0, wP50: 10.2, wP95: 13.0, hP5: 74.9, hP50: 80.7, hP95: 86.5 },
  { month: 24, wP5: 9.0, wP50: 11.5, wP95: 14.5, hP5: 79.7, hP50: 85.7, hP95: 91.7 },
  { month: 36, wP5: 10.8, wP50: 13.9, wP95: 17.7, hP5: 87.4, hP50: 95.1, hP95: 102.7 },
  { month: 48, wP5: 12.2, wP50: 15.9, wP95: 20.8, hP5: 94.1, hP50: 102.7, hP95: 111.3 },
  { month: 60, wP5: 13.7, wP50: 18.2, wP95: 24.0, hP5: 99.9, hP50: 109.4, hP95: 118.9 }
];

export default function BabyGrowthCalculatorClient() {
  const [activeTab, setActiveTab] = useState<"calculator" | "logger" | "milestones">("calculator");

  // Inputs
  const [gender, setGender] = useState<"male" | "female">("male");
  const [ageUnit, setAgeUnit] = useState<"months" | "years">("months");
  const [ageValue, setAgeValue] = useState<string>("6");
  const [height, setHeight] = useState<string>("67.6");
  const [heightUnit, setHeightUnit] = useState<"cm" | "in">("cm");
  const [weight, setWeight] = useState<string>("7.9");
  const [weightUnit, setWeightUnit] = useState<"kg" | "lbs">("kg");

  // Chart state
  const [chartType, setChartType] = useState<"weight" | "height">("weight");

  // Records state
  const [records, setRecords] = useState<GrowthRecord[]>([]);
  const [toast, setToast] = useState<string>("");

  useEffect(() => {
    const saved = localStorage.getItem("medclinicx_baby_growth_logs");
    if (saved) {
      try {
        setRecords(JSON.parse(saved));
      } catch (e) {
        console.error("Error reading baby growth logs", e);
      }
    } else {
      setRecords([
        {
          id: "1",
          timestamp: "Sample Growth Check",
          ageMonths: 6,
          ageLabel: "6 months",
          gender: "male",
          weight: 7.9,
          weightUnit: "kg",
          height: 67.6,
          heightUnit: "cm",
          weightPercentile: 50,
          heightPercentile: 50,
          interpretation: "Expected healthy growth pattern (Average)"
        }
      ]);
    }
  }, []);

  const saveRecords = (newRecords: GrowthRecord[]) => {
    setRecords(newRecords);
    localStorage.setItem("medclinicx_baby_growth_logs", JSON.stringify(newRecords));
  };

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(""), 3000);
  };

  // Convert and interpolate parameters
  const calculateGrowthMetrics = () => {
    const ageRaw = parseFloat(ageValue) || 0;
    const ageMonths = ageUnit === "years" ? ageRaw * 12 : ageRaw;

    const clampedMonths = Math.max(0, Math.min(60, ageMonths));
    const ageLabel = ageUnit === "years" ? `${ageRaw} years` : `${ageRaw} months`;

    // Convert height to cm
    let heightCm = parseFloat(height) || 0;
    if (heightUnit === "in") {
      heightCm = heightCm * 2.54;
    }

    // Convert weight to kg
    let weightKg = parseFloat(weight) || 0;
    if (weightUnit === "lbs") {
      weightKg = weightKg * 0.45359237;
    }

    let errorText = "";
    if (ageMonths < 0 || ageMonths > 120) {
      errorText = "Please enter an age between 0 and 10 years.";
    } else if (heightCm <= 0 && weightKg <= 0) {
      errorText = "Please enter either height or weight to see percentiles.";
    }

    if (errorText) {
      return {
        ageMonths,
        ageLabel,
        heightPercentile: 0,
        weightPercentile: 0,
        weightInterpretation: "",
        heightInterpretation: "",
        p5Weight: 0,
        p50Weight: 0,
        p95Weight: 0,
        p5Height: 0,
        p50Height: 0,
        p95Height: 0,
        errorText
      };
    }

    const data = gender === "male" ? boysData : girlsData;

    // Linear interpolate standard curves for current month
    let idx = 0;
    for (let j = 0; j < data.length; j++) {
      if (data[j].month === clampedMonths) {
        idx = j;
        break;
      }
      if (data[j].month > clampedMonths) {
        idx = j - 1;
        break;
      }
    }

    let p5Weight = data[0].wP5;
    let p50Weight = data[0].wP50;
    let p95Weight = data[0].wP95;
    let p5Height = data[0].hP5;
    let p50Height = data[0].hP50;
    let p95Height = data[0].hP95;

    if (clampedMonths === data[idx].month) {
      p5Weight = data[idx].wP5;
      p50Weight = data[idx].wP50;
      p95Weight = data[idx].wP95;
      p5Height = data[idx].hP5;
      p50Height = data[idx].hP50;
      p95Height = data[idx].hP95;
    } else if (idx < data.length - 1) {
      const pA = data[idx];
      const pB = data[idx + 1];
      const factor = (clampedMonths - pA.month) / (pB.month - pA.month);

      p5Weight = pA.wP5 + (pB.wP5 - pA.wP5) * factor;
      p50Weight = pA.wP50 + (pB.wP50 - pA.wP50) * factor;
      p95Weight = pA.wP95 + (pB.wP95 - pA.wP95) * factor;

      p5Height = pA.hP5 + (pB.hP5 - pA.hP5) * factor;
      p50Height = pA.hP50 + (pB.hP50 - pA.hP50) * factor;
      p95Height = pA.hP95 + (pB.hP95 - pA.hP95) * factor;
    } else {
      const pLast = data[data.length - 1];
      p5Weight = pLast.wP5;
      p50Weight = pLast.wP50;
      p95Weight = pLast.wP95;
      p5Height = pLast.hP5;
      p50Height = pLast.hP50;
      p95Height = pLast.hP95;
    }

    const interpolatePercentile = (val: number, p5: number, p50: number, p95: number) => {
      if (val <= 0) return 0;
      if (val < p5) {
        return Math.max(1, Math.round((val / p5) * 5));
      } else if (val < p50) {
        return Math.round(5 + ((val - p5) / (p50 - p5)) * 45);
      } else if (val < p95) {
        return Math.round(50 + ((val - p50) / (p95 - p50)) * 45);
      } else {
        return Math.min(99, Math.round(95 + ((val - p95) / (p95 * 0.2)) * 4));
      }
    };

    const weightPercentile = weightKg > 0 ? interpolatePercentile(weightKg, p5Weight, p50Weight, p95Weight) : 0;
    const heightPercentile = heightCm > 0 ? interpolatePercentile(heightCm, p5Height, p50Height, p95Height) : 0;

    let weightInterpretation = "Normal Range";
    if (weightPercentile > 0) {
      if (weightPercentile < 5) weightInterpretation = "Below Average";
      else if (weightPercentile > 95) weightInterpretation = "Above Average";
      else weightInterpretation = "Normal Range";
    }

    let heightInterpretation = "Normal Range";
    if (heightPercentile > 0) {
      if (heightPercentile < 5) heightInterpretation = "Below Average";
      else if (heightPercentile > 95) heightInterpretation = "Above Average";
      else heightInterpretation = "Normal Range";
    }

    return {
      ageMonths,
      ageLabel,
      weightPercentile,
      heightPercentile,
      weightInterpretation,
      heightInterpretation,
      p5Weight,
      p50Weight,
      p95Weight,
      p5Height,
      p50Height,
      p95Height,
      errorText: ""
    };
  };

  const results = calculateGrowthMetrics();

  const handleAddLog = () => {
    if (results.errorText) {
      showToast("Cannot log with input errors.");
      return;
    }

    const timestamp = new Date().toLocaleString([], {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });

    const newRecord: GrowthRecord = {
      id: Math.random().toString(36).substr(2, 9),
      timestamp,
      ageMonths: results.ageMonths,
      ageLabel: results.ageLabel,
      gender,
      weight: parseFloat(weight) || 0,
      weightUnit,
      height: parseFloat(height) || 0,
      heightUnit,
      weightPercentile: results.weightPercentile,
      heightPercentile: results.heightPercentile,
      interpretation: `Weight: ${results.weightInterpretation}, Height: ${results.heightInterpretation}`
    };

    saveRecords([newRecord, ...records]);
    showToast("Baby growth metric logged successfully!");
  };

  const handleDeleteRecord = (id: string) => {
    saveRecords(records.filter(r => r.id !== id));
    showToast("Log entry deleted.");
  };

  const handleClearLogs = () => {
    if (confirm("Clear all baby growth logs?")) {
      saveRecords([]);
      showToast("All logs cleared.");
    }
  };

  const handlePrint = () => {
    window.print();
  };

  // Milestones dictionary
  const getMilestones = (ageM: number) => {
    if (ageM <= 2) return "Lifts head when on tummy, smiles at sounds, tracks moving objects.";
    if (ageM <= 4) return "Holds head steady unsupported, reaches for toys, babbles and mimics sounds.";
    if (ageM <= 6) return "Rolls from tummy to back, sits with support, begins baby babble and responds to name.";
    if (ageM <= 9) return "Sits without support, crawls, points at objects, responds to simple words.";
    if (ageM <= 12) return "Pulls to stand, walks holding furniture, says simple words like 'mama/dada'.";
    if (ageM <= 18) return "Walks alone, drinks from cup, scribbles with crayon, follows 1-step commands.";
    if (ageM <= 24) return "Runs, kicks ball, uses 2-4 word sentences, shows independence.";
    if (ageM <= 36) return "Climbs well, speaks in sentences, repeats simple nursery rhymes, separates easily.";
    if (ageM <= 48) return "Hops on one foot, draws simple circles, tells stories, plays cooperatively.";
    return "Skips, speaks clearly in paragraphs, counts to 10 or more, draws people.";
  };

  // SVG Chart rendering math
  const data = gender === "male" ? boysData : girlsData;
  const clampedMonths = Math.max(0, Math.min(60, results.ageMonths));
  
  // SVG coordinates: Width 500, Height 300.
  // padding left 50, right 20, top 20, bottom 40
  const chartW = 430;
  const chartH = 240;
  const padL = 50;
  const padT = 20;

  const getWeightY = (w: number) => {
    return padT + chartH - ((w - 2) / (28 - 2)) * chartH;
  };

  const getHeightY = (h: number) => {
    return padT + chartH - ((h - 40) / (125 - 40)) * chartH;
  };

  const getX = (m: number) => {
    return padL + (m / 60) * chartW;
  };

  // Curve paths generator
  let p5Path = "";
  let p50Path = "";
  let p95Path = "";

  data.forEach((p, idx) => {
    const x = getX(p.month);
    const y5 = chartType === "weight" ? getWeightY(p.wP5) : getHeightY(p.hP5);
    const y50 = chartType === "weight" ? getWeightY(p.wP50) : getHeightY(p.hP50);
    const y95 = chartType === "weight" ? getWeightY(p.wP95) : getHeightY(p.hP95);

    p5Path += `${idx === 0 ? "M" : "L"} ${x} ${y5}`;
    p50Path += `${idx === 0 ? "M" : "L"} ${x} ${y50}`;
    p95Path += `${idx === 0 ? "M" : "L"} ${x} ${y95}`;
  });

  // Baby coordinates
  const babyX = getX(clampedMonths);
  let babyY = 0;

  if (chartType === "weight") {
    let weightKg = parseFloat(weight) || 0;
    if (weightUnit === "lbs") weightKg = weightKg * 0.45359237;
    babyY = getWeightY(weightKg);
  } else {
    let heightCm = parseFloat(height) || 0;
    if (heightUnit === "in") heightCm = heightCm * 2.54;
    babyY = getHeightY(heightCm);
  }

  const showBabyMarker = babyY >= padT && babyY <= (padT + chartH);

  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="flex border-b border-brand-border/40 mb-8 max-w-md mx-auto print:hidden">
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
          <span>Logs ({records.length})</span>
        </button>
        <button
          onClick={() => setActiveTab("milestones")}
          className={`flex-1 py-3 text-sm font-bold flex items-center justify-center gap-2 border-b-2 transition-all cursor-pointer ${
            activeTab === "milestones"
              ? "border-brand-cyan text-brand-cyan font-extrabold"
              : "border-transparent text-gray-400 hover:text-white"
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Milestones</span>
        </button>
      </div>

      {activeTab === "calculator" && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Inputs Column */}
            <div className="lg:col-span-5 space-y-6 print:hidden">
              
              {/* Gender */}
              <div className="bg-slate-950/40 p-5 rounded-2xl border border-brand-border/40 space-y-4">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Baby Gender
                </label>
                <div className="grid grid-cols-2 gap-2 bg-slate-900/60 p-1.5 rounded-xl border border-brand-border/30">
                  <button
                    onClick={() => setGender("male")}
                    className={`py-2.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                      gender === "male"
                        ? "bg-brand-cyan text-brand-bg shadow-lg shadow-brand-cyan/15 font-extrabold"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    Boy
                  </button>
                  <button
                    onClick={() => setGender("female")}
                    className={`py-2.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                      gender === "female"
                        ? "bg-brand-cyan text-brand-bg shadow-lg shadow-brand-cyan/15 font-extrabold"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    Girl
                  </button>
                </div>
              </div>

              {/* Age */}
              <div className="bg-slate-950/40 p-5 rounded-2xl border border-brand-border/40 space-y-4">
                <div className="flex justify-between items-center">
                  <label htmlFor="babyAgeInput" className="block text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Baby Age
                  </label>
                  <div className="flex bg-slate-900/60 p-0.5 rounded-lg border border-brand-border/30 text-[10px] font-semibold">
                    <button
                      type="button"
                      onClick={() => {
                        setAgeUnit("months");
                        setAgeValue("6");
                      }}
                      className={`px-2.5 py-1 rounded transition-all cursor-pointer ${
                        ageUnit === "months" ? "bg-brand-cyan text-brand-bg font-bold" : "text-gray-400 hover:text-white"
                      }`}
                    >
                      Months
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setAgeUnit("years");
                        setAgeValue("2");
                      }}
                      className={`px-2.5 py-1 rounded transition-all cursor-pointer ${
                        ageUnit === "years" ? "bg-brand-cyan text-brand-bg font-bold" : "text-gray-400 hover:text-white"
                      }`}
                    >
                      Years
                    </button>
                  </div>
                </div>
                <input
                  id="babyAgeInput"
                  type="number"
                  value={ageValue}
                  onChange={(e) => setAgeValue(e.target.value)}
                  className="w-full bg-slate-900/60 border border-brand-border/40 rounded-xl px-3 py-2.5 text-white font-mono text-sm focus:outline-none focus:border-brand-cyan/80"
                  min="0"
                  max="120"
                />
              </div>

              {/* Height */}
              <div className="bg-slate-950/40 p-5 rounded-2xl border border-brand-border/40 space-y-4">
                <div className="flex justify-between items-center">
                  <label htmlFor="babyHeightInput" className="block text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Length / Height
                  </label>
                  <div className="flex bg-slate-900/60 p-0.5 rounded-lg border border-brand-border/30 text-[10px] font-semibold">
                    <button
                      type="button"
                      onClick={() => {
                        setHeightUnit("cm");
                        const val = parseFloat(height);
                        if (!isNaN(val)) setHeight((Math.round(val * 2.54 * 10) / 10).toString());
                      }}
                      className={`px-2.5 py-1 rounded transition-all cursor-pointer ${
                        heightUnit === "cm" ? "bg-brand-cyan text-brand-bg font-bold" : "text-gray-400 hover:text-white"
                      }`}
                    >
                      cm
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setHeightUnit("in");
                        const val = parseFloat(height);
                        if (!isNaN(val)) setHeight((Math.round((val / 2.54) * 10) / 10).toString());
                      }}
                      className={`px-2.5 py-1 rounded transition-all cursor-pointer ${
                        heightUnit === "in" ? "bg-brand-cyan text-brand-bg font-bold" : "text-gray-400 hover:text-white"
                      }`}
                    >
                      in
                    </button>
                  </div>
                </div>
                <input
                  id="babyHeightInput"
                  type="number"
                  step="0.1"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="w-full bg-slate-900/60 border border-brand-border/40 rounded-xl px-3 py-2.5 text-white font-mono text-sm focus:outline-none focus:border-brand-cyan/80"
                  min="1"
                />
              </div>

              {/* Weight */}
              <div className="bg-slate-950/40 p-5 rounded-2xl border border-brand-border/40 space-y-4">
                <div className="flex justify-between items-center">
                  <label htmlFor="babyWeightInput" className="block text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Weight
                  </label>
                  <div className="flex bg-slate-900/60 p-0.5 rounded-lg border border-brand-border/30 text-[10px] font-semibold">
                    <button
                      type="button"
                      onClick={() => {
                        setWeightUnit("kg");
                        const val = parseFloat(weight);
                        if (!isNaN(val)) setWeight((Math.round(val * 0.45359237 * 10) / 10).toString());
                      }}
                      className={`px-2.5 py-1 rounded transition-all cursor-pointer ${
                        weightUnit === "kg" ? "bg-brand-cyan text-brand-bg font-bold" : "text-gray-400 hover:text-white"
                      }`}
                    >
                      kg
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setWeightUnit("lbs");
                        const val = parseFloat(weight);
                        if (!isNaN(val)) setWeight((Math.round((val / 0.45359237) * 10) / 10).toString());
                      }}
                      className={`px-2.5 py-1 rounded transition-all cursor-pointer ${
                        weightUnit === "lbs" ? "bg-brand-cyan text-brand-bg font-bold" : "text-gray-400 hover:text-white"
                      }`}
                    >
                      lbs
                    </button>
                  </div>
                </div>
                <input
                  id="babyWeightInput"
                  type="number"
                  step="0.1"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full bg-slate-900/60 border border-brand-border/40 rounded-xl px-3 py-2.5 text-white font-mono text-sm focus:outline-none focus:border-brand-cyan/80"
                  min="0.1"
                />
              </div>

              {/* Log Button */}
              <button
                onClick={handleAddLog}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-brand-cyan to-brand-indigo hover:opacity-95 text-white font-bold py-3.5 rounded-xl transition-all shadow-md shadow-brand-cyan/10 hover:scale-[1.01] active:scale-[0.99] cursor-pointer text-sm"
              >
                <PlusCircle className="w-5 h-5" />
                <span>Log Growth Assessment</span>
              </button>
            </div>

            {/* Results Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Calculated Outputs Cards */}
              <div className="glass-panel border border-brand-border/85 rounded-3xl p-6 md:p-8 relative overflow-hidden bg-gradient-cyber min-h-[280px] flex flex-col justify-between">
                
                {/* Background glows */}
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-cyan/10 rounded-full blur-[60px] pointer-events-none" />
                <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-brand-indigo/5 rounded-full blur-[60px] pointer-events-none" />

                {results.errorText ? (
                  <div className="flex-grow flex flex-col items-center justify-center text-center space-y-3 py-12">
                    <AlertTriangle className="w-12 h-12 text-rose-400" />
                    <h4 className="text-white font-bold text-base">Growth Assessment Incomplete</h4>
                    <p className="text-xs text-rose-300 max-w-sm">{results.errorText}</p>
                  </div>
                ) : (
                  <div className="space-y-6 flex-grow flex flex-col justify-between">
                    <div className="text-center pb-6 border-b border-brand-border/30">
                      <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest font-sans px-2.5 py-1 bg-brand-cyan/10 border border-brand-cyan/20 rounded-full inline-block mb-3">
                        Calculated WHO Growth Percentiles
                      </span>

                      <div className="flex justify-around items-center py-2">
                        {/* Weight Percentile */}
                        <div className="text-center">
                          <p className="text-[11px] uppercase tracking-wider text-gray-400 font-sans">Weight Percentile</p>
                          <p className="font-display font-extrabold text-4xl text-white mt-1">
                            {results.weightPercentile > 0 ? `${results.weightPercentile}th` : "—"}
                          </p>
                          <span className={`text-[10px] font-bold block mt-1 ${
                            results.weightPercentile < 5 || results.weightPercentile > 95
                              ? "text-rose-400"
                              : "text-brand-emerald"
                          }`}>
                            {results.weightInterpretation}
                          </span>
                        </div>

                        <div className="w-[1px] h-12 bg-brand-border/40 mx-2" />

                        {/* Height Percentile */}
                        <div className="text-center">
                          <p className="text-[11px] uppercase tracking-wider text-gray-400 font-sans">Height Percentile</p>
                          <p className="font-display font-extrabold text-4xl text-white mt-1">
                            {results.heightPercentile > 0 ? `${results.heightPercentile}th` : "—"}
                          </p>
                          <span className={`text-[10px] font-bold block mt-1 ${
                            results.heightPercentile < 5 || results.heightPercentile > 95
                              ? "text-rose-400"
                              : "text-brand-emerald"
                          }`}>
                            {results.heightInterpretation}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Milestones Preview */}
                    <div className="bg-slate-900/60 border border-brand-border/30 rounded-2xl p-5 text-left space-y-2">
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                        <Baby className="w-4 h-4 text-brand-cyan" />
                        <span>Developmental Milestones at {results.ageLabel}</span>
                      </h4>
                      <p className="text-xs text-gray-300 leading-relaxed font-sans">
                        {getMilestones(results.ageMonths)}
                      </p>
                    </div>
                  </div>
                )}

                {/* Print and safety declaration */}
                <div className="mt-4 pt-4 border-t border-brand-border/30 flex justify-between items-center text-xs">
                  <span className="text-[10px] text-rose-300 font-bold flex items-center gap-1">
                    <Shield className="w-3.5 h-3.5 text-rose-400" />
                    <span>Educational Support Only</span>
                  </span>
                  <button
                    onClick={handlePrint}
                    className="flex items-center gap-1 hover:underline text-brand-cyan font-bold cursor-pointer print:hidden"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print Report</span>
                  </button>
                </div>
              </div>

              {/* Dynamic SVG Percentile Chart */}
              {!results.errorText && (
                <div className="bg-slate-900/40 border border-brand-border/50 rounded-3xl p-5 md:p-6 print:hidden">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                      <TrendingUp className="w-4 h-4 text-brand-cyan" />
                      <span>WHO Percentile Growth Curve (0-60 Months)</span>
                    </h4>
                    
                    <div className="flex bg-slate-950/60 p-0.5 rounded-lg border border-brand-border/30 text-[9px] font-bold">
                      <button
                        onClick={() => setChartType("weight")}
                        className={`px-2.5 py-1 rounded transition-all cursor-pointer ${
                          chartType === "weight" ? "bg-brand-cyan text-brand-bg font-bold" : "text-gray-400 hover:text-white"
                        }`}
                      >
                        Weight (kg)
                      </button>
                      <button
                        onClick={() => setChartType("height")}
                        className={`px-2.5 py-1 rounded transition-all cursor-pointer ${
                          chartType === "height" ? "bg-brand-cyan text-brand-bg font-bold" : "text-gray-400 hover:text-white"
                        }`}
                      >
                        Height (cm)
                      </button>
                    </div>
                  </div>

                  {/* SVG Container */}
                  <div className="relative w-full aspect-[5/3] bg-slate-950/80 border border-brand-border/20 rounded-2xl overflow-hidden p-2">
                    <svg viewBox="0 0 500 300" className="w-full h-full">
                      {/* Grid Lines */}
                      <line x1="50" y1="20" x2="480" y2="20" stroke="rgba(255,255,255,0.05)" strokeDasharray="3" />
                      <line x1="50" y1="80" x2="480" y2="80" stroke="rgba(255,255,255,0.05)" strokeDasharray="3" />
                      <line x1="50" y1="140" x2="480" y2="140" stroke="rgba(255,255,255,0.05)" strokeDasharray="3" />
                      <line x1="50" y1="200" x2="480" y2="200" stroke="rgba(255,255,255,0.05)" strokeDasharray="3" />
                      <line x1="50" y1="260" x2="480" y2="260" stroke="rgba(255,255,255,0.05)" strokeDasharray="3" />

                      <line x1="50" y1="20" x2="50" y2="260" stroke="rgba(255,255,255,0.05)" strokeDasharray="3" />
                      <line x1="157.5" y1="20" x2="157.5" y2="260" stroke="rgba(255,255,255,0.05)" strokeDasharray="3" />
                      <line x1="265" y1="20" x2="265" y2="260" stroke="rgba(255,255,255,0.05)" strokeDasharray="3" />
                      <line x1="372.5" y1="20" x2="372.5" y2="260" stroke="rgba(255,255,255,0.05)" strokeDasharray="3" />
                      <line x1="480" y1="20" x2="480" y2="260" stroke="rgba(255,255,255,0.05)" strokeDasharray="3" />

                      {/* Percentile Paths */}
                      <path d={p5Path} fill="none" stroke="rgba(244,63,94,0.6)" strokeWidth="1.5" strokeDasharray="4" />
                      <path d={p50Path} fill="none" stroke="rgba(16,185,129,0.8)" strokeWidth="2.5" />
                      <path d={p95Path} fill="none" stroke="rgba(6,182,212,0.6)" strokeWidth="1.5" strokeDasharray="4" />

                      {/* Axis Labels */}
                      {/* Y-Axis */}
                      {chartType === "weight" ? (
                        <>
                          <text x="25" y={getWeightY(2)+3} fill="#94a3b8" fontSize="8" fontWeight="bold" textAnchor="end">2 kg</text>
                          <text x="25" y={getWeightY(15)+3} fill="#94a3b8" fontSize="8" fontWeight="bold" textAnchor="end">15 kg</text>
                          <text x="25" y={getWeightY(28)+3} fill="#94a3b8" fontSize="8" fontWeight="bold" textAnchor="end">28 kg</text>
                        </>
                      ) : (
                        <>
                          <text x="25" y={getHeightY(40)+3} fill="#94a3b8" fontSize="8" fontWeight="bold" textAnchor="end">40 cm</text>
                          <text x="25" y={getHeightY(82.5)+3} fill="#94a3b8" fontSize="8" fontWeight="bold" textAnchor="end">82 cm</text>
                          <text x="25" y={getHeightY(125)+3} fill="#94a3b8" fontSize="8" fontWeight="bold" textAnchor="end">125 cm</text>
                        </>
                      )}

                      {/* X-Axis */}
                      <text x="50" y="278" fill="#94a3b8" fontSize="8" textAnchor="middle" fontWeight="bold">0m</text>
                      <text x="157.5" y="278" fill="#94a3b8" fontSize="8" textAnchor="middle" fontWeight="bold">15m</text>
                      <text x="265" y="278" fill="#94a3b8" fontSize="8" textAnchor="middle" fontWeight="bold">30m</text>
                      <text x="372.5" y="278" fill="#94a3b8" fontSize="8" textAnchor="middle" fontWeight="bold">45m</text>
                      <text x="480" y="278" fill="#94a3b8" fontSize="8" textAnchor="middle" fontWeight="bold">60m</text>

                      {/* Curve Legends */}
                      <text x="485" y={chartType === "weight" ? getWeightY(data[data.length-1].wP95)+3 : getHeightY(data[data.length-1].hP95)+3} fill="rgba(6,182,212,0.8)" fontSize="8" textAnchor="start" fontWeight="bold">95%</text>
                      <text x="485" y={chartType === "weight" ? getWeightY(data[data.length-1].wP50)+3 : getHeightY(data[data.length-1].hP50)+3} fill="rgba(16,185,129,0.8)" fontSize="8" textAnchor="start" fontWeight="bold">50%</text>
                      <text x="485" y={chartType === "weight" ? getWeightY(data[data.length-1].wP5)+3 : getHeightY(data[data.length-1].hP5)+3} fill="rgba(244,63,94,0.8)" fontSize="8" textAnchor="start" fontWeight="bold">5%</text>

                      {/* Axis Titles */}
                      <text x="265" y="292" fill="#94a3b8" fontSize="9" textAnchor="middle" fontWeight="bold">Baby Age (Months)</text>
                      <text x="10" y="140" fill="#94a3b8" fontSize="9" textAnchor="middle" transform="rotate(-90 10 140)" fontWeight="bold">
                        {chartType === "weight" ? "Weight (kg)" : "Height (cm)"}
                      </text>

                      {/* Baby coordinate overlay */}
                      {showBabyMarker && (
                        <g>
                          <circle cx={babyX} cy={babyY} r="7" fill="rgba(6,182,212,0.2)" className="animate-ping" style={{ transformOrigin: `${babyX}px ${babyY}px` }} />
                          <circle cx={babyX} cy={babyY} r="4.5" fill="#06b6d4" stroke="#ffffff" strokeWidth="1.5" />
                        </g>
                      )}
                    </svg>

                    {/* Chart overlay details info */}
                    <div className="absolute top-2 left-12 text-[9px] bg-slate-900/90 border border-brand-border/40 rounded px-2 py-1 text-gray-400">
                      Solid line represents WHO Median (50th percentile)
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      )}

      {activeTab === "logger" && (
        <div className="max-w-4xl mx-auto space-y-6 text-left">
          <div className="flex justify-between items-center border-b border-brand-border/30 pb-3">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <History className="w-5 h-5 text-brand-cyan" />
              <span>Baby Growth Assessment History</span>
            </h3>
            {records.length > 0 && (
              <button
                onClick={handleClearLogs}
                className="flex items-center gap-1 text-xs text-rose-400 hover:text-rose-300 font-bold hover:underline cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear History</span>
              </button>
            )}
          </div>

          {records.length === 0 ? (
            <div className="glass-panel border border-brand-border/40 rounded-2xl p-12 text-center text-gray-400 space-y-4">
              <Baby className="w-12 h-12 text-gray-600 mx-auto" />
              <div>
                <p className="font-bold text-white text-base">No Saved Growth Records</p>
                <p className="text-xs text-gray-400 mt-1">
                  Use the calculator tab above to assess growth parameters and click &quot;Log Growth Assessment&quot; to save.
                </p>
              </div>
            </div>
          ) : (
            <div className="glass-panel border border-brand-border rounded-2xl overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-900 border-b border-brand-border text-gray-300 font-bold">
                      <th className="p-3">Assessment Date</th>
                      <th className="p-3">Gender & Age</th>
                      <th className="p-3">Logged Height</th>
                      <th className="p-3">Logged Weight</th>
                      <th className="p-3">Percentiles (W / H)</th>
                      <th className="p-3">Growth Evaluation</th>
                      <th className="p-3 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brand-border/30 text-gray-300">
                    {records.map((r) => (
                      <tr key={r.id} className="hover:bg-white/[0.02] transition-all">
                        <td className="p-3 font-medium">{r.timestamp}</td>
                        <td className="p-3 capitalize font-bold text-white">
                          {r.gender} • {r.ageLabel}
                        </td>
                        <td className="p-3 text-gray-400 font-mono">
                          {r.height > 0 ? `${r.height} ${r.heightUnit}` : "—"}
                        </td>
                        <td className="p-3 text-gray-400 font-mono">
                          {r.weight > 0 ? `${r.weight} ${r.weightUnit}` : "—"}
                        </td>
                        <td className="p-3 font-mono font-bold text-brand-cyan">
                          W: {r.weightPercentile > 0 ? `${r.weightPercentile}%` : "—"} / H: {r.heightPercentile > 0 ? `${r.heightPercentile}%` : "—"}
                        </td>
                        <td className="p-3 text-gray-300 text-xs">
                          {r.interpretation}
                        </td>
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

      {activeTab === "milestones" && (
        <div className="max-w-3xl mx-auto space-y-6 text-left text-gray-300 text-sm leading-relaxed font-sans">
          <div className="glass-panel border border-brand-border p-6 rounded-2xl space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-2">
              <BookOpen className="w-5 h-5 text-brand-cyan" />
              <span>WHO & CDC Infant Development Milestones (0-5 Years)</span>
            </h3>

            <div className="space-y-4">
              <p className="text-xs text-gray-400">
                Childhood development encompasses critical milestones across motor, verbal, social, and emotional domains. Review expected stages based on age brackets:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { age: "0 - 3 Months", desc: "Smiles at people, holds head up briefly during tummy time, tracks items with eyes, coos and gurgles." },
                  { age: "4 - 6 Months", desc: "Rolls from tummy to back, sits with support, transfers objects from one hand to another, laughs." },
                  { age: "7 - 9 Months", desc: "Sits without assistance, begins crawling or scooting, responds to own name, shows stranger anxiety." },
                  { age: "10 - 12 Months", desc: "Pulls up to stand, takes first steps holding onto objects, says single words like 'mama' or 'dada'." },
                  { age: "13 - 18 Months", desc: "Walks independently, scribbles on paper, feeds self with fingers, points to show things of interest." },
                  { age: "19 - 24 Months", desc: "Runs, kicks a ball, speaks in short phrases, sorts shapes and colors, follows 2-step instructions." },
                  { age: "3 Years", desc: "Climbs stairs easily, speaks clearly in sentences, expresses a wide range of emotions, cooperates in play." },
                  { age: "4 - 5 Years", desc: "Hops and stands on one foot, counts to 10+, tells stories, draws simple figures, displays high curiosity." }
                ].map((m, idx) => (
                  <div key={idx} className="bg-slate-900/60 p-4 rounded-xl border border-brand-border/30 space-y-1.5">
                    <p className="font-bold text-brand-cyan text-xs uppercase tracking-wider">{m.age}</p>
                    <p className="text-xs text-gray-450 leading-normal">{m.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-rose-500/10 border border-rose-500/20 text-rose-300 rounded-xl p-4 flex gap-3 text-xs leading-normal mt-4">
                <AlertTriangle className="w-5.5 h-5.5 text-rose-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-bold">Important Safety Information:</p>
                  <p>
                    Every child develops at their own unique pace. Milestones are general guidelines. If you have concerns about your child&apos;s growth curves or developmental delays, consult your pediatrician for a full clinical examination.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Printable Sheet */}
      <div className="hidden print:block text-black bg-white p-8 space-y-6 font-sans">
        <div className="border-b-2 border-gray-300 pb-4">
          <h1 className="text-2xl font-bold text-gray-800">Pediatric Growth Chart Report</h1>
          <p className="text-xs text-gray-500">Med Clinic X Growth Assessment Indexing</p>
        </div>

        <div className="grid grid-cols-2 gap-6 text-sm">
          <div className="space-y-1.5">
            <h3 className="font-bold text-gray-700 uppercase text-xs">Child Parameters</h3>
            <p><strong>Biological Gender:</strong> {gender === "male" ? "Boy" : "Girl"}</p>
            <p><strong>Baby Age:</strong> {results.ageLabel}</p>
            <p><strong>Measured Height:</strong> {height} {heightUnit}</p>
            <p><strong>Measured Weight:</strong> {weight} {weightUnit}</p>
          </div>
          
          <div className="space-y-1.5">
            <h3 className="font-bold text-gray-700 uppercase text-xs">WHO Percentile Outcomes</h3>
            <p><strong>Weight Percentile Rank:</strong> {results.weightPercentile > 0 ? `${results.weightPercentile}th percentile` : "N/A"}</p>
            <p><strong>Weight Evaluation:</strong> {results.weightInterpretation}</p>
            <p><strong>Height Percentile Rank:</strong> {results.heightPercentile > 0 ? `${results.heightPercentile}th percentile` : "N/A"}</p>
            <p><strong>Height Evaluation:</strong> {results.heightInterpretation}</p>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-200 text-[10px] text-gray-400 text-center">
          This report is for educational purposes using WHO Growth Standards. It does not replace professional clinical evaluation or pediatric examinations.
        </div>
      </div>
    </div>
  );
}
