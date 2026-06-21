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
import LeanDentalImplantCalculatorClient from "./LeanDentalImplantCalculatorClient";

export const metadata: Metadata = {
  title: "Dental Implant Cost Calculator - Estimate Your Dental Implant Treatment Cost | Med Clinic X",
  description:
    "Use our free Dental Implant Cost Calculator to estimate the potential cost of dental implant treatment based on implant type, number of implants, and additional dental procedures. Plan your dental care budget easily.",
  keywords: [
    "Dental Implant Cost Calculator",
    "Dental implant cost",
    "Calculate dental implant cost",
    "Implant treatment planning budget",
    "How much do dental implants cost",
  ],
  alternates: {
    canonical: "https://medclinicx.com/dental-implant-cost-calculator",
  },
  openGraph: {
    title: "Dental Implant Cost Calculator - Estimate Your Dental Implant Treatment Cost | Med Clinic X",
    description:
      "Use our free Dental Implant Cost Calculator to estimate the potential cost of dental implant treatment based on implant type, number of implants, and additional dental procedures. Plan your dental care budget easily.",
    url: "https://medclinicx.com/dental-implant-cost-calculator",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dental Implant Cost Calculator | Med Clinic X",
      },
    ],
  },
};

export default function DentalImplantCostCalculatorPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://medclinicx.com" },
      { "@type": "ListItem", position: 2, name: "Dental Implant Cost Calculator", item: "https://medclinicx.com/dental-implant-cost-calculator" },
    ],
  };

  const calculatorSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Dental Implant Cost Calculator",
    description: "Use our free Dental Implant Cost Calculator to estimate the potential cost of dental implant treatment based on implant type, number of implants, and additional dental procedures.",
    url: "https://medclinicx.com/dental-implant-cost-calculator",
    about: {
      "@type": "MedicalCondition",
      name: "Missing Teeth & Dental Implantation",
      possibleTreatment: [
        {
          "@type": "MedicalTherapy",
          name: "Surgical Dental Implantation & Prosthetic Loading",
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
              <span className="text-[11px] font-bold text-brand-cyan uppercase tracking-widest font-sans">Dental Budgeting Tools</span>
            </div>
            
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-6">
              Dental Implant Cost Calculator: <span className="text-gradient-cyan-indigo">Estimate Your Implant Treatment Cost</span>
            </h1>

            <div className="glass-panel border border-brand-border rounded-2xl p-8 max-w-4xl mx-auto text-left space-y-4 mb-16">
              <h2 className="text-xl font-bold text-brand-cyan font-display">
                Introduction: Calculate Your Dental Implant Cost
              </h2>
              <p className="text-gray-300 text-base leading-relaxed">
                Dental implants are a popular long-term solution for replacing missing teeth and restoring oral function. However, the total cost of dental implant treatment can vary depending on several factors, including the number of implants needed, implant materials, additional procedures, location, and the complexity of treatment.
              </p>
              <p className="text-gray-300 text-base leading-relaxed">
                Our <strong>Dental Implant Cost Calculator</strong> helps patients estimate the possible cost of dental implant treatment by considering important factors that influence pricing.
              </p>
              <p className="text-gray-300 text-base leading-relaxed font-semibold text-white">
                This calculator can help you:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-2 text-base text-gray-300">
                {[
                  "Understand potential dental implant expenses",
                  "Plan your treatment budget",
                  "Learn what factors affect implant pricing",
                  "Compare different treatment considerations"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-300 text-base leading-relaxed">
                The tool provides an estimated cost range and helps users become more informed before discussing treatment options with a dental professional.
              </p>
              <div className="bg-rose-500/10 border border-rose-500/20 text-rose-300 rounded-xl p-4 flex gap-3 text-sm">
                <AlertTriangle className="w-5.5 h-5.5 text-rose-400 shrink-0 mt-0.5" />
                <p className="text-base leading-normal">
                  <strong>Important:</strong> This calculator provides an estimate only and should not replace a professional dental consultation, examination, or personalized treatment plan.
                </p>
              </div>
            </div>
          </div>

          {/* Calculator Section */}
          <section className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">Estimate Your Dental Implant Cost</h2>
              <p className="text-base text-gray-300 max-w-2xl mx-auto leading-relaxed mb-6">
                Enter your details below to calculate an estimated dental implant cost.
              </p>
              <div className="inline-flex flex-wrap justify-center gap-3 mb-8 bg-slate-900/60 p-4 rounded-xl border border-brand-border/40">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block w-full mb-1">Calculator Inputs:</span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Number of dental implants needed
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Type of implant restoration
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Need for bone grafting
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Need for additional procedures
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-brand-border/40 rounded-full text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> Location or treatment complexity
                </span>
              </div>
            </div>
            
            <div className="glass-panel border border-brand-border rounded-3xl p-6 md:p-8">
              <LeanDentalImplantCalculatorClient />
              <p className="text-base text-gray-500 text-center mt-6">
                Your estimated dental implant cost range will appear above.
              </p>
            </div>
          </section>

          {/* Educational Content below calculator */}
          <div className="border-t border-brand-border/40 pt-16 space-y-16 text-gray-300">
            
            {/* Grid 1: What is it & What are implants */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">What Is a Dental Implant Cost Calculator?</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  A <strong>Dental Implant Cost Calculator</strong> is an online tool designed to estimate the potential cost of dental implant treatment.
                </p>
                <p className="text-gray-300 text-base leading-relaxed">
                  Dental implant pricing is not the same for every patient because each treatment plan is customized.
                </p>
                <p className="text-gray-300 text-base leading-relaxed font-semibold text-white">
                  The final cost may depend on:
                </p>
                <div className="grid grid-cols-2 gap-3 text-xs leading-normal">
                  {[
                    "Number of missing teeth",
                    "Implant materials",
                    "Type of restoration",
                    "Dental imaging requirements",
                    "Bone condition",
                    "Additional procedures"
                  ].map((factor, idx) => (
                    <div key={idx} className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-3 flex gap-2">
                      <span className="w-1 h-1 bg-brand-cyan rounded-full mt-1.5 shrink-0" />
                      <span>{factor}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-300 text-base leading-relaxed">
                  This calculator helps patients understand the possible financial factors involved before starting treatment.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">What Are Dental Implants?</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  Dental implants are artificial tooth roots designed to replace missing teeth. A typical dental implant treatment includes:
                </p>
                <div className="space-y-3">
                  {[
                    { step: "1. Implant Placement", desc: "A titanium or similar implant is placed into the jawbone." },
                    { step: "2. Healing Period", desc: "The implant integrates with the surrounding bone (osseointegration)." },
                    { step: "3. Dental Restoration", desc: "A crown, bridge, or denture attachment is placed to restore function and appearance." }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-slate-900/40 border border-brand-border/50 rounded-xl p-4">
                      <h4 className="font-bold text-white text-sm">{item.step}</h4>
                      <p className="text-xs text-gray-400 mt-1">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="text-gray-300 text-base leading-relaxed">
                  Dental implants are commonly used to improve chewing ability, smile appearance, oral function, and tooth replacement stability.
                </p>
              </div>
            </div>

            {/* Grid 2: How works & cost factors */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start border-t border-brand-border/40 pt-16">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">How the Dental Implant Cost Calculator Works</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  The calculator estimates treatment costs by analyzing common pricing factors:
                </p>
                <div className="bg-slate-900/40 border border-brand-border/50 rounded-xl p-5 space-y-4">
                  <div className="space-y-1">
                    <h5 className="font-bold text-white text-xs uppercase tracking-wider text-brand-cyan">Number of Implants</h5>
                    <p className="text-sm text-gray-400 leading-normal">
                      The number of implants needed is one of the biggest factors affecting overall cost (e.g. Single tooth implant, multiple implants, full-mouth implant restoration).
                    </p>
                  </div>
                  <div className="space-y-1 border-t border-brand-border/20 pt-3">
                    <h5 className="font-bold text-white text-xs uppercase tracking-wider text-brand-cyan">Implant Type</h5>
                    <p className="text-sm text-gray-400 leading-normal">
                      Different implant solutions may have different costs depending on materials and complexity.
                    </p>
                  </div>
                  <div className="space-y-1 border-t border-brand-border/20 pt-3">
                    <h5 className="font-bold text-white text-xs uppercase tracking-wider text-brand-cyan">Additional Procedures</h5>
                    <p className="text-sm text-gray-400 leading-normal">
                      Some patients may require additional treatments such as bone grafting, tooth extraction, or sinus lift procedures.
                    </p>
                  </div>
                  <div className="space-y-1 border-t border-brand-border/20 pt-3">
                    <h5 className="font-bold text-white text-xs uppercase tracking-wider text-brand-cyan">Treatment Complexity</h5>
                    <p className="text-sm text-gray-400 leading-normal">
                      Every patient&apos;s dental situation is different, which can affect planning and pricing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Understanding Dental Implant Cost Factors</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  Dental implant costs usually include multiple components:
                </p>
                <div className="glass-panel border border-brand-border rounded-xl overflow-hidden text-base">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-900 border-b border-brand-border text-white font-bold">
                        <th className="p-3 text-xs uppercase tracking-wider">Cost Factor</th>
                        <th className="p-3 text-xs uppercase tracking-wider">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-brand-border/40 text-xs text-gray-300">
                      <tr>
                        <td className="p-3 font-bold text-brand-cyan">Implant Placement</td>
                        <td className="p-3">Cost related to placing the surgical implant post</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-brand-cyan">Dental Crown</td>
                        <td className="p-3">Final artificial tooth restoration placed on abutment</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-brand-cyan">Imaging & Planning</td>
                        <td className="p-3">X-rays, surgical guides, or 3D digital bone CT scans</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-brand-cyan">Additional Procedures</td>
                        <td className="p-3">Treatments required before implantation (grafts, extractions)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-brand-cyan">Follow-up Care</td>
                        <td className="p-3">Monitoring, suture removal, and initial prosthetic adjustments</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Row 4: Average Considerations & Why calculator useful */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start border-t border-brand-border/40 pt-16">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Average Dental Implant Cost Considerations</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  Dental implant costs vary widely based on geographic location, dentist experience, materials used, number of implants, and complexity of treatment.
                </p>
                <p className="text-gray-300 text-base leading-relaxed">
                  A single dental implant may involve several separate services rather than one fixed price. Using a calculator can help patients understand what expenses may be involved.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Why Is a Dental Implant Cost Calculator Useful?</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  A cost calculator helps patients make more informed decisions. Benefits include:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-slate-900/40 p-4 rounded-xl border border-brand-border/40">
                    <h5 className="font-bold text-white text-xs uppercase tracking-wider text-brand-cyan">Better Financial Planning</h5>
                    <p className="text-xs text-gray-400 mt-1">Estimate possible treatment expenses before dental consultation.</p>
                  </div>
                  <div className="bg-slate-900/40 p-4 rounded-xl border border-brand-border/40">
                    <h5 className="font-bold text-white text-xs uppercase tracking-wider text-brand-cyan">Understanding Options</h5>
                    <p className="text-xs text-gray-400 mt-1">Learn how different clinical factors affect regional pricing.</p>
                  </div>
                  <div className="bg-slate-900/40 p-4 rounded-xl border border-brand-border/40">
                    <h5 className="font-bold text-white text-xs uppercase tracking-wider text-brand-cyan">Improved EKG/Dental Chat</h5>
                    <p className="text-xs text-gray-400 mt-1">Ask more informed questions during initial dental appointments.</p>
                  </div>
                  <div className="bg-slate-900/40 p-4 rounded-xl border border-brand-border/40">
                    <h5 className="font-bold text-white text-xs uppercase tracking-wider text-brand-cyan">Increased Awareness</h5>
                    <p className="text-xs text-gray-400 mt-1">Understanding costs can reduce confusion about dental implant procedures.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Grid 5: Affecting factors & Patient Preparation */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start border-t border-brand-border/40 pt-16">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Factors That Can Affect Dental Implant Cost</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  Several factors may influence the final treatment price:
                </p>
                <div className="bg-slate-900/40 border border-brand-border/50 rounded-xl p-5 space-y-3">
                  <ul className="list-disc pl-5 space-y-2 text-base text-gray-300">
                    <li><strong>Number of Missing Teeth:</strong> Replacing multiple teeth usually requires a different treatment approach (bridges/dentures).</li>
                    <li><strong>Bone Health:</strong> Some patients may require bone grafts or sinus elevation to improve support.</li>
                    <li><strong>Materials Used:</strong> Titanium vs zirconia implants, and composite vs porcelain restoration materials.</li>
                    <li><strong>Practice Location:</strong> Costs vary depending on region, metropolitan cost of living index, and local dental fee guides.</li>
                    <li><strong>Technology Used:</strong> Advanced 3D dental imaging, guide planning templates, and custom laboratory workflows.</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">How Can Patients Prepare for Dental Implant Treatment?</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  Before starting dental implant treatment, patients can:
                </p>
                <div className="bg-slate-900/40 border border-brand-border/50 rounded-xl p-5 space-y-3">
                  <ul className="list-none pl-0 space-y-2 text-base text-gray-300">
                    {[
                      "Schedule a professional clinical dental consultation",
                      "Understand available diagnostic treatment options",
                      "Review estimated custom cost breakdowns",
                      "Ask about available healthcare payment/financing options",
                      "Maintain good oral hygiene to promote healthy integration"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-brand-emerald rounded-full shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-gray-300 text-base leading-relaxed">
                  A dental professional can provide a personalized clinical treatment recommendation.
                </p>
              </div>
            </div>

            {/* Grid 6: Calculator vs Consultation & Tech improvements */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start border-t border-brand-border/40 pt-16">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Dental Implant Cost Calculator vs Dental Consultation</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  Use the calculator as a starting benchmark:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="bg-slate-900/40 p-4 border border-brand-border/40 rounded-xl">
                    <p className="font-bold text-white text-xs uppercase tracking-wider text-brand-cyan">Implant Cost Calculator</p>
                    <ul className="list-disc pl-4 space-y-1.5 text-gray-300 mt-2">
                      <li>Quick financial estimate</li>
                      <li>Helps understand core pricing components</li>
                      <li>Useful for initial budgeting</li>
                    </ul>
                  </div>
                  <div className="bg-slate-900/40 p-4 border border-brand-border/40 rounded-xl">
                    <p className="font-bold text-white text-xs uppercase tracking-wider text-brand-cyan">Dental Consultation</p>
                    <ul className="list-disc pl-4 space-y-1.5 text-gray-300 mt-2">
                      <li>Personalized clinical treatment plan</li>
                      <li>Physical examination and 3D diagnostics</li>
                      <li>Accurate clinic financial proposal</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">How Technology Is Improving Dental Care</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  Modern dental practices are using technology to improve patient experiences. Digital solutions can help with online appointment scheduling, patient communication, digital records, automated reminders, and treatment modeling. Healthcare technology platforms help dental clinics improve efficiency and patient engagement.
                </p>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="border-t border-brand-border/40 pt-16 space-y-8">
              <div className="text-center max-w-3xl mx-auto mb-8">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Frequently Asked Questions About Dental Implant Cost Calculator</h2>
                <p className="text-base text-gray-400 mt-2">
                  Find quick answers to common questions about dental implant costs, insurance, and treatment scopes.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start font-sans">
                {/* Column 1 */}
                <div className="space-y-4">
                  {[
                    {
                      q: "1. What is a dental implant cost calculator?",
                      a: "A dental implant cost calculator is an online tool that estimates the potential cost of implant treatment based on factors like number of implants and additional procedures."
                    },
                    {
                      q: "2. How much do dental implants usually cost?",
                      a: "Dental implant costs vary depending on location, treatment complexity, materials, and the number of implants required."
                    },
                    {
                      q: "3. Is a dental implant cost calculator accurate?",
                      a: "It provides an estimate. The final cost can only be determined after a dental examination and personalized treatment plan."
                    },
                    {
                      q: "4. What factors affect dental implant cost?",
                      a: "Factors include implant number, materials, additional procedures, location, and dental complexity."
                    },
                    {
                      q: "5. Does dental insurance cover implants?",
                      a: "Coverage depends on the insurance plan. Patients should check their individual dental benefits."
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
                      q: "6. Are dental implants cheaper than other tooth replacement options?",
                      a: "The cost depends on the treatment type, but implants are often considered a long-term tooth replacement option."
                    },
                    {
                      q: "7. How many implants do I need?",
                      a: "The number of implants depends on the number of missing teeth and your dental treatment plan."
                    },
                    {
                      q: "8. Does bone grafting increase implant cost?",
                      a: "Yes. Additional procedures such as bone grafting may increase the overall treatment cost."
                    },
                    {
                      q: "9. Can I calculate dental implant cost online?",
                      a: "Yes. Online calculators can provide an estimated cost range, but a dental professional must confirm the final price."
                    },
                    {
                      q: "10. Why are dental implant costs different between clinics?",
                      a: "Costs may vary because of location, dentist experience, technology, materials, and treatment complexity."
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
                Explore more helpful calculators:
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mt-6">
                {[
                  { name: "BMI Calculator", path: "/solutions" },
                  { name: "Water Intake Calculator", path: "/water-calculator" },
                  { name: "A1C Calculator", path: "/a1c-calculator" },
                  { name: "Healthcare App Cost Calculator", path: "/solutions" },
                  { name: "Dental Practice Growth Calculator", path: "/solutions" }
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
                  Build Better Healthcare Experiences With Med Clinic X
                </h2>
                <p className="mt-4 text-base text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Med Clinic X helps healthcare organizations build modern digital healthcare solutions that improve patient engagement, operations, and growth.
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
                  We help dental clinics, hospitals, and healthcare organizations create scalable technology solutions that improve the way they deliver care.
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
                    <span>Looking to build a modern healthcare platform for your dental or medical organization? Connect with Med Clinic X today.</span>
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
