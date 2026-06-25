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
import BabyAgeCalculatorClient from "./BabyAgeCalculatorClient";

export const metadata: Metadata = {
  title: "Baby Age Calculator - Calculate Your Baby’s Age in Weeks, Months & Years | Med Clinic X",
  description:
    "Use our free Baby Age Calculator to calculate your baby’s exact age in weeks, months, and days. Track your baby’s growth milestones and understand development stages easily.",
  keywords: [
    "Baby Age Calculator",
    "Calculate baby age",
    "Baby age in weeks",
    "Baby age in months",
    "Infant age tracker",
    "Development milestone tracker",
  ],
  alternates: {
    canonical: "https://medclinicx.com/calculators/baby-age-calculator/",
  },
  openGraph: {
    title: "Baby Age Calculator - Calculate Your Baby’s Age in Weeks, Months & Years | Med Clinic X",
    description:
      "Use our free Baby Age Calculator to calculate your baby’s exact age in weeks, months, and days. Track your baby’s growth milestones and understand development stages easily.",
    url: "https://medclinicx.com/calculators/baby-age-calculator/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Baby Age Calculator | Med Clinic X",
      },
    ],
  },
};

export default function BabyAgeCalculatorPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://medclinicx.com" },
      { "@type": "ListItem", position: 2, name: "Baby Age Calculator", item: "https://medclinicx.com/calculators/baby-age-calculator/" },
    ],
  };

  const calculatorSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Baby Age Calculator",
    description: "Use our free Baby Age Calculator to calculate your baby’s exact age in weeks, months, and days.",
    url: "https://medclinicx.com/calculators/baby-age-calculator/",
    about: {
      "@type": "MedicalCondition",
      name: "Infant Growth & Development",
      possibleTreatment: [
        {
          "@type": "MedicalTherapy",
          name: "Pediatric Development Monitoring",
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
              Baby Age Calculator: <span className="text-gradient-cyan-indigo">Find Your Baby’s Exact Age</span>
            </h1>

            <div className="glass-panel border border-brand-border rounded-2xl p-8 max-w-4xl mx-auto text-left space-y-4 mb-16">
              <h2 className="text-xl font-bold text-brand-cyan font-display">
                Introduction: Calculate Your Baby’s Age Easily
              </h2>
              <p className="text-gray-300 text-base leading-relaxed">
                Tracking your baby’s age is an important part of understanding growth, development, and important milestones. During the first few years, babies experience rapid changes, and parents often need to know their baby’s exact age in weeks, months, or days.
              </p>
              <p className="text-gray-300 text-base leading-relaxed">
                Our <strong>Baby Age Calculator</strong> helps parents and caregivers quickly calculate a baby’s exact age based on the date of birth.
              </p>
              <p className="text-gray-300 text-base leading-relaxed font-semibold text-white">
                This tool can help you:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-2 text-base text-gray-300 font-medium">
                {[
                  "Find your baby’s current age",
                  "Calculate age in weeks, months, and days",
                  "Track developmental stages",
                  "Prepare for pediatric appointments",
                  "Understand age-related milestones"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-300 text-base leading-relaxed">
                Whether you are tracking feeding schedules, sleep patterns, vaccinations, or developmental progress, knowing your baby’s exact age can make planning easier.
              </p>
              <div className="bg-rose-500/10 border border-rose-500/20 text-rose-300 rounded-xl p-4 flex gap-3 text-sm">
                <AlertTriangle className="w-5.5 h-5.5 text-rose-400 shrink-0 mt-0.5" />
                <p className="text-base leading-normal">
                  <strong>Important:</strong> This calculator provides an estimate for age tracking purposes and should not replace professional medical advice or pediatric guidance.
                </p>
              </div>
            </div>
          </div>

          {/* Calculator Section */}
          <section className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">Baby Age Calculator</h2>
              <p className="text-base text-gray-300 max-w-2xl mx-auto leading-relaxed mb-6">
                Calculate Your Baby’s Exact Age: Enter your baby’s birth date below to calculate the current age.
              </p>
              <div className="inline-flex flex-wrap justify-center gap-3 mb-8 bg-slate-900/60 p-4 rounded-xl border border-brand-border/40">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block w-full mb-1">Calculator Inputs:</span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Baby’s date of birth
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Current date
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Gestational adjustments (optional)
                </span>
              </div>
            </div>
            
            <div className="glass-panel border border-brand-border rounded-3xl p-6 md:p-8">
              <BabyAgeCalculatorClient />
              <p className="text-base text-gray-500 text-center mt-6">
                Your baby’s exact age will appear here.
              </p>
            </div>
          </section>

          {/* Educational content sections below the calculator */}
          <div className="border-t border-brand-border/40 pt-16 space-y-16 text-gray-300">
            
            {/* Row 1: What is it & Why is it Important */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">What Is a Baby Age Calculator?</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  A <strong>Baby Age Calculator</strong> is an online tool that calculates the exact age of a baby from the date of birth.
                </p>
                <p className="text-gray-300 text-base leading-relaxed">
                  Unlike simply counting months, this calculator can provide a more detailed result by showing age in days, weeks, months, and years. This is especially useful during infancy because many developmental changes happen within short time periods.
                </p>
                <p className="text-gray-300 text-base leading-relaxed">
                  For example, healthcare providers often discuss milestones based on a baby’s age in weeks or months rather than only years.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Why Is Knowing Your Baby’s Exact Age Important?</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  A baby’s age helps parents and healthcare providers understand expected growth and development. Knowing the exact age can help with:
                </p>
                
                <div className="space-y-4 text-sm text-gray-300">
                  <div>
                    <h4 className="font-bold text-white flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Tracking Developmental Milestones
                    </h4>
                    <p className="text-gray-400 pl-4 mt-0.5">Parents can compare development stages based on age ranges like movement milestones, feeding changes, sleep patterns, and communication development.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Healthcare Appointments
                    </h4>
                    <p className="text-gray-400 pl-4 mt-0.5">Age is vital for scheduling pediatric checkups, vaccination schedules, and growth monitoring.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Daily Parenting Decisions
                    </h4>
                    <p className="text-gray-400 pl-4 mt-0.5">Baby age helps parents understand changing routines, diaper sizes, feeding volumes, and sleep needs.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2: How does the calculator work */}
            <div className="border-t border-brand-border/40 pt-16 space-y-6">
              <div className="text-center max-w-3xl mx-auto mb-10">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">How Does the Baby Age Calculator Work?</h2>
                <p className="text-base text-gray-400 mt-2">
                  The calculator uses a simple date calculation process comparing dates.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass-panel border border-brand-border/50 p-6 rounded-xl space-y-3 hover:border-brand-cyan/20 transition-all hover:scale-[1.02] flex flex-col">
                  <h4 className="font-bold text-white text-base">1. Baby Birth Date</h4>
                  <p className="text-xs text-gray-400 leading-relaxed flex-grow">
                    The tool uses the date your baby was born as the starting anchor point.
                  </p>
                </div>
                <div className="glass-panel border border-brand-border/50 p-6 rounded-xl space-y-3 hover:border-brand-cyan/20 transition-all hover:scale-[1.02] flex flex-col">
                  <h4 className="font-bold text-white text-base">2. Current Date</h4>
                  <p className="text-xs text-gray-400 leading-relaxed flex-grow">
                    The calculator compares the birth date with today&apos;s date (or any target date you specify).
                  </p>
                </div>
                <div className="glass-panel border border-brand-border/50 p-6 rounded-xl space-y-3 hover:border-brand-cyan/20 transition-all hover:scale-[1.02] flex flex-col">
                  <h4 className="font-bold text-white text-base">3. Age Calculation</h4>
                  <p className="text-xs text-gray-400 leading-relaxed flex-grow">
                    It calculates the exact difference and displays results in total days old, total weeks old, months & days, or years & months.
                  </p>
                </div>
              </div>
            </div>

            {/* Row 3: Understanding Results Table */}
            <div className="border-t border-brand-border/40 pt-16 space-y-6">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Understanding Baby Age Results</h2>
              <p className="text-gray-300 text-base leading-relaxed">
                Your baby’s age can be displayed in different formats depending on what information you need.
              </p>
              
              <div className="glass-panel border border-brand-border rounded-2xl overflow-hidden max-w-4xl mx-auto my-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-base">
                    <thead>
                      <tr className="bg-slate-900 border-b border-brand-border text-white font-bold">
                        <th className="p-4">Age Format</th>
                        <th className="p-4">Common Use</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-brand-border/40">
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 font-bold text-brand-cyan">Days</td>
                        <td className="p-4 text-gray-300">Useful for newborn tracking (diaper counts, feeding frequencies)</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 font-bold text-brand-cyan">Weeks</td>
                        <td className="p-4 text-gray-300">Common during early infancy (rapid developmental changes)</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 font-bold text-brand-cyan">Months</td>
                        <td className="p-4 text-gray-300">Common for growth milestones and developmental checks</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 font-bold text-brand-cyan">Years</td>
                        <td className="p-4 text-gray-300">Used for older children and toddlers</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-gray-400 text-sm text-center">
                Different healthcare and parenting situations may require different age formats.
              </p>
            </div>

            {/* Row 4: Milestones by Stage & Development Factors */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start border-t border-brand-border/40 pt-16">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Baby Age Milestones by Stage</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  Every baby develops at their own pace, but age ranges are commonly used to discuss development:
                </p>
                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="text-white font-bold">Newborn Stage</h4>
                    <p className="text-gray-400 mt-1">During the first weeks, parents monitor feeding patterns, sleep, weight changes, and early sensory responses.</p>
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Infant Stage</h4>
                    <p className="text-gray-400 mt-1">During the first year, babies commonly develop improved movement, communication skills, feeding changes, and early social interaction.</p>
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Toddler Stage</h4>
                    <p className="text-gray-400 mt-1">Between 12 to 24 months and beyond, children continue developing walking skills, language, independence, and coordination.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Factors That Make Baby Development Different</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  Although age provides a general guide, many factors influence development:
                </p>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  {[
                    { name: "Genetics", desc: "Unique biological characteristics." },
                    { name: "Nutrition", desc: "Appropriate feeding supports cell growth." },
                    { name: "Environment", desc: "Safe, supportive learning surroundings." },
                    { name: "Health Status", desc: "Absence of clinical growth restrictions." },
                    { name: "Growth Speed", desc: "Reaching milestones at individual rates." }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-3.5 space-y-1">
                      <p className="font-bold text-brand-cyan">{item.name}</p>
                      <p className="text-[10px] text-gray-400 leading-normal">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Row 5: Supporting Development & Manual vs Calculator */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start border-t border-brand-border/40 pt-16">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">How Parents Can Support Healthy Development</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  Parents can support their baby&apos;s growth through active routines:
                </p>
                <div className="space-y-3 bg-slate-900/40 border border-brand-border/50 rounded-xl p-5">
                  <ul className="list-none pl-0 space-y-2 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full shrink-0 mt-2" />
                      <span><strong>Regular Healthcare Visits:</strong> Routine pediatric visits help monitor physical, motor, and cognitive development.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full shrink-0 mt-2" />
                      <span><strong>Healthy Nutrition:</strong> Age-appropriate feeding supports energy levels and metabolic growth.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full shrink-0 mt-2" />
                      <span><strong>Interaction and Learning:</strong> Talking, playing, reading, and responding supports sensory-cognitive wiring.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full shrink-0 mt-2" />
                      <span><strong>Safe Environment:</strong> Creating a childproof environment helps babies explore their motor bounds safely.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Age Calculator vs Manual Counting</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-5 space-y-2">
                    <p className="font-bold text-white uppercase tracking-wider text-[11px] text-brand-cyan">Manual Calculation</p>
                    <ul className="list-disc pl-4 space-y-1 text-xs text-gray-300">
                      <li>Simple for basic counting</li>
                      <li>No digital tool needed</li>
                      <li>Can be difficult for exact weeks/days</li>
                      <li>Requires manual leap year offsets</li>
                    </ul>
                  </div>
                  <div className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-5 space-y-2">
                    <p className="font-bold text-white uppercase tracking-wider text-[11px] text-brand-cyan">Baby Age Calculator</p>
                    <ul className="list-disc pl-4 space-y-1 text-xs text-gray-300">
                      <li>Instant, accurate results</li>
                      <li>Calculates exact age</li>
                      <li>Shows multiple age formats</li>
                      <li>Estimates corrected age offsets</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed mt-4">
                  A calculator makes age tracking easier and eliminates counting errors across variable month lengths and leap years.
                </p>
              </div>
            </div>

            {/* Row 6: Technology & Monitoring */}
            <div className="border-t border-brand-border/40 pt-16 space-y-4 text-center max-w-3xl mx-auto">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">How Healthcare Technology Supports Parents</h2>
              <p className="text-gray-300 text-base leading-relaxed">
                Modern healthcare technology helps families manage health information more easily. Digital healthcare tools can support:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mt-6">
                {[
                  "Baby growth tracking",
                  "Appointment management",
                  "Health reminders",
                  "Patient communication",
                  "Online health resources"
                ].map((item, idx) => (
                  <div key={idx} className="glass-panel border border-brand-border p-3.5 rounded-xl text-center text-xs font-bold text-brand-cyan">
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-400 mt-4">
                Healthcare platforms help improve the connection between families and pediatric healthcare providers.
              </p>
            </div>

            {/* Row 7: FAQs Accordions */}
            <div className="border-t border-brand-border/40 pt-16 space-y-8">
              <div className="text-center max-w-3xl mx-auto mb-8">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Frequently Asked Questions</h2>
                <p className="text-base text-gray-400 mt-2">
                  Find quick answers to common questions about calculating baby age and developmental stages.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start font-sans">
                {/* Column 1 */}
                <div className="space-y-4">
                  {[
                    {
                      q: "1. What is a baby age calculator?",
                      a: "A baby age calculator is an online tool that calculates a baby’s exact age based on the date of birth."
                    },
                    {
                      q: "2. How do I calculate my baby’s age?",
                      a: "Enter your baby’s birth date into the calculator to find the exact age in days, weeks, months, and years."
                    },
                    {
                      q: "3. Why calculate baby age in weeks?",
                      a: "Weeks are commonly used during early infancy because babies experience rapid changes during this period."
                    },
                    {
                      q: "4. How accurate is a baby age calculator?",
                      a: "The calculation is accurate when the correct birth date is entered."
                    },
                    {
                      q: "5. Can I use a baby age calculator for milestones?",
                      a: "Yes. It can help parents understand age ranges related to common developmental milestones."
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
                      q: "6. How many weeks old is my baby?",
                      a: "A baby age calculator can instantly calculate the number of weeks since birth."
                    },
                    {
                      q: "7. Why do doctors ask for baby age in months?",
                      a: "Healthcare providers often track growth and development based on age in months during early childhood."
                    },
                    {
                      q: "8. Can I calculate my baby’s age in days?",
                      a: "Yes. The calculator can provide the total number of days since birth."
                    },
                    {
                      q: "9. Does every baby develop at the same age?",
                      a: "No. Babies develop at different rates, and individual differences are normal."
                    },
                    {
                      q: "10. Is a baby age calculator a medical tool?",
                      a: "No. It is an age tracking tool and does not provide medical diagnosis or advice."
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
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Related Healthcare Tools</h2>
              <p className="text-base leading-relaxed">
                Explore more helpful healthcare calculators:
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-6 gap-4 mt-6">
                {[
                  { name: "Baby Weight Calculator", path: "/calculators/baby-weight-calculator" },
                  { name: "Pregnancy Due Date Calculator", path: "/solutions" },
                  { name: "BMI Calculator", path: "/solutions" },
                  { name: "Water Intake Calculator", path: "/calculators/water-intake-calculator" },
                  { name: "Calorie Calculator", path: "/solutions" },
                  { name: "Metabolic Age Calculator", path: "/calculators/metabolic-age-calculator" }
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
                  Med Clinic X helps healthcare organizations build modern digital healthcare solutions that improve patient engagement, communication, and healthcare operations.
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
                  Looking to build a modern healthcare technology solution? Connect with Med Clinic X today.
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
