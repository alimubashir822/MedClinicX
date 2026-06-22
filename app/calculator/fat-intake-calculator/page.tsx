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
import FatIntakeCalculatorClient from "./FatIntakeCalculatorClient";

export const metadata: Metadata = {
  title: "Fat Intake Calculator - Calculate Your Daily Fat Intake & Healthy Fat Needs | Med Clinic X",
  description:
    "Use our free Fat Intake Calculator to estimate your recommended daily fat intake based on calories, lifestyle, and nutrition goals. Learn how dietary fat supports overall health and balanced nutrition.",
  keywords: [
    "Fat Intake Calculator",
    "Calculate Daily Fat Intake",
    "Healthy Fat Needs",
    "Macronutrient calculator",
    "Fat grams estimator",
    "TDEE fat ratio",
  ],
  alternates: {
    canonical: "https://medclinicx.com/calculator/fat-intake-calculator/",
  },
  openGraph: {
    title: "Fat Intake Calculator - Calculate Your Daily Fat Intake & Healthy Fat Needs | Med Clinic X",
    description:
      "Use our free Fat Intake Calculator to estimate your recommended daily fat intake based on calories, lifestyle, and nutrition goals. Learn how dietary fat supports overall health and balanced nutrition.",
    url: "https://medclinicx.com/calculator/fat-intake-calculator/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fat Intake Calculator | Med Clinic X",
      },
    ],
  },
};

