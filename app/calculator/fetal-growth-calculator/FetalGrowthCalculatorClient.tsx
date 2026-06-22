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
  Sparkles,
  Shield,
  Printer,
  History,
  CheckCircle,
  Scale
} from "lucide-react";

interface FetalGrowthRecord {
  id: string;
  timestamp: string;
  type: "timeline" | "biometrics";
  // Timeline fields
  week?: number;
  lengthCm?: number;
  weightGrams?: number;
  fruitSize?: string;
  // Biometrics fields
  formulaName?: string;
  bpd?: number;
  hc?: number;
  ac?: number;
  fl?: number;
  efwGrams?: number;
}

export default function FetalGrowthCalculatorClient() {
  const [activeTab, setActiveTab] = useState<"calculator" | "logger" | "education">("calculator");
  const [calcMode, setCalcMode] = useState<"timeline" | "biometrics">("timeline");

  // Timeline inputs
  const [week, setWeek] = useState<number>(20);

  // Biometrics inputs
  const [biometricsUnit, setBiometricsUnit] = useState<"cm" | "mm">("cm");
  const [selectedFormula, setSelectedFormula] = useState<"hadlock1" | "hadlock2" | "hadlock3">("hadlock2");
  
  // Hadlock parameters
  const [bpd, setBpd] = useState<string>("5.0");
  const [hc, setHc] = useState<string>("18.0");
  const [ac, setAc] = useState<string>("15.0");
  const [fl, setFl] = useState<string>("3.5");

  // Logs History
  const [records, setRecords] = useState<FetalGrowthRecord[]>([]);
  const [toastMessage, setToastMessage] = useState<string>("");

  // Week-by-Week Database (Weeks 1 to 40)
  const fetalGrowthData: Record<number, {
    lengthCm: number;
    weightGrams: number;
    fruitSize: string;
    milestone: string;
    trimester: 1 | 2 | 3;
  }> = {
    1: { lengthCm: 0, weightGrams: 0, fruitSize: "Microscopic (Cell stage)", milestone: "Conception occurs; fertilisation of the egg.", trimester: 1 },
    2: { lengthCm: 0, weightGrams: 0, fruitSize: "Microscopic (Cell stage)", milestone: "Ovulation and fertilisation take place; cells start dividing rapidly.", trimester: 1 },
    3: { lengthCm: 0.1, weightGrams: 0.01, fruitSize: "Poppy Seed", milestone: "Implantation in the uterine lining; the blastocyst forms.", trimester: 1 },
    4: { lengthCm: 0.2, weightGrams: 0.1, fruitSize: "Poppy Seed", milestone: "Placenta starts forming; embryo is consisting of two layers of cells.", trimester: 1 },
    5: { lengthCm: 0.3, weightGrams: 0.2, fruitSize: "Apple Seed", milestone: "Neural tube develops; primitive heart begins to beat.", trimester: 1 },
    6: { lengthCm: 0.5, weightGrams: 0.4, fruitSize: "Sweet Pea", milestone: "Nose, mouth, and ears start to take shape.", trimester: 1 },
    7: { lengthCm: 1.2, weightGrams: 0.8, fruitSize: "Blueberry", milestone: "Brain is growing rapidly; hands and feet resemble tiny paddles.", trimester: 1 },
    8: { lengthCm: 1.6, weightGrams: 1.0, fruitSize: "Raspberry", milestone: "Embryonic tail is gone; fingers and toes start forming.", trimester: 1 },
    9: { lengthCm: 2.3, weightGrams: 2.0, fruitSize: "Green Grape", milestone: "Essential organs begin to develop; limbs can start moving.", trimester: 1 },
    10: { lengthCm: 3.1, weightGrams: 4.0, fruitSize: "Prune", milestone: "Officially a fetus now; bones and cartilage start developing.", trimester: 1 },
    11: { lengthCm: 4.1, weightGrams: 7.0, fruitSize: "Fig", milestone: "Fully formed internally; fingers and toes separate, and nails start growing.", trimester: 1 },
    12: { lengthCm: 5.4, weightGrams: 14.0, fruitSize: "Lime", milestone: "Kidneys start producing urine; reflexes like sucking begin.", trimester: 1 },
    13: { lengthCm: 7.4, weightGrams: 23.0, fruitSize: "Meyer Lemon", milestone: "Vocal cords begin to form; baby starts swallowing amniotic fluid.", trimester: 2 },
    14: { lengthCm: 8.7, weightGrams: 43.0, fruitSize: "Nectarine", milestone: "Lanugo (fine hair) covers the baby's body for warmth.", trimester: 2 },
    15: { lengthCm: 10.1, weightGrams: 70.0, fruitSize: "Apple", milestone: "Baby can sense light and make facial expressions.", trimester: 2 },
    16: { lengthCm: 11.6, weightGrams: 100.0, fruitSize: "Avocado", milestone: "Eyes have moved closer together; circulatory system is active.", trimester: 2 },
    17: { lengthCm: 13.0, weightGrams: 140.0, fruitSize: "Pear", milestone: "Skeleton is changing from soft cartilage to hard bone.", trimester: 2 },
    18: { lengthCm: 14.2, weightGrams: 190.0, fruitSize: "Sweet Potato", milestone: "Ears are in their final position; baby may hear sounds from the outside.", trimester: 2 },
    19: { lengthCm: 15.3, weightGrams: 240.0, fruitSize: "Mango", milestone: "Vernix caseosa (protective coating) forms on the baby's skin.", trimester: 2 },
    20: { lengthCm: 25.6, weightGrams: 300.0, fruitSize: "Banana", milestone: "Midway point of pregnancy. Movements (quickening) are easily felt.", trimester: 2 },
    21: { lengthCm: 26.7, weightGrams: 360.0, fruitSize: "Pomegranate", milestone: "Taste buds are developing; baby swallows fluid to practice digestion.", trimester: 2 },
    22: { lengthCm: 27.8, weightGrams: 430.0, fruitSize: "Papaya", milestone: "Lungs are developing rapidly, though they aren't ready to breathe yet.", trimester: 2 },
    23: { lengthCm: 28.9, weightGrams: 500.0, fruitSize: "Grapefruit", milestone: "Inner ear is fully developed, establishing baby's sense of balance.", trimester: 2 },
    24: { lengthCm: 30.0, weightGrams: 600.0, fruitSize: "Corn on the Cob", milestone: "Skin is red and wrinkled; baby starts producing lung surfactant.", trimester: 2 },
    25: { lengthCm: 34.6, weightGrams: 660.0, fruitSize: "Rutabaga", milestone: "Capillaries are forming; baby responds to sounds and light changes.", trimester: 2 },
    26: { lengthCm: 35.6, weightGrams: 760.0, fruitSize: "Scallion", milestone: "Eyes start to open and close; baby begins to inhale and exhale fluid.", trimester: 2 },
    27: { lengthCm: 36.6, weightGrams: 875.0, fruitSize: "Cauliflower", milestone: "Lungs are mature enough that baby could survive if born prematurely with support.", trimester: 3 },
    28: { lengthCm: 37.6, weightGrams: 1000.0, fruitSize: "Eggplant", milestone: "Baby begins blinking; eyelashes have fully grown.", trimester: 3 },
    29: { lengthCm: 38.6, weightGrams: 1150.0, fruitSize: "Butternut Squash", milestone: "Bones are fully developed, though they remain soft and pliable.", trimester: 3 },
    30: { lengthCm: 39.9, weightGrams: 1300.0, fruitSize: "Cabbage", milestone: "Baby's brain is developing billions of complex neural connections.", trimester: 3 },
    31: { lengthCm: 41.1, weightGrams: 1500.0, fruitSize: "Coconut", milestone: "Baby can turn their head from side to side; fat layers thicken.", trimester: 3 },
    32: { lengthCm: 42.4, weightGrams: 1700.0, fruitSize: "Jicama", milestone: "Nails have reached the tips of their fingers; skeleton is fully formed.", trimester: 3 },
    33: { lengthCm: 43.7, weightGrams: 1900.0, fruitSize: "Pineapple", milestone: "Baby's immune system receives antibodies from the mother.", trimester: 3 },
    34: { lengthCm: 45.0, weightGrams: 2100.0, fruitSize: "Cantaloupe", milestone: "Central nervous system is maturing; lungs are nearly fully developed.", trimester: 3 },
    35: { lengthCm: 46.2, weightGrams: 2400.0, fruitSize: "Honeydew Melon", milestone: "Kidneys are fully developed; liver can process waste products.", trimester: 3 },
    36: { lengthCm: 47.4, weightGrams: 2600.0, fruitSize: "Papaya", milestone: "Baby is shedding vernix and lanugo; space in the womb becomes limited.", trimester: 3 },
    37: { lengthCm: 48.6, weightGrams: 2860.0, fruitSize: "Swiss Chard", milestone: "Pregnancy is considered early term. Organs are ready to function on their own.", trimester: 3 },
    38: { lengthCm: 49.8, weightGrams: 3100.0, fruitSize: "Leek", milestone: "Baby continues building fat layers to control body temperature after birth.", trimester: 3 },
    39: { lengthCm: 50.7, weightGrams: 3300.0, fruitSize: "Watermelon", milestone: "Baby is full term. Placenta continues providing nutrient support.", trimester: 3 },
    40: { lengthCm: 51.2, weightGrams: 3400.0, fruitSize: "Pumpkin", milestone: "Baby is fully grown and ready for birth! Congratulations!", trimester: 3 },
  };

  useEffect(() => {
    const saved = localStorage.getItem("medclinicx_fetal_growth_logs");
    if (saved) {
      try {
        setRecords(JSON.parse(saved));
      } catch (e) {
        console.error("Error loading fetal growth logs", e);
      }
    } else {
      // Seed default log
      setRecords([
        {
          id: "1",
          timestamp: "Sample Timeline Log",
          type: "timeline",
          week: 20,
          lengthCm: 25.6,
          weightGrams: 300,
          fruitSize: "Banana"
        }
      ]);
    }
  }, []);

  const saveRecords = (newRecords: FetalGrowthRecord[]) => {
    setRecords(newRecords);
    localStorage.setItem("medclinicx_fetal_growth_logs", JSON.stringify(newRecords));
  };

  // Unit Conversions Helper
  const gramsToLbsOz = (g: number) => {
    const totalOz = g / 28.349523;
    const lbs = Math.floor(totalOz / 16);
    const oz = Math.round((totalOz % 16) * 10) / 10;
    return `${lbs} lb ${oz} oz`;
  };

  const cmToInches = (cm: number) => {
    return (cm / 2.54).toFixed(1);
  };

  // Hadlock Calculations
  const calculateHadlock = () => {
    const isMm = biometricsUnit === "mm";
    const factor = isMm ? 10 : 1;

    const bpdCm = (parseFloat(bpd) || 0) / factor;
    const hcCm = (parseFloat(hc) || 0) / factor;
    const acCm = (parseFloat(ac) || 0) / factor;
    const flCm = (parseFloat(fl) || 0) / factor;

    let errorText = "";
    let formulaText = "";
    let logEfw = 0;
    let efwGrams = 0;

    if (calcMode === "biometrics") {
      if (acCm <= 0 || flCm <= 0) {
        errorText = "Abdominal Circumference (AC) and Femur Length (FL) must be greater than zero.";
      } else if (selectedFormula === "hadlock2" && bpdCm <= 0) {
        errorText = "Biparietal Diameter (BPD) must be greater than zero for Hadlock 2.";
      } else if (selectedFormula === "hadlock3" && hcCm <= 0) {
        errorText = "Head Circumference (HC) must be greater than zero for Hadlock 3.";
      }

      if (!errorText) {
        if (selectedFormula === "hadlock1") {
          // Hadlock 1: AC + FL
          logEfw = 1.304 + 0.05281 * acCm + 0.1938 * flCm - 0.004 * acCm * flCm;
          formulaText = `log10(EFW) = 1.304 + 0.05281 × AC (${acCm} cm) + 0.1938 × FL (${flCm} cm) - 0.004 × AC × FL`;
        } else if (selectedFormula === "hadlock2") {
          // Hadlock 2: BPD + AC + FL
          logEfw = 1.335 - 0.0034 * acCm * flCm + 0.0316 * bpdCm + 0.0438 * flCm + 0.162 * acCm;
          formulaText = `log10(EFW) = 1.335 - 0.0034 × AC (${acCm} cm) × FL (${flCm} cm) + 0.0316 × BPD (${bpdCm} cm) + 0.0438 × FL + 0.162 × AC`;
        } else {
          // Hadlock 3: HC + AC + FL
          logEfw = 1.326 - 0.00326 * acCm * flCm + 0.0107 * hcCm + 0.0438 * flCm + 0.158 * acCm;
          formulaText = `log10(EFW) = 1.326 - 0.00326 × AC (${acCm} cm) × FL (${flCm} cm) + 0.0107 × HC (${hcCm} cm) + 0.0438 × FL + 0.158 × AC`;
        }
        efwGrams = Math.pow(10, logEfw);
      }
    }

    return {
      efwGrams: Math.round(efwGrams * 10) / 10,
      formulaText,
      errorText,
      bpdCm,
      hcCm,
      acCm,
      flCm
    };
  };

  const biometricsResult = calculateHadlock();

  const handleAddLog = () => {
    const timestamp = new Date().toLocaleString([], {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    let newRecord: FetalGrowthRecord;

    if (calcMode === "timeline") {
      const data = fetalGrowthData[week];
      newRecord = {
        id: Math.random().toString(36).substr(2, 9),
        timestamp,
        type: "timeline",
        week,
        lengthCm: data.lengthCm,
        weightGrams: data.weightGrams,
        fruitSize: data.fruitSize
      };
    } else {
      if (biometricsResult.errorText) {
        showToast("Cannot log calculation with errors.");
        return;
      }
      newRecord = {
        id: Math.random().toString(36).substr(2, 9),
        timestamp,
        type: "biometrics",
        formulaName: selectedFormula === "hadlock1" ? "Hadlock (AC+FL)" : selectedFormula === "hadlock2" ? "Hadlock (BPD+AC+FL)" : "Hadlock (HC+AC+FL)",
        bpd: parseFloat(bpd) || undefined,
        hc: parseFloat(hc) || undefined,
        ac: parseFloat(ac) || undefined,
        fl: parseFloat(fl) || undefined,
        efwGrams: biometricsResult.efwGrams
      };
    }

    saveRecords([newRecord, ...records]);
    showToast("Fetal growth metrics saved in history!");
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 3000);
  };

  const handleDeleteRecord = (id: string) => {
    const updated = records.filter(r => r.id !== id);
    saveRecords(updated);
    showToast("Log entry deleted.");
  };

  const handleClearLogs = () => {
    if (confirm("Are you sure you want to clear all logged fetal growth calculations?")) {
      saveRecords([]);
      showToast("All logs cleared.");
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
          <span>Saved Logs ({records.length})</span>
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
          <span>Formulas Guide</span>
        </button>
      </div>

      {activeTab === "calculator" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Inputs Section */}
          <div className="lg:col-span-6 space-y-6">
            {/* Calculation Mode Toggle */}
            <div className="bg-slate-950/60 p-4 rounded-xl border border-brand-border/30">
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                Calculation Mode
              </label>
              <div className="grid grid-cols-2 gap-2 p-1 bg-slate-900/80 rounded-lg border border-brand-border/20">
                <button
                  type="button"
                  onClick={() => setCalcMode("timeline")}
                  className={`py-2 text-xs font-bold rounded-md transition-all cursor-pointer ${
                    calcMode === "timeline"
                      ? "bg-brand-cyan text-slate-950 shadow-md"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  Week-by-Week Tracker
                </button>
                <button
                  type="button"
                  onClick={() => setCalcMode("biometrics")}
                  className={`py-2 text-xs font-bold rounded-md transition-all cursor-pointer ${
                    calcMode === "biometrics"
                      ? "bg-brand-cyan text-slate-950 shadow-md"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  Ultrasound Biometrics
                </button>
              </div>
            </div>

            {/* Mode 1: Timeline Inputs */}
            {calcMode === "timeline" && (
              <div className="bg-slate-950/40 p-5 rounded-2xl border border-brand-border/40 space-y-5">
                <h3 className="text-sm font-bold text-white flex items-center gap-1.5 pb-2 border-b border-brand-border/20">
                  <Calendar className="w-4 h-4 text-brand-cyan" />
                  <span>Gestational Progression</span>
                </h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label htmlFor="weeksRangeInput" className="block text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Gestational Week
                    </label>
                    <span className="text-xl font-display font-extrabold text-brand-cyan">
                      Week {week}
                    </span>
                  </div>

                  <input
                    id="weeksRangeInput"
                    type="range"
                    min="1"
                    max="40"
                    value={week}
                    onChange={(e) => setWeek(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-900 border border-brand-border/40 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
                  />

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-gray-400 block">Trimester</span>
                      <span className="text-white font-bold">
                        {fetalGrowthData[week].trimester === 1 ? "First (1-12 wks)" : fetalGrowthData[week].trimester === 2 ? "Second (13-26 wks)" : "Third (27-40 wks)"}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-gray-400 block">Typical Fruit Sizing</span>
                      <span className="text-white font-bold">
                        {fetalGrowthData[week].fruitSize}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Mode 2: Ultrasound Biometrics Inputs */}
            {calcMode === "biometrics" && (
              <div className="bg-slate-950/40 p-5 rounded-2xl border border-brand-border/40 space-y-4">
                <h3 className="text-sm font-bold text-white flex items-center gap-1.5 pb-2 border-b border-brand-border/20">
                  <Scale className="w-4 h-4 text-brand-cyan" />
                  <span>Biometric Parameters (Hadlock)</span>
                </h3>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="formulaSelect" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                      Formula Choice
                    </label>
                    <select
                      id="formulaSelect"
                      value={selectedFormula}
                      onChange={(e) => setSelectedFormula(e.target.value as any)}
                      className="w-full bg-slate-900/60 border border-brand-border/40 rounded-xl px-2 py-2 text-white text-xs font-bold focus:outline-none focus:border-brand-cyan/80 cursor-pointer"
                    >
                      <option value="hadlock1">Hadlock 1 (AC+FL)</option>
                      <option value="hadlock2">Hadlock 2 (BPD+AC+FL)</option>
                      <option value="hadlock3">Hadlock 3 (HC+AC+FL)</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="biometricsUnitSelect" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                      Input Unit
                    </label>
                    <select
                      id="biometricsUnitSelect"
                      value={biometricsUnit}
                      onChange={(e) => setBiometricsUnit(e.target.value as "cm" | "mm")}
                      className="w-full bg-slate-900/60 border border-brand-border/40 rounded-xl px-2 py-2 text-white text-xs font-bold focus:outline-none focus:border-brand-cyan/80 cursor-pointer"
                    >
                      <option value="cm">Centimeters (cm)</option>
                      <option value="mm">Millimeters (mm)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  {/* BPD (Only Hadlock 2) */}
                  {selectedFormula === "hadlock2" && (
                    <div>
                      <label htmlFor="bpdInput" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                        Biparietal Diameter (BPD)
                      </label>
                      <input
                        id="bpdInput"
                        type="number"
                        value={bpd}
                        onChange={(e) => setBpd(e.target.value)}
                        className="w-full bg-slate-900/60 border border-brand-border/40 rounded-xl px-3 py-2 text-white font-mono text-sm focus:outline-none focus:border-brand-cyan/80"
                        placeholder="e.g. 5.0"
                        step="any"
                        min="0.1"
                      />
                    </div>
                  )}

                  {/* HC (Only Hadlock 3) */}
                  {selectedFormula === "hadlock3" && (
                    <div>
                      <label htmlFor="hcInput" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                        Head Circumference (HC)
                      </label>
                      <input
                        id="hcInput"
                        type="number"
                        value={hc}
                        onChange={(e) => setHc(e.target.value)}
                        className="w-full bg-slate-900/60 border border-brand-border/40 rounded-xl px-3 py-2 text-white font-mono text-sm focus:outline-none focus:border-brand-cyan/80"
                        placeholder="e.g. 18.0"
                        step="any"
                        min="0.1"
                      />
                    </div>
                  )}

                  {/* AC (All formulas) */}
                  <div>
                    <label htmlFor="acInput" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                      Abdominal Circumference (AC)
                    </label>
                    <input
                      id="acInput"
                      type="number"
                      value={ac}
                      onChange={(e) => setAc(e.target.value)}
                      className="w-full bg-slate-900/60 border border-brand-border/40 rounded-xl px-3 py-2 text-white font-mono text-sm focus:outline-none focus:border-brand-cyan/80"
                      placeholder="e.g. 15.0"
                      step="any"
                      min="0.1"
                    />
                  </div>

                  {/* FL (All formulas) */}
                  <div>
                    <label htmlFor="flInput" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                      Femur Length (FL)
                    </label>
                    <input
                      id="flInput"
                      type="number"
                      value={fl}
                      onChange={(e) => setFl(e.target.value)}
                      className="w-full bg-slate-900/60 border border-brand-border/40 rounded-xl px-3 py-2 text-white font-mono text-sm focus:outline-none focus:border-brand-cyan/80"
                      placeholder="e.g. 3.5"
                      step="any"
                      min="0.1"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Primary Action Button */}
            <button
              onClick={handleAddLog}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-brand-cyan to-brand-indigo hover:opacity-95 text-white font-bold py-3.5 rounded-xl transition-all shadow-md shadow-brand-cyan/10 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
            >
              <PlusCircle className="w-5 h-5" />
              <span>Log Calculation History</span>
            </button>
          </div>

          {/* Outputs Section */}
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-panel border border-brand-border/85 rounded-3xl p-6 md:p-8 relative overflow-hidden bg-gradient-cyber min-h-[380px] flex flex-col justify-between">
              {/* Background glows */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-cyan/10 rounded-full blur-[60px] pointer-events-none" />
              <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-brand-indigo/5 rounded-full blur-[60px] pointer-events-none" />

              {calcMode === "timeline" ? (
                // Output Mode 1: Timeline Output Card
                <div className="space-y-6 flex-grow flex flex-col justify-between">
                  <div className="text-center pb-6 border-b border-brand-border/30">
                    <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest font-sans px-2.5 py-1 bg-brand-cyan/10 border border-brand-cyan/20 rounded-full inline-block mb-3">
                      Week {week} Development Sizing
                    </span>
                    <div className="flex justify-center items-center gap-4 py-2">
                      <div className="text-center">
                        <p className="text-[11px] uppercase tracking-wider text-gray-400 font-sans">Avg. Length</p>
                        <p className="font-display font-extrabold text-4xl text-white mt-1">
                          {fetalGrowthData[week].lengthCm} <span className="text-lg text-brand-cyan">cm</span>
                        </p>
                        <p className="text-xs text-gray-400 font-mono mt-0.5">
                          ~{cmToInches(fetalGrowthData[week].lengthCm)} in
                        </p>
                      </div>
                      <div className="w-[1px] h-12 bg-brand-border/40 mx-2" />
                      <div className="text-center">
                        <p className="text-[11px] uppercase tracking-wider text-gray-400 font-sans">Avg. Weight</p>
                        <p className="font-display font-extrabold text-4xl text-white mt-1">
                          {fetalGrowthData[week].weightGrams} <span className="text-lg text-brand-cyan">g</span>
                        </p>
                        <p className="text-xs text-gray-400 font-mono mt-0.5">
                          ~{gramsToLbsOz(fetalGrowthData[week].weightGrams)}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-900/60 border border-brand-border/30 rounded-2xl p-5 text-left space-y-3">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5 mb-1">
                      <Info className="w-4 h-4 text-brand-cyan" />
                      <span>Fetal Developmental Milestones</span>
                    </h4>
                    
                    <p className="text-xs text-gray-200 leading-relaxed font-sans">
                      {fetalGrowthData[week].milestone}
                    </p>

                    <div className="bg-slate-950/60 p-2.5 rounded-lg border border-brand-border/10 flex items-center gap-2.5 text-xs text-gray-300">
                      <div className="w-8 h-8 rounded-full bg-brand-cyan/10 flex items-center justify-center shrink-0">
                        <Calendar className="w-4 h-4 text-brand-cyan" />
                      </div>
                      <div>
                        <p className="font-bold text-white">Size Comparison analogy:</p>
                        <p className="text-[11px] text-gray-400">At week {week}, the baby is about the size of a <span className="text-brand-cyan font-bold">{fetalGrowthData[week].fruitSize}</span>.</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // Output Mode 2: Biometrics Hadlock Output Card
                biometricsResult.errorText ? (
                  <div className="flex-grow flex flex-col items-center justify-center text-center space-y-3 py-12">
                    <AlertTriangle className="w-12 h-12 text-rose-400" />
                    <h4 className="text-white font-bold text-base">Calculation Incomplete</h4>
                    <p className="text-xs text-rose-300 max-w-sm">{biometricsResult.errorText}</p>
                  </div>
                ) : (
                  <div className="space-y-6 flex-grow flex flex-col justify-between">
                    <div className="text-center pb-6 border-b border-brand-border/30">
                      <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest font-sans px-2.5 py-1 bg-brand-cyan/10 border border-brand-cyan/20 rounded-full inline-block mb-3">
                        Estimated Fetal Weight (EFW)
                      </span>
                      <div className="flex justify-center items-baseline gap-1.5">
                        <span className="font-display font-extrabold text-5xl md:text-6xl text-white tracking-tight">
                          {biometricsResult.efwGrams.toLocaleString()}
                        </span>
                        <span className="font-sans font-bold text-2xl text-brand-cyan">
                          grams
                        </span>
                      </div>
                      <p className="text-xs text-gray-400 mt-2 font-medium">
                        Equal to approximately <span className="text-white font-bold font-mono">{gramsToLbsOz(biometricsResult.efwGrams)}</span>
                      </p>
                    </div>

                    <div className="bg-slate-900/60 border border-brand-border/30 rounded-2xl p-5 text-left space-y-3">
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5 mb-1">
                        <Info className="w-4 h-4 text-brand-cyan" />
                        <span>Hadlock Mathematical Formula</span>
                      </h4>
                      <p className="text-[10px] text-gray-400 font-mono break-all leading-normal bg-slate-950 p-2 rounded">
                        {biometricsResult.formulaText}
                      </p>
                      <div className="text-xs text-gray-300 space-y-1.5">
                        <p><strong>Step 1:</strong> Convert entered values to centimeters (cm).</p>
                        <p><strong>Step 2:</strong> Solve the $\log_{10}$ logarithmic equation using parameters.</p>
                        <p><strong>Step 3:</strong> Raise 10 to the power of the log result to find grams.</p>
                      </div>
                    </div>
                  </div>
                )
              )}

              {/* Warning and Print controls */}
              <div className="mt-4 pt-4 border-t border-brand-border/30 flex justify-between items-center text-xs">
                <span className="text-[10px] text-rose-300 font-bold flex items-center gap-1">
                  <Shield className="w-3.5 h-3.5 text-rose-400" />
                  <span>Educational Estimation Only</span>
                </span>
                <button
                  onClick={handlePrint}
                  className="flex items-center gap-1 hover:underline text-brand-cyan font-bold cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Report</span>
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
              <span>Pregnancy Growth History Logs</span>
            </h3>
            {records.length > 0 && (
              <button
                onClick={handleClearLogs}
                className="flex items-center gap-1 text-xs text-rose-400 hover:text-rose-300 font-bold hover:underline cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear Logs</span>
              </button>
            )}
          </div>

          {records.length === 0 ? (
            <div className="glass-panel border border-brand-border/40 rounded-2xl p-12 text-center text-gray-400 space-y-4">
              <Activity className="w-12 h-12 text-gray-600 mx-auto" />
              <div>
                <p className="font-bold text-white text-base">No Saved Calculations</p>
                <p className="text-xs text-gray-400 mt-1">Use the calculator tab above to estimate fetal size and click &quot;Log Calculation History&quot;.</p>
              </div>
            </div>
          ) : (
            <div className="glass-panel border border-brand-border rounded-2xl overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-900 border-b border-brand-border text-gray-300 font-bold">
                      <th className="p-3">Logged Time</th>
                      <th className="p-3">Calculation Type</th>
                      <th className="p-3 text-center">Week / Formula</th>
                      <th className="p-3 text-right">Fetal Weight</th>
                      <th className="p-3 text-right">Fetal Length</th>
                      <th className="p-3 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brand-border/30 text-gray-300">
                    {records.map((r) => (
                      <tr key={r.id} className="hover:bg-white/[0.02] transition-all">
                        <td className="p-3 font-medium">{r.timestamp}</td>
                        <td className="p-3 text-gray-400 font-medium">
                          {r.type === "timeline" ? "Week Timeline" : "Biometrics Estimation"}
                        </td>
                        <td className="p-3 text-center font-mono">
                          {r.type === "timeline" ? `Week ${r.week} (${r.fruitSize})` : r.formulaName}
                        </td>
                        <td className="p-3 text-right font-mono font-bold text-white">
                          {r.type === "timeline" 
                            ? `${r.weightGrams} g (${gramsToLbsOz(r.weightGrams || 0)})` 
                            : `${r.efwGrams} g (${gramsToLbsOz(r.efwGrams || 0)})`}
                        </td>
                        <td className="p-3 text-right font-mono text-gray-400">
                          {r.type === "timeline" ? `${r.lengthCm} cm (~${cmToInches(r.lengthCm || 0)} in)` : "N/A"}
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
              <span>Hadlock Ultrasound Formulas Guide</span>
            </h3>

            <div className="space-y-4">
              <p className="text-xs text-gray-400">
                Ultrasound scans measure fetal skeleton bone fragments and soft tissues to estimate weight and screen for developmental concerns. The Hadlock equations are the global clinical standards used inside ultrasound medical devices:
              </p>

              <div className="bg-slate-900/60 p-4 rounded-xl border border-brand-border/30 space-y-3 font-mono text-xs">
                <div>
                  <p className="font-bold text-brand-cyan">1. Hadlock 1 (AC + FL)</p>
                  <p className="text-white mt-1 bg-slate-950 p-2.5 rounded text-center">
                    log10(EFW) = 1.304 + 0.05281(AC) + 0.1938(FL) - 0.004(AC)(FL)
                  </p>
                </div>
                
                <div className="border-t border-brand-border/20 pt-3">
                  <p className="font-bold text-brand-cyan">2. Hadlock 2 (BPD + AC + FL)</p>
                  <p className="text-white mt-1 bg-slate-950 p-2.5 rounded text-center">
                    log10(EFW) = 1.335 - 0.0034(AC)(FL) + 0.0316(BPD) + 0.0438(FL) + 0.162(AC)
                  </p>
                </div>

                <div className="border-t border-brand-border/20 pt-3">
                  <p className="font-bold text-brand-cyan">3. Hadlock 3 (HC + AC + FL)</p>
                  <p className="text-white mt-1 bg-slate-950 p-2.5 rounded text-center">
                    log10(EFW) = 1.326 - 0.00326(AC)(FL) + 0.0107(HC) + 0.0438(FL) + 0.158(AC)
                  </p>
                </div>
              </div>

              <h4 className="text-white font-bold text-base pt-2">Typical Pregnancy Biometrics Glossary</h4>
              <ul className="list-disc pl-5 space-y-1.5 text-xs text-gray-400">
                <li><strong>BPD (Biparietal Diameter):</strong> The diameter measured side-to-side across the fetal head skull bones.</li>
                <li><strong>HC (Head Circumference):</strong> The perimeter trace around the outer edge of the fetal head.</li>
                <li><strong>AC (Abdominal Circumference):</strong> The perimeter trace around the fetal abdomen (liver-level), highlighting soft tissue fat mass.</li>
                <li><strong>FL (Femur Length):</strong> The length measurement of the fetal thigh bone (femur), tracking skeletal elongation.</li>
              </ul>

              <h4 className="text-white font-bold text-base pt-2">Clinical Prenatal Precaution</h4>
              <div className="bg-rose-500/10 border border-rose-500/20 text-rose-300 rounded-xl p-4 flex gap-3 text-xs leading-normal">
                <AlertTriangle className="w-5.5 h-5.5 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">Always verify measurements with clinicians:</p>
                  <p className="mt-1 text-gray-400">
                    Online gestational charts and Hadlock biometrics formulas represent average population indices. Real fetal growth trends fluctuate depending on maternal health, genetics, twin profiles, and equipment tolerances. Never self-diagnose or make health adjustments based on online estimates.
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
