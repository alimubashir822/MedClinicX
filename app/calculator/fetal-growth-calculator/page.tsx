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
import FetalGrowthCalculatorClient from "./FetalGrowthCalculatorClient";

export const metadata: Metadata = {
  title: "Fetal Growth Calculator - Track Baby Growth & Gestational Development | Med Clinic X",
  description:
    "Use our free Fetal Growth Calculator to understand fetal growth stages, gestational age development, and estimated baby size during pregnancy. Learn how doctors monitor fetal growth.",
  keywords: [
    "Fetal Growth Calculator",
    "Track Baby Growth",
    "Gestational Development",
    "Estimated fetal weight Hadlock",
    "Ultrasound biometrics calculator",
    "Pregnancy weeks growth chart",
  ],
  alternates: {
    canonical: "https://medclinicx.com/calculator/fetal-growth-calculator/",
  },
  openGraph: {
    title: "Fetal Growth Calculator - Track Baby Growth & Gestational Development | Med Clinic X",
    description:
      "Use our free Fetal Growth Calculator to understand fetal growth stages, gestational age development, and estimated baby size during pregnancy. Learn how doctors monitor fetal growth.",
    url: "https://medclinicx.com/calculator/fetal-growth-calculator/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fetal Growth Calculator | Med Clinic X",
      },
    ],
  },
};

export default function FetalGrowthCalculatorPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://medclinicx.com" },
      { "@type": "ListItem", position: 2, name: "Fetal Growth Calculator", item: "https://medclinicx.com/calculator/fetal-growth-calculator/" },
    ],
  };

  const calculatorSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Fetal Growth Calculator",
    description: "Use our free Fetal Growth Calculator to understand fetal growth stages, gestational age development, and estimated baby size during pregnancy.",
    url: "https://medclinicx.com/calculator/fetal-growth-calculator/",
    about: {
      "@type": "MedicalCondition",
      name: "Pregnancy Gestational Growth & Ultrasound Biometrics",
      possibleTreatment: [
        {
          "@type": "MedicalTherapy",
          name: "Prenatal Fetal Weight and Growth Verification",
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
              Fetal Growth Calculator: <span className="text-gradient-cyan-indigo">Estimate Baby Growth During Pregnancy</span>
            </h1>

            <div className="glass-panel border border-brand-border rounded-2xl p-8 max-w-4xl mx-auto text-left space-y-4 mb-16">
              <h2 className="text-xl font-bold text-brand-cyan font-display">
                Introduction: Understand Fetal Growth Progress
              </h2>
              <p className="text-gray-300 text-base leading-relaxed">
                Fetal growth is an important part of pregnancy monitoring. It helps healthcare providers understand how the baby is developing inside the womb and whether growth is progressing as expected.
              </p>
              <p className="text-gray-300 text-base leading-relaxed">
                Our <strong>Fetal Growth Calculator</strong> helps estimate fetal development based on gestational age and commonly used pregnancy growth measurements.
              </p>
              
              <div className="py-2">
                <p className="text-gray-300 text-base leading-relaxed font-semibold text-white mb-2">
                  This tool can help users:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-gray-300 text-base">
                  <li>Understand fetal development stages</li>
                  <li>Estimate baby growth by week of pregnancy</li>
                  <li>Learn about typical fetal size progression</li>
                  <li>Support pregnancy education and awareness</li>
                </ul>
              </div>

              <div className="py-2">
                <p className="text-gray-300 text-base leading-relaxed font-semibold text-white mb-2">
                  It may be useful for:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-gray-300 text-base">
                  <li>Expecting parents</li>
                  <li>Obstetric care learners</li>
                  <li>Healthcare professionals</li>
                  <li>Pregnancy education platforms</li>
                </ul>
              </div>

              <div className="bg-rose-500/10 border border-rose-500/20 text-rose-300 rounded-xl p-4 flex gap-3 text-sm">
                <AlertTriangle className="w-5.5 h-5.5 text-rose-400 shrink-0 mt-0.5" />
                <p className="text-base leading-normal">
                  <strong>Important:</strong> This calculator provides an estimate for educational purposes only. It should not replace ultrasound scans, prenatal checkups, or professional medical advice.
                </p>
              </div>
            </div>
          </div>

          {/* Calculator Section */}
          <section className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4" id="fet3gw">Fetal Growth Calculator</h2>
              <p className="text-base text-gray-300 max-w-2xl mx-auto leading-relaxed mb-6">
                Estimate Fetal Growth & Development: Enter pregnancy information below to estimate fetal growth stage.
              </p>
              <div className="inline-flex flex-wrap justify-center gap-3 mb-8 bg-slate-900/60 p-4 rounded-xl border border-brand-border/40">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block w-full mb-1">Calculator Inputs:</span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Gestational age (weeks)
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Maternal health information (optional)
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Fetal measurement inputs (if applicable)
                </span>
              </div>
            </div>
            
            <div className="glass-panel border border-brand-border rounded-3xl p-6 md:p-8">
              <FetalGrowthCalculatorClient />
              <p className="text-base text-gray-500 text-center mt-6">
                Your estimated fetal growth result will appear here.
              </p>
            </div>
          </section>

          {/* Educational Content Sections */}
          <div className="border-t border-brand-border/40 pt-16 space-y-16 text-gray-300">
            
            {/* What is it */}
            <div className="space-y-4">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">What Is a Fetal Growth Calculator?</h2>
              <p className="text-gray-300 text-base leading-relaxed">
                A <strong>Fetal Growth Calculator</strong> is a pregnancy tool used to estimate fetal development based on gestational age and growth patterns.
              </p>
              <p className="text-gray-300 text-base leading-relaxed">
                Fetal growth is usually monitored throughout pregnancy using:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-gray-300 text-base">
                <li>Ultrasound measurements</li>
                <li>Gestational age tracking</li>
                <li>Biometric parameters</li>
              </ul>
              <p className="text-gray-300 text-base leading-relaxed">
                This calculator helps provide a general understanding of fetal development stages.
              </p>
            </div>

            {/* Why Important */}
            <div className="border-t border-brand-border/40 pt-16 space-y-6">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Why Is Fetal Growth Monitoring Important?</h2>
              <p className="text-gray-300 text-base leading-relaxed">
                Monitoring fetal growth helps ensure healthy pregnancy progression.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="glass-panel border border-brand-border p-5 rounded-xl space-y-2 hover:border-brand-cyan/20 transition-all">
                  <h4 className="font-bold text-white text-base">Tracks Baby Development</h4>
                  <p className="text-xs text-gray-400 leading-relaxed mt-1">
                    Helps estimate how the baby is growing week by week.
                  </p>
                </div>
                <div className="glass-panel border border-brand-border p-5 rounded-xl space-y-2 hover:border-brand-cyan/20 transition-all">
                  <h4 className="font-bold text-white text-base">Identifies Growth Patterns</h4>
                  <p className="text-xs text-gray-400 leading-relaxed mt-1">
                    Assists in understanding whether growth is within expected ranges.
                  </p>
                </div>
                <div className="glass-panel border border-brand-border p-5 rounded-xl space-y-2 hover:border-brand-cyan/20 transition-all">
                  <h4 className="font-bold text-white text-base">Supports Prenatal Care</h4>
                  <p className="text-xs text-gray-400 leading-relaxed mt-1">
                    Helps healthcare providers evaluate pregnancy progress.
                  </p>
                </div>
                <div className="glass-panel border border-brand-border p-5 rounded-xl space-y-2 hover:border-brand-cyan/20 transition-all">
                  <h4 className="font-bold text-white text-base">Improves Pregnancy Awareness</h4>
                  <p className="text-xs text-gray-400 leading-relaxed mt-1">
                    Helps parents understand developmental milestones.
                  </p>
                </div>
              </div>
            </div>

            {/* How It Works */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start border-t border-brand-border/40 pt-16">
              <div className="space-y-3">
                <h3 className="font-display font-bold text-xl text-white">How Does the Fetal Growth Calculator Work?</h3>
                <p className="text-gray-400 text-sm leading-normal">
                  The calculator estimates fetal development based on pregnancy progression.
                </p>
              </div>

              <div className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-5 space-y-4 lg:col-span-2">
                <div>
                  <h4 className="text-brand-cyan font-bold text-sm">Gestational Age</h4>
                  <p className="text-xs text-gray-300 mt-1">
                    Pregnancy is measured in weeks starting from the first day of the last menstrual period.
                  </p>
                </div>
                <div>
                  <h4 className="text-brand-cyan font-bold text-sm">Growth Charts</h4>
                  <p className="text-xs text-gray-300 mt-1">
                    The calculator references typical fetal growth patterns by week.
                  </p>
                </div>
                <div>
                  <h4 className="text-brand-cyan font-bold text-sm">Estimated Size</h4>
                  <p className="text-xs text-gray-300 mt-1">
                    It may estimate fetal length, weight range, and development stage.
                  </p>
                </div>
              </div>
            </div>

            {/* Trimester Growth Details */}
            <div className="border-t border-brand-border/40 pt-16 space-y-6">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Fetal Growth by Pregnancy Trimester</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass-panel border border-brand-border/60 p-5 rounded-xl space-y-2 hover:border-brand-cyan/20 transition-all">
                  <h4 className="font-bold text-white text-base">First Trimester (Weeks 1–12)</h4>
                  <ul className="list-disc pl-4 text-xs text-gray-400 space-y-1 mt-1">
                    <li>Early development of organs</li>
                    <li>Formation of basic body structures</li>
                    <li>Rapid cell growth</li>
                  </ul>
                </div>
                <div className="glass-panel border border-brand-border/60 p-5 rounded-xl space-y-2 hover:border-brand-cyan/20 transition-all">
                  <h4 className="font-bold text-white text-base">Second Trimester (Weeks 13–26)</h4>
                  <ul className="list-disc pl-4 text-xs text-gray-400 space-y-1 mt-1">
                    <li>Significant growth in size</li>
                    <li>Movement becomes noticeable</li>
                    <li>Development of senses</li>
                  </ul>
                </div>
                <div className="glass-panel border border-brand-border/60 p-5 rounded-xl space-y-2 hover:border-brand-cyan/20 transition-all">
                  <h4 className="font-bold text-white text-base">Third Trimester (Weeks 27–40)</h4>
                  <ul className="list-disc pl-4 text-xs text-gray-400 space-y-1 mt-1">
                    <li>Rapid weight gain</li>
                    <li>Organ maturation</li>
                    <li>Preparation for birth</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Results Table */}
            <div className="border-t border-brand-border/40 pt-16 space-y-6">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Understanding Fetal Growth Results</h2>
              <p className="text-gray-300 text-base">
                Fetal growth varies from pregnancy to pregnancy. Use this table as a general reference:
              </p>
              <div className="glass-panel border border-brand-border rounded-2xl overflow-hidden max-w-4xl mx-auto my-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-base">
                    <thead>
                      <tr className="bg-slate-900 border-b border-brand-border text-white font-bold">
                        <th className="p-4">Gestational Stage</th>
                        <th className="p-4">General Development</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-brand-border/40">
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 font-bold text-brand-cyan">Early Pregnancy</td>
                        <td className="p-4 text-gray-300">Organ formation begins</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 font-bold text-brand-cyan">Mid Pregnancy</td>
                        <td className="p-4 text-gray-300">Growth and movement increase</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 font-bold text-brand-cyan">Late Pregnancy</td>
                        <td className="p-4 text-gray-300">Full development and weight gain</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Factors affecting growth */}
            <div className="border-t border-brand-border/40 pt-16 space-y-6">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Factors That Affect Fetal Growth</h2>
              <p className="text-gray-300 text-base leading-relaxed">
                Several factors may influence fetal development:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {[
                  { title: "Maternal Nutrition", desc: "Proper nutrition supports healthy growth." },
                  { title: "Genetics", desc: "Genetic factors influence baby size and development." },
                  { title: "Maternal Health", desc: "Conditions such as diabetes or hypertension may affect growth." },
                  { title: "Placental Health", desc: "The placenta plays a key role in nutrient delivery." },
                  { title: "Lifestyle Factors", desc: "Healthy habits support pregnancy outcomes." }
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
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Fetal Growth Calculator vs Ultrasound</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-5 space-y-2">
                    <p className="font-bold text-white uppercase tracking-wider text-[11px] text-brand-cyan">Fetal Growth Calculator</p>
                    <ul className="list-disc pl-4 space-y-1 text-xs text-gray-300">
                      <li>Quick estimate</li>
                      <li>Educational use</li>
                      <li>Helps understand pregnancy stages</li>
                      <li>Does not measure actual fetal size</li>
                      <li>Cannot replace clinical evaluation</li>
                    </ul>
                  </div>
                  <div className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-5 space-y-2">
                    <p className="font-bold text-white uppercase tracking-wider text-[11px] text-brand-cyan">Ultrasound Examination</p>
                    <ul className="list-disc pl-4 space-y-1 text-xs text-gray-300">
                      <li>Accurate fetal measurements</li>
                      <li>Clinical diagnosis tool</li>
                      <li>Used in prenatal care</li>
                      <li>Standard method for growth assessment</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">How Healthcare Technology Supports Pregnancy Care</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  Modern healthcare systems improve prenatal care through digital tools. Healthcare technology can support:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-gray-300 text-base">
                  <li>Pregnancy tracking apps</li>
                  <li>Telemedicine consultations</li>
                  <li>Digital ultrasound records</li>
                  <li>Patient education platforms</li>
                  <li>Automated health reminders</li>
                </ul>
                <p className="text-gray-300 text-base leading-relaxed">
                  These tools improve communication between patients and healthcare providers.
                </p>
              </div>
            </div>

            {/* FAQs Accordions */}
            <div className="border-t border-brand-border/40 pt-16 space-y-8">
              <div className="text-center max-w-3xl mx-auto mb-8">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Frequently Asked Questions About Fetal Growth Calculator</h2>
                <p className="text-base text-gray-400 mt-2">
                  Common questions about baby size development and ultrasound measurements.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start font-sans">
                {/* Column 1 */}
                <div className="space-y-4">
                  {[
                    { q: "1. What is a fetal growth calculator?", a: "A fetal growth calculator estimates baby development based on gestational age and typical growth patterns." },
                    { q: "2. How is fetal growth measured?", a: "It is usually measured using ultrasound and pregnancy week tracking." },
                    { q: "3. Can a fetal growth calculator replace ultrasound?", a: "No. It is only an estimate and does not replace medical imaging." },
                    { q: "4. What is gestational age?", a: "Gestational age is the number of weeks of pregnancy." },
                    { q: "5. When does fetal growth become noticeable?", a: "Growth becomes more significant during the second and third trimesters." }
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
                    { q: "6. What affects fetal growth?", a: "Nutrition, genetics, maternal health, and lifestyle factors can influence growth." },
                    { q: "7. Is fetal growth the same for every pregnancy?", a: "No. Each pregnancy is unique, and growth rates may vary." },
                    { q: "8. Why do doctors monitor fetal growth?", a: "To ensure the baby is developing normally and to detect any concerns early." },
                    { q: "9. Can I use this calculator at home?", a: "Yes, for educational and awareness purposes only." },
                    { q: "10. Is this tool medically accurate?", a: "It provides estimates only and should not be used for diagnosis or treatment." }
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
              <p className="text-base leading-relaxed">Explore more pregnancy and health calculators:</p>
              
              <div className="grid grid-cols-2 sm:grid-cols-6 gap-4 mt-6">
                {[
                  { name: "Baby Weight Calculator", path: "/calculator/baby-weight-calculator" },
                  { name: "Baby Age Calculator", path: "/calculator/baby-age-calculator" },
                  { name: "Medication Dosage Calculator", path: "/calculator/medication-dosage-calculator" },
                  { name: "BMI Calculator", path: "/solutions" },
                  { name: "Water Intake Calculator", path: "/calculator/water-calculator" },
                  { name: "Metabolic Age Calculator", path: "/calculator/metabolic-age-calculator" }
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
                  Med Clinic X helps healthcare organizations build modern digital healthcare solutions that improve prenatal care, patient engagement, and clinical workflows.
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
