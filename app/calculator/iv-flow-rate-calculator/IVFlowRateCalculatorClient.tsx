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
  ArrowRight,
  Sliders,
  Play
} from "lucide-react";

interface IVFlowRecord {
  id: string;
  timestamp: string;
  volume: number;
  hours: number;
  minutes: number;
  dropFactor: number;
  flowRateMlHr: number;
  dripRateGttMin: number;
}

export default function IVFlowRateCalculatorClient() {
  const [activeTab, setActiveTab] = useState<"calculator" | "logger" | "education">("calculator");

  // Calculator inputs
  const [volume, setVolume] = useState<string>("1000");
  const [hours, setHours] = useState<string>("8");
  const [minutes, setMinutes] = useState<string>("0");
  const [dropFactor, setDropFactor] = useState<string>("15");

  // Algebra Widget states (y = mx + b)
  const [slopeM, setSlopeM] = useState<number>(125); // flow rate mL/hr
  const [interceptB, setInterceptB] = useState<number>(0); // bolus volume mL
  const [timeX, setTimeX] = useState<number>(4); // elapsed time hours

  // Local storage history
  const [records, setRecords] = useState<IVFlowRecord[]>([]);
  const [toastMessage, setToastMessage] = useState<string>("");

  useEffect(() => {
    const saved = localStorage.getItem("medclinicx_iv_flow_logs");
    if (saved) {
      try {
        setRecords(JSON.parse(saved));
      } catch (e) {
        console.error("Error loading IV flow logs", e);
      }
    } else {
      setRecords([
        {
          id: "1",
          timestamp: "Sample History Log",
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

  const saveRecords = (newRecords: IVFlowRecord[]) => {
    setRecords(newRecords);
    localStorage.setItem("medclinicx_iv_flow_logs", JSON.stringify(newRecords));
  };

  // Infusion calculations
  const calculateIVFlow = () => {
    const vol = parseFloat(volume) || 0;
    const hr = parseFloat(hours) || 0;
    const min = parseFloat(minutes) || 0;
    const factor = parseFloat(dropFactor) || 15;

    let errorText = "";
    let step1Text = "";
    let step2Text = "";

    const totalTimeMinutes = (hr * 60) + min;
    const totalTimeHours = hr + (min / 60);

    if (vol <= 0) {
      errorText = "Please enter a valid fluid volume greater than zero.";
    } else if (totalTimeMinutes <= 0) {
      errorText = "Please enter a valid infusion duration greater than zero.";
    }

    if (errorText) {
      return {
        flowRateMlHr: 0,
        dripRateGttMin: 0,
        totalTimeMinutes,
        totalTimeHours,
        errorText,
        steps: []
      };
    }

    // 1. mL/hr Flow Rate
    const flowRateMlHr = vol / totalTimeHours;
    step1Text = `mL/hr Rate = Total Volume (${vol} mL) ÷ Total Time (${totalTimeHours.toFixed(2)} hours) = ${flowRateMlHr.toFixed(1)} mL/hr.`;

    // 2. Drops per minute (gtt/min)
    const dripRateGttMin = (vol * factor) / totalTimeMinutes;
    step2Text = `gtt/min Rate = [Volume (${vol} mL) × Drop Factor (${factor} gtt/mL)] ÷ Time (${totalTimeMinutes} minutes) = ${dripRateGttMin.toFixed(1)} gtt/min.`;

    return {
      flowRateMlHr: Math.round(flowRateMlHr * 10) / 10,
      dripRateGttMin: Math.round(dripRateGttMin),
      totalTimeMinutes,
      totalTimeHours,
      errorText: "",
      steps: [step1Text, step2Text]
    };
  };

  const results = calculateIVFlow();

  const handleAddLog = () => {
    if (results.errorText) {
      showToast("Cannot log calculation with errors.");
      return;
    }

    const timestamp = new Date().toLocaleString([], {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });

    const newRecord: IVFlowRecord = {
      id: Math.random().toString(36).substr(2, 9),
      timestamp,
      volume: parseFloat(volume) || 0,
      hours: parseFloat(hours) || 0,
      minutes: parseFloat(minutes) || 0,
      dropFactor: parseFloat(dropFactor) || 15,
      flowRateMlHr: results.flowRateMlHr,
      dripRateGttMin: results.dripRateGttMin
    };

    saveRecords([newRecord, ...records]);
    showToast("IV Flow Rate logged in history!");
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 3000);
  };

  const handleDeleteRecord = (id: string) => {
    const updated = records.filter(r => r.id !== id);
    saveRecords(updated);
    showToast("Log entry deleted.");
  };

  const handleClearLogs = () => {
    if (confirm("Are you sure you want to clear all logged IV flow rate calculations?")) {
      saveRecords([]);
      showToast("All logs cleared.");
    }
  };

  const handlePrint = () => {
    window.print();
  };

  // Algebra equation y = mx + b output
  const solvedY = (slopeM * timeX) + interceptB;

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
        <div className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Inputs Section */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Fluid Volume */}
              <div className="bg-slate-950/40 p-5 rounded-2xl border border-brand-border/40 space-y-4">
                <h3 className="text-sm font-bold text-white flex items-center gap-1.5 pb-2 border-b border-brand-border/20">
                  <Activity className="w-4 h-4 text-brand-cyan" />
                  <span>Fluid Volume</span>
                </h3>
                <div>
                  <label htmlFor="ivVolumeInput" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                    Total Volume (mL)
                  </label>
                  <input
                    id="ivVolumeInput"
                    type="number"
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}
                    className="w-full bg-slate-900/60 border border-brand-border/40 rounded-xl px-3 py-2.5 text-white font-mono text-sm focus:outline-none focus:border-brand-cyan/80"
                    placeholder="e.g. 1000"
                    min="1"
                  />
                </div>
              </div>

              {/* Infusion Duration */}
              <div className="bg-slate-950/40 p-5 rounded-2xl border border-brand-border/40 space-y-4">
                <h3 className="text-sm font-bold text-white flex items-center gap-1.5 pb-2 border-b border-brand-border/20">
                  <Sliders className="w-4 h-4 text-brand-cyan" />
                  <span>Infusion Duration</span>
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="ivHoursInput" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                      Hours
                    </label>
                    <input
                      id="ivHoursInput"
                      type="number"
                      value={hours}
                      onChange={(e) => setHours(e.target.value)}
                      className="w-full bg-slate-900/60 border border-brand-border/40 rounded-xl px-3 py-2.5 text-white font-mono text-sm focus:outline-none focus:border-brand-cyan/80"
                      placeholder="Hours"
                      min="0"
                    />
                  </div>
                  <div>
                    <label htmlFor="ivMinutesInput" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                      Minutes
                    </label>
                    <input
                      id="ivMinutesInput"
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

              {/* Drop Factor Calibration */}
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
                  <div className="flex-grow flex flex-col items-center justify-center text-center space-y-3 py-12">
                    <AlertTriangle className="w-12 h-12 text-rose-400" />
                    <h4 className="text-white font-bold text-base">Calculation Incomplete</h4>
                    <p className="text-xs text-rose-300 max-w-sm">{results.errorText}</p>
                  </div>
                ) : (
                  <div className="space-y-6 flex-grow flex flex-col justify-between">
                    <div className="text-center pb-6 border-b border-brand-border/30">
                      <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest font-sans px-2.5 py-1 bg-brand-cyan/10 border border-brand-cyan/20 rounded-full inline-block mb-3">
                        Calculated Drip Rate
                      </span>
                      
                      <div className="flex justify-center items-center gap-6 py-2">
                        <div className="text-center">
                          <p className="text-[11px] uppercase tracking-wider text-gray-400 font-sans">Infusion Speed</p>
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

                      <p className="text-xs text-gray-400 mt-2 font-medium">
                        Total Infusion Time: <span className="text-white font-bold font-mono">{hours} hrs {minutes} mins</span>
                      </p>
                    </div>

                    <div className="bg-slate-900/60 border border-brand-border/30 rounded-2xl p-5 text-left space-y-3">
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5 mb-1">
                        <Info className="w-4 h-4 text-brand-cyan" />
                        <span>Clinical Calculation Steps</span>
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
                    <span>Educational Support Only</span>
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

          {/* Interactive Learning Block: Linear Function y = mx + b */}
          <section className="bg-slate-900/40 border border-brand-border/50 rounded-3xl p-6 md:p-8 mt-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/5 rounded-full blur-[40px] pointer-events-none" />
            
            <div className="space-y-4 max-w-4xl">
              <div className="inline-flex items-center gap-2 bg-brand-indigo/10 border border-brand-indigo/20 rounded-full px-3 py-1">
                <Sliders className="w-3.5 h-3.5 text-brand-indigo" />
                <span className="text-[10px] font-bold text-brand-indigo uppercase tracking-wider font-sans">IV Algebra Growth Block</span>
              </div>
              
              <h3 className="font-display font-bold text-xl md:text-2xl text-white">
                Intravenous Math: Linear Fluid Accumulation Model (<span className="text-brand-cyan font-mono">y = mx + b</span>)
              </h3>
              
              <p className="text-xs text-gray-300 leading-relaxed">
                In clinical infusion, the cumulative volume of IV fluid delivered over time is a perfect representation of a linear algebraic growth function. By understanding the components, students can trace fluid balances dynamically:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-slate-950/60 p-4 rounded-xl border border-brand-border/20 text-xs">
                <div>
                  <span className="block text-gray-400 font-bold mb-0.5">y (Accumulated Fluid)</span>
                  <p className="text-white text-sm font-semibold">Total fluid delivered (mL)</p>
                </div>
                <div>
                  <span className="block text-gray-400 font-bold mb-0.5">m (Slope)</span>
                  <p className="text-brand-cyan text-sm font-semibold">Infusion Rate (mL/hour)</p>
                </div>
                <div>
                  <span className="block text-gray-400 font-bold mb-0.5">x (Variable / Time)</span>
                  <p className="text-brand-cyan text-sm font-semibold">Hours elapsed (hrs)</p>
                </div>
                <div>
                  <span className="block text-gray-400 font-bold mb-0.5">b (Y-Intercept)</span>
                  <p className="text-brand-cyan text-sm font-semibold">Initial bolus fluid (mL)</p>
                </div>
              </div>

              {/* Sliders layout */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-brand-border/20">
                
                {/* Rate Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-gray-400">Rate (m):</span>
                    <span className="text-brand-cyan font-mono">{slopeM} mL/hr</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="250"
                    value={slopeM}
                    onChange={(e) => setSlopeM(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-slate-900 border border-brand-border/40 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
                  />
                </div>

                {/* Bolus Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-gray-400">Initial Bolus (b):</span>
                    <span className="text-brand-cyan font-mono">{interceptB} mL</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="250"
                    step="10"
                    value={interceptB}
                    onChange={(e) => setInterceptB(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-slate-900 border border-brand-border/40 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
                  />
                </div>

                {/* Hours Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-gray-400">Time Elapsed (x):</span>
                    <span className="text-brand-cyan font-mono">{timeX} hours</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="12"
                    step="0.5"
                    value={timeX}
                    onChange={(e) => setTimeX(parseFloat(e.target.value))}
                    className="w-full h-1.5 bg-slate-900 border border-brand-border/40 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
                  />
                </div>
              </div>

              {/* Dynamic Math solution output */}
              <div className="bg-slate-950/80 rounded-2xl border border-brand-cyan/20 p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 mt-6">
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Play className="w-3.5 h-3.5 text-brand-cyan fill-brand-cyan/20" />
                    <span>Linear Function Outcome</span>
                  </h4>
                  <div className="font-mono text-sm text-gray-300">
                    <span>y = mx + b</span>
                    <span className="mx-2 font-sans text-xs text-gray-500">→</span>
                    <span className="text-white font-bold">
                      {solvedY.toFixed(1)} mL = ({slopeM} mL/hr × {timeX} hrs) + {interceptB} mL
                    </span>
                  </div>
                </div>

                {/* Simulated visual progress cylinder */}
                <div className="w-full md:w-56 shrink-0 space-y-1.5">
                  <div className="flex justify-between text-[10px] font-bold text-gray-400">
                    <span>Fluid Volume Infused</span>
                    <span className="text-brand-cyan font-mono">{solvedY.toFixed(0)} mL</span>
                  </div>
                  <div className="w-full h-4 bg-slate-900 rounded-full border border-brand-border overflow-hidden p-0.5 relative">
                    <div 
                      className="h-full bg-gradient-to-r from-brand-cyan to-brand-indigo rounded-full transition-all duration-300"
                      style={{ width: `${Math.min((solvedY / 1000) * 100, 100)}%` }}
                    />
                    <span className="absolute inset-0 flex items-center justify-center text-[8px] font-bold text-white pointer-events-none">
                      {Math.round(solvedY)} / 1000 mL Bag
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </section>
        </div>
      )}

      {activeTab === "logger" && (
        <div className="max-w-4xl mx-auto space-y-6 text-left">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <History className="w-5 h-5 text-brand-cyan" />
              <span>IV Drip Rate Calculation History</span>
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
                  Use the calculator tab above to estimate your IV flow rates and click &quot;Log Calculation History&quot;.
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
                      <th className="p-3">Fluid Volume</th>
                      <th className="p-3">Duration time</th>
                      <th className="p-3">Drop Factor</th>
                      <th className="p-3 text-right">Infusion Speed</th>
                      <th className="p-3 text-right">Drip Rate Output</th>
                      <th className="p-3 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brand-border/30 text-gray-300">
                    {records.map((r) => (
                      <tr key={r.id} className="hover:bg-white/[0.02] transition-all">
                        <td className="p-3 font-medium">{r.timestamp}</td>
                        <td className="p-3 font-mono font-bold text-white">
                          {r.volume} mL
                        </td>
                        <td className="p-3 text-gray-400 font-mono">
                          {r.hours} hrs {r.minutes} mins
                        </td>
                        <td className="p-3 text-gray-400 font-mono">
                          {r.dropFactor} gtt/mL
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
              <span>IV Drip Calibration & Math Guide</span>
            </h3>

            <div className="space-y-4">
              <h4 className="text-white font-bold text-base">Key Intravenous Formulas</h4>
              
              <div className="bg-slate-900/60 p-4 rounded-xl border border-brand-border/30 space-y-3">
                <div>
                  <p className="font-bold text-brand-cyan text-xs">mL per Hour Flow Rate</p>
                  <p className="text-xs text-gray-400 mt-0.5 leading-normal">
                    This determines the speed value in milliliters delivered per hour, commonly configured on smart electronic infusion pumps.
                  </p>
                  <p className="font-mono text-brand-cyan text-xs mt-1.5 bg-slate-950 p-2 rounded text-center">
                    Flow Rate (mL/hr) = Total Infusion Volume (mL) ÷ Time (hours)
                  </p>
                </div>
                
                <div className="border-t border-brand-border/20 pt-3">
                  <p className="font-bold text-brand-cyan text-xs">Drops Per Minute Drip Rate (gtt/min)</p>
                  <p className="text-xs text-gray-400 mt-0.5 leading-normal">
                    Used for manual gravity feed drip sets. Tubing calibration converts milliliters to drip count.
                  </p>
                  <p className="font-mono text-brand-cyan text-xs mt-1.5 bg-slate-950 p-2 rounded text-center">
                    gtt/min = [Volume (mL) × Drop Factor (gtt/mL)] ÷ Time (minutes)
                  </p>
                </div>
              </div>

              <h4 className="text-white font-bold text-base pt-2">Typical Drop Factors (Tubing Sizes)</h4>
              <ul className="list-disc pl-5 space-y-1.5 text-xs text-gray-400">
                <li><strong>Macrodrip Set (10, 15, or 20 gtt/mL):</strong> Delivers larger drops. Used for rapid standard infusions, saline replacement, and viscous fluids like blood cells.</li>
                <li><strong>Microdrip Set (60 gtt/mL):</strong> Delivers tiny precision drops. Mostly used in pediatric dosing, critical care drugs, or micro-dose medication delivery.</li>
              </ul>

              <h4 className="text-white font-bold text-base pt-2">Clinical Infusion Safety Checklist</h4>
              <div className="bg-rose-500/10 border border-rose-500/20 text-rose-300 rounded-xl p-4 flex gap-3 text-xs leading-normal">
                <AlertTriangle className="w-5.5 h-5.5 text-rose-400 shrink-0 mt-0.5" />
                <div className="space-y-1.5">
                  <p className="font-bold">Always verify calibrations:</p>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Always cross-check the tubing label to confirm the drop factor (e.g. 15 gtt/mL vs 20 gtt/mL). A mismatch changes the drip rate significantly.</li>
                    <li>Ensure the time is converted correctly into total minutes when calculating drops.</li>
                    <li>Always follow physician orders and local facility regulations regarding specific fluid limits.</li>
                    <li>Verify calculation results with another nurse or clinical professional in active patient care environments.</li>
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
