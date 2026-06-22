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
import MetabolicAgeCalculatorClient from "./MetabolicAgeCalculatorClient";

export const metadata: Metadata = {
  title: "Metabolic Age Calculator - Estimate Your Body’s Metabolic Age & Health Level | Med Clinic X",
  description:
    "Use our free Metabolic Age Calculator to estimate your metabolic age based on your body information, lifestyle, and fitness factors. Learn how metabolic age relates to health, fitness, and overall wellness.",
  keywords: [
    "Metabolic Age Calculator",
    "Metabolic Age",
    "Calculate metabolic age",
    "Body age calculator",
    "Metabolism calculator",
    "Fitness age calculator",
  ],
  alternates: {
    canonical: "https://medclinicx.com/calculator/metabolic-age-calculator/",
  },
  openGraph: {
    title: "Metabolic Age Calculator - Estimate Your Body’s Metabolic Age & Health Level | Med Clinic X",
    description:
      "Use our free Metabolic Age Calculator to estimate your metabolic age based on your body information, lifestyle, and fitness factors. Learn how metabolic age relates to health, fitness, and overall wellness.",
    url: "https://medclinicx.com/calculator/metabolic-age-calculator/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Metabolic Age Calculator | Med Clinic X",
      },
    ],
  },
};

export default function MetabolicAgeCalculatorPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://medclinicx.com" },
      { "@type": "ListItem", position: 2, name: "Metabolic Age Calculator", item: "https://medclinicx.com/calculator/metabolic-age-calculator/" },
    ],
  };

  const calculatorSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Metabolic Age Calculator",
    description: "Use our free Metabolic Age Calculator to estimate your metabolic age based on your body information, lifestyle, and fitness factors.",
    url: "https://medclinicx.com/calculator/metabolic-age-calculator/",
    about: {
      "@type": "MedicalCondition",
      name: "Metabolic Health",
      possibleTreatment: [
        {
          "@type": "MedicalTherapy",
          name: "Lifestyle & Metabolic Optimization",
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
              Metabolic Age Calculator: <span className="text-gradient-cyan-indigo">Estimate Your Body’s Metabolic Age</span>
            </h1>

            <div className="glass-panel border border-brand-border rounded-2xl p-8 max-w-4xl mx-auto text-left space-y-4 mb-16">
              <h2 className="text-xl font-bold text-brand-cyan font-display">
                Introduction: Understand Your Metabolic Age
              </h2>
              <p className="text-gray-300 text-base leading-relaxed">
                Your actual age is based on the number of years you have lived, but your <strong>metabolic age</strong> provides another way to understand your body’s health and fitness level.
              </p>
              <p className="text-gray-300 text-base leading-relaxed">
                A <strong>Metabolic Age Calculator</strong> estimates your metabolic age by comparing factors related to your body composition, metabolism, and lifestyle with average values for different age groups.
              </p>
              <p className="text-gray-300 text-base leading-relaxed">
                This tool can help you understand how your body’s metabolism compares with general health patterns and identify areas where lifestyle improvements may support better wellness.
              </p>
              <p className="text-gray-300 text-base leading-relaxed font-semibold text-white">
                Our calculator can be useful for:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-2 text-base text-gray-300 font-medium">
                {[
                  "People tracking fitness progress",
                  "Individuals interested in weight management",
                  "Wellness and health enthusiasts",
                  "Fitness professionals",
                  "Users looking to understand metabolism better"
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
                  <strong>Important:</strong> This calculator provides an estimate and should not replace professional medical advice, metabolic testing, or evaluation by a healthcare provider.
                </p>
              </div>
            </div>
          </div>

          {/* Calculator Section */}
          <section className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">Metabolic Age Calculator</h2>
              <p className="text-base text-gray-300 max-w-2xl mx-auto leading-relaxed mb-6">
                Calculate Your Metabolic Age: Enter your information below to estimate your metabolic age.
              </p>
              <div className="inline-flex flex-wrap justify-center gap-3 mb-8 bg-slate-900/60 p-4 rounded-xl border border-brand-border/40">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block w-full mb-1">Calculator Inputs:</span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Age
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Gender
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Height
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Weight
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Activity level
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Body composition information (optional)
                </span>
              </div>
            </div>
            
            <div className="glass-panel border border-brand-border rounded-3xl p-6 md:p-8">
              <MetabolicAgeCalculatorClient />
              <p className="text-base text-gray-500 text-center mt-6">
                Your estimated metabolic age result will appear here.
              </p>
            </div>
          </section>

          {/* Educational content sections below the calculator */}
          <div className="border-t border-brand-border/40 pt-16 space-y-16 text-gray-300">
            
            {/* Row 1: What is it & What is Metabolic Age */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">What Is a Metabolic Age Calculator?</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  A <strong>Metabolic Age Calculator</strong> is a health and wellness tool that estimates your metabolic age based on factors related to your metabolism and body composition.
                </p>
                <p className="text-gray-300 text-base leading-relaxed">
                  Metabolic age is not a medical diagnosis. Instead, it is a wellness indicator that compares your estimated metabolic profile with typical values from different age groups.
                </p>
                <div className="bg-slate-900/40 border border-brand-border/50 rounded-xl p-5 space-y-3">
                  <p className="text-sm font-semibold text-white">For example:</p>
                  <ul className="list-none pl-0 space-y-2">
                    <li className="flex items-start gap-2 text-base text-gray-300">
                      <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full shrink-0 mt-2" />
                      <span>If your metabolic age is lower than your actual age, it may suggest healthier metabolic characteristics.</span>
                    </li>
                    <li className="flex items-start gap-2 text-base text-gray-300">
                      <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full shrink-0 mt-2" />
                      <span>If your metabolic age is higher than your actual age, it may indicate areas where lifestyle changes could support better health.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">What Is Metabolic Age?</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  Metabolic age refers to an estimated age based on how your body functions compared with average metabolic patterns.
                </p>
                <p className="text-gray-300 text-base leading-relaxed">
                  It may consider factors such as:
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Basal metabolic rate (BMR)",
                    "Body composition",
                    "Muscle mass",
                    "Body fat percentage",
                    "Activity level",
                    "Lifestyle habits"
                  ].map((factor, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-slate-900/50 border border-brand-border/30 rounded-lg p-3">
                      <span className="w-1.5 h-1.5 bg-brand-indigo rounded-full shrink-0" />
                      <span className="text-sm text-gray-300">{factor}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-300 text-base leading-relaxed">
                  A person&apos;s metabolic age can differ from their actual age because metabolism is influenced by many factors beyond time.
                </p>
              </div>
            </div>

            {/* Row 2: How does it work */}
            <div className="border-t border-brand-border/40 pt-16 space-y-6">
              <div className="text-center max-w-3xl mx-auto mb-10">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">How Does the Metabolic Age Calculator Work?</h2>
                <p className="text-base text-gray-400 mt-2">
                  The calculator estimates metabolic age by analyzing information related to your body and lifestyle.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                <div className="glass-panel border border-brand-border/50 p-6 rounded-xl space-y-3 hover:border-brand-cyan/20 transition-all hover:scale-[1.02] flex flex-col">
                  <h4 className="font-bold text-white text-base">Age</h4>
                  <p className="text-xs text-gray-400 leading-relaxed flex-grow">
                    Your current age helps compare your metabolic information with age-based averages.
                  </p>
                </div>
                <div className="glass-panel border border-brand-border/50 p-6 rounded-xl space-y-3 hover:border-brand-cyan/20 transition-all hover:scale-[1.02] flex flex-col">
                  <h4 className="font-bold text-white text-base">Gender</h4>
                  <p className="text-xs text-gray-400 leading-relaxed flex-grow">
                    Metabolic calculations consider physiological differences in body composition patterns.
                  </p>
                </div>
                <div className="glass-panel border border-brand-border/50 p-6 rounded-xl space-y-3 hover:border-brand-cyan/20 transition-all hover:scale-[1.02] flex flex-col">
                  <h4 className="font-bold text-white text-base">Height & Weight</h4>
                  <p className="text-xs text-gray-400 leading-relaxed flex-grow">
                    These measurements help estimate body size, body mass index, and basal metabolic requirements.
                  </p>
                </div>
                <div className="glass-panel border border-brand-border/50 p-6 rounded-xl space-y-3 hover:border-brand-cyan/20 transition-all hover:scale-[1.02] flex flex-col">
                  <h4 className="font-bold text-white text-base">Activity Level</h4>
                  <p className="text-xs text-gray-400 leading-relaxed flex-grow">
                    Physical activity affects energy use, muscle retention, and overall daily metabolism speed.
                  </p>
                </div>
                <div className="glass-panel border border-brand-border/50 p-6 rounded-xl space-y-3 hover:border-brand-cyan/20 transition-all hover:scale-[1.02] flex flex-col">
                  <h4 className="font-bold text-white text-base">Body Composition</h4>
                  <p className="text-xs text-gray-400 leading-relaxed flex-grow">
                    Muscle-to-fat distribution ratio heavily influences resting metabolism efficiency.
                  </p>
                </div>
              </div>
              <p className="text-gray-300 text-base leading-relaxed text-center pt-4">
                The calculator combines these factors to provide an estimated metabolic age result.
              </p>
            </div>

            {/* Row 3: Understanding Results Table */}
            <div className="border-t border-brand-border/40 pt-16 space-y-6">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Understanding Your Metabolic Age Results</h2>
              <p className="text-gray-300 text-base leading-relaxed">
                Your metabolic age result is an estimate designed to provide general wellness insight.
              </p>
              
              <div className="glass-panel border border-brand-border rounded-2xl overflow-hidden max-w-4xl mx-auto my-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-base">
                    <thead>
                      <tr className="bg-slate-900 border-b border-brand-border text-white font-bold">
                        <th className="p-4">Result</th>
                        <th className="p-4">General Meaning</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-brand-border/40">
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 font-bold text-brand-cyan">Lower Metabolic Age</td>
                        <td className="p-4 text-gray-300">May indicate healthier metabolic characteristics compared with average age groups</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 font-bold text-brand-cyan">Similar Metabolic Age</td>
                        <td className="p-4 text-gray-300">May indicate metabolic characteristics close to your age group average</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 font-bold text-brand-cyan">Higher Metabolic Age</td>
                        <td className="p-4 text-gray-300">May suggest opportunities to improve lifestyle habits and body composition</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-gray-400 text-sm text-center">
                A metabolic age result should always be viewed as one part of overall health.
              </p>
            </div>

            {/* Row 4: Why is it important & Factors */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start border-t border-brand-border/40 pt-16">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Why Is Metabolic Age Important?</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  Understanding metabolic age can help increase awareness about your overall wellness. Benefits include:
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-bold text-base flex items-center gap-2">
                      <span className="w-2 h-2 bg-brand-cyan rounded-full" /> Health Awareness
                    </h4>
                    <p className="text-sm text-gray-400 pl-4 mt-0.5">It helps users understand how lifestyle factors may influence metabolism.</p>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base flex items-center gap-2">
                      <span className="w-2 h-2 bg-brand-cyan rounded-full" /> Fitness Tracking
                    </h4>
                    <p className="text-sm text-gray-400 pl-4 mt-0.5">People can monitor changes as they improve exercise and nutrition habits.</p>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base flex items-center gap-2">
                      <span className="w-2 h-2 bg-brand-cyan rounded-full" /> Better Lifestyle Decisions
                    </h4>
                    <p className="text-sm text-gray-400 pl-4 mt-0.5">It can encourage healthier daily choices.</p>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base flex items-center gap-2">
                      <span className="w-2 h-2 bg-brand-cyan rounded-full" /> Long-Term Wellness Planning
                    </h4>
                    <p className="text-sm text-gray-400 pl-4 mt-0.5">Understanding metabolism can support better health goals.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Factors That Affect Metabolic Age</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  Many factors can influence metabolic age:
                </p>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-white font-bold text-base flex items-center gap-2">Muscle Mass</h4>
                    <p className="text-sm text-gray-400 mt-0.5">Muscle tissue requires more energy compared with fat tissue, which can influence metabolism.</p>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base flex items-center gap-2">Physical Activity</h4>
                    <p className="text-sm text-gray-400 mt-0.5">Regular movement and exercise can support metabolic health.</p>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base flex items-center gap-2">Diet</h4>
                    <p className="text-sm text-gray-400 mt-0.5">Nutrition habits influence body composition and energy balance.</p>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base flex items-center gap-2">Sleep Quality</h4>
                    <p className="text-sm text-gray-400 mt-0.5">Poor sleep patterns may affect overall wellness and metabolism.</p>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base flex items-center gap-2">Age</h4>
                    <p className="text-sm text-gray-400 mt-0.5">Metabolism naturally changes throughout life.</p>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base flex items-center gap-2">Genetics</h4>
                    <p className="text-sm text-gray-400 mt-0.5">Genetic factors can influence body composition and metabolic patterns.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 5: How can you improve metabolic age */}
            <div className="border-t border-brand-border/40 pt-16 space-y-6">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">How Can You Improve Your Metabolic Age?</h2>
              <p className="text-gray-300 text-base leading-relaxed">
                A healthier lifestyle may support better metabolic health.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                <div className="glass-panel border border-brand-border p-5 rounded-xl space-y-2">
                  <h4 className="font-bold text-white text-base">Build Muscle</h4>
                  <p className="text-xs text-gray-400 leading-normal">
                    Strength training helps maintain and improve muscle mass.
                  </p>
                  <ul className="text-[10px] text-brand-cyan font-bold list-disc pl-4 space-y-1">
                    <li>Resistance training</li>
                    <li>Weight exercises</li>
                    <li>Bodyweight workouts</li>
                  </ul>
                </div>
                <div className="glass-panel border border-brand-border p-5 rounded-xl space-y-2 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-white text-base">Stay Active</h4>
                    <p className="text-xs text-gray-400 leading-normal">
                      Regular movement supports energy use, physical conditioning, and overall metabolic fitness.
                    </p>
                  </div>
                </div>
                <div className="glass-panel border border-brand-border p-5 rounded-xl space-y-2 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-white text-base">Balanced Nutrition</h4>
                    <p className="text-xs text-gray-400 leading-normal">
                      A balanced diet supports healthy body composition and provides essential nutrients for cellular processes.
                    </p>
                  </div>
                </div>
                <div className="glass-panel border border-brand-border p-5 rounded-xl space-y-2 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-white text-base">Prioritize Sleep</h4>
                    <p className="text-xs text-gray-400 leading-normal">
                      Quality sleep supports overall hormonal balance, recovery, tissue repair, and metabolic health.
                    </p>
                  </div>
                </div>
                <div className="glass-panel border border-brand-border p-5 rounded-xl space-y-2 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-white text-base">Manage Stress</h4>
                    <p className="text-xs text-gray-400 leading-normal">
                      Long-term stress can influence lifestyle habits, cortisol levels, and physical wellness.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 6: Traditional Age vs Medical Testing */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start border-t border-brand-border/40 pt-16">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Metabolic Age Calculator vs Traditional Age</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-5 space-y-2">
                    <p className="font-bold text-white uppercase tracking-wider text-[11px] text-brand-cyan">Actual Age</p>
                    <p className="text-sm text-gray-400">Your chronological age based on your date of birth.</p>
                  </div>
                  <div className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-5 space-y-2">
                    <p className="font-bold text-white uppercase tracking-wider text-[11px] text-brand-cyan">Metabolic Age</p>
                    <p className="text-sm text-gray-400">An estimated wellness indicator based on metabolic and body-related factors.</p>
                  </div>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  <strong>Example:</strong> A person may be 40 years old but have a metabolic age estimate closer to 35 based on certain body composition factors. However, metabolic age is not a medical measurement and should not be used to diagnose health conditions.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Metabolic Age Calculator vs Medical Testing</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-5 space-y-2">
                    <p className="font-bold text-white uppercase tracking-wider text-[11px] text-brand-cyan">Online Calculator</p>
                    <ul className="list-disc pl-4 space-y-1 text-xs text-gray-300">
                      <li>Fast and easy to use</li>
                      <li>Provides a general estimate</li>
                      <li>Helps increase health awareness</li>
                      <li>Does not directly measure metabolism</li>
                    </ul>
                  </div>
                  <div className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-5 space-y-2">
                    <p className="font-bold text-white uppercase tracking-wider text-[11px] text-brand-cyan">Professional Testing</p>
                    <ul className="list-disc pl-4 space-y-1 text-xs text-gray-300">
                      <li>More detailed assessment</li>
                      <li>Uses specialized lab equipment</li>
                      <li>Provides clinical measurements</li>
                      <li>Requires in-person clinic visit</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  A calculator is useful for general awareness, while professional testing provides deep clinical analysis.
                </p>
              </div>
            </div>

            {/* Row 7: FAQs Accordions */}
            <div className="border-t border-brand-border/40 pt-16 space-y-8">
              <div className="text-center max-w-3xl mx-auto mb-8">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Frequently Asked Questions</h2>
                <p className="text-base text-gray-400 mt-2">
                  Common questions about estimating metabolic age and improving metabolic health levels.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start font-sans">
                {/* Column 1 */}
                <div className="space-y-4">
                  {[
                    {
                      q: "1. What is a metabolic age calculator?",
                      a: "A metabolic age calculator is a tool that estimates your metabolic age using factors such as age, weight, height, activity level, and body composition."
                    },
                    {
                      q: "2. Is metabolic age the same as actual age?",
                      a: "No. Actual age is based on your birth date, while metabolic age is an estimate related to body and metabolism factors."
                    },
                    {
                      q: "3. How accurate is a metabolic age calculator?",
                      a: "It provides an estimate based on the information entered. Professional metabolic testing may provide more detailed measurements."
                    },
                    {
                      q: "4. What does a lower metabolic age mean?",
                      a: "A lower metabolic age may suggest healthier body composition or lifestyle factors compared with average values."
                    },
                    {
                      q: "5. Can I reduce my metabolic age?",
                      a: "Healthy habits such as exercise, balanced nutrition, and maintaining muscle mass may support better metabolic health."
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
                      q: "6. Does weight affect metabolic age?",
                      a: "Yes. Body weight, body composition, and muscle-to-fat ratio can influence metabolic calculations."
                    },
                    {
                      q: "7. Does exercise improve metabolic age?",
                      a: "Yes. Regular physical activity, especially strength training, may support healthier metabolic characteristics."
                    },
                    {
                      q: "8. Can metabolic age predict health problems?",
                      a: "No. Metabolic age is a wellness estimate and does not diagnose medical conditions."
                    },
                    {
                      q: "9. Why is my metabolic age higher than my real age?",
                      a: "It may be influenced by factors such as body composition, activity level, lifestyle habits, and other individual differences."
                    },
                    {
                      q: "10. How often should I check my metabolic age?",
                      a: "You can track it periodically as a wellness measurement, but changes should be evaluated alongside overall health goals."
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

            {/* Row 8: Related Healthcare Tools */}
            <div className="border-t border-brand-border/40 pt-16 space-y-4">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Related Healthcare Tools</h2>
              <p className="text-base leading-relaxed">
                Explore more health calculators:
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-6 gap-4 mt-6">
                {[
                  { name: "Lean Body Mass Calculator", path: "/calculator/lean-body-mass-calculator" },
                  { name: "BMI Calculator", path: "/solutions" },
                  { name: "Body Fat Calculator", path: "/solutions" },
                  { name: "Water Intake Calculator", path: "/calculator/water-calculator" },
                  { name: "Calorie Calculator", path: "/solutions" },
                  { name: "BMR Calculator", path: "/solutions" }
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

            {/* Med Clinic X CTA Section */}
            <div className="pt-12">
              <div className="relative rounded-3xl overflow-hidden p-8 md:p-16 text-center border border-brand-border bg-gradient-cyber my-8">
                <div className="absolute -top-24 -left-24 w-72 h-72 bg-brand-cyan/10 rounded-full blur-[90px] -z-10" />
                <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-brand-indigo/10 rounded-full blur-[90px] -z-10" />
                
                <h2 className="font-display font-bold text-3xl md:text-5xl text-white leading-tight">
                  Build Better Healthcare Experiences With Med Clinic X
                </h2>
                <p className="mt-4 text-base text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Med Clinic X helps healthcare organizations build modern digital healthcare solutions that improve patient engagement, healthcare operations, and user experiences.
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
