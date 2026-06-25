import { calculatorData } from "../calculatorData";
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
import HbA1cCalculatorClient from "./HbA1cCalculatorClient";

export const metadata: Metadata = {
  title: "HbA1c Calculator - Estimate Your Blood Sugar Control & Average Glucose Level | Med Clinic X",
  description:
    "Use our free HbA1c Calculator to convert A1C to estimated average glucose (eAG) and understand long-term blood sugar control. Learn what HbA1c means for diabetes management.",
  keywords: [
    "HbA1c Calculator",
    "Convert HbA1c to eAG",
    "Average glucose level",
    "A1C converter",
    "Estimated average glucose",
    "Glycemic staging index",
  ],
  alternates: {
    canonical: "https://medclinicx.com/calculators/hba1c-calculator/",
  },
  openGraph: {
    title: "HbA1c Calculator - Estimate Your Blood Sugar Control & Average Glucose Level | Med Clinic X",
    description:
      "Use our free HbA1c Calculator to convert A1C to estimated average glucose (eAG) and understand long-term blood sugar control. Learn what HbA1c means for diabetes management.",
    url: "https://medclinicx.com/calculators/hba1c-calculator/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HbA1c Calculator | Med Clinic X",
      },
    ],
  },
};

export default function HbA1cCalculatorPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://medclinicx.com" },
      { "@type": "ListItem", position: 2, name: "HbA1c Calculator", item: "https://medclinicx.com/calculators/hba1c-calculator/" },
    ],
  };

  const calculatorSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "HbA1c Calculator",
    description: "Use our free HbA1c Calculator to convert A1C to estimated average glucose (eAG) and understand long-term blood sugar control.",
    url: "https://medclinicx.com/calculators/hba1c-calculator/",
    about: {
      "@type": "MedicalCondition",
      name: "Diabetes & Glycemic Management",
      possibleTreatment: [
        {
          "@type": "MedicalTherapy",
          name: "Insulin & Lifestyle Optimization",
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
              <span className="text-[11px] font-bold text-brand-cyan uppercase tracking-widest font-sans">Metabolic & Lab Tools</span>
            </div>
            
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-6 animate-fade-in animate-duration-500">
              HbA1c Calculator: <span className="text-gradient-cyan-indigo">Convert A1C to Estimated Average Glucose (eAG)</span>
            </h1>

            <div className="glass-panel border border-brand-border rounded-2xl p-8 max-w-4xl mx-auto text-left space-y-4 mb-16">
              <h2 className="text-xl font-bold text-brand-cyan font-display">
                Introduction: Understand Your HbA1c Result
              </h2>
              <p className="text-gray-300 text-base leading-relaxed">
                HbA1c (also called A1C) is an important blood test used to measure average blood sugar levels over the past 2–3 months. It plays a key role in diagnosing and managing diabetes.
              </p>
              <p className="text-gray-300 text-base leading-relaxed">
                Our <strong>HbA1c Calculator</strong> helps convert your HbA1c percentage into estimated average glucose (eAG), making it easier to understand long-term blood sugar control.
              </p>
              
              <div className="py-2">
                <p className="text-gray-300 text-base leading-relaxed font-semibold text-white mb-2">
                  This tool can help you:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-gray-300 text-base">
                  <li>Convert HbA1c (%) into average glucose levels</li>
                  <li>Understand diabetes control trends</li>
                  <li>Track long-term blood sugar patterns</li>
                  <li>Improve awareness of metabolic health</li>
                </ul>
              </div>

              <div className="py-2">
                <p className="text-gray-300 text-base leading-relaxed font-semibold text-white mb-2">
                  It may be useful for:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-gray-300 text-base">
                  <li>People with diabetes</li>
                  <li>Healthcare professionals</li>
                  <li>Medical students</li>
                  <li>Diet and nutrition planning</li>
                </ul>
              </div>

              <div className="bg-rose-500/10 border border-rose-500/20 text-rose-300 rounded-xl p-4 flex gap-3 text-sm">
                <AlertTriangle className="w-5.5 h-5.5 text-rose-400 shrink-0 mt-0.5" />
                <p className="text-base leading-normal">
                  <strong>Important:</strong> This calculator provides an estimate only and should not replace professional medical advice, diagnosis, or treatment.
                </p>
              </div>
            </div>
          </div>

          {/* Calculator Section */}
          <section className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">HbA1c Calculator</h2>
              <p className="text-base text-gray-300 max-w-2xl mx-auto leading-relaxed mb-6">
                Convert HbA1c to Estimated Average Glucose (eAG): Enter your HbA1c value below to calculate your estimated average glucose.
              </p>
              <div className="inline-flex flex-wrap justify-center gap-3 mb-8 bg-slate-900/60 p-4 rounded-xl border border-brand-border/40">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block w-full mb-1">Calculator Inputs:</span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> HbA1c (%)
                </span>
              </div>
            </div>
            
            <div className="glass-panel border border-brand-border rounded-3xl p-6 md:p-8">
              <HbA1cCalculatorClient />
              <p className="text-base text-gray-500 text-center mt-6">
                Your estimated average glucose result will appear here.
              </p>
            </div>
          </section>

          {/* Educational Content Sections */}
          <div className="border-t border-brand-border/40 pt-16 space-y-16 text-gray-300">
            
            {/* Row 1: What is HbA1c & Why Important */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">What Is HbA1c?</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  HbA1c (Hemoglobin A1c) is a blood test that shows the average blood sugar level over the past 8–12 weeks.
                </p>
                <p className="text-gray-300 text-base leading-relaxed">
                  It works by measuring how much glucose is attached to hemoglobin in red blood cells. Unlike daily glucose tests, HbA1c gives a long-term view of blood sugar control.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Why Is HbA1c Important?</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  HbA1c is widely used in diabetes care because it helps:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-4 space-y-1.5">
                    <h4 className="text-white font-bold text-sm flex items-center gap-1.5">
                      <Activity className="w-4 h-4 text-brand-cyan" />
                      <span>Monitor Long-Term Sugar</span>
                    </h4>
                    <p className="text-xs text-gray-400 leading-normal">
                      It reflects average glucose levels over several weeks.
                    </p>
                  </div>
                  <div className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-4 space-y-1.5">
                    <h4 className="text-white font-bold text-sm flex items-center gap-1.5">
                      <Shield className="w-4 h-4 text-brand-cyan" />
                      <span>Diagnose Diabetes</span>
                    </h4>
                    <p className="text-xs text-gray-400 leading-normal">
                      Healthcare providers use HbA1c as part of diagnostic protocols.
                    </p>
                  </div>
                  <div className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-4 space-y-1.5">
                    <h4 className="text-white font-bold text-sm flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-brand-cyan" />
                      <span>Evaluate Treatment</span>
                    </h4>
                    <p className="text-xs text-gray-400 leading-normal">
                      It helps doctors evaluate how well treatment plans are working.
                    </p>
                  </div>
                  <div className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-4 space-y-1.5">
                    <h4 className="text-white font-bold text-sm flex items-center gap-1.5">
                      <Heart className="w-4 h-4 text-brand-cyan" />
                      <span>Reduce Complications</span>
                    </h4>
                    <p className="text-xs text-gray-400 leading-normal">
                      Better HbA1c control is linked to lower risk of long-term complications.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2: How it works & Formula */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start border-t border-brand-border/40 pt-16">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">How Does the HbA1c Calculator Work?</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  The calculator converts HbA1c percentage into estimated average glucose (eAG).
                </p>
                <div className="space-y-2">
                  <p className="font-bold text-white text-sm">Key Concepts:</p>
                  <ul className="list-disc pl-5 text-gray-400 text-sm space-y-1">
                    <li><strong>HbA1c (%)</strong> = long-term blood sugar marker</li>
                    <li><strong>eAG</strong> = estimated daily average glucose level</li>
                  </ul>
                  <p className="text-gray-300 text-base mt-2">
                    This helps translate medical lab percentages into daily glucose values patients are familiar with.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Conversion Formula</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  A commonly used ADA formula is:
                </p>
                <div className="bg-slate-900 border border-brand-border/40 rounded-xl p-4 font-mono text-sm text-brand-cyan text-center">
                  eAG (mg/dL) = (28.7 × HbA1c) − 46.7
                </div>
                <p className="text-xs text-gray-400 leading-normal italic mt-2">
                  For example, an A1c level of 7.0% calculates to: (28.7 × 7.0) − 46.7 = 154 mg/dL estimated average glucose.
                </p>
              </div>
            </div>

            {/* Row 3: Interpretation Table */}
            <div className="border-t border-brand-border/40 pt-16 space-y-6">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Understanding Your HbA1c Results</h2>
              <div className="glass-panel border border-brand-border rounded-2xl overflow-hidden max-w-4xl mx-auto my-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-base">
                    <thead>
                      <tr className="bg-slate-900 border-b border-brand-border text-white font-bold">
                        <th className="p-4">HbA1c Level</th>
                        <th className="p-4">General Meaning</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-brand-border/40">
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 font-bold text-brand-emerald">Below 5.7%</td>
                        <td className="p-4 text-gray-300">Normal range (non-diabetic baseline)</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 font-bold text-amber-400">5.7% – 6.4%</td>
                        <td className="p-4 text-gray-300">Prediabetes range (increased metabolic risks)</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 font-bold text-rose-400">6.5% or higher</td>
                        <td className="p-4 text-gray-300">Diabetes range (diagnostic criteria threshold)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-gray-400 text-sm text-center">
                Interpretation may vary depending on individual health conditions and medical guidelines.
              </p>
            </div>

            {/* Row 4: What is eAG & Factors */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start border-t border-brand-border/40 pt-16">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">What Is Estimated Average Glucose (eAG)?</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  Estimated Average Glucose (eAG) converts HbA1c into a daily glucose average in:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-gray-400 text-sm">
                  <li><strong>mg/dL</strong> (common in the US)</li>
                  <li><strong>mmol/L</strong> (used in many international clinical frameworks)</li>
                </ul>
                <p className="text-gray-300 text-base">
                  This converts long-term lab percentages into daily numbers that match home glucose monitors.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Factors That Affect HbA1c Levels</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  Several factors can influence HbA1c results:
                </p>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-white font-bold text-sm flex items-center gap-2">Daily Blood Sugar Control</h4>
                    <p className="text-xs text-gray-400 mt-0.5">Average glucose patterns directly establish the rate of hemoglobin glycation.</p>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm flex items-center gap-2">Diet & Nutrition</h4>
                    <p className="text-xs text-gray-400 mt-0.5">Carbohydrate amounts and glycemic index choices affect daily glucose excursions.</p>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm flex items-center gap-2">Physical Activity</h4>
                    <p className="text-xs text-gray-400 mt-0.5">Exercise stimulates glucose uptake in skeletal muscle, increasing insulin sensitivity.</p>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm flex items-center gap-2">Red Blood Cell Conditions</h4>
                    <p className="text-xs text-gray-400 mt-0.5">Anemia, sickle cell traits, or pregnancy can alter RBC lifespans and affect test accuracy.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 5: Testing Comparisons & HbA1c Management */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start border-t border-brand-border/40 pt-16">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">HbA1c vs Daily Blood Sugar Testing</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-5 space-y-2">
                    <p className="font-bold text-white uppercase tracking-wider text-[11px] text-brand-cyan">HbA1c Test</p>
                    <ul className="list-disc pl-4 space-y-1 text-xs text-gray-300">
                      <li>Shows long-term average</li>
                      <li>Covers past 2–3 months</li>
                      <li>Used in diagnosis & staging</li>
                    </ul>
                  </div>
                  <div className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-5 space-y-2">
                    <p className="font-bold text-white uppercase tracking-wider text-[11px] text-brand-cyan">Daily Glucose Test</p>
                    <ul className="list-disc pl-4 space-y-1 text-xs text-gray-300">
                      <li>Shows real-time levels</li>
                      <li>Helps immediate adjustments</li>
                      <li>Used for daily checks</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">How to Improve HbA1c Levels</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  Healthy lifestyle choices may help maintain better glucose control:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full shrink-0" />
                    <span>Whole foods, carb-controlled diet</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full shrink-0" />
                    <span>Regular physical exercise</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full shrink-0" />
                    <span>Careful medication adherence</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full shrink-0" />
                    <span>Body weight management</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 6: Calculator vs Labs & Technology */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start border-t border-brand-border/40 pt-16">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">HbA1c Calculator vs Laboratory Testing</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-5 space-y-2">
                    <p className="font-bold text-white uppercase tracking-wider text-[11px] text-brand-cyan">A1C Calculator</p>
                    <ul className="list-disc pl-4 space-y-1 text-xs text-gray-300">
                      <li>Fast & easy conversions</li>
                      <li>Increases user A1C awareness</li>
                      <li>Does not measure actual blood</li>
                    </ul>
                  </div>
                  <div className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-5 space-y-2">
                    <p className="font-bold text-white uppercase tracking-wider text-[11px] text-brand-cyan">Laboratory Test</p>
                    <ul className="list-disc pl-4 space-y-1 text-xs text-gray-300">
                      <li>Clinically accurate measure</li>
                      <li>Used for official diagnosis</li>
                      <li>Requires standard blood draw</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">How Technology Supports Diabetes Care</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  Modern healthcare platforms are improving diabetes management through digital health tracking tools, patient monitoring systems, telemedicine consultations, automated reminders, and AI-based health insights.
                </p>
                <p className="text-gray-300 text-base leading-relaxed">
                  Healthcare technology helps patients and providers stay connected and informed.
                </p>
              </div>
            </div>

            {/* Row 7: FAQs Accordions */}
            <div className="border-t border-brand-border/40 pt-16 space-y-8">
              <div className="text-center max-w-3xl mx-auto mb-8">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Frequently Asked Questions</h2>
                <p className="text-base text-gray-400 mt-2">
                  Common questions about estimating average glucose from A1C values.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start font-sans">
                {/* Column 1 */}
                <div className="space-y-4">
                  {[
                    { q: "1. What is an HbA1c calculator?", a: "An HbA1c calculator converts HbA1c percentage into estimated average glucose (eAG) levels." },
                    { q: "2. What does HbA1c measure?", a: "It measures average blood sugar levels over the past 2–3 months." },
                    { q: "3. What is a normal HbA1c level?", a: "Below 5.7% is generally considered normal." },
                    { q: "4. What is prediabetes HbA1c range?", a: "5.7% to 6.4% is considered prediabetes." },
                    { q: "5. What HbA1c level indicates diabetes?", a: "6.5% or higher is commonly used as a diagnostic threshold." }
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
                    { q: "6. Can HbA1c change quickly?", a: "No. It reflects long-term glucose levels, not daily fluctuations." },
                    { q: "7. What is eAG?", a: "eAG stands for estimated average glucose." },
                    { q: "8. Can diet improve HbA1c?", a: "Healthy eating patterns may help improve blood sugar control over time." },
                    { q: "9. Is HbA1c enough to monitor diabetes?", a: "It is important, but it is usually combined with daily glucose testing." },
                    { q: "10. Is HbA1c calculator medically accurate?", a: "It is mathematically accurate for conversion but does not replace laboratory testing or medical advice." }
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

            {/* Row 8: Related Tools */}
            <div className="border-t border-brand-border/40 pt-16 space-y-4">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Related Healthcare Calculators</h2>
              <p className="text-base leading-relaxed text-gray-400">
                Explore more helpful clinical and health calculators:
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-6">
                {calculatorData
                  .filter((c) => c.id !== "hba1c-calculator")
                  .sort((a, b) => {
                    const currentCat = calculatorData.find((c) => c.id === "hba1c-calculator")?.category;
                    if (a.category === currentCat && b.category !== currentCat) return -1;
                    if (a.category !== currentCat && b.category === currentCat) return 1;
                    return 0;
                  })
                  .slice(0, 6)
                  .map((tool, index) => (
                    <Link 
                      key={index} 
                      href={tool.href}
                      className="glass-panel border border-brand-border hover:border-brand-cyan/40 p-6 rounded-xl text-center transition-all hover:scale-[1.02] flex flex-col items-center justify-center gap-3 group cursor-pointer"
                    >
                      <Calculator className="w-6 h-6 text-brand-cyan group-hover:scale-110 transition-transform" />
                      <span className="text-xs font-bold text-white group-hover:text-brand-cyan transition-colors leading-tight">{tool.title}</span>
                    </Link>
                  ))}
              </div>
            </div>

            {/* Med Clinic X CTA Section */}
            <div className="pt-12">
              <div className="relative rounded-3xl overflow-hidden p-8 md:p-16 text-center border border-brand-border bg-gradient-cyber my-8">
                <div className="absolute -top-24 -left-24 w-72 h-72 bg-brand-cyan/10 rounded-full blur-[90px] -z-10" />
                <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-brand-indigo/10 rounded-full blur-[90px] -z-10" />
                
                <h2 className="font-display font-bold text-3xl md:text-5xl text-white leading-tight">
                  Build Better Healthcare Experiences With Med Clinic X
                </h2>
                <p className="mt-4 text-base text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Med Clinic X helps healthcare organizations build modern digital healthcare solutions that improve patient engagement, chronic disease management, and clinical workflows.
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
