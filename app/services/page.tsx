"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Laptop, 
  Brain, 
  LayoutDashboard, 
  Server, 
  Video, 
  Clock, 
  Smartphone, 
  Search, 
  ArrowRight, 
  Sparkles, 
  Activity 
} from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  category: "Development" | "AI & Automation" | "Care Delivery" | "Growth & SEO";
  icon: React.ReactNode;
  desc: string;
  href: string;
  badge?: string;
  features: string[];
}

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Development", "AI & Automation", "Care Delivery", "Growth & SEO"];

  const services: ServiceItem[] = [
    {
      id: "healthcare-websites",
      title: "Healthcare Websites",
      category: "Development",
      icon: <Laptop className="w-6 h-6 text-brand-cyan" />,
      desc: "Fast, responsive clinic and hospital websites built to load instantly, rank locally on Google Maps, and link directly to EHR booking schedules.",
      href: "/services/healthcare-websites",
      badge: "Crucial Core",
      features: ["Custom Physician Directories", "EHR Scheduling Plugins", "HIPAA Compliant Contact Forms"]
    },
    {
      id: "ai-healthcare-solutions",
      title: "AI Healthcare Solutions",
      category: "AI & Automation",
      icon: <Brain className="w-6 h-6 text-brand-cyan" />,
      desc: "Fine-tuned clinical Large Language Models and automated conversational receptionists designed to safely triage symptoms and summarize patient history.",
      href: "/services/ai-healthcare-solutions",
      badge: "Trending Tech",
      features: ["Clinical LLM Integrations", "Conversational Triage Bots", "Pre-Appointment Doctor Briefs"]
    },
    {
      id: "patient-portal-development",
      title: "Patient Portal Development",
      category: "Development",
      icon: <LayoutDashboard className="w-6 h-6 text-brand-cyan" />,
      desc: "Secure patient-facing dashboards offering secure messaging, 3D CBCT/X-ray scans storage, prescription details, and installment payment ledgers.",
      href: "/services/patient-portal-development",
      badge: "High Adoption",
      features: ["FHIR Medical Records Sync", "Secure Clinical Chat", "Stripe Installments Billing"]
    },
    {
      id: "healthcare-saas-development",
      title: "Healthcare SaaS Development",
      category: "Development",
      icon: <Server className="w-6 h-6 text-brand-cyan" />,
      desc: "Full-stack multi-tenant web applications, specialized clinical analytics portals, and database wrapper software for healthcare networks.",
      href: "/services/healthcare-saas-development",
      badge: "Enterprise",
      features: ["Multi-Tenant DB Partitioning", "REST & GraphQL FHIR APIs", "ISO 27001 Data Safeguards"]
    },
    {
      id: "telemedicine-solutions",
      title: "Telemedicine Solutions",
      category: "Care Delivery",
      icon: <Video className="w-6 h-6 text-brand-cyan" />,
      desc: "Secure WebRTC visual consultation gateways connecting patients directly to clinics with live chat logs, payment processing, and document portals.",
      href: "/services/telemedicine-solutions",
      badge: "Remote Care",
      features: ["WebRTC Encrypted Streaming", "Vitals Telemetry Aggregators", "Digital Prescription Sign-offs"]
    },
    {
      id: "healthcare-automation",
      title: "Healthcare Automation",
      category: "AI & Automation",
      icon: <Clock className="w-6 h-6 text-brand-cyan" />,
      desc: "Autopilot scheduling engines that analyze cancellation probabilities, send automated reminders, and fill empty appointment blocks instantly.",
      href: "/services/healthcare-automation",
      features: ["No-Show Risk Machine Learning", "Automated Hygiene Recalls", "Multi-Channel SMS/Email Alerts"]
    },
    {
      id: "mobile-healthcare-apps",
      title: "Mobile Healthcare Apps",
      category: "Development",
      icon: <Smartphone className="w-6 h-6 text-brand-cyan" />,
      desc: "Progressive Web Apps and native mobile structures configured to cache records, enable biometric sign-in, and integrate with telemetry sensors.",
      href: "/services/mobile-healthcare-apps",
      features: ["Offline Cache Syncing", "iOS & Android Layouts", "Bluetooth Vital Monitor Ingestion"]
    },
    {
      id: "healthcare-seo-growth",
      title: "Healthcare SEO & Growth",
      category: "Growth & SEO",
      icon: <Search className="w-6 h-6 text-brand-cyan" />,
      desc: "Search engine visibility roadmaps optimized for local search maps, structured clinical schemas, review acquisition workflows, and lead funnels.",
      href: "/services/healthcare-seo-growth",
      badge: "Practice ROI",
      features: ["Local Pack Ranking Audits", "Review Loop Automations", "JSON-LD Clinic Schemas"]
    }
  ];

  const filteredServices = services.filter((srv) => {
    return selectedCategory === "All" || srv.category === selectedCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 relative">
      {/* Background ambient elements */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-brand-cyan/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-brand-indigo/5 rounded-full blur-[100px] -z-10" />

      {/* Header Title Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center space-x-2 bg-brand-cyan/15 rounded-full px-3.5 py-1 mb-6">
          <Activity className="w-4 h-4 text-brand-cyan" />
          <span className="text-xs font-semibold text-brand-cyan uppercase tracking-wider">Our Services</span>
        </div>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
          Specialized Digital Solutions For Modern Practice Growth
        </h1>
        <p className="mt-5 text-gray-400 text-sm sm:text-base leading-relaxed">
          From lighting-fast clinical websites and dynamic patient portals to custom AI receptionists and telemedicine gateways, we build B2B healthcare software that delivers metrics-driven value.
        </p>
      </div>

      {/* Filtering Navigation Tabs */}
      <div className="flex flex-wrap gap-2.5 justify-center items-center mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2.5 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
              selectedCategory === cat
                ? "bg-brand-cyan text-brand-bg border-brand-cyan shadow-md shadow-brand-cyan/15 font-extrabold"
                : "glass-panel text-gray-400 hover:text-white border-brand-border hover:border-brand-border/60"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Services Grid Display */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
        <AnimatePresence mode="popLayout">
          {filteredServices.map((srv) => (
            <motion.article
              key={srv.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="glass-panel p-6 rounded-2xl border border-brand-border flex flex-col justify-between hover:border-brand-cyan/20 group transition-all"
            >
              <div>
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center">
                    {srv.icon}
                  </div>
                  {srv.badge && (
                    <span className="text-[9px] font-bold text-brand-cyan uppercase tracking-wider bg-brand-cyan/10 border border-brand-cyan/15 px-2.5 py-0.5 rounded-full">
                      {srv.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-display font-bold text-lg text-white leading-snug mt-5 group-hover:text-brand-cyan transition-colors">
                  {srv.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed mt-3.5">
                  {srv.desc}
                </p>

                {/* Sub Features Bullet list */}
                <ul className="mt-5 space-y-2 text-[10px] text-gray-400 font-medium border-t border-brand-border/50 pt-4">
                  {srv.features.map((feat, i) => (
                    <li key={i} className="flex items-center space-x-1.5">
                      <span className="w-1 h-1 rounded-full bg-brand-cyan shrink-0" />
                      <span className="truncate">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-3 border-t border-brand-border/60">
                <Link
                  href={srv.href}
                  className="text-xs font-bold text-brand-cyan hover:text-white transition-colors flex items-center space-x-1.5 self-start cursor-pointer group-hover:translate-x-0.5"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Trust Call to Action */}
      <section className="relative rounded-3xl overflow-hidden p-8 sm:p-12 md:p-16 border border-brand-cyan/25 bg-gradient-cyber shadow-2xl shadow-brand-cyan/5 text-center max-w-5xl mx-auto">
        <div className="absolute -top-12 -left-12 w-32 h-32 bg-brand-cyan/10 rounded-full blur-[40px] pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-brand-indigo/10 rounded-full blur-[40px] pointer-events-none" />

        <div className="max-w-2xl mx-auto space-y-6 relative">
          <div className="inline-flex items-center space-x-2 bg-brand-cyan/15 rounded-full px-3 py-1 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-brand-cyan animate-pulse" />
            <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-wider">Start Optimizing</span>
          </div>

          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight leading-tight">
            Not Sure Which Solution Fits Your Clinic?
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-gray-400 leading-relaxed font-normal">
            Book a discovery call with our digital health engineering specialists to audit your current platform, calculate ROI, and plan your software rollout.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-bold text-sm px-7 py-3.5 rounded-xl shadow-lg shadow-brand-cyan/15 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href="/demo"
              className="w-full sm:w-auto inline-flex items-center justify-center glass-panel hover:bg-brand-cyan/10 border border-brand-border hover:border-brand-cyan/25 text-xs sm:text-sm font-semibold text-gray-300 hover:text-white px-7 py-3.5 rounded-xl transition-all cursor-pointer"
            >
              See Live Demos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
