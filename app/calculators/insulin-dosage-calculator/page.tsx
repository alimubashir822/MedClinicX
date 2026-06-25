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
import InsulinDosageCalculatorClient from "./InsulinDosageCalculatorClient";

export const metadata: Metadata = {
  title: "Insulin Dosage Calculator - Bolus Dose & Correction Factor | Med Clinic X",
  description:
    "Calculate your personalized rapid-acting insulin bolus dose for meal times and blood sugar correction. Estimate correction factors and carb ratios using standard clinical equations.",
  keywords: [
    "insulin dosage calculator",
    "calculate insulin dose",
    "bolus calculator",
    "insulin sensitivity factor",
    "carb ratio calculator",
    "diabetes management tools",
    "Rule of 1800 insulin",
    "Rule of 500 insulin",
  ],
  alternates: {
    canonical: "https://medclinicx.com/calculators/insulin-dosage-calculator/",
  },
  openGraph: {
    title: "Insulin Dosage Calculator - Bolus Dose & Correction Factor | Med Clinic X",
    description:
      "Calculate your personalized rapid-acting insulin bolus dose for meal times and blood sugar correction. Estimate correction factors and carb ratios using standard clinical equations.",
    url: "https://medclinicx.com/calculators/insulin-dosage-calculator/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Med Clinic X Insulin Dosage Calculator",
      },
    ],
  },
};

export default function InsulinDosageCalculatorPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://medclinicx.com" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://medclinicx.com/calculators/" },
      { "@type": "ListItem", position: 3, name: "Insulin Dosage Calculator", item: "https://medclinicx.com/calculators/insulin-dosage-calculator/" },
    ],
  };

  const calculatorSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Insulin Dosage & Correction Calculator",
    description: "Clinical calculator for estimating rapid-acting bolus insulin dosage based on carbs and current blood sugar.",
    url: "https://medclinicx.com/calculators/insulin-dosage-calculator/",
    about: {
      "@type": "MedicalCondition",
      name: "Diabetes mellitus",
      possibleTreatment: [
        {
          "@type": "MedicalTherapy",
          name: "Insulin Injection",
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
              <span className="text-[11px] font-bold text-brand-cyan uppercase tracking-widest">Clinical Calculators</span>
            </div>
            
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-6">
              Insulin Dosage Calculator: <span className="text-gradient-cyan-indigo">Calculate Mealtime & Correction Bolus</span>
            </h1>

            <div className="glass-panel border border-brand-border rounded-2xl p-8 max-w-4xl mx-auto text-left space-y-4 mb-16">
              <h2 className="text-xl font-bold text-brand-cyan font-display">
                Estimate Mealtime and Correction Insulin Doses
              </h2>
              <p className="text-gray-300 text-base leading-relaxed">
                This free clinical tool calculates the recommended bolus dose of rapid-acting insulin based on your current blood sugar, target blood sugar, insulin sensitivity, carbohydrate intake, and insulin-to-carb ratios.
              </p>
              <p className="text-gray-300 text-base leading-relaxed">
                Additionally, the calculator provides a starting point estimator using clinical guidelines (the Rule of 500 and Rule of 1800/100) to help estimate correction factors and carbohydrate ratios from your total daily dose.
              </p>
              <div className="bg-rose-500/10 border border-rose-500/20 text-rose-300 rounded-xl p-4 flex gap-3 text-xs">
                <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <p className="leading-normal">
                  <strong>Important:</strong> Insulin requirements vary significantly by individual and must be managed under the guidance of a healthcare professional. Never change your medical dosage or routines without consulting your physician.
                </p>
              </div>
            </div>
          </div>

          {/* Calculator Section */}
          <section className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">Insulin Dose Calculator</h2>
              <p className="text-base text-gray-400">
                Adjust your blood glucose levels, carbohydrate counts, and sensitivity ratios below:
              </p>
            </div>
            
            <div className="glass-panel border border-brand-border rounded-3xl p-6 md:p-8">
              <InsulinDosageCalculatorClient />
              <p className="text-[10px] text-gray-500 text-center mt-4">
                Dose estimates update dynamically. Keep log files for reference.
              </p>
            </div>
          </section>

          {/* Educational Content */}
          <div className="border-t border-brand-border/40 pt-16 space-y-16 text-gray-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Understanding Bolus Calculations</h2>
                <p className="text-base leading-relaxed">
                  A rapid-acting insulin bolus dose consists of two key parts:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Carb Coverage Dose:</strong> Covers the carbohydrates you are about to eat. It is calculated as: <code>Planned Carbs (g) / Insulin-to-Carb Ratio (ICR)</code>.
                  </li>
                  <li>
                    <strong>Correction Dose:</strong> Brings high blood sugar back down into your target range. It is calculated as: <code>(Current Blood Sugar - Target Blood Sugar) / Insulin Sensitivity Factor (ISF)</code>.
                  </li>
                </ul>
                <p className="text-base leading-relaxed">
                  Adding these two values together determines the total recommended insulin dose to be administered before your meal.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Clinical Formulas</h2>
                <p className="text-base leading-relaxed">
                  When starting insulin therapy, endocrinologists often use the following rules to estimate baseline sensitivity:
                </p>
                <div className="bg-slate-900/50 border border-brand-border/60 rounded-xl p-5 space-y-3">
                  <p className="text-xs font-bold text-white uppercase tracking-wider">Baseline Estimation Formulas:</p>
                  <ul className="list-none pl-0 space-y-2">
                    <li className="flex items-start gap-2 text-xs">
                      <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full mt-1.5 shrink-0" />
                      <span><strong>Rule of 500 (for Carb Ratio):</strong> 500 divided by your Total Daily Dose (TDD) = Grams of carb covered by 1 unit of insulin.</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs">
                      <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full mt-1.5 shrink-0" />
                      <span><strong>Rule of 1800 (for Correction Factor in mg/dL):</strong> 1800 divided by your TDD = Expected drop in blood sugar per unit of insulin.</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs">
                      <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full mt-1.5 shrink-0" />
                      <span><strong>Rule of 100 (for Correction Factor in mmol/L):</strong> 100 divided by your TDD = Expected drop in blood sugar per unit of insulin.</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>

            {/* Related Tools */}
            <div className="border-t border-brand-border/40 pt-16 space-y-4">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Related Healthcare Calculators</h2>
              <p className="text-base leading-relaxed text-gray-400">
                Explore more helpful clinical and health calculators:
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-6">
                {calculatorData
                  .filter((c) => c.id !== "insulin-dosage-calculator")
                  .sort((a, b) => {
                    const currentCat = calculatorData.find((c) => c.id === "insulin-dosage-calculator")?.category;
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

          </div>

        </div>
      </div>
    </>
  );
}
