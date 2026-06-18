"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
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
  FileText,
  Bell,
  CreditCard,
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

function DICOMViewerMockup() {
  return (
    <div className="rounded-2xl border border-brand-border overflow-hidden shadow-2xl bg-[#040D18]">
      <div className="bg-brand-bg px-4 py-2 border-b border-brand-border flex items-center justify-between text-[10px] text-gray-500 font-mono">
        <span>dicom-viewer-3d.exe</span>
        <span className="text-green-400 font-bold">16-bit High Contrast</span>
      </div>
      <div className="p-4 grid grid-cols-12 gap-3">
        <div className="col-span-8 bg-black rounded-lg border border-brand-border/60 relative h-40 flex items-center justify-center overflow-hidden">
          <Activity className="w-24 h-24 text-gray-800 animate-pulse" />
          <div className="absolute top-2 left-2 text-[9px] font-mono text-cyan-400">
            <p>ID: MCX-831-DCM</p>
            <p>WL: 120 / WW: 400</p>
          </div>
          <div className="absolute bottom-2 right-2 flex gap-1 text-[8px] bg-brand-bg/85 px-1.5 py-0.5 rounded border border-brand-border text-gray-400 font-mono">
            <span>Z: 100%</span>
            <span>R: 0°</span>
          </div>
        </div>
        <div className="col-span-4 space-y-2">
          <p className="text-[9px] font-bold text-gray-500 uppercase tracking-wider">Parameters</p>
          <div className="space-y-1">
            {["Brightness: 50%", "Contrast: 80%", "Zoom: Fit", "Filters: Edge"].map((btn, i) => (
              <div key={i} className="bg-brand-bg/60 border border-brand-border text-[9px] text-slate-300 py-1.5 px-2 rounded font-semibold text-center cursor-pointer hover:border-brand-cyan/20">
                {btn}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TechArchitectureDiagram() {
  const nodes = [
    { icon:<LayoutDashboard className="w-4 h-4" />, label:"Web Front door",            sub:"Next.js · PWA Layout · Secure Auth", color:"brand-cyan" },
    { icon:<Lock className="w-4 h-4" />,            label:"Cryptographic Gateway",     sub:"SSL · AES-256 · MFA Auditing",      color:"brand-indigo" },
    { icon:<Database className="w-4 h-4" />,       label:"FHIR Database Sync",        sub:"Epic · Cerner · Custom Databases",    color:"brand-cyan" },
    { icon:<FileText className="w-4 h-4" />,       label:"DICOM Image Vault",         sub:"S3 Secure Signed URLs · DICOM Web",   color:"brand-indigo" },
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
  { question: "1. Can patients view DICOM medical imaging (X-rays, CBCT) in the portal?", answer: "Yes, we integrate high-performance web DICOM viewers. This allows patients and clinical staff to view 3D CBCT scans, panoramic dental layouts, and standard X-rays directly inside any desktop or mobile browser without plugins." },
  { question: "2. Is the patient portal HIPAA compliant?", answer: "Absolutely. All patient health records (PHI), credentials, and messaging loops are secured using AES-256 field encryption. Logins support multi-factor authentication, and all user sessions write log inputs to audit trials." },
  { question: "3. How does Stripe installment billing work?", answer: "For larger clinical treatment schedules, we integrate payment modules that break up total estimates into milestones. Payments are automatically charged via Stripe on clinical phase triggers." },
  { question: "4. Can the portal sync with Epic, Cerner, or custom EHR systems?", answer: "Yes, we build secure sync engines that retrieve clinical files, upcoming appointments, and diagnostic reports using HL7 FHIR protocols, eliminating duplicate record entries." },
  { question: "5. How long does a custom patient portal rebuild take?", answer: "A custom patient portal with core EHR syncing, invoicing, and messaging capabilities takes 8 to 14 weeks from wireframe scoping to compliance audits." },
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

export default function PatientPortalClient() {
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
          <span className="text-gray-300 font-semibold">Patient Portal Development</span>
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
                  <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest">Patient Portal Systems</span>
                </div>
                <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-400 tracking-tight leading-[1.12] text-center max-w-4xl mx-auto">
                  Unified Patient Portal Dashboards Connecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-cyan to-brand-indigo">Records, Care & Billing</span>
                </h1>
                <p className="text-slate-300 text-base leading-relaxed text-center max-w-2xl mx-auto font-normal">
                  Med Clinic X designs and engineers custom, HIPAA-compliant patient portals offering secure messaging networks, DICOM imaging vaults, and automated Stripe billing milestone schedulers.
                </p>
                <div className="flex flex-wrap gap-2.5 text-xs font-medium text-gray-400 justify-center">
                  {["82% Patient Activation", "FHIR EHR Syncing", "Milestone Stripe Billing", "In-Browser DICOM Viewers"].map((b, i) => (
                    <span key={i} className="flex items-center gap-1.5 bg-brand-bg border border-brand-border px-3 py-1.5 rounded-full">
                      <CheckCircle2 className="w-3 h-3 text-brand-cyan" />{b}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center w-full">
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-bold text-sm px-8 py-4 rounded-xl shadow-lg shadow-brand-cyan/15 hover:scale-[1.01] active:scale-[0.99] transition-all">
                    Build Custom Portal <ArrowRight className="w-4 h-4" />
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
                Trusted by Multi-Clinic Healthcare Networks Across the US
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {[
                  { icon:<Users className="w-6 h-6 text-brand-cyan" />,    label:"Activated Patients",   desc:"Patients actively checking details and paying billing milestones.",  stat:"450k+" },
                  { icon:<Activity className="w-6 h-6 text-brand-cyan" />, label:"Partner Practices",        desc:"Medical networks running custom portal dashboards.",           stat:"60+" },
                  { icon:<Globe className="w-6 h-6 text-brand-cyan" />,    label:"Average Patient Activation",desc:"Activation rate compared to industry averages.",              stat:"82%" },
                  { icon:<Zap className="w-6 h-6 text-brand-cyan" />,      label:"Transaction Volume",    desc:"Payments handled securely via installment templates.",        stat:"$12M+" },
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
              title="Is an Outdated Portal Hurting Patient Retention?"
              subtitle="Confusing patient logins, lack of mobile layouts, and paper invoice billing processes reduce patient activation."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
              {[
                { icon:<XCircle className="w-5 h-5 text-red-400" />,    title:"Low Patient Activation Rates",   desc:"Outdated clinical portals with confusing logins and poor mobile experiences discourage patient engagement.", impact:"Traditional patient portals see under 20% activation." },
                { icon:<XCircle className="w-5 h-5 text-red-400" />,    title:"Disconnected Medical Imaging",      desc:"Patients must call clinic coordinators or wait for mail copies to access 3D CBCT, panoramic, or standard X-rays.", impact:"Causes 30% of clinical administration call volume." },
                { icon:<XCircle className="w-5 h-5 text-red-400" />,    title:"Manual Invoice Collections",       desc:"Invoicing treatment plans via paper or calls leads to delayed payments and elevated administrative costs.", impact:"Average collections cycle times exceed 45 days." },
                { icon:<XCircle className="w-5 h-5 text-red-400" />,    title:"Insecure Nursing Messaging",     desc:"Patients and nursing staff emailing files or symptoms exposes practices to severe HIPAA compliance risks.", impact:"Email breaches average $150k in HIPAA settlements." },
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
                <span>patient-portal-redesign.png</span>
                <div className="flex items-center gap-3">
                  <span className="text-red-400 font-bold">❌ Outdated Portal</span>
                  <span className="text-brand-cyan font-bold">✅ Unified Patient Portal</span>
                </div>
              </div>
              <Image src="/service_patient_portal.png" alt="Modern Patient Portal Dashboard UI Design" width={1200} height={600} className="w-full h-96 object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </section>

          {/* ═══ 04 · SOLUTION OVERVIEW ══════════════════════════ */}
          <section id="solution" className="scroll-mt-20 pb-24 md:pb-28">
            <SectionHeader
              badge="Transformation"
              icon={<Sparkles className="w-4 h-4 text-brand-cyan" />}
              title="The Med Clinic X Portal Solution"
              subtitle="We build unified portal systems designed for clinical speed, invoice collection, and patient ease."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
              {[
                { icon:<Users className="w-5 h-5 text-brand-cyan" />,    title:"Patient-First Mobile Dashboards",    desc:"Layouts engineered around patient tasks — view labs, pay invoices, message nurses, and manage scheduling.", outcome:"↑ 82% patient adoption & activation" },
                { icon:<Search className="w-5 h-5 text-brand-cyan" />,   title:"In-Browser DICOM Image Vaults",         desc:"Web WebRTC DICOM integrations that allow patients to load CBCT, panoramic, and X-ray files immediately.", outcome:"↑ Instant secure access to diagnostics" },
                { icon:<Activity className="w-5 h-5 text-brand-cyan" />, title:"Milestone Stripe Billing Schedulers",  desc:"Splits complex estimates into billing milestones charged dynamically upon treatment phase confirmations.", outcome:"↑ Collections collection cycles reduced to 7 days" },
                { icon:<Cpu className="w-5 h-5 text-brand-cyan" />,      title:"FHIR Data Sync Pipelines",       desc:"Connects patient charts, diagnostics, and appointments with Epic, Cerner, or local EHR engines.", outcome:"↑ Zero manual transcription errors" },
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
                <h3 className="font-display font-bold text-2xl text-white">How Patient Portal Pipelines Sync Data</h3>
                <p className="text-base text-gray-400 leading-relaxed">Our portal gateways fetch records, render images, and process Stripe transactions securely.</p>
                {[
                  { step:"01", label:"Biometric Login", desc:"Patient logins via single-tap FaceID, TouchID, or passcode protocols inside browsers or PWAs." },
                  { step:"02", label:"EHR Data Retrieval",  desc:"The backend gateway issues secure FHIR API queries to Epic or Cerner databases to compile patient summaries." },
                  { step:"03", label:"DICOM Rendering",   desc:"Web-based WebGL engines load heavy panoramic X-rays or CBCT scans directly on browser canvasses." },
                  { step:"04", label:"Secure Message Encryption",        desc:"Encrypts messaging channels using AES-256 field keys between patients and clinical coordinators." },
                  { step:"05", label:"Milestone Payment Processing",   desc:"Stripe invoice pipelines check phase-based milestones and automatically charge cards." },
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
                    <span>dicom-rendering-panel.png</span>
                    <span className="text-brand-cyan font-bold">DICOM WEB VIEW</span>
                  </div>
                  <div className="p-4">
                    <DICOMViewerMockup />
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
              title="Custom Portal Design & Rebuild Services"
              subtitle="Bespoke dashboard solutions engineered around clinical operations and patient adoption."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 mb-10">
              {[
                { col:6, icon:<Users className="w-5 h-5 text-brand-cyan" />,         title:"Custom Clinic Patient Portals",    desc:"Unique, brand-aligned portal dashboards containing clinic records, appointment scheduling widgets, and staff chat modules.", tags:["Private clinics","Specialist networks","Solo practices","B2B health portals"] },
                { col:6, icon:<Laptop className="w-5 h-5 text-brand-cyan" />,         title:"FHIR Interoperability Integrations",     desc:"Secure database connection layers that query patient records, billing reports, and labs from major EHR databases.", tags:["Epic FHIR APIs","Cerner HL7 sync","Athena health integrations","SQL wrappers"] },
                { col:4, icon:<Layers className="w-5 h-5 text-brand-cyan" />,    title:"In-Browser DICOM Viewers",        desc:"Enables clinical-grade rendering of 3D CBCT, panoramic dental, and standard X-ray files directly on web interfaces.", features:["WebGL rendering engines","16-bit contrast controls","CBCT slice selectors"] },
                { col:4, icon:<Lock className="w-5 h-5 text-brand-cyan" />,      title:"Phase Billing Schedulers",         desc:"Splits clinical estimates into milestones linked to automatic Stripe credit card charges upon phase completions.", features:["Phase treatment templates","Stripe Auto-debit","Patient payment schedules"] },
                { col:4, icon:<Cpu className="w-5 h-5 text-brand-cyan" />,       title:"Secure Nursing Messaging",            desc:"End-to-end encrypted direct chat windows matching HIPAA safety parameters, avoiding insecure emails.", features:["AES-256 chat locks","Secure file lockers","MFA session logs"] },
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
                <span>patient-portal-product-previews.png</span>
                <span className="text-brand-cyan font-bold">PORTAL DEMO</span>
              </div>
              <Image src="/service_patient_portal.png" alt="Patient Portal user interface dashboards, billing schedules, and document lockers" width={1200} height={500} className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
            </div>
          </section>

          {/* ═══ 06 · FEATURES / CAPABILITIES ═══════════════════ */}
          <section id="features" className="scroll-mt-20 pb-24 md:pb-28">
            <SectionHeader
              badge="Platform Capabilities"
              icon={<Zap className="w-4 h-4 text-brand-cyan" />}
              title="Portal Capabilities Built for Adoption"
              subtitle="All custom features focus on patient ease-of-use and clinic administrative performance."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
              {[
                { icon:<Calendar className="w-5 h-5 text-brand-cyan" />,    title:"Interactive Appointment Schedulers",  desc:"Instant slot booking, rescheduling, and doctor availability registers linked to central schedules." },
                { icon:<Users className="w-5 h-5 text-brand-cyan" />,       title:"Structured Clinical Briefs",             desc:"View diagnostic lab summaries, blood panels, and dental charts in simplified patient formats." },
                { icon:<Smartphone className="w-5 h-5 text-brand-cyan" />,  title:"Progressive Web App Layouts",   desc:"Tap-to-install mobile grids with biometric logins (FaceID/TouchID) for fast entry." },
                { icon:<Shield className="w-5 h-5 text-brand-cyan" />,      title:"AES-256 Field Encryption",        desc:"Guarantees absolute safety for message logs, medical documents, and billing history variables." },
                { icon:<Search className="w-5 h-5 text-brand-cyan" />,      title:"DICOM Web Rendering",      desc:"16-bit high-contrast WebGL layouts that render CBCT, panoramic, and X-ray files directly on web pages." },
                { icon:<Bot className="w-5 h-5 text-brand-cyan" />,         title:"Stripe Phase Billing Modules",      desc:"Splits complex clinical estimates into automated milestone payments charged on treatment phases." },
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
                <p className="text-xs font-bold text-brand-cyan uppercase tracking-wider mb-3 flex items-center gap-2"><LayoutDashboard className="w-3.5 h-3.5" />Patient Portal Dashboard UI</p>
                <PatientPortalMockup />
              </div>
              <div>
                <p className="text-xs font-bold text-brand-cyan uppercase tracking-wider mb-3 flex items-center gap-2"><Activity className="w-3.5 h-3.5" />WebGL DICOM Image Viewer Panel</p>
                <DICOMViewerMockup />
              </div>
            </div>
          </section>

          {/* ═══ 07 · INDUSTRIES ════════════════════════════════ */}
          <section id="industries" className="scroll-mt-20 pb-24 md:pb-28">
            <SectionHeader
              badge="Who We Serve"
              icon={<Bookmark className="w-4 h-4 text-brand-cyan" />}
              title="Built for Growing Medical Practices"
              subtitle="We customize our portal features around your specific specialty workflows and patient volumes."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { icon:<Users className="w-6 h-6 text-brand-cyan" />,   num:"01", segment:"Private Specialists",       desc:"Securely release laboratory panel records, treatment estimates, and milestone billing routes.",             highlights:["Dermatology centers","Orthopedic networks","Plastic surgery clinics","Cardiology practices"] },
                { icon:<Activity className="w-6 h-6 text-brand-cyan" />,num:"02", segment:"Dental Clinics",            desc:"High-performance browser views for panoramic X-rays and 3D CBCT scans linked to treatment estimates.",   highlights:["Orthodontics","Oral surgery centers","General dentistry networks","Dental groups"] },
                { icon:<Globe className="w-6 h-6 text-brand-cyan" />,   num:"03", segment:"Hospital Systems",       desc:"High-capacity FHIR sync databases connecting hundreds of clinical provider records securely.",      highlights:["Enterprise integrations","Unified patient directory","MFA session safety","Department routing"] },
                { icon:<Zap className="w-6 h-6 text-brand-cyan" />,     num:"04", segment:"Health Startups",desc:"Integrate compliant patient dashboards, billing modules, and APIs into your digital health SaaS.",      highlights:["Portal SDK wrappers","Webhook billing updates","Custom API gateways","HIPAA security core"] },
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
              title="Our Rebuild & Integration Process"
              subtitle="A milestone-based project framework to build, test, audit, and launch secure clinical dashboards."
            />
            <div className="relative">
              <div className="hidden lg:block absolute top-10 left-[calc(10%-2px)] right-[calc(10%-2px)] h-px bg-gradient-to-r from-transparent via-brand-cyan/30 to-transparent" />

              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                {[
                  { icon:<Search className="w-5 h-5" />,    step:"01", label:"Scoping",    color:"brand-cyan",   desc:"Audit existing EHR schemas, integration capabilities, and define payment milestones." },
                  { icon:<Layers className="w-5 h-5" />,   step:"02", label:"Design",      color:"brand-indigo", desc:"Patient journey design system, custom invoice sheets, and mobile wireframes." },
                  { icon:<Code2 className="w-5 h-5" />,     step:"03", label:"Engineering", color:"brand-cyan",   desc:"HIPAA-first Next.js portal build, FHIR DB integration, and Stripe API configurations." },
                  { icon:<Rocket className="w-5 h-5" />,    step:"04", label:"Audits",      color:"brand-indigo", desc:"EHR sandboxing tests, penetration tests, and HIPAA audit reviews." },
                  { icon:<BarChart3 className="w-5 h-5" />, step:"05", label:"Deploy",      color:"brand-cyan",   desc:"Production rollout, staff dashboards training, and analytics monitoring." },
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
                <p className="text-xs font-bold text-brand-cyan uppercase tracking-wider mb-4 flex items-center gap-2"><Database className="w-3.5 h-3.5" />Integration Stack</p>
                <TechArchitectureDiagram />
              </div>
              <div className="lg:col-span-7 space-y-5">
                <h3 className="font-display font-bold text-xl text-white flex items-center gap-2.5">
                  <span className="w-1 h-5 bg-brand-cyan rounded-full" />Our Dashboard Tech Stack
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label:"Web Frontend",                icon:<Zap className="w-4 h-4 text-brand-cyan" />,      items:["React.js","Next.js","TypeScript","Tailwind CSS","WebGL DICOM Canvas"] },
                    { label:"Data Pipelines",              icon:<Database className="w-4 h-4 text-brand-cyan" />,  items:["Epic App Orchard","Cerner Ignite APIs","HL7 FHIR JSON","PostgreSQL / Prisma"] },
                    { label:"Secure Hosting",              icon:<Cloud className="w-4 h-4 text-brand-cyan" />,     items:["AWS (HIPAA VPC)","Vercel Edge Network","Cloudflare DNS (WAF)","Github Actions CI/CD"] },
                    { label:"Compliance Core",             icon:<Shield className="w-4 h-4 text-brand-cyan" />,    items:["AES-256 field locking","Multi-Factor Logins","Auth0 / Cognito integration","SOC 2 Type II controls"] },
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
              title="Portal Rebuild Projects We Have Built"
              subtitle="Real results showing how clinics improve collection cycles and patient engagement."
            />

            <div className="max-w-4xl mx-auto mb-14">
              <div className="glass-panel p-8 md:p-10 rounded-3xl border border-brand-border flex flex-col md:flex-row gap-8 items-start hover:border-brand-cyan/20 transition-all duration-300">
                <div className="space-y-5 flex-1">
                  <span className="text-[9px] font-bold text-brand-cyan uppercase tracking-widest bg-brand-cyan/10 border border-brand-cyan/20 px-3 py-1 rounded-full">Portal Rebuild</span>
                  <h3 className="font-display font-bold text-3xl text-white tracking-tight leading-snug">Multi-Specialty Dental Group — Portal Redesign</h3>
                  <p className="text-base text-slate-300 leading-relaxed font-normal">A dental group with 18 locations struggled with a legacy portal that saw poor patient adoption. We built a custom, mobile-first patient portal with a WebGL panoramic X-ray viewer and Stripe installment billing.</p>
                </div>
                <div className="space-y-3 w-full md:w-[45%] shrink-0">
                  {[
                    { label:"Challenge", text:"Low patient adoption (18%) · Confusing invoicing · Physical CD-ROM file distribution",             color:"text-red-400" },
                    { icon:<CheckCircle2 />, label:"Solution",  text:"Next.js dashboard, browser DICOM viewer, Stripe milestone invoices, FHIR sync",  color:"text-yellow-400" },
                    { icon:<CheckCircle2 />, label:"Result",    text:"Patient activation increased to 82% · Collection cycle times reduced to 7 days",        color:"text-green-400" },
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
                { category:"DICOM Integration",    title:"Orthopedic X-ray Viewer Rebuild",   challenge:"Patients calling clinic constantly to check scans.", solution:"WebGL-based web viewer integrated directly in charts.", result:"Diagnostic call volume reduced by 40% in 30 days.", color:"brand-indigo", tag:"DICOM Viewer" },
                { category:"Milestone Invoices", title:"Cosmetic Surgery Billing Integration",challenge:"High invoice collection delays and phone bills.", solution:"Phase-based Stripe payment schedule integration.", result:"Collection cycles reduced from 45 to 7 days.",   color:"brand-cyan",   tag:"Stripe Invoicing" },
                { category:"EHR Syncing",     title:"Pediatric Practice Portal Rebuild",   challenge:"Confusing portals driving patient churn.", solution:"Next.js portal dashboard syncing securely via FHIR APIs.", result:"Adoption rate increased from 15% to 78% in 90 days.", color:"brand-cyan", tag:"Epic Syncing" },
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
              title="Why Choose Med Clinic X Portals?"
              subtitle="We build portal systems combining clinical-grade security with high-performance patient usability."
            />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-5 space-y-5">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon:<Shield className="w-4 h-4 text-brand-cyan" />,        label:"HIPAA Encrypted" },
                    { icon:<Zap className="w-4 h-4 text-brand-cyan" />,           label:"WebGL DICOM" },
                    { icon:<Search className="w-4 h-4 text-brand-cyan" />,        label:"FHIR Compliant" },
                    { icon:<CheckCircle2 className="w-4 h-4 text-brand-cyan" />,  label:"Stripe Milestone" },
                    { icon:<Clock className="w-4 h-4 text-brand-cyan" />,         label:"Staff Hours Saved" },
                    { icon:<TrendingUp className="w-4 h-4 text-brand-cyan" />,    label:"High Activation" },
                  ].map((b,i)=>(
                    <div key={i} className="flex items-center gap-2 glass-panel border border-brand-border px-3 py-2.5 rounded-xl">
                      {b.icon}<span className="text-xs font-semibold text-gray-300">{b.label}</span>
                    </div>
                  ))}
                </div>
                <div className="glass-panel p-5 rounded-2xl border border-brand-cyan/15 bg-brand-cyan/5">
                  <p className="text-xs font-bold text-brand-cyan uppercase tracking-wider mb-3">Our Portal Principles</p>
                  <div className="space-y-2 text-xs text-gray-400 font-medium">
                    {["AES-256 Field Level Locking","High-Contrast WebGL Rendering","Stripe Milestone Billing Integrations","FHIR Data Schema Interoperability","MFA Security & Audit Session Logs","PWA Mobile Install Setup"].map((p,i)=>(
                      <div key={i} className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-brand-cyan shrink-0" />{p}</div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7 space-y-4">
                {[
                  { title:"High-Performance WebGL Imaging", desc:"No need to send patients home with physical CD-ROMs or print packages. We develop high-speed WebGL canvas renderers that load complex diagnostic CBCT scans and X-rays directly on web pages with zoom and contrast tools." },
                  { title:"Milestone Invoicing & Stripe Automation", desc:"Medical treatment packages can be expensive. We engineer invoicing pipelines that split estimated care rates into custom milestones, automatically charging patient cards via Stripe upon phase triggers." },
                  { title:"FHIR-Conscious Integration Standards", desc:"We avoid data silos. Our database wrappers query and sync patient details directly with Epic App Orchard or Cerner Ignite databases using standardized FHIR structures." },
                  { title:"HIPAA-Secure Clinical Messaging", desc:"Generic messaging risks PHI data leakage. We secure portal chats with AES-256 field encryption, file locks, and multi-factor session authentication to guarantee compliance." },
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
              subtitle="HIPAA guidelines, custom EHR integrations, billing schedules, and WebGL viewers."
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
                  Ready to Rebuild Your Patient Portal Dashboard Experience?
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
