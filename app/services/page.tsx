"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
  Activity,
  CheckCircle,
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
  image: string;
  stat: string;
  statLabel: string;
}

const services: ServiceItem[] = [
  {
    id: "healthcare-websites",
    title: "Healthcare Websites",
    category: "Development",
    icon: <Laptop className="w-5 h-5 text-brand-cyan" />,
    desc: "Fast, responsive clinic and hospital websites built to load instantly, rank locally on Google Maps, and link directly to EHR booking schedules.",
    href: "/services/healthcare-websites",
    badge: "Crucial Core",
    features: ["Custom Physician Directories", "EHR Scheduling Plugins", "HIPAA Compliant Contact Forms"],
    image: "/service_healthcare_websites.png",
    stat: "99/100",
    statLabel: "Lighthouse Score",
  },
  {
    id: "ai-healthcare-solutions",
    title: "AI Healthcare Solutions",
    category: "AI & Automation",
    icon: <Brain className="w-5 h-5 text-brand-cyan" />,
    desc: "Fine-tuned clinical Large Language Models and automated conversational receptionists designed to safely triage symptoms and summarize patient history.",
    href: "/services/ai-healthcare-solutions",
    badge: "Trending Tech",
    features: ["Clinical LLM Integrations", "Conversational Triage Bots", "Pre-Appointment Doctor Briefs"],
    image: "/service_ai_healthcare.png",
    stat: "74%",
    statLabel: "Reduced Response Delay",
  },
  {
    id: "patient-portal-development",
    title: "Patient Portal Development",
    category: "Development",
    icon: <LayoutDashboard className="w-5 h-5 text-brand-cyan" />,
    desc: "Secure patient-facing dashboards offering secure messaging, 3D CBCT/X-ray scans storage, prescription details, and installment payment ledgers.",
    href: "/services/patient-portal-development",
    badge: "High Adoption",
    features: ["FHIR Medical Records Sync", "Secure Clinical Chat", "Stripe Installments Billing"],
    image: "/service_patient_portal.png",
    stat: "82%",
    statLabel: "Patient Activation Rate",
  },
  {
    id: "healthcare-saas-development",
    title: "Healthcare SaaS Development",
    category: "Development",
    icon: <Server className="w-5 h-5 text-brand-cyan" />,
    desc: "Full-stack multi-tenant web applications, specialized clinical analytics portals, and database wrapper software for healthcare networks.",
    href: "/services/healthcare-saas-development",
    badge: "Enterprise",
    features: ["Multi-Tenant DB Partitioning", "REST & GraphQL FHIR APIs", "ISO 27001 Data Safeguards"],
    image: "/service_healthcare_saas.png",
    stat: "100%",
    statLabel: "EHR API Compliance",
  },
  {
    id: "telemedicine-solutions",
    title: "Telemedicine Solutions",
    category: "Care Delivery",
    icon: <Video className="w-5 h-5 text-brand-cyan" />,
    desc: "Secure WebRTC visual consultation gateways connecting patients directly to clinics with live chat logs, payment processing, and document portals.",
    href: "/services/telemedicine-solutions",
    badge: "Remote Care",
    features: ["WebRTC Encrypted Streaming", "Vitals Telemetry Aggregators", "Digital Prescription Sign-offs"],
    image: "/service_telemedicine.png",
    stat: "<150ms",
    statLabel: "Video Gateway Latency",
  },
  {
    id: "healthcare-automation",
    title: "Healthcare Automation",
    category: "AI & Automation",
    icon: <Clock className="w-5 h-5 text-brand-cyan" />,
    desc: "Autopilot scheduling engines that analyze cancellation probabilities, send automated reminders, and fill empty appointment blocks instantly.",
    href: "/services/healthcare-automation",
    features: ["No-Show Risk Machine Learning", "Automated Hygiene Recalls", "Multi-Channel SMS/Email Alerts"],
    image: "/service_healthcare_automation.png",
    stat: "68%",
    statLabel: "Fewer No-Shows",
  },
  {
    id: "mobile-healthcare-apps",
    title: "Mobile Healthcare Apps",
    category: "Development",
    icon: <Smartphone className="w-5 h-5 text-brand-cyan" />,
    desc: "Progressive Web Apps and native mobile structures configured to cache records, enable biometric sign-in, and integrate with telemetry sensors.",
    href: "/services/mobile-healthcare-apps",
    features: ["Offline Cache Syncing", "iOS & Android Layouts", "Bluetooth Vital Monitor Ingestion"],
    image: "/service_mobile_apps.png",
    stat: "4.8/5",
    statLabel: "App Store Rating",
  },
  {
    id: "healthcare-seo-growth",
    title: "Healthcare SEO & Growth",
    category: "Growth & SEO",
    icon: <Search className="w-5 h-5 text-brand-cyan" />,
    desc: "Search engine visibility roadmaps optimized for local search maps, structured clinical schemas, review acquisition workflows, and lead funnels.",
    href: "/services/healthcare-seo-growth",
    badge: "Practice ROI",
    features: ["Local Pack Ranking Audits", "Review Loop Automations", "JSON-LD Clinic Schemas"],
    image: "/service_healthcare_seo.png",
    stat: "3.2x",
    statLabel: "Organic Lead Increase",
  },
];

