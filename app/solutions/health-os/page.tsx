"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Sparkles, Brain, HeartPulse, FileText, Calendar,
  MessageSquare, Shield, Users, Activity, FlaskConical, Upload,
  CheckCircle, Star, TrendingUp, Lock, Bell, Zap, ChevronDown,
  LayoutDashboard, Microscope, Stethoscope, BookOpen, Phone,
  Globe, Database, HardDrive, Clock, X, Wallet, Mic, BookMarked,
  RefreshCw, BarChart3, Building2, Syringe, Smile, Heart,
  AlertTriangle, CloudUpload, ShieldCheck, Eye, UserCog,
  Video, ChevronRight, Download, Search, Share2, DollarSign,
  Check, Paperclip, MessagesSquare, ExternalLink, Mail
} from "lucide-react";

/* --- Types --- */
interface Feature { icon: React.ReactNode; title: string; desc: string; badge?: string; }
interface Differentiator { icon: React.ReactNode; title: string; subtitle: string; desc: string; color: string; glow: string; }
interface FAQ { q: string; a: string; }

interface LeadProfile {
  name: string;
  interest: string;
  score: string;
  status: string;
  nextAction: string;
  engagement: number;
}

interface JourneyStage {
  title: string;
  status: "completed" | "active" | "upcoming";
  desc: string;
}

interface PatientIntelligence {
  name: string;
  treatment: string;
  stage: string;
  risk: "Low" | "Medium" | "High";
  dropOffProbability: number;
  engagementScore: number;
  expectedRevenue: string;
  summary: string;
  financeTalk: string;
}

/* =======================================================
   DATA
 ======================================================= */

const coreFeatures: Feature[] = [
  { icon: <Brain className="w-5 h-5" />, title: "AI Lead Qualification", desc: "Front-desk AI interviews website visitors, gathers medical concerns, and scores conversion probability.", badge: "Flagship" },
  { icon: <TrendingUp className="w-5 h-5" />, title: "Treatment Conversion Assistant", desc: "Translates complex treatment plans into patient-friendly benefit sheets, preparation FAQs, and financial options.", badge: "Smart" },
  { icon: <Stethoscope className="w-5 h-5" />, title: "Specialty Journeys", desc: "Tailors treatment workflow pipelines specifically for IVF cycle tracking, dental implants, skin sessions, or eye surgery.", badge: "Unique" },
  { icon: <Users className="w-5 h-5" />, title: "Patient Experience Score", desc: "Calculates real-time engagement and drop-off risks based on document uploads, messaging rate, and missed slots.", badge: "New" },
  { icon: <BarChart3 className="w-5 h-5" />, title: "Treatment ROI Analytics", desc: "Tracks clinic revenue outcomes, consultation ratios, and acquisition cost trends by marketing channel.", badge: "Premium" },
  { icon: <Building2 className="w-5 h-5" />, title: "Multi-Clinic Org Support", desc: "Unifies data, rosters, calendar pipelines, and billing structures for hospital groups with multiple regional clinics.", badge: "Enterprise" },
  { icon: <Shield className="w-5 h-5" />, title: "Clinical Document Intelligence", desc: "Extracts values and summarizes lab reports, scan indexes, and PDF documents using medical NLP.", badge: "Unique" },
  { icon: <Lock className="w-5 h-5" />, title: "Role-Based Access (RBAC)", desc: "Enforces strict permissions separating clinical charts, receptionist schedule pipelines, and administrative invoicing logs.", badge: "HIPAA" },
  { icon: <Clock className="w-5 h-5" />, title: "Smart Scheduling Engine", desc: "Balances doctor workloads, optimizes gap calendar slots, and reduces clinic no-show rates automatically." },
  { icon: <MessagesSquare className="w-5 h-5" />, title: "Care Team Hub", desc: "Centralizes secure patient-to-doctor messaging, treatment briefings, and lab file transfers." },
  { icon: <Zap className="w-5 h-5" />, title: "Workflow Automation Builder", desc: "Builds clinical sequences: triggers emails, assigns practitioners, and schedules post-op checks upon booking." },
  { icon: <Phone className="w-5 h-5" />, title: "Voice AI Integration", desc: "Coordinates inbound phone receptionist call routing, answers clinic directions, and checks basic calendar details." }
];

const differentiators: Differentiator[] = [
  { icon: <Brain className="w-7 h-7" />, title: "AI Patient Journey Engine", subtitle: "Beyond simple static database records", desc: "Instead of just holding patient details, the system dynamically models every phase from lead discovery to post-treatment maintenance, recommending precise clinical actions at each stage.", color: "from-brand-cyan/20 to-brand-indigo/10", glow: "rgba(6,182,212,0.15)" },
  { icon: <TrendingUp className="w-7 h-7" />, title: "Treatment Conversion Assistant", subtitle: "Empower patients to proceed confidently", desc: "Auto-generates plain-language procedure timelines, care benefits, and financing option sheets immediately after a doctor creates a high-ticket treatment proposal.", color: "from-brand-indigo/20 to-purple-500/10", glow: "rgba(99,102,241,0.15)" },
  { icon: <Activity className="w-7 h-7" />, title: "Specialty-Specific AI Workflows", subtitle: "Deeply tailored clinical structures", desc: "Adaptable frameworks pre-built with diagnostic timelines for IVF hormone cycles, dental implant crown setups, dermatology session progress photos, and eye surgery.", color: "from-brand-emerald/20 to-brand-cyan/10", glow: "rgba(16,185,129,0.15)" },
  { icon: <Users className="w-7 h-7" />, title: "Patient Engagement Scoring", subtitle: "Proactive retention intelligence", desc: "Monitors client activity to flag patients at risk of cancellation or abandonment. Alerts staff with reactivation workflows before they drop out.", color: "from-amber-500/20 to-orange-500/10", glow: "rgba(245,158,11,0.15)" },
  { icon: <FileText className="w-7 h-7" />, title: "Clinical Document Intelligence", subtitle: "Automated analysis of medical reports", desc: "Reads lab data, parses scans, and highlights abnormal indicators, presenting doctors with an instant structured summary brief before the patient steps in.", color: "from-rose-500/20 to-pink-500/10", glow: "rgba(244,63,94,0.15)" },
  { icon: <Building2 className="w-7 h-7" />, title: "Enterprise Multi-Clinic OS", subtitle: "Centralized control for medical groups", desc: "Enables healthcare franchises to manage regional locations (New York, Miami, Dallas) under a unified branding, reporting, and database structure.", color: "from-violet-500/20 to-brand-indigo/10", glow: "rgba(139,92,246,0.15)" }
];

