import { Metadata } from "next";
import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Healthcare Practice Growth Guides | Med Clinic X",
  description:
    "Explore our comprehensive, step-by-step guides on medical SEO, HIPAA compliance, healthcare technology integrations, and digital patient acquisition.",
  alternates: {
    canonical: "https://medclinicx.com/guide",
  },
  openGraph: {
    title: "Healthcare Practice Growth Guides | Med Clinic X",
    description:
      "Step-by-step handbooks on healthcare SEO, HIPAA compliance, patient portals, and clinic growth.",
    url: "https://medclinicx.com/guide",
    type: "website",
  },
};

export default function GuideIndexPage() {
  const guides = [
    {
      slug: "seo-for-doctors",
      title: "SEO for Doctors: The Ultimate Practice Growth Guide",
      excerpt:
        "Learn how to optimize your medical practice website, master local SEO & Google Maps, target patient-intent keywords, and attract new patient appointments sustainably.",
      readTime: "8 min read",
      category: "Marketing & SEO",
      status: "Published",
    },
    {
      slug: "hipaa-compliance-guide",
      title: "HIPAA Compliance Guide for Modern Digital Clinics",
      excerpt:
        "A comprehensive security checklist for protecting patient health information (PHI) across patient portals, telehealth platforms, and cloud databases.",
      readTime: "12 min read",
      category: "Compliance & Security",
      status: "Coming Soon",
    },
    {
      slug: "patient-portal-integration",
      title: "Choosing and Integrating the Perfect Patient Portal",
      excerpt:
        "An operational manual on connecting EMR/EHR systems with online scheduling, billing, and automated patient intake workflows to save administrative hours.",
      readTime: "10 min read",
      category: "Operations",
      status: "Coming Soon",
    },
    {
      slug: "ai-in-modern-healthcare",
      title: "AI in Medicine: Clinical LLMs and Reception Automation",
      excerpt:
        "Discover how medical practices are utilizing voice AI agents and large language models (LLMs) to handle incoming calls, schedule bookings, and chart patient notes.",
      readTime: "7 min read",
      category: "Healthcare AI",
      status: "Coming Soon",
    },
  ];

  return (
    <div className="bg-brand-bg min-h-screen text-gray-100 py-16 md:py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[140px] -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[600px] h-[600px] bg-brand-indigo/5 rounded-full blur-[140px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-brand-cyan/10 border border-brand-cyan/20 rounded-full px-4.5 py-1.5 mx-auto">
            <BookOpen className="w-4.5 h-4.5 text-brand-cyan" />
            <span className="text-xs font-semibold tracking-wide text-brand-cyan uppercase">Knowledge Hub</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-none">
            Practice Growth <span className="text-gradient-cyan-indigo">Guides</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Deep-dive manuals, actionable checklists, and industry handbooks written specifically to help healthcare providers, clinics, and health systems succeed online.
          </p>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {guides.map((guide, idx) => {
            const isPublished = guide.status === "Published";

            return (
              <div
                key={idx}
                className="glass-panel relative rounded-3xl p-8 border border-brand-border bg-[#040D18]/30 flex flex-col justify-between group overflow-hidden transition-all duration-300 hover:border-brand-border/80"
              >
                {/* Visual Glow behind card hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-cyan/0 via-transparent to-brand-indigo/0 group-hover:from-brand-cyan/5 group-hover:to-brand-indigo/5 transition-all duration-500 pointer-events-none" />
                
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-gray-500 uppercase tracking-widest">{guide.category}</span>
                    <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                      isPublished 
                        ? "bg-brand-cyan/10 border border-brand-cyan/25 text-brand-cyan" 
                        : "bg-gray-800/50 border border-gray-700/50 text-gray-400"
                    }`}>
                      {guide.status}
                    </span>
                  </div>

                  <div className="mb-4">
                    <h2 className="font-display font-bold text-xl md:text-2xl text-white group-hover:text-brand-cyan transition-colors line-clamp-2">
                      {guide.title}
                    </h2>
                  </div>

                  <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-6 line-clamp-3">
                    {guide.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-brand-border/30">
                  <span className="text-xs text-gray-500">{guide.readTime}</span>
                  {isPublished ? (
                    <Link
                      href={`/guide/${guide.slug}`}
                      className="inline-flex items-center space-x-2 text-sm font-semibold text-brand-cyan hover:text-brand-indigo transition-colors"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ) : (
                    <span className="text-xs text-gray-600 italic">Coming Soon</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
