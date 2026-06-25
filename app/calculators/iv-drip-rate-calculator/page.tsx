import { Metadata } from "next";
import Link from "next/link";
import { 
  AlertTriangle, 
  ChevronDown, 
  ArrowRight, 
  Sparkles, 
  Activity, 
  Calculator, 
  Shield
} from "lucide-react";
import IVDripRateCalculatorClient from "./IVDripRateCalculatorClient";

export const metadata: Metadata = {
  title: "IV Drip Rate Calculator - Calculate IV Flow Rate, Drops Per Minute & Infusion Time | Med Clinic X",
  description:
    "Use our free IV Drip Rate Calculator to calculate IV flow rate, drops per minute (gtt/min), and infusion time. Learn how healthcare professionals calculate intravenous fluid administration rates.",
  keywords: [
    "IV Drip Rate Calculator",
    "IV Flow Rate",
    "Drops Per Minute",
    "gtt/min",
    "Infusion Time",
    "Intravenous fluids",
    "Nursing calculators",
  ],
  alternates: {
    canonical: "https://medclinicx.com/calculators/iv-drip-rate-calculator/",
  },
  openGraph: {
    title: "IV Drip Rate Calculator - Calculate IV Flow Rate, Drops Per Minute & Infusion Time | Med Clinic X",
    description:
      "Use our free IV Drip Rate Calculator to calculate IV flow rate, drops per minute (gtt/min), and infusion time. Learn how healthcare professionals calculate intravenous fluid administration rates.",
    url: "https://medclinicx.com/calculators/iv-drip-rate-calculator/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "IV Drip Rate Calculator | Med Clinic X",
      },
    ],
  },
};

