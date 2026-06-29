import { Metadata } from "next";
import Link from "next/link";
import { 
  Compass, 
  Layers, 
  Wrench, 
  Briefcase, 
  FileText, 
  MapPin, 
  ArrowRight,
  Shield,
  Activity
} from "lucide-react";

export const metadata: Metadata = {
  title: "HTML Sitemap | Med Clinic X",
  description:
    "Complete directory of all pages on the Med Clinic X portal including core solutions, clinical calculators, services, and career job openings.",
  alternates: {
    canonical: "https://medclinicx.com/html-sitemap",
  },
};

const sitemapData = [
  {
    title: "Core Pages",
    icon: <Compass className="w-5 h-5 text-brand-cyan" />,
    desc: "Main institutional and informational sections of our platform.",
    links: [
      { name: "Home Platform", href: "/" },
      { name: "About Company", href: "/about" },
      { name: "Contact & Booking", href: "/contact" },
      { name: "Live Showroom & Demo", href: "/demo" },
      { name: "FAQs & Support", href: "/faq" },
      { name: "Healthcare AI Blog", href: "/blog" },
    ],
  },
  {
    title: "AI Solutions",
    icon: <Layers className="w-5 h-5 text-brand-indigo" />,
    desc: "Intelligent clinical operating systems and automation pathways.",
    links: [
      { name: "AI Patient Portal", href: "/solutions/ai-patient-portal" },
      { name: "Smart Dental Portal", href: "/solutions/smart-dental-portal" },
      { name: "AI Medical Receptionist", href: "/solutions/ai-medical-receptionist" },
      { name: "Telehealth Consultation", href: "/solutions/telemedicine-consultation-platform" },
      { name: "Virtual Clinic OS", href: "/solutions/virtual-clinic-os" },
      { name: "AI Healthcare Navigator", href: "/solutions/ai-healthcare-navigator" },
      { name: "CareFlow AI Growth CRM", href: "/solutions/careflow-ai" },
      { name: "CareMatch AI Marketplace", href: "/solutions/carematch-ai" },
      { name: "Specialty Clinic Growth CRM", href: "/solutions/health-os" },
      { name: "IntakeFlow Onboarding", href: "/solutions/intake-flow" },
      { name: "MediSync AI Data Platform", href: "/solutions/medi-sync" },
    ],
  },
  {
    title: "Services",
    icon: <Activity className="w-5 h-5 text-brand-emerald" />,
    desc: "Full-service digital engineering tailored to modern practices.",
    links: [
      { name: "Healthcare Websites", href: "/services/healthcare-websites" },
      { name: "AI Healthcare Solutions", href: "/services/ai-healthcare-solutions" },
      { name: "Patient Portal Development", href: "/services/patient-portal-development" },
      { name: "Healthcare SaaS Development", href: "/services/healthcare-saas-development" },
      { name: "Telemedicine Solutions", href: "/services/telemedicine-solutions" },
      { name: "Healthcare Automation", href: "/services/healthcare-automation" },
      { name: "Mobile Healthcare Apps", href: "/services/mobile-healthcare-apps" },
      { name: "Healthcare SEO & Growth", href: "/services/healthcare-seo-growth" },
    ],
  },
  {
    title: "Clinical & Practice Calculators",
    icon: <Wrench className="w-5 h-5 text-amber-400" />,
    desc: "Pre-mapped dosing calculators, financial predictors, and scoring models.",
    links: [
      { name: "All Calculators Hub", href: "/calculators" },
      { name: "A1C Calculator", href: "/calculators/a1c-calculator" },
      { name: "Water Intake Calculator", href: "/calculators/water-intake-calculator" },
      { name: "Lean Body Mass Calculator", href: "/calculators/lean-body-mass-calculator" },
      { name: "Glasgow Coma Scale", href: "/calculators/glasgow-coma-scale-calculator" },
      { name: "QTc Calculator", href: "/calculators/qtc-calculator" },
      { name: "Anion Gap Calculator", href: "/calculators/anion-gap-calculator" },
      { name: "Invisalign Cost Calculator", href: "/calculators/invisalign-cost-calculator" },
      { name: "Dental Implant Cost", href: "/calculators/dental-implant-cost-calculator" },
    ],
  },
  {
    title: "Legal & Standards",
    icon: <Shield className="w-5 h-5 text-rose-400" />,
    desc: "Our commitments to security, privacy, and regulatory framework standards.",
    links: [
      { name: "HIPAA Compliance Protocol", href: "/hipaa" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
    ],
  },
];

export default function HtmlSitemap() {
  return (
    <div className="min-h-screen bg-brand-bg pt-10 pb-20 relative overflow-hidden">
      {/* Background ambient elements */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[140px] -z-10" />
      <div className="absolute bottom-10 left-1/4 w-[600px] h-[600px] bg-brand-indigo/5 rounded-full blur-[140px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center space-x-2 text-xs">
          <Link href="/" className="text-gray-500 hover:text-brand-cyan transition-colors">Home</Link>
          <span className="text-gray-600">/</span>
          <span className="text-white">HTML Sitemap</span>
        </div>

        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-cyan/15 rounded-full px-3.5 py-1 mb-5 border border-brand-cyan/20">
            <Compass className="w-3.5 h-3.5 text-brand-cyan" />
            <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-wider">Site Navigator</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight leading-tight">
            Med Clinic X Sitemap Directory
          </h1>
          <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
            Easily locate any section of our platform. From clinical portal demonstrations to software development services and HIPAA guidelines.
          </p>
        </div>

        {/* Grid of Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sitemapData.map((section, idx) => (
            <div 
              key={idx}
              className="glass-panel p-6 rounded-2xl border border-brand-border hover:border-brand-cyan/15 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center">
                    {section.icon}
                  </div>
                  <h3 className="font-display font-bold text-lg text-white">
                    {section.title}
                  </h3>
                </div>
                <p className="text-xs text-gray-400 mb-6 leading-relaxed font-normal">
                  {section.desc}
                </p>
                <ul className="space-y-3.5">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link 
                        href={link.href}
                        className="text-xs text-gray-300 hover:text-brand-cyan transition-colors flex items-center group font-medium"
                      >
                        <ArrowRight className="w-3 h-3 text-brand-cyan opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all mr-1.5" />
                        <span>{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* Careers Showcase block */}
          <div className="glass-panel p-6 rounded-2xl border border-brand-border hover:border-brand-cyan/15 transition-all flex flex-col justify-between lg:col-span-1">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-brand-cyan" />
                </div>
                <h3 className="font-display font-bold text-lg text-white">
                  Careers at Med Clinic X
                </h3>
              </div>
              <p className="text-xs text-gray-400 mb-6 leading-relaxed font-normal">
                Join our engineering, clinical informatics, and project management teams. We are hiring remotely across the US.
              </p>
              <div className="space-y-4">
                <Link 
                  href="/careers" 
                  className="inline-flex justify-center items-center gap-2 w-full bg-gradient-to-r from-brand-cyan to-brand-indigo hover:opacity-95 text-white font-bold text-xs py-3.5 px-4 rounded-xl transition-all shadow-md shadow-brand-cyan/10"
                >
                  <span>Browse All 56 Job Roles</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <div className="border-t border-brand-border/50 pt-4 text-[10px] text-gray-500 font-mono flex justify-between">
                  <span>Hiring Status: Active</span>
                  <span>Locations: Remote (US)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
