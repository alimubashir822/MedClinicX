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
  Layers,
  Scale,
  Info,
  ChevronDown
} from "lucide-react";

interface AnionGapRecord {
  id: string;
  sodium: number;
  chloride: number;
  bicarbonate: number;
  potassium: number | null;
  anionGap: number;
  status: "Low" | "Normal" | "High";
  timestamp: string;
}

export default function LeanAnionGapCalculatorClient() {
  const [activeTab, setActiveTab] = useState<"calculator" | "logger" | "education">("calculator");
  
  // Inputs
  const [sodium, setSodium] = useState<string>("140");
  const [chloride, setChloride] = useState<string>("104");
  const [bicarbonate, setBicarbonate] = useState<string>("24");
  const [potassium, setPotassium] = useState<string>("4.0");
  const [includeK, setIncludeK] = useState<boolean>(false);

  // History logs
  const [records, setRecords] = useState<AnionGapRecord[]>([
    {
      id: "1",
      sodium: 140,
      chloride: 104,
      bicarbonate: 24,
      potassium: null,
      anionGap: 12,
      status: "Normal",
      timestamp: "Initial Baseline - 09:30 AM"
    }
  ]);

  // Compute Anion Gap
  const calculateAnionGap = () => {
    const na = parseFloat(sodium) || 140;
    const cl = parseFloat(chloride) || 104;
    const hco3 = parseFloat(bicarbonate) || 24;
    const k = parseFloat(potassium) || 4.0;

    let anionGap = 0;
    if (includeK) {
      anionGap = (na + k) - (cl + hco3);
    } else {
      anionGap = na - (cl + hco3);
    }

    anionGap = Math.round(anionGap * 10) / 10;

    let status: "Low" | "Normal" | "High" = "Normal";
    const lowLimit = includeK ? 12 : 8;
    const highLimit = includeK ? 20 : 16;

    if (anionGap > highLimit) {
      status = "High";
    } else if (anionGap < lowLimit) {
      status = "Low";
    }

    return {
      anionGap,
      status,
      lowLimit,
      highLimit
    };
  };

  const results = calculateAnionGap();

  const handleAddRecord = () => {
    const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const date = new Date().toLocaleDateString([], { month: "short", day: "numeric" });
    
    const newRecord: AnionGapRecord = {
      id: Date.now().toString(),
      sodium: parseFloat(sodium) || 140,
      chloride: parseFloat(chloride) || 104,
      bicarbonate: parseFloat(bicarbonate) || 24,
      potassium: includeK ? (parseFloat(potassium) || 4.0) : null,
      anionGap: results.anionGap,
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
  const getStatusColor = (status: "Low" | "Normal" | "High") => {
    switch (status) {
      case "Low":
        return {
          text: "text-brand-cyan",
          bg: "bg-brand-cyan/10",
          border: "border-brand-cyan/20",
          glow: "from-brand-cyan/10"
        };
      case "Normal":
        return {
          text: "text-brand-emerald",
          bg: "bg-brand-emerald/10",
          border: "border-brand-emerald/20",
          glow: "from-brand-emerald/10"
        };
      case "High":
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
          { id: "calculator", label: "Anion Gap Calculator", icon: <Calculator className="w-4 h-4" /> },
          { id: "logger", label: "Electrolyte Log", icon: <Layers className="w-4 h-4" /> },
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
          <div className="md:col-span-5 glass-panel border border-brand-border rounded-2xl p-6 space-y-5">
            <h3 className="text-white font-semibold font-display text-sm tracking-wide uppercase flex items-center gap-2 border-b border-brand-border/50 pb-3">
              <Activity className="w-4 h-4 text-brand-cyan" />
              <span>Electrolyte Panel</span>
            </h3>

            {/* Include Potassium Toggle */}
            <div className="flex justify-between items-center bg-brand-bg/40 p-3 rounded-xl border border-brand-border/60">
              <div>
                <label className="text-[10px] font-bold text-white uppercase tracking-wider block">Include Potassium (K⁺)</label>
                <span className="text-[9px] text-gray-500">Adds Potassium to the gap sum</span>
              </div>
              <input
                type="checkbox"
                checked={includeK}
                onChange={(e) => setIncludeK(e.target.checked)}
                className="w-4 h-4 text-brand-cyan bg-brand-bg border-brand-border rounded focus:ring-brand-cyan focus:ring-2 cursor-pointer"
              />
            </div>

            {/* Sodium Input */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block">Sodium (Na⁺)</label>
              <div className="relative">
                <input
                  type="number"
                  min="80"
                  max="200"
                  step="0.1"
                  value={sodium}
                  onChange={(e) => setSodium(e.target.value)}
                  className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-2.5 text-base font-bold text-white focus:outline-none focus:border-brand-cyan"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-xs text-gray-500">mEq/L</span>
              </div>
            </div>

            {/* Potassium Input (Shown conditionally) */}
            {includeK && (
              <div className="space-y-2 animate-fade-in">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block">Potassium (K⁺)</label>
                <div className="relative">
                  <input
                    type="number"
                    min="1.0"
                    max="10.0"
                    step="0.1"
                    value={potassium}
                    onChange={(e) => setPotassium(e.target.value)}
                    className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-2.5 text-base font-bold text-white focus:outline-none focus:border-brand-cyan"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-xs text-gray-500">mEq/L</span>
                </div>
              </div>
            )}

            {/* Chloride Input */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block">Chloride (Cl⁻)</label>
              <div className="relative">
                <input
                  type="number"
                  min="50"
                  max="150"
                  step="0.1"
                  value={chloride}
                  onChange={(e) => setChloride(e.target.value)}
                  className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-2.5 text-base font-bold text-white focus:outline-none focus:border-brand-cyan"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-xs text-gray-500">mEq/L</span>
              </div>
            </div>

            {/* Bicarbonate Input */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block">Bicarbonate (HCO₃⁻)</label>
              <div className="relative">
                <input
                  type="number"
                  min="5"
                  max="50"
                  step="0.1"
                  value={bicarbonate}
                  onChange={(e) => setBicarbonate(e.target.value)}
                  className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-2.5 text-base font-bold text-white focus:outline-none focus:border-brand-cyan"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-xs text-gray-500">mEq/L</span>
              </div>
            </div>

            <button
              onClick={handleAddRecord}
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-cyan to-brand-indigo hover:opacity-95 text-white font-bold text-xs py-3 rounded-xl transition-all shadow-md cursor-pointer"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Log Electrolyte Gap</span>
            </button>
          </div>

          {/* Results Side */}
          <div className="md:col-span-7 space-y-6">
            <div className={`glass-panel border border-brand-border rounded-2xl p-8 relative overflow-hidden bg-gradient-to-br ${statusStyle.glow} via-transparent to-transparent transition-all duration-300`}>
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brand-cyan/10 to-transparent pointer-events-none" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
                {/* Left Side: Calculated Anion Gap value */}
                <div className="text-center sm:text-left space-y-2">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1 justify-center sm:justify-start">
                    <Scale className="w-3.5 h-3.5 text-brand-cyan" />
                    <span>Estimated Anion Gap</span>
                  </p>
                  <div className="space-y-1">
                    <h2 className="text-5xl font-display font-extrabold text-white">
                      {results.anionGap}
                      <span className="text-lg font-bold text-gray-500 ml-1.5">mEq/L</span>
                    </h2>
                    <p className="text-xs text-gray-400">
                      Formula: <span className="font-semibold text-brand-cyan">{includeK ? "(Na + K) - (Cl + HCO3)" : "Na - (Cl + HCO3)"}</span>
                    </p>
                  </div>
                </div>

                {/* Right Side: Status interpret label */}
                <div className="text-center sm:text-right border-t sm:border-t-0 sm:border-l border-brand-border/60 pt-6 sm:pt-0 sm:pl-8 space-y-2">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Classification Status</p>
                  <div>
                    <span className={`inline-block px-3.5 py-1.5 rounded-full text-xs font-bold ${statusStyle.bg} ${statusStyle.text} border ${statusStyle.border}`}>
                      {results.status} Range
                    </span>
                    <p className="text-[10px] text-gray-400 mt-2">
                      Typical limit: {results.lowLimit} – {results.highLimit} mEq/L
                    </p>
                  </div>
                </div>
              </div>

              {/* Dynamic Anion Gap Range visual gauge slider */}
              <div className="mt-8 space-y-2">
                <div className="flex justify-between items-center text-[10px] text-gray-400">
                  <span className="flex items-center gap-1"><span className="w-2 h-2 bg-brand-cyan rounded-full inline-block" /> Low (&lt;{results.lowLimit})</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 bg-brand-emerald rounded-full inline-block" /> Normal ({results.lowLimit}–{results.highLimit})</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 bg-rose-500 rounded-full inline-block" /> High (&gt;{results.highLimit})</span>
                </div>
                <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden flex border border-brand-border/40 p-0.5 relative">
                  {/* Pin Pointer representing Calculated Anion Gap */}
                  <div 
                    style={{ 
                      left: `${Math.max(5, Math.min(95, (results.anionGap / 30) * 100))}%` 
                    }}
                    className="absolute top-1/2 -translate-y-1/2 w-2 h-4 bg-white border border-brand-bg rounded shadow-md z-10 -translate-x-1/2 transition-all duration-500"
                  />
                  
                  {/* Colored Segments */}
                  <div className="h-full bg-brand-cyan/60 rounded-l-full" style={{ width: includeK ? "40%" : "26%" }} />
                  <div className="h-full bg-brand-emerald" style={{ width: "27%" }} />
                  <div className="h-full bg-rose-500 rounded-r-full flex-grow" />
                </div>
              </div>

              {/* Clinical note footer */}
              <div className="mt-6 pt-4 border-t border-brand-border/40 text-[10px] text-gray-400 flex flex-col sm:flex-row justify-between items-center gap-3">
                <span className="flex items-center gap-1.5 text-left leading-relaxed">
                  <Info className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                  <span>
                    The calculated value represents unmeasured anions (such as phosphates, sulfates, proteins, or ketones) in the blood serum.
                  </span>
                </span>
              </div>
            </div>

            {/* Calculations Breakdown card */}
            <div className="glass-panel border border-brand-border rounded-2xl p-6 bg-white/[0.01] space-y-3">
              <div className="flex items-center justify-between text-[10px] text-gray-500 border-b border-brand-border/40 pb-3">
                <span className="font-bold uppercase tracking-wider flex items-center gap-1.5 text-brand-cyan">
                  <Activity className="w-3.5 h-3.5" /> Clinical Electrolyte Balances
                </span>
                <span>Calculations Summary</span>
              </div>
              
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-slate-900/40 p-2.5 rounded-xl border border-brand-border/40">
                  <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">Cations (Na⁺)</p>
                  <p className="text-base font-extrabold text-white mt-1">
                    {parseFloat(sodium) || 140} <span className="text-[9px] text-gray-500">mEq/L</span>
                  </p>
                </div>
                <div className="bg-slate-900/40 p-2.5 rounded-xl border border-brand-border/40">
                  <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">Anions Sum</p>
                  <p className="text-base font-extrabold text-white mt-1">
                    {Math.round(((parseFloat(chloride) || 104) + (parseFloat(bicarbonate) || 24)) * 10) / 10} <span className="text-[9px] text-gray-500">mEq/L</span>
                  </p>
                </div>
                <div className="bg-slate-900/40 p-2.5 rounded-xl border border-brand-border/40">
                  <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">Anion Gap</p>
                  <p className="text-base font-extrabold text-white mt-1">
                    {results.anionGap} <span className="text-[9px] text-gray-500">mEq/L</span>
                  </p>
                </div>
              </div>

              <div className="pt-2 flex justify-between items-center text-xs text-brand-cyan font-bold border-t border-brand-border/20 mt-2">
                <span>* Typical standard ranges assume normal serum albumin levels.</span>
                <button 
                  onClick={handlePrint}
                  className="flex items-center gap-1 hover:underline cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Download Lab Brief</span>
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
              <Layers className="w-4 h-4 text-brand-cyan" />
              <span>Electrolyte Panel History Log</span>
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
                      <th className="py-2.5 px-3">Electrolytes (Na / Cl / HCO3 / K)</th>
                      <th className="py-2.5 px-3">Calculated Gap</th>
                      <th className="py-2.5 px-3">Status Range</th>
                      <th className="py-2.5 px-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brand-border/30">
                    {records.map((r) => {
                      const statStyle = getStatusColor(r.status);
                      return (
                        <tr key={r.id} className="hover:bg-white/[0.02] transition-all">
                          <td className="py-3 px-3 text-white font-medium">{r.timestamp}</td>
                          <td className="py-3 px-3 text-gray-300">
                            Na⁺: {r.sodium} | Cl⁻: {r.chloride} | HCO₃⁻: {r.bicarbonate} {r.potassium ? `| K⁺: ${r.potassium}` : ""}
                          </td>
                          <td className="py-3 px-3 text-brand-cyan font-bold">{r.anionGap} mEq/L</td>
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
                No electrolyte gap entries saved. Return to Anion Gap Calculator and click "Log Electrolyte Gap".
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
              <h4 className="font-bold text-white text-lg">Acid-Base Balance and unmeasured Anions</h4>
              <p>
                The body regulates the concentration of hydrogen ions (pH) using multiple buffering systems, the most important of which is bicarbonate. An elevated anion gap often indicates the presence of unmeasured organic acids (e.g. lactic acid, ketoacids) which deplete bicarbonate reserves.
              </p>
              
              <div className="space-y-2 bg-slate-900/40 border border-brand-border/50 rounded-xl p-5 text-sm">
                <p className="font-bold text-white uppercase tracking-wider text-[10px] text-gray-500">Formulas and Reference Values:</p>
                <div className="flex justify-between border-b border-brand-border/20 py-2">
                  <span>Standard Formula:</span>
                  <span className="font-bold text-brand-cyan">Na - (Cl + HCO3) [8 - 16 mEq/L]</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>With Potassium Formula:</span>
                  <span className="font-bold text-brand-cyan">(Na + K) - (Cl + HCO3) [12 - 20 mEq/L]</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-white text-lg">Range Classifications</h4>
              <div className="space-y-3">
                {[
                  { title: "Low Range (<8 mEq/L without K)", desc: "Relatively uncommon. May indicate hypoalbuminemia (low albumin protein levels), severe hemodilution, or elevated levels of positively charged proteins (e.g. multiple myeloma)." },
                  { title: "Typical Range (8 - 16 mEq/L)", desc: "Represents standard physiological balance. Cations and commonly measured anions are in normal proportion." },
                  { title: "High Range (>16 mEq/L without K)", desc: "Suggests metabolic acidosis. Common causes include lactic acidosis, diabetic ketoacidosis (DKA), kidney failure, or ingestion of toxic substances (salicylates, methanol, ethylene glycol)." }
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
              <strong>Clinical Correction:</strong> Hypoalbuminemia can mask high anion gap metabolic acidosis. For every 1 g/dL decrease in serum albumin below normal (4 g/dL), the expected normal anion gap decreases by approximately 2.5 mEq/L. A corrected anion gap calculation is advised in critically ill patients.
            </p>
          </div>
        </div>
      )}

      {/* Printable Report Layout */}
      <div className="hidden print:block text-black bg-white p-8 space-y-6 font-sans">
        <div className="border-b border-gray-300 pb-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 font-display">Electrolyte and Anion Gap Assessment</h1>
            <p className="text-xs text-gray-500">Med Clinic X Laboratory Services Brief</p>
          </div>
          <Scale className="w-8 h-8 text-cyan-600" />
        </div>

        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <h3 className="font-bold text-gray-700 uppercase text-xs mb-1">Serum Electrolytes</h3>
            <p><strong>Sodium (Na⁺):</strong> {sodium} mEq/L</p>
            <p><strong>Chloride (Cl⁻):</strong> {chloride} mEq/L</p>
            <p><strong>Bicarbonate (HCO₃⁻):</strong> {bicarbonate} mEq/L</p>
            {includeK && <p><strong>Potassium (K⁺):</strong> {potassium} mEq/L</p>}
          </div>
          <div>
            <h3 className="font-bold text-gray-700 uppercase text-xs mb-1">Anion Gap Details</h3>
            <p><strong>Calculated Anion Gap:</strong> {results.anionGap} mEq/L</p>
            <p><strong>Formula Used:</strong> {includeK ? "Including Potassium" : "Standard (Excluding Potassium)"}</p>
            <p><strong>Clinical Classification:</strong> {results.status}</p>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 text-[10px] text-gray-500 text-center space-y-1">
          <p>This report is generated by Med Clinic X clinical calculators. Consult a physician before making major clinical or metabolic adjustments.</p>
          <p>&copy; {new Date().getFullYear()} Med Clinic X Inc. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
