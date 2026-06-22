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
import InfusionCalculatorClient from "./InfusionCalculatorClient";

export const metadata: Metadata = {
  title: "Infusion Calculator - Calculate IV Infusion Rate, Volume & Flow Speed (mL/hr & gtt/min) | Med Clinic X",
  description:
    "Use our free Infusion Calculator to calculate IV infusion rate, flow speed, and drip rate (gtt/min). Learn how infusion rates are determined in clinical practice and healthcare settings.",
  keywords: [
    "Infusion Calculator",
    "Calculate IV Infusion Rate",
    "gtt/min drip rate calculator",
    "mL/hr to drops per minute",
    "IV infusion flow speed",
    "Nursing math drug dose calculation",
  ],
  alternates: {
    canonical: "https://medclinicx.com/calculator/infusion-calculator/",
  },
  openGraph: {
    title: "Infusion Calculator - Calculate IV Infusion Rate, Volume & Flow Speed (mL/hr & gtt/min) | Med Clinic X",
    description:
      "Use our free Infusion Calculator to calculate IV infusion rate, flow speed, and drip rate (gtt/min). Learn how infusion rates are determined in clinical practice and healthcare settings.",
    url: "https://medclinicx.com/calculator/infusion-calculator/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Infusion Calculator | Med Clinic X",
      },
    ],
  },
};

