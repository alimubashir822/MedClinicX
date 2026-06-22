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
import CPTCalculatorClient from "./CPTCalculatorClient";

export const metadata: Metadata = {
  title: "CPT Calculator - Calculate CPT Codes, Billing Estimates & Healthcare Procedure Costs | Med Clinic X",
  description:
    "Use our free CPT Calculator to understand CPT code calculations, estimate healthcare procedure billing information, and learn how medical coding supports accurate healthcare reimbursement.",
  keywords: [
    "CPT Calculator",
    "CPT Codes",
    "Medical Billing Estimate",
    "Healthcare Procedure Costs",
    "Relative Value Units",
    "RVU Calculator",
    "Medical Coding",
  ],
  alternates: {
    canonical: "https://medclinicx.com/calculator/cpt-calculator/",
  },
  openGraph: {
    title: "CPT Calculator - Calculate CPT Codes, Billing Estimates & Healthcare Procedure Costs | Med Clinic X",
    description:
      "Use our free CPT Calculator to understand CPT code calculations, estimate healthcare procedure billing information, and learn how medical coding supports accurate healthcare reimbursement.",
    url: "https://medclinicx.com/calculator/cpt-calculator/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CPT Calculator | Med Clinic X",
      },
    ],
  },
};

export default function CPTCalculatorPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://medclinicx.com" },
      { "@type": "ListItem", position: 2, name: "CPT Calculator", item: "https://medclinicx.com/calculator/cpt-calculator/" },
    ],
  };

  const calculatorSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "CPT Calculator",
    description: "Estimate medical procedure billing parameters using standard RVU allocations, modifier rates, and GPCI region index values.",
    url: "https://medclinicx.com/calculator/cpt-calculator/",
    about: {
      "@type": "MedicalCondition",
      name: "Healthcare Billing & Medical Reimbursement",
      possibleTreatment: [
        {
          "@type": "MedicalTherapy",
          name: "Revenue Cycle Optimization",
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
              <span className="text-[11px] font-bold text-brand-cyan uppercase tracking-widest font-sans">Practice Operations & Finance Tools</span>
            </div>
            
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-6 animate-fade-in">
              CPT Calculator: <span className="text-gradient-cyan-indigo">Understand Medical Procedure Codes & Billing Information</span>
            </h1>

            <div className="glass-panel border border-brand-border rounded-2xl p-8 max-w-4xl mx-auto text-left space-y-4 mb-16">
              <h2 className="text-xl font-bold text-brand-cyan font-display">
                Introduction: Understand CPT Code Calculations
              </h2>
              <p className="text-gray-300 text-base leading-relaxed">
                Medical billing and coding play an important role in modern healthcare operations. Healthcare providers use standardized coding systems to describe medical procedures, services, and treatments for documentation, insurance processing, and reimbursement purposes.
              </p>
              <p className="text-gray-300 text-base leading-relaxed">
                Our <strong>CPT Calculator</strong> helps healthcare organizations, medical professionals, and students better understand CPT-related calculations and healthcare billing concepts.
              </p>
              <p className="text-gray-300 text-base leading-relaxed font-semibold text-white">
                This tool can help users:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-2 text-base text-gray-300 font-medium">
                {[
                  "Learn how CPT codes are used",
                  "Understand procedure-related billing concepts",
                  "Explore healthcare coding workflows",
                  "Improve awareness of medical billing processes"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-300 text-base leading-relaxed">
                The calculator is designed as an educational and workflow-support tool for understanding healthcare coding concepts.
              </p>
              <p className="text-gray-300 text-base leading-relaxed font-semibold text-white">
                It may be useful for:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-2 text-xs text-gray-300 font-bold">
                {[
                  "Healthcare providers",
                  "Medical billing teams",
                  "Coding professionals",
                  "Healthcare administrators",
                  "Medical students",
                  "Healthcare technology companies"
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-900/50 border border-brand-border/40 p-3 rounded-lg text-center">
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-rose-500/10 border border-rose-500/20 text-rose-300 rounded-xl p-4 flex gap-3 text-sm">
                <AlertTriangle className="w-5.5 h-5.5 text-rose-400 shrink-0 mt-0.5" />
                <p className="text-base leading-normal">
                  <strong>Important:</strong> This calculator provides general information and should not replace official coding guidelines, payer policies, professional coding review, or healthcare billing advice.
                </p>
              </div>
            </div>
          </div>

          {/* Calculator Section */}
          <section className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4 font-sans">CPT Calculator</h2>
              <h3 className="text-lg text-gray-300 font-medium mb-4">Calculate CPT Billing Information</h3>
              <p className="text-base text-gray-400 max-w-2xl mx-auto leading-relaxed mb-6">
                Enter your procedure information below to estimate CPT-related details.
              </p>
              <div className="inline-flex flex-wrap justify-center gap-3 mb-8 bg-slate-900/60 p-4 rounded-xl border border-brand-border/40">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block w-full mb-1">Calculator Inputs:</span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> CPT code
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Procedure category
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Location of service
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Additional billing factors (if applicable)
                </span>
              </div>
            </div>
            
            <div className="glass-panel border border-brand-border rounded-3xl p-6 md:p-8">
              <CPTCalculatorClient />
              <p className="text-base text-gray-500 text-center mt-6">
                Your calculated result will appear here.
              </p>
            </div>
          </section>

          {/* Educational content sections below the calculator */}
          <div className="border-t border-brand-border/40 pt-16 space-y-16 text-gray-300">
            
            {/* Row 1: What is CPT Calculator & What are CPT Codes */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">What Is a CPT Calculator?</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  A <strong>CPT Calculator</strong> is a healthcare tool designed to help users understand medical procedure coding and related billing calculations.
                </p>
                <p className="text-gray-300 text-base leading-relaxed">
                  CPT stands for <strong>Current Procedural Terminology</strong>.
                </p>
                <p className="text-gray-300 text-base leading-relaxed font-semibold">
                  CPT codes are standardized five-digit codes used to describe medical services and procedures performed by healthcare professionals. Examples of services that may use CPT codes include:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2 text-sm text-gray-400">
                  {[
                    "Office visits",
                    "Diagnostic procedures",
                    "Surgical services",
                    "Preventive care",
                    "Medical treatments"
                  ].map((service, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">What Are CPT Codes?</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  CPT codes are developed and maintained by the American Medical Association to create a consistent system for reporting medical procedures and services.
                </p>
                <p className="text-gray-300 text-base leading-relaxed">
                  Healthcare organizations use CPT codes for:
                </p>
                <div className="grid grid-cols-2 gap-3 my-2 text-xs font-bold text-brand-cyan">
                  {["Documentation", "Insurance claims", "Billing processes", "Healthcare data management"].map((item, idx) => (
                    <div key={idx} className="bg-slate-900/60 border border-brand-border/40 p-3 rounded-lg text-center">
                      {item}
                    </div>
                  ))}
                </div>
                <p className="text-gray-300 text-base leading-relaxed font-semibold">
                  CPT codes help create a common language between:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-400">
                  <li>Healthcare providers</li>
                  <li>Insurance companies</li>
                  <li>Billing teams</li>
                  <li>Healthcare systems</li>
                </ul>
              </div>
            </div>

            {/* Row 2: Why Are CPT Calculations Important */}
            <div className="border-t border-brand-border/40 pt-16 space-y-6">
              <div className="text-center max-w-3xl mx-auto mb-10">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Why Are CPT Calculations Important?</h2>
                <p className="text-base text-gray-400 mt-2">
                  Accurate CPT-related information helps healthcare organizations improve their administrative workflows.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="glass-panel border border-brand-border/50 p-6 rounded-xl space-y-3 hover:border-brand-cyan/20 transition-all hover:scale-[1.02] flex flex-col">
                  <h4 className="font-bold text-white text-base">Accurate Medical Billing</h4>
                  <p className="text-xs text-gray-400 leading-relaxed flex-grow">
                    Proper coding helps ensure healthcare services are documented correctly.
                  </p>
                </div>
                <div className="glass-panel border border-brand-border/50 p-6 rounded-xl space-y-3 hover:border-brand-cyan/20 transition-all hover:scale-[1.02] flex flex-col">
                  <h4 className="font-bold text-white text-base">Better Revenue Cycle Management</h4>
                  <p className="text-xs text-gray-400 leading-relaxed flex-grow">
                    Correct coding supports smoother claim processing.
                  </p>
                </div>
                <div className="glass-panel border border-brand-border/50 p-6 rounded-xl space-y-3 hover:border-brand-cyan/20 transition-all hover:scale-[1.02] flex flex-col">
                  <h4 className="font-bold text-white text-base">Improved Healthcare Documentation</h4>
                  <p className="text-xs text-gray-400 leading-relaxed flex-grow">
                    Standardized codes improve consistency in medical records.
                  </p>
                </div>
                <div className="glass-panel border border-brand-border/50 p-6 rounded-xl space-y-3 hover:border-brand-cyan/20 transition-all hover:scale-[1.02] flex flex-col">
                  <h4 className="font-bold text-white text-base">Efficient Healthcare Operations</h4>
                  <p className="text-xs text-gray-400 leading-relaxed flex-grow">
                    Digital coding tools help reduce manual administrative work.
                  </p>
                </div>
              </div>
            </div>

            {/* Row 3: How does the calculator work */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start border-t border-brand-border/40 pt-16">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">How Does the CPT Calculator Work?</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  The calculator uses healthcare coding information to provide an estimated result based on entered details.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-bold text-base flex items-center gap-2">
                      <span className="w-2 h-2 bg-brand-cyan rounded-full" /> CPT Code Selection
                    </h4>
                    <p className="text-sm text-gray-400 pl-4 mt-0.5">The user enters a CPT code related to a medical service or procedure.</p>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base flex items-center gap-2">
                      <span className="w-2 h-2 bg-brand-cyan rounded-full" /> Procedure Information
                    </h4>
                    <p className="text-sm text-gray-400 pl-4 mt-0.5">Additional details may help provide better context.</p>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base flex items-center gap-2">
                      <span className="w-2 h-2 bg-brand-cyan rounded-full" /> Calculation Process
                    </h4>
                    <p className="text-sm text-gray-400 pl-4 mt-0.5">The tool analyzes available information and provides a calculated output based on configured rules.</p>
                  </div>
                </div>
              </div>

              {/* Understanding CPT Calculator Results table */}
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Understanding CPT Calculator Results</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  CPT-related results may vary depending on multiple factors:
                </p>
                
                <div className="glass-panel border border-brand-border rounded-2xl overflow-hidden my-4">
                  <table className="w-full text-left border-collapse text-base">
                    <thead>
                      <tr className="bg-slate-900 border-b border-brand-border text-white font-bold">
                        <th className="p-4">Factor</th>
                        <th className="p-4">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-brand-border/40">
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 font-bold text-brand-cyan">CPT Code</td>
                        <td className="p-4 text-gray-300">Identifies the medical service or procedure</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 font-bold text-brand-cyan">Procedure Type</td>
                        <td className="p-4 text-gray-300">Determines the category of service</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 font-bold text-brand-cyan">Location</td>
                        <td className="p-4 text-gray-300">Healthcare pricing may vary by region</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 font-bold text-brand-cyan">Insurance Rules</td>
                        <td className="p-4 text-gray-300">Payer policies influence reimbursement</td>
                      </tr>
                      <tr className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4 font-bold text-brand-cyan">Provider Factors</td>
                        <td className="p-4 text-gray-300">Contract terms may affect payment</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Row 4: Factors That Affect CPT Billing & CPT vs Manual coding */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start border-t border-brand-border/40 pt-16">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Factors That Affect CPT Billing Calculations</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  Several factors influence healthcare procedure costs and reimbursement:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { name: "Geographic Location", desc: "Healthcare pricing can vary between different regions." },
                    { name: "Insurance Coverage", desc: "Different insurance plans may have different reimbursement policies." },
                    { name: "Provider Agreements", desc: "Healthcare organizations may have different payer contracts." },
                    { name: "Procedure Complexity", desc: "More complex services may involve different billing considerations." },
                    { name: "Coding Accuracy", desc: "Incorrect coding can affect claims and reimbursement." }
                  ].map((f, idx) => (
                    <div key={idx} className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-4 space-y-1">
                      <p className="font-bold text-brand-cyan text-sm">{f.name}</p>
                      <p className="text-xs text-gray-400 leading-normal">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">CPT Calculator vs Manual Medical Coding</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-5 space-y-2">
                    <p className="font-bold text-white uppercase tracking-wider text-[11px] text-brand-cyan">Manual Coding</p>
                    <ul className="list-disc pl-4 space-y-1 text-xs text-gray-400">
                      <li><strong>Benefits:</strong> Allows professional review, uses detailed coding knowledge.</li>
                      <li><strong>Limitations:</strong> Time-consuming, requires training and experience.</li>
                    </ul>
                  </div>
                  <div className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-5 space-y-2">
                    <p className="font-bold text-white uppercase tracking-wider text-[11px] text-brand-cyan">Digital CPT Calculator</p>
                    <ul className="list-disc pl-4 space-y-1 text-xs text-gray-300">
                      <li><strong>Benefits:</strong> Faster reference, helps understand coding concepts, supports healthcare workflows.</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed mt-4">
                  Digital tools assist healthcare teams but do not replace certified coding professionals.
                </p>
              </div>
            </div>

            {/* Row 5: How Technology Improves Medical Billing */}
            <div className="border-t border-brand-border/40 pt-16 space-y-4 text-center max-w-3xl mx-auto">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">How Healthcare Technology Improves Medical Billing</h2>
              <p className="text-gray-300 text-base leading-relaxed">
                Healthcare technology is transforming administrative workflows through automation and digital solutions. Modern healthcare platforms support:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mt-6">
                {[
                  "Medical coding systems",
                  "Electronic health records",
                  "Revenue cycle management",
                  "Billing automation",
                  "Healthcare analytics"
                ].map((item, idx) => (
                  <div key={idx} className="glass-panel border border-brand-border p-3.5 rounded-xl text-center text-xs font-bold text-brand-cyan">
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-400 mt-4">
                Technology helps healthcare organizations reduce administrative complexity and improve efficiency.
              </p>
            </div>

            {/* Row 6: FAQs Accordions */}
            <div className="border-t border-brand-border/40 pt-16 space-y-8">
              <div className="text-center max-w-3xl mx-auto mb-8">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Frequently Asked Questions About CPT Calculator</h2>
                <p className="text-base text-gray-400 mt-2">
                  Common questions about medical coding, CPT codes, and billing calculations.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start font-sans">
                {/* Column 1 */}
                <div className="space-y-4">
                  {[
                    {
                      q: "1. What is a CPT calculator?",
                      a: "A CPT calculator is a healthcare tool that helps users understand CPT code-related calculations and medical billing concepts."
                    },
                    {
                      q: "2. What does CPT stand for?",
                      a: "CPT stands for Current Procedural Terminology, a standardized system used to describe medical procedures and services."
                    },
                    {
                      q: "3. Who uses CPT codes?",
                      a: "CPT codes are commonly used by healthcare providers, medical coders, billing teams, and insurance organizations."
                    },
                    {
                      q: "4. Are CPT codes used for insurance claims?",
                      a: "Yes. CPT codes are commonly used when submitting healthcare service claims."
                    },
                    {
                      q: "5. Can a CPT calculator determine exact healthcare costs?",
                      a: "No. Actual costs depend on providers, insurance plans, contracts, and healthcare policies."
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
                      q: "6. Why are CPT codes important in healthcare?",
                      a: "They provide a standardized way to document and communicate medical services."
                    },
                    {
                      q: "7. Do all healthcare services have CPT codes?",
                      a: "Many medical services use CPT codes, but healthcare coding systems may also involve other code types."
                    },
                    {
                      q: "8. Can patients use a CPT calculator?",
                      a: "Yes. Patients can use it to better understand healthcare billing concepts."
                    },
                    {
                      q: "9. Does CPT coding affect medical billing?",
                      a: "Yes. Accurate CPT coding plays an important role in healthcare billing and reimbursement."
                    },
                    {
                      q: "10. Can AI improve CPT coding workflows?",
                      a: "Yes. AI-powered healthcare solutions can help automate coding assistance, reduce manual work, and improve workflow efficiency."
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

            {/* Row 7: Related Tools */}
            <div className="border-t border-brand-border/40 pt-16 space-y-4">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Related Healthcare Tools</h2>
              <p className="text-base leading-relaxed">
                Explore more healthcare calculators:
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-6 gap-4 mt-6">
                {[
                  { name: "BMI Calculator", path: "/solutions" },
                  { name: "A1C Calculator", path: "/calculator/a1c-calculator" },
                  { name: "CKD Calculator", path: "/calculator/ckd-calculator" },
                  { name: "Anion Gap Calculator", path: "/calculator/anion-gap-calculator" },
                  { name: "QTc Calculator", path: "/calculator/qtc-calculator" },
                  { name: "IV Drip Rate Calculator", path: "/calculator/iv-drip-rate-calculator" }
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
                  Build Better Healthcare Technology With Med Clinic X
                </h2>
                <p className="mt-4 text-base text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Med Clinic X helps healthcare organizations build modern digital healthcare solutions that improve workflows, patient experiences, and operational efficiency.
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
