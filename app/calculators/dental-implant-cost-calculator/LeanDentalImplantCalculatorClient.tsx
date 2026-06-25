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
  DollarSign
} from "lucide-react";

interface ImplantEstimateRecord {
  id: string;
  numImplants: number;
  restoration: string;
  location: string;
  totalMin: number;
  totalMax: number;
  timestamp: string;
}

export default function LeanDentalImplantCalculatorClient() {
  const [activeTab, setActiveTab] = useState<"calculator" | "logger" | "education">("calculator");
  
  // Input states
  const [numImplants, setNumImplants] = useState<number>(1);
  const [restorationType, setRestorationType] = useState<"crown" | "bridge" | "allon4" | "allon6" | "denture">("crown");
  const [grafting, setGrafting] = useState<"none" | "simple" | "complex">("none");
  const [extractions, setExtractions] = useState<number>(0);
  const [location, setLocation] = useState<"low" | "standard" | "high">("standard");
  const [abutmentCustom, setAbutmentCustom] = useState<boolean>(false);
  const [sinusLift, setSinusLift] = useState<boolean>(false);

  // Compare Estimates logs
  const [records, setRecords] = useState<ImplantEstimateRecord[]>([
    {
      id: "1",
      numImplants: 1,
      restoration: "Single Crown",
      location: "Standard Metro",
      totalMin: 3200,
      totalMax: 4100,
      timestamp: "Initial Estimate - 10:00 AM"
    }
  ]);

  // Compute Cost Details
  const calculateCosts = () => {
    // Multiplier index
    const locationMultipliers = {
      low: 0.6,
      standard: 1.0,
      high: 1.35
    };
    const factor = locationMultipliers[location];

    // Diagnostic & Scanning flat fee
    const diagnosticsBase = 250;

    // Surgical placement: $1,800 per implant
    const surgeryBase = 1800 * numImplants;

    // Custom abutment fee: $450 per implant if active
    const abutmentBase = abutmentCustom ? (450 * numImplants) : 0;

    // Restoration costs based on type selection
    let restorationBase = 0;
    switch (restorationType) {
      case "crown":
        restorationBase = 1600 * numImplants;
        break;
      case "bridge":
        restorationBase = 4000;
        break;
      case "allon4":
        restorationBase = 14000;
        break;
      case "allon6":
        restorationBase = 18000;
        break;
      case "denture":
        restorationBase = 6500;
        break;
    }

    // Bone grafting fees
    let graftingBase = 0;
    if (grafting === "simple") {
      graftingBase = 600 * numImplants; // assuming simple socket graft per implant site
    } else if (grafting === "complex") {
      graftingBase = 2200 * numImplants; // blocks or autogenous bone grafts
    }

    // Extraction fee: $250 per tooth
    const extractionsBase = extractions * 250;

    // Sinus Lift fee: $1,800
    const sinusLiftBase = sinusLift ? 1800 : 0;

    // Sum base costs and apply geographic multipliers
    const rawSurgical = surgeryBase * factor;
    const rawRestoration = (restorationBase + abutmentBase) * factor;
    const rawGraftingAux = (graftingBase + extractionsBase + sinusLiftBase) * factor;
    const rawDiagnostics = diagnosticsBase * factor;

    const totalBase = rawSurgical + rawRestoration + rawGraftingAux + rawDiagnostics;

    // Calculate ranges for margin variations
    const totalMin = Math.round((totalBase * 0.9) / 100) * 100;
    const totalMax = Math.round((totalBase * 1.15) / 100) * 100;

    return {
      surgical: Math.round(rawSurgical),
      restoration: Math.round(rawRestoration),
      graftingAux: Math.round(rawGraftingAux),
      diagnostics: Math.round(rawDiagnostics),
      totalMin,
      totalMax,
      totalBase: Math.round(totalBase)
    };
  };

  const results = calculateCosts();

  const handleAddRecord = () => {
    const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const date = new Date().toLocaleDateString([], { month: "short", day: "numeric" });
    
    // Friendly restoration name
    const restorationNames = {
      crown: `${numImplants} Single Crown${numImplants > 1 ? "s" : ""}`,
      bridge: "Implant Bridge",
      allon4: "Full Arch All-on-4",
      allon6: "Full Arch All-on-6",
      denture: "Implant-Retained Denture"
    };

    const locationNames = {
      low: "Low Cost / Rural",
      standard: "Standard Metro",
      high: "Premium Metro"
    };

    const newRecord: ImplantEstimateRecord = {
      id: Date.now().toString(),
      numImplants,
      restoration: restorationNames[restorationType],
      location: locationNames[location],
      totalMin: results.totalMin,
      totalMax: results.totalMax,
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

  // Percent shares for graphical display
  const surgicalPercent = Math.max(10, Math.round((results.surgical / results.totalBase) * 100)) || 30;
  const restorationPercent = Math.max(10, Math.round((results.restoration / results.totalBase) * 100)) || 40;
  const graftingPercent = Math.round((results.graftingAux / results.totalBase) * 100) || 0;
  const diagnosticsPercent = Math.round((results.diagnostics / results.totalBase) * 100) || 10;

  return (
    <div className="w-full py-4 print:p-0">
      {/* Tabs Selector */}
      <div className="flex border-b border-brand-border/60 mb-8 print:hidden justify-center sm:justify-start">
        {[
          { id: "calculator", label: "Implant Cost Calculator", icon: <Calculator className="w-4 h-4" /> },
          { id: "logger", label: "Saved Estimates", icon: <DollarSign className="w-4 h-4" /> },
          { id: "education", label: "Reference Guidelines", icon: <BookOpen className="w-4 h-4" /> }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as "calculator" | "logger" | "education")}
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
              <span>Treatment Profile</span>
            </h3>

            {/* Location Selector */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block">Dental Clinic Location</label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value as "low" | "standard" | "high")}
                className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-brand-cyan"
              >
                <option value="low">Low Cost Area / Rural Tier (0.6x)</option>
                <option value="standard">Standard Metro Tier (1.0x)</option>
                <option value="high">High Cost Premium Tier (1.35x)</option>
              </select>
            </div>

            {/* Restoration Type Selector */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block">Restoration Solution</label>
              <select
                value={restorationType}
                onChange={(e) => {
                  const type = e.target.value as "crown" | "bridge" | "allon4" | "allon6" | "denture";
                  setRestorationType(type);
                  // Sensible default implant numbers based on type
                  if (type === "allon4") setNumImplants(4);
                  else if (type === "allon6") setNumImplants(6);
                  else if (type === "denture" && numImplants < 2) setNumImplants(2);
                }}
                className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-brand-cyan"
              >
                <option value="crown">Single Abutment & Crown</option>
                <option value="bridge">Implant-Supported Bridge (Multiple teeth)</option>
                <option value="allon4">Full Arch All-on-4 Solution</option>
                <option value="allon6">Full Arch All-on-6 Solution</option>
                <option value="denture">Implant-Retained Overdenture</option>
              </select>
            </div>

            {/* Number of Implants */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                <span>Implants Needed</span>
                <span className="text-white text-xs font-bold font-mono">{numImplants} Implants</span>
              </div>
              <input
                type="range"
                min={restorationType === "allon6" ? 6 : restorationType === "allon4" ? 4 : restorationType === "denture" ? 2 : 1}
                max="16"
                value={numImplants}
                onChange={(e) => setNumImplants(parseInt(e.target.value))}
                className="w-full accent-brand-cyan bg-slate-900 border-brand-border/60 rounded cursor-pointer"
              />
            </div>

            {/* Bone Grafting Selector */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block">Bone Grafting</label>
              <div className="grid grid-cols-3 gap-2 bg-brand-bg/50 p-1 rounded-xl border border-brand-border">
                {["none", "simple", "complex"].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setGrafting(type as "none" | "simple" | "complex")}
                    className={`py-2 text-[9px] font-bold rounded-lg transition-all capitalize cursor-pointer ${
                      grafting === type
                        ? "bg-brand-cyan text-brand-bg shadow-sm"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Extractions Count */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                <span>Tooth Extractions</span>
                <span className="text-white text-xs font-bold font-mono">{extractions} Teeth</span>
              </div>
              <input
                type="range"
                min="0"
                max="16"
                value={extractions}
                onChange={(e) => setExtractions(parseInt(e.target.value))}
                className="w-full accent-brand-cyan bg-slate-900 border-brand-border/60 rounded cursor-pointer"
              />
            </div>

            {/* Checkboxes parameters */}
            <div className="space-y-2 pt-2">
              <div className="flex justify-between items-center bg-brand-bg/35 p-3 rounded-xl border border-brand-border/40">
                <div>
                  <label className="text-[10px] font-bold text-white uppercase tracking-wider block">Custom Abutment</label>
                  <span className="text-[9px] text-gray-500 block leading-normal">Premium custom anatomical restoration</span>
                </div>
                <input
                  type="checkbox"
                  checked={abutmentCustom}
                  onChange={(e) => setAbutmentCustom(e.target.checked)}
                  className="w-4 h-4 text-brand-cyan bg-brand-bg border-brand-border rounded focus:ring-brand-cyan focus:ring-2 cursor-pointer"
                />
              </div>

              <div className="flex justify-between items-center bg-brand-bg/35 p-3 rounded-xl border border-brand-border/40">
                <div>
                  <label className="text-[10px] font-bold text-white uppercase tracking-wider block">Sinus Lift Surgery</label>
                  <span className="text-[9px] text-gray-500 block leading-normal">Required for upper back jaw bone volume</span>
                </div>
                <input
                  type="checkbox"
                  checked={sinusLift}
                  onChange={(e) => setSinusLift(e.target.checked)}
                  className="w-4 h-4 text-brand-cyan bg-brand-bg border-brand-border rounded focus:ring-brand-cyan focus:ring-2 cursor-pointer"
                />
              </div>
            </div>

            <button
              onClick={handleAddRecord}
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-cyan to-brand-indigo hover:opacity-95 text-white font-bold text-xs py-3 rounded-xl transition-all shadow-md cursor-pointer"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Save Estimate Comparison</span>
            </button>
          </div>

          {/* Results Side */}
          <div className="md:col-span-7 space-y-6">
            <div className="glass-panel border border-brand-border rounded-2xl p-8 relative overflow-hidden bg-gradient-to-br from-brand-cyan/5 via-transparent to-transparent">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brand-cyan/10 to-transparent pointer-events-none" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center border-b border-brand-border/40 pb-6">
                {/* Total Cost Range Display */}
                <div className="text-center sm:text-left space-y-2">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1 justify-center sm:justify-start">
                    <DollarSign className="w-3.5 h-3.5 text-brand-cyan animate-pulse" />
                    <span>Estimated Treatment Cost</span>
                  </p>
                  <div className="space-y-1">
                    <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
                      ${results.totalMin.toLocaleString()} – ${results.totalMax.toLocaleString()}
                    </h2>
                    <p className="text-xs text-gray-400">
                      Standard Variance Range Estimate
                    </p>
                  </div>
                </div>

                {/* restoration and count indicators */}
                <div className="text-center sm:text-right border-t sm:border-t-0 sm:border-l border-brand-border/60 pt-6 sm:pt-0 sm:pl-8 space-y-1 text-base text-gray-300">
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Selected Solution</p>
                  <p className="font-bold text-white uppercase tracking-wider text-[11px] text-brand-cyan">{restorationType} Restoration</p>
                  <p className="text-xs">{numImplants} Implant Post{numImplants > 1 ? "s" : ""}</p>
                  {extractions > 0 && <p className="text-xs text-gray-400">{extractions} Extraction{extractions > 1 ? "s" : ""}</p>}
                </div>
              </div>

              {/* Share Breakdown of Cost factors */}
              <div className="pt-6 space-y-4">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Estimated Cost Allocation Breakdown</h4>
                
                {/* Graphical Allocations stacked bar */}
                <div className="w-full h-4 bg-slate-900 rounded-full overflow-hidden flex border border-brand-border/40 p-0.5">
                  <div style={{ width: `${surgicalPercent}%` }} className="h-full bg-brand-cyan rounded-l-full transition-all duration-500" />
                  <div style={{ width: `${restorationPercent}%` }} className="h-full bg-brand-indigo transition-all duration-500" />
                  {graftingPercent > 0 && <div style={{ width: `${graftingPercent}%` }} className="h-full bg-amber-500 transition-all duration-500" />}
                  <div style={{ width: `${diagnosticsPercent}%` }} className="h-full bg-brand-emerald rounded-r-full transition-all duration-500" />
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div className="flex items-center gap-2 text-gray-300">
                    <span className="w-2.5 h-2.5 bg-brand-cyan rounded-full shrink-0" />
                    <span>Surgical Placement: <strong>${results.surgical.toLocaleString()}</strong> ({surgicalPercent}%)</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <span className="w-2.5 h-2.5 bg-brand-indigo rounded-full shrink-0" />
                    <span>Restoration & Abutments: <strong>${results.restoration.toLocaleString()}</strong> ({restorationPercent}%)</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <span className="w-2.5 h-2.5 bg-amber-500 rounded-full shrink-0" />
                    <span>Bone Grafting & Aux: <strong>${results.graftingAux.toLocaleString()}</strong> ({graftingPercent}%)</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <span className="w-2.5 h-2.5 bg-brand-emerald rounded-full shrink-0" />
                    <span>Diagnostic Scans: <strong>${results.diagnostics.toLocaleString()}</strong> ({diagnosticsPercent}%)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Diagnostic reference notes card */}
            <div className="glass-panel border border-brand-border rounded-2xl p-6 bg-white/[0.01] space-y-3">
              <div className="flex items-center justify-between text-[10px] text-gray-500 border-b border-brand-border/40 pb-3">
                <span className="font-bold uppercase tracking-wider flex items-center gap-1.5 text-brand-cyan">
                  <Activity className="w-3.5 h-3.5" /> Clinical Implant Parameters
                </span>
                <span>Budget Brief Reference</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Pricing represents average US clinical dental implant service cost rates. Standard estimates do not include initial consultations, anesthesia options (sedation), or secondary sinus elevation procedures unless chosen.
              </p>
              <div className="pt-2 flex justify-between items-center text-xs text-brand-cyan font-bold border-t border-brand-border/20 mt-2">
                <span>* Verify actual coverage with your dental insurance provider.</span>
                <button 
                  onClick={handlePrint}
                  className="flex items-center gap-1 hover:underline cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Download Cost Breakdown</span>
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
              <DollarSign className="w-4 h-4 text-brand-cyan" />
              <span>Saved Dental Implant Estimates</span>
            </h3>
            {records.length > 0 && (
              <button
                onClick={() => setRecords([])}
                className="text-xs font-bold text-rose-400 hover:text-rose-300 transition-colors cursor-pointer"
              >
                Clear All Estimates
              </button>
            )}
          </div>

          <div className="space-y-4">
            {records.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs md:text-sm">
                  <thead>
                    <tr className="border-b border-brand-border text-gray-500 uppercase tracking-wider font-bold">
                      <th className="py-2.5 px-3">Date / Time</th>
                      <th className="py-2.5 px-3">Solution / Count</th>
                      <th className="py-2.5 px-3">Practice Location Tier</th>
                      <th className="py-2.5 px-3">Estimated Cost Range</th>
                      <th className="py-2.5 px-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brand-border/30">
                    {records.map((r) => (
                      <tr key={r.id} className="hover:bg-white/[0.02] transition-all">
                        <td className="py-3 px-3 text-white font-medium">{r.timestamp}</td>
                        <td className="py-3 px-3 text-gray-300">{r.restoration} ({r.numImplants} Post{r.numImplants > 1 ? "s" : ""})</td>
                        <td className="py-3 px-3 text-brand-cyan">{r.location}</td>
                        <td className="py-3 px-3 text-brand-indigo font-bold">${r.totalMin.toLocaleString()} – ${r.totalMax.toLocaleString()}</td>
                        <td className="py-3 px-3 text-right">
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
                No saved estimates. Switch to Implant Cost Calculator and click &quot;Save Estimate Comparison&quot;.
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
            <span>Dental Implant Component Breakdown & Guidelines</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-base text-gray-300 leading-relaxed">
            <div className="space-y-4">
              <h4 className="font-bold text-white text-lg">Understanding Implant Components</h4>
              <p>
                A dental implant is composed of multiple layers that are billed separately by most practices: the surgical implant post, the custom connecting abutment, and the dental restoration (crown or bridge).
              </p>
              
              <div className="space-y-2 bg-slate-900/40 border border-brand-border/50 rounded-xl p-5 text-sm">
                <p className="font-bold text-white uppercase tracking-wider text-[10px] text-gray-500">Average Base Cost Reference Ranges (Standard Multiplier):</p>
                <div className="flex justify-between border-b border-brand-border/20 py-2">
                  <span>Implant Post Surgical Placement:</span>
                  <span className="font-bold text-brand-cyan">$1,500 – $2,500</span>
                </div>
                <div className="flex justify-between border-b border-brand-border/20 py-2">
                  <span>Standard Custom Abutment & Crown:</span>
                  <span className="font-bold text-brand-cyan">$1,200 – $2,200</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>Simple Socket Bone Grafting:</span>
                  <span className="font-bold text-brand-cyan">$400 – $900</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-white text-lg">Additional Auxiliary Treatments</h4>
              <div className="space-y-3">
                {[
                  { title: "Standard Extraction", desc: "Required when damaged or decayed teeth must be removed prior to surgical placement." },
                  { title: "Sinus Lift Procedure", desc: "Surgically raises the sinus floor and grafts bone to provide anchor depth for implants in upper back regions." },
                  { title: "CT Scanning & 3D Imaging", desc: "Crucial for virtual planning, checking bone thickness, and avoiding major facial nerves." }
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
              <strong>Clinical Note:</strong> Bone grafting and healing durations can extend treatment schedules by 3 to 9 months before final crown loading. Ensure your clinical provider details the timeline and temporary prosthetic options during your initial consultation.
            </p>
          </div>
        </div>
      )}

      {/* Printable Report Layout */}
      <div className="hidden print:block text-black bg-white p-8 space-y-6 font-sans">
        <div className="border-b border-gray-300 pb-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 font-display">Dental Implant Cost Proposal Brief</h1>
            <p className="text-xs text-gray-500">Med Clinic X Dental Diagnostics & Pricing Group</p>
          </div>
          <DollarSign className="w-8 h-8 text-cyan-600" />
        </div>

        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <h3 className="font-bold text-gray-700 uppercase text-xs mb-1">Treatment Configuration</h3>
            <p><strong>Restoration:</strong> {restorationType}</p>
            <p><strong>Implants Needed:</strong> {numImplants} sites</p>
            <p><strong>Extractions:</strong> {extractions} teeth</p>
            <p><strong>Location/Tier:</strong> {location} cost multiplier</p>
            <p><strong>Bone Grafting:</strong> {grafting} grafting</p>
            <p><strong>Custom Abutments:</strong> {abutmentCustom ? "Yes" : "No"}</p>
            <p><strong>Sinus Lift:</strong> {sinusLift ? "Yes" : "No"}</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-700 uppercase text-xs mb-1">Estimated Cost Breakdown</h3>
            <p><strong>Surgical Cost:</strong> ${results.surgical.toLocaleString()}</p>
            <p><strong>Restoration Cost:</strong> ${results.restoration.toLocaleString()}</p>
            <p><strong>Grafting & Auxiliary Cost:</strong> ${results.graftingAux.toLocaleString()}</p>
            <p><strong>Diagnostic Scans:</strong> ${results.diagnostics.toLocaleString()}</p>
            <p className="border-t border-gray-200 pt-2 mt-2 text-base font-bold text-cyan-600">
              Total Budget Estimate: ${results.totalMin.toLocaleString()} – ${results.totalMax.toLocaleString()}
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 text-[10px] text-gray-500 text-center space-y-1">
          <p>This document is an estimate only and does not serve as a clinical diagnostic plan or binding financial contract. A physical consultation is required.</p>
          <p>&copy; {new Date().getFullYear()} Med Clinic X Inc. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
