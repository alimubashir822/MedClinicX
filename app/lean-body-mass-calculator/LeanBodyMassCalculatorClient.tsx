"use client";

import { useState } from "react";
import { 
  Calculator, 
  BookOpen, 
  Trash2, 
  FileText, 
  AlertTriangle,
  Info,
  Scale,
  Activity,
  PlusCircle
} from "lucide-react";

interface LbmRecord {
  id: string;
  weight: number;
  weightUnit: "kg" | "lbs";
  lbm: number;
  fatPercent: number;
  timestamp: string;
}

export default function LeanBodyMassCalculatorClient() {
  const [activeTab, setActiveTab] = useState<"calculator" | "logger" | "education">("calculator");
  
  // Input States
  const [gender, setGender] = useState<"male" | "female">("male");
  const [age, setAge] = useState<string>("30");
  const [weight, setWeight] = useState<string>("70");
  const [weightUnit, setWeightUnit] = useState<"kg" | "lbs">("kg");
  const [heightUnit, setHeightUnit] = useState<"cm" | "ft-in">("cm");
  
  // Height Metric state
  const [heightCm, setHeightCm] = useState<string>("175");
  
  // Height Imperial states
  const [heightFt, setHeightFt] = useState<string>("5");
  const [heightIn, setHeightIn] = useState<string>("9");

  // Log States
  const [records, setRecords] = useState<LbmRecord[]>([
    { 
      id: "1", 
      weight: 75, 
      weightUnit: "kg", 
      lbm: 59.8, 
      fatPercent: 20.3, 
      timestamp: "Initial Assessment - 08:30 AM" 
    }
  ]);

  // Core calculations
  const calculateLbm = () => {
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

    // Boer LBM Formula
    let boerLbm = 0;
    if (gender === "male") {
      boerLbm = 0.407 * weightKg + 0.267 * hCm - 19.2;
    } else {
      boerLbm = 0.252 * weightKg + 0.473 * hCm - 48.3;
    }

    // Hume LBM Formula
    let humeLbm = 0;
    if (gender === "male") {
      humeLbm = 0.3281 * weightKg + 0.33929 * hCm - 29.5336;
    } else {
      humeLbm = 0.29569 * weightKg + 0.41813 * hCm - 43.2933;
    }

    // Bounds safety checks
    boerLbm = Math.max(10, Math.min(boerLbm, weightKg * 0.95));
    humeLbm = Math.max(10, Math.min(humeLbm, weightKg * 0.95));

    const boerKg = Math.round(boerLbm * 10) / 10;
    const boerLbs = Math.round(boerKg * 2.20462 * 10) / 10;

    const humeKg = Math.round(humeLbm * 10) / 10;
    const humeLbs = Math.round(humeKg * 2.20462 * 10) / 10;

    const fatMassKg = Math.max(0.5, Math.round((weightKg - boerKg) * 10) / 10);
    const fatMassLbs = Math.round(fatMassKg * 2.20462 * 10) / 10;

    const fatPercent = Math.max(1, Math.min(95, Math.round((fatMassKg / weightKg) * 100 * 10) / 10));
    const leanPercent = Math.round((100 - fatPercent) * 10) / 10;

    return {
      boer: { kg: boerKg, lbs: boerLbs },
      hume: { kg: humeKg, lbs: humeLbs },
      fatMass: { kg: fatMassKg, lbs: fatMassLbs },
      fatPercent,
      leanPercent
    };
  };

  const results = calculateLbm();

  const handleAddRecord = () => {
    const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const date = new Date().toLocaleDateString([], { month: "short", day: "numeric" });
    
    const newRecord: LbmRecord = {
      id: Date.now().toString(),
      weight: parseFloat(weight) || 70,
      weightUnit,
      lbm: results.boer.kg,
      fatPercent: results.fatPercent,
      timestamp: `${date} - ${time}`
    };
    
    setRecords(prev => [newRecord, ...prev]);
  };

  const handleDeleteRecord = (id: string) => {
    setRecords(prev => prev.filter(r => r.id !== id));
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full py-4 print:p-0">
      {/* Tabs Selector */}
      <div className="flex border-b border-brand-border/60 mb-8 print:hidden justify-center sm:justify-start">
        {[
          { id: "calculator", label: "LBM Calculator", icon: <Calculator className="w-4 h-4" /> },
          { id: "logger", label: "Composition Log", icon: <Scale className="w-4 h-4" /> },
          { id: "education", label: "Reference Guidelines", icon: <BookOpen className="w-4 h-4" /> }
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
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block">Age (Years)</label>
              <input
                type="number"
                min="1"
                max="120"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-brand-cyan"
              />
            </div>

            {/* Height input with Metric/Imperial unit switcher */}
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

            <button
              onClick={handleAddRecord}
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-cyan to-brand-indigo hover:opacity-95 text-white font-bold text-xs py-3 rounded-xl transition-all shadow-md cursor-pointer"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Log Composition Entry</span>
            </button>
          </div>

          {/* Results Side */}
          <div className="md:col-span-7 space-y-6">
            <div className="glass-panel border border-brand-border rounded-2xl p-8 relative overflow-hidden bg-gradient-to-br from-brand-cyan/5 via-transparent to-transparent">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brand-cyan/10 to-transparent pointer-events-none" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
                {/* Left side metric LBM summary */}
                <div className="text-center sm:text-left space-y-2">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1 justify-center sm:justify-start">
                    <Activity className="w-3.5 h-3.5 text-brand-cyan animate-pulse" />
                    <span>Lean Body Mass (Boer)</span>
                  </p>
                  <div className="space-y-1">
                    <h2 className="text-5xl font-display font-extrabold text-white">
                      {weightUnit === "kg" ? results.boer.kg : results.boer.lbs} 
                      <span className="text-lg font-bold text-gray-500 ml-1.5">{weightUnit}</span>
                    </h2>
                    <p className="text-sm text-gray-400">
                      Secondary value: <span className="font-bold text-brand-cyan">{weightUnit === "kg" ? `${results.boer.lbs} lbs` : `${results.boer.kg} kg`}</span>
                    </p>
                  </div>
                </div>

                {/* Right side body composition details */}
                <div className="text-center sm:text-right border-t sm:border-t-0 sm:border-l border-brand-border/60 pt-6 sm:pt-0 sm:pl-8 space-y-2">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Calculated Body Fat</p>
                  <div>
                    <h2 className="text-4xl font-display font-extrabold text-white">
                      {results.fatPercent}%
                    </h2>
                    <p className="text-sm font-semibold text-brand-cyan mt-1">
                      {weightUnit === "kg" ? `${results.fatMass.kg} kg` : `${results.fatMass.lbs} lbs`} Fat Mass
                    </p>
                  </div>
                </div>
              </div>

              {/* Dynamic Body Composition Bar */}
              <div className="mt-8 space-y-3">
                <div className="flex justify-between items-center text-xs text-gray-400">
                  <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 bg-brand-cyan rounded-full inline-block" /> Lean Mass: {results.leanPercent}%</span>
                  <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 bg-brand-indigo rounded-full inline-block" /> Body Fat: {results.fatPercent}%</span>
                </div>
                <div className="w-full h-4 bg-slate-900 rounded-full overflow-hidden flex border border-brand-border/40 p-0.5">
                  <div 
                    style={{ width: `${results.leanPercent}%` }} 
                    className="h-full bg-gradient-to-r from-brand-cyan to-brand-cyan/70 rounded-full transition-all duration-700 ease-out"
                  />
                  <div 
                    style={{ width: `${results.fatPercent}%` }} 
                    className="h-full bg-gradient-to-r from-brand-indigo/60 to-brand-indigo rounded-full transition-all duration-700 ease-out"
                  />
                </div>
              </div>

              {/* Formula detail reference */}
              <div className="mt-8 pt-6 border-t border-brand-border/40 text-xs text-gray-400 flex flex-col sm:flex-row justify-between items-center gap-3">
                <span className="flex items-center gap-1.5 text-left">
                  <Info className="w-4 h-4 text-brand-cyan shrink-0" />
                  <span>
                    Boer Formula: Male LBM = 0.407*W + 0.267*H - 19.2. Female LBM = 0.252*W + 0.473*H - 48.3.
                  </span>
                </span>
              </div>
            </div>

            {/* Hume Formula & Reference Card */}
            <div className="glass-panel border border-brand-border rounded-2xl p-6 bg-white/[0.01] space-y-3">
              <div className="flex items-center justify-between text-[10px] text-gray-500 border-b border-brand-border/40 pb-3">
                <span className="font-bold uppercase tracking-wider flex items-center gap-1.5 text-brand-cyan">
                  <Activity className="w-3.5 h-3.5" /> Hume Clinical Formula Equivalent
                </span>
                <span>Reference Standard</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[11px] text-gray-500 uppercase font-bold tracking-wider">Hume Lean Mass Target</p>
                  <p className="text-xl font-extrabold text-white mt-1">
                    {weightUnit === "kg" ? results.hume.kg : results.hume.lbs} <span className="text-xs text-gray-500 font-bold">{weightUnit}</span>
                  </p>
                </div>
                <div>
                  <p className="text-[11px] text-gray-500 uppercase font-bold tracking-wider">Equivalent Hume Body Fat</p>
                  <p className="text-xl font-extrabold text-white mt-1">
                    {Math.round((100 - (results.hume.kg / (weightUnit === "kg" ? (parseFloat(weight) || 70) : (parseFloat(weight) || 70) * 0.453592)) * 100) * 10) / 10}%
                  </p>
                </div>
              </div>
              <div className="pt-2 flex justify-between items-center text-xs text-brand-cyan font-bold border-t border-brand-border/20 mt-2">
                <span>* Form calculations are based on standard clinical metrics.</span>
                <button 
                  onClick={handlePrint}
                  className="flex items-center gap-1 hover:underline cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Download Composition Report</span>
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
              <span>Lean Body Mass & Body Composition Logs</span>
            </h3>
            {records.length > 0 && (
              <button
                onClick={() => setRecords([])}
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
                      <th className="py-2.5 px-3">Total Weight</th>
                      <th className="py-2.5 px-3">Lean Body Mass</th>
                      <th className="py-2.5 px-3">Body Fat %</th>
                      <th className="py-2.5 px-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brand-border/30">
                    {records.map((r) => (
                      <tr key={r.id} className="hover:bg-white/[0.02] transition-all">
                        <td className="py-3 px-3 text-white font-medium">{r.timestamp}</td>
                        <td className="py-3 px-3 text-gray-300">{r.weight} {r.weightUnit}</td>
                        <td className="py-3 px-3 text-brand-cyan font-bold">{r.lbm} kg ({Math.round(r.lbm * 2.20462)} lbs)</td>
                        <td className="py-3 px-3 text-brand-indigo font-bold">{r.fatPercent}%</td>
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
                No composition logs saved. Return to the LBM Calculator tab and click &quot;Log Composition Entry&quot; to save.
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
            <span>Clinical Reference & Interpretation Ranges</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-base text-gray-300 leading-relaxed">
            <div className="space-y-4">
              <h4 className="font-bold text-white text-lg">Understanding Body Composition Ranges</h4>
              <p>
                Lean body mass includes everything from muscle tissues and bone minerals to organ mass and cellular water. Standard body fat ranges vary by biological gender and age due to physiological demands.
              </p>
              
              <div className="space-y-2 bg-slate-900/40 border border-brand-border/50 rounded-xl p-5 text-sm">
                <p className="font-bold text-white uppercase tracking-wider text-[10px] text-gray-500">Typical Lean Mass Benchmarks:</p>
                <div className="flex justify-between border-b border-brand-border/20 py-1">
                  <span>Men Healthy Range:</span>
                  <span className="font-bold text-brand-cyan">78% - 90% Lean Mass</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>Women Healthy Range:</span>
                  <span className="font-bold text-brand-cyan://">68% - 80% Lean Mass</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-white text-lg">Body Composition Categories</h4>
              <div className="space-y-3">
                {[
                  { range: "Lower Lean Mass", meaning: "May indicate higher body fat percentage. Recommended to incorporate resistance training and high-protein nutrition." },
                  { range: "Average Lean Mass", meaning: "Balanced body composition for most individuals. Promotes metabolic health, structural stability, and normal energy cycles." },
                  { range: "Higher Lean Mass", meaning: "Often linked with athletic or muscular build. Higher basal metabolism and enhanced calorie consumption." }
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-900/40 border border-brand-border/40 rounded-xl p-3 flex gap-3 items-start">
                    <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full shrink-0 mt-2" />
                    <div>
                      <p className="text-xs font-bold text-white">{item.range}</p>
                      <p className="text-[10px] text-gray-400 mt-0.5 leading-normal">{item.meaning}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-brand-cyan/5 border border-brand-cyan/20 rounded-xl p-4 flex gap-3 text-sm">
            <AlertTriangle className="w-5.5 h-5.5 text-brand-cyan shrink-0 mt-0.5" />
            <p className="text-base leading-normal">
              <strong>Clinical Note:</strong> Formulas represent standard population averages and can underestimate lean mass for highly muscular bodybuilders or overestimate it for sarcopenic elderly patients. For clinical diagnosis, dual-energy X-ray absorptiometry (DEXA) or hydrostatic weighing is advised.
            </p>
          </div>
        </div>
      )}

      {/* Printable Report Layout */}
      <div className="hidden print:block text-black bg-white p-8 space-y-6 font-sans">
        <div className="border-b border-gray-300 pb-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 font-display">Daily Body Composition Assessment</h1>
            <p className="text-xs text-gray-500">Med Clinic X Clinical Analytics Brief</p>
          </div>
          <Scale className="w-8 h-8 text-cyan-600" />
        </div>

        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <h3 className="font-bold text-gray-700 uppercase text-xs mb-1">User Inputs</h3>
            <p><strong>Biological Gender:</strong> {gender}</p>
            <p><strong>User Age:</strong> {age} years</p>
            <p><strong>Input Height:</strong> {heightUnit === "cm" ? `${heightCm} cm` : `${heightFt}'${heightIn}"`}</p>
            <p><strong>Input Weight:</strong> {weight} {weightUnit}</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-700 uppercase text-xs mb-1">Calculated Outputs</h3>
            <p><strong>Boer Lean Mass (Main):</strong> {results.boer.kg} kg ({results.boer.lbs} lbs)</p>
            <p><strong>Equivalent Body Fat %:</strong> {results.fatPercent}%</p>
            <p><strong>Hume Lean Mass:</strong> {results.hume.kg} kg ({results.hume.lbs} lbs)</p>
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
