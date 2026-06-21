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
import LeanQtcCalculatorClient from "./LeanQtcCalculatorClient";

export const metadata: Metadata = {
  title: "QTc Calculator - Calculate Corrected QT Interval (QTc) for Heart Health | Med Clinic X",
  description:
    "Use our free QTc Calculator to estimate your corrected QT interval from your QT interval and heart rate. Learn about QTc values, heart rhythm health, and why QT interval monitoring matters.",
  keywords: [
    "QTc Calculator",
    "Corrected QT Interval",
    "QT interval calculation",
    "Bazett formula",
    "Fridericia formula",
    "cardiac ECG metrics",
  ],
  alternates: {
    canonical: "https://medclinicx.com/calculator/",
  },
  openGraph: {
    title: "QTc Calculator - Calculate Corrected QT Interval (QTc) for Heart Health | Med Clinic X",
    description:
      "Use our free QTc Calculator to estimate your corrected QT interval from your QT interval and heart rate. Learn about QTc values, heart rhythm health, and why QT interval monitoring matters.",
    url: "https://medclinicx.com/calculator/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "QTc Calculator | Med Clinic X",
      },
    ],
  },
};

export default function QtcCalculatorPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://medclinicx.com" },
      { "@type": "ListItem", position: 2, name: "QTc Calculator", item: "https://medclinicx.com/calculator/" },
    ],
  };

  const calculatorSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "QTc Calculator",
    description: "Use our free QTc Calculator to estimate your corrected QT interval from your QT interval and heart rate.",
    url: "https://medclinicx.com/calculator/",
    about: {
      "@type": "MedicalCondition",
      name: "Cardiac Arrythmias & QT Repolarization",
      possibleTreatment: [
        {
          "@type": "MedicalTherapy",
          name: "ECG Diagnostics & Cardiac Rhythm Management",
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
        {/* Background Glowing Effects */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-cyan/10 rounded-full blur-[120px] -z-10 animate-pulse-slow pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-brand-indigo/5 rounded-full blur-[140px] -z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-brand-emerald/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Main Hero Header */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-brand-cyan/10 border border-brand-cyan/20 rounded-full px-4 py-1.5 mb-6">
              <Activity className="w-3.5 h-3.5 text-brand-cyan animate-pulse" />
              <span className="text-[11px] font-bold text-brand-cyan uppercase tracking-widest font-sans">Cardiovascular Wellness Tools</span>
            </div>
            
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-6">
              QTc Calculator: <span className="text-gradient-cyan-indigo">Calculate Your Corrected QT Interval</span>
            </h1>

            <div className="glass-panel border border-brand-border rounded-2xl p-8 max-w-4xl mx-auto text-left space-y-4 mb-16">
              <h2 className="text-xl font-bold text-brand-cyan font-display">
                Introduction: Understand Your QTc Interval
              </h2>
              <p className="text-gray-300 text-base leading-relaxed">
                The heart’s electrical system controls how your heart beats. One important measurement used in cardiac assessments is the <strong>QT interval</strong>, which represents the time it takes for the heart’s electrical system to complete a specific cycle.
              </p>
              <p className="text-gray-300 text-base leading-relaxed">
                Because the QT interval changes depending on heart rate, healthcare professionals often use a corrected measurement called <strong>QTc (Corrected QT Interval)</strong>.
              </p>
              <p className="text-gray-300 text-base leading-relaxed">
                Our <strong>QTc Calculator</strong> helps estimate the corrected QT interval by using your QT interval value and heart rate. This tool can help users better understand this important cardiac measurement and learn why QTc monitoring is considered during heart health evaluations.
              </p>
              <p className="text-gray-300 text-base leading-relaxed font-semibold text-white">
                This calculator may be useful for:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-2 text-base text-gray-300">
                {[
                  "Healthcare professionals reviewing ECG-related information",
                  "Medical students learning cardiac measurements",
                  "Patients who want to better understand QTc concepts",
                  "Individuals researching heart rhythm information"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-rose-500/10 border border-rose-500/20 text-rose-300 rounded-xl p-4 flex gap-3 text-sm">
                <AlertTriangle className="w-5.5 h-5.5 text-rose-400 shrink-0 mt-0.5" />
                <p className="text-base leading-normal">
                  <strong>Important:</strong> This calculator provides an estimate and should not replace professional medical advice, ECG interpretation, or evaluation by a qualified healthcare provider.
                </p>
              </div>
            </div>
          </div>

          {/* Calculator Section */}
          <section className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">Calculate Your Corrected QT Interval</h2>
              <p className="text-base text-gray-300 max-w-2xl mx-auto leading-relaxed mb-6">
                Enter your information below to estimate your QTc value.
              </p>
              <div className="inline-flex flex-wrap justify-center gap-3 mb-8 bg-slate-900/60 p-4 rounded-xl border border-brand-border/40">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block w-full mb-1">Calculator Inputs:</span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> QT interval (milliseconds)
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Heart rate (beats per minute)
                </span>
              </div>
            </div>
            
            <div className="glass-panel border border-brand-border rounded-3xl p-6 md:p-8">
              <LeanQtcCalculatorClient />
              <p className="text-base text-gray-500 text-center mt-6">
                Your estimated corrected QT interval result will appear above.
              </p>
            </div>
          </section>

          {/* Educational Content Sections below calculator */}
          <div className="border-t border-brand-border/40 pt-16 space-y-16 text-gray-300">
            
            {/* Grid 1: What is it & What is QT Interval */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">What Is a QTc Calculator?</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  A <strong>QTc Calculator</strong> is a healthcare tool used to estimate the corrected QT interval from an ECG measurement.
                </p>
                <p className="text-gray-300 text-base leading-relaxed">
                  The QT interval can vary depending on how fast or slow the heart is beating. QTc calculations adjust the QT interval based on heart rate, making it easier to compare measurements.
                </p>
                <p className="text-gray-300 text-base leading-relaxed">
                  QTc is commonly reviewed in cardiac care because changes in the QT interval may be associated with differences in heart rhythm patterns.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">What Is the QT Interval?</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  The <strong>QT interval</strong> is a measurement seen on an electrocardiogram (ECG or EKG).
                </p>
                <p className="text-gray-300 text-base leading-relaxed">
                  It represents the time between:
                </p>
                <div className="bg-slate-900/40 border border-brand-border/50 rounded-xl p-5 space-y-2">
                  <ul className="list-none pl-0 space-y-2 text-base text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full shrink-0" />
                      <span>The beginning of ventricular electrical activation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full shrink-0" />
                      <span>The end of ventricular electrical recovery</span>
                    </li>
                  </ul>
                </div>
                <p className="text-gray-300 text-base leading-relaxed">
                  In simple terms, it reflects the time your heart’s electrical system takes to complete one important part of each heartbeat.
                </p>
              </div>
            </div>

            {/* Row 2: What Does QTc Mean & How does it work */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start border-t border-brand-border/40 pt-16">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">What Does QTc Mean?</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  QTc stands for <strong>Corrected QT Interval</strong>.
                </p>
                <p className="text-gray-300 text-base leading-relaxed">
                  Since heart rate affects the QT interval, the QTc calculation adjusts the measurement to provide a more standardized value.
                </p>
                <p className="text-gray-300 text-base leading-relaxed">
                  Healthcare professionals may consider QTc when evaluating:
                </p>
                <div className="bg-slate-900/40 border border-brand-border/50 rounded-xl p-5 space-y-2">
                  <ul className="list-none pl-0 space-y-2">
                    {[
                      "Heart rhythm patterns",
                      "ECG results",
                      "Medication-related cardiac effects",
                      "Certain cardiac conditions"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-base text-gray-300">
                        <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">How Does the QTc Calculator Work?</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  The calculator estimates QTc by analyzing key inputs:
                </p>
                <div className="space-y-3">
                  <div className="bg-slate-900/50 border border-brand-border/40 rounded-xl p-4">
                    <h4 className="font-bold text-white text-sm">QT Interval</h4>
                    <p className="text-sm text-gray-400 mt-1">Usually measured in milliseconds (ms) from an ECG reading.</p>
                  </div>
                  <div className="bg-slate-900/50 border border-brand-border/40 rounded-xl p-4">
                    <h4 className="font-bold text-white text-sm">Heart Rate</h4>
                    <p className="text-sm text-gray-400 mt-1">Heart rate affects the QT measurement because faster and slower heart rates change the timing of electrical activity.</p>
                  </div>
                  <div className="bg-slate-900/50 border border-brand-border/40 rounded-xl p-4">
                    <h4 className="font-bold text-white text-sm">Correction Formula</h4>
                    <p className="text-sm text-gray-400 mt-1">Different formulas can be used to calculate QTc, including Bazett and Fridericia formulas.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 3: Understanding QTc Results Table */}
            <div className="border-t border-brand-border/40 pt-16 space-y-6">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Understanding QTc Results</h2>
              <p className="text-gray-300 text-base leading-relaxed">
                QTc values are usually interpreted in relation to clinical guidelines and individual health factors. General reference ranges may vary depending on biological factors like age and gender.
              </p>
              
              <div className="glass-panel border border-brand-border rounded-2xl overflow-hidden max-w-4xl mx-auto my-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-base">
                    <thead>
                      <tr className="bg-slate-900 border-b border-brand-border text-white font-bold">
                        <th className="p-4">QTc Range</th>
                        <th className="p-4">General Interpretation</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-brand-border/40">
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 font-bold text-brand-cyan">Within expected range</td>
                        <td className="p-4 text-gray-300">Usually considered within common reference limits (e.g., &lt; 440ms for males, &lt; 450ms for females)</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 font-bold text-amber-400">Borderline range</td>
                        <td className="p-4 text-gray-300">May require clinical context and review (440–470ms for males, 450–480ms for females)</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 font-bold text-rose-400">Higher range</td>
                        <td className="p-4 text-gray-300">May require further evaluation by a healthcare professional (&gt; 470ms for males, &gt; 480ms for females)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-sm text-gray-400 text-center">
                * Note: A QTc result alone does not diagnose a heart condition and should always be clinically reviewed.
              </p>
            </div>

            {/* Grid 4: Monitoring Importance & Affecting Factors */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start border-t border-brand-border/40 pt-16">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Why Is QTc Monitoring Important?</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  QTc measurement can provide important information about electrical activity in the heart.
                </p>
                <p className="text-gray-300 text-base leading-relaxed">
                  It may help healthcare professionals:
                </p>
                <div className="bg-slate-900/40 border border-brand-border/50 rounded-xl p-5 space-y-2">
                  <ul className="list-disc pl-5 space-y-2 text-base text-gray-300">
                    <li>Review ECG findings</li>
                    <li>Monitor certain medications</li>
                    <li>Understand heart rhythm patterns</li>
                    <li>Identify situations that may need further evaluation</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Factors That Can Affect QTc Results</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  Several factors may influence QTc measurements:
                </p>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { title: "Heart Rate", desc: "Changes in heart rate can affect QT measurements." },
                    { title: "Medications", desc: "Some medications may influence heart rhythm and QT intervals." },
                    { title: "Electrolyte Levels", desc: "Changes in minerals such as potassium, magnesium, or calcium may affect electrical activity." },
                    { title: "Medical Conditions", desc: "Certain heart-related or metabolic conditions may influence QTc values." },
                    { title: "Measurement Accuracy", desc: "ECG quality and calculation methods can affect results." }
                  ].map((factor, idx) => (
                    <div key={idx} className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-4 flex gap-3">
                      <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full shrink-0 mt-2" />
                      <div>
                        <p className="text-sm font-bold text-white">{factor.title}</p>
                        <p className="text-xs text-gray-400 mt-1 leading-normal">{factor.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Grid 5: Supporting Health & QTc vs ECG */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start border-t border-brand-border/40 pt-16">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">How Can QTc Health Be Supported?</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  Supporting heart health generally involves healthy lifestyle habits and appropriate medical care. Helpful habits include:
                </p>
                <div className="bg-slate-900/40 border border-brand-border/50 rounded-xl p-5 space-y-3">
                  <ul className="list-none pl-0 space-y-2">
                    {[
                      "Regular physical activity",
                      "Balanced nutrition",
                      "Managing cardiovascular risk factors",
                      "Following prescribed medications correctly",
                      "Regular healthcare checkups when recommended"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-base text-gray-300">
                        <span className="w-1.5 h-1.5 bg-brand-emerald rounded-full shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-gray-300 text-base leading-relaxed">
                  If you have concerns about an ECG result or QTc value, discuss them with a healthcare professional.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">QTc Calculator vs ECG Testing</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  Both are used in evaluation but play very different roles:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-slate-900/40 border border-brand-border/50 rounded-xl p-5 space-y-2">
                    <p className="font-bold text-white text-xs uppercase tracking-wider text-brand-cyan">QTc Calculator</p>
                    <ul className="list-disc pl-4 space-y-1.5 text-xs text-gray-300">
                      <li>Quick estimate</li>
                      <li>Educational tool</li>
                      <li>Helps understand QTc concepts</li>
                      <li>Requires manual EKG entries</li>
                    </ul>
                  </div>
                  <div className="bg-slate-900/40 border border-brand-border/50 rounded-xl p-5 space-y-2">
                    <p className="font-bold text-white text-xs uppercase tracking-wider text-brand-cyan">ECG Testing</p>
                    <ul className="list-disc pl-4 space-y-1.5 text-xs text-gray-300">
                      <li>Measures actual electrical activity</li>
                      <li>Reviewed by professionals</li>
                      <li>Provides clinical information</li>
                      <li>Clinical gold standard</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="border-t border-brand-border/40 pt-16 space-y-8">
              <div className="text-center max-w-3xl mx-auto mb-8">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Frequently Asked Questions (FAQs)</h2>
                <p className="text-base text-gray-400 mt-2">
                  Find quick answers to common questions about estimating corrected QT intervals.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start font-sans">
                {/* Column 1 */}
                <div className="space-y-4">
                  {[
                    {
                      q: "1. What is a QTc calculator?",
                      a: "A QTc calculator is an online tool that estimates the corrected QT interval using QT interval and heart rate values."
                    },
                    {
                      q: "2. What does QTc stand for?",
                      a: "QTc stands for Corrected QT Interval, which adjusts the QT interval based on heart rate."
                    },
                    {
                      q: "3. Why is QTc correction needed?",
                      a: "The QT interval changes depending on heart rate, so correction helps create a more standardized measurement."
                    },
                    {
                      q: "4. How is QTc calculated?",
                      a: "QTc is calculated using formulas (such as Bazett or Fridericia) that adjust QT interval values based on heart rate."
                    },
                    {
                      q: "5. What is a normal QTc value?",
                      a: "QTc reference ranges can vary depending on factors such as age, gender, and clinical guidelines. Generally under 440ms for males and under 450ms for females is expected."
                    }
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
                    {
                      q: "6. Can a QTc calculator diagnose heart problems?",
                      a: "No. A QTc calculator provides an estimate and should not replace ECG testing or professional medical evaluation."
                    },
                    {
                      q: "7. What factors affect QTc measurements?",
                      a: "Heart rate, medications, electrolyte levels, health conditions, and ECG measurement accuracy can influence QTc values."
                    },
                    {
                      q: "8. Why do doctors check QTc intervals?",
                      a: "Doctors may review QTc intervals when evaluating ECG results, medications, and heart rhythm concerns."
                    },
                    {
                      q: "9. Is QTc the same as QT interval?",
                      a: "No. QT is the original ECG measurement, while QTc is the corrected value adjusted for heart rate."
                    },
                    {
                      q: "10. Can medications affect QTc?",
                      a: "Yes. Some medications may influence heart electrical activity, which is why QTc may be monitored in certain situations."
                    }
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
            <div className="border-t border-brand-border/40 pt-16 space-y-4 font-sans">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Related Healthcare Tools</h2>
              <p className="text-base leading-relaxed">
                Explore more clinical calculators:
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-6 gap-4 mt-6">
                {[
                  { name: "Heart Rate Calculator", path: "/solutions" },
                  { name: "Blood Pressure Calculator", path: "/solutions" },
                  { name: "BMI Calculator", path: "/solutions" },
                  { name: "A1C Calculator", path: "/a1c-calculator" },
                  { name: "Water Intake Calculator", path: "/water-calculator" },
                  { name: "Body Fat Calculator", path: "/solutions" }
                ].map((tool, index) => (
                  <Link 
                    key={index} 
                    href={tool.path}
                    className="glass-panel border border-brand-border hover:border-brand-cyan/40 p-5 rounded-xl text-center transition-all hover:scale-[1.02] flex flex-col items-center justify-center gap-3 group cursor-pointer"
                  >
                    <Calculator className="w-5 h-5 text-brand-cyan group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] font-bold text-white group-hover:text-brand-cyan transition-colors">{tool.name}</span>
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
                  Build Better Healthcare Technology With Med Clinic X
                </h2>
                <p className="mt-4 text-base text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Med Clinic X helps healthcare organizations create modern healthcare technology solutions that improve patient experiences and operational efficiency.
                </p>

                <div className="my-8 max-w-4xl mx-auto">
                  <p className="font-bold text-white text-base mb-4">Our services include:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {[
                      { name: "Healthcare Software Development", path: "/services/healthcare-saas-development" },
                      { name: "AI Healthcare Solutions", path: "/services/ai-healthcare-solutions" },
                      { name: "Patient Portal Development", path: "/services/patient-portal-development" },
                      { name: "Telemedicine Solutions", path: "/services/telemedicine-solutions" },
                      { name: "Healthcare Automation", path: "/services/healthcare-automation" },
                      { name: "Healthcare Mobile Apps", path: "/services" }
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
                  We help clinics, hospitals, and healthcare organizations build scalable digital healthcare platforms.
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
                    <span>Ready to build a modern healthcare solution? Connect with Med Clinic X today.</span>
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
