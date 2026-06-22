"use client";

import { useState, useEffect } from "react";
import { 
  Calculator, 
  BookOpen, 
  PlusCircle, 
  Trash2, 
  FileText, 
  AlertTriangle,
  Activity,
  Info,
  Check,
  Printer,
  History,
  Droplet,
  Clock,
  Gauge
} from "lucide-react";

interface IvRecord {
  id: string;
  mode: "solve-rate" | "solve-time" | "solve-volume";
  volume: number;
  hours: number;
  minutes: number;
  flowRate: number;
  dripRate: number;
  dropFactor: number;
  timestamp: string;
}

export default function IVDripRateCalculatorClient() {
  const [activeTab, setActiveTab] = useState<"calculator" | "logger" | "reference">("calculator");
  const [mode, setMode] = useState<"solve-rate" | "solve-time" | "solve-volume">("solve-rate");
  
  // Inputs
  const [volume, setVolume] = useState<string>("1000");
  const [hours, setHours] = useState<string>("8");
  const [minutes, setMinutes] = useState<string>("0");
  const [flowRate, setFlowRate] = useState<string>("125");
  const [dropFactorPreset, setDropFactorPreset] = useState<string>("20");
  const [customDropFactor, setCustomDropFactor] = useState<string>("20");

  // History logs
  const [records, setRecords] = useState<IvRecord[]>([]);

  // Load records from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("medclinicx_iv_logs");
    if (saved) {
      try {
        setRecords(JSON.parse(saved));
      } catch (e) {
        console.error("Error reading IV logs", e);
      }
    } else {
      // Default placeholder record
      setRecords([
        {
          id: "1",
          mode: "solve-rate",
          volume: 1000,
          hours: 8,
          minutes: 0,
          flowRate: 125,
          dripRate: 42,
          dropFactor: 20,
          timestamp: "Initial Standard IV Setup"
        }
      ]);
    }
  }, []);

  // Save records to localStorage
  const saveRecords = (newRecords: IvRecord[]) => {
    setRecords(newRecords);
    localStorage.setItem("medclinicx_iv_logs", JSON.stringify(newRecords));
  };

  // Calculation logic
  const calculateIVData = () => {
    const vol = parseFloat(volume) || 1000;
    const hrs = parseFloat(hours) || 0;
    const mins = parseFloat(minutes) || 0;
    const rate = parseFloat(flowRate) || 125;
    const factor = dropFactorPreset === "custom" ? (parseFloat(customDropFactor) || 20) : parseInt(dropFactorPreset);
    
    let calcFlowRate = 0;
    let calcDripRate = 0;
    let calcHours = 0;
    let calcMinutes = 0;
    let calcVolume = 0;
    
    const totalMins = (hrs * 60) + mins;
    
    if (mode === "solve-rate") {
      calcFlowRate = totalMins > 0 ? (vol * 60) / totalMins : 0;
      calcDripRate = totalMins > 0 ? (vol * factor) / totalMins : 0;
      calcHours = hrs;
      calcMinutes = mins;
      calcVolume = vol;
    } else if (mode === "solve-time") {
      const timeInHrs = rate > 0 ? vol / rate : 0;
      const totalMinsCalc = timeInHrs * 60;
      calcHours = Math.floor(timeInHrs);
      calcMinutes = Math.round(totalMinsCalc % 60);
      calcFlowRate = rate;
      calcDripRate = totalMinsCalc > 0 ? (vol * factor) / totalMinsCalc : 0;
      calcVolume = vol;
    } else { // solve-volume
      calcVolume = rate * (totalMins / 60);
      calcFlowRate = rate;
      calcDripRate = totalMins > 0 ? (calcVolume * factor) / totalMins : 0;
      calcHours = hrs;
      calcMinutes = mins;
    }
    
    return {
      flowRate: Math.round(calcFlowRate * 10) / 10,
      dripRate: Math.round(calcDripRate),
      hours: calcHours,
      minutes: calcMinutes,
      volume: Math.round(calcVolume),
      dropFactor: factor
    };
  };

  const results = calculateIVData();

  const handleAddRecord = () => {
    const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const date = new Date().toLocaleDateString([], { month: "short", day: "numeric" });
    
    const newRecord: IvRecord = {
      id: Date.now().toString(),
      mode,
      volume: results.volume,
      hours: results.hours,
      minutes: results.minutes,
      flowRate: results.flowRate,
      dripRate: results.dripRate,
      dropFactor: results.dropFactor,
      timestamp: `${date} - ${time}`
    };
    
    saveRecords([newRecord, ...records]);
  };

  const handleDeleteRecord = (id: string) => {
    const updated = records.filter((r) => r.id !== id);
    saveRecords(updated);
  };

  const handleClearRecords = () => {
    saveRecords([]);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full py-2 print:p-0">
      {/* Tabs Selector */}
      <div className="flex border-b border-brand-border/60 mb-8 print:hidden justify-center sm:justify-start">
        {[
          { id: "calculator", label: "IV Calculator", icon: <Calculator className="w-4 h-4" /> },
          { id: "logger", label: "Infusion Logs", icon: <History className="w-4 h-4" /> },
          { id: "reference", label: "Clinical Guidelines", icon: <BookOpen className="w-4 h-4" /> }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as "calculator" | "logger" | "reference")}
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fade-in">
          {/* Inputs Card */}
          <div className="lg:col-span-5 glass-panel border border-brand-border rounded-2xl p-6 space-y-6">
            
            {/* Mode Selectors */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block">Calculation Goal</label>
              <div className="grid grid-cols-3 gap-1 bg-brand-bg/50 p-1 rounded-xl border border-brand-border">
                <button
                  onClick={() => setMode("solve-rate")}
                  className={`py-2 text-[9px] font-bold rounded-lg transition-all cursor-pointer ${
                    mode === "solve-rate"
                      ? "bg-brand-cyan text-brand-bg shadow-sm"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Drip Rate
                </button>
                <button
                  onClick={() => setMode("solve-time")}
                  className={`py-2 text-[9px] font-bold rounded-lg transition-all cursor-pointer ${
                    mode === "solve-time"
                      ? "bg-brand-cyan text-brand-bg shadow-sm"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Duration
                </button>
                <button
                  onClick={() => setMode("solve-volume")}
                  className={`py-2 text-[9px] font-bold rounded-lg transition-all cursor-pointer ${
                    mode === "solve-volume"
                      ? "bg-brand-cyan text-brand-bg shadow-sm"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Total Volume
                </button>
              </div>
            </div>

            {/* Dynamic input: Fluid Volume */}
            {mode !== "solve-volume" && (
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block">Total IV Fluid Volume</label>
                <div className="relative">
                  <input
                    type="number"
                    min="1"
                    max="10000"
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}
                    className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-brand-cyan font-bold"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-xs text-gray-500">mL</span>
                </div>
              </div>
            )}

            {/* Dynamic input: Infusion Time */}
            {mode !== "solve-time" && (
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block">Infusion Duration</label>
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative">
                    <input
                      type="number"
                      min="0"
                      max="168"
                      placeholder="Hours"
                      value={hours}
                      onChange={(e) => setHours(e.target.value)}
                      className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-brand-cyan font-bold"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-[10px] text-gray-500">hrs</span>
                  </div>
                  <div className="relative">
                    <input
                      type="number"
                      min="0"
                      max="59"
                      placeholder="Minutes"
                      value={minutes}
                      onChange={(e) => setMinutes(e.target.value)}
                      className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-brand-cyan font-bold"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-[10px] text-gray-500">mins</span>
                  </div>
                </div>
              </div>
            )}

            {/* Dynamic input: Flow Rate (mL/hour) */}
            {mode !== "solve-rate" && (
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block">Intended Flow Rate</label>
                <div className="relative">
                  <input
                    type="number"
                    min="1"
                    max="2000"
                    value={flowRate}
                    onChange={(e) => setFlowRate(e.target.value)}
                    className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-brand-cyan font-bold"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-xs text-gray-500">mL/hr</span>
                </div>
              </div>
            )}

            {/* Tubing Drop Factor Selection (Needed for drops per minute) */}
            <div className="space-y-3">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block">Tubing Drop Factor</label>
              <select
                value={dropFactorPreset}
                onChange={(e) => setDropFactorPreset(e.target.value)}
                className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-brand-cyan"
              >
                <option value="10">10 gtt/mL (Macrodrip - blood/viscous fluids)</option>
                <option value="15">15 gtt/mL (Macrodrip - standard IV set)</option>
                <option value="20">20 gtt/mL (Macrodrip - standard IV set)</option>
                <option value="60">60 gtt/mL (Microdrip - pediatric/precision delivery)</option>
                <option value="custom">Custom Drop Calibration</option>
              </select>

              {dropFactorPreset === "custom" && (
                <div className="relative animate-fade-in">
                  <input
                    type="number"
                    min="1"
                    max="150"
                    value={customDropFactor}
                    onChange={(e) => setCustomDropFactor(e.target.value)}
                    className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-brand-cyan font-bold"
                    placeholder="Enter custom drops per mL"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-xs text-gray-500">gtt/mL</span>
                </div>
              )}
            </div>

            <button
              onClick={handleAddRecord}
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-cyan to-brand-indigo hover:opacity-95 text-white font-bold text-xs py-3 rounded-xl transition-all shadow-md cursor-pointer"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Log Infusion Setup</span>
            </button>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel border border-brand-border rounded-2xl p-8 relative overflow-hidden bg-gradient-to-br from-brand-cyan/5 via-transparent to-transparent">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brand-cyan/10 to-transparent pointer-events-none" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
                {/* Drip Rate (gtt/min) */}
                <div className="text-center sm:text-left space-y-2">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1.5 justify-center sm:justify-start">
                    <Droplet className="w-3.5 h-3.5 text-brand-cyan animate-pulse" />
                    <span>Drip Rate (Drops/Min)</span>
                  </p>
                  <div className="space-y-1">
                    <h2 className="text-6xl font-display font-extrabold text-white">
                      {results.dripRate}
                      <span className="text-lg font-bold text-gray-500 ml-2">gtt/min</span>
                    </h2>
                  </div>
                </div>

                {/* Flow Rate (mL/hour) */}
                <div className="text-center sm:text-right border-t sm:border-t-0 sm:border-l border-brand-border/60 pt-6 sm:pt-0 sm:pl-8 space-y-3">
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">IV Flow Rate</p>
                    <p className="text-3xl font-display font-extrabold text-brand-cyan">
                      {results.flowRate} <span className="text-xs text-gray-400 font-medium">mL/hr</span>
                    </p>
                  </div>
                  
                  <div className="pt-1">
                    <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Total Duration</p>
                    <p className="text-sm font-bold text-white mt-0.5">
                      {results.hours} hrs {results.minutes} mins
                    </p>
                  </div>
                </div>
              </div>

              {/* Summary note */}
              <div className="bg-slate-900/40 border border-brand-border/60 rounded-xl p-4 mt-6 text-sm text-gray-300">
                <p className="leading-relaxed">
                  <strong>Calculated Infusion Setup:</strong> Deliver a total volume of <strong>{results.volume} mL</strong> at an hourly flow rate of <strong>{results.flowRate} mL/hr</strong>. This requires a drop rate of <strong>{results.dripRate} drops per minute</strong> using a tubing factor of <strong>{results.dropFactor} gtt/mL</strong>.
                </p>
              </div>

              {/* Dynamic Droplets Visualization Gauge */}
              <div className="mt-8 space-y-3">
                <div className="flex justify-between items-center text-xs text-gray-400">
                  <span className="font-semibold">Drop Rate Speed (gtt/min)</span>
                  <span className="font-semibold text-brand-cyan">{results.dripRate} drops/min</span>
                </div>
                <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden relative border border-brand-border/40 p-0.5">
                  {(() => {
                    const mappedPercent = Math.max(0, Math.min(100, (results.dripRate / 150) * 100));
                    return (
                      <div 
                        style={{ width: `${mappedPercent}%` }}
                        className="h-full rounded-full transition-all duration-700 ease-out bg-gradient-to-r from-brand-cyan to-brand-indigo"
                      />
                    );
                  })()}
                </div>
                <div className="flex justify-between text-[9px] text-gray-500">
                  <span>Slow (&lt;20)</span>
                  <span>Moderate (20-60)</span>
                  <span>Fast (60-120)</span>
                  <span>Rapid (120+)</span>
                </div>
              </div>
            </div>

            {/* Reference info & print */}
            <div className="glass-panel border border-brand-border rounded-2xl p-6 bg-white/[0.01] space-y-4">
              <div className="flex items-center justify-between text-[10px] text-gray-500 border-b border-brand-border/40 pb-3">
                <span className="font-bold uppercase tracking-wider flex items-center gap-1.5 text-brand-cyan">
                  <Gauge className="w-3.5 h-3.5" /> Fluid Infusion Reference
                </span>
                <span>Clinical Standard</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[11px] text-gray-500 uppercase font-bold tracking-wider">Tubing Type</p>
                  <p className="text-lg font-extrabold text-white mt-1">
                    {results.dropFactor === 60 ? "Microdrip Set" : "Macrodrip Set"}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] text-gray-500 uppercase font-bold tracking-wider">Tubing Calibration</p>
                  <p className="text-lg font-extrabold text-white mt-1">
                    {results.dropFactor} gtt/mL
                  </p>
                </div>
              </div>
              <div className="pt-2 flex justify-between items-center text-xs text-brand-cyan font-bold border-t border-brand-border/20 mt-2">
                <span className="text-[10px] text-gray-500 leading-normal flex items-start gap-1 font-medium max-w-[70%]">
                  <Info className="w-3 h-3 text-brand-cyan shrink-0 mt-0.5" />
                  <span>Verify pump controls or manually count drops for 15-60 seconds to calibrate.</span>
                </span>
                <button 
                  onClick={handlePrint}
                  className="flex items-center gap-1 hover:underline cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5 text-brand-cyan" />
                  <span>Print Details</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: HISTORY LOGS */}
      {activeTab === "logger" && (
        <div className="glass-panel border border-brand-border rounded-2xl p-6 space-y-6 animate-fade-in">
          <div className="flex justify-between items-center border-b border-brand-border/50 pb-3">
            <h3 className="text-white font-semibold font-display text-sm tracking-wide uppercase flex items-center gap-2">
              <History className="w-4 h-4 text-brand-cyan" />
              <span>IV Infusion Calculation History Log</span>
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
                      <th className="py-3 px-3">Date & Time</th>
                      <th className="py-3 px-3">Calculated Element</th>
                      <th className="py-3 px-3">Total Volume</th>
                      <th className="py-3 px-3">Duration</th>
                      <th className="py-3 px-3">Flow Rate</th>
                      <th className="py-3 px-3">Drop Factor</th>
                      <th className="py-3 px-3">Drip Rate Result</th>
                      <th className="py-3 px-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brand-border/30 text-gray-300">
                    {records.map((r) => (
                      <tr key={r.id} className="hover:bg-white/[0.02] transition-all">
                        <td className="py-3.5 px-3 text-white font-medium">{r.timestamp}</td>
                        <td className="py-3.5 px-3 capitalize">
                          {r.mode === "solve-rate" ? "Flow & Drip Rate" :
                           r.mode === "solve-time" ? "Infusion Duration" : "Total Volume"}
                        </td>
                        <td className="py-3.5 px-3 font-bold">{r.volume} mL</td>
                        <td className="py-3.5 px-3">{r.hours} hrs {r.minutes} mins</td>
                        <td className="py-3.5 px-3">{r.flowRate} mL/hr</td>
                        <td className="py-3.5 px-3">{r.dropFactor} gtt/mL</td>
                        <td className="py-3.5 px-3 font-extrabold text-brand-cyan text-base">{r.dripRate} gtt/min</td>
                        <td className="py-3.5 px-3 text-right">
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
                No IV drip records logged. Go back to calculator tab and click &quot;Log Infusion Setup&quot;.
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 3: REFERENCE GUIDELINES */}
      {activeTab === "reference" && (
        <div className="glass-panel border border-brand-border rounded-2xl p-6 space-y-8 animate-fade-in text-gray-300">
          <div className="border-b border-brand-border/40 pb-4">
            <h3 className="text-white font-semibold font-display text-sm tracking-wide uppercase flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-brand-cyan" />
              <span>IV Administration Reference Guide</span>
            </h3>
            <p className="text-xs text-gray-400 mt-1">
              Standard clinical tubing drop factors, calculations, and setup protocols.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="font-extrabold text-white text-base">Standard IV Tubing Drop Factors</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { type: "Macrodrip Sets (10, 15, or 20 gtt/mL)", desc: "Calibrated to deliver larger drops. Typically used for rapid infusions, fluid resuscitation, or viscous liquids such as blood products." },
                { type: "Microdrip Sets (60 gtt/mL)", desc: "Calibrated to deliver smaller drops (60 drops equal 1 mL). Usually chosen for pediatric settings, cardiac medications, or precise delivery requirements." }
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-900/40 border border-brand-border/30 p-4 rounded-xl space-y-1">
                  <p className="font-bold text-brand-cyan text-xs uppercase tracking-wide">{item.type}</p>
                  <p className="text-xs text-gray-400 leading-normal">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-brand-border/30 pt-6 space-y-4">
            <h4 className="font-bold text-white text-base">Clinical Infusion Formulas</h4>
            <div className="space-y-3 text-xs leading-relaxed">
              <div className="bg-slate-900/35 border border-brand-border/45 rounded-xl p-5 space-y-2">
                <p className="font-bold text-brand-cyan uppercase tracking-wider text-[10px]">1. Hourly Flow Rate</p>
                <p className="text-gray-400 font-mono">
                  Flow Rate (mL/hour) = Total Volume (mL) ÷ Infusion Duration (hours)
                </p>
              </div>
              <div className="bg-slate-900/35 border border-brand-border/45 rounded-xl p-5 space-y-2">
                <p className="font-bold text-brand-cyan uppercase tracking-wider text-[10px]">2. Tubing Drop Rate (gtt/min)</p>
                <p className="text-gray-400 font-mono">
                  Drip Rate (gtt/min) = (Volume in mL × Tubing Drop Factor in gtt/mL) ÷ Duration in Minutes
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Printable Report Layout */}
      <div className="hidden print:block text-black bg-white p-8 space-y-6 font-sans">
        <div className="border-b border-gray-300 pb-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">IV Infusion Administration Report</h1>
            <p className="text-xs text-gray-500">Med Clinic X Fluid Diagnostics Brief</p>
          </div>
          <Activity className="w-8 h-8 text-cyan-600" />
        </div>

        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <h3 className="font-bold text-gray-700 uppercase text-xs mb-1">IV Plan Parameters</h3>
            <p><strong>Fluid Volume:</strong> {results.volume} mL</p>
            <p><strong>Planned Duration:</strong> {results.hours} hrs {results.minutes} mins</p>
            <p><strong>Intended Flow Rate:</strong> {results.flowRate} mL/hr</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-700 uppercase text-xs mb-1">Calculated Calibrations</h3>
            <p className="text-lg font-bold"><strong>Drip Rate:</strong> {results.dripRate} drops per minute (gtt/min)</p>
            <p><strong>Tubing Drop Factor:</strong> {results.dropFactor} gtt/mL</p>
            <p><strong>Estimated Completion Time:</strong> {results.hours} hrs {results.minutes} mins from start</p>
          </div>
        </div>

        <div className="border border-gray-200 rounded p-4 text-xs mt-6">
          <p className="font-bold">Important Notice:</p>
          <p className="text-gray-600 mt-1">
            This IV calculation report is an educational and calculation helper tool. Always manually double-check flow calculations, confirm tubing drop calibrations, audit pump configurations, and verify against formal physician orders before administering intravenous therapies to patients.
          </p>
        </div>

        <div className="pt-8 border-t border-gray-200 text-[10px] text-gray-400 text-center">
          <p>&copy; {new Date().getFullYear()} Med Clinic X Inc. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
