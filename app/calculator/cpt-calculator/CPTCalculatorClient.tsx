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
  DollarSign,
  Briefcase,
  Sliders
} from "lucide-react";

interface CptCodeDefinition {
  code: string;
  name: string;
  category: string;
  wRvu: number;
  peRvuNonFac: number;
  peRvuFac: number;
  mpRvu: number;
}

interface GpciDefinition {
  name: string;
  workGpci: number;
  peGpci: number;
  mpGpci: number;
}

interface CptRecord {
  id: string;
  cptCode: string;
  cptName: string;
  category: string;
  location: "non-facility" | "facility";
  region: string;
  totalRvu: number;
  totalFee: number;
  patientShare: number;
  insurerShare: number;
  timestamp: string;
}

const cptCodesDb: CptCodeDefinition[] = [
  { code: "99213", name: "Outpatient visit, established, level 3 (15 min)", category: "Evaluation & Management (E/M)", wRvu: 0.97, peRvuNonFac: 1.02, peRvuFac: 0.45, mpRvu: 0.07 },
  { code: "99214", name: "Outpatient visit, established, level 4 (25 min)", category: "Evaluation & Management (E/M)", wRvu: 1.50, peRvuNonFac: 1.44, peRvuFac: 0.65, mpRvu: 0.10 },
  { code: "99215", name: "Outpatient visit, established, level 5 (40 min)", category: "Evaluation & Management (E/M)", wRvu: 2.24, peRvuNonFac: 2.06, peRvuFac: 0.95, mpRvu: 0.15 },
  { code: "99203", name: "Outpatient visit, new patient, level 3 (30 min)", category: "Evaluation & Management (E/M)", wRvu: 1.60, peRvuNonFac: 1.51, peRvuFac: 0.70, mpRvu: 0.11 },
  { code: "99204", name: "Outpatient visit, new patient, level 4 (45 min)", category: "Evaluation & Management (E/M)", wRvu: 2.60, peRvuNonFac: 2.30, peRvuFac: 1.05, mpRvu: 0.17 },
  { code: "99205", name: "Outpatient visit, new patient, level 5 (60 min)", category: "Evaluation & Management (E/M)", wRvu: 3.50, peRvuNonFac: 3.01, peRvuFac: 1.35, mpRvu: 0.23 },
  { code: "99284", name: "Emergency department visit, high severity", category: "Evaluation & Management (E/M)", wRvu: 2.60, peRvuNonFac: 1.01, peRvuFac: 1.01, mpRvu: 0.18 },
  { code: "93000", name: "Routine Electrocardiogram (ECG)", category: "Diagnostic Procedures", wRvu: 0.17, peRvuNonFac: 0.39, peRvuFac: 0.05, mpRvu: 0.01 },
  { code: "36415", name: "Routine Venipuncture (blood draw)", category: "Lab / Pathology", wRvu: 0.00, peRvuNonFac: 0.08, peRvuFac: 0.08, mpRvu: 0.00 },
  { code: "custom", name: "Custom CPT Code Setup", category: "Custom Configuration", wRvu: 1.00, peRvuNonFac: 1.00, peRvuFac: 0.50, mpRvu: 0.10 }
];

const gpciRegions: Record<string, GpciDefinition> = {
  national: { name: "National Average", workGpci: 1.00, peGpci: 1.00, mpGpci: 1.00 },
  ny: { name: "NY Metro Area", workGpci: 1.05, peGpci: 1.15, mpGpci: 1.45 },
  la: { name: "LA Metro Area", workGpci: 1.03, peGpci: 1.18, mpGpci: 1.25 },
  chicago: { name: "Chicago Metro", workGpci: 1.01, peGpci: 1.05, mpGpci: 1.35 },
  texas: { name: "Texas Rural", workGpci: 0.98, peGpci: 0.90, mpGpci: 0.85 }
};

