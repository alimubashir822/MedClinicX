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
import LeanAnionGapCalculatorClient from "./LeanAnionGapCalculatorClient";

export const metadata: Metadata = {
  title: "Anion Gap Calculator - Calculate Your Anion Gap Level from Electrolyte Values | Med Clinic X",
  description:
    "Use our free Anion Gap Calculator to estimate your anion gap using sodium, chloride, and bicarbonate values. Learn what anion gap means, how it is calculated, and why it is important in healthcare.",
  keywords: [
    "Anion Gap Calculator",
    "Anion Gap",
    "Calculate anion gap",
    "Electrolyte gap calculator",
    "Anion gap formula",
    "Serum electrolytes calculation",
  ],
  alternates: {
    canonical: "https://medclinicx.com/calculator/",
  },
  openGraph: {
    title: "Anion Gap Calculator - Calculate Your Anion Gap Level from Electrolyte Values | Med Clinic X",
    description:
      "Use our free Anion Gap Calculator to estimate your anion gap using sodium, chloride, and bicarbonate values. Learn what anion gap means, how it is calculated, and why it is important in healthcare.",
    url: "https://medclinicx.com/calculator/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Anion Gap Calculator | Med Clinic X",
      },
    ],
  },
};

export default function AnionGapCalculatorPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://medclinicx.com" },
      { "@type": "ListItem", position: 2, name: "Anion Gap Calculator", item: "https://medclinicx.com/calculator/" },
    ],
  };

  const calculatorSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Anion Gap Calculator",
    description: "Use our free Anion Gap Calculator to estimate your anion gap using sodium, chloride, and bicarbonate values.",
    url: "https://medclinicx.com/calculator/",
    about: {
      "@type": "MedicalCondition",
      name: "Metabolic Acidosis & Electrolyte Imbalance",
      possibleTreatment: [
        {
          "@type": "MedicalTherapy",
          name: "Electrolyte Replenishment & Acid-Base Management",
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
              <span className="text-[11px] font-bold text-brand-cyan uppercase tracking-widest font-sans">Clinical Diagnostic Tools</span>
            </div>
            
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-6">
              Anion Gap Calculator: <span className="text-gradient-cyan-indigo">Calculate Your Anion Gap Value</span>
            </h1>

            <div className="glass-panel border border-brand-border rounded-2xl p-8 max-w-4xl mx-auto text-left space-y-4 mb-16">
              <h2 className="text-xl font-bold text-brand-cyan font-display">
                Introduction: Understand Your Anion Gap Result
              </h2>
              <p className="text-gray-300 text-base leading-relaxed">
                The <strong>Anion Gap Calculator</strong> is a healthcare tool designed to estimate the anion gap value using common electrolyte measurements from a blood test.
              </p>
              <p className="text-gray-300 text-base leading-relaxed">
                The anion gap is a calculated value that helps healthcare professionals understand the balance between positively charged and negatively charged electrolytes in the blood. It is commonly used when evaluating acid-base balance and metabolic conditions.
              </p>
              <p className="text-gray-300 text-base leading-relaxed">
                This calculator can help users better understand how anion gap calculations work and how electrolyte values are connected with overall health assessments.
              </p>
              <p className="text-gray-300 text-base leading-relaxed font-semibold text-white">
                The tool may be useful for:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-2 text-base text-gray-300">
                {[
                  "Healthcare professionals reviewing laboratory concepts",
                  "Medical students learning clinical calculations",
                  "Patients who want to understand their lab results",
                  "Healthcare organizations building digital health tools"
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
                  <strong>Important:</strong> This calculator provides an estimate and should not replace professional medical advice, laboratory interpretation, or evaluation by a qualified healthcare provider.
                </p>
              </div>
            </div>
          </div>

          {/* Calculator Section */}
          <section className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">Calculate Your Anion Gap</h2>
              <p className="text-base text-gray-300 max-w-2xl mx-auto leading-relaxed mb-6">
                Enter your electrolyte values below to estimate your anion gap.
              </p>
              <div className="inline-flex flex-wrap justify-center gap-3 mb-8 bg-slate-900/60 p-4 rounded-xl border border-brand-border/40">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block w-full mb-1">Calculator Inputs:</span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Sodium (Na⁺)
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Chloride (Cl⁻)
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Bicarbonate (HCO₃⁻)
                </span>
              </div>
            </div>
            
            <div className="glass-panel border border-brand-border rounded-3xl p-6 md:p-8">
              <LeanAnionGapCalculatorClient />
              <p className="text-base text-gray-500 text-center mt-6">
                Your estimated anion gap result will appear above.
              </p>
            </div>
          </section>

          {/* Educational Content below calculator */}
          <div className="border-t border-brand-border/40 pt-16 space-y-16 text-gray-300">
            
            {/* Grid 1: What is it & Why important */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">What Is an Anion Gap?</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  The <strong>anion gap</strong> is a calculated measurement that represents the difference between commonly measured positively charged electrolytes (cations) and negatively charged electrolytes (anions) in the blood.
                </p>
                <p className="text-gray-300 text-base leading-relaxed">
                  It is not measured directly. Instead, it is calculated using electrolyte values from a blood chemistry panel.
                </p>
                <p className="text-gray-300 text-base leading-relaxed">
                  The anion gap is often used as part of evaluating:
                </p>
                <div className="bg-slate-900/40 border border-brand-border/50 rounded-xl p-5 space-y-2">
                  <ul className="list-disc pl-5 space-y-2 text-base text-gray-300">
                    <li>Acid-base balance</li>
                    <li>Metabolic changes</li>
                    <li>Electrolyte patterns</li>
                    <li>Certain medical conditions</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Why Is the Anion Gap Important?</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  The body maintains a careful balance of electrolytes to support normal functions.
                </p>
                <p className="text-gray-300 text-base leading-relaxed">
                  The anion gap can provide insight into:
                </p>
                <div className="bg-slate-900/40 border border-brand-border/50 rounded-xl p-5 space-y-3">
                  <ul className="list-none pl-0 space-y-2">
                    {[
                      "How the body maintains acid-base balance",
                      "Whether certain electrolyte patterns are present",
                      "How laboratory values compare with expected ranges"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-base text-gray-300">
                        <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-gray-300 text-base leading-relaxed">
                  Healthcare providers may consider anion gap results along with other laboratory findings, symptoms, and medical history.
                </p>
              </div>
            </div>

            {/* Grid 2: How works & Formula */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start border-t border-brand-border/40 pt-16">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">How Does the Anion Gap Calculator Work?</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  The calculator estimates the anion gap using electrolyte measurements. The calculation uses:
                </p>
                <div className="space-y-3">
                  <div className="bg-slate-900/50 border border-brand-border/40 rounded-xl p-4">
                    <h4 className="font-bold text-white text-sm">Sodium Level</h4>
                    <p className="text-xs text-gray-400 mt-1">Sodium is one of the major positively charged electrolytes in the blood.</p>
                  </div>
                  <div className="bg-slate-900/50 border border-brand-border/40 rounded-xl p-4">
                    <h4 className="font-bold text-white text-sm">Chloride Level</h4>
                    <p className="text-xs text-gray-400 mt-1">Chloride is one of the major negatively charged electrolytes.</p>
                  </div>
                  <div className="bg-slate-900/50 border border-brand-border/40 rounded-xl p-4">
                    <h4 className="font-bold text-white text-sm">Bicarbonate Level</h4>
                    <p className="text-xs text-gray-400 mt-1">Bicarbonate helps regulate the body&apos;s acid-base balance.</p>
                  </div>
                </div>
                <p className="text-gray-300 text-base leading-relaxed">
                  The calculator analyzes these values to estimate the difference between measured cations and anions.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Anion Gap Formula</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  The commonly used calculation is:
                </p>
                <div className="bg-gradient-to-r from-brand-cyan/20 to-brand-indigo/10 border border-brand-border p-6 rounded-2xl text-center my-4">
                  <p className="text-2xl font-mono font-bold text-white tracking-wide">
                    Anion Gap = Sodium − (Chloride + Bicarbonate)
                  </p>
                </div>
                <p className="text-gray-300 text-base leading-relaxed">
                  If sodium, chloride, and bicarbonate values are entered, the calculator estimates the resulting anion gap value.
                </p>
                <p className="text-gray-300 text-base leading-relaxed">
                  Some calculations may also include potassium depending on the method used:
                </p>
                <div className="bg-slate-900/40 border border-brand-border/50 rounded-xl p-4 text-sm font-mono text-center">
                  Anion Gap (with K) = (Sodium + Potassium) − (Chloride + Bicarbonate)
                </div>
              </div>
            </div>

            {/* Row 3: Interpretation Table */}
            <div className="border-t border-brand-border/40 pt-16 space-y-6">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Understanding Your Anion Gap Results</h2>
              <p className="text-gray-300 text-base leading-relaxed">
                Anion gap values are usually interpreted along with other clinical information. Reference ranges can vary depending on the laboratory and testing method.
              </p>
              
              <div className="glass-panel border border-brand-border rounded-2xl overflow-hidden max-w-4xl mx-auto my-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-base">
                    <thead>
                      <tr className="bg-slate-900 border-b border-brand-border text-white font-bold">
                        <th className="p-4">Anion Gap Range (mEq/L)</th>
                        <th className="p-4">General Meaning</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-brand-border/40">
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 font-bold text-brand-cyan">Lower Range (&lt; 8)</td>
                        <td className="p-4 text-gray-300">May indicate lower levels of unmeasured anions (e.g. hypoalbuminemia) or other factors</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 font-bold text-brand-emerald">Typical Range (8 – 16)</td>
                        <td className="p-4 text-gray-300">Often considered within common reference ranges</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 font-bold text-rose-400">Higher Range (&gt; 16)</td>
                        <td className="p-4 text-gray-300">May indicate changes in acid-base balance requiring evaluation (e.g. metabolic acidosis)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Grid 4: Why calculate & Affecting factors */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start border-t border-brand-border/40 pt-16">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Why Calculate Anion Gap?</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  Anion gap calculations can help provide additional information about electrolyte balance.
                </p>
                <p className="text-gray-300 text-base leading-relaxed">
                  Healthcare professionals may use it to:
                </p>
                <div className="bg-slate-900/40 border border-brand-border/50 rounded-xl p-5 space-y-3">
                  <ul className="list-none pl-0 space-y-2">
                    {[
                      "Evaluate acid-base disorders",
                      "Review metabolic changes",
                      "Understand electrolyte relationships",
                      "Support clinical decision-making"
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
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Factors That Can Affect Anion Gap Results</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  Several factors may influence anion gap values:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-slate-900/40 border border-brand-border/40 rounded-xl p-4">
                    <h4 className="font-bold text-white text-xs uppercase tracking-wider text-brand-cyan">Electrolyte Levels</h4>
                    <p className="text-xs text-gray-400 mt-1">Changes in sodium, chloride, or bicarbonate can affect the calculation.</p>
                  </div>
                  <div className="bg-slate-900/40 border border-brand-border/40 rounded-xl p-4">
                    <h4 className="font-bold text-white text-xs uppercase tracking-wider text-brand-cyan">Laboratory Methods</h4>
                    <p className="text-xs text-gray-400 mt-1">Different laboratories may use different reference ranges.</p>
                  </div>
                  <div className="bg-slate-900/40 border border-brand-border/40 rounded-xl p-4">
                    <h4 className="font-bold text-white text-xs uppercase tracking-wider text-brand-cyan">Health Conditions</h4>
                    <p className="text-xs text-gray-400 mt-1">Certain medical conditions may influence electrolyte balance.</p>
                  </div>
                  <div className="bg-slate-900/40 border border-brand-border/40 rounded-xl p-4">
                    <h4 className="font-bold text-white text-xs uppercase tracking-wider text-brand-cyan">Albumin Levels</h4>
                    <p className="text-xs text-gray-400 mt-1">Albumin is an important blood protein that can affect anion gap interpretation.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Grid 5: Clinical context & Gap vs Lab */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start border-t border-brand-border/40 pt-16">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">How to Understand Anion Gap in Healthcare</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  The anion gap is not a standalone diagnosis. Healthcare providers usually interpret it together with:
                </p>
                <div className="bg-slate-900/40 border border-brand-border/50 rounded-xl p-5 space-y-3">
                  <ul className="list-none pl-0 space-y-2 text-base text-gray-300">
                    {[
                      "Patient symptoms",
                      "Medical history",
                      "Other blood tests",
                      "Clinical examination"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-brand-emerald rounded-full shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-gray-300 text-base leading-relaxed">
                  A single calculated value does not provide a complete picture of health.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Anion Gap Calculator vs Laboratory Testing</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  Understand the role of both:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-slate-900/40 p-4 rounded-xl border border-brand-border/40">
                    <p className="font-bold text-white text-xs uppercase tracking-wider text-brand-cyan">Anion Gap Calculator</p>
                    <ul className="list-disc pl-4 space-y-1.5 text-xs text-gray-300 mt-2">
                      <li>Quick calculation</li>
                      <li>Helps understand relationships</li>
                      <li>Useful for education</li>
                    </ul>
                  </div>
                  <div className="bg-slate-900/40 p-4 rounded-xl border border-brand-border/40">
                    <p className="font-bold text-white text-xs uppercase tracking-wider text-brand-cyan">Laboratory Testing</p>
                    <ul className="list-disc pl-4 space-y-1.5 text-xs text-gray-300 mt-2">
                      <li>Actual measurements</li>
                      <li>Includes interpretation</li>
                      <li>Used for medical evaluation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Grid 6: Tech usages */}
            <div className="border-t border-brand-border/40 pt-16 space-y-4">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">How Healthcare Technology Uses Clinical Calculators</h2>
              <p className="text-gray-300 text-base leading-relaxed">
                Digital healthcare tools like laboratory calculators can help improve patient education, clinical workflows, healthcare accessibility, and understanding of medical information. Healthcare organizations increasingly use digital tools to make health information easier to access and understand.
              </p>
            </div>

            {/* FAQs Section */}
            <div className="border-t border-brand-border/40 pt-16 space-y-8">
              <div className="text-center max-w-3xl mx-auto mb-8">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Frequently Asked Questions About Anion Gap Calculator</h2>
                <p className="text-base text-gray-400 mt-2">
                  Find quick answers to common questions about electrolyte gaps and calculations.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start font-sans">
                {/* Column 1 */}
                <div className="space-y-4">
                  {[
                    {
                      q: "1. What is an anion gap calculator?",
                      a: "An anion gap calculator is an online tool that calculates the anion gap using electrolyte values such as sodium, chloride, and bicarbonate."
                    },
                    {
                      q: "2. How is anion gap calculated?",
                      a: "The anion gap is commonly calculated by subtracting chloride and bicarbonate from sodium: AG = Na - (Cl + HCO3)."
                    },
                    {
                      q: "3. What does a high anion gap mean?",
                      a: "A higher anion gap may indicate metabolic acidosis (accumulation of unmeasured acids), but results must be interpreted by a medical provider."
                    },
                    {
                      q: "4. What is a normal anion gap?",
                      a: "Typical ranges are 8 to 16 mEq/L when excluding potassium, and 12 to 20 mEq/L when potassium is included."
                    },
                    {
                      q: "5. Why do doctors calculate anion gaps?",
                      a: "Doctors use anion gap calculations to evaluate electrolyte balances, kidney functions, and acid-base conditions."
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
                      q: "6. Can I calculate anion gap without a blood test?",
                      a: "No. You need electrolyte values from serum chemistry laboratory testing to calculate an estimated anion gap."
                    },
                    {
                      q: "7. Does anion gap include potassium?",
                      a: "Some formulas include potassium, while the commonly used standard formula does not."
                    },
                    {
                      q: "8. What information is needed for anion gap calculation?",
                      a: "The calculator usually requires sodium, chloride, and bicarbonate values."
                    },
                    {
                      q: "9. Is anion gap a diagnosis?",
                      a: "No. Anion gap is a calculated laboratory index used as part of a broader clinical evaluation."
                    },
                    {
                      q: "10. How accurate is an anion gap calculator?",
                      a: "The calculation itself is accurate when correct laboratory values are entered, but clinical interpretation depends on patient circumstances."
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
                Explore more healthcare calculators:
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-6 gap-4 mt-6">
                {[
                  { name: "QTc Calculator", path: "/qtc-calculator" },
                  { name: "A1C Calculator", path: "/a1c-calculator" },
                  { name: "BMI Calculator", path: "/solutions" },
                  { name: "Blood Pressure Calculator", path: "/solutions" },
                  { name: "Water Intake Calculator", path: "/water-calculator" },
                  { name: "Lean Body Mass Calculator", path: "/lean-body-mass-calculator" }
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
                  Med Clinic X helps healthcare organizations create modern digital healthcare solutions that improve patient experiences and healthcare operations.
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
                  We help clinics, hospitals, and healthcare organizations build scalable healthcare platforms with modern technology.
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
                    <span>Looking to build a healthcare solution for your organization? Connect with Med Clinic X today.</span>
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
