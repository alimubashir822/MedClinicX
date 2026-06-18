"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Video,
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
  XCircle,
  CheckCircle,
  Clock,
  Rocket,
  BarChart3,
  Smartphone,
  List,
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

function TelehealthVideoMockup() {
  const vitals = [
    { label: "Heart Rate", value: "72 bpm", status: "Normal", color: "text-green-400" },
    { label: "Blood Pressure", value: "120/80", status: "Optimal", color: "text-green-400" },
    { label: "SpO2 (Pulse Ox)", value: "98%", status: "Normal", color: "text-green-400" },
  ];
  return (
    <div className="rounded-2xl border border-brand-border overflow-hidden shadow-2xl bg-[#040D18]">
      <div className="bg-brand-bg px-4 py-3 border-b border-brand-border flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-brand-cyan/15 border border-brand-cyan/25 flex items-center justify-center">
            <Video className="w-4 h-4 text-brand-cyan" />
          </div>
          <div>
            <p className="text-xs font-bold text-white">Live Telehealth Session</p>
            <p className="text-[9px] text-brand-cyan font-medium flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse inline-block" />
              Connected — Latency: 42ms
            </p>
          </div>
        </div>
        <span className="text-[9px] font-bold uppercase text-gray-500 bg-brand-border px-2 py-0.5 rounded">E2EE Secured</span>
      </div>
      
      <div className="p-4 grid grid-cols-12 gap-3">
        {/* Video feed mock */}
        <div className="col-span-7 bg-[#0b1320] border border-brand-border/40 rounded-xl relative h-44 flex items-center justify-center overflow-hidden">
          <div className="w-12 h-12 rounded-full bg-brand-cyan/20 flex items-center justify-center animate-pulse">
            <Video className="w-6 h-6 text-brand-cyan" />
          </div>
          {/* Patient thumbnail overlay */}
          <div className="absolute bottom-2 right-2 w-14 h-10 bg-brand-bg border border-brand-border/60 rounded-lg flex items-center justify-center">
            <span className="text-[8px] font-mono text-gray-500">Self</span>
          </div>
          <span className="absolute top-2 left-2 text-[8px] font-mono text-gray-400 bg-brand-bg/80 px-1.5 py-0.5 rounded border border-brand-border">Dr. Sarah Jenkins</span>
        </div>

        {/* Telemetry panel */}
        <div className="col-span-5 space-y-2.5">
          <p className="text-[9px] font-bold text-gray-500 uppercase tracking-wider">Live Vitals</p>
          <div className="space-y-1.5">
            {vitals.map((v, i) => (
              <div key={i} className="glass-panel p-2 rounded-lg border border-brand-border/60">
                <p className="text-[8px] text-gray-500 font-medium leading-none">{v.label}</p>
                <div className="flex items-baseline justify-between mt-1">
                  <p className="text-xs font-bold text-white leading-none">{v.value}</p>
                  <span className={`text-[7px] font-bold uppercase ${v.color}`}>{v.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TelemetryFeedMockup() {
  const telemetryData = [
    { name: "Smart Watch Pulse", val: "74 BPM", sync: "1s ago", color: "text-brand-cyan" },
    { name: "Bluetooth BP Cuff", val: "118/79 mmHg", sync: "10s ago", color: "text-brand-indigo" },
    { name: "Dexcom G6 Glucose", val: "110 mg/dL", sync: "30s ago", color: "text-green-400" },
  ];
  return (
    <div className="rounded-2xl border border-brand-border overflow-hidden shadow-2xl bg-[#040D18]">
      <div className="bg-brand-bg px-4 py-2 border-b border-brand-border flex items-center justify-between text-[10px] text-gray-500 font-mono">
        <span>telemetry-stream-manager.js</span>
        <span className="text-brand-cyan font-bold">Bluetooth Smart Ingestion</span>
      </div>
      <div className="p-4 space-y-2">
        {telemetryData.map((d, i) => (
          <div key={i} className="glass-panel p-2.5 rounded-xl border border-brand-border/60 flex items-center justify-between hover:border-brand-cyan/20 transition-colors">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse shrink-0" />
              <div>
                <p className="text-[10px] font-bold text-white leading-tight">{d.name}</p>
                <p className="text-[8px] text-gray-500">Last Synced: {d.sync}</p>
              </div>
            </div>
            <span className={`text-xs font-bold font-mono ${d.color}`}>{d.val}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TechArchitectureDiagram() {
  const nodes = [
    { icon:<Video className="w-4 h-4" />,         label:"WebRTC Video Engine",   sub:"Peer-to-Peer · Latency <100ms · Opus/VP8", color:"brand-cyan" },
    { icon:<Lock className="w-4 h-4" />,           label:"Secure Signaling Gate", sub:"WebSockets · E2E JWT Verification",    color:"brand-indigo" },
    { icon:<HeartPulse className="w-4 h-4" />,     label:"Bluetooth Telemetry",   sub:"Web Bluetooth API · Vital Aggregation", color:"brand-cyan" },
    { icon:<Database className="w-4 h-4" />,       label:"E-Prescribing APIs",    sub:"SureScripts Network · Auto-routing",   color:"brand-indigo" },
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
  { question: "1. What is the video latency average on your telemedicine portals?", answer: "Our custom WebRTC-based video channels stream peer-to-peer natively, yielding average latencies below 150ms in standard network configurations, avoiding lags or audio dropouts." },
  { question: "2. Can telemedicine portals sync directly with Bluetooth medical sensors?", answer: "Yes, we implement the Web Bluetooth API to securely pair patients&apos; smartwatches, BP cuffs, scales, and glucose monitors directly from modern web interfaces with no app downloads required." },
  { question: "3. How does e-prescribing integration operate?", answer: "We connect telemedicine consult workflows to major e-prescribing routing systems (e.g., Surescripts networks), enabling doctors to submit prescriptions directly to pharmacies during video consultations." },
  { question: "4. Does the portal require third-party app installations?", answer: "No, patients launch consultations by clicking a secure link inside their portal. The WebRTC video streaming operates natively inside Safari, Chrome, and Edge browsers." },
  { question: "5. Are virtual consult video streams recorded?", answer: "By default, no streams are stored on server nodes. If a clinic requires recording sessions, video flows route through dedicated, encrypted HIPAA archives with auto-expire policies." },
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

export default function TelemedicineClient() {
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
          <span className="text-gray-300 font-semibold">Telemedicine Solutions</span>
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
                  <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest">Virtual Consultation Tech</span>
                </div>
                <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-400 tracking-tight leading-[1.12] text-center max-w-4xl mx-auto">
                  Secure Virtual Consultations & Telehealth <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-cyan to-brand-indigo">Telemetry Gateways</span>
                </h1>
                <p className="text-slate-300 text-base leading-relaxed text-center max-w-2xl mx-auto font-normal">
                  Med Clinic X engineers high-fidelity WebRTC video networks linked natively to Bluetooth medical sensors and digital pharmacy networks, optimizing virtual chronic care delivery.
                </p>
                <div className="flex flex-wrap gap-2.5 text-xs font-medium text-gray-400 justify-center">
                  {["Latency Under 150ms", "WebRTC Native Video", "Web Bluetooth Sensors", "e-Rx Pharmacy Sync"].map((b, i) => (
                    <span key={i} className="flex items-center gap-1.5 bg-brand-bg border border-brand-border px-3 py-1.5 rounded-full">
                      <CheckCircle2 className="w-3 h-3 text-brand-cyan" />{b}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center w-full">
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-bold text-sm px-8 py-4 rounded-xl shadow-lg shadow-brand-cyan/15 hover:scale-[1.01] active:scale-[0.99] transition-all">
                    Build Telehealth Systems <ArrowRight className="w-4 h-4" />
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
                Trusted by Clinical Providers and Medical Networks
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {[
                  { icon:<Users className="w-6 h-6 text-brand-cyan" />,    label:"Virtual Visits Conducted",   desc:"Secure consultations held in native browser channels.",  stat:"850k+" },
                  { icon:<Activity className="w-6 h-6 text-brand-cyan" />, label:"Partner Providers",        desc:"Clinics delivering care via telemetry-capable screens.",           stat:"120+" },
                  { icon:<Globe className="w-6 h-6 text-brand-cyan" />,    label:"Average Gateway Latency",   desc:"Real-time streaming metrics across standard connections.",       stat:("<150ms") },
                  { icon:<Zap className="w-6 h-6 text-brand-cyan" />,      label:"Patient Churn Decrease",    desc:"Retention in chronic disease care loops after adoption.",         stat:"38%" },
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
              title="Is Poor Telehealth Usability Causing Patient Churn?"
              subtitle="Lags, app-download requirements, and lack of diagnostic patient data increase telehealth bounce metrics."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
              {[
                { icon:<XCircle className="w-5 h-5 text-red-400" />,    title:"High Video Latency & Dropouts",   desc:"Low-quality streaming solutions cause lag spikes, visual artifacting, and call drops, frustrating patients.", impact:"Causes a 34% drop-off rate during consults." },
                { icon:<XCircle className="w-5 h-5 text-red-400" />,    title:"App Download Friction",      desc:"Requiring patients to install complex native app setups or register accounts before calls prevents immediate visits.", impact:"40% of patients abandon calls if apps are required." },
                { icon:<XCircle className="w-5 h-5 text-red-400" />,    title:"Zero Clinical Diagnostic Data",       desc:"Doctors evaluate chronic disease cases blindly with no live patient vital telemetry, weight, or BP logs.", impact:"70% of telehealth sessions are blind evaluations." },
                { icon:<XCircle className="w-5 h-5 text-red-400" />,    title:"Non-Compliant Chat Channels",     desc:"Using Zoom, FaceTime, or legacy Skype pipelines exposes practices to severe HIPAA data protection audits.", impact:"HIPAA penalties average $150k for unsecured streams." },
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
                <span>telehealth-gateway-comparison.png</span>
                <div className="flex items-center gap-3">
                  <span className="text-red-400 font-bold">❌ Laggy Legacy</span>
                  <span className="text-brand-cyan font-bold">✅ Low-Latency WebRTC</span>
                </div>
              </div>
              <Image src="/service_telemedicine.png" alt="Telehealth Interface and Vitals Dashboard Comparison" width={1200} height={600} className="w-full h-96 object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </section>

          {/* ═══ 04 · SOLUTION OVERVIEW ══════════════════════════ */}
          <section id="solution" className="scroll-mt-20 pb-24 md:pb-28">
            <SectionHeader
              badge="Transformation"
              icon={<Sparkles className="w-4 h-4 text-brand-cyan" />}
              title="The Med Clinic X Telehealth Framework"
              subtitle="We deploy instant browser-native WebRTC portals that ingest patient wearable telemetry in real-time."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
              {[
                { icon:<Users className="w-5 h-5 text-brand-cyan" />,    title:"Single-Click Browser WebRTC",    desc:"HD video consultations stream directly inside Chrome, Safari, and Edge. Zero downloads or installations.", outcome:"↑ 98% appointment completion metrics" },
                { icon:<Search className="w-5 h-5 text-brand-cyan" />,   title:"Real-Time Wearable Telemetry",         desc:"Secure Web Bluetooth API integrations ingest patient smartwatch data, scales, and BP metrics instantly.", outcome:"↑ Live patient diagnostics during calls" },
                { icon:<Activity className="w-5 h-5 text-brand-cyan" />, title:"SureScripts e-Prescribing Sync",  desc:"Pre-integrated pharmacy routing submits orders directly to the patient&apos;s pharmacy during calls.", outcome:"↑ Prescriptions dispatched in 30 seconds" },
                { icon:<Cpu className="w-5 h-5 text-brand-cyan" />,      title:"End-to-End Stream Encryption",       desc:"P2P signalling channels secure chats, vitals, and logs inside private HIPAA cloud bounds.", outcome:"↑ Zero compliance exposure liability" },
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
                <h3 className="font-display font-bold text-2xl text-white">How Telemetry Syncs During Consultations</h3>
                <p className="text-base text-gray-400 leading-relaxed">Our telehealth setup pairs hardware, initiates low-latency video, and dispatches medication details.</p>
                {[
                  { step:"01", label:"Launch Consultation", desc:"Patient taps portal link, granting camera access in their native browser. WebRTC connects." },
                  { step:"02", label:"Device Pairing",  desc:"Portal utilizes Web Bluetooth API to safely pair patient wearable cuffs, glucose meters, or scales." },
                  { step:"03", label:"Telemetry Streaming",   desc:"Continuous data packages stream into the clinician&apos;s screen during video chats." },
                  { step:"04", label:"Consultation Charting",        desc:"Clinician writes observations in templates syncing directly with Epic FHIR endpoints." },
                  { step:"05", label:"Pharmacy Despatch",   desc:"E-rx routing dispatches prescription orders directly to local pharmacies." },
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
                    <span>telemedicine-video-console.png</span>
                    <span className="text-brand-cyan font-bold">LIVE SESSION</span>
                  </div>
                  <div className="p-4">
                    <TelehealthVideoMockup />
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
              title="Telehealth & Remote Care Development Services"
              subtitle="Bespoke telemetry integrations, low-latency WebRTC consultation screens, and pharmacy loops."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 mb-10">
              {[
                { col:6, icon:<Users className="w-5 h-5 text-brand-cyan" />,         title:"Custom WebRTC Telehealth Portals",    desc:"Low-latency, peer-to-peer web video consult layouts optimized for both mobile and desktop clinic channels.", tags:["Browser native","WebGL overlays","High-fidelity audio","Custom layout configurations"] },
                { col:6, icon:<Laptop className="w-5 h-5 text-brand-cyan" />,         title:"Web Bluetooth Telemetry Engines",     desc:"Secure browser-native interfaces that sync with blood pressure cuffs, pulse oximeters, smartwatches, and scales.", tags:["Web Bluetooth API","Data aggregator enclaves","Wearables integration"] },
                { col:4, icon:<Layers className="w-5 h-5 text-brand-cyan" />,    title:"SureScripts e-rx Integrations",        desc:"Clinical e-prescribing modules that route prescriptions to local pharmacies directly from video consult dashboards.", features:["Pharmacy mapping","Surescripts validation","Drug interaction checks"] },
                { col:4, icon:<Lock className="w-5 h-5 text-brand-cyan" />,      title:"Remote Care Diagnostics Loggers",         desc:"Ingest wearable telemetry logs, blood glucose panels, and weight curves directly into database charts.", features:["Continuous data ingestion","Clinical alerting filters","Vitals charts rendering"] },
                { col:4, icon:<Cpu className="w-5 h-5 text-brand-cyan" />,       title:"HIPAA Recording Archives",            desc:"Encrypted session recording, indexing, and storage pipelines with auto-expire compliance policies.", features:["AES-256 media storage","Auto-expire rules","Security access logs"] },
              ].map((card,i)=>(
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
                <span>telehealth-application-screenshots.png</span>
                <span className="text-brand-cyan font-bold">PLATFORM DEMO</span>
              </div>
              <Image src="/service_telemedicine.png" alt="Telemedicine console screenshots, clinical templates, and bluetooth telemetry dashboards" width={1200} height={500} className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
            </div>
          </section>

          {/* ═══ 06 · FEATURES / CAPABILITIES ═══════════════════ */}
          <section id="features" className="scroll-mt-20 pb-24 md:pb-28">
            <SectionHeader
              badge="Platform Capabilities"
              icon={<Zap className="w-4 h-4 text-brand-cyan" />}
              title="Telemetry Capabilities Built for Clinical Precision"
              subtitle="Ensuring high speed consult channels and accurate vital ingestion streams."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
              {[
                { icon:<Video className="w-5 h-5 text-brand-cyan" />,    title:"WebRTC P2P Video Consultation",  desc:"Low-latency, peer-to-peer visual channels inside standard mobile and desktop browsers. Zero app downloads." },
                { icon:<HeartPulse className="w-5 h-5 text-brand-cyan" />,       title:"Web Bluetooth Vitals Ingestion",  desc:"Wirelessly pair and ingest patient blood pressure, glucose logs, scale metrics, and oximetry values natively." },
                { icon:<Smartphone className="w-5 h-5 text-brand-cyan" />,  title:"Responsive Mobile Grid Interfaces",   desc:"Built for the 70%+ of patients launching consult links from SMS notifications on smartphones." },
                { icon:<Shield className="w-5 h-5 text-brand-cyan" />,      title:"End-to-End Encryption Signaling",        desc:"Encrypts video feeds, chats, and telemetry data within private cloud channels." },
                { icon:<Search className="w-5 h-5 text-brand-cyan" />,      title:"Clinician SOAP Template Charts",      desc:"Enables quick medical logging during video sessions with templates syncing directly with EHR systems." },
                { icon:<Bot className="w-5 h-5 text-brand-cyan" />,         title:"SureScripts Pharmacy Despatch",      desc:"Integrates e-prescribing networks, routing doctor drug requests instantly to pharmacies during calls." },
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
                <p className="text-xs font-bold text-brand-cyan uppercase tracking-wider mb-3 flex items-center gap-2"><Video className="w-3.5 h-3.5" />Telehealth Video Consultation Console</p>
                <TelehealthVideoMockup />
              </div>
              <div>
                <p className="text-xs font-bold text-brand-cyan uppercase tracking-wider mb-3 flex items-center gap-2"><Activity className="w-3.5 h-3.5" />Bluetooth Device Ingestion Stream Monitor</p>
                <TelemetryFeedMockup />
              </div>
            </div>
          </section>

          {/* ═══ 07 · INDUSTRIES ════════════════════════════════ */}
          <section id="industries" className="scroll-mt-20 pb-24 md:pb-28">
            <SectionHeader
              badge="Who We Serve"
              icon={<Bookmark className="w-4 h-4 text-brand-cyan" />}
              title="Built for Virtual Care Settings"
              subtitle="We adjust telemedicine layouts and bluetooth device settings to suit different specialist channels."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { icon:<Users className="w-6 h-6 text-brand-cyan" />,   num:"01", segment:"Chronic Care Management",       desc:"Monitor and consultation platforms for diabetes, hypertension, and cardiac care groups.",             highlights:["BP cuff bluetooth pairing","Blood glucose charts","Weight log analytics","Automatic vital alerts"] },
                { icon:<Activity className="w-6 h-6 text-brand-cyan" />,num:"02", segment:"Specialist Clinics",            desc:"Enable remote consult screens for dermatologists, psychologists, and general checkups.",   highlights:["Hi-res image uploads","Screen sharing modules","Integrated SOAP templates","E-rx dispatch loops"] },
                { icon:<Globe className="w-6 h-6 text-brand-cyan" />,   num:"03", segment:"Outpatient Networks",       desc:"Centralized telemetry channels routing remote consult cases to available clinicians securely.",      highlights:["Provider dispatch engine","Multi-clinic coordination","Enterprise integrations","SLA performance reports"] },
                { icon:<Zap className="w-6 h-6 text-brand-cyan" />,     num:"04", segment:"Telehealth Startups",desc:"Custom telemetry APIs, low-latency signaling SDKs, and billing modules for new platforms.",      highlights:["API signaling systems","Web Bluetooth SDKs","Stripe milestone billing","HIPAA enclave bounds"] },
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
              title="Our 5-Step Telemedicine implementation Process"
              subtitle="Ensuring clinical-grade video networks, secure Bluetooth connections, and EHR integration."
            />
            <div className="relative">
              <div className="hidden lg:block absolute top-10 left-[calc(10%-2px)] right-[calc(10%-2px)] h-px bg-gradient-to-r from-transparent via-brand-cyan/30 to-transparent" />

              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                {[
                  { icon:<Search className="w-5 h-5" />,    step:"01", label:"Scoping",    color:"brand-cyan",   desc:"Audit doctor scheduling guidelines, target pharmacy channels, and Bluetooth device types." },
                  { icon:<Layers className="w-5 h-5" />,   step:"02", label:"UX Design",      color:"brand-indigo", desc:"Patient consult wireframes, diagnostic dashboards, and mobile-first call screens." },
                  { icon:<Code2 className="w-5 h-5" />,     step:"03", label:"Development", color:"brand-cyan",   desc:"Build WebRTC signaling nodes, Web Bluetooth engines, and e-rx API integrations." },
                  { icon:<Rocket className="w-5 h-5" />,    step:"04", label:"Audits",      color:"brand-indigo", desc:"Test video connection speeds, check BLE security logs, and verify HIPAA compliance." },
                  { icon:<BarChart3 className="w-5 h-5" />, step:"05", label:"Launch",      color:"brand-cyan",   desc:"Deploy to cloud portals, onboard provider staff, and activate real-time telemetry gauges." },
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
                <p className="text-xs font-bold text-brand-cyan uppercase tracking-wider mb-4 flex items-center gap-2"><Database className="w-3.5 h-3.5" />Signaling & Telemetry Stack</p>
                <TechArchitectureDiagram />
              </div>
              <div className="lg:col-span-7 space-y-5">
                <h3 className="font-display font-bold text-xl text-white flex items-center gap-2.5">
                  <span className="w-1 h-5 bg-brand-cyan rounded-full" />Our Telemedicine Stack
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label:"Video & Streaming",           icon:<Zap className="w-4 h-4 text-brand-cyan" />,      items:["WebRTC (native browser)","SFU Streaming Nodes","VP8 / VP9 Video Codecs","Opus Audio Filters"] },
                    { label:"Data Aggregations",           icon:<Database className="w-4 h-4 text-brand-cyan" />,  items:["Web Bluetooth API","HL7 FHIR JSON structures","Redis cache sockets","Surescripts E-Rx API"] },
                    { label:"Cloud Signaling",             icon:<Cloud className="w-4 h-4 text-brand-cyan" />,     items:["WebSocket secure channels","AWS VPC HIPAA boundaries","STUN / TURN servers","Vercel Edge deploy"] },
                    { label:"Security Layer",              icon:<Shield className="w-4 h-4 text-brand-cyan" />,    items:["End-to-End Encryption","JWT Session tokens","SOC 2 Type II environments","MFA login policies"] },
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
              title="Telehealth Projects We Have Deployed"
              subtitle="Real clinical results showing reduced latency and enhanced patient retention."
            />

            <div className="max-w-4xl mx-auto mb-14">
              <div className="glass-panel p-8 md:p-10 rounded-3xl border border-brand-border flex flex-col md:flex-row gap-8 items-start hover:border-brand-cyan/20 transition-all duration-300">
                <div className="space-y-5 flex-1">
                  <span className="text-[9px] font-bold text-brand-cyan uppercase tracking-widest bg-brand-cyan/10 border border-brand-cyan/20 px-3 py-1 rounded-full">Telemetry Integration</span>
                  <h3 className="font-display font-bold text-3xl text-white tracking-tight leading-snug">Regional Cardiac Care Network — Telehealth Portal</h3>
                  <p className="text-base text-slate-300 leading-relaxed font-normal">A cardiology group with 6 locations needed a remote monitoring setup. We engineered a browser-native WebRTC telemedicine portal integrated with patients&apos; Bluetooth ECG oximeters and blood pressure cuffs.</p>
                </div>
                <div className="space-y-3 w-full md:w-[45%] shrink-0">
                  {[
                    { label:"Challenge", text:"Frequent video drops · Low patient compliance · High app-download friction",             color:"text-red-400" },
                    { label:"Solution",  text:"WebRTC peer connection, Web Bluetooth API integration, SureScripts sync",  color:"text-yellow-400" },
                    { label:"Result",    text:"Consultation dropout rates reduced to 2% · 38% decrease in chronic care patient churn",        color:"text-green-400" },
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
                { category:"Browser Video",    title:"One-Click Telehealth Portal",   challenge:"Complex downloads causing 40% patient dropouts.", solution:"Browser-native WebRTC video session links.", result:"Appointment completion metrics increased to 98% in 30 days.", color:"brand-indigo", tag:"WebRTC Video" },
                { category:"e-Prescribing", title:"Dermatology e-Rx Integration",challenge:"Doctors writing scripts manually, losing pharmacy speed.", solution:"SureScripts e-rx API routing directly in video feeds.", result:"Medications dispatched in under 30 seconds during calls.",   color:"brand-cyan",   tag:"SureScripts rx" },
                { category:"Wearables",     title:"Diabetes Care Telemetry Integration",   challenge:"Blind blood glucose monitoring, manual entries.", solution:"Web Bluetooth API glucose sensor sync during calls.", result:"Continuous real-time clinical dashboards in sessions.", color:"brand-cyan", tag:"Bluetooth BLE" },
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
              title="Why Choose Med Clinic X Telehealth?"
              subtitle="We build video consult tools prioritizing speed, integration, and wearable connectivity."
            />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-5 space-y-5">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon:<Shield className="w-4 h-4 text-brand-cyan" />,        label:"HIPAA E2EE" },
                    { icon:<Zap className="w-4 h-4 text-brand-cyan" />,           label:"P2P Latency <100ms" },
                    { icon:<Search className="w-4 h-4 text-brand-cyan" />,        label:"BLE Telemetry" },
                    { icon:<CheckCircle2 className="w-4 h-4 text-brand-cyan" />,  label:"e-Rx Pharmacy" },
                    { icon:<Clock className="w-4 h-4 text-brand-cyan" />,         label:"Zero Downloads" },
                    { icon:<TrendingUp className="w-4 h-4 text-brand-cyan" />,    label:"High Retention" },
                  ].map((b,i)=>(
                    <div key={i} className="flex items-center gap-2 glass-panel border border-brand-border px-3 py-2.5 rounded-xl">
                      {b.icon}<span className="text-xs font-semibold text-gray-300">{b.label}</span>
                    </div>
                  ))}
                </div>
                <div className="glass-panel p-5 rounded-2xl border border-brand-cyan/15 bg-brand-cyan/5">
                  <p className="text-xs font-bold text-brand-cyan uppercase tracking-wider mb-3">Our Standards Checklist</p>
                  <div className="space-y-2 text-xs text-gray-400 font-medium">
                    {["Low-Latency WebRTC P2P Video","Web Bluetooth API Vital Pairings","SureScripts e-Prescribing Integrations","MFA Security & Session Logs","SOC 2 Type II Server Infrastructures","HIPAA Encryption (AES-256)"].map((p,i)=>(
                      <div key={i} className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-brand-cyan shrink-0" />{p}</div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7 space-y-4">
                {[
                  { title:"Low-Latency Browser WebRTC Video", desc:"No patient downloads required. Visual consult sessions boot instantly inside native browsers with averages under 150ms latency, bypassing third-party application barriers." },
                  { title:"Web Bluetooth Device Telemetry Pairing", desc:"Patients pair scales, glucose monitors, and oximeters natively from browser windows using secure BLE aggregators, providing doctors with diagnostic vital logs during calls." },
                  { title:"Automated Pharmacy e-rx Dispatches", desc:"Connect consult loops with e-prescribing networks, allowing clinicians to select local pharmacies, check drug safety parameters, and dispatch prescriptions in under 30 seconds." },
                  { title:"Clinical-Grade Privacy Safeguards", desc:"All audio, video, and text packages are encrypted in transit. Signalling servers operate in SOC 2 Type II data centers using secure session controls to guarantee HIPAA compliance." },
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
              subtitle="HIPAA guidelines, Web Bluetooth pairing, latency benchmarks, and recording compliance."
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
                  Ready to Implement Telehealth Consultation Frameworks?
                </h2>
                <p className="text-base text-gray-400 leading-relaxed mb-8 max-w-xl mx-auto">
                  Book a discovery call with our digital health engineering specialists to audit your current platform, calculate ROI, and plan your software rollout.
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
                      <Sparkles className="w-3.5 h-3.5" />
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