export default function CPTCalculatorClient() {
  const [activeTab, setActiveTab] = useState<"calculator" | "logger" | "reference">("calculator");
  
  // Inputs
  const [selectedCptId, setSelectedCptId] = useState<string>("99214");
  const [location, setLocation] = useState<"non-facility" | "facility">("non-facility");
  const [regionKey, setRegionKey] = useState<string>("national");
  const [conversionFactor, setConversionFactor] = useState<string>("32.74");
  const [coInsurance, setCoInsurance] = useState<string>("20");
  
  // Custom RVU fields (active when custom is selected)
  const [customCodeNumber, setCustomCodeNumber] = useState<string>("99999");
  const [customWRvu, setCustomWRvu] = useState<string>("1.50");
  const [customPeRvu, setCustomPeRvu] = useState<string>("1.44");
  const [customMpRvu, setCustomMpRvu] = useState<string>("0.10");

  // Modifiers
  const [mod50, setMod50] = useState<boolean>(false);
  const [mod25, setMod25] = useState<boolean>(false);

  // History logs
  const [records, setRecords] = useState<CptRecord[]>([]);

  // Load logs
  useEffect(() => {
    const saved = localStorage.getItem("medclinicx_cpt_logs");
    if (saved) {
      try {
        setRecords(JSON.parse(saved));
      } catch (e) {
        console.error("Error reading CPT logs", e);
      }
    } else {
      setRecords([
        {
          id: "1",
          cptCode: "99214",
          cptName: "Outpatient visit, established, level 4 (25 min)",
          category: "Evaluation & Management (E/M)",
          location: "non-facility",
          region: "National Average",
          totalRvu: 3.04,
          totalFee: 99.53,
          patientShare: 19.91,
          insurerShare: 79.62,
          timestamp: "Initial Standard E/M Setup"
        }
      ]);
    }
  }, []);

  const saveRecords = (newRecords: CptRecord[]) => {
    setRecords(newRecords);
    localStorage.setItem("medclinicx_cpt_logs", JSON.stringify(newRecords));
  };

  const calculateCPTData = () => {
    const selectedCpt = cptCodesDb.find(c => c.code === selectedCptId) || cptCodesDb[0];
    const isCustom = selectedCptId === "custom";
    
    // Extract base RVUs
    const wRvu = isCustom ? (parseFloat(customWRvu) || 0) : selectedCpt.wRvu;
    const peRvu = isCustom 
      ? (parseFloat(customPeRvu) || 0) 
      : (location === "non-facility" ? selectedCpt.peRvuNonFac : selectedCpt.peRvuFac);
    const mpRvu = isCustom ? (parseFloat(customMpRvu) || 0) : selectedCpt.mpRvu;
    
    // Extract GPCIs
    const gpci = gpciRegions[regionKey] || gpciRegions.national;
    const cf = parseFloat(conversionFactor) || 32.74;
    const coinPct = parseFloat(coInsurance) || 20;

    // Apply adjustments
    const adjWRvu = wRvu * gpci.workGpci;
    const adjPeRvu = peRvu * gpci.peGpci;
    const adjMpRvu = mpRvu * gpci.mpGpci;
    const totalRvu = adjWRvu + adjPeRvu + adjMpRvu;

    let totalFee = totalRvu * cf;
    
    // Apply Modifier 50 (Bilateral procedure gets 150%)
    if (mod50) {
      totalFee *= 1.5;
    }

    const finalFee = Math.max(0, Math.round(totalFee * 100) / 100);
    const patientShare = Math.round(finalFee * (coinPct / 100) * 100) / 100;
    const insurerShare = Math.max(0, Math.round((finalFee - patientShare) * 100) / 100);

    return {
      cptCode: isCustom ? customCodeNumber : selectedCpt.code,
      cptName: isCustom ? "Custom Procedure Details" : selectedCpt.name,
      category: isCustom ? "Custom Service" : selectedCpt.category,
      wRvu: wRvu.toFixed(2),
      peRvu: peRvu.toFixed(2),
      mpRvu: mpRvu.toFixed(2),
      adjWRvu: adjWRvu.toFixed(2),
      adjPeRvu: adjPeRvu.toFixed(2),
      adjMpRvu: adjMpRvu.toFixed(2),
      totalRvu: totalRvu.toFixed(2),
      totalFee: finalFee,
      patientShare,
      insurerShare,
      regionName: gpci.name
    };
  };

  const results = calculateCPTData();

  const handleAddRecord = () => {
    const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const date = new Date().toLocaleDateString([], { month: "short", day: "numeric" });
    
    const newRecord: CptRecord = {
      id: Date.now().toString(),
      cptCode: results.cptCode,
      cptName: results.cptName,
      category: results.category,
      location,
      region: results.regionName,
      totalRvu: parseFloat(results.totalRvu),
      totalFee: results.totalFee,
      patientShare: results.patientShare,
      insurerShare: results.insurerShare,
      timestamp: `${date} - ${time}`
    };
    
    saveRecords([newRecord, ...records]);
  };

  const handleDeleteRecord = (id: string) => {
    const updated = records.filter(r => r.id !== id);
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
          { id: "calculator", label: "Billing Calculator", icon: <Calculator className="w-4 h-4" /> },
          { id: "logger", label: "Billing Logs", icon: <History className="w-4 h-4" /> },
          { id: "reference", label: "Coding Reference", icon: <BookOpen className="w-4 h-4" /> }
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
          <div className="lg:col-span-6 glass-panel border border-brand-border rounded-2xl p-6 space-y-6">
            <h3 className="text-white font-semibold font-display text-sm tracking-wide uppercase flex items-center gap-2 border-b border-brand-border/50 pb-3">
              <Sliders className="w-4 h-4 text-brand-cyan" />
              <span>Procedure Configuration</span>
            </h3>

            {/* CPT Code dropdown */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block">Procedure CPT Code Preset</label>
              <select
                value={selectedCptId}
                onChange={(e) => setSelectedCptId(e.target.value)}
                className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-brand-cyan"
              >
                {cptCodesDb.map(c => (
                  <option key={c.code} value={c.code}>
                    {c.code === "custom" ? "Custom (Manually enter RVUs)" : `${c.code} - ${c.name.substring(0, 42)}...`}
                  </option>
                ))}
              </select>
            </div>

            {/* Custom Inputs Panel (if custom CPT is selected) */}
            {selectedCptId === "custom" && (
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 bg-brand-bg/40 border border-brand-border/60 p-4 rounded-xl animate-fade-in text-xs">
                <div className="space-y-1">
                  <label className="text-[9px] font-bold text-gray-500 uppercase block">Code #</label>
                  <input
                    type="text"
                    value={customCodeNumber}
                    onChange={(e) => setCustomCodeNumber(e.target.value)}
                    className="w-full bg-brand-bg/60 border border-brand-border rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-brand-cyan font-bold"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] font-bold text-gray-500 uppercase block">Work RVU</label>
                  <input
                    type="number"
                    step="0.01"
                    value={customWRvu}
                    onChange={(e) => setCustomWRvu(e.target.value)}
                    className="w-full bg-brand-bg/60 border border-brand-border rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-brand-cyan font-bold"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] font-bold text-gray-500 uppercase block">PE RVU</label>
                  <input
                    type="number"
                    step="0.01"
                    value={customPeRvu}
                    onChange={(e) => setCustomPeRvu(e.target.value)}
                    className="w-full bg-brand-bg/60 border border-brand-border rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-brand-cyan font-bold"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] font-bold text-gray-500 uppercase block">MP RVU</label>
                  <input
                    type="number"
                    step="0.01"
                    value={customMpRvu}
                    onChange={(e) => setCustomMpRvu(e.target.value)}
                    className="w-full bg-brand-bg/60 border border-brand-border rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-brand-cyan font-bold"
                  />
                </div>
              </div>
            )}

            {/* Service Location Selector */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block font-sans">Location of Service</label>
              <div className="grid grid-cols-2 gap-2 bg-brand-bg/50 p-1 rounded-xl border border-brand-border">
                <button
                  type="button"
                  onClick={() => setLocation("non-facility")}
                  className={`py-2 text-[10px] font-bold rounded-lg transition-all cursor-pointer ${
                    location === "non-facility"
                      ? "bg-brand-cyan text-brand-bg shadow-sm"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Non-Facility (Office/Clinic)
                </button>
                <button
                  type="button"
                  onClick={() => setLocation("facility")}
                  className={`py-2 text-[10px] font-bold rounded-lg transition-all cursor-pointer ${
                    location === "facility"
                      ? "bg-brand-cyan text-brand-bg shadow-sm"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Facility (Hospital/ASC)
                </button>
              </div>
            </div>

            {/* Region / Geographic index */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block">Geographic Cost Location</label>
              <select
                value={regionKey}
                onChange={(e) => setRegionKey(e.target.value)}
                className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-brand-cyan"
              >
                {Object.entries(gpciRegions).map(([key, val]) => (
                  <option key={key} value={key}>
                    {val.name} (GPCI Coefs: {val.workGpci} W, {val.peGpci} PE)
                  </option>
                ))}
              </select>
            </div>

            {/* Conversion Factor & Coinsurance splits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block">Conversion Factor ($)</label>
                <div className="relative">
                  <input
                    type="number"
                    step="0.01"
                    value={conversionFactor}
                    onChange={(e) => setConversionFactor(e.target.value)}
                    className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-brand-cyan font-bold"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-xs font-bold">$</span>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block">Co-Insurance Split (%)</label>
                <div className="relative">
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={coInsurance}
                    onChange={(e) => setCoInsurance(e.target.value)}
                    className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-brand-cyan font-bold"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-xs font-bold">% Patient</span>
                </div>
              </div>
            </div>

            {/* Modifiers Checkboxes */}
            <div className="space-y-3 pt-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block">Standard Modifier Adjustments</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <label className="flex items-center gap-3 p-3 bg-brand-bg/30 border border-brand-border/60 rounded-xl cursor-pointer hover:border-brand-cyan/20 transition-all select-none">
                  <input
                    type="checkbox"
                    checked={mod50}
                    onChange={(e) => setMod50(e.target.checked)}
                    className="w-4 h-4 rounded text-brand-cyan focus:ring-0 cursor-pointer"
                  />
                  <div>
                    <p className="font-bold text-white leading-none">Modifier 50</p>
                    <p className="text-[9px] text-gray-500 mt-1">Bilateral service (150% Payment)</p>
                  </div>
                </label>
                <label className="flex items-center gap-3 p-3 bg-brand-bg/30 border border-brand-border/60 rounded-xl cursor-pointer hover:border-brand-cyan/20 transition-all select-none">
                  <input
                    type="checkbox"
                    checked={mod25}
                    onChange={(e) => setMod25(e.target.checked)}
                    className="w-4 h-4 rounded text-brand-cyan focus:ring-0 cursor-pointer"
                  />
                  <div>
                    <p className="font-bold text-white leading-none">Modifier 25</p>
                    <p className="text-[9px] text-gray-500 mt-1">Separately Identifiable E/M service</p>
                  </div>
                </label>
              </div>
            </div>

            <button
              onClick={handleAddRecord}
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-cyan to-brand-indigo hover:opacity-95 text-white font-bold text-xs py-3 rounded-xl transition-all shadow-md cursor-pointer"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Log Billing Estimate</span>
            </button>
          </div>

          {/* Results Sidebar Panel */}
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-panel border border-brand-border rounded-2xl p-8 relative overflow-hidden bg-gradient-to-br from-brand-indigo/5 via-transparent to-transparent">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brand-indigo/10 to-transparent pointer-events-none" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center border-b border-brand-border/40 pb-6">
                {/* Total Billing Estimate */}
                <div className="text-center sm:text-left space-y-2">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1.5 justify-center sm:justify-start">
                    <DollarSign className="w-3.5 h-3.5 text-brand-cyan" />
                    <span>Medicare Total Rate</span>
                  </p>
                  <div className="space-y-1">
                    <h2 className="text-5xl font-display font-extrabold text-white">
                      ${results.totalFee.toFixed(2)}
                    </h2>
                  </div>
                </div>

                {/* total adjusted RVUs */}
                <div className="text-center sm:text-right border-t sm:border-t-0 sm:border-l border-brand-border/60 pt-6 sm:pt-0 sm:pl-8 space-y-3">
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Total Adjusted RVUs</p>
                    <p className="text-3xl font-display font-extrabold text-brand-cyan">
                      {results.totalRvu} <span className="text-xs text-gray-500 font-medium font-sans">units</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Co-insurance splits view */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-slate-900/40 border border-brand-border/50 rounded-xl p-4 text-center">
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Patient Portion ({coInsurance}%)</p>
                  <p className="text-2xl font-extrabold text-brand-cyan mt-1">${results.patientShare.toFixed(2)}</p>
                </div>
                <div className="bg-slate-900/40 border border-brand-border/50 rounded-xl p-4 text-center">
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Insurer Portion ({100 - parseFloat(coInsurance)}%)</p>
                  <p className="text-2xl font-extrabold text-white mt-1">${results.insurerShare.toFixed(2)}</p>
                </div>
              </div>

              {/* Warnings and alerts */}
              {mod25 && (
                <div className="bg-amber-500/10 border border-amber-500/20 text-amber-300 rounded-xl p-4 text-xs mt-6 flex gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    <strong>Modifier 25 alert:</strong> Requires documentation showing a separate, clinically significant diagnostic evaluation was performed on the same day as another procedure.
                  </p>
                </div>
              )}

              {/* Details table */}
              <div className="mt-8 space-y-3 pt-6 border-t border-brand-border/40">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-brand-cyan" />
                  <span>RVU Allocation Details ({location === "facility" ? "Facility Rates" : "Non-Facility Rates"})</span>
                </h4>
                
                <div className="overflow-x-auto text-[11px] font-mono">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-brand-border/60 text-gray-500 uppercase font-bold">
                        <th className="py-2">Component</th>
                        <th className="py-2 text-right">Base RVU</th>
                        <th className="py-2 text-right">Region GPCI</th>
                        <th className="py-2 text-right">Adjusted</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-brand-border/20 text-gray-300">
                      <tr>
                        <td className="py-2 font-sans font-medium text-gray-400">Work (Physician Skill)</td>
                        <td className="py-2 text-right">{results.wRvu}</td>
                        <td className="py-2 text-right">{(gpciRegions[regionKey] || gpciRegions.national).workGpci.toFixed(2)}</td>
                        <td className="py-2 text-right text-brand-cyan">{results.adjWRvu}</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-sans font-medium text-gray-400">Practice Expense (PE)</td>
                        <td className="py-2 text-right">{results.peRvu}</td>
                        <td className="py-2 text-right">{(gpciRegions[regionKey] || gpciRegions.national).peGpci.toFixed(2)}</td>
                        <td className="py-2 text-right text-brand-cyan">{results.adjPeRvu}</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-sans font-medium text-gray-400">Malpractice Risk (MP)</td>
                        <td className="py-2 text-right">{results.mpRvu}</td>
                        <td className="py-2 text-right">{(gpciRegions[regionKey] || gpciRegions.national).mpGpci.toFixed(2)}</td>
                        <td className="py-2 text-right text-brand-cyan">{results.adjMpRvu}</td>
                      </tr>
                      <tr className="font-bold border-t border-brand-border/40 text-white font-sans text-xs">
                        <td className="py-2.5">Total Allocation</td>
                        <td className="py-2.5"></td>
                        <td className="py-2.5"></td>
                        <td className="py-2.5 text-right text-brand-cyan">{results.totalRvu} RVUs</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Action buttons */}
              <div className="mt-8 pt-4 border-t border-brand-border/30 flex justify-between items-center text-xs">
                <span className="text-[10px] text-gray-500 font-medium">Conversion Factor: ${conversionFactor} per RVU</span>
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

      {/* TAB 2: LOGGER */}
      {activeTab === "logger" && (
        <div className="glass-panel border border-brand-border rounded-2xl p-6 space-y-6 animate-fade-in">
          <div className="flex justify-between items-center border-b border-brand-border/50 pb-3">
            <h3 className="text-white font-semibold font-display text-sm tracking-wide uppercase flex items-center gap-2">
              <History className="w-4 h-4 text-brand-cyan" />
              <span>CPT Estimate History Log</span>
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
                      <th className="py-3 px-3">CPT Code</th>
                      <th className="py-3 px-3">Service Location</th>
                      <th className="py-3 px-3">Region</th>
                      <th className="py-3 px-3">Total RVUs</th>
                      <th className="py-3 px-3">Patient Co-pay</th>
                      <th className="py-3 px-3">Insurer Share</th>
                      <th className="py-3 px-3">Total Medicare Rate</th>
                      <th className="py-3 px-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brand-border/30 text-gray-300">
                    {records.map((r) => (
                      <tr key={r.id} className="hover:bg-white/[0.02] transition-all">
                        <td className="py-3.5 px-3 text-white font-medium">{r.timestamp}</td>
                        <td className="py-3.5 px-3">
                          <span className="font-bold text-white block">{r.cptCode}</span>
                          <span className="text-[10px] text-gray-400 block truncate max-w-[150px]">{r.cptName}</span>
                        </td>
                        <td className="py-3.5 px-3 capitalize text-[10px]">{r.location}</td>
                        <td className="py-3.5 px-3">{r.region}</td>
                        <td className="py-3.5 px-3">{r.totalRvu.toFixed(2)}</td>
                        <td className="py-3.5 px-3 font-bold text-brand-cyan">${r.patientShare.toFixed(2)}</td>
                        <td className="py-3.5 px-3">${r.insurerShare.toFixed(2)}</td>
                        <td className="py-3.5 px-3 font-extrabold text-white text-base">${r.totalFee.toFixed(2)}</td>
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
                No billing records logged. Go back to calculator tab and click &quot;Log Billing Estimate&quot;.
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
              <span>Medical Coding & RVU Staging Reference</span>
            </h3>
            <p className="text-xs text-gray-400 mt-1">
              Introduction to Medicare reimbursement structures: CPT, RVU, GPCI and Modifier rules.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="font-extrabold text-white text-base">Key Billing Concepts</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { term: "Relative Value Unit (RVU)", desc: "A standard coefficient assigned by CMS to medical procedures based on work difficulty, practice expenses, and liability risk." },
                { term: "Geographic Practice Cost Index (GPCI)", desc: "Regional multipliers applied to RVUs to account for differences in clinical operating costs across geographic zones." },
                { term: "Conversion Factor (CF)", desc: "The standard dollar coefficient used to multiply total adjusted RVUs to calculate final Medicare reimbursement rates." },
                { term: "Facility vs Non-Facility Settings", desc: "Non-facility refers to private practitioner clinics (where expense RVUs are higher to cover clinic rent/staff). Facility refers to hospital settings where the facility covers rent, resulting in lower PE RVUs for doctors." }
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-900/40 border border-brand-border/30 p-4 rounded-xl space-y-1">
                  <p className="font-bold text-brand-cyan text-xs uppercase tracking-wide">{item.term}</p>
                  <p className="text-xs text-gray-400 leading-normal">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-brand-border/30 pt-6 space-y-4">
            <h4 className="font-bold text-white text-base">Reimbursement Staging Formula</h4>
            <div className="bg-slate-900/35 border border-brand-border/45 rounded-xl p-5 space-y-2 text-xs">
              <p className="font-bold text-brand-cyan uppercase tracking-wider text-[10px]">CMS Payment Calculation Protocol</p>
              <p className="text-gray-400">
                The final physician fee schedule payment is determined as:
              </p>
              <p className="font-mono text-white bg-slate-900 p-3 rounded border border-brand-border my-2 leading-relaxed">
                Payment Rate = [ (Work RVU * Work GPCI) + (PE RVU * PE GPCI) + (MP RVU * MP GPCI) ] * Conversion Factor
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Printable Report Layout */}
      <div className="hidden print:block text-black bg-white p-8 space-y-6 font-sans">
        <div className="border-b border-gray-300 pb-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">CPT Procedure Coding & Billing Report</h1>
            <p className="text-xs text-gray-500">Med Clinic X Practice Operations Brief</p>
          </div>
          <Activity className="w-8 h-8 text-cyan-600" />
        </div>

        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <h3 className="font-bold text-gray-700 uppercase text-xs mb-1">Procedure Details</h3>
            <p><strong>CPT Code:</strong> {results.cptCode}</p>
            <p><strong>Procedure:</strong> {results.cptName}</p>
            <p><strong>Category:</strong> {results.category}</p>
            <p><strong>Service Location:</strong> {location === "non-facility" ? "Office/Clinic" : "Hospital/Facility"}</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-700 uppercase text-xs mb-1">Financial Estimates</h3>
            <p className="text-lg font-bold"><strong>Medicare Fee Rate:</strong> ${results.totalFee.toFixed(2)}</p>
            <p><strong>Adjusted RVU Total:</strong> {results.totalRvu} RVUs</p>
            <p><strong>Patient Responsibility ({coInsurance}%):</strong> ${results.patientShare.toFixed(2)}</p>
            <p><strong>Insurer Responsibility:</strong> ${results.insurerShare.toFixed(2)}</p>
            <p><strong>Region Indexing:</strong> {results.regionName}</p>
          </div>
        </div>

        <div className="border border-gray-200 rounded p-4 text-xs mt-6">
          <p className="font-bold">Important Notice:</p>
          <p className="text-gray-600 mt-1">
            This report represents estimated values based on CMS Relative Value schedules and standard indexes. It does not constitute a guaranteed billing claim or insurance pre-authorization. Actual pricing is subject to contractual agreements, regional variances, and individual payer guidelines.
          </p>
        </div>

        <div className="pt-8 border-t border-gray-200 text-[10px] text-gray-400 text-center">
          <p>&copy; {new Date().getFullYear()} Med Clinic X Inc. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
