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
  CheckCircle
} from "lucide-react";

interface PediatricDosageRecord {
  id: string;
  timestamp: string;
  weight: number;
  weightUnit: "kg" | "lbs";
  prescribedRate: number;
  prescribedRateUnit: "mg/kg/day" | "mcg/kg/day" | "mg/lb/day" | "mcg/lb/day";
  availableStrength: number;
  availableStrengthUnit: "mg" | "mcg";
  availableVolume: number;
  frequencyName: string;
  totalDailyDose: number;
  totalDailyDoseUnit: "mg" | "mcg";
  singleDose: number;
  singleDoseUnit: "mg" | "mcg";
  resultVolume: number;
}

export default function PediatricDosageCalculatorClient() {
  const [activeTab, setActiveTab] = useState<"calculator" | "logger" | "education">("calculator");

  // Inputs
  const [weight, setWeight] = useState<string>("15");
  const [weightUnit, setWeightUnit] = useState<"kg" | "lbs">("kg");

  const [prescribedRate, setPrescribedRate] = useState<string>("10");
  const [prescribedRateUnit, setPrescribedRateUnit] = useState<
    "mg/kg/day" | "mcg/kg/day" | "mg/lb/day" | "mcg/lb/day"
  >("mg/kg/day");

  // Concentration
  const [availableStrength, setAvailableStrength] = useState<string>("100");
  const [availableStrengthUnit, setAvailableStrengthUnit] = useState<"mg" | "mcg">("mg");
  const [availableVolume, setAvailableVolume] = useState<string>("5");

  // Frequency
  const [frequencyKey, setFrequencyKey] = useState<string>("BID");

  const frequencies: Record<string, { label: string; timesPerDay: number }> = {
    QD: { label: "Once Daily (QD)", timesPerDay: 1 },
    BID: { label: "Twice Daily (BID)", timesPerDay: 2 },
    TID: { label: "Three Times Daily (TID)", timesPerDay: 3 },
    QID: { label: "Four Times Daily (QID)", timesPerDay: 4 },
    Q4H: { label: "Every 4 Hours (6 times/day)", timesPerDay: 6 },
    Q6H: { label: "Every 6 Hours (4 times/day)", timesPerDay: 4 },
    Q8H: { label: "Every 8 Hours (3 times/day)", timesPerDay: 3 },
    Q12H: { label: "Every 12 Hours (2 times/day)", timesPerDay: 2 },
  };

  // Local storage history
  const [records, setRecords] = useState<PediatricDosageRecord[]>([]);
  const [toastMessage, setToastMessage] = useState<string>("");

  useEffect(() => {
    const saved = localStorage.getItem("medclinicx_pediatric_dosage_logs");
    if (saved) {
      try {
        setRecords(JSON.parse(saved));
      } catch (e) {
        console.error("Error loading pediatric dosage logs", e);
      }
    } else {
      // Pre-seed a default educational log
      setRecords([
        {
          id: "1",
          timestamp: "Initial Sample Log",
          weight: 10,
          weightUnit: "kg",
          prescribedRate: 10,
          prescribedRateUnit: "mg/kg/day",
          availableStrength: 100,
          availableStrengthUnit: "mg",
          availableVolume: 5,
          frequencyName: "Twice Daily (BID)",
          totalDailyDose: 100,
          totalDailyDoseUnit: "mg",
          singleDose: 50,
          singleDoseUnit: "mg",
          resultVolume: 2.5,
        },
      ]);
    }
  }, []);

  const saveRecords = (newRecords: PediatricDosageRecord[]) => {
    setRecords(newRecords);
    localStorage.setItem(
      "medclinicx_pediatric_dosage_logs",
      JSON.stringify(newRecords)
    );
  };

  // Calculations
  const calculatePediatricDose = () => {
    const w = parseFloat(weight) || 0;
    const rate = parseFloat(prescribedRate) || 0;
    const strength = parseFloat(availableStrength) || 0;
    const volume = parseFloat(availableVolume) || 0;
    const frequency = frequencies[frequencyKey];

    let errorText = "";
    let step1Text = "";
    let step2Text = "";
    let step3Text = "";
    let step4Text = "";

    if (w <= 0) {
      errorText = "Please enter a valid patient weight greater than zero.";
    } else if (rate <= 0) {
      errorText = "Please enter a valid prescribed dosage rate.";
    } else if (strength <= 0) {
      errorText = "Available strength must be greater than zero.";
    } else if (volume <= 0) {
      errorText = "Available volume must be greater than zero.";
    }

    if (errorText) {
      return {
        totalDailyDose: 0,
        totalDailyDoseUnit: "mg" as "mg" | "mcg",
        singleDose: 0,
        singleDoseUnit: "mg" as "mg" | "mcg",
        resultVolume: 0,
        errorText,
        steps: [],
      };
    }

    // 1. Determine Weight conversion for calculation
    // dosage rate defines weight base (per kg or per lb)
    const rateUsesKg = prescribedRateUnit.includes("/kg/");
    const rateUsesLb = prescribedRateUnit.includes("/lb/");
    const massUnit: "mg" | "mcg" = prescribedRateUnit.startsWith("mcg") ? "mcg" : "mg";

    let weightInRateUnit = w;
    let weightConversionText = "";

    if (weightUnit === "lbs" && rateUsesKg) {
      weightInRateUnit = w / 2.20462;
      weightConversionText = `Convert weight: ${w} lbs ÷ 2.20462 = ${weightInRateUnit.toFixed(3)} kg`;
    } else if (weightUnit === "kg" && rateUsesLb) {
      weightInRateUnit = w * 2.20462;
      weightConversionText = `Convert weight: ${w} kg × 2.20462 = ${weightInRateUnit.toFixed(3)} lbs`;
    }

    // 2. Calculate Total Daily Dose
    const totalDailyDose = weightInRateUnit * rate;
    step1Text = weightConversionText 
      ? `${weightConversionText}. Total Daily Dose = ${weightInRateUnit.toFixed(2)} ${rateUsesKg ? "kg" : "lbs"} × ${rate} ${prescribedRateUnit} = ${totalDailyDose.toFixed(2)} ${massUnit}/day.`
      : `Total Daily Dose = ${w} ${weightUnit} × ${rate} ${prescribedRateUnit} = ${totalDailyDose.toFixed(2)} ${massUnit}/day.`;

    // 3. Calculate Single Dose
    const singleDose = totalDailyDose / frequency.timesPerDay;
    step2Text = `Single Dose Target = Total Daily Dose (${totalDailyDose.toFixed(2)} ${massUnit}) ÷ Frequency (${frequency.timesPerDay} doses/day) = ${singleDose.toFixed(2)} ${massUnit}/dose.`;

    // 4. Volume Conversion
    // Align Single Dose mass unit with Available Strength mass unit
    let singleDoseInAvailUnit = singleDose;
    let unitAlignmentText = "";

    if (massUnit === "mg" && availableStrengthUnit === "mcg") {
      singleDoseInAvailUnit = singleDose * 1000;
      unitAlignmentText = `Convert single dose unit from mg to mcg: ${singleDose.toFixed(2)} mg × 1,000 = ${singleDoseInAvailUnit.toFixed(2)} mcg.`;
    } else if (massUnit === "mcg" && availableStrengthUnit === "mg") {
      singleDoseInAvailUnit = singleDose / 1000;
      unitAlignmentText = `Convert single dose unit from mcg to mg: ${singleDose.toFixed(2)} mcg ÷ 1,000 = ${singleDoseInAvailUnit.toFixed(4)} mg.`;
    }

    const resultVolume = (singleDoseInAvailUnit / strength) * volume;
    
    if (unitAlignmentText) {
      step3Text = unitAlignmentText;
      step4Text = `Single Dose Volume = (Single Dose in strength unit [${singleDoseInAvailUnit.toFixed(3)} ${availableStrengthUnit}] ÷ Strength [${strength} ${availableStrengthUnit}]) × Volume [${volume} mL] = ${resultVolume.toFixed(2)} mL per dose.`;
    } else {
      step3Text = `Single Dose Volume = (Single Dose [${singleDose.toFixed(2)} ${massUnit}] ÷ Strength [${strength} ${availableStrengthUnit}]) × Volume [${volume} mL] = ${resultVolume.toFixed(2)} mL per dose.`;
    }

    const steps = [step1Text, step2Text];
    if (unitAlignmentText) {
      steps.push(step3Text);
    }
    steps.push(step4Text || step3Text);

    return {
      totalDailyDose: Math.round(totalDailyDose * 100) / 100,
      totalDailyDoseUnit: massUnit,
      singleDose: Math.round(singleDose * 100) / 100,
      singleDoseUnit: massUnit,
      resultVolume: Math.round(resultVolume * 100) / 100,
      errorText: "",
      steps,
    };
  };

  const results = calculatePediatricDose();

  const handleAddLog = () => {
    if (results.errorText) {
      showToast("Cannot log invalid calculation parameters.");
      return;
    }

    const timestamp = new Date().toLocaleString([], {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    const newRecord: PediatricDosageRecord = {
      id: Math.random().toString(36).substr(2, 9),
      timestamp,
      weight: parseFloat(weight) || 0,
      weightUnit,
      prescribedRate: parseFloat(prescribedRate) || 0,
      prescribedRateUnit,
      availableStrength: parseFloat(availableStrength) || 0,
      availableStrengthUnit,
      availableVolume: parseFloat(availableVolume) || 0,
      frequencyName: frequencies[frequencyKey].label,
      totalDailyDose: results.totalDailyDose,
      totalDailyDoseUnit: results.totalDailyDoseUnit,
      singleDose: results.singleDose,
      singleDoseUnit: results.singleDoseUnit,
      resultVolume: results.resultVolume,
    };

    saveRecords([newRecord, ...records]);
    showToast("Calculation saved in log history!");
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 3000);
  };

  const handleDeleteRecord = (id: string) => {
    const updated = records.filter((r) => r.id !== id);
    saveRecords(updated);
    showToast("Log entry deleted.");
  };

  const handleClearLogs = () => {
    if (confirm("Are you sure you want to delete all logged pediatric calculations?")) {
      saveRecords([]);
      showToast("All logs cleared.");
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full">
      {/* Toast message */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 border border-brand-cyan/40 text-brand-cyan px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2 text-sm font-semibold animate-fade-in">
          <Activity className="w-4 h-4 text-brand-cyan animate-pulse" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Dynamic Navigation Tabs */}
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
          <span>Saved Logs ({records.length})</span>
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
          <span>Formulas Guide</span>
        </button>
      </div>

      {activeTab === "calculator" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Inputs Section */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Child's weight */}
            <div className="bg-slate-950/40 p-5 rounded-2xl border border-brand-border/40 space-y-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-1.5 pb-2 border-b border-brand-border/20">
                <Scale className="w-4 h-4 text-brand-cyan" />
                <span>Child's Weight</span>
              </h3>
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2">
                  <label htmlFor="childWeightInput" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                    Child's Weight
                  </label>
                  <input
                    id="childWeightInput"
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-full bg-slate-900/60 border border-brand-border/40 rounded-xl px-3 py-2 text-white font-mono text-sm focus:outline-none focus:border-brand-cyan/80"
                    placeholder="e.g. 15"
                    min="0.1"
                    step="any"
                  />
                </div>
                <div>
                  <label htmlFor="weightUnitSelect" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                    Unit
                  </label>
                  <select
                    id="weightUnitSelect"
                    value={weightUnit}
                    onChange={(e) => setWeightUnit(e.target.value as "kg" | "lbs")}
                    className="w-full bg-slate-900/60 border border-brand-border/40 rounded-xl px-2 py-2 text-white text-xs font-bold focus:outline-none focus:border-brand-cyan/80 cursor-pointer"
                  >
                    <option value="kg">kg</option>
                    <option value="lbs">lbs</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Prescribed Rate */}
            <div className="bg-slate-950/40 p-5 rounded-2xl border border-brand-border/40 space-y-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-1.5 pb-2 border-b border-brand-border/20">
                <Activity className="w-4 h-4 text-brand-cyan" />
                <span>Prescribed Dosage Rate</span>
              </h3>
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2">
                  <label htmlFor="prescribedRateInput" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                    Prescribed Dosage
                  </label>
                  <input
                    id="prescribedRateInput"
                    type="number"
                    value={prescribedRate}
                    onChange={(e) => setPrescribedRate(e.target.value)}
                    className="w-full bg-slate-900/60 border border-brand-border/40 rounded-xl px-3 py-2 text-white font-mono text-sm focus:outline-none focus:border-brand-cyan/80"
                    placeholder="e.g. 10"
                    min="0.001"
                    step="any"
                  />
                </div>
                <div>
                  <label htmlFor="prescribedRateUnitSelect" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                    Dosage Unit
                  </label>
                  <select
                    id="prescribedRateUnitSelect"
                    value={prescribedRateUnit}
                    onChange={(e) => setPrescribedRateUnit(e.target.value as any)}
                    className="w-full bg-slate-900/60 border border-brand-border/40 rounded-xl px-2 py-2 text-white text-[10px] font-bold focus:outline-none focus:border-brand-cyan/80 cursor-pointer"
                  >
                    <option value="mg/kg/day">mg/kg/day</option>
                    <option value="mcg/kg/day">mcg/kg/day</option>
                    <option value="mg/lb/day">mg/lb/day</option>
                    <option value="mcg/lb/day">mcg/lb/day</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Concentration Details */}
            <div className="bg-slate-950/40 p-5 rounded-2xl border border-brand-border/40 space-y-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-1.5 pb-2 border-b border-brand-border/20">
                <Sparkles className="w-4 h-4 text-brand-cyan" />
                <span>Medication Concentration (Liquid Available)</span>
              </h3>
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2">
                  <label htmlFor="availStrengthInput" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                    Available Strength
                  </label>
                  <input
                    id="availStrengthInput"
                    type="number"
                    value={availableStrength}
                    onChange={(e) => setAvailableStrength(e.target.value)}
                    className="w-full bg-slate-900/60 border border-brand-border/40 rounded-xl px-3 py-2 text-white font-mono text-sm focus:outline-none focus:border-brand-cyan/80"
                    placeholder="e.g. 100"
                    min="0.001"
                    step="any"
                  />
                </div>
                <div>
                  <label htmlFor="availStrengthUnitSelect" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                    Strength Unit
                  </label>
                  <select
                    id="availStrengthUnitSelect"
                    value={availableStrengthUnit}
                    onChange={(e) => setAvailableStrengthUnit(e.target.value as "mg" | "mcg")}
                    className="w-full bg-slate-900/60 border border-brand-border/40 rounded-xl px-2 py-2 text-white text-xs font-bold focus:outline-none focus:border-brand-cyan/80 cursor-pointer"
                  >
                    <option value="mg">mg</option>
                    <option value="mcg">mcg</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="availVolumeInput" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                  In Liquid Volume (mL)
                </label>
                <input
                  id="availVolumeInput"
                  type="number"
                  value={availableVolume}
                  onChange={(e) => setAvailableVolume(e.target.value)}
                  className="w-40 bg-slate-900/60 border border-brand-border/40 rounded-xl px-3 py-2 text-white font-mono text-sm focus:outline-none focus:border-brand-cyan/80"
                  placeholder="e.g. 5"
                  min="0.01"
                  step="any"
                />
              </div>
            </div>

            {/* Dose Frequency */}
            <div className="bg-slate-950/40 p-5 rounded-2xl border border-brand-border/40 space-y-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-1.5 pb-2 border-b border-brand-border/20">
                <ChevronDown className="w-4 h-4 text-brand-cyan" />
                <span>Dosing Frequency</span>
              </h3>
              <div>
                <label htmlFor="frequencySelect" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                  Prescribed Interval
                </label>
                <select
                  id="frequencySelect"
                  value={frequencyKey}
                  onChange={(e) => setFrequencyKey(e.target.value)}
                  className="w-full bg-slate-900/60 border border-brand-border/40 rounded-xl px-3 py-2.5 text-white text-sm font-bold focus:outline-none focus:border-brand-cyan/80 cursor-pointer"
                >
                  {Object.keys(frequencies).map((key) => (
                    <option key={key} value={key}>
                      {frequencies[key].label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Action button */}
            <button
              onClick={handleAddLog}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-brand-cyan to-brand-indigo hover:opacity-95 text-white font-bold py-3.5 rounded-xl transition-all shadow-md shadow-brand-cyan/10 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
            >
              <PlusCircle className="w-5 h-5" />
              <span>Log Calculation History</span>
            </button>
          </div>

          {/* Outputs Section */}
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-panel border border-brand-border/85 rounded-3xl p-6 md:p-8 relative overflow-hidden bg-gradient-cyber min-h-[380px] flex flex-col justify-between">
              {/* Background glows */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-cyan/10 rounded-full blur-[60px] pointer-events-none" />
              <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-brand-indigo/5 rounded-full blur-[60px] pointer-events-none" />

              {results.errorText ? (
                <div className="flex-1 flex flex-col items-center justify-center text-center space-y-3 py-12">
                  <AlertTriangle className="w-12 h-12 text-rose-400" />
                  <h4 className="text-white font-bold text-base">Calculation Incomplete</h4>
                  <p className="text-xs text-rose-300 max-w-sm">{results.errorText}</p>
                </div>
              ) : (
                <div className="space-y-6 flex-1 flex flex-col justify-between">
                  <div className="text-center pb-6 border-b border-brand-border/30">
                    <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest font-sans px-2.5 py-1 bg-brand-cyan/10 border border-brand-cyan/20 rounded-full inline-block mb-3">
                      Recommended Single Dose Volume
                    </span>
                    <div className="flex justify-center items-baseline gap-1.5">
                      <span className="font-display font-extrabold text-5xl md:text-6xl text-white tracking-tight">
                        {results.resultVolume.toFixed(2)}
                      </span>
                      <span className="font-sans font-bold text-2xl text-brand-cyan">
                        mL
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-4 max-w-md mx-auto bg-slate-900/40 p-3.5 rounded-xl border border-brand-border/20 text-xs">
                      <div>
                        <p className="text-gray-400">Total Daily Dose</p>
                        <p className="text-white font-bold font-mono text-sm mt-0.5">
                          {results.totalDailyDose} {results.totalDailyDoseUnit}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-400">Single Dose Target</p>
                        <p className="text-brand-cyan font-bold font-mono text-sm mt-0.5">
                          {results.singleDose} {results.singleDoseUnit}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Steps walkthrough */}
                  <div className="bg-slate-900/60 border border-brand-border/30 rounded-2xl p-5 text-left space-y-3">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5 mb-1">
                      <Info className="w-4 h-4 text-brand-cyan" />
                      <span>Dosing Calculation Steps</span>
                    </h4>
                    
                    <div className="text-xs text-gray-300 space-y-2.5">
                      {results.steps.map((step, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="w-4 h-4 rounded-full bg-brand-cyan/10 text-brand-cyan flex items-center justify-center font-bold text-[9px] mt-0.5 shrink-0">
                            {idx + 1}
                          </span>
                          <p className="leading-relaxed">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Print and safety declaration */}
              <div className="mt-4 pt-4 border-t border-brand-border/30 flex justify-between items-center text-xs">
                <span className="text-[10px] text-rose-300 font-bold flex items-center gap-1">
                  <Shield className="w-3.5 h-3.5 text-rose-400" />
                  <span>Always Double Check Doses</span>
                </span>
                <button
                  onClick={handlePrint}
                  className="flex items-center gap-1 hover:underline text-brand-cyan font-bold cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Report</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "logger" && (
        <div className="max-w-4xl mx-auto space-y-6 text-left">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <History className="w-5 h-5 text-brand-cyan" />
              <span>Pediatric Calculation History</span>
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
              <Activity className="w-12 h-12 text-gray-600 mx-auto" />
              <div>
                <p className="font-bold text-white text-base">No Saved Calculations</p>
                <p className="text-xs text-gray-400 mt-1">
                  Save your calculations here using the "Log Calculation History" button on the calculator screen.
                </p>
              </div>
            </div>
          ) : (
            <div className="glass-panel border border-brand-border rounded-2xl overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-900 border-b border-brand-border text-gray-300 font-bold">
                      <th className="p-3">Calculation Date</th>
                      <th className="p-3">Weight</th>
                      <th className="p-3">Prescribed Dosage</th>
                      <th className="p-3">Available Strength</th>
                      <th className="p-3">Frequency</th>
                      <th className="p-3 text-right">Daily Dose</th>
                      <th className="p-3 text-right">Single Dose Volume</th>
                      <th className="p-3 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brand-border/30 text-gray-300">
                    {records.map((r) => (
                      <tr key={r.id} className="hover:bg-white/[0.02] transition-all">
                        <td className="p-3 font-medium">{r.timestamp}</td>
                        <td className="p-3 font-mono font-bold text-white">
                          {r.weight} {r.weightUnit}
                        </td>
                        <td className="p-3 text-gray-400 font-mono">
                          {r.prescribedRate} {r.prescribedRateUnit}
                        </td>
                        <td className="p-3 text-gray-400 font-mono">
                          {r.availableStrength} {r.availableStrengthUnit} / {r.availableVolume} mL
                        </td>
                        <td className="p-3 text-gray-400">{r.frequencyName}</td>
                        <td className="p-3 text-right font-mono font-medium">
                          {r.totalDailyDose} {r.totalDailyDoseUnit}
                        </td>
                        <td className="p-3 text-right font-mono font-bold text-brand-cyan text-sm">
                          {r.resultVolume} mL
                        </td>
                        <td className="p-3 text-center">
                          <button
                            onClick={() => handleDeleteRecord(r.id)}
                            className="text-gray-500 hover:text-rose-400 p-1 transition-colors cursor-pointer"
                            title="Delete log"
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
              <span>Pediatric Dosage Math Guide</span>
            </h3>

            <div className="space-y-4">
              <h4 className="text-white font-bold text-base">Why Weight-Based Calculations Matter</h4>
              <p className="text-xs text-gray-400 leading-normal">
                Because children's metabolic rates, blood volumes, and organ development differ from adults, prescribing medication based on a flat rate can lead to under-dosing or toxic over-dosing. Clinicians almost always verify doses using the patient's weight in kilograms or pounds.
              </p>

              <div className="bg-slate-900/60 p-4 rounded-xl border border-brand-border/30 space-y-3">
                <div>
                  <p className="font-bold text-brand-cyan text-xs">1. Imperial to Metric Weight Conversion</p>
                  <p className="text-xs text-gray-400 mt-0.5 leading-normal">
                    Most clinical guidelines recommend weight in kilograms. If the weight is known in pounds, convert it:
                  </p>
                  <p className="font-mono text-brand-cyan text-xs mt-1.5 bg-slate-950 p-2 rounded text-center">
                    Weight (kg) = Weight (lbs) ÷ 2.20462
                  </p>
                </div>

                <div className="border-t border-brand-border/20 pt-3">
                  <p className="font-bold text-brand-cyan text-xs">2. Total Daily Dosage Equation</p>
                  <p className="text-xs text-gray-400 mt-0.5 leading-normal">
                    Multiplying the target rate per weight unit by the patient's actual weight.
                  </p>
                  <p className="font-mono text-brand-cyan text-xs mt-1.5 bg-slate-950 p-2 rounded text-center">
                    Total Daily Dose = Weight (kg) × Dosage Rate (mg/kg/day)
                  </p>
                </div>

                <div className="border-t border-brand-border/20 pt-3">
                  <p className="font-bold text-brand-cyan text-xs">3. Single Dose Interval Split</p>
                  <p className="text-xs text-gray-400 mt-0.5 leading-normal">
                    Divide the total daily amount by the frequency to administer the correct dose at each interval.
                  </p>
                  <p className="font-mono text-brand-cyan text-xs mt-1.5 bg-slate-950 p-2 rounded text-center">
                    Single Dose = Total Daily Dose ÷ Times per Day
                  </p>
                </div>

                <div className="border-t border-brand-border/20 pt-3">
                  <p className="font-bold text-brand-cyan text-xs">4. Liquid Volume Conversion</p>
                  <p className="text-xs text-gray-400 mt-0.5 leading-normal">
                    Calculate the actual milliliters (mL) of liquid to administer using the available concentration.
                  </p>
                  <p className="font-mono text-brand-cyan text-xs mt-1.5 bg-slate-950 p-2 rounded text-center">
                    Volume (mL) = (Single Dose [mg] ÷ Available Strength [mg]) × Available Volume [mL]
                  </p>
                </div>
              </div>

              <h4 className="text-white font-bold text-base pt-2">Typical Measurement Units</h4>
              <ul className="list-disc pl-5 space-y-1.5 text-xs text-gray-400">
                <li><strong>mg:</strong> Milligrams, the most standard mass unit for clinical ingredients.</li>
                <li><strong>mcg:</strong> Micrograms, used for highly potent medications (1,000 mcg = 1 mg).</li>
                <li><strong>mL:</strong> Milliliters, the liquid volumetric unit used to draw doses using syringes or cups.</li>
                <li><strong>kg:</strong> Kilogram, the standard weight measurement unit in international healthcare.</li>
              </ul>

              <h4 className="text-white font-bold text-base pt-2">Child Medication Safety Checklist</h4>
              <div className="bg-rose-500/10 border border-rose-500/20 text-rose-300 rounded-xl p-4 flex gap-3 text-xs leading-normal">
                <AlertTriangle className="w-5.5 h-5.5 text-rose-400 shrink-0 mt-0.5" />
                <div className="space-y-1.5">
                  <p className="font-bold">Important Safeguards:</p>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Never use kitchen spoons to measure pediatric liquids. Always use oral syringes or measuring cups provided with the product.</li>
                    <li>Pay attention to milligrams vs. milliliters. A concentration of 100 mg / 5 mL means each mL contains only 20 mg.</li>
                    <li>Ensure the frequency matches the prescription exactly. Over-dosing or giving doses too close together can lead to toxicity.</li>
                    <li>Always consult a medical provider or pharmacist to verify pediatric doses before administering.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
