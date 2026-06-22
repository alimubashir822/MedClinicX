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
  Info as InfoIcon
} from "lucide-react";

interface DosageLogRecord {
  id: string;
  timestamp: string;
  mode: "standard" | "weight";
  patientWeight?: number;
  weightUnit?: string;
  orderedDose: number;
  orderedUnit: string;
  weightBase?: string;
  availableDose: number;
  availableUnit: string;
  availableVolume: number;
  volumeUnit: string;
  resultQty: number;
  resultUnit: string;
  totalTargetDose: number;
}

export default function MedDosageCalculatorClient() {
  const [activeTab, setActiveTab] = useState<"calculator" | "logger" | "education">("calculator");
  
  // Dosing Mode
  const [dosingMode, setDosingMode] = useState<"standard" | "weight">("standard");

  // Patient Weight (Weight-Based only)
  const [weight, setWeight] = useState<string>("70");
  const [weightUnit, setWeightUnit] = useState<"kg" | "lbs">("kg");

  // Prescribed / Desired Dose
  const [orderedDose, setOrderedDose] = useState<string>("500");
  const [orderedUnit, setOrderedUnit] = useState<string>("mg");
  const [weightBase, setWeightBase] = useState<"kg" | "lb">("kg"); // dosage unit per kg or lb

  // Available Medication Concentration
  const [availableDose, setAvailableDose] = useState<string>("250");
  const [availableUnit, setAvailableUnit] = useState<string>("mg");
  const [availableVolume, setAvailableVolume] = useState<string>("5");
  const [volumeUnit, setVolumeUnit] = useState<"mL" | "tablet">("mL");

  // Health Logger entries
  const [records, setRecords] = useState<DosageLogRecord[]>([]);
  const [toastMessage, setToastMessage] = useState<string>("");

  // Synchronize weight unit and weight base by default
  useEffect(() => {
    if (weightUnit === "kg") {
      setWeightBase("kg");
    } else {
      setWeightBase("lb");
    }
  }, [weightUnit]);

  // Load records from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem("medclinicx_dosage_logs");
    if (saved) {
      try {
        setRecords(JSON.parse(saved));
      } catch (e) {
        console.error("Error reading dosage calculator logs", e);
      }
    } else {
      // Seed default log
      setRecords([
        {
          id: "1",
          timestamp: "Initial Standard Test",
          mode: "standard",
          orderedDose: 500,
          orderedUnit: "mg",
          availableDose: 250,
          availableUnit: "mg",
          availableVolume: 5,
          volumeUnit: "mL",
          resultQty: 10,
          resultUnit: "mL",
          totalTargetDose: 500
        }
      ]);
    }
  }, []);

  const saveRecords = (newRecords: DosageLogRecord[]) => {
    setRecords(newRecords);
    localStorage.setItem("medclinicx_dosage_logs", JSON.stringify(newRecords));
  };

  // Convert mass units to mg for standardized comparison
  const getMgValue = (value: number, unit: string): number | null => {
    if (unit === "g") return value * 1000;
    if (unit === "mg") return value;
    if (unit === "mcg") return value / 1000;
    return null; // For 'units' or non-convertible types
  };

  // Calculations
  const calculateDosage = () => {
    const isWeight = dosingMode === "weight";
    const wVal = parseFloat(weight) || 70;
    const ordVal = parseFloat(orderedDose) || 0;
    const availVal = parseFloat(availableDose) || 1;
    const volVal = parseFloat(availableVolume) || 1;

    let totalTargetDose = ordVal;
    let weightFactorUsed = 1;

    if (isWeight) {
      // Align patient weight unit with the prescribed dose weight base
      let adjustedWeight = wVal;
      if (weightUnit === "lbs" && weightBase === "kg") {
        adjustedWeight = wVal * 0.45359237;
      } else if (weightUnit === "kg" && weightBase === "lb") {
        adjustedWeight = wVal / 0.45359237;
      }
      totalTargetDose = ordVal * adjustedWeight;
      weightFactorUsed = adjustedWeight;
    }

    // Units matching and conversions
    let canConvert = false;
    let conversionFactorText = "";
    let convertedOrdered = totalTargetDose;
    let convertedAvailable = availVal;

    const ordMg = getMgValue(totalTargetDose, orderedUnit);
    const availMg = getMgValue(availVal, availableUnit);

    if (ordMg !== null && availMg !== null) {
      canConvert = true;
      convertedOrdered = ordMg;
      convertedAvailable = availMg;
      if (orderedUnit !== availableUnit) {
        conversionFactorText = `Auto-converting ordered dose (${orderedUnit}) to available strength unit (${availableUnit}).`;
      }
    } else {
      // Non-convertible unit (e.g. units), must match exactly
      if (orderedUnit === availableUnit) {
        canConvert = true;
      }
    }

    // Compute volume required
    let quantityToGive = 0;
    let errorText = "";

    if (!canConvert) {
      errorText = `Unit Mismatch: Cannot convert ${orderedUnit} to ${availableUnit}. Units must match when using non-mass measures (like 'units').`;
    } else if (convertedAvailable <= 0) {
      errorText = "Invalid strength: Available strength must be greater than zero.";
    } else {
      quantityToGive = (convertedOrdered / convertedAvailable) * volVal;
      quantityToGive = Math.round(quantityToGive * 100) / 100;
    }

    return {
      totalTargetDose: Math.round(totalTargetDose * 100) / 100,
      quantityToGive,
      errorText,
      conversionFactorText,
      weightFactorUsed: Math.round(weightFactorUsed * 100) / 100,
      isWeight
    };
  };

  const results = calculateDosage();

  // Logging handler
  const handleAddLog = () => {
    if (results.errorText) {
      showToast("Cannot log calculation with errors");
      return;
    }

    const timestamp = new Date().toLocaleString([], { 
      month: "short", 
      day: "numeric", 
      hour: "2-digit", 
      minute: "2-digit" 
    });

    const newRecord: DosageLogRecord = {
      id: Math.random().toString(36).substr(2, 9),
      timestamp,
      mode: dosingMode,
      patientWeight: dosingMode === "weight" ? parseFloat(weight) : undefined,
      weightUnit: dosingMode === "weight" ? weightUnit : undefined,
      orderedDose: parseFloat(orderedDose) || 0,
      orderedUnit,
      weightBase: dosingMode === "weight" ? weightBase : undefined,
      availableDose: parseFloat(availableDose) || 1,
      availableUnit,
      availableVolume: parseFloat(availableVolume) || 1,
      volumeUnit,
      resultQty: results.quantityToGive,
      resultUnit: volumeUnit,
      totalTargetDose: results.totalTargetDose
    };

    saveRecords([newRecord, ...records]);
    showToast("Dosage calculation saved in history");
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
    if (confirm("Are you sure you want to clear all logged dosage calculations?")) {
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
          <span>Formulas Guide</span>
        </button>
      </div>

      {activeTab === "calculator" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Inputs Section */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Mode toggle */}
            <div className="bg-slate-950/60 p-4 rounded-xl border border-brand-border/30">
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                Dosing Calculation Mode
              </label>
              <div className="grid grid-cols-2 gap-2 p-1 bg-slate-900/80 rounded-lg border border-brand-border/20">
                <button
                  type="button"
                  onClick={() => setDosingMode("standard")}
                  className={`py-2 text-xs font-bold rounded-md transition-all cursor-pointer ${
                    dosingMode === "standard"
                      ? "bg-brand-cyan text-slate-950 shadow-md"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  Standard Flat Dose
                </button>
                <button
                  type="button"
                  onClick={() => setDosingMode("weight")}
                  className={`py-2 text-xs font-bold rounded-md transition-all cursor-pointer ${
                    dosingMode === "weight"
                      ? "bg-brand-cyan text-slate-950 shadow-md"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  Weight-Based Dose
                </button>
              </div>
            </div>

            {/* Patient Weight Form (Weight-Based only) */}
            {dosingMode === "weight" && (
              <div className="bg-slate-950/40 p-5 rounded-2xl border border-brand-border/40 space-y-4">
                <h3 className="text-sm font-bold text-white flex items-center gap-1.5 pb-2 border-b border-brand-border/20">
                  <Scale className="w-4 h-4 text-brand-cyan" />
                  <span>Patient Information</span>
                </h3>
                
                <div className="grid grid-cols-3 gap-3">
                  <div className="col-span-2">
                    <label htmlFor="dosageWeightInput" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                      Patient Weight
                    </label>
                    <input
                      id="dosageWeightInput"
                      type="number"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      className="w-full bg-slate-900/60 border border-brand-border/40 rounded-xl px-3 py-2 text-white font-mono text-sm focus:outline-none focus:border-brand-cyan/80"
                      placeholder="Enter weight..."
                      min="0.1"
                      max="600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                      Unit
                    </label>
                    <select
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
            )}

            {/* Prescribed Dose target */}
            <div className="bg-slate-950/40 p-5 rounded-2xl border border-brand-border/40 space-y-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-1.5 pb-2 border-b border-brand-border/20">
                <Activity className="w-4 h-4 text-brand-cyan" />
                <span>Prescribed / Desired Dose</span>
              </h3>

              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2">
                  <label htmlFor="doseTargetInput" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                    {dosingMode === "weight" ? "Ordered Dosage" : "Ordered Dose"}
                  </label>
                  <input
                    id="doseTargetInput"
                    type="number"
                    value={orderedDose}
                    onChange={(e) => setOrderedDose(e.target.value)}
                    className="w-full bg-slate-900/60 border border-brand-border/40 rounded-xl px-3 py-2 text-white font-mono text-sm focus:outline-none focus:border-brand-cyan/80"
                    placeholder="e.g. 500"
                    min="0.0001"
                    max="100000"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                    Dose Unit
                  </label>
                  <select
                    value={orderedUnit}
                    onChange={(e) => setOrderedUnit(e.target.value)}
                    className="w-full bg-slate-900/60 border border-brand-border/40 rounded-xl px-2 py-2 text-white text-xs font-bold focus:outline-none focus:border-brand-cyan/80 cursor-pointer"
                  >
                    <option value="mg">mg</option>
                    <option value="mcg">mcg</option>
                    <option value="g">g</option>
                    <option value="units">units</option>
                  </select>
                </div>
              </div>

              {dosingMode === "weight" && (
                <div className="grid grid-cols-2 gap-3 bg-slate-900/50 p-2.5 rounded-xl border border-brand-border/20 text-xs">
                  <div className="flex items-center text-gray-400">
                    <span>Dosage Weight Base:</span>
                  </div>
                  <div className="flex bg-slate-950 border border-brand-border/30 rounded-lg p-0.5 ml-auto">
                    <button
                      type="button"
                      onClick={() => setWeightBase("kg")}
                      className={`px-2 py-0.5 text-[10px] font-bold rounded cursor-pointer ${
                        weightBase === "kg" ? "bg-brand-cyan text-slate-950" : "text-gray-400"
                      }`}
                    >
                      per kg
                    </button>
                    <button
                      type="button"
                      onClick={() => setWeightBase("lb")}
                      className={`px-2 py-0.5 text-[10px] font-bold rounded cursor-pointer ${
                        weightBase === "lb" ? "bg-brand-cyan text-slate-950" : "text-gray-400"
                      }`}
                    >
                      per lb
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Available Medication Concentration */}
            <div className="bg-slate-950/40 p-5 rounded-2xl border border-brand-border/40 space-y-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-1.5 pb-2 border-b border-brand-border/20">
                <Sparkles className="w-4 h-4 text-brand-cyan" />
                <span>Available Strength (Concentration)</span>
              </h3>

              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2">
                  <label htmlFor="availStrengthInput" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                    Available Strength
                  </label>
                  <input
                    id="availStrengthInput"
                    type="number"
                    value={availableDose}
                    onChange={(e) => setAvailableDose(e.target.value)}
                    className="w-full bg-slate-900/60 border border-brand-border/40 rounded-xl px-3 py-2 text-white font-mono text-sm focus:outline-none focus:border-brand-cyan/80"
                    placeholder="e.g. 250"
                    min="0.0001"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                    Strength Unit
                  </label>
                  <select
                    value={availableUnit}
                    onChange={(e) => setAvailableUnit(e.target.value)}
                    className="w-full bg-slate-900/60 border border-brand-border/40 rounded-xl px-2 py-2 text-white text-xs font-bold focus:outline-none focus:border-brand-cyan/80 cursor-pointer"
                  >
                    <option value="mg">mg</option>
                    <option value="mcg">mcg</option>
                    <option value="g">g</option>
                    <option value="units">units</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2">
                  <label htmlFor="availVolumeInput" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                    In Volume / Quantity
                  </label>
                  <input
                    id="availVolumeInput"
                    type="number"
                    value={availableVolume}
                    onChange={(e) => setAvailableVolume(e.target.value)}
                    className="w-full bg-slate-900/60 border border-brand-border/40 rounded-xl px-3 py-2 text-white font-mono text-sm focus:outline-none focus:border-brand-cyan/80"
                    placeholder="e.g. 5"
                    min="0.0001"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                    Vehicle Unit
                  </label>
                  <select
                    value={volumeUnit}
                    onChange={(e) => setVolumeUnit(e.target.value as "mL" | "tablet")}
                    className="w-full bg-slate-900/60 border border-brand-border/40 rounded-xl px-2 py-2 text-white text-xs font-bold focus:outline-none focus:border-brand-cyan/80 cursor-pointer"
                  >
                    <option value="mL">mL</option>
                    <option value="tablet">tablet(s)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Primary Action Button */}
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
                /* Error layout */
                <div className="flex-1 flex flex-col items-center justify-center text-center space-y-3 py-12">
                  <AlertTriangle className="w-12 h-12 text-rose-400" />
                  <h4 className="text-white font-bold text-base">Calculation Suspended</h4>
                  <p className="text-xs text-rose-300 max-w-sm">{results.errorText}</p>
                </div>
              ) : (
                /* Success results */
                <div className="space-y-6 flex-1 flex flex-col justify-between">
                  <div className="text-center pb-6 border-b border-brand-border/30">
                    <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest font-sans px-2.5 py-1 bg-brand-cyan/10 border border-brand-cyan/20 rounded-full inline-block mb-3">
                      Amount to Administer
                    </span>
                    <div className="flex justify-center items-baseline gap-1.5">
                      <span className="font-display font-extrabold text-5xl md:text-6xl text-white tracking-tight">
                        {results.quantityToGive}
                      </span>
                      <span className="font-sans font-bold text-2xl text-brand-cyan">
                        {volumeUnit}
                      </span>
                    </div>
                    
                    {dosingMode === "weight" && (
                      <p className="text-xs text-gray-400 mt-2 font-medium">
                        Patient Target Dose: <span className="text-white font-bold">{results.totalTargetDose} {orderedUnit}</span>
                      </p>
                    )}
                  </div>

                  {/* Step-by-step formula guide */}
                  <div className="bg-slate-900/60 border border-brand-border/30 rounded-2xl p-5 text-left space-y-3">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5 mb-1">
                      <InfoIcon className="w-4 h-4 text-brand-cyan" />
                      <span>Calculation Steps Walkthrough</span>
                    </h4>
                    
                    <div className="text-xs text-gray-300 space-y-2.5">
                      {dosingMode === "weight" && (
                        <div className="flex items-start gap-2">
                          <span className="w-4 h-4 rounded-full bg-brand-cyan/10 text-brand-cyan flex items-center justify-center font-bold text-[9px] mt-0.5">1</span>
                          <p>
                            <strong>Calculate Total Target Dose:</strong> Ordered dose is {orderedDose} {orderedUnit} per {weightBase}. Patient weight is {weight} {weightUnit}.<br/>
                            Total Dose = {orderedDose} × {results.weightFactorUsed} = <strong className="text-white">{results.totalTargetDose} {orderedUnit}</strong>.
                          </p>
                        </div>
                      )}
                      
                      {results.conversionFactorText && (
                        <div className="flex items-start gap-2">
                          <span className="w-4 h-4 rounded-full bg-brand-cyan/10 text-brand-cyan flex items-center justify-center font-bold text-[9px] mt-0.5">
                            {dosingMode === "weight" ? "2" : "1"}
                          </span>
                          <p>
                            <strong>Unit Alignment:</strong> {results.conversionFactorText}
                          </p>
                        </div>
                      )}

                      <div className="flex items-start gap-2">
                        <span className="w-4 h-4 rounded-full bg-brand-cyan/10 text-brand-cyan flex items-center justify-center font-bold text-[9px] mt-0.5">
                          {dosingMode === "weight" ? (results.conversionFactorText ? "3" : "2") : (results.conversionFactorText ? "2" : "1")}
                        </span>
                        <p>
                          <strong>Apply Formula:</strong> (Desired Dose ÷ Available Dose) × Available Volume<br/>
                          ({results.totalTargetDose} {orderedUnit} ÷ {availableDose} {availableUnit}) × {availableVolume} {volumeUnit} = <strong className="text-brand-cyan">{results.quantityToGive} {volumeUnit}</strong>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Warning/Precautions and Prints */}
              <div className="mt-4 pt-4 border-t border-brand-border/30 flex justify-between items-center text-xs">
                <span className="text-[10px] text-rose-300 font-bold flex items-center gap-1">
                  <Shield className="w-3.5 h-3.5 text-rose-400" />
                  <span>Educational Tool Only</span>
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
              <span>Dose Calculation History Logs</span>
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
                <p className="font-bold text-white text-base">No Saved Calculations</p>
                <p className="text-xs text-gray-400 mt-1">Use the calculator tab above to estimate your medication doses and click &quot;Log Calculation History&quot;.</p>
              </div>
            </div>
          ) : (
            <div className="glass-panel border border-brand-border rounded-2xl overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-900 border-b border-brand-border text-gray-300 font-bold">
                      <th className="p-3">Calculated Date</th>
                      <th className="p-3">Dosing Mode</th>
                      <th className="p-3 text-right">Patient Weight</th>
                      <th className="p-3 text-right">Ordered Dose</th>
                      <th className="p-3 text-right">Available Strength</th>
                      <th className="p-3 text-right">Result Amount</th>
                      <th className="p-3 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brand-border/30 text-gray-300">
                    {records.map((r) => (
                      <tr key={r.id} className="hover:bg-white/[0.02] transition-all">
                        <td className="p-3 font-medium">{r.timestamp}</td>
                        <td className="p-3 text-gray-400 font-medium">
                          {r.mode === "weight" ? "Weight-Based" : "Standard"}
                        </td>
                        <td className="p-3 text-right font-mono">
                          {r.mode === "weight" ? `${r.patientWeight} ${r.weightUnit}` : "N/A"}
                        </td>
                        <td className="p-3 text-right font-mono text-white">
                          {r.orderedDose} {r.orderedUnit}{r.mode === "weight" ? `/${r.weightBase}` : ""}
                        </td>
                        <td className="p-3 text-right font-mono text-gray-400">
                          {r.availableDose} {r.availableUnit} / {r.availableVolume} {r.volumeUnit}
                        </td>
                        <td className="p-3 text-right font-mono font-bold text-brand-cyan">
                          {r.resultQty} {r.volumeUnit}
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

      {activeTab === "education" && (
        <div className="max-w-3xl mx-auto space-y-6 text-left text-gray-300 text-sm leading-relaxed font-sans">
          <div className="glass-panel border border-brand-border p-6 rounded-2xl space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-2">
              <FileText className="w-5 h-5 text-brand-cyan" />
              <span>Medication Math Reference Guide</span>
            </h3>

            <div className="space-y-4">
              <h4 className="text-white font-bold text-base">Fundamental Formulas</h4>
              
              <div className="bg-slate-900/60 p-4 rounded-xl border border-brand-border/30 space-y-3">
                <div>
                  <p className="font-bold text-brand-cyan text-xs">Standard Dosing (Basic Formula)</p>
                  <p className="text-xs text-gray-400 mt-0.5 leading-normal">
                    Used to find volume or quantity of tabs when ordered dose is a flat value.
                  </p>
                  <p className="font-mono text-brand-cyan text-xs mt-1.5 bg-slate-950 p-2 rounded text-center">
                    Amount to Give = (Desired Dose ÷ Available Strength) × Available Quantity
                  </p>
                </div>
                
                <div className="border-t border-brand-border/20 pt-3">
                  <p className="font-bold text-brand-cyan text-xs">Weight-Based Dosing</p>
                  <p className="text-xs text-gray-400 mt-0.5 leading-normal">
                    Commonly used in pediatrics, critical care, and oncology. Total dose is computed based on weight.
                  </p>
                  <p className="font-mono text-brand-cyan text-xs mt-1.5 bg-slate-950 p-2 rounded text-center">
                    Total Dose = Patient Weight × Ordered Dose per weight unit
                  </p>
                </div>
              </div>

              <h4 className="text-white font-bold text-base pt-2">Typical Measurement Units</h4>
              <ul className="list-disc pl-5 space-y-1.5 text-xs text-gray-400">
                <li><strong>g (Gram):</strong> Equivalent to 1,000 milligrams.</li>
                <li><strong>mg (Milligram):</strong> The most common pharmaceutical mass unit.</li>
                <li><strong>mcg (Microgram):</strong> Equivalent to 0.001 mg (1,000 mcg = 1 mg).</li>
                <li><strong>units:</strong> Standardized active biological concentration values (such as Insulin, Heparin). Non-convertible to metric mass.</li>
                <li><strong>mL (Milliliter):</strong> Fluid volume vehicle.</li>
                <li><strong>tablet:</strong> Solid pill dosing vehicle.</li>
              </ul>

              <h4 className="text-white font-bold text-base pt-2">Crucial Patient Safety Safeguards</h4>
              <div className="bg-rose-500/10 border border-rose-500/20 text-rose-300 rounded-xl p-4 flex gap-3 text-xs leading-normal">
                <AlertTriangle className="w-5.5 h-5.5 text-rose-400 shrink-0 mt-0.5" />
                <div className="space-y-1.5">
                  <p className="font-bold">Always double-check calculations:</p>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Always cross-check unit prefixes (e.g. mg vs. mcg). A mix-up could result in a 1000x error.</li>
                    <li>Always verify pediatric weights (fluid balance margins are extremely slim in pediatric patients).</li>
                    <li>Verify the medication vial concentrations (strength labels like 100mg/5mL or 20mg/mL).</li>
                    <li>Always consult qualified pharmacists or peer providers before administration in real-world environments.</li>
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