const stats = [
  { value: "34%+", label: "Treatment Acceptance Rate Increase", icon: <TrendingUp className="w-5 h-5" /> },
  { value: "92.5%", label: "Lead Qualification Accuracy", icon: <Brain className="w-5 h-5" /> },
  { value: "28 hrs", label: "Monthly Staff Automation Savings", icon: <Clock className="w-5 h-5" /> },
  { value: "40%", label: "Reduction in Patient Drop-Off Rate", icon: <Users className="w-5 h-5" /> },
  { value: "$12K+", label: "Average Clinic Revenue Recovered / Month", icon: <DollarSign className="w-5 h-5" /> },
  { value: "100%", label: "HIPAA and SOC2 Compliant", icon: <Shield className="w-5 h-5" /> }
];

const faqs: FAQ[] = [
  { q: "Is Specialty Clinic Growth OS HIPAA-compliant?", a: "Yes. The system is designed following strict HIPAA and SOC2 regulations. All patient data, intake files, and messaging timelines are encrypted using AES-256 at rest and TLS 1.3 in transit. Full access logs are maintained permanently." },
  { q: "Which specialties are supported by default?", a: "HealthOS is pre-configured with templates, timelines, and automation rules for high-value specialties, including IVF/Fertility, Dental Implants, Dermatology/Skin, Ophthalmology/Eye, Plastic Surgery, and Weight Loss clinics." },
  { q: "How does the AI Lead Qualification system operate?", a: "When a visitor enters the website, the AI Assistant initiates a natural intake dialogue. It collects their symptoms, timeline urgency, budget, location preferences, and previous history. It scores their intent and qualification before adding them to the CRM." },
  { q: "Can we integrate this with our existing Electronic Health Record (EHR) system?", a: "Yes. HealthOS is built with FHIR standard APIs, allowing bi-directional synchronization with popular EHR databases to update medical history charts, appointments, and report PDFs." },
  { q: "What is the Treatment Conversion Assistant?", a: "High-value treatments (like IVF or dental implants) often have drop-offs due to cost or confusion. The AI automatically compiles a plain-language summary of the treatment plan, outlining benefits, stage phases, recovery checklists, and split financing options to help patients approve it." },
  { q: "How does Patient Engagement Scoring predict drop-offs?", a: "The system logs patient interactions (answering emails, checking reminders, uploading documents, time since last consult). If activity drops below normal thresholds, the AI flags them as 'High Drop-Off Risk' and queues a follow-up campaign." },
  { q: "Does this platform support multiple physical clinic locations?", a: "Yes. The Clinic Admin Dashboard allows organizations to manage multiple facilities (e.g., New York, Miami, Dallas) under a single platform, with location-based scheduling, staff rosters, and financial reporting." },
  { q: "How does Clinical Document Intelligence work?", a: "When a lab report or referral PDF is uploaded, our medical NLP model reads the text, extracts key clinical indicators (e.g., hormone levels, scan results), and notes anomalies for the doctor's review." },
  { q: "What automation rules can we configure?", a: "You can create customized triggers and actions. For example, when a 'New consultation is booked,' the system can automatically send intake forms via email, dispatch SMS directions, notify the doctor's queue, and create a CRM profile." },
  { q: "Does the system support online payments and financing?", a: "Yes. We integrate Stripe for direct co-pays, treatment invoices, and installment packages. It allows patients to view financing options and set up payment cycles directly in their dashboard." },
  { q: "What is the Doctor AI Brief?", a: "It is a 1-page clinical summary generated by the AI prior to an appointment, compiling patient symptoms, intake details, drop-off risk, and suggested talking points (e.g., financing)." },
  { q: "Can we run marketing campaigns directly from HealthOS?", a: "Yes. The AI Marketing Engine has tools to generate landing pages, SEO FAQ topics, email recall sequences, and social media posts targeted for specific specialties." },
  { q: "How does the Voice AI receptionist function?", a: "HealthOS integrates with voice gateways to handle incoming clinic phone calls, helping route calls, answer basic FAQs (hours, address), and coordinate appointment reschedule links." },
  { q: "Are reviews verified to prevent fake feedback?", a: "Yes. Only patients who have completed a paid consultation or treatment session through the platform can submit reviews, preserving absolute clinic feedback trust." },
  { q: "How long does onboarding a clinic group take?", a: "A single clinic can get started in 1-2 weeks. Large multi-location medical groups with custom EHR configurations and custom workflows are fully onboarded in 4-6 weeks." },
  { q: "What is the Visual Treatment Simulator?", a: "It is a visual road map for patients to see their expected timeline, progress percentage, completed sessions, and what steps remain (e.g., crown placement for implants)." },
  { q: "Can family members manage a patient's care?", a: "Yes. Our Family and Care Network features allow daughters, sons, or guardians to link profiles and coordinate scheduling, billing, and document logs." },
  { q: "What messaging services are integrated?", a: "We integrate Twilio for patient SMS alerts, Resend for transactional clinic emails, and WhatsApp Business API for conversational intakes." },
  { q: "What database architecture is used?", a: "We utilize a relational PostgreSQL database with Prisma ORM. Schemas partition tenant clinic variables to prevent any logical data leakage." },
  { q: "What is the cost model for clinics using HealthOS?", a: "Clinics subscribe under three tiers: Basic (CRM and website), Professional (AI assistants, waitlists, and reviews), and Enterprise (multi-location, EHR sync, and custom automation limits)." }
];

const portalModules = [
  { icon: <Users className="w-5 h-5" />, title: "Patient Platform", items: ["Visual Health Journey Timeline", "Clinical PDF reports vault", "Secure Care Team messages", "Installments financing tracker"] },
  { icon: <Stethoscope className="w-5 h-5" />, title: "Doctor Portal", items: ["AI patient pre-visit summaries", "Relational treatment planners", "Clinical SOAP notes generator", "Workload capacity manager"] },
  { icon: <Building2 className="w-5 h-5" />, title: "Clinic Admin", items: ["Marketing ROI dashboards", "Location split billing config", "Multi-clinic staff permissions", "Automation sequence builder"] },
  { icon: <Brain className="w-5 h-5" />, title: "AI Coordinator", items: ["Front-desk chatbot interviewer", "Drop-off prediction triggers", "Clinical report analyzer", "Recall campaign generator"] }
];

const techStack = [
  { category: "Frontend OS", items: ["Next.js 15 App Router", "TypeScript", "Tailwind CSS", "shadcn/ui", "Framer Motion"], icon: <Globe className="w-5 h-5" /> },
  { category: "Database Layer", items: ["PostgreSQL database", "Prisma ORM", "Logical database isolation", "AWS S3 / Cloudflare R2"], icon: <Database className="w-5 h-5" /> },
  { category: "AI & Messaging", items: ["OpenAI GPT-4o API", "Twilio SMS & WhatsApp API", "Resend Email Gateway", "Deepgram Voice Speech"], icon: <Lock className="w-5 h-5" /> },
  { category: "Billing & Auth", items: ["Stripe Connect billing", "Installment invoicing modules", "Auth.js session verification", "Role-Based RBAC controls"], icon: <HardDrive className="w-5 h-5" /> }
];

