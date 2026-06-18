"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Users,
  Activity,
  Layers,
  ChevronDown,
  Lock,
  Workflow,
  Search,
  Calendar,
  AlertCircle,
  TrendingUp,
  Shield,
  Zap,
  Database,
  Cloud,
  Code2,
  Bot,
  LayoutDashboard,
  XCircle,
  CheckCircle,
  Clock,
  Rocket,
  BarChart3,
  Smartphone,
  List,
  Server,
  GitBranch,
  Stethoscope,
  HeartPulse,
  Laptop,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────
// TOC Config
// ─────────────────────────────────────────────────────────────
const tocItems = [
  { id: "hero",         label: "Hero",             num: "01" },
  { id: "trust",        label: "Trust",            num: "02" },
  { id: "problem",      label: "Problem",          num: "03" },
  { id: "solution",     label: "Solution",         num: "04" },
  { id: "services",     label: "Services",         num: "05" },
  { id: "features",     label: "Features",         num: "06" },
  { id: "industries",   label: "Industries",       num: "07" },
  { id: "process",      label: "Process",          num: "08" },
  { id: "case-studies", label: "Case Studies",     num: "09" },
  { id: "why-us",       label: "Why Us",           num: "10" },
  { id: "faqs",         label: "FAQ",              num: "11" },
  { id: "cta",          label: "Get Started",      num: "12" },
];

// ─────────────────────────────────────────────────────────────
// Inline Sub-Components
// ─────────────────────────────────────────────────────────────

