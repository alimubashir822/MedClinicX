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
import InvisalignCostCalculatorClient from "./InvisalignCostCalculatorClient";

export const metadata: Metadata = {
  title: "Invisalign Cost Calculator - Estimate Your Invisalign Treatment Cost | Med Clinic X",
  description:
    "Use our free Invisalign Cost Calculator to estimate the potential cost of Invisalign treatment based on treatment complexity, duration, and dental needs. Plan your orthodontic budget easily.",
  keywords: [
    "Invisalign Cost Calculator",
    "Invisalign treatment cost",
    "Clear aligner cost calculator",
    "Invisalign pricing factors",
    "Teeth straightening cost estimate",
    "Orthodontic budget planner",
  ],
  alternates: {
    canonical: "https://medclinicx.com/calculators/invisalign-cost-calculator/",
  },
  openGraph: {
    title: "Invisalign Cost Calculator - Estimate Your Invisalign Treatment Cost | Med Clinic X",
    description:
      "Use our free Invisalign Cost Calculator to estimate the potential cost of Invisalign treatment based on treatment complexity, duration, and dental needs. Plan your orthodontic budget easily.",
    url: "https://medclinicx.com/calculators/invisalign-cost-calculator/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Invisalign Cost Calculator | Med Clinic X",
      },
    ],
  },
};

export default function InvisalignCostCalculatorPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://medclinicx.com" },
      { "@type": "ListItem", position: 2, name: "Invisalign Cost Calculator", item: "https://medclinicx.com/calculators/invisalign-cost-calculator/" },
    ],
  };

  const calculatorSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Invisalign Cost Calculator",
    description: "Use our free Invisalign Cost Calculator to estimate the potential cost of Invisalign treatment based on treatment complexity, duration, and dental needs.",
    url: "https://medclinicx.com/calculators/invisalign-cost-calculator/",
    about: {
      "@type": "MedicalCondition",
      name: "Malocclusion & Teeth Straightening",
      possibleTreatment: [
        {
          "@type": "MedicalTherapy",
          name: "Clear Aligner Therapy & Invisalign Treatment",
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
              <span className="text-[11px] font-bold text-brand-cyan uppercase tracking-widest font-sans">Dental Treatment Tools</span>
            </div>
            
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-6 animate-fade-in">
              Invisalign Cost Calculator: <span className="text-gradient-cyan-indigo">Estimate Your Clear Aligner Cost</span>
            </h1>

            <div className="glass-panel border border-brand-border rounded-2xl p-8 max-w-4xl mx-auto text-left space-y-4 mb-16">
              <h2 className="text-xl font-bold text-brand-cyan font-display">
                Introduction: Calculate Your Invisalign Treatment Cost
              </h2>
              <p className="text-gray-300 text-base leading-relaxed">
                Invisalign has become a popular alternative to traditional braces for people looking to straighten their teeth with clear aligner technology. However, the total cost of Invisalign treatment can vary depending on several factors, including the complexity of tooth movement, treatment duration, dental provider fees, and the number of aligners required.
              </p>
              <p className="text-gray-300 text-base leading-relaxed">
                Our <strong>Invisalign Cost Calculator</strong> helps estimate the potential cost of Invisalign treatment by considering common factors that influence pricing.
              </p>
              <p className="text-gray-300 text-base leading-relaxed font-semibold text-white">
                This calculator can help you:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-2 text-base text-gray-300 font-medium">
                {[
                  "Understand possible Invisalign expenses",
                  "Estimate treatment budget requirements",
                  "Learn what factors affect clear aligner costs",
                  "Prepare better questions for your orthodontic consultation"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-300 text-base leading-relaxed">
                Whether you are considering Invisalign for minor alignment improvements or more complex orthodontic correction, this tool provides a helpful starting point.
              </p>
              <div className="bg-amber-500/10 border border-amber-500/20 text-amber-300 rounded-xl p-4 flex gap-3 text-sm">
                <AlertTriangle className="w-5.5 h-5.5 text-amber-400 shrink-0 mt-0.5" />
                <p className="text-base leading-normal">
                  <strong>Important:</strong> This calculator provides an estimate only and should not replace a professional orthodontic consultation, dental examination, or personalized treatment plan.
                </p>
              </div>
            </div>
          </div>

          {/* Calculator Section */}
          <section className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">Invisalign Cost Calculator</h2>
              <p className="text-base text-gray-300 max-w-2xl mx-auto leading-relaxed mb-6">
                Enter your treatment complexity, duration, expected aligners, and dental needs below to estimate potential costs.
              </p>
            </div>
            
            <div className="glass-panel border border-brand-border rounded-3xl p-6 md:p-8">
              <InvisalignCostCalculatorClient />
              <p className="text-base text-gray-500 text-center mt-6">
                Your estimated Invisalign treatment cost will appear here.
              </p>
            </div>
          </section>

          {/* Educational content sections below the calculator */}
          <div className="border-t border-brand-border/40 pt-16 space-y-16 text-gray-300">
            
            {/* Row 1: What is it & What is Invisalign */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">What Is an Invisalign Cost Calculator?</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  An <strong>Invisalign Cost Calculator</strong> is an online tool designed to estimate the potential price range of Invisalign clear aligner treatment.
                </p>
                <p className="text-gray-300 text-base leading-relaxed">
                  Unlike traditional fixed pricing, Invisalign costs are personalized because every patient's orthodontic needs are different.
                </p>
                <p className="text-gray-300 text-base leading-relaxed">
                  This calculator helps users understand the possible financial factors before visiting a dental professional.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">What Is Invisalign Treatment?</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  Invisalign is a clear aligner orthodontic treatment designed to gradually move teeth into better alignment.
                </p>
                <p className="text-gray-300 text-base leading-relaxed">
                  Instead of traditional metal brackets and wires, Invisalign uses a series of custom-made clear aligners.
                </p>
                <p className="text-gray-300 text-base leading-relaxed font-semibold text-white">
                  Common reasons people choose Invisalign include:
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Straightening crowded teeth",
                    "Correcting spacing issues",
                    "Improving bite alignment",
                    "Enhancing smile appearance"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-slate-900/50 border border-brand-border/30 rounded-lg p-3">
                      <span className="w-1.5 h-1.5 bg-brand-indigo rounded-full shrink-0" />
                      <span className="text-xs text-gray-300 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Row 2: How does the calculator work */}
            <div className="border-t border-brand-border/40 pt-16 space-y-6">
              <div className="text-center max-w-3xl mx-auto mb-10">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">How Does the Invisalign Cost Calculator Work?</h2>
                <p className="text-base text-gray-400 mt-2">
                  The calculator estimates treatment cost by analyzing factors that commonly influence Invisalign pricing.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  {
                    title: "Treatment Complexity",
                    desc: "The level of correction needed can affect the number of aligners and treatment time. Mild concerns are cheaper, while moderate and complex alignments require heavier corrections."
                  },
                  {
                    title: "Treatment Duration",
                    desc: "Longer treatment plans involve more office visits, monitoring checks, and sequential aligners, raising overall professional fee structures."
                  },
                  {
                    title: "Number of Aligners",
                    desc: "Each set of aligners has laboratory fees. Cases requiring a high number of trays (e.g. 30 to 50+) carry higher base material costs."
                  },
                  {
                    title: "Additional Dental Needs",
                    desc: "Additional procedures such as pre-treatment cleanings, digital X-rays, 3D scans, attachments (buttons), post-treatment retainers, and refinements."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="glass-panel border border-brand-border p-5 rounded-2xl space-y-2">
                    <h4 className="font-bold text-brand-cyan text-sm">{item.title}</h4>
                    <p className="text-[11px] text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 3: Understanding Cost Factors Table */}
            <div className="border-t border-brand-border/40 pt-16 space-y-6">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Understanding Invisalign Cost Factors</h2>
              <p className="text-gray-300 text-base leading-relaxed">
                The total cost of a smile alignment is influenced by several critical items:
              </p>
              
              <div className="glass-panel border border-brand-border rounded-2xl overflow-hidden max-w-4xl mx-auto my-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-base">
                    <thead>
                      <tr className="bg-slate-900 border-b border-brand-border text-white font-bold">
                        <th className="p-4">Cost Factor</th>
                        <th className="p-4">How It Affects Cost</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-brand-border/40 text-gray-300">
                      {[
                        { factor: "Treatment Complexity", desc: "More complex cases may require longer treatment" },
                        { factor: "Number of Aligners", desc: "Additional aligners may increase costs" },
                        { factor: "Treatment Duration", desc: "Longer plans may require more visits" },
                        { factor: "Dental Provider Location", desc: "Costs vary by region" },
                        { factor: "Additional Procedures", desc: "Extra services may affect total price" }
                      ].map((row, idx) => (
                        <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                          <td className="p-4 font-bold text-brand-cyan">{row.factor}</td>
                          <td className="p-4">{row.desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Row 4: Cost Considerations & Why useful */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start border-t border-brand-border/40 pt-16">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Average Invisalign Cost Considerations</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  The cost of Invisalign varies based on individual treatment requirements. Factors that influence pricing include:
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-400">
                  {[
                    "Geographic location",
                    "Orthodontist experience",
                    "Severity of alignment issues",
                    "Treatment length",
                    "Insurance coverage",
                    "Payment options"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-slate-900/40 p-2.5 rounded-lg border border-brand-border/30">
                      <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-300 text-sm">
                  A cost calculator can help estimate possible expenses, but the final cost is determined after a professional evaluation.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Why Is an Invisalign Cost Calculator Useful?</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  A dental cost calculator can help patients make informed decisions through:
                </p>
                <div className="space-y-3 bg-slate-900/40 border border-brand-border/50 rounded-xl p-5 text-sm">
                  <div className="flex gap-2">
                    <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full shrink-0 mt-2" />
                    <span><strong>Better Financial Planning:</strong> Patients can understand potential treatment expenses before starting.</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full shrink-0 mt-2" />
                    <span><strong>Understanding Treatment Options:</strong> Users can learn what factors influence Invisalign pricing.</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full shrink-0 mt-2" />
                    <span><strong>Improved Dental Consultation:</strong> Patients can ask more informed questions during orthodontic visits.</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full shrink-0 mt-2" />
                    <span><strong>Increased Treatment Awareness:</strong> Understanding costs helps patients plan their dental care journey.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 5: Factors affecting cost & Patient prep */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start border-t border-brand-border/40 pt-16">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Factors That Can Affect Invisalign Cost</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  Several factors may influence the final Invisalign treatment price:
                </p>
                <div className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-bold text-white">Severity of Dental Alignment Issues</h4>
                    <p className="text-gray-400 mt-1">Complex cases requiring heavy correction or rotational shifts require more aligners and longer treatment periods.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Treatment Provider & Location</h4>
                    <p className="text-gray-400 mt-1">Provider qualifications (e.g. Preferred vs Elite VIP Orthodontists) and geographic location affect base fee ranges.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Insurance Benefits & Follow-Up</h4>
                    <p className="text-gray-400 mt-1">Orthodontic insurance coverage benefits offset out-of-pocket costs, while standard monitoring visits are typically bundled into base costs.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">How Can Patients Prepare for Invisalign Treatment?</h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  Before starting Invisalign, patients can take these preparatory steps:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {[
                    { name: "Consultation Scheduling", desc: "Book an orthodontic check-up for scans." },
                    { name: "Goal Discussion", desc: "Detail your alignment and bite goals." },
                    { name: "Cost Review", desc: "Understand lab and treatment package limits." },
                    { name: "Payment Plan Selection", desc: "Inquire about interest-free financing options." },
                    { name: "Duration Planning", desc: "Verify total months and aligner count." }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-slate-900/50 border border-brand-border/30 rounded-xl p-3.5 space-y-1">
                      <p className="font-bold text-brand-cyan">{item.name}</p>
                      <p className="text-[10px] text-gray-400 leading-normal">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-400">
                  A dental professional can create a personalized treatment plan based on your needs.
                </p>
              </div>
            </div>

            {/* Row 6: Calculator vs Consultation */}
            <div className="border-t border-brand-border/40 pt-16 space-y-6">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight text-center max-w-3xl mx-auto">Invisalign Cost Calculator vs Orthodontic Consultation</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-sm">
                <div className="glass-panel border border-brand-border p-6 rounded-2xl space-y-3">
                  <h4 className="font-bold text-white text-base">Invisalign Cost Calculator</h4>
                  <p className="text-brand-cyan font-semibold text-xs">Benefits:</p>
                  <ul className="list-disc pl-5 space-y-1 text-xs text-gray-300 leading-relaxed">
                    <li>Quick cost estimation range</li>
                    <li>Helps understand core pricing components</li>
                    <li>Useful for initial budgeting and payment plan ideas</li>
                  </ul>
                  <p className="text-rose-400 font-semibold text-xs pt-1">Limitations:</p>
                  <ul className="list-disc pl-5 space-y-1 text-xs text-gray-400 leading-relaxed">
                    <li>Cannot evaluate teeth arrangement directly</li>
                    <li>Does not replace clinical orthodontic assessment</li>
                  </ul>
                </div>
                <div className="glass-panel border border-brand-border p-6 rounded-2xl space-y-3">
                  <h4 className="font-bold text-brand-cyan text-base">Orthodontic Consultation</h4>
                  <p className="text-brand-cyan font-semibold text-xs">Benefits:</p>
                  <ul className="list-disc pl-5 space-y-1 text-xs text-gray-300 leading-relaxed">
                    <li>Personalized orthodontic plan setup</li>
                    <li>Comprehensive visual & 3D dental examination</li>
                    <li>Binding and exact pricing quote</li>
                  </ul>
                  <p className="text-gray-400 text-xs pt-3 font-medium">
                    A calculator helps with preparation, while a consultation provides the final treatment recommendation.
                  </p>
                </div>
              </div>
            </div>

            {/* Row 7: Tech in Dental Care */}
            <div className="border-t border-brand-border/40 pt-16 space-y-4 text-center max-w-3xl mx-auto">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">How Technology Is Transforming Dental Care</h2>
              <p className="text-gray-300 text-base leading-relaxed">
                Modern dental technology helps clinics improve patient experiences and treatment planning. Digital solutions support:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mt-6">
                {[
                  "Digital Scans (iTero)",
                  "Online Scheduling",
                  "Digital Patient Records",
                  "AI Treatment Planning",
                  "Automated Reminders"
                ].map((item, idx) => (
                  <div key={idx} className="glass-panel border border-brand-border p-3.5 rounded-xl text-center text-xs font-bold text-brand-cyan">
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-400 mt-4 font-semibold">
                Healthcare technology helps dental practices deliver more efficient and connected care.
              </p>
            </div>

            {/* Row 8: FAQs Accordions */}
            <div className="border-t border-brand-border/40 pt-16 space-y-8">
              <div className="text-center max-w-3xl mx-auto mb-8">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Frequently Asked Questions About Invisalign Cost</h2>
                <p className="text-base text-gray-400 mt-2">
                  Common questions about clear aligner treatment, budgeting, and insurance options.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start font-sans">
                {/* Column 1 */}
                <div className="space-y-4">
                  {[
                    {
                      q: "1. What is an Invisalign cost calculator?",
                      a: "An Invisalign cost calculator is an online tool that estimates the potential cost of clear aligner treatment based on common pricing factors."
                    },
                    {
                      q: "2. How much does Invisalign cost?",
                      a: "The cost varies depending on treatment complexity, location, provider, and the number of aligners needed."
                    },
                    {
                      q: "3. Is an Invisalign cost calculator accurate?",
                      a: "It provides an estimate. A dental professional must evaluate your teeth to determine the final treatment cost."
                    },
                    {
                      q: "4. What affects Invisalign treatment cost?",
                      a: "Factors include treatment complexity, duration, aligner quantity, location, and additional dental services."
                    },
                    {
                      q: "5. Is Invisalign cheaper than braces?",
                      a: "The cost depends on the individual case. Both Invisalign and braces pricing can vary based on treatment needs."
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
                      q: "6. How long does Invisalign treatment take?",
                      a: "Treatment duration varies depending on the level of correction required."
                    },
                    {
                      q: "7. Does insurance cover Invisalign?",
                      a: "Coverage depends on the specific dental insurance plan and benefits."
                    },
                    {
                      q: "8. Can I calculate Invisalign cost online?",
                      a: "Yes. Online calculators can provide an estimated range before a dental consultation."
                    },
                    {
                      q: "9. Why does Invisalign cost differ between patients?",
                      a: "Every patient has different orthodontic needs, treatment duration, and alignment goals."
                    },
                    {
                      q: "10. Is Invisalign suitable for everyone?",
                      a: "A dental professional can determine whether Invisalign is appropriate based on your specific dental condition."
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

            {/* Row 9: Related Tools */}
            <div className="border-t border-brand-border/40 pt-16 space-y-4">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">Related Healthcare Tools</h2>
              <p className="text-base leading-relaxed">
                Explore more dental and healthcare calculators:
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-6 gap-4 mt-6">
                {[
                  { name: "Dental Implant Cost Calculator", path: "/calculators/dental-implant-cost-calculator" },
                  { name: "BMI Calculator", path: "/solutions" },
                  { name: "Water Intake Calculator", path: "/calculators/water-intake-calculator" },
                  { name: "A1C Calculator", path: "/calculators/a1c-calculator" },
                  { name: "Baby Weight Calculator", path: "/calculators/baby-weight-calculator" },
                  { name: "Body Fat Calculator", path: "/solutions" }
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
                  Build Better Dental Healthcare Experiences With Med Clinic X
                </h2>
                <p className="mt-4 text-base text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Med Clinic X helps dental clinics, hospitals, and healthcare organizations build modern digital healthcare solutions that improve patient engagement and business growth.
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
                  Looking to build a modern healthcare technology solution for your dental or medical organization? Connect with Med Clinic X today.
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
