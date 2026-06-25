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
  Shield
} from "lucide-react";
import BabyWeightCalculatorClient from "./BabyWeightCalculatorClient";

export const metadata: Metadata = {
  title: "Baby Weight Calculator - Estimate Your Baby’s Healthy Weight by Age | Med Clinic X",
  description:
    "Use our free Baby Weight Calculator to estimate your baby’s expected weight based on age, gender, and growth information. Understand baby growth patterns and track healthy development.",
  keywords: [
    "Baby Weight Calculator",
    "Baby Growth Chart",
    "Calculate baby weight",
    "Infant growth tracker",
    "WHO growth percentiles",
    "Newborn weight calculator",
  ],
  alternates: {
    canonical: "https://medclinicx.com/calculators/baby-weight-calculator/",
  },
  openGraph: {
    title: "Baby Weight Calculator - Estimate Your Baby’s Healthy Weight by Age | Med Clinic X",
    description:
      "Use our free Baby Weight Calculator to estimate your baby’s expected weight based on age, gender, and growth information. Understand baby growth patterns and track healthy development.",
    url: "https://medclinicx.com/calculators/baby-weight-calculator/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Baby Weight Calculator | Med Clinic X",
      },
    ],
  },
};

export default function BabyWeightCalculatorPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://medclinicx.com" },
      { "@type": "ListItem", position: 2, name: "Baby Weight Calculator", item: "https://medclinicx.com/calculators/baby-weight-calculator/" },
    ],
  };

  const calculatorSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Baby Weight Calculator",
    description: "Use our free Baby Weight Calculator to estimate your baby’s expected weight based on age, gender, and growth information.",
    url: "https://medclinicx.com/calculators/baby-weight-calculator/",
    about: {
      "@type": "MedicalCondition",
      name: "Infant Growth & Development",
      possibleTreatment: [
        {
          "@type": "MedicalTherapy",
          name: "Pediatric Growth Assessment & Nutritional Guidance",
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
              <span className="text-[11px] font-bold text-brand-cyan uppercase tracking-widest font-sans">Fitness & Wellness Tools</span>
            </div>
            
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-6 animate-fade-in">
              Baby Weight Calculator: <span className="text-gradient-cyan-indigo">Track Your Baby’s Growth & Weight Development</span>
            </h1>

            <div className="glass-panel border border-brand-border rounded-2xl p-8 max-w-4xl mx-auto text-left space-y-4 mb-16">
              <h2 className="text-xl font-bold text-brand-cyan font-display">
                Introduction: Understand Your Baby’s Growth
              </h2>
              <p className="text-gray-300 text-base leading-relaxed">
                Monitoring a baby’s growth is an important part of early childhood health. A baby’s weight can change quickly during the first months and years of life, and understanding normal growth patterns can help parents stay informed.
              </p>
              <p className="text-gray-300 text-base leading-relaxed">
                Our <strong>Baby Weight Calculator</strong> helps estimate a baby’s expected weight based on factors such as age, gender, and growth information.
              </p>
              <p className="text-gray-300 text-base leading-relaxed font-semibold text-white">
                This tool can help parents and caregivers:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-2 text-base text-gray-300 font-medium">
                {[
                  "Understand general baby weight ranges",
                  "Track growth progress",
                  "Learn about healthy development patterns",
                  "Prepare questions for pediatric visits"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-300 text-base leading-relaxed">
                Every baby grows at a different pace. Growth can be influenced by genetics, feeding patterns, health, and many other factors.
              </p>
              <div className="bg-rose-500/10 border border-rose-500/20 text-rose-300 rounded-xl p-4 flex gap-3 text-sm">
                <AlertTriangle className="w-5.5 h-5.5 text-rose-400 shrink-0 mt-0.5" />
                <p className="text-base leading-normal">
                  <strong>Important:</strong> This calculator provides an estimate only and should not replace professional medical advice, pediatric growth assessments, or regular healthcare checkups.
                </p>
              </div>
            </div>
          </div>

          {/* Calculator Section */}
          <section className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">Baby Weight Calculator</h2>
              <p className="text-base text-gray-300 max-w-2xl mx-auto leading-relaxed mb-6">
                Calculate Your Baby’s Estimated Weight: Enter your baby’s information below to estimate expected weight.
              </p>
              <div className="inline-flex flex-wrap justify-center gap-3 mb-8 bg-slate-900/60 p-4 rounded-xl border border-brand-border/40">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block w-full mb-1">Calculator Inputs:</span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Baby age
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Gender
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Current weight
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Height/length (optional)
                </span>
              </div>
            </div>
            
            <div className="glass-panel border border-brand-border rounded-3xl p-6 md:p-8">
              <BabyWeightCalculatorClient />
              <p className="text-base text-gray-500 text-center mt-6">
                Your estimated baby weight result will appear here.
              </p>
            </div>
          </section>

          {/* Educational content sections below the calculator */}
          <div className="border-t border-brand-border/40 pt-16 space-y-16 text-gray-300">
            
            {/* Row 1: What is it & Why is Monitoring Important */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">What Is a Baby Weight Calculator?</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  A <strong>Baby Weight Calculator</strong> is an online health tool that helps estimate expected weight ranges for babies based on age and other growth-related factors.
                </p>
                <p className="text-gray-300 text-base leading-relaxed">
                  Babies experience rapid physical changes during early development. Tracking weight helps parents and healthcare providers understand whether a baby is following a healthy growth pattern.
                </p>
                <p className="text-gray-300 text-base leading-relaxed font-semibold text-white">
                  A baby weight calculator can provide general guidance about:
                </p>
                <div className="bg-slate-900/40 border border-brand-border/50 rounded-xl p-5 space-y-2">
                  {[
                    "Weight progression metrics",
                    "Growth expectations by age milestones",
                    "Development trends tracking",
                    "Age-related weight averages"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Why Is Baby Weight Monitoring Important?</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  Baby weight is one of the key indicators used to monitor early growth and development. Regular weight tracking can help identify:
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-bold text-base flex items-center gap-2">
                      <span className="w-2 h-2 bg-brand-cyan rounded-full" /> Healthy Growth Patterns
                    </h4>
                    <p className="text-sm text-gray-400 pl-4 mt-0.5">Consistent growth over time is usually more important than a single measurement.</p>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base flex items-center gap-2">
                      <span className="w-2 h-2 bg-brand-cyan rounded-full" /> Feeding Progress
                    </h4>
                    <p className="text-sm text-gray-400 pl-4 mt-0.5">Weight changes may provide insight into whether feeding and nutrition are supporting growth.</p>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base flex items-center gap-2">
                      <span className="w-2 h-2 bg-brand-cyan rounded-full" /> Development Tracking
                    </h4>
                    <p className="text-sm text-gray-400 pl-4 mt-0.5">Pediatricians often review growth measurements during routine visits.</p>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base flex items-center gap-2">
                      <span className="w-2 h-2 bg-brand-cyan rounded-full" /> Early Awareness
                    </h4>
                    <p className="text-sm text-gray-400 pl-4 mt-0.5">Tracking growth can help parents discuss concerns with healthcare providers sooner.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2: How does the calculator work */}
            <div className="border-t border-brand-border/40 pt-16 space-y-6">
              <div className="text-center max-w-3xl mx-auto mb-10">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">How Does the Baby Weight Calculator Work?</h2>
                <p className="text-base text-gray-400 mt-2">
                  The calculator estimates baby weight using common growth-related information.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="glass-panel border border-brand-border/50 p-6 rounded-xl space-y-3 hover:border-brand-cyan/20 transition-all hover:scale-[1.02] flex flex-col">
                  <h4 className="font-bold text-white text-base">Baby Age</h4>
                  <p className="text-xs text-gray-400 leading-relaxed flex-grow">
                    Age is an important factor because babies grow at different rates during different stages (Newborn period, Infant stage, Toddler development).
                  </p>
                </div>
                <div className="glass-panel border border-brand-border/50 p-6 rounded-xl space-y-3 hover:border-brand-cyan/20 transition-all hover:scale-[1.02] flex flex-col">
                  <h4 className="font-bold text-white text-base">Gender</h4>
                  <p className="text-xs text-gray-400 leading-relaxed flex-grow">
                    Growth patterns vary slightly between boys and girls, which is why gender is factored into growth estimates.
                  </p>
                </div>
                <div className="glass-panel border border-brand-border/50 p-6 rounded-xl space-y-3 hover:border-brand-cyan/20 transition-all hover:scale-[1.02] flex flex-col">
                  <h4 className="font-bold text-white text-base">Current Weight</h4>
                  <p className="text-xs text-gray-400 leading-relaxed flex-grow">
                    Current weight helps compare your baby&apos;s measurement with general WHO statistical distributions.
                  </p>
                </div>
                <div className="glass-panel border border-brand-border/50 p-6 rounded-xl space-y-3 hover:border-brand-cyan/20 transition-all hover:scale-[1.02] flex flex-col">
                  <h4 className="font-bold text-white text-base">Height or Length</h4>
                  <p className="text-xs text-gray-400 leading-relaxed flex-grow">
                    Length can provide additional height-to-weight context when evaluating healthy growth proportions.
                  </p>
                </div>
              </div>
            </div>

            {/* Row 3: Understanding Results Table */}
            <div className="border-t border-brand-border/40 pt-16 space-y-6">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Understanding Baby Weight Results</h2>
              <p className="text-gray-300 text-base leading-relaxed">
                Baby weight results are usually compared with general growth standards.
              </p>
              
              <div className="glass-panel border border-brand-border rounded-2xl overflow-hidden max-w-4xl mx-auto my-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-base">
                    <thead>
                      <tr className="bg-slate-900 border-b border-brand-border text-white font-bold">
                        <th className="p-4">Result</th>
                        <th className="p-4">Meaning</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-brand-border/40">
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 font-bold text-brand-cyan">Within Expected Range</td>
                        <td className="p-4 text-gray-300">Weight may be within common growth patterns for age</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 font-bold text-brand-cyan">Below Expected Range</td>
                        <td className="p-4 text-gray-300">May require discussion with a healthcare provider depending on overall growth</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 font-bold text-brand-cyan">Above Expected Range</td>
                        <td className="p-4 text-gray-300">May require evaluation along with other growth measurements</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-gray-400 text-sm text-center">
                A single weight measurement does not determine whether a baby is healthy. Growth patterns over time are more meaningful.
              </p>
            </div>

            {/* Row 4: Average Weight & Factors */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start border-t border-brand-border/40 pt-16">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Average Baby Weight by Age</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  Baby weights vary widely, but general patterns are often observed:
                </p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-bold text-white text-base">Newborns</h4>
                    <p className="text-sm text-gray-400">Newborn weight can vary depending on pregnancy duration, genetics, maternal health, and birth conditions.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">First Months</h4>
                    <p className="text-sm text-gray-400">Babies often experience rapid growth and weight gains during the first year of life.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">Toddler Years</h4>
                    <p className="text-sm text-gray-400">Growth may slow down compared with infancy but continues steadily.</p>
                  </div>
                </div>
                <p className="text-xs text-gray-400 italic">
                  Healthcare providers usually track weight along with length and head circumference for full growth mapping.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Factors That Affect Baby Weight</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  Many factors influence a baby’s growth:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { name: "Genetics", desc: "Family growth patterns can influence size." },
                    { name: "Feeding", desc: "Breast, formula, and nutritional habits." },
                    { name: "Birth Weight", desc: "Starting size influences early trajectory." },
                    { name: "Health Conditions", desc: "Underlying issues may alter absorption." },
                    { name: "Activity", desc: "Crawling and moving shifts energy use." }
                  ].map((f, idx) => (
                    <div key={idx} className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-4 space-y-1">
                      <p className="font-bold text-brand-cyan text-sm">{f.name}</p>
                      <p className="text-xs text-gray-400 leading-normal">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Row 5: Supporting growth & Comparison */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start border-t border-brand-border/40 pt-16">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">How Parents Can Support Healthy Baby Growth</h2>
                <div className="space-y-4 text-sm text-gray-300">
                  <div>
                    <h4 className="font-bold text-white flex items-center gap-2">Regular Pediatric Visits</h4>
                    <p className="text-gray-400 mt-1">Routine checkups allow healthcare providers to monitor growth milestones and chart records accurately.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white flex items-center gap-2">Balanced Nutrition</h4>
                    <p className="text-gray-400 mt-1">Proper feeding cycles (breast milk, formula, and transitioning to solids) support early cellular development.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white flex items-center gap-2">Monitoring Overall Development</h4>
                    <p className="text-gray-400 mt-1">Growth includes more than weight, including movement, cognitive skills, and general physical milestones.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white flex items-center gap-2">Creating Healthy Routines</h4>
                    <p className="text-gray-400 mt-1">Consistency in sleep schedules, feeding times, and rest cycles promotes steady metabolic growth.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Calculator vs Pediatric Assessment</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-5 space-y-2">
                    <p className="font-bold text-white uppercase tracking-wider text-[11px] text-brand-cyan">Baby Weight Calculator</p>
                    <ul className="list-disc pl-4 space-y-1 text-xs text-gray-300">
                      <li>Quick estimate</li>
                      <li>Easy to use</li>
                      <li>Helps parents understand growth concepts</li>
                      <li>Does not evaluate clinical parameters</li>
                    </ul>
                  </div>
                  <div className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-5 space-y-2">
                    <p className="font-bold text-white uppercase tracking-wider text-[11px] text-brand-cyan">Pediatric Assessment</p>
                    <ul className="list-disc pl-4 space-y-1 text-xs text-gray-300">
                      <li>Professional evaluation</li>
                      <li>Tracks height, weight, and head metrics</li>
                      <li>Considers complete medical history</li>
                      <li>Formulates official medical diagnoses</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed mt-4">
                  A calculator serves as a helpful educational tool for quick checks, while pediatric care provides clinical growth diagnostic tracking.
                </p>
              </div>
            </div>

            {/* Row 6: Technology & Monitoring */}
            <div className="border-t border-brand-border/40 pt-16 space-y-4 text-center max-w-3xl mx-auto">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">How Technology Helps Parents Monitor Health</h2>
              <p className="text-gray-300 text-base leading-relaxed">
                Digital healthcare tools are making health information easier to access. Healthcare technology can support:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mt-6">
                {[
                  "Growth tracking",
                  "Patient communication",
                  "Online health resources",
                  "Digital health records",
                  "Remote health support"
                ].map((item, idx) => (
                  <div key={idx} className="glass-panel border border-brand-border p-3.5 rounded-xl text-center text-xs font-bold text-brand-cyan">
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-400 mt-4">
                Modern digital healthcare platforms help families and healthcare providers stay connected and informed.
              </p>
            </div>

            {/* Row 7: FAQs Accordions */}
            <div className="border-t border-brand-border/40 pt-16 space-y-8">
              <div className="text-center max-w-3xl mx-auto mb-8">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Frequently Asked Questions</h2>
                <p className="text-base text-gray-400 mt-2">
                  Find quick answers to common questions about estimating and tracking baby weight levels.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start font-sans">
                {/* Column 1 */}
                <div className="space-y-4">
                  {[
                    {
                      q: "1. What is a baby weight calculator?",
                      a: "A baby weight calculator is an online tool that estimates expected baby weight based on age, gender, and growth information."
                    },
                    {
                      q: "2. How accurate is a baby weight calculator?",
                      a: "It provides an estimate based on general growth patterns. A pediatrician provides the most accurate evaluation of your baby's growth."
                    },
                    {
                      q: "3. What is a normal baby weight?",
                      a: "Normal baby weight varies depending on age, genetics, feeding, and development. Growth patterns are more important than one number."
                    },
                    {
                      q: "4. How often should I check my baby’s weight?",
                      a: "Weight monitoring frequency depends on your baby’s age and healthcare provider recommendations."
                    },
                    {
                      q: "5. Does birth weight affect future growth?",
                      a: "Birth weight can influence early growth patterns, but many other factors affect development."
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
                      q: "6. Should I worry if my baby is not gaining weight quickly?",
                      a: "Every baby grows differently. If you have concerns about weight gain, discuss them with a pediatric healthcare provider."
                    },
                    {
                      q: "7. Can a baby weight calculator diagnose growth problems?",
                      a: "No. It only provides an estimate and cannot diagnose health conditions."
                    },
                    {
                      q: "8. Do boys and girls have different growth patterns?",
                      a: "Yes. Growth patterns can vary, which is why many growth tools consider gender."
                    },
                    {
                      q: "9. What factors affect baby weight gain?",
                      a: "Feeding, genetics, health, activity, and developmental stage can all influence weight gain."
                    },
                    {
                      q: "10. Why is tracking baby growth important?",
                      a: "Tracking growth helps parents and healthcare providers understand development and identify potential concerns early."
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

            {/* Row 8: Related Tools */}
            <div className="border-t border-brand-border/40 pt-16 space-y-4">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Related Healthcare Calculators</h2>
              <p className="text-base leading-relaxed text-gray-400">
                Explore more helpful clinical and health calculators:
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-6">
                {calculatorData
                  .filter((c) => c.id !== "baby-weight-calculator")
                  .sort((a, b) => {
                    const currentCat = calculatorData.find((c) => c.id === "baby-weight-calculator")?.category;
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

            {/* CTA Section */}
            <div className="pt-12">
              <div className="relative rounded-3xl overflow-hidden p-8 md:p-16 text-center border border-brand-border bg-gradient-cyber my-8">
                <div className="absolute -top-24 -left-24 w-72 h-72 bg-brand-cyan/10 rounded-full blur-[90px] -z-10" />
                <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-brand-indigo/10 rounded-full blur-[90px] -z-10" />
                
                <h2 className="font-display font-bold text-3xl md:text-5xl text-white leading-tight">
                  Build Better Healthcare Experiences With Med Clinic X
                </h2>
                <p className="mt-4 text-base text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Med Clinic X helps healthcare organizations create modern digital healthcare solutions that improve patient engagement, healthcare operations, and access to information.
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
                  Looking to build a modern healthcare solution for your organization? Connect with Med Clinic X today.
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
