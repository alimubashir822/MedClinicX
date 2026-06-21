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
import A1cCalculatorClient from "./A1cCalculatorClient";

export const metadata: Metadata = {
  title: "A1C Calculator - Estimate HbA1c Level from Average Blood Glucose | Med Clinic X",
  description:
    "Use our free A1C Calculator to estimate your HbA1c level from average blood glucose. Learn about A1C ranges, diabetes monitoring, and blood sugar management.",
  keywords: [
    "A1C calculator",
    "HbA1c calculator",
    "calculate A1C from glucose",
    "estimated average glucose calculator",
    "blood sugar A1C conversion",
    "diabetic average glucose tracker",
    "clinical diabetes calculators",
    "American Diabetes Association equations",
  ],
  alternates: {
    canonical: "https://medclinicx.com/a1c-calculator",
  },
  openGraph: {
    title: "A1C Calculator - Estimate HbA1c Level from Average Blood Glucose | Med Clinic X",
    description:
      "Use our free A1C Calculator to estimate your HbA1c level from average blood glucose. Learn about A1C ranges, diabetes monitoring, and blood sugar management.",
    url: "https://medclinicx.com/a1c-calculator",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Med Clinic X Clinical HbA1c Calculator",
      },
    ],
  },
};

export default function A1cCalculatorPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://medclinicx.com" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://medclinicx.com/a1c-calculator" },
    ],
  };

  const calculatorSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Clinical HbA1c & eAG Calculator",
    description: "ADA-aligned converter for HbA1c percentage and Estimated Average Glucose (eAG).",
    url: "https://medclinicx.com/a1c-calculator",
    about: {
      "@type": "MedicalCondition",
      name: "Diabetes",
      possibleTreatment: [
        {
          "@type": "MedicalTherapy",
          name: "Glucose Monitoring",
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
              <span className="text-[11px] font-bold text-brand-cyan uppercase tracking-widest">Clinical Calculators</span>
            </div>
            
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-6">
              A1C Calculator: <span className="text-gradient-cyan-indigo">Estimate Your HbA1c Level</span> from Average Blood Sugar
            </h1>

            <div className="glass-panel border border-brand-border rounded-2xl p-8 max-w-4xl mx-auto text-left space-y-4 mb-16">
              <h2 className="text-xl font-bold text-brand-cyan font-display">
                Calculate Your Estimated A1C Level
              </h2>
              <p className="text-gray-300 text-base leading-relaxed">
                Our free <strong>A1C Calculator</strong> helps you estimate your Hemoglobin A1C (HbA1c) percentage based on your average blood glucose level. A1C is an important measurement used to understand your average blood sugar levels over the previous 2–3 months.
              </p>
              <p className="text-gray-300 text-base leading-relaxed">
                Unlike a regular blood glucose test that shows your sugar level at one specific moment, an A1C result provides a longer-term view of your blood sugar management.
              </p>
              <p className="text-gray-300 text-base leading-relaxed">
                Use this calculator to quickly estimate your A1C level and better understand your blood glucose trends.
              </p>
              <div className="bg-rose-500/10 border border-rose-500/20 text-rose-300 rounded-xl p-4 flex gap-3 text-xs">
                <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <p className="leading-normal">
                  <strong>Important:</strong> This calculator provides an estimate only and should not replace medical testing or advice from a qualified healthcare professional.
                </p>
              </div>
            </div>
          </div>

          {/* Calculator Section */}
          <section className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">A1C Calculator Tool</h2>
              <p className="text-base text-gray-400">
                Enter your average blood glucose level to calculate estimated average glucose and HbA1c:
              </p>
            </div>
            
            <div className="glass-panel border border-brand-border rounded-3xl p-6 md:p-8">
              <A1cCalculatorClient />
              <p className="text-[10px] text-gray-500 text-center mt-4">
                Your estimated A1C result will appear here dynamically as values are adjusted.
              </p>
            </div>
          </section>

          {/* Educational SEO content below the calculator */}
          <div className="border-t border-brand-border/40 pt-16 space-y-16 text-gray-300">
            {/* Row 1: What is A1c & How it works */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">What Is an A1C Test?</h2>
                <p className="text-base leading-relaxed">
                  An A1C test, also known as a <strong>Hemoglobin A1C test</strong> or <strong>HbA1c test</strong>, measures the percentage of hemoglobin in your blood that has glucose attached to it.
                </p>
                <p className="text-base leading-relaxed">
                  Hemoglobin is a protein inside red blood cells that carries oxygen throughout your body. When glucose enters your bloodstream, some of it attaches to hemoglobin. Since red blood cells typically live for around 90–120 days, the A1C test provides an estimate of your average blood sugar levels over the past few months.
                </p>
                <div className="bg-slate-900/40 border border-brand-border/50 rounded-xl p-5 space-y-3">
                  <p className="text-xs font-bold text-white uppercase tracking-wider">Healthcare providers commonly use A1C testing for:</p>
                  <ul className="list-none pl-0 space-y-2">
                    <li className="flex items-center gap-2 text-xs">
                      <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full shrink-0" />
                      <span>Monitoring diabetes management</span>
                    </li>
                    <li className="flex items-center gap-2 text-xs">
                      <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full shrink-0" />
                      <span>Evaluating blood sugar control</span>
                    </li>
                    <li className="flex items-center gap-2 text-xs">
                      <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full shrink-0" />
                      <span>Identifying prediabetes risk</span>
                    </li>
                    <li className="flex items-center gap-2 text-xs">
                      <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full shrink-0" />
                      <span>Supporting treatment decisions</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">How Does an A1C Calculator Work?</h2>
                <p className="text-base leading-relaxed">
                  An A1C calculator uses a conversion formula to estimate your HbA1c percentage from your average blood glucose level.
                </p>
                <div className="glass-panel border border-brand-border/40 p-5 rounded-xl space-y-2">
                  <p className="text-xs font-bold text-brand-cyan uppercase tracking-widest">The calculation works by analyzing the relationship between:</p>
                  <div className="flex items-center justify-center gap-2 text-white font-bold text-sm bg-slate-950/60 p-3 rounded-lg border border-brand-border/60">
                    <span>Average Blood Glucose Level</span>
                    <ArrowRight className="w-4 h-4 text-brand-cyan animate-pulse" />
                    <span>Estimated A1C Percentage</span>
                  </div>
                </div>
                <p className="text-base leading-relaxed">
                  For example:
                </p>
                <ul className="list-none pl-0 space-y-2">
                  <li className="flex items-start gap-2 text-base">
                    <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full mt-2 shrink-0" />
                    <span>Lower average blood glucose levels usually result in a lower A1C percentage.</span>
                  </li>
                  <li className="flex items-start gap-2 text-base">
                    <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full mt-2 shrink-0" />
                    <span>Higher average blood glucose levels usually result in a higher A1C percentage.</span>
                  </li>
                </ul>
                <p className="text-base leading-relaxed">
                  This tool makes it easier to understand how daily blood sugar levels may relate to your long-term glucose control.
                </p>
              </div>
            </div>

            {/* Row 2: Understanding results & Normal levels */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start border-t border-brand-border/40 pt-16">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Understanding A1C Results</h2>
                <p className="text-base leading-relaxed">
                  A1C results are commonly categorized into different ranges based on standards defined by the American Diabetes Association (ADA):
                </p>
                <div className="overflow-hidden rounded-xl border border-brand-border bg-slate-950/60 my-6">
                  <table className="w-full text-left text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-brand-border bg-white/5">
                        <th className="px-4 py-3 text-xs font-bold text-white uppercase tracking-wider">A1C Level</th>
                        <th className="px-4 py-3 text-xs font-bold text-white uppercase tracking-wider">General Interpretation</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-brand-border/60">
                        <td className="px-4 py-3 text-brand-emerald font-bold">Below 5.7%</td>
                        <td className="px-4 py-3 text-gray-300">Normal range</td>
                      </tr>
                      <tr className="border-b border-brand-border/60">
                        <td className="px-4 py-3 text-amber-400 font-bold">5.7% – 6.4%</td>
                        <td className="px-4 py-3 text-gray-300">Prediabetes range</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-rose-400 font-bold">6.5% or higher</td>
                        <td className="px-4 py-3 text-gray-300">Diabetes range</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-base leading-relaxed">
                  Your personal A1C target may depend on factors such as age, health condition, medications, and recommendations from your healthcare provider.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">What Is a Normal A1C Level?</h2>
                <p className="text-base leading-relaxed">
                  A normal A1C level is generally considered below 5.7%.
                </p>
                <p className="text-base leading-relaxed">
                  However, maintaining a healthy blood sugar level depends on many factors, including:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-2">
                  {[
                    "Diet and nutrition",
                    "Physical activity",
                    "Genetics",
                    "Overall health",
                    "Medical history"
                  ].map((factor) => (
                    <div key={factor} className="flex items-center gap-2 bg-slate-900/50 border border-brand-border/30 rounded-lg p-3">
                      <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full shrink-0" />
                      <span className="text-sm text-gray-300">{factor}</span>
                    </div>
                  ))}
                </div>
                <p className="text-base leading-relaxed pt-2">
                  A healthcare professional can help you understand what A1C target is appropriate for your situation.
                </p>
              </div>
            </div>

            {/* Row 3: Why Is A1C Monitoring Important? */}
            <div className="border-t border-brand-border/40 pt-16 space-y-6">
              <div className="text-center max-w-3xl mx-auto mb-10">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Why Is A1C Monitoring Important?</h2>
                <p className="text-base leading-relaxed text-gray-400 mt-2">
                  Regular A1C monitoring can provide valuable information about long-term blood sugar patterns.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="glass-panel border border-brand-border/50 p-6 rounded-xl space-y-3 hover:border-brand-cyan/20 transition-all hover:scale-[1.02]">
                  <h3 className="font-bold text-white text-base">Understand Blood Sugar Trends</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    A1C provides a broader picture compared with individual daily glucose readings.
                  </p>
                </div>
                <div className="glass-panel border border-brand-border/50 p-6 rounded-xl space-y-3 hover:border-brand-cyan/20 transition-all hover:scale-[1.02]">
                  <h3 className="font-bold text-white text-base">Support Diabetes Management</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    People managing diabetes often use A1C results to evaluate whether their current plan is working.
                  </p>
                </div>
                <div className="glass-panel border border-brand-border/50 p-6 rounded-xl space-y-3 hover:border-brand-cyan/20 transition-all hover:scale-[1.02]">
                  <h3 className="font-bold text-white text-base">Identify Potential Risks</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    A1C testing can help identify elevated blood sugar levels that may require further evaluation.
                  </p>
                </div>
                <div className="glass-panel border border-brand-border/50 p-6 rounded-xl space-y-3 hover:border-brand-cyan/20 transition-all hover:scale-[1.02]">
                  <h3 className="font-bold text-white text-base">Improve Healthcare Decisions</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Healthcare providers can use A1C results along with other health information to guide care.
                  </p>
                </div>
              </div>
            </div>

            {/* Row 4: A1C vs Blood Glucose test */}
            <div className="border-t border-brand-border/40 pt-16 space-y-6">
              <div className="text-center max-w-3xl mx-auto mb-10">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">A1C Calculator vs Blood Glucose Test</h2>
                <p className="text-base leading-relaxed text-gray-400 mt-2">
                  Many people confuse A1C testing with regular glucose testing, but they measure different metrics:
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-slate-900/50 border border-brand-border/40 rounded-2xl p-6 md:p-8 space-y-4 hover:border-brand-cyan/20 transition-all">
                  <h3 className="font-bold text-white text-lg border-b border-brand-border/40 pb-3 flex items-center gap-2">
                    <Activity className="w-5 h-5 text-brand-cyan" />
                    <span>Blood Glucose Test</span>
                  </h3>
                  <p className="text-base text-gray-300 leading-relaxed">
                    Measures your blood sugar level at a specific moment.
                  </p>
                  <div className="text-sm space-y-2 bg-slate-950/40 p-4 rounded-xl border border-brand-border/30">
                    <p className="font-bold text-white uppercase tracking-wider text-[10px] text-gray-500">Examples:</p>
                    <p className="flex items-center gap-2">&bull; Before meals (fasting)</p>
                    <p className="flex items-center gap-2">&bull; After meals (post-prandial)</p>
                    <p className="flex items-center gap-2">&bull; During symptomatic spikes or drops</p>
                  </div>
                </div>

                <div className="bg-slate-900/50 border border-brand-border/40 rounded-2xl p-6 md:p-8 space-y-4 hover:border-brand-indigo/20 transition-all">
                  <h3 className="font-bold text-white text-lg border-b border-brand-border/40 pb-3 flex items-center gap-2">
                    <Calculator className="w-5 h-5 text-brand-indigo" />
                    <span>A1C Test</span>
                  </h3>
                  <p className="text-base text-gray-300 leading-relaxed">
                    Estimates your average blood sugar over several months.
                  </p>
                  <div className="text-sm space-y-2 bg-slate-950/40 p-4 rounded-xl border border-brand-border/30">
                    <p className="font-bold text-white uppercase tracking-wider text-[10px] text-gray-500">Provides:</p>
                    <p className="flex items-center gap-2">&bull; Long-term blood sugar information</p>
                    <p className="flex items-center gap-2">&bull; A broader view of glucose management</p>
                    <p className="flex items-center gap-2">&bull; Useful parameters for diabetes monitoring</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 5: Factors affecting & How to improve */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start border-t border-brand-border/40 pt-16">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Factors That Can Affect A1C Levels</h2>
                <p className="text-base leading-relaxed">
                  Several factors can influence A1C results, including:
                </p>
                <div className="flex flex-wrap gap-2.5 my-4">
                  {[
                    "Food choices",
                    "Exercise habits",
                    "Stress levels",
                    "Sleep quality",
                    "Medications",
                    "Illness",
                    "Changes in weight"
                  ].map((factor) => (
                    <span key={factor} className="text-xs font-bold px-3.5 py-2 rounded-xl bg-white/5 border border-brand-border/40 text-gray-300 hover:border-brand-cyan/35 transition-all">
                      {factor}
                    </span>
                  ))}
                </div>
                <p className="text-base leading-relaxed">
                  Because every person&apos;s health situation is different, A1C results should always be interpreted with professional medical guidance when needed.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">How Can You Improve A1C Levels?</h2>
                <p className="text-base leading-relaxed">
                  Improving A1C levels often involves healthy lifestyle habits and following a healthcare provider&apos;s recommendations.
                </p>
                <p className="text-base leading-relaxed">
                  Common approaches include:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
                  {[
                    "Maintaining a balanced diet",
                    "Staying physically active",
                    "Monitoring blood glucose regularly",
                    "Taking medications as prescribed",
                    "Managing stress",
                    "Getting enough sleep"
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5 text-base text-gray-300">
                      <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full mt-2.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-base leading-relaxed pt-2">
                  Small consistent changes can support better long-term health outcomes.
                </p>
              </div>
            </div>

            {/* Row 6: FAQs (2-column layout) */}
            <div className="border-t border-brand-border/40 pt-16 space-y-8">
              <div className="text-center max-w-3xl mx-auto mb-8">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Frequently Asked Questions About A1C Calculator</h2>
                <p className="text-base text-gray-400 mt-2">
                  Find answers to common questions about HbA1c levels, conversions, and diagnostic criteria.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start font-sans">
                {/* Column 1 */}
                <div className="space-y-4">
                  {[
                    {
                      q: "1. What is an A1C calculator?",
                      a: "An A1C calculator is an online tool that estimates your HbA1c percentage based on your average blood glucose level. It helps users understand the relationship between daily blood sugar levels and long-term glucose control."
                    },
                    {
                      q: "2. How do I calculate my A1C level?",
                      a: "You can estimate your A1C level by entering your average blood glucose value into an A1C calculator. The tool converts your average glucose reading into an estimated HbA1c percentage."
                    },
                    {
                      q: "3. What A1C level indicates diabetes?",
                      a: "An A1C level of 6.5% or higher is commonly used as one indicator for diabetes diagnosis. However, diagnosis should be confirmed by a healthcare professional."
                    },
                    {
                      q: "4. What A1C level is considered normal?",
                      a: "Generally, an A1C level below 5.7% is considered within the normal range. Individual targets may vary depending on personal health factors."
                    },
                    {
                      q: "5. Can an A1C calculator replace a blood test?",
                      a: "No. An online A1C calculator provides an estimate only. A laboratory A1C test is required for an official measurement."
                    }
                  ].map((faq, idx) => (
                    <details 
                      key={idx} 
                      className="group border border-brand-border bg-slate-900/40 rounded-xl px-4 py-3.5 [&_summary::-webkit-details-marker]:hidden transition-all duration-300 hover:border-brand-cyan/20"
                    >
                      <summary className="flex justify-between items-center font-bold text-sm text-white cursor-pointer select-none">
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
                      q: "6. How accurate is an A1C calculator?",
                      a: "An A1C calculator can provide a useful estimate, but results may vary because individual health factors can affect actual A1C levels."
                    },
                    {
                      q: "7. How often should A1C levels be checked?",
                      a: "The recommended testing frequency depends on your health condition, diabetes status, and healthcare provider's guidance."
                    },
                    {
                      q: "8. Does high blood sugar always mean a high A1C?",
                      a: "Not always. A1C reflects average blood sugar over time, so short-term changes may not immediately appear in your A1C result."
                    },
                    {
                      q: "9. Can lifestyle changes improve A1C levels?",
                      a: "Yes. Healthy eating habits, regular activity, proper medication management, and lifestyle improvements may help support better A1C levels."
                    },
                    {
                      q: "10. What is the difference between A1C and HbA1c?",
                      a: "A1C and HbA1c refer to the same test. Both terms describe the measurement of glycated hemoglobin in the blood."
                    }
                  ].map((faq, idx) => (
                    <details 
                      key={idx} 
                      className="group border border-brand-border bg-slate-900/40 rounded-xl px-4 py-3.5 [&_summary::-webkit-details-marker]:hidden transition-all duration-300 hover:border-brand-cyan/20"
                    >
                      <summary className="flex justify-between items-center font-bold text-sm text-white cursor-pointer select-none">
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

            {/* Row 7: Explore More Healthcare Tools */}
            <div className="border-t border-brand-border/40 pt-16 space-y-4">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Explore More Healthcare Tools</h2>
              <p className="text-base leading-relaxed">
                Try our other free healthcare calculators:
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mt-6">
                {[
                  { name: "BMI Calculator", path: "/solutions" },
                  { name: "Diabetes Risk", path: "/solutions" },
                  { name: "Blood Pressure", path: "/solutions" },
                  { name: "Heart Health", path: "/solutions" },
                  { name: "Calorie Calculator", path: "/solutions" }
                ].map((tool, index) => (
                  <Link 
                    key={index} 
                    href={tool.path}
                    className="glass-panel border border-brand-border hover:border-brand-cyan/40 p-6 rounded-xl text-center transition-all hover:scale-[1.02] flex flex-col items-center justify-center gap-3 group cursor-pointer"
                  >
                    <Calculator className="w-6 h-6 text-brand-cyan group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-bold text-white group-hover:text-brand-cyan transition-colors">{tool.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="pt-12">
              <div className="relative rounded-3xl overflow-hidden p-8 md:p-16 text-center border border-brand-border bg-gradient-cyber my-8 relative">
                <div className="absolute -top-24 -left-24 w-72 h-72 bg-brand-cyan/10 rounded-full blur-[90px] -z-10" />
                <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-brand-indigo/10 rounded-full blur-[90px] -z-10" />
                
                <h2 className="font-display font-bold text-3xl md:text-5xl text-white leading-tight">Build Better Healthcare Experiences with Med Clinic X</h2>
                <p className="text-base text-gray-300 max-w-2xl mx-auto leading-relaxed mt-4">
                  Med Clinic X helps healthcare organizations create modern digital healthcare solutions, including AI healthcare solutions, custom patient portals, telemedicine platforms, clinical workflow automation, and custom healthcare software.
                </p>
                <div className="flex flex-wrap gap-2.5 justify-center mt-6 text-xs font-semibold text-gray-400">
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
                
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-cyan to-brand-indigo hover:opacity-95 text-white font-bold text-sm px-6 py-4 rounded-xl transition-all shadow-lg shadow-brand-cyan/20 mt-8 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Talk with Med Clinic X about your healthcare technology needs</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
