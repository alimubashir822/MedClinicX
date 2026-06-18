"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
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

function AIChatMockup() {
  const messages = [
    { from: "patient", text: "My throat is swollen and I have a fever." },
    { from: "ai",      text: "I understand. To assist you correctly, are you experiencing any difficulty breathing or swallowing fluids?" },
    { from: "patient", text: "It hurts to swallow, but I can breathe fine." },
    { from: "ai",      text: "Got it. Based on your symptoms, this is classified as URGENT. I recommend scheduling an appointment today. Dr. Sarah has an opening at 1:30 PM. Would you like to book it?", cta: "Book 1:30 PM slot" },
  ];
  return (
    <div className="rounded-2xl border border-brand-border overflow-hidden shadow-2xl bg-[#040D18]">
      <div className="bg-brand-bg px-4 py-3 border-b border-brand-border flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-brand-cyan/15 border border-brand-cyan/25 flex items-center justify-center">
            <Bot className="w-4 h-4 text-brand-cyan" />
          </div>
          <div>
            <p className="text-xs font-bold text-white">Clinical AI Receptionist</p>
            <p className="text-[9px] text-brand-cyan font-medium flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse inline-block" />
              Online — 24/7 Virtual Care
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
              {msg.from === "ai" && <p className="text-[9px] font-bold text-brand-cyan uppercase tracking-wider mb-1">AI Receptionist</p>}
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
        <div className="flex-1 bg-brand-bg/60 border border-brand-border rounded-xl px-3 py-2 text-[11px] text-gray-500">Type your symptoms...</div>
        <button className="w-8 h-8 rounded-xl bg-brand-cyan/15 border border-brand-cyan/25 flex items-center justify-center shrink-0">
          <ArrowRight className="w-3.5 h-3.5 text-brand-cyan" />
        </button>
      </div>
    </div>
  );
}

