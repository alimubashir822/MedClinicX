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
  Baby
} from "lucide-react";
import BabyGrowthCalculatorClient from "./BabyGrowthCalculatorClient";

export const metadata: Metadata = {
  title: "Baby Growth Calculator - Track Your Baby’s Growth, Height & Development Milestones | Med Clinic X",
  description:
    "Use our free Baby Growth Calculator to track your baby’s growth, height, weight, and developmental milestones. Understand healthy child growth patterns easily.",
  keywords: [
    "Baby Growth Calculator",
    "Track baby growth",
    "Baby height percentile calculator",
    "WHO baby weight chart",
    "Child milestone tracker",
    "Infant growth progress",
  ],
  alternates: {
    canonical: "https://medclinicx.com/calculators/baby-growth-calculator/",
  },
  openGraph: {
    title: "Baby Growth Calculator - Track Your Baby’s Growth, Height & Development Milestones | Med Clinic X",
    description:
      "Use our free Baby Growth Calculator to track your baby’s growth, height, weight, and developmental milestones. Understand healthy child growth patterns easily.",
    url: "https://medclinicx.com/calculators/baby-growth-calculator/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Baby Growth Calculator | Med Clinic X",
      },
    ],
  },
};

export default function BabyGrowthCalculatorPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://medclinicx.com" },
      { "@type": "ListItem", position: 2, name: "Baby Growth Calculator", item: "https://medclinicx.com/calculators/baby-growth-calculator/" },
    ],
  };

  const calculatorSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Baby Growth Calculator",
    description: "Use our free Baby Growth Calculator to track your baby’s growth, height, weight, and developmental milestones.",
    url: "https://medclinicx.com/calculators/baby-growth-calculator/",
    about: {
      "@type": "MedicalCondition",
      name: "Infant Growth & Developmental Milestones",
      possibleTreatment: [
        {
          "@type": "MedicalTherapy",
          name: "Pediatric Growth Assessment & Developmental Tracking",
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
              <Baby className="w-3.5 h-3.5 text-brand-cyan" />
              <span className="text-[11px] font-bold text-brand-cyan uppercase tracking-widest font-sans">Pediatric Care Tools</span>
            </div>
            
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-6 animate-fade-in animate-duration-500">
              Baby Growth Calculator: <span className="text-gradient-cyan-indigo">Track Your Baby’s Growth & Development</span>
            </h1>

            <div className="glass-panel border border-brand-border rounded-2xl p-8 max-w-4xl mx-auto text-left space-y-4 mb-16">
              <h2 className="text-xl font-bold text-brand-cyan font-display">
                Introduction: Understand Your Baby’s Growth Progress
              </h2>
              <p className="text-gray-300 text-base leading-relaxed">
                Monitoring a baby’s growth is one of the most important aspects of early childhood care. Growth patterns help parents and healthcare providers understand whether a child is developing in a healthy and expected way.
              </p>
              <p className="text-gray-300 text-base leading-relaxed">
                Our <strong>Baby Growth Calculator</strong> helps estimate and track key growth indicators such as height, weight, and general development milestones based on age.
              </p>
              
              <div className="py-2">
                <p className="text-gray-300 text-base leading-relaxed font-semibold text-white mb-2">
                  This tool can help you:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-gray-300 text-base">
                  <li>Track baby height and weight progress</li>
                  <li>Understand growth milestones</li>
                  <li>Compare growth with standard ranges</li>
                  <li>Monitor developmental patterns over time</li>
                </ul>
              </div>

              <div className="py-2">
                <p className="text-gray-300 text-base leading-relaxed font-semibold text-white mb-2">
                  It may be useful for:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-gray-300 text-base">
                  <li>Parents and caregivers</li>
                  <li>Pediatric healthcare providers</li>
                  <li>Nursing and medical students</li>
                  <li>Child health education platforms</li>
                </ul>
              </div>

              <div className="bg-rose-500/10 border border-rose-500/20 text-rose-300 rounded-xl p-4 flex gap-3 text-sm">
                <AlertTriangle className="w-5.5 h-5.5 text-rose-400 shrink-0 mt-0.5" />
                <p className="text-base leading-normal">
                  <strong>Important:</strong> This calculator provides estimates only and should not replace pediatric examinations, growth charts, or professional medical advice.
                </p>
              </div>
            </div>
          </div>

          {/* Calculator Section */}
          <section className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4" id="bgc2026">Baby Growth Calculator</h2>
              <p className="text-base text-gray-300 max-w-2xl mx-auto leading-relaxed mb-6">
                Enter your baby’s details below to estimate growth status.
              </p>
              <div className="inline-flex flex-wrap justify-center gap-3 mb-8 bg-slate-900/60 p-4 rounded-xl border border-brand-border/40">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block w-full mb-1">Calculator Inputs:</span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Age (months or years)
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Height
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Weight
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Gender
                </span>
              </div>
            </div>
            
            <div className="glass-panel border border-brand-border rounded-3xl p-6 md:p-8">
              <BabyGrowthCalculatorClient />
            </div>
          </section>

          {/* Educational Content Sections */}
          <div className="border-t border-brand-border/40 pt-16 space-y-16 text-gray-300">
            
            {/* What is it & Why Important */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">What Is a Baby Growth Calculator?</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  A <strong>Baby Growth Calculator</strong> is a digital tool used to estimate whether a child’s height and weight fall within expected growth ranges for their age.
                </p>
                <p className="text-gray-300 text-base leading-relaxed">
                  It helps interpret growth patterns using general pediatric growth standards commonly used in healthcare.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Why Is Baby Growth Monitoring Important?</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  Tracking growth helps ensure healthy development during early childhood.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-4 space-y-1.5">
                    <h4 className="text-white font-bold text-sm flex items-center gap-1.5">
                      <Shield className="w-4 h-4 text-brand-cyan" />
                      <span>Detect Early Concerns</span>
                    </h4>
                    <p className="text-xs text-gray-400 leading-normal">
                      Helps identify potential growth delays or abnormalities early.
                    </p>
                  </div>
                  <div className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-4 space-y-1.5">
                    <h4 className="text-white font-bold text-sm flex items-center gap-1.5">
                      <Activity className="w-4 h-4 text-brand-cyan" />
                      <span>Monitor Progress</span>
                    </h4>
                    <p className="text-xs text-gray-400 leading-normal">
                      Shows how a child is growing over time.
                    </p>
                  </div>
                  <div className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-4 space-y-1.5">
                    <h4 className="text-white font-bold text-sm flex items-center gap-1.5">
                      <Calculator className="w-4 h-4 text-brand-cyan" />
                      <span>Support Pediatric Care</span>
                    </h4>
                    <p className="text-xs text-gray-400 leading-normal">
                      Provides useful information for pediatric visits.
                    </p>
                  </div>
                  <div className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-4 space-y-1.5">
                    <h4 className="text-white font-bold text-sm flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-brand-cyan" />
                      <span>Reassure Parents</span>
                    </h4>
                    <p className="text-xs text-gray-400 leading-normal">
                      Helps parents understand whether growth is within normal ranges.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* How Does It Work */}
            <div className="border-t border-brand-border/40 pt-16 space-y-6">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">How Does the Baby Growth Calculator Work?</h2>
              <p className="text-gray-300 text-base leading-relaxed">
                The calculator uses general growth patterns based on age, height, weight, and gender.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="glass-panel border border-brand-border p-5 rounded-xl space-y-2 hover:border-brand-cyan/20 transition-all">
                  <h4 className="font-bold text-white text-base">Age Factor</h4>
                  <p className="text-xs text-gray-400 leading-normal">
                    Growth expectations change as the child gets older.
                  </p>
                </div>
                
                <div className="glass-panel border border-brand-border p-5 rounded-xl space-y-2 hover:border-brand-cyan/20 transition-all">
                  <h4 className="font-bold text-white text-base">Height Measurement</h4>
                  <p className="text-xs text-gray-400 leading-normal">
                    Compared with standard growth ranges.
                  </p>
                </div>

                <div className="glass-panel border border-brand-border p-5 rounded-xl space-y-2 hover:border-brand-cyan/20 transition-all">
                  <h4 className="font-bold text-white text-base">Weight Measurement</h4>
                  <p className="text-xs text-gray-400 leading-normal">
                    Evaluated against typical pediatric benchmarks.
                  </p>
                </div>

                <div className="glass-panel border border-brand-border p-5 rounded-xl space-y-2 hover:border-brand-cyan/20 transition-all">
                  <h4 className="font-bold text-white text-base">Gender Differences</h4>
                  <p className="text-xs text-gray-400 leading-normal">
                    Growth patterns may differ slightly between boys and girls.
                  </p>
                </div>
              </div>
            </div>

            {/* Results Table */}
            <div className="border-t border-brand-border/40 pt-16 space-y-6">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Understanding Baby Growth Results</h2>
              <div className="glass-panel border border-brand-border rounded-2xl overflow-hidden max-w-4xl mx-auto my-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-base">
                    <thead>
                      <tr className="bg-slate-900 border-b border-brand-border text-white font-bold">
                        <th className="p-4">Growth Range</th>
                        <th className="p-4">Meaning</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-brand-border/40">
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 font-bold text-brand-cyan">Below Average</td>
                        <td className="p-4 text-gray-300">May indicate slower growth patterns</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 font-bold text-brand-cyan">Normal Range</td>
                        <td className="p-4 text-gray-300">Typical healthy growth pattern</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 font-bold text-brand-cyan">Above Average</td>
                        <td className="p-4 text-gray-300">Higher-than-average growth pattern</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-xs text-gray-400 text-center">
                Growth interpretation should always consider individual health conditions.
              </p>
            </div>

            {/* Factors affecting baby growth */}
            <div className="border-t border-brand-border/40 pt-16 space-y-6">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Factors That Affect Baby Growth</h2>
              <p className="text-gray-300 text-base leading-relaxed">
                Several factors influence child growth and development:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {[
                  { title: "Genetics", desc: "Family traits strongly influence height and body structure." },
                  { title: "Nutrition", desc: "Balanced nutrition supports healthy growth." },
                  { title: "Physical Activity", desc: "Active movement supports bone and muscle development." },
                  { title: "Health Conditions", desc: "Medical conditions may affect growth patterns." },
                  { title: "Sleep Patterns", desc: "Proper sleep supports hormone development and growth." }
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
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Baby Growth Calculator vs Pediatric Growth Chart</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-5 space-y-2">
                    <p className="font-bold text-white uppercase tracking-wider text-[11px] text-brand-cyan">Baby Growth Calculator</p>
                    <ul className="list-disc pl-4 space-y-1 text-xs text-gray-350">
                      <li>Quick estimation</li>
                      <li>Easy understanding of growth patterns</li>
                      <li>Helpful for parents</li>
                      <li>Does not replace clinical evaluation</li>
                    </ul>
                  </div>
                  <div className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-5 space-y-2">
                    <p className="font-bold text-white uppercase tracking-wider text-[11px] text-brand-cyan">Pediatric Growth Chart</p>
                    <ul className="list-disc pl-4 space-y-1 text-xs text-gray-350">
                      <li>Clinically validated</li>
                      <li>Used by healthcare providers</li>
                      <li>Tracks long-term growth trends</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">How Healthcare Technology Supports Child Growth Tracking</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  Modern healthcare platforms improve child health monitoring through digital tools. Technology supports:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-305 text-sm">
                  <li>Growth tracking apps</li>
                  <li>Pediatric patient records</li>
                  <li>Telemedicine consultations</li>
                  <li>Health monitoring dashboards</li>
                  <li>Automated reminders for checkups</li>
                </ul>
                <p className="text-gray-300 text-base leading-relaxed mt-2">
                  These tools help improve communication between parents and healthcare providers.
                </p>
              </div>
            </div>

            {/* FAQs Accordions */}
            <div className="border-t border-brand-border/40 pt-16 space-y-8">
              <div className="text-center max-w-3xl mx-auto mb-8">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Frequently Asked Questions</h2>
                <p className="text-base text-gray-400 mt-2">
                  Common questions about child growth tracking and development metrics.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start font-sans">
                {/* Column 1 */}
                <div className="space-y-4">
                  {[
                    { q: "1. What is a baby growth calculator?", a: "A baby growth calculator estimates a child’s growth status based on age, height, and weight." },
                    { q: "2. Is baby growth the same for all children?", a: "No. Every child grows at a different pace influenced by genetics and environment." },
                    { q: "3. Can this calculator diagnose growth problems?", a: "No. It only provides estimates and does not replace medical evaluation." },
                    { q: "4. What is considered normal baby growth?", a: "Normal growth depends on age, gender, and pediatric growth standards." },
                    { q: "5. Why is tracking baby growth important?", a: "It helps monitor healthy development and detect early concerns." }
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
                    { q: "6. How often should baby growth be checked?", a: "Growth is usually monitored during regular pediatric visits." },
                    { q: "7. Does nutrition affect baby growth?", a: "Yes. Nutrition plays a major role in healthy development." },
                    { q: "8. Can sleep affect baby growth?", a: "Yes. Growth hormone is released during sleep, supporting development." },
                    { q: "9. What age is baby growth most important?", a: "Early childhood (0–5 years) is a critical growth period." },
                    { q: "10. Should I rely only on a calculator for growth tracking?", a: "No. It should be used along with pediatric growth charts and medical advice." }
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
                  { name: "Baby Age Calculator", path: "/calculators/baby-age-calculator" },
                  { name: "Baby Weight Calculator", path: "/calculators/baby-weight-calculator" },
                  { name: "Fetal Growth Calculator", path: "/calculators/fetal-growth-calculator" },
                  { name: "BMI Calculator", path: "/calculators/bmi-calculator" },
                  { name: "Water Intake Calculator", path: "/calculators/water-intake-calculator" },
                  { name: "Metabolic Age Calculator", path: "/calculators/metabolic-age-calculator" }
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