/* =======================================================
   COMPONENT
 ======================================================= */
export default function HealthOSPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeUseCase, setActiveUseCase] = useState(0);

  // Interactive Simulator States
  const [activeTab, setActiveTab] = useState("LeadQual");
  const [selectedSpecialty, setSelectedSpecialty] = useState("IVF");

  // Lead Qualification States
  const [leadChat, setLeadChat] = useState([
    { sender: "ai", text: "Welcome to our Specialty Clinic. What treatment or concern can we assist you with today?" }
  ]);
  const [leadLoading, setLeadLoading] = useState(false);
  const [leadStep, setLeadStep] = useState(1);
  const [qualifiedLeads, setQualifiedLeads] = useState<LeadProfile[]>([
    { name: "Sarah Connor", interest: "IVF Cycle Planning", score: "Hot (92/100)", status: "Qualified", nextAction: "Book Consultation", engagement: 85 }
  ]);

  // Doctor Dashboard States
  const [selectedPatientId, setSelectedPatientId] = useState("sarah-jones");

  // Mock Patient Intelligence Profiles
  const patientIntelligenceData: Record<string, PatientIntelligence> = {
    "sarah-jones": {
      name: "Sarah Jones",
      treatment: "IVF Fertility Cycle",
      stage: "Stage 2 (Hormone Stimulation)",
      risk: "High",
      dropOffProbability: 68,
      engagementScore: 42,
      expectedRevenue: "$14,500",
      summary: "Patient completed initial hormone scans but has not booked her Stage 3 monitoring appointment for 12 days. Medical logs show moderate anxiety concerning cycle injection side effects.",
      financeTalk: "Explain installment financing options and connect her with our clinical nurse coordinator to address medication injection concerns."
    },
    "marcus-vance": {
      name: "Marcus Vance",
      treatment: "Dental Implant & Crown",
      stage: "Stage 3 (Bone Graft Healing)",
      risk: "Low",
      dropOffProbability: 15,
      engagementScore: 90,
      expectedRevenue: "$6,200",
      summary: "Marcus is healing well from the implant fixture placement. Gums show excellent vascular recovery. Checked in via portal messages yesterday with zero reported localized pain.",
      financeTalk: "Confirm his final crown placement appointment slot and issue the final installment check via Stripe Connect."
    },
    "elena-rostova": {
      name: "Elena Rostova",
      treatment: "LASIK Refractive Correction",
      stage: "Stage 1 (Initial Mapping)",
      risk: "Medium",
      dropOffProbability: 38,
      engagementScore: 70,
      expectedRevenue: "$4,800",
      summary: "Patient completed corneal mapping exams. She holds Cigna insurance which covers 15% of refractive procedures. Has rescheduled her laser consult once.",
      financeTalk: "Highlight our 0% APR financing program and send recovery testimonials to alleviate postoperative dry-eye concerns."
    }
  };

  // Mock Specialty Journeys
  const specialtyJourneys: Record<string, JourneyStage[]> = {
    IVF: [
      { title: "Initial Diagnostics & Lab Work", status: "completed", desc: "Hormone screening panels, ovarian reserve audits, semen analysis." },
      { title: "Ovarian Stimulation Protocol", status: "completed", desc: "Daily hormone injections monitored via ultrasound scans." },
      { title: "Egg Retrieval Procedure", status: "active", desc: "Surgical collection of mature follicles under conscious sedation." },
      { title: "Embryo Culture & PGT Testing", status: "upcoming", desc: "Fertilization in laboratory, pre-implantation genetic testing." },
      { title: "Embryo Transfer Cycle", status: "upcoming", desc: "Transferring selected embryo back into prepared uterine cavity." },
      { title: "Beta HCG Pregnancy Monitoring", status: "upcoming", desc: "Blood diagnostic testing to verify successful implantation." }
    ],
    Dental: [
      { title: "Clinical Consultation & 3D CT Scan", status: "completed", desc: "High-resolution bone depth assessment, nerve proximity mapping." },
      { title: "Implant Fixture Placement", status: "completed", desc: "Surgical anchor insertion into jawbone under local anesthetic." },
      { title: "Osseointegration & Healing", status: "active", desc: "Bone bonding phase over 3-6 months; temporary crown cover." },
      { title: "Abutment Attachment", status: "upcoming", desc: "Exposing surgical post to anchor the final ceramic crown." },
      { title: "Crown Placement & Alignment", status: "upcoming", desc: "Custom color-matched zirconia crown installation and bite check." }
    ],
    Skin: [
      { title: "AI Skin Analysis & Consultation", status: "completed", desc: "UV pigmentation scans, localized skin moisture analysis." },
      { title: "Chemical Peel & Exfoliation", status: "completed", desc: "Phase 1 epidermis preparation clearing clogged layers." },
      { title: "Microneedling Session 1", status: "active", desc: "Collagen induction therapy sessions using active serums." },
      { title: "Active Maintenance Session 2", status: "upcoming", desc: "High-frequency light treatments to recover localized tissues." },
      { title: "Before/After Comparison", status: "upcoming", desc: "Final dermoscopic photography review and prescription check." }
    ],
    Eye: [
      { title: "Refractive Suitability Testing", status: "completed", desc: "Corneal topography scans, absolute pupil dilations." },
      { title: "LASIK Laser Reshaping", status: "completed", desc: "Creating micro-thin flap and reshaping corneal curvature." },
      { title: "Postoperative Healing Audit", status: "active", desc: "Checking corneal flap adhesion, visual acuity indexes at 24 hours." },
      { title: "1-Week Corneal Integrity Scan", status: "upcoming", desc: "Verifying dry-eye index recovery and night halo mitigation." },
      { title: "1-Month Final Release", status: "upcoming", desc: "Final ocular pressure checks and release from care plan." }
    ]
  };

  const handleLeadInput = (inputText: string, aiResponseText: string, leadData: LeadProfile | null, nextStep: number) => {
    if (leadLoading) return;
    setLeadChat(prev => [...prev, { sender: "patient", text: inputText }]);
    setLeadLoading(true);
    setLeadStep(nextStep);

    setTimeout(() => {
      setLeadChat(prev => [...prev, { sender: "ai", text: aiResponseText }]);
      if (leadData) {
        setQualifiedLeads(prev => [...prev, leadData]);
      }
      setLeadLoading(false);
    }, 850);
  };

  return (
    <div className="relative overflow-hidden">
      {/* Ambient glows */}
      <div className="fixed top-0 left-1/3 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="fixed top-1/2 right-0 w-[500px] h-[500px] bg-brand-indigo/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[400px] h-[400px] bg-brand-emerald/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">

        {/* -- BREADCRUMB -- */}
        <div className="mb-8 flex items-center space-x-2 text-xs">
          <Link href="/" className="text-gray-500 hover:text-brand-cyan transition-colors">Home</Link>
          <span className="text-gray-600">/</span>
          <Link href="/#solutions" className="text-gray-500 hover:text-brand-cyan transition-colors">Solutions</Link>
          <span className="text-gray-600">/</span>
          <span className="text-white">Specialty Clinic Growth OS</span>
        </div>

        {/* -- HERO SECTION -- */}
        <section className="relative mb-24 pt-8 md:pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left side: Heading */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 flex flex-col space-y-6 text-left"
            >
              {/* Top Badge */}
              <div className="inline-flex items-center space-x-2 self-start bg-gradient-to-r from-brand-cyan/15 to-brand-indigo/15 border border-brand-cyan/20 rounded-full px-4.5 py-1.5 shadow-lg shadow-brand-cyan/5">
                <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full animate-pulse" />
                <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest">HealthOS Operating System</span>
                <Sparkles className="w-3 h-3 text-brand-cyan" />
              </div>

              {/* Headline */}
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl xl:text-5xl text-white leading-[1.15] tracking-tight">
                Specialty Clinic Growth OS.<br />
                <span className="text-gradient-cyan-indigo">Attract. Convert. Optimize.</span><br />
                <span className="text-gradient-emerald-cyan">Unify Patient Journeys.</span>
              </h1>

              {/* Subtitle */}
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                An AI-powered clinical operations, patient experience, and conversion platform built specifically for high-ticket specialty practices like IVF, dental implants, skin clinics, and ophthalmic networks.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  href="#simulator"
                  className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-bold px-5 py-3.5 rounded-xl hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-brand-cyan/25 text-xs whitespace-nowrap"
                >
                  <Sparkles className="w-4 h-4 animate-pulse" />
                  <span>Try Simulator</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
                <a
                  href="https://health-os-indol.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 glass-panel border border-brand-border text-white font-semibold px-5 py-3.5 rounded-xl hover:border-brand-cyan/40 hover:scale-[1.02] active:scale-[0.98] transition-all text-xs whitespace-nowrap"
                >
                  <Globe className="w-3.5 h-3.5 text-brand-cyan" />
                  <span>Launch Live App</span>
                </a>
                <a
                  href="https://github.com/alimubashir822/HealthOS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 glass-panel border border-brand-border text-gray-300 font-semibold px-5 py-3.5 rounded-xl hover:border-brand-cyan/40 hover:text-white hover:scale-[1.02] active:scale-[0.98] transition-all text-xs whitespace-nowrap"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-brand-indigo" />
                  <span>View Source</span>
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2.5 pt-4">
                {[
                  { icon: <Shield className="w-3.5 h-3.5 text-brand-emerald" />, label: "HIPAA Compliant", bg: "bg-brand-emerald/10 border-brand-emerald/20" },
                  { icon: <Lock className="w-3.5 h-3.5 text-brand-cyan" />, label: "Clerk RBAC Protected", bg: "bg-brand-cyan/10 border-brand-cyan/20" },
                  { icon: <CheckCircle className="w-3.5 h-3.5 text-brand-indigo" />, label: "FHIR EHR Sync", bg: "bg-brand-indigo/10 border-brand-indigo/20" },
                ].map((t) => (
                  <div key={t.label} className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full border ${t.bg}`}>
                    {t.icon}
                    <span className="text-[10px] font-semibold text-gray-300">{t.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right side: Interactive Sandbox Mock Dashboard */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-7 relative"
            >
              <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-cyan to-brand-indigo rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-all duration-1000 -z-10" />
              
              {/* Mock Dashboard container */}
              <div className="glass-panel rounded-2xl border border-brand-border overflow-hidden">
                
                {/* Top header nav */}
                <div className="border-b border-brand-border px-5 py-3 flex items-center justify-between bg-white/2">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-6.5 h-6.5 rounded-lg bg-gradient-to-br from-brand-cyan to-brand-indigo flex items-center justify-center">
                      <Activity className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="font-display font-bold text-white text-xs tracking-wide">HealthOS Dashboard Sandbox</span>
                  </div>
                  
                  {/* Status Indicator */}
                  <div className="flex items-center space-x-2 bg-brand-emerald/10 border border-brand-emerald/25 rounded-full px-2.5 py-1">
                    <div className="w-1.5 h-1.5 bg-brand-emerald rounded-full animate-pulse" />
                    <span className="text-[10px] text-brand-emerald font-semibold">Live Sandbox</span>
                  </div>
                </div>

                {/* Dashboard Inner Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-brand-border h-[480px]">
                  
                  {/* Sidebar */}
                  <div className="md:col-span-4 p-4 space-y-1.5 bg-white/[0.01]">
                    <p className="text-[9px] text-gray-500 uppercase font-bold tracking-wider mb-2 px-2">Operating Layers</p>
                    {[
                      { id: "LeadQual", label: "AI Lead Capture", icon: <Brain className="w-3.5 h-3.5" /> },
                      { id: "Journeys", label: "Journey Timelines", icon: <Clock className="w-3.5 h-3.5" /> },
                      { id: "DoctorBrief", label: "Doctor AI Portal", icon: <Stethoscope className="w-3.5 h-3.5" /> },
                      { id: "RevenueROI", label: "ROI Analytics", icon: <BarChart3 className="w-3.5 h-3.5" /> },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full flex items-center space-x-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                          activeTab === tab.id
                            ? "bg-gradient-to-r from-brand-cyan/15 to-brand-indigo/15 text-white border border-brand-cyan/20"
                            : "text-gray-400 hover:text-gray-200 hover:bg-white/5 border border-transparent"
                        }`}
                      >
                        {tab.icon}
                        <span>{tab.label}</span>
                      </button>
                    ))}

                    <div className="pt-6">
                      <p className="text-[9px] text-gray-500 uppercase font-bold tracking-wider mb-2 px-2">Clinical Settings</p>
                      <div className="flex items-center space-x-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-gray-400">
                        <Lock className="w-3.5 h-3.5" />
                        <span>RBAC Permissions</span>
                      </div>
                      <div className="flex items-center space-x-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-gray-400">
                        <Database className="w-3.5 h-3.5" />
                        <span>EHR FHIR Sync</span>
                      </div>
                    </div>
                  </div>

                  {/* Main Display Area */}
                  <div className="md:col-span-8 p-5 overflow-y-auto flex flex-col justify-between h-full bg-brand-bg/20">
                    
                    {/* Tab 1: AI Lead Qualification */}
                    {activeTab === "LeadQual" && (
                      <div className="flex flex-col h-full justify-between flex-grow">
                        <div className="flex justify-between items-center border-b border-brand-border/60 pb-2 mb-2">
                          <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-wider flex items-center">
                            <Brain className="w-3.5 h-3.5 text-brand-cyan mr-1.5" />
                            <span>AI Lead Assistant Chat</span>
                          </span>
                        </div>

                        {/* Conversational Chat Window */}
                        <div className="space-y-3 flex-grow overflow-y-auto max-h-[190px] pr-1 mb-2 font-sans">
                          {leadChat.map((msg, i) => (
                            <div key={i} className={`flex space-x-2 ${msg.sender === "patient" ? "justify-end" : ""}`}>
                              {msg.sender === "ai" && (
                                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-brand-cyan to-brand-indigo flex-shrink-0 flex items-center justify-center text-[8px] text-white">
                                  AI
                                </div>
                              )}
                              <div className={`rounded-xl px-3 py-2 text-[10px] leading-snug border max-w-[85%] ${
                                msg.sender === "patient"
                                  ? "bg-brand-indigo/15 border-brand-indigo/25 text-white rounded-tr-sm"
                                  : "bg-brand-cyan/8 border-brand-cyan/15 text-gray-200 rounded-tl-sm"
                              }`}>
                                {msg.text}
                              </div>
                            </div>
                          ))}

                          {leadLoading && (
                            <div className="flex space-x-2">
                              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-brand-cyan to-brand-indigo flex-shrink-0 flex items-center justify-center text-[8px] text-white">
                                AI
                              </div>
                              <div className="bg-brand-cyan/8 border border-brand-cyan/15 rounded-xl rounded-tl-sm px-3 py-2 text-[10px] text-gray-400">
                                <div className="flex items-center space-x-1">
                                  <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full animate-bounce" />
                                  <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full animate-bounce [animation-delay:0.2s]" />
                                  <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full animate-bounce [animation-delay:0.4s]" />
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Interactive Pill Questions */}
                        <div className="space-y-2 border-t border-brand-border/60 pt-2.5 flex flex-col justify-end">
                          {leadStep === 1 && (
                            <>
                              <p className="text-[8px] text-gray-500 font-bold uppercase tracking-wider">Select Treatment Pathway to Qualify:</p>
                              <div className="flex flex-wrap gap-1.5">
                                <button
                                  onClick={() => handleLeadInput(
                                    "I am interested in IVF treatments.",
                                    "Understood. We help coordinate IVF cycles. How soon are you looking to start treatment?",
                                    null,
                                    2
                                  )}
                                  className="text-[9px] border border-brand-cyan/20 bg-brand-cyan/5 hover:bg-brand-cyan/10 text-brand-cyan rounded-lg px-2.5 py-1"
                                >
                                  Inquire IVF Fertility
                                </button>
                                <button
                                  onClick={() => handleLeadInput(
                                    "I want dental implant surgery.",
                                    "Excellent. We specialize in high-durability zirconia implants. Have you visited another clinic recently?",
                                    null,
                                    3
                                  )}
                                  className="text-[9px] border border-brand-cyan/20 bg-brand-cyan/5 hover:bg-brand-cyan/10 text-brand-cyan rounded-lg px-2.5 py-1"
                                >
                                  Inquire Dental Implants
                                </button>
                              </div>
                            </>
                          )}

                          {leadStep === 2 && (
                            <>
                              <p className="text-[8px] text-gray-500 font-bold uppercase tracking-wider">Select Timeline Response:</p>
                              <div className="flex flex-wrap gap-1.5">
                                <button
                                  onClick={() => handleLeadInput(
                                    "Looking to start immediately (this month).",
                                    "Perfect. An immediate timeline is flagged. I will now create your High-Intent CRM lead record.",
                                    { name: "Jessica Smith", interest: "IVF Cycle Care", score: "Hot (96/100)", status: "Qualified", nextAction: "Schedule Hormone Diagnostics", engagement: 96 },
                                    4
                                  )}
                                  className="text-[9px] border border-brand-cyan/20 bg-brand-cyan/5 hover:bg-brand-cyan/10 text-brand-cyan rounded-lg px-2.5 py-1"
                                >
                                  Immediately (This Month)
                                </button>
                                <button
                                  onClick={() => handleLeadInput(
                                    "Just researching options for later.",
                                    "Got it. I will save your profile as exploring. Let's keep in touch with educational materials.",
                                    { name: "John Miller", interest: "IVF Consultation", score: "Warm (64/100)", status: "Follow-Up", nextAction: "Send Fertility Ebook", engagement: 60 },
                                    4
                                  )}
                                  className="text-[9px] border border-brand-cyan/20 bg-brand-cyan/5 hover:bg-brand-cyan/10 text-brand-cyan rounded-lg px-2.5 py-1"
                                >
                                  Researching (Next 3-6 Months)
                                </button>
                              </div>
                            </>
                          )}

                          {leadStep === 3 && (
                            <>
                              <p className="text-[8px] text-gray-500 font-bold uppercase tracking-wider">Select Consultation History:</p>
                              <div className="flex flex-wrap gap-1.5">
                                <button
                                  onClick={() => handleLeadInput(
                                    "Yes, I received a quote for $6,000 elsewhere.",
                                    "Understood. Comparison shopper identified. I will flag your lead for financing option review.",
                                    { name: "Alan Croft", interest: "Implants & Crown", score: "Hot (91/100)", status: "Qualified", nextAction: "Review Finance Installments Plan", engagement: 90 },
                                    4
                                  )}
                                  className="text-[9px] border border-brand-cyan/20 bg-brand-cyan/5 hover:bg-brand-cyan/10 text-brand-cyan rounded-lg px-2.5 py-1"
                                >
                                  Yes, Visited Another Practice
                                </button>
                                <button
                                  onClick={() => handleLeadInput(
                                    "No, this is my first check-up.",
                                    "Great. Starting fresh. I will prepare your dental check-up briefing summaries.",
                                    { name: "Mary Rose", interest: "Dental Consultation", score: "Warm (75/100)", status: "Qualified", nextAction: "Book Scan Appointment", engagement: 75 },
                                    4
                                  )}
                                  className="text-[9px] border border-brand-cyan/20 bg-brand-cyan/5 hover:bg-brand-cyan/10 text-brand-cyan rounded-lg px-2.5 py-1"
                                >
                                  No, This is First Consultation
                                </button>
                              </div>
                            </>
                          )}

                          {leadStep === 4 && (
                            <div className="space-y-2">
                              <p className="text-[8px] text-gray-500 font-bold uppercase tracking-wider">Qualified CRM Lead Directory:</p>
                              <div className="space-y-1.5 overflow-y-auto max-h-[100px]">
                                {qualifiedLeads.map((ld, index) => (
                                  <div key={index} className="bg-slate-900/60 border border-brand-border rounded-xl p-2.5 flex justify-between items-center text-[10px]">
                                    <div>
                                      <p className="font-bold text-white">{ld.name} ({ld.interest})</p>
                                      <p className="text-[9px] text-gray-400">Score: <span className="text-brand-cyan font-bold">{ld.score}</span> &bull; Action: <span className="text-gray-300 font-semibold">{ld.nextAction}</span></p>
                                    </div>
                                    <span className="px-2 py-0.5 rounded text-[8px] font-bold bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/20">
                                      {ld.status}
                                    </span>
                                  </div>
                                ))}
                              </div>
                              <button
                                onClick={() => {
                                  setLeadStep(1);
                                  setLeadChat([
                                    { sender: "ai", text: "Welcome to our Specialty Clinic. What treatment or concern can we assist you with today?" }
                                  ]);
                                }}
                                className="text-[8px] text-gray-500 hover:text-white uppercase font-bold tracking-wider pt-1 self-start"
                              >
                                Reset Lead Chat
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Tab 2: Specialty Journey Timeline */}
                    {activeTab === "Journeys" && (
                      <div className="flex flex-col h-full justify-between flex-grow">
                        <div className="flex justify-between items-center border-b border-brand-border/60 pb-2 mb-3">
                          <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-wider">Visual Health Journey Timeline</span>
                          
                          {/* Specialty Selection Tabs */}
                          <div className="flex space-x-1">
                            {["IVF", "Dental", "Skin", "Eye"].map((sp) => (
                              <button
                                key={sp}
                                onClick={() => setSelectedSpecialty(sp)}
                                className={`px-2 py-0.5 rounded text-[9px] font-bold border transition-colors ${
                                  selectedSpecialty === sp
                                    ? "bg-brand-cyan/15 text-brand-cyan border-brand-cyan/25"
                                    : "bg-transparent text-gray-400 border-transparent hover:text-gray-200"
                                }`}
                              >
                                {sp}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Interactive Timeline Display */}
                        <div className="space-y-3.5 flex-grow overflow-y-auto max-h-[300px] pr-1">
                          {specialtyJourneys[selectedSpecialty]?.map((stage, idx) => (
                            <div key={idx} className="flex space-x-3.5 text-[10px] items-start relative group">
                              
                              {/* Left status dot & connecting line */}
                              <div className="flex flex-col items-center">
                                <div className={`w-5 h-5 rounded-full flex items-center justify-center border font-bold text-[9px] ${
                                  stage.status === "completed"
                                    ? "bg-brand-emerald/10 border-brand-emerald/30 text-brand-emerald"
                                    : stage.status === "active"
                                    ? "bg-brand-cyan/15 border-brand-cyan/35 text-brand-cyan animate-pulse"
                                    : "bg-slate-900 border-brand-border text-gray-500"
                                }`}>
                                  {stage.status === "completed" ? (
                                    <Check className="w-3 h-3 text-brand-emerald" />
                                  ) : (
                                    idx + 1
                                  )}
                                </div>
                                {idx < (specialtyJourneys[selectedSpecialty]?.length ?? 0) - 1 && (
                                  <div className="w-0.5 h-8 bg-brand-border/60 group-hover:bg-brand-cyan/20 transition-colors mt-1" />
                                )}
                              </div>

                              {/* Right stage text details */}
                              <div>
                                <h4 className={`font-bold leading-none mb-1 ${
                                  stage.status === "completed"
                                    ? "text-gray-300"
                                    : stage.status === "active"
                                    ? "text-white"
                                    : "text-gray-500"
                                }`}>
                                  {stage.title}
                                </h4>
                                <p className="text-[9px] text-gray-400 leading-snug">{stage.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Tab 3: Doctor AI Portal & Patient Intelligence */}
                    {activeTab === "DoctorBrief" && (
                      <div className="flex flex-col h-full justify-between flex-grow">
                        <div className="flex justify-between items-center border-b border-brand-border/60 pb-2 mb-2">
                          <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-wider flex items-center">
                            <Stethoscope className="w-3.5 h-3.5 text-brand-cyan mr-1.5" />
                            <span>Doctor AI Briefing Portal</span>
                          </span>

                          {/* Patient Selector */}
                          <select
                            value={selectedPatientId}
                            onChange={(e) => setSelectedPatientId(e.target.value)}
                            className="bg-slate-900 border border-brand-border text-[9px] text-gray-300 rounded px-1.5 py-0.5 focus:outline-none"
                          >
                            <option value="sarah-jones">Sarah Jones (IVF)</option>
                            <option value="marcus-vance">Marcus Vance (Dental)</option>
                            <option value="elena-rostova">Elena Rostova (LASIK)</option>
                          </select>
                        </div>

                        {/* AI Summary View */}
                        {patientIntelligenceData[selectedPatientId] && (
                          <div className="space-y-3.5 text-[10px]">
                            {/* Header Stats */}
                            <div className="grid grid-cols-3 gap-2.5 border border-brand-border bg-slate-950/40 p-2.5 rounded-xl">
                              <div>
                                <p className="text-[8px] text-gray-500 font-bold uppercase">Expected Revenue</p>
                                <p className="font-extrabold text-white text-xs">{patientIntelligenceData[selectedPatientId].expectedRevenue}</p>
                              </div>
                              <div>
                                <p className="text-[8px] text-gray-500 font-bold uppercase">Drop-Off Risk</p>
                                <span className={`inline-block px-1.5 py-0.5 rounded text-[8px] font-bold ${
                                  patientIntelligenceData[selectedPatientId].risk === "High"
                                    ? "bg-red-500/10 text-red-400 border border-red-500/20"
                                    : patientIntelligenceData[selectedPatientId].risk === "Medium"
                                    ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                                    : "bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/20"
                                }`}>
                                  {patientIntelligenceData[selectedPatientId].risk} ({patientIntelligenceData[selectedPatientId].dropOffProbability}%)
                                </span>
                              </div>
                              <div>
                                <p className="text-[8px] text-gray-500 font-bold uppercase">Engagement Score</p>
                                <p className="font-extrabold text-white text-xs">{patientIntelligenceData[selectedPatientId].engagementScore}%</p>
                              </div>
                            </div>

                            {/* Brief Text */}
                            <div className="space-y-2">
                              <p className="font-bold text-white flex items-center">
                                <Sparkles className="w-3.5 h-3.5 text-brand-cyan mr-1.5 animate-pulse" />
                                <span>AI Patient Intelligence Brief</span>
                              </p>
                              <div className="bg-slate-900/60 border border-brand-border rounded-xl p-3 text-gray-300 leading-relaxed font-sans">
                                {patientIntelligenceData[selectedPatientId].summary}
                              </div>
                            </div>

                            {/* Financing Suggestions */}
                            <div className="bg-brand-cyan/5 border border-brand-cyan/20 p-2.5 rounded-xl space-y-1">
                              <p className="text-[8px] text-brand-cyan uppercase font-bold tracking-wider">Suggested Doctor Discussion Plan:</p>
                              <p className="text-[9px] text-gray-300 leading-snug">{patientIntelligenceData[selectedPatientId].financeTalk}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Tab 4: Clinic Revenue ROI */}
                    {activeTab === "RevenueROI" && (
                      <div className="flex flex-col h-full justify-between flex-grow text-[10px]">
                        <div className="flex justify-between items-center border-b border-brand-border/60 pb-2 mb-2">
                          <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-wider flex items-center">
                            <BarChart3 className="w-3.5 h-3.5 text-brand-cyan mr-1.5" />
                            <span>Clinic Performance & ROI Metrics</span>
                          </span>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-3 mb-2 flex-grow overflow-y-auto max-h-[290px] pr-1">
                          <div className="bg-slate-900/40 border border-brand-border rounded-xl p-3 flex flex-col justify-between">
                            <div>
                              <p className="text-[8px] text-gray-500 uppercase font-bold tracking-wider">Total Qualified Leads</p>
                              <h3 className="font-extrabold text-white text-base mt-1">1,240</h3>
                            </div>
                            <p className="text-[8px] text-brand-emerald font-semibold mt-2">&uarr; 18.5% this month</p>
                          </div>
                          
                          <div className="bg-slate-900/40 border border-brand-border rounded-xl p-3 flex flex-col justify-between">
                            <div>
                              <p className="text-[8px] text-gray-500 uppercase font-bold tracking-wider">Total Consultations</p>
                              <h3 className="font-extrabold text-white text-base mt-1">450</h3>
                            </div>
                            <p className="text-[8px] text-gray-400 font-semibold mt-2">Conversion rate: 36.2%</p>
                          </div>

                          <div className="bg-slate-900/40 border border-brand-border rounded-xl p-3 flex flex-col justify-between">
                            <div>
                              <p className="text-[8px] text-gray-500 uppercase font-bold tracking-wider">Treatments Started</p>
                              <h3 className="font-extrabold text-white text-base mt-1">180</h3>
                            </div>
                            <p className="text-[8px] text-brand-cyan font-semibold mt-2">Average value: $8,500</p>
                          </div>

                          <div className="bg-slate-900/40 border border-brand-border rounded-xl p-3 flex flex-col justify-between">
                            <div>
                              <p className="text-[8px] text-gray-500 uppercase font-bold tracking-wider">Monthly SaaS Revenue</p>
                              <h3 className="font-extrabold text-brand-emerald text-base mt-1">$320,000</h3>
                            </div>
                            <p className="text-[8px] text-brand-emerald font-semibold mt-2">ROI: 4.8x ad spends</p>
                          </div>
                        </div>

                        {/* Pipeline conversion bars */}
                        <div className="space-y-2 border-t border-brand-border/60 pt-2.5">
                          <p className="text-[8px] text-gray-500 font-bold uppercase tracking-wider">Treatment Conversion Funnel Ratio:</p>
                          <div className="space-y-1.5">
                            <div>
                              <div className="flex justify-between text-[8px] text-gray-400 mb-0.5">
                                <span>Leads &rarr; Consultations booked</span>
                                <span>65%</span>
                              </div>
                              <div className="w-full bg-slate-950 rounded-full h-1">
                                <div className="bg-brand-cyan h-1 rounded-full" style={{ width: "65%" }} />
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between text-[8px] text-gray-400 mb-0.5">
                                <span>Consultations booked &rarr; Treatment approved</span>
                                <span>40%</span>
                              </div>
                              <div className="w-full bg-slate-950 rounded-full h-1">
                                <div className="bg-brand-indigo h-1 rounded-full" style={{ width: "40%" }} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                  </div>

                </div>

              </div>
            </motion.div>

          </div>
        </section>

        {/* -- STATS BENCHMARKS -- */}
        <section className="mb-24 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {stats.map((s, idx) => (
              <div key={idx} className="glass-panel border border-brand-border rounded-xl p-4.5 text-center flex flex-col items-center justify-between">
                <div className="w-9 h-9 rounded-lg bg-white/[0.02] border border-brand-border flex items-center justify-center text-brand-cyan mb-3.5">
                  {s.icon}
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-white text-lg leading-tight mb-1">{s.value}</h3>
                  <p className="text-[9px] text-gray-500 uppercase font-bold tracking-wider leading-snug">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-brand-border mb-20" />

        {/* -- 12 CORE PLATFORM FEATURES -- */}
        <section className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-display font-bold text-3xl text-white tracking-tight">
              12 Clinical Growth & Management Features
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Every system asset maps to conversion triggers, HIPAA-approved file buckets, and treatment timeline pathways.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreFeatures.map((f, idx) => (
              <div key={idx} className="glass-panel border border-brand-border rounded-2xl p-5 hover:border-brand-cyan/20 transition-all flex flex-col justify-between bg-white/[0.01]">
                <div>
                  <div className="flex justify-between items-start mb-4.5">
                    <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-brand-cyan">
                      {f.icon}
                    </div>
                    {f.badge && (
                      <span className="px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/25">
                        {f.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-white font-bold text-sm mb-2">{f.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-brand-border mb-20" />

        {/* -- ADVANCED DIFFERENTIATORS -- */}
        <section className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-display font-bold text-3xl text-white tracking-tight">
              Platform Differentiators
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Why Specialty Clinic Growth OS stands apart from generic doctor calendars and database software.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((d, idx) => (
              <div key={idx} className="relative group overflow-hidden rounded-2xl border border-brand-border hover:border-brand-cyan/30 transition-all duration-300 p-6 bg-gradient-to-b from-white/[0.02] to-transparent">
                {/* Glow effect */}
                <div
                  className="absolute -right-20 -bottom-20 w-44 h-44 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10"
                  style={{ backgroundColor: d.glow }}
                />
                
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center text-brand-cyan group-hover:scale-105 transition-transform duration-300">
                    {d.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm">{d.title}</h3>
                    {d.subtitle && <p className="text-[9px] text-brand-cyan font-bold">{d.subtitle}</p>}
                  </div>
                </div>
                
                <p className="text-gray-400 text-xs leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-brand-border mb-20" />

        {/* -- FOUR-SIDED PORTAL DEPLOYMENT -- */}
        <section className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-display font-bold text-3xl text-white tracking-tight">
              Enterprise Four-Sided Ecosystem
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Role-specific views configured dynamically in our database schemas to align patient experience with clinic revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {portalModules.map((m, idx) => (
              <div key={idx} className="glass-panel border border-brand-border rounded-xl p-5 hover:border-brand-cyan/20 transition-all bg-white/[0.01]">
                <div className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center text-brand-indigo mb-4 border border-brand-indigo/10">
                  {m.icon}
                </div>
                <h3 className="text-white font-bold text-sm mb-3.5 border-b border-brand-border/60 pb-1.5">{m.title}</h3>
                <ul className="space-y-2 text-gray-400 text-[10px] font-sans">
                  {m.items.map((item, index) => (
                    <li key={index} className="flex items-center space-x-1.5">
                      <CheckCircle className="w-3 h-3 text-brand-cyan flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-brand-border mb-20" />

        {/* -- TECH STACK GRID -- */}
        <section className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-display font-bold text-3xl text-white tracking-tight">
              Robust Tech Stack Architecture
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Built on Next.js 15 for fast performance, combining Server Actions and PostgreSQL for data safety.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((stack, idx) => (
              <div key={idx} className="glass-panel border border-brand-border rounded-xl p-5 hover:border-brand-cyan/20 transition-all bg-white/[0.01]">
                <div className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center text-brand-cyan mb-4">
                  {stack.icon}
                </div>
                <h3 className="text-white font-bold text-sm mb-3">{stack.category}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {stack.items.map((item, index) => (
                    <span key={index} className="text-[9px] bg-slate-900 border border-brand-border/60 rounded px-2 py-1 text-gray-300 font-sans">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-brand-border mb-20" />

        {/* -- DATABASE SCHEMA DIAGRAM -- */}
        <section className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-display font-bold text-3xl text-white tracking-tight">
              Database Architecture (PostgreSQL Schema)
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Relational tables built for a marketplace layout. Scopes availability blocks, transaction co-pay lists, and subscription statuses type-safely.
            </p>
          </div>

          {/* Schematic table representation */}
          <div className="glass-panel border border-brand-border rounded-2xl overflow-hidden p-6 md:p-8 bg-slate-950/40">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              
              {/* Left sidebar: schema models index */}
              <div className="md:col-span-4 space-y-2">
                <p className="text-[9px] text-gray-500 uppercase font-bold tracking-wider mb-2 px-1">Prisma Schemas</p>
                {[
                  { name: "Doctor & Clinic", desc: "Physician credentials, ratings, response time splits, subdomain directories." },
                  { name: "Appointments & Slots", desc: "Availability calendars, reservation times, consult notes, patient logs." },
                  { name: "Payments & Subs", desc: "Stripe checkout links, invoice logs, clinic payout splits, pricing plans." },
                  { name: "Trust & Messaging", desc: "Verified patient ratings, direct chat history, clinical file uploads." },
                ].map((s, idx) => (
                  <div key={idx} className="p-3 border border-brand-border/60 hover:border-brand-cyan/20 bg-slate-900/30 rounded-xl">
                    <p className="text-xs font-bold text-white flex items-center">
                      <Database className="w-3.5 h-3.5 text-brand-cyan mr-1.5" />
                      <span>{s.name}</span>
                    </p>
                    <p className="text-[10px] text-gray-400 mt-1 leading-snug">{s.desc}</p>
                  </div>
                ))}
              </div>

              {/* Right side: Database diagram display */}
              <div className="md:col-span-8 overflow-x-auto text-[10px] font-mono leading-relaxed text-gray-300 border border-brand-border/60 bg-black/40 rounded-xl p-5">
                <p className="text-brand-cyan mb-2">{"// Prisma database schemas (Specialty Clinic OS)"}</p>
                <div className="space-y-4">
                  <div>
                    <span className="text-brand-indigo">model</span> <span className="text-white font-bold">Doctor</span> &#123;
                    <div className="pl-4 text-gray-400">
                      id            String         @id @default(uuid())<br />
                      specialty     String<br />
                      experience    String<br />
                      feeCode       Int            @default(150)<br />
                      ratingCode    Float          @default(5.0)<br />
                      appointments  Appointment[]<br />
                      subscriptions Subscription[]
                    </div>
                    &#125;
                  </div>
                  <div>
                    <span className="text-brand-indigo">model</span> <span className="text-white font-bold">Appointment</span> &#123;
                    <div className="pl-4 text-gray-400">
                      id        String            @id @default(uuid())<br />
                      doctorId  String<br />
                      patientId String<br />
                      timeSlot  String<br />
                      service   String<br />
                      paidCheck Boolean           @default(false)<br />
                      doctor    Doctor            @relation(fields: [doctorId], references: [id])
                    </div>
                    &#125;
                  </div>
                  <div>
                    <span className="text-brand-indigo">model</span> <span className="text-white font-bold">Subscription</span> &#123;
                    <div className="pl-4 text-gray-400">
                      id        String            @id @default(uuid())<br />
                      doctorId  String<br />
                      planCode  String            @default(&quot;PROFESSIONAL&quot;)<br />
                      active    Boolean           @default(true)<br />
                      doctor    Doctor            @relation(fields: [doctorId], references: [id])
                    </div>
                    &#125;
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <hr className="border-brand-border mb-20" />

        {/* -- SECURITY SECTION -- */}
        <section className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-display font-bold text-3xl text-white tracking-tight">
              HIPAA Safeguards & Encryption
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Ensuring Protected Patient Information remains private. Features logical directory blocks and secure file vaults.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Lock className="w-5 h-5" />, title: "HIPAA Compliant", desc: "Follows strict HIPAA guidelines. Patient profiles, transcripts, and documents are encrypted at rest (AES-256) and in transit (TLS 1.3)." },
              { icon: <ShieldCheck className="w-5 h-5" />, title: "Access Audit Logging", desc: "Every profile read, scheduling edit, and record export action is permanently logged with IP coordinates." },
              { icon: <Eye className="w-5 h-5" />, title: "Logical Data Isolation", desc: "Multi-tenant logic ensures logical partition of clinic variables, preventing cross-organization leakage." },
              { icon: <UserCog className="w-5 h-5" />, title: "Secure Media Vault", desc: "Consultation summaries, billing details, and reports are held in AWS S3 buckets with URLs signed for short lifespans." }
            ].map((s, idx) => (
              <div key={idx} className="glass-panel border border-brand-border rounded-xl p-5 hover:border-brand-cyan/20 transition-all bg-white/[0.01]">
                <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-brand-cyan mb-4">
                  {s.icon}
                </div>
                <h3 className="text-white font-bold text-sm mb-2">{s.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-brand-border mb-20" />

        {/* -- FAQs ACCORDION -- */}
        <section className="mb-24 max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-display font-bold text-3xl text-white tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Find answers regarding waitlists alerts, EHR data transfer, reviews screening, and transaction splits.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-brand-border rounded-2xl overflow-hidden glass-panel bg-slate-900/10"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left text-white hover:text-brand-cyan transition-colors"
                >
                  <span className="font-semibold text-xs sm:text-sm pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-500 transition-transform duration-300 flex-shrink-0 ${
                      openFaq === idx ? "rotate-180 text-brand-cyan" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-5 pt-0 text-xs sm:text-sm text-gray-400 border-t border-brand-border/60 leading-relaxed bg-black/10">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
