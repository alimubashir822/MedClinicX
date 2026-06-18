"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Laptop,
  Brain,
  LayoutDashboard,
  Server,
  Video,
  Clock,
  Smartphone,
  Search,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { ServiceDetail } from "../servicesData";

const iconMap = {
  Laptop: <Laptop className="w-5 h-5 text-brand-cyan" />,
  Brain: <Brain className="w-5 h-5 text-brand-cyan" />,
  LayoutDashboard: <LayoutDashboard className="w-5 h-5 text-brand-cyan" />,
  Server: <Server className="w-5 h-5 text-brand-cyan" />,
  Video: <Video className="w-5 h-5 text-brand-cyan" />,
  Clock: <Clock className="w-5 h-5 text-brand-cyan" />,
  Smartphone: <Smartphone className="w-5 h-5 text-brand-cyan" />,
  Search: <Search className="w-5 h-5 text-brand-cyan" />,
};

// Map service id → public image path
const serviceImageMap: Record<string, string> = {
  "healthcare-websites": "/service_healthcare_websites.png",
  "ai-healthcare-solutions": "/service_ai_healthcare.png",
  "patient-portal-development": "/service_patient_portal.png",
  "healthcare-saas-development": "/service_healthcare_saas.png",
  "telemedicine-solutions": "/service_telemedicine.png",
  "healthcare-automation": "/service_healthcare_automation.png",
  "mobile-healthcare-apps": "/service_mobile_apps.png",
  "healthcare-seo-growth": "/service_healthcare_seo.png",
};

interface ServiceClientProps {
  service: ServiceDetail;
}