const categories = ["All", "Development", "AI & Automation", "Care Delivery", "Growth & SEO"];

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredServices = services.filter(
    (srv) => selectedCategory === "All" || srv.category === selectedCategory
  );

  return (
    <div className="max-w-6xl mx-auto px-5 py-12 md:py-20">
      {/* Background glows */}
      <div className="fixed top-0 right-1/4 w-[500px] h-[500px] bg-brand-cyan/4 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="fixed bottom-0 left-1/4 w-[500px] h-[500px] bg-brand-indigo/4 rounded-full blur-[120px] -z-10 pointer-events-none" />

      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 bg-brand-cyan/10 border border-brand-cyan/20 rounded-full px-4 py-1.5 mb-6">
          <Activity className="w-3.5 h-3.5 text-brand-cyan" />
          <span className="text-[11px] font-bold text-brand-cyan uppercase tracking-widest">Our Services</span>
        </div>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight leading-tight mb-4">
          Digital Solutions for Modern Healthcare
        </h1>
        <p className="text-gray-400 text-sm leading-relaxed">
          From AI-powered triage bots and patient portals to clinic websites and telemedicine gateways — purpose-built software that drives measurable practice growth.
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 justify-center mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
              selectedCategory === cat
                ? "bg-brand-cyan text-brand-bg border-brand-cyan shadow-sm shadow-brand-cyan/20"
                : "glass-panel text-gray-400 hover:text-white border-brand-border hover:border-brand-border/60"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Services List — alternating layout */}
      <motion.div layout className="space-y-6 mb-20">
        <AnimatePresence mode="popLayout">
          {filteredServices.map((srv, idx) => (
            <motion.article
              key={srv.id}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, delay: idx * 0.03 }}
              className="glass-panel rounded-2xl border border-brand-border hover:border-brand-cyan/20 transition-all overflow-hidden group"
            >
              <div className={`flex flex-col md:flex-row ${idx % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
                {/* Image column */}
                <div className="md:w-72 lg:w-80 shrink-0 relative overflow-hidden bg-brand-bg/60">
                  <Image
                    src={srv.image}
                    alt={srv.title}
                    width={320}
                    height={220}
                    className="w-full h-48 md:h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
                  />
                  {/* Stat badge overlay */}
                  <div className="absolute bottom-3 left-3 bg-brand-bg/80 backdrop-blur-sm border border-brand-cyan/20 rounded-lg px-3 py-1.5">
                    <p className="font-display font-extrabold text-lg text-brand-cyan leading-none">{srv.stat}</p>
                    <p className="text-[9px] font-medium text-gray-400 mt-0.5">{srv.statLabel}</p>
                  </div>
                </div>

                {/* Content column */}
                <div className="flex-1 p-6 lg:p-8 flex flex-col justify-between">
                  <div>
                    {/* Top row */}
                    <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center shrink-0">
                          {srv.icon}
                        </div>
                        <div>
                          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">{srv.category}</span>
                          <h2 className="font-display font-bold text-lg text-white leading-tight group-hover:text-brand-cyan transition-colors">
                            {srv.title}
                          </h2>
                        </div>
                      </div>
                      {srv.badge && (
                        <span className="text-[9px] font-bold text-brand-cyan uppercase tracking-wider bg-brand-cyan/10 border border-brand-cyan/15 px-2.5 py-1 rounded-full shrink-0">
                          {srv.badge}
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-400 leading-relaxed mb-5">{srv.desc}</p>

                    {/* Feature bullets */}
                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {srv.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-gray-300 font-medium">
                          <CheckCircle className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="mt-6 pt-4 border-t border-brand-border/50 flex items-center justify-between">
                    <span className="text-[10px] text-gray-600 font-medium">Healthcare Technology</span>
                    <Link
                      href={srv.href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-cyan hover:text-white bg-brand-cyan/10 hover:bg-brand-cyan/20 border border-brand-cyan/20 hover:border-brand-cyan/40 px-4 py-2 rounded-lg transition-all"
                    >
                      Explore Service
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* CTA Banner */}
      <section className="relative rounded-2xl overflow-hidden p-8 sm:p-12 border border-brand-cyan/20 bg-gradient-cyber text-center">
        <div className="absolute -top-16 -left-16 w-40 h-40 bg-brand-cyan/8 rounded-full blur-[60px] pointer-events-none" />
        <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-brand-indigo/8 rounded-full blur-[60px] pointer-events-none" />

        <div className="relative max-w-xl mx-auto space-y-4">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
            Not Sure Which Solution Fits Your Clinic?
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Book a discovery call with our digital health engineers to audit your current platform, calculate ROI, and plan your software rollout.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-bold text-sm px-6 py-3 rounded-xl shadow-lg shadow-brand-cyan/15 hover:scale-[1.01] active:scale-[0.99] transition-all"
            >
              Book a Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center justify-center glass-panel border border-brand-border hover:border-brand-cyan/25 text-sm font-semibold text-gray-300 hover:text-white px-6 py-3 rounded-xl transition-all"
            >
              See Live Demos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
