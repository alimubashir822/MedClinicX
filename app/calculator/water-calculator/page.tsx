import { Metadata } from "next";
import Link from "next/link";
import { 
  AlertTriangle, 
  ChevronDown, 
  ArrowRight, 
  Sparkles, 
  Activity, 
  Calculator, 
  BookOpen, 
  Shield,
  CheckCircle
} from "lucide-react";
import WaterCalculatorClient from "./WaterCalculatorClient";

export const metadata: Metadata = {
  title: "Water Intake Calculator - Calculate How Much Water You Should Drink Daily | Med Clinic X",
  description:
    "Use our free Water Intake Calculator to estimate your daily water needs based on your body weight, activity level, and lifestyle. Learn how much water your body needs to stay hydrated and support overall health.",
  keywords: [
    "Water Intake Calculator",
    "Daily water intake calculator",
    "How much water should I drink",
    "Water requirement calculator",
    "Daily hydration calculator",
    "How much water should I drink per day",
  ],
  alternates: {
    canonical: "https://medclinicx.com/calculator/",
  },
  openGraph: {
    title: "Water Intake Calculator - Calculate How Much Water You Should Drink Daily | Med Clinic X",
    description:
      "Use our free Water Intake Calculator to estimate your daily water needs based on your body weight, activity level, and lifestyle. Learn how much water your body needs to stay hydrated and support overall health.",
    url: "https://medclinicx.com/calculator/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Water Intake Calculator | Med Clinic X",
      },
    ],
  },
};

