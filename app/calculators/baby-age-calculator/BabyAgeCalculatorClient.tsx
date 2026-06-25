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
  Calendar,
  Clock,
  Compass,
  CheckCircle,
  Scale
} from "lucide-react";

interface BabyAgeRecord {
  id: string;
  timestamp: string;
  dob: string;
  refDate: string;
  ageText: string;
  correctedText?: string;
  milestoneStage: string;
}

export default function BabyAgeCalculatorClient() {
  const [activeTab, setActiveTab] = useState<"calculator" | "logger" | "education">("calculator");

  // Inputs
  const [birthDate, setBirthDate] = useState<string>("");
  const [targetDate, setTargetDate] = useState<string>("");
  
  // Prematurity Corrected Age inputs
  const [premature, setPremature] = useState<boolean>(false);
  const [gestationalWeeks, setGestationalWeeks] = useState<string>("32");

  // Log Records
  const [records, setRecords] = useState<BabyAgeRecord[]>([]);

  // Set default dates on mount
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setTargetDate(today);

    // Set DOB to 6 months ago as default
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
    setBirthDate(sixMonthsAgo.toISOString().split("T")[0]);

    // Load from localstorage
    const saved = localStorage.getItem("medclinicx_baby_age_logs");
    if (saved) {
      try {
        setRecords(JSON.parse(saved));
      } catch (e) {
        console.error("Error reading baby age logs", e);
      }
    } else {
      setRecords([
        {
          id: "1",
          timestamp: "Initial Milestone Check",
          dob: sixMonthsAgo.toISOString().split("T")[0],
          refDate: today,
          ageText: "0 years, 6 months, 0 days",
          correctedText: "N/A",
          milestoneStage: "Infant Stage (6 months)"
        }
      ]);
    }
  }, []);

  const saveRecords = (newRecords: BabyAgeRecord[]) => {
    setRecords(newRecords);
    localStorage.setItem("medclinicx_baby_age_logs", JSON.stringify(newRecords));
  };

  // Perform date difference calculations
  const calculateBabyAge = () => {
    if (!birthDate) return null;

    const start = new Date(birthDate);
    const end = targetDate ? new Date(targetDate) : new Date();

    start.setHours(0,0,0,0);
    end.setHours(0,0,0,0);

    if (isNaN(start.getTime()) || isNaN(end.getTime()) || start > end) {
      return null;
    }

    // 1. Chronological Age Calculation
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const totalDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    // Years, Months, Days breakdown
    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    let days = end.getDate() - start.getDate();

    if (days < 0) {
      months -= 1;
      const prevMonth = new Date(end.getFullYear(), end.getMonth(), 0);
      days += prevMonth.getDate();
    }

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    const totalWeeks = Math.floor(totalDays / 7);
    const remainingDays = totalDays % 7;
    
    const totalMonthsDecimal = Math.round((totalDays / 30.4375) * 10) / 10;
    const totalWeeksDecimal = Math.round((totalDays / 7) * 10) / 10;

    // 2. Corrected Age (for premature babies born before 37 weeks)
    let correctedYears = years;
    let correctedMonths = months;
    let correctedDays = days;
    let isPrematureActive = false;
    let correctedTotalDays = totalDays;

    if (premature) {
      const gestWeeks = parseInt(gestationalWeeks) || 40;
      if (gestWeeks < 37) {
        isPrematureActive = true;
        const weeksEarly = 40 - gestWeeks;
        const daysEarly = weeksEarly * 7;
        correctedTotalDays = Math.max(0, totalDays - daysEarly);

        // Recalculate years, months, days using adjusted birthdate
        const adjustedBirthDate = new Date(start);
        adjustedBirthDate.setDate(adjustedBirthDate.getDate() + daysEarly);
        
        if (adjustedBirthDate <= end) {
          correctedYears = end.getFullYear() - adjustedBirthDate.getFullYear();
          correctedMonths = end.getMonth() - adjustedBirthDate.getMonth();
          correctedDays = end.getDate() - adjustedBirthDate.getDate();

          if (correctedDays < 0) {
            correctedMonths -= 1;
            const prevMonth = new Date(end.getFullYear(), end.getMonth(), 0);
            correctedDays += prevMonth.getDate();
          }

          if (correctedMonths < 0) {
            correctedYears -= 1;
            correctedMonths += 12;
          }
        } else {
          correctedYears = 0;
          correctedMonths = 0;
          correctedDays = 0;
        }
      }
    }

    // 3. Developmental milestones category selection (based on corrected age for preemies)
    const targetAgeMonthsForMilestones = isPrematureActive 
      ? (correctedTotalDays / 30.4375) 
      : (totalDays / 30.4375);

    let milestoneStage = "Newborn Stage";
    let milestoneKey: number = 0;
    let milestonesList: string[] = [];

    if (targetAgeMonthsForMilestones < 2) {
      milestoneStage = "Newborn Stage (0-2 months)";
      milestoneKey = 0;
      milestonesList = [
        "Calms down when spoken to or picked up",
        "Looks at your face when you talk",
        "Seems happy to see you when you walk up to them",
        "Reacts to loud sounds (startles, blinks, quietens)",
        "Briefly holds head up when on tummy"
      ];
    } else if (targetAgeMonthsForMilestones < 4) {
      milestoneStage = "Infant Stage (2 months)";
      milestoneKey = 2;
      milestonesList = [
        "Smiles when you talk to or smile at them",
        "Looks at you with interest",
        "Coos, makes gurgling sounds, or reacts to voices",
        "Follows your movements with their eyes",
        "Pushes up on arms when lying on tummy"
      ];
    } else if (targetAgeMonthsForMilestones < 6) {
      milestoneStage = "Infant Stage (4 months)";
      milestoneKey = 4;
      milestonesList = [
        "Smiles spontaneously to get your attention",
        "Chuckles or makes cooing sounds when you interact",
        "Holds head steady without support when held",
        "Brings hands to mouth and reaches for toys",
        "Pushes up on elbows or hands when on tummy"
      ];
    } else if (targetAgeMonthsForMilestones < 9) {
      milestoneStage = "Infant Stage (6 months)";
      milestoneKey = 6;
      milestonesList = [
        "Knows familiar people and likes to play with others",
        "Laughs out loud, squeals, and makes raspberry sounds",
        "Rolls from tummy to back (and sometimes back to tummy)",
        "Sits up with support (hands or pillows)",
        "Supports weight on legs when held standing up"
      ];
    } else if (targetAgeMonthsForMilestones < 12) {
      milestoneStage = "Infant Stage (9 months)";
      milestoneKey = 9;
      milestonesList = [
        "Shows clinginess or shyness around strangers",
        "Makes lot of different sounds like 'mamama' or 'bababa'",
        "Sits independently without any support",
        "Pulls up to stand and crawls on tummy/knees",
        "Points to objects or holds things with index and thumb"
      ];
    } else if (targetAgeMonthsForMilestones < 18) {
      milestoneStage = "Toddler Stage (12 months)";
      milestoneKey = 12;
      milestonesList = [
        "Plays interactive games like peek-a-boo or pat-a-cake",
        "Waves 'bye-bye' or shakes head 'no'",
        "Says at least one word like 'mama', 'dada' or 'bye'",
        "Pulls up to stand and walks holding onto furniture (cruising)",
        "Puts items into a container and takes them out"
      ];
    } else if (targetAgeMonthsForMilestones < 24) {
      milestoneStage = "Toddler Stage (18 months)";
      milestoneKey = 18;
      milestonesList = [
        "Points to show you something interesting",
        "Says several single words and mimics sounds",
        "Walks independently without holding onto anything",
        "Feeds self with fingers or spoon, drinks from cup",
        "Scribbles on paper and builds towers of 2-3 blocks"
      ];
    } else {
      milestoneStage = "Toddler Stage (24 months)";
      milestoneKey = 24;
      milestonesList = [
        "Looks at your face to see how to react in new situations",
        "Says at least two words together like 'more milk' or 'go out'",
        "Points to objects or pictures when they are named",
        "Runs, kicks a ball, and climbs up/down small steps",
        "Shows simple independent behaviors and sorting shapes"
      ];
    }

    return {
      chronological: { years, months, days, totalDays, totalWeeks, remainingDays, totalMonthsDecimal, totalWeeksDecimal },
      corrected: { years: correctedYears, months: correctedMonths, days: correctedDays, isPrematureActive, totalDays: correctedTotalDays },
      milestones: { stage: milestoneStage, key: milestoneKey, list: milestonesList }
    };
  };

  const results = calculateBabyAge();

  const handleAddRecord = () => {
    if (!results) return;
    
    const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const date = new Date().toLocaleDateString([], { month: "short", day: "numeric" });
    
    const ageText = `${results.chronological.years} yrs, ${results.chronological.months} mos, ${results.chronological.days} days`;
    const correctedText = results.corrected.isPrematureActive 
      ? `${results.corrected.years} yrs, ${results.corrected.months} mos, ${results.corrected.days} days`
      : "N/A";
    
    const newRecord: BabyAgeRecord = {
      id: Date.now().toString(),
      timestamp: `${date} - ${time}`,
      dob: birthDate,
      refDate: targetDate,
      ageText,
      correctedText,
      milestoneStage: results.milestones.stage
    };
    
    saveRecords([newRecord, ...records]);
  };

  const handleDeleteRecord = (id: string) => {
    saveRecords(records.filter(r => r.id !== id));
  };

  const handleClearRecords = () => {
    saveRecords([]);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full py-4 print:p-0">
      {/* Tab Selector */}
      <div className="flex border-b border-brand-border/60 mb-8 print:hidden justify-center sm:justify-start">
        {[
          { id: "calculator", label: "Age Calculator", icon: <Calculator className="w-4 h-4" /> },
          { id: "logger", label: "Milestones Log", icon: <FileText className="w-4 h-4" /> },
          { id: "education", label: "Development Guidelines", icon: <BookOpen className="w-4 h-4" /> }
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
          {/* Inputs Panel */}
          <div className="md:col-span-5 glass-panel border border-brand-border rounded-2xl p-6 space-y-6">
            <h3 className="text-white font-semibold font-display text-sm tracking-wide uppercase flex items-center gap-2 border-b border-brand-border/50 pb-3">
              <Calculator className="w-4 h-4 text-brand-cyan" />
              <span>Age Details</span>
            </h3>

            {/* DOB input */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block">Baby&apos;s Date of Birth</label>
              <div className="relative">
                <input
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-brand-cyan"
                />
              </div>
            </div>

            {/* Target Date input */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block">Calculate As Of (Current Date)</label>
              <div className="relative">
                <input
                  type="date"
                  value={targetDate}
                  onChange={(e) => setTargetDate(e.target.value)}
                  className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-brand-cyan"
                />
              </div>
            </div>

            {/* Gestational Adjustments Prematurity */}
            <div className="border border-brand-border/60 rounded-xl overflow-hidden">
              <div className="bg-white/[0.02] p-4 flex justify-between items-center text-xs font-bold text-gray-300">
                <span className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-brand-cyan" />
                  <span>Adjust for Premature Birth</span>
                </span>
                <input
                  type="checkbox"
                  checked={premature}
                  onChange={(e) => setPremature(e.target.checked)}
                  className="w-4 h-4 accent-brand-cyan rounded border-brand-border"
                />
              </div>
              
              {premature && (
                <div className="p-4 bg-brand-bg/30 space-y-4 border-t border-brand-border/60">
                  <div className="space-y-1">
                    <label className="text-[9px] font-bold text-gray-500 uppercase tracking-wider block">Gestational Age at Birth (Weeks)</label>
                    <div className="relative">
                      <input
                        type="number"
                        min="22"
                        max="36"
                        value={gestationalWeeks}
                        onChange={(e) => setGestationalWeeks(e.target.value)}
                        className="w-full bg-brand-bg/50 border border-brand-border rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-brand-cyan"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-bold text-gray-500">weeks</span>
                    </div>
                    <p className="text-[9px] text-gray-500 mt-1 leading-normal">
                      Calculates Corrected Age (Chronological Age minus weeks born early) up to 2 years to align with CDC development guidelines.
                    </p>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={handleAddRecord}
              disabled={!results}
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-cyan to-brand-indigo hover:opacity-95 disabled:opacity-50 text-white font-bold text-xs py-3 rounded-xl transition-all shadow-md cursor-pointer"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Log Assessment Entry</span>
            </button>
          </div>

          {/* Results Output Columns */}
          {results ? (
            <div className="md:col-span-7 space-y-6">
              {/* Main Age Card */}
              <div className="glass-panel border border-brand-border rounded-2xl p-8 relative overflow-hidden bg-gradient-to-br from-brand-cyan/5 via-transparent to-transparent">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brand-cyan/10 to-transparent pointer-events-none" />

                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-brand-cyan animate-pulse" />
                  <span>Exact Baby Age Breakdown</span>
                </p>

                {/* Years, Months, Days row */}
                <div className="grid grid-cols-3 gap-4 mt-6 text-center">
                  <div className="bg-slate-900/60 border border-brand-border/40 p-4 rounded-xl">
                    <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-white">{results.chronological.years}</h3>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mt-1">Years</p>
                  </div>
                  <div className="bg-slate-900/60 border border-brand-border/40 p-4 rounded-xl">
                    <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-cyan">{results.chronological.months}</h3>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mt-1">Months</p>
                  </div>
                  <div className="bg-slate-900/60 border border-brand-border/40 p-4 rounded-xl">
                    <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-white">{results.chronological.days}</h3>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mt-1">Days</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap justify-between items-center gap-3 text-xs border-t border-brand-border/40 pt-4 text-gray-400">
                  <span>Age in Weeks: <strong className="text-white">{results.chronological.totalWeeks} weeks, {results.chronological.remainingDays} days</strong></span>
                  <span>Development Stage: <strong className="text-brand-cyan">{results.milestones.stage}</strong></span>
                </div>
              </div>

              {/* Corrected Age Offset Card (if premature) */}
              {results.corrected.isPrematureActive && (
                <div className="glass-panel border border-brand-border/50 rounded-2xl p-6 bg-gradient-to-r from-brand-emerald/5 to-transparent space-y-3">
                  <p className="text-[10px] font-bold text-brand-emerald uppercase tracking-widest flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-brand-emerald" />
                    <span>Gestational Corrected Age (For Milestones)</span>
                  </p>
                  <div className="grid grid-cols-3 gap-2 text-center pt-2">
                    <div>
                      <p className="text-2xl font-extrabold text-white">{results.corrected.years}</p>
                      <p className="text-[9px] font-bold text-gray-500 uppercase">Corrected Years</p>
                    </div>
                    <div>
                      <p className="text-2xl font-extrabold text-brand-emerald">{results.corrected.months}</p>
                      <p className="text-[9px] font-bold text-gray-500 uppercase">Corrected Months</p>
                    </div>
                    <div>
                      <p className="text-2xl font-extrabold text-white">{results.corrected.days}</p>
                      <p className="text-[9px] font-bold text-gray-500 uppercase">Corrected Days</p>
                    </div>
                  </div>
                  <p className="text-[10px] text-gray-500 leading-normal border-t border-brand-border/20 pt-2">
                    * Pediatricians use corrected age to evaluate motor/cognitive milestones in preemies up to 2 years of age to prevent diagnostic false alarms.
                  </p>
                </div>
              )}

              {/* Total metrics alternative representation grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="glass-panel border border-brand-border/50 p-4 rounded-xl">
                  <p className="text-[9px] font-bold text-gray-500 uppercase">Total Days Old</p>
                  <p className="text-xl font-bold text-white mt-1">{results.chronological.totalDays} <span className="text-xs font-semibold text-gray-400">days</span></p>
                </div>
                <div className="glass-panel border border-brand-border/50 p-4 rounded-xl">
                  <p className="text-[9px] font-bold text-gray-500 uppercase">Total Weeks Old</p>
                  <p className="text-xl font-bold text-white mt-1">{results.chronological.totalWeeksDecimal} <span className="text-xs font-semibold text-gray-400">weeks</span></p>
                </div>
                <div className="glass-panel border border-brand-border/50 p-4 rounded-xl">
                  <p className="text-[9px] font-bold text-gray-500 uppercase">Total Months Old</p>
                  <p className="text-xl font-bold text-white mt-1">{results.chronological.totalMonthsDecimal} <span className="text-xs font-semibold text-gray-400">months</span></p>
                </div>
              </div>

              {/* CDC Milestone Checklists */}
              <div className="glass-panel border border-brand-border rounded-2xl p-6 space-y-4">
                <div className="flex justify-between items-center border-b border-brand-border/50 pb-3">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                    <Compass className="w-4 h-4 text-brand-cyan" />
                    <span>CDC Developmental Milestones Checklist</span>
                  </h4>
                  <span className="text-[10px] font-bold text-brand-cyan">{results.milestones.stage}</span>
                </div>

                <p className="text-xs text-gray-400 leading-normal">
                  Typical developmental skills observed in healthy infants at this stage:
                </p>
                
                <div className="space-y-2">
                  {results.milestones.list.map((m, idx) => (
                    <div key={idx} className="flex gap-2.5 items-start bg-slate-900/40 border border-brand-border/40 p-3 rounded-xl text-xs text-gray-300">
                      <CheckCircle className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Print action bar */}
              <div className="glass-panel border border-brand-border rounded-xl p-4 text-xs flex justify-between items-center text-gray-400">
                <span className="flex items-center gap-1"><Info className="w-4 h-4 text-brand-cyan" /> Printable summary includes chronological & corrected age checks.</span>
                <button 
                  onClick={handlePrint}
                  className="text-brand-cyan hover:underline flex items-center gap-1 cursor-pointer font-bold"
                >
                  <FileText className="w-3.5 h-3.5" /> Download Report
                </button>
              </div>

            </div>
          ) : (
            <div className="md:col-span-7 glass-panel border border-brand-border/40 rounded-2xl p-12 text-center text-gray-500 text-sm">
              Please select a valid birth date to display calculations.
            </div>
          )}
        </div>
      )}

      {/* TAB 2: LOGGER */}
      {activeTab === "logger" && (
        <div className="glass-panel border border-brand-border rounded-2xl p-6 space-y-6">
          <div className="flex justify-between items-center border-b border-brand-border/50 pb-3">
            <h3 className="text-white font-semibold font-display text-sm tracking-wide uppercase flex items-center gap-2">
              <Scale className="w-4 h-4 text-brand-cyan" />
              <span>Logged Baby Age History</span>
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
                      <th className="py-2.5 px-3">Date & Time</th>
                      <th className="py-2.5 px-3">Birth Date</th>
                      <th className="py-2.5 px-3">Chronological Age</th>
                      <th className="py-2.5 px-3">Corrected Age</th>
                      <th className="py-2.5 px-3">Milestone Stage</th>
                      <th className="py-2.5 px-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brand-border/30">
                    {records.map((r) => (
                      <tr key={r.id} className="hover:bg-white/[0.02] transition-all">
                        <td className="py-3 px-3 text-white font-medium">{r.timestamp}</td>
                        <td className="py-3 px-3 text-gray-300">{r.dob}</td>
                        <td className="py-3 px-3 text-brand-cyan font-bold">{r.ageText}</td>
                        <td className="py-3 px-3 text-brand-emerald font-semibold">{r.correctedText}</td>
                        <td className="py-3 px-3 text-gray-400">{r.milestoneStage}</td>
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
                No logs saved. Return to the calculator panel and click &quot;Log Assessment Entry&quot; to save.
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
            <span>Clinical Milestone Guidelines & Prematurity Correction</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-base text-gray-300 leading-relaxed">
            <div className="space-y-4">
              <h4 className="font-bold text-white text-lg">Milestone Tracking Concepts</h4>
              <p>
                Developmental milestones are behaviors and physical skills seen in infants as they grow. The CDC and WHO outline milestone checklist ranges from 2 months to 5 years. Checking child age helps verify whether milestones (motor, cognitive, speech, social) align with healthy cohort averages.
              </p>
              
              <div className="space-y-2 bg-slate-900/40 border border-brand-border/50 rounded-xl p-5 text-xs text-gray-400">
                <p className="font-bold text-white uppercase tracking-wider text-[9px] block mb-1">Key Developmental Milestones Checklist Stages:</p>
                <div className="flex justify-between border-b border-brand-border/20 py-1">
                  <span>2 Months:</span>
                  <span className="font-bold text-brand-cyan">Smiling, cooing, eye tracking</span>
                </div>
                <div className="flex justify-between border-b border-brand-border/20 py-1">
                  <span>6 Months:</span>
                  <span className="font-bold text-brand-cyan">Sitting with support, babbling, rolling</span>
                </div>
                <div className="flex justify-between border-b border-brand-border/20 py-1">
                  <span>12 Months:</span>
                  <span className="font-bold text-brand-cyan">Pulling to stand, cruising, single words</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>24 Months:</span>
                  <span className="font-bold text-brand-cyan">Running, kicking, 2-word phrases</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-white text-lg">Why corrected age is necessary</h4>
              <p>
                If a baby is born prematurely (before 37 weeks of gestation), they have had less time to grow and develop in the womb than full-term babies. 
              </p>
              <p>
                To evaluate their milestones, pediatricians use their **Corrected Age** (calculated by subtracting the number of weeks born early from their chronological age) up until they reach 2 years of chronological age, when growth curves typically merge.
              </p>
              <div className="bg-brand-cyan/5 border border-brand-cyan/20 rounded-xl p-4 flex gap-3 text-xs mt-3 leading-normal">
                <AlertTriangle className="w-5.5 h-5.5 text-brand-cyan shrink-0" />
                <span>
                  <strong>Clinical Offset:</strong> Corrected Age = Chronological Age - (40 - Gestational Weeks at Birth). For example, a 16-week-old baby born at 32 weeks (8 weeks early) has a corrected age of 8 weeks.
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Printable Report Layout */}
      {results && (
        <div className="hidden print:block text-black bg-white p-8 space-y-6 font-sans">
          <div className="border-b border-gray-300 pb-4 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-800 font-display">Baby Age & Milestone Assessment Report</h1>
              <p className="text-xs text-gray-500">Med Clinic X Pediatrics Division Brief</p>
            </div>
            <Clock className="w-8 h-8 text-cyan-600" />
          </div>

          <div className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <h3 className="font-bold text-gray-700 uppercase text-xs mb-1">Birth & Target Dates</h3>
              <p><strong>Baby Date of Birth:</strong> {birthDate}</p>
              <p><strong>Assessment Target Date:</strong> {targetDate}</p>
              {premature && <p><strong>Gestational Birth Week:</strong> {gestationalWeeks} weeks</p>}
            </div>
            <div>
              <h3 className="font-bold text-gray-700 uppercase text-xs mb-1">Calculated Age Values</h3>
              <p><strong>Chronological Age:</strong> {results.chronological.years} yrs, {results.chronological.months} mos, {results.chronological.days} days</p>
              <p><strong>Total Days Old:</strong> {results.chronological.totalDays} days</p>
              <p><strong>Total Weeks Old:</strong> {results.chronological.totalWeeks} weeks, {results.chronological.remainingDays} days</p>
              {results.corrected.isPrematureActive && (
                <p className="text-emerald-700"><strong>Gestational Corrected Age:</strong> {results.corrected.years} yrs, {results.corrected.months} mos, {results.corrected.days} days</p>
              )}
            </div>
          </div>

          <div className="pt-6 border-t border-gray-200">
            <h3 className="font-bold text-gray-700 uppercase text-xs mb-2">CDC Milestone Targets ({results.milestones.stage})</h3>
            <ul className="list-disc pl-5 space-y-1 text-xs text-gray-600">
              {results.milestones.list.map((m, idx) => (
                <li key={idx}>{m}</li>
              ))}
            </ul>
          </div>

          <div className="pt-8 border-t border-gray-200 text-[10px] text-gray-500 text-center space-y-1">
            <p>This age assessment sheet is intended for tracking milestones. Consult your clinical provider for formal pediatric assessments.</p>
            <p>&copy; {new Date().getFullYear()} Med Clinic X Inc. All rights reserved.</p>
          </div>
        </div>
      )}
    </div>
  );
}
