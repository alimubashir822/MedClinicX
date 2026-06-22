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
  Activity as HeartIcon
} from "lucide-react";

interface A1CLogRecord {
  id: string;
  timestamp: string;
  mode: "a1c-to-eag" | "eag-to-a1c";
  a1cVal: number;
  eagMg: number;
  eagMmol: number;
  category: string;
}

export default function HbA1cCalculatorClient() {
  const [activeTab, setActiveTab] = useState<"calculator" | "logger" | "education">("calculator");
  
  // Dosing Mode
  const [calcMode, setCalcMode] = useState<"a1c-to-eag" | "eag-to-a1c">("a1c-to-eag");

  // Inputs
  const [a1cInput, setA1cInput] = useState<string>("7.0");
  const [eagMgInput, setEagMgInput] = useState<string>("154");

  // Health Logger entries
  const [records, setRecords] = useState<A1CLogRecord[]>([]);
  const [toastMessage, setToastMessage] = useState<string>("");

  // Load records from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem("medclinicx_hba1c_logs");
    if (saved) {
      try {
        setRecords(JSON.parse(saved));
      } catch (e) {
        console.error("Error reading hba1c logs", e);
      }
    } else {
      // Seed default log
      setRecords([
        {
          id: "1",
          timestamp: "Initial Conversion",
          mode: "a1c-to-eag",
          a1cVal: 7.0,
          eagMg: 154,
          eagMmol: 8.6,
          category: "Diabetes"
        }
      ]);
    }
  }, []);

  const saveRecords = (newRecords: A1CLogRecord[]) => {
    setRecords(newRecords);
    localStorage.setItem("medclinicx_hba1c_logs", JSON.stringify(newRecords));
  };

  // Calculations
  const calculateValues = () => {
    const isForward = calcMode === "a1c-to-eag";
    
    let a1cVal = 7.0;
    let eagMg = 154;
    let eagMmol = 8.6;
    
    if (isForward) {
      const a1c = Math.max(3.0, Math.min(20.0, parseFloat(a1cInput) || 7.0));
      a1cVal = a1c;
      eagMg = (28.7 * a1c) - 46.7;
      eagMmol = (1.594 * a1c) - 2.59;
    } else {
      const eag = Math.max(40, Math.min(1000, parseFloat(eagMgInput) || 154));
      eagMg = eag;
      a1cVal = (eag + 46.7) / 28.7;
      eagMmol = (1.594 * a1cVal) - 2.59;
    }

    // Rounding
    a1cVal = Math.round(a1cVal * 10) / 10;
    eagMg = Math.round(eagMg);
    eagMmol = Math.round(eagMmol * 10) / 10;

    // Category
    let category = "Normal";
    let categoryColor = "text-brand-emerald bg-brand-emerald/10 border-brand-emerald/20";
    let textDesc = "Normal Range (Blood glucose average is typical)";
    
    if (a1cVal >= 6.5) {
      category = "Diabetes";
      categoryColor = "text-rose-400 bg-rose-400/10 border-rose-400/20";
      textDesc = "Diabetes Range (High glycemic threshold standard)";
    } else if (a1cVal >= 5.7) {
      category = "Prediabetes";
      categoryColor = "text-amber-400 bg-amber-400/10 border-amber-400/20";
      textDesc = "Prediabetes Range (Increased metabolic health risk)";
    }

    return {
      a1cVal,
      eagMg,
      eagMmol,
      category,
      categoryColor,
      textDesc,
      isForward
    };
  };

  const results = calculateValues();

  // Logging handler
  const handleAddLog = () => {
    const timestamp = new Date().toLocaleString([], { 
      month: "short", 
      day: "numeric", 
      hour: "2-digit", 
      minute: "2-digit" 
    });

    const newRecord: A1CLogRecord = {
      id: Math.random().toString(36).substr(2, 9),
      timestamp,
      mode: calcMode,
      a1cVal: results.a1cVal,
      eagMg: results.eagMg,
      eagMmol: results.eagMmol,
      category: results.category
    };

    saveRecords([newRecord, ...records]);
    showToast("HbA1c conversion saved in history");
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
    if (confirm("Are you sure you want to clear all logged HbA1c conversions?")) {
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
          <span>A1C Guide</span>
        </button>
      </div>

      {activeTab === "calculator" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Inputs Section */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Mode toggle */}
            <div className="bg-slate-950/60 p-4 rounded-xl border border-brand-border/30">
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                Conversion Direction
              </label>
              <div className="grid grid-cols-2 gap-2 p-1 bg-slate-900/80 rounded-lg border border-brand-border/20">
                <button
                  type="button"
                  onClick={() => setCalcMode("a1c-to-eag")}
                  className={`py-2 text-xs font-bold rounded-md transition-all cursor-pointer ${
                    calcMode === "a1c-to-eag"
                      ? "bg-brand-cyan text-slate-950 shadow-md"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  HbA1c (%) to eAG
                </button>
                <button
                  type="button"
                  onClick={() => setCalcMode("eag-to-a1c")}
                  className={`py-2 text-xs font-bold rounded-md transition-all cursor-pointer ${
                    calcMode === "eag-to-a1c"
                      ? "bg-brand-cyan text-slate-950 shadow-md"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  eAG to HbA1c (%)
                </button>
              </div>
            </div>

            {/* Inputs Panel */}
            {calcMode === "a1c-to-eag" ? (
              <div className="bg-slate-950/40 p-5 rounded-2xl border border-brand-border/40 space-y-4">
                <div className="flex justify-between items-center">
                  <label htmlFor="a1cPercentageInput" className="text-sm font-bold text-white flex items-center gap-1.5">
                    <Activity className="w-4 h-4 text-brand-cyan" />
                    <span>HbA1c Value (%)</span>
                  </label>
                  <span className="text-xs text-brand-cyan font-bold font-sans bg-brand-cyan/10 px-2 py-0.5 rounded">
                    {a1cInput}%
                  </span>
                </div>
                <input
                  id="a1cPercentageInput"
                  type="range"
                  min="3.0"
                  max="18.0"
                  step="0.1"
                  value={a1cInput}
                  onChange={(e) => setA1cInput(e.target.value)}
                  className="w-full h-2 bg-brand-border/40 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
                />
                <div className="flex justify-between text-[10px] text-gray-500 font-bold">
                  <span>3.0% (Low)</span>
                  <span>7.0% (Diabetic Goal)</span>
                  <span>18.0% (Very High)</span>
                </div>
                <div className="mt-2">
                  <input
                    type="number"
                    value={a1cInput}
                    onChange={(e) => setA1cInput(e.target.value)}
                    className="w-full bg-slate-900/60 border border-brand-border/40 rounded-xl px-4 py-2.5 text-white font-mono text-sm focus:outline-none focus:border-brand-cyan/80"
                    placeholder="Enter HbA1c value..."
                    min="3"
                    max="25"
                    step="0.1"
                  />
                </div>
              </div>
            ) : (
              <div className="bg-slate-950/40 p-5 rounded-2xl border border-brand-border/40 space-y-4">
                <div className="flex justify-between items-center">
                  <label htmlFor="eagValueInput" className="text-sm font-bold text-white flex items-center gap-1.5">
                    <Activity className="w-4 h-4 text-brand-cyan" />
                    <span>Estimated Average Glucose (eAG)</span>
                  </label>
                  <span className="text-xs text-brand-cyan font-bold font-sans bg-brand-cyan/10 px-2 py-0.5 rounded">
                    {eagMgInput} mg/dL
                  </span>
                </div>
                <input
                  id="eagValueInput"
                  type="range"
                  min="60"
                  max="400"
                  step="1"
                  value={eagMgInput}
                  onChange={(e) => setEagMgInput(e.target.value)}
                  className="w-full h-2 bg-brand-border/40 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
                />
                <div className="flex justify-between text-[10px] text-gray-500 font-bold">
                  <span>60 mg/dL</span>
                  <span>150 mg/dL</span>
                  <span>400 mg/dL</span>
                </div>
                <div className="mt-2">
                  <input
                    type="number"
                    value={eagMgInput}
                    onChange={(e) => setEagMgInput(e.target.value)}
                    className="w-full bg-slate-900/60 border border-brand-border/40 rounded-xl px-4 py-2.5 text-white font-mono text-sm focus:outline-none focus:border-brand-cyan/80"
                    placeholder="Enter eAG value in mg/dL..."
                    min="40"
                    max="600"
                  />
                </div>
              </div>
            )}

            {/* Primary Action Button */}
            <button
              onClick={handleAddLog}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-brand-cyan to-brand-indigo hover:opacity-95 text-white font-bold py-3.5 rounded-xl transition-all shadow-md shadow-brand-cyan/10 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
            >
              <PlusCircle className="w-5 h-5" />
              <span>Log Conversion Results</span>
            </button>
          </div>

          {/* Outputs Section */}
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-panel border border-brand-border/80 rounded-3xl p-6 md:p-8 relative overflow-hidden bg-gradient-cyber min-h-[360px] flex flex-col justify-between">
              
              {/* Background glows */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-cyan/10 rounded-full blur-[60px] pointer-events-none" />
              <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-brand-indigo/5 rounded-full blur-[60px] pointer-events-none" />

              {/* Main output numbers */}
              <div className="text-center pb-6 border-b border-brand-border/30">
                {calcMode === "a1c-to-eag" ? (
                  <>
                    <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest font-sans px-2.5 py-1 bg-brand-cyan/10 border border-brand-cyan/20 rounded-full inline-block mb-3">
                      Estimated Average Glucose (eAG)
                    </span>
                    <div className="flex justify-center items-baseline gap-1.5">
                      <span className="font-display font-extrabold text-5xl md:text-6xl text-white tracking-tight">
                        {results.eagMg}
                      </span>
                      <span className="font-sans font-bold text-2xl text-brand-cyan">mg/dL</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-2 font-medium">
                      Equivalent to <span className="text-white font-bold">{results.eagMmol} mmol/L</span> average daily glucose
                    </p>
                  </>
                ) : (
                  <>
                    <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest font-sans px-2.5 py-1 bg-brand-cyan/10 border border-brand-cyan/20 rounded-full inline-block mb-3">
                      Calculated Hemoglobin A1c
                    </span>
                    <div className="flex justify-center items-baseline gap-1.5">
                      <span className="font-display font-extrabold text-5xl md:text-6xl text-white tracking-tight">
                        {results.a1cVal}
                      </span>
                      <span className="font-sans font-bold text-2xl text-brand-cyan">%</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-2 font-medium">
                      Calculated from eAG of <span className="text-white font-bold">{results.eagMg} mg/dL</span>
                    </p>
                  </>
                )}
              </div>

              {/* Staging Alert panel */}
              <div className={`border p-4 rounded-xl text-left flex items-start gap-3 transition-colors ${results.categoryColor}`}>
                <Shield className="w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-white">Glycemic Staging: {results.category}</h4>
                  <p className="text-xs text-gray-300 mt-0.5 leading-normal">{results.textDesc}</p>
                </div>
              </div>

              {/* Step-by-step formula math */}
              <div className="bg-slate-900/60 border border-brand-border/30 rounded-2xl p-5 text-left space-y-2.5">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                  <Info className="w-4 h-4 text-brand-cyan" />
                  <span>Clinical Equation Walkthrough</span>
                </h4>
                <div className="text-xs text-gray-300">
                  {calcMode === "a1c-to-eag" ? (
                    <p>
                      <strong>Formula:</strong> (28.7 × A1C) − 46.7<br/>
                      (28.7 × {results.a1cVal}%) − 46.7 = <strong className="text-brand-cyan">{results.eagMg} mg/dL</strong>.
                    </p>
                  ) : (
                    <p>
                      <strong>Formula:</strong> (eAG + 46.7) ÷ 28.7<br/>
                      ({results.eagMg} + 46.7) ÷ 28.7 = <strong className="text-brand-cyan">{results.a1cVal}%</strong>.
                    </p>
                  )}
                </div>
              </div>

              {/* Warnings and Prints */}
              <div className="mt-4 pt-4 border-t border-brand-border/30 flex justify-between items-center text-xs">
                <span className="text-[10px] text-gray-500 font-medium">ADA Clinically Aligned Conversion</span>
                <button
                  onClick={handlePrint}
                  className="flex items-center gap-1 hover:underline text-brand-cyan font-bold cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Download Report</span>
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
              <span>HbA1c History Logs</span>
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
                <p className="font-bold text-white text-base">No Saved Conversions</p>
                <p className="text-xs text-gray-400 mt-1">Use the calculator tab above to convert HbA1c values and click &quot;Log Conversion Results&quot;.</p>
              </div>
            </div>
          ) : (
            <div className="glass-panel border border-brand-border rounded-2xl overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-900 border-b border-brand-border text-gray-300 font-bold">
                      <th className="p-3">Calculated Date</th>
                      <th className="p-3">Calculation Mode</th>
                      <th className="p-3 text-right">HbA1c (%)</th>
                      <th className="p-3 text-right">eAG (mg/dL)</th>
                      <th className="p-3 text-right">eAG (mmol/L)</th>
                      <th className="p-3">Glycemic Category</th>
                      <th className="p-3 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brand-border/30 text-gray-300">
                    {records.map((r) => (
                      <tr key={r.id} className="hover:bg-white/[0.02] transition-all">
                        <td className="p-3 font-medium">{r.timestamp}</td>
                        <td className="p-3 text-gray-400 font-medium">
                          {r.mode === "a1c-to-eag" ? "A1C to Glucose" : "Glucose to A1C"}
                        </td>
                        <td className="p-3 text-right font-mono font-bold text-white">
                          {r.a1cVal}%
                        </td>
                        <td className="p-3 text-right font-mono text-brand-cyan">
                          {r.eagMg} mg/dL
                        </td>
                        <td className="p-3 text-right font-mono text-gray-400">
                          {r.eagMmol} mmol/L
                        </td>
                        <td className="p-3 font-semibold">
                          <span className={`px-2 py-0.5 rounded text-[10px] ${
                            r.category === "Diabetes" 
                              ? "bg-rose-500/10 text-rose-300 border border-rose-500/20" 
                              : r.category === "Prediabetes"
                              ? "bg-amber-500/10 text-amber-300 border border-amber-500/20"
                              : "bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/20"
                          }`}>
                            {r.category}
                          </span>
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
              <span>Diabetes & A1C Math Reference Guide</span>
            </h3>

            <div className="space-y-4">
              <h4 className="text-white font-bold text-base">What is HbA1c?</h4>
              <p>
                HbA1c (Hemoglobin A1c) is a blood test that shows the average blood sugar level over the past 8–12 weeks. It works by measuring how much glucose is attached to hemoglobin in red blood cells. Unlike daily glucose tests, HbA1c gives a long-term view of blood sugar control.
              </p>

              <h4 className="text-white font-bold text-base pt-2">Why Is HbA1c Important?</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Monitor Long-Term Blood Sugar:</strong> Reflects average glucose levels over several weeks.</li>
                <li><strong>Diagnose Diabetes:</strong> Healthcare providers use HbA1c as part of standard diagnostic testing.</li>
                <li><strong>Evaluate Treatment Effectiveness:</strong> Helps doctors understand how well treatment plans are working.</li>
                <li><strong>Reduce Complications Risk:</strong> Better HbA1c control is linked to lower risk of long-term complications.</li>
              </ul>

              <h4 className="text-white font-bold text-base pt-2">glycemic Ranges classification</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-brand-emerald/5 border border-brand-emerald/20 p-3 rounded-lg text-center">
                  <p className="font-bold text-brand-emerald">Normal</p>
                  <p className="text-lg font-bold text-white mt-1">&lt; 5.7%</p>
                  <p className="text-[10px] text-gray-400 mt-1">Non-diabetic average baseline</p>
                </div>
                <div className="bg-amber-500/5 border border-amber-500/20 p-3 rounded-lg text-center">
                  <p className="font-bold text-amber-400">Prediabetes</p>
                  <p className="text-lg font-bold text-white mt-1">5.7% – 6.4%</p>
                  <p className="text-[10px] text-gray-400 mt-1">Increased glycemic risks</p>
                </div>
                <div className="bg-rose-500/5 border border-rose-500/20 p-3 rounded-lg text-center">
                  <p className="font-bold text-rose-400">Diabetes</p>
                  <p className="text-lg font-bold text-white mt-1">&ge; 6.5%</p>
                  <p className="text-[10px] text-gray-400 mt-1">Diagnostic boundary criteria</p>
                </div>
              </div>

              <h4 className="text-white font-bold text-base pt-2">ADA ADOPTED FORMULA</h4>
              <p>
                The estimated average glucose (eAG) is calculated using the following clinical equation:
              </p>
              <div className="bg-slate-900 border border-brand-border/40 rounded-xl p-4 font-mono text-xs text-brand-cyan text-center">
                eAG (mg/dL) = (28.7 × HbA1c) − 46.7<br/>
                eAG (mmol/L) = (1.594 × HbA1c) − 2.59
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
