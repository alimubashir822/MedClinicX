"use client";

import Link from "next/link";
import {
  Globe,
  Search,
  Zap,
  TrendingUp,
  Calendar,
  Lock,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function WebsiteDevelopment() {
  const offerings = [
    {
      title: "Doctor Websites",
      desc: "Clean, professional, single-page profile or multi-page sites designed to showcase credentials, patient reviews, and specialties.",
    },
    {
      title: "Clinic Websites",
      desc: "Dynamic sites for multi-specialty regional clinics with booking plugins, intake flows, and physician bio directories.",
    },
    {
      title: "Hospital Systems",
      desc: "Robust enterprise portals featuring campus maps, emergency service directories, multi-language support, and Patient Portal integrations.",
    },
  ];

  const valueProps = [
    {
      icon: <Search className="w-5 h-5 text-brand-cyan" />,
      title: "Built-In SEO Optimization",
      desc: "All sites compile to static HTML, achieving near-perfect Lighthouse scores. Configured for local schema SEO to rank high on regional searches.",
    },
    {
      icon: <Zap className="w-5 h-5 text-brand-cyan" />,
      title: "Conversion Optimization",
      desc: "Optimized user experience layouts (clear headers, float CTAs, and frictionless appointment booking) to turn page visitors into patients.",
    },
    {
      icon: <Calendar className="w-5 h-5 text-brand-cyan" />,
      title: "Booking Integrations",
      desc: "Link directly to Med Clinic X AI Receptionist, Zocdoc, or local EHR scheduling applications via seamless, secure APIs.",
    },
    {
      icon: <Lock className="w-5 h-5 text-brand-cyan" />,
      title: "Compliant & Secure",
      desc: "Fully encrypted forms, secure database connections, accessibility compliance (WCAG AA), and fast CDN delivery.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 relative">
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-brand-cyan/5 rounded-full blur-[100px] -z-10 animate-pulse-slow" />

      {/* Title Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center space-x-2 bg-brand-cyan/15 rounded-full px-3 py-1 mb-6">
          <Globe className="w-4 h-4 text-brand-cyan" />
          <span className="text-xs font-semibold text-brand-cyan uppercase">Web Engineering</span>
        </div>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
          Modern Healthcare Websites Built For Growth
        </h1>
        <p className="mt-4 text-base text-gray-400 leading-relaxed">
          We combine cutting-edge web design, search engine optimization, and clinical integrations to build beautiful, high-converting digital doors for your practice.
        </p>
      </div>

      {/* Target Solutions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {offerings.map((item, idx) => (
          <div key={idx} className="glass-panel p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <h3 className="font-display font-bold text-xl text-white mb-3">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">{item.desc}</p>
            </div>
            <div className="text-xs font-semibold text-brand-cyan flex items-center space-x-1">
              <span>Optimized Layouts Standard</span>
              <Sparkles className="w-3.5 h-3.5" />
            </div>
          </div>
        ))}
      </div>

      {/* Why MedClinicX Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-display font-bold text-3xl text-white">
            High Performance Digital Practice Operations
          </h2>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            A website is more than just static brochureware. It is the beginning of the patient journey. Our websites are structurally optimized to load instantly, rank at the top of local search listings, and lead patients directly to scheduling forms.
          </p>

          <div className="mt-8 space-y-6">
            {valueProps.map((prop, idx) => (
              <div key={idx} className="flex space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center">
                  {prop.icon}
                </div>
                <div>
                  <h4 className="text-white font-semibold">{prop.title}</h4>
                  <p className="text-xs md:text-sm text-gray-400 leading-relaxed mt-1">{prop.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Callout Audit Box */}
        <div className="glass-panel p-8 rounded-3xl relative overflow-hidden bg-gradient-cyber flex flex-col justify-between aspect-square lg:aspect-auto lg:h-[450px]">
          <div className="absolute top-0 right-0 w-48 h-48 bg-brand-cyan/15 rounded-full blur-[60px]" />
          <div>
            <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center mb-6">
              <TrendingUp className="w-6 h-6 text-brand-cyan" />
            </div>
            <h3 className="font-display font-bold text-2xl text-white mb-3">Is Your Website Leaking Patients?</h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-6">
              A single slow page load or confusing booking buttons can cut your new patient bookings by up to 40%. Run our diagnostic scan tool to see your practice&apos;s SEO and conversion performance.
            </p>
          </div>
          <div className="mt-auto">
            <Link
              href="/demo?tab=audit"
              className="inline-flex items-center space-x-2 bg-brand-cyan hover:bg-brand-cyan/90 text-brand-bg font-bold px-6 py-3 rounded-xl shadow-lg active:scale-[0.98] transition-all"
            >
              <span>Run AI Website Audit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
