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
import CKDCalculatorClient from "./CKDCalculatorClient";

export const metadata: Metadata = {
  title: "CKD Calculator - Calculate Kidney Function & Understand Chronic Kidney Disease Risk | Med Clinic X",
  description:
    "Use our free CKD Calculator to estimate kidney function based on health information and laboratory values. Learn about kidney health, CKD stages, and how eGFR helps evaluate kidney function.",
  keywords: [
    "CKD Calculator",
    "Chronic Kidney Disease",
    "eGFR Calculator",
    "Kidney Function Calculator",
    "Glomerular Filtration Rate",
    "Creatinine Clearance",
    "eGFR",
  ],
  alternates: {
    canonical: "https://medclinicx.com/calculators/ckd-calculator/",
  },
  openGraph: {
    title: "CKD Calculator - Calculate Kidney Function & Understand Chronic Kidney Disease Risk | Med Clinic X",
    description:
      "Use our free CKD Calculator to estimate kidney function based on health information and laboratory values. Learn about kidney health, CKD stages, and how eGFR helps evaluate kidney function.",
    url: "https://medclinicx.com/calculators/ckd-calculator/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CKD Calculator | Med Clinic X",
      },
    ],
  },
};

export default function CKDCalculatorPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://medclinicx.com" },
      { "@type": "ListItem", position: 2, name: "CKD Calculator", item: "https://medclinicx.com/calculators/ckd-calculator/" },
    ],
  };

  const calculatorSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "CKD Calculator",
    description: "Estimate kidney function based on health information and laboratory values. Learn about kidney health, CKD stages, and eGFR calculations.",
    url: "https://medclinicx.com/calculators/ckd-calculator/",
    about: {
      "@type": "MedicalCondition",
      name: "Chronic Kidney Disease (CKD)",
      possibleTreatment: [
        {
          "@type": "MedicalTherapy",
          name: "Nephrology Assessment & Management",
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
              <span className="text-[11px] font-bold text-brand-cyan uppercase tracking-widest font-sans">Lab & Metabolic Tools</span>
            </div>
            
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-6 animate-fade-in">
              CKD Calculator: <span className="text-gradient-cyan-indigo">Estimate Kidney Function & Understand CKD Risk</span>
            </h1>

            <div className="glass-panel border border-brand-border rounded-2xl p-8 max-w-4xl mx-auto text-left space-y-4 mb-16">
              <h2 className="text-xl font-bold text-brand-cyan font-display">
                Introduction: Understand Your Kidney Health
              </h2>
              <p className="text-gray-300 text-base leading-relaxed">
                The kidneys play an essential role in maintaining overall health by filtering waste, balancing fluids, and supporting important body functions. Monitoring kidney function helps healthcare professionals understand how well the kidneys are working.
              </p>
              <p className="text-gray-300 text-base leading-relaxed">
                Our <strong>CKD Calculator</strong> helps estimate kidney function using commonly used health measurements, such as estimated glomerular filtration rate (<strong>eGFR</strong>) calculations.
              </p>
              <p className="text-gray-300 text-base leading-relaxed font-semibold text-white">
                This tool can help users understand:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-2 text-base text-gray-300 font-medium">
                {[
                  "How kidney function is assessed",
                  "What eGFR means",
                  "How CKD stages are generally classified",
                  "Why kidney health monitoring is important"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-300 text-base leading-relaxed font-semibold text-white">
                The calculator can be useful for:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-2 text-base text-gray-300 font-medium">
                {[
                  "Healthcare professionals reviewing kidney health concepts",
                  "Medical students learning clinical calculations",
                  "Patients who want to better understand kidney-related information",
                  "Healthcare organizations building digital health tools"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-brand-indigo rounded-full shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-rose-500/10 border border-rose-500/20 text-rose-300 rounded-xl p-4 flex gap-3 text-sm">
                <AlertTriangle className="w-5.5 h-5.5 text-rose-400 shrink-0 mt-0.5" />
                <p className="text-base leading-normal">
                  <strong>Important:</strong> This calculator provides an estimate and should not replace professional medical advice, laboratory interpretation, diagnosis, or treatment from a qualified healthcare provider.
                </p>
              </div>
            </div>
          </div>

          {/* Calculator Section */}
          <section className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">CKD Calculator</h2>
              <h3 className="text-lg text-gray-300 font-medium mb-4">Calculate Estimated Kidney Function</h3>
              <p className="text-base text-gray-400 max-w-2xl mx-auto leading-relaxed mb-6">
                Enter your information below to estimate kidney function.
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
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Serum creatinine level
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Additional health information (if required)
                </span>
              </div>
            </div>
            
            <div className="glass-panel border border-brand-border rounded-3xl p-6 md:p-8">
              <CKDCalculatorClient />
              <p className="text-base text-gray-500 text-center mt-6">
                Your estimated kidney function result will appear here.
              </p>
            </div>
          </section>

          {/* Educational content sections below the calculator */}
          <div className="border-t border-brand-border/40 pt-16 space-y-16 text-gray-300">
            
            {/* Row 1: What is a CKD Calculator & What is eGFR */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">What Is a CKD Calculator?</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  A <strong>CKD Calculator</strong> is a healthcare tool that helps estimate kidney function using clinical measurements.
                </p>
                <p className="text-gray-300 text-base leading-relaxed">
                  CKD stands for <strong>Chronic Kidney Disease</strong>, a condition where kidney function may decrease over time.
                </p>
                <p className="text-gray-300 text-base leading-relaxed">
                  One commonly used measurement for evaluating kidney function is <strong>eGFR (estimated Glomerular Filtration Rate).</strong>
                </p>
                <p className="text-gray-300 text-base leading-relaxed">
                  eGFR estimates how effectively the kidneys filter waste from the blood.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">What Is eGFR?</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  <strong>eGFR (estimated Glomerular Filtration Rate)</strong> is a calculated measurement used to estimate kidney filtering ability.
                </p>
                <p className="text-gray-300 text-base leading-relaxed">
                  It is commonly calculated using information such as:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-2 text-base text-gray-300 font-medium">
                  {[
                    "Blood creatinine level",
                    "Age",
                    "Gender",
                    "Other clinical factors"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-slate-900/50 border border-brand-border/30 rounded-lg p-3">
                      <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-300 text-base leading-relaxed">
                  Healthcare professionals may use eGFR results along with other tests and medical information to evaluate kidney health.
                </p>
              </div>
            </div>

            {/* Row 2: Why Is Kidney Function Monitoring Important */}
            <div className="border-t border-brand-border/40 pt-16 space-y-6">
              <div className="text-center max-w-3xl mx-auto mb-10">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Why Is Kidney Function Monitoring Important?</h2>
                <p className="text-base text-gray-400 mt-2">
                  Kidney health affects many important processes in the body. Monitoring kidney function can help with:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="glass-panel border border-brand-border/50 p-6 rounded-xl space-y-3 hover:border-brand-cyan/20 transition-all hover:scale-[1.02] flex flex-col">
                  <h3 className="font-bold text-white text-base">Early Awareness</h3>
                  <p className="text-xs text-gray-400 leading-relaxed flex-grow">
                    Changes in kidney function may be identified earlier through regular health monitoring.
                  </p>
                </div>
                <div className="glass-panel border border-brand-border/50 p-6 rounded-xl space-y-3 hover:border-brand-cyan/20 transition-all hover:scale-[1.02] flex flex-col">
                  <h3 className="font-bold text-white text-base">Health Management</h3>
                  <p className="text-xs text-gray-400 leading-relaxed flex-grow">
                    Healthcare providers can use kidney measurements when planning care.
                  </p>
                </div>
                <div className="glass-panel border border-brand-border/50 p-6 rounded-xl space-y-3 hover:border-brand-cyan/20 transition-all hover:scale-[1.02] flex flex-col">
                  <h3 className="font-bold text-white text-base">Understanding Progress</h3>
                  <p className="text-xs text-gray-400 leading-relaxed flex-grow">
                    Tracking kidney function over time can provide valuable information about health changes.
                  </p>
                </div>
                <div className="glass-panel border border-brand-border/50 p-6 rounded-xl space-y-3 hover:border-brand-cyan/20 transition-all hover:scale-[1.02] flex flex-col">
                  <h3 className="font-bold text-white text-base">Medication Considerations</h3>
                  <p className="text-xs text-gray-400 leading-relaxed flex-grow">
                    Kidney function may be considered when evaluating certain medications.
                  </p>
                </div>
              </div>
            </div>

            {/* Row 3: How Does the CKD Calculator Work */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start border-t border-brand-border/40 pt-16">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">How Does the CKD Calculator Work?</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  The CKD calculator estimates kidney function by using important health measurements.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-bold text-base flex items-center gap-2">
                      <span className="w-2 h-2 bg-brand-cyan rounded-full" /> Serum Creatinine
                    </h4>
                    <p className="text-sm text-gray-400 pl-4 mt-0.5">Creatinine is a waste product measured through a blood test. Kidneys normally remove creatinine from the body, so creatinine levels are often considered when estimating kidney function.</p>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base flex items-center gap-2">
                      <span className="w-2 h-2 bg-brand-cyan rounded-full" /> Age
                    </h4>
                    <p className="text-sm text-gray-400 pl-4 mt-0.5">Age is included because kidney function naturally changes throughout life.</p>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base flex items-center gap-2">
                      <span className="w-2 h-2 bg-brand-cyan rounded-full" /> Gender
                    </h4>
                    <p className="text-sm text-gray-400 pl-4 mt-0.5">Certain calculation methods consider gender-related differences in body composition.</p>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base flex items-center gap-2">
                      <span className="w-2 h-2 bg-brand-cyan rounded-full" /> Calculation Formula
                    </h4>
                    <p className="text-sm text-gray-400 pl-4 mt-0.5">The calculator applies a clinical formula to estimate eGFR. Different formulas may be used depending on clinical guidelines and available information.</p>
                  </div>
                </div>
              </div>

              {/* Row 4: Understanding CKD Calculator Results Table */}
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Understanding CKD Calculator Results</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  eGFR results are commonly grouped into stages.
                </p>
                
                <div className="glass-panel border border-brand-border rounded-2xl overflow-hidden max-w-4xl mx-auto my-4">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-base">
                      <thead>
                        <tr className="bg-slate-900 border-b border-brand-border text-white font-bold">
                          <th className="p-4">eGFR Range</th>
                          <th className="p-4">General Category</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-brand-border/40">
                        <tr className="hover:bg-white/[0.02] transition-colors">
                          <td className="p-4 font-bold text-brand-cyan">90 or higher</td>
                          <td className="p-4 text-gray-300">Generally considered normal or high kidney function if no other kidney abnormalities are present</td>
                        </tr>
                        <tr className="hover:bg-white/[0.02] transition-colors">
                          <td className="p-4 font-bold text-brand-cyan">60–89</td>
                          <td className="p-4 text-gray-300">May indicate mildly reduced kidney function depending on other factors</td>
                        </tr>
                        <tr className="hover:bg-white/[0.02] transition-colors">
                          <td className="p-4 font-bold text-brand-cyan">30–59</td>
                          <td className="p-4 text-gray-300">Moderate reduction in kidney function</td>
                        </tr>
                        <tr className="hover:bg-white/[0.02] transition-colors">
                          <td className="p-4 font-bold text-brand-cyan">15–29</td>
                          <td className="p-4 text-gray-300">Severe reduction in kidney function</td>
                        </tr>
                        <tr className="hover:bg-white/[0.02] transition-colors">
                          <td className="p-4 font-bold text-brand-cyan">Less than 15</td>
                          <td className="p-4 text-gray-300">Kidney failure range requiring medical evaluation</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <p className="text-gray-400 text-sm italic leading-relaxed">
                  A single result does not diagnose CKD. Healthcare providers consider repeated measurements and additional health information.
                </p>
              </div>
            </div>

            {/* Row 5: CKD Stages Explained */}
            <div className="border-t border-brand-border/40 pt-16 space-y-6">
              <div className="text-center max-w-3xl mx-auto mb-10">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">CKD Stages Explained</h2>
                <p className="text-base text-gray-400 mt-2">
                  Chronic Kidney Disease is often classified into different stages based on kidney function.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {[
                  { title: "Stage 1", text: "Kidney function may be normal or near normal but other signs of kidney damage may exist." },
                  { title: "Stage 2", text: "Mild reduction in kidney function." },
                  { title: "Stage 3", text: "Moderate reduction in kidney function." },
                  { title: "Stage 4", text: "Severe reduction in kidney function." },
                  { title: "Stage 5", text: "Very low kidney function requiring specialist evaluation." }
                ].map((stage, idx) => (
                  <div key={idx} className="glass-panel border border-brand-border/50 p-6 rounded-xl space-y-3 hover:border-brand-cyan/20 transition-all hover:scale-[1.02] flex flex-col">
                    <h4 className="font-bold text-brand-cyan text-base">{stage.title}</h4>
                    <p className="text-xs text-gray-400 leading-relaxed flex-grow">
                      {stage.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 6: Factors That Can Affect Kidney Function & How to Support Kidney Health */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start border-t border-brand-border/40 pt-16">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Factors That Can Affect Kidney Function Results</h2>
                <p className="text-gray-300 text-base leading-relaxed font-medium">
                  Many factors can influence kidney measurements:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { name: "Age", desc: "Kidney function may naturally change as people get older." },
                    { name: "Hydration Status", desc: "Fluid levels can affect certain laboratory measurements." },
                    { name: "Muscle Mass", desc: "Creatinine levels can vary based on muscle amount." },
                    { name: "Medications", desc: "Some medications may affect kidney function measurements." },
                    { name: "Health Conditions", desc: "Conditions such as diabetes or high blood pressure may influence kidney health." }
                  ].map((f, idx) => (
                    <div key={idx} className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-4 space-y-1">
                      <p className="font-bold text-brand-cyan text-sm">{f.name}</p>
                      <p className="text-xs text-gray-400 leading-normal">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">How to Support Kidney Health</h2>
                <p className="text-gray-300 text-base leading-relaxed font-medium">
                  Healthy lifestyle habits can support overall kidney wellness:
                </p>
                <div className="space-y-4">
                  {[
                    { title: "Maintain Healthy Blood Pressure", desc: "Blood pressure management is important for kidney health." },
                    { title: "Stay Physically Active", desc: "Regular activity supports overall cardiovascular and metabolic health." },
                    { title: "Follow Balanced Nutrition", desc: "A balanced diet supports general wellness." },
                    { title: "Stay Hydrated", desc: "Adequate fluid intake supports normal body functions." },
                    { title: "Follow Healthcare Recommendations", desc: "Regular checkups can help monitor health changes." }
                  ].map((h, idx) => (
                    <div key={idx} className="flex gap-3">
                      <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full shrink-0 mt-2" />
                      <div>
                        <h4 className="text-white font-bold text-sm leading-none">{h.title}</h4>
                        <p className="text-xs text-gray-400 mt-1 leading-normal">{h.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Row 7: CKD Calculator vs Kidney Function Testing */}
            <div className="border-t border-brand-border/40 pt-16 space-y-6">
              <div className="text-center max-w-3xl mx-auto mb-10">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">CKD Calculator vs Kidney Function Testing</h2>
                <p className="text-base text-gray-400 mt-2">
                  A calculator supports understanding, while healthcare professionals provide diagnosis and treatment guidance.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-slate-900/50 border border-brand-border/30 rounded-2xl p-6 space-y-4">
                  <h3 className="font-bold text-brand-cyan uppercase tracking-wider text-sm flex items-center gap-2">
                    <span className="w-2 h-2 bg-brand-cyan rounded-full" />
                    <span>CKD Calculator</span>
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="font-bold text-xs text-white">Benefits:</p>
                      <ul className="list-disc pl-4 space-y-1 text-xs text-gray-400 mt-1">
                        <li>Quick estimate</li>
                        <li>Helps understand kidney function concepts</li>
                        <li>Useful for education</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-bold text-xs text-white">Limitations:</p>
                      <ul className="list-disc pl-4 space-y-1 text-xs text-gray-400 mt-1">
                        <li>Requires accurate input values</li>
                        <li>Does not replace medical evaluation</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/50 border border-brand-border/30 rounded-2xl p-6 space-y-4">
                  <h3 className="font-bold text-brand-indigo uppercase tracking-wider text-sm flex items-center gap-2">
                    <span className="w-2 h-2 bg-brand-indigo rounded-full" />
                    <span>Laboratory Kidney Testing</span>
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="font-bold text-xs text-white">Benefits:</p>
                      <ul className="list-disc pl-4 space-y-1 text-xs text-gray-400 mt-1">
                        <li>Uses actual blood measurements</li>
                        <li>Reviewed with medical history</li>
                        <li>Provides clinical information</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-bold text-xs text-white">Limitations:</p>
                      <ul className="list-disc pl-4 space-y-1 text-xs text-gray-400 mt-1">
                        <li>Requires prescription and blood draw</li>
                        <li>Results take time to process</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 8: How Healthcare Technology Supports Kidney Care */}
            <div className="border-t border-brand-border/40 pt-16 space-y-4 text-center max-w-3xl mx-auto">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">How Healthcare Technology Supports Kidney Care</h2>
              <p className="text-gray-300 text-base leading-relaxed">
                Digital healthcare tools help improve access to health information and support better care workflows. Healthcare technology can support:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mt-6">
                {[
                  "Patient education",
                  "Digital health monitoring",
                  "Laboratory result understanding",
                  "Clinical decision support",
                  "Healthcare communication"
                ].map((item, idx) => (
                  <div key={idx} className="glass-panel border border-brand-border p-3.5 rounded-xl text-center text-xs font-bold text-brand-cyan">
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-400 mt-4">
                Modern healthcare platforms help patients and providers stay connected.
              </p>
            </div>

            {/* Row 9: FAQs Accordions */}
            <div className="border-t border-brand-border/40 pt-16 space-y-8">
              <div className="text-center max-w-3xl mx-auto mb-8">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Frequently Asked Questions About CKD Calculator</h2>
                <p className="text-base text-gray-400 mt-2">
                  Find quick answers to common questions about estimating and tracking kidney function levels.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start font-sans">
                {/* Column 1 */}
                <div className="space-y-4">
                  {[
                    {
                      q: "1. What is a CKD calculator?",
                      a: "A CKD calculator is an online tool that estimates kidney function using information such as creatinine level, age, and other health factors."
                    },
                    {
                      q: "2. What does CKD stand for?",
                      a: "CKD stands for Chronic Kidney Disease."
                    },
                    {
                      q: "3. What is eGFR?",
                      a: "eGFR stands for estimated Glomerular Filtration Rate, a measurement used to estimate kidney filtering function."
                    },
                    {
                      q: "4. Can a CKD calculator diagnose kidney disease?",
                      a: "No. It provides an estimate and should not replace professional medical evaluation."
                    },
                    {
                      q: "5. What factors affect eGFR results?",
                      a: "Age, creatinine level, muscle mass, medications, and health conditions can influence results."
                    }
                  ].map((faq, idx) => (
                    <details 
                      key={idx} 
                      className="group border border-brand-border bg-slate-900/40 rounded-xl px-4 py-3.5 [&_summary::-webkit-details-marker]:hidden transition-all duration-300 hover:border-brand-cyan/20"
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
                      q: "6. Why is creatinine used in kidney calculations?",
                      a: "Creatinine is a waste product filtered by the kidneys and is commonly used to estimate kidney function."
                    },
                    {
                      q: "7. What is a normal eGFR level?",
                      a: "Reference ranges can vary, but higher eGFR values generally indicate better kidney filtering ability."
                    },
                    {
                      q: "8. How often should kidney function be checked?",
                      a: "Testing frequency depends on individual health needs and healthcare provider recommendations."
                    },
                    {
                      q: "9. Can lifestyle changes improve kidney health?",
                      a: "Healthy habits may support overall kidney wellness, especially when combined with medical guidance."
                    },
                    {
                      q: "10. Is a CKD calculator useful for patients?",
                      a: "Yes. It can help patients understand kidney health concepts and prepare questions for healthcare discussions."
                    }
                  ].map((faq, idx) => (
                    <details 
                      key={idx} 
                      className="group border border-brand-border bg-slate-900/40 rounded-xl px-4 py-3.5 [&_summary::-webkit-details-marker]:hidden transition-all duration-300 hover:border-brand-cyan/20"
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

            {/* Row 10: Related Tools */}
            <div className="border-t border-brand-border/40 pt-16 space-y-4">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Related Healthcare Tools</h2>
              <p className="text-base leading-relaxed">
                Explore more healthcare calculators:
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-6 gap-4 mt-6">
                {[
                  { name: "Anion Gap Calculator", path: "/calculators/anion-gap-calculator" },
                  { name: "A1C Calculator", path: "/calculators/a1c-calculator" },
                  { name: "Blood Pressure Calculator", path: "/solutions" },
                  { name: "QTc Calculator", path: "/calculators/qtc-calculator" },
                  { name: "BMI Calculator", path: "/solutions" },
                  { name: "Water Intake Calculator", path: "/calculators/water-intake-calculator" }
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
