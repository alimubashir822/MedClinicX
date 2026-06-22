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
  Shield,
  Printer,
  History,
  CheckCircle,
  Sliders,
  Play
} from "lucide-react";

interface InfusionRecord {
  id: string;
  timestamp: string;
  mode: "standard" | "medication";
  volume: number;
  hours: number;
  minutes: number;
  dropFactor: number;
  flowRateMlHr: number;
  dripRateGttMin: number;
  drugInfo?: string;
}

export default function InfusionCalculatorClient() {
  const [activeTab, setActiveTab] = useState<"calculator" | "logger" | "education">("calculator");
  const [calcMode, setCalcMode] = useState<"standard" | "medication">("standard");

  // Standard Mode Inputs
  const [volume, setVolume] = useState<string>("1000");
  const [hours, setHours] = useState<string>("8");
  const [minutes, setMinutes] = useState<string>("0");
  const [dropFactor, setDropFactor] = useState<string>("15");

  // Medication Mode Inputs
  const [weight, setWeight] = useState<string>("80");
  const [drugAmount, setDrugAmount] = useState<string>("400");
  const [drugUnit, setDrugUnit] = useState<"mg" | "mcg" | "g">("mg");
  const [bagVolume, setBagVolume] = useState<string>("250");
  const [targetDose, setTargetDose] = useState<string>("5");
  const [doseUnit, setDoseUnit] = useState<"mcg/kg/min" | "mcg/kg/hr" | "mcg/min" | "mg/min" | "mg/hr">("mcg/kg/min");
  const [medDropFactor, setMedDropFactor] = useState<string>("60");

  // Saved Logs
  const [records, setRecords] = useState<InfusionRecord[]>([]);
  const [toastMessage, setToastMessage] = useState<string>("");

  useEffect(() => {
    const saved = localStorage.getItem("medclinicx_infusion_logs");
    if (saved) {
      try {
        setRecords(JSON.parse(saved));
      } catch (e) {
        console.error("Error loading infusion logs", e);
      }
    } else {
      setRecords([
        {
          id: "1",
          timestamp: "Sample History Log",
          mode: "standard",
          volume: 1000,
          hours: 8,
          minutes: 0,
          dropFactor: 15,
          flowRateMlHr: 125,
          dripRateGttMin: 31
        }
      ]);
    }
  }, []);

  const saveRecords = (newRecords: InfusionRecord[]) => {
    setRecords(newRecords);
    localStorage.setItem("medclinicx_infusion_logs", JSON.stringify(newRecords));
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 3000);
  };

  // Calculations
  const calculateInfusion = () => {
    let flowRateMlHr = 0;
    let dripRateGttMin = 0;
    let errorText = "";
    const steps: string[] = [];

    if (calcMode === "standard") {
      const vol = parseFloat(volume) || 0;
      const hr = parseFloat(hours) || 0;
      const min = parseFloat(minutes) || 0;
      const factor = parseFloat(dropFactor) || 15;

      const totalTimeMinutes = (hr * 60) + min;
      const totalTimeHours = hr + (min / 60);

      if (vol <= 0) {
        errorText = "Please enter a valid fluid volume greater than zero.";
      } else if (totalTimeMinutes <= 0) {
        errorText = "Please enter a valid infusion duration greater than zero.";
      }

      if (!errorText) {
        // mL/hr Flow Rate
        flowRateMlHr = vol / totalTimeHours;
        steps.push(`mL/hr Rate = Volume (${vol} mL) ÷ Time (${totalTimeHours.toFixed(2)} hours) = ${flowRateMlHr.toFixed(1)} mL/hr`);

        // Drops per minute (gtt/min)
        dripRateGttMin = (vol * factor) / totalTimeMinutes;
        steps.push(`gtt/min Rate = [Volume (${vol} mL) × Drop Factor (${factor} gtt/mL)] ÷ Time (${totalTimeMinutes} minutes) = ${dripRateGttMin.toFixed(1)} gtt/min`);

        flowRateMlHr = Math.round(flowRateMlHr * 10) / 10;
        dripRateGttMin = Math.round(dripRateGttMin);
      }
    } else {
      // Medication Infusion mode
      const wt = parseFloat(weight) || 0;
      const amount = parseFloat(drugAmount) || 0;
      const bagVol = parseFloat(bagVolume) || 0;
      const dose = parseFloat(targetDose) || 0;
      const factor = parseFloat(medDropFactor) || 60;

      if (bagVol <= 0) {
        errorText = "Please enter a valid bag volume greater than zero.";
      } else if (amount <= 0) {
        errorText = "Please enter a valid drug amount greater than zero.";
      } else if (dose <= 0) {
        errorText = "Please enter a valid target dose greater than zero.";
      } else if (doseUnit.includes("kg") && wt <= 0) {
        errorText = "Patient weight is required for weight-based dosing (mcg/kg/min or mcg/kg/hr).";
      }

      if (!errorText) {
        // Step 1: Calculate concentration in mcg/mL
        let amountMcg = amount;
        if (drugUnit === "mg") {
          amountMcg = amount * 1000;
        } else if (drugUnit === "g") {
          amountMcg = amount * 1000000;
        }

        const concentrationMcgMl = amountMcg / bagVol;
        steps.push(`1. Concentration = Drug Amount (${amount} ${drugUnit} = ${amountMcg.toFixed(0)} mcg) ÷ Bag Volume (${bagVol} mL) = ${concentrationMcgMl.toFixed(1)} mcg/mL`);

        // Step 2: Calculate dose rate in mcg/min or mcg/hr
        let targetDoseMcgMin = 0;
        if (doseUnit === "mcg/kg/min") {
          targetDoseMcgMin = dose * wt;
          steps.push(`2. Target Dose Rate = Dose (${dose} mcg/kg/min) × Weight (${wt} kg) = ${targetDoseMcgMin.toFixed(1)} mcg/min`);
        } else if (doseUnit === "mcg/kg/hr") {
          targetDoseMcgMin = (dose * wt) / 60;
          steps.push(`2. Target Dose Rate = [Dose (${dose} mcg/kg/hr) × Weight (${wt} kg)] ÷ 60 = ${targetDoseMcgMin.toFixed(1)} mcg/min`);
        } else if (doseUnit === "mcg/min") {
          targetDoseMcgMin = dose;
          steps.push(`2. Target Dose Rate = ${dose} mcg/min`);
        } else if (doseUnit === "mg/min") {
          targetDoseMcgMin = dose * 1000;
          steps.push(`2. Target Dose Rate = Dose (${dose} mg/min) × 1000 = ${targetDoseMcgMin.toFixed(1)} mcg/min`);
        } else if (doseUnit === "mg/hr") {
          targetDoseMcgMin = (dose * 1000) / 60;
          steps.push(`2. Target Dose Rate = [Dose (${dose} mg/hr) × 1000] ÷ 60 = ${targetDoseMcgMin.toFixed(1)} mcg/min`);
        }

        // Step 3: Calculate flow rate in mL/hr
        flowRateMlHr = (targetDoseMcgMin / concentrationMcgMl) * 60;
        steps.push(`3. Flow Rate (mL/hr) = [Dose Rate (${targetDoseMcgMin.toFixed(1)} mcg/min) ÷ Concentration (${concentrationMcgMl.toFixed(1)} mcg/mL)] × 60 = ${flowRateMlHr.toFixed(1)} mL/hr`);

        // Step 4: Calculate drip rate (gtt/min)
        dripRateGttMin = (flowRateMlHr * factor) / 60;
        steps.push(`4. Drip Rate (gtt/min) = [Flow Rate (${flowRateMlHr.toFixed(1)} mL/hr) × Drop Factor (${factor} gtt/mL)] ÷ 60 = ${dripRateGttMin.toFixed(1)} gtt/min`);

        flowRateMlHr = Math.round(flowRateMlHr * 10) / 10;
        dripRateGttMin = Math.round(dripRateGttMin);
      }
    }

    return {
      flowRateMlHr,
      dripRateGttMin,
      errorText,
      steps
    };
  };

  const results = calculateInfusion();

  const handleAddLog = () => {
    if (results.errorText) {
      showToast("Cannot log calculations with input errors.");
      return;
    }

    const timestamp = new Date().toLocaleString([], {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });

    const newRecord: InfusionRecord = {
      id: Math.random().toString(36).substr(2, 9),
      timestamp,
      mode: calcMode,
      volume: calcMode === "standard" ? parseFloat(volume) || 0 : parseFloat(bagVolume) || 0,
      hours: calcMode === "standard" ? parseFloat(hours) || 0 : 0,
      minutes: calcMode === "standard" ? parseFloat(minutes) || 0 : 0,
      dropFactor: calcMode === "standard" ? parseFloat(dropFactor) || 15 : parseFloat(medDropFactor) || 60,
      flowRateMlHr: results.flowRateMlHr,
      dripRateGttMin: results.dripRateGttMin,
      drugInfo: calcMode === "medication" ? `${drugAmount} ${drugUnit} dose: ${targetDose} ${doseUnit}` : undefined
    };

    saveRecords([newRecord, ...records]);
    showToast("Infusion rate logged in history!");
  };

  const handleDeleteRecord = (id: string) => {
    saveRecords(records.filter(r => r.id !== id));
    showToast("Log entry deleted.");
  };

  const handleClearLogs = () => {
    if (confirm("Are you sure you want to clear all logged infusion calculations?")) {
      saveRecords([]);
      showToast("All logs cleared.");
    }
  };

  return (
    <div className="w-full">
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 border border-brand-cyan/40 text-brand-cyan px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2 text-sm font-semibold animate-fade-in">
          <Activity className="w-4 h-4 text-brand-cyan animate-pulse" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Navigation Tabs */}
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
        <div className="space-y-8">
          {/* Mode Switcher */}
          <div className="flex justify-center max-w-sm mx-auto bg-slate-900/60 p-1.5 rounded-xl border border-brand-border/40 mb-2">
            <button
              onClick={() => setCalcMode("standard")}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                calcMode === "standard"
                  ? "bg-brand-cyan text-brand-bg font-extrabold shadow"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Standard Infusion
            </button>
            <button
              onClick={() => setCalcMode("medication")}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                calcMode === "medication"
                  ? "bg-brand-cyan text-brand-bg font-extrabold shadow"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Medication Dosing
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Inputs Column */}
            <div className="lg:col-span-6 space-y-6">
              
              {calcMode === "standard" ? (
                <>
                  {/* Standard Fluid Volume */}
                  <div className="bg-slate-950/40 p-5 rounded-2xl border border-brand-border/40 space-y-4">
                    <h3 className="text-sm font-bold text-white flex items-center gap-1.5 pb-2 border-b border-brand-border/20">
                      <Activity className="w-4 h-4 text-brand-cyan" />
                      <span>Fluid Volume</span>
                    </h3>
                    <div>
                      <label htmlFor="fluidVolumeInput" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                        Total Volume (mL)
                      </label>
                      <input
                        id="fluidVolumeInput"
                        type="number"
                        value={volume}
                        onChange={(e) => setVolume(e.target.value)}
                        className="w-full bg-slate-900/60 border border-brand-border/40 rounded-xl px-3 py-2.5 text-white font-mono text-sm focus:outline-none focus:border-brand-cyan/80"
                        placeholder="e.g. 1000"
                        min="1"
                      />
                    </div>
                  </div>

                  {/* Standard Infusion Duration */}
                  <div className="bg-slate-950/40 p-5 rounded-2xl border border-brand-border/40 space-y-4">
                    <h3 className="text-sm font-bold text-white flex items-center gap-1.5 pb-2 border-b border-brand-border/20">
                      <Sliders className="w-4 h-4 text-brand-cyan" />
                      <span>Infusion Duration</span>
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="durationHoursInput" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                          Hours
                        </label>
                        <input
                          id="durationHoursInput"
                          type="number"
                          value={hours}
                          onChange={(e) => setHours(e.target.value)}
                          className="w-full bg-slate-900/60 border border-brand-border/40 rounded-xl px-3 py-2.5 text-white font-mono text-sm focus:outline-none focus:border-brand-cyan/80"
                          placeholder="Hours"
                          min="0"
                        />
                      </div>
                      <div>
                        <label htmlFor="durationMinutesInput" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                          Minutes
                        </label>
                        <input
                          id="durationMinutesInput"
                          type="number"
                          value={minutes}
                          onChange={(e) => setMinutes(e.target.value)}
                          className="w-full bg-slate-900/60 border border-brand-border/40 rounded-xl px-3 py-2.5 text-white font-mono text-sm focus:outline-none focus:border-brand-cyan/80"
                          placeholder="Minutes"
                          min="0"
                          max="59"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Standard Tubing Drop Factor */}
                  <div className="bg-slate-950/40 p-5 rounded-2xl border border-brand-border/40 space-y-4">
                    <h3 className="text-sm font-bold text-white flex items-center gap-1.5 pb-2 border-b border-brand-border/20">
                      <Sparkles className="w-4 h-4 text-brand-cyan" />
                      <span>Tubing Drop Factor</span>
                    </h3>
                    <div>
                      <label htmlFor="dropFactorSelect" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                        Drop Calibration (gtt/mL)
                      </label>
                      <select
                        id="dropFactorSelect"
                        value={dropFactor}
                        onChange={(e) => setDropFactor(e.target.value)}
                        className="w-full bg-slate-900/60 border border-brand-border/40 rounded-xl px-3 py-2.5 text-white text-sm font-bold focus:outline-none focus:border-brand-cyan/80 cursor-pointer"
                      >
                        <option value="10">10 gtt/mL (Macrodrip - blood/viscous)</option>
                        <option value="15">15 gtt/mL (Macrodrip - standard clinical)</option>
                        <option value="20">20 gtt/mL (Macrodrip - alternate standard)</option>
                        <option value="60">60 gtt/mL (Microdrip - pediatric/precision)</option>
                      </select>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Medication Setup */}
                  <div className="bg-slate-950/40 p-5 rounded-2xl border border-brand-border/40 space-y-4">
                    <h3 className="text-sm font-bold text-white flex items-center gap-1.5 pb-2 border-b border-brand-border/20">
                      <Sparkles className="w-4 h-4 text-brand-cyan" />
                      <span>Medication & Concentration</span>
                    </h3>
                    
                    <div className="grid grid-cols-3 gap-3">
                      <div className="col-span-2">
                        <label htmlFor="drugAmountInput" className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                          Drug Amount
                        </label>
                        <input
                          id="drugAmountInput"
                          type="number"
                          value={drugAmount}
                          onChange={(e) => setDrugAmount(e.target.value)}
                          className="w-full bg-slate-900/60 border border-brand-border/40 rounded-xl px-3 py-2.5 text-white font-mono text-sm focus:outline-none focus:border-brand-cyan/80"
                          placeholder="e.g. 400"
                        />
                      </div>
                      <div>
                        <label htmlFor="drugUnitSelect" className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                          Unit
                        </label>
                        <select
                          id="drugUnitSelect"
                          value={drugUnit}
                          onChange={(e) => setDrugUnit(e.target.value as any)}
                          className="w-full bg-slate-900/60 border border-brand-border/40 rounded-xl px-2 py-2.5 text-white text-xs font-bold focus:outline-none focus:border-brand-cyan/80 cursor-pointer"
                        >
                          <option value="mg">mg</option>
                          <option value="mcg">mcg</option>
                          <option value="g">g</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="bagVolumeInput" className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                        Fluid Volume / Diluent Bag (mL)
                      </label>
                      <input
                        id="bagVolumeInput"
                        type="number"
                        value={bagVolume}
                        onChange={(e) => setBagVolume(e.target.value)}
                        className="w-full bg-slate-900/60 border border-brand-border/40 rounded-xl px-3 py-2.5 text-white font-mono text-sm focus:outline-none focus:border-brand-cyan/80"
                        placeholder="e.g. 250"
                      />
                    </div>
                  </div>

                  {/* Dosing target details */}
                  <div className="bg-slate-950/40 p-5 rounded-2xl border border-brand-border/40 space-y-4">
                    <h3 className="text-sm font-bold text-white flex items-center gap-1.5 pb-2 border-b border-brand-border/20">
                      <Sliders className="w-4 h-4 text-brand-cyan" />
                      <span>Target Dosing & Patient Parameter</span>
                    </h3>

                    <div className="grid grid-cols-3 gap-3">
                      <div className="col-span-2">
                        <label htmlFor="targetDoseInput" className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                          Prescribed Target Dose
                        </label>
                        <input
                          id="targetDoseInput"
                          type="number"
                          value={targetDose}
                          onChange={(e) => setTargetDose(e.target.value)}
                          className="w-full bg-slate-900/60 border border-brand-border/40 rounded-xl px-3 py-2.5 text-white font-mono text-sm focus:outline-none focus:border-brand-cyan/80"
                          placeholder="e.g. 5"
                        />
                      </div>
                      <div>
                        <label htmlFor="doseUnitSelect" className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                          Dose Unit
                        </label>
                        <select
                          id="doseUnitSelect"
                          value={doseUnit}
                          onChange={(e) => setDoseUnit(e.target.value as any)}
                          className="w-full bg-slate-900/60 border border-brand-border/40 rounded-xl px-1.5 py-2.5 text-white text-[10px] font-bold focus:outline-none focus:border-brand-cyan/80 cursor-pointer"
                        >
                          <option value="mcg/kg/min">mcg/kg/min</option>
                          <option value="mcg/kg/hr">mcg/kg/hr</option>
                          <option value="mcg/min">mcg/min</option>
                          <option value="mg/min">mg/min</option>
                          <option value="mg/hr">mg/hr</option>
                        </select>
                      </div>
                    </div>

                    {doseUnit.includes("kg") && (
                      <div>
                        <label htmlFor="patientWeightInput" className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                          Patient Weight (kg)
                        </label>
                        <input
                          id="patientWeightInput"
                          type="number"
                          value={weight}
                          onChange={(e) => setWeight(e.target.value)}
                          className="w-full bg-slate-900/60 border border-brand-border/40 rounded-xl px-3 py-2.5 text-white font-mono text-sm focus:outline-none focus:border-brand-cyan/80"
                          placeholder="e.g. 80"
                        />
                      </div>
                    )}

                    <div>
                      <label htmlFor="medDropFactorSelect" className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                        Medication Drop Factor (gtt/mL)
                      </label>
                      <select
                        id="medDropFactorSelect"
                        value={medDropFactor}
                        onChange={(e) => setMedDropFactor(e.target.value)}
                        className="w-full bg-slate-900/60 border border-brand-border/40 rounded-xl px-3 py-2.5 text-white text-sm font-bold focus:outline-none focus:border-brand-cyan/80 cursor-pointer"
                      >
                        <option value="60">60 gtt/mL (Microdrip - Standard Medication)</option>
                        <option value="15">15 gtt/mL (Macrodrip - alternate setup)</option>
                        <option value="20">20 gtt/mL (Macrodrip - alternate setup)</option>
                        <option value="10">10 gtt/mL (Macrodrip - blood/viscous)</option>
                      </select>
                    </div>
                  </div>
                </>
              )}

              {/* Action Button */}
              <button
                onClick={handleAddLog}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-brand-cyan to-brand-indigo hover:opacity-95 text-white font-bold py-3.5 rounded-xl transition-all shadow-md shadow-brand-cyan/10 hover:scale-[1.01] active:scale-[0.99] cursor-pointer text-sm"
              >
                <PlusCircle className="w-5 h-5" />
                <span>Log Dosing Assessment</span>
              </button>
            </div>

            {/* Outputs Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="glass-panel border border-brand-border/85 rounded-3xl p-6 md:p-8 relative overflow-hidden bg-gradient-cyber min-h-[380px] flex flex-col justify-between">
                
                {/* Background glows */}
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-cyan/10 rounded-full blur-[60px] pointer-events-none" />
                <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-brand-indigo/5 rounded-full blur-[60px] pointer-events-none" />

                {results.errorText ? (
                  <div className="flex-grow flex flex-col items-center justify-center text-center space-y-3 py-12">
                    <AlertTriangle className="w-12 h-12 text-rose-400" />
                    <h4 className="text-white font-bold text-base">Calculation Incomplete</h4>
                    <p className="text-xs text-rose-300 max-w-sm">{results.errorText}</p>
                  </div>
                ) : (
                  <div className="space-y-6 flex-grow flex flex-col justify-between">
                    <div className="text-center pb-6 border-b border-brand-border/30">
                      <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest font-sans px-2.5 py-1 bg-brand-cyan/10 border border-brand-cyan/20 rounded-full inline-block mb-3">
                        Target Infusion Speed & Drip Rate
                      </span>
                      
                      <div className="flex justify-center items-center gap-6 py-2">
                        <div className="text-center">
                          <p className="text-[11px] uppercase tracking-wider text-gray-400 font-sans">Flow Rate</p>
                          <p className="font-display font-extrabold text-4xl text-white mt-1">
                            {results.flowRateMlHr.toFixed(1)} <span className="text-lg text-brand-cyan">mL/hr</span>
                          </p>
                        </div>
                        <div className="w-[1px] h-12 bg-brand-border/40 mx-2" />
                        <div className="text-center">
                          <p className="text-[11px] uppercase tracking-wider text-gray-400 font-sans">Drip Rate</p>
                          <p className="font-display font-extrabold text-4xl text-white mt-1">
                            {results.dripRateGttMin} <span className="text-lg text-brand-cyan">gtt/min</span>
                          </p>
                        </div>
                      </div>

                      {calcMode === "standard" ? (
                        <p className="text-xs text-gray-400 mt-2 font-medium">
                          Total Duration: <span className="text-white font-bold font-mono">{hours} hrs {minutes} mins</span>
                        </p>
                      ) : (
                        <p className="text-xs text-gray-400 mt-2 font-medium">
                          Target Dose: <span className="text-white font-bold font-mono">{targetDose} {doseUnit}</span>
                        </p>
                      )}
                    </div>

                    <div className="bg-slate-900/60 border border-brand-border/30 rounded-2xl p-5 text-left space-y-3">
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5 mb-1">
                        <Info className="w-4 h-4 text-brand-cyan" />
                        <span>Clinical Dosing Derivations</span>
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

                {/* Print and safety check */}
                <div className="mt-4 pt-4 border-t border-brand-border/30 flex justify-between items-center text-xs">
                  <span className="text-[10px] text-rose-300 font-bold flex items-center gap-1">
                    <Shield className="w-3.5 h-3.5 text-rose-400" />
                    <span>Educational Support Only</span>
                  </span>
                  <button
                    onClick={() => window.print()}
                    className="flex items-center gap-1 hover:underline text-brand-cyan font-bold cursor-pointer print:hidden"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print Report</span>
                  </button>
                </div>
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
              <span>Infusion Dosing Logs</span>
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
                <p className="font-bold text-white text-base">No Saved Assessments</p>
                <p className="text-xs text-gray-400 mt-1">
                  Use the calculator to compute rates and click &quot;Log Dosing Assessment&quot; to preserve entries here.
                </p>
              </div>
            </div>
          ) : (
            <div className="glass-panel border border-brand-border rounded-2xl overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-900 border-b border-brand-border text-gray-300 font-bold">
                      <th className="p-3">Logged Date</th>
                      <th className="p-3">Infusion Setup</th>
                      <th className="p-3">Tubing Specs</th>
                      <th className="p-3">Dose Specifications</th>
                      <th className="p-3 text-right">Required Speed</th>
                      <th className="p-3 text-right">Drip Rate</th>
                      <th className="p-3 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brand-border/30 text-gray-300">
                    {records.map((r) => (
                      <tr key={r.id} className="hover:bg-white/[0.02] transition-all">
                        <td className="p-3 font-medium">{r.timestamp}</td>
                        <td className="p-3 capitalize font-bold text-white">
                          {r.mode} Infusion ({r.volume} mL)
                        </td>
                        <td className="p-3 text-gray-400 font-mono">
                          {r.dropFactor} gtt/mL
                        </td>
                        <td className="p-3 text-gray-400">
                          {r.drugInfo || `Duration: ${r.hours}h ${r.minutes}m`}
                        </td>
                        <td className="p-3 text-right font-mono font-medium">
                          {r.flowRateMlHr.toFixed(1)} mL/hr
                        </td>
                        <td className="p-3 text-right font-mono font-bold text-brand-cyan text-sm">
                          {r.dripRateGttMin} gtt/min
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
              <span>Infusion Math Formulas & Safety Guidelines</span>
            </h3>

            <div className="space-y-4">
              <h4 className="text-white font-bold text-base">Standard Fluid Infusion Formulas</h4>
              <div className="bg-slate-900/60 p-4 rounded-xl border border-brand-border/30 space-y-3">
                <div>
                  <p className="font-bold text-brand-cyan text-xs">Infusion Rate in mL/hr</p>
                  <p className="font-mono text-brand-cyan text-xs mt-1.5 bg-slate-950 p-2 rounded text-center">
                    Infusion Rate = Total Volume (mL) ÷ Time (hours)
                  </p>
                </div>
                <div className="border-t border-brand-border/20 pt-3">
                  <p className="font-bold text-brand-cyan text-xs">Drops Per Minute Rate (gtt/min)</p>
                  <p className="font-mono text-brand-cyan text-xs mt-1.5 bg-slate-950 p-2 rounded text-center">
                    gtt/min = [Total Volume (mL) × Drop Factor (gtt/mL)] ÷ Time (minutes)
                  </p>
                </div>
              </div>

              <h4 className="text-white font-bold text-base pt-2">Advanced Medication Dosing Formula</h4>
              <div className="bg-slate-900/60 p-4 rounded-xl border border-brand-border/30 space-y-3">
                <p className="text-xs text-gray-400">
                  Used when administering high-alert medications (e.g. dopamine, insulin, nitroglycerin).
                </p>
                <div>
                  <p className="font-bold text-brand-cyan text-xs">Concentration (mcg/mL)</p>
                  <p className="font-mono text-brand-cyan text-xs mt-1.5 bg-slate-950 p-2 rounded text-center">
                    Concentration = Drug Amount (mcg) ÷ Bag Volume (mL)
                  </p>
                </div>
                <div className="border-t border-brand-border/20 pt-3">
                  <p className="font-bold text-brand-cyan text-xs">Weight-Based Dose Flow Rate (mL/hr)</p>
                  <p className="font-mono text-brand-cyan text-xs mt-1.5 bg-slate-950 p-2 rounded text-center">
                    mL/hr = [Dose (mcg/kg/min) × Weight (kg) × 60] ÷ Concentration (mcg/mL)
                  </p>
                </div>
              </div>

              <h4 className="text-white font-bold text-base pt-2">Tubing Drop Factors Reference</h4>
              <ul className="list-disc pl-5 space-y-1.5 text-xs text-gray-400">
                <li><strong>Macrodrip sets (10, 15, 20 gtt/mL):</strong> Delivers larger drops. Used for standard saline replacement, boluses, and general infusion orders.</li>
                <li><strong>Microdrip sets (60 gtt/mL):</strong> Delivers precise, microscopic drops. Microdrips are standard for medications, pediatric infusions, and critical care dosing.</li>
              </ul>

              <h4 className="text-white font-bold text-base pt-2">Clinical Infusion Safety Safeguards</h4>
              <div className="bg-rose-500/10 border border-rose-500/20 text-rose-300 rounded-xl p-4 flex gap-3 text-xs leading-normal">
                <AlertTriangle className="w-5.5 h-5.5 text-rose-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-bold">Important Clinical Checks:</p>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Always cross-check the drug amount, bag volume, and target dose rate units (e.g. mg vs mcg) before initiating.</li>
                    <li>Confirm the patient&apos;s actual weight, especially in pediatric or critical care infusions.</li>
                    <li>Double-check the tubing label to verify the drop factor (e.g. 15 gtt/mL vs 60 gtt/mL). A mismatch can result in severe dosing errors.</li>
                    <li>Ensure calculations are validated by a second clinician or pharmacist in acute care settings.</li>
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