export default function FatIntakeCalculatorPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://medclinicx.com" },
      { "@type": "ListItem", position: 2, name: "Fat Intake Calculator", item: "https://medclinicx.com/calculator/fat-intake-calculator/" },
    ],
  };

  const calculatorSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Fat Intake Calculator",
    description: "Use our free Fat Intake Calculator to estimate your recommended daily fat intake based on calories, lifestyle, and nutrition goals.",
    url: "https://medclinicx.com/calculator/fat-intake-calculator/",
    about: {
      "@type": "MedicalCondition",
      name: "Nutritional Health & Diet",
      possibleTreatment: [
        {
          "@type": "MedicalTherapy",
          name: "Macronutrient Balance Optimization",
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
              <span className="text-[11px] font-bold text-brand-cyan uppercase tracking-widest font-sans">Nutrition & Dietary Tools</span>
            </div>
            
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-6 animate-fade-in animate-duration-500">
              Fat Intake Calculator: <span className="text-gradient-cyan-indigo">Calculate Your Daily Fat Intake</span>
            </h1>

            <div className="glass-panel border border-brand-border rounded-2xl p-8 max-w-4xl mx-auto text-left space-y-4 mb-16">
              <h2 className="text-xl font-bold text-brand-cyan font-display">
                Introduction: Understand Your Daily Fat Needs
              </h2>
              <p className="text-gray-300 text-base leading-relaxed">
                Dietary fat is an essential nutrient that supports many important functions in the body, including energy production, hormone regulation, brain health, and absorption of certain vitamins.
              </p>
              <p className="text-gray-300 text-base leading-relaxed">
                Our <strong>Fat Intake Calculator</strong> helps estimate how much fat you may need each day based on your calorie intake, nutrition goals, and lifestyle factors.
              </p>
              
              <div className="py-2">
                <p className="text-gray-300 text-base leading-relaxed font-semibold text-white mb-2">
                  This calculator can help you:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-gray-300 text-base">
                  <li>Estimate your daily fat intake target</li>
                  <li>Understand healthy fat recommendations</li>
                  <li>Learn how fats fit into a balanced diet</li>
                  <li>Plan nutrition goals more effectively</li>
                </ul>
              </div>

              <div className="py-2">
                <p className="text-gray-300 text-base leading-relaxed font-semibold text-white mb-2">
                  The tool may be useful for:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-gray-300 text-base">
                  <li>People tracking nutrition</li>
                  <li>Fitness enthusiasts</li>
                  <li>Individuals planning balanced meals</li>
                  <li>Healthcare professionals educating patients</li>
                  <li>Wellness platforms and health organizations</li>
                </ul>
              </div>

              <div className="bg-rose-500/10 border border-rose-500/20 text-rose-300 rounded-xl p-4 flex gap-3 text-sm">
                <AlertTriangle className="w-5.5 h-5.5 text-rose-400 shrink-0 mt-0.5" />
                <p className="text-base leading-normal">
                  <strong>Important:</strong> This calculator provides a general estimate and should not replace personalized nutrition advice from a registered dietitian, nutrition professional, or healthcare provider.
                </p>
              </div>
            </div>
          </div>

          {/* Calculator Section */}
          <section className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">Fat Intake Calculator</h2>
              <p className="text-base text-gray-300 max-w-2xl mx-auto leading-relaxed mb-6">
                Calculate Your Daily Fat Intake: Enter your information below to estimate your recommended daily fat intake.
              </p>
              <div className="inline-flex flex-wrap justify-center gap-3 mb-8 bg-slate-900/60 p-4 rounded-xl border border-brand-border/40">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block w-full mb-1">Calculator Inputs:</span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Daily calorie goal
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Activity level
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Nutrition goal (Maintenance, Loss, Muscle Building)
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Fat percentage target (optional)
                </span>
              </div>
            </div>
            
            <div className="glass-panel border border-brand-border rounded-3xl p-6 md:p-8">
              <FatIntakeCalculatorClient />
              <p className="text-base text-gray-500 text-center mt-6">
                Your estimated daily fat intake will appear here.
              </p>
            </div>
          </section>

          {/* Educational Content Sections */}
          <div className="border-t border-brand-border/40 pt-16 space-y-16 text-gray-300">
            
            {/* Row 1: What is it & Why Important */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">What Is a Fat Intake Calculator?</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  A <strong>Fat Intake Calculator</strong> is a nutrition tool that estimates the recommended amount of dietary fat a person may consume daily.
                </p>
                <p className="text-gray-300 text-base leading-relaxed">
                  Dietary fat is one of the three main macronutrients (Fat, Protein, and Carbohydrates) needed by the body. Each gram of fat provides approximately <strong>9 calories</strong>, making it a highly concentrated source of energy.
                </p>
                <p className="text-gray-300 text-base leading-relaxed">
                  The calculator helps users understand how fat intake fits into their overall calorie and nutrition goals.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Why Is Dietary Fat Important?</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  Fat plays several important roles in maintaining overall health:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-4 space-y-1.5">
                    <h4 className="text-white font-bold text-sm flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-brand-cyan" />
                      <span>Energy Source</span>
                    </h4>
                    <p className="text-xs text-gray-400 leading-normal">
                      Fat provides concentrated, long-lasting energy for the body&apos;s physical and physiological needs.
                    </p>
                  </div>
                  <div className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-4 space-y-1.5">
                    <h4 className="text-white font-bold text-sm flex items-center gap-1.5">
                      <Shield className="w-4 h-4 text-brand-cyan" />
                      <span>Vitamin Absorption</span>
                    </h4>
                    <p className="text-xs text-gray-400 leading-normal">
                      Certain vitamins require fat for proper absorption, including Vitamin A, Vitamin D, Vitamin E, and Vitamin K.
                    </p>
                  </div>
                  <div className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-4 space-y-1.5">
                    <h4 className="text-white font-bold text-sm flex items-center gap-1.5">
                      <Activity className="w-4 h-4 text-brand-cyan" />
                      <span>Hormone Support</span>
                    </h4>
                    <p className="text-xs text-gray-400 leading-normal">
                      Healthy fat intake supports normal hormone production and cellular cell communication.
                    </p>
                  </div>
                  <div className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-4 space-y-1.5">
                    <h4 className="text-white font-bold text-sm flex items-center gap-1.5">
                      <Heart className="w-4 h-4 text-brand-cyan" />
                      <span>Brain & Cell Health</span>
                    </h4>
                    <p className="text-xs text-gray-400 leading-normal">
                      Fats are essential components of cellular structures, lipid layers, and brain health functions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2: How It Works & Calculation Formula */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start border-t border-brand-border/40 pt-16">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">How Does the Fat Intake Calculator Work?</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  The calculator estimates daily fat needs using nutrition-related information:
                </p>
                <ul className="list-none pl-0 space-y-3 text-base text-gray-300">
                  <li className="flex gap-2">
                    <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full shrink-0 mt-2.5" />
                    <span><strong>Daily Calories</strong>: Your calorie intake directly influences the amount of fat recommended.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full shrink-0 mt-2.5" />
                    <span><strong>Fat Percentage</strong>: Many nutrition plans calculate fat intake as a percentage of total calories. If a person follows a diet where a certain percentage of calories come from fat, the calculator estimates the corresponding grams.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full shrink-0 mt-2.5" />
                    <span><strong>Activity Level</strong>: Lifestyle and activity levels may influence overall calorie and nutrition needs.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Fat Intake Calculation Formula</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  The calculator commonly uses:
                </p>
                <div className="bg-slate-900 border border-brand-border/40 rounded-2xl p-5 space-y-2 font-mono text-sm text-brand-cyan">
                  <p>Calories from Fat = Total Calories × Fat Percentage</p>
                  <p>Fat Grams = Calories From Fat ÷ 9</p>
                </div>
                <div className="bg-slate-950/50 p-4 rounded-xl border border-brand-border/20 text-sm">
                  <p className="font-bold text-white mb-1">Example:</p>
                  <p className="text-gray-400">
                    If a nutrition plan includes a specific percentage of calories from fat, the calculator converts those calories into grams of fat. For a 2000 kcal target at 25% fat: 500 kcal from fat / 9 = 55.6 grams.
                  </p>
                </div>
              </div>
            </div>

            {/* Row 3: Results Interpretation Table */}
            <div className="border-t border-brand-border/40 pt-16 space-y-6">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Understanding Your Fat Intake Results</h2>
              <div className="glass-panel border border-brand-border rounded-2xl overflow-hidden max-w-4xl mx-auto my-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-base">
                    <thead>
                      <tr className="bg-slate-900 border-b border-brand-border text-white font-bold">
                        <th className="p-4">Fat Intake Level</th>
                        <th className="p-4">General Meaning</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-brand-border/40">
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 font-bold text-brand-cyan">Lower Fat Intake</td>
                        <td className="p-4 text-gray-300">May provide fewer calories from fat depending on dietary goals</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 font-bold text-brand-cyan">Balanced Fat Intake</td>
                        <td className="p-4 text-gray-300">May align with common nutrition recommendations</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 font-bold text-brand-cyan">Higher Fat Intake</td>
                        <td className="p-4 text-gray-300">May provide more calories from fat depending on eating pattern</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-gray-400 text-sm text-center">
                Individual nutrition needs vary based on health goals, activity, and personal factors.
              </p>
            </div>

            {/* Row 4: Types of Dietary Fat */}
            <div className="border-t border-brand-border/40 pt-16 space-y-6">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Types of Dietary Fat</h2>
                <p className="text-base text-gray-400 mt-2">Not all fats have the same role in nutrition.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass-panel border border-brand-border p-6 rounded-2xl hover:border-brand-cyan/20 transition-all flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-white text-base">Unsaturated Fats</h4>
                    <p className="text-xs text-gray-400 leading-relaxed mt-2">
                      Often considered healthier fats. Essential for vascular integrity and cholesterol balance.
                    </p>
                    <p className="text-xs text-brand-cyan font-semibold mt-3">Commonly found in:</p>
                    <ul className="text-xs text-gray-300 list-disc pl-4 mt-1 space-y-1">
                      <li>Nuts and Seeds</li>
                      <li>Avocados</li>
                      <li>Olive oil</li>
                      <li>Oily fish</li>
                    </ul>
                  </div>
                </div>

                <div className="glass-panel border border-brand-border p-6 rounded-2xl hover:border-brand-cyan/20 transition-all flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-white text-base">Saturated Fats</h4>
                    <p className="text-xs text-gray-400 leading-relaxed mt-2">
                      Should be consumed in moderation as high intake can influence LDL cholesterol levels.
                    </p>
                    <p className="text-xs text-brand-cyan font-semibold mt-3">Found in foods such as:</p>
                    <ul className="text-xs text-gray-300 list-disc pl-4 mt-1 space-y-1">
                      <li>Dairy products</li>
                      <li>Meat</li>
                      <li>Tropical oils (coconut, palm)</li>
                    </ul>
                  </div>
                </div>

                <div className="glass-panel border border-brand-border p-6 rounded-2xl hover:border-brand-cyan/20 transition-all flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-white text-base">Trans Fats</h4>
                    <p className="text-xs text-gray-400 leading-relaxed mt-2">
                      Artificially modified fats generated via hydrogenation. Generally linked with health risks.
                    </p>
                    <p className="text-xs text-rose-300 font-semibold mt-3">Recommendations:</p>
                    <ul className="text-xs text-gray-300 list-disc pl-4 mt-1 space-y-1">
                      <li>Limit processed bakery foods</li>
                      <li>Avoid hydrogenated fats</li>
                      <li>Check labels for trans fats</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 5: Factors affecting fat intake needs */}
            <div className="border-t border-brand-border/40 pt-16 space-y-6">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Factors That Affect Fat Intake Needs</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {[
                  { title: "Age", desc: "Nutrition requirements and metabolic rate naturally shift throughout life." },
                  { title: "Activity Level", desc: "Highly active individuals have greater daily calorie demands, requiring more energy substrates like fats." },
                  { title: "Health Goals", desc: "Fat intake ratios vary between targets like calorie restriction (weight loss) vs. surplus (muscle build)." },
                  { title: "Overall Diet", desc: "Fat intake is not isolated and must be balanced with adequate proteins and carbohydrates." },
                  { title: "Medical Conditions", desc: "Particular systemic conditions (like cardiovascular or pancreatic issues) require customized medical guidance." }
                ].map((item, idx) => (
                  <div key={idx} className="glass-panel border border-brand-border/60 p-5 rounded-xl space-y-2 hover:border-brand-cyan/20 transition-all">
                    <h4 className="font-bold text-white text-base">{item.title}</h4>
                    <p className="text-xs text-gray-400 leading-normal">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 6: Management & Tracking Comparisons */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start border-t border-brand-border/40 pt-16">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">How to Manage Healthy Fat Intake</h2>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-bold text-base flex items-center gap-2">Choose Quality Fat Sources</h4>
                    <p className="text-sm text-gray-400 pl-4 mt-0.5">Include sources such as nuts, seeds, fish, and plant-based oils.</p>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base flex items-center gap-2">Maintain Balanced Nutrition</h4>
                    <p className="text-sm text-gray-400 pl-4 mt-0.5">A healthy diet includes appropriate amounts of protein, carbohydrates, fats, and micronutrients.</p>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base flex items-center gap-2">Monitor Portion Sizes</h4>
                    <p className="text-sm text-gray-400 pl-4 mt-0.5">Fat contains more calories per gram (9 kcal/g) compared with protein and carbohydrates (4 kcal/g).</p>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base flex items-center gap-2">Focus on Overall Eating Patterns</h4>
                    <p className="text-sm text-gray-400 pl-4 mt-0.5">One single nutrient alone does not determine your overall health levels.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Fat Intake Calculator vs Manual Tracking</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-5 space-y-2">
                    <p className="font-bold text-white uppercase tracking-wider text-[11px] text-brand-cyan">Manual Nutrition Tracking</p>
                    <ul className="list-disc pl-4 space-y-1 text-xs text-gray-300">
                      <li>Detailed food awareness</li>
                      <li>Allows specific meal tracking</li>
                      <li>Takes more time & effort</li>
                      <li>Requires reading nutrition labels</li>
                    </ul>
                  </div>
                  <div className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-5 space-y-2">
                    <p className="font-bold text-white uppercase tracking-wider text-[11px] text-brand-cyan">Fat Intake Calculator</p>
                    <ul className="list-disc pl-4 space-y-1 text-xs text-gray-300">
                      <li>Quick, convenient estimate</li>
                      <li>Easy nutrition planning</li>
                      <li>Helps understand daily targets</li>
                      <li>Does not replace professional care</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 7: Tech & FAQs */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start border-t border-brand-border/40 pt-16">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">How Healthcare Technology Supports Nutrition</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  Digital health tools are helping people better understand nutrition and wellness. Healthcare technology can support nutrition tracking, patient education, health monitoring, wellness programs, and personalized healthcare platforms.
                </p>
                <p className="text-gray-300 text-base leading-relaxed">
                  Healthcare organizations use digital solutions to improve patient engagement and health awareness.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Frequently Asked Questions</h2>
                <div className="space-y-3 font-sans">
                  {[
                    { q: "1. What is a fat intake calculator?", a: "A fat intake calculator is a tool that estimates daily fat needs based on calorie intake and nutrition goals." },
                    { q: "2. How much fat should I eat per day?", a: "Fat needs vary depending on calorie intake, lifestyle, health goals, and individual factors." },
                    { q: "3. How does a fat intake calculator work?", a: "It estimates fat needs by converting calorie targets and fat percentage goals into grams of fat." },
                    { q: "4. How many calories are in one gram of fat?", a: "One gram of fat provides approximately 9 calories." },
                    { q: "5. Is eating fat important for health?", a: "Yes. Dietary fat supports energy, vitamin absorption, hormones, and overall body functions." }
                  ].map((faq, idx) => (
                    <details 
                      key={idx} 
                      className="group border border-brand-border bg-slate-900/40 rounded-xl px-4 py-3 [&_summary::-webkit-details-marker]:hidden transition-all duration-300 hover:border-brand-cyan/20"
                    >
                      <summary className="flex justify-between items-center font-bold text-sm text-white cursor-pointer select-none">
                        <span>{faq.q}</span>
                        <span className="transition duration-300 group-open:-rotate-180 text-brand-cyan shrink-0 ml-2">
                          <ChevronDown className="w-4 h-4" />
                        </span>
                      </summary>
                      <div className="mt-2 text-xs text-gray-400 leading-relaxed border-t border-brand-border/40 pt-2">
                        {faq.a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </div>

            {/* Row 8: FAQs Continued */}
            <div className="border-t border-brand-border/40 pt-16 space-y-6">
              <h3 className="font-display font-bold text-2xl text-white tracking-tight">More FAQs About Dietary Fats</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans">
                {[
                  { q: "6. Can a fat intake calculator help with weight loss?", a: "It can help estimate nutrition targets, but weight management depends on overall diet, activity, and lifestyle factors." },
                  { q: "7. Are all fats unhealthy?", a: "No. Different types of fats (like unsaturated fats) have different and positive effects on nutrition and health." },
                  { q: "8. Should athletes calculate fat intake?", a: "Many athletes monitor macronutrients, including fat, to support performance and recovery goals." },
                  { q: "9. Can fat intake needs change over time?", a: "Yes. Nutrition needs may change with age, activity level, and health goals." },
                  { q: "10. Is a fat intake calculator a medical tool?", a: "No. It is a nutrition education tool and does not provide medical diagnosis or treatment." }
                ].map((faq, idx) => (
                  <details 
                    key={idx} 
                    className="group border border-brand-border bg-slate-900/40 rounded-xl px-4 py-3 [&_summary::-webkit-details-marker]:hidden transition-all duration-300 hover:border-brand-cyan/20"
                  >
                    <summary className="flex justify-between items-center font-bold text-sm text-white cursor-pointer select-none">
                      <span>{faq.q}</span>
                      <span className="transition duration-300 group-open:-rotate-180 text-brand-cyan shrink-0 ml-2">
                        <ChevronDown className="w-4 h-4" />
                      </span>
                    </summary>
                    <div className="mt-2 text-xs text-gray-400 leading-relaxed border-t border-brand-border/40 pt-2">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>

            {/* Row 9: Related Healthcare Tools */}
            <div className="border-t border-brand-border/40 pt-16 space-y-4">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Related Healthcare Tools</h2>
              <p className="text-base leading-relaxed">Explore more healthcare calculators:</p>
              
              <div className="grid grid-cols-2 sm:grid-cols-6 gap-4 mt-6">
                {[
                  { name: "Calorie Calculator", path: "/solutions" },
                  { name: "BMI Calculator", path: "/solutions" },
                  { name: "Water Intake Calculator", path: "/calculator/water-calculator" },
                  { name: "Lean Body Mass Calculator", path: "/calculator/lean-body-mass-calculator" },
                  { name: "Metabolic Age Calculator", path: "/calculator/metabolic-age-calculator" },
                  { name: "Baby Weight Calculator", path: "/calculator/baby-weight-calculator" }
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
                  Med Clinic X helps healthcare organizations build modern digital healthcare solutions that improve patient engagement, healthcare operations, and wellness experiences.
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