export default function WaterCalculatorPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://medclinicx.com" },
      { "@type": "ListItem", position: 2, name: "Water Intake Calculator", item: "https://medclinicx.com/calculator/" },
    ],
  };

  const calculatorSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Water Intake Calculator",
    description: "Use our free Water Intake Calculator to estimate your daily water needs based on your body weight, activity level, and lifestyle.",
    url: "https://medclinicx.com/calculator/",
    about: {
      "@type": "MedicalCondition",
      name: "Dehydration",
      possibleTreatment: [
        {
          "@type": "MedicalTherapy",
          name: "Fluid Replenishment / Hydration",
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
              <span className="text-[11px] font-bold text-brand-cyan uppercase tracking-widest">Healthcare SEO Tools</span>
            </div>
            
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-6">
              Water Intake Calculator: <span className="text-gradient-cyan-indigo">Find Your Daily Water Intake Goal</span>
            </h1>

            <div className="glass-panel border border-brand-border rounded-2xl p-8 max-w-4xl mx-auto text-left space-y-4 mb-16">
              <h2 className="text-xl font-bold text-brand-cyan font-display">
                Introduction: Calculate Your Daily Water Intake
              </h2>
              <p className="text-gray-300 text-base leading-relaxed">
                Staying properly hydrated is essential for maintaining overall health, energy levels, and normal body functions. Our <strong>Water Intake Calculator</strong> helps you estimate how much water you should drink each day based on important factors such as your body weight, activity level, and lifestyle.
              </p>
              <p className="text-gray-300 text-base leading-relaxed">
                Water requirements are different for every person. Someone who exercises regularly, works outdoors, or lives in a hot environment may need more fluids compared with someone with a less active lifestyle.
              </p>
              <p className="text-gray-300 text-base leading-relaxed">
                This calculator provides a simple way to understand your approximate daily hydration needs and create a healthier water-drinking routine.
              </p>
              <p className="text-gray-300 text-base leading-relaxed">
                Whether you want to improve your wellness habits, support fitness goals, or simply understand your hydration requirements, this tool can provide a helpful estimate.
              </p>
              <div className="bg-rose-500/10 border border-rose-500/20 text-rose-300 rounded-xl p-4 flex gap-3 text-sm">
                <AlertTriangle className="w-5.5 h-5.5 text-rose-400 shrink-0 mt-0.5" />
                <p className="text-base leading-normal">
                  <strong>Important:</strong> This calculator provides an estimate and should not replace professional medical advice. Individual hydration needs may vary based on health conditions, medications, climate, and other personal factors.
                </p>
              </div>
            </div>
          </div>

          {/* Calculator Section */}
          <section className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">Calculate How Much Water You Need Daily</h2>
              <p className="text-base text-gray-300 max-w-2xl mx-auto leading-relaxed mb-6">
                Enter your information below to calculate your recommended daily water intake.
              </p>
              <div className="inline-flex flex-wrap justify-center gap-3 mb-8 bg-slate-900/60 p-4 rounded-xl border border-brand-border/40">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block w-full mb-1">Calculator Inputs:</span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Body weight
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Age (optional)
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Activity level
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Exercise duration
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Climate/environment
                </span>
              </div>
            </div>
            
            <div className="glass-panel border border-brand-border rounded-3xl p-6 md:p-8">
              <WaterCalculatorClient />
              <p className="text-base text-gray-500 text-center mt-6">
                Your estimated daily water requirement will appear here.
              </p>
            </div>
          </section>

          {/* Educational SEO content below the calculator */}
          <div className="border-t border-brand-border/40 pt-16 space-y-16 text-gray-300">
            
            {/* Grid 1: What is it & Why use it */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">What Is a Water Intake Calculator?</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  A <strong>Water Intake Calculator</strong> is an online health tool designed to estimate how much water a person should consume daily based on personal factors.
                </p>
                <p className="text-gray-300 text-base leading-relaxed">
                  The human body depends on water for many important functions, including:
                </p>
                <div className="bg-slate-900/40 border border-brand-border/50 rounded-xl p-5 space-y-3">
                  <ul className="list-none pl-0 space-y-2">
                    {[
                      "Regulating body temperature",
                      "Supporting digestion",
                      "Maintaining blood circulation",
                      "Protecting organs and tissues",
                      "Supporting physical performance",
                      "Removing waste from the body"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-base text-gray-300">
                        <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-gray-300 text-base leading-relaxed">
                  Because hydration needs vary between individuals, a water intake calculator provides a personalized estimate instead of using a single recommendation for everyone.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Why Do People Use a Water Intake Calculator?</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  Many people use a water intake calculator because they are unsure how much water they actually need.
                </p>
                <p className="text-gray-300 text-base leading-relaxed">
                  Common reasons include:
                </p>
                <div className="bg-slate-900/40 border border-brand-border/50 rounded-xl p-5 space-y-3">
                  <ul className="list-none pl-0 space-y-2">
                    {[
                      "Improving daily hydration habits",
                      "Supporting fitness and exercise goals",
                      "Preventing dehydration",
                      "Understanding personal water requirements",
                      "Creating healthier lifestyle routines"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-base text-gray-300">
                        <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-gray-300 text-base leading-relaxed">
                  A personalized estimate can make it easier to build a consistent hydration plan.
                </p>
              </div>
            </div>

            {/* Row 2: How does it work */}
            <div className="border-t border-brand-border/40 pt-16 space-y-6">
              <div className="text-center max-w-3xl mx-auto mb-10">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">How Does the Water Intake Calculator Work?</h2>
                <p className="text-base text-gray-400 mt-2">
                  The calculator estimates your daily water requirement by analyzing different factors that influence hydration needs.
                </p>
              </div>

              <h3 className="font-display font-bold text-lg text-white mb-4">Information Used for Calculation:</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="glass-panel border border-brand-border/50 p-6 rounded-xl space-y-3 hover:border-brand-cyan/20 transition-all hover:scale-[1.02]">
                  <h4 className="font-bold text-white text-base">Body Weight</h4>
                  <p className="text-base text-gray-400 leading-relaxed">
                    Body size is one of the most common factors used when estimating water needs. Larger bodies generally require more fluids compared with smaller bodies.
                  </p>
                </div>
                <div className="glass-panel border border-brand-border/50 p-6 rounded-xl space-y-3 hover:border-brand-cyan/20 transition-all hover:scale-[1.02]">
                  <h4 className="font-bold text-white text-base">Activity Level</h4>
                  <p className="text-base text-gray-400 leading-relaxed">
                    Physical activity increases fluid loss through sweating. People who exercise frequently may need additional water intake.
                  </p>
                </div>
                <div className="glass-panel border border-brand-border/50 p-6 rounded-xl space-y-3 hover:border-brand-cyan/20 transition-all hover:scale-[1.02]">
                  <h4 className="font-bold text-white text-base">Exercise Duration</h4>
                  <p className="text-base text-gray-400 leading-relaxed">
                    Longer workouts or intense physical activity can increase hydration requirements.
                  </p>
                </div>
                <div className="glass-panel border border-brand-border/50 p-6 rounded-xl space-y-3 hover:border-brand-cyan/20 transition-all hover:scale-[1.02]">
                  <h4 className="font-bold text-white text-base">Environment</h4>
                  <p className="text-base text-gray-400 leading-relaxed">
                    Hot or humid weather can increase fluid loss and may affect daily water needs.
                  </p>
                </div>
                <div className="glass-panel border border-brand-border/50 p-6 rounded-xl space-y-3 hover:border-brand-cyan/20 transition-all hover:scale-[1.02] md:col-span-2 lg:col-span-1">
                  <h4 className="font-bold text-white text-base">Lifestyle Factors</h4>
                  <p className="text-base text-gray-400 leading-relaxed">
                    Daily routines, diet, and overall activity can influence hydration requirements.
                  </p>
                </div>
              </div>
            </div>

            {/* Row 3: Understanding Results */}
            <div className="border-t border-brand-border/40 pt-16 space-y-6">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Understanding Your Water Intake Results</h2>
              <p className="text-gray-300 text-base leading-relaxed">
                Your calculator result provides an estimated daily water intake recommendation.
              </p>
              
              <div className="glass-panel border border-brand-border rounded-2xl overflow-hidden max-w-4xl mx-auto my-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-base">
                    <thead>
                      <tr className="bg-slate-900 border-b border-brand-border text-white font-bold">
                        <th className="p-4">Water Intake Level</th>
                        <th className="p-4">Meaning</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-brand-border/40">
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 font-bold text-brand-cyan">Lower Amount</td>
                        <td className="p-4 text-gray-300">May be suitable for people with lower activity levels and cooler environments</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 font-bold text-brand-cyan">Moderate Amount</td>
                        <td className="p-4 text-gray-300">Common range for many healthy adults</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 font-bold text-brand-cyan">Higher Amount</td>
                        <td className="p-4 text-gray-300">May be needed for active individuals, athletes, or hot environments</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-gray-300 text-base leading-relaxed">
                Remember that hydration needs are individual and can change depending on daily activities.
              </p>
            </div>

            {/* Grid 2: How much per day & Signs of dehydration */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start border-t border-brand-border/40 pt-16">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">How Much Water Should You Drink Per Day?</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  There is no single amount of water that works for everyone.
                </p>
                <p className="text-gray-300 text-base leading-relaxed">
                  Daily water needs depend on:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    "Body size",
                    "Exercise habits",
                    "Climate",
                    "Diet",
                    "Health conditions",
                    "Activity level"
                  ].map((factor, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-slate-900/50 border border-brand-border/30 rounded-lg p-3">
                      <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full shrink-0" />
                      <span className="text-base text-gray-300">{factor}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-300 text-base leading-relaxed pt-2">
                  Some people may need more fluids because of increased sweating, physical work, or exercise.
                </p>
                <p className="text-gray-300 text-base leading-relaxed">
                  The best approach is to use your estimated intake as a starting point and adjust based on your body&apos;s needs.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Signs You May Not Be Drinking Enough Water</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  Dehydration can affect how you feel and perform throughout the day.
                </p>
                <p className="text-gray-300 text-base leading-relaxed">
                  Common signs may include:
                </p>
                <div className="bg-slate-900/40 border border-brand-border/50 rounded-xl p-5">
                  <ul className="list-none pl-0 space-y-2">
                    {[
                      "Feeling thirsty",
                      "Dry mouth",
                      "Fatigue",
                      "Dark-colored urine",
                      "Headache",
                      "Reduced physical performance",
                      "Difficulty concentrating"
                    ].map((sign, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-base text-gray-300">
                        <span className="w-1.5 h-1.5 bg-rose-500 rounded-full shrink-0" />
                        <span>{sign}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-gray-300 text-base leading-relaxed">
                  Maintaining proper hydration can support better daily energy and wellbeing.
                </p>
              </div>
            </div>

            {/* Row 4: Benefits */}
            <div className="border-t border-brand-border/40 pt-16 space-y-6">
              <div className="text-center max-w-3xl mx-auto mb-10">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Benefits of Staying Properly Hydrated</h2>
                <p className="text-base text-gray-400 mt-2">
                  Drinking enough water supports many important body functions.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="glass-panel border border-brand-border/50 p-6 rounded-xl space-y-3 hover:border-brand-cyan/20 transition-all hover:scale-[1.02]">
                  <h3 className="font-bold text-white text-base">Supports Physical Performance</h3>
                  <p className="text-base text-gray-400 leading-relaxed">
                    Water helps maintain normal body temperature and supports exercise performance.
                  </p>
                </div>
                <div className="glass-panel border border-brand-border/50 p-6 rounded-xl space-y-3 hover:border-brand-cyan/20 transition-all hover:scale-[1.02]">
                  <h3 className="font-bold text-white text-base">Helps Maintain Energy Levels</h3>
                  <p className="text-base text-gray-400 leading-relaxed">
                    Even mild dehydration may affect concentration and energy.
                  </p>
                </div>
                <div className="glass-panel border border-brand-border/50 p-6 rounded-xl space-y-3 hover:border-brand-cyan/20 transition-all hover:scale-[1.02]">
                  <h3 className="font-bold text-white text-base">Supports Digestion</h3>
                  <p className="text-base text-gray-400 leading-relaxed">
                    Water plays an important role in normal digestion and nutrient absorption.
                  </p>
                </div>
                <div className="glass-panel border border-brand-border/50 p-6 rounded-xl space-y-3 hover:border-brand-cyan/20 transition-all hover:scale-[1.02]">
                  <h3 className="font-bold text-white text-base">Supports Overall Wellness</h3>
                  <p className="text-base text-gray-400 leading-relaxed">
                    Good hydration habits are part of a healthy lifestyle.
                  </p>
                </div>
              </div>
            </div>

            {/* Grid 3: Factors & Improving Habits */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start border-t border-brand-border/40 pt-16">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Factors That Can Affect Your Water Needs</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  Your daily water requirements may change because of several factors.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-white font-bold text-base mb-1">Exercise</h3>
                    <p className="text-base text-gray-400 leading-relaxed">
                      Physical activity increases fluid loss through sweat.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base mb-1">Weather</h3>
                    <p className="text-base text-gray-400 leading-relaxed">
                      Hot climates may increase the amount of water your body needs.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base mb-1">Diet</h3>
                    <p className="text-base text-gray-400 leading-relaxed">
                      Foods with high water content can contribute to daily fluid intake. Examples include:
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {["Fruits", "Vegetables", "Soups"].map((food, i) => (
                        <span key={i} className="text-xs font-bold px-3.5 py-1.5 rounded-full bg-white/5 border border-brand-border text-gray-300">
                          {food}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base mb-1">Health Conditions</h3>
                    <p className="text-base text-gray-400 leading-relaxed">
                      Some health conditions may affect hydration requirements.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base mb-1">Medications</h3>
                    <p className="text-base text-gray-400 leading-relaxed">
                      Certain medications may influence fluid balance.
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 text-base leading-relaxed font-bold text-brand-cyan pt-2">
                  Always follow healthcare provider recommendations if you have specific medical concerns.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">How to Improve Your Daily Hydration Habits</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  Building healthy hydration habits does not require major changes.
                </p>
                <p className="text-gray-300 text-base leading-relaxed">
                  Some simple strategies include:
                </p>
                
                <div className="space-y-4">
                  <div className="bg-slate-900/40 border border-brand-border/50 rounded-xl p-5 space-y-4">
                    <div>
                      <h4 className="text-white font-bold text-base flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-brand-cyan" /> Keep Water Available
                      </h4>
                      <p className="text-base text-gray-400 leading-relaxed pl-6">
                        Carry a reusable water bottle throughout the day.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-base flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-brand-cyan" /> Create Reminders
                      </h4>
                      <p className="text-base text-gray-400 leading-relaxed pl-6">
                        Set reminders if you often forget to drink water.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-base flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-brand-cyan" /> Drink Water With Meals
                      </h4>
                      <p className="text-base text-gray-400 leading-relaxed pl-6">
                        Making water part of your meals can support consistency.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-base flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-brand-cyan" /> Monitor Your Body
                      </h4>
                      <p className="text-base text-gray-400 leading-relaxed pl-6">
                        Pay attention to thirst and hydration signals.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-base flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-brand-cyan" /> Increase Intake During Activity
                      </h4>
                      <p className="text-base text-gray-400 leading-relaxed pl-6">
                        Drink more fluids when exercising or spending time in hot environments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 5: Calculator vs General */}
            <div className="border-t border-brand-border/40 pt-16 space-y-6">
              <div className="text-center max-w-3xl mx-auto mb-10">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Water Intake Calculator vs General Water Recommendations</h2>
                <p className="text-base text-gray-400 mt-2">
                  Many hydration recommendations provide general guidelines, but they may not consider individual differences.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-slate-900/50 border border-brand-border/40 rounded-2xl p-6 md:p-8 space-y-4 hover:border-brand-cyan/20 transition-all">
                  <h3 className="font-bold text-white text-lg border-b border-brand-border/40 pb-3 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-brand-cyan" />
                    <span>General Recommendations</span>
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-bold text-brand-cyan uppercase tracking-wider text-[11px]">Advantages:</p>
                      <p className="text-base text-gray-300 pl-2 mt-1">&bull; Easy to follow</p>
                      <p className="text-base text-gray-300 pl-2">&bull; Useful starting point</p>
                    </div>
                    <div>
                      <p className="font-bold text-rose-400 uppercase tracking-wider text-[11px]">Limitations:</p>
                      <p className="text-base text-gray-300 pl-2 mt-1">&bull; Not personalized</p>
                      <p className="text-base text-gray-300 pl-2">&bull; Does not consider activity level or body size</p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/50 border border-brand-border/40 rounded-2xl p-6 md:p-8 space-y-4 hover:border-brand-indigo/20 transition-all">
                  <h3 className="font-bold text-white text-lg border-b border-brand-border/40 pb-3 flex items-center gap-2">
                    <Calculator className="w-5 h-5 text-brand-indigo" />
                    <span>Water Intake Calculator</span>
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-bold text-brand-cyan uppercase tracking-wider text-[11px]">Advantages:</p>
                      <p className="text-base text-gray-300 pl-2 mt-1">&bull; More personalized estimate</p>
                      <p className="text-base text-gray-300 pl-2">&bull; Considers individual factors</p>
                      <p className="text-base text-gray-300 pl-2">&bull; Helps users understand their own needs</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-gray-300 text-base leading-relaxed text-center pt-4">
                A calculator provides a more customized starting point compared with a one-size-fits-all recommendation.
              </p>
            </div>

            {/* Row 6: FAQs */}
            <div className="border-t border-brand-border/40 pt-16 space-y-8">
              <div className="text-center max-w-3xl mx-auto mb-8">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Frequently Asked Questions About Water Intake Calculator</h2>
                <p className="text-base text-gray-400 mt-2">
                  Find answers to common questions about daily hydration requirements and utilizing the calculator.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start font-sans">
                {/* Column 1 */}
                <div className="space-y-4">
                  {[
                    {
                      q: "1. What is a water intake calculator?",
                      a: "A water intake calculator is an online tool that estimates how much water you should drink daily based on factors like body weight, activity level, and lifestyle."
                    },
                    {
                      q: "2. How much water should I drink every day?",
                      a: "Daily water needs vary depending on your body size, activity level, environment, and overall health. A water intake calculator can provide a personalized estimate."
                    },
                    {
                      q: "3. How does a water intake calculator work?",
                      a: "The calculator uses information such as weight, activity level, and exercise habits to estimate your recommended daily water intake."
                    },
                    {
                      q: "4. Can I drink too much water?",
                      a: "Yes. Excessive water intake can affect the body's fluid balance. It is important to maintain appropriate hydration rather than drinking unnecessary amounts."
                    },
                    {
                      q: "5. Does exercise increase water requirements?",
                      a: "Yes. Exercise can increase fluid loss through sweating, which may increase your hydration needs."
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
                      q: "6. Is drinking water good for weight loss?",
                      a: "Drinking enough water can support healthy habits and may help people maintain better routines, but water alone does not directly cause weight loss."
                    },
                    {
                      q: "7. How accurate is a water intake calculator?",
                      a: "A water intake calculator provides an estimate based on general formulas. Actual needs may vary depending on personal health factors."
                    },
                    {
                      q: "8. Do children and adults need the same amount of water?",
                      a: "No. Hydration needs vary based on age, body size, activity, and development."
                    },
                    {
                      q: "9. Does coffee or tea count toward daily water intake?",
                      a: "Many beverages contribute to overall fluid intake, but water remains an important source of hydration."
                    },
                    {
                      q: "10. When should I drink more water?",
                      a: "You may need more fluids during exercise, hot weather, increased sweating, or physically demanding activities."
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

            {/* Row 7: Explore More Healthcare Tools */}
            <div className="border-t border-brand-border/40 pt-16 space-y-4">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Related Healthcare Tools</h2>
              <p className="text-base leading-relaxed">
                Explore more helpful health calculators:
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 mt-6">
                {[
                  { name: "A1C Calculator", path: "/a1c-calculator" },
                  { name: "BMI Calculator", path: "/solutions" },
                  { name: "Calorie Calculator", path: "/solutions" },
                  { name: "Body Fat Calculator", path: "/solutions" },
                  { name: "Blood Pressure", path: "/solutions" },
                  { name: "Heart Health", path: "/solutions" },
                  { name: "Diabetes Risk", path: "/solutions" }
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
                  Improve Healthcare Experiences With Med Clinic X
                </h2>
                <p className="mt-4 text-base text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Med Clinic X helps healthcare organizations build modern digital healthcare solutions that improve patient experiences and operational efficiency.
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
                  From healthcare websites to advanced digital health platforms, Med Clinic X helps clinics, hospitals, and healthcare businesses create scalable technology solutions.
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
                  <p className="text-base text-white font-bold mb-4">
                    Looking to build a healthcare solution for your organization? Connect with Med Clinic X today.
                  </p>
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
