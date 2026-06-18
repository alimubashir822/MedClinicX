"use client";

import React, { useState, useEffect } from "react";
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
  XCircle,
  CheckCircle,
  Clock,
  Rocket,
  BarChart3,
  Smartphone,
  MapPin,
  List,
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

function AIChatMockup() {
  const messages = [
    { from: "patient", text: "Can I book an appointment tomorrow?" },
    { from: "ai",      text: "Yes! Dr. Smith has availability at 10:30 AM and 2:00 PM tomorrow." },
    { from: "patient", text: "10:30 AM works for me." },
    { from: "ai",      text: "Done! Your appointment is confirmed for tomorrow at 10:30 AM with Dr. Smith. You'll receive a confirmation SMS shortly.", cta: "View Appointment" },
  ];
  return (
    <div className="rounded-2xl border border-brand-border overflow-hidden shadow-2xl bg-[#040D18]">
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
      <div className="p-4 space-y-3 min-h-[220px]">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.from === "patient" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[80%] ${msg.from === "patient"
              ? "bg-brand-cyan/15 border border-brand-cyan/20 text-gray-200 rounded-2xl rounded-tr-sm"
              : "bg-brand-bg/80 border border-brand-border text-gray-300 rounded-2xl rounded-tl-sm"
            } px-3.5 py-2.5 text-xs leading-relaxed`}>
              {msg.from === "ai" && <p className="text-[9px] font-bold text-brand-cyan uppercase tracking-wider mb-1">AI Assistant</p>}
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
      <div className="border-t border-brand-border p-3 flex gap-2">
        <div className="flex-1 bg-brand-bg/60 border border-brand-border rounded-xl px-3 py-2 text-[11px] text-gray-500">Type your message...</div>
        <button className="w-8 h-8 rounded-xl bg-brand-cyan/15 border border-brand-cyan/25 flex items-center justify-center shrink-0">
          <ArrowRight className="w-3.5 h-3.5 text-brand-cyan" />
        </button>
      </div>
    </div>
  );
}

function PatientPortalMockup() {
  const items = [
    { icon: <FileText className="w-3.5 h-3.5" />, label: "Medical History", value: "14 Records",    color: "text-brand-cyan" },
    { icon: <Calendar className="w-3.5 h-3.5" />, label: "Appointments",    value: "Next: Tue 9AM", color: "text-brand-indigo" },
    { icon: <CreditCard className="w-3.5 h-3.5" />, label: "Billing",       value: "$240 Due",      color: "text-yellow-400" },
    { icon: <Bell className="w-3.5 h-3.5" />,      label: "Messages",      value: "2 Unread",      color: "text-green-400" },
  ];
  return (
    <div className="rounded-2xl border border-brand-border overflow-hidden shadow-2xl bg-[#040D18]">
      <div className="bg-brand-bg px-4 py-2.5 border-b border-brand-border flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-500" />
          <span className="w-2 h-2 rounded-full bg-yellow-500" />
          <span className="w-2 h-2 rounded-full bg-green-500" />
        </div>
        <span className="text-[10px] font-mono text-gray-500">patient-portal.medclinicx.com</span>
        <Lock className="w-3 h-3 text-green-400" />
      </div>
      <div className="px-5 pt-4 pb-3 flex items-center gap-3 border-b border-brand-border/40">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-cyan/40 to-brand-indigo/40 border border-brand-cyan/25 flex items-center justify-center text-sm font-bold text-white">JD</div>
        <div>
          <p className="text-sm font-bold text-white">John Davidson</p>
          <p className="text-[10px] text-gray-500">Patient ID: MCX-2024-00341 · DOB: Mar 14, 1985</p>
        </div>
        <span className="ml-auto text-[9px] font-bold text-green-400 bg-green-400/10 border border-green-400/20 px-2 py-0.5 rounded-full">Active</span>
      </div>
      <div className="grid grid-cols-2 gap-3 p-4">
        {items.map((s, i) => (
          <div key={i} className="glass-panel rounded-xl border border-brand-border p-3 flex items-center gap-2.5">
            <div className={`w-7 h-7 rounded-lg bg-brand-bg flex items-center justify-center ${s.color}`}>{s.icon}</div>
            <div>
              <p className="text-[9px] text-gray-500 font-medium">{s.label}</p>
              <p className="text-xs font-bold text-white">{s.value}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="px-4 pb-4">
        <p className="text-[9px] font-bold text-gray-500 uppercase tracking-wider mb-2">Recent Documents</p>
        <div className="space-y-1.5">
          {["Blood Panel Report — Jun 12", "X-Ray Results — May 28", "Prescription: Atorvastatin"].map((doc, i) => (
            <div key={i} className="flex items-center justify-between text-[10px] text-gray-400 bg-brand-bg/40 border border-brand-border/30 rounded-lg px-3 py-2">
              <span className="flex items-center gap-1.5"><FileText className="w-3 h-3 text-brand-cyan" />{doc}</span>
              <span className="text-brand-cyan">↓</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SEODashboardMockup() {
  const months  = ["Jan","Feb","Mar","Apr","May","Jun"];
  const heights = [15, 22, 35, 52, 70, 100];
  return (
    <div className="rounded-2xl border border-brand-border overflow-hidden shadow-2xl bg-[#040D18]">
      <div className="bg-brand-bg px-4 py-2.5 border-b border-brand-border flex items-center justify-between">
        <span className="text-[10px] font-bold text-white flex items-center gap-1.5">
          <TrendingUp className="w-3.5 h-3.5 text-green-400" />Search Visibility Growth
        </span>
        <span className="text-[9px] text-gray-500">Last 6 months</span>
      </div>
      <div className="p-5">
        <div className="grid grid-cols-3 gap-3 mb-5">
          {[
            { label:"Monthly Visitors", after:"2,500+",  icon:<Globe className="w-3.5 h-3.5" />,    before:"120" },
            { label:"Appt Requests",    after:"+45%",    icon:<Calendar className="w-3.5 h-3.5" />, before:"—" },
            { label:"Maps Ranking",     after:"Top 3",   icon:<Search className="w-3.5 h-3.5" />,   before:"Page 3" },
          ].map((s,i)=>(
            <div key={i} className="glass-panel rounded-xl border border-brand-border p-3 text-center">
              <div className="text-green-400 flex justify-center mb-1">{s.icon}</div>
              <p className="text-[11px] font-extrabold text-white">{s.after}</p>
              <p className="text-[8px] text-gray-500 mt-0.5">{s.label}</p>
              {s.before !== "—" && <p className="text-[8px] text-gray-600 line-through">{s.before}</p>}
            </div>
          ))}
        </div>
        <div className="flex items-end justify-between gap-2 h-24 px-1">
          {months.map((m, i) => (
            <div key={m} className="flex flex-col items-center gap-1 flex-1">
              <div className="w-full rounded-t-md bg-gradient-to-t from-brand-cyan/40 to-brand-cyan/80 border border-brand-cyan/30" style={{ height:`${heights[i]}%` }} />
              <span className="text-[8px] text-gray-500 font-medium">{m}</span>
            </div>
          ))}
        </div>
        <p className="text-[9px] text-gray-600 text-center mt-2">Organic Patient Visits / Month</p>
      </div>
    </div>
  );
}

function TechArchitectureDiagram() {
  const nodes = [
    { icon:<Globe className="w-4 h-4" />,         label:"Website",               sub:"React · Next.js · TypeScript",   color:"brand-cyan" },
    { icon:<LayoutDashboard className="w-4 h-4" />, label:"Patient Portal",       sub:"FHIR · Secure Auth · HIPAA",     color:"brand-indigo" },
    { icon:<Database className="w-4 h-4" />,       label:"API Integration Layer", sub:"REST · GraphQL · HL7",           color:"brand-cyan" },
    { icon:<Users className="w-4 h-4" />,          label:"CRM & EHR Records",     sub:"Epic · Cerner · Custom DBs",     color:"brand-indigo" },
    { icon:<Bot className="w-4 h-4" />,            label:"AI Automation",         sub:"LLMs · Triage · SMS Flows",      color:"brand-cyan" },
  ];
  return (
    <div className="flex flex-col items-center gap-0">
      {nodes.map((node, i) => (
        <React.Fragment key={node.label}>
          <motion.div
            initial={{ opacity:0, x:-12 }}
            whileInView={{ opacity:1, x:0 }}
            transition={{ duration:0.4, delay: i * 0.1 }}
            viewport={{ once:true }}
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
      {/* Floating button + panel — fixed middle-right */}
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: "-50%", x: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: "-50%", x: 0, scale: 1 }}
            exit={{ opacity: 0, y: "-50%", x: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed right-4 md:right-6 top-1/2 z-50"
          >
            {/* Trigger Button */}
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

            {/* Popup Panel (absolutely positioned to the left of the button) */}
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: "-50%", x: 12, scale: 0.97 }}
                  animate={{ opacity: 1, y: "-50%", x: 0, scale: 1 }}
                  exit={{ opacity: 0, y: "-50%", x: 12, scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-full top-1/2 mr-3 bg-[#060F1E] border border-brand-border rounded-2xl shadow-2xl shadow-black/60 overflow-hidden w-56"
                >
                  {/* Panel header */}
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

                  {/* TOC items */}
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
                          <span className={`text-[9px] font-bold shrink-0 w-5 ${
                            isActive ? "text-brand-cyan" : "text-gray-600"
                          }`}>{item.num}</span>
                          <span className={`w-0.5 h-3.5 rounded-full shrink-0 transition-colors ${
                            isActive ? "bg-brand-cyan" : "bg-brand-border/60"
                          }`} />
                          <span className={`text-[11px] font-semibold truncate ${
                            isActive ? "text-white" : "text-gray-500"
                          }`}>{item.label}</span>
                          {isActive && (
                            <span className="ml-auto w-1.5 h-1.5 rounded-full bg-brand-cyan shrink-0 animate-pulse" />
                          )}
                        </button>
                      );
                    })}
                  </nav>

                  {/* Mini CTA */}
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
  { question: "1. How much does a healthcare website design project cost?", answer: "The cost of healthcare website design depends on the complexity, features, integrations, and customization required. A basic medical website, custom healthcare platform, and patient portal project all have different requirements. We customize our pricing based on whether you need simple physician listings, deep EHR integration, custom portal systems, or AI-powered automation workflows. Contact us to receive a transparent project proposal." },
  { question: "2. How long does it take to build a healthcare website?", answer: "The timeline depends on the size of the project. A standard medical website may take several weeks, while advanced healthcare platforms with portals, integrations, or custom AI automation require more development time. We follow an agile process to launch high-quality phases on-schedule while ensuring complete compliance and thorough QA testing." },
  { question: "3. Do you design websites specifically for doctors and medical practices?", answer: "Yes. Med Clinic X provides website design for doctors, physicians, clinics, hospitals, and healthcare organizations with healthcare-focused layouts and patient experiences. Our layouts are optimized specifically to address patient search intent, present physician credentials, highlight specialties, and streamline bookings." },
  { question: "4. Can you redesign an existing medical website?", answer: "Yes. We provide healthcare website redesign services to improve outdated designs, website performance, SEO visibility, and patient engagement. We carefully preserve your existing SEO rankings while modernizing your digital front door for higher conversions and mobile usability." },
  { question: "5. Do you build patient portals for healthcare organizations?", answer: "Yes. We develop patient portal solutions with features such as appointment management, document access, secure communication, and healthcare workflows. Our portal systems sync securely with your internal databases or EHR platforms using secure cryptographic pathways." },
  { question: "6. Are healthcare websites optimized for Google?", answer: "Yes. Our healthcare website development approach includes SEO-friendly structures designed to improve search visibility and help healthcare organizations attract more relevant visitors. We build structured JSON-LD schemas directly into the pages and tune page speeds to maximize visibility on Google Search and local Map packs." },
  { question: "7. Do you build websites for hospitals and healthcare groups?", answer: "Yes. We create scalable healthcare websites for hospitals, multi-location clinics, healthcare networks, and growing medical organizations. Our setups support complex routing architectures, location directories, and dynamic provider rosters." },
  { question: "8. Can you integrate appointment booking systems?", answer: "Yes. We can integrate appointment scheduling systems and create customized booking experiences based on your healthcare workflow. Whether you use Zocdoc, PatientPoint, custom APIs, or native calendars, we align the booking widgets seamlessly." },
  { question: "9. Do you provide AI healthcare solutions?", answer: "Yes. We help healthcare organizations implement AI-powered tools such as assistants, automation workflows, and patient communication solutions. This includes automated clinical triage assistance, SMS follow-up prompts, and instant customer service answering." },
  { question: "10. Why choose Med Clinic X instead of a general web design company?", answer: "Unlike general website agencies, Med Clinic X focuses specifically on healthcare technology. We understand patient journeys, healthcare workflows, compliance constraints, and the digital needs of medical organizations. We don't just build websites; we build scalable B2B healthcare growth platforms." },
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
export default function HealthcareWebsitesClient() {
  const [activeFaq, setActiveFaq]         = useState<number | null>(null);
  const [activeSection, setActiveSection]  = useState("hero");
  const [tocVisible, setTocVisible]        = useState(false);

  // Track active section
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

  // Show floating TOC after scrolling past hero (~300px)
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
          <span className="text-gray-300 font-semibold">Healthcare Websites</span>
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
                  <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest">Premium Web Design</span>
                </div>
                <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-400 tracking-tight leading-[1.12] text-center max-w-4xl mx-auto">
                  Healthcare Website Design & Development for Organizations That <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-cyan to-brand-indigo">Want to Grow</span>
                </h1>
                <p className="text-slate-300 text-base leading-relaxed text-center max-w-2xl mx-auto font-normal">
                  Med Clinic X engineers high-performance clinic and hospital platforms built to convert visitors into patients, dominate local search, and sync with your EHR systems.
                </p>
                <div className="flex flex-wrap gap-2.5 text-xs font-medium text-gray-400 justify-center">
                  {["99/100 Lighthouse Speed", "HIPAA Compliant", "EHR Integrations", "Local SEO Ready"].map((b, i) => (
                    <span key={i} className="flex items-center gap-1.5 bg-brand-bg border border-brand-border px-3 py-1.5 rounded-full">
                      <CheckCircle2 className="w-3 h-3 text-brand-cyan" />{b}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center w-full">
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-bold text-sm px-8 py-4 rounded-xl shadow-lg shadow-brand-cyan/15 hover:scale-[1.01] active:scale-[0.99] transition-all">
                    Build Your Healthcare Website <ArrowRight className="w-4 h-4" />
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
                Trusted by Healthcare Organizations Across the United States
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {[
                  { icon:<Users className="w-6 h-6 text-brand-cyan" />,    label:"Doctors & Physicians",   desc:"Private practices, solo physicians, and specialist groups.",  stat:"150+" },
                  { icon:<Activity className="w-6 h-6 text-brand-cyan" />, label:"Medical Clinics",        desc:"Multi-provider outpatient clinics across the US.",           stat:"80+" },
                  { icon:<Globe className="w-6 h-6 text-brand-cyan" />,    label:"Hospitals & Networks",   desc:"Hospital systems, multi-location healthcare networks.",       stat:"25+" },
                  { icon:<Zap className="w-6 h-6 text-brand-cyan" />,      label:"Healthcare Startups",    desc:"Health-tech companies and digital health platforms.",         stat:"40+" },
                ].map((item,i)=>(
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
              title="Is Your Healthcare Website Holding You Back?"
              subtitle="Most healthcare organizations are leaving patients — and revenue — on the table because of avoidable digital problems."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
              {[
                { icon:<XCircle className="w-5 h-5 text-red-400" />,    title:"Outdated Website Design",   desc:"A clinic that looks outdated online loses credibility instantly. Patients make trust decisions in under 5 seconds.", impact:"72% of patients judge credibility by website design." },
                { icon:<XCircle className="w-5 h-5 text-red-400" />,    title:"Low Patient Bookings",      desc:"If your booking flow is broken, buried, or confusing — patients call competitors instead.", impact:"Clinics with broken booking flows lose 30–40% of inquiries." },
                { icon:<XCircle className="w-5 h-5 text-red-400" />,    title:"Poor SEO Visibility",       desc:"If you're not on the first page of Google or the Google Map Pack, new patients simply cannot find you.", impact:"68% of online experiences begin with a search engine." },
                { icon:<XCircle className="w-5 h-5 text-red-400" />,    title:"Bad Mobile Experience",     desc:"Over 70% of healthcare searches happen on mobile. A non-mobile-optimized site means massive patient drop-off.", impact:"Sites with poor mobile UX see 53% higher bounce rates." },
              ].map((p,i)=>(
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

            {/* Before / After image */}
            <div className="relative rounded-2xl overflow-hidden border border-brand-border group">
              <div className="bg-brand-bg/90 px-4 py-2 border-b border-brand-border flex items-center justify-between text-[10px] text-gray-500 font-mono">
                <span>website-redesign-comparison.png</span>
                <div className="flex items-center gap-3">
                  <span className="text-red-400 font-bold">❌ Before</span>
                  <span className="text-brand-cyan font-bold">✅ After</span>
                </div>
              </div>
              <Image src="/hw_before_after.png" alt="Healthcare website Before vs After redesign comparison" width={1200} height={600} className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </section>

          {/* ═══ 04 · SOLUTION OVERVIEW ══════════════════════════ */}
          <section id="solution" className="scroll-mt-20 pb-24 md:pb-28">
            <SectionHeader
              badge="Transformation"
              icon={<Sparkles className="w-4 h-4 text-brand-cyan" />}
              title="The Med Clinic X Solution"
              subtitle="We transform outdated healthcare websites into patient-acquisition platforms — designed for growth, built for trust."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
              {[
                { icon:<Users className="w-5 h-5 text-brand-cyan" />,    title:"Patient-First Website Design",    desc:"Layouts engineered around how patients search, evaluate, and book — not how doctors think. Every element drives action.", outcome:"↑ Patient bookings & trust signals" },
                { icon:<Search className="w-5 h-5 text-brand-cyan" />,   title:"Healthcare SEO Strategy",         desc:"Local map-pack domination, JSON-LD schemas, and page speed optimization that put you in front of patients actively searching.", outcome:"↑ Organic traffic & local visibility" },
                { icon:<Activity className="w-5 h-5 text-brand-cyan" />, title:"Conversion-Focused Development",  desc:"HIPAA-compliant intake forms, EHR booking widgets, and trust signals that turn website visitors into confirmed appointments.", outcome:"↑ Conversion rate from 2.4% to 7.8%" },
                { icon:<Cpu className="w-5 h-5 text-brand-cyan" />,      title:"AI Healthcare Integration",       desc:"AI-powered 24/7 receptionists, automated recall flows, and smart triage bots that reduce admin hours and capture more leads.", outcome:"↑ 74% reduction in response delay" },
              ].map((sol,i)=>(
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

            {/* Patient Journey image */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-4">
                <h3 className="font-display font-bold text-2xl text-white">How Patients Find, Choose & Stay With Your Practice</h3>
                <p className="text-base text-gray-400 leading-relaxed">Every touchpoint in the patient journey — from Google search to confirmed appointment — is an opportunity. We engineer each step to work in your favor.</p>
                {[
                  { step:"01", label:"Google Search", desc:"Patient searches for a healthcare provider near them. Your SEO-optimized site appears in the Top 3 results." },
                  { step:"02", label:"Website Visit",  desc:"Patient lands on a fast, professional, trust-building healthcare website that answers their questions." },
                  { step:"03", label:"Service Info",   desc:"Clear service pages with doctor profiles, specialties, and treatment details build confidence." },
                  { step:"04", label:"Booking",        desc:"Streamlined booking widget or HIPAA-compliant form converts the visitor into a confirmed appointment." },
                  { step:"05", label:"Relationship",   desc:"Patient portal, follow-up automation, and recall flows build long-term patient retention." },
                ].map((s,i)=>(
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
                    <span>patient-journey-map.png</span>
                    <span className="text-brand-cyan font-bold">WORKFLOW</span>
                  </div>
                  <Image src="/hw_patient_journey.png" alt="Patient Journey Flow Diagram" width={500} height={600} className="w-full h-auto object-cover opacity-90 group-hover:scale-[1.01] transition-transform duration-500" />
                </div>
              </div>
            </div>
          </section>

          {/* ═══ 05 · SERVICES ═══════════════════════════════════ */}
          <section id="services" className="scroll-mt-20 pb-24 md:pb-28">
            <SectionHeader
              badge="Core Offerings"
              icon={<Layers className="w-4 h-4 text-brand-cyan" />}
              title="Medical Website Design & Development Services"
              subtitle="Purpose-built healthcare services instead of generic templates. Every solution is tailored to your clinical workflow."
            />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-10">
              {[
                { col:6, icon:<Users className="w-5 h-5 text-brand-cyan" />,         title:"Medical Practice Website Design",    desc:"Professional medical websites for doctors, physicians, and healthcare practices. Designed to communicate expertise and convert visitors into patients.", tags:["Primary care","Specialists","Private practices","Medical clinics","Healthcare groups"] },
                { col:6, icon:<Laptop className="w-5 h-5 text-brand-cyan" />,         title:"Healthcare Website Development",     desc:"Secure, HIPAA-conscious infrastructure, patient intake workflows, and custom medical integrations. Fast, clean Next.js/React platforms — no templates.", tags:["Custom websites","Medical web apps","Patient portals","Healthcare dashboards","SaaS platforms"] },
                { col:4, icon:<Layers className="w-5 h-5 text-brand-cyan" />,    title:"Healthcare Website Redesign",        desc:"Modernize outdated platforms while preserving SEO rankings. Full speed audit, mobile optimization, and improved navigation.", features:["Speed audit upgrades","Responsive mobile grids","Preserved SEO rankings"] },
                { col:4, icon:<Lock className="w-5 h-5 text-brand-cyan" />,      title:"Patient Portal Development",         desc:"Secure dashboards connecting providers and patients. Medical files, prescriptions, scheduling, and installment billing.", features:["Patient login credentials","Diagnostic reports","Secure message lockers"] },
                { col:4, icon:<Cpu className="w-5 h-5 text-brand-cyan" />,       title:"AI Healthcare Solutions",            desc:"AI-powered tools to enhance patient communication, reduce admin hours, and streamline follow-up workflows.", features:["AI Healthcare Assistants","Appointment automation","SMS communication flows"] },
              ].map((card,i)=>(
                <div key={i} className={`lg:col-span-${card.col} glass-panel p-6 rounded-2xl border border-brand-border hover:border-brand-cyan/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.08)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col group`}>
                  <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center mb-4 group-hover:bg-brand-cyan/20 group-hover:scale-105 transition-all duration-300">{card.icon}</div>
                  <h3 className="font-display font-bold text-xl text-white mb-2">{card.title}</h3>
                  <p className="text-base text-slate-300 leading-relaxed flex-1 mb-4">{card.desc}</p>
                  <div className="border-t border-brand-border/40 pt-4">
                    {"tags" in card ? (
                      <>
                        <span className="text-[10px] uppercase font-bold text-brand-cyan tracking-widest block mb-2.5">Ideal for:</span>
                        <div className="flex flex-wrap gap-1.5">
                          {card.tags?.map((t,ti)=><span key={ti} className="bg-brand-bg/85 border border-brand-border text-xs text-slate-300 px-2.5 py-1 rounded-lg">{t}</span>)}
                        </div>
                      </>
                    ) : (
                      <>
                        <span className="text-[10px] uppercase font-bold text-brand-cyan tracking-widest block mb-2.5">Key Features:</span>
                        <ul className="space-y-1.5">
                          {card.features?.map((f,fi)=>(
                            <li key={fi} className="flex items-center gap-2 text-xs text-slate-300 font-normal">
                              <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan shrink-0" />{f}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Website screenshots banner */}
            <div className="relative rounded-2xl overflow-hidden border border-brand-border group">
              <div className="bg-brand-bg/90 px-4 py-2.5 border-b border-brand-border flex items-center justify-between text-[10px] text-gray-500 font-mono">
                <span>healthcare-website-product-screenshots.png</span>
                <span className="text-brand-cyan font-bold">PRODUCT PREVIEW</span>
              </div>
              <Image src="/hw_website_screenshots.png" alt="Healthcare website screenshots — doctor profile, service page, mobile booking" width={1200} height={500} className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
            </div>
          </section>

          {/* ═══ 06 · FEATURES / CAPABILITIES ═══════════════════ */}
          <section id="features" className="scroll-mt-20 pb-24 md:pb-28">
            <SectionHeader
              badge="Platform Capabilities"
              icon={<Zap className="w-4 h-4 text-brand-cyan" />}
              title="Built-In Healthcare Website Features"
              subtitle="Every feature we build serves a clinical purpose — improving patient outcomes, practice efficiency, or organic growth."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
              {[
                { icon:<Calendar className="w-5 h-5 text-brand-cyan" />,    title:"Appointment Booking Integration",  desc:"EHR-connected scheduling widgets from Zocdoc, PatientPoint, or custom APIs — embedded natively on every page." },
                { icon:<Users className="w-5 h-5 text-brand-cyan" />,       title:"Doctor Profile Pages",             desc:"SEO-optimized physician directory pages with credentials, specialties, patient reviews, and direct booking CTAs." },
                { icon:<Smartphone className="w-5 h-5 text-brand-cyan" />,  title:"Mobile-First Responsive Design",   desc:"Built for the 70%+ of patients searching on mobile. Lightning-fast rendering, touch-optimized UX, and PWA support." },
                { icon:<Shield className="w-5 h-5 text-brand-cyan" />,      title:"HIPAA-Conscious Structure",        desc:"AES-256 encrypted forms, secure data routing to EHR endpoints, and zero PII stored on front-end layers." },
                { icon:<Search className="w-5 h-5 text-brand-cyan" />,      title:"Healthcare SEO Optimization",      desc:"JSON-LD MedicalClinic schemas, local business markup, Core Web Vitals tuning, and multi-location SEO architecture." },
                { icon:<MapPin className="w-5 h-5 text-brand-cyan" />,      title:"Local Map Pack Targeting",         desc:"Google Business Profile optimization, local schema injection, and NAP consistency to claim Top 3 map positions." },
                { icon:<Bot className="w-5 h-5 text-brand-cyan" />,         title:"AI Receptionist Integration",      desc:"24/7 conversational AI for triage, booking, and patient FAQ — reducing call volumes and after-hours drop-off." },
                { icon:<BarChart3 className="w-5 h-5 text-brand-cyan" />,   title:"Analytics & Conversion Tracking",  desc:"Google Analytics 4, heatmaps, and goal funnels set up to measure patient acquisition metrics from day one." },
                { icon:<Lock className="w-5 h-5 text-brand-cyan" />,        title:"Secure Patient Portals",           desc:"FHIR-synced dashboards where patients access records, lab results, invoices, and communicate with clinical staff." },
              ].map((f,i)=>(
                <div key={i} className="glass-panel p-6 rounded-2xl border border-brand-border hover:border-brand-cyan/30 hover:shadow-[0_0_35px_rgba(6,182,212,0.06)] hover:-translate-y-0.5 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/15 flex items-center justify-center mb-4 group-hover:bg-brand-cyan/20 group-hover:scale-105 transition-all duration-300">{f.icon}</div>
                  <h3 className="font-display font-bold text-base text-white mb-2">{f.title}</h3>
                  <p className="text-base text-slate-300 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>

            {/* AI Chat + Portal side-by-side */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <p className="text-xs font-bold text-brand-cyan uppercase tracking-wider mb-3 flex items-center gap-2"><Bot className="w-3.5 h-3.5" />AI Assistant — Live Booking</p>
                <AIChatMockup />
              </div>
              <div>
                <p className="text-xs font-bold text-brand-cyan uppercase tracking-wider mb-3 flex items-center gap-2"><LayoutDashboard className="w-3.5 h-3.5" />Patient Portal — Dashboard</p>
                <PatientPortalMockup />
              </div>
            </div>
          </section>

          {/* ═══ 07 · INDUSTRIES ════════════════════════════════ */}
          <section id="industries" className="scroll-mt-20 pb-24 md:pb-28">
            <SectionHeader
              badge="Who We Serve"
              icon={<Bookmark className="w-4 h-4 text-brand-cyan" />}
              title="Built For Healthcare Organizations Like Yours"
              subtitle="Whether you operate a solo practice, run a multi-location clinic, or are building a health-tech startup — our frameworks scale around your scope."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { icon:<Users className="w-6 h-6 text-brand-cyan" />,   num:"01", segment:"Doctors & Physicians",       desc:"Create a professional online presence that represents your expertise and helps new patients discover your practice.",             highlights:["Solo & group practices","Specialty pages","EHR booking widgets","Doctor schema markup"] },
                { icon:<Activity className="w-6 h-6 text-brand-cyan" />,num:"02", segment:"Medical Clinics",            desc:"Build a healthcare website designed around patient acquisition, appointment scheduling, and multi-provider practice growth.",   highlights:["Multi-provider directories","HIPAA intake forms","Location SEO","Review automation"] },
                { icon:<Globe className="w-6 h-6 text-brand-cyan" />,   num:"03", segment:"Hospitals & Networks",       desc:"Develop scalable digital experiences that support multiple departments, service lines, and patient needs across locations.",      highlights:["Department routing","Multi-location SEO","Patient portals","Staff directories"] },
                { icon:<Zap className="w-6 h-6 text-brand-cyan" />,     num:"04", segment:"Dental Practices & Startups",desc:"Launch dental clinics and healthcare SaaS products with modern, robust compliance technology and AI-ready integrations.",      highlights:["Dental SEO focus","MVP development","HIPAA architecture","AI integrations"] },
              ].map((item,i)=>(
                <div key={i} className="glass-panel p-6 rounded-2xl border border-brand-border hover:border-brand-cyan/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col group">
                  <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center mb-4 group-hover:bg-brand-cyan/20 group-hover:scale-105 transition-all duration-300">{item.icon}</div>
                  <span className="text-[9px] font-bold text-brand-cyan uppercase tracking-wider mb-1">{item.num} // segment</span>
                  <h3 className="font-display font-bold text-lg text-white mb-2">{item.segment}</h3>
                  <p className="text-base text-slate-300 leading-relaxed flex-1">{item.desc}</p>
                  <ul className="mt-4 pt-4 border-t border-brand-border/40 space-y-1.5">
                    {item.highlights.map((h,hi)=>(
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
              title="Our 5-Step Healthcare Website Process"
              subtitle="A structured, milestone-based delivery model that keeps you informed and in control at every stage."
            />
            <div className="relative">
              {/* Connecting line */}
              <div className="hidden lg:block absolute top-10 left-[calc(10%-2px)] right-[calc(10%-2px)] h-px bg-gradient-to-r from-transparent via-brand-cyan/30 to-transparent" />

              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                {[
                  { icon:<Search className="w-5 h-5" />,    step:"01", label:"Strategy",    color:"brand-cyan",   desc:"Healthcare audit, competitor analysis, patient journey mapping, SEO keyword research, and technical scoping." },
                  { icon:<Layers className="w-5 h-5" />,   step:"02", label:"Design",      color:"brand-indigo", desc:"Patient-first wireframes, visual design system, mobile-first layouts, and UI prototypes reviewed with your team." },
                  { icon:<Code2 className="w-5 h-5" />,     step:"03", label:"Development", color:"brand-cyan",   desc:"HIPAA-conscious Next.js build, EHR integrations, FHIR API connections, and AI assistant configuration." },
                  { icon:<Rocket className="w-5 h-5" />,    step:"04", label:"Launch",      color:"brand-indigo", desc:"QA testing, speed optimization, Google Search Console setup, schema injection, and production deployment." },
                  { icon:<BarChart3 className="w-5 h-5" />, step:"05", label:"Growth",      color:"brand-cyan",   desc:"Ongoing SEO monitoring, conversion rate optimization, analytics reviews, and platform scaling support." },
                ].map((step,i)=>(
                  <motion.div
                    key={i}
                    initial={{ opacity:0, y:20 }}
                    whileInView={{ opacity:1, y:0 }}
                    transition={{ duration:0.4, delay: i * 0.1 }}
                    viewport={{ once:true }}
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

            {/* Tech architecture */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-16">
              <div className="lg:col-span-5">
                <p className="text-xs font-bold text-brand-cyan uppercase tracking-wider mb-4 flex items-center gap-2"><Database className="w-3.5 h-3.5" />Platform Architecture</p>
                <TechArchitectureDiagram />
              </div>
              <div className="lg:col-span-7 space-y-5">
                <h3 className="font-display font-bold text-xl text-white flex items-center gap-2.5">
                  <span className="w-1 h-5 bg-brand-cyan rounded-full" />Our Technology Stack
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label:"Frontend",                icon:<Zap className="w-4 h-4 text-brand-cyan" />,      items:["React.js","Next.js","TypeScript","Tailwind CSS","Framer Motion"] },
                    { label:"Backend",                 icon:<Database className="w-4 h-4 text-brand-cyan" />,  items:["Node.js","REST APIs","GraphQL","PostgreSQL","Prisma ORM"] },
                    { label:"Cloud & Infrastructure",  icon:<Cloud className="w-4 h-4 text-brand-cyan" />,     items:["AWS S3 & EC2","Vercel Edge","Google Cloud","Cloudflare CDN","Docker / CI/CD"] },
                    { label:"Healthcare Solutions",    icon:<Shield className="w-4 h-4 text-brand-cyan" />,    items:["FHIR APIs","Patient Portals","AI Automation","HIPAA Compliance","EHR Integrations"] },
                  ].map((col,i)=>(
                    <div key={i} className="glass-panel p-5 rounded-xl border border-brand-border">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-7 h-7 rounded-lg bg-brand-cyan/10 border border-brand-cyan/15 flex items-center justify-center">{col.icon}</div>
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider">{col.label}</h4>
                      </div>
                      <ul className="space-y-1.5">
                        {col.items.map((item,j)=>(
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
              title="Healthcare Projects We Have Built"
              subtitle="Real results from real healthcare organizations — before and after working with Med Clinic X."
            />

            {/* SEO Dashboard */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-14">
              <div className="lg:col-span-5 order-last lg:order-first">
                <SEODashboardMockup />
              </div>
              <div className="lg:col-span-7 space-y-5">
                <span className="text-[9px] font-bold text-brand-cyan uppercase tracking-widest bg-brand-cyan/10 border border-brand-cyan/20 px-3 py-1 rounded-full">SEO Growth</span>
                <h3 className="font-display font-bold text-3xl text-white tracking-tight leading-snug">Regional Orthopedic Group — Search Visibility Turnaround</h3>
                <p className="text-base text-slate-300 leading-relaxed font-normal">A 6-location orthopedic group was invisible on Google Maps and generating only 120 organic visitors per month. Their website was slow, had no local schema, and zero review strategy.</p>
                <div className="space-y-3">
                  {[
                    { label:"Challenge", text:"Hidden on Maps · 120 monthly visitors · No structured schema",             color:"text-red-400" },
                    { label:"Solution",  text:"Multi-location SEO, JSON-LD injection, map-pack optimization, review flows",  color:"text-yellow-400" },
                    { label:"Result",    text:"Top 3 Maps ranking across all 6 locations · 2,500+ monthly visitors",        color:"text-green-400" },
                  ].map((r,i)=>(
                    <div key={i} className="glass-panel px-4 py-3.5 rounded-xl border border-brand-border flex items-start gap-3 hover:border-brand-cyan/20 transition-colors duration-200">
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
                { category:"AI Platform",    title:"Radiology AI Reporting Platform",   challenge:"48hr report turnaround causing radiologist delays.", solution:"AI-powered LLM draft generation + DICOM viewer integration.", result:"Report turnaround reduced from 48hrs to under 4hrs.", color:"brand-indigo", tag:"AI & Automation" },
                { category:"Patient Portal", title:"Multi-Clinic Patient Portal Rebuild",challenge:"Outdated portal with 18% patient adoption, no FHIR sync.", solution:"Next.js rebuild with FHIR APIs, Stripe billing, HIPAA chat.", result:"Adoption increased from 18% to 82% within 3 months.",   color:"brand-cyan",   tag:"Portal Dev" },
                { category:"SEO Growth",     title:"Dental Group Local SEO Campaign",   challenge:"Dental group on Maps page 3, 95 organic leads/month.", solution:"Local SEO strategy + review automation + schema injection.", result:"Top 3 Map Pack · 1,800 organic leads/month within 90 days.", color:"brand-cyan", tag:"Growth & SEO" },
              ].map((study,i)=>(
                <div key={i} className="glass-panel rounded-2xl border border-brand-border overflow-hidden hover:border-brand-cyan/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.08)] hover:-translate-y-0.5 transition-all duration-300 group flex flex-col">
                  <div className={`h-1 bg-gradient-to-r from-${study.color} to-brand-indigo`} />
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-[9px] font-bold text-${study.color} uppercase tracking-widest bg-${study.color}/10 border border-${study.color}/20 px-2.5 py-1 rounded-full`}>{study.category}</span>
                      <span className="text-[9px] text-gray-500 font-medium">{study.tag}</span>
                    </div>
                    <h3 className="font-display font-bold text-lg text-white mb-4 group-hover:text-brand-cyan transition-colors leading-snug">{study.title}</h3>
                    <div className="space-y-3 flex-1">
                      {[{l:"Challenge",v:study.challenge,c:"text-red-400"},{l:"Solution",v:study.solution,c:"text-yellow-400"},{l:"Result",v:study.result,c:"text-green-400"}].map((r,ri)=>(
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
              subtitle="General digital agencies struggle with HIPAA parameters, medical terminology, and patient check-in paths. We focus strictly on healthcare technology."
            />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-5 space-y-5">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon:<Shield className="w-4 h-4 text-brand-cyan" />,        label:"HIPAA Compliant" },
                    { icon:<Zap className="w-4 h-4 text-brand-cyan" />,           label:"99/100 Speed Score" },
                    { icon:<Search className="w-4 h-4 text-brand-cyan" />,        label:"Local SEO Ready" },
                    { icon:<CheckCircle2 className="w-4 h-4 text-brand-cyan" />,  label:"ADA Accessible" },
                    { icon:<Clock className="w-4 h-4 text-brand-cyan" />,         label:"On-Time Delivery" },
                    { icon:<TrendingUp className="w-4 h-4 text-brand-cyan" />,    label:"ROI-Focused" },
                  ].map((b,i)=>(
                    <div key={i} className="flex items-center gap-2 glass-panel border border-brand-border px-3 py-2.5 rounded-xl">
                      {b.icon}<span className="text-xs font-semibold text-gray-300">{b.label}</span>
                    </div>
                  ))}
                </div>
                <div className="glass-panel p-5 rounded-2xl border border-brand-cyan/15 bg-brand-cyan/5">
                  <p className="text-xs font-bold text-brand-cyan uppercase tracking-wider mb-3">Our Standard Principles</p>
                  <div className="space-y-2 text-xs text-gray-400 font-medium">
                    {["SSL / AES-256 Field Encryption","Accessibility (WCAG 2.1 AA) Standards","Structured Local Schema Markup","Core Web Vitals Speed Optimization","Milestone-Based Delivery Model","Post-Launch Growth Support"].map((p,i)=>(
                      <div key={i} className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-brand-cyan shrink-0" />{p}</div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7 space-y-4">
                {[
                  { title:"Healthcare Industry Specialization", desc:"Healthcare websites require more than attractive design. They require patient trust, clear communication, accessibility, security-focused development, and HIPAA-compliant workflows. We combine clinical knowledge with modern web development to build solutions supporting both providers and patients." },
                  { title:"More Than A Website — A Healthcare Growth Platform", desc:"Your healthcare website can become the foundation for patient acquisition, appointment scheduling, patient communication, AI automation, and future technology integrations. We help organizations move beyond a basic brochure website and build a complete healthcare digital ecosystem." },
                  { title:"AI + SaaS Engineering Mindset", desc:"We build healthcare platforms with scalability from day one — multi-tenant architectures, AI-ready APIs, and FHIR-compatible data layers. Your platform grows with your organization without expensive re-engineering." },
                  { title:"Transparent, Milestone-Based Process", desc:"From wireframes and compliance audits to QA testing and post-launch monitoring — we keep you informed at every stage. No hidden costs, no bloated timelines. Every deliverable is reviewed and approved by your team." },
                ].map((item,idx)=>(
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
              subtitle="Design timelines, medical development workflows, budgets, and compliance safeguards — answered."
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
                        <motion.div initial={{ height:0, opacity:0 }} animate={{ height:"auto", opacity:1 }} exit={{ height:0, opacity:0 }} transition={{ duration:0.25, ease:"easeInOut" }}>
                          <div className="px-6 pb-6 pt-1 text-base text-gray-400 leading-relaxed border-t border-brand-border/30">{faq.answer}</div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </section>

          {/* ═══ 12 · FINAL CTA ════════════════════════════════ */}
          <section id="cta" className="scroll-mt-20 pb-24 md:pb-28">
            <div className="relative rounded-3xl overflow-hidden border border-brand-cyan/20">
              <div className="absolute inset-0 bg-gradient-to-br from-[#071828] via-[#0a1f30] to-[#0d1a2e]" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(6,182,212,0.12),transparent_60%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.10),transparent_60%)]" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-cyan/40 to-transparent" />
              <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage:"linear-gradient(rgba(255,255,255,.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.1) 1px,transparent 1px)", backgroundSize:"48px 48px" }} />

              <div className="relative p-10 sm:p-16 text-center">
                <div className="inline-flex items-center gap-2 bg-brand-cyan/15 rounded-full px-3 py-1 mb-6">
                  <Sparkles className="w-3.5 h-3.5 text-brand-cyan animate-pulse" />
                  <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-wider">Ready to Build?</span>
                </div>
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight mb-4 max-w-3xl mx-auto">
                  Ready To Build Your Healthcare Digital Experience?
                </h2>
                <p className="text-base text-gray-400 leading-relaxed mb-8 max-w-xl mx-auto">
                  Book a discovery call with our digital health engineering specialists to audit your current platform, calculate ROI, and plan your full software rollout — at no cost.
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
