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
  Sparkles,
  Shield,
  Printer,
  History,
  Moon,
  Briefcase,
  Smile,
  Dumbbell,
  Flame,
  Users,
  Wind,
  RotateCcw,
  CheckCircle2,
  Heart
} from "lucide-react";

interface StressLog {
  id: string;
  timestamp: string;
  sleep: number;
  workload: number;
  emotional: number;
  physical: number;
  pressure: number;
  support: number;
  score: number;
  level: "Low Stress" | "Moderate Stress" | "High Stress";
  highestContributor: string;
}

export default function StressCalculatorClient() {
  const [activeTab, setActiveTab] = useState<"calculator" | "logger" | "education">("calculator");
  
  // Questionnaire state (values 1 to 5)
  const [sleep, setSleep] = useState<number>(3);
  const [workload, setWorkload] = useState<number>(3);
  const [emotional, setEmotional] = useState<number>(3);
  const [physical, setPhysical] = useState<number>(3);
  const [pressure, setPressure] = useState<number>(3);
  const [support, setSupport] = useState<number>(3);

  // History logs
  const [logs, setLogs] = useState<StressLog[]>([]);
  const [toast, setToast] = useState<string>("");

  // Breathing pacer state
  const [breathingPhase, setBreathingPhase] = useState<"idle" | "inhale" | "hold" | "exhale">("idle");
  const [breathingTimer, setBreathingTimer] = useState<number>(0);
  const [breathingActive, setBreathingActive] = useState<boolean>(false);

  useEffect(() => {
    const saved = localStorage.getItem("medclinicx_stress_logs");
    if (saved) {
      try {
        setLogs(JSON.parse(saved));
      } catch (e) {
        console.error("Error loading stress logs", e);
      }
    } else {
      setLogs([
        {
          id: "sample-1",
          timestamp: "Sample History Log",
          sleep: 3,
          workload: 3,
          emotional: 3,
          physical: 3,
          pressure: 3,
          support: 3,
          score: 45,
          level: "Moderate Stress",
          highestContributor: "Workload Level"
        }
      ]);
    }
  }, []);

  // Breathing exercise timer loop
  useEffect(() => {
    let interval: any = null;
    if (breathingActive) {
      interval = setInterval(() => {
        setBreathingTimer((prev) => {
          if (breathingPhase === "inhale" && prev >= 4) {
            setBreathingPhase("hold");
            return 1;
          }
          if (breathingPhase === "hold" && prev >= 7) {
            setBreathingPhase("exhale");
            return 1;
          }
          if (breathingPhase === "exhale" && prev >= 8) {
            setBreathingPhase("inhale");
            return 1;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      setBreathingPhase("idle");
      setBreathingTimer(0);
    }
    return () => clearInterval(interval);
  }, [breathingActive, breathingPhase]);

  const startBreathing = () => {
    setBreathingActive(true);
    setBreathingPhase("inhale");
    setBreathingTimer(1);
  };

  const stopBreathing = () => {
    setBreathingActive(false);
  };

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(""), 3000);
  };

  const saveLogs = (newLogs: StressLog[]) => {
    setLogs(newLogs);
    localStorage.setItem("medclinicx_stress_logs", JSON.stringify(newLogs));
  };

  // Math Scoring
  const getPoints = () => {
    // Sleep points (1: 20, 2: 15, 3: 10, 4: 5, 5: 0)
    const sleepMap: Record<number, number> = { 1: 20, 2: 15, 3: 10, 4: 5, 5: 0 };
    const sleepPts = sleepMap[sleep] ?? 10;

    // Workload points (1: 0, 2: 5, 3: 10, 4: 15, 5: 20)
    const workloadMap: Record<number, number> = { 1: 0, 2: 5, 3: 10, 4: 15, 5: 20 };
    const workloadPts = workloadMap[workload] ?? 10;

    // Emotional points (1: 20, 2: 15, 3: 10, 4: 5, 5: 0)
    const emotionalMap: Record<number, number> = { 1: 20, 2: 15, 3: 10, 4: 5, 5: 0 };
    const emotionalPts = emotionalMap[emotional] ?? 10;

    // Physical points (1: 15, 2: 10, 3: 5, 4: 2, 5: 0)
    const physicalMap: Record<number, number> = { 1: 15, 2: 10, 3: 5, 4: 2, 5: 0 };
    const physicalPts = physicalMap[physical] ?? 5;

    // Daily pressure points (1: 0, 2: 5, 3: 10, 4: 15, 5: 20)
    const pressureMap: Record<number, number> = { 1: 0, 2: 5, 3: 10, 4: 15, 5: 20 };
    const pressurePts = pressureMap[pressure] ?? 10;

    // Social support points (1: 15, 2: 10, 3: 5, 4: 2, 5: 0)
    const supportMap: Record<number, number> = { 1: 15, 2: 10, 3: 5, 4: 2, 5: 0 };
    const supportPts = supportMap[support] ?? 5;

    const totalPoints = sleepPts + workloadPts + emotionalPts + physicalPts + pressurePts + supportPts;
    const scorePct = Math.min(100, Math.round((totalPoints / 110) * 100));

    // Calculate contributor percentages
    const contributions = [
      { name: "Sleep Quality", value: sleepPts, max: 20 },
      { name: "Workload Level", value: workloadPts, max: 20 },
      { name: "Emotional State", value: emotionalPts, max: 20 },
      { name: "Physical Activity", value: physicalPts, max: 15 },
      { name: "Daily Pressure Level", value: pressurePts, max: 20 },
      { name: "Social Support", value: supportPts, max: 15 }
    ];

    // Find highest contributor based on % contribution
    let highest = contributions[0];
    contributions.forEach((c) => {
      const currentPct = c.value / c.max;
      const highestPct = highest.value / highest.max;
      if (currentPct > highestPct) {
        highest = c;
      }
    });

    let level: "Low Stress" | "Moderate Stress" | "High Stress" = "Low Stress";
    if (scorePct >= 35 && scorePct <= 70) {
      level = "Moderate Stress";
    } else if (scorePct > 70) {
      level = "High Stress";
    }

    return {
      totalPoints,
      scorePct,
      level,
      highestContributor: highest.name,
      highestContributorScore: highest.value,
      contributions
    };
  };

  const results = getPoints();

  const handleAddLog = () => {
    const timestamp = new Date().toLocaleString([], {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });

    const newLog: StressLog = {
      id: Math.random().toString(36).substr(2, 9),
      timestamp,
      sleep,
      workload,
      emotional,
      physical,
      pressure,
      support,
      score: results.scorePct,
      level: results.level,
      highestContributor: results.highestContributor
    };

    saveLogs([newLog, ...logs]);
    showToast("Stress level logged successfully!");
  };

  const handleDeleteLog = (id: string) => {
    saveLogs(logs.filter((l) => l.id !== id));
    showToast("Log entry deleted.");
  };

  const handleClearLogs = () => {
    if (confirm("Are you sure you want to clear all logged stress results?")) {
      saveLogs([]);
      showToast("All logs cleared.");
    }
  };

  const handleResetInputs = () => {
    setSleep(3);
    setWorkload(3);
    setEmotional(3);
    setPhysical(3);
    setPressure(3);
    setSupport(3);
    showToast("Reset all calculator selections to baseline.");
  };

  // Recommendations text database
  const getRecommendation = (contributor: string) => {
    switch (contributor) {
      case "Sleep Quality":
        return {
          title: "Improve Sleep Hygiene",
          desc: "Your sleep profile appears to be the strongest factor increasing your overall stress level. Aim for a consistent sleep cycle, remove electronic devices 1 hour before bed, and consider mindfulness apps to transition into rest.",
          tips: ["Set a cool, dark room temperature", "Limit caffeine intake after 2:00 PM", "Establish a 20-minute wind-down routine"]
        };
      case "Workload Level":
        return {
          title: "Optimize Workload & Boundaries",
          desc: "Professional strain or workload pressure is your primary stress contributor. Consider discussing key deliverables with your manager, taking micro-breaks during the work day, and setting clear start and end times for work.",
          tips: ["Practice task prioritization (e.g., Eisenhower matrix)", "Discuss capacity limits with your supervisor", "Take 5-minute walks every 2 hours"]
        };
      case "Emotional State":
        return {
          title: "Emotional Support & Mindfulness",
          desc: "Your responses indicate heightened emotional volatility or feeling overwhelmed. Engaging in daily deep breathing exercises, mindfulness meditation, or journaling can help process emotions and decrease somatic stress.",
          tips: ["Journal your thoughts for 10 minutes daily", "Utilize the 4-7-8 breathing pacer tab below", "Speak to a professional mental health counselor"]
        };
      case "Physical Activity":
        return {
          title: "Incorporate Movement",
          desc: "A lack of regular physical activity contributes significantly to somatic stress loading. Even minor daily activity helps clear stress hormones like cortisol and boosts natural endorphin release.",
          tips: ["Start with a 15-minute walk daily", "Incorporate light stretching or yoga", "Find a gym partner or community fitness group"]
        };
      case "Daily Pressure Level":
        return {
          title: "Decompress Daily Routine",
          desc: "High daily lifestyle demands and chronic rushing are loading stress onto your system. Structuring buffer time between tasks and streamlining daily schedules can provide much-needed breathing room.",
          tips: ["Include a 15-minute buffer between meetings", "Delegate chores or simplify tasks", "Schedule daily 'do-nothing' quiet time"]
        };
      case "Social Support":
        return {
          title: "Strengthen Support Network",
          desc: "Social isolation significantly amplifies perceived stress levels. Building or leaning on support systems—whether close friends, family, or support groups—helps ease emotional burdens.",
          tips: ["Schedule a weekly phone call with a friend", "Join a local club or hobby community", "Participate in clinical counseling support programs"]
        };
      default:
        return {
          title: "Engage in Regular Stress Relief",
          desc: "Maintain a balanced daily schedule, practice moderate physical exercise, prioritize sleep, and keep track of your mental health logs.",
          tips: ["Use deep breathing techniques", "Maintain healthy eating habits", "Take regular screens-off digital detoxes"]
        };
    }
  };

  const activeRec = getRecommendation(results.highestContributor);

  // SVG Gauge calculations
  const radius = 50;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius; // ~314.16
  const strokeDashoffset = circumference - (results.scorePct / 100) * circumference;

  // Colors based on stress level
  const getLevelColors = (lvl: string) => {
    switch (lvl) {
      case "Low Stress":
        return {
          text: "text-emerald-400",
          bg: "bg-emerald-500/10",
          border: "border-emerald-500/20",
          stroke: "stroke-emerald-400",
          fill: "fill-emerald-500/10"
        };
      case "Moderate Stress":
        return {
          text: "text-amber-400",
          bg: "bg-amber-500/10",
          border: "border-amber-500/20",
          stroke: "stroke-amber-400",
          fill: "fill-amber-500/10"
        };
      case "High Stress":
        return {
          text: "text-rose-400",
          bg: "bg-rose-500/10",
          border: "border-rose-500/20",
          stroke: "stroke-rose-400",
          fill: "fill-rose-500/10"
        };
      default:
        return {
          text: "text-brand-cyan",
          bg: "bg-brand-cyan/10",
          border: "border-brand-cyan/20",
          stroke: "stroke-brand-cyan",
          fill: "fill-brand-cyan/10"
        };
    }
  };

  const levelColor = getLevelColors(results.level);

  return (
    <div className="w-full">
      {/* Toast Alert */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 border border-brand-cyan/40 text-brand-cyan px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2 text-sm font-semibold animate-fade-in">
          <Activity className="w-4 h-4 text-brand-cyan animate-pulse" />
          <span>{toast}</span>
        </div>
      )}

      {/* Navigation Tabs */}
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
          <span>Saved Logs ({logs.length})</span>
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
          <span>Wellness Guide</span>
        </button>
      </div>

      {activeTab === "calculator" && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Input Questions Column */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex justify-between items-center pb-2 border-b border-brand-border/40">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <Heart className="w-4 h-4 text-rose-400 animate-pulse" />
                  <span>Interactive Stress Assessment</span>
                </h3>
                <button
                  onClick={handleResetInputs}
                  className="text-xs text-gray-400 hover:text-white flex items-center gap-1 hover:underline cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset Test</span>
                </button>
              </div>

              {/* 1. Sleep Quality */}
              <div className="bg-slate-950/40 p-5 rounded-2xl border border-brand-border/40 space-y-3.5">
                <div className="flex justify-between items-center">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <Moon className="w-4 h-4 text-indigo-400" />
                    <span>1. Sleep Quality</span>
                  </h4>
                  <span className="text-xs font-bold text-indigo-300 bg-indigo-500/10 px-2 py-0.5 rounded-full border border-indigo-500/20">
                    {[
                      "",
                      "Very Poor (+20 pts)",
                      "Poor (+15 pts)",
                      "Average (+10 pts)",
                      "Good (+5 pts)",
                      "Excellent (0 pts)"
                    ][sleep]}
                  </span>
                </div>
                <p className="text-xs text-gray-400">
                  Select the description that best fits your sleep quality over the last 2-4 weeks.
                </p>
                <div className="grid grid-cols-5 gap-2 pt-1">
                  {[
                    { val: 1, label: "1", desc: "Very Poor" },
                    { val: 2, label: "2", desc: "Poor" },
                    { val: 3, label: "3", desc: "Average" },
                    { val: 4, label: "4", desc: "Good" },
                    { val: 5, label: "5", desc: "Excellent" }
                  ].map((opt) => (
                    <button
                      key={opt.val}
                      onClick={() => setSleep(opt.val)}
                      className={`py-3 rounded-xl border text-center transition-all cursor-pointer ${
                        sleep === opt.val
                          ? "bg-indigo-500/20 border-indigo-400 text-white font-extrabold"
                          : "bg-slate-900/60 border-brand-border/40 text-gray-400 hover:text-white hover:bg-slate-900"
                      }`}
                    >
                      <span className="block text-sm font-bold">{opt.label}</span>
                      <span className="text-[9px] text-gray-500 mt-0.5 block">{opt.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Workload Level */}
              <div className="bg-slate-950/40 p-5 rounded-2xl border border-brand-border/40 space-y-3.5">
                <div className="flex justify-between items-center">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-amber-400" />
                    <span>2. Workload Level</span>
                  </h4>
                  <span className="text-xs font-bold text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                    {[
                      "",
                      "Very Low (0 pts)",
                      "Low (+5 pts)",
                      "Moderate (+10 pts)",
                      "High (+15 pts)",
                      "Very High (+20 pts)"
                    ][workload]}
                  </span>
                </div>
                <p className="text-xs text-gray-400">
                  Assess your professional, academic, or household workload demands and deadlines.
                </p>
                <div className="grid grid-cols-5 gap-2 pt-1">
                  {[
                    { val: 1, label: "1", desc: "Very Low" },
                    { val: 2, label: "2", desc: "Low" },
                    { val: 3, label: "3", desc: "Moderate" },
                    { val: 4, label: "4", desc: "High" },
                    { val: 5, label: "5", desc: "Very High" }
                  ].map((opt) => (
                    <button
                      key={opt.val}
                      onClick={() => setWorkload(opt.val)}
                      className={`py-3 rounded-xl border text-center transition-all cursor-pointer ${
                        workload === opt.val
                          ? "bg-amber-500/20 border-amber-400 text-white font-extrabold"
                          : "bg-slate-900/60 border-brand-border/40 text-gray-400 hover:text-white hover:bg-slate-900"
                      }`}
                    >
                      <span className="block text-sm font-bold">{opt.label}</span>
                      <span className="text-[9px] text-gray-500 mt-0.5 block">{opt.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Emotional State */}
              <div className="bg-slate-950/40 p-5 rounded-2xl border border-brand-border/40 space-y-3.5">
                <div className="flex justify-between items-center">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <Smile className="w-4 h-4 text-emerald-400" />
                    <span>3. Emotional State</span>
                  </h4>
                  <span className="text-xs font-bold text-emerald-300 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    {[
                      "",
                      "Overwhelmed (+20 pts)",
                      "Unstable (+15 pts)",
                      "Neutral (+10 pts)",
                      "Stable (+5 pts)",
                      "Calm (0 pts)"
                    ][emotional]}
                  </span>
                </div>
                <p className="text-xs text-gray-400">
                  Assess your general mood, level of irritability, or anxiety levels over the last few weeks.
                </p>
                <div className="grid grid-cols-5 gap-2 pt-1">
                  {[
                    { val: 1, label: "1", desc: "Unstable" },
                    { val: 2, label: "2", desc: "Tense" },
                    { val: 3, label: "3", desc: "Neutral" },
                    { val: 4, label: "4", desc: "Stable" },
                    { val: 5, label: "5", desc: "Calm" }
                  ].map((opt) => (
                    <button
                      key={opt.val}
                      onClick={() => setEmotional(opt.val)}
                      className={`py-3 rounded-xl border text-center transition-all cursor-pointer ${
                        emotional === opt.val
                          ? "bg-emerald-500/20 border-emerald-400 text-white font-extrabold"
                          : "bg-slate-900/60 border-brand-border/40 text-gray-400 hover:text-white hover:bg-slate-900"
                      }`}
                    >
                      <span className="block text-sm font-bold">{opt.label}</span>
                      <span className="text-[9px] text-gray-500 mt-0.5 block">{opt.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* 4. Physical Activity */}
              <div className="bg-slate-950/40 p-5 rounded-2xl border border-brand-border/40 space-y-3.5">
                <div className="flex justify-between items-center">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <Dumbbell className="w-4 h-4 text-cyan-400" />
                    <span>4. Physical Activity</span>
                  </h4>
                  <span className="text-xs font-bold text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20">
                    {[
                      "",
                      "None (+15 pts)",
                      "Rare (+10 pts)",
                      "Occasional (+5 pts)",
                      "Regular (+2 pts)",
                      "Daily/High (0 pts)"
                    ][physical]}
                  </span>
                </div>
                <p className="text-xs text-gray-400">
                  Assess how often you perform cardiovascular or strength-building physical exercise.
                </p>
                <div className="grid grid-cols-5 gap-2 pt-1">
                  {[
                    { val: 1, label: "1", desc: "Sedentary" },
                    { val: 2, label: "2", desc: "Rare" },
                    { val: 3, label: "3", desc: "Occasional" },
                    { val: 4, label: "4", desc: "Regular" },
                    { val: 5, label: "5", desc: "Daily Active" }
                  ].map((opt) => (
                    <button
                      key={opt.val}
                      onClick={() => setPhysical(opt.val)}
                      className={`py-3 rounded-xl border text-center transition-all cursor-pointer ${
                        physical === opt.val
                          ? "bg-cyan-500/20 border-cyan-400 text-white font-extrabold"
                          : "bg-slate-900/60 border-brand-border/40 text-gray-400 hover:text-white hover:bg-slate-900"
                      }`}
                    >
                      <span className="block text-sm font-bold">{opt.label}</span>
                      <span className="text-[9px] text-gray-500 mt-0.5 block">{opt.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* 5. Daily Pressure Level */}
              <div className="bg-slate-950/40 p-5 rounded-2xl border border-brand-border/40 space-y-3.5">
                <div className="flex justify-between items-center">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <Flame className="w-4 h-4 text-rose-400" />
                    <span>5. Daily Pressure Level</span>
                  </h4>
                  <span className="text-xs font-bold text-rose-300 bg-rose-500/10 px-2 py-0.5 rounded-full border border-rose-500/20">
                    {[
                      "",
                      "Very Low (0 pts)",
                      "Low (+5 pts)",
                      "Moderate (+10 pts)",
                      "High (+15 pts)",
                      "Very High (+20 pts)"
                    ][pressure]}
                  </span>
                </div>
                <p className="text-xs text-gray-400">
                  Assess environmental pressure, financial strains, chores, or interpersonal struggles.
                </p>
                <div className="grid grid-cols-5 gap-2 pt-1">
                  {[
                    { val: 1, label: "1", desc: "Very Calm" },
                    { val: 2, label: "2", desc: "Low" },
                    { val: 3, label: "3", desc: "Moderate" },
                    { val: 4, label: "4", desc: "High" },
                    { val: 5, label: "5", desc: "Very Pressured" }
                  ].map((opt) => (
                    <button
                      key={opt.val}
                      onClick={() => setPressure(opt.val)}
                      className={`py-3 rounded-xl border text-center transition-all cursor-pointer ${
                        pressure === opt.val
                          ? "bg-rose-500/20 border-rose-400 text-white font-extrabold"
                          : "bg-slate-900/60 border-brand-border/40 text-gray-400 hover:text-white hover:bg-slate-900"
                      }`}
                    >
                      <span className="block text-sm font-bold">{opt.label}</span>
                      <span className="text-[9px] text-gray-500 mt-0.5 block">{opt.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* 6. Social Support */}
              <div className="bg-slate-950/40 p-5 rounded-2xl border border-brand-border/40 space-y-3.5">
                <div className="flex justify-between items-center">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-400" />
                    <span>6. Social Support</span>
                  </h4>
                  <span className="text-xs font-bold text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded-full border border-purple-500/20">
                    {[
                      "",
                      "None (+15 pts)",
                      "Very Little (+10 pts)",
                      "Moderate (+5 pts)",
                      "Strong (+2 pts)",
                      "Excellent (0 pts)"
                    ][support]}
                  </span>
                </div>
                <p className="text-xs text-gray-400">
                  Assess how comfortable you feel sharing deep concerns or asking for help from peers.
                </p>
                <div className="grid grid-cols-5 gap-2 pt-1">
                  {[
                    { val: 1, label: "1", desc: "Isolated" },
                    { val: 2, label: "2", desc: "Minimal" },
                    { val: 3, label: "3", desc: "Moderate" },
                    { val: 4, label: "4", desc: "Strong" },
                    { val: 5, label: "5", desc: "Excellent" }
                  ].map((opt) => (
                    <button
                      key={opt.val}
                      onClick={() => setSupport(opt.val)}
                      className={`py-3 rounded-xl border text-center transition-all cursor-pointer ${
                        support === opt.val
                          ? "bg-purple-500/20 border-purple-400 text-white font-extrabold"
                          : "bg-slate-900/60 border-brand-border/40 text-gray-400 hover:text-white hover:bg-slate-900"
                      }`}
                    >
                      <span className="block text-sm font-bold">{opt.label}</span>
                      <span className="text-[9px] text-gray-500 mt-0.5 block">{opt.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Log Button */}
              <button
                onClick={handleAddLog}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-brand-cyan to-brand-indigo hover:opacity-95 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-brand-cyan/15 hover:scale-[1.01] active:scale-[0.99] cursor-pointer text-sm"
              >
                <PlusCircle className="w-5 h-5" />
                <span>Log Wellbeing Assessment</span>
              </button>

            </div>

            {/* Results Column */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
              
              {/* Score Display Card */}
              <div className="glass-panel border border-brand-border rounded-3xl p-6 md:p-8 relative overflow-hidden bg-gradient-cyber min-h-[400px] flex flex-col justify-between">
                
                {/* Background glows */}
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-cyan/15 rounded-full blur-[60px] pointer-events-none" />
                <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-brand-indigo/10 rounded-full blur-[60px] pointer-events-none" />

                <div className="text-center pb-4 border-b border-brand-border/30">
                  <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest font-sans px-2.5 py-1 bg-brand-cyan/10 border border-brand-cyan/20 rounded-full inline-block mb-4">
                    Mental Wellbeing Score
                  </span>

                  {/* Radial Gauge */}
                  <div className="flex justify-center items-center relative my-2">
                    <svg className="w-36 h-36 transform -rotate-90">
                      {/* Base Track */}
                      <circle
                        cx="72"
                        cy="72"
                        r={radius}
                        className="stroke-slate-800"
                        strokeWidth={strokeWidth}
                        fill="transparent"
                      />
                      {/* Animated Progress Track */}
                      <circle
                        cx="72"
                        cy="72"
                        r={radius}
                        className={`${levelColor.stroke} transition-all duration-500 ease-out`}
                        strokeWidth={strokeWidth}
                        fill="transparent"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute flex flex-col items-center justify-center">
                      <span className="text-4xl font-extrabold text-white font-display">
                        {results.scorePct}%
                      </span>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 mt-0.5">
                        Stress Level
                      </span>
                    </div>
                  </div>

                  <div className={`mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${levelColor.bg} ${levelColor.text} border ${levelColor.border}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                    <span>{results.level}</span>
                  </div>

                  <p className="text-xs text-gray-400 mt-3 font-medium">
                    Total Assessment Score: <span className="text-white font-bold font-mono">{results.totalPoints} / 110 pts</span>
                  </p>
                </div>

                {/* Primary Contribution & Recommendations */}
                <div className="flex-grow py-4">
                  <div className="bg-slate-900/60 border border-brand-border/30 rounded-2xl p-4.5 text-left space-y-3">
                    <h5 className="text-[11px] font-bold text-brand-cyan uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
                      <span>Primary Stress Vector: {results.highestContributor}</span>
                    </h5>
                    
                    <div className="space-y-2">
                      <p className="text-xs font-bold text-white">{activeRec.title}</p>
                      <p className="text-xs text-gray-300 leading-relaxed">{activeRec.desc}</p>
                      <div className="pt-1.5 space-y-1">
                        {activeRec.tips.map((tip, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-[11px] text-gray-400">
                            <CheckCircle2 className="w-3 h-3 text-brand-emerald shrink-0" />
                            <span>{tip}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer disclaimer and prints */}
                <div className="pt-3 border-t border-brand-border/30 flex justify-between items-center text-xs">
                  <span className="text-[10px] text-rose-300 font-bold flex items-center gap-1">
                    <Shield className="w-3.5 h-3.5 text-rose-400" />
                    <span>Non-Diagnostic Tool</span>
                  </span>
                  <button
                    onClick={() => window.print()}
                    className="flex items-center gap-1 hover:underline text-brand-cyan font-bold cursor-pointer print:hidden"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print Report</span>
                  </button>
                </div>

              </div>

            </div>

          </div>

          {/* Interactive Breathing Exercise Tool Block */}
          <div className="glass-panel border border-brand-border/60 p-6 md:p-8 rounded-3xl relative overflow-hidden bg-slate-900/20 max-w-4xl mx-auto mt-12">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 space-y-4 text-left">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  <Wind className="w-3.5 h-3.5 animate-pulse" />
                  <span>Nervous System Reset</span>
                </div>
                <h3 className="font-display font-bold text-2xl text-white">4-7-8 Breathing Technique</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  A clinically researched breathing exercise that stimulates the vagus nerve, triggers the parasympathetic nervous system, and helps lower somatic stress levels.
                </p>
                <div className="grid grid-cols-3 gap-2.5 text-xs text-center">
                  <div className={`p-2.5 rounded-xl border ${breathingPhase === "inhale" ? "bg-cyan-500/15 border-cyan-400 text-white font-bold" : "bg-slate-950/40 border-brand-border/30 text-gray-400"}`}>
                    <span className="block font-bold">1. Inhale</span>
                    <span className="block mt-0.5 text-[10px]">4 Seconds</span>
                  </div>
                  <div className={`p-2.5 rounded-xl border ${breathingPhase === "hold" ? "bg-amber-500/15 border-amber-400 text-white font-bold" : "bg-slate-950/40 border-brand-border/30 text-gray-400"}`}>
                    <span className="block font-bold">2. Hold</span>
                    <span className="block mt-0.5 text-[10px]">7 Seconds</span>
                  </div>
                  <div className={`p-2.5 rounded-xl border ${breathingPhase === "exhale" ? "bg-purple-500/15 border-purple-400 text-white font-bold" : "bg-slate-950/40 border-brand-border/30 text-gray-400"}`}>
                    <span className="block font-bold">3. Exhale</span>
                    <span className="block mt-0.5 text-[10px]">8 Seconds</span>
                  </div>
                </div>

                <div className="pt-2 flex gap-3">
                  {!breathingActive ? (
                    <button
                      onClick={startBreathing}
                      className="px-5 py-2.5 rounded-xl bg-cyan-500 text-brand-bg font-extrabold text-xs hover:opacity-90 transition-all flex items-center gap-1.5 cursor-pointer shadow-md shadow-cyan-500/20"
                    >
                      <Wind className="w-4 h-4" />
                      <span>Start Breathing Exercise</span>
                    </button>
                  ) : (
                    <button
                      onClick={stopBreathing}
                      className="px-5 py-2.5 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 font-bold text-xs hover:bg-rose-500/30 transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>Stop Exercise</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Visual Breathing Pacer Circle */}
              <div className="md:col-span-5 flex flex-col items-center justify-center py-6">
                <div className="relative w-44 h-44 flex items-center justify-center">
                  
                  {/* Outer pulsating rings */}
                  <div className={`absolute inset-0 rounded-full border border-cyan-500/10 transition-all duration-1000 ${
                    breathingPhase === "inhale" ? "scale-[1.25] opacity-30 border-cyan-400" :
                    breathingPhase === "hold" ? "scale-[1.25] opacity-50 border-amber-400" :
                    breathingPhase === "exhale" ? "scale-[0.85] opacity-10 border-purple-400" : "scale-[0.9]"
                  }`} />
                  
                  <div className={`absolute inset-4 rounded-full border border-cyan-500/5 transition-all duration-1000 ${
                    breathingPhase === "inhale" ? "scale-[1.1] opacity-20 border-cyan-400" :
                    breathingPhase === "hold" ? "scale-[1.1] opacity-45 border-amber-400" :
                    breathingPhase === "exhale" ? "scale-[0.95] opacity-10 border-purple-400" : "scale-[0.9]"
                  }`} />

                  {/* Inner bubble */}
                  <div className={`w-32 h-32 rounded-full flex flex-col items-center justify-center text-center transition-all duration-[4000ms] ease-in-out ${
                    breathingPhase === "inhale" ? "bg-cyan-500/20 border-2 border-cyan-400 scale-[1.15]" :
                    breathingPhase === "hold" ? "bg-amber-500/20 border-2 border-amber-400 scale-[1.15] animate-pulse" :
                    breathingPhase === "exhale" ? "bg-purple-500/15 border-2 border-purple-400 scale-[0.9] duration-[8000ms]" : "bg-slate-950 border border-brand-border/40 scale-[0.95]"
                  }`}>
                    {breathingPhase === "idle" ? (
                      <>
                        <Wind className="w-7 h-7 text-gray-500" />
                        <span className="text-[10px] text-gray-500 uppercase tracking-widest mt-1 font-bold">Pacer Idle</span>
                      </>
                    ) : (
                      <>
                        <span className={`text-[10px] uppercase tracking-widest font-extrabold ${
                          breathingPhase === "inhale" ? "text-cyan-300" :
                          breathingPhase === "hold" ? "text-amber-300" : "text-purple-300"
                        }`}>
                          {breathingPhase}
                        </span>
                        <span className="text-3xl font-extrabold text-white mt-1 font-mono">
                          {breathingTimer}s
                        </span>
                      </>
                    )}
                  </div>

                </div>
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
              <span>Stress Wellbeing Logs</span>
            </h3>
            {logs.length > 0 && (
              <button
                onClick={handleClearLogs}
                className="flex items-center gap-1 text-xs text-rose-400 hover:text-rose-300 font-bold hover:underline cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear History</span>
              </button>
            )}
          </div>

          {logs.length === 0 ? (
            <div className="glass-panel border border-brand-border/40 rounded-2xl p-12 text-center text-gray-400 space-y-4">
              <Activity className="w-12 h-12 text-gray-600 mx-auto" />
              <div>
                <p className="font-bold text-white text-base">No Saved Assessment Logs</p>
                <p className="text-xs text-gray-400 mt-1">
                  Complete the questionnaire above and click &quot;Log Wellbeing Assessment&quot; to track your stress trends here.
                </p>
              </div>
            </div>
          ) : (
            <div className="glass-panel border border-brand-border rounded-2xl overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-900 border-b border-brand-border text-gray-300 font-bold">
                      <th className="p-3">Logged Date</th>
                      <th className="p-3">Rating Profile (S / W / E / P / D / U)</th>
                      <th className="p-3">Primary Stress Vector</th>
                      <th className="p-3 text-right">Stress Score</th>
                      <th className="p-3 text-center">Category</th>
                      <th className="p-3 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brand-border/30 text-gray-300">
                    {logs.map((log) => {
                      const logColors = getLevelColors(log.level);
                      return (
                        <tr key={log.id} className="hover:bg-white/[0.02] transition-all">
                          <td className="p-3 font-medium">{log.timestamp}</td>
                          <td className="p-3 text-gray-400 font-mono">
                            Sleep: {log.sleep} | Work: {log.workload} | Mood: {log.emotional} | Phys: {log.physical} | Press: {log.pressure} | Soc: {log.support}
                          </td>
                          <td className="p-3 text-gray-300">
                            {log.highestContributor}
                          </td>
                          <td className="p-3 text-right font-mono font-bold text-white text-sm">
                            {log.score}%
                          </td>
                          <td className="p-3 text-center">
                            <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold ${logColors.bg} ${logColors.text} border ${logColors.border}`}>
                              {log.level}
                            </span>
                          </td>
                          <td className="p-3 text-center">
                            <button
                              onClick={() => handleDeleteLog(log.id)}
                              className="text-gray-500 hover:text-rose-400 p-1 transition-colors cursor-pointer"
                              title="Delete entry"
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
            </div>
          )}
        </div>
      )}

      {activeTab === "education" && (
        <div className="max-w-3xl mx-auto space-y-6 text-left text-gray-300 text-sm leading-relaxed font-sans">
          <div className="glass-panel border border-brand-border p-6 rounded-2xl space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-2">
              <FileText className="w-5 h-5 text-brand-cyan" />
              <span>Stress Factors Reference & Scientific Validation</span>
            </h3>

            <div className="space-y-4">
              <h4 className="text-white font-bold text-base">Stress Assessment Parameters</h4>
              <p className="text-xs text-gray-400">
                Our calculator assigns point values to common risk vectors to assess stress loading. Here is how each index contributes to your score:
              </p>
              
              <div className="bg-slate-900/60 p-4 rounded-xl border border-brand-border/30 space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <p className="font-bold text-brand-cyan">Sleep Quality (1-5 range)</p>
                    <p className="text-gray-400 mt-1">Poor sleep is a clinical indicator of cortisol loading. (Max contribution: 20 pts)</p>
                  </div>
                  <div>
                    <p className="font-bold text-brand-cyan">Workload Level (1-5 range)</p>
                    <p className="text-gray-400 mt-1">Professional strain or heavy cognitive demands. (Max contribution: 20 pts)</p>
                  </div>
                  <div className="border-t border-brand-border/20 pt-3">
                    <p className="font-bold text-brand-cyan">Emotional Volatility (1-5 range)</p>
                    <p className="text-gray-400 mt-1">Resilience or anxious state and coping buffers. (Max contribution: 20 pts)</p>
                  </div>
                  <div className="border-t border-brand-border/20 pt-3">
                    <p className="font-bold text-brand-cyan">Daily Environment Pressure (1-5 range)</p>
                    <p className="text-gray-400 mt-1">Surroundings, financial, or domestic responsibilities. (Max contribution: 20 pts)</p>
                  </div>
                  <div className="border-t border-brand-border/20 pt-3 sm:col-span-2">
                    <p className="font-bold text-brand-cyan">Physical Activity & Social Buffers (1-5 range)</p>
                    <p className="text-gray-400 mt-1">Somatic release (exercise) and emotional support systems act as protective factors. (Max contribution: 15 pts each)</p>
                  </div>
                </div>
              </div>

              <h4 className="text-white font-bold text-base pt-2">Understanding Somatic Scoring Limits</h4>
              <ul className="list-disc pl-5 space-y-1.5 text-xs text-gray-400">
                <li><strong>Low Stress (&lt; 35%):</strong> Corresponds to manageable day-to-day pressure. Your protective habits (sleep, support, movement) are successfully mitigating daily demands.</li>
                <li><strong>Moderate Stress (35% - 70%):</strong> Elevated stress vectors are present. This indicates potential loading of chronic stress which should be addressed with active lifestyle corrections.</li>
                <li><strong>High Stress (&gt; 70%):</strong> Heightened risk of physical and mental exhaustion. Consider contacting a professional therapist or mental health coordinator, establishing strict work boundaries, and resolving sleep disturbances.</li>
              </ul>

              <h4 className="text-white font-bold text-base pt-2">Clinical Reference Safeguards</h4>
              <div className="bg-rose-500/10 border border-rose-500/20 text-rose-300 rounded-xl p-4 flex gap-3 text-xs leading-normal">
                <AlertTriangle className="w-5.5 h-5.5 text-rose-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-bold">Important Clinical Disclaimer:</p>
                  <p>
                    This Stress Calculator provides a general lifestyle and wellbeing estimate based on common survey markers. It is **not** a clinical diagnostic tool. It cannot screen for clinical anxiety, major depressive disorder (MDD), or somatic health issues.
                  </p>
                  <p className="mt-1">
                    If you are experiencing persistent stress, chest pain, panic attacks, or feelings of severe depression, please contact a qualified healthcare practitioner or emergency services immediately.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
