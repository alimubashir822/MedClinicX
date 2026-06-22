import { Metadata } from "next";
import Link from "next/link";
import { 
  AlertTriangle, 
  ChevronDown, 
  ArrowRight, 
  Sparkles, 
  Activity, 
  Calculator, 
  Shield,
  Heart
} from "lucide-react";
import IVFlowRateCalculatorClient from "./IVFlowRateCalculatorClient";

export const metadata: Metadata = {
  title: "IV Flow Rate Calculator - Calculate IV Infusion Rate, mL/hr & Drops Per Minute | Med Clinic X",
  description:
    "Use our free IV Flow Rate Calculator to calculate IV infusion rate in mL/hr and drops per minute (gtt/min). Learn how IV flow rates are calculated in clinical practice.",
  keywords: [
    "IV Flow Rate Calculator",
    "Calculate IV Infusion Rate",
    "mL/hr to drops per minute",
    "gtt/min calculator",
    "Microdrip macrodrip tubing calculation",
    "Nursing IV math calculations",
  ],
  alternates: {
    canonical: "https://medclinicx.com/calculator/iv-flow-rate-calculator/",
  },
  openGraph: {
    title: "IV Flow Rate Calculator - Calculate IV Infusion Rate, mL/hr & Drops Per Minute | Med Clinic X",
    description:
      "Use our free IV Flow Rate Calculator to calculate IV infusion rate in mL/hr and drops per minute (gtt/min). Learn how IV flow rates are calculated in clinical practice.",
    url: "https://medclinicx.com/calculator/iv-flow-rate-calculator/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "IV Flow Rate Calculator | Med Clinic X",
      },
    ],
  },
};

export default function IVFlowRateCalculatorPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://medclinicx.com" },
      { "@type": "ListItem", position: 2, name: "IV Flow Rate Calculator", item: "https://medclinicx.com/calculator/iv-flow-rate-calculator/" },
    ],
  };

  const calculatorSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "IV Flow Rate Calculator",
    description: "Use our free IV Flow Rate Calculator to calculate IV infusion rate in mL/hr and drops per minute (gtt/min).",
    url: "https://medclinicx.com/calculator/iv-flow-rate-calculator/",
    about: {
      "@type": "MedicalCondition",
      name: "Intravenous Fluid Rate & Tubing Calibration Math",
      possibleTreatment: [
        {
          "@type": "MedicalTherapy",
          name: "Clinical IV Flow Verification Support",
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
              <span className="text-[11px] font-bold text-brand-cyan uppercase tracking-widest font-sans">Clinical Education Tools</span>
            </div>
            
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-6 animate-fade-in animate-duration-500">
              IV Flow Rate Calculator: <span className="text-gradient-cyan-indigo">Calculate IV Infusion Rate Accurately</span>
            </h1>

            <div className="glass-panel border border-brand-border rounded-2xl p-8 max-w-4xl mx-auto text-left space-y-4 mb-16">
              <h2 className="text-xl font-bold text-brand-cyan font-display">
                Introduction: Understand IV Flow Rate Calculation
              </h2>
              <p className="text-gray-300 text-base leading-relaxed">
                IV flow rate calculation is an essential skill in clinical practice used to determine how fast intravenous fluids should be administered to a patient. It ensures accurate delivery of fluids, medications, and electrolytes in a controlled and safe manner.
              </p>
              <p className="text-gray-300 text-base leading-relaxed">
                Our <strong>IV Flow Rate Calculator</strong> helps estimate:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-gray-300 text-base">
                <li>IV infusion rate (mL/hr)</li>
                <li>Drops per minute (gtt/min)</li>
                <li>Total infusion time</li>
                <li>Fluid administration speed</li>
              </ul>
              
              <div className="py-2">
                <p className="text-gray-300 text-base leading-relaxed font-semibold text-white mb-2">
                  This tool is useful for:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-gray-300 text-base">
                  <li>Nursing students</li>
                  <li>Healthcare professionals</li>
                  <li>Clinical training programs</li>
                  <li>Medical education platforms</li>
                  <li>Healthcare technology solutions</li>
                </ul>
              </div>

              <div className="bg-rose-500/10 border border-rose-500/20 text-rose-300 rounded-xl p-4 flex gap-3 text-sm">
                <AlertTriangle className="w-5.5 h-5.5 text-rose-400 shrink-0 mt-0.5" />
                <p className="text-base leading-normal">
                  <strong>Important:</strong> This calculator is for educational and clinical learning support only. It does not replace professional medical judgment, hospital protocols, or physician instructions.
                </p>
              </div>
            </div>
          </div>

          {/* Calculator Section */}
          <section className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4" id="ivflow01">IV Flow Rate Calculator</h2>
              <p className="text-base text-gray-300 max-w-2xl mx-auto leading-relaxed mb-6">
                Calculate IV Infusion Flow Rate: Enter your IV details below to calculate the flow rate.
              </p>
              <div className="inline-flex flex-wrap justify-center gap-3 mb-8 bg-slate-900/60 p-4 rounded-xl border border-brand-border/40">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block w-full mb-1">Calculator Inputs:</span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Total IV fluid volume (mL)
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Total infusion time (hours or minutes)
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Drop factor (gtt/mL)
                </span>
              </div>
            </div>
            
            <div className="glass-panel border border-brand-border rounded-3xl p-6 md:p-8">
              <IVFlowRateCalculatorClient />
              <p className="text-base text-gray-500 text-center mt-6">
                Your IV flow rate results will appear here.
              </p>
            </div>
          </section>

          {/* Educational Content Sections */}
          <div className="border-t border-brand-border/40 pt-16 space-y-16 text-gray-300">
            
            {/* What is it & Why Important */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">What Is IV Flow Rate?</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  IV flow rate refers to the speed at which intravenous fluids are delivered into a patient’s bloodstream.
                </p>
                <p className="text-gray-300 text-base leading-relaxed">
                  It is typically measured in:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-300 text-base">
                  <li><strong>mL/hour (milliliters per hour)</strong></li>
                  <li><strong>gtt/min (drops per minute)</strong></li>
                </ul>
                <p className="text-gray-300 text-base leading-relaxed">
                  Correct flow rate ensures that patients receive the right amount of fluid over a specified period.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Why Is IV Flow Rate Important?</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  Accurate IV flow rate calculation is critical in healthcare settings.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-4 space-y-1.5">
                    <h4 className="text-white font-bold text-sm flex items-center gap-1.5">
                      <Shield className="w-4 h-4 text-brand-cyan" />
                      <span>Patient Safety</span>
                    </h4>
                    <p className="text-xs text-gray-400 leading-normal">
                      Prevents over-infusion or under-infusion of fluids and medications.
                    </p>
                  </div>
                  <div className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-4 space-y-1.5">
                    <h4 className="text-white font-bold text-sm flex items-center gap-1.5">
                      <Activity className="w-4 h-4 text-brand-cyan" />
                      <span>Medication Accuracy</span>
                    </h4>
                    <p className="text-xs text-gray-400 leading-normal">
                      Ensures correct delivery of IV medications.
                    </p>
                  </div>
                  <div className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-4 space-y-1.5">
                    <h4 className="text-white font-bold text-sm flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-brand-cyan" />
                      <span>Clinical Efficiency</span>
                    </h4>
                    <p className="text-xs text-gray-400 leading-normal">
                      Helps healthcare teams manage fluid therapy effectively.
                    </p>
                  </div>
                  <div className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-4 space-y-1.5">
                    <h4 className="text-white font-bold text-sm flex items-center gap-1.5">
                      <Calculator className="w-4 h-4 text-brand-cyan" />
                      <span>Emergency Care</span>
                    </h4>
                    <p className="text-xs text-gray-400 leading-normal">
                      Important in critical care and emergency medicine situations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* How Does It Work */}
            <div className="border-t border-brand-border/40 pt-16 space-y-6">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">How Does the IV Flow Rate Calculator Work?</h2>
              <p className="text-gray-300 text-base leading-relaxed">
                The calculator uses standard IV infusion formulas to determine flow rate.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass-panel border border-brand-border p-6 rounded-xl space-y-2 hover:border-brand-cyan/20 transition-all">
                  <h4 className="font-bold text-white text-base">1. mL per Hour Formula</h4>
                  <p className="font-mono text-brand-cyan text-sm bg-slate-950 p-2.5 rounded mt-2">
                    Flow Rate (mL/hr) = Total Volume ÷ Time (hours)
                  </p>
                  <p className="text-xs text-gray-400 mt-2">
                    This calculates how many milliliters should be delivered each hour.
                  </p>
                </div>
                
                <div className="glass-panel border border-brand-border p-6 rounded-xl space-y-2 hover:border-brand-cyan/20 transition-all">
                  <h4 className="font-bold text-white text-base">2. Drops Per Minute Formula</h4>
                  <p className="font-mono text-brand-cyan text-sm bg-slate-950 p-2.5 rounded mt-2">
                    gtt/min = (Total Volume × Drop Factor) ÷ Time (minutes)
                  </p>
                  <p className="text-xs text-gray-400 mt-2">
                    Where Volume is total fluid (mL), Drop Factor is tubing calibration (gtt/mL), and Time is duration in minutes.
                  </p>
                </div>
              </div>
            </div>

            {/* Results Table */}
            <div className="border-t border-brand-border/40 pt-16 space-y-6">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Understanding IV Flow Rate Results</h2>
              <div className="glass-panel border border-brand-border rounded-2xl overflow-hidden max-w-4xl mx-auto my-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-base">
                    <thead>
                      <tr className="bg-slate-900 border-b border-brand-border text-white font-bold">
                        <th className="p-4">Result Type</th>
                        <th className="p-4">Meaning</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-brand-border/40">
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 font-bold text-brand-cyan">mL/hr</td>
                        <td className="p-4 text-gray-300">Fluid delivered per hour</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 font-bold text-brand-cyan">gtt/min</td>
                        <td className="p-4 text-gray-300">Drops delivered per minute</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 font-bold text-brand-cyan">Infusion Time</td>
                        <td className="p-4 text-gray-300">Total duration of IV administration</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Common IV Drop Factors */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start border-t border-brand-border/40 pt-16">
              <div className="space-y-3">
                <h3 className="font-display font-bold text-xl text-white">Common IV Drop Factors</h3>
                <p className="text-gray-400 text-sm leading-normal">
                  Different IV sets use different calibration standards. Choosing the correct drop factor is essential for accurate calculation.
                </p>
              </div>

              <div className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-5 space-y-4 lg:col-span-2">
                <div className="grid grid-cols-2 gap-4 border-b border-brand-border/20 pb-3 font-bold text-sm text-white">
                  <span>IV Tubing Set Type</span>
                  <span>Drop Factor Calibration</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-xs text-gray-300">
                  <span>Macrodrip Tubing Set</span>
                  <span>10, 15, or 20 gtt/mL</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-xs text-gray-300">
                  <span>Microdrip Tubing Set</span>
                  <span>60 gtt/mL</span>
                </div>
              </div>
            </div>

            {/* Factors affecting flow rate */}
            <div className="border-t border-brand-border/40 pt-16 space-y-6">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Factors That Affect IV Flow Rate</h2>
              <p className="text-gray-300 text-base leading-relaxed">
                Several variables influence IV infusion speed:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {[
                  { title: "Fluid Volume", desc: "Higher volume requires longer infusion time or higher flow rate." },
                  { title: "Infusion Time", desc: "Shorter time requires faster flow rate." },
                  { title: "IV Tubing Type", desc: "Different tubing sets have different drop factors." },
                  { title: "Clinical Orders", desc: "Physician orders and hospital protocols determine final rate." },
                  { title: "Patient Condition", desc: "Patient stability may affect infusion decisions." }
                ].map((item, idx) => (
                  <div key={idx} className="glass-panel border border-brand-border/60 p-5 rounded-xl space-y-2 hover:border-brand-cyan/20 transition-all">
                    <h4 className="font-bold text-white text-base">{item.title}</h4>
                    <p className="text-xs text-gray-400 leading-normal">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Comparison */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start border-t border-brand-border/40 pt-16">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">IV Flow Rate Calculator vs Manual Calculation</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-5 space-y-2">
                    <p className="font-bold text-white uppercase tracking-wider text-[11px] text-brand-cyan">Manual Calculation</p>
                    <ul className="list-disc pl-4 space-y-1 text-xs text-gray-300">
                      <li>Develops clinical math skills</li>
                      <li>No digital tools required</li>
                      <li>Time-consuming</li>
                      <li>Higher risk of calculation errors</li>
                    </ul>
                  </div>
                  <div className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-5 space-y-2">
                    <p className="font-bold text-white uppercase tracking-wider text-[11px] text-brand-cyan">Digital IV Flow Rate Calculator</p>
                    <ul className="list-disc pl-4 space-y-1 text-xs text-gray-300">
                      <li>Fast and accurate</li>
                      <li>Reduces human error</li>
                      <li>Useful for learning and verification</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">How Healthcare Technology Improves IV Therapy</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  Modern healthcare systems use digital tools to improve IV therapy accuracy and safety. Technology supports:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
                  <li>Clinical calculators</li>
                  <li>Electronic medication systems</li>
                  <li>Patient monitoring tools</li>
                  <li>Smart infusion systems</li>
                  <li>Healthcare automation platforms</li>
                </ul>
                <p className="text-gray-300 text-base leading-relaxed mt-2">
                  These tools help improve efficiency and reduce clinical errors.
                </p>
              </div>
            </div>

            {/* FAQs Accordions */}
            <div className="border-t border-brand-border/40 pt-16 space-y-8">
              <div className="text-center max-w-3xl mx-auto mb-8">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Frequently Asked Questions</h2>
                <p className="text-base text-gray-400 mt-2">
                  Common questions about IV fluid management and tubing calibrations.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start font-sans">
                {/* Column 1 */}
                <div className="space-y-4">
                  {[
                    { q: "1. What is an IV flow rate calculator?", a: "It is a tool used to calculate IV infusion speed in mL/hr and drops per minute." },
                    { q: "2. What is IV flow rate?", a: "IV flow rate is the speed at which fluids are delivered into a patient’s bloodstream." },
                    { q: "3. How is IV flow rate calculated?", a: "It is calculated using fluid volume, infusion time, and drop factor." },
                    { q: "4. What does gtt/min mean?", a: "It means drops per minute in IV fluid administration." },
                    { q: "5. What does mL/hr mean?", a: "It represents milliliters of fluid delivered per hour." }
                  ].map((faq, idx) => (
                    <details 
                      key={idx} 
                      className="group border border-brand-border bg-slate-900/40 rounded-xl px-4 py-3.5 [&_summary::-webkit-details-marker]:hidden transition-all duration-300 hover:border-brand-cyan/20 animate-fade-in"
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
                    { q: "6. What is a drop factor?", a: "It is the number of drops that equal 1 milliliter in IV tubing." },
                    { q: "7. Why is IV flow rate important?", a: "It ensures safe and accurate fluid and medication delivery." },
                    { q: "8. Can this calculator replace nursing judgment?", a: "No. It is an educational tool only and does not replace clinical decisions." },
                    { q: "9. What is the difference between microdrip and macrodrip?", a: "Microdrip delivers 60 gtt/mL, while macrodrip varies between 10–20 gtt/mL." },
                    { q: "10. Is IV flow rate used in emergencies?", a: "Yes. It is commonly used in emergency and critical care settings." }
                  ].map((faq, idx) => (
                    <details 
                      key={idx} 
                      className="group border border-brand-border bg-slate-900/40 rounded-xl px-4 py-3.5 [&_summary::-webkit-details-marker]:hidden transition-all duration-300 hover:border-brand-cyan/20 animate-fade-in"
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

            {/* Related Tools */}
            <div className="border-t border-brand-border/40 pt-16 space-y-4">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Related Healthcare Tools</h2>
              <p className="text-base leading-relaxed">Explore more calculators:</p>
              
              <div className="grid grid-cols-2 sm:grid-cols-6 gap-4 mt-6">
                {[
                  { name: "IV Drip Rate Calculator", path: "/calculator/iv-drip-rate-calculator" },
                  { name: "Medication Dosage Calculator", path: "/calculator/medication-dosage-calculator" },
                  { name: "Pediatric Dosage Calculator", path: "/calculator/pediatric-dosage-calculator" },
                  { name: "CKD Calculator", path: "/calculator/ckd-calculator" },
                  { name: "QTc Calculator", path: "/calculator/qtc-calculator" },
                  { name: "A1C Calculator", path: "/calculator/a1c-calculator" }
                ].map((tool, index) => (
                  <Link 
                    key={index} 
                    href={tool.path}
                    className="glass-panel border border-brand-border hover:border-brand-cyan/45 p-6 rounded-xl text-center transition-all hover:scale-[1.02] flex flex-col items-center justify-center gap-3 group cursor-pointer"
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
