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
import PediatricDosageCalculatorClient from "./PediatricDosageCalculatorClient";

export const metadata: Metadata = {
  title: "Pediatric Dosage Calculator - Calculate Safe Medication Doses for Children | Med Clinic X",
  description:
    "Use our Pediatric Dosage Calculator to understand weight-based pediatric medication dosing. Learn how child medication doses are calculated using clinical formulas and safety guidelines.",
  keywords: [
    "Pediatric Dosage Calculator",
    "Calculate Safe Child Medication Doses",
    "Weight-based pediatric dosing",
    "Child medication formulas",
    "Liquid dosage calculator",
    "Pediatric medication safety guidelines",
  ],
  alternates: {
    canonical: "https://medclinicx.com/calculator/pediatric-dosage-calculator/",
  },
  openGraph: {
    title: "Pediatric Dosage Calculator - Calculate Safe Medication Doses for Children | Med Clinic X",
    description:
      "Use our Pediatric Dosage Calculator to understand weight-based pediatric medication dosing. Learn how child medication doses are calculated using clinical formulas and safety guidelines.",
    url: "https://medclinicx.com/calculator/pediatric-dosage-calculator/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pediatric Dosage Calculator | Med Clinic X",
      },
    ],
  },
};

export default function PediatricDosageCalculatorPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://medclinicx.com" },
      { "@type": "ListItem", position: 2, name: "Pediatric Dosage Calculator", item: "https://medclinicx.com/calculator/pediatric-dosage-calculator/" },
    ],
  };

  const calculatorSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Pediatric Dosage Calculator",
    description: "Use our Pediatric Dosage Calculator to understand weight-based pediatric medication dosing.",
    url: "https://medclinicx.com/calculator/pediatric-dosage-calculator/",
    about: {
      "@type": "MedicalCondition",
      name: "Pediatric Medication Dosing Math & Education",
      possibleTreatment: [
        {
          "@type": "MedicalTherapy",
          name: "Pharmacological Pediatric Dosage Calculation Verification",
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
              Pediatric Dosage Calculator: <span className="text-gradient-cyan-indigo">Calculate Safe Child Medication Doses</span>
            </h1>

            <div className="glass-panel border border-brand-border rounded-2xl p-8 max-w-4xl mx-auto text-left space-y-4 mb-16">
              <h2 className="text-xl font-bold text-brand-cyan font-display">
                Introduction: Understand Pediatric Medication Dosing
              </h2>
              <p className="text-gray-300 text-base leading-relaxed">
                Medication dosing for children requires extra care because children are not just smaller adults—their metabolism, body weight, and organ development all affect how medicines work in the body.
              </p>
              <p className="text-gray-300 text-base leading-relaxed">
                Our <strong>Pediatric Dosage Calculator</strong> helps explain how weight-based medication dosing is calculated in pediatric care. It is designed for educational purposes to help healthcare learners and professionals understand dosage principles.
              </p>
              
              <div className="py-2">
                <p className="text-gray-300 text-base leading-relaxed font-semibold text-white mb-2">
                  This tool can help users:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-gray-300 text-base">
                  <li>Understand pediatric weight-based dosing</li>
                  <li>Learn medication calculation formulas</li>
                  <li>Explore safe dosing concepts in children</li>
                  <li>Support healthcare education and training</li>
                </ul>
              </div>

              <div className="py-2">
                <p className="text-gray-300 text-base leading-relaxed font-semibold text-white mb-2">
                  It may be useful for:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-gray-300 text-base">
                  <li>Pediatric healthcare professionals</li>
                  <li>Nursing students</li>
                  <li>Medical students</li>
                  <li>Healthcare educators</li>
                  <li>Clinical training environments</li>
                </ul>
              </div>

              <div className="bg-rose-500/10 border border-rose-500/20 text-rose-300 rounded-xl p-4 flex gap-3 text-sm">
                <AlertTriangle className="w-5.5 h-5.5 text-rose-400 shrink-0 mt-0.5" />
                <p className="text-base leading-normal">
                  <strong>Important:</strong> This calculator is for educational purposes only. Pediatric medication must always be prescribed and verified by a qualified healthcare professional. Never administer medication to a child without proper medical guidance.
                </p>
              </div>
            </div>
          </div>

          {/* Calculator Section */}
          <section className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4" id="pedi7dx">Pediatric Dosage Calculator</h2>
              <p className="text-base text-gray-300 max-w-2xl mx-auto leading-relaxed mb-6">
                Calculate Pediatric Medication Dosage: Enter the required details below to understand pediatric dosing calculations.
              </p>
              <div className="inline-flex flex-wrap justify-center gap-3 mb-8 bg-slate-900/60 p-4 rounded-xl border border-brand-border/40">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block w-full mb-1">Calculator Inputs:</span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Child’s weight (kg or lbs)
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Prescribed dose (mg per kg)
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Medication concentration (mg/mL)
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Required dosage frequency
                </span>
              </div>
            </div>
            
            <div className="glass-panel border border-brand-border rounded-3xl p-6 md:p-8">
              <PediatricDosageCalculatorClient />
              <p className="text-base text-gray-500 text-center mt-6">
                Your calculated pediatric dosage details will appear here.
              </p>
            </div>
          </section>

          {/* Educational Content Sections */}
          <div className="border-t border-brand-border/40 pt-16 space-y-16 text-gray-300">
            
            {/* What is it & Why Important */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">What Is a Pediatric Dosage Calculator?</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  A <strong>Pediatric Dosage Calculator</strong> is an educational healthcare calculation tool designed to show how pediatric medication doses are determined based on a child's weight.
                </p>
                <p className="text-gray-300 text-base leading-relaxed">
                  Unlike adults, who often receive standard flat doses, children's drug requirements are highly sensitive to their size. Using weight-based dosing formulas helps estimate safer amounts matching their developmental stages.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Why Are Pediatric Dosage Calculations Important?</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  Children process medications differently due to their body composition and maturing kidney and liver functions. Accurate calculations support:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-4 space-y-1.5">
                    <h4 className="text-white font-bold text-sm flex items-center gap-1.5">
                      <Shield className="w-4 h-4 text-brand-cyan" />
                      <span>Patient Safety</span>
                    </h4>
                    <p className="text-xs text-gray-400 leading-normal">
                      Reduces the risk of dosing errors in sensitive populations.
                    </p>
                  </div>
                  <div className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-4 space-y-1.5">
                    <h4 className="text-white font-bold text-sm flex items-center gap-1.5">
                      <Activity className="w-4 h-4 text-brand-cyan" />
                      <span>Therapeutic Effectiveness</span>
                    </h4>
                    <p className="text-xs text-gray-400 leading-normal">
                      Helps ensure the child receives enough medication to treat the condition.
                    </p>
                  </div>
                  <div className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-4 space-y-1.5">
                    <h4 className="text-white font-bold text-sm flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-brand-cyan" />
                      <span>Precise Administration</span>
                    </h4>
                    <p className="text-xs text-gray-400 leading-normal">
                      Translates milligram requirements into exact volumetric (mL) or tablet amounts.
                    </p>
                  </div>
                  <div className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-4 space-y-1.5">
                    <h4 className="text-white font-bold text-sm flex items-center gap-1.5">
                      <Calculator className="w-4 h-4 text-brand-cyan" />
                      <span>Clinical Confidence</span>
                    </h4>
                    <p className="text-xs text-gray-400 leading-normal">
                      Empowers students and providers to verify calculations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* How It Works */}
            <div className="border-t border-brand-border/40 pt-16 space-y-6">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">How Do Pediatric Dosage Calculations Work?</h2>
              <p className="text-gray-300 text-base leading-relaxed">
                Dosing calculations generally follow a sequence of clinical math steps:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="glass-panel border border-brand-border p-5 rounded-xl space-y-2 hover:border-brand-cyan/20 transition-all">
                  <h4 className="font-bold text-white text-base">1. Patient Weight</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    The child's weight is recorded in kilograms or converted from pounds to kilograms.
                  </p>
                </div>
                <div className="glass-panel border border-brand-border p-5 rounded-xl space-y-2 hover:border-brand-cyan/20 transition-all">
                  <h4 className="font-bold text-white text-base">2. Daily Dose</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    The prescribed rate (e.g., mg/kg/day) is multiplied by the weight to find the total 24-hour limit.
                  </p>
                </div>
                <div className="glass-panel border border-brand-border p-5 rounded-xl space-y-2 hover:border-brand-cyan/20 transition-all">
                  <h4 className="font-bold text-white text-base">3. Single Dose Split</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    The daily total is divided by the number of doses per day (e.g., divided BID or TID).
                  </p>
                </div>
                <div className="glass-panel border border-brand-border p-5 rounded-xl space-y-2 hover:border-brand-cyan/20 transition-all">
                  <h4 className="font-bold text-white text-base">4. Volume Conversion</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    The milligram requirement is converted into milliliters based on the medication concentration.
                  </p>
                </div>
              </div>
            </div>

            {/* Formulas */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start border-t border-brand-border/40 pt-16">
              <div className="space-y-3">
                <h3 className="font-display font-bold text-xl text-white">Common Pediatric Dosing Formulas</h3>
                <p className="text-gray-400 text-sm leading-normal">
                  These educational formulas represent standard clinical practice.
                </p>
              </div>

              <div className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-5 space-y-4 lg:col-span-2">
                <div>
                  <h4 className="text-brand-cyan font-bold text-sm">1. Weight Conversion Formula</h4>
                  <p className="font-mono text-white text-xs bg-slate-950 p-2.5 rounded mt-1.5">
                    Weight in kg = Weight in lbs ÷ 2.20462
                  </p>
                </div>
                <div>
                  <h4 className="text-brand-cyan font-bold text-sm">2. Daily Dose Calculation</h4>
                  <p className="font-mono text-white text-xs bg-slate-950 p-2.5 rounded mt-1.5">
                    Total Daily Dose (mg/day) = Weight (kg) × Prescribed Rate (mg/kg/day)
                  </p>
                </div>
                <div>
                  <h4 className="text-brand-cyan font-bold text-sm">3. Single Dose Split</h4>
                  <p className="font-mono text-white text-xs bg-slate-950 p-2.5 rounded mt-1.5">
                    Single Dose (mg) = Total Daily Dose (mg) ÷ Number of Doses per Day
                  </p>
                </div>
                <div>
                  <h4 className="text-brand-cyan font-bold text-sm">4. Liquid Dose Volume (mL)</h4>
                  <p className="font-mono text-white text-xs bg-slate-950 p-2.5 rounded mt-1.5">
                    Volume to Give (mL) = (Desired Dose (mg) ÷ Available Strength (mg)) × Available Volume (mL)
                  </p>
                </div>
              </div>
            </div>

            {/* Results Table */}
            <div className="border-t border-brand-border/40 pt-16 space-y-6">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Understanding Pediatric Dosage Results</h2>
              <p className="text-gray-300 text-base">
                Use this table to understand the clinical metrics calculated:
              </p>
              <div className="glass-panel border border-brand-border rounded-2xl overflow-hidden max-w-4xl mx-auto my-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-base">
                    <thead>
                      <tr className="bg-slate-900 border-b border-brand-border text-white font-bold">
                        <th className="p-4">Metric Type</th>
                        <th className="p-4">Clinical Meaning</th>
                        <th className="p-4">Example</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-brand-border/40">
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 font-bold text-brand-cyan">Total Daily Dose</td>
                        <td className="p-4 text-gray-300">The maximum medication weight safe for a 24-hour period.</td>
                        <td className="p-4 font-mono text-white">300 mg/day</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 font-bold text-brand-cyan">Single Dose Target</td>
                        <td className="p-4 text-gray-300">The target milligram amount to administer at each individual interval.</td>
                        <td className="p-4 font-mono text-white">100 mg per dose</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 font-bold text-brand-cyan">Liquid Volume (mL)</td>
                        <td className="p-4 text-gray-300">The exact liquid amount to measure using an oral syringe.</td>
                        <td className="p-4 font-mono text-white">5.0 mL</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 font-bold text-brand-cyan">Dosing Frequency</td>
                        <td className="p-4 text-gray-300">The interval at which the doses are spaced (e.g., BID = twice daily).</td>
                        <td className="p-4 font-mono text-white">Every 12 Hours</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Factors affecting dosage */}
            <div className="border-t border-brand-border/40 pt-16 space-y-6">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Factors That Affect Pediatric Dosing</h2>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {[
                  { title: "Age & Development", desc: "Newborns, infants, and adolescents metabolize drugs at different rates." },
                  { title: "Organ Maturity", desc: "Liver and kidney clearance mechanisms develop throughout childhood." },
                  { title: "Hydration Status", desc: "Dehydration can concentrate drugs in the body, altering safety thresholds." },
                  { title: "Overweight Rules", desc: "Dosing for children who are overweight may use ideal body weight limits." },
                  { title: "Concentrations", desc: "Liquid medications come in multiple strengths; using the wrong bottle causes major errors." }
                ].map((item, idx) => (
                  <div key={idx} className="glass-panel border border-brand-border/60 p-5 rounded-xl space-y-2 hover:border-brand-cyan/20 transition-all">
                    <h4 className="font-bold text-white text-base">{item.title}</h4>
                    <p className="text-xs text-gray-400 leading-normal">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Comparison & Tech */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start border-t border-brand-border/40 pt-16">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Educational Tools vs Clinical Prescribing</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-5 space-y-2">
                    <p className="font-bold text-white uppercase tracking-wider text-[11px] text-brand-cyan">Educational Calculator</p>
                    <ul className="list-disc pl-4 space-y-1 text-xs text-gray-300">
                      <li>Focuses on math concepts and general formulas</li>
                      <li>Does not know clinical history or drug allergies</li>
                      <li>Intended for learning, training, and verification</li>
                      <li>Requires manual entry of all parameters</li>
                    </ul>
                  </div>
                  <div className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-5 space-y-2">
                    <p className="font-bold text-white uppercase tracking-wider text-[11px] text-brand-cyan">Clinical Prescribing Systems</p>
                    <ul className="list-disc pl-4 space-y-1 text-xs text-gray-300">
                      <li>Integrates patient health records and lab results</li>
                      <li>Screens for interactions and contraindications</li>
                      <li>Authorized to output real patient treatment plans</li>
                      <li>Automated with hospital system safeguards</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">How Healthcare Technology Improves Medication Management</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  Digital healthcare solutions are helping organizations improve medication workflows. Technology can support medication reminders, prescription management, clinical decision support, patient portals, and healthcare automation.
                </p>
                <p className="text-gray-300 text-base leading-relaxed">
                  Modern healthcare platforms help improve communication between patients and healthcare providers, reducing medication errors.
                </p>
              </div>
            </div>

            {/* FAQs Accordions */}
            <div className="border-t border-brand-border/40 pt-16 space-y-8">
              <div className="text-center max-w-3xl mx-auto mb-8">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Frequently Asked Questions</h2>
                <p className="text-base text-gray-400 mt-2">
                  Common questions about child medication calculations and clinical protocols.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start font-sans">
                {/* Column 1 */}
                <div className="space-y-4">
                  {[
                    { q: "1. What is a pediatric dosage calculator?", a: "A tool that demonstrates how child medication amounts are calculated using body weight and concentrations." },
                    { q: "2. Why do children need weight-based dosing?", a: "Because standard adult doses can cause severe toxicity or be ineffective in growing bodies." },
                    { q: "3. Can I use this calculator to dose my child's medicine?", a: "No. Doses must be prescribed and verified by a qualified medical professional." },
                    { q: "4. How do I convert pounds (lbs) to kilograms (kg)?", a: "Divide the child's weight in pounds by 2.20462." },
                    { q: "5. What does BID mean in medical coding?", a: "BID stands for bis in die, Latin for twice daily (every 12 hours)." }
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
                    { q: "6. What is liquid concentration?", a: "The amount of drug (mg) dissolved in a specific liquid volume (mL), such as 100 mg / 5 mL." },
                    { q: "7. Does every child's medication use weight-based dosing?", a: "No. Some medications use age or fixed dosing, depending on clinical guidelines." },
                    { q: "8. Why is pediatric dosing more sensitive?", a: "Because children have developing organs and different metabolism rates." },
                    { q: "9. Can nurses use dosage calculators?", a: "Yes, as a learning or verification tool alongside clinical guidelines." },
                    { q: "10. Is a pediatric dosage calculator a medical device?", a: "No. It is an educational tool and not a substitute for professional medical systems." }
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
              <p className="text-base leading-relaxed">Explore more healthcare calculators:</p>
              
              <div className="grid grid-cols-2 sm:grid-cols-6 gap-4 mt-6">
                {[
                  { name: "Medication Dosage Calculator", path: "/calculator/medication-dosage-calculator" },
                  { name: "IV Drip Rate Calculator", path: "/calculator/iv-drip-rate-calculator" },
                  { name: "Baby Weight Calculator", path: "/calculator/baby-weight-calculator" },
                  { name: "Baby Age Calculator", path: "/calculator/baby-age-calculator" },
                  { name: "BMI Calculator", path: "/solutions" },
                  { name: "Water Intake Calculator", path: "/calculator/water-calculator" }
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
                  Med Clinic X helps healthcare organizations build modern digital healthcare solutions that improve patient safety, clinical workflows, and pediatric care delivery.
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
