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
  TrendingDown,
  TrendingUp,
  RefreshCw
} from "lucide-react";

interface CkdRecord {
  id: string;
  age: number;
  gender: "male" | "female";
  creatinine: number;
  creatinineUnit: "mg/dL" | "µmol/L";
  formula: "ckd-epi-2021" | "mdrd";
  egfr: number;
  stage: string;
  timestamp: string;
}

export default function CKDCalculatorClient() {
  const [activeTab, setActiveTab] = useState<"calculator" | "logger" | "reference">("calculator");
  
  // Inputs
  const [age, setAge] = useState<string>("45");
  const [gender, setGender] = useState<"male" | "female">("male");
  const [creatinine, setCreatinine] = useState<string>("1.0");
  const [creatinineUnit, setCreatinineUnit] = useState<"mg/dL" | "µmol/L">("mg/dL");
  const [formula, setFormula] = useState<"ckd-epi-2021" | "mdrd">("ckd-epi-2021");

  // History logs
  const [records, setRecords] = useState<CkdRecord[]>([]);

  // Load records from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("medclinicx_ckd_logs");
    if (saved) {
      try {
        setRecords(JSON.parse(saved));
      } catch (e) {
        console.error("Error reading CKD logs", e);
      }
    } else {
      // Default placeholder record
      setRecords([
        {
          id: "1",
          age: 45,
          gender: "male",
          creatinine: 1.0,
          creatinineUnit: "mg/dL",
          formula: "ckd-epi-2021",
          egfr: 99,
          stage: "Stage 1",
          timestamp: "Initial Baseline"
        }
      ]);
    }
  }, []);

  // Save records to localStorage
  const saveRecords = (newRecords: CkdRecord[]) => {
    setRecords(newRecords);
    localStorage.setItem("medclinicx_ckd_logs", JSON.stringify(newRecords));
  };

  // Convert Creatinine to mg/dL for clinical formulas if in micromoles
  const getScrInMgdl = (value: number, unit: "mg/dL" | "µmol/L") => {
    if (unit === "µmol/L") {
      return value / 88.42; // standard clinical conversion factor
    }
    return value;
  };

  // Calculation logic
  const calculateEgfr = () => {
    const parsedAge = parseFloat(age) || 45;
    const parsedScr = parseFloat(creatinine) || 1.0;
    const scrMg = getScrInMgdl(parsedScr, creatinineUnit);
    
    let egfr = 0;
    
    if (formula === "ckd-epi-2021") {
      // CKD-EPI 2021 Creatinine Equation (Race-free standard)
      const kappa = gender === "female" ? 0.7 : 0.9;
      const alpha = gender === "female" ? -0.241 : -0.302;
      const genderCoef = gender === "female" ? 1.012 : 1.0;
      
      const term1 = scrMg / kappa;
      const minTerm = Math.min(term1, 1);
      const maxTerm = Math.max(term1, 1);
      
      egfr = 142 * Math.pow(minTerm, alpha) * Math.pow(maxTerm, -1.200) * Math.pow(0.9938, parsedAge) * genderCoef;
    } else {
      // MDRD Study Equation (4-Variable IDMS-Traceable)
      const genderCoef = gender === "female" ? 0.742 : 1.0;
      egfr = 175 * Math.pow(scrMg, -1.154) * Math.pow(parsedAge, -0.203) * genderCoef;
    }
    
    const finalEgfr = Math.max(0, Math.round(egfr));
    
    // Classify kidney stage based on eGFR
    let stage = "Stage 1";
    let desc = "Normal or high kidney function if no other kidney abnormalities are present";
    let colorClass = "text-brand-emerald bg-brand-emerald/10 border-brand-emerald/20";
    let progressColor = "bg-gradient-to-r from-brand-cyan to-brand-emerald";
    let severity = "Mild / Normal";
    
    if (finalEgfr >= 90) {
      stage = "Stage 1";
      desc = "Generally considered normal or high kidney function if no other kidney abnormalities are present";
      colorClass = "text-brand-emerald bg-brand-emerald/10 border-brand-emerald/30";
      progressColor = "bg-brand-emerald";
      severity = "Normal / Minimal Risk";
    } else if (finalEgfr >= 60) {
      stage = "Stage 2";
      desc = "Mild reduction in kidney function. May indicate mildly reduced kidney function depending on other factors";
      colorClass = "text-brand-cyan bg-brand-cyan/10 border-brand-cyan/30";
      progressColor = "bg-brand-cyan";
      severity = "Mild Reduction";
    } else if (finalEgfr >= 45) {
      stage = "Stage 3a";
      desc = "Mild to moderate reduction in kidney function. Monitor changes and consult healthcare provider";
      colorClass = "text-amber-400 bg-amber-500/10 border-amber-500/30";
      progressColor = "bg-amber-500/80";
      severity = "Mild-to-Moderate Reduction";
    } else if (finalEgfr >= 30) {
      stage = "Stage 3b";
      desc = "Moderate to severe reduction in kidney function. Requires close medical management";
      colorClass = "text-orange-400 bg-orange-500/10 border-orange-500/30";
      progressColor = "bg-orange-500";
      severity = "Moderate-to-Severe Reduction";
    } else if (finalEgfr >= 15) {
      stage = "Stage 4";
      desc = "Severe reduction in kidney function. Advanced chronic kidney disease, require preparation for therapy";
      colorClass = "text-rose-400 bg-rose-500/10 border-rose-500/30";
      progressColor = "bg-rose-500";
      severity = "Severe Reduction";
    } else {
      stage = "Stage 5";
      desc = "Kidney failure range requiring immediate medical evaluation and specialist review";
      colorClass = "text-red-500 bg-red-500/10 border-red-500/30";
      progressColor = "bg-red-600";
      severity = "Kidney Failure Range";
    }
    
    return {
      egfr: finalEgfr,
      stage,
      desc,
      colorClass,
      progressColor,
      severity
    };
  };

  const result = calculateEgfr();

  const handleAddRecord = () => {
    const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const date = new Date().toLocaleDateString([], { month: "short", day: "numeric" });
    
    const newRecord: CkdRecord = {
      id: Date.now().toString(),
      age: parseFloat(age) || 45,
      gender,
      creatinine: parseFloat(creatinine) || 1.0,
      creatinineUnit,
      formula,
      egfr: result.egfr,
      stage: result.stage,
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
          { id: "calculator", label: "eGFR Calculator", icon: <Calculator className="w-4 h-4" /> },
          { id: "logger", label: "Assessment Logs", icon: <History className="w-4 h-4" /> },
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fade-in">
          {/* Inputs Card */}
          <div className="lg:col-span-5 glass-panel border border-brand-border rounded-2xl p-6 space-y-6">
            <h3 className="text-white font-semibold font-display text-sm tracking-wide uppercase flex items-center gap-2 border-b border-brand-border/50 pb-3">
              <Calculator className="w-4 h-4 text-brand-cyan" />
              <span>Patient Metrics</span>
            </h3>

            {/* Gender Toggle */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block">Gender</label>
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

            {/* Age input */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block">Age (Years)</label>
              <input
                type="number"
                min="1"
                max="120"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-brand-cyan"
              />
            </div>

            {/* Creatinine inputs */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Serum Creatinine</label>
                <div className="flex bg-brand-bg/50 p-0.5 rounded-lg border border-brand-border text-[9px] font-bold">
                  <button
                    onClick={() => {
                      setCreatinineUnit("mg/dL");
                      const val = parseFloat(creatinine);
                      if (!isNaN(val)) setCreatinine((val / 88.42).toFixed(2));
                    }}
                    className={`px-2 py-1 rounded transition-all cursor-pointer ${creatinineUnit === "mg/dL" ? "bg-brand-cyan text-brand-bg font-extrabold" : "text-gray-400 hover:text-white"}`}
                  >
                    mg/dL
                  </button>
                  <button
                    onClick={() => {
                      setCreatinineUnit("µmol/L");
                      const val = parseFloat(creatinine);
                      if (!isNaN(val)) setCreatinine((val * 88.42).toFixed(0));
                    }}
                    className={`px-2 py-1 rounded transition-all cursor-pointer ${creatinineUnit === "µmol/L" ? "bg-brand-cyan text-brand-bg font-extrabold" : "text-gray-400 hover:text-white"}`}
                  >
                    µmol/L
                  </button>
                </div>
              </div>
              <div className="relative">
                <input
                  type="number"
                  step={creatinineUnit === "mg/dL" ? "0.01" : "1"}
                  min="0.1"
                  max={creatinineUnit === "mg/dL" ? "20" : "1800"}
                  value={creatinine}
                  onChange={(e) => setCreatinine(e.target.value)}
                  className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-3 text-lg font-bold text-white focus:outline-none focus:border-brand-cyan"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-xs text-gray-500">{creatinineUnit}</span>
              </div>
            </div>

            {/* Formula Selector */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block">Clinical Equation</label>
              <select
                value={formula}
                onChange={(e) => setFormula(e.target.value as "ckd-epi-2021" | "mdrd")}
                className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-brand-cyan"
              >
                <option value="ckd-epi-2021">CKD-EPI 2021 (Race-Free - Recommended)</option>
                <option value="mdrd">MDRD Study Equation (IDMS-traceable)</option>
              </select>
              <p className="text-[10px] text-gray-400 mt-1 leading-normal">
                CKD-EPI 2021 is the current standard recommended by NKF and ASN to improve diagnostic equity.
              </p>
            </div>

            <button
              onClick={handleAddRecord}
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-cyan to-brand-indigo hover:opacity-95 text-white font-bold text-xs py-3 rounded-xl transition-all shadow-md cursor-pointer"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Log Assessment Entry</span>
            </button>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel border border-brand-border rounded-2xl p-8 relative overflow-hidden bg-gradient-to-br from-brand-cyan/5 via-transparent to-transparent">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brand-cyan/10 to-transparent pointer-events-none" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
                {/* eGFR Result */}
                <div className="text-center sm:text-left space-y-2">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1.5 justify-center sm:justify-start">
                    <Activity className="w-3.5 h-3.5 text-brand-cyan animate-pulse" />
                    <span>Estimated GFR (eGFR)</span>
                  </p>
                  <div className="space-y-1">
                    <h2 className="text-6xl font-display font-extrabold text-white">
                      {result.egfr}
                      <span className="text-sm font-bold text-gray-500 ml-2 block sm:inline">mL/min/1.73m²</span>
                    </h2>
                  </div>
                </div>

                {/* Staging Badge */}
                <div className="text-center sm:text-right border-t sm:border-t-0 sm:border-l border-brand-border/60 pt-6 sm:pt-0 sm:pl-8 space-y-3">
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">CKD Kidney Stage</p>
                    <span className={`inline-block px-4 py-1.5 text-xs font-bold rounded-full uppercase tracking-wider border ${result.colorClass}`}>
                      {result.stage}
                    </span>
                  </div>
                  
                  <div className="pt-1">
                    <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Renal Status</p>
                    <p className="text-sm font-bold text-white mt-0.5">{result.severity}</p>
                  </div>
                </div>
              </div>

              {/* Description box */}
              <div className="bg-slate-900/40 border border-brand-border/60 rounded-xl p-4 mt-6 text-sm text-gray-300">
                <p className="leading-relaxed">
                  <strong>Clinical Category Notes:</strong> {result.desc}
                </p>
              </div>

              {/* Dynamic Progress Bar */}
              <div className="mt-8 space-y-3">
                <div className="flex justify-between items-center text-xs text-gray-400">
                  <span className="font-semibold">Calculated eGFR: {result.egfr}</span>
                  <span className="font-semibold text-brand-cyan">Stage classification</span>
                </div>
                <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden relative border border-brand-border/40 p-0.5">
                  {/* Fill progress representing eGFR location (eGFR runs from 0 to 120+) */}
                  {(() => {
                    const mappedPercent = Math.max(0, Math.min(100, (result.egfr / 120) * 100));
                    return (
                      <div 
                        style={{ width: `${mappedPercent}%` }}
                        className={`h-full rounded-full transition-all duration-700 ease-out ${result.progressColor}`}
                      />
                    );
                  })()}
                </div>
                <div className="flex justify-between text-[9px] text-gray-500">
                  <span>Failure (&lt;15)</span>
                  <span>Severe (15-29)</span>
                  <span>Moderate (30-59)</span>
                  <span>Mild (60-89)</span>
                  <span>Normal (90+)</span>
                </div>
              </div>
            </div>

            {/* Reference info & print */}
            <div className="glass-panel border border-brand-border rounded-2xl p-6 bg-white/[0.01] space-y-4">
              <div className="flex items-center justify-between text-[10px] text-gray-500 border-b border-brand-border/40 pb-3">
                <span className="font-bold uppercase tracking-wider flex items-center gap-1.5 text-brand-cyan">
                  <Activity className="w-3.5 h-3.5" /> Renal Clearance Mechanics
                </span>
                <span>IDMS Traceable Reference</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[11px] text-gray-500 uppercase font-bold tracking-wider">Creatinine Baseline</p>
                  <p className="text-lg font-extrabold text-white mt-1">
                    {parseFloat(creatinine).toFixed(2)} {creatinineUnit}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] text-gray-500 uppercase font-bold tracking-wider">Formula Used</p>
                  <p className="text-lg font-extrabold text-white mt-1 uppercase">
                    {formula === "ckd-epi-2021" ? "CKD-EPI 2021" : "MDRD Equation"}
                  </p>
                </div>
              </div>
              <div className="pt-2 flex justify-between items-center text-xs text-brand-cyan font-bold border-t border-brand-border/20 mt-2">
                <span className="text-[10px] text-gray-500 leading-normal flex items-start gap-1 font-medium max-w-[70%]">
                  <Info className="w-3 h-3 text-brand-cyan shrink-0 mt-0.5" />
                  <span>Always record repeated creatinine measurements to confirm kidney trend.</span>
                </span>
                <button 
                  onClick={handlePrint}
                  className="flex items-center gap-1 hover:underline cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5 text-brand-cyan" />
                  <span>Print Report</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: MEASUREMENT LOGS */}
      {activeTab === "logger" && (
        <div className="glass-panel border border-brand-border rounded-2xl p-6 space-y-6 animate-fade-in">
          <div className="flex justify-between items-center border-b border-brand-border/50 pb-3">
            <h3 className="text-white font-semibold font-display text-sm tracking-wide uppercase flex items-center gap-2">
              <History className="w-4 h-4 text-brand-cyan" />
              <span>CKD Assessment History Logs</span>
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
                      <th className="py-3 px-3">Age & Gender</th>
                      <th className="py-3 px-3">Serum Creatinine</th>
                      <th className="py-3 px-3">Equation</th>
                      <th className="py-3 px-3">eGFR Score</th>
                      <th className="py-3 px-3">Staging</th>
                      <th className="py-3 px-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brand-border/30 text-gray-300">
                    {records.map((r) => {
                      const isNormal = r.egfr >= 60;
                      return (
                        <tr key={r.id} className="hover:bg-white/[0.02] transition-all">
                          <td className="py-3.5 px-3 text-white font-medium">{r.timestamp}</td>
                          <td className="py-3.5 px-3 capitalize">{r.age} yrs • {r.gender}</td>
                          <td className="py-3.5 px-3">{r.creatinine} {r.creatinineUnit}</td>
                          <td className="py-3.5 px-3 uppercase text-[10px]">{r.formula}</td>
                          <td className="py-3.5 px-3 font-extrabold text-base text-white">{r.egfr} <span className="text-[9px] text-gray-500">mL/min</span></td>
                          <td className="py-3.5 px-3">
                            <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold ${
                              r.egfr >= 90 ? "bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/20" :
                              r.egfr >= 60 ? "bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20" :
                              r.egfr >= 30 ? "bg-amber-500/10 text-amber-400 border border-amber-500/20" :
                              "bg-rose-500/10 text-rose-400 border border-rose-500/20"
                            }`}>
                              {r.stage}
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
                No CKD logs saved. Go back to calculator tab and click &quot;Log Assessment Entry&quot;.
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
              <span>eGFR & CKD Staging Guidelines Reference</span>
            </h3>
            <p className="text-xs text-gray-400 mt-1">
              Clinical reference based on Kidney Disease: Improving Global Outcomes (KDIGO) classifications.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="font-extrabold text-white text-base">Chronic Kidney Disease (CKD) Stages explained</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { stage: "Stage 1 (eGFR ≥ 90)", desc: "Kidney damage with normal or increased kidney function. Focus is on diagnosis and treatment of underlying causes, slowing progression, and reducing cardiovascular risk." },
                { stage: "Stage 2 (eGFR 60-89)", desc: "Kidney damage with mild reduction in kidney function. Clinicians monitor progress, manage blood pressure, and review medication impacts." },
                { stage: "Stage 3a & 3b (eGFR 30-59)", desc: "Moderate reduction in kidney function. Divided into 3a (45-59) and 3b (30-44). Focuses on treating complications (anemia, bone disease) and planning therapy options." },
                { stage: "Stage 4 (eGFR 15-29)", desc: "Severe reduction in kidney function. Intensive treatment and preparation for kidney replacement therapy (dialysis or kidney transplantation)." },
                { stage: "Stage 5 (eGFR < 15)", desc: "Kidney failure range requiring dialysis or transplant. Prompt specialist nephrology care is required." }
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-900/40 border border-brand-border/30 p-4 rounded-xl space-y-1">
                  <p className="font-bold text-brand-cyan text-xs uppercase tracking-wide">{item.stage}</p>
                  <p className="text-xs text-gray-400 leading-normal">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-brand-border/30 pt-6 space-y-4">
            <h4 className="font-bold text-white text-base">Key Formula Details</h4>
            <div className="space-y-3 text-xs leading-relaxed">
              <div className="bg-slate-900/35 border border-brand-border/45 rounded-xl p-5 space-y-2">
                <p className="font-bold text-brand-cyan uppercase tracking-wider text-[10px]">1. CKD-EPI (2021) Equation</p>
                <p className="text-gray-400">
                  Developed by the Chronic Kidney Disease Epidemiology Collaboration, the race-free 2021 creatinine equation is recommended globally to assess kidney health without the biological inaccuracy of a race modifier.
                </p>
              </div>
              <div className="bg-slate-900/35 border border-brand-border/45 rounded-xl p-5 space-y-2">
                <p className="font-bold text-brand-cyan uppercase tracking-wider text-[10px]">2. MDRD Equation</p>
                <p className="text-gray-400">
                  The Modification of Diet in Renal Disease Study equation was historically standard. It relies heavily on serum creatinine, age, and gender, but has been shown to underestimate kidney function at higher eGFR ranges compared to CKD-EPI.
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
            <h1 className="text-2xl font-bold text-gray-800">Kidney Function Assessment Report</h1>
            <p className="text-xs text-gray-500">Med Clinic X Renal Health Analysis</p>
          </div>
          <Activity className="w-8 h-8 text-cyan-600" />
        </div>

        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <h3 className="font-bold text-gray-700 uppercase text-xs mb-1">Patient Details</h3>
            <p><strong>Age:</strong> {age} years</p>
            <p><strong>Gender:</strong> {gender === "male" ? "Male" : "Female"}</p>
            <p><strong>Serum Creatinine:</strong> {creatinine} {creatinineUnit}</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-700 uppercase text-xs mb-1">Calculated Findings</h3>
            <p className="text-lg font-bold"><strong>eGFR:</strong> {result.egfr} mL/min/1.73m²</p>
            <p><strong>Staging:</strong> {result.stage}</p>
            <p><strong>Classification:</strong> {result.severity}</p>
            <p><strong>Formula Used:</strong> {formula === "ckd-epi-2021" ? "CKD-EPI 2021" : "MDRD"}</p>
          </div>
        </div>

        <div className="border border-gray-200 rounded p-4 text-xs mt-6">
          <p className="font-bold">Important Notice:</p>
          <p className="text-gray-600 mt-1">
            This calculator provides clinical estimations of kidney function based on laboratory inputs. It does not replace formal nephrology diagnostic protocols, serial testing, clinical exam evaluations, or medical treatment plans from a certified provider.
          </p>
        </div>

        <div className="pt-8 border-t border-gray-200 text-[10px] text-gray-400 text-center">
          <p>&copy; {new Date().getFullYear()} Med Clinic X Inc. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
