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
import GlasgowComaScaleCalculatorClient from "./GlasgowComaScaleCalculatorClient";

export const metadata: Metadata = {
  title: "Glasgow Coma Scale Calculator - Calculate GCS Score for Consciousness Assessment | Med Clinic X",
  description:
    "Use our free Glasgow Coma Scale Calculator to calculate GCS score based on eye, verbal, and motor responses. Learn how healthcare professionals assess level of consciousness.",
  keywords: [
    "Glasgow Coma Scale",
    "Calculate GCS score",
    "Glasgow Coma Scale Calculator",
    "GCS neurological score",
    "Trauma consciousness calculator",
    "Coma scale calculator",
  ],
  alternates: {
    canonical: "https://medclinicx.com/calculator/glasgow-coma-scale-calculator/",
  },
  openGraph: {
    title: "Glasgow Coma Scale Calculator - Calculate GCS Score for Consciousness Assessment | Med Clinic X",
    description:
      "Use our free Glasgow Coma Scale Calculator to calculate GCS score based on eye, verbal, and motor responses. Learn how healthcare professionals assess level of consciousness.",
    url: "https://medclinicx.com/calculator/glasgow-coma-scale-calculator/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Glasgow Coma Scale Calculator | Med Clinic X",
      },
    ],
  },
};

export default function GlasgowComaScaleCalculatorPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://medclinicx.com" },
      { "@type": "ListItem", position: 2, name: "Glasgow Coma Scale Calculator", item: "https://medclinicx.com/calculator/glasgow-coma-scale-calculator/" },
    ],
  };

  const calculatorSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Glasgow Coma Scale Calculator",
    description: "Use our free Glasgow Coma Scale Calculator to calculate GCS score based on eye, verbal, and motor responses.",
    url: "https://medclinicx.com/calculator/glasgow-coma-scale-calculator/",
    about: {
      "@type": "MedicalCondition",
      name: "Consciousness Assessment & Neurological Evaluation",
      possibleTreatment: [
        {
          "@type": "MedicalTherapy",
          name: "Trauma Life Support & Neurological Monitoring",
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
              <span className="text-[11px] font-bold text-brand-cyan uppercase tracking-widest font-sans">Clinical Assessment Tools</span>
            </div>
            
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-6 animate-fade-in">
              Glasgow Coma Scale Calculator: <span className="text-gradient-cyan-indigo">Calculate GCS Score</span>
            </h1>

            <div className="glass-panel border border-brand-border rounded-2xl p-8 max-w-4xl mx-auto text-left space-y-4 mb-16">
              <h2 className="text-xl font-bold text-brand-cyan font-display">
                Introduction: Understand Glasgow Coma Scale Assessment
              </h2>
              <p className="text-gray-300 text-base leading-relaxed">
                The <strong>Glasgow Coma Scale (GCS)</strong> is a widely used clinical scoring system designed to assess a person’s level of consciousness after a brain injury, medical emergency, or neurological event.
              </p>
              <p className="text-gray-300 text-base leading-relaxed">
                Our <strong>Glasgow Coma Scale Calculator</strong> helps healthcare professionals, students, and medical learners quickly calculate a GCS score by evaluating three important response areas: Eye response, Verbal response, and Motor response.
              </p>
              <p className="text-gray-300 text-base leading-relaxed">
                The calculator provides a combined score that helps summarize a patient’s level of consciousness.
              </p>
              <p className="text-gray-300 text-base leading-relaxed font-semibold text-white">
                This tool can be useful for:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-2 text-base text-gray-300 font-medium">
                {[
                  "Healthcare professionals",
                  "Emergency medicine teams",
                  "Nursing students",
                  "Medical students",
                  "Healthcare organizations developing digital clinical tools"
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
                  <strong>Important:</strong> This calculator is an educational and assessment support tool. It should not replace professional medical judgment, clinical examination, or emergency care decisions.
                </p>
              </div>
            </div>
          </div>

          {/* Calculator Section */}
          <section className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">Calculate GCS Score</h2>
              <p className="text-base text-gray-300 max-w-2xl mx-auto leading-relaxed mb-6">
                Select the patient’s responses below to calculate the Glasgow Coma Scale score.
              </p>
            </div>
            
            <div className="glass-panel border border-brand-border rounded-3xl p-6 md:p-8">
              <GlasgowComaScaleCalculatorClient />
              <p className="text-base text-gray-500 text-center mt-6">
                Your total GCS score result will appear here.
              </p>
            </div>
          </section>

          {/* Educational content sections below the calculator */}
          <div className="border-t border-brand-border/40 pt-16 space-y-16 text-gray-300">
            
            {/* Row 1: What is it & Why is it Important */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">What Is the Glasgow Coma Scale?</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  The <strong>Glasgow Coma Scale</strong> is a neurological assessment tool used to measure a patient’s level of consciousness. It evaluates three categories:
                </p>
                <div className="space-y-4 text-sm text-gray-300">
                  <div>
                    <h4 className="font-bold text-white flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full shrink-0" /> Eye Response
                    </h4>
                    <p className="text-gray-400 pl-4 mt-0.5">Measures how the patient responds through eye opening triggers.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full shrink-0" /> Verbal Response
                    </h4>
                    <p className="text-gray-400 pl-4 mt-0.5">Evaluates speech coherence, word correctness, and communication ability.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full shrink-0" /> Motor Response
                    </h4>
                    <p className="text-gray-400 pl-4 mt-0.5">Assesses movement, command following, or response to pain stimulation.</p>
                  </div>
                </div>
                <p className="text-gray-300 text-base leading-relaxed mt-2">
                  Each category receives an individual score, and the total creates the final GCS score.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Why Is the Glasgow Coma Scale Important?</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  The GCS score helps healthcare teams communicate a patient’s neurological status in a standardized, unambiguous way.
                </p>
                <p className="text-gray-300 text-base leading-relaxed">
                  It is commonly used in critical emergency situations such as:
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Head injuries",
                    "Trauma assessment",
                    "Emergency care triage",
                    "Intensive care monitoring",
                    "Neurological evaluations",
                    "Post-stroke checks"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-slate-900/50 border border-brand-border/30 rounded-lg p-3">
                      <span className="w-1.5 h-1.5 bg-brand-indigo rounded-full shrink-0" />
                      <span className="text-xs text-gray-300 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-300 text-base leading-relaxed">
                  A consistent, numerical scoring system helps healthcare providers track changes in consciousness over time, signaling neurological improvement or deterioration.
                </p>
              </div>
            </div>

            {/* Row 2: How does the calculator work */}
            <div className="border-t border-brand-border/40 pt-16 space-y-6">
              <div className="text-center max-w-3xl mx-auto mb-10">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">How Does the Glasgow Coma Scale Calculator Work?</h2>
                <p className="text-base text-gray-400 mt-2">
                  The calculator adds the scores from the three GCS categories.
                </p>
              </div>
              
              <div className="glass-panel border border-brand-border rounded-2xl p-8 max-w-2xl mx-auto text-center space-y-4">
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Mathematical Formula</p>
                <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white text-gradient-cyan-indigo leading-normal">
                  GCS Score = Eye Response (1–4) + Verbal Response (1–5) + Motor Response (1–6)
                </h3>
                <p className="text-xs text-gray-400 leading-normal max-w-lg mx-auto">
                  The total score ranges from **3 (lowest possible score, indicating deep coma)** to **15 (highest possible score, indicating normal, fully oriented consciousness)**.
                </p>
              </div>
            </div>

            {/* Row 3: Understanding GCS Results Table */}
            <div className="border-t border-brand-border/40 pt-16 space-y-6">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Understanding Glasgow Coma Scale Results</h2>
              <p className="text-gray-300 text-base leading-relaxed">
                GCS scores are commonly grouped into clinical categories to determine intervention urgency:
              </p>
              
              <div className="glass-panel border border-brand-border rounded-2xl overflow-hidden max-w-4xl mx-auto my-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-base">
                    <thead>
                      <tr className="bg-slate-900 border-b border-brand-border text-white font-bold">
                        <th className="p-4">GCS Score</th>
                        <th className="p-4">General Interpretation</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-brand-border/40">
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 font-bold text-brand-cyan">13 - 15</td>
                        <td className="p-4 text-gray-300">Mild impairment or normal consciousness range</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 font-bold text-brand-cyan">9 - 12</td>
                        <td className="p-4 text-gray-300">Moderate level of consciousness impairment</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 font-bold text-rose-400">3 - 8</td>
                        <td className="p-4 text-gray-300">Severe impairment requiring urgent medical attention (Severe TBI/Coma)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-gray-400 text-sm text-center">
                Clinical interpretation and airway management actions depend entirely on the complete clinical situation.
              </p>
            </div>

            {/* Row 4: Components Explained & Benefits */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start border-t border-brand-border/40 pt-16">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Glasgow Coma Scale Components Explained</h2>
                <div className="space-y-4 text-sm text-gray-300">
                  <div>
                    <h4 className="font-bold text-white">Eye Response Score (1–4)</h4>
                    <p className="text-gray-400 mt-1">Evaluates whether a patient opens their eyes spontaneously, to speech, to pain stimulation, or not at all. Higher scores indicate strong sensory awareness.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Verbal Response Score (1–5)</h4>
                    <p className="text-gray-400 mt-1">Measures language comprehension and coherence. Ratings range from oriented conversation, confused answers, inappropriate word combinations, incomprehensible sounds, to absolute silence.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Motor Response Score (1–6)</h4>
                    <p className="text-gray-400 mt-1">Evaluates physical movement and response. This category has the highest scoring range (up to 6) because motor movement controls provide critical localising neurological information.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Benefits of Using a GCS Calculator</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  A digital GCS calculator can support clinical workflows through:
                </p>
                <div className="space-y-3 bg-slate-900/40 border border-brand-border/50 rounded-xl p-5 text-sm">
                  <div className="flex gap-2">
                    <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full shrink-0 mt-2" />
                    <span><strong>Faster Clinical Calculations:</strong> Triage and emergency teams can determine scores in seconds.</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full shrink-0 mt-2" />
                    <span><strong>Reduced Calculation Errors:</strong> Automated sum generation prevents basic arithmetic mistakes in high-stress settings.</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full shrink-0 mt-2" />
                    <span><strong>Better Documentation:</strong> Supports clear, consistent clinical charting.</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full shrink-0 mt-2" />
                    <span><strong>Education and Training:</strong> Helps students, residents, and nurses study GCS indicators.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 5: Assessment Factors & How they are used */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start border-t border-brand-border/40 pt-16">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Factors That Can Affect GCS Assessment</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  Several physiological and situational variables can influence GCS checks:
                </p>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  {[
                    { name: "Medical Conditions", desc: "Prior strokes, baseline dementia, or shock states." },
                    { name: "Medications", desc: "Sedatives, anesthetics, paralytics, or narcotics." },
                    { name: "Intubation Barriers", desc: "Intubated patients who cannot respond verbally (marked as V1T)." },
                    { name: "Language Barriers", desc: "Inability to communicate due to foreign languages." },
                    { name: "Physical Injuries", desc: "Swollen eyelids or spinal fractures limiting motor response." }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-3.5 space-y-1">
                      <p className="font-bold text-brand-cyan">{item.name}</p>
                      <p className="text-[10px] text-gray-400 leading-normal">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">How Healthcare Professionals Use GCS Scores</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  Clinical teams use GCS scores to monitor baseline states and record shifts over time:
                </p>
                <div className="space-y-2 text-sm text-gray-400">
                  <p><strong>• Monitor Consciousness Shifts:</strong> Frequent GCS assessments (e.g. every 1 hour) identify early ICP rises or hemorrhage expansions.</p>
                  <p><strong>• Standardize Communication:</strong> Provides shorthand descriptors to transfer patients safely between EMS, ICU, and surgical departments.</p>
                  <p><strong>• Airway Decision Support:</strong> General clinical rule of thumb: &quot;GCS of 8 or less, intubate.&quot;</p>
                </div>
              </div>
            </div>

            {/* Row 6: Manual vs Calculator */}
            <div className="border-t border-brand-border/40 pt-16 space-y-6">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight text-center max-w-3xl mx-auto">Glasgow Coma Scale Calculator vs Manual Calculation</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="glass-panel border border-brand-border p-6 rounded-2xl space-y-3">
                  <h4 className="font-bold text-white text-base">Manual GCS Calculation</h4>
                  <ul className="list-disc pl-5 space-y-1 text-xs text-gray-300 leading-relaxed">
                    <li>Traditional clinical bedside method</li>
                    <li>No technical devices required</li>
                    <li>Requires memorization of GCS codes</li>
                    <li>Higher risk of calculation errors in high-stress trauma rooms</li>
                  </ul>
                </div>
                <div className="glass-panel border border-brand-border p-6 rounded-2xl space-y-3">
                  <h4 className="font-bold text-brand-cyan text-base">Digital GCS Calculator</h4>
                  <ul className="list-disc pl-5 space-y-1 text-xs text-gray-300 leading-relaxed">
                    <li>Instant score calculation</li>
                    <li>Dropdown choices prevent memory recall slip-ups</li>
                    <li>Automatic formatting for intubation (T-indicator)</li>
                    <li>Highly valuable educational and documentation aid</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Row 7: Tech & Assessment */}
            <div className="border-t border-brand-border/40 pt-16 space-y-4 text-center max-w-3xl mx-auto">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">How Technology Improves Healthcare Assessments</h2>
              <p className="text-gray-300 text-base leading-relaxed">
                Modern healthcare technology improves clinical workflows and accuracy through decision-support tools. Healthcare organizations rely on technology for:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mt-6">
                {[
                  "Clinical calculators",
                  "Patient monitoring",
                  "Electronic health records",
                  "Decision-support systems",
                  "Healthcare automation"
                ].map((item, idx) => (
                  <div key={idx} className="glass-panel border border-brand-border p-3.5 rounded-xl text-center text-xs font-bold text-brand-cyan">
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-400 mt-4 font-semibold">
                Digital healthcare solutions help providers deliver more efficient, organized, and error-free care.
              </p>
            </div>

            {/* Row 8: FAQs Accordions */}
            <div className="border-t border-brand-border/40 pt-16 space-y-8">
              <div className="text-center max-w-3xl mx-auto mb-8">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Frequently Asked Questions</h2>
                <p className="text-base text-gray-400 mt-2">
                  Common questions about Glasgow Coma Scale assessments, GCS scores, and clinical neurological ratings.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start font-sans">
                {/* Column 1 */}
                <div className="space-y-4">
                  {[
                    {
                      q: "1. What is a Glasgow Coma Scale calculator?",
                      a: "A Glasgow Coma Scale calculator is an online tool that calculates GCS score using eye, verbal, and motor responses."
                    },
                    {
                      q: "2. What does GCS stand for?",
                      a: "GCS stands for Glasgow Coma Scale, a system used to assess consciousness level."
                    },
                    {
                      q: "3. What is the highest Glasgow Coma Scale score?",
                      a: "The highest possible GCS score is 15."
                    },
                    {
                      q: "4. What is the lowest Glasgow Coma Scale score?",
                      a: "The lowest possible GCS score is 3."
                    },
                    {
                      q: "5. How is the Glasgow Coma Scale calculated?",
                      a: "The score is calculated by adding eye response, verbal response, and motor response scores."
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
                      q: "6. Why do doctors use the Glasgow Coma Scale?",
                      a: "Doctors use it to assess consciousness and monitor neurological status."
                    },
                    {
                      q: "7. Can the Glasgow Coma Scale diagnose brain injury?",
                      a: "No. It helps assess consciousness but does not diagnose a specific condition."
                    },
                    {
                      q: "8. What are the three parts of the Glasgow Coma Scale?",
                      a: "The three parts are eye response, verbal response, and motor response."
                    },
                    {
                      q: "9. Is the Glasgow Coma Scale used in emergencies?",
                      a: "Yes. It is commonly used in trauma and emergency medical settings."
                    },
                    {
                      q: "10. Can a GCS score change over time?",
                      a: "Yes. A patient’s score may change as their condition improves or worsens."
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

            {/* Row 9: Related Tools */}
            <div className="border-t border-brand-border/40 pt-16 space-y-4">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Related Healthcare Tools</h2>
              <p className="text-base leading-relaxed">
                Explore more healthcare calculators:
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-6 gap-4 mt-6">
                {[
                  { name: "QTc Calculator", path: "/calculator/qtc-calculator" },
                  { name: "Anion Gap Calculator", path: "/calculator/anion-gap-calculator" },
                  { name: "A1C Calculator", path: "/calculator/a1c-calculator" },
                  { name: "BMI Calculator", path: "/solutions" },
                  { name: "Blood Pressure Calculator", path: "/solutions" },
                  { name: "Water Intake Calculator", path: "/calculator/water-calculator" }
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
                  Med Clinic X helps healthcare organizations build modern digital healthcare solutions that improve patient care, workflows, and healthcare operations.
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