export default function IVDripRateCalculatorPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://medclinicx.com" },
      { "@type": "ListItem", position: 2, name: "IV Drip Rate Calculator", item: "https://medclinicx.com/calculators/iv-drip-rate-calculator/" },
    ],
  };

  const calculatorSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "IV Drip Rate Calculator",
    description: "Estimate flow rate, drops per minute (gtt/min), and infusion time. Learn about drip calculations and micro/macrodrip tubing factor benchmarks.",
    url: "https://medclinicx.com/calculators/iv-drip-rate-calculator/",
    about: {
      "@type": "MedicalCondition",
      name: "Fluid & Drug Infusion Management",
      possibleTreatment: [
        {
          "@type": "MedicalTherapy",
          name: "Intravenous Fluid Administration",
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorSchema) }}
      />
      <div className="pt-24 md:pt-28 pb-16 min-h-screen bg-brand-bg relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-cyan/10 rounded-full blur-[120px] -z-10 animate-pulse-slow pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-brand-indigo/5 rounded-full blur-[140px] -z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-brand-emerald/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Main Hero Header */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-brand-cyan/10 border border-brand-cyan/20 rounded-full px-4 py-1.5 mb-6">
              <Activity className="w-3.5 h-3.5 text-brand-cyan animate-pulse" />
              <span className="text-[11px] font-bold text-brand-cyan uppercase tracking-widest font-sans">Infusion & Clinical Tools</span>
            </div>
            
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-6 animate-fade-in">
              IV Drip Rate Calculator: <span className="text-gradient-cyan-indigo">Calculate IV Flow Rate & Drops Per Minute</span>
            </h1>

            <div className="glass-panel border border-brand-border rounded-2xl p-8 max-w-4xl mx-auto text-left space-y-4 mb-16">
              <h2 className="text-xl font-bold text-brand-cyan font-display">
                Introduction: Understand IV Drip Rate Calculation
              </h2>
              <p className="text-gray-300 text-base leading-relaxed">
                Intravenous (IV) therapy is commonly used in healthcare settings to deliver fluids, medications, and nutrients directly into a patient’s bloodstream. Accurate IV drip rate calculation helps ensure that fluids are delivered at the intended rate.
              </p>
              <p className="text-gray-300 text-base leading-relaxed">
                Our <strong>IV Drip Rate Calculator</strong> helps estimate:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-2 text-base text-gray-300 font-medium">
                {[
                  "IV flow rate in mL/hour",
                  "Drops per minute (gtt/min)",
                  "Infusion duration",
                  "Total delivery time"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-300 text-base leading-relaxed">
                This calculator can help healthcare professionals, nursing students, and medical learners understand the relationship between:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-2 text-xs text-gray-300 font-medium">
                {[
                  "Total IV fluid volume",
                  "Infusion time",
                  "Drop factor of IV tubing"
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-900/50 border border-brand-border/30 rounded-lg p-3 text-center">
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-300 text-base leading-relaxed font-semibold text-white">
                It is useful for:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-2 text-base text-gray-300 font-medium">
                {[
                  "Nursing education",
                  "Clinical calculation practice",
                  "Healthcare training",
                  "Understanding IV administration concepts"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-brand-indigo rounded-full shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-rose-500/10 border border-rose-500/20 text-rose-300 rounded-xl p-4 flex gap-3 text-sm">
                <AlertTriangle className="w-5.5 h-5.5 text-rose-400 shrink-0 mt-0.5" />
                <p className="text-base leading-normal">
                  <strong>Important:</strong> This calculator is an educational and calculation support tool. It should not replace professional clinical judgment, hospital protocols, medication guidelines, or healthcare provider instructions.
                </p>
              </div>
            </div>
          </div>

          {/* Calculator Section */}
          <section className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">IV Drip Rate Calculator</h2>
              <h3 className="text-lg text-gray-300 font-medium mb-4">Calculate IV Flow Rate</h3>
              <p className="text-base text-gray-400 max-w-2xl mx-auto leading-relaxed mb-6">
                Enter your IV information below to calculate the infusion rate.
              </p>
              <div className="inline-flex flex-wrap justify-center gap-3 mb-8 bg-slate-900/60 p-4 rounded-xl border border-brand-border/40">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block w-full mb-1">Calculator Inputs:</span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Total IV fluid volume (mL)
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Infusion time
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Drop factor (gtt/mL)
                </span>
              </div>
            </div>
            
            <div className="glass-panel border border-brand-border rounded-3xl p-6 md:p-8">
              <IVDripRateCalculatorClient />
              <p className="text-base text-gray-500 text-center mt-6">
                Your calculated IV flow rate will appear here.
              </p>
            </div>
          </section>

          {/* Educational content sections below the calculator */}
          <div className="border-t border-brand-border/40 pt-16 space-y-16 text-gray-300">
            
            {/* Row 1: What is an IV Drip Rate Calculator & Why is it Important */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">What Is an IV Drip Rate Calculator?</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  An <strong>IV Drip Rate Calculator</strong> is a healthcare calculation tool used to estimate how quickly intravenous fluids should be delivered.
                </p>
                <p className="text-gray-300 text-base leading-relaxed">
                  IV drip calculations are commonly used in nursing and healthcare settings to determine the correct flow rate based on:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-base text-gray-400">
                  <li>Amount of fluid</li>
                  <li>Time period</li>
                  <li>IV tubing calibration</li>
                </ul>
                <p className="text-gray-300 text-base leading-relaxed">
                  The result is usually expressed as:
                </p>
                <div className="flex gap-4">
                  <span className="bg-slate-900 border border-brand-border px-3 py-1.5 rounded-lg text-xs font-bold text-brand-cyan">mL/hour (milliliters per hour)</span>
                  <span className="bg-slate-900 border border-brand-border px-3 py-1.5 rounded-lg text-xs font-bold text-brand-cyan">gtt/min (drops per minute)</span>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Why Is IV Drip Rate Calculation Important?</h2>
                <p className="text-gray-300 text-base leading-relaxed font-semibold">
                  Accurate IV calculations are important because IV therapy requires controlled fluid delivery. Correct calculations help support:
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-bold text-base flex items-center gap-2">
                      <span className="w-2 h-2 bg-brand-cyan rounded-full" /> Proper Fluid Administration
                    </h4>
                    <p className="text-sm text-gray-400 pl-4 mt-0.5">Healthcare teams use drip rates to manage how quickly fluids enter the body.</p>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base flex items-center gap-2">
                      <span className="w-2 h-2 bg-brand-cyan rounded-full" /> Medication Delivery
                    </h4>
                    <p className="text-sm text-gray-400 pl-4 mt-0.5">Some medications are administered through IV infusion and require accurate timing.</p>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base flex items-center gap-2">
                      <span className="w-2 h-2 bg-brand-cyan rounded-full" /> Patient Safety
                    </h4>
                    <p className="text-sm text-gray-400 pl-4 mt-0.5">Accurate calculations help reduce the risk of incorrect infusion rates.</p>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base flex items-center gap-2">
                      <span className="w-2 h-2 bg-brand-cyan rounded-full" /> Clinical Workflow Efficiency
                    </h4>
                    <p className="text-sm text-gray-400 pl-4 mt-0.5">Digital calculators can help healthcare professionals quickly verify calculations.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2: How Does the IV Drip Rate Calculator Work */}
            <div className="border-t border-brand-border/40 pt-16 space-y-6">
              <div className="text-center max-w-3xl mx-auto mb-10">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">How Does the IV Drip Rate Calculator Work?</h2>
                <p className="text-base text-gray-400 mt-2">
                  The calculator uses basic infusion formulas to determine parameters.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="glass-panel border border-brand-border p-6 rounded-2xl space-y-3 hover:border-brand-cyan/20 transition-all flex flex-col">
                  <h4 className="font-bold text-brand-cyan text-base uppercase tracking-wider text-xs">1. Flow Rate Formula (mL/hour)</h4>
                  <p className="text-sm text-gray-300 font-bold bg-slate-900 border border-brand-border p-3 rounded-lg font-mono">
                    Flow Rate = Total Volume (mL) ÷ Time (hours)
                  </p>
                  <p className="text-xs text-gray-400 leading-relaxed flex-grow pt-2">
                    <strong>Example:</strong> If a certain amount of fluid needs to be delivered over a specific period, the calculator estimates the hourly rate.
                  </p>
                </div>
                <div className="glass-panel border border-brand-border p-6 rounded-2xl space-y-3 hover:border-brand-cyan/20 transition-all flex flex-col">
                  <h4 className="font-bold text-brand-cyan text-base uppercase tracking-wider text-xs">2. Drops Per Minute Formula (gtt/min)</h4>
                  <p className="text-sm text-gray-300 font-bold bg-slate-900 border border-brand-border p-3 rounded-lg font-mono">
                    gtt/min = (Volume × Drop Factor) ÷ Time (minutes)
                  </p>
                  <div className="text-xs text-gray-400 leading-relaxed flex-grow pt-2 space-y-1">
                    <p>Where:</p>
                    <ul className="list-disc pl-4 space-y-0.5">
                      <li><strong>Volume</strong> = IV fluid amount in mL</li>
                      <li><strong>Drop Factor</strong> = tubing calibration (gtt/mL)</li>
                      <li><strong>Time</strong> = infusion duration in minutes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 3: Results Table & Tubing Factors */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start border-t border-brand-border/40 pt-16">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Understanding IV Drip Rate Results</h2>
                <div className="glass-panel border border-brand-border rounded-2xl overflow-hidden my-4">
                  <table className="w-full text-left border-collapse text-base">
                    <thead>
                      <tr className="bg-slate-900 border-b border-brand-border text-white font-bold">
                        <th className="p-4">Result Type</th>
                        <th className="p-4">Meaning</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-brand-border/40">
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 font-bold text-brand-cyan">mL/hour</td>
                        <td className="p-4 text-gray-300">Amount of fluid delivered each hour</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 font-bold text-brand-cyan">gtt/min</td>
                        <td className="p-4 text-gray-300">Number of IV drops delivered per minute</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 font-bold text-brand-cyan">Infusion Time</td>
                        <td className="p-4 text-gray-300">How long the IV solution will take to complete</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-500 italic">
                  The final rate depends on the entered values and equipment specifications.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Common IV Tubing Drop Factors</h2>
                <p className="text-gray-300 text-base leading-relaxed font-semibold">
                  IV tubing may have different drop factors:
                </p>
                <div className="glass-panel border border-brand-border rounded-2xl overflow-hidden my-4">
                  <table className="w-full text-left border-collapse text-base">
                    <thead>
                      <tr className="bg-slate-900 border-b border-brand-border text-white font-bold">
                        <th className="p-4">Tubing Type</th>
                        <th className="p-4">Common Drop Factor</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-brand-border/40">
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 font-bold text-brand-cyan">Macrodrip Set</td>
                        <td className="p-4 text-gray-300">10, 15, or 20 gtt/mL</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 font-bold text-brand-cyan">Microdrip Set</td>
                        <td className="p-4 text-gray-300">60 gtt/mL</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-500 italic">
                  The correct drop factor depends on the specific IV administration set being used.
                </p>
              </div>
            </div>

            {/* Row 4: Factors affecting calculations & Manual vs Digital */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start border-t border-brand-border/40 pt-16">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Factors That Affect IV Drip Rate Calculation</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  Several factors influence IV infusion calculations:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { name: "Fluid Volume", desc: "The total amount of IV solution affects the required rate." },
                    { name: "Infusion Duration", desc: "Shorter infusion times require faster flow rates." },
                    { name: "Tubing Drop Factor", desc: "Different tubing sets produce different drop calculations." },
                    { name: "Clinical Instructions", desc: "Healthcare protocols determine appropriate infusion requirements." },
                    { name: "Patient Factors", desc: "Healthcare professionals consider patient condition when managing IV therapy." }
                  ].map((f, idx) => (
                    <div key={idx} className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-4 space-y-1">
                      <p className="font-bold text-brand-cyan text-sm">{f.name}</p>
                      <p className="text-xs text-gray-400 leading-normal">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">IV Drip Rate Calculator vs Manual Calculation</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-5 space-y-2">
                    <p className="font-bold text-white uppercase tracking-wider text-[11px] text-brand-cyan">Manual IV Calculation</p>
                    <ul className="list-disc pl-4 space-y-1 text-xs text-gray-400">
                      <li><strong>Benefits:</strong> Important nursing skill, works without technology.</li>
                      <li><strong>Limitations:</strong> Takes more time, higher risk of arithmetic errors.</li>
                    </ul>
                  </div>
                  <div className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-5 space-y-2">
                    <p className="font-bold text-white uppercase tracking-wider text-[11px] text-brand-cyan">Digital IV Drip Rate Calculator</p>
                    <ul className="list-disc pl-4 space-y-1 text-xs text-gray-400">
                      <li><strong>Benefits:</strong> Faster calculation, reduces calculation mistakes, useful for learning/verification.</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed mt-4">
                  Digital tools support calculations but do not replace clinical decision-making.
                </p>
              </div>
            </div>

            {/* Row 5: How Technology Improves Clinical Workflows */}
            <div className="border-t border-brand-border/40 pt-16 space-y-4 text-center max-w-3xl mx-auto">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">How Healthcare Technology Improves Clinical Workflows</h2>
              <p className="text-gray-300 text-base leading-relaxed">
                Modern healthcare technology helps healthcare teams improve accuracy and efficiency. Digital healthcare solutions can support:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mt-6">
                {[
                  "Clinical calculators",
                  "Patient monitoring",
                  "Electronic health records",
                  "Medication management",
                  "Healthcare automation"
                ].map((item, idx) => (
                  <div key={idx} className="glass-panel border border-brand-border p-3.5 rounded-xl text-center text-xs font-bold text-brand-cyan">
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-400 mt-4">
                Healthcare organizations use technology to improve workflow and patient care experiences.
              </p>
            </div>

            {/* Row 6: FAQs Accordions */}
            <div className="border-t border-brand-border/40 pt-16 space-y-8">
              <div className="text-center max-w-3xl mx-auto mb-8">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Frequently Asked Questions About IV Drip Rate Calculator</h2>
                <p className="text-base text-gray-400 mt-2">
                  Find quick answers to common questions about intravenous fluid infusion rates.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start font-sans">
                {/* Column 1 */}
                <div className="space-y-4">
                  {[
                    {
                      q: "1. What is an IV drip rate calculator?",
                      a: "An IV drip rate calculator is a tool that calculates IV infusion rates based on fluid volume, time, and tubing drop factor."
                    },
                    {
                      q: "2. How is IV drip rate calculated?",
                      a: "IV drip rate is calculated using the fluid volume, infusion time, and IV tubing drop factor."
                    },
                    {
                      q: "3. What does gtt/min mean?",
                      a: "gtt/min means drops per minute and represents the number of IV drops delivered each minute."
                    },
                    {
                      q: "4. What does mL/hour mean in IV therapy?",
                      a: "mL/hour represents how many milliliters of fluid are delivered every hour."
                    },
                    {
                      q: "5. Why is IV drip rate calculation important?",
                      a: "It helps ensure IV fluids and medications are delivered at the intended rate."
                    }
                  ].map((faq, idx) => (
                    <details 
                      key={idx} 
                      className="group border border-brand-border bg-slate-900/40 rounded-xl px-4 py-3.5 [&_summary::-webkit-details-marker]:hidden transition-all duration-300 hover:border-brand-cyan/20"
                    >
                      <summary className="flex justify-between items-center font-bold text-base text-white cursor-pointer select-none">
                        <span>{faq.q}</span>
                        <span className="transition duration-300 group-open:-rotate-180 text-brand-cyan shrink-0 ml-2">
                          <ChevronDown className="w-4 h-4" />
                        </span>
                      </summary>
                      <div className="mt-3 text-base text-gray-400 leading-relaxed border-t border-brand-border/40 pt-3">
                        {faq.a}
                      </div>
                    </details>
                  ))}
                </div>

                {/* Column 2 */}
                <div className="space-y-4">
                  {[
                    {
                      q: "6. What is a drop factor in IV calculations?",
                      a: "A drop factor shows how many drops equal one milliliter of fluid for specific IV tubing."
                    },
                    {
                      q: "7. What is a microdrip IV set?",
                      a: "A microdrip set is commonly calibrated at 60 drops per milliliter and is often used when precise fluid control is needed."
                    },
                    {
                      q: "8. Can an IV drip rate calculator replace a nurse?",
                      a: "No. It is a calculation support tool and does not replace professional healthcare judgment."
                    },
                    {
                      q: "9. What information is needed for IV drip calculation?",
                      a: "You typically need fluid volume, infusion time, and IV tubing drop factor."
                    },
                    {
                      q: "10. Is an IV drip calculator useful for nursing students?",
                      a: "Yes. It can help students practice IV calculation concepts and improve understanding."
                    }
                  ].map((faq, idx) => (
                    <details 
                      key={idx} 
                      className="group border border-brand-border bg-slate-900/40 rounded-xl px-4 py-3.5 [&_summary::-webkit-details-marker]:hidden transition-all duration-300 hover:border-brand-cyan/20"
                    >
                      <summary className="flex justify-between items-center font-bold text-base text-white cursor-pointer select-none">
                        <span>{faq.q}</span>
                        <span className="transition duration-300 group-open:-rotate-180 text-brand-cyan shrink-0 ml-2">
                          <ChevronDown className="w-4 h-4" />
                        </span>
                      </summary>
                      <div className="mt-3 text-base text-gray-400 leading-relaxed border-t border-brand-border/40 pt-3">
                        {faq.a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </div>

            {/* Row 7: Related Tools */}
            <div className="border-t border-brand-border/40 pt-16 space-y-4">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Related Healthcare Tools</h2>
              <p className="text-base leading-relaxed">
                Explore more healthcare calculators:
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-6 gap-4 mt-6">
                {[
                  { name: "Anion Gap Calculator", path: "/calculators/anion-gap-calculator" },
                  { name: "CKD Calculator", path: "/calculators/ckd-calculator" },
                  { name: "QTc Calculator", path: "/calculators/qtc-calculator" },
                  { name: "A1C Calculator", path: "/calculators/a1c-calculator" },
                  { name: "Glasgow Coma Scale Calculator", path: "/calculators/glasgow-coma-scale-calculator" },
                  { name: "BMI Calculator", path: "/solutions" }
                ].map((tool, index) => (
                  <Link 
                    key={index} 
                    href={tool.path}
                    className="glass-panel border border-brand-border hover:border-brand-cyan/40 p-6 rounded-xl text-center transition-all hover:scale-[1.02] flex flex-col items-center justify-center gap-3 group cursor-pointer"
                  >
                    <Calculator className="w-6 h-6 text-brand-cyan group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-bold text-white group-hover:text-brand-cyan transition-colors leading-tight">{tool.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="pt-12">
              <div className="relative rounded-3xl overflow-hidden p-8 md:p-16 text-center border border-brand-border bg-gradient-cyber my-8">
                <div className="absolute -top-24 -left-24 w-72 h-72 bg-brand-cyan/10 rounded-full blur-[90px] -z-10" />
                <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-brand-indigo/10 rounded-full blur-[90px] -z-10" />
                
                <h2 className="font-display font-bold text-3xl md:text-5xl text-white leading-tight">
                  Build Better Healthcare Experiences With Med Clinic X
                </h2>
                <p className="mt-4 text-base text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Med Clinic X helps healthcare organizations build modern digital healthcare solutions that improve clinical workflows, patient engagement, and healthcare operations.
                </p>

                <div className="my-8 max-w-4xl mx-auto">
                  <p className="font-bold text-white text-base mb-4">Our healthcare technology services include:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {[
                      { name: "Healthcare Software Development", path: "/services/healthcare-saas-development" },
                      { name: "AI Healthcare Solutions", path: "/services/ai-healthcare-solutions" },
                      { name: "Patient Portal Development", path: "/services/patient-portal-development" },
                      { name: "Telemedicine Solutions", path: "/services/telemedicine-solutions" },
                      { name: "Healthcare Automation", path: "/services/healthcare-automation" },
                      { name: "Healthcare Mobile Apps", path: "/services/mobile-healthcare-apps" }
                    ].map((service, idx) => (
                      <Link 
                        key={idx}
                        href={service.path}
                        className="flex items-center gap-2 bg-brand-bg/60 border border-brand-border/85 hover:border-brand-cyan/45 p-3.5 rounded-xl text-left transition-all hover:scale-[1.01] hover:bg-brand-bg/85 group"
                      >
                        <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full shrink-0 group-hover:scale-125 transition-transform" />
                        <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                <p className="text-base text-gray-300 max-w-2xl mx-auto leading-relaxed mb-6">
                  Looking to build a healthcare technology solution for your organization? Connect with Med Clinic X today.
                </p>
                
                <div className="flex flex-wrap gap-2.5 justify-center text-xs font-semibold text-gray-400">
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-brand-bg border border-brand-border rounded-full">
                    <Shield className="w-3.5 h-3.5 text-brand-emerald" /> HIPAA Compliant
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-brand-bg border border-brand-border rounded-full">
                    <Activity className="w-3.5 h-3.5 text-brand-cyan" /> Patient Centered
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-brand-bg border border-brand-border rounded-full">
                    <Sparkles className="w-3.5 h-3.5 text-brand-indigo" /> AI-Driven
                  </span>
                </div>

                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-cyan to-brand-indigo hover:opacity-95 text-white font-bold text-sm px-6 py-4 rounded-xl transition-all shadow-lg shadow-brand-cyan/20 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>Connect with Med Clinic X Today</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
