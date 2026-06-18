"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Laptop,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Users,
  Search,
  Globe,
  Activity,
  Layers,
  ChevronDown,
  Lock,
  Workflow,
  Cpu,
  Bookmark,
  Calendar,
  AlertCircle,
  MessageSquare,
  TrendingUp,
  Shield,
  Zap,
  Database,
  Cloud,
  Code2,
  Bot,
  LayoutDashboard,
  FileText,
  Bell,
  CreditCard,
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

// ── Inline Components ─────────────────────────────────────────────────────────

/** AI Chat Mockup — built in JSX */
function AIChatMockup() {
  const messages = [
    { from: "patient", text: "Can I book an appointment tomorrow?" },
    { from: "ai", text: 'Yes! Dr. Smith has availability at 10:30 AM and 2:00 PM tomorrow.' },
    { from: "patient", text: "10:30 AM works for me." },
    { from: "ai", text: "Done! Your appointment is confirmed for tomorrow at 10:30 AM with Dr. Smith. You'll receive a confirmation SMS shortly.", cta: "View Appointment" },
  ];

  return (
    <div className="rounded-2xl border border-brand-border overflow-hidden shadow-2xl bg-[#040D18]">
      {/* Header */}
      <div className="bg-brand-bg px-4 py-3 border-b border-brand-border flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-brand-cyan/15 border border-brand-cyan/25 flex items-center justify-center">
            <Bot className="w-4 h-4 text-brand-cyan" />
          </div>
          <div>
            <p className="text-xs font-bold text-white">MedClinic AI Assistant</p>
            <p className="text-[9px] text-brand-cyan font-medium flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse inline-block" />
              Online — Available 24/7
            </p>
          </div>
        </div>
        <span className="text-[9px] font-bold uppercase text-gray-500 bg-brand-border px-2 py-0.5 rounded">HIPAA Secure</span>
      </div>

      {/* Messages */}
      <div className="p-4 space-y-3 min-h-[240px]">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.from === "patient" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[80%] ${msg.from === "patient"
              ? "bg-brand-cyan/15 border border-brand-cyan/20 text-gray-200 rounded-2xl rounded-tr-sm"
              : "bg-brand-bg/80 border border-brand-border text-gray-300 rounded-2xl rounded-tl-sm"
            } px-3.5 py-2.5 text-xs leading-relaxed`}>
              {msg.from === "ai" && (
                <p className="text-[9px] font-bold text-brand-cyan uppercase tracking-wider mb-1">AI Assistant</p>
              )}
              <p>{msg.text}</p>
              {msg.cta && (
                <button className="mt-2 w-full bg-gradient-to-r from-brand-cyan to-brand-indigo text-white text-[10px] font-bold py-1.5 px-3 rounded-lg">
                  {msg.cta}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="border-t border-brand-border p-3 flex gap-2">
        <div className="flex-1 bg-brand-bg/60 border border-brand-border rounded-xl px-3 py-2 text-[11px] text-gray-500">
          Type your message...
        </div>
        <button className="w-8 h-8 rounded-xl bg-brand-cyan/15 border border-brand-cyan/25 flex items-center justify-center shrink-0">
          <ArrowRight className="w-3.5 h-3.5 text-brand-cyan" />
        </button>
      </div>
    </div>
  );
}

/** Patient Portal Dashboard — built in JSX */
function PatientPortalMockup() {
  const sections = [
    { icon: <FileText className="w-3.5 h-3.5" />, label: "Medical History", value: "14 Records", color: "text-brand-cyan" },
    { icon: <Calendar className="w-3.5 h-3.5" />, label: "Appointments", value: "Next: Tue 9AM", color: "text-brand-indigo" },
    { icon: <CreditCard className="w-3.5 h-3.5" />, label: "Billing", value: "$240 Due", color: "text-yellow-400" },
    { icon: <Bell className="w-3.5 h-3.5" />, label: "Messages", value: "2 Unread", color: "text-green-400" },
  ];

  return (
    <div className="rounded-2xl border border-brand-border overflow-hidden shadow-2xl bg-[#040D18]">
      {/* Top bar */}
      <div className="bg-brand-bg px-4 py-2.5 border-b border-brand-border flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-500" />
          <span className="w-2 h-2 rounded-full bg-yellow-500" />
          <span className="w-2 h-2 rounded-full bg-green-500" />
        </div>
        <span className="text-[10px] font-mono text-gray-500">patient-portal.medclinicx.com</span>
        <Lock className="w-3 h-3 text-green-400" />
      </div>

      {/* Patient header */}
      <div className="px-5 pt-5 pb-3 flex items-center gap-3 border-b border-brand-border/40">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-cyan/40 to-brand-indigo/40 border border-brand-cyan/25 flex items-center justify-center text-sm font-bold text-white">
          JD
        </div>
        <div>
          <p className="text-sm font-bold text-white">John Davidson</p>
          <p className="text-[10px] text-gray-500">Patient ID: MCX-2024-00341 · DOB: Mar 14, 1985</p>
        </div>
        <span className="ml-auto text-[9px] font-bold text-green-400 bg-green-400/10 border border-green-400/20 px-2 py-0.5 rounded-full">Active</span>
      </div>

      {/* Metric cards */}
      <div className="grid grid-cols-2 gap-3 p-4">
        {sections.map((s, i) => (
          <div key={i} className="glass-panel rounded-xl border border-brand-border p-3 flex items-center gap-2.5">
            <div className={`w-7 h-7 rounded-lg bg-brand-bg flex items-center justify-center ${s.color}`}>
              {s.icon}
            </div>
            <div>
              <p className="text-[9px] text-gray-500 font-medium">{s.label}</p>
              <p className="text-xs font-bold text-white">{s.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent doc row */}
      <div className="px-4 pb-4">
        <p className="text-[9px] font-bold text-gray-500 uppercase tracking-wider mb-2">Recent Documents</p>
        <div className="space-y-1.5">
          {["Blood Panel Report — Jun 12", "X-Ray Results — May 28", "Prescription: Atorvastatin"].map((doc, i) => (
            <div key={i} className="flex items-center justify-between text-[10px] text-gray-400 bg-brand-bg/40 border border-brand-border/30 rounded-lg px-3 py-2">
              <span className="flex items-center gap-1.5">
                <FileText className="w-3 h-3 text-brand-cyan" /> {doc}
              </span>
              <span className="text-brand-cyan">↓</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/** SEO Growth Dashboard — built in JSX */
function SEODashboardMockup() {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  const heights = [15, 22, 35, 52, 70, 100];

  return (
    <div className="rounded-2xl border border-brand-border overflow-hidden shadow-2xl bg-[#040D18]">
      <div className="bg-brand-bg px-4 py-2.5 border-b border-brand-border flex items-center justify-between">
        <span className="text-[10px] font-bold text-white flex items-center gap-1.5">
          <TrendingUp className="w-3.5 h-3.5 text-green-400" />
          Search Visibility Growth
        </span>
        <span className="text-[9px] text-gray-500">Last 6 months</span>
      </div>

      <div className="p-5">
        {/* Stat cards */}
        <div className="grid grid-cols-3 gap-3 mb-5">
          {[
            { label: "Monthly Visitors", before: "120", after: "2,500", icon: <Globe className="w-3.5 h-3.5" /> },
            { label: "Appt Requests", before: "—", after: "+45%", icon: <Calendar className="w-3.5 h-3.5" /> },
            { label: "Maps Ranking", before: "Page 3", after: "Top 3", icon: <Search className="w-3.5 h-3.5" /> },
          ].map((stat, i) => (
            <div key={i} className="glass-panel rounded-xl border border-brand-border p-3 text-center">
              <div className="text-green-400 flex justify-center mb-1">{stat.icon}</div>
              <p className="text-[11px] font-extrabold text-white">{stat.after}</p>
              <p className="text-[8px] text-gray-500 mt-0.5">{stat.label}</p>
              {stat.before !== "—" && (
                <p className="text-[8px] text-gray-600 line-through">{stat.before}</p>
              )}
            </div>
          ))}
        </div>

        {/* Bar chart */}
        <div className="flex items-end justify-between gap-2 h-24 px-1">
          {months.map((month, i) => (
            <div key={month} className="flex flex-col items-center gap-1 flex-1">
              <div
                className="w-full rounded-t-md bg-gradient-to-t from-brand-cyan/40 to-brand-cyan/80 border border-brand-cyan/30"
                style={{ height: `${heights[i]}%` }}
              />
              <span className="text-[8px] text-gray-500 font-medium">{month}</span>
            </div>
          ))}
        </div>
        <p className="text-[9px] text-gray-600 text-center mt-2">Organic Patient Visits / Month</p>
      </div>
    </div>
  );
}

/** Tech Architecture Diagram — built in JSX */
function TechArchitectureDiagram() {
  const nodes = [
    { icon: <Globe className="w-4 h-4" />, label: "Website", sub: "React · Next.js · TypeScript", color: "brand-cyan" },
    { icon: <LayoutDashboard className="w-4 h-4" />, label: "Patient Portal", sub: "FHIR · Secure Auth · HIPAA", color: "brand-indigo" },
    { icon: <Database className="w-4 h-4" />, label: "API Integration Layer", sub: "REST · GraphQL · HL7", color: "brand-cyan" },
    { icon: <Users className="w-4 h-4" />, label: "CRM & EHR Records", sub: "Epic · Cerner · Custom DBs", color: "brand-indigo" },
    { icon: <Bot className="w-4 h-4" />, label: "AI Automation", sub: "LLMs · Triage · SMS Flows", color: "brand-cyan" },
  ];

  return (
    <div className="relative flex flex-col items-center gap-0">
      {nodes.map((node, i) => (
        <React.Fragment key={node.label}>
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="w-full glass-panel border border-brand-border rounded-xl px-5 py-3.5 flex items-center gap-4 hover:border-brand-cyan/20 transition-colors"
          >
            <div className={`w-9 h-9 rounded-xl bg-${node.color}/10 border border-${node.color}/20 flex items-center justify-center shrink-0 text-${node.color}`}>
              {node.icon}
            </div>
            <div className="min-w-0">
              <p className="text-sm font-bold text-white leading-tight">{node.label}</p>
              <p className="text-[10px] text-gray-500 font-medium mt-0.5">{node.sub}</p>
            </div>
            <div className="ml-auto shrink-0">
              <span className="w-2 h-2 rounded-full bg-brand-cyan/60 inline-block animate-pulse" />
            </div>
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

// ── Main Component ─────────────────────────────────────────────────────────────

export default function HealthcareWebsitesClient() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqData: FAQItem[] = [
    {
      question: "1. How much does a healthcare website design project cost?",
      answer: "The cost of healthcare website design depends on the complexity, features, integrations, and customization required. A basic medical website, custom healthcare platform, and patient portal project all have different requirements. We customize our pricing based on whether you need simple physician listings, deep EHR integration, custom portal systems, or AI-powered automation workflows. Contact us to receive a transparent project proposal."
    },
    {
      question: "2. How long does it take to build a healthcare website?",
      answer: "The timeline depends on the size of the project. A standard medical website may take several weeks, while advanced healthcare platforms with portals, integrations, or custom AI automation require more development time. We follow an agile process to launch high-quality phases on-schedule while ensuring complete compliance and thorough QA testing."
    },
    {
      question: "3. Do you design websites specifically for doctors and medical practices?",
      answer: "Yes. Med Clinic X provides website design for doctors, physicians, clinics, hospitals, and healthcare organizations with healthcare-focused layouts and patient experiences. Our layouts are optimized specifically to address patient search intent, present physician credentials, highlight specialties, and streamline bookings."
    },
    {
      question: "4. Can you redesign an existing medical website?",
      answer: "Yes. We provide healthcare website redesign services to improve outdated designs, website performance, SEO visibility, and patient engagement. We carefully preserve your existing SEO rankings while modernizing your digital front door for higher conversions and mobile usability."
    },
    {
      question: "5. Do you build patient portals for healthcare organizations?",
      answer: "Yes. We develop patient portal solutions with features such as appointment management, document access, secure communication, and healthcare workflows. Our portal systems sync securely with your internal databases or EHR platforms using secure cryptographic pathways."
    },
    {
      question: "6. Are healthcare websites optimized for Google?",
      answer: "Yes. Our healthcare website development approach includes SEO-friendly structures designed to improve search visibility and help healthcare organizations attract more relevant visitors. We build structured JSON-LD schemas directly into the pages and tune page speeds to maximize visibility on Google Search and local Map packs."
    },
    {
      question: "7. Do you build websites for hospitals and healthcare groups?",
      answer: "Yes. We create scalable healthcare websites for hospitals, multi-location clinics, healthcare networks, and growing medical organizations. Our setups support complex routing architectures, location directories, and dynamic provider rosters."
    },
    {
      question: "8. Can you integrate appointment booking systems?",
      answer: "Yes. We can integrate appointment scheduling systems and create customized booking experiences based on your healthcare workflow. Whether you use Zocdoc, PatientPoint, custom APIs, or native calendars, we align the booking widgets seamlessly."
    },
    {
      question: "9. Do you provide AI healthcare solutions?",
      answer: "Yes. We help healthcare organizations implement AI-powered tools such as assistants, automation workflows, and patient communication solutions. This includes automated clinical triage assistance, SMS follow-up prompts, and instant customer service answering."
    },
    {
      question: "10. Why choose Med Clinic X instead of a general web design company?",
      answer: "Unlike general website agencies, Med Clinic X focuses specifically on healthcare technology. We understand patient journeys, healthcare workflows, compliance constraints, and the digital needs of medical organizations. We don't just build websites; we build scalable B2B healthcare growth platforms."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-6 md:py-12 relative">
      {/* Background glow effects */}
      <div className="fixed top-0 right-1/4 w-[500px] h-[500px] bg-brand-cyan/4 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="fixed top-[800px] left-1/4 w-[500px] h-[500px] bg-brand-indigo/4 rounded-full blur-[120px] -z-10 pointer-events-none" />

      {/* Back button & Breadcrumb */}
      <div className="mb-10 flex items-center justify-between">
        <Link
          href="/services"
          className="inline-flex items-center space-x-2 text-xs font-semibold text-gray-500 hover:text-white transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <span>Back to Services</span>
        </Link>
        <nav className="hidden sm:flex items-center space-x-2 text-xs text-gray-500 font-medium">
          <Link href="/" className="hover:text-brand-cyan transition-colors">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-brand-cyan transition-colors">Services</Link>
          <span>/</span>
          <span className="text-gray-300 font-semibold">Healthcare Websites</span>
        </nav>
      </div>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* SECTION 1: HERO */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 space-y-6"
        >
          <div className="inline-flex items-center space-x-2 bg-brand-cyan/15 rounded-full px-4 py-1 border border-brand-cyan/20">
            <Sparkles className="w-3.5 h-3.5 text-brand-cyan animate-pulse" />
            <span className="text-xs font-bold text-brand-cyan uppercase tracking-wider">Premium Web Design</span>
          </div>

          <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
            Healthcare Website Design & Development for Healthcare Organizations That Want to Grow
          </h1>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Your healthcare website is more than a digital brochure. Med Clinic X engineers high-performance clinic and hospital platforms built to convert visitors into patients, dominate local search, and sync with your EHR systems.
          </p>

          <div className="flex flex-wrap gap-3 text-xs font-medium text-gray-400">
            {["99/100 Lighthouse Speed", "HIPAA Compliant", "EHR Integrations", "Local SEO Ready"].map((badge, i) => (
              <span key={i} className="flex items-center gap-1.5 bg-brand-bg border border-brand-border px-3 py-1.5 rounded-full">
                <CheckCircle2 className="w-3 h-3 text-brand-cyan" />{badge}
              </span>
            ))}
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-bold text-sm px-8 py-4 rounded-xl shadow-lg shadow-brand-cyan/15 hover:scale-[1.01] active:scale-[0.99] transition-all"
            >
              Build Your Healthcare Website
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#faqs"
              className="inline-flex items-center justify-center glass-panel border border-brand-border hover:border-brand-cyan/35 text-sm font-semibold text-gray-300 hover:text-white px-8 py-4 rounded-xl transition-all"
            >
              Read FAQs
            </Link>
          </div>
        </motion.div>

        {/* Right: Healthcare Dashboard Image */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-6 relative group"
        >
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-brand-cyan/20 to-brand-indigo/20 blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
          <div className="relative rounded-2xl overflow-hidden border border-brand-cyan/20 shadow-2xl bg-brand-bg">
            <div className="bg-brand-bg/90 px-4 py-2 border-b border-brand-border/60 flex items-center justify-between text-[10px] text-gray-500 font-mono">
              <span>healthcare-analytics-dashboard.png</span>
              <span className="text-brand-cyan font-bold">LIVE DEMO</span>
            </div>
            <Image
              src="/hw_hero_dashboard.png"
              alt="Healthcare Analytics Dashboard — Patient Growth, Appointments, Satisfaction"
              width={700}
              height={480}
              className="w-full h-auto object-cover opacity-95 group-hover:scale-[1.01] transition-transform duration-500"
              priority
            />
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* SECTION 2: DIGITAL FRONT DOOR — with Before/After */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="mb-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-brand-cyan/15 rounded-full px-3.5 py-1 mb-4">
            <Globe className="w-4 h-4 text-brand-cyan" />
            <span className="text-xs font-bold text-brand-cyan uppercase tracking-wider">Patient Intent Overview</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Your Website Is Your Digital Front Door
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-400 leading-relaxed">
            Before calling a healthcare provider, most patients search online. They expect a seamless, professional experience that answers key queries in seconds. If your site is slow, outdated, or hard to navigate — they leave.
          </p>
        </div>

        {/* Q&A two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          <div className="glass-panel p-7 rounded-2xl border border-brand-border/80 flex flex-col justify-between hover:border-brand-cyan/15 transition-all">
            <div>
              <h3 className="font-display font-bold text-lg text-white mb-5 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-brand-indigo" />
                What Patients Search to Evaluate You
              </h3>
              <ul className="space-y-3">
                {[
                  "Is this healthcare provider trustworthy?",
                  "What services do they offer?",
                  "Do they accept new patients?",
                  "Can I book an appointment easily?",
                  "Does this practice look professional?",
                ].map((question, i) => (
                  <li key={i} className="flex items-start gap-3 p-3 rounded-xl bg-brand-bg/40 border border-brand-border/30">
                    <span className="w-5 h-5 rounded-full bg-brand-indigo/10 border border-brand-indigo/20 flex items-center justify-center text-[9px] font-bold text-brand-indigo shrink-0 mt-0.5">?</span>
                    <span className="text-sm text-gray-300 leading-relaxed">{question}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="glass-panel p-7 rounded-2xl border border-brand-cyan/10 bg-gradient-to-br from-brand-cyan/5 to-transparent hover:border-brand-cyan/20 transition-all">
            <h3 className="font-display font-bold text-lg text-white mb-5 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-brand-cyan" />
              Our Website Design Outcomes
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Easier to discover", desc: "Rank high for local healthcare searches on Google Maps and organic grids." },
                { title: "Easier to understand", desc: "Clear navigation paths for services, specialties, and doctor credentials." },
                { title: "Easier to contact", desc: "Fluid scheduling widgets and intake forms designed to optimize capture." },
                { title: "More trustworthy", desc: "Modern, professional layouts representing your medical authority." },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-xl bg-brand-bg/50 border border-brand-border/40 hover:border-brand-cyan/20 transition-all">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-brand-cyan font-bold">✓</span>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">{item.title}</h4>
                  </div>
                  <p className="text-[11px] text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Before / After Image */}
        <div className="relative rounded-2xl overflow-hidden border border-brand-border group">
          <div className="bg-brand-bg/90 px-4 py-2 border-b border-brand-border flex items-center justify-between text-[10px] text-gray-500 font-mono">
            <span>website-redesign-comparison.png</span>
            <div className="flex items-center gap-3">
              <span className="text-red-400 font-bold">❌ Before</span>
              <span className="text-brand-cyan font-bold">✅ After</span>
            </div>
          </div>
          <Image
            src="/hw_before_after.png"
            alt="Healthcare website redesign — Before vs After comparison"
            width={1200}
            height={600}
            className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
          />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* SECTION 3: PATIENT JOURNEY — flow diagram */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="mb-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-brand-cyan/15 rounded-full px-3.5 py-1 mb-4">
            <Users className="w-4 h-4 text-brand-cyan" />
            <span className="text-xs font-bold text-brand-cyan uppercase tracking-wider">Patient Lifecycle</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            How Patients Find, Choose & Stay With Your Practice
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-400 leading-relaxed">
            Patients expect digital experiences similar to the platforms they use every day. A well-engineered healthcare website is the foundation of every step in their journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Pillars */}
          <div className="lg:col-span-7 space-y-4">
            {[
              {
                icon: <Users className="w-5 h-5 text-brand-cyan" />,
                title: "Patient-Focused UX Design",
                desc: "We design intuitive layouts modeled after real patient journeys — helping users find services, doctor bios, and locations in as few clicks as possible.",
                tags: ["Medical services", "Provider bios", "Treatment details", "Location maps"],
              },
              {
                icon: <Search className="w-5 h-5 text-brand-cyan" />,
                title: "SEO Website Foundation",
                desc: "A beautiful website is not enough if patients cannot discover it. Our design process includes structured SEO frameworks built to dominate organic search results.",
                tags: ["Service-page schemas", "Multi-location SEO", "Doctor schemas", "Speed tuning"],
              },
              {
                icon: <Activity className="w-5 h-5 text-brand-cyan" />,
                title: "Conversion-Focused Design",
                desc: "Your website should encourage patients to take direct actions. We build high-converting flows that turn casual visitors into loyal clinic patients.",
                tags: ["Booking widgets", "HIPAA contact forms", "Clear calls-to-action", "Trust widgets"],
              },
            ].map((pillar, i) => (
              <div key={i} className="glass-panel p-5 rounded-2xl border border-brand-border flex gap-4 hover:border-brand-cyan/15 transition-all group">
                <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center shrink-0 group-hover:bg-brand-cyan/20 transition-all">
                  {pillar.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-base text-white">{pillar.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{pillar.desc}</p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {pillar.tags.map((tag, j) => (
                      <span key={j} className="bg-brand-bg/40 border border-brand-border/40 text-[9px] text-gray-400 px-2.5 py-0.5 rounded-full">• {tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Patient Journey Diagram */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-brand-cyan/15 to-brand-indigo/15 blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
            <div className="relative rounded-2xl overflow-hidden border border-brand-cyan/15 bg-brand-bg shadow-2xl">
              <div className="bg-brand-bg/90 px-4 py-2 border-b border-brand-border flex items-center justify-between text-[10px] text-gray-500 font-mono">
                <span>patient-journey-map.png</span>
                <span className="text-brand-cyan font-bold">WORKFLOW</span>
              </div>
              <Image
                src="/hw_patient_journey.png"
                alt="Patient Journey — From Google Search to Appointment Booking"
                width={500}
                height={600}
                className="w-full h-auto object-cover opacity-90 group-hover:scale-[1.01] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* SECTION 4: CAPABILITIES + WEBSITE SCREENSHOTS */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="mb-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-brand-cyan/15 rounded-full px-3.5 py-1 mb-4">
            <Layers className="w-4 h-4 text-brand-cyan" />
            <span className="text-xs font-bold text-brand-cyan uppercase tracking-wider">Services Matrix</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Medical Website Design & Development Services
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-400 leading-relaxed">
            Every healthcare organization has unique clinical workflows. We develop tailored solutions instead of rigid templates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">
          <div className="lg:col-span-6 glass-panel p-7 rounded-2xl border border-brand-border hover:border-brand-cyan/15 transition-all flex flex-col">
            <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center mb-5">
              <Users className="w-5 h-5 text-brand-cyan" />
            </div>
            <h3 className="font-display font-bold text-xl text-white mb-3">Medical Practice Website Design</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              We build professional medical websites for doctors, physicians, and healthcare practices that want to improve their online presence — designed to communicate your expertise and convert visitors.
            </p>
            <div className="border-t border-brand-border/40 pt-4 mt-auto">
              <span className="text-[10px] uppercase font-bold text-brand-indigo tracking-wider block mb-2">Ideal for:</span>
              <div className="flex flex-wrap gap-2">
                {["Primary care doctors", "Specialists", "Private practices", "Medical clinics", "Healthcare groups"].map((item, idx) => (
                  <span key={idx} className="bg-brand-bg border border-brand-border/60 text-[10px] text-gray-400 px-2.5 py-1 rounded-md">{item}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 glass-panel p-7 rounded-2xl border border-brand-border hover:border-brand-cyan/15 transition-all flex flex-col">
            <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center mb-5">
              <Laptop className="w-5 h-5 text-brand-cyan" />
            </div>
            <h3 className="font-display font-bold text-xl text-white mb-3">Healthcare Website Development</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              We build secure, robust database infrastructures, HIPAA-compliant patient intake workflows, and custom medical integrations tailored to clinic routines — avoiding templates to engineer fast, clean Next.js platforms.
            </p>
            <div className="border-t border-brand-border/40 pt-4 mt-auto">
              <span className="text-[10px] uppercase font-bold text-brand-cyan tracking-wider block mb-2">Capabilities:</span>
              <div className="flex flex-wrap gap-2">
                {["Custom websites", "Medical web applications", "Patient portals", "Healthcare dashboards", "Third-party integrations", "SaaS platforms"].map((item, idx) => (
                  <span key={idx} className="bg-brand-bg border border-brand-border/60 text-[10px] text-gray-400 px-2.5 py-1 rounded-md">{item}</span>
                ))}
              </div>
            </div>
          </div>

          {[
            { icon: <Layers className="w-4 h-4 text-brand-cyan" />, title: "Healthcare Website Redesign", desc: "An outdated website can impact patient trust. We help organizations modernize their digital presence, improving speed, mobile optimization, and user navigation.", features: ["Speed audit upgrades", "Fully responsive mobile grids", "Preserved keyword SEO maps"] },
            { icon: <Cpu className="w-4 h-4 text-brand-cyan" />, title: "AI Healthcare Solutions", desc: "Modern clinical teams adopt AI tools to enhance patient communication. We integrate workflows that reduce administration hours and simplify follow-ups.", features: ["AI Healthcare Assistants", "Appointment automation tools", "Communication automations"] },
            { icon: <Lock className="w-4 h-4 text-brand-cyan" />, title: "Patient Portal Development", desc: "Secure patient portal solutions connecting providers with patients — medical files, prescription charts, scheduling, and billing invoices.", features: ["Patient credential login", "Diagnostic reports repository", "Secure message lockers"] },
          ].map((card, idx) => (
            <div key={idx} className="lg:col-span-4 glass-panel p-6 rounded-2xl border border-brand-border hover:border-brand-cyan/15 transition-all flex flex-col">
              <div className="w-9 h-9 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center mb-4">{card.icon}</div>
              <h4 className="font-display font-bold text-lg text-white mb-2">{card.title}</h4>
              <p className="text-xs text-gray-400 leading-relaxed flex-1">{card.desc}</p>
              <ul className="mt-4 space-y-1.5 text-[10px] text-gray-500 font-medium border-t border-brand-border/40 pt-4">
                {card.features.map((f, fi) => (
                  <li key={fi} className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-brand-cyan shrink-0" />{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Website Screenshots Collage */}
        <div className="relative rounded-2xl overflow-hidden border border-brand-border group">
          <div className="bg-brand-bg/90 px-4 py-2.5 border-b border-brand-border flex items-center justify-between text-[10px] text-gray-500 font-mono">
            <span>healthcare-website-product-screenshots.png</span>
            <span className="text-brand-cyan font-bold">PRODUCT PREVIEW</span>
          </div>
          <Image
            src="/hw_website_screenshots.png"
            alt="Healthcare website product screenshots — Doctor profile, service page, mobile booking"
            width={1200}
            height={500}
            className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
          />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* SECTION 5: AI CHAT MOCKUP */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: AI Chat */}
          <div className="lg:col-span-5 order-last lg:order-first">
            <AIChatMockup />
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center space-x-2 bg-brand-cyan/15 rounded-full px-3.5 py-1">
              <Cpu className="w-4 h-4 text-brand-cyan" />
              <span className="text-xs font-bold text-brand-cyan uppercase tracking-wider">AI Healthcare Integration</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
              AI-Powered Assistant & Secure Patient Portals
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              We build secure patient portal solutions that improve communication between providers and patients. Patients expect convenient digital access — lab results, secure messaging, and appointment recall systems.
            </p>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              By pairing secure portal dashboards with custom AI-powered healthcare solutions, we create smarter workflows for clinic administration and offer instant triage for incoming patient queries.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[
                { title: "Appointment Automation", desc: "Reduce manual phone schedules with AI-driven self-booking calendars." },
                { title: "Secure Document Vaults", desc: "Encrypted cloud lockers for patient records and lab reports." },
                { title: "24/7 Patient Triage", desc: "AI assistant answers common queries without staff involvement." },
                { title: "Smart Recall Flows", desc: "Automated SMS sequences that bring patients back for checkups." },
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">{item.title}</h4>
                    <p className="text-[11px] text-gray-400 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* SECTION 6: PATIENT PORTAL DASHBOARD */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Content */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center space-x-2 bg-brand-cyan/15 rounded-full px-3.5 py-1">
              <LayoutDashboard className="w-4 h-4 text-brand-cyan" />
              <span className="text-xs font-bold text-brand-cyan uppercase tracking-wider">Patient Portal Development</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
              Secure Patient Dashboards That Drive Engagement
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              We build clinical front doors that empower patients to access imaging scans, review prescription details, chat securely with nurses, and pay in installments — all in one secure dashboard.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: <FileText className="w-4 h-4 text-brand-cyan" />, title: "FHIR Medical Records", desc: "X-rays, CBCT scans, lab panels synced directly to patient charts." },
                { icon: <CreditCard className="w-4 h-4 text-brand-cyan" />, title: "Stripe Installment Billing", desc: "Break treatment costs into automated billing phases." },
                { icon: <MessageSquare className="w-4 h-4 text-brand-cyan" />, title: "HIPAA-Secure Messaging", desc: "Encrypted patient-to-clinician direct messaging." },
                { icon: <Shield className="w-4 h-4 text-brand-cyan" />, title: "Cryptographic Access Log", desc: "Append-only audit trail for all record access events." },
              ].map((item, i) => (
                <div key={i} className="glass-panel p-4 rounded-xl border border-brand-border hover:border-brand-cyan/15 transition-colors flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-cyan/10 border border-brand-cyan/15 flex items-center justify-center shrink-0">{item.icon}</div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{item.title}</h4>
                    <p className="text-[11px] text-gray-400 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Portal mockup */}
          <div className="lg:col-span-5">
            <PatientPortalMockup />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* SECTION 7: SEO GROWTH DASHBOARD */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: SEO Dashboard */}
          <div className="lg:col-span-5 order-last lg:order-first">
            <SEODashboardMockup />
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center space-x-2 bg-brand-cyan/15 rounded-full px-3.5 py-1">
              <Search className="w-4 h-4 text-brand-cyan" />
              <span className="text-xs font-bold text-brand-cyan uppercase tracking-wider">Healthcare SEO Foundation</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
              Built to Rank. Engineered to Convert.
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              A beautiful website is only valuable if patients can find it. Our healthcare websites are built with an SEO foundation that helps clinics dominate local Google Search and Maps results — turning organic traffic into booked appointments.
            </p>
            <div className="space-y-3">
              {[
                { metric: "Local Map Pack Ranking", result: "Top 3 positions in target counties" },
                { metric: "Organic Visitor Growth", result: "From 120 to 2,500+ monthly visitors" },
                { metric: "Appointment Request Rate", result: "+45% increase in online bookings" },
                { metric: "Lead Acquisition Cost", result: "From $80–120 paid ads → $12–18 organic" },
              ].map((row, i) => (
                <div key={i} className="flex items-center justify-between glass-panel px-4 py-3 rounded-xl border border-brand-border">
                  <span className="text-sm text-gray-400 font-medium">{row.metric}</span>
                  <span className="text-sm font-bold text-brand-cyan">{row.result}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* SECTION 8: TECH ARCHITECTURE + STACK */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="mb-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-brand-cyan/15 rounded-full px-3.5 py-1 mb-4">
            <Code2 className="w-4 h-4 text-brand-cyan" />
            <span className="text-xs font-bold text-brand-cyan uppercase tracking-wider">Platform Architecture</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Healthcare Platform Architecture We Build
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-400 leading-relaxed">
            From a simple clinic website to a full enterprise healthcare platform — we architect every layer to be secure, scalable, and EHR-ready.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Architecture Diagram */}
          <div className="lg:col-span-5">
            <TechArchitectureDiagram />
          </div>

          {/* Right: Technology Stack */}
          <div className="lg:col-span-7 space-y-5">
            <h3 className="font-display font-bold text-xl text-white flex items-center gap-2.5">
              <span className="w-1 h-5 bg-brand-cyan rounded-full inline-block" />
              Our Technology Stack
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  label: "Frontend", icon: <Zap className="w-4 h-4 text-brand-cyan" />,
                  items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
                },
                {
                  label: "Backend", icon: <Database className="w-4 h-4 text-brand-cyan" />,
                  items: ["Node.js", "REST APIs", "GraphQL", "PostgreSQL", "Prisma ORM"],
                },
                {
                  label: "Cloud & Infrastructure", icon: <Cloud className="w-4 h-4 text-brand-cyan" />,
                  items: ["AWS S3 & EC2", "Vercel Edge", "Google Cloud", "Cloudflare CDN", "Docker / CI/CD"],
                },
                {
                  label: "Healthcare Solutions", icon: <Shield className="w-4 h-4 text-brand-cyan" />,
                  items: ["FHIR APIs", "Patient Portals", "AI Automation", "HIPAA Compliance", "EHR Integrations"],
                },
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

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* SECTION 9: TARGET AUDIENCE */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="mb-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-brand-cyan/15 rounded-full px-3.5 py-1 mb-4">
            <Bookmark className="w-4 h-4 text-brand-cyan" />
            <span className="text-xs font-bold text-brand-cyan uppercase tracking-wider">Target Segments</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Built For Healthcare Organizations Like Yours
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-400 leading-relaxed">
            Whether you operate a private clinic, manage a multi-department hospital, or are launching a new startup — our digital frameworks scale around your scope.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              icon: <Users className="w-6 h-6 text-brand-cyan" />,
              segment: "01 // Doctors & Physicians",
              title: "Doctors & Physicians",
              desc: "Create a professional online presence that represents your expertise and helps new patients discover your practice.",
              highlights: ["Solo & group practices", "Specialty pages", "EHR booking widgets"],
            },
            {
              icon: <Activity className="w-6 h-6 text-brand-cyan" />,
              segment: "02 // Medical Clinics",
              title: "Medical Clinics",
              desc: "Build a healthcare website designed around patient acquisition, appointment scheduling, and practice growth.",
              highlights: ["Multi-provider directories", "HIPAA intake forms", "Location SEO"],
            },
            {
              icon: <Globe className="w-6 h-6 text-brand-cyan" />,
              segment: "03 // Hospitals",
              title: "Hospitals & Healthcare Groups",
              desc: "Develop scalable digital experiences that support multiple departments, services, and patient needs across locations.",
              highlights: ["Department routing", "Multi-location SEO", "Patient portals"],
            },
            {
              icon: <Zap className="w-6 h-6 text-brand-cyan" />,
              segment: "04 // Startups",
              title: "Healthcare Startups",
              desc: "Launch healthcare products, platforms, and SaaS solutions with modern, robust compliance technology from day one.",
              highlights: ["MVP development", "HIPAA architecture", "AI integrations"],
            },
          ].map((item, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-2xl border border-brand-border hover:border-brand-cyan/20 hover:-translate-y-1 transition-all flex flex-col group">
              <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center mb-4 group-hover:bg-brand-cyan/20 transition-all">
                {item.icon}
              </div>
              <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-wider mb-1">{item.segment}</span>
              <h3 className="font-display font-bold text-base text-white mb-2">{item.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed flex-1">{item.desc}</p>
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

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* SECTION 10: WHY CHOOSE MED CLINIC X */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="mb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 space-y-5">
          <div className="inline-flex items-center space-x-2 bg-brand-cyan/15 rounded-full px-3.5 py-1">
            <Workflow className="w-4 h-4 text-brand-cyan" />
            <span className="text-xs font-bold text-brand-cyan uppercase tracking-wider">Competitive Edge</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Why Choose Med Clinic X for Healthcare Website Design?
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            General digital agencies struggle with medical terminology, HIPAA parameters, local search schemas, and patient check-in paths. Med Clinic X focuses strictly on medical technology.
          </p>

          {/* Trust badges */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: <Shield className="w-4 h-4 text-brand-cyan" />, label: "HIPAA Compliant" },
              { icon: <Zap className="w-4 h-4 text-brand-cyan" />, label: "99/100 Speed Score" },
              { icon: <Search className="w-4 h-4 text-brand-cyan" />, label: "Local SEO Ready" },
              { icon: <CheckCircle2 className="w-4 h-4 text-brand-cyan" />, label: "ADA Accessible" },
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-2 glass-panel border border-brand-border px-3 py-2.5 rounded-xl">
                {badge.icon}
                <span className="text-xs font-semibold text-gray-300">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7 space-y-4">
          {[
            {
              title: "Healthcare Industry Understanding",
              desc: "Healthcare websites require more than attractive design. They require patient trust, clear communication, accessibility, security-focused development, and HIPAA-compliant workflows. We combine clinical knowledge with modern web development to build solutions supporting both providers and patients.",
            },
            {
              title: "More Than A Website — A Healthcare Growth Platform",
              desc: "Your healthcare website can become the foundation for patient acquisition, online appointment scheduling, patient communication, healthcare automation, digital healthcare products, and future technology integrations. We help you move beyond a basic brochure website and build a complete healthcare digital ecosystem.",
            },
            {
              title: "Transparent Engineering Process",
              desc: "From wireframes and compliance audits to QA testing and post-launch monitoring — we keep you informed at every stage. No hidden costs, no bloated timelines. We build on a milestone-based delivery model.",
            },
          ].map((item, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-2xl border border-brand-border hover:border-brand-cyan/15 transition-all">
              <h3 className="font-display font-bold text-lg text-white mb-2 flex items-center gap-2.5">
                <span className="w-1 h-5 bg-brand-cyan rounded-sm shrink-0" />
                {item.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* SECTION 11: CASE STUDIES */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="mb-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-brand-cyan/15 rounded-full px-3.5 py-1 mb-4">
            <Activity className="w-4 h-4 text-brand-cyan" />
            <span className="text-xs font-bold text-brand-cyan uppercase tracking-wider">Healthcare Projects</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Healthcare Projects We Have Built
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-400 leading-relaxed">
            Real-world healthcare platforms built for growth, compliance, and patient engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              category: "AI Platform",
              title: "Radiology AI Reporting Platform",
              challenge: "Slow manual reporting workflow causing 48hr turnaround delays for radiologists.",
              solution: "AI-powered reporting system with LLM-assisted draft generation and DICOM viewer integration.",
              result: "Report turnaround reduced from 48 hours to under 4 hours.",
              tag: "AI & Automation",
              color: "brand-indigo",
            },
            {
              category: "Patient Portal",
              title: "Multi-Clinic Patient Portal Rebuild",
              challenge: "Outdated patient portal with poor mobile UX, no FHIR sync, and low 18% adoption rate.",
              solution: "Full Next.js portal rebuild with FHIR API, Stripe installment billing, and HIPAA-secure messaging.",
              result: "Patient adoption increased from 18% to 82% within 3 months of launch.",
              tag: "Portal Development",
              color: "brand-cyan",
            },
            {
              category: "SEO Growth",
              title: "Regional Orthopedic Group SEO",
              challenge: "Hidden on Google Maps, generating only 120 organic visitors per month across 6 locations.",
              solution: "Multi-location SEO strategy with JSON-LD schema, map-pack optimization, and review automation.",
              result: "Organic traffic grew to 2,500+ monthly visitors with Top 3 Maps ranking across all locations.",
              tag: "Growth & SEO",
              color: "brand-cyan",
            },
          ].map((study, i) => (
            <div key={i} className="glass-panel rounded-2xl border border-brand-border overflow-hidden hover:border-brand-cyan/20 transition-all group flex flex-col">
              <div className={`h-1.5 bg-gradient-to-r from-${study.color} to-brand-indigo`} />
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[9px] font-bold text-${study.color} uppercase tracking-wider bg-${study.color}/10 border border-${study.color}/20 px-2.5 py-1 rounded-full`}>
                    {study.category}
                  </span>
                  <span className="text-[9px] text-gray-600 font-medium">{study.tag}</span>
                </div>
                <h3 className="font-display font-bold text-base text-white mb-4 group-hover:text-brand-cyan transition-colors leading-snug">{study.title}</h3>
                <div className="space-y-3 flex-1">
                  {[
                    { label: "Challenge", text: study.challenge, color: "text-red-400" },
                    { label: "Solution", text: study.solution, color: "text-yellow-400" },
                    { label: "Result", text: study.result, color: "text-green-400" },
                  ].map((row, ri) => (
                    <div key={ri}>
                      <p className={`text-[9px] font-bold uppercase tracking-wider ${row.color} mb-0.5`}>{row.label}</p>
                      <p className="text-xs text-gray-400 leading-relaxed">{row.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* SECTION 12: FAQ */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section id="faqs" className="mb-24 scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-brand-cyan/15 rounded-full px-3.5 py-1 mb-4">
            <Calendar className="w-4 h-4 text-brand-cyan" />
            <span className="text-xs font-bold text-brand-cyan uppercase tracking-wider">Knowledge Base</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-400 leading-relaxed">
            Learn more about our design timelines, medical development workflows, budgets, and compliance safeguards.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-3">
          {faqData.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div key={index} className="glass-panel rounded-2xl border border-brand-border overflow-hidden transition-colors duration-300">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-display font-bold text-sm sm:text-base text-white hover:text-brand-cyan transition-colors focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 shrink-0 ml-4 ${isOpen ? "rotate-180 text-brand-cyan" : ""}`} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm text-gray-400 leading-relaxed border-t border-brand-border/30">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* SECTION 13: FINAL CTA */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="relative rounded-3xl overflow-hidden border border-brand-cyan/20">
        {/* Background gradient pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#071828] via-[#0a1f30] to-[#0d1a2e]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(6,182,212,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.10),transparent_60%)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-cyan/40 to-transparent" />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

        <div className="relative p-10 sm:p-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-brand-cyan/15 rounded-full px-3 py-1 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-brand-cyan animate-pulse" />
            <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-wider">Ready to Build?</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight mb-4 max-w-3xl mx-auto">
            Ready To Build Your Healthcare Digital Experience?
          </h2>

          <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-8 max-w-xl mx-auto">
            Book a discovery call with our digital health engineering specialists to audit your current platform, calculate ROI, and plan your full software rollout.
          </p>

          {/* Trust stats row */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {[
              { value: "99/100", label: "Average Lighthouse Score" },
              { value: "82%", label: "Patient Portal Adoption" },
              { value: "3.2×", label: "Organic Lead Increase" },
              { value: "68%", label: "No-Show Reduction" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="font-display font-extrabold text-2xl text-brand-cyan">{stat.value}</p>
                <p className="text-[10px] text-gray-500 font-medium mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-bold text-sm px-8 py-4 rounded-xl shadow-lg shadow-brand-cyan/20 hover:scale-[1.01] active:scale-[0.99] transition-all"
            >
              Schedule a Discovery Call
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center glass-panel border border-brand-border/60 hover:border-brand-cyan/25 text-sm font-semibold text-gray-300 hover:text-white px-8 py-4 rounded-xl transition-all"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