export default function ServiceClient({ service }: ServiceClientProps) {
  const IconComponent = iconMap[service.iconName] || <Laptop className="w-5 h-5 text-brand-cyan" />;
  const heroImage = serviceImageMap[service.id];

  return (
    <div className="max-w-5xl mx-auto px-5 py-8 md:py-14 relative">
      {/* Subtle ambient glows */}
      <div className="fixed top-0 right-1/4 w-[400px] h-[400px] bg-brand-cyan/4 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="fixed bottom-0 left-1/4 w-[400px] h-[400px] bg-brand-indigo/4 rounded-full blur-[120px] -z-10 pointer-events-none" />

      {/* Back / Breadcrumb row */}
      <div className="mb-8 flex items-center justify-between">
        <Link
          href="/services"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
          Back to Services
        </Link>
        <nav className="hidden sm:flex items-center gap-1.5 text-xs text-gray-500 font-medium">
          <Link href="/" className="hover:text-brand-cyan transition-colors">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-brand-cyan transition-colors">Services</Link>
          <span>/</span>
          <span className="text-gray-300">{service.title}</span>
        </nav>
      </div>

      {/* ── Hero Section ── */}
      <div className="glass-panel rounded-2xl border border-brand-border overflow-hidden mb-10">
        {/* Service image */}
        {heroImage && (
          <div className="relative w-full h-56 sm:h-72 overflow-hidden bg-brand-bg/60">
            <Image
              src={heroImage}
              alt={service.title}
              fill
              className="object-cover opacity-85"
              priority
            />
            {/* Gradient overlay so text reads well */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-brand-card/40 to-transparent" />

            {/* Key stat chip on image */}
            <div className="absolute bottom-4 right-4 bg-brand-bg/80 backdrop-blur-sm border border-brand-cyan/25 rounded-xl px-4 py-2 text-right">
              <p className="font-display font-extrabold text-2xl text-brand-cyan leading-none">{service.statValue}</p>
              <p className="text-[10px] text-gray-400 font-medium mt-0.5">{service.statLabel}</p>
            </div>
          </div>
        )}

        {/* Text block below image */}
        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center shrink-0">
              {IconComponent}
            </div>
            <span className="text-xs font-bold text-brand-cyan uppercase tracking-widest bg-brand-cyan/10 border border-brand-cyan/20 px-3 py-1 rounded-full">
              {service.category}
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight leading-tight mb-3"
          >
            {service.headline}
          </motion.h1>

          <p className="text-sm text-gray-400 leading-relaxed max-w-3xl mb-6">
            {service.summary}
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-bold text-sm px-6 py-3 rounded-xl shadow-lg shadow-brand-cyan/15 hover:scale-[1.01] active:scale-[0.99] transition-all"
            >
              Consult with our Team
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center justify-center glass-panel border border-brand-border hover:border-brand-cyan/30 text-sm font-semibold text-gray-300 hover:text-white px-6 py-3 rounded-xl transition-all"
            >
              See Live Systems
            </Link>
          </div>
        </div>
      </div>

      {/* ── Core Capabilities ── */}
      <section className="mb-10">
        <h2 className="font-display font-bold text-xl text-white mb-5 flex items-center gap-2.5">
          <span className="w-1 h-5 bg-brand-cyan rounded-full inline-block" />
          Core Capabilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {service.valueProps.map((prop, idx) => (
            <div
              key={idx}
              className="glass-panel p-5 rounded-xl border border-brand-border hover:border-brand-cyan/15 transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-brand-cyan/8 border border-brand-cyan/15 flex items-center justify-center mb-3">
                <CheckCircle2 className="w-4 h-4 text-brand-cyan" />
              </div>
              <h3 className="font-display font-bold text-sm text-white mb-1.5">{prop.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{prop.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Impact Analysis + Code Snippet ── */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">
        {/* Comparison table */}
        <div className="lg:col-span-7">
          <h2 className="font-display font-bold text-xl text-white mb-5 flex items-center gap-2.5">
            <span className="w-1 h-5 bg-brand-cyan rounded-full inline-block" />
            Impact Analysis
          </h2>
          <div className="rounded-xl border border-brand-border overflow-hidden">
            <table className="min-w-full divide-y divide-brand-border bg-brand-card text-xs">
              <thead className="bg-brand-bg/50">
                <tr>
                  <th className="px-4 py-3 text-left font-bold text-gray-300 uppercase tracking-wider">Metric</th>
                  <th className="px-4 py-3 text-left font-bold text-gray-300 uppercase tracking-wider">Traditional</th>
                  <th className="px-4 py-3 text-left font-bold text-brand-cyan uppercase tracking-wider">Med Clinic X</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-border text-gray-300">
                {service.comparison.map((row, i) => (
                  <tr key={i} className="hover:bg-brand-cyan/4 transition-colors">
                    <td className="px-4 py-3 font-semibold text-white">{row.metric}</td>
                    <td className="px-4 py-3 text-gray-400">{row.traditional}</td>
                    <td className="px-4 py-3 font-bold text-brand-cyan">{row.medclinicx}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Code snippet */}
        <div className="lg:col-span-5">
          <h2 className="font-display font-bold text-xl text-white mb-5 flex items-center gap-2.5">
            <span className="w-1 h-5 bg-brand-cyan rounded-full inline-block" />
            IT Integration Brief
          </h2>
          <div className="rounded-xl border border-brand-border overflow-hidden">
            <div className="bg-brand-bg px-4 py-2.5 border-b border-brand-border flex items-center justify-between text-xs text-gray-500 font-mono">
              <span className="truncate mr-2">{service.techHighlight.title}</span>
              <span className="uppercase text-[9px] font-bold bg-brand-border px-2 py-0.5 rounded text-gray-400 shrink-0">
                {service.techHighlight.language}
              </span>
            </div>
            <pre className="p-4 bg-[#040D18] overflow-x-auto text-[11.5px] font-mono text-cyan-400/90 leading-relaxed">
              <code>{service.techHighlight.code}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="relative rounded-2xl overflow-hidden p-8 sm:p-10 border border-brand-cyan/20 bg-gradient-cyber text-center">
        <div className="absolute -top-12 -left-12 w-32 h-32 bg-brand-cyan/8 rounded-full blur-[50px] pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-brand-indigo/8 rounded-full blur-[50px] pointer-events-none" />

        <div className="relative max-w-xl mx-auto space-y-4">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
            Scale Your Clinic&apos;s {service.title} Today
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Consult with our digital health engineers to map out schedules, audit compliance parameters, and integrate your software stack.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-bold text-sm px-6 py-3 rounded-xl shadow-lg shadow-brand-cyan/15 hover:scale-[1.01] active:scale-[0.99] transition-all"
            >
              Schedule Discovery Call
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center glass-panel border border-brand-border hover:border-brand-cyan/25 text-sm font-semibold text-gray-300 hover:text-white px-6 py-3 rounded-xl transition-all"
            >
              All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
