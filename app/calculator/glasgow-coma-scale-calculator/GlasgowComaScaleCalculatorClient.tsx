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
  Info,
  Check,
  Printer,
  History
} from "lucide-react";

interface GcsRecord {
  id: string;
  eye: number;
  verbal: number | "1T";
  motor: number;
  intubated: boolean;
  total: number | string;
  status: "Mild" | "Moderate" | "Severe";
  timestamp: string;
}

export default function GlasgowComaScaleCalculatorClient() {
  const [activeTab, setActiveTab] = useState<"calculator" | "logger" | "reference">("calculator");
  
  // Inputs
  const [eyeScore, setEyeScore] = useState<number>(4);
  const [verbalScore, setVerbalScore] = useState<number>(5);
  const [motorScore, setMotorScore] = useState<number>(6);
  const [isIntubated, setIsIntubated] = useState<boolean>(false);

  // History logs
  const [records, setRecords] = useState<GcsRecord[]>([
    {
      id: "1",
      eye: 4,
      verbal: 5,
      motor: 6,
      intubated: false,
      total: 15,
      status: "Mild",
      timestamp: "Initial Baseline - 09:30 AM"
    }
  ]);

  // Options Definitions
  const eyeOptions = [
    { value: 4, label: "E4 - Spontaneous", desc: "Opens eyes spontaneously without external stimulation" },
    { value: 3, label: "E3 - To Sound / Speech", desc: "Opens eyes in response to voice, command, or shout" },
    { value: 2, label: "E2 - To Pressure / Pain", desc: "Opens eyes in response to pressure or painful stimulus" },
    { value: 1, label: "E1 - None", desc: "No eye opening to any stimulus" }
  ];

  const verbalOptions = [
    { value: 5, label: "V5 - Oriented", desc: "Conversational, oriented to time, place, and person" },
    { value: 4, label: "V4 - Confused", desc: "Conversational but confused or disoriented in one or more areas" },
    { value: 3, label: "V3 - Inappropriate Words", desc: "Uses intelligible random words, no coherent conversation" },
    { value: 2, label: "V2 - Incomprehensible Sounds", desc: "Makes groans, moans, or sounds but no recognizable words" },
    { value: 1, label: "V1 - None", desc: "No verbal response or sound output" }
  ];

  const motorOptions = [
    { value: 6, label: "M6 - Obeys Commands", desc: "Follows simple instructions (e.g., 'squeeze my hands', 'show me two fingers')" },
    { value: 5, label: "M5 - Localising to Pain", desc: "Moves hand toward pain stimulation to remove or localize the pressure" },
    { value: 4, label: "M4 - Normal Flexion / Withdrawal", desc: "Pulls limb/body away from painful stimulus" },
    { value: 3, label: "M3 - Abnormal Flexion (Decorticate)", desc: "Flexion posturing in response to pain (wrists/arms flexed over chest)" },
    { value: 2, label: "M2 - Extension (Decerebrate)", desc: "Extension posturing in response to pain (wrists/arms extended and adducted)" },
    { value: 1, label: "M1 - None", desc: "No motor response to pain stimulus" }
  ];

  // Calculation logic
  const getGcsResult = () => {
    const vScore = isIntubated ? 1 : verbalScore;
    const totalVal = eyeScore + vScore + motorScore;
    
    // Classify severity
    let status: "Mild" | "Moderate" | "Severe" = "Mild";
    if (totalVal <= 8) {
      status = "Severe";
    } else if (totalVal <= 12) {
      status = "Moderate";
    } else {
      status = "Mild";
    }

    const totalText = isIntubated ? `${totalVal}T` : `${totalVal}`;

    return {
      total: totalText,
      totalNum: totalVal,
      status,
      verbalDisplay: isIntubated ? "1T" : `V${verbalScore}`
    };
  };

  const result = getGcsResult();

  const handleAddRecord = () => {
    const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const date = new Date().toLocaleDateString([], { month: "short", day: "numeric" });
    
    const newRecord: GcsRecord = {
      id: Date.now().toString(),
      eye: eyeScore,
      verbal: isIntubated ? "1T" : verbalScore,
      motor: motorScore,
      intubated: isIntubated,
      total: result.total,
      status: result.status,
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
  const getStatusColor = (status: "Mild" | "Moderate" | "Severe") => {
    switch (status) {
      case "Mild":
        return {
          text: "text-brand-emerald",
          bg: "bg-brand-emerald/10",
          border: "border-brand-emerald/20",
          glow: "from-brand-emerald/10"
        };
      case "Moderate":
        return {
          text: "text-amber-400",
          bg: "bg-amber-500/10",
          border: "border-amber-500/20",
          glow: "from-amber-500/10"
        };
      case "Severe":
        return {
          text: "text-rose-400",
          bg: "bg-rose-500/10",
          border: "border-rose-500/20",
          glow: "from-rose-500/10"
        };
    }
  };

  const statusStyle = getStatusColor(result.status);

  return (
    <div className="w-full py-2 print:p-0">
      {/* Tabs Selector */}
      <div className="flex border-b border-brand-border/60 mb-8 print:hidden justify-center sm:justify-start">
        {[
          { id: "calculator", label: "GCS Calculator", icon: <Calculator className="w-4 h-4" /> },
          { id: "logger", label: "Assessment Log", icon: <History className="w-4 h-4" /> },
          { id: "reference", label: "Clinical Reference", icon: <BookOpen className="w-4 h-4" /> }
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Inputs Panel */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Intubation toggle */}
            <div className="glass-panel border border-brand-border rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <h4 className="text-white font-bold text-sm tracking-wide">Intubated Patient Override</h4>
                <p className="text-xs text-gray-400 mt-1">
                  If the patient has an advanced airway (endotracheal tube/tracheostomy), toggle this to report the score with a &quot;T&quot; indicator (Verbal = 1T).
                </p>
              </div>
              <button
                onClick={() => setIsIntubated(!isIntubated)}
                className={`w-32 py-2 px-4 text-xs font-bold rounded-xl border transition-all cursor-pointer flex justify-center items-center gap-1.5 ${
                  isIntubated
                    ? "bg-brand-cyan/20 border-brand-cyan text-brand-cyan font-extrabold shadow-lg shadow-brand-cyan/10"
                    : "bg-brand-bg/50 border-brand-border text-gray-400 hover:text-white hover:border-gray-500"
                }`}
              >
                {isIntubated && <Check className="w-3.5 h-3.5" />}
                <span>{isIntubated ? "Intubated" : "Standard V"}</span>
              </button>
            </div>

            {/* 1. Eye Response Selector */}
            <div className="glass-panel border border-brand-border rounded-2xl p-6 space-y-4">
              <h3 className="text-white font-bold font-display text-sm tracking-wide uppercase flex items-center gap-2 border-b border-brand-border/40 pb-3">
                <span className="w-5 h-5 rounded bg-brand-cyan/10 text-brand-cyan flex items-center justify-center font-extrabold text-xs">E</span>
                <span>Eye Opening Response</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {eyeOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setEyeScore(opt.value)}
                    className={`text-left p-4 rounded-xl border transition-all cursor-pointer flex flex-col gap-1 ${
                      eyeScore === opt.value
                        ? "bg-brand-cyan/10 border-brand-cyan/60 text-white shadow-md shadow-brand-cyan/5"
                        : "bg-slate-900/40 border-brand-border/60 text-gray-300 hover:border-brand-cyan/35 hover:bg-slate-900/60"
                    }`}
                  >
                    <div className="flex justify-between items-center w-full">
                      <span className="font-bold text-xs">{opt.label}</span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                        eyeScore === opt.value ? "bg-brand-cyan text-brand-bg" : "bg-slate-800 text-gray-400"
                      }`}>
                        +{opt.value} pts
                      </span>
                    </div>
                    <p className="text-[10px] text-gray-400 leading-normal mt-1">{opt.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Verbal Response Selector */}
            <div className="glass-panel border border-brand-border rounded-2xl p-6 space-y-4 relative">
              {isIntubated && (
                <div className="absolute inset-0 bg-brand-bg/80 backdrop-blur-[1px] rounded-2xl z-20 flex flex-col items-center justify-center p-6 text-center border border-brand-border/65">
                  <div className="bg-brand-cyan/10 border border-brand-cyan/20 p-2.5 rounded-full mb-3">
                    <Info className="w-5 h-5 text-brand-cyan" />
                  </div>
                  <p className="font-bold text-white text-sm">Verbal Response Override Active</p>
                  <p className="text-xs text-gray-400 max-w-sm mt-1 leading-relaxed">
                    Patient is marked as intubated. Standard verbal assessment is disabled and registered as **1T** (Verbal Score = 1).
                  </p>
                </div>
              )}
              <h3 className="text-white font-bold font-display text-sm tracking-wide uppercase flex items-center gap-2 border-b border-brand-border/40 pb-3">
                <span className="w-5 h-5 rounded bg-brand-cyan/10 text-brand-cyan flex items-center justify-center font-extrabold text-xs">V</span>
                <span>Verbal Response</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {verbalOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setVerbalScore(opt.value)}
                    disabled={isIntubated}
                    className={`text-left p-4 rounded-xl border transition-all cursor-pointer flex flex-col gap-1 ${
                      verbalScore === opt.value
                        ? "bg-brand-cyan/10 border-brand-cyan/60 text-white shadow-md shadow-brand-cyan/5"
                        : "bg-slate-900/40 border-brand-border/60 text-gray-300 hover:border-brand-cyan/35 hover:bg-slate-900/60"
                    }`}
                  >
                    <div className="flex justify-between items-center w-full">
                      <span className="font-bold text-xs">{opt.label}</span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                        verbalScore === opt.value ? "bg-brand-cyan text-brand-bg" : "bg-slate-800 text-gray-400"
                      }`}>
                        +{opt.value} pts
                      </span>
                    </div>
                    <p className="text-[10px] text-gray-400 leading-normal mt-1">{opt.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Motor Response Selector */}
            <div className="glass-panel border border-brand-border rounded-2xl p-6 space-y-4">
              <h3 className="text-white font-bold font-display text-sm tracking-wide uppercase flex items-center gap-2 border-b border-brand-border/40 pb-3">
                <span className="w-5 h-5 rounded bg-brand-cyan/10 text-brand-cyan flex items-center justify-center font-extrabold text-xs">M</span>
                <span>Motor Response</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {motorOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setMotorScore(opt.value)}
                    className={`text-left p-4 rounded-xl border transition-all cursor-pointer flex flex-col gap-1 ${
                      motorScore === opt.value
                        ? "bg-brand-cyan/10 border-brand-cyan/60 text-white shadow-md shadow-brand-cyan/5"
                        : "bg-slate-900/40 border-brand-border/60 text-gray-300 hover:border-brand-cyan/35 hover:bg-slate-900/60"
                    }`}
                  >
                    <div className="flex justify-between items-center w-full">
                      <span className="font-bold text-xs">{opt.label}</span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                        motorScore === opt.value ? "bg-brand-cyan text-brand-bg" : "bg-slate-800 text-gray-400"
                      }`}>
                        +{opt.value} pts
                      </span>
                    </div>
                    <p className="text-[10px] text-gray-400 leading-normal mt-1">{opt.desc}</p>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Results Sidebar Panel */}
          <div className="lg:col-span-4 space-y-6">
            <div className={`glass-panel border border-brand-border rounded-2xl p-6 relative overflow-hidden bg-gradient-to-br ${statusStyle.glow} via-transparent to-transparent transition-all duration-300`}>
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brand-cyan/10 to-transparent pointer-events-none" />

              <div className="text-center space-y-4">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1 justify-center">
                  <Activity className="w-3.5 h-3.5 text-brand-cyan" />
                  <span>Calculated GCS Score</span>
                </p>
                
                <div className="space-y-1">
                  <h2 className="text-6xl font-display font-extrabold text-white">
                    {result.total}
                  </h2>
                  <p className="text-[11px] font-bold text-gray-400 tracking-wider">
                    Breakdown: E{eyeScore} {result.verbalDisplay} M{motorScore}
                  </p>
                </div>

                <div className="border-t border-brand-border/40 pt-4 space-y-2">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Clinical Classification</p>
                  <div>
                    <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold ${statusStyle.bg} ${statusStyle.text} border ${statusStyle.border}`}>
                      {result.status} Injury / Consciousness
                    </span>
                    <p className="text-[10px] text-gray-400 mt-2 max-w-[200px] mx-auto leading-normal">
                      {result.status === "Severe" && "Airway compromise risk (GCS ≤ 8). Secure airway and check reflexes."}
                      {result.status === "Moderate" && "Neurological deficit, requires hospital monitoring & diagnostic imaging."}
                      {result.status === "Mild" && "Normal consciousness range. Monitor for concussion symptoms."}
                    </p>
                  </div>
                </div>
              </div>

              {/* Dynamic GCS Spectrum Visual Gauge */}
              <div className="mt-8 space-y-2 border-t border-brand-border/30 pt-4">
                <div className="flex justify-between items-center text-[10px] text-gray-400">
                  <span className="flex items-center gap-1"><span className="w-2 h-2 bg-rose-500 rounded-full inline-block" /> Severe (3-8)</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 bg-amber-400 rounded-full inline-block" /> Mod (9-12)</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 bg-brand-emerald rounded-full inline-block" /> Mild (13-15)</span>
                </div>
                <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden flex border border-brand-border/40 p-0.5 relative">
                  {/* Visual Marker for Calculated GCS */}
                  <div 
                    style={{ 
                      left: `${Math.max(5, Math.min(95, ((result.totalNum - 3) / 12) * 100))}%` 
                    }}
                    className="absolute top-1/2 -translate-y-1/2 w-2 h-4 bg-white border border-brand-bg rounded shadow-lg z-10 -translate-x-1/2 transition-all duration-500"
                  />
                  
                  {/* Colored Segments */}
                  <div className="h-full bg-rose-500 rounded-l-full" style={{ width: "42%" }} />
                  <div className="h-full bg-amber-500/80" style={{ width: "33%" }} />
                  <div className="h-full bg-brand-emerald rounded-r-full" style={{ width: "25%" }} />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-brand-border/40 grid grid-cols-2 gap-2">
                <button
                  onClick={handleAddRecord}
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-brand-cyan to-brand-indigo hover:opacity-95 text-white font-bold text-[10px] py-2.5 rounded-xl transition-all shadow-md cursor-pointer"
                >
                  <PlusCircle className="w-3.5 h-3.5" />
                  <span>Log Score</span>
                </button>
                <button 
                  onClick={handlePrint}
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-slate-900 border border-brand-border hover:bg-slate-800 text-gray-300 font-bold text-[10px] py-2.5 rounded-xl transition-all cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5 text-brand-cyan" />
                  <span>Print Brief</span>
                </button>
              </div>
            </div>

            {/* Quick Summary Reference card */}
            <div className="glass-panel border border-brand-border rounded-2xl p-5 bg-white/[0.01] space-y-3">
              <div className="flex items-center justify-between text-[10px] text-gray-500 border-b border-brand-border/40 pb-2.5">
                <span className="font-bold uppercase tracking-wider flex items-center gap-1.5 text-brand-cyan">
                  <Activity className="w-3.5 h-3.5" /> Clinical GCS Protocol
                </span>
                <span>Airway Guideline</span>
              </div>
              <div className="space-y-2.5">
                <div className="bg-rose-500/10 border border-rose-500/20 text-rose-300 rounded-lg p-3 text-[11px] leading-relaxed">
                  <p className="font-bold flex items-center gap-1 mb-0.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                    <span>&quot;GCS of 8 or Less, Intubate&quot;</span>
                  </p>
                  <span>Patients scoring 8 or less are considered in a coma and typically cannot protect their airway. Consider immediate airway intervention.</span>
                </div>
                <div className="text-[10px] text-gray-400 leading-normal flex items-start gap-1">
                  <Info className="w-3 h-3 text-brand-cyan shrink-0 mt-0.5" />
                  <span>Always record components individually (e.g. E3 V4 M5) instead of just the summary score, to ensure baseline details are preserved.</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* TAB 2: MEASUREMENT LOGS */}
      {activeTab === "logger" && (
        <div className="glass-panel border border-brand-border rounded-2xl p-6 space-y-6">
          <div className="flex justify-between items-center border-b border-brand-border/50 pb-3">
            <h3 className="text-white font-semibold font-display text-sm tracking-wide uppercase flex items-center gap-2">
              <History className="w-4 h-4 text-brand-cyan" />
              <span>Consciousness Level Assessment History Log</span>
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
                      <th className="py-3 px-3">Date & Time</th>
                      <th className="py-3 px-3">Total Score</th>
                      <th className="py-3 px-3">Eye (E)</th>
                      <th className="py-3 px-3">Verbal (V)</th>
                      <th className="py-3 px-3">Motor (M)</th>
                      <th className="py-3 px-3">Intubated</th>
                      <th className="py-3 px-3">Classification</th>
                      <th className="py-3 px-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brand-border/30 text-gray-300">
                    {records.map((r) => {
                      const statStyle = getStatusColor(r.status);
                      return (
                        <tr key={r.id} className="hover:bg-white/[0.02] transition-all">
                          <td className="py-3.5 px-3 text-white font-medium">{r.timestamp}</td>
                          <td className="py-3.5 px-3 font-extrabold text-base text-white">{r.total}</td>
                          <td className="py-3.5 px-3">E{r.eye}</td>
                          <td className="py-3.5 px-3">{r.verbal === "1T" ? "1T" : `V${r.verbal}`}</td>
                          <td className="py-3.5 px-3">M{r.motor}</td>
                          <td className="py-3.5 px-3">{r.intubated ? "Yes (V1T)" : "No"}</td>
                          <td className="py-3.5 px-3">
                            <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold ${statStyle.bg} ${statStyle.text} border ${statStyle.border}`}>
                              {r.status}
                            </span>
                          </td>
                          <td className="py-3.5 px-3 text-right">
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
                No GCS records logged. Go back to GCS Calculator tab and click &quot;Log Score&quot;.
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 3: REFERENCE GUIDELINES */}
      {activeTab === "reference" && (
        <div className="glass-panel border border-brand-border rounded-2xl p-6 space-y-8">
          
          <div className="border-b border-brand-border/40 pb-4">
            <h3 className="text-white font-semibold font-display text-sm tracking-wide uppercase flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-brand-cyan" />
              <span>Glasgow Coma Scale Reference & Bedside Guidelines</span>
            </h3>
            <p className="text-xs text-gray-400 mt-1">
              Clinical descriptors and scores for eye opening, verbal communication, and motor response.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            {/* Eye Column */}
            <div className="space-y-4">
              <h4 className="font-extrabold text-brand-cyan border-b border-brand-border/30 pb-2">Eye Opening (1 - 4)</h4>
              <div className="space-y-3">
                {[
                  { score: 4, label: "Spontaneous", desc: "Patient opens eyes naturally without external stimulation." },
                  { score: 3, label: "To Sound", desc: "Opens eyes when spoken to or ordered in a loud voice." },
                  { score: 2, label: "To Pressure", desc: "Opens eyes after painful pressure stimulus is applied (e.g. fingernail bed pressure)." },
                  { score: 1, label: "None", desc: "No eye opening occurs in response to any physical or audio stimulation." }
                ].map((item) => (
                  <div key={item.score} className="bg-slate-900/40 border border-brand-border/30 p-3 rounded-lg">
                    <p className="font-bold text-white text-xs flex justify-between">
                      <span>{item.label}</span>
                      <span className="text-brand-cyan">+{item.score}</span>
                    </p>
                    <p className="text-[10px] text-gray-400 mt-1 leading-normal">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Verbal Column */}
            <div className="space-y-4">
              <h4 className="font-extrabold text-brand-cyan border-b border-brand-border/30 pb-2">Verbal Response (1 - 5)</h4>
              <div className="space-y-3">
                {[
                  { score: 5, label: "Oriented", desc: "Answers correctly regarding time, place, current location, and identity." },
                  { score: 4, label: "Confused", desc: "Converses in complete sentences but is disoriented/confused about facts." },
                  { score: 3, label: "Inappropriate Words", desc: "Utters distinct, understandable words but they make no sense in context." },
                  { score: 2, label: "Incomprehensible Sounds", desc: "Produces moaning, groaning, or grunting noises, but no clear words." },
                  { score: 1, label: "None", desc: "No vocal output or sounds produced." }
                ].map((item) => (
                  <div key={item.score} className="bg-slate-900/40 border border-brand-border/30 p-3 rounded-lg">
                    <p className="font-bold text-white text-xs flex justify-between">
                      <span>{item.label}</span>
                      <span className="text-brand-cyan">+{item.score}</span>
                    </p>
                    <p className="text-[10px] text-gray-400 mt-1 leading-normal">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Motor Column */}
            <div className="space-y-4">
              <h4 className="font-extrabold text-brand-cyan border-b border-brand-border/30 pb-2">Motor Response (1 - 6)</h4>
              <div className="space-y-3">
                {[
                  { score: 6, label: "Obeys Commands", desc: "Executes requests accurately (e.g. sticking out tongue, squeezing hand)." },
                  { score: 5, label: "Localises Pain", desc: "Moves limbs purposefully to remove/stop a painful stimulus." },
                  { score: 4, label: "Normal Flexion", desc: "Withdraws or pulls the stimulated body part away from the pain source." },
                  { score: 3, label: "Abnormal Flexion", desc: "Decorticate posturing: arms flexed, wrists bent, fists clenched over chest." },
                  { score: 2, label: "Extension", desc: "Decerebrate posturing: arms extended rigidly, legs internally rotated." },
                  { score: 1, label: "None", desc: "No movement or motor reflex to painful pressure stimulation." }
                ].map((item) => (
                  <div key={item.score} className="bg-slate-900/40 border border-brand-border/30 p-3 rounded-lg">
                    <p className="font-bold text-white text-xs flex justify-between">
                      <span>{item.label}</span>
                      <span className="text-brand-cyan">+{item.score}</span>
                    </p>
                    <p className="text-[10px] text-gray-400 mt-1 leading-normal">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Paediatric GCS info */}
          <div className="border-t border-brand-border/30 pt-6 space-y-4 text-gray-300 leading-relaxed text-sm">
            <h4 className="font-bold text-white text-base">Pediatric GCS (PGCS) Adaptations</h4>
            <p>
              In infants and children younger than 5 years old, verbal and motor skills are still developing, requiring modified scoring standards for clinical assessment:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-900/35 border border-brand-border/45 rounded-xl p-5 text-xs">
              <div className="space-y-2">
                <p className="font-bold text-brand-cyan uppercase tracking-wider text-[10px]">Pediatric Verbal Categories:</p>
                <ul className="list-disc pl-4 space-y-1.5 text-gray-400">
                  <li><strong>Score 5:</strong> Smiles, coos, follows objects, social interactions.</li>
                  <li><strong>Score 4:</strong> Cries but is consolable, interactive vocalizations.</li>
                  <li><strong>Score 3:</strong> Inconsistently consolable, persistent crying or screaming.</li>
                  <li><strong>Score 2:</strong> Restless, agitated, grunting sounds.</li>
                  <li><strong>Score 1:</strong> No vocal output or sounds whatsoever.</li>
                </ul>
              </div>
              <div className="space-y-2">
                <p className="font-bold text-brand-cyan uppercase tracking-wider text-[10px]">Pediatric Motor Categories:</p>
                <ul className="list-disc pl-4 space-y-1.5 text-gray-400">
                  <li><strong>Score 6:</strong> Moves spontaneously or obeys simple gestures.</li>
                  <li><strong>Score 5:</strong> Localizes tactile pressure stimulus.</li>
                  <li><strong>Score 4:</strong> Withdraws in response to painful stimuli.</li>
                  <li><strong>Score 3:</strong> Decorticate flexion posturing (abnormal).</li>
                  <li><strong>Score 2:</strong> Decerebrate extension posturing (abnormal).</li>
                  <li><strong>Score 1:</strong> Flaccid, no motor movement response.</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      )}

      {/* Printable Report Layout */}
      <div className="hidden print:block text-black bg-white p-8 space-y-6 font-sans">
        <div className="border-b border-gray-300 pb-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 font-display">Glasgow Coma Scale Assessment Report</h1>
            <p className="text-xs text-gray-500">Med Clinic X Neurological Diagnostics Brief</p>
          </div>
          <Activity className="w-8 h-8 text-cyan-600" />
        </div>

        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <h3 className="font-bold text-gray-700 uppercase text-xs mb-1">Measured Sub-scores</h3>
            <p><strong>Eye Response (E):</strong> {eyeScore} pts ({eyeOptions.find(o => o.value === eyeScore)?.label})</p>
            <p><strong>Verbal Response (V):</strong> {result.verbalDisplay} ({isIntubated ? "Intubated" : verbalOptions.find(o => o.value === verbalScore)?.label})</p>
            <p><strong>Motor Response (M):</strong> {motorScore} pts ({motorOptions.find(o => o.value === motorScore)?.label})</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-700 uppercase text-xs mb-1">Calculated Total & Severity</h3>
            <p className="text-lg font-bold"><strong>GCS Score:</strong> {result.total}</p>
            <p><strong>Neurological Status:</strong> {result.status} Impairment</p>
            <p><strong>Airway Risk Action:</strong> {result.totalNum <= 8 ? "Secure Airway immediately (GCS ≤ 8)" : "Monitor vital signs and check pupil responses"}</p>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 text-[10px] text-gray-500 text-center space-y-1">
          <p>This GCS assessment was calculated dynamically. It is intended to support, not replace, formal neurological clinical examinations by qualified specialists.</p>
          <p>&copy; {new Date().getFullYear()} Med Clinic X Inc. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
