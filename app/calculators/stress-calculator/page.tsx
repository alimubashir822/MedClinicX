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
  Heart,
  Smile,
  Users
} from "lucide-react";
import StressCalculatorClient from "./StressCalculatorClient";

export const metadata: Metadata = {
  title: "Stress Calculator - Measure Stress Levels & Understand Mental Wellbeing Indicators | Med Clinic X",
  description:
    "Use our free Stress Calculator to estimate your stress level based on lifestyle, sleep, workload, and emotional factors. Understand your mental wellbeing and stress patterns.",
  keywords: [
    "Stress Calculator",
    "Measure Stress Levels",
    "Mental Wellbeing Indicators",
    "stress screening tool",
    "lifestyle stress index",
    "wellness calculator",
  ],
  alternates: {
    canonical: "https://medclinicx.com/calculators/stress-calculator/",
  },
  openGraph: {
    title: "Stress Calculator - Measure Stress Levels & Understand Mental Wellbeing Indicators | Med Clinic X",
    description:
      "Use our free Stress Calculator to estimate your stress level based on lifestyle, sleep, workload, and emotional factors. Understand your mental wellbeing and stress patterns.",
    url: "https://medclinicx.com/calculators/stress-calculator/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Stress Calculator | Med Clinic X",
      },
    ],
  },
};

