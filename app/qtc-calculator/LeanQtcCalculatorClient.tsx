"use client";

import { useState } from "react";
import { 
  Calculator, 
  BookOpen, 
  PlusCircle, 
  Trash2, 
  FileText, 
  AlertTriangle,
  Activity,
  Heart,
  Scale,
  Info,
  ChevronDown
} from "lucide-react";

interface QtcRecord {
  id: string;
  qt: number;
  hr: number;
  gender: "male" | "female";
  bazett: number;
  fridericia: number;
  status: "Normal" | "Borderline" | "Prolonged";
  timestamp: string;
}

export default function LeanQtcCalculatorClient() {
  const [activeTab, setActiveTab] = useState<"calculator" | "logger" | "education">("calculator");
  
  // Inputs
  const [qt, setQt] = useState<string>("400");
  const [hr, setHr] = useState<string>("60");
  const [gender, setGender] = useState<"male" | "female">("male");

  // History logs
  const [records, setRecords] = useState<QtcRecord[]>([
    {
      id: "1",
      qt: 400,
      hr: 75,
      gender: "male",
      bazett: 447,
      fridericia: 431,
      status: "Borderline",
      timestamp: "Initial Baseline - 09:00 AM"
    }
  ]);

  // Compute QTc using Bazett and Fridericia formulas
  const calculateQts = () => {
    const qtVal = parseFloat(qt) || 400;
    const hrVal = parseFloat(hr) || 60;

    // RR interval in seconds = 60 / HR
    const rrSeconds = 60 / hrVal;

    // Bazett formula: QTc = QT / sqrt(RR)
    const bazett = Math.round(qtVal / Math.sqrt(rrSeconds));

    // Fridericia formula: QTc = QT / (RR ^ (1/3))
    const fridericia = Math.round(qtVal / Math.pow(rrSeconds, 1/3));

    // Check status based on Bazett (primary standard in clinical screenings)
    let status: "Normal" | "Borderline" | "Prolonged" = "Normal";
    if (gender === "male") {
      if (bazett > 470) {
        status = "Prolonged";
      } else if (bazett >= 440) {
        status = "Borderline";
      }
    } else {
      if (bazett > 480) {
        status = "Prolonged";
      } else if (bazett >= 450) {
        status = "Borderline";
      }
    }

    return {
      bazett,
      fridericia,
      status,
      rrSeconds: Math.round(rrSeconds * 1000) / 1000
    };
  };

  const results = calculateQts();

  const handleAddRecord = () => {
    const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const date = new Date().toLocaleDateString([], { month: "short", day: "numeric" });
    
    const newRecord: QtcRecord = {
      id: Date.now().toString(),
      qt: parseFloat(qt) || 400,
      hr: parseFloat(hr) || 60,
      gender,
      bazett: results.bazett,
      fridericia: results.fridericia,
      status: results.status,
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

  // Determine status color codes
  const getStatusColor = (status: "Normal" | "Borderline" | "Prolonged") => {
    switch (status) {
      case "Normal":
        return {
          text: "text-brand-emerald",
          bg: "bg-brand-emerald/10",
          border: "border-brand-emerald/20",
          glow: "from-brand-emerald/10"
        };
      case "Borderline":
        return {
          text: "text-amber-400",
          bg: "bg-amber-500/10",
          border: "border-amber-500/20",
          glow: "from-amber-500/10"
        };
      case "Prolonged":
        return {
          text: "text-rose-400",
          bg: "bg-rose-500/10",
          border: "border-rose-500/20",
          glow: "from-rose-500/10"
        };
    }
  };

  const statusStyle = getStatusColor(results.status);

  return (
    <div className="w-full py-4 print:p-0">
      {/* Tabs Selector */}
      <div className="flex border-b border-brand-border/60 mb-8 print:hidden justify-center sm:justify-start">
        {[
          { id: "calculator", label: "QTc Calculator", icon: <Calculator className="w-4 h-4" /> },
          { id: "logger", label: "Measurement Log", icon: <Heart className="w-4 h-4" /> },
          { id: "education", label: "Reference Guidelines", icon: <BookOpen className="w-4 h-4" /> }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
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
              <Activity className="w-4 h-4 text-brand-cyan" />
              <span>Cardiac Metrics</span>
            </h3>

            {/* Gender Toggle */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block">Assessed Gender</label>
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

            {/* QT Interval Input */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block">QT Interval (ms)</label>
              <div className="relative">
                <input
                  type="number"
                  min="200"
                  max="800"
                  value={qt}
                  onChange={(e) => setQt(e.target.value)}
                  className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-3 text-lg font-bold text-white focus:outline-none focus:border-brand-cyan"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-xs text-gray-500">ms</span>
              </div>
            </div>

            {/* Heart Rate Input */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block">Heart Rate (bpm)</label>
              <div className="relative">
                <input
                  type="number"
                  min="30"
                  max="220"
                  value={hr}
                  onChange={(e) => setHr(e.target.value)}
                  className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-3 text-lg font-bold text-white focus:outline-none focus:border-brand-cyan"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-xs text-gray-500">bpm</span>
              </div>
            </div>

            <button
              onClick={handleAddRecord}
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-cyan to-brand-indigo hover:opacity-95 text-white font-bold text-xs py-3 rounded-xl transition-all shadow-md cursor-pointer"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Log Current Calculation</span>
            </button>
          </div>

          {/* Results Card */}
          <div className="md:col-span-7 space-y-6">
            <div className={`glass-panel border border-brand-border rounded-2xl p-8 relative overflow-hidden bg-gradient-to-br ${statusStyle.glow} via-transparent to-transparent transition-all duration-300`}>
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brand-cyan/10 to-transparent pointer-events-none" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
                {/* Left Side: Bazett QTc result */}
                <div className="text-center sm:text-left space-y-2">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1 justify-center sm:justify-start">
                    <Heart className="w-3.5 h-3.5 text-brand-cyan animate-pulse" />
                    <span>Corrected QT Interval (Bazett)</span>
                  </p>
                  <div className="space-y-1">
                    <h2 className="text-5xl font-display font-extrabold text-white">
                      {results.bazett}
                      <span className="text-lg font-bold text-gray-500 ml-1.5">ms</span>
                    </h2>
                    <p className="text-sm text-gray-400">
                      R-R Interval: <span className="font-bold text-brand-cyan">{(parseFloat(hr) ? (60 / parseFloat(hr)) : 1.0).toFixed(3)}s</span>
                    </p>
                  </div>
                </div>

                {/* Right Side: Risk Assessment status */}
                <div className="text-center sm:text-right border-t sm:border-t-0 sm:border-l border-brand-border/60 pt-6 sm:pt-0 sm:pl-8 space-y-2">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Clinical Status Assessment</p>
                  <div>
                    <span className={`inline-block px-3.5 py-1.5 rounded-full text-xs font-bold ${statusStyle.bg} ${statusStyle.text} border ${statusStyle.border}`}>
                      {results.status}
                    </span>
                    <p className="text-xs text-gray-400 mt-2">
                      Based on standard clinical ranges for {gender}s
                    </p>
                  </div>
                </div>
              </div>

              {/* Dynamic QTc Range Visual Gauge */}
              <div className="mt-8 space-y-2">
                <div className="flex justify-between items-center text-xs text-gray-400">
                  <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 bg-brand-emerald rounded-full inline-block" /> Normal (&lt;{gender === "male" ? 440 : 450}ms)</span>
                  <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 bg-amber-400 rounded-full inline-block" /> Borderline</span>
                  <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 bg-rose-500 rounded-full inline-block" /> Prolonged (&gt;{gender === "male" ? 470 : 480}ms)</span>
                </div>
                <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden flex border border-brand-border/40 p-0.5 relative">
                  {/* Visual Marker for Calculated Bazett QTc */}
                  <div 
                    style={{ 
                      left: `${Math.max(5, Math.min(95, ((results.bazett - 300) / 300) * 100))}%` 
                    }}
                    className="absolute top-1/2 -translate-y-1/2 w-2 h-4 bg-white border border-brand-bg rounded shadow-lg z-10 -translate-x-1/2 transition-all duration-500"
                  />
                  
                  {/* Colored Segments */}
                  <div className="h-full bg-brand-emerald rounded-l-full" style={{ width: gender === "male" ? "46%" : "50%" }} />
                  <div className="h-full bg-amber-500/80" style={{ width: "10%" }} />
                  <div className="h-full bg-rose-500 rounded-r-full flex-grow" />
                </div>
              </div>

              {/* Bazett description */}
              <div className="mt-6 pt-4 border-t border-brand-border/40 text-[10px] text-gray-400 flex flex-col sm:flex-row justify-between items-center gap-3">
                <span className="flex items-center gap-1.5 text-left leading-relaxed">
                  <Info className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                  <span>
                    Bazett Formula is calculated as: QTc = QT / &radic;RR. It is the most standard EKG report correction.
                  </span>
                </span>
              </div>
            </div>

            {/* Fridericia Equivalent Reference Card */}
            <div className="glass-panel border border-brand-border rounded-2xl p-6 bg-white/[0.01] space-y-3">
              <div className="flex items-center justify-between text-[10px] text-gray-500 border-b border-brand-border/40 pb-3">
                <span className="font-bold uppercase tracking-wider flex items-center gap-1.5 text-brand-cyan">
                  <Activity className="w-3.5 h-3.5" /> Fridericia Formula Equivalent
                </span>
                <span>Alternative Reference</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[11px] text-gray-500 uppercase font-bold tracking-wider">Fridericia QTc Value</p>
                  <p className="text-xl font-extrabold text-white mt-1">
                    {results.fridericia} <span className="text-xs text-gray-500 font-bold">ms</span>
                  </p>
                </div>
                <div>
                  <p className="text-[11px] text-gray-500 uppercase font-bold tracking-wider">Fridericia Assessment</p>
                  <p className={`text-xl font-extrabold mt-1 ${
                    results.fridericia > (gender === "male" ? 470 : 480) 
                      ? "text-rose-400" 
                      : results.fridericia >= (gender === "male" ? 440 : 450) 
                      ? "text-amber-400" 
                      : "text-brand-emerald"
                  }`}>
                    {results.fridericia > (gender === "male" ? 470 : 480) 
                      ? "Prolonged" 
                      : results.fridericia >= (gender === "male" ? 440 : 450) 
                      ? "Borderline" 
                      : "Normal"
                    }
                  </p>
                </div>
              </div>
              <div className="pt-2 flex justify-between items-center text-xs text-brand-cyan font-bold border-t border-brand-border/20 mt-2">
                <span>* Fridericia is clinically preferred at extreme heart rates (bpm &lt; 50 or &gt; 90).</span>
                <button 
                  onClick={handlePrint}
                  className="flex items-center gap-1 hover:underline cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Download Report Brief</span>
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
              <Heart className="w-4 h-4 text-brand-cyan" />
              <span>Corrected QT Interval History Log</span>
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
                      <th className="py-2.5 px-3">Inputs (QT / HR)</th>
                      <th className="py-2.5 px-3">Bazett QTc</th>
                      <th className="py-2.5 px-3">Fridericia QTc</th>
                      <th className="py-2.5 px-3">Status (Bazett)</th>
                      <th className="py-2.5 px-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brand-border/30">
                    {records.map((r) => {
                      const statStyle = getStatusColor(r.status);
                      return (
                        <tr key={r.id} className="hover:bg-white/[0.02] transition-all">
                          <td className="py-3 px-3 text-white font-medium">{r.timestamp}</td>
                          <td className="py-3 px-3 text-gray-300">{r.qt} ms / {r.hr} bpm ({r.gender})</td>
                          <td className="py-3 px-3 text-brand-cyan font-bold">{r.bazett} ms</td>
                          <td className="py-3 px-3 text-brand-indigo font-bold">{r.fridericia} ms</td>
                          <td className="py-3 px-3">
                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${statStyle.bg} ${statStyle.text} border ${statStyle.border}`}>
                              {r.status}
                            </span>
                          </td>
                          <td className="py-3 px-3 text-right">
                            <button
                              onClick={() => handleDeleteRecord(r.id)}
                              className="text-gray-500 hover:text-rose-400 p-1.5 rounded transition-colors cursor-pointer"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500 text-sm">
                No calculated records saved. Go back to QTc Calculator tab and click "Log Current Calculation".
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
            <span>Clinical QTc References & Interpretation Limits</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-base text-gray-300 leading-relaxed">
            <div className="space-y-4">
              <h4 className="font-bold text-white text-lg">Understanding Corrected QT Limits</h4>
              <p>
                A prolonged QT interval indicates that the heart ventricles are taking longer than normal to recharge (repolarize) after a contraction. This state increases the risk of ventricular tachyarrhythmias, such as Torsades de Pointes.
              </p>
              
              <div className="space-y-2 bg-slate-900/40 border border-brand-border/50 rounded-xl p-5 text-sm">
                <p className="font-bold text-white uppercase tracking-wider text-[10px] text-gray-500">Gender-Based Reference Thresholds:</p>
                <div className="flex justify-between border-b border-brand-border/20 py-2">
                  <span>Male Normal QTc Limit:</span>
                  <span className="font-bold text-brand-emerald">&lt; 440 ms</span>
                </div>
                <div className="flex justify-between border-b border-brand-border/20 py-2">
                  <span>Female Normal QTc Limit:</span>
                  <span className="font-bold text-brand-emerald">&lt; 450 ms</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>Clinically Prolonged Threshold:</span>
                  <span className="font-bold text-rose-400">&gt; 470 ms (Male) / &gt; 480 ms (Female)</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-white text-lg">QTc Ranges Interpretation</h4>
              <div className="space-y-3">
                {[
                  { title: "Normal range", desc: "Commonly considered within standard reference limits. Represents normal repolarization times." },
                  { title: "Borderline range", desc: "Slightly elevated repolarization values. May warrant review of clinical context, electrolyte status, or medications." },
                  { title: "Prolonged range", desc: "Significantly delayed repolarization. Requires consultation and evaluation by a qualified medical professional." }
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-900/40 border border-brand-border/40 rounded-xl p-3 flex gap-3 items-start">
                    <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full shrink-0 mt-2" />
                    <div>
                      <p className="text-xs font-bold text-white">{item.title}</p>
                      <p className="text-[10px] text-gray-400 mt-0.5 leading-normal">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-brand-cyan/5 border border-brand-cyan/20 rounded-xl p-4 flex gap-3 text-sm">
            <AlertTriangle className="w-5.5 h-5.5 text-brand-cyan shrink-0 mt-0.5" />
            <p className="text-base leading-normal">
              <strong>Clinical Note:</strong> Formulas represent standard clinical estimations. Bazett tends to overcorrect at fast heart rates and undercorrect at slow heart rates, whereas Fridericia provides a more stable correction at higher ranges. Diagnosis should only be completed using raw EKG printouts interpreted by a cardiologist.
            </p>
          </div>
        </div>
      )}

      {/* Printable Report Layout */}
      <div className="hidden print:block text-black bg-white p-8 space-y-6 font-sans">
        <div className="border-b border-gray-300 pb-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 font-display">Corrected QT Interval Assessment</h1>
            <p className="text-xs text-gray-500">Med Clinic X Cardiac Diagnostics Brief</p>
          </div>
          <Heart className="w-8 h-8 text-cyan-600" />
        </div>

        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <h3 className="font-bold text-gray-700 uppercase text-xs mb-1">Measured Parameters</h3>
            <p><strong>Assessed Gender:</strong> {gender}</p>
            <p><strong>Raw QT Interval:</strong> {qt} ms</p>
            <p><strong>Heart Rate:</strong> {hr} bpm</p>
            <p><strong>R-R Duration:</strong> {results.rrSeconds}s</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-700 uppercase text-xs mb-1">Calculated Corrections</h3>
            <p><strong>Bazett QTc Value:</strong> {results.bazett} ms</p>
            <p><strong>Fridericia QTc Value:</strong> {results.fridericia} ms</p>
            <p><strong>Clinical Classification (Bazett):</strong> {results.status}</p>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 text-[10px] text-gray-500 text-center space-y-1">
          <p>This report is generated by Med Clinic X calculators. Consult a clinical provider before making major medical adjustments or medication modifications.</p>
          <p>&copy; {new Date().getFullYear()} Med Clinic X Inc. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
