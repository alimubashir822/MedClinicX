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
  DollarSign,
  Info,
  Check,
  Printer,
  History,
  TrendingUp,
  CreditCard,
  Shield
} from "lucide-react";

interface AlignerRecord {
  id: string;
  complexity: "Mild" | "Moderate" | "Severe";
  duration: string;
  alignersCount: number;
  correction: string;
  totalCost: number;
  outOfPocket: number;
  insurance: number;
  timestamp: string;
}

export default function InvisalignCostCalculatorClient() {
  const [activeTab, setActiveTab] = useState<"calculator" | "finance" | "logger" | "guide">("calculator");
  
  // Inputs
  const [complexity, setComplexity] = useState<"Mild" | "Moderate" | "Severe">("Moderate");
  const [duration, setDuration] = useState<"express" | "moderate" | "standard" | "comprehensive">("moderate");
  const [alignersCount, setAlignersCount] = useState<number>(20);
  const [correctionType, setCorrectionType] = useState<"aesthetic" | "crowding" | "bite">("crowding");

  // Additional Services Checks
  const [hasCleaning, setHasCleaning] = useState<boolean>(false);
  const [hasScan, setHasScan] = useState<boolean>(true);
  const [hasAttachments, setHasAttachments] = useState<boolean>(true);
  const [hasRetainers, setHasRetainers] = useState<boolean>(false);
  const [hasRefinements, setHasRefinements] = useState<boolean>(false);

  // Reductions Sliders
  const [insuranceCover, setInsuranceCover] = useState<number>(1000);
  const [promoDiscount, setPromoDiscount] = useState<number>(0);

  // Financing Inputs
  const [downPayment, setDownPayment] = useState<number>(500);
  const [termMonths, setTermMonths] = useState<number>(24);
  const [financeApr, setFinanceApr] = useState<number>(0); // 0% APR standard promo

  // History logs
  const [records, setRecords] = useState<AlignerRecord[]>([
    {
      id: "1",
      complexity: "Moderate",
      duration: "6–12 months",
      alignersCount: 22,
      correction: "Bite Correction",
      totalCost: 4700,
      outOfPocket: 3700,
      insurance: 1000,
      timestamp: "Initial Estimate - 10:45 AM"
    }
  ]);

  // Sync aligners count slider defaults based on complexity
  useEffect(() => {
    if (complexity === "Mild") {
      setAlignersCount(10);
      setDuration("express");
    } else if (complexity === "Moderate") {
      setAlignersCount(22);
      setDuration("moderate");
    } else {
      setAlignersCount(40);
      setDuration("standard");
    }
  }, [complexity]);

  // Calculate pricing logic
  const calculateCosts = () => {
    // 1. Base Fee
    let base = 4200;
    if (complexity === "Mild") base = 2500;
    if (complexity === "Severe") base = 5800;

    // 2. Duration Offset
    let durationOffset = 0;
    if (duration === "express") durationOffset = -500;
    if (duration === "moderate") durationOffset = 0;
    if (duration === "standard") durationOffset = 500;
    if (duration === "comprehensive") durationOffset = 1200;

    // 3. Aligner Count Offset (Standard baseline = 15 aligners, $40 per aligner offset)
    const alignerOffset = (alignersCount - 15) * 40;

    // 4. Correction Type Offset
    let correctionOffset = 0;
    if (correctionType === "bite") correctionOffset = 400; // Bite fixes are harder
    if (correctionType === "aesthetic") correctionOffset = -300; // Purely cosmetics
    if (correctionType === "crowding") correctionOffset = 0;

    // 5. Additional Services
    let extraCosts = 0;
    if (hasCleaning) extraCosts += 150;
    if (hasScan) extraCosts += 250;
    if (hasAttachments) extraCosts += 350;
    if (hasRetainers) extraCosts += 500;
    if (hasRefinements) extraCosts += 400;

    // Sum total estimated treatment cost
    const totalEst = base + durationOffset + alignerOffset + correctionOffset + extraCosts;

    // Apply Reductions
    const outPocket = Math.max(500, totalEst - insuranceCover - promoDiscount);

    return {
      total: totalEst,
      outOfPocket: outPocket,
      baseFee: base,
      adjustments: durationOffset + alignerOffset + correctionOffset,
      extraServices: extraCosts
    };
  };

  const results = calculateCosts();

  // Financing Calculation
  const calculateFinance = () => {
    const principal = Math.max(0, results.outOfPocket - downPayment);
    const monthlyRate = (financeApr / 12) / 100;
    
    let monthly = 0;
    if (monthlyRate === 0) {
      monthly = principal / termMonths;
    } else {
      monthly = principal * (monthlyRate * Math.pow(1 + monthlyRate, termMonths)) / (Math.pow(1 + monthlyRate, termMonths) - 1);
    }

    const totalPaid = (monthly * termMonths) + downPayment;
    const interestPaid = Math.max(0, totalPaid - results.outOfPocket);

    return {
      monthly: Math.round(monthly * 100) / 100,
      totalPaid: Math.round(totalPaid),
      interestPaid: Math.round(interestPaid)
    };
  };

  const financeResults = calculateFinance();

  const handleAddRecord = () => {
    const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const date = new Date().toLocaleDateString([], { month: "short", day: "numeric" });
    
    let correctionLabel = "Crowding/Spacing";
    if (correctionType === "bite") correctionLabel = "Bite Adjustment";
    if (correctionType === "aesthetic") correctionLabel = "Aesthetic Alignment";

    let durationLabel = "6–12 months";
    if (duration === "express") durationLabel = "3–6 months";
    if (duration === "standard") durationLabel = "12–18 months";
    if (duration === "comprehensive") durationLabel = "18–24+ months";

    const newRecord: AlignerRecord = {
      id: Date.now().toString(),
      complexity,
      duration: durationLabel,
      alignersCount,
      correction: correctionLabel,
      totalCost: results.total,
      outOfPocket: results.outOfPocket,
      insurance: insuranceCover,
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

  // Pricing styling tiers helper
  const getPricingStyle = (totalCost: number) => {
    if (totalCost < 3500) {
      return {
        text: "text-brand-emerald",
        bg: "bg-brand-emerald/10",
        border: "border-brand-emerald/20",
        glow: "from-brand-emerald/10"
      };
    } else if (totalCost < 5500) {
      return {
        text: "text-brand-cyan",
        bg: "bg-brand-cyan/10",
        border: "border-brand-cyan/20",
        glow: "from-brand-cyan/10"
      };
    } else {
      return {
        text: "text-brand-indigo",
        bg: "bg-brand-indigo/10",
        border: "border-brand-indigo/20",
        glow: "from-brand-indigo/10"
      };
    }
  };

  const pricingStyle = getPricingStyle(results.total);

  return (
    <div className="w-full py-2 print:p-0">
      {/* Tabs Selector */}
      <div className="flex border-b border-brand-border/60 mb-8 print:hidden justify-center sm:justify-start">
        {[
          { id: "calculator", label: "Cost Calculator", icon: <Calculator className="w-4 h-4" /> },
          { id: "finance", label: "Finance Estimator", icon: <CreditCard className="w-4 h-4" /> },
          { id: "logger", label: "Estimate Logs", icon: <History className="w-4 h-4" /> },
          { id: "guide", label: "Invisalign Guide", icon: <BookOpen className="w-4 h-4" /> }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as "calculator" | "finance" | "logger" | "guide")}
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
          <div className="lg:col-span-8 space-y-6">
            
            {/* 1. Complexity & Correction */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Complexity Selection */}
              <div className="glass-panel border border-brand-border rounded-2xl p-6 space-y-4">
                <h3 className="text-white font-bold font-display text-xs tracking-wide uppercase flex items-center gap-2 border-b border-brand-border/40 pb-3">
                  <Activity className="w-4 h-4 text-brand-cyan" />
                  <span>Treatment Complexity</span>
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  {(["Mild", "Moderate", "Severe"] as const).map((tier) => (
                    <button
                      key={tier}
                      onClick={() => setComplexity(tier)}
                      className={`py-3 px-1 rounded-xl border text-center transition-all cursor-pointer flex flex-col gap-1 ${
                        complexity === tier
                          ? "bg-brand-cyan/10 border-brand-cyan/60 text-white shadow-md shadow-brand-cyan/5"
                          : "bg-slate-900/40 border-brand-border/60 text-gray-300 hover:border-brand-cyan/35 hover:bg-slate-900/60"
                      }`}
                    >
                      <span className="font-extrabold text-xs">{tier}</span>
                      <span className="text-[9px] text-gray-400">
                        {tier === "Mild" && "$2,500 base"}
                        {tier === "Moderate" && "$4,200 base"}
                        {tier === "Severe" && "$5,800 base"}
                      </span>
                    </button>
                  ))}
                </div>
                <p className="text-[10px] text-gray-400 leading-normal">
                  * Mild is for cosmetic shifts (Express/Lite), Moderate is standard alignment, and Severe is for skeletal bite fixes.
                </p>
              </div>

              {/* Dental Correction Type */}
              <div className="glass-panel border border-brand-border rounded-2xl p-6 space-y-4">
                <h3 className="text-white font-bold font-display text-xs tracking-wide uppercase flex items-center gap-2 border-b border-brand-border/40 pb-3">
                  <TrendingUp className="w-4 h-4 text-brand-cyan" />
                  <span>Dental Correction Type</span>
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "aesthetic", label: "Aesthetic", offset: "-$300" },
                    { id: "crowding", label: "Crowding", offset: "+$0" },
                    { id: "bite", label: "Bite Correction", offset: "+$400" }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setCorrectionType(item.id as "aesthetic" | "crowding" | "bite")}
                      className={`py-3 px-1 rounded-xl border text-center transition-all cursor-pointer flex flex-col gap-1 ${
                        correctionType === item.id
                          ? "bg-brand-cyan/10 border-brand-cyan/60 text-white shadow-md shadow-brand-cyan/5"
                          : "bg-slate-900/40 border-brand-border/60 text-gray-300 hover:border-brand-cyan/35 hover:bg-slate-900/60"
                      }`}
                    >
                      <span className="font-extrabold text-xs truncate max-w-full px-1">{item.label}</span>
                      <span className="text-[9px] text-gray-400">{item.offset}</span>
                    </button>
                  ))}
                </div>
                <p className="text-[10px] text-gray-400 leading-normal">
                  * Complex bites (overbite, underbite) require elastics or attachments, which increase clinical costs.
                </p>
              </div>

            </div>

            {/* 2. Duration & Aligner Count */}
            <div className="glass-panel border border-brand-border rounded-2xl p-6 space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-brand-border/40 pb-3">
                <h3 className="text-white font-bold font-display text-xs tracking-wide uppercase flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-brand-cyan" />
                  <span>Treatment Parameters</span>
                </h3>
                <span className="text-[10px] font-mono text-brand-cyan font-bold bg-brand-cyan/10 border border-brand-cyan/20 px-2.5 py-0.5 rounded-full">
                  Estimated duration matches aligners
                </span>
              </div>

              {/* Duration Buttons */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block">Estimated Treatment Duration</label>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { id: "express", label: "3–6m (Express)", offset: "-$500" },
                    { id: "moderate", label: "6–12m (Lite)", offset: "$0" },
                    { id: "standard", label: "12–18m (Full)", offset: "+$500" },
                    { id: "comprehensive", label: "18–24m+ (Comp)", offset: "+$1,200" }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setDuration(item.id as "express" | "moderate" | "standard" | "comprehensive")}
                      className={`py-2 px-1 rounded-lg border text-center transition-all cursor-pointer flex flex-col gap-0.5 ${
                        duration === item.id
                          ? "bg-brand-cyan/20 border-brand-cyan text-brand-cyan font-bold"
                          : "bg-slate-900/40 border-brand-border/60 text-gray-400 hover:border-gray-500"
                      }`}
                    >
                      <span className="text-[10px] font-bold truncate max-w-full px-0.5">{item.label}</span>
                      <span className="text-[8px] text-gray-500 font-medium">{item.offset}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Aligners Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Number of Aligners Required</label>
                  <span className="text-white font-extrabold text-sm bg-slate-900 px-2 py-0.5 rounded border border-brand-border">{alignersCount} Trays</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="60"
                  value={alignersCount}
                  onChange={(e) => setAlignersCount(parseInt(e.target.value))}
                  className="w-full h-1 bg-brand-border rounded-lg appearance-none cursor-pointer accent-brand-cyan focus:outline-none"
                />
                <div className="flex justify-between text-[9px] text-gray-500 font-mono">
                  <span>5 Trays (Express)</span>
                  <span>15 Trays (Baseline)</span>
                  <span>30 Trays (Moderate)</span>
                  <span>60 Trays (Comprehensive)</span>
                </div>
              </div>
            </div>

            {/* 3. Additional Services Checklist */}
            <div className="glass-panel border border-brand-border rounded-2xl p-6 space-y-4">
              <h3 className="text-white font-bold font-display text-xs tracking-wide uppercase flex items-center gap-2 border-b border-brand-border/40 pb-3">
                <Shield className="w-4 h-4 text-brand-cyan" />
                <span>Additional Dental Services Needed</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { state: hasCleaning, setter: setHasCleaning, name: "Dental Cleaning", cost: "+$150", desc: "Remove plaque prior to attachment fits" },
                  { state: hasScan, setter: setHasScan, name: "3D Scans & X-Rays", cost: "+$250", desc: "iTero dental digital scanning & charting" },
                  { state: hasAttachments, setter: setHasAttachments, name: "SmartForce Attachments", cost: "+$350", desc: "Tooth-colored grips for tricky shifts" },
                  { state: hasRetainers, setter: setHasRetainers, name: "Vivera Retainers", cost: "+$500", desc: "Medical grade post-treatment retainers" },
                  { state: hasRefinements, setter: setHasRefinements, name: "Refinement Aligners", cost: "+$400", desc: "Extra fine-tuning trays at completion" }
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => item.setter(!item.state)}
                    className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between gap-1 h-24 ${
                      item.state
                        ? "bg-brand-cyan/10 border-brand-cyan/60 text-white"
                        : "bg-slate-900/40 border-brand-border/60 text-gray-300 hover:border-brand-cyan/20"
                    }`}
                  >
                    <div className="flex justify-between items-center w-full">
                      <span className="font-extrabold text-xs truncate max-w-[80%]">{item.name}</span>
                      <span className={`w-3.5 h-3.5 rounded-md flex items-center justify-center border text-[9px] ${
                        item.state ? "bg-brand-cyan border-brand-cyan text-brand-bg font-extrabold" : "border-gray-500"
                      }`}>
                        {item.state && "✓"}
                      </span>
                    </div>
                    <p className="text-[9px] text-gray-400 leading-tight pr-1">{item.desc}</p>
                    <span className="text-[9px] font-bold text-brand-cyan">{item.cost}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Insurance & Promo Deductions */}
            <div className="glass-panel border border-brand-border rounded-2xl p-6 space-y-6">
              <h3 className="text-white font-bold font-display text-xs tracking-wide uppercase flex items-center gap-2 border-b border-brand-border/40 pb-3">
                <DollarSign className="w-4 h-4 text-brand-cyan" />
                <span>Insurance Coverage & Discounts</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Insurance Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Orthodontic Insurance Benefit</span>
                    <span className="text-brand-emerald font-extrabold font-mono">${insuranceCover.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="3000"
                    step="100"
                    value={insuranceCover}
                    onChange={(e) => setInsuranceCover(parseInt(e.target.value))}
                    className="w-full h-1 bg-brand-border rounded-lg appearance-none cursor-pointer accent-brand-emerald focus:outline-none"
                  />
                  <span className="text-[9px] text-gray-500 block leading-normal">
                    * Many dental plans offer a lifetime orthodontic maximum coverage of $1,000 to $2,500.
                  </span>
                </div>

                {/* Promo Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">FSA/HSA / Promos</span>
                    <span className="text-brand-emerald font-extrabold font-mono">${promoDiscount.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="2000"
                    step="50"
                    value={promoDiscount}
                    onChange={(e) => setPromoDiscount(parseInt(e.target.value))}
                    className="w-full h-1 bg-brand-border rounded-lg appearance-none cursor-pointer accent-brand-emerald focus:outline-none"
                  />
                  <span className="text-[9px] text-gray-500 block leading-normal">
                    * Apply pre-tax health savings or dental office seasonal coupons.
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Results Sidebar Panel */}
          <div className="lg:col-span-4 space-y-6">
            <div className={`glass-panel border border-brand-border rounded-2xl p-6 relative overflow-hidden bg-gradient-to-br ${pricingStyle.glow} via-transparent to-transparent transition-all duration-300`}>
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brand-cyan/10 to-transparent pointer-events-none" />

              <div className="text-center space-y-4">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1 justify-center">
                  <Activity className="w-3.5 h-3.5 text-brand-cyan" />
                  <span>Estimated Total Cost</span>
                </p>
                
                <div className="space-y-1">
                  <h2 className="text-4xl font-display font-extrabold text-white">
                    ${results.total.toLocaleString()}
                  </h2>
                  <p className="text-[9px] font-medium text-gray-400">
                    Includes aligner lab and professional office fees
                  </p>
                </div>

                <div className="border-t border-brand-border/40 pt-4 space-y-3">
                  <div className="flex justify-between items-center text-xs text-gray-400">
                    <span>Insurance Deduction:</span>
                    <span className="font-mono text-brand-emerald">-${insuranceCover.toLocaleString()}</span>
                  </div>
                  {promoDiscount > 0 && (
                    <div className="flex justify-between items-center text-xs text-gray-400">
                      <span>FSA/HSA or Promo:</span>
                      <span className="font-mono text-brand-emerald">-${promoDiscount.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center text-sm font-bold border-t border-brand-border/20 pt-2 text-white">
                    <span>Out of Pocket Exp:</span>
                    <span className="font-mono text-brand-cyan text-base">${results.outOfPocket.toLocaleString()}</span>
                  </div>
                </div>

                {/* Micro Financing Promotion Link */}
                <div className="bg-brand-cyan/5 border border-brand-cyan/20 rounded-xl p-3.5 text-left text-[11px] leading-relaxed text-gray-300 space-y-2 mt-2">
                  <p className="font-bold flex items-center gap-1.5 text-brand-cyan">
                    <CreditCard className="w-3.5 h-3.5 shrink-0" />
                    <span>Interest-Free Financing</span>
                  </p>
                  <p className="text-gray-400">
                    Finance this case at 0% APR for as low as <span className="font-extrabold text-white">${Math.round(results.outOfPocket / 24)}/mo</span> over 24 months.
                  </p>
                  <button 
                    onClick={() => setActiveTab("finance")}
                    className="text-[10px] font-bold text-brand-cyan hover:underline inline-flex items-center gap-1 cursor-pointer"
                  >
                    Configure Payment Plan &rarr;
                  </button>
                </div>
              </div>

              {/* Dynamic GCS/Invisalign Pricing Spectrum Visual Gauge */}
              <div className="mt-8 space-y-2 border-t border-brand-border/30 pt-4">
                <div className="flex justify-between items-center text-[10px] text-gray-400">
                  <span className="flex items-center gap-1"><span className="w-2 h-2 bg-brand-emerald rounded-full inline-block" /> Express (&lt;$3k)</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 bg-brand-cyan rounded-full inline-block" /> Lite/Mod</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 bg-brand-indigo rounded-full inline-block" /> Comp (&gt;$5.5k)</span>
                </div>
                <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden flex border border-brand-border/40 p-0.5 relative">
                  {/* Visual Marker for Calculated Price */}
                  <div 
                    style={{ 
                      left: `${Math.max(5, Math.min(95, ((results.total - 1500) / 7000) * 100))}%` 
                    }}
                    className="absolute top-1/2 -translate-y-1/2 w-2 h-4 bg-white border border-brand-bg rounded shadow-lg z-10 -translate-x-1/2 transition-all duration-500"
                  />
                  
                  {/* Colored Segments */}
                  <div className="h-full bg-brand-emerald rounded-l-full" style={{ width: "22%" }} />
                  <div className="h-full bg-brand-cyan/80" style={{ width: "36%" }} />
                  <div className="h-full bg-brand-indigo rounded-r-full" style={{ width: "42%" }} />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-brand-border/40 grid grid-cols-2 gap-2">
                <button
                  onClick={handleAddRecord}
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-brand-cyan to-brand-indigo hover:opacity-95 text-white font-bold text-[10px] py-2.5 rounded-xl transition-all shadow-md cursor-pointer"
                >
                  <PlusCircle className="w-3.5 h-3.5" />
                  <span>Log Estimate</span>
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
                  <Info className="w-3.5 h-3.5" /> Budgeting Guide
                </span>
                <span>FSA Eligible</span>
              </div>
              <div className="space-y-2">
                <p className="text-[11px] text-gray-400 leading-normal">
                  Invisalign is generally classified as an **IRS-eligible medical expense**. This allows you to pay for your out-of-pocket balance tax-free using your health savings account (HSA) or flexible spending account (FSA).
                </p>
                <p className="text-[10px] text-gray-500 leading-relaxed font-semibold">
                  Tip: Coordinate with your HR provider before your plan year ends to optimize contributions.
                </p>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* TAB 2: FINANCE ESTIMATOR */}
      {activeTab === "finance" && (
        <div className="glass-panel border border-brand-border rounded-2xl p-6 space-y-6">
          <div className="border-b border-brand-border/40 pb-3 flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-brand-cyan" />
            <div>
              <h3 className="text-white font-bold font-display text-sm tracking-wide uppercase">Monthly Financing Estimator</h3>
              <p className="text-xs text-gray-400 mt-0.5">Simulate payment options for your out-of-pocket cost of **${results.outOfPocket.toLocaleString()}**.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Finance Inputs */}
            <div className="md:col-span-6 space-y-6">
              
              {/* Deposit/Down payment slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Initial Down Payment Deposit</span>
                  <span className="text-white font-extrabold font-mono">${downPayment.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max={Math.min(3000, results.outOfPocket)}
                  step="100"
                  value={downPayment}
                  onChange={(e) => setDownPayment(parseInt(e.target.value))}
                  className="w-full h-1 bg-brand-border rounded-lg appearance-none cursor-pointer accent-brand-cyan focus:outline-none"
                />
                <div className="flex justify-between text-[9px] text-gray-500 font-mono">
                  <span>$0 (No money down)</span>
                  <span>${Math.min(3000, results.outOfPocket).toLocaleString()} max</span>
                </div>
              </div>

              {/* Term Duration buttons */}
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Financing Term Length</span>
                <div className="grid grid-cols-4 gap-2">
                  {[12, 18, 24, 36].map((months) => (
                    <button
                      key={months}
                      onClick={() => setTermMonths(months)}
                      className={`py-2 px-1 rounded-lg border text-center transition-all cursor-pointer font-extrabold text-xs ${
                        termMonths === months
                          ? "bg-brand-cyan/20 border-brand-cyan text-brand-cyan"
                          : "bg-slate-900/40 border-brand-border text-gray-400 hover:border-gray-500"
                      }`}
                    >
                      {months} Months
                    </button>
                  ))}
                </div>
              </div>

              {/* APR buttons/slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Financing APR (Interest)</span>
                  <span className="text-white font-extrabold font-mono">{financeApr}% APR</span>
                </div>
                <div className="grid grid-cols-4 gap-2 mb-2">
                  {[0, 4.9, 7.9, 12.9].map((rate) => (
                    <button
                      key={rate}
                      onClick={() => setFinanceApr(rate)}
                      className={`py-1.5 px-0.5 rounded-lg border text-center transition-all cursor-pointer text-[10px] font-bold ${
                        financeApr === rate
                          ? "bg-brand-cyan/20 border-brand-cyan text-brand-cyan"
                          : "bg-slate-900/40 border-brand-border text-gray-400 hover:border-gray-500"
                      }`}
                    >
                      {rate === 0 ? "0% APR (Promo)" : `${rate}%`}
                    </button>
                  ))}
                </div>
                <input
                  type="range"
                  min="0"
                  max="15"
                  step="0.5"
                  value={financeApr}
                  onChange={(e) => setFinanceApr(parseFloat(e.target.value))}
                  className="w-full h-1 bg-brand-border rounded-lg appearance-none cursor-pointer accent-brand-cyan focus:outline-none"
                />
              </div>

            </div>

            {/* Finance Outputs */}
            <div className="md:col-span-6 bg-slate-900/40 border border-brand-border/60 rounded-2xl p-6 flex flex-col justify-between space-y-4">
              <div className="space-y-4">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Financing Summary Details</p>
                
                <div className="text-center py-4 border-b border-brand-border/40">
                  <h3 className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Estimated Monthly Payment</h3>
                  <h1 className="text-5xl font-display font-extrabold text-brand-cyan mt-1">
                    ${financeResults.monthly.toFixed(2)}
                    <span className="text-xs font-bold text-gray-500 ml-1">/mo</span>
                  </h1>
                </div>

                <div className="space-y-2 text-xs text-gray-300">
                  <div className="flex justify-between">
                    <span>Financed Balance:</span>
                    <span className="font-mono text-white">${Math.max(0, results.outOfPocket - downPayment).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Initial Deposit:</span>
                    <span className="font-mono text-white">${downPayment.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Interest Paid (over {termMonths}m):</span>
                    <span className="font-mono text-white">${financeResults.interestPaid.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between border-t border-brand-border/30 pt-2 font-bold text-white">
                    <span>Total Payment Costs:</span>
                    <span className="font-mono text-brand-cyan">${financeResults.totalPaid.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="bg-brand-cyan/5 border border-brand-cyan/15 rounded-lg p-3 text-[10px] text-gray-400 flex gap-2">
                <Info className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                <p className="leading-normal">
                  * 0% APR financing is often offered by orthodontists directly or through medical credit services (e.g. CareCredit) for qualified applicants.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: ESTIMATE LOGS */}
      {activeTab === "logger" && (
        <div className="glass-panel border border-brand-border rounded-2xl p-6 space-y-6">
          <div className="flex justify-between items-center border-b border-brand-border/50 pb-3">
            <h3 className="text-white font-semibold font-display text-sm tracking-wide uppercase flex items-center gap-2">
              <History className="w-4 h-4 text-brand-cyan" />
              <span>Invisalign Saved Treatment Estimates</span>
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
                      <th className="py-3 px-3">Complexity</th>
                      <th className="py-3 px-3">Duration</th>
                      <th className="py-3 px-3">Aligners</th>
                      <th className="py-3 px-3">Correction</th>
                      <th className="py-3 px-3">Total Est.</th>
                      <th className="py-3 px-3">Out of Pocket</th>
                      <th className="py-3 px-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brand-border/30 text-gray-300">
                    {records.map((r) => {
                      const style = getPricingStyle(r.totalCost);
                      return (
                        <tr key={r.id} className="hover:bg-white/[0.02] transition-all">
                          <td className="py-3.5 px-3 text-white font-medium">{r.timestamp}</td>
                          <td className="py-3.5 px-3">
                            <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold ${style.bg} ${style.text} border ${style.border}`}>
                              {r.complexity}
                            </span>
                          </td>
                          <td className="py-3.5 px-3">{r.duration}</td>
                          <td className="py-3.5 px-3 font-semibold">{r.alignersCount} Trays</td>
                          <td className="py-3.5 px-3">{r.correction}</td>
                          <td className="py-3.5 px-3 font-mono font-bold">${r.totalCost.toLocaleString()}</td>
                          <td className="py-3.5 px-3 font-mono text-brand-cyan font-bold">${r.outOfPocket.toLocaleString()}</td>
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
                No estimates logged yet. Run a calculation and click &quot;Log Estimate&quot;.
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 4: INVISALIGN GUIDE */}
      {activeTab === "guide" && (
        <div className="glass-panel border border-brand-border rounded-2xl p-6 space-y-8">
          
          <div className="border-b border-brand-border/40 pb-4">
            <h3 className="text-white font-semibold font-display text-sm tracking-wide uppercase flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-brand-cyan" />
              <span>Invisalign Treatment Tiers & Packages Reference</span>
            </h3>
            <p className="text-xs text-gray-400 mt-1">
              Understand the standard clear aligner treatment packages orthodontic clinics provide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
            {[
              {
                title: "Invisalign Express",
                aligners: "5 - 7 Aligner Trays",
                duration: "3 - 6 Months",
                costs: "$1,500 - $3,000",
                desc: "Designed for minor cosmetic spacing or crowding concerns. Popular for adults with slight relapse from previous braces."
              },
              {
                title: "Invisalign Lite",
                aligners: "Up to 14 Aligner Trays",
                duration: "6 - 12 Months",
                costs: "$3,000 - $4,500",
                desc: "Appropriate for moderate alignment needs or minor bite shifts. Includes one free refinement set of aligners."
              },
              {
                title: "Invisalign Moderate",
                aligners: "Up to 20 Aligner Trays",
                duration: "12 - 18 Months",
                costs: "$4,000 - $5,500",
                desc: "Covers deep crowding, wide gaps, and light vertical bite alignments. Standard option for moderate orthodontic cases."
              },
              {
                title: "Invisalign Comprehensive",
                aligners: "Unlimited Aligner Trays",
                duration: "18 - 24+ Months",
                costs: "$5,000 - $8,000",
                desc: "Full comprehensive treatment for complex skeletal bites, heavy crowding, rotations, and vertical adjustments."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-900/40 border border-brand-border/30 p-4 rounded-xl flex flex-col justify-between h-72">
                <div className="space-y-2">
                  <h4 className="font-extrabold text-brand-cyan text-sm">{item.title}</h4>
                  <div className="text-[10px] text-gray-400 space-y-0.5">
                    <p><strong>Aligners:</strong> {item.aligners}</p>
                    <p><strong>Duration:</strong> {item.duration}</p>
                    <p className="text-brand-emerald"><strong>Est. Cost:</strong> {item.costs}</p>
                  </div>
                  <p className="text-[10px] text-gray-500 leading-relaxed pt-1.5 border-t border-brand-border/20">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-brand-border/30 pt-6 space-y-4 text-gray-300 leading-relaxed text-sm">
            <h4 className="font-bold text-white text-base">Key Insurance & HSA/FSA Cost-Saving Tips</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-900/35 border border-brand-border/45 rounded-xl p-5 text-xs">
              <div className="space-y-2">
                <p className="font-bold text-brand-cyan uppercase tracking-wider text-[10px]">Orthodontic Insurance Limits:</p>
                <ul className="list-disc pl-4 space-y-1.5 text-gray-400">
                  <li><strong>Check Lifetime Limits:</strong> Dental insurance often has a separate lifetime orthodontic limit (usually 50% up to $1,500 or $2,000).</li>
                  <li><strong>In-Network Providers:</strong> Choosing an in-network provider secures pre-negotiated discount rates on Invisalign packages.</li>
                  <li><strong>Pre-Auth Scans:</strong> Ask your clinic to submit 3D scan digital records to get exact coverage figures before commencing.</li>
                </ul>
              </div>
              <div className="space-y-2">
                <p className="font-bold text-brand-cyan uppercase tracking-wider text-[10px]">FSA/HSA Savings Management:</p>
                <ul className="list-disc pl-4 space-y-1.5 text-gray-400">
                  <li><strong>Pre-Tax Deductions:</strong> Invisalign qualifies as an IRS medical tax deduction. Paying with an HSA/FSA saves 20-30% in income taxes.</li>
                  <li><strong>Split Contributions:</strong> If your treatment crosses tax years, you can make payments across two calendar years to maximize HSA/FSA annual limits.</li>
                  <li><strong>Receipt Retention:</strong> Always save copies of orthodontic treatment contracts and detailed receipts.</li>
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
            <h1 className="text-2xl font-bold text-gray-800 font-display">Invisalign Clear Aligner Pricing Estimate</h1>
            <p className="text-xs text-gray-500">Med Clinic X Dental Diagnostics Brief</p>
          </div>
          <DollarSign className="w-8 h-8 text-cyan-600" />
        </div>

        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <h3 className="font-bold text-gray-700 uppercase text-xs mb-1">Assessed Parameters</h3>
            <p><strong>Complexity:</strong> {complexity} Alignment Cases</p>
            <p><strong>Correction Target:</strong> {correctionType === "bite" ? "Bite Adjustment" : correctionType === "aesthetic" ? "Aesthetic Alignment" : "Crowding/Spacing"}</p>
            <p><strong>Estimated Duration:</strong> {duration === "express" ? "3-6 months" : duration === "moderate" ? "6-12 months" : duration === "standard" ? "12-18 months" : "18-24+ months"}</p>
            <p><strong>Aligners Count:</strong> {alignersCount} Trays</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-700 uppercase text-xs mb-1">Financial Breakdown</h3>
            <p className="text-base"><strong>Total Estimated Cost:</strong> ${results.total.toLocaleString()}</p>
            <p><strong>Insurance Benefit:</strong> -${insuranceCover.toLocaleString()}</p>
            <p><strong>FSA/HSA or Promo:</strong> -${promoDiscount.toLocaleString()}</p>
            <p className="text-lg font-bold border-t border-gray-200 pt-1"><strong>Final Out of Pocket Balance:</strong> ${results.outOfPocket.toLocaleString()}</p>
          </div>
        </div>

        {downPayment > 0 && (
          <div className="bg-gray-50 border border-gray-200 rounded p-4 text-xs">
            <h4 className="font-bold text-gray-700 uppercase text-[10px] mb-1">Financing Details</h4>
            <div className="grid grid-cols-3 gap-2">
              <p><strong>Down Payment:</strong> ${downPayment.toLocaleString()}</p>
              <p><strong>Installment Term:</strong> {termMonths} Months</p>
              <p><strong>Interest APR:</strong> {financeApr}%</p>
              <p className="col-span-3 font-semibold text-gray-800">Monthly Installment Amount: ${financeResults.monthly.toFixed(2)}/month</p>
            </div>
          </div>
        )}

        <div className="pt-8 border-t border-gray-200 text-[10px] text-gray-500 text-center space-y-1">
          <p>This report is generated dynamically by Med Clinic X calculators. Binding estimates require clinical consultation and 3D digital records planning.</p>
          <p>&copy; {new Date().getFullYear()} Med Clinic X Inc. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
