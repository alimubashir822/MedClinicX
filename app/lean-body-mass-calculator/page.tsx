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
import LeanBodyMassCalculatorClient from "./LeanBodyMassCalculatorClient";

export const metadata: Metadata = {
  title: "Lean Body Mass Calculator - Calculate Your Lean Body Mass & Body Composition Online | Med Clinic X",
  description:
    "Use our free Lean Body Mass Calculator to estimate your body composition, lean mass, and muscle-related weight. Understand your fitness level and track health progress easily.",
  keywords: [
    "Lean Body Mass Calculator",
    "Lean Body Mass",
    "Body composition calculator",
    "Calculate lean body mass",
    "Muscle mass calculator",
    "Fat free mass calculator",
  ],
  alternates: {
    canonical: "https://medclinicx.com/lean-body-mass-calculator",
  },
  openGraph: {
    title: "Lean Body Mass Calculator - Calculate Your Lean Body Mass & Body Composition Online | Med Clinic X",
    description:
      "Use our free Lean Body Mass Calculator to estimate your body composition, lean mass, and muscle-related weight. Understand your fitness level and track health progress easily.",
    url: "https://medclinicx.com/lean-body-mass-calculator",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lean Body Mass Calculator | Med Clinic X",
      },
    ],
  },
};

export default function LeanBodyMassCalculatorPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://medclinicx.com" },
      { "@type": "ListItem", position: 2, name: "Lean Body Mass Calculator", item: "https://medclinicx.com/lean-body-mass-calculator" },
    ],
  };

  const calculatorSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Lean Body Mass Calculator",
    description: "Use our free Lean Body Mass Calculator to estimate your body composition, lean mass, and muscle-related weight.",
    url: "https://medclinicx.com/lean-body-mass-calculator",
    about: {
      "@type": "MedicalCondition",
      name: "Body Composition",
      possibleTreatment: [
        {
          "@type": "MedicalTherapy",
          name: "Body Composition Tracking & Fitness Guidance",
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
            
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-6">
              Lean Body Mass Calculator: <span className="text-gradient-cyan-indigo">Estimate Your Body Composition & Lean Mass</span>
            </h1>

            <div className="glass-panel border border-brand-border rounded-2xl p-8 max-w-4xl mx-auto text-left space-y-4 mb-16">
              <h2 className="text-xl font-bold text-brand-cyan font-display">
                Introduction: Understand Your Lean Body Mass
              </h2>
              <p className="text-gray-300 text-base leading-relaxed">
                Body weight alone does not tell the full story of your health and fitness. Two people with the same weight can have completely different body compositions.
              </p>
              <p className="text-gray-300 text-base leading-relaxed">
                Our <strong>Lean Body Mass Calculator</strong> helps you estimate how much of your body weight comes from lean tissue such as muscles, bones, organs, and body fluids.
              </p>
              <p className="text-gray-300 text-base leading-relaxed">
                This tool is useful for understanding your body composition more clearly and tracking fitness or wellness progress over time.
              </p>
              <p className="text-gray-300 text-base leading-relaxed font-semibold text-white">
                It can be helpful for:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-2 text-base text-gray-300">
                {[
                  "Fitness enthusiasts tracking muscle growth",
                  "Athletes improving performance",
                  "People managing weight loss or gain",
                  "Healthcare and wellness awareness",
                  "Nutrition and training planning"
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
                  <strong>Important:</strong> This calculator provides a helpful estimate and should not replace professional medical evaluation or body composition testing.
                </p>
              </div>
            </div>
          </div>

          {/* Calculator Section */}
          <section className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">Calculate Your Lean Body Mass</h2>
              <p className="text-base text-gray-300 max-w-2xl mx-auto leading-relaxed mb-6">
                Enter your details below to estimate your lean body mass.
              </p>
              <div className="inline-flex flex-wrap justify-center gap-3 mb-8 bg-slate-900/60 p-4 rounded-xl border border-brand-border/40">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block w-full mb-1">Calculator Inputs:</span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Gender
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Age
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Height
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Weight
                </span>
              </div>
            </div>
            
            <div className="glass-panel border border-brand-border rounded-3xl p-6 md:p-8">
              <LeanBodyMassCalculatorClient />
              <p className="text-base text-gray-500 text-center mt-6">
                Your estimated lean body mass will appear here.
              </p>
            </div>
          </section>

          {/* Educational content sections below the calculator */}
          <div className="border-t border-brand-border/40 pt-16 space-y-16 text-gray-300">
            
            {/* Grid 1: What is it & Why use it */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">What Is Lean Body Mass?</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  Lean Body Mass (LBM) is the total weight of everything in your body except fat.
                </p>
                <p className="text-gray-300 text-base leading-relaxed">
                  It includes:
                </p>
                <div className="bg-slate-900/40 border border-brand-border/50 rounded-xl p-5 space-y-3">
                  <ul className="list-none pl-0 space-y-2">
                    {[
                      "Muscles",
                      "Bones",
                      "Organs",
                      "Water",
                      "Connective tissues"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-base text-gray-300">
                        <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-gray-300 text-base leading-relaxed">
                  Lean body mass is a more meaningful health indicator than body weight alone because it shows what your weight is actually made of.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Why Lean Body Mass Matters</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  Lean body mass is important because it helps you understand:
                </p>
                <div className="bg-slate-900/40 border border-brand-border/50 rounded-xl p-5 space-y-3">
                  <ul className="list-none pl-0 space-y-2">
                    {[
                      "How much muscle you have",
                      "Whether weight changes are fat or muscle",
                      "Overall fitness level",
                      "Health and metabolism patterns",
                      "Progress in training or dieting"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-base text-gray-300">
                        <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-gray-300 text-base leading-relaxed">
                  Even if your weight stays the same, your lean body mass can change significantly with lifestyle improvements.
                </p>
              </div>
            </div>

            {/* Row 2: How does LBM calculator work */}
            <div className="border-t border-brand-border/40 pt-16 space-y-6">
              <div className="text-center max-w-3xl mx-auto mb-10">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">How the Lean Body Mass Calculator Works</h2>
                <p className="text-base text-gray-400 mt-2">
                  This calculator estimates lean body mass using key physical parameters:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="glass-panel border border-brand-border/50 p-6 rounded-xl space-y-3 hover:border-brand-cyan/20 transition-all hover:scale-[1.02]">
                  <h4 className="font-bold text-white text-base">Body Weight</h4>
                  <p className="text-base text-gray-400 leading-relaxed">
                    Your total weight is the base measurement.
                  </p>
                </div>
                <div className="glass-panel border border-brand-border/50 p-6 rounded-xl space-y-3 hover:border-brand-cyan/20 transition-all hover:scale-[1.02]">
                  <h4 className="font-bold text-white text-base">Height</h4>
                  <p className="text-base text-gray-400 leading-relaxed">
                    Helps adjust body composition estimation.
                  </p>
                </div>
                <div className="glass-panel border border-brand-border/50 p-6 rounded-xl space-y-3 hover:border-brand-cyan/20 transition-all hover:scale-[1.02]">
                  <h4 className="font-bold text-white text-base">Age</h4>
                  <p className="text-base text-gray-400 leading-relaxed">
                    Body composition changes naturally with age.
                  </p>
                </div>
                <div className="glass-panel border border-brand-border/50 p-6 rounded-xl space-y-3 hover:border-brand-cyan/20 transition-all hover:scale-[1.02]">
                  <h4 className="font-bold text-white text-base">Gender</h4>
                  <p className="text-base text-gray-400 leading-relaxed">
                    Men and women have different average body composition patterns.
                  </p>
                </div>
              </div>
              <p className="text-gray-300 text-base leading-relaxed text-center pt-4">
                These inputs are combined to estimate your lean body mass in a simple and fast way.
              </p>
            </div>

            {/* Row 3: Understanding Results Table */}
            <div className="border-t border-brand-border/40 pt-16 space-y-6">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Understanding Your Results</h2>
              <p className="text-gray-300 text-base leading-relaxed">
                Your result is an estimate and may vary based on individual factors.
              </p>
              
              <div className="glass-panel border border-brand-border rounded-2xl overflow-hidden max-w-4xl mx-auto my-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-base">
                    <thead>
                      <tr className="bg-slate-900 border-b border-brand-border text-white font-bold">
                        <th className="p-4">Result Level</th>
                        <th className="p-4">Meaning</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-brand-border/40">
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 font-bold text-brand-cyan">Lower Lean Mass</td>
                        <td className="p-4 text-gray-300">May indicate higher body fat percentage</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 font-bold text-brand-cyan">Average Lean Mass</td>
                        <td className="p-4 text-gray-300">Balanced body composition for most individuals</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 font-bold text-brand-cyan">Higher Lean Mass</td>
                        <td className="p-4 text-gray-300">Often linked with athletic or muscular build</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Grid 2: Lean Body Mass vs Body Weight & Muscle Mass */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start border-t border-brand-border/40 pt-16">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Lean Body Mass vs Body Weight</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  Lean body mass gives a more accurate picture of your physical health than weight alone.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-5 space-y-2">
                    <p className="font-bold text-white uppercase tracking-wider text-[11px] text-brand-cyan">Body Weight</p>
                    <p className="text-base text-gray-400">Includes everything:</p>
                    <ul className="list-disc pl-4 space-y-1 text-sm text-gray-300">
                      <li>Fat</li>
                      <li>Muscle</li>
                      <li>Water</li>
                      <li>Bones</li>
                    </ul>
                  </div>
                  <div className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-5 space-y-2">
                    <p className="font-bold text-white uppercase tracking-wider text-[11px] text-brand-cyan">Lean Body Mass</p>
                    <p className="text-base text-gray-400">Excludes fat and includes:</p>
                    <ul className="list-disc pl-4 space-y-1 text-sm text-gray-300">
                      <li>Muscle</li>
                      <li>Bones</li>
                      <li>Organs</li>
                      <li>Body fluids</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Lean Body Mass vs Muscle Mass</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  Lean body mass is often confused with muscle mass, but they are different:
                </p>
                <div className="bg-slate-900/40 border border-brand-border/50 rounded-xl p-5 space-y-2">
                  <div className="flex justify-between border-b border-brand-border/20 py-2">
                    <span>Muscle Mass:</span>
                    <span className="font-bold text-white">Only muscles</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span>Lean Body Mass:</span>
                    <span className="font-bold text-brand-cyan">Muscles + Organs + Bones + Water</span>
                  </div>
                </div>
                <p className="text-gray-300 text-base leading-relaxed">
                  This means lean body mass is always higher than muscle mass alone.
                </p>
              </div>
            </div>

            {/* Grid 3: Benefits & Factors */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start border-t border-brand-border/40 pt-16">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Benefits of Knowing Your Lean Body Mass</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  Understanding lean body mass can help you:
                </p>
                <div className="bg-slate-900/40 border border-brand-border/50 rounded-xl p-5 space-y-3">
                  <ul className="list-none pl-0 space-y-2">
                    {[
                      "Track fitness progress more accurately",
                      "Improve workout planning",
                      "Understand fat vs muscle changes",
                      "Support better nutrition decisions",
                      "Monitor long-term health improvements"
                    ].map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-base text-gray-300">
                        <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Factors That Affect Lean Body Mass</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  Several factors influence lean body mass:
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Exercise habits",
                    "Strength training",
                    "Diet and protein intake",
                    "Age",
                    "Genetics",
                    "Lifestyle and sleep quality"
                  ].map((factor, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-slate-900/50 border border-brand-border/30 rounded-lg p-3">
                      <span className="w-1.5 h-1.5 bg-brand-indigo rounded-full shrink-0" />
                      <span className="text-sm text-gray-300">{factor}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Grid 4: Improving LBM & LBM vs Professional Testing */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start border-t border-brand-border/40 pt-16">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">How to Improve Lean Body Mass</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  You can improve lean body mass through:
                </p>
                <div className="bg-slate-900/40 border border-brand-border/50 rounded-xl p-5 space-y-3">
                  <ul className="list-none pl-0 space-y-2">
                    {[
                      "Strength training exercises",
                      "Resistance workouts",
                      "Balanced nutrition with protein",
                      "Regular physical activity",
                      "Proper rest and recovery"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-base text-gray-300">
                        <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-gray-300 text-base leading-relaxed font-bold text-brand-cyan">
                  Consistency is key for improving body composition over time.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Lean Body Mass Calculator vs Professional Testing</h2>
                <p className="text-gray-300 text-base leading-relaxed mb-4">
                  Both methods are useful depending on your goal.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-slate-900/40 border border-brand-border/50 rounded-xl p-4 space-y-2">
                    <p className="font-bold text-white text-xs uppercase tracking-wider text-brand-cyan">Online Calculator</p>
                    <ul className="list-disc pl-4 space-y-1 text-xs text-gray-300">
                      <li>Fast and free</li>
                      <li>Provides an estimate</li>
                      <li>Easy to use anytime</li>
                    </ul>
                  </div>
                  <div className="bg-slate-900/40 border border-brand-border/50 rounded-xl p-4 space-y-2">
                    <p className="font-bold text-white text-xs uppercase tracking-wider text-brand-cyan">Professional Tests</p>
                    <ul className="list-disc pl-4 space-y-1 text-xs text-gray-300">
                      <li>More accurate</li>
                      <li>Uses advanced equipment</li>
                      <li>Done in clinics or labs</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 6: FAQs */}
            <div className="border-t border-brand-border/40 pt-16 space-y-8">
              <div className="text-center max-w-3xl mx-auto mb-8">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Frequently Asked Questions (FAQs)</h2>
                <p className="text-base text-gray-400 mt-2">
                  Find quick answers to common questions about estimating and improving lean body mass.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start font-sans">
                {/* Column 1 */}
                <div className="space-y-4">
                  {[
                    {
                      q: "1. What is a lean body mass calculator?",
                      a: "It is a tool that estimates your non-fat body weight using your height, weight, age, and gender."
                    },
                    {
                      q: "2. How accurate is a lean body mass calculator?",
                      a: "It provides an estimate and may vary compared to clinical body composition tests."
                    },
                    {
                      q: "3. Is lean body mass the same as muscle mass?",
                      a: "No, lean body mass includes muscle plus other non-fat tissues."
                    },
                    {
                      q: "4. Why is lean body mass important?",
                      a: "It helps you understand your true body composition beyond just weight."
                    },
                    {
                      q: "5. Can lean body mass change?",
                      a: "Yes, it changes with exercise, diet, aging, and lifestyle."
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
                      q: "6. How can I increase lean body mass?",
                      a: "Through strength training, proper diet, and consistent physical activity."
                    },
                    {
                      q: "7. Does losing weight reduce lean body mass?",
                      a: "Not always. Weight loss can include fat loss or muscle loss depending on lifestyle."
                    },
                    {
                      q: "8. What is a healthy lean body mass?",
                      a: "It depends on age, gender, activity level, and fitness goals."
                    },
                    {
                      q: "9. Can beginners use this calculator?",
                      a: "Yes, it is simple and suitable for anyone interested in body composition."
                    },
                    {
                      q: "10. Is this calculator suitable for athletes?",
                      a: "Yes, it can help athletes track muscle and body composition changes."
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

            {/* Row 7: Related Tools */}
            <div className="border-t border-brand-border/40 pt-16 space-y-4">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Related Tools</h2>
              <p className="text-base leading-relaxed">
                Explore more helpful health calculators:
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mt-6">
                {[
                  { name: "BMI Calculator", path: "/solutions" },
                  { name: "Body Fat Calculator", path: "/solutions" },
                  { name: "Calorie Calculator", path: "/solutions" },
                  { name: "Water Intake Calculator", path: "/water-calculator" },
                  { name: "BMR Calculator", path: "/solutions" }
                ].map((tool, index) => (
                  <Link 
                    key={index} 
                    href={tool.path}
                    className="glass-panel border border-brand-border hover:border-brand-cyan/40 p-6 rounded-xl text-center transition-all hover:scale-[1.02] flex flex-col items-center justify-center gap-3 group cursor-pointer"
                  >
                    <Calculator className="w-6 h-6 text-brand-cyan group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-bold text-white group-hover:text-brand-cyan transition-colors">{tool.name}</span>
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
                  Build Healthcare Technology With Med Clinic X
                </h2>
                <p className="mt-4 text-base text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Med Clinic X helps clinics, hospitals, and healthcare businesses build scalable and modern healthcare platforms.
                </p>

                <div className="my-8 max-w-4xl mx-auto">
                  <p className="font-bold text-white text-base mb-4">We specialize in:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {[
                      { name: "Healthcare Software Development", path: "/services/healthcare-saas-development" },
                      { name: "AI Healthcare Solutions", path: "/services/ai-healthcare-solutions" },
                      { name: "Patient Portal Development", path: "/services/patient-portal-development" },
                      { name: "Telemedicine Solutions", path: "/services/telemedicine-solutions" },
                      { name: "Healthcare Automation", path: "/services/healthcare-automation" },
                      { name: "Healthcare Mobile Applications", path: "/services" }
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
                  From custom clinical portal architectures to advanced AI-enabled diagnostics websites, Med Clinic X delivers scalable technology to improve patient metrics.
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