export default function InfusionCalculatorPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://medclinicx.com" },
      { "@type": "ListItem", position: 2, name: "Infusion Calculator", item: "https://medclinicx.com/calculator/infusion-calculator/" },
    ],
  };

  const calculatorSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Infusion Calculator",
    description: "Use our free Infusion Calculator to calculate IV infusion rate, flow speed, and drip rate (gtt/min).",
    url: "https://medclinicx.com/calculator/infusion-calculator/",
    about: {
      "@type": "MedicalCondition",
      name: "Intravenous Infusion Rate & Dosage Calculations",
      possibleTreatment: [
        {
          "@type": "MedicalTherapy",
          name: "Clinical IV Infusion Support & Dosing Verification",
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
              Infusion Calculator: <span className="text-gradient-cyan-indigo">Calculate IV Infusion Rate & Flow Speed</span>
            </h1>

            <div className="glass-panel border border-brand-border rounded-2xl p-8 max-w-4xl mx-auto text-left space-y-4 mb-16">
              <h2 className="text-xl font-bold text-brand-cyan font-display">
                Introduction: Understand Infusion Rate Calculation
              </h2>
              <p className="text-gray-300 text-base leading-relaxed">
                Infusion therapy is widely used in healthcare to deliver fluids, medications, and nutrients directly into a patient’s bloodstream. Accurate infusion rate calculation ensures safe and effective administration based on clinical instructions.
              </p>
              <p className="text-gray-300 text-base leading-relaxed">
                Our <strong>Infusion Calculator</strong> helps estimate:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-gray-300 text-base">
                <li>IV infusion rate (mL/hour)</li>
                <li>Drops per minute (gtt/min)</li>
                <li>Total infusion time</li>
                <li>Fluid delivery speed</li>
              </ul>
              
              <div className="py-2">
                <p className="text-gray-300 text-base leading-relaxed font-semibold text-white mb-2">
                  This tool can help:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-gray-300 text-base">
                  <li>Nursing students</li>
                  <li>Healthcare professionals</li>
                  <li>Clinical educators</li>
                  <li>Medical training programs</li>
                  <li>Healthcare technology platforms</li>
                </ul>
              </div>

              <div className="bg-rose-500/10 border border-rose-500/20 text-rose-300 rounded-xl p-4 flex gap-3 text-sm">
                <AlertTriangle className="w-5.5 h-5.5 text-rose-400 shrink-0 mt-0.5" />
                <p className="text-base leading-normal">
                  <strong>Important:</strong> This calculator is for educational purposes only. It should not replace clinical judgment, hospital protocols, or physician-prescribed infusion orders.
                </p>
              </div>
            </div>
          </div>

          {/* Calculator Section */}
          <section className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4" id="infcalc01">Infusion Calculator</h2>
              <p className="text-base text-gray-300 max-w-2xl mx-auto leading-relaxed mb-6">
                Enter your infusion details below to calculate flow rate.
              </p>
              <div className="inline-flex flex-wrap justify-center gap-3 mb-8 bg-slate-900/60 p-4 rounded-xl border border-brand-border/40">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block w-full mb-1">Calculator Inputs:</span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Total fluid volume (mL)
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Infusion time (hours or minutes)
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Drop factor (gtt/mL)
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Optional medication concentration
                </span>
              </div>
            </div>
            
            <div className="glass-panel border border-brand-border rounded-3xl p-6 md:p-8">
              <InfusionCalculatorClient />
            </div>
          </section>

          {/* Educational Content Sections */}
          <div className="border-t border-brand-border/40 pt-16 space-y-16 text-gray-300">
            
            {/* What is it & Why Important */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">What Is an Infusion Calculator?</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  An <strong>Infusion Calculator</strong> is a healthcare tool used to estimate how quickly IV fluids or medications should be administered.
                </p>
                <p className="text-gray-300 text-base leading-relaxed">
                  It helps convert clinical instructions into measurable rates such as:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-300 text-base">
                  <li>mL/hour</li>
                  <li>gtt/min</li>
                </ul>
                <p className="text-gray-300 text-base leading-relaxed">
                  Infusion calculations are commonly used in hospitals, emergency care, and clinical training.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Why Is Infusion Rate Important?</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  Correct infusion rates are essential in healthcare for safe treatment delivery.
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
                      <span>Accurate Medication Delivery</span>
                    </h4>
                    <p className="text-xs text-gray-400 leading-normal">
                      Ensures medications are delivered at the correct therapeutic rate.
                    </p>
                  </div>
                  <div className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-4 space-y-1.5">
                    <h4 className="text-white font-bold text-sm flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-brand-cyan" />
                      <span>Clinical Efficiency</span>
                    </h4>
                    <p className="text-xs text-gray-400 leading-normal">
                      Helps healthcare teams manage IV therapy efficiently.
                    </p>
                  </div>
                  <div className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-4 space-y-1.5">
                    <h4 className="text-white font-bold text-sm flex items-center gap-1.5">
                      <Calculator className="w-4 h-4 text-brand-cyan" />
                      <span>Emergency Situations</span>
                    </h4>
                    <p className="text-xs text-gray-400 leading-normal">
                      Critical in ICU and emergency medicine settings.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* How Does It Work */}
            <div className="border-t border-brand-border/40 pt-16 space-y-6">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">How Does the Infusion Calculator Work?</h2>
              <p className="text-gray-300 text-base leading-relaxed">
                The calculator uses standard IV infusion formulas based on clinical parameters.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass-panel border border-brand-border p-6 rounded-xl space-y-2 hover:border-brand-cyan/20 transition-all">
                  <h4 className="font-bold text-white text-base">1. mL/hour Formula</h4>
                  <p className="font-mono text-brand-cyan text-sm bg-slate-950 p-2.5 rounded mt-2">
                    Infusion Rate = Total Volume ÷ Time (hours)
                  </p>
                  <p className="text-xs text-gray-400 mt-2">
                    This determines how many milliliters should be infused per hour.
                  </p>
                </div>
                
                <div className="glass-panel border border-brand-border p-6 rounded-xl space-y-2 hover:border-brand-cyan/20 transition-all">
                  <h4 className="font-bold text-white text-base">2. Drops Per Minute Formula</h4>
                  <p className="font-mono text-brand-cyan text-sm bg-slate-950 p-2.5 rounded mt-2">
                    gtt/min = (Total Volume × Drop Factor) ÷ Time (minutes)
                  </p>
                  <div className="text-xs text-gray-400 mt-2 space-y-0.5">
                    <p>Where:</p>
                    <p>• Volume = IV fluid amount</p>
                    <p>• Drop factor = tubing calibration</p>
                    <p>• Time = infusion duration</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Table */}
            <div className="border-t border-brand-border/40 pt-16 space-y-6">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Understanding Infusion Results</h2>
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
                        <td className="p-4 font-bold text-brand-cyan">mL/hour</td>
                        <td className="p-4 text-gray-300">Fluid delivery speed per hour</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 font-bold text-brand-cyan">gtt/min</td>
                        <td className="p-4 text-gray-300">Drops delivered per minute</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 font-bold text-brand-cyan">Total Time</td>
                        <td className="p-4 text-gray-300">Duration of infusion</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Common IV Drop Factors */}
            <div className="border-t border-brand-border/40 pt-16 space-y-6">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Common IV Drop Factors</h2>
              <p className="text-gray-300 text-base leading-relaxed">
                Different IV sets have different calibration standards. Correct selection is essential for accurate infusion calculations.
              </p>
              <div className="glass-panel border border-brand-border rounded-2xl overflow-hidden max-w-4xl mx-auto my-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-base">
                    <thead>
                      <tr className="bg-slate-900 border-b border-brand-border text-white font-bold">
                        <th className="p-4">IV Set Type</th>
                        <th className="p-4">Drop Factor</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-brand-border/40">
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 font-bold text-brand-cyan">Macrodrip Set</td>
                        <td className="p-4 text-gray-300">10–20 gtt/mL</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 font-bold text-brand-cyan">Microdrip Set</td>
                        <td className="p-4 text-gray-300">60 gtt/mL</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Factors affecting flow rate */}
            <div className="border-t border-brand-border/40 pt-16 space-y-6">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Factors That Affect Infusion Rate</h2>
              <p className="text-gray-300 text-base leading-relaxed">
                Several variables influence infusion calculations:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {[
                  { title: "Fluid Volume", desc: "Higher volume requires longer infusion time or faster flow rate." },
                  { title: "Time Duration", desc: "Short infusion times require higher flow rates." },
                  { title: "Tubing Type", desc: "Different IV sets affect drip rate calculations." },
                  { title: "Clinical Instructions", desc: "Physician orders define the required infusion rate." },
                  { title: "Patient Condition", desc: "Patient stability may affect infusion planning." }
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
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Infusion Calculator vs Manual Calculation</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-5 space-y-2">
                    <p className="font-bold text-white uppercase tracking-wider text-[11px] text-brand-cyan">Manual Calculation</p>
                    <ul className="list-disc pl-4 space-y-1 text-xs text-gray-350">
                      <li>Builds clinical knowledge</li>
                      <li>No digital dependency</li>
                      <li>Time-consuming</li>
                      <li>Risk of calculation errors</li>
                    </ul>
                  </div>
                  <div className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-5 space-y-2">
                    <p className="font-bold text-white uppercase tracking-wider text-[11px] text-brand-cyan">Digital Infusion Calculator</p>
                    <ul className="list-disc pl-4 space-y-1 text-xs text-gray-350">
                      <li>Fast and accurate</li>
                      <li>Reduces human error</li>
                      <li>Useful for training and verification</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">How Healthcare Technology Improves Infusion Therapy</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  Modern healthcare systems use digital tools to improve infusion accuracy and safety. Technology supports:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-305 text-sm">
                  <li>Smart infusion pumps</li>
                  <li>Clinical decision support tools</li>
                  <li>Electronic medication systems</li>
                  <li>Patient monitoring systems</li>
                  <li>Healthcare automation platforms</li>
                </ul>
                <p className="text-gray-300 text-base leading-relaxed mt-2">
                  These systems help reduce errors and improve patient outcomes.
                </p>
              </div>
            </div>

            {/* FAQs Accordions */}
            <div className="border-t border-brand-border/40 pt-16 space-y-8">
              <div className="text-center max-w-3xl mx-auto mb-8">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Frequently Asked Questions</h2>
                <p className="text-base text-gray-400 mt-2">
                  Common questions about IV fluid management and infusion calibrations.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start font-sans">
                {/* Column 1 */}
                <div className="space-y-4">
                  {[
                    { q: "1. What is an infusion calculator?", a: "An infusion calculator is a tool used to calculate IV fluid or medication infusion rates." },
                    { q: "2. What is infusion rate?", a: "Infusion rate is the speed at which fluids are delivered into a patient’s bloodstream." },
                    { q: "3. How is infusion rate calculated?", a: "It is calculated using fluid volume, time, and IV drop factor." },
                    { q: "4. What does mL/hour mean?", a: "It indicates how many milliliters of fluid are delivered per hour." },
                    { q: "5. What does gtt/min mean?", a: "It means drops per minute in IV administration." }
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
                    { q: "6. Why is infusion rate important?", a: "It ensures safe and accurate delivery of fluids and medications." },
                    { q: "7. What is a drop factor?", a: "It is the number of drops that make up 1 mL in IV tubing." },
                    { q: "8. Can infusion calculators be used in hospitals?", a: "They are often used for education and verification, but clinical decisions must follow hospital protocols." },
                    { q: "9. What is the difference between IV drip rate and infusion rate?", a: "They are closely related; drip rate is drops per minute, while infusion rate is typically mL/hour." },
                    { q: "10. Is an infusion calculator a medical device?", a: "No. It is an educational and supportive calculation tool." }
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
                  { name: "IV Flow Rate Calculator", path: "/calculator/iv-flow-rate-calculator" },
                  { name: "IV Drip Rate Calculator", path: "/calculator/iv-drip-rate-calculator" },
                  { name: "Medication Dosage Calculator", path: "/calculator/medication-dosage-calculator" },
                  { name: "Pediatric Dosage Calculator", path: "/calculator/pediatric-dosage-calculator" },
                  { name: "CKD Calculator", path: "/calculator/ckd-calculator" },
                  { name: "QTc Calculator", path: "/calculator/qtc-calculator" }
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
