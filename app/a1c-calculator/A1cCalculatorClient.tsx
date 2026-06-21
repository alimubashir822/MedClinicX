"use client";

import { useState } from "react";
import { 
  Activity, 
  Calculator, 
  BookOpen, 
  Plus, 
  Trash2, 
  FileText, 
  AlertTriangle,
  Sparkles,
  Info,
  Calendar
} from "lucide-react";

interface GlucoseReading {
  id: string;
  type: "Fasting" | "Post-Meal" | "Bedtime" | "Random";
  value: number; // mg/dL
  timestamp: string;
}

export default function A1cCalculatorClient() {
  const [activeTab, setActiveTab] = useState<"converter" | "estimator" | "education">("converter");
  
  // Converter States
  const [a1cInput, setA1cInput] = useState<string>("7.0");
  const [eagMg, setEagMg] = useState<number>(154);
  const [eagMmol, setEagMmol] = useState<number>(8.6);
  const [calcDirection, setCalcDirection] = useState<"a1c-to-eag" | "eag-to-a1c">("a1c-to-eag");
  const [glucoseInput, setGlucoseInput] = useState<string>("154");
  const [glucoseUnit, setGlucoseUnit] = useState<"mg/dL" | "mmol/L">("mg/dL");

  // Estimator States
  const [readings, setReadings] = useState<GlucoseReading[]>([
    { id: "1", type: "Fasting", value: 120, timestamp: "Morning - 08:00 AM" },
    { id: "2", type: "Post-Meal", value: 165, timestamp: "After Lunch - 02:00 PM" },
    { id: "3", type: "Bedtime", value: 140, timestamp: "Before Sleep - 10:00 PM" }
  ]);
  const [newReadingType, setNewReadingType] = useState<"Fasting" | "Post-Meal" | "Bedtime" | "Random">("Fasting");
  const [newReadingValue, setNewReadingValue] = useState<string>("");

  // Helper calculation functions
  const calculateEagFromA1c = (a1c: number) => {
    // ADA Formula: eAG (mg/dL) = 28.7 * HbA1c - 46.7
    const mg = 28.7 * a1c - 46.7;
    // ADA Formula: eAG (mmol/L) = 1.594 * HbA1c - 2.59
    const mmol = 1.594 * a1c - 2.59;
    return {
      mg: Math.round(mg * 10) / 10,
      mmol: Math.round(mmol * 10) / 10
    };
  };

  const calculateA1cFromEag = (val: number, unit: "mg/dL" | "mmol/L") => {
    if (unit === "mg/dL") {
      const a1c = (val + 46.7) / 28.7;
      return Math.round(a1c * 100) / 100;
    } else {
      const a1c = (val + 2.59) / 1.594;
      return Math.round(a1c * 100) / 100;
    }
  };

  const handleA1cChange = (val: string) => {
    setA1cInput(val);
    const num = parseFloat(val);
    if (!isNaN(num) && num >= 3 && num <= 25) {
      const result = calculateEagFromA1c(num);
      setEagMg(Math.round(result.mg));
      setEagMmol(result.mmol);
    }
  };

  const handleGlucoseChange = (val: string, unit: "mg/dL" | "mmol/L" = glucoseUnit) => {
    setGlucoseInput(val);
    const num = parseFloat(val);
    if (!isNaN(num) && num > 0) {
      const a1c = calculateA1cFromEag(num, unit);
      if (a1c >= 3 && a1c <= 25) {
        setA1cInput(a1c.toString());
        if (unit === "mg/dL") {
          setEagMg(num);
          setEagMmol(Math.round((1.594 * a1c - 2.59) * 10) / 10);
        } else {
          setEagMmol(num);
          setEagMg(Math.round(28.7 * a1c - 46.7));
        }
      }
    }
  };

  const getA1cRange = (val: number) => {
    if (val < 5.7) {
      return {
        label: "Normal",
        desc: "An HbA1c below 5.7% is considered normal. This indicates an optimal average blood glucose range and lower risk for developing Type 2 diabetes.",
        color: "text-brand-emerald bg-brand-emerald/10 border-brand-emerald/20",
        barColor: "bg-brand-emerald",
        position: Math.min(100, Math.max(0, (val / 10) * 100))
      };
    } else if (val >= 5.7 && val <= 6.4) {
      return {
        label: "Prediabetes",
        desc: "An HbA1c between 5.7% and 6.4% indicates prediabetes. This means blood glucose averages are higher than normal, raising the risk of developing Type 2 diabetes. Lifestyle changes can often reverse this.",
        color: "text-amber-400 bg-amber-400/10 border-amber-400/20",
        barColor: "bg-amber-400",
        position: Math.min(100, Math.max(0, (val / 10) * 100))
      };
    } else {
      return {
        label: "Diabetes Range",
        desc: "An HbA1c of 6.5% or higher indicates diabetes. This requires medical diagnosis, management, and tracking of glucose metrics to prevent complications.",
        color: "text-rose-400 bg-rose-400/10 border-rose-400/20",
        barColor: "bg-rose-400",
        position: Math.min(100, Math.max(0, (val / 10) * 100))
      };
    }
  };

  const currentA1cNum = parseFloat(a1cInput) || 7.0;
  const currentRange = getA1cRange(currentA1cNum);

  // Estimator logic
  const averageGlucose = readings.length > 0 
    ? Math.round(readings.reduce((sum, r) => sum + r.value, 0) / readings.length)
    : 0;

  const estimatedA1c = averageGlucose > 0
    ? Math.round(((averageGlucose + 46.7) / 28.7) * 10) / 10
    : 0;

  const handleAddReading = (e: React.FormEvent) => {
    e.preventDefault();
    const val = parseFloat(newReadingValue);
    if (!isNaN(val) && val > 30 && val < 600) {
      const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const newReading: GlucoseReading = {
        id: Date.now().toString(),
        type: newReadingType,
        value: val,
        timestamp: `${newReadingType} Reading - ${time}`
      };
      setReadings(prev => [newReading, ...prev]);
      setNewReadingValue("");
    }
  };

  const handleDeleteReading = (id: string) => {
    setReadings(prev => prev.filter(r => r.id !== id));
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full py-4">
      {/* Background glow elements */}
      <div className="fixed top-0 right-1/4 w-[500px] h-[500px] bg-brand-cyan/4 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="fixed bottom-0 left-1/4 w-[500px] h-[500px] bg-brand-indigo/4 rounded-full blur-[120px] -z-10 pointer-events-none" />

      {/* Tabs list */}
      <div className="flex border-b border-brand-border/60 mb-8 print:hidden justify-center sm:justify-start">
        {[
          { id: "converter", label: "HbA1c Converter", icon: <Calculator className="w-4 h-4" /> },
          { id: "estimator", label: "Estimated A1c Log", icon: <Calendar className="w-4 h-4" /> },
          { id: "education", label: "HbA1c Reference", icon: <BookOpen className="w-4 h-4" /> }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as "converter" | "estimator" | "education")}
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

      {/* TAB 1: CONVERTER */}
      {activeTab === "converter" && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left panel inputs */}
          <div className="md:col-span-5 glass-panel border border-brand-border rounded-2xl p-6 space-y-6">
            <h3 className="text-white font-semibold font-display text-sm tracking-wide uppercase flex items-center gap-2 border-b border-brand-border/50 pb-3">
              <Calculator className="w-4 h-4 text-brand-cyan" />
              <span>Input Parameters</span>
            </h3>

            {/* Direction Selector */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Conversion Direction</label>
              <div className="grid grid-cols-2 gap-2 bg-brand-bg/50 p-1 rounded-xl border border-brand-border">
                <button
                  onClick={() => setCalcDirection("a1c-to-eag")}
                  className={`py-2 text-[10px] font-bold rounded-lg transition-all cursor-pointer ${
                    calcDirection === "a1c-to-eag"
                      ? "bg-brand-cyan text-brand-bg shadow-sm"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  HbA1c &rarr; eAG
                </button>
                <button
                  onClick={() => setCalcDirection("eag-to-a1c")}
                  className={`py-2 text-[10px] font-bold rounded-lg transition-all cursor-pointer ${
                    calcDirection === "eag-to-a1c"
                      ? "bg-brand-cyan text-brand-bg shadow-sm"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  eAG &rarr; HbA1c
                </button>
              </div>
            </div>

            {/* Input fields based on direction */}
            {calcDirection === "a1c-to-eag" ? (
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">HbA1c Value</label>
                  <span className="text-[10px] text-gray-500 font-mono">Range: 3% - 25%</span>
                </div>
                <div className="relative">
                  <input
                    type="number"
                    step="0.1"
                    min="3"
                    max="25"
                    value={a1cInput}
                    onChange={(e) => handleA1cChange(e.target.value)}
                    className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-3 text-lg font-bold text-white focus:outline-none focus:border-brand-cyan"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-xs text-gray-500">%</span>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Glucose Unit</label>
                  <div className="grid grid-cols-2 gap-2 bg-brand-bg/50 p-1 rounded-xl border border-brand-border">
                    <button
                      onClick={() => {
                        setGlucoseUnit("mg/dL");
                        handleGlucoseChange(glucoseInput, "mg/dL");
                      }}
                      className={`py-1.5 text-[9px] font-bold rounded-md transition-all cursor-pointer ${
                        glucoseUnit === "mg/dL"
                          ? "bg-brand-border/60 text-white"
                          : "text-gray-500 hover:text-gray-300"
                      }`}
                    >
                      mg/dL (US Standard)
                    </button>
                    <button
                      onClick={() => {
                        setGlucoseUnit("mmol/L");
                        handleGlucoseChange(glucoseInput, "mmol/L");
                      }}
                      className={`py-1.5 text-[9px] font-bold rounded-md transition-all cursor-pointer ${
                        glucoseUnit === "mmol/L"
                          ? "bg-brand-border/60 text-white"
                          : "text-gray-500 hover:text-gray-300"
                      }`}
                    >
                      mmol/L (International)
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Average Glucose</label>
                  </div>
                  <div className="relative">
                    <input
                      type="number"
                      step={glucoseUnit === "mg/dL" ? "1" : "0.1"}
                      value={glucoseInput}
                      onChange={(e) => handleGlucoseChange(e.target.value)}
                      className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-3 text-lg font-bold text-white focus:outline-none focus:border-brand-cyan"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-xs text-gray-500">{glucoseUnit}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Quick Presets */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Common Presets</label>
              <div className="flex flex-wrap gap-1.5">
                {[
                  { a1c: 5.5, label: "Normal" },
                  { a1c: 6.0, label: "Prediabetes" },
                  { a1c: 7.0, label: "ADA Target" },
                  { a1c: 9.0, label: "High" }
                ].map((preset) => (
                  <button
                    key={preset.a1c}
                    onClick={() => {
                      if (calcDirection === "a1c-to-eag") {
                        handleA1cChange(preset.a1c.toString());
                      } else {
                        const eag = calculateEagFromA1c(preset.a1c);
                        const glucoseVal = glucoseUnit === "mg/dL" ? eag.mg : eag.mmol;
                        handleGlucoseChange(glucoseVal.toString(), glucoseUnit);
                        setA1cInput(preset.a1c.toString());
                        setEagMg(Math.round(eag.mg));
                        setEagMmol(eag.mmol);
                      }
                    }}
                    className="text-[9px] font-bold border border-brand-border hover:border-brand-cyan bg-brand-bg/30 text-gray-400 hover:text-brand-cyan px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
                  >
                    {preset.a1c}% ({preset.label})
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right panel outputs */}
          <div className="md:col-span-7 space-y-6">
            {/* Main Result Card */}
            <div className="glass-panel border border-brand-border rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brand-cyan/10 to-transparent pointer-events-none" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
                {/* Left Result block */}
                <div className="text-center sm:text-left space-y-2">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Estimated Average Glucose</p>
                  <div className="space-y-1">
                    <h2 className="text-5xl font-display font-extrabold text-white">
                      {eagMg} <span className="text-lg font-bold text-gray-500">mg/dL</span>
                    </h2>
                    <p className="text-lg font-semibold text-brand-cyan">
                      {eagMmol} <span className="text-xs text-gray-500">mmol/L</span>
                    </p>
                  </div>
                </div>

                {/* Right Result block */}
                <div className="text-center sm:text-right border-t sm:border-t-0 sm:border-l border-brand-border/60 pt-6 sm:pt-0 sm:pl-8 space-y-2">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">HbA1c Conversion</p>
                  <div>
                    <h2 className="text-5xl font-display font-extrabold text-white">
                      {currentA1cNum}%
                    </h2>
                    <span className={`inline-block text-[9px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full border mt-2 ${currentRange.color}`}>
                      {currentRange.label}
                    </span>
                  </div>
                </div>
              </div>

              {/* Gauge Bar */}
              <div className="mt-8 pt-6 border-t border-brand-border/40">
                <div className="flex justify-between text-[9px] font-bold text-gray-500 uppercase tracking-wider mb-2">
                  <span>Normal (&lt;5.7%)</span>
                  <span>Prediabetes (5.7% - 6.4%)</span>
                  <span>Diabetes (&ge;6.5%)</span>
                </div>
                <div className="h-2 w-full bg-slate-900 rounded-full relative overflow-hidden flex">
                  <div className="w-[57%] bg-brand-emerald h-full border-r border-brand-bg" />
                  <div className="w-[8%] bg-amber-400 h-full border-r border-brand-bg" />
                  <div className="w-[35%] bg-rose-400 h-full" />
                </div>
                {/* Pointer Indicator */}
                <div className="relative w-full h-4 mt-1">
                  <div 
                    className="absolute top-0 -translate-x-1/2 flex flex-col items-center transition-all duration-300"
                    style={{ left: `${Math.min(98, Math.max(2, (currentA1cNum / 14) * 100))}%` }}
                  >
                    <div className="w-0.5 h-1.5 bg-white" />
                    <span className="text-[9px] font-extrabold text-white mt-0.5">{currentA1cNum}%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Reference Interpretation Brief */}
            <div className="glass-panel border border-brand-border rounded-2xl p-6 space-y-3 bg-white/[0.01]">
              <div className="flex items-center gap-2 text-brand-cyan">
                <Info className="w-4 h-4" />
                <h4 className="text-xs font-bold uppercase tracking-wider">Clinical Guidance & Interpretation</h4>
              </div>
              <p className="text-base text-gray-300 leading-relaxed">
                {currentRange.desc}
              </p>
              <div className="pt-2 border-t border-brand-border/40 flex flex-wrap gap-4 items-center justify-between text-[10px] text-gray-500">
                <span>ADA (American Diabetes Association) Standards</span>
                <button 
                  onClick={handlePrint}
                  className="flex items-center gap-1 text-brand-cyan hover:underline font-semibold cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Download Clinic Briefing Sheet</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: ESTIMATOR LOG */}
      {activeTab === "estimator" && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left panel form logger */}
          <div className="md:col-span-5 glass-panel border border-brand-border rounded-2xl p-6 space-y-6">
            <h3 className="text-white font-semibold font-display text-sm tracking-wide uppercase flex items-center gap-2 border-b border-brand-border/50 pb-3">
              <Plus className="w-4 h-4 text-brand-cyan" />
              <span>Log Blood Sugar</span>
            </h3>

            <form onSubmit={handleAddReading} className="space-y-4">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Reading Context</label>
                <div className="grid grid-cols-2 gap-1.5">
                  {["Fasting", "Post-Meal", "Bedtime", "Random"].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setNewReadingType(type as "Fasting" | "Post-Meal" | "Bedtime" | "Random")}
                      className={`py-2 text-[9px] font-bold rounded-lg border transition-all cursor-pointer ${
                        newReadingType === type
                          ? "bg-brand-cyan text-brand-bg border-brand-cyan font-bold"
                          : "glass-panel border-brand-border text-gray-400 hover:text-white"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Glucose Reading Value</label>
                <div className="relative">
                  <input
                    type="number"
                    min="30"
                    max="600"
                    required
                    value={newReadingValue}
                    onChange={(e) => setNewReadingValue(e.target.value)}
                    placeholder="Enter reading"
                    className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-xs text-gray-500">mg/dL</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full inline-flex justify-center items-center gap-1.5 bg-gradient-to-r from-brand-cyan to-brand-indigo hover:opacity-95 text-white font-bold text-xs py-3 rounded-xl transition-all shadow-md cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add to Log</span>
              </button>
            </form>

            <div className="bg-brand-cyan/5 border border-brand-cyan/15 rounded-xl p-4 text-[10px] text-gray-400 space-y-2">
              <div className="flex items-center gap-1.5 text-brand-cyan font-bold uppercase tracking-wider">
                <Info className="w-3.5 h-3.5 shrink-0" />
                <span>Estimator Guide</span>
              </div>
              <p className="text-base leading-relaxed">
                Add multiple self-monitoring readings to build an average. Since HbA1c represents a 3-month average, logs containing readings across multiple days provide more accurate estimations.
              </p>
            </div>
          </div>

          {/* Right panel summary estimation and list */}
          <div className="md:col-span-7 space-y-6">
            {/* Projected Estimation Card */}
            <div className="glass-panel border border-brand-border rounded-2xl p-6 relative overflow-hidden bg-gradient-to-br from-brand-indigo/10 via-transparent to-transparent">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest flex items-center gap-1.5 mb-1.5">
                    <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                    <span>Projected HbA1c Estimation</span>
                  </p>
                  <h2 className="text-4xl font-display font-extrabold text-white">
                    {estimatedA1c > 0 ? `${estimatedA1c}%` : "-- %"}
                  </h2>
                  <p className="text-[10px] text-gray-500 mt-1">
                    Based on {readings.length} logged blood sugar readings
                  </p>
                </div>

                <div className="text-right border-l border-brand-border/60 pl-6 space-y-1">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Average Glucose</p>
                  <p className="text-xl font-bold text-white leading-none">
                    {averageGlucose > 0 ? `${averageGlucose} mg/dL` : "--"}
                  </p>
                  <p className="text-[9px] text-gray-500">
                    {averageGlucose > 0 ? `${Math.round((1.594 * estimatedA1c - 2.59) * 10) / 10} mmol/L` : ""}
                  </p>
                </div>
              </div>

              {/* Range Badge Overlay */}
              {estimatedA1c > 0 && (
                <div className="mt-4 pt-4 border-t border-brand-border/40 flex justify-between items-center">
                  <span className="text-[10px] text-gray-400 font-medium">Estimated Status</span>
                  <span className={`text-[9px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${getA1cRange(estimatedA1c).color}`}>
                    {getA1cRange(estimatedA1c).label}
                  </span>
                </div>
              )}
            </div>

            {/* Log list */}
            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Logged Readings List</span>
                {readings.length > 0 && (
                  <button
                    onClick={() => setReadings([])}
                    className="text-[9px] font-semibold text-rose-400 hover:text-rose-300 transition-colors cursor-pointer"
                  >
                    Clear All
                  </button>
                )}
              </div>

              <div className="space-y-1.5 max-h-[220px] overflow-y-auto pr-1">
                {readings.length > 0 ? (
                  readings.map((r) => (
                    <div
                      key={r.id}
                      className="bg-slate-900/60 border border-brand-border rounded-xl p-3 flex justify-between items-center text-[10px] group hover:border-brand-cyan/20 transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <span className={`px-2 py-0.5 rounded text-[8px] font-extrabold uppercase border ${
                          r.type === "Fasting" ? "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" :
                          r.type === "Post-Meal" ? "text-brand-cyan bg-brand-cyan/10 border-brand-cyan/20" :
                          r.type === "Bedtime" ? "text-purple-400 bg-purple-500/10 border-purple-500/20" :
                          "text-gray-400 bg-gray-500/10 border-gray-500/20"
                        }`}>
                          {r.type}
                        </span>
                        <div>
                          <p className="font-bold text-white">{r.value} mg/dL</p>
                          <p className="text-[8px] text-gray-500 mt-0.5">{r.timestamp}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => handleDeleteReading(r.id)}
                        className="text-gray-500 hover:text-rose-400 p-1 rounded transition-colors opacity-0 group-hover:opacity-100 cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))
                ) : (
                  <div className="glass-panel border-brand-border border rounded-xl p-8 text-center text-gray-500 text-xs">
                    No readings added to the log. Enter glucose readings above to calculate average.
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
            <span>Clinical Information & Reference Guide</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-base text-gray-300 leading-relaxed">
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-bold text-white text-lg">What is Hemoglobin A1c (HbA1c)?</h4>
                <p>
                  Hemoglobin A1c, often referred to as HbA1c or simply A1C, is a blood test that measures your average blood sugar levels over the past 2 to 3 months. 
                </p>
                <p>
                  It does this by measuring the percentage of hemoglobin (a protein in red blood cells that carries oxygen) that is coated with sugar (glycated). Because red blood cells live for about 120 days, the test gives a stable estimate of long-term glucose control.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-white text-lg">Estimated Average Glucose (eAG)</h4>
                <p>
                  Your Estimated Average Glucose (eAG) is calculated directly from your HbA1c result. It is reported in the same units (mg/dL or mmol/L) as daily self-monitoring finger-prick tests or Continuous Glucose Monitors (CGMs).
                </p>
                <p>
                  This calculator uses formulas validated by the ADAG (A1C-Derived Average Glucose) study to ensure clinical precision.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-bold text-white text-lg">Clinical Classification Targets</h4>
                <p>
                  The American Diabetes Association (ADA) categorizes A1C ranges as:
                </p>
                <ul className="space-y-2 mt-2">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-brand-emerald rounded-full mt-1.5 shrink-0" />
                    <span><strong>Normal:</strong> Below 5.7% (Average glucose &lt; 117 mg/dL)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-1.5 shrink-0" />
                    <span><strong>Prediabetes:</strong> 5.7% to 6.4% (Average glucose 117 - 137 mg/dL)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-rose-400 rounded-full mt-1.5 shrink-0" />
                    <span><strong>Diabetes Range:</strong> 6.5% or higher (Average glucose &ge; 140 mg/dL)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-brand-cyan/5 border border-brand-cyan/20 rounded-xl p-4 flex gap-3 mt-4">
                <AlertTriangle className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h5 className="font-bold text-white text-[11px] uppercase tracking-wider">Disclaimer</h5>
                  <p className="text-base text-gray-400 leading-normal">
                    This calculator is for educational and tracking purposes. It does not replace laboratory testing or professional medical advice. Always consult with a qualified provider or clinic team before making changes to your health regimen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Printable Clinic Briefing Layout (hidden on screen, visible when printing) */}
      <div className="hidden print:block text-black bg-white p-8 space-y-6 font-sans">
        <div className="border-b border-gray-300 pb-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">HbA1c & Glucose Clinic Report</h1>
            <p className="text-xs text-gray-500">Med Clinic X Automated Clinical Briefing Sheet</p>
          </div>
          <Activity className="w-8 h-8 text-cyan-600" />
        </div>

        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <h3 className="font-bold text-gray-700 uppercase text-xs mb-1">Calculation Details</h3>
            <p><strong>Input Value:</strong> {calcDirection === "a1c-to-eag" ? `${a1cInput}% HbA1c` : `${glucoseInput} ${glucoseUnit}`}</p>
            <p><strong>Calculation Method:</strong> American Diabetes Association (ADA) Standard Formula</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-700 uppercase text-xs mb-1">Converted Estimates</h3>
            <p><strong>Calculated HbA1c:</strong> {currentA1cNum}%</p>
            <p><strong>Estimated Average Glucose (eAG):</strong> {eagMg} mg/dL ({eagMmol} mmol/L)</p>
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 space-y-2">
          <h3 className="font-bold text-gray-800 text-xs">Clinical Range: {currentRange.label}</h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            {currentRange.desc}
          </p>
        </div>

        {readings.length > 0 && (
          <div className="space-y-2">
            <h3 className="font-bold text-gray-800 text-xs">Self-Monitoring Average (Log)</h3>
            <p className="text-xs">Logged readings count: {readings.length} · Average glucose: {averageGlucose} mg/dL &rarr; Est. A1C: {estimatedA1c}%</p>
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-gray-200 text-gray-600">
                  <th className="py-1">Type</th>
                  <th className="py-1">Reading Value</th>
                  <th className="py-1">Timestamp</th>
                </tr>
              </thead>
              <tbody>
                {readings.map((r, i) => (
                  <tr key={i} className="border-b border-gray-100">
                    <td className="py-1">{r.type}</td>
                    <td className="py-1">{r.value} mg/dL</td>
                    <td className="py-1">{r.timestamp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="pt-8 border-t border-gray-200 text-[10px] text-gray-500 text-center space-y-1">
          <p>This document is generated by Med Clinic X Clinical Calculators and is intended to guide patient-doctor discussions during check-ups.</p>
          <p>&copy; {new Date().getFullYear()} Med Clinic X Inc. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
