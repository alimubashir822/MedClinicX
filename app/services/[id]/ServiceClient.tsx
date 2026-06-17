"use client";

import Link from "next/link";
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
  Sparkles,
  CheckCircle2
} from "lucide-react";
import { ServiceDetail } from "../servicesData";

const iconMap = {
  Laptop: <Laptop className="w-6 h-6 text-brand-cyan" />,
  Brain: <Brain className="w-6 h-6 text-brand-cyan" />,
  LayoutDashboard: <LayoutDashboard className="w-6 h-6 text-brand-cyan" />,
  Server: <Server className="w-6 h-6 text-brand-cyan" />,
  Video: <Video className="w-6 h-6 text-brand-cyan" />,
  Clock: <Clock className="w-6 h-6 text-brand-cyan" />,
  Smartphone: <Smartphone className="w-6 h-6 text-brand-cyan" />,
  Search: <Search className="w-6 h-6 text-brand-cyan" />
};

interface ServiceClientProps {
  service: ServiceDetail;
}

export default function ServiceClient({ service }: ServiceClientProps) {
  const IconComponent = iconMap[service.iconName] || <Laptop className="w-6 h-6 text-brand-cyan" />;

  return (
    <div className="max-w-7xl mx-auto px-6 py-6 md:py-12 relative">
      {/* Background glow effects */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-brand-cyan/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute top-[600px] left-1/4 w-[400px] h-[400px] bg-brand-indigo/5 rounded-full blur-[100px] -z-10" />

      {/* Back button & Breadcrumb */}
      <div className="mb-8 flex items-center justify-between">
        <Link
          href="/services"
          className="inline-flex items-center space-x-2 text-xs font-semibold text-gray-500 hover:text-white transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <span>Back to Services</span>
        </Link>
        <nav className="flex items-center space-x-2 text-xs text-gray-500 font-medium">
          <Link href="/" className="hover:text-brand-cyan transition-colors">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-brand-cyan transition-colors">Services</Link>
          <span>/</span>
          <span className="text-gray-300 font-semibold">{service.title}</span>
        </nav>
      </div>

      {/* Two Column Hero / Header Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
        {/* Left Side Content */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-8 space-y-6"
        >
          <div className="inline-flex items-center space-x-2 bg-brand-cyan/15 rounded-full px-3.5 py-1">
            <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full animate-pulse mr-1" />
            <span className="text-xs font-bold text-brand-cyan uppercase tracking-wider">{service.category}</span>
          </div>

          <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
            {service.headline}
          </h1>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            {service.summary}
          </p>
          
          <div className="pt-2 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-brand-cyan to-brand-indigo hover:from-brand-cyan/95 hover:to-brand-indigo/95 text-white font-bold text-sm px-8 py-4 rounded-xl shadow-lg shadow-brand-cyan/15 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer text-center"
            >
              <span>Consult with our Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center justify-center space-x-2 glass-panel border border-brand-border hover:border-brand-cyan/35 text-xs sm:text-sm font-semibold text-gray-300 hover:text-white px-8 py-4 rounded-xl hover:scale-[1.01] transition-all cursor-pointer text-center"
            >
              See Live Systems
            </Link>
          </div>
        </motion.div>

        {/* Right Side: Key Statistic Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-4"
        >
          <div className="glass-panel p-8 rounded-3xl border border-brand-cyan/20 bg-brand-cyan/5 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute -top-12 -right-12 w-28 h-28 bg-brand-cyan/15 rounded-full blur-[40px] pointer-events-none" />
            <div className="w-12 h-12 rounded-2xl bg-brand-cyan/15 border border-brand-cyan/25 flex items-center justify-center mx-auto mb-5">
              {IconComponent}
            </div>
            <p className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
              {service.statValue}
            </p>
            <p className="text-xs md:text-sm text-gray-400 mt-2.5 leading-snug font-medium max-w-[200px] mx-auto">
              {service.statLabel}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Value Propositions Grid (3 Columns) */}
      <section className="mb-20">
        <h2 className="font-display font-bold text-2xl text-white mb-8 flex items-center gap-2.5">
          <span className="w-1.5 h-6 bg-brand-cyan rounded-md inline-block" />
          <span>Core Capabilities & Value</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {service.valueProps.map((prop, idx) => (
            <div 
              key={idx} 
              className="glass-panel p-6 rounded-2xl border border-brand-border flex flex-col justify-between hover:border-brand-cyan/10 transition-colors"
            >
              <div>
                <div className="w-9 h-9 rounded-lg bg-brand-cyan/5 border border-brand-cyan/15 flex items-center justify-center mb-4.5">
                  <CheckCircle2 className="w-4.5 h-4.5 text-brand-cyan" />
                </div>
                <h3 className="font-display font-bold text-base text-white mb-2.5">{prop.title}</h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{prop.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Specifications and Comparison Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
        {/* Left Side: Performance Metrics Table */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="font-display font-bold text-2xl text-white flex items-center gap-2.5">
            <span className="w-1.5 h-6 bg-brand-cyan rounded-md inline-block" />
            <span>Impact Analysis</span>
          </h2>
          <div className="overflow-x-auto rounded-xl border border-brand-border shadow-lg">
            <table className="min-w-full divide-y divide-brand-border bg-brand-card">
              <thead className="bg-brand-bg/40">
                <tr>
                  <th className="px-4.5 py-3 text-left text-xs font-bold text-gray-200 uppercase tracking-wider font-display">Performance Metric</th>
                  <th className="px-4.5 py-3 text-left text-xs font-bold text-gray-200 uppercase tracking-wider font-display">Traditional Setup</th>
                  <th className="px-4.5 py-3 text-left text-xs font-bold text-gray-200 uppercase tracking-wider font-display text-brand-cyan">Med Clinic X</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-border text-xs sm:text-sm text-gray-300">
                {service.comparison.map((row, i) => (
                  <tr key={i} className="hover:bg-brand-cyan/5 transition-colors">
                    <td className="px-4.5 py-3.5 font-medium border-t border-brand-border">{row.metric}</td>
                    <td className="px-4.5 py-3.5 font-medium text-gray-400 border-t border-brand-border">{row.traditional}</td>
                    <td className="px-4.5 py-3.5 font-bold text-brand-cyan border-t border-brand-border">{row.medclinicx}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Side: Mock Technical Code Guide */}
        <div className="lg:col-span-5 space-y-6">
          <h2 className="font-display font-bold text-2xl text-white flex items-center gap-2.5">
            <span className="w-1.5 h-6 bg-brand-cyan rounded-md inline-block" />
            <span>IT Integration Brief</span>
          </h2>
          <div className="rounded-xl overflow-hidden border border-brand-border shadow-xl">
            <div className="bg-brand-bg px-4 py-2 border-b border-brand-border flex items-center justify-between text-xs text-gray-500 font-mono">
              <span>{service.techHighlight.title}</span>
              <span className="uppercase text-[9px] font-bold bg-brand-border px-2 py-0.5 rounded text-gray-400">
                {service.techHighlight.language}
              </span>
            </div>
            <pre className="p-4 bg-[#050B14] overflow-x-auto text-[12px] font-mono text-cyan-400/90 leading-relaxed">
              <code>{service.techHighlight.code}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Dynamic SEO Section (Breadcrumbs schemas, etc. injected in parent) */}
      
      {/* Final Service Call to Action Card */}
      <section className="relative rounded-3xl overflow-hidden p-8 sm:p-12 md:p-16 border border-brand-cyan/25 bg-gradient-cyber shadow-2xl shadow-brand-cyan/5 text-center max-w-5xl mx-auto">
        <div className="absolute -top-12 -left-12 w-32 h-32 bg-brand-cyan/10 rounded-full blur-[40px] pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-brand-indigo/10 rounded-full blur-[40px] pointer-events-none" />

        <div className="max-w-2xl mx-auto space-y-6 relative">
          <div className="inline-flex items-center space-x-2 bg-brand-cyan/15 rounded-full px-3 py-1 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-brand-cyan animate-pulse" />
            <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-wider">Ready to Get Started?</span>
          </div>

          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight leading-tight">
            Scale Your Clinic’s {service.title} Today
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-gray-400 leading-relaxed font-normal">
            Consult with our digital health engineers to map out schedules, audit compliance parameters, and integrate your software stack.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-bold text-sm px-7 py-3.5 rounded-xl shadow-lg shadow-brand-cyan/15 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
            >
              <span>Schedule Discovery Call</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center glass-panel hover:bg-brand-cyan/10 border border-brand-border hover:border-brand-cyan/25 text-xs sm:text-sm font-semibold text-gray-300 hover:text-white px-7 py-3.5 rounded-xl transition-all cursor-pointer"
            >
              All Services Directory
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