function SoftwareDashboardMockup() {
  const metrics = [
    { label: "Active Patients",    value: "12,840",  change: "+8.4%",   up: true },
    { label: "Appointments Today", value: "284",     change: "+12.1%",  up: true },
    { label: "Claims Processed",   value: "$94,210", change: "+5.3%",   up: true },
    { label: "Error Rate",         value: "0.03%",   change: "-92%",    up: true },
  ];
  return (
    <div className="rounded-2xl border border-brand-border overflow-hidden shadow-2xl bg-[#040D18]">
      <div className="bg-brand-bg px-4 py-3 border-b border-brand-border flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-brand-cyan/15 border border-brand-cyan/25 flex items-center justify-center">
            <LayoutDashboard className="w-4 h-4 text-brand-cyan" />
          </div>
          <div>
            <p className="text-xs font-bold text-white">Clinical Operations Dashboard</p>
            <p className="text-[9px] text-brand-cyan font-medium flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse inline-block" />
              Live — Real-Time Sync
            </p>
          </div>
        </div>
        <span className="text-[9px] font-bold uppercase text-gray-500 bg-brand-border px-2 py-0.5 rounded">HIPAA Secure</span>
      </div>
      <div className="grid grid-cols-2 gap-3 p-4">
        {metrics.map((m, i) => (
          <div key={i} className="glass-panel border border-brand-border rounded-xl p-3">
            <p className="text-[9px] text-gray-500 font-medium mb-1">{m.label}</p>
            <p className="text-lg font-bold text-white leading-none">{m.value}</p>
            <span className="text-[10px] font-bold text-green-400 mt-0.5 block">{m.change}</span>
          </div>
        ))}
      </div>
      <div className="px-4 pb-4">
        <p className="text-[9px] font-bold text-gray-500 uppercase tracking-wider mb-2">Recent Activity</p>
        <div className="space-y-1.5">
          {[
            "EHR sync completed — 284 records updated",
            "Claims batch submitted to payer network",
            "Automated reminder sent to 140 patients",
          ].map((evt, i) => (
            <div key={i} className="flex items-center gap-2 text-[10px] text-gray-400 bg-brand-bg/40 border border-brand-border/30 rounded-lg px-3 py-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan shrink-0" />
              {evt}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function EHRIntegrationDiagram() {
  const nodes = [
    { icon: <Stethoscope className="w-4 h-4" />,     label: "Clinical EHR",            sub: "Epic · Cerner · Athena · Custom",  color: "brand-cyan" },
    { icon: <Database className="w-4 h-4" />,         label: "Integration Engine",      sub: "HL7 FHIR · REST · GraphQL",        color: "brand-indigo" },
    { icon: <Shield className="w-4 h-4" />,           label: "HIPAA Security Layer",    sub: "AES-256 · BAA · Audit Logs",       color: "brand-cyan" },
    { icon: <Cloud className="w-4 h-4" />,            label: "Cloud Infrastructure",    sub: "AWS · Azure · GCP · Kubernetes",   color: "brand-indigo" },
    { icon: <Bot className="w-4 h-4" />,              label: "AI & Automation Layer",   sub: "LLMs · NLP · Predictive Models",   color: "brand-cyan" },
  ];
  return (
    <div className="flex flex-col items-center gap-0">
      {nodes.map((node, i) => (
        <React.Fragment key={node.label}>
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="w-full glass-panel border border-brand-border rounded-xl px-5 py-3.5 flex items-center gap-4 hover:border-brand-cyan/20 transition-colors"
          >
            <div className={`w-9 h-9 rounded-xl bg-${node.color}/10 border border-${node.color}/20 flex items-center justify-center shrink-0 text-${node.color}`}>{node.icon}</div>
            <div className="min-w-0">
              <p className="text-sm font-bold text-white leading-tight">{node.label}</p>
              <p className="text-[10px] text-gray-500 font-medium mt-0.5">{node.sub}</p>
            </div>
            <span className="ml-auto w-2 h-2 rounded-full bg-brand-cyan/60 shrink-0 animate-pulse" />
          </motion.div>
          {i < nodes.length - 1 && (
            <div className="flex flex-col items-center py-1">
              <div className="w-px h-4 bg-brand-cyan/20" />
              <ArrowRight className="w-3 h-3 text-brand-cyan/40 rotate-90" />
              <div className="w-px h-4 bg-brand-cyan/20" />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Floating TOC Popup
// ─────────────────────────────────────────────────────────────
function FloatingTOC({ activeSection, visible }: { activeSection: string; visible: boolean }) {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  const activeItem = tocItems.find((t) => t.id === activeSection);

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: "-50%", x: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: "-50%", x: 0, scale: 1 }}
            exit={{ opacity: 0, y: "-50%", x: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed right-4 md:right-6 top-1/2 z-50"
          >
            <button
              onClick={() => setOpen((v) => !v)}
              className={`flex items-center gap-2 rounded-2xl border shadow-lg shadow-black/40 transition-all duration-200 ${
                open
                  ? "bg-brand-cyan text-brand-bg border-brand-cyan"
                  : "bg-[#060F1E] text-gray-300 border-brand-border hover:border-brand-cyan/40 hover:text-white"
              } p-3 md:pl-3.5 md:pr-4 md:py-2.5`}
            >
              <List className={`w-4 h-4 shrink-0 transition-colors ${open ? "text-brand-bg" : "text-brand-cyan"}`} />
              <span className="text-[11px] font-bold hidden md:inline">
                {open ? "Close" : (activeItem ? `${activeItem.num} · ${activeItem.label}` : "Contents")}
              </span>
            </button>

            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: "-50%", x: 12, scale: 0.97 }}
                  animate={{ opacity: 1, y: "-50%", x: 0, scale: 1 }}
                  exit={{ opacity: 0, y: "-50%", x: 12, scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-full top-1/2 mr-3 bg-[#060F1E] border border-brand-border rounded-2xl shadow-2xl shadow-black/60 overflow-hidden w-56"
                >
                  <div className="px-4 py-3 border-b border-brand-border/60 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <List className="w-3.5 h-3.5 text-brand-cyan" />
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">On This Page</span>
                    </div>
                    <button
                      onClick={() => setOpen(false)}
                      className="w-5 h-5 rounded-full bg-brand-border/60 hover:bg-brand-border flex items-center justify-center transition-colors"
                    >
                      <ChevronDown className="w-3 h-3 text-gray-400 -rotate-90" />
                    </button>
                  </div>

                  <nav className="p-2 max-h-[50vh] overflow-y-auto">
                    {tocItems.map((item) => {
                      const isActive = activeSection === item.id;
                      return (
                        <button
                          key={item.id}
                          onClick={() => scrollTo(item.id)}
                          className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-left transition-all duration-150 ${
                            isActive
                              ? "bg-brand-cyan/12 border border-brand-cyan/20"
                              : "hover:bg-brand-bg/80 border border-transparent"
                          }`}
                        >
                          <span className={`text-[9px] font-bold shrink-0 w-5 ${isActive ? "text-brand-cyan" : "text-gray-600"}`}>{item.num}</span>
                          <span className={`w-0.5 h-3.5 rounded-full shrink-0 transition-colors ${isActive ? "bg-brand-cyan" : "bg-brand-border/60"}`} />
                          <span className={`text-[11px] font-semibold truncate ${isActive ? "text-white" : "text-gray-500"}`}>{item.label}</span>
                          {isActive && (
                            <span className="ml-auto w-1.5 h-1.5 rounded-full bg-brand-cyan shrink-0 animate-pulse" />
                          )}
                        </button>
                      );
                    })}
                  </nav>

                  <div className="px-4 py-3 border-t border-brand-border/60">
                    <Link
                      href="/contact"
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-center gap-1.5 text-[10px] font-bold text-brand-bg bg-brand-cyan hover:bg-brand-cyan/90 py-2 px-3 rounded-lg transition-all w-full"
                    >
                      <Sparkles className="w-3 h-3" />
                      Book Free Consultation
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ─────────────────────────────────────────────────────────────
// FAQ Data
// ─────────────────────────────────────────────────────────────
const faqData = [
  { question: "1. How much does custom healthcare SaaS development cost?", answer: "The cost of custom healthcare SaaS development depends on the complexity, type of application, number of integrations, compliance requirements, and team size needed. A basic clinical tool, full EHR platform, patient-facing app, and AI-powered SaaS product all require different investments. We provide transparent, milestone-based pricing tailored to your goals. Contact us for a detailed proposal." },
  { question: "2. How long does it take to develop healthcare software?", answer: "Timelines vary by scope. A focused clinical tool or MVP can be built in 8–14 weeks, while a full-scale healthcare SaaS platform, EHR system, or multi-module clinical application may require 6–18 months. We follow agile development cycles with bi-weekly sprint demos, giving you working software at every stage." },
  { question: "3. Do you build custom EHR and clinical management systems?", answer: "Yes. We design and develop custom EHR systems, practice management platforms, clinical documentation tools, and specialty-specific workflow applications tailored to your organization's needs. Our systems integrate with major EHR vendors including Epic, Cerner, and Athenahealth via HL7 FHIR APIs." },
  { question: "4. Can you integrate with existing EHR platforms and third-party APIs?", answer: "Yes. We specialize in HL7 FHIR, HL7 v2, REST, and GraphQL integrations with Epic, Cerner, Athenahealth, Meditech, and custom healthcare databases. We build secure integration layers that allow your new software to communicate with existing clinical systems without data silos." },
  { question: "5. Is the software you build HIPAA compliant?", answer: "All healthcare software we develop is engineered with HIPAA compliance as a foundational requirement — not an afterthought. This includes AES-256 encryption, role-based access controls, comprehensive audit logging, Business Associate Agreements (BAAs), and penetration testing prior to launch." },
  { question: "6. Do you develop mobile health (mHealth) applications?", answer: "Yes. We build iOS and Android mobile health applications for patients, clinicians, and healthcare administrators. This includes telehealth apps, patient monitoring applications, medication adherence tools, and care coordination platforms — all built to HIPAA standards." },
  { question: "7. Can you build AI-powered healthcare software?", answer: "Yes. We integrate AI and machine learning capabilities into healthcare applications including clinical decision support, predictive analytics, NLP-based documentation, automated coding assistance, and patient risk stratification models. We use leading LLM and ML frameworks tailored to clinical data environments." },
  { question: "8. Do you offer post-launch support and maintenance?", answer: "Yes. We provide ongoing technical support, feature development, performance monitoring, security patching, and compliance auditing after launch. Our post-launch plans are structured to ensure your platform remains stable, secure, and scalable as your organization grows." },
  { question: "9. Do you build healthcare SaaS platforms?", answer: "Yes. We engineer multi-tenant healthcare SaaS platforms with subscription billing, white-label capabilities, role-based dashboards, and FHIR-ready APIs. Our SaaS architectures are designed to scale from 100 to 100,000+ users without re-engineering the core platform." },
  { question: "10. Why choose Med Clinic X over a general software development company?", answer: "Unlike general software agencies, Med Clinic X specializes exclusively in healthcare technology. We understand clinical workflows, regulatory constraints, patient privacy requirements, and the operational complexity of healthcare organizations. We don't build generic software — we build purpose-built clinical platforms that solve real healthcare problems." },
];

// ─────────────────────────────────────────────────────────────
// Shared Section Header
// ─────────────────────────────────────────────────────────────
function SectionHeader({ badge, icon, title, subtitle }: { badge: string; icon: React.ReactNode; title: React.ReactNode; subtitle?: string }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      <div className="inline-flex items-center space-x-2 bg-brand-cyan/15 rounded-full px-3.5 py-1 mb-4 border border-brand-cyan/20">
        {icon}
        <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest">{badge}</span>
      </div>
      <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-400/90 tracking-tight leading-tight">{title}</h2>
      {subtitle && <p className="mt-4 text-base text-slate-300/95 leading-relaxed font-normal">{subtitle}</p>}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Main Page Component
// ─────────────────────────────────────────────────────────────
export default function HealthcareSaasClient() {
  const [activeFaq, setActiveFaq]         = useState<number | null>(null);
  const [activeSection, setActiveSection]  = useState("hero");
  const [tocVisible, setTocVisible]        = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setTocVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 md:py-12 relative">
      {/* Ambient glows */}
      <div className="fixed top-0 right-1/4 w-[500px] h-[500px] bg-brand-cyan/4 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="fixed bottom-1/3 left-1/4 w-[500px] h-[500px] bg-brand-indigo/4 rounded-full blur-[120px] -z-10 pointer-events-none" />

      {/* Floating TOC Popup */}
      <FloatingTOC activeSection={activeSection} visible={tocVisible} />

      {/* Back / Breadcrumb */}
      <div className="mb-10 flex items-center justify-between">
        <Link href="/services" className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-white transition-colors group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          Back to Services
        </Link>
        <nav className="hidden sm:flex items-center gap-2 text-xs text-gray-500 font-medium">
          <Link href="/" className="hover:text-brand-cyan transition-colors">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-brand-cyan transition-colors">Services</Link>
          <span>/</span>
          <span className="text-gray-300 font-semibold">Healthcare SaaS Development</span>
        </nav>
      </div>

      {/* Full-width content */}
      <div className="space-y-0">

          {/* ═══ 01 · HERO ═══════════════════════════════════════ */}
          <section id="hero" className="scroll-mt-20 pb-24 md:pb-28 pt-8 md:pt-16">
            <div className="w-full text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6 flex flex-col items-center animate-fade-in"
              >
                <div className="inline-flex items-center gap-2 bg-brand-cyan/15 rounded-full px-4 py-1 border border-brand-cyan/20">
                  <Sparkles className="w-3.5 h-3.5 text-brand-cyan animate-pulse" />
                  <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest">Healthcare SaaS Platforms</span>
                </div>
                <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-400 tracking-tight leading-[1.12] text-center max-w-4xl mx-auto">
                  Healthcare SaaS Development Services for Organizations That <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-cyan to-brand-indigo">Demand More</span>
                </h1>
                <p className="text-slate-300 text-base leading-relaxed text-center max-w-2xl mx-auto font-normal">
                  Med Clinic X engineers HIPAA-compliant B2B clinical platforms, EHR wrappers, multi-tenant databases, and AI-powered healthcare SaaS — built to replace legacy systems and power modern care delivery.
                </p>
                <div className="flex flex-wrap gap-2.5 text-xs font-medium text-gray-400 justify-center">
                  {["HIPAA Compliant Architecture", "HL7 FHIR Integration", "AI-Ready Platforms", "Cloud-Native Infrastructure"].map((b, i) => (
                    <span key={i} className="flex items-center gap-1.5 bg-brand-bg border border-brand-border px-3 py-1.5 rounded-full">
                      <CheckCircle2 className="w-3 h-3 text-brand-cyan" />{b}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center w-full">
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-bold text-sm px-8 py-4 rounded-xl shadow-lg shadow-brand-cyan/15 hover:scale-[1.01] active:scale-[0.99] transition-all">
                    Start Your SaaS Project <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="#faqs" onClick={e => { e.preventDefault(); document.getElementById("faqs")?.scrollIntoView({ behavior: "smooth" }) }} className="inline-flex items-center justify-center glass-panel border border-brand-border hover:border-brand-cyan/35 text-sm font-semibold text-gray-300 hover:text-white px-8 py-4 rounded-xl transition-all">
                    Read FAQs
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>

          {/* ═══ 02 · TRUST BAR ══════════════════════════════════ */}
          <section id="trust" className="scroll-mt-20 pb-24 md:pb-28">
            <div className="space-y-8">
              <p className="text-center text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                Trusted by Healthcare Technology Leaders Across the United States
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {[
                  { icon: <Code2 className="w-6 h-6 text-brand-cyan" />,    label: "SaaS Projects Shipped",  desc: "Custom clinical applications, multi-tenant portals, and SaaS platforms.",   stat: "120+" },
                  { icon: <Database className="w-6 h-6 text-brand-cyan" />, label: "EHR Integrations Built",        desc: "Epic, Cerner, Athena, and custom system integrations completed.",               stat: "60+" },
                  { icon: <Shield className="w-6 h-6 text-brand-cyan" />,   label: "HIPAA-Compliant Systems",       desc: "Fully audited, encrypted, and BAA-backed SaaS deployments.",      stat: "100%" },
                  { icon: <Zap className="w-6 h-6 text-brand-cyan" />,      label: "Health Tech Startups Backed",   desc: "SaaS companies scaled from MVP to enterprise-grade platforms.",          stat: "35+" },
                ].map((item, i) => (
                  <div key={i} className="glass-panel p-6 rounded-2xl border border-brand-border hover:border-brand-cyan/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.08)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col items-center text-center space-y-3 group">
                    <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 border border-brand-cyan/15 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                    <p className="font-display font-extrabold text-3xl text-white tracking-tight leading-none">{item.stat}</p>
                    <p className="text-xs font-bold text-brand-cyan uppercase tracking-widest">{item.label}</p>
                    <p className="text-base text-slate-300 leading-relaxed font-normal">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ═══ 03 · PROBLEM ════════════════════════════════════ */}
          <section id="problem" className="scroll-mt-20 pb-24 md:pb-28">
            <SectionHeader
              badge="Pain Awareness"
              icon={<AlertCircle className="w-4 h-4 text-brand-cyan" />}
              title="Is Legacy Software Holding Your Healthcare Organization Back?"
              subtitle="Outdated, disconnected, and non-compliant software costs healthcare organizations millions in operational inefficiencies and patient dissatisfaction every year."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
              {[
                { icon: <XCircle className="w-5 h-5 text-red-400" />,    title: "Legacy System Lock-In",         desc: "Outdated EHR platforms and homegrown systems create data silos, block integrations, and require costly workarounds that slow clinical teams.", impact: "67% of providers report losing 2+ hours/day to legacy system inefficiencies." },
                { icon: <XCircle className="w-5 h-5 text-red-400" />,    title: "Compliance & Security Gaps",    desc: "Software built without HIPAA architecture from the ground up creates audit failures, breach risk, and potential regulatory penalties.", impact: "Average HIPAA breach costs healthcare orgs $10.9M per incident." },
                { icon: <XCircle className="w-5 h-5 text-red-400" />,    title: "Poor Patient & Staff UX",       desc: "Clinical staff losing hours on clunky interfaces and patients abandoning difficult portals directly drives churn and burnout.", impact: "Nurse burnout tied to EHR usability costs $9B annually in turnover." },
                { icon: <XCircle className="w-5 h-5 text-red-400" />,    title: "No AI or Automation Layer",     desc: "Organizations without intelligent automation handle repetitive admin tasks manually — increasing overhead and delaying care delivery.", impact: "AI in healthcare projected to save $360B annually by 2026." },
              ].map((p, i) => (
                <div key={i} className="glass-panel p-6 rounded-2xl border border-red-500/10 hover:border-red-500/30 hover:shadow-[0_0_30px_rgba(239,68,68,0.05)] hover:-translate-y-0.5 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/15 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">{p.icon}</div>
                    <h3 className="font-display font-bold text-lg text-white">{p.title}</h3>
                  </div>
                  <p className="text-base text-slate-300 leading-relaxed mb-4">{p.desc}</p>
                  <div className="bg-red-500/5 border border-red-500/15 rounded-lg px-4 py-2.5">
                    <p className="text-[10px] font-bold text-red-400 uppercase tracking-wider mb-0.5">Industry Data</p>
                    <p className="text-xs text-gray-400">{p.impact}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Software problem visual */}
            <div className="relative rounded-2xl overflow-hidden border border-brand-border group">
              <div className="bg-brand-bg/90 px-4 py-2 border-b border-brand-border flex items-center justify-between text-[10px] text-gray-500 font-mono">
                <span>legacy-vs-modern-healthcare-software.png</span>
                <div className="flex items-center gap-3">
                  <span className="text-red-400 font-bold">❌ Legacy</span>
                  <span className="text-brand-cyan font-bold">✅ Modern</span>
                </div>
              </div>
              <Image src="/service_healthcare_saas.png" alt="Legacy vs Modern Healthcare Software Platform Comparison" width={1200} height={600} className="w-full h-96 object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </section>

          {/* ═══ 04 · SOLUTION OVERVIEW ══════════════════════════ */}
          <section id="solution" className="scroll-mt-20 pb-24 md:pb-28">
            <SectionHeader
              badge="Transformation"
              icon={<Sparkles className="w-4 h-4 text-brand-cyan" />}
              title="The Med Clinic X SaaS Solution"
              subtitle="We replace broken, outdated healthcare systems with modern, scalable, HIPAA-compliant software that your clinical teams will actually love using."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
              {[
                { icon: <Code2 className="w-5 h-5 text-brand-cyan" />,       title: "Custom Clinical Software Engineering",  desc: "Bespoke healthcare applications built to your exact clinical workflow — not configured from a generic template. Every module is purpose-built.", outcome: "↑ Clinical efficiency & staff adoption" },
                { icon: <Database className="w-5 h-5 text-brand-cyan" />,     title: "EHR & Health System Integrations",      desc: "Seamless HL7 FHIR and API connections to Epic, Cerner, Athena, and custom databases — eliminating data silos and manual re-entry.", outcome: "↑ Data accuracy & interoperability" },
                { icon: <Shield className="w-5 h-5 text-brand-cyan" />,       title: "HIPAA-First Architecture",              desc: "Every system is designed with encryption, access controls, audit trails, and BAA agreements from day one — not bolted on after launch.", outcome: "↑ Compliance confidence & audit readiness" },
                { icon: <Bot className="w-5 h-5 text-brand-cyan" />,          title: "AI-Powered Clinical Automation",        desc: "Machine learning models, NLP engines, and predictive analytics embedded directly into your clinical workflows to reduce admin burden.", outcome: "↑ 68% reduction in manual clinical admin" },
              ].map((sol, i) => (
                <div key={i} className="glass-panel p-6 rounded-2xl border border-brand-border hover:border-brand-cyan/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.08)] hover:-translate-y-0.5 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center mb-4 group-hover:bg-brand-cyan/20 group-hover:scale-105 transition-all duration-300">
                    {sol.icon}
                  </div>
                  <h3 className="font-display font-bold text-lg text-white mb-2">{sol.title}</h3>
                  <p className="text-base text-slate-300 leading-relaxed mb-4">{sol.desc}</p>
                  <div className="bg-brand-cyan/10 border border-brand-cyan/20 rounded-xl px-4 py-2.5">
                    <p className="text-xs font-bold text-brand-cyan tracking-wide">{sol.outcome}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Software Development Journey */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-4">
                <h3 className="font-display font-bold text-2xl text-white">How We Build Healthcare SaaS That Scales</h3>
                <p className="text-base text-gray-400 leading-relaxed">From discovery to deployment, every line of code we write is designed to solve a real clinical problem, pass compliance audits, and grow with your organization over time.</p>
                {[
                  { step: "01", label: "Discovery & Architecture",  desc: "We audit your existing workflows, map data requirements, identify integration points, and design a compliance-ready system architecture." },
                  { step: "02", label: "UI/UX Design for Clinicians", desc: "We create intuitive interfaces designed for clinical staff — fast, distraction-free, and tested against real workflow scenarios." },
                  { step: "03", label: "Agile Development Sprints",  desc: "Working software is delivered every 2 weeks. You review, test, and approve each feature before we move to the next sprint." },
                  { step: "04", label: "Integration & QA Testing",   desc: "Full EHR integration testing, HIPAA security audits, penetration testing, and performance validation before any production release." },
                  { step: "05", label: "Launch & Continuous Support", desc: "We deploy, monitor, and continuously improve your platform — with dedicated support for performance, compliance, and new features." },
                ].map((s, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <span className="w-7 h-7 rounded-full bg-brand-cyan/15 border border-brand-cyan/25 text-[10px] font-bold text-brand-cyan flex items-center justify-center shrink-0 mt-0.5">{s.step}</span>
                    <div>
                      <p className="text-sm font-bold text-white tracking-wide">{s.label}</p>
                      <p className="text-base text-slate-400 leading-relaxed mt-0.5 font-normal">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="lg:col-span-5 relative group">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-brand-cyan/15 to-brand-indigo/15 blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
                <div className="relative rounded-2xl overflow-hidden border border-brand-cyan/15 bg-brand-bg shadow-2xl">
                  <div className="bg-brand-bg/90 px-4 py-2 border-b border-brand-border flex items-center justify-between text-[10px] text-gray-500 font-mono">
                    <span>ehr-integration-architecture.png</span>
                    <span className="text-brand-cyan font-bold">ARCHITECTURE</span>
                  </div>
                  <div className="p-4">
                    <EHRIntegrationDiagram />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ═══ 05 · SERVICES ═══════════════════════════════════ */}
          <section id="services" className="scroll-mt-20 pb-24 md:pb-28">
            <SectionHeader
              badge="Core Offerings"
              icon={<Layers className="w-4 h-4 text-brand-cyan" />}
              title="Healthcare SaaS Development Services"
              subtitle="Purpose-built clinical software solutions — not off-the-shelf tools. Every system we engineer is tailored to your clinical workflows, compliance requirements, and growth goals."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 mb-10">
              {[
                { col: 6, icon: <Code2 className="w-5 h-5 text-brand-cyan" />,         title: "Custom SaaS Platform Development",     desc: "Bespoke clinical SaaS built from the ground up for hospitals, specialty practices, health systems, and digital health companies. We engineer platforms that reflect your workflows — not generic SaaS compromises.", tags: ["Hospital systems", "Specialty clinics", "Health networks", "Digital health startups", "Care management orgs"] },
                { col: 6, icon: <Database className="w-5 h-5 text-brand-cyan" />,       title: "EHR Integration & Interoperability Engineering",  desc: "Connect your systems to Epic, Cerner, Athenahealth, and custom databases via HL7 FHIR and REST APIs. We eliminate data silos and enable real-time clinical data flows across your entire technology stack.", tags: ["EHR connectivity", "FHIR APIs", "HL7 messaging", "Clinical data pipelines", "Health information exchanges"] },
                { col: 4, icon: <Smartphone className="w-5 h-5 text-brand-cyan" />,    title: "Mobile Health App Development",                   desc: "iOS and Android applications for patient engagement, remote monitoring, and care coordination — built to HIPAA standards with clinical-grade security.", features: ["Patient monitoring apps", "Telehealth platforms", "Medication adherence tools"] },
                { col: 4, icon: <Bot className="w-5 h-5 text-brand-cyan" />,            title: "AI & Clinical Automation Software",               desc: "Machine learning models, NLP engines, and predictive analytics embedded into clinical workflows to automate documentation, triage, and decision support.", features: ["Clinical decision support", "NLP documentation", "Predictive risk scoring"] },
                { col: 4, icon: <Cloud className="w-5 h-5 text-brand-cyan" />,          title: "Healthcare SaaS Platform Engineering",            desc: "Multi-tenant cloud platforms with subscription billing, role-based access, white-label options, and enterprise-grade security for health tech companies.", features: ["Multi-tenant architecture", "White-label systems", "Enterprise RBAC controls"] },
              ].map((card, i) => (
                <div key={i} className={`${i < 2 ? 'lg:col-span-3' : 'lg:col-span-2'} relative rounded-2xl flex flex-col group overflow-hidden transition-all duration-500 hover:-translate-y-1`}>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-cyan/20 via-brand-border to-brand-indigo/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-[1px] rounded-[14px] bg-[#0b1220] z-0" />
                  <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-brand-cyan/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <div className="absolute inset-0 rounded-2xl border border-brand-border group-hover:border-transparent transition-colors duration-500 z-0" />
                  <div className="relative z-10 p-7 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-5">
                      <div className="relative">
                        <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-brand-cyan/30 to-brand-indigo/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-brand-cyan/15 to-brand-indigo/15 border border-brand-cyan/25 flex items-center justify-center group-hover:from-brand-cyan/25 group-hover:to-brand-indigo/25 group-hover:border-brand-cyan/40 transition-all duration-300">
                          <div className="[&>svg]:w-5 [&>svg]:h-5 [&>svg]:text-brand-cyan">{card.icon}</div>
                        </div>
                      </div>
                      <span className="text-[11px] font-black text-brand-cyan/40 group-hover:text-brand-cyan/70 font-mono tracking-wider transition-colors duration-300 tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-lg text-white mb-2 leading-snug group-hover:text-brand-cyan transition-colors duration-300">{card.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed flex-1 mb-5">{card.desc}</p>
                    <div className="mt-auto pt-4 border-t border-white/5">
                      {"tags" in card ? (
                        <>
                          <span className="text-[9px] uppercase font-black text-brand-cyan/60 tracking-[0.18em] block mb-3">Ideal for</span>
                          <div className="flex flex-wrap gap-1.5">
                            {card.tags?.map((t, ti) => (
                              <span key={ti} className="bg-brand-cyan/5 border border-brand-cyan/15 text-[11px] font-semibold text-brand-cyan/80 px-2.5 py-1 rounded-lg group-hover:bg-brand-cyan/10 group-hover:border-brand-cyan/25 transition-colors duration-300">{t}</span>
                            ))}
                          </div>
                        </>
                      ) : (
                        <>
                          <span className="text-[9px] uppercase font-black text-brand-cyan/60 tracking-[0.18em] block mb-3">Key Features</span>
                          <ul className="space-y-2">
                            {card.features?.map((f, fi) => (
                              <li key={fi} className="flex items-center gap-2.5">
                                <div className="w-4 h-4 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center shrink-0 group-hover:bg-brand-cyan/20 transition-colors duration-300">
                                  <CheckCircle2 className="w-2.5 h-2.5 text-brand-cyan" />
                                </div>
                                <span className="text-xs text-slate-300 font-medium">{f}</span>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Software dashboard preview */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-5">
                <SoftwareDashboardMockup />
              </div>
              <div className="lg:col-span-7 glass-panel p-8 rounded-2xl border border-brand-border flex flex-col justify-center gap-6">
                <div>
                  <p className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest mb-2">Platform Preview</p>
                  <h3 className="font-display font-bold text-2xl text-white mb-3">Clinical Operations Software That Works the Way Your Team Does</h3>
                  <p className="text-base text-gray-400 leading-relaxed">We don&apos;t just ship code — we engineer clinical SaaS environments where staff efficiency improves, patient data flows correctly, and compliance is built in from the start.</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Real-Time EHR Sync",    icon: <Activity className="w-3.5 h-3.5 text-brand-cyan" /> },
                    { label: "HIPAA Audit Logs",       icon: <Shield className="w-3.5 h-3.5 text-brand-cyan" /> },
                    { label: "Role-Based Access",      icon: <Lock className="w-3.5 h-3.5 text-brand-cyan" /> },
                    { label: "AI Decision Support",    icon: <Bot className="w-3.5 h-3.5 text-brand-cyan" /> },
                    { label: "Multi-System APIs",      icon: <GitBranch className="w-3.5 h-3.5 text-brand-cyan" /> },
                    { label: "Cloud-Native Deploy",    icon: <Cloud className="w-3.5 h-3.5 text-brand-cyan" /> },
                  ].map((f, i) => (
                    <div key={i} className="flex items-center gap-2 bg-brand-bg border border-brand-border rounded-xl px-3 py-2.5">
                      {f.icon}
                      <span className="text-xs font-semibold text-gray-300">{f.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ═══ 06 · FEATURES / CAPABILITIES ════════════════════ */}
          <section id="features" className="scroll-mt-20 pb-24 md:pb-28">
            <SectionHeader
              badge="Platform Capabilities"
              icon={<Zap className="w-4 h-4 text-brand-cyan" />}
              title="Built-In Capabilities Across Every Platform We Ship"
              subtitle="Every healthcare SaaS platform we deliver comes with enterprise-grade capabilities that most vendors charge extra for — or simply can't provide."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: <Shield className="w-5 h-5 text-brand-cyan" />,         title: "HIPAA-Native Security",            desc: "AES-256 encryption at rest and in transit, BAAs, role-based access controls, field-level audit logging, and regular penetration testing." },
                { icon: <Database className="w-5 h-5 text-brand-cyan" />,        title: "HL7 FHIR Interoperability",        desc: "Full FHIR R4 compliance for seamless data exchange with any EHR platform, payer network, lab system, or health information exchange." },
                { icon: <Bot className="w-5 h-5 text-brand-cyan" />,             title: "Embedded AI & ML Models",          desc: "Clinical NLP, predictive risk scoring, AI documentation drafting, and workflow automation engines built directly into the platform." },
                { icon: <Cloud className="w-5 h-5 text-brand-cyan" />,           title: "Cloud-Native Architecture",        desc: "AWS, Azure, or GCP deployments with Kubernetes orchestration, auto-scaling, 99.99% uptime SLAs, and multi-region failover." },
                { icon: <BarChart3 className="w-5 h-5 text-brand-cyan" />,       title: "Real-Time Clinical Analytics",     desc: "Interactive dashboards, clinical metrics, operational KPIs, and custom reporting engines built with high-performance charting libraries." },
                { icon: <Layers className="w-5 h-5 text-brand-cyan" />,          title: "Modular Extension Framework",      desc: "Architected to easily plug in new clinical features, custom reports, or third-party APIs as your requirements grow." },
              ].map((f, i) => (
                <div key={i} className="glass-panel p-6 rounded-2xl border border-brand-border hover:border-brand-cyan/30 hover:shadow-[0_0_35px_rgba(6,182,212,0.06)] hover:-translate-y-0.5 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/15 flex items-center justify-center mb-4 group-hover:bg-brand-cyan/20 group-hover:scale-105 transition-all duration-300">{f.icon}</div>
                  <h3 className="font-display font-bold text-base text-white mb-2">{f.title}</h3>
                  <p className="text-base text-slate-300 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ═══ 07 · INDUSTRIES ════════════════════════════════ */}
          <section id="industries" className="scroll-mt-20 pb-24 md:pb-28">
            <SectionHeader
              badge="Who We Serve"
              icon={<Users className="w-4 h-4 text-brand-cyan" />}
              title="SaaS Built for Every Node of Care Delivery"
              subtitle="We design and build custom software that addresses the unique requirements, regulatory challenges, and user needs of specific healthcare segments."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { icon: <Stethoscope className="w-6 h-6 text-brand-cyan" />,  num: "01", segment: "Specialty Clinics",       desc: "Workflow tools, custom templates, and EHR configurations tailored to specific medical disciplines.", highlights: ["Specialized charting templates", "Intake form customization", "Outcome tracking engines", "Referral management tools"] },
                { icon: <Activity className="w-6 h-6 text-brand-cyan" />,     num: "02", segment: "Hospitals & Systems",     desc: "Enterprise-grade integration engines, clinical coordinator portals, and system-wide analytics dashboards.", highlights: ["HL7/FHIR integration engines", "Multi-facility dashboards", "Role-based staff scheduling", "Payer network interfaces"] },
                { icon: <Zap className="w-6 h-6 text-brand-cyan" />,          num: "03", segment: "Digital Health Startups", desc: "Rapid MVP development, HIPAA-first architectures, and scalable API layers to prove traction quickly.", highlights: ["Rapid prototype engineering", "HIPAA compliance readiness", "Scalable REST/GraphQL APIs", "Stripe subscription billing"] },
                { icon: <HeartPulse className="w-6 h-6 text-brand-cyan" />,   num: "04", segment: "Medical Device Orgs",     desc: "Device telemetry ingestion software, remote patient monitoring platforms, and data integration layers.", highlights: ["Bluetooth data ingestion", "Real-time vitals alerts", "Physician review portals", "EHR data ingestion gateways"] },
              ].map((item, i) => (
                <div key={i} className="glass-panel p-6 rounded-2xl border border-brand-border hover:border-brand-cyan/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col group">
                  <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center mb-4 group-hover:bg-brand-cyan/20 group-hover:scale-105 transition-all duration-300">{item.icon}</div>
                  <span className="text-[9px] font-bold text-brand-cyan uppercase tracking-wider mb-1">{item.num}</span>
                  <h3 className="font-display font-bold text-lg text-white mb-2">{item.segment}</h3>
                  <p className="text-base text-slate-300 leading-relaxed flex-1">{item.desc}</p>
                  <ul className="mt-4 pt-4 border-t border-brand-border/40 space-y-1.5">
                    {item.highlights.map((h, hi) => (
                      <li key={hi} className="flex items-center gap-1.5 text-[10px] text-gray-500 font-medium">
                        <CheckCircle2 className="w-3 h-3 text-brand-cyan shrink-0" />{h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* ═══ 08 · PROCESS ═══════════════════════════════════ */}
          <section id="process" className="scroll-mt-20 pb-24 md:pb-28">
            <SectionHeader
              badge="How It Works"
              icon={<Workflow className="w-4 h-4 text-brand-cyan" />}
              title="Our Agile Healthcare Software Process"
              subtitle="A structured, collaborative development model that guarantees complete visibility, constant testing, and on-time delivery."
            />
            <div className="relative">
              <div className="hidden lg:block absolute top-10 left-[calc(10%-2px)] right-[calc(10%-2px)] h-px bg-gradient-to-r from-transparent via-brand-cyan/30 to-transparent" />

              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                {[
                  { icon: <Search className="w-5 h-5" />,    step: "01", label: "Discovery",   color: "brand-cyan",   desc: "Workflow audits, requirement specification, compliance planning, integration scoping, and technical architecture." },
                  { icon: <Layers className="w-5 h-5" />,   step: "02", label: "UI/UX Design", color: "brand-indigo", desc: "Interactive wireframes, layout prototyping, clinician testing feedback loops, and visual interface assets." },
                  { icon: <Code2 className="w-5 h-5" />,     step: "03", label: "Engineering", color: "brand-cyan",   desc: "HIPAA-native codebase construction, EHR database integration, FHIR API development, and unit testing." },
                  { icon: <Rocket className="w-5 h-5" />,    step: "04", label: "Validation",  color: "brand-indigo", desc: "EHR sandbox integration testing, HIPAA security audit, penetration tests, and load validation checks." },
                  { icon: <BarChart3 className="w-5 h-5" />, step: "05", label: "Launch",      color: "brand-cyan",   desc: "Production deployment, staff onboarding, real-time logging setup, and ongoing SLA-backed SLA maintenance." },
                ].map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center group"
                  >
                    <div className={`relative w-20 h-20 rounded-2xl bg-${step.color}/10 border border-${step.color}/20 flex items-center justify-center mb-4 text-${step.color} group-hover:scale-105 transition-all duration-300`}>
                      {step.icon}
                      <span className={`absolute -top-2 -right-2 w-6 h-6 rounded-full bg-${step.color} text-[9px] font-extrabold text-brand-bg flex items-center justify-center shadow-lg`}>{step.step}</span>
                    </div>
                    <h3 className="font-display font-bold text-lg text-white mb-2 tracking-wide">{step.label}</h3>
                    <p className="text-base text-slate-300 leading-relaxed font-normal">{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Architecture stack details */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-16">
              <div className="lg:col-span-5">
                <p className="text-xs font-bold text-brand-cyan uppercase tracking-wider mb-4 flex items-center gap-2"><Database className="w-3.5 h-3.5" />Integration Stack</p>
                <EHRIntegrationDiagram />
              </div>
              <div className="lg:col-span-7 space-y-5">
                <h3 className="font-display font-bold text-xl text-white flex items-center gap-2.5">
                  <span className="w-1 h-5 bg-brand-cyan rounded-full" />Our Software Stack
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: "Frontend Platforms",     icon: <Laptop className="w-4 h-4 text-brand-cyan" />,   items: ["React.js & Next.js", "TypeScript (Strongly Typed)", "Tailwind CSS Layouts", "Vite.js build environment"] },
                    { label: "Backend Services",       icon: <Server className="w-4 h-4 text-brand-cyan" />,   items: ["Node.js API Services", "GraphQL & REST Protocols", "PostgreSQL & Prisma ORM", "Redis Caching Layers"] },
                    { label: "Cloud & DevOps",         icon: <Cloud className="w-4 h-4 text-brand-cyan" />,    items: ["AWS (HIPAA Compliant Cloud)", "Kubernetes Container Orchestration", "Terraform Infrastructure Code", "GitHub Actions CI/CD"] },
                    { label: "Healthcare Protocols",   icon: <Shield className="w-4 h-4 text-brand-cyan" />,   items: ["HL7 FHIR API Integrations", "HL7 v2 Message Parsers", "DICOM Medical Imaging Viewers", "Secure AES-256 Storage"] },
                  ].map((col, i) => (
                    <div key={i} className="glass-panel p-5 rounded-xl border border-brand-border">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-7 h-7 rounded-lg bg-brand-cyan/10 border border-brand-cyan/15 flex items-center justify-center">{col.icon}</div>
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider">{col.label}</h4>
                      </div>
                      <ul className="space-y-1.5">
                        {col.items.map((item, j) => (
                          <li key={j} className="flex items-center gap-2 text-xs text-gray-400">
                            <span className="w-1 h-1 rounded-full bg-brand-cyan/60 shrink-0" />{item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ═══ 09 · CASE STUDIES ══════════════════════════════ */}
          <section id="case-studies" className="scroll-mt-20 pb-24 md:pb-28">
            <SectionHeader
              badge="Proof of Results"
              icon={<Activity className="w-4 h-4 text-brand-cyan" />}
              title="Healthcare Software Projects We Have Built"
              subtitle="Real, working solutions deployed in live clinical settings — with measurable impacts on staff efficiency and patient outcomes."
            />

            {/* Featured Software Case Study */}
            <div className="max-w-4xl mx-auto mb-14">
              <div className="glass-panel p-8 md:p-10 rounded-3xl border border-brand-border flex flex-col md:flex-row gap-8 items-start hover:border-brand-cyan/20 transition-all duration-300">
                <div className="space-y-5 flex-1">
                  <span className="text-[9px] font-bold text-brand-cyan uppercase tracking-widest bg-brand-cyan/10 border border-brand-cyan/20 px-3 py-1 rounded-full">Custom EHR Platform</span>
                  <h3 className="font-display font-bold text-3xl text-white tracking-tight leading-snug">Multi-Specialty Pediatric EHR Platform</h3>
                  <p className="text-base text-slate-300 leading-relaxed font-normal">A 24-location pediatric group was struggling with a generic EHR that required doctors to click 40+ times per clinical note. We engineered a custom, touch-optimized EHR dashboard that integrated with their central database.</p>
                </div>
                <div className="space-y-3 w-full md:w-[45%] shrink-0">
                  {[
                    { label: "Challenge", text: "Slow interface · 40+ clicks per note · Low staff morale",             color: "text-red-400" },
                    { label: "Solution",  text: "Custom EHR client, touchscreen templates, offline record syncing",  color: "text-yellow-400" },
                    { label: "Result",    text: "Note time reduced by 62% · Clinician satisfaction increased 84%",   color: "text-green-400" },
                  ].map((r, i) => (
                    <div key={i} className="glass-panel px-4 py-3.5 rounded-xl border border-brand-border/60 flex items-start gap-3 hover:border-brand-cyan/20 transition-colors duration-200">
                      <span className={`text-[9px] font-bold uppercase tracking-wider shrink-0 mt-0.5 ${r.color}`}>{r.label}</span>
                      <span className="text-base text-slate-300 leading-relaxed">{r.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 3 Case Study Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { category: "Clinical AI",    title: "Radiology AI Draft Reporting System",   challenge: "48hr report turnaround causing delays.", solution: "Clinical LLM draft generator + DICOM viewer integration.", result: "Turnaround reduced from 48hrs to under 4hrs.", color: "brand-indigo", tag: "AI & ML" },
                { category: "Patient Portal", title: "Enterprise Patient Portal Rebuild",      challenge: "Legacy portal with 18% activation rate.", solution: "Next.js portal with FHIR API sync, Stripe payment milestones.", result: "Activation increased to 82% in 90 days.",   color: "brand-cyan",   tag: "Portal Systems" },
                { category: "Growth & SEO",     title: "Cardiology Group Web Redesign",     challenge: "No mobile scheduling, maps rank page 3.", solution: "Next.js redesign + maps pack audit + JSON-LD injection.", result: "Top 3 maps pack ranking · +220% booking inquiries.", color: "brand-cyan", tag: "Growth & SEO" },
              ].map((study, i) => (
                <div key={i} className="glass-panel rounded-2xl border border-brand-border overflow-hidden hover:border-brand-cyan/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.08)] hover:-translate-y-0.5 transition-all duration-300 group flex flex-col">
                  <div className={`h-1 bg-gradient-to-r from-${study.color} to-brand-indigo`} />
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-[9px] font-bold text-${study.color} uppercase tracking-widest bg-${study.color}/10 border border-${study.color}/20 px-2.5 py-1 rounded-full`}>{study.category}</span>
                      <span className="text-[9px] text-gray-500 font-medium">{study.tag}</span>
                    </div>
                    <h3 className="font-display font-bold text-lg text-white mb-4 group-hover:text-brand-cyan transition-colors leading-snug">{study.title}</h3>
                    <div className="space-y-3 flex-1">
                      {[{ l: "Challenge", v: study.challenge, c: "text-red-400" }, { l: "Solution", v: study.solution, c: "text-yellow-400" }, { l: "Result", v: study.result, c: "text-green-400" }].map((r, ri) => (
                        <div key={ri}>
                          <p className={`text-[9px] font-bold uppercase tracking-wider ${r.c} mb-0.5`}>{r.l}</p>
                          <p className="text-base text-slate-300 leading-relaxed font-normal">{r.v}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ═══ 10 · WHY CHOOSE MED CLINIC X ══════════════════ */}
          <section id="why-us" className="scroll-mt-20 pb-24 md:pb-28">
            <SectionHeader
              badge="Competitive Edge"
              icon={<Workflow className="w-4 h-4 text-brand-cyan" />}
              title="Why Choose Med Clinic X?"
              subtitle="General software agencies struggle with HIPAA parameters, clinical integrations, and provider workflows. We focus exclusively on health technology."
            />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-5 space-y-5">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: <Shield className="w-4 h-4 text-brand-cyan" />,        label: "HIPAA Certified" },
                    { icon: <Database className="w-4 h-4 text-brand-cyan" />,     label: "FHIR Ready" },
                    { icon: <Code2 className="w-4 h-4 text-brand-cyan" />,        label: "Clean Codebase" },
                    { icon: <CheckCircle2 className="w-4 h-4 text-brand-cyan" />,  label: "Agile Sprints" },
                    { icon: <Clock className="w-4 h-4 text-brand-cyan" />,         label: "On-Time Delivery" },
                    { icon: <TrendingUp className="w-4 h-4 text-brand-cyan" />,    label: "Scalable Architecture" },
                  ].map((b, i) => (
                    <div key={i} className="flex items-center gap-2 glass-panel border border-brand-border px-3 py-2.5 rounded-xl">
                      {b.icon}<span className="text-xs font-semibold text-gray-300">{b.label}</span>
                    </div>
                  ))}
                </div>
                <div className="glass-panel p-5 rounded-2xl border border-brand-cyan/15 bg-brand-cyan/5">
                  <p className="text-xs font-bold text-brand-cyan uppercase tracking-wider mb-3">Our Standards Checklist</p>
                  <div className="space-y-2 text-xs text-gray-400 font-medium">
                    {["AES-256 Encryption at Rest & In Transit", "WCAG 2.1 AA Accessibility Compliance", "HL7 FHIR R4 Interoperability Standards", "SOC 2 Type II Cloud Infrastructure", "Bi-Weekly Sprint Demos & Reviews", "Post-Launch SLA-Backed Support"].map((p, i) => (
                      <div key={i} className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-brand-cyan shrink-0" />{p}</div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7 space-y-4">
                {[
                  { title: "Deep Healthcare Domain Expertise", desc: "Building clinical software requires understanding clinical workflows, medical terminology, regulatory compliance, and the operational reality of care delivery environments. Our team includes engineers, designers, and advisors who have worked directly in healthcare technology — giving us domain depth that general agencies simply cannot match." },
                  { title: "Compliance as a First-Class Requirement", desc: "HIPAA compliance is not a checkbox we complete after development. We architect every system with security, privacy, and auditability as foundational principles — designing data models, access controls, and encryption strategies before writing a single line of application code." },
                  { title: "Agile Healthcare Engineering at Scale", desc: "Our sprint-based delivery model gives you working, tested software every 2 weeks. You review, approve, and guide the build at every milestone — ensuring the final system exactly matches your clinical requirements without scope creep or surprise overruns." },
                  { title: "Built to Grow With Your Organization", desc: "We engineer platforms with scalability from day one — multi-tenant architectures, FHIR-ready APIs, and modular codebases that allow you to add features, integrations, and users without expensive re-engineering down the line." },
                ].map((item, idx) => (
                  <div key={idx} className="glass-panel p-6 rounded-2xl border border-brand-border hover:border-brand-cyan/25 hover:shadow-[0_0_25px_rgba(6,182,212,0.05)] hover:-translate-y-0.5 transition-all duration-300">
                    <h3 className="font-display font-bold text-lg text-white mb-2 flex items-center gap-2.5">
                      <span className="w-1 h-4 bg-brand-cyan rounded-sm shrink-0" />{item.title}
                    </h3>
                    <p className="text-base text-slate-300 leading-relaxed font-normal">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ═══ 11 · FAQ ════════════════════════════════════════ */}
          <section id="faqs" className="scroll-mt-20 pb-24 md:pb-28">
            <SectionHeader
              badge="Knowledge Base"
              icon={<Calendar className="w-4 h-4 text-brand-cyan" />}
              title="Frequently Asked Questions"
              subtitle="Healthcare software timelines, HIPAA compliance, EHR integrations, and pricing — answered."
            />
            <div className="max-w-4xl mx-auto space-y-3">
              {faqData.map((faq, index) => {
                const isOpen = activeFaq === index;
                return (
                  <div key={index} className="glass-panel rounded-2xl border border-brand-border overflow-hidden">
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : index)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left font-display font-bold text-base md:text-lg text-white hover:text-brand-cyan transition-colors focus:outline-none"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 shrink-0 ml-4 ${isOpen ? "rotate-180 text-brand-cyan" : ""}`} />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25, ease: "easeInOut" }}>
                          <div className="px-6 pb-6 pt-1 text-base text-gray-400 leading-relaxed border-t border-brand-border/30">{faq.answer}</div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </section>

          {/* ═══ 12 · FINAL CTA ═══════════════════════════════════ */}
          <section id="cta" className="scroll-mt-20 pb-24 md:pb-28">
            <div className="relative rounded-3xl overflow-hidden border border-brand-cyan/20">
              <div className="absolute inset-0 bg-gradient-to-br from-[#071828] via-[#0a1f30] to-[#0d1a2e]" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(6,182,212,0.12),transparent_60%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.10),transparent_60%)]" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-cyan/40 to-transparent" />
              <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.1) 1px,transparent 1px)", backgroundSize: "48px 48px" }} />

              <div className="relative p-10 sm:p-16 text-center">
                <div className="inline-flex items-center gap-2 bg-brand-cyan/15 rounded-full px-3 py-1 mb-6">
                  <Sparkles className="w-3.5 h-3.5 text-brand-cyan animate-pulse" />
                  <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-wider">Ready to Build?</span>
                </div>
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight mb-4 max-w-3xl mx-auto">
                  Ready to Replace Legacy Software With a Clinical Platform That Works?
                </h2>
                <p className="text-base text-gray-400 leading-relaxed mb-8 max-w-xl mx-auto">
                   Book a discovery call with our healthcare software engineering team. We&apos;ll audit your current systems, identify integration opportunities, and design a compliance-first platform roadmap — at no cost.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-bold text-sm px-8 py-4 rounded-xl shadow-lg shadow-brand-cyan/20 hover:scale-[1.01] active:scale-[0.99] transition-all">
                    Schedule a Discovery Call <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/services" className="inline-flex items-center justify-center glass-panel border border-brand-border/60 hover:border-brand-cyan/25 text-sm font-semibold text-gray-300 hover:text-white px-8 py-4 rounded-xl transition-all">
                    View All Services
                  </Link>
                </div>
              </div>
            </div>
          </section>

      </div>{/* /content */}
    </div>
  );
}
