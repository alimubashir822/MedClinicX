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
import MedDosageCalculatorClient from "./MedDosageCalculatorClient";

export const metadata: Metadata = {
  title: "Medication Dosage Calculator - Calculate Medication Dosage Information Safely | Med Clinic X",
  description:
    "Use our Medication Dosage Calculator to understand medication dosage calculations based on common healthcare formulas. Learn how dosage calculations work and why professional guidance is important.",
  keywords: [
    "Medication Dosage Calculator",
    "Calculate Medication Dosage",
    "Dosage calculations",
    "Weight based dosage calculator",
    "Clinical dosage math",
    "Nursing dose calculations",
  ],
  alternates: {
    canonical: "https://medclinicx.com/calculators/medication-dosage-calculator/",
  },
  openGraph: {
    title: "Medication Dosage Calculator - Calculate Medication Dosage Information Safely | Med Clinic X",
    description:
      "Use our Medication Dosage Calculator to understand medication dosage calculations based on common healthcare formulas. Learn how dosage calculations work and why professional guidance is important.",
    url: "https://medclinicx.com/calculators/medication-dosage-calculator/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Medication Dosage Calculator | Med Clinic X",
      },
    ],
  },
};

export default function MedDosageCalculatorPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://medclinicx.com" },
      { "@type": "ListItem", position: 2, name: "Medication Dosage Calculator", item: "https://medclinicx.com/calculators/medication-dosage-calculator/" },
    ],
  };

  const calculatorSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Medication Dosage Calculator",
    description: "Use our Medication Dosage Calculator to understand medication dosage calculations based on common healthcare formulas.",
    url: "https://medclinicx.com/calculators/medication-dosage-calculator/",
    about: {
      "@type": "MedicalCondition",
      name: "Medication Dosing Math & Education",
      possibleTreatment: [
        {
          "@type": "MedicalTherapy",
          name: "Pharmacological Dosage Calculation Verification",
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
              Medication Dosage Calculator: <span className="text-gradient-cyan-indigo">Understand Medication Dose Calculations</span>
            </h1>

            <div className="glass-panel border border-brand-border rounded-2xl p-8 max-w-4xl mx-auto text-left space-y-4 mb-16">
              <h2 className="text-xl font-bold text-brand-cyan font-display">
                Introduction: Learn How Medication Dosage Calculations Work
              </h2>
              <p className="text-gray-300 text-base leading-relaxed">
                Medication dosing is an important part of healthcare that requires accuracy, attention, and professional oversight. Healthcare providers calculate medication doses based on many factors, including the medication type, patient characteristics, medical condition, and clinical guidelines.
              </p>
              <p className="text-gray-300 text-base leading-relaxed">
                Our <strong>Medication Dosage Calculator</strong> is designed to help users understand common medication calculation concepts and support healthcare education.
              </p>
              
              <div className="py-2">
                <p className="text-gray-300 text-base leading-relaxed font-semibold text-white mb-2">
                  This calculator can help users learn about:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-gray-300 text-base">
                  <li>Medication dose calculations</li>
                  <li>Weight-based dosage concepts</li>
                  <li>Unit conversions</li>
                  <li>Common healthcare calculation methods</li>
                </ul>
              </div>

              <div className="py-2">
                <p className="text-gray-300 text-base leading-relaxed font-semibold text-white mb-2">
                  It may be useful for:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-gray-300 text-base">
                  <li>Nursing students</li>
                  <li>Medical students</li>
                  <li>Healthcare professionals learning calculations</li>
                  <li>Healthcare organizations building digital clinical tools</li>
                </ul>
              </div>

              <div className="bg-rose-500/10 border border-rose-500/20 text-rose-300 rounded-xl p-4 flex gap-3 text-sm">
                <AlertTriangle className="w-5.5 h-5.5 text-rose-400 shrink-0 mt-0.5" />
                <p className="text-base leading-normal">
                  <strong>Important:</strong> This calculator is an educational tool only. Medication doses should always be confirmed by a qualified healthcare professional, pharmacist, or prescribing provider. Do not use calculator results to start, stop, or change medication without professional medical advice.
                </p>
              </div>
            </div>
          </div>

          {/* Calculator Section */}
          <section className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">Medication Dosage Calculator</h2>
              <p className="text-base text-gray-300 max-w-2xl mx-auto leading-relaxed mb-6">
                Calculate Medication Dosage: Enter the required information below to understand medication dosage calculations.
              </p>
              <div className="inline-flex flex-wrap justify-center gap-3 mb-8 bg-slate-900/60 p-4 rounded-xl border border-brand-border/40">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block w-full mb-1">Calculator Inputs:</span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Medication concentration
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Patient weight (if required)
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Prescribed dose
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Available medication strength
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Measurement units
                </span>
              </div>
            </div>
            
            <div className="glass-panel border border-brand-border rounded-3xl p-6 md:p-8">
              <MedDosageCalculatorClient />
              <p className="text-base text-gray-500 text-center mt-6">
                Your calculated dosage information will appear here.
              </p>
            </div>
          </section>

          {/* Educational Content Sections */}
          <div className="border-t border-brand-border/40 pt-16 space-y-16 text-gray-300">
            
            {/* Row 1: What is it & Why Important */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">What Is a Medication Dosage Calculator?</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  A <strong>Medication Dosage Calculator</strong> is a healthcare calculation tool that helps explain how medication doses are determined using mathematical formulas.
                </p>
                <p className="text-gray-300 text-base leading-relaxed">
                  Healthcare professionals may need to calculate doses based on patient weight, medication strength, required dose, concentration, and administration volume. Accurate calculations help support safe medication administration in clinical environments.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Why Are Medication Dosage Calculations Important?</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  Medication calculations are an essential part of healthcare practice. They help support:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-4 space-y-1.5">
                    <h4 className="text-white font-bold text-sm flex items-center gap-1.5">
                      <Shield className="w-4 h-4 text-brand-cyan" />
                      <span>Patient Safety</span>
                    </h4>
                    <p className="text-xs text-gray-400 leading-normal">
                      Accurate calculations reduce the risk of incorrect medication amounts.
                    </p>
                  </div>
                  <div className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-4 space-y-1.5">
                    <h4 className="text-white font-bold text-sm flex items-center gap-1.5">
                      <Activity className="w-4 h-4 text-brand-cyan" />
                      <span>Healthcare Accuracy</span>
                    </h4>
                    <p className="text-xs text-gray-400 leading-normal">
                      Standardized calculations support consistent medication administration.
                    </p>
                  </div>
                  <div className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-4 space-y-1.5">
                    <h4 className="text-white font-bold text-sm flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-brand-cyan" />
                      <span>Clinical Efficiency</span>
                    </h4>
                    <p className="text-xs text-gray-400 leading-normal">
                      Digital tools can help healthcare teams verify calculations quickly.
                    </p>
                  </div>
                  <div className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-4 space-y-1.5">
                    <h4 className="text-white font-bold text-sm flex items-center gap-1.5">
                      <Calculator className="w-4 h-4 text-brand-cyan" />
                      <span>Education and Training</span>
                    </h4>
                    <p className="text-xs text-gray-400 leading-normal">
                      Students use dosage calculators to practice healthcare math concepts.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2: How It Works */}
            <div className="border-t border-brand-border/40 pt-16 space-y-6">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">How Does the Medication Dosage Calculator Work?</h2>
              <p className="text-gray-300 text-base leading-relaxed">
                Medication calculations depend on the information provided. Common calculation factors include:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="glass-panel border border-brand-border p-5 rounded-xl space-y-2 hover:border-brand-cyan/20 transition-all flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-white text-base">Patient Weight</h4>
                    <p className="text-xs text-gray-400 leading-relaxed mt-1">
                      Some medications are calculated based on body weight. For instance:<br/>
                      <strong>Dose = Weight × Prescribed Dose Per Weight Unit</strong>
                    </p>
                  </div>
                </div>
                <div className="glass-panel border border-brand-border p-5 rounded-xl space-y-2 hover:border-brand-cyan/20 transition-all flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-white text-base">Medication Strength</h4>
                    <p className="text-xs text-gray-400 leading-relaxed mt-1">
                      Medication labels show concentration (e.g. mg/mL, units/mL, mcg/mL). The calculator uses this to understand available strength.
                    </p>
                  </div>
                </div>
                <div className="glass-panel border border-brand-border p-5 rounded-xl space-y-2 hover:border-brand-cyan/20 transition-all flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-white text-base">Required Dose</h4>
                    <p className="text-xs text-gray-400 leading-relaxed mt-1">
                      The prescribed amount determines the target quantity of active ingredients.
                    </p>
                  </div>
                </div>
                <div className="glass-panel border border-brand-border p-5 rounded-xl space-y-2 hover:border-brand-cyan/20 transition-all flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-white text-base">Conversion</h4>
                    <p className="text-xs text-gray-400 leading-relaxed mt-1">
                      Healthcare calculations may require converting between units (e.g. Grams to milligrams to micrograms).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 3: Formulas */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start border-t border-brand-border/40 pt-16">
              <div className="space-y-3">
                <h3 className="font-display font-bold text-xl text-white">Common Dosage Formulas</h3>
                <p className="text-gray-400 text-sm leading-normal">
                  These formulas are commonly taught in healthcare education, but real-world medication decisions require professional evaluation.
                </p>
              </div>

              <div className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-5 space-y-2 lg:col-span-2">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-brand-cyan font-bold text-sm">1. Basic Formula</h4>
                    <p className="font-mono text-white text-xs bg-slate-950 p-2.5 rounded mt-1.5">
                      Amount to Give = Desired Dose ÷ Dose Available × Quantity Available
                    </p>
                  </div>
                  <div>
                    <h4 className="text-brand-cyan font-bold text-sm">2. Weight-Based Formula</h4>
                    <p className="font-mono text-white text-xs bg-slate-950 p-2.5 rounded mt-1.5">
                      Total Dose = Patient Weight × Ordered Dose
                    </p>
                  </div>
                  <div>
                    <h4 className="text-brand-cyan font-bold text-sm">3. Volume Calculation</h4>
                    <p className="font-mono text-white text-xs bg-slate-950 p-2.5 rounded mt-1.5">
                      Volume (mL) = Required Dose ÷ Medication Concentration
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 4: Results Table */}
            <div className="border-t border-brand-border/40 pt-16 space-y-6">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Understanding Medication Dosage Results</h2>
              <div className="glass-panel border border-brand-border rounded-2xl overflow-hidden max-w-4xl mx-auto my-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-base">
                    <thead>
                      <tr className="bg-slate-900 border-b border-brand-border text-white font-bold">
                        <th className="p-4">Result Type</th>
                        <th className="p-4">Meaning</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-brand-border/40">
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 font-bold text-brand-cyan">Calculated Dose</td>
                        <td className="p-4 text-gray-300">Estimated amount based on entered values</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 font-bold text-brand-cyan">Volume Required</td>
                        <td className="p-4 text-gray-300">Amount of medication solution needed</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 font-bold text-brand-cyan">Unit Conversion</td>
                        <td className="p-4 text-gray-300">Converted measurement between different units</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-gray-400 text-sm text-center">
                Always verify medication information with official prescribing instructions and healthcare professionals.
              </p>
            </div>

            {/* Row 5: Factors affecting dosage */}
            <div className="border-t border-brand-border/40 pt-16 space-y-6">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Factors That Affect Medication Dosage</h2>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {[
                  { title: "Patient Age", desc: "Children and older adults may require special dosing considerations and ranges." },
                  { title: "Body Weight", desc: "Many pediatric or specialized intravenous medications use weight-based calculations." },
                  { title: "Kidney & Liver Function", desc: "The body clearance processes medications differently depending on organ health." },
                  { title: "Medical Conditions", desc: "Varying systemic health conditions direct drug absorption dynamics and choices." },
                  { title: "Other Medications", desc: "Potential drug-to-drug interactions can drastically shift safe medication parameters." }
                ].map((item, idx) => (
                  <div key={idx} className="glass-panel border border-brand-border/60 p-5 rounded-xl space-y-2 hover:border-brand-cyan/20 transition-all">
                    <h4 className="font-bold text-white text-base">{item.title}</h4>
                    <p className="text-xs text-gray-400 leading-normal">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 6: Comparison & Tech */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start border-t border-brand-border/40 pt-16">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Dose Calculator vs Professional Medical Review</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-5 space-y-2">
                    <p className="font-bold text-white uppercase tracking-wider text-[11px] text-brand-cyan">Dosage Calculator</p>
                    <ul className="list-disc pl-4 space-y-1 text-xs text-gray-300">
                      <li>Helps understand calculation methods</li>
                      <li>Useful for student education</li>
                      <li>Supports learning healthcare math</li>
                      <li>Does not know patient history</li>
                    </ul>
                  </div>
                  <div className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-5 space-y-2">
                    <p className="font-bold text-white uppercase tracking-wider text-[11px] text-brand-cyan">Professional Medical Review</p>
                    <ul className="list-disc pl-4 space-y-1 text-xs text-gray-300">
                      <li>Considers patient history</li>
                      <li>Reviews comprehensive safety</li>
                      <li>Provides personalized guidance</li>
                      <li>Primary source of medical authority</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed italic">
                  Medication decisions should always involve qualified healthcare professionals.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">How Healthcare Technology Improves Medication Management</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  Digital healthcare solutions are helping organizations improve medication workflows. Technology can support medication reminders, prescription management, clinical decision support, patient portals, and healthcare automation.
                </p>
                <p className="text-gray-300 text-base leading-relaxed">
                  Modern healthcare platforms help improve communication between patients and healthcare providers.
                </p>
              </div>
            </div>

            {/* Row 7: FAQs Accordions */}
            <div className="border-t border-brand-border/40 pt-16 space-y-8">
              <div className="text-center max-w-3xl mx-auto mb-8">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Frequently Asked Questions</h2>
                <p className="text-base text-gray-400 mt-2">
                  Common questions about medication calculations and safety benchmarks.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start font-sans">
                {/* Column 1 */}
                <div className="space-y-4">
                  {[
                    { q: "1. What is a medication dosage calculator?", a: "A medication dosage calculator is a tool that helps explain medication calculation methods using factors such as dose, weight, and concentration." },
                    { q: "2. Can a medication dosage calculator prescribe medicine?", a: "No. It cannot prescribe medications or replace a healthcare provider." },
                    { q: "3. How are medication doses calculated?", a: "Medication doses may be calculated using factors such as prescribed dose, patient weight, medication strength, and clinical guidelines." },
                    { q: "4. Why are dosage calculations important?", a: "Accurate calculations help support safe medication administration." },
                    { q: "5. What information is needed for dosage calculation?", a: "Common inputs include medication strength, required dose, patient weight, and measurement units." }
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
                    { q: "6. Are pediatric medication doses calculated differently?", a: "Yes. Many pediatric medications require weight-based calculations and professional evaluation." },
                    { q: "7. Can I change my medication dose using this calculator?", a: "No. Medication changes should only be made with guidance from a qualified healthcare professional." },
                    { q: "8. What units are used in medication calculations?", a: "Common units include mg, mcg, mL, units, and other medication-specific measurements." },
                    { q: "9. Do nurses use dosage calculators?", a: "Yes. Healthcare professionals may use calculation tools as part of medication safety workflows." },
                    { q: "10. Is an online medication dosage calculator accurate?", a: "The mathematical calculation may be accurate based on entered information, but safe medication use requires professional verification." }
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
                  .filter((c) => c.id !== "medication-dosage-calculator")
                  .sort((a, b) => {
                    const currentCat = calculatorData.find((c) => c.id === "medication-dosage-calculator")?.category;
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
                  Med Clinic X helps healthcare organizations build modern digital healthcare solutions that improve patient engagement, clinical workflows, and healthcare operations.
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
