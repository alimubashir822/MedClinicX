"use client";

import { useState } from "react";
import { 
  Calculator, 
  BookOpen, 
  Plus, 
  Trash2, 
  AlertTriangle,
  Sparkles,
  Info,
  Calendar,
  Coffee,
  Heart,
  FileText
} from "lucide-react";

interface SavedDose {
  id: string;
  timestamp: string;
  currentBg: number;
  carbs: number;
  correctionDose: number;
  carbDose: number;
  totalDose: number;
  bgUnit: "mg/dL" | "mmol/L";
}

export default function InsulinDosageCalculatorClient() {
  const [activeTab, setActiveTab] = useState<"dose" | "estimator" | "education">("dose");
  
  // bg unit
  const [bgUnit, setBgUnit] = useState<"mg/dL" | "mmol/L">("mg/dL");

  // Dose Calculator States
  const [currentBgInput, setCurrentBgInput] = useState<string>("180");
  const [targetBgInput, setTargetBgInput] = useState<string>("100");
  const [isfInput, setIsfInput] = useState<string>("50"); // Insulin Sensitivity Factor (Correction Factor)
  const [icrInput, setIcrInput] = useState<string>("10"); // Insulin to Carb Ratio (g/unit)
  const [carbsInput, setCarbsInput] = useState<string>("60"); // Carbohydrates eaten (g)

  // TDD Estimator States
  const [tddInput, setTddInput] = useState<string>("40"); // Total Daily Dose (Units)
  const [estimatedIcr, setEstimatedIcr] = useState<number>(12.5); // 500 / 40
  const [estimatedIsf, setEstimatedIsf] = useState<number>(45); // 1800 / 40

  // Saved calculations
  const [savedDoses, setSavedDoses] = useState<SavedDose[]>([
    {
      id: "1",
      timestamp: "Today - Breakfast",
      currentBg: 165,
      carbs: 45,
      correctionDose: 1.3,
      carbDose: 4.5,
      totalDose: 5.8,
      bgUnit: "mg/dL"
    }
  ]);

  // Handle unit conversions
  const handleBgUnitChange = (unit: "mg/dL" | "mmol/L") => {
    setBgUnit(unit);
    // Convert current BG
    const currentVal = parseFloat(currentBgInput);
    if (!isNaN(currentVal)) {
      if (unit === "mmol/L") {
        setCurrentBgInput((Math.round((currentVal / 18.0182) * 10) / 10).toString());
      } else {
        setCurrentBgInput(Math.round(currentVal * 18.0182).toString());
      }
    }
    // Convert target BG
    const targetVal = parseFloat(targetBgInput);
    if (!isNaN(targetVal)) {
      if (unit === "mmol/L") {
        setTargetBgInput((Math.round((targetVal / 18.0182) * 10) / 10).toString());
      } else {
        setTargetBgInput(Math.round(targetVal * 18.0182).toString());
      }
    }
    // Convert ISF
    const isfVal = parseFloat(isfInput);
    if (!isNaN(isfVal)) {
      if (unit === "mmol/L") {
        setIsfInput((Math.round((isfVal / 18.0182) * 10) / 10).toString());
      } else {
        setIsfInput(Math.round(isfVal * 18.0182).toString());
      }
    }
  };

  // Calculations
  const currentBg = parseFloat(currentBgInput) || 0;
  const targetBg = parseFloat(targetBgInput) || 0;
  const isf = parseFloat(isfInput) || 1;
  const icr = parseFloat(icrInput) || 1;
  const carbs = parseFloat(carbsInput) || 0;

  // Correction Dose = (Current BG - Target BG) / ISF
  const correctionDose = currentBg > targetBg 
    ? Math.max(0, (currentBg - targetBg) / isf) 
    : 0;

  // Carb Dose = Carbs / ICR
  const carbDose = carbs > 0 ? (carbs / icr) : 0;

  // Total Dose
  const rawTotalDose = correctionDose + carbDose;
  const totalDoseRounded = Math.round(rawTotalDose * 10) / 10;
  const totalDoseNearestHalf = Math.round(rawTotalDose * 2) / 2;

  // Estimator Calculations based on TDD
  const handleTddChange = (val: string) => {
    setTddInput(val);
    const tdd = parseFloat(val);
    if (!isNaN(tdd) && tdd > 0) {
      // Rule of 500 for ICR
      const icrVal = Math.round((500 / tdd) * 10) / 10;
      setEstimatedIcr(icrVal);

      // Rule of 1800 for ISF (mg/dL) or Rule of 100 (mmol/L)
      if (bgUnit === "mg/dL") {
        setEstimatedIsf(Math.round(1800 / tdd));
      } else {
        setEstimatedIsf(Math.round((100 / tdd) * 10) / 10);
      }
    }
  };

  const applyEstimates = () => {
    setIcrInput(estimatedIcr.toString());
    setIsfInput(estimatedIsf.toString());
    setActiveTab("dose");
  };

  const handleSaveDose = () => {
    if (rawTotalDose <= 0) return;
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const day = new Date().toLocaleDateString([], { weekday: 'short' });
    const newSaved: SavedDose = {
      id: Date.now().toString(),
      timestamp: `${day} at ${time}`,
      currentBg,
      carbs,
      correctionDose: Math.round(correctionDose * 10) / 10,
      carbDose: Math.round(carbDose * 10) / 10,
      totalDose: totalDoseRounded,
      bgUnit
    };
    setSavedDoses(prev => [newSaved, ...prev]);
  };

  const handleDeleteSaved = (id: string) => {
    setSavedDoses(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Tabs Menu */}
      <div className="flex justify-center border-b border-brand-border/40 mb-8 overflow-x-auto">
        <div className="flex gap-2 p-1 bg-slate-900/60 rounded-xl border border-brand-border/30 mb-4">
          <button
            onClick={() => setActiveTab("dose")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shrink-0 ${
              activeTab === "dose"
                ? "bg-brand-cyan text-slate-950 shadow-lg shadow-brand-cyan/20"
                : "text-gray-400 hover:text-white hover:bg-slate-800/40"
            }`}
          >
            <Calculator className="w-4 h-4" />
            Calculate Dose
          </button>
          <button
            onClick={() => setActiveTab("estimator")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shrink-0 ${
              activeTab === "estimator"
                ? "bg-brand-cyan text-slate-950 shadow-lg shadow-brand-cyan/20"
                : "text-gray-400 hover:text-white hover:bg-slate-800/40"
            }`}
          >
            <Sparkles className="w-4 h-4" />
            ISF & ICR Estimator
          </button>
          <button
            onClick={() => setActiveTab("education")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shrink-0 ${
              activeTab === "education"
                ? "bg-brand-cyan text-slate-950 shadow-lg shadow-brand-cyan/20"
                : "text-gray-400 hover:text-white hover:bg-slate-800/40"
            }`}
          >
            <BookOpen className="w-4 h-4" />
            Clinical Education
          </button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left and Middle Sections (Inputs and Results) */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Active Tab: Dose Calculator */}
          {activeTab === "dose" && (
            <div className="glass-panel border border-brand-border/40 rounded-2xl p-6 md:p-8 space-y-6">
              
              <div className="flex justify-between items-center border-b border-brand-border/20 pb-4">
                <h3 className="text-xl font-bold text-white font-display">Insulin Bolus Calculation</h3>
                
                {/* Unit Selector */}
                <div className="flex border border-brand-border/40 rounded-lg overflow-hidden text-xs">
                  <button
                    onClick={() => handleBgUnitChange("mg/dL")}
                    className={`px-3 py-1.5 font-bold transition-all ${
                      bgUnit === "mg/dL"
                        ? "bg-brand-cyan text-slate-950"
                        : "bg-slate-950 text-gray-400 hover:text-white"
                    }`}
                  >
                    mg/dL
                  </button>
                  <button
                    onClick={() => handleBgUnitChange("mmol/L")}
                    className={`px-3 py-1.5 font-bold transition-all ${
                      bgUnit === "mmol/L"
                        ? "bg-brand-cyan text-slate-950"
                        : "bg-slate-950 text-gray-400 hover:text-white"
                    }`}
                  >
                    mmol/L
                  </button>
                </div>
              </div>

              {/* Form Controls */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Current Blood Glucose */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider">
                    Current Blood Glucose ({bgUnit})
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={currentBgInput}
                      onChange={(e) => setCurrentBgInput(e.target.value)}
                      className="w-full bg-slate-950/80 border border-brand-border hover:border-brand-cyan/40 focus:border-brand-cyan rounded-xl px-4 py-3 text-white text-lg font-bold transition-colors focus:outline-none"
                    />
                    <div className="absolute right-3 top-3.5 text-xs text-gray-500 font-bold">{bgUnit}</div>
                  </div>
                  <span className="text-[10px] text-gray-500 block">
                    Range: {bgUnit === "mg/dL" ? "40 - 500 mg/dL" : "2.2 - 27.8 mmol/L"}
                  </span>
                </div>

                {/* Target Blood Glucose */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider">
                    Target Blood Glucose ({bgUnit})
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={targetBgInput}
                      onChange={(e) => setTargetBgInput(e.target.value)}
                      className="w-full bg-slate-950/80 border border-brand-border hover:border-brand-cyan/40 focus:border-brand-cyan rounded-xl px-4 py-3 text-white text-lg font-bold transition-colors focus:outline-none"
                    />
                    <div className="absolute right-3 top-3.5 text-xs text-gray-500 font-bold">{bgUnit}</div>
                  </div>
                  <span className="text-[10px] text-gray-500 block">
                    Typical target is 100 mg/dL (5.6 mmol/L)
                  </span>
                </div>

                {/* Insulin Sensitivity Factor (ISF) */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                      Correction Factor (ISF)
                    </label>
                    <div className="group relative cursor-pointer text-brand-cyan">
                      <Info className="w-3.5 h-3.5" />
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 hidden group-hover:block bg-slate-950 text-gray-300 text-[10px] p-2.5 rounded-lg border border-brand-border/60 z-30 font-normal leading-normal">
                        Blood glucose reduction (in {bgUnit}) expected from 1 unit of rapid-acting insulin.
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <input
                      type="number"
                      value={isfInput}
                      onChange={(e) => setIsfInput(e.target.value)}
                      className="w-full bg-slate-950/80 border border-brand-border hover:border-brand-cyan/40 focus:border-brand-cyan rounded-xl px-4 py-3 text-white text-lg font-bold transition-colors focus:outline-none"
                    />
                    <div className="absolute right-3 top-3.5 text-xs text-gray-500 font-bold">
                      {bgUnit} / Unit
                    </div>
                  </div>
                </div>

                {/* Insulin-to-Carbohydrate Ratio (ICR) */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                      Carb Ratio (ICR)
                    </label>
                    <div className="group relative cursor-pointer text-brand-cyan">
                      <Info className="w-3.5 h-3.5" />
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 hidden group-hover:block bg-slate-950 text-gray-300 text-[10px] p-2.5 rounded-lg border border-brand-border/60 z-30 font-normal leading-normal">
                        Grams of carbohydrate covered by 1 unit of rapid-acting insulin.
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <input
                      type="number"
                      value={icrInput}
                      onChange={(e) => setIcrInput(e.target.value)}
                      className="w-full bg-slate-950/80 border border-brand-border hover:border-brand-cyan/40 focus:border-brand-cyan rounded-xl px-4 py-3 text-white text-lg font-bold transition-colors focus:outline-none"
                    />
                    <div className="absolute right-3 top-3.5 text-xs text-gray-500 font-bold">
                      grams / Unit
                    </div>
                  </div>
                </div>

                {/* Carbohydrates to Intake */}
                <div className="space-y-2 md:col-span-2">
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider">
                    Planned Carbohydrate Intake (grams)
                  </label>
                  <div className="flex items-center gap-4">
                    <div className="relative flex-1">
                      <input
                        type="number"
                        value={carbsInput}
                        onChange={(e) => setCarbsInput(e.target.value)}
                        className="w-full bg-slate-950/80 border border-brand-border hover:border-brand-cyan/40 focus:border-brand-cyan rounded-xl px-4 py-3 text-white text-lg font-bold transition-colors focus:outline-none"
                      />
                      <div className="absolute right-3 top-3.5 text-xs text-gray-500 font-bold">grams</div>
                    </div>
                    {/* Visual carbohydrate preset buttons */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => setCarbsInput("0")}
                        className="px-3.5 py-2.5 bg-slate-900 border border-brand-border/50 hover:border-brand-cyan/40 rounded-xl text-xs font-bold text-gray-300 hover:text-white transition-colors"
                      >
                        None (0g)
                      </button>
                      <button
                        onClick={() => setCarbsInput("30")}
                        className="px-3.5 py-2.5 bg-slate-900 border border-brand-border/50 hover:border-brand-cyan/40 rounded-xl text-xs font-bold text-gray-300 hover:text-white transition-colors"
                      >
                        Snack (30g)
                      </button>
                      <button
                        onClick={() => setCarbsInput("60")}
                        className="px-3.5 py-2.5 bg-slate-900 border border-brand-border/50 hover:border-brand-cyan/40 rounded-xl text-xs font-bold text-gray-300 hover:text-white transition-colors"
                      >
                        Meal (60g)
                      </button>
                    </div>
                  </div>
                </div>

              </div>

              {/* Dynamic Results Display */}
              <div className="bg-slate-950/70 border border-brand-border/50 rounded-2xl p-6 mt-8 space-y-6">
                
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest text-center">
                  Calculated Rapid-Acting Insulin Dose
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-brand-border/30">
                  
                  {/* Correction Dose Component */}
                  <div className="py-2 md:py-0 md:px-4">
                    <span className="text-[10px] text-gray-500 uppercase tracking-wider block mb-1">
                      Correction Dose
                    </span>
                    <div className="text-2xl font-extrabold text-white">
                      {Math.round(correctionDose * 100) / 100} <span className="text-xs font-normal text-gray-400">units</span>
                    </div>
                    <span className="text-[10px] text-gray-500">
                      ({Math.max(0, currentBg - targetBg)} over target)
                    </span>
                  </div>

                  {/* Carb Dose Component */}
                  <div className="py-2 md:py-0 md:px-4">
                    <span className="text-[10px] text-gray-500 uppercase tracking-wider block mb-1">
                      Carb Coverage Dose
                    </span>
                    <div className="text-2xl font-extrabold text-white">
                      {Math.round(carbDose * 100) / 100} <span className="text-xs font-normal text-gray-400">units</span>
                    </div>
                    <span className="text-[10px] text-gray-500">
                      ({carbs}g at 1:{icr})
                    </span>
                  </div>

                  {/* Total Dose Component */}
                  <div className="py-2 md:py-0 md:px-4 bg-brand-cyan/5 rounded-xl border border-brand-cyan/10">
                    <span className="text-[10px] text-brand-cyan uppercase tracking-widest font-bold block mb-1">
                      Total Recommended Bolus
                    </span>
                    <div className="text-4xl font-black text-brand-cyan">
                      {totalDoseRounded} <span className="text-xs font-bold text-white">units</span>
                    </div>
                    <span className="text-[10px] text-gray-400 block mt-1">
                      Nearest half-unit: <strong className="text-white">{totalDoseNearestHalf} U</strong>
                    </span>
                  </div>

                </div>

                <div className="flex justify-center pt-2">
                  <button
                    onClick={handleSaveDose}
                    disabled={rawTotalDose <= 0}
                    className="flex items-center gap-2 bg-brand-cyan/20 border border-brand-cyan/40 hover:bg-brand-cyan hover:text-slate-950 text-brand-cyan px-5 py-2.5 rounded-xl text-xs font-bold transition-all disabled:opacity-30 disabled:pointer-events-none"
                  >
                    <Plus className="w-4 h-4" />
                    Log Current Calculation
                  </button>
                </div>

              </div>

            </div>
          )}

          {/* Active Tab: ISF & ICR Estimator */}
          {activeTab === "estimator" && (
            <div className="glass-panel border border-brand-border/40 rounded-2xl p-6 md:p-8 space-y-6">
              
              <div className="border-b border-brand-border/20 pb-4">
                <h3 className="text-xl font-bold text-white font-display">Sensitivity (ISF) & Carb (ICR) Estimator</h3>
                <p className="text-xs text-gray-400 mt-1">
                  Estimate starting settings based on clinical guidelines (Rules of 1800/100 and 500) from your Total Daily Dose (TDD).
                </p>
              </div>

              <div className="space-y-6">
                
                {/* Total Daily Dose Slider */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                      Total Daily Insulin Dose (TDD)
                    </label>
                    <div className="text-lg font-extrabold text-brand-cyan">{tddInput} Units / Day</div>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="150"
                    step="1"
                    value={tddInput}
                    onChange={(e) => handleTddChange(e.target.value)}
                    className="w-full h-1.5 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
                  />
                  <span className="text-[10px] text-gray-500 block">
                    TDD includes all rapid-acting boluses and long-acting (basal) insulin taken in 24 hours.
                  </span>
                </div>

                {/* Estimate Result Display */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-950/70 border border-brand-border/40 rounded-xl p-6">
                  
                  {/* Estimated ICR */}
                  <div className="space-y-2 text-center md:text-left">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">
                      Estimated Carb Ratio (ICR)
                    </span>
                    <div className="text-3xl font-extrabold text-white">
                      1 : {estimatedIcr} <span className="text-xs text-gray-400">grams</span>
                    </div>
                    <p className="text-[10px] text-gray-500 leading-normal">
                      <strong>Rule of 500:</strong> 1 unit covers {estimatedIcr}g of carbohydrates. (500 / {tddInput})
                    </p>
                  </div>

                  {/* Estimated ISF */}
                  <div className="space-y-2 text-center md:text-left border-t md:border-t-0 md:border-l border-brand-border/30 pt-4 md:pt-0 md:pl-6">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">
                      Estimated Sensitivity (ISF)
                    </span>
                    <div className="text-3xl font-extrabold text-white">
                      {estimatedIsf} <span className="text-xs text-gray-400">{bgUnit} per Unit</span>
                    </div>
                    <p className="text-[10px] text-gray-500 leading-normal">
                      <strong>Rule of {bgUnit === "mg/dL" ? "1800" : "100"}:</strong> 1 unit of insulin decreases blood glucose by {estimatedIsf} {bgUnit}. ({bgUnit === "mg/dL" ? "1800" : "100"} / {tddInput})
                    </p>
                  </div>

                </div>

                <div className="flex justify-center gap-4">
                  <button
                    onClick={applyEstimates}
                    className="flex items-center gap-2 bg-brand-cyan hover:bg-brand-cyan-light text-slate-950 px-6 py-3 rounded-xl text-xs font-bold transition-all"
                  >
                    Apply Estimates to Calculator
                  </button>
                </div>

              </div>

            </div>
          )}

          {/* Active Tab: Clinical Education */}
          {activeTab === "education" && (
            <div className="glass-panel border border-brand-border/40 rounded-2xl p-6 md:p-8 space-y-6 text-gray-300">
              <h3 className="text-xl font-bold text-white font-display border-b border-brand-border/20 pb-4">
                Clinical Insulin Titration Guide
              </h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div>
                  <h4 className="font-bold text-white text-base">1. Carbohydrate-to-Insulin Ratio (ICR)</h4>
                  <p className="mt-1">
                    The carbohydrate-to-insulin ratio represents how many grams of carbohydrate are covered by one unit of rapid-acting insulin. For example, a ratio of 1:10 means you take 1 unit of insulin for every 10 grams of carbohydrates eaten.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-white text-base">2. Insulin Sensitivity Factor (ISF) / Correction Factor</h4>
                  <p className="mt-1">
                    The correction factor indicates how much (in mg/dL or mmol/L) one unit of rapid-acting insulin will reduce your blood glucose. For instance, if your ISF is 50 mg/dL and your current glucose is 200 mg/dL with a target of 100 mg/dL, you need 2 units of insulin to correct it.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-white text-base">3. Active Insulin Time (Insulin on Board)</h4>
                  <p className="mt-1">
                    Rapid-acting insulins (such as Humalog, Novolog, or Apidra) generally remain active in the body for 3 to 5 hours. Before injecting a correction dose, it is vital to account for "insulin on board" to avoid insulin stacking, which can lead to severe hypoglycemia.
                  </p>
                </div>

                <div className="bg-rose-500/10 border border-rose-500/20 text-rose-300 rounded-xl p-4 flex gap-3 text-xs mt-6">
                  <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-1">Critical Notice:</strong>
                    Insulin therapy must be personalized. These clinical formulas represent mathematical averages used to support education, and never replace the medical advice, diagnostic routines, or insulin regimens prescribed by your endocrinologist.
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Right Section: Logs Dashboard & Details */}
        <div className="space-y-6">
          
          {/* Clinical Rules Widget */}
          <div className="glass-panel border border-brand-border/40 rounded-2xl p-6 space-y-4">
            <h4 className="text-xs font-bold text-brand-cyan uppercase tracking-widest flex items-center gap-2">
              <Heart className="w-4 h-4 text-rose-400 shrink-0" />
              Insulin Safety Guidelines
            </h4>
            <ul className="text-xs text-gray-400 space-y-2.5 leading-relaxed">
              <li className="flex gap-2">
                <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full mt-1.5 shrink-0" />
                <span>Verify insulin type (rapid-acting/bolus versus basal/long-acting) before calculation.</span>
              </li>
              <li className="flex gap-2">
                <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full mt-1.5 shrink-0" />
                <span>Consult with an endocrinologist to determine your specific ISF and ICR values.</span>
              </li>
              <li className="flex gap-2">
                <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full mt-1.5 shrink-0" />
                <span>Keep rapid-acting glucose options (juice, tabs) nearby to manage potential low blood sugar.</span>
              </li>
            </ul>
          </div>

          {/* Doses History Logs */}
          <div className="glass-panel border border-brand-border/40 rounded-2xl p-6 space-y-4">
            <div className="flex justify-between items-center border-b border-brand-border/20 pb-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <FileText className="w-4 h-4 text-brand-cyan" />
                Recent Doses Log
              </h4>
              <span className="text-[10px] text-gray-500 font-bold bg-slate-900 border border-brand-border/20 px-2 py-0.5 rounded">
                {savedDoses.length} logs
              </span>
            </div>

            {savedDoses.length === 0 ? (
              <div className="text-center py-6 text-xs text-gray-500">
                No doses logged. Use the calculator to save calculations here.
              </div>
            ) : (
              <div className="space-y-3 max-h-[320px] overflow-y-auto pr-1">
                {savedDoses.map((item) => (
                  <div key={item.id} className="bg-slate-950/70 border border-brand-border/30 rounded-xl p-3 text-xs space-y-2">
                    <div className="flex justify-between items-center text-[10px]">
                      <span className="text-gray-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-gray-500" />
                        {item.timestamp}
                      </span>
                      <button
                        onClick={() => handleDeleteSaved(item.id)}
                        className="text-gray-500 hover:text-rose-400 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-300">
                      <div>
                        BG: <strong className="text-white">{item.currentBg} {item.bgUnit}</strong>
                      </div>
                      <div>
                        Carbs: <strong className="text-white">{item.carbs}g</strong>
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-1 border-t border-brand-border/20">
                      <span className="text-[10px] text-gray-400">Total Dose:</span>
                      <span className="font-bold text-brand-cyan text-sm">{item.totalDose} Units</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