export default function StressCalculatorPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://medclinicx.com" },
      { "@type": "ListItem", position: 2, name: "Stress Calculator", item: "https://medclinicx.com/calculators/stress-calculator/" },
    ],
  };

  const calculatorSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Stress Calculator",
    description: "Estimate your stress level based on common lifestyle and wellbeing factors such as sleep, workload, emotions, and routine.",
    url: "https://medclinicx.com/calculators/stress-calculator/",
    about: {
      "@type": "MedicalCondition",
      name: "Stress & Mental Wellbeing Indicators",
      possibleTreatment: [
        {
          "@type": "MedicalTherapy",
          name: "Stress Management & Relaxation Techniques",
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
              <span className="text-[11px] font-bold text-brand-cyan uppercase tracking-widest font-sans">Wellbeing Screening Reference</span>
            </div>
            
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-6 animate-fade-in animate-duration-500">
              Stress Calculator: <span className="text-gradient-cyan-indigo">Estimate Your Stress Level & Mental Wellbeing</span>
            </h1>

            <div className="glass-panel border border-brand-border rounded-2xl p-8 max-w-4xl mx-auto text-left space-y-4 mb-16">
              <h2 className="text-xl font-bold text-brand-cyan font-display">
                Introduction: Understand Your Stress Levels
              </h2>
              <p className="text-gray-300 text-base leading-relaxed">
                Stress is a natural response to physical, emotional, or environmental pressure. While some stress can be normal, ongoing or high levels of stress may affect mental and physical health.
              </p>
              <p className="text-gray-300 text-base leading-relaxed">
                Our <strong>Stress Calculator</strong> helps estimate your stress level based on common lifestyle and wellbeing factors such as sleep quality, workload, emotional state, and daily habits.
              </p>
              
              <div className="py-2">
                <p className="text-gray-350 text-base leading-relaxed font-semibold text-white mb-2">
                  This tool can help you:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-gray-300 text-base">
                  <li>Understand your current stress level</li>
                  <li>Identify lifestyle-related stress factors</li>
                  <li>Improve self-awareness of mental wellbeing</li>
                  <li>Support healthier daily routines</li>
                </ul>
              </div>

              <div className="py-2">
                <p className="text-gray-350 text-base leading-relaxed font-semibold text-white mb-2">
                  It may be useful for:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-gray-300 text-base">
                  <li>Individuals tracking mental wellbeing</li>
                  <li>Healthcare and wellness platforms</li>
                  <li>Therapists and counselors (as a screening reference tool)</li>
                  <li>Workplace wellness programs</li>
                </ul>
              </div>

              <div className="bg-rose-500/10 border border-rose-500/20 text-rose-300 rounded-xl p-4 flex gap-3 text-sm">
                <AlertTriangle className="w-5.5 h-5.5 text-rose-400 shrink-0 mt-0.5" />
                <p className="text-base leading-normal">
                  <strong>Important:</strong> This calculator provides an estimate only and is not a diagnostic tool. It does not replace professional mental health evaluation, counseling, or medical advice.
                </p>
              </div>
            </div>
          </div>

          {/* Calculator Section */}
          <section className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4" id="stress01">Stress Calculator</h2>
              <p className="text-base text-gray-300 max-w-2xl mx-auto leading-relaxed mb-6">
                Assess Your Stress Level: Answer the questions below to estimate your stress level.
              </p>
              <div className="inline-flex flex-wrap justify-center gap-3 mb-8 bg-slate-900/60 p-4 rounded-xl border border-brand-border/40">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block w-full mb-1">Calculator Inputs:</span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Sleep quality
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Workload level
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Emotional state
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Physical activity
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Daily pressure level
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Social support
                </span>
              </div>
            </div>
            
            <div className="glass-panel border border-brand-border rounded-3xl p-6 md:p-8">
              <StressCalculatorClient />
            </div>
          </section>

          {/* Educational Content Sections */}
          <div className="border-t border-brand-border/40 pt-16 space-y-16 text-gray-300">
            
            {/* What is it & Why Important */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">What Is a Stress Calculator?</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  A <strong>Stress Calculator</strong> is a wellness tool designed to estimate a person’s stress level based on lifestyle and psychological indicators.
                </p>
                <p className="text-gray-300 text-base leading-relaxed">
                  It does not diagnose mental health conditions but helps users understand general stress patterns in daily life.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Why Is Stress Management Important?</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  Managing stress is important for both mental and physical wellbeing.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-4 space-y-1.5">
                    <h4 className="text-white font-bold text-sm flex items-center gap-1.5">
                      <Smile className="w-4 h-4 text-brand-cyan" />
                      <span>Mental Health Balance</span>
                    </h4>
                    <p className="text-xs text-gray-400 leading-normal">
                      High stress can affect mood, focus, and emotional stability.
                    </p>
                  </div>
                  <div className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-4 space-y-1.5">
                    <h4 className="text-white font-bold text-sm flex items-center gap-1.5">
                      <Heart className="w-4 h-4 text-brand-cyan" />
                      <span>Physical Health</span>
                    </h4>
                    <p className="text-xs text-gray-400 leading-normal">
                      Chronic stress may contribute to fatigue, headaches, and sleep issues.
                    </p>
                  </div>
                  <div className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-4 space-y-1.5">
                    <h4 className="text-white font-bold text-sm flex items-center gap-1.5">
                      <Activity className="w-4 h-4 text-brand-cyan" />
                      <span>Productivity</span>
                    </h4>
                    <p className="text-xs text-gray-400 leading-normal">
                      Lower stress levels can improve focus and performance.
                    </p>
                  </div>
                  <div className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-4 space-y-1.5">
                    <h4 className="text-white font-bold text-sm flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-brand-cyan" />
                      <span>Quality of Life</span>
                    </h4>
                    <p className="text-xs text-gray-400 leading-normal">
                      Better stress management improves overall wellbeing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* How Does the Calculator Work? */}
            <div className="border-t border-brand-border/40 pt-16 space-y-6">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">How Does the Stress Calculator Work?</h2>
              <p className="text-gray-300 text-base leading-relaxed">
                The calculator evaluates multiple lifestyle and emotional factors.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {[
                  { title: "Sleep Quality", desc: "Poor sleep increases stress levels." },
                  { title: "Workload", desc: "High work pressure can contribute to mental strain." },
                  { title: "Emotional State", desc: "Mood and emotional stability affect stress scoring." },
                  { title: "Physical Activity", desc: "Exercise can help reduce stress levels." },
                  { title: "Social Support", desc: "Strong support systems may reduce perceived stress." }
                ].map((item, idx) => (
                  <div key={idx} className="glass-panel border border-brand-border/60 p-5 rounded-xl space-y-2 hover:border-brand-cyan/20 transition-all">
                    <h4 className="font-bold text-white text-base">{item.title}</h4>
                    <p className="text-xs text-gray-400 leading-normal">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Results Table */}
            <div className="border-t border-brand-border/40 pt-16 space-y-6">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Understanding Stress Results</h2>
              <p className="text-gray-300 text-base leading-relaxed">
                Results are based on general wellness indicators.
              </p>
              <div className="glass-panel border border-brand-border rounded-2xl overflow-hidden max-w-4xl mx-auto my-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-base">
                    <thead>
                      <tr className="bg-slate-900 border-b border-brand-border text-white font-bold">
                        <th className="p-4">Stress Level</th>
                        <th className="p-4">Meaning</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-brand-border/40">
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 font-bold text-emerald-400">Low Stress</td>
                        <td className="p-4 text-gray-300">Balanced lifestyle and emotional stability</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 font-bold text-amber-400">Moderate Stress</td>
                        <td className="p-4 text-gray-300">Some stress factors present</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 font-bold text-rose-400">High Stress</td>
                        <td className="p-4 text-gray-300">Increased risk of mental and physical strain</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Factors That Influence Stress Levels */}
            <div className="border-t border-brand-border/40 pt-16 space-y-6">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Factors That Influence Stress Levels</h2>
              <p className="text-gray-300 text-base leading-relaxed">
                Several factors can affect stress:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {[
                  { title: "Work Pressure", desc: "Job demands and deadlines may increase stress." },
                  { title: "Sleep Patterns", desc: "Poor sleep can significantly increase stress levels." },
                  { title: "Lifestyle Habits", desc: "Diet, exercise, and routine affect wellbeing." },
                  { title: "Emotional Health", desc: "Personal challenges and emotions play a major role." },
                  { title: "Environment", desc: "Surroundings and social conditions may impact stress." }
                ].map((item, idx) => (
                  <div key={idx} className="glass-panel border border-brand-border/60 p-5 rounded-xl space-y-2 hover:border-brand-cyan/20 transition-all">
                    <h4 className="font-bold text-white text-base">{item.title}</h4>
                    <p className="text-xs text-gray-400 leading-normal">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stress Calculator vs Clinical Evaluation */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start border-t border-brand-border/40 pt-16">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Stress Calculator vs Clinical Evaluation</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-5 space-y-2">
                    <p className="font-bold text-white uppercase tracking-wider text-[11px] text-brand-cyan">Stress Calculator</p>
                    <div className="text-xs text-gray-300 space-y-1">
                      <p className="font-semibold text-white">Benefits:</p>
                      <ul className="list-disc pl-4 space-y-0.5 text-gray-400">
                        <li>Quick self-assessment</li>
                        <li>Helps identify stress patterns</li>
                        <li>Supports wellness awareness</li>
                      </ul>
                      <p className="font-semibold text-white mt-2">Limitations:</p>
                      <ul className="list-disc pl-4 space-y-0.5 text-gray-400">
                        <li>Not a diagnostic tool</li>
                        <li>Does not replace therapy or medical evaluation</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-5 space-y-2">
                    <p className="font-bold text-white uppercase tracking-wider text-[11px] text-brand-cyan">Clinical Evaluation</p>
                    <div className="text-xs text-gray-300 space-y-1">
                      <p className="font-semibold text-white">Benefits:</p>
                      <ul className="list-disc pl-4 space-y-0.5 text-gray-400">
                        <li>Professional diagnosis</li>
                        <li>Personalized treatment plans</li>
                        <li>Clinical assessment of mental health conditions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">How Healthcare Technology Supports Mental Wellness</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  Digital healthcare platforms are improving mental health awareness through:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-350 text-sm">
                  <li>Mental health tracking apps</li>
                  <li>Teletherapy platforms</li>
                  <li>AI-based wellness tools</li>
                  <li>Patient engagement systems</li>
                  <li>Digital health monitoring</li>
                </ul>
                <p className="text-gray-300 text-base leading-relaxed mt-2">
                  These tools help individuals and healthcare providers stay connected and informed.
                </p>
              </div>
            </div>

            {/* FAQs Accordions */}
            <div className="border-t border-brand-border/40 pt-16 space-y-8">
              <div className="text-center max-w-3xl mx-auto mb-8">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Frequently Asked Questions About Stress Calculator</h2>
                <p className="text-base text-gray-400 mt-2">
                  Find answers to common questions about mental wellbeing estimation and stress indicators.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start font-sans">
                {/* Column 1 */}
                <div className="space-y-4">
                  {[
                    { q: "1. What is a stress calculator?", a: "A stress calculator estimates your stress level based on lifestyle and emotional factors." },
                    { q: "2. Can a stress calculator diagnose anxiety or depression?", a: "No. It only provides an estimate and is not a diagnostic tool." },
                    { q: "3. What factors affect stress levels?", a: "Sleep, workload, emotions, lifestyle habits, and environment." },
                    { q: "4. How accurate is a stress calculator?", a: "It provides a general wellness estimate, not a medical diagnosis." },
                    { q: "5. Can stress affect physical health?", a: "Yes. Long-term stress may affect sleep, immunity, and overall health." }
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
                    { q: "6. How can I reduce stress?", a: "Healthy sleep, exercise, balanced routines, and relaxation techniques may help." },
                    { q: "7. Is stress always bad?", a: "No. Short-term stress can sometimes improve focus and performance." },
                    { q: "8. Can lifestyle changes reduce stress?", a: "Yes. Healthy habits can significantly improve stress levels over time." },
                    { q: "9. Who should use a stress calculator?", a: "Anyone interested in understanding their stress and wellbeing patterns." },
                    { q: "10. Should I see a doctor for high stress?", a: "Yes. If stress is persistent or affecting daily life, professional help is recommended." }
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
              <p className="text-base leading-relaxed">Explore more wellness calculators:</p>
              
              <div className="grid grid-cols-2 sm:grid-cols-6 gap-4 mt-6">
                {[
                  { name: "Metabolic Age Calculator", path: "/calculators/metabolic-age-calculator" },
                  { name: "Water Intake Calculator", path: "/calculators/water-intake-calculator" },
                  { name: "Fat Intake Calculator", path: "/calculators/fat-intake-calculator" },
                  { name: "Baby Growth Calculator", path: "/calculators/baby-growth-calculator" },
                  { name: "IV Flow Rate Calculator", path: "/calculators/iv-flow-rate-calculator" },
                  { name: "Infusion Calculator", path: "/calculators/infusion-calculator" }
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
                  Med Clinic X helps healthcare organizations build modern digital healthcare solutions that improve patient engagement, mental wellness support, and healthcare workflows.
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