function IntakeBriefMockup() {
  return (
    <div className="rounded-2xl border border-brand-border overflow-hidden shadow-2xl bg-[#040D18]">
      <div className="bg-brand-bg px-4 py-2.5 border-b border-brand-border flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-500" />
          <span className="w-2 h-2 rounded-full bg-yellow-500" />
          <span className="w-2 h-2 rounded-full bg-green-500" />
        </div>
        <span className="text-[10px] font-mono text-gray-500">clinical-llm-gate.medclinicx.com</span>
        <Lock className="w-3 h-3 text-green-400" />
      </div>
      
      <div className="p-4 space-y-4">
        <div>
          <p className="text-[9px] font-bold text-gray-500 uppercase tracking-wider mb-1">Patient Intake Query</p>
          <div className="bg-brand-bg/60 border border-brand-border rounded-lg p-3 text-[11px] text-gray-300 leading-relaxed font-mono">
            &quot;throat swollen, fever of 101, feel exhausted since yesterday, hurts to swallow.&quot;
          </div>
        </div>

        <div className="border-t border-brand-border/40 pt-3 space-y-2.5">
          <p className="text-[9px] font-bold text-gray-500 uppercase tracking-wider">Clinical Classification Output</p>
          
          <div className="flex items-center justify-between bg-brand-bg/40 border border-brand-border/30 rounded-lg px-3 py-2 text-xs">
            <span className="text-gray-400">Triage Classification:</span>
            <span className="text-yellow-400 font-bold px-2 py-0.5 bg-yellow-400/10 border border-yellow-400/20 rounded">URGENT CARE</span>
          </div>

          <div className="flex items-center justify-between bg-brand-bg/40 border border-brand-border/30 rounded-lg px-3 py-2 text-xs">
            <span className="text-gray-400">Chief Complaint Summary:</span>
            <span className="text-white font-semibold">Acute Pharyngitis & Pyrexia</span>
          </div>

          <div className="flex flex-col bg-brand-bg/40 border border-brand-border/30 rounded-lg p-2.5 text-[10px] space-y-1 font-mono">
            <span className="text-[9px] text-brand-cyan font-bold uppercase tracking-wider mb-1">FHIR Resource Extraction</span>
            <span className="text-gray-400">{`{`}</span>
            <span className="text-gray-400 pl-4">{`"symptom": "Sore throat",`}</span>
            <span className="text-gray-400 pl-4">{`"severity": "Moderate",`}</span>
            <span className="text-gray-400 pl-4">{`"duration_hours": 36,`}</span>
            <span className="text-gray-400 pl-4">{`"body_temp_f": 101.0`}</span>
            <span className="text-gray-400">{`}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function TechArchitectureDiagram() {
  const nodes = [
    { icon:<Brain className="w-4 h-4" />,          label:"Clinical LLM Gate",     sub:"Llama-3-70B · Medical Guidelines", color:"brand-cyan" },
    { icon:<Lock className="w-4 h-4" />,           label:"HIPAA Data Boundary",   sub:"Zero Retention · AWS Enclaves",    color:"brand-indigo" },
    { icon:<Activity className="w-4 h-4" />,       label:"Triage Engine",         sub:"Symptom Scoping · Risk Alerting",  color:"brand-cyan" },
    { icon:<Database className="w-4 h-4" />,       label:"EHR Pushing Engine",    sub:"FHIR Resources · Epic / Cerner",   color:"brand-indigo" },
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
// FAQ Data
// ─────────────────────────────────────────────────────────────
const faqData = [
  { question: "1. How accurate are clinical AI triage assistants?", answer: "Our models are fine-tuned on verified healthcare guidelines and clinical documentation libraries. They do not diagnose patients; instead, they triage severity, collect intake details, and alert medical teams when urgent care is flagged, significantly reducing manual mistakes." },
  { question: "2. Is patient data safe and HIPAA compliant with these AI systems?", answer: "Yes, we implement complete zero-data-retention parameters. Queries are routed through secure, private cloud enclaves (AWS Nitro Enclaves) with end-to-end encryption. No patient information is stored, logged, or utilized to train external public LLMs." },
  { question: "3. Can the AI sync with our Epic or Cerner EHR system?", answer: "Absolutely. We construct custom integration APIs using the HL7 FHIR standard to immediately push triaged symptom structures, intake briefs, and appointment data into your existing patient records." },
  { question: "4. What happens if the AI encounters a medical emergency?", answer: "If a patient describes emergency symptoms (e.g., chest pain, breathing difficulties), the system immediately halts triage, triggers emergency instructions, displays a call widget, and sends high-priority notifications to the clinic coordinators." },
  { question: "5. How much staff time can the AI receptionist save?", answer: "On average, clinic operations see a 68-74% reduction in manual intake call times. Answering patient portal queries, classifying phone messages, and drafting physician briefs are all handled dynamically." },
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

export default function AiHealthcareClient() {
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
      <div className="fixed top-0 right-1/4 w-[500px] h-[500px] bg-brand-cyan/4 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="fixed bottom-1/3 left-1/4 w-[500px] h-[500px] bg-brand-indigo/4 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <FloatingTOC activeSection={activeSection} visible={tocVisible} />

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
          <span className="text-gray-300 font-semibold">AI Healthcare Solutions</span>
        </nav>
      </div>

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
                  <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest">Clinical AI Systems</span>
                </div>
                <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-400 tracking-tight leading-[1.12] text-center max-w-4xl mx-auto">
                  Clinical LLMs & AI Receptionists Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-cyan to-brand-indigo">Modern Care Delivery</span>
                </h1>
                <p className="text-slate-300 text-base leading-relaxed text-center max-w-2xl mx-auto font-normal">
                  Med Clinic X deploys custom, secure AI triage assistants, automated physician briefing engines, and conversational practice receptionists that reduce delay metrics and scale clinic operations.
                </p>
                <div className="flex flex-wrap gap-2.5 text-xs font-medium text-gray-400 justify-center">
                  {["74% Faster Response Delay", "AWS Nitro Secure Enclaves", "HL7 FHIR Record Sync", "Emergency Auto-routing"].map((b, i) => (
                    <span key={i} className="flex items-center gap-1.5 bg-brand-bg border border-brand-border px-3 py-1.5 rounded-full">
                      <CheckCircle2 className="w-3 h-3 text-brand-cyan" />{b}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center w-full">
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-bold text-sm px-8 py-4 rounded-xl shadow-lg shadow-brand-cyan/15 hover:scale-[1.01] active:scale-[0.99] transition-all">
                    Deploy AI Solutions <ArrowRight className="w-4 h-4" />
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
                Trusted by Clinical Technology Directors Across the Nation
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {[
                  { icon:<Users className="w-6 h-6 text-brand-cyan" />,    label:"AI Triage Instances",   desc:"Deployed virtual receptionist agents for healthcare facilities.",  stat:"2.4M+" },
                  { icon:<Activity className="w-6 h-6 text-brand-cyan" />, label:"Partner Practices",        desc:"Medical clinics using conversational models today.",           stat:"95+" },
                  { icon:<Globe className="w-6 h-6 text-brand-cyan" />,    label:"Average Response Delay",   desc:"Reduction in patient booking queues and phone routing.",       stat:"-74%" },
                  { icon:<Zap className="w-6 h-6 text-brand-cyan" />,      label:"Administrative Hours Saved",    desc:"Physician and receptionist staff hours saved weekly.",         stat:"15k+" },
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
              title="Is Patient Intake Queueing Straining Your Staff?"
              subtitle="Clinics lose patient acquisitions and increase staff burnout due to slow phone intake and manual triage queues."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
              {[
                { icon:<XCircle className="w-5 h-5 text-red-400" />,    title:"Slow Patient Triage Responses",   desc:"Patients wait hours on portal messages or hold queues to classify basic care queries, reducing booking conversions.", impact:"78% of patients choose the first clinical responder." },
                { icon:<XCircle className="w-5 h-5 text-red-400" />,    title:"Overloaded Medical Receptionists",      desc:"Administrative staff lose hours handling standard scheduling calls, routing queries, and manually recording intake notes.", impact:"Up to 12 hours weekly spent on manual calls." },
                { icon:<XCircle className="w-5 h-5 text-red-400" />,    title:"Unstructured Clinical Hand-offs",       desc:"Intake symptoms are copied as unstructured paragraphs, leading to physician workflow delays during examinations.", impact:"Causes 15-20% longer diagnostic sessions." },
                { icon:<XCircle className="w-5 h-5 text-red-400" />,    title:"Non-Compliant Public AI Risks",     desc:"Clinics trying generic public chat tools risk HIPAA data leakage and model hallucination liabilities.", impact:"HIPAA penalties scale up to $50k per breach incident." },
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

            <div className="relative rounded-2xl overflow-hidden border border-brand-border group">
              <div className="bg-brand-bg/90 px-4 py-2 border-b border-brand-border flex items-center justify-between text-[10px] text-gray-500 font-mono">
                <span>clinical-intake-automation.png</span>
                <div className="flex items-center gap-3">
                  <span className="text-red-400 font-bold">❌ Manual Intake</span>
                  <span className="text-brand-cyan font-bold">✅ Clinical AI Gateway</span>
                </div>
              </div>
              <Image src="/service_ai_healthcare.png" alt="Clinical AI Intake Interface Redesign" width={1200} height={600} className="w-full h-96 object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </section>

          {/* ═══ 04 · SOLUTION OVERVIEW ══════════════════════════ */}
          <section id="solution" className="scroll-mt-20 pb-24 md:pb-28">
            <SectionHeader
              badge="Transformation"
              icon={<Sparkles className="w-4 h-4 text-brand-cyan" />}
              title="The Med Clinic X Clinical AI Advantage"
              subtitle="We implement secure AI gateways that triage patient severity, sync records, and summarize briefs dynamically."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
              {[
                { icon:<Users className="w-5 h-5 text-brand-cyan" />,    title:"Conversational AI Receptionists",    desc:"Handles symptom checks, schedules open slots, and provides 24/7 answer models inside your portal.", outcome:"↑ 24/7 triage scale & instant booking" },
                { icon:<Search className="w-5 h-5 text-brand-cyan" />,   title:"Intelligent Symptom Triage",         desc:"Assesses symptoms against healthcare standards, identifies emergency markers, and queues clinical teams.", outcome: "↑ Immediate high-risk patient flags" },
                { icon:<Activity className="w-5 h-5 text-brand-cyan" />, title:"Structured Intake Summaries",  desc:"NLP engines transform messy patient message boards into clean, structured summaries for doctor records.", outcome: "↑ 62% faster doctor chart preparation" },
                { icon:<Cpu className="w-5 h-5 text-brand-cyan" />,      title:"Zero-Data Retention Security",       desc:"Hosted in dedicated AWS Nitro Enclaves ensuring zero data retention and strict compliance bounds.", outcome: "↑ Zero HIPAA liability risk exposure" },
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

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-4">
                <h3 className="font-display font-bold text-2xl text-white">How Clinical AI Processes Patient Journeys</h3>
                <p className="text-base text-gray-400 leading-relaxed">From initial symptoms input to EHR record syncing, our AI system handles patient intake flows securely and efficiently.</p>
                {[
                  { step:"01", label:"Symptom Collection", desc:"Patient inputs symptoms in free-text format via phone voice agent or clinic booking portal." },
                  { step:"02", label:"Triage Classification",  desc:"AI evaluates severity metrics. Emergency queries are routed to dialers, routine queries continue." },
                  { step:"03", label:"Physician Briefing",   desc:"Extracts medical terms and compiles a structured chief complaint template for doctor review." },
                  { step:"04", label:"Slot Allocation",        desc:"Syncs with scheduling registers to offer optimal appointment slots matching doctor specializations." },
                  { step:"05", label:"EHR Pushing",   desc:"Submits structured JSON HL7 FHIR inputs into Epic or Cerner platforms instantly." },
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
                    <span>clinical-intake-nlp.png</span>
                    <span className="text-brand-cyan font-bold">NLP WORKFLOW</span>
                  </div>
                  <div className="p-4">
                    <IntakeBriefMockup />
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
              title="Clinical AI & Automation Capabilities"
              subtitle="Custom model engineering to automate patient-facing reception loops and clinical backend documentation."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 mb-10">
              {[
                { col:6, icon:<Users className="w-5 h-5 text-brand-cyan" />,         title:"AI Patient Voice Receptionists",    desc:"Natural conversation voice bots to answer incoming calls, check schedules, confirm appointments, and route emergencies.", tags:["Voice agents","IVR replacements","Schedule lookups","Emergency triggers"] },
                { col:6, icon:<Laptop className="w-5 h-5 text-brand-cyan" />,         title:"Clinical LLM Custom Fine-Tuning",     desc:"Train open models on your practice&apos;s specific diagnostic guidelines and patient handbook data for custom answering.", tags:["Llama-3 fine-tuning","Internal handbook sync","Custom clinical prompts"] },
                { col:4, icon:<Layers className="w-5 h-5 text-brand-cyan" />,    title:"Doctor Brief Generation Tools",        desc:"Converts lengthy, unstructured patient intake messages into bulleted clinical summaries prior to patient checks.", features:["Chief complaint summary","Symptom chronologies","EHR intake templates"] },
                { col:4, icon:<Lock className="w-5 h-5 text-brand-cyan" />,      title:"FHIR Data Formatting Layers",         desc:"Extracts medical variables into structured JSON schemas ready for Epic, Cerner, or Athena database updates.", features:["FHIR resource structures","JSON mapping engines","Encrypted sync pipelines"] },
                { col:4, icon:<Cpu className="w-5 h-5 text-brand-cyan" />,       title:"AI Recall Campaign Automation",            desc:"Analyzes patient charts to trigger text alerts for preventative care recalls (6-month checks) dynamically.", features:["ML scheduling analyzers","SMS loop automation","Patient recall scheduling"] },
              ].map((card,i)=>(
                <div key={i} className={`${i < 2 ? 'lg:col-span-3' : 'lg:col-span-2'} relative rounded-2xl flex flex-col group overflow-hidden transition-all duration-500 hover:-translate-y-1`}>
                  {/* Gradient border shell */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-cyan/20 via-brand-border to-brand-indigo/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-[1px] rounded-[14px] bg-[#0b1220] z-0" />
                  {/* Shimmer top edge */}
                  <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-brand-cyan/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  {/* Static border */}
                  <div className="absolute inset-0 rounded-2xl border border-brand-border group-hover:border-transparent transition-colors duration-500 z-0" />

                  <div className="relative z-10 p-7 flex flex-col flex-1">
                    {/* Header row: icon + number */}
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

                    {/* Title */}
                    <h3 className="font-display font-bold text-lg text-white mb-2 leading-snug group-hover:text-brand-cyan transition-colors duration-300">{card.title}</h3>

                    {/* Description */}
                    <p className="text-sm text-slate-400 leading-relaxed flex-1 mb-5">{card.desc}</p>

                    {/* Footer: tags or features */}
                    <div className="mt-auto pt-4 border-t border-white/5">
                      {"tags" in card ? (
                        <>
                          <span className="text-[9px] uppercase font-black text-brand-cyan/60 tracking-[0.18em] block mb-3">Ideal for</span>
                          <div className="flex flex-wrap gap-1.5">
                            {card.tags?.map((t,ti)=>(
                              <span key={ti} className="bg-brand-cyan/5 border border-brand-cyan/15 text-[11px] font-semibold text-brand-cyan/80 px-2.5 py-1 rounded-lg group-hover:bg-brand-cyan/10 group-hover:border-brand-cyan/25 transition-colors duration-300">{t}</span>
                            ))}
                          </div>
                        </>
                      ) : (
                        <>
                          <span className="text-[9px] uppercase font-black text-brand-cyan/60 tracking-[0.18em] block mb-3">Key Features</span>
                          <ul className="space-y-2">
                            {card.features?.map((f,fi)=>(
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

            <div className="relative rounded-2xl overflow-hidden border border-brand-border group">
              <div className="bg-brand-bg/90 px-4 py-2.5 border-b border-brand-border flex items-center justify-between text-[10px] text-gray-500 font-mono">
                <span>healthcare-llm-assistant-screenshots.png</span>
                <span className="text-brand-cyan font-bold">MODEL DEMONSTRATION</span>
              </div>
              <Image src="/ai_healthcare_assistant.png" alt="Clinical AI voice chatbot assistant interfaces and doctor dashboard previews" width={1200} height={500} className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
            </div>
          </section>

          {/* ═══ 06 · FEATURES / CAPABILITIES ═══════════════════ */}
          <section id="features" className="scroll-mt-20 pb-24 md:pb-28">
            <SectionHeader
              badge="Platform Capabilities"
              icon={<Zap className="w-4 h-4 text-brand-cyan" />}
              title="Clinical AI Integration Capabilities"
              subtitle="Engineered for medical practices requiring speed, accuracy, and compliance-first data models."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
              {[
                { icon:<Calendar className="w-5 h-5 text-brand-cyan" />,    title:"Automated Scheduling Engines",  desc:"AI reads calendar API endpoints to instantly present, book, or rearrange slots for incoming patient requests." },
                { icon:<Users className="w-5 h-5 text-brand-cyan" />,       title:"Structured Clinical Briefs",             desc:"Summarizes symptom reports into clean SOAP templates before examinations to reduce provider logging times." },
                { icon:<Smartphone className="w-5 h-5 text-brand-cyan" />,  title:"Conversational SMS Chatbots",   desc:"Automated texting agents that check symptoms, verify patient codes, and trigger slot confirmations." },
                { icon:<Shield className="w-5 h-5 text-brand-cyan" />,      title:"Private Cloud Data Scoping",        desc:"Hosted in secure AWS Nitro Enclaves with zero storage properties, eliminating HIPAA leakage risks." },
                { icon:<Search className="w-5 h-5 text-brand-cyan" />,      title:"Symptom Triage Classifiers",      desc:"Automatically tags priority ratings (Routine, Urgent, Emergency) based on intake message context." },
                { icon:<Bot className="w-5 h-5 text-brand-cyan" />,         title:"24/7 Portal Support Assistants",      desc:"Instantly replies to basic FAQ messages, check-in requests, and clinic policies inside your patient portals." },
              ].map((f,i)=>(
                <div key={i} className="glass-panel p-6 rounded-2xl border border-brand-border hover:border-brand-cyan/30 hover:shadow-[0_0_35px_rgba(6,182,212,0.06)] hover:-translate-y-0.5 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/15 flex items-center justify-center mb-4 group-hover:bg-brand-cyan/20 group-hover:scale-105 transition-all duration-300">{f.icon}</div>
                  <h3 className="font-display font-bold text-base text-white mb-2">{f.title}</h3>
                  <p className="text-base text-slate-300 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <p className="text-xs font-bold text-brand-cyan uppercase tracking-wider mb-3 flex items-center gap-2"><Bot className="w-3.5 h-3.5" />AI Receptionist — Live Booking</p>
                <AIChatMockup />
              </div>
              <div>
                <p className="text-xs font-bold text-brand-cyan uppercase tracking-wider mb-3 flex items-center gap-2"><LayoutDashboard className="w-3.5 h-3.5" />Clinical NLP Classifier — Intake Briefing</p>
                <IntakeBriefMockup />
              </div>
            </div>
          </section>

          {/* ═══ 07 · INDUSTRIES ════════════════════════════════ */}
          <section id="industries" className="scroll-mt-20 pb-24 md:pb-28">
            <SectionHeader
              badge="Who We Serve"
              icon={<Bookmark className="w-4 h-4 text-brand-cyan" />}
              title="Tailored For Multi-Provider Healthcare Networks"
              subtitle="Whether you lead a specialist group, hospital network, or growing B2B telehealth platform."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { icon:<Users className="w-6 h-6 text-brand-cyan" />,   num:"01", segment:"Solo & Group Clinics",       desc:"Automate scheduling, intake, and billing FAQs to free up receptionist lines during rush hours.",             highlights:["Voice receptionist bots","Auto slot bookings","SMS confirmation loops","FAQ answering models"] },
                { icon:<Activity className="w-6 h-6 text-brand-cyan" />,num:"02", segment:"Specialist Networks",            desc:"Extract clinical symptoms and chronologies to prepare structured briefs for specialists prior to checks.",   highlights:["Specialized triage nodes","SOAP brief summaries","Pre-exam templates","EHR document syncing"] },
                { icon:<Globe className="w-6 h-6 text-brand-cyan" />,   num:"03", segment:"Hospital Systems",       desc:"Deploy secure, high-capacity symptom classifiers to manage incoming portal messages and route cases correctly.",      highlights:["FHIR integration layers","High-load API gates","Zero data storage","Multi-dept routing"] },
                { icon:<Zap className="w-6 h-6 text-brand-cyan" />,     num:"04", segment:"Health Tech Platforms",desc:"Integrate compliance-first AI triage engines and structured health extractors directly into your SaaS.",      highlights:["Secure SDK access","Private cloud API gates","Custom fine-tuned weights","Webhook intake systems"] },
              ].map((item,i)=>(
                <div key={i} className="glass-panel p-6 rounded-2xl border border-brand-border hover:border-brand-cyan/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col group">
                  <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center mb-4 group-hover:bg-brand-cyan/20 group-hover:scale-105 transition-all duration-300">{item.icon}</div>
                  <span className="text-[9px] font-bold text-brand-cyan uppercase tracking-wider mb-1">{item.num}</span>
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
              title="Our 5-Step AI Implementation Model"
              subtitle="From medical data audit to compliance-checked private model deployment."
            />
            <div className="relative">
              <div className="hidden lg:block absolute top-10 left-[calc(10%-2px)] right-[calc(10%-2px)] h-px bg-gradient-to-r from-transparent via-brand-cyan/30 to-transparent" />

              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                {[
                  { icon:<Search className="w-5 h-5" />,    step:"01", label:"Data Audit",    color:"brand-cyan",   desc:"Analyze clinical guidelines, internal handbook files, and schedule API constraints." },
                  { icon:<Layers className="w-5 h-5" />,   step:"02", label:"Prompt Design",      color:"brand-indigo", desc:"Build structured medical instructions, triage logic guidelines, and safety guardrails." },
                  { icon:<Code2 className="w-5 h-5" />,     step:"03", label:"Fine-Tuning", color:"brand-cyan",   desc:"Train open models on secure servers using anonymized medical logs and handbooks." },
                  { icon:<Rocket className="w-5 h-5" />,    step:"04", label:"Integration",      color:"brand-indigo", desc:"Connect API gates to patient portal components, VoIP systems, and EHR records." },
                  { icon:<BarChart3 className="w-5 h-5" />, step:"05", label:"Deploy & Audit",      color:"brand-cyan",   desc:"Launch in secure AWS Nitro enclaves, set up logs, and evaluate accuracy metrics." },
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

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-16">
              <div className="lg:col-span-5">
                <p className="text-xs font-bold text-brand-cyan uppercase tracking-wider mb-4 flex items-center gap-2"><Database className="w-3.5 h-3.5" />AI Stack Infrastructure</p>
                <TechArchitectureDiagram />
              </div>
              <div className="lg:col-span-7 space-y-5">
                <h3 className="font-display font-bold text-xl text-white flex items-center gap-2.5">
                  <span className="w-1 h-5 bg-brand-cyan rounded-full" />Our AI Technology Stack
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label:"AI & LLM Engines",          icon:<Zap className="w-4 h-4 text-brand-cyan" />,      items:["Llama 3 (70B & 8B)","Claude 3.5 Sonnet API","Mistral Large","Hugging Face Transformers"] },
                    { label:"Data Formatters",          icon:<Database className="w-4 h-4 text-brand-cyan" />,  items:["FHIR JSON Parsers","HL7 v2 Message Formatters","Vector DB (Pinecone / pgvector)","GraphQL endpoints"] },
                    { label:"Private Infrastructure",  icon:<Cloud className="w-4 h-4 text-brand-cyan" />,     items:["AWS Nitro Enclaves (Zero-storage)","Vercel Edge Routes","Docker containers","CI/CD deployments"] },
                    { label:"Compliance Core",         icon:<Shield className="w-4 h-4 text-brand-cyan" />,    items:["End-to-end TLS 1.3","AES-256 field encryption","SOC 2 Type II environments","Role-Based Access Logs"] },
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
              title="Clinical AI Deployments We Have Built"
              subtitle="Real results showing how clinics automate administrative overhead using secure AI engines."
            />

            <div className="max-w-4xl mx-auto mb-14">
              <div className="glass-panel p-8 md:p-10 rounded-3xl border border-brand-border flex flex-col md:flex-row gap-8 items-start hover:border-brand-cyan/20 transition-all duration-300">
                <div className="space-y-5 flex-1">
                  <span className="text-[9px] font-bold text-brand-cyan uppercase tracking-widest bg-brand-cyan/10 border border-brand-cyan/20 px-3 py-1 rounded-full">AI Triage</span>
                  <h3 className="font-display font-bold text-3xl text-white tracking-tight leading-snug">Multi-Location Family Practice — AI Intake Integration</h3>
                  <p className="text-base text-slate-300 leading-relaxed font-normal">A family practice with 14 locations struggled with high call volumes and patient waitlists. We integrated a conversational AI voice & text receptionist to verify details, triage severity, and book slots directly in Epic EHR.</p>
                </div>
                <div className="space-y-3 w-full md:w-[45%] shrink-0">
                  {[
                    { label:"Challenge", text:"Overloaded phone lines · Booking delays · Manual recording issues",             color:"text-red-400" },
                    { label:"Solution",  text:"Voice & SMS AI receptionist agents, FHIR record sync, nitro enclaves",  color:"text-yellow-400" },
                    { label:"Result",    text:"74% decrease in queue delay · 12 hours saved weekly per receptionist",        color:"text-green-400" },
                  ].map((r,i)=>(
                    <div key={i} className="glass-panel px-4 py-3.5 rounded-xl border border-brand-border/60 flex items-start gap-3 hover:border-brand-cyan/20 transition-colors duration-200">
                      <span className={`text-[9px] font-bold uppercase tracking-wider shrink-0 mt-0.5 ${r.color}`}>{r.label}</span>
                      <span className="text-base text-slate-300 leading-relaxed">{r.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { category:"Voice AI",    title:"Dentistry Voice Answering Agent",   challenge:"After-hours calls going unanswered, losing bookings.", solution:"Voice receptionist checking slot availability and booking.", result:"45+ new appointment bookings captured monthly after-hours.", color:"brand-indigo", tag:"Clinical Voice AI" },
                { category:"Intake NLP", title:"Orthopedic Clinic SOAP Brief Generator",challenge:"Doctors losing hours manually summarizing portal files.", solution:"NLP summary pipeline generating SOAP charts.", result:"Reduced doctor note preparation times by 62%.",   color:"brand-cyan",   tag:"SOAP Summarization" },
                { category:"Campaign AI",     title:"Dermatology Automated SMS Recalls",   challenge:"Patients forgetting standard 6-month skin checks.", solution:"ML model analyzing charts and sending SMS recall triggers.", result:"Recall scheduling conversions increased by 40% in 60 days.", color:"brand-cyan", tag:"Patient Campaigns" },
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
              title="Why Choose Med Clinic X AI?"
              subtitle="We build clinical AI integrations using zero-data retention enclaves to protect patient privacy."
            />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-5 space-y-5">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon:<Shield className="w-4 h-4 text-brand-cyan" />,        label:"Zero Retention" },
                    { icon:<Zap className="w-4 h-4 text-brand-cyan" />,           label:"Instant Bookings" },
                    { icon:<Search className="w-4 h-4 text-brand-cyan" />,        label:"FHIR Compliant" },
                    { icon:<CheckCircle2 className="w-4 h-4 text-brand-cyan" />,  label:"Symptom Triage" },
                    { icon:<Clock className="w-4 h-4 text-brand-cyan" />,         label:"Staff Hours Saved" },
                    { icon:<TrendingUp className="w-4 h-4 text-brand-cyan" />,    label:"EHR Integrated" },
                  ].map((b,i)=>(
                    <div key={i} className="flex items-center gap-2 glass-panel border border-brand-border px-3 py-2.5 rounded-xl">
                      {b.icon}<span className="text-xs font-semibold text-gray-300">{b.label}</span>
                    </div>
                  ))}
                </div>
                <div className="glass-panel p-5 rounded-2xl border border-brand-cyan/15 bg-brand-cyan/5">
                  <p className="text-xs font-bold text-brand-cyan uppercase tracking-wider mb-3">Our AI Design Standards</p>
                  <div className="space-y-2 text-xs text-gray-400 font-medium">
                    {["Private AWS Nitro Cloud Enclaves","Zero-Data-Retention Boundaries","FHIR Schema Standard Outputs","Clinical Rule-Based Fallbacks","HIPAA-Compliant Encrypted Pipelines","Continuous Accuracy Evaluations"].map((p,i)=>(
                      <div key={i} className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-brand-cyan shrink-0" />{p}</div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7 space-y-4">
                {[
                  { title:"HIPAA-Secure Enclave Infrastructure", desc:"Generic LLMs reuse user inputs for training. Our clinical AI gateways are hosted inside secure, isolated AWS Nitro Enclaves with zero storage capabilities, guaranteeing absolute data separation and privacy." },
                  { title:"FHIR-Structured API Pipelines", desc:"We don&apos;t output messy chat answers. Our NLP models extract patient symptoms, sev, and duration metrics into formatted JSON templates complying with HL7 FHIR standards for immediate database logging." },
                  { title:"Clinical Safety Guardrails First", desc:"Our models are engineered with strict rule-based fallback protocols. Emergency key terms (chest pain, shortness of breath) immediately halt the automated chat flow and alert human clinic coordinators." },
                  { title:"Custom Fine-Tuning For Your Practice", desc:"We specialize in training open-source LLM layers directly on your practice&apos;s internal manuals, schedules, doctor specializations, and patient FAQs, ensuring highly accurate responses." },
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
              subtitle="Accuracy benchmarks, EHR integration layers, patient compliance, and models."
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
                  Ready to Deploy Clinical AI to Support Your Teams?
                </h2>
                <p className="text-base text-gray-400 leading-relaxed mb-8 max-w-xl mx-auto">
                  Book a discovery call with our digital health engineering specialists to audit your current platform, calculate ROI, and plan your clinical AI model training.
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
