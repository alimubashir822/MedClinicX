"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Sparkles, Brain, Calendar, MessageSquare,
  Shield, Users, Activity, CheckCircle, Star, TrendingUp,
  Lock, Bell, Zap, ChevronDown, LayoutDashboard, Phone, Globe,
  Database, Server, Wallet, BarChart3, Building2, CreditCard,
  RefreshCw, Smile, Stethoscope, ScanLine, ClipboardList,
  Syringe, BookOpen, Mic, BookMarked, X, Clock, CloudUpload,
  AlertTriangle, ShieldCheck, Eye, UserCog
} from "lucide-react";

/* --- Types --- */
interface Feature { icon: React.ReactNode; title: string; desc: string; badge?: string; }
interface Differentiator { icon: React.ReactNode; title: string; subtitle: string; desc: string; color: string; glow: string; }
interface FAQ { q: string; a: string; }

/* =======================================================
   DATA
======================================================= */

const coreFeatures: Feature[] = [
  { icon: <Brain className="w-5 h-5" />, title: "AI Dental Companion", desc: "A conversational AI assistant that understands your full dental history. Explains procedures, guides aftercare, and preps questions in plain language.", badge: "Flagship" },
  { icon: <ClipboardList className="w-5 h-5" />, title: "Visual Treatment Tracker", desc: "\"Your Dental Journey\" - step-by-step progress tracking from initial consultation to surgery, implant placement, and crown restoration.", badge: "Unique" },
  { icon: <Calendar className="w-5 h-5" />, title: "Smart Appointment Booking", desc: "Select procedure, dentist, and time slot. Pre-populates dental history and generates a clinician brief automatically before checkup.", badge: "Smart" },
  { icon: <ScanLine className="w-5 h-5" />, title: "Dental Records Vault", desc: "Upload and view panoramic X-rays, 3D CBCT scans, clinical photos, and notes. Secured with role-scoped access control.", badge: "Secure" },
  { icon: <CreditCard className="w-5 h-5" />, title: "Installments & Billing Portal", desc: "View treatment phase costs, partial payments, and split billing with insurance. Pay online instantly using secure card integrations." },
  { icon: <Users className="w-5 h-5" />, title: "Family Dental Hub", desc: "Manage dental records, appointment calendars, and billing plans for your spouse, children, or parents from a single portal.", badge: "New" },
  { icon: <MessageSquare className="w-5 h-5" />, title: "Secure Patient Messaging", desc: "HIPAA-compliant encrypted chat between patients and dental team. Upload photos of sensitive gum areas for quick clinical triage." },
  { icon: <Shield className="w-5 h-5" />, title: "Patient Data Control", desc: "Complete data ownership. Export dental records in standard formats, audit clinic access logs, or revoke access permissions instantly." },
  { icon: <Bell className="w-5 h-5" />, title: "Recall & Post-Op Automations", desc: "AI-triggered reminders for upcoming cleanings, recovery checkpoints (Day 1, 7, 30 post-surgery), and aligner transitions." },
  { icon: <Wallet className="w-5 h-5" />, title: "Dental Wallet", desc: "Store digital insurance cards, prescription slips, medical history forms, and invoice receipts in one secure storage compartment." },
  { icon: <Mic className="w-5 h-5" />, title: "Voice-Activated Booking", desc: "Book appointments hands-free: \"Schedule my routine scaling and polishing next Friday morning.\" Natural NLP handles scheduling rules." },
  { icon: <BookMarked className="w-5 h-5" />, title: "Oral Health Education Engine", desc: "Personalized instructions, brush timers, and procedural explanations tailored to your active treatment plan (e.g. wisdom teeth aftercare)." },
];

const differentiators: Differentiator[] = [
  { icon: <ClipboardList className="w-7 h-7" />, title: "Visual Treatment Plans", subtitle: "Clear milestones from consultation to restoration", desc: "Instead of overwhelming patients with clinical codes, we display a visual map: Consult ✓ → Scan ✓ → Implant Placement ⏳ → Crown ⬜. Boosts clinic treatment acceptance by up to 45%.", color: "from-brand-cyan/20 to-brand-indigo/10", glow: "rgba(6,182,212,0.15)" },
  { icon: <Brain className="w-7 h-7" />, title: "AI Dental Memory", subtitle: "Explains procedures and aftercare rules 24/7", desc: "Unlike generic portals, our AI understands context. Ask: \"Is it normal for my wisdom tooth socket to bleed slightly on day 2?\" - the AI reviews your extraction log and delivers precise guidance.", color: "from-brand-indigo/20 to-purple-500/10", glow: "rgba(99,102,241,0.15)" },
  { icon: <ScanLine className="w-7 h-7" />, title: "High-Fidelity Records Vault", subtitle: "X-ray imaging and comparative cosmetic galleries", desc: "Patients can view panoramic scans and track cosmetic changes (e.g. whitening sessions, clear aligner progression) using an interactive before-and-after visual compare tool.", color: "from-brand-emerald/20 to-brand-cyan/10", glow: "rgba(16,185,129,0.15)" },
  { icon: <RefreshCw className="w-7 h-7" />, title: "Smart Recall Automations", subtitle: "Re-engage hygiene patients automatically", desc: "The recall engine triggers hygiene alerts, checkups, and post-procedure check-ins. If a patient cancels a slot, it automatically matches them with waitlisted patients.", color: "from-amber-500/20 to-orange-500/10", glow: "rgba(245,158,11,0.15)" },
  { icon: <CreditCard className="w-7 h-7" />, title: "Phase-based Installments", subtitle: "Billing split by active treatment milestones", desc: "Prosthodontics and implants are expensive. SmileOS splits costs across surgical and restoration phases, allowing patients to approve payment schedules in a click.", color: "from-rose-500/20 to-pink-500/10", glow: "rgba(244,63,94,0.15)" },
  { icon: <Users className="w-7 h-7" />, title: "Family Booking Sync", subtitle: "Coordinated family blocks to reduce trips", desc: "Allows parents to book multiple children back-to-back, coordinates reminders, and calculates joint family deductibles from one dental hub.", color: "from-violet-500/20 to-brand-indigo/10", glow: "rgba(139,92,246,0.15)" },
];

const portalModules = [
  { icon: <LayoutDashboard className="w-5 h-5" />, title: "Patient Overview", items: ["Oral Health Score", "Next Procedure Card", "Outstanding Installments", "AI Quick Insights"] },
  { icon: <ClipboardList className="w-5 h-5" />, title: "Treatment Plans", items: ["Phase-by-phase tracker", "Estimated cost splits", "Informed consent sign-off", "Clinician notes"] },
  { icon: <ScanLine className="w-5 h-5" />, title: "Records Vault", items: ["Panoramic & Bitewing X-rays", "3D CBCT Scan Viewer", "Clinical Photos Gallery", "Comparison Slider"] },
  { icon: <Calendar className="w-5 h-5" />, title: "Smart Bookings", items: ["Dentist availability grids", "Recall slot matching", "AI Pre-Appointment surveys", "Rescheduling portal"] },
  { icon: <CreditCard className="w-5 h-5" />, title: "Payments & Insurance", items: ["Split billing calculators", "Stripe payment gateway", "Installment plan setup", "Insurance claims ledger"] },
  { icon: <Brain className="w-5 h-5" />, title: "AI Dental Chat", items: ["Aftercare instructions", "Procedure explanation", "Insurance coverage details", "Triage symptom checker"] },
  { icon: <MessageSquare className="w-5 h-5" />, title: "Clinic Messaging", items: ["HIPAA-compliant chat", "Clinical photo uploads", "Staff routing queues", "Emergency triggers"] },
  { icon: <Users className="w-5 h-5" />, title: "Family Dental Hub", items: ["Family member profiles", "Coordinated calendars", "Shared insurance limits", "Hygiene reminders"] },
];

const techStack = [
  { category: "Frontend", items: ["Next.js 15 App Router", "TypeScript", "Tailwind CSS", "shadcn/ui components", "Framer Motion animations"], icon: <Globe className="w-5 h-5" /> },
  { category: "Backend", items: ["Next.js API Routes", "React Server Actions", "Zod Schema Validation", "React Hook Form integration"], icon: <Server className="w-5 h-5" /> },
  { category: "Database & Storage", items: ["PostgreSQL database", "Prisma ORM data access", "Clinic database isolation", "AWS S3 / Cloudflare R2 scans storage"], icon: <Database className="w-5 h-5" /> },
  { category: "AI & Integrations", items: ["OpenAI GPT-4o LLM", "LangChain framework", "Stripe payment SDK", "Twilio / SendGrid reminders API"], icon: <Lock className="w-5 h-5" /> },
];

const stats = [
  { value: "8+", label: "Patient Portal Modules", icon: <LayoutDashboard className="w-5 h-5" /> },
  { value: "5", label: "User Roles", icon: <Users className="w-5 h-5" /> },
  { value: "12+", label: "AI-Powered Features", icon: <Brain className="w-5 h-5" /> },
  { value: "100%", label: "Patient Data Ownership", icon: <Shield className="w-5 h-5" /> },
  { value: "4", label: "Implementation Phases", icon: <TrendingUp className="w-5 h-5" /> },
  { value: "9", label: "Platform Integrations", icon: <RefreshCw className="w-5 h-5" /> },
];

const useCases = [
  {
    icon: <Syringe className="w-6 h-6" />,
    specialty: "Dental Implant Patient",
    color: "brand-cyan",
    scenario: "Patient undergoes phased titanium implant surgery",
    journey: [
      "Patient logs in, reviews visual Treatment Plan showing: Consultation ✓ → Scan ✓ → Surgical Implant Placement ⏳ → Prosthodontic Crown ⬜.",
      "AI Dental Companion walks through prep: \"Here is your pre-surgery guidelines checklist, Sarah. Remember to fast 6 hours prior.\"",
      "Financial Portal details total cost split: $1,200 out-of-pocket, $800 insurance. Splits payment into two installments.",
      "Post-op: Patient uploads clinical photo of implant site. AI flags healing baseline and alerts clinic.",
      "Smart Recall schedules surgical follow-up checkup automatically after 30 days."
    ],
    outcome: "Implant clinics report 45% higher treatment plan acceptance and 50% fewer post-op complications."
  },
  {
    icon: <Smile className="w-6 h-6" />,
    specialty: "Orthodontic Aligner Patient",
    color: "rose-400",
    scenario: "Teenager tracking a 12-month clear aligner progression",
    journey: [
      "Parent opens Family Hub, switches profile to child's alignment plan.",
      "Aligner module schedules 24 aligner steps, triggering bi-weekly change notifications.",
      "Patient uploads photo of teeth comparison. AI scans alignment gaps against initial CBCT scan.",
      "AI explains: \"Aligner Step 6 is moving your lateral incisor 0.2mm. Expected mild soreness for 24 hours.\"",
      "Secure Messaging connects parent directly to orthodontist for aligner fit questions."
    ],
    outcome: "Orthodontists save 35% of chair time by tracking aligner progress photos virtually through the portal."
  },
  {
    icon: <Users className="w-6 h-6" />,
    specialty: "Family Preventative Care",
    color: "brand-emerald",
    scenario: "Family of four managing cleanings and dental health records",
    journey: [
      "Parent maps out joint family appointment block. Smart Booking syncs times to reduce clinic trips.",
      "Hygiene tracker monitors cleanings schedule. Family wellness score: 88/100.",
      "Uploads dental insurance card. Insurance calculator breaks down family deductibles dynamically.",
      "AI sends scaling guides, custom brush timers, and gum care instructions to kids profiles."
    ],
    outcome: "Family dental practices see a 3x higher patient retention rate when family profiles are unified."
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    specialty: "Multi-Clinic Enterprise Group",
    color: "brand-indigo",
    scenario: "Admin managing 12 clinics across a regional network",
    journey: [
      "Network admin views real-time multi-tenant dashboard: user growth, payments, and appointments.",
      "Each clinic runs in isolation - separate rosters, databases, schedules, and Stripe accounts.",
      "Advanced recall engines trigger automatic re-engagement flows to 2,000 patients across the state.",
      "EHR Integration syncs patient records between portal database and local Dentrix setups."
    ],
    outcome: "Enterprise groups see 20% higher operational efficiency and 40% reduction in front-desk scheduling load."
  }
];

const securityFeatures = [
  { icon: <Lock className="w-5 h-5" />, title: "AES-256 Encryption", desc: "All patient data and dental records encrypted at rest and in transit. No unencrypted PHI ever touches the server." },
  { icon: <ShieldCheck className="w-5 h-5" />, title: "Role-Based Access Control", desc: "Patients, dentists, receptionists, and admins each have strictly scoped permissions. Dentists only see their assigned patients." },
  { icon: <Eye className="w-5 h-5" />, title: "Full Audit Logging", desc: "Every record access is logged — who viewed what, when, from which IP. Patients can view their own audit trail at any time." },
  { icon: <UserCog className="w-5 h-5" />, title: "Patient-Controlled Sharing", desc: "Patients grant and revoke access to records explicitly. Sharing an X-ray with a specialist is a deliberate, consent-based action." },
  { icon: <RefreshCw className="w-5 h-5" />, title: "Data Portability", desc: "Export your complete dental record as a PDF or HL7 FHIR bundle at any time. Your data, your control." },
  { icon: <AlertTriangle className="w-5 h-5" />, title: "Breach Detection", desc: "Automated anomaly detection on access patterns. Unusual access triggers immediate alerts and automatic account lockout." },
  { icon: <CloudUpload className="w-5 h-5" />, title: "Secure File Storage", desc: "X-rays and dental scans stored in AWS S3 or Cloudflare R2 with signed, expiring URLs. No public access to any file." },
  { icon: <Database className="w-5 h-5" />, title: "Multi-Tenant Isolation", desc: "Each clinic's patient data is physically isolated in separate database namespaces. Cross-clinic data leaks are architecturally impossible." },
];

const faqs: FAQ[] = [
  // Column 1 - Product & Onboarding
  { q: "Is patient dental data secure and HIPAA compliant?", a: "Yes. All data is encrypted at rest and in transit using AES-256 encryption. We implement role-based access controls, complete audit logs of access events, and patient-controlled data sharing permissions. We sign Business Associate Agreements (BAAs) with all provider clinics." },
  { q: "Will the AI Dental Companion diagnose dental conditions?", a: "No. The AI Dental Companion is an information tool. It explains clinical treatments, defines terms, and guides recovery care. It does not diagnose cavities, prescribe medications, or replace professional clinical assessments." },
  { q: "Can this work for a single clinic or a multi-location dental network?", a: "Yes. The platform scales from solo dental offices to large multi-tenant corporate dental groups. Group plans include centralized management dashboards, branch-by-branch analysis, and localized tenant namespaces." },
  { q: "What files can be uploaded to the Dental Records Vault?", a: "PDFs (treatment forms, prescriptions), clinical photography (JPEG/PNG before-and-afters), bitewing/panoramic X-rays, and 3D CBCT scans. All files are stored securely with expiring signed URLs." },
  { q: "Does the Dentist Dashboard have AI features as well?", a: "Yes. Before each appointment, the dentist workspace generates an AI briefing: patient history summary, active treatment phases, outstanding balances, and questions submitted by the patient during booking." },
  { q: "How does the Visual Treatment Plan Tracker work?", a: "Clinicians map out dental treatment phases. The system displays this dynamically to patients: prep work, surgery steps, healing periods, and crown placement. This replaces complex billing codes with a visual progress map, significantly improving patient compliance." },
  { q: "Can family members manage accounts under one login?", a: "Yes. The Family Dental Hub allows a primary account holder to register profiles for children, spouses, or parents. Each profile retains isolated health records while sharing calendar reminders and billing details." },
  { q: "How is the Oral Health Score calculated?", a: "The score aggregates factors such as hygiene appointment frequency, compliance with treatment phases, medication logs, and preventive care checkups to help patients engage with their dental health." },
  { q: "What integrations are supported?", a: "We support major practice management software (PMS) sync (via custom FHIR API wrappers), Stripe payments, AWS S3/Cloudflare R2 storage, Twilio SMS alert routing, and SendGrid email notifications." },
  { q: "How long does implementation take?", a: "Phase 1 (MVP Setup with custom branding, authentication, booking, and records vault) is typically live within 4–6 weeks. Custom EHR integrations or multi-clinic database setups take 3–4 months." },
  // Column 2 - Technical & Integrations
  { q: "What database architecture does SmileOS use?", a: "PostgreSQL with Prisma ORM. The relational schema includes tables for Users, Patients, Dentists, Appointments, TreatmentPlans, TreatmentPhases, Scans, Invoices, PaymentPlans, FamilyProfiles, AuditLogs, and ClinicWorkspaces. Patient records are partitioned per clinic." },
  { q: "How does the Voice AI scheduling system operate?", a: "The Voice AI utilizes speech-to-text to capture requests. The natural language processor extracts the intent (e.g. hygiene cleaning, extraction), maps it against the selected dentist's scheduling blocks, and provisions the slot instantly." },
  { q: "What happens when a patient uploads a panoramic X-ray?", a: "The X-ray is stored in secure, private object storage. The AI processor indexes the file, links it to the patient's records history, and generates patient-friendly summary tags (e.g. \"Left lower mandible view\"). Only authorized clinicians can access the full image via expiring signed URLs." },
  { q: "Can dentists customize the recovery checklists?", a: "Yes. The clinic dashboard features a custom recovery template builder. Dentists can create treatment-specific checklists (e.g. implant recovery, wisdom teeth care) that auto-trigger on patient portals after appointments." },
  { q: "Is there a native mobile app for patients?", a: "SmileOS is built as a Progressive Web App (PWA) that installs on iOS and Android home screens without app store downloads. It supports push alerts, offline records cache, and full responsive design. A React Native build is planned for Phase 5." },
  { q: "How is billing split between patients and insurance?", a: "The payment portal calculates the estimated insurance coverage split based on pre-authorization inputs. The patient is shown their out-of-pocket estimate, which can be paid in full or divided into phase-based installments using Stripe integrations." },
  { q: "Does the platform support telehealth or virtual dental visits?", a: "Yes. Phase 4 roadmap includes integration with WebRTC frameworks. Dentists can conduct virtual visual checks, screen-share diagnostic scans, and record session notes directly in the patient file." },
  { q: "What clinic analytics are provided for office managers?", a: "Clinic managers see charts for booking volume, treatment plan acceptance rates, hygiene recall adherence, payment collection status, no-show trends, and AI assistant engagement across branch locations." },
  { q: "How are patient notifications and reminders delivered?", a: "SmileOS coordinates SMS notifications via Twilio and emails via SendGrid. Automated campaigns cover upcoming slot notifications, post-op day check-ins, aligner progression intervals, and 6-month hygiene recalls." },
  { q: "Can patient data be exported to another clinic?", a: "Yes. Patients and clinic managers can request a full archive export containing diagnostic notes, treatment plans, payment logs, and imaging scans compiled into standard HL7 FHIR bundles." },
];

/* =======================================================
   COMPONENT
======================================================= */
export default function SmartDentalPortalPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeUseCase, setActiveUseCase] = useState(0);

  // Interactive Mock Dashboard States
  const [activeDashboardTab, setActiveDashboardTab] = useState("Dashboard");
  const [dashboardChat, setDashboardChat] = useState([
    { sender: "ai", text: "Hello Sarah! I've reviewed your latest panoramic X-ray. Your bone graft healing in the upper-right jaw looks excellent. The bone density score is 88/100, meaning we are ready for implant placement. Would you like me to explain what to expect during this next phase?" }
  ]);
  const [chatLoading, setChatLoading] = useState(false);

  const handleChatQuestion = (question: string, answer: string) => {
    if (chatLoading) return;
    if (dashboardChat.some(m => m.text === question)) return;
    
    setDashboardChat(prev => [...prev, { sender: "patient", text: question }]);
    setChatLoading(true);
    setTimeout(() => {
      setDashboardChat(prev => [...prev, { sender: "ai", text: answer }]);
      setChatLoading(false);
    }, 800);
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
          <span className="text-white">Smart Dental Patient Portal</span>
        </div>

        {/* ================================================
            HERO
        ================================================ */}
        <section className="relative mb-24 pt-8 md:pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left side: Heading and content (5 cols) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 flex flex-col space-y-6 text-left"
            >
              {/* Top Badge */}
              <div className="inline-flex items-center space-x-2 self-start bg-gradient-to-r from-brand-cyan/15 to-brand-indigo/15 border border-brand-cyan/20 rounded-full px-4.5 py-1.5 shadow-lg shadow-brand-cyan/5">
                <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full animate-pulse" />
                <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest">Smart Dental Patient Portal</span>
                <Sparkles className="w-3 h-3 text-brand-cyan" />
              </div>

              {/* Headline */}
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl xl:text-5xl text-white leading-[1.15] tracking-tight">
                Your Dental Journey.<br />
                <span className="text-gradient-cyan-indigo">Treatment. Scans. Payments.</span><br />
                <span className="text-gradient-emerald-cyan">All in One</span> Dental Portal.
              </h1>

              {/* Subtitle */}
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                A complete digital dental operating system that transforms patient engagement. Integrates <span className="text-white font-semibold">treatment progress mapping</span>, diagnostic image vaults, installment billing, and automated follow-ups into one clinic-branded experience.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/demo?tab=dental"
                  className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-bold px-8 py-4 rounded-xl hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-brand-cyan/25 text-sm"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>See Live Demo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center space-x-2 glass-panel border border-brand-border text-gray-300 font-semibold px-8 py-4 rounded-xl hover:border-brand-cyan/40 hover:text-white hover:scale-[1.02] active:scale-[0.98] transition-all text-sm"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Book Discovery Call</span>
                </Link>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2.5 pt-4">
                {[
                  { icon: <Shield className="w-3.5 h-3.5 text-brand-emerald" />, label: "HIPAA Aligned", bg: "bg-brand-emerald/10 border-brand-emerald/20" },
                  { icon: <Lock className="w-3.5 h-3.5 text-brand-cyan" />, label: "AES-256 Encrypted", bg: "bg-brand-cyan/10 border-brand-cyan/20" },
                  { icon: <CheckCircle className="w-3.5 h-3.5 text-brand-indigo" />, label: "Role-Based Access", bg: "bg-brand-indigo/10 border-brand-indigo/20" },
                  { icon: <Star className="w-3.5 h-3.5 text-amber-400" />, label: "Patient-Owned Data", bg: "bg-amber-400/10 border-amber-400/20" },
                ].map((t) => (
                  <div key={t.label} className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full border ${t.bg}`}>
                    {t.icon}
                    <span className="text-[10px] font-semibold text-gray-300">{t.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right side: High-Fidelity Mock Dashboard (7 cols) */}
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
                      <Smile className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="font-display font-bold text-white text-xs tracking-wide">SmileOS Portal</span>
                  </div>
                  
                  {/* Status */}
                  <div className="flex items-center space-x-2 bg-brand-emerald/10 border border-brand-emerald/25 rounded-full px-2.5 py-1">
                    <div className="w-1.5 h-1.5 bg-brand-emerald rounded-full animate-pulse" />
                    <span className="text-[10px] text-brand-emerald font-semibold">Sarah Johnson (Online)</span>
                  </div>
                </div>

                {/* Dashboard Inner Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-brand-border h-[430px]">
                  
                  {/* Sidebar (3 cols) */}
                  <div className="md:col-span-4 p-4 space-y-1.5 bg-white/[0.01]">
                    <p className="text-[9px] text-gray-500 uppercase font-bold tracking-wider mb-2 px-2">Navigation</p>
                    {[
                      { id: "Dashboard", label: "Overview", icon: <LayoutDashboard className="w-3.5 h-3.5" /> },
                      { id: "Treatments", label: "Treatment Plan", icon: <ClipboardList className="w-3.5 h-3.5" /> },
                      { id: "Xrays", label: "X-Rays Vault", icon: <ScanLine className="w-3.5 h-3.5" /> },
                      { id: "AIAssistant", label: "AI Dental Chat", icon: <Brain className="w-3.5 h-3.5" /> },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveDashboardTab(tab.id)}
                        className={`w-full flex items-center space-x-2.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                          activeDashboardTab === tab.id
                            ? "bg-gradient-to-r from-brand-cyan/15 to-brand-indigo/15 text-white border border-brand-cyan/20"
                            : "text-gray-400 hover:text-gray-200 hover:bg-white/5 border border-transparent"
                        }`}
                      >
                        {tab.icon}
                        <span>{tab.label}</span>
                      </button>
                    ))}

                    <div className="pt-6">
                      <p className="text-[9px] text-gray-500 uppercase font-bold tracking-wider mb-2 px-2">Your Dentist</p>
                      <div className="flex items-center space-x-2 px-2 py-1">
                        <div className="w-6 h-6 rounded-full bg-brand-indigo/20 flex items-center justify-center text-[10px] font-bold text-brand-indigo">
                          AS
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-white">Dr. Ahmed Siddiqui</p>
                          <p className="text-[8px] text-gray-500">Implant Specialist</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Main Display (8 cols) */}
                  <div className="md:col-span-8 p-5 overflow-y-auto flex flex-col justify-between h-full bg-brand-bg/20">
                    
                    {/* Active tab contents */}
                    {activeDashboardTab === "Dashboard" && (
                      <div className="space-y-4 flex-grow">
                        {/* Title */}
                        <div className="flex justify-between items-center">
                          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Hygiene Overview</h4>
                          <span className="text-[10px] text-gray-500 font-mono">Synced: Just now</span>
                        </div>

                        {/* Top Cards row */}
                        <div className="grid grid-cols-2 gap-3">
                          {/* Score Card */}
                          <div className="bg-gradient-to-br from-brand-cyan/10 to-brand-indigo/5 rounded-xl p-3.5 border border-brand-cyan/15">
                            <span className="text-[9px] text-gray-500 block">Oral Health Score</span>
                            <div className="flex items-end space-x-1.5 mt-0.5 mb-1.5">
                              <span className="text-3xl font-display font-extrabold text-white">82</span>
                              <span className="text-[10px] text-brand-cyan font-bold mb-1">/100</span>
                            </div>
                            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden mb-1">
                              <div className="h-full w-[82%] bg-gradient-to-r from-brand-cyan to-brand-indigo rounded-full" />
                            </div>
                            <span className="text-[8px] text-brand-emerald font-semibold">^ +6 points since bone graft</span>
                          </div>

                          {/* Insight Alert */}
                          <div className="bg-brand-indigo/5 rounded-xl p-3.5 border border-brand-indigo/15 flex flex-col justify-between">
                            <div>
                              <div className="flex items-center space-x-1 mb-1">
                                <Sparkles className="w-3 h-3 text-brand-cyan" />
                                <span className="text-[9px] text-brand-cyan font-bold uppercase">AI Dental Insight</span>
                              </div>
                              <p className="text-[10px] text-gray-300 leading-snug">
                                Bone graft healed successfully. Upper-right jaw bone density is <span className="text-brand-emerald font-semibold">88/100</span>. Ready for implants.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Timeline snippet */}
                        <div className="glass-panel rounded-xl p-3 border border-brand-border bg-white/[0.01]">
                          <p className="text-[9px] text-gray-500 font-bold uppercase tracking-wider mb-2">Upcoming Appointment</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <div className="w-8 h-8 rounded-lg bg-brand-cyan/10 flex items-center justify-center text-brand-cyan">
                                <Calendar className="w-4 h-4" />
                              </div>
                              <div>
                                <p className="text-xs font-bold text-white">Implant Surgery Phase 3</p>
                                <p className="text-[9px] text-gray-500">Tomorrow at 3:00 PM · Dr. Ahmed Siddiqui</p>
                              </div>
                            </div>
                            <button
                              onClick={() => setActiveDashboardTab("AIAssistant")}
                              className="text-[9px] bg-brand-cyan/15 hover:bg-brand-cyan/20 border border-brand-cyan/20 text-brand-cyan rounded-lg px-2.5 py-1 font-semibold transition-colors"
                            >
                              Prepare Brief
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeDashboardTab === "Treatments" && (
                      <div className="space-y-3.5 flex-grow">
                        <div className="flex justify-between items-center">
                          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Implant Restorative Plan</h4>
                          <span className="text-[9px] bg-brand-cyan/10 border border-brand-cyan/20 rounded-full px-2 py-0.5 text-brand-cyan text-[8px] font-bold">4 Phases</span>
                        </div>

                        <div className="space-y-2.5">
                          {[
                            { name: "Initial Scan & Bone Graft", value: "Completed", date: "Mar 15, 2026", color: "text-brand-emerald bg-brand-emerald/10 border-brand-emerald/20" },
                            { name: "Surgical Implant Placement", value: "Scheduled", date: "Tomorrow, 3:00 PM", color: "text-brand-cyan bg-brand-cyan/10 border-brand-cyan/20" },
                            { name: "Healing Abutment Placement", value: "Upcoming", date: "July 12, 2026", color: "text-gray-500 bg-gray-500/10 border-gray-500/20" },
                          ].map((step) => (
                            <div key={step.name} className="glass-panel rounded-xl p-3 border border-brand-border flex items-center justify-between">
                              <div>
                                <p className="text-xs font-semibold text-white">{step.name}</p>
                                <p className="text-[9px] text-gray-500">Scheduled: {step.date}</p>
                              </div>
                              <div className="text-right">
                                <span className={`inline-block text-[8px] font-extrabold px-1.5 py-0.5 rounded-full border mt-0.5 ${step.color}`}>
                                  {step.value}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeDashboardTab === "AIAssistant" && (
                      <div className="flex flex-col h-full justify-between flex-grow">
                        <div className="flex justify-between items-center border-b border-brand-border/60 pb-2 mb-2">
                          <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-wider flex items-center space-x-1">
                            <Brain className="w-3 h-3 text-brand-cyan animate-pulse mr-1" />
                            <span>AI Dental Companion</span>
                          </span>
                          <span className="text-[8px] text-brand-emerald font-semibold">Online</span>
                        </div>

                        {/* Conversational Area */}
                        <div className="space-y-3 flex-grow overflow-y-auto max-h-[200px] pr-1 mb-2">
                          {dashboardChat.map((msg, i) => (
                            <div key={i} className={`flex space-x-2 ${msg.sender === "patient" ? "justify-end" : ""}`}>
                              {msg.sender === "ai" && (
                                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-brand-cyan to-brand-indigo flex-shrink-0 flex items-center justify-center text-[8px] text-white">
                                  AI
                                </div>
                              )}
                              <div className={`rounded-xl px-3 py-2 text-[11px] leading-snug border max-w-[85%] ${
                                msg.sender === "patient"
                                  ? "bg-brand-indigo/15 border-brand-indigo/25 text-white rounded-tr-sm"
                                  : "bg-brand-cyan/8 border-brand-cyan/15 text-gray-200 rounded-tl-sm"
                              }`}>
                                {msg.text.split("\n").map((line, idx) => (
                                  <p key={idx} className={idx > 0 ? "mt-1" : ""}>{line}</p>
                                ))}
                              </div>
                            </div>
                          ))}
                          
                          {chatLoading && (
                            <div className="flex space-x-2">
                              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-brand-cyan to-brand-indigo flex-shrink-0 flex items-center justify-center text-[8px] text-white">
                                AI
                              </div>
                              <div className="bg-brand-cyan/8 border border-brand-cyan/15 rounded-xl rounded-tl-sm px-3 py-2 text-[11px] text-gray-400">
                                <div className="flex items-center space-x-1">
                                  <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full animate-bounce" />
                                  <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full animate-bounce [animation-delay:0.2s]" />
                                  <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full animate-bounce [animation-delay:0.4s]" />
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Interactive prompt pills */}
                        <div className="space-y-1.5 border-t border-brand-border/60 pt-2">
                          <p className="text-[8px] text-gray-500 font-bold uppercase tracking-wider">Suggested Actions</p>
                          <div className="flex flex-wrap gap-1.5">
                            {[
                              { q: "What is implant placement?", a: "Implant placement is a brief surgical procedure where a titanium post is set into the jawbone to act as an anchor root for your upcoming cosmetic crown." },
                              { q: "Tell me about recovery guidelines", a: "1. Apply cold packs to reduce minor swelling.\n2. Avoid solid or hot foods for the first 48 hours.\n3. Rinse gently with warm salt water starting Day 2." },
                              { q: "Show my treatment cost split", a: "Your total estimated cost for Phase 3 surgery is $1,200 out-of-pocket, with insurance covering $800. Installment options are ready on your Payments tab." },
                            ].map((pill) => {
                              const isSent = dashboardChat.some(m => m.text === pill.q);
                              return (
                                <button
                                  key={pill.q}
                                  disabled={isSent || chatLoading}
                                  onClick={() => handleChatQuestion(pill.q, pill.a)}
                                  className={`text-[9px] border rounded-lg px-2 py-1 transition-all ${
                                    isSent
                                      ? "border-brand-border text-gray-600 bg-transparent cursor-not-allowed"
                                      : "border-brand-cyan/20 bg-brand-cyan/5 hover:bg-brand-cyan/10 text-brand-cyan"
                                  }`}
                                >
                                  {pill.q}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}

                    {activeDashboardTab === "Xrays" && (
                      <div className="space-y-4 flex-grow flex flex-col justify-center">
                        <div className="border border-dashed border-brand-cyan/35 bg-brand-cyan/5 rounded-2xl p-6 text-center hover:border-brand-cyan/50 hover:bg-brand-cyan/10 transition-all cursor-pointer">
                          <CloudUpload className="w-8 h-8 text-brand-cyan mx-auto mb-2 animate-bounce" />
                          <p className="text-xs font-bold text-white">Upload Scans & X-Rays</p>
                          <p className="text-[10px] text-gray-500 mt-1 max-w-[220px] mx-auto">
                            Drag and drop bitewings, panoramic scans, or clinical photos. SmileOS will store them in your secure vault.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Bottom active tab navigation helper on mobile */}
                    <div className="text-[9px] text-gray-500 text-center border-t border-brand-border/60 pt-2 flex items-center justify-between">
                      <span>Click tabs in navigation sidebar to explore dental portal features.</span>
                      <Smile className="w-3 h-3 text-brand-cyan" />
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </section>

        {/* ======================================
            STATS BAR
        ====================================== */}
        <section className="mb-28">
          <div className="glass-panel rounded-2xl border border-brand-border p-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brand-cyan/10 text-brand-cyan mb-3 mx-auto">
                    {stat.icon}
                  </div>
                  <p className="font-display font-extrabold text-2xl text-white">{stat.value}</p>
                  <p className="text-[11px] text-gray-500 mt-0.5 leading-tight">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================
            WHAT MAKES IT DIFFERENT
        ====================================== */}
        <section className="mb-28">
          <div className="text-center mb-14">
            <div className="inline-flex items-center space-x-2 bg-brand-indigo/10 border border-brand-indigo/20 rounded-full px-4 py-1.5 mb-4">
              <Zap className="w-4 h-4 text-brand-indigo" />
              <span className="text-xs font-semibold text-brand-indigo uppercase tracking-widest">Differentiators</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              Built specifically for modern{" "}
              <span className="text-gradient-cyan-indigo">dental practices</span>
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Every clinic software lists bookings and payments. SmileOS delivers a fully visual treatment map, contextual clinical AI chat, and scan compare portals that improve patient retention.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className={`glass-panel glass-panel-hover rounded-2xl p-6 border border-brand-border bg-gradient-to-br ${d.color}`}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4" style={{ background: d.glow }}>
                  <span className="text-brand-cyan">{d.icon}</span>
                </div>
                <h3 className="font-display font-bold text-white text-lg mb-1">{d.title}</h3>
                <p className="text-xs text-brand-cyan font-medium mb-3">{d.subtitle}</p>
                <p className="text-sm text-gray-400 leading-relaxed">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ======================================
            COMPARISON TABLE
        ====================================== */}
        <section className="mb-28">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-brand-emerald/10 border border-brand-emerald/20 rounded-full px-4 py-1.5 mb-4">
              <BarChart3 className="w-4 h-4 text-brand-emerald" />
              <span className="text-xs font-semibold text-brand-emerald uppercase tracking-widest">Comparison</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              Traditional Software vs{" "}
              <span className="text-gradient-emerald-cyan">SmileOS Portal</span>
            </h2>
            <p className="mt-3 text-gray-400 max-w-xl mx-auto">
              How SmileOS transforms raw clinic listings into an intelligent journey.
            </p>
          </div>

          <div className="glass-panel rounded-2xl border border-brand-border overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 bg-white/3 border-b border-brand-border">
              <div className="p-5 text-xs font-bold text-gray-500 uppercase tracking-wider">Feature</div>
              <div className="p-5 text-center border-x border-brand-border">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Standard Patient Portal</p>
              </div>
              <div className="p-5 text-center bg-brand-cyan/5">
                <p className="text-xs font-bold text-brand-cyan uppercase tracking-wider">SmileOS Portal</p>
              </div>
            </div>
            {[
              ["Treatment Plans", "Plain clinical codes or printouts", "Visual phase-by-phase tracker showing progress, costs, and timeline"],
              ["Diagnostic Vault", "Downloadable file links only", "Secure scans vault with multi-photo comparison sliders"],
              ["Payments & Installments", "Pay total balance only", "Phase-based partial payments and Stripe installment setups"],
              ["AI Chat Companion", "Basic FAQ bots", "Context-aware AI dental companion reading patient oral history"],
              ["Dentist Prep", "Manual notes retrieval", "Automated pre-appointment survey briefs pushed to dentist dashboards"],
              ["Patient Follow-ups", "Manual phone recalls", "AI-triggered Day 1, 7, 30 post-op checklists and hygiene recalls"],
              ["Family Records", "Separate log-ins required", "Unified Family Hub for scheduling and payment coordination"],
              ["Software Integration", "None / standalone app", "Syncs directly to Practice Management Systems (PMS) via FHIR APIs"],
            ].map(([feature, old, neu], i) => (
              <div key={feature} className={`grid grid-cols-3 border-b border-brand-border last:border-0 ${i % 2 === 0 ? "" : "bg-white/1"}`}>
                <div className="p-4 text-sm font-medium text-gray-300">{feature}</div>
                <div className="p-4 text-sm text-gray-500 border-x border-brand-border flex items-center space-x-2">
                  <X className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
                  <span>{old}</span>
                </div>
                <div className="p-4 text-sm text-gray-300 flex items-start space-x-2 bg-brand-cyan/3">
                  <CheckCircle className="w-3.5 h-3.5 text-brand-emerald flex-shrink-0 mt-0.5" />
                  <span>{neu}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ======================================
            PATIENT JOURNEY WALKTHROUGH
        ====================================== */}
        <section className="mb-28">
          <div className="text-center mb-14">
            <div className="inline-flex items-center space-x-2 bg-brand-cyan/10 border border-brand-cyan/20 rounded-full px-4 py-1.5 mb-4">
              <Clock className="w-4 h-4 text-brand-cyan" />
              <span className="text-xs font-semibold text-brand-cyan uppercase tracking-widest">Patient Journey</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              A day in the life of a{" "}
              <span className="text-gradient-cyan-indigo">SmileOS patient</span>
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Follow Sarah&apos;s patient journey through a complex implant restoration - from symptom check to complete crown recovery.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-brand-cyan via-brand-indigo via-brand-emerald to-amber-400 hidden lg:block" />
            <div className="space-y-6">
              {[
                {
                  time: "Day 1: Initial Assessment",
                  title: "Tooth pain checkup - Sarah logs in",
                  desc: "Sarah feels jaw discomfort. She logs in to SmileOS and asks the AI Companion. The AI scans her dental history and replies: \"Your wisdom teeth were extracted, but the upper-right jaw bone density was noted for graft prep. Let's schedule an assessment with Dr. Siddiqui.\"",
                  color: "brand-cyan",
                  tag: "AI Dental Chat",
                },
                {
                  time: "Day 2: Appointment Provisioned",
                  title: "3-Step booking & pre-brief generator",
                  desc: "Sarah selects Surgical Consult → Dr. Siddiqui → Tuesday 3 PM. SmileOS schedules the slot and runs a pre-appointment check: \"Are you experiencing gum swelling? Have you taken ibuprofen?\" Pushes a structured summary brief to the dentist dashboard.",
                  color: "brand-indigo",
                  tag: "Smart Booking",
                },
                {
                  time: "Day 7: Surgical Presentation",
                  title: "Visual treatment plans & installment splits",
                  desc: "Dr. Siddiqui maps out a 4-phase implant track. On her portal, Sarah sees her full progress track with costs split: Phase 1 bone scan ($350) ✓, Phase 2 implant post ($1,200) ⏳, Phase 3 crown ($800) ⬜. She approves the installment plan in one click.",
                  color: "brand-emerald",
                  tag: "Treatment Tracker",
                },
                {
                  time: "Day 30: Implant Recovery",
                  title: "Post-surgery photo checks & recovery alerts",
                  desc: "Following implant post-placement, automated workflows kick off: Day 1 text checks, Day 7 aligner checks. Sarah snaps a smartphone photo of her gum healing and uploads it to secure messaging. Dr. Siddiqui reviews it remotely.",
                  color: "amber-400",
                  tag: "Secure Vault",
                },
                {
                  time: "Month 6: Restoration Complete",
                  title: "Hygiene recall & updated dental timeline",
                  desc: "Sarah returns for crown placement. Her visual timeline updates: all phases complete. The AI updates her health score to 92/100, sets up a 6-month cleaning recall, and delivers custom tooth flossing guidelines.",
                  color: "brand-cyan",
                  tag: "Hygiene Recall",
                },
              ].map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="glass-panel rounded-2xl p-6 border border-brand-border lg:ml-20 relative"
                >
                  <div className={`absolute -left-[64px] top-6 w-8 h-8 rounded-full bg-${step.color} border-4 border-brand-bg hidden lg:flex items-center justify-center text-xs font-bold text-white`}>
                    {i + 1}
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <div className="flex-shrink-0">
                      <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-${step.color}/10 text-${step.color} border border-${step.color}/20 mb-2`}>
                        {step.tag}
                      </span>
                      <p className="text-[11px] text-gray-500">{step.time}</p>
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================
            CORE FEATURES GRID
        ====================================== */}
        <section className="mb-28">
          <div className="text-center mb-14">
            <div className="inline-flex items-center space-x-2 bg-brand-emerald/10 border border-brand-emerald/20 rounded-full px-4 py-1.5 mb-4">
              <CheckCircle className="w-4 h-4 text-brand-emerald" />
              <span className="text-xs font-semibold text-brand-emerald uppercase tracking-widest">Feature Set</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              Everything your patients need,{" "}
              <span className="text-gradient-emerald-cyan">all in one place</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {coreFeatures.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="glass-panel glass-panel-hover rounded-xl p-5 border border-brand-border group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-brand-cyan/10 text-brand-cyan group-hover:bg-brand-cyan/15 transition-colors">
                    {f.icon}
                  </div>
                  {f.badge && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/20">
                      {f.badge}
                    </span>
                  )}
                </div>
                <h3 className="font-display font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ======================================
            PORTAL MODULES MAP
        ====================================== */}
        <section className="mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center space-x-2 bg-brand-cyan/10 border border-brand-cyan/20 rounded-full px-4 py-1.5 mb-6">
                <LayoutDashboard className="w-4 h-4 text-brand-cyan" />
                <span className="text-xs font-semibold text-brand-cyan uppercase tracking-widest">Portal Modules Map</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-4">
                Structured clinical workspaces{" "}
                <span className="text-gradient-cyan-indigo">for oral care</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                The portal splits navigation into logical areas. Patient history syncs dynamically, feeding diagnostic notes and imaging templates to active dental profiles.
              </p>
              <div className="glass-panel rounded-xl p-5 border border-brand-border">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">3-Step Appointment Booking Flow</p>
                <div className="flex items-center flex-wrap gap-2">
                  {["Select Procedure", "Select Dentist", "Choose Time Slot", "AI Pre-Brief", "Confirm"].map((step, i, arr) => (
                    <div key={step} className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1.5 bg-brand-cyan/10 border border-brand-cyan/20 rounded-lg px-3 py-1.5">
                        <span className="w-4 h-4 rounded-full bg-brand-cyan/20 text-brand-cyan text-[10px] flex items-center justify-center font-bold">{i + 1}</span>
                        <span className="text-xs text-gray-300 font-medium">{step}</span>
                      </div>
                      {i < arr.length - 1 && <ArrowRight className="w-3 h-3 text-gray-600 flex-shrink-0" />}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {portalModules.map((m) => (
                <div key={m.title} className="glass-panel rounded-xl p-4 border border-brand-border hover:border-brand-cyan/30 transition-colors">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-brand-cyan">{m.icon}</span>
                    <h4 className="font-semibold text-white text-sm">{m.title}</h4>
                  </div>
                  <ul className="space-y-1">
                    {m.items.map((item) => (
                      <li key={item} className="flex items-start space-x-1.5">
                        <CheckCircle className="w-3 h-3 text-brand-emerald mt-0.5 flex-shrink-0" />
                        <span className="text-[11px] text-gray-400">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ======================================
            AI DENTAL JOURNEY SHOWCASE
        ====================================== */}
        <section className="mb-28">
          <div className="text-center mb-14">
            <div className="inline-flex items-center space-x-2 bg-brand-cyan/10 border border-brand-cyan/20 rounded-full px-4 py-1.5 mb-4">
              <Activity className="w-4 h-4 text-brand-cyan" />
              <span className="text-xs font-semibold text-brand-cyan uppercase tracking-widest">Oral Health Timeline</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              Your dental health history,{" "}
              <span className="text-gradient-cyan-indigo">narrated by AI</span>
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Our interactive timeline details your dental progress over years, explaining diagnostics and celebrating hygiene milestones in clear, plain language.
            </p>
          </div>

          <div className="relative mb-10">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-brand-cyan via-brand-indigo via-amber-400 to-brand-emerald hidden lg:block" />
            <div className="space-y-6">
              {[
                {
                  year: "2023", event: "Initial Assessment",
                  detail: "General scaling & polishing completed · Periodontal pocket depth noted at 3mm max.",
                  color: "brand-cyan",
                  ai: "Oral tissue looks healthy. Pocket depths are within regular baseline parameters. Maintain 6-month hygiene recall.", category: "Hygiene Check"
                },
                {
                  year: "2024", event: "Orthodontic Assessment",
                  detail: "Orthodontic assessment completed · Started aligner treatment steps 1 to 24.",
                  color: "brand-indigo",
                  ai: "Clear aligner tracking initiated. Arch spacing shows 84% compatibility with non-extraction track. Excellent compliance.", category: "Orthodontics"
                },
                {
                  year: "2025", event: "Implant Preparatory Scan",
                  detail: "Panoramic scan of upper-right quadrant. Extracted premolar space prepped with bone graft.",
                  color: "amber-400",
                  ai: "Bone graft integration is active. Density scan shows graft is maturing nicely. Scheduled retest in 3 months.", category: "Oral Surgery"
                },
                {
                  year: "2026", event: "Today - Restored",
                  detail: "Titanium implant post placed · Crown restoration fitted · Healthy occlusion index.",
                  color: "brand-emerald",
                  ai: "Oral Health Score: 92/100. Bone graft osseointegration completed successfully. Implant has stable support.", category: "Current"
                },
              ].map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="glass-panel rounded-2xl p-6 border border-brand-border lg:ml-20 relative"
                >
                  <div className={`absolute -left-[64px] top-6 w-8 h-8 rounded-full bg-${item.color} border-4 border-brand-bg hidden lg:flex items-center justify-center text-[10px] font-bold text-white`}>
                    {item.year.slice(2)}
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <div className="flex-shrink-0">
                      <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-${item.color}/10 text-${item.color} border border-${item.color}/20 mb-2`}>
                        {item.category}
                      </span>
                      <p className="text-[11px] text-gray-500">{item.year}</p>
                    </div>
                    <div className="flex-grow min-w-0">
                      <h3 className="font-display font-bold text-white mb-2">{item.event}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed mb-3">{item.detail}</p>
                      {item.ai && (
                        <div className={`flex items-start space-x-2 bg-${item.color}/8 border border-${item.color}/20 rounded-xl px-4 py-3`}>
                          <Brain className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-wider">AI Insight - </span>
                            <span className="text-[12px] text-gray-300">{item.ai}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: <Activity className="w-5 h-5" />, title: "Complete Oral History", desc: "All teeth scans, checkups, and cavity restoration history stored sequentially.", color: "brand-cyan" },
              { icon: <Brain className="w-5 h-5" />, title: "Narrative AI Insights", desc: "AI interprets panoramic dental scans to describe bone thickness and healing.", color: "brand-indigo" },
              { icon: <Star className="w-5 h-5" />, title: "Hygiene Milestones", desc: "Aligner steps and scaling adherence rewards to keep patients on track.", color: "brand-emerald" },
              { icon: <Stethoscope className="w-5 h-5" />, title: "Dentist pre-brief", desc: "Pushes patient symptom logs directly to clinician dashboards before visits.", color: "amber-400" },
            ].map((f) => (
              <div key={f.title} className="glass-panel rounded-xl p-5 border border-brand-border hover:border-brand-cyan/30 transition-colors">
                <div className={`w-10 h-10 rounded-xl bg-${f.color}/10 text-${f.color} flex items-center justify-center mb-3`}>
                  {f.icon}
                </div>
                <h4 className="font-semibold text-white text-sm mb-1">{f.title}</h4>
                <p className="text-[12px] text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ======================================
            AI DENTAL COMPANION SHOWCASE
        ====================================== */}
        <section className="mb-28">
          <div className="glass-panel rounded-2xl border border-brand-border overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 border-r border-brand-border">
                <div className="inline-flex items-center space-x-2 bg-brand-indigo/10 border border-brand-indigo/20 rounded-full px-4 py-1.5 mb-6">
                  <Brain className="w-4 h-4 text-brand-indigo" />
                  <span className="text-xs font-semibold text-brand-indigo uppercase tracking-widest">Conversational AI</span>
                </div>
                <h2 className="font-display font-extrabold text-3xl text-white mb-4">
                  AI Dental Companion -{" "}
                  <span className="text-gradient-cyan-indigo">your custom assistant</span>
                </h2>
                <p className="text-gray-400 leading-relaxed mb-6">
                  The companion reads your full oral scans history and past treatment phases, providing immediate recovery advice, explanations of surgery, and insurance splits in plain English.
                </p>
                <div className="space-y-3 mb-6">
                  {[
                    { action: "Explain surgery phases", desc: "Explains implant stages and bone graft timelines" },
                    { action: "Prepare appointment questions", desc: "Generates custom questions for Dr. Siddiqui based on history" },
                    { action: "Symptom checker", desc: "Checks gum pain or aligner irritation against recovery baselines" },
                    { action: "Post-op care reminders", desc: "Delivers extraction recovery rules and brush timers" },
                    { action: "Billing splits breakdown", desc: "Explains patient cost portion vs insurance limits" },
                    { action: "Appointment preparation", desc: "Coaches on pre-op instructions before surgical stages" },
                  ].map((item) => (
                    <div key={item.action} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-2 flex-shrink-0" />
                      <div>
                        <span className="text-sm font-semibold text-white">{item.action}</span>
                        <span className="text-sm text-gray-500"> - {item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl">
                  <p className="text-xs text-amber-400 font-semibold">! Ethical AI Standards</p>
                  <p className="text-xs text-gray-400 mt-1">
                    The companion is configured to provide guidance on surgery aftercare and scheduling. It never diagnoses conditions or bypasses dentist reviews.
                  </p>
                </div>
              </div>

              {/* Chat UI */}
              <div className="p-10 bg-brand-bg/50">
                <div className="glass-panel rounded-2xl overflow-hidden border border-brand-border">
                  <div className="px-4 py-3 border-b border-brand-border flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-cyan to-brand-indigo flex items-center justify-center">
                      <Brain className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">AI Dental Companion</p>
                      <p className="text-[10px] text-brand-emerald">* Online - Reads Sarah Johnson profile</p>
                    </div>
                  </div>

                  <div className="p-4 space-y-4 min-h-[320px]">
                    <div className="flex space-x-2">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-brand-cyan to-brand-indigo flex-shrink-0 flex items-center justify-center">
                        <Brain className="w-3.5 h-3.5 text-white" />
                      </div>
                      <div className="bg-brand-cyan/10 border border-brand-cyan/15 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%]">
                        <p className="text-sm text-gray-200">Hello Sarah! I see your implant surgery is scheduled tomorrow. Your upper-right bone graft healing is complete. Do you want me to explain the placement procedure?</p>
                      </div>
                    </div>
                    <div className="flex space-x-2 justify-end">
                      <div className="bg-brand-indigo/20 border border-brand-indigo/20 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%]">
                        <p className="text-sm text-gray-200">Yes, and tell me what foods I should eat after surgery.</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-brand-cyan to-brand-indigo flex-shrink-0 flex items-center justify-center">
                        <Brain className="w-3.5 h-3.5 text-white" />
                      </div>
                      <div className="bg-brand-cyan/10 border border-brand-cyan/15 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%]">
                        <p className="text-sm text-gray-200 mb-2">Implant post placement takes 45 mins. For foods after surgery, focus on soft options:</p>
                        <p className="text-xs font-semibold text-brand-cyan">Recommended aftercare diet:</p>
                        <ul className="mt-1 space-y-1 text-xs text-gray-400">
                          <li>• Day 1-2: Protein shakes, cold yogurt, applesauce</li>
                          <li>• Day 3-5: Mashed potatoes, scrambled eggs, warm soup</li>
                          <li>• Avoid: Hot liquids, nuts, hard chips, and straws</li>
                        </ul>
                      </div>
                    </div>
                    {/* Quick actions */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {["Explain surgery phases", "Check recovery rules", "Explain billing splits"].map((q) => (
                        <div key={q} className="text-[11px] bg-brand-cyan/10 border border-brand-cyan/20 rounded-full px-3 py-1.5 text-brand-cyan cursor-pointer hover:bg-brand-cyan/15 transition-colors">
                          {q}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="px-4 py-3 border-t border-brand-border">
                    <div className="flex items-center space-x-2 glass-panel rounded-xl px-3 py-2 border border-brand-border">
                      <input type="text" placeholder="Ask about your dental plan..." className="flex-grow bg-transparent text-sm text-gray-300 placeholder-gray-600 outline-none" readOnly />
                      <div className="w-7 h-7 rounded-lg bg-gradient-to-r from-brand-cyan to-brand-indigo flex items-center justify-center cursor-pointer">
                        <ArrowRight className="w-3.5 h-3.5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================
            MULTI-ROLE DASHBOARDS
        ====================================== */}
        <section className="mb-28">
          <div className="text-center mb-14">
            <div className="inline-flex items-center space-x-2 bg-brand-emerald/10 border border-brand-emerald/20 rounded-full px-4 py-1.5 mb-4">
              <Stethoscope className="w-4 h-4 text-brand-emerald" />
              <span className="text-xs font-semibold text-brand-emerald uppercase tracking-widest">Multi-Role Platform</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              Symphonizing workflows across your{" "}
              <span className="text-gradient-emerald-cyan">dental clinic</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Smile className="w-6 h-6 text-brand-cyan" />,
                iconBg: "bg-brand-cyan/10",
                title: "Patient Portal", route: "/patient/dashboard", color: "brand-cyan",
                items: ["Treatment plan tracking", "Appointment scheduling", "Panoramic X-rays vault", "Installment billing splits", "AI Dental Companion", "Family hub profiles", "Secure clinical messaging", "Copay & insurance cards wallet", "Voice-activated booking", "Post-op guidelines tracker"],
              },
              {
                icon: <Stethoscope className="w-6 h-6 text-brand-indigo" />,
                iconBg: "bg-brand-indigo/10",
                title: "Dentist Dashboard", route: "/dentist/dashboard", color: "brand-indigo",
                items: ["AI patient summary pre-briefs", "Oral health timeline viewer", "Bitewing & 3D scan display", "Clinical notes editor", "Recall tracking indicators", "Role-based referrals routing", "Secure patient messaging", "Custom aftercare template builder", "Lab slip status indicators", "Prescription dispatch log"],
              },
              {
                icon: <Activity className="w-6 h-6 text-brand-emerald" />,
                iconBg: "bg-brand-emerald/10",
                title: "Clinic Admin Portal", route: "/admin/dashboard", color: "brand-emerald",
                items: ["Staff & scheduling rules", "Multi-tenant clinic metrics", "Recall acceptance reports", "Stripe payment tracking", "HIPAA audit log summaries", "EHR sync status check", "Clinic profile setup", "Patient data portability exports", "System service triggers", "Group database settings"],
              },
            ].map((role) => (
              <div key={role.title} className={`glass-panel rounded-2xl p-6 border border-${role.color}/20`}>
                <div className={`w-12 h-12 rounded-xl ${role.iconBg} flex items-center justify-center mb-5`}>
                  {role.icon}
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-1">{role.title}</h3>
                <p className={`text-xs text-${role.color} font-medium font-mono mb-4`}>{role.route}</p>
                <ul className="space-y-2">
                  {role.items.map((item) => (
                    <li key={item} className={`flex items-center space-x-2 text-sm text-gray-400`}>
                      <CheckCircle className={`w-3.5 h-3.5 text-${role.color} flex-shrink-0`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ======================================
            USE CASE SCENARIOS
        ====================================== */}
        <section className="mb-28">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-brand-cyan/10 border border-brand-cyan/20 rounded-full px-4 py-1.5 mb-4">
              <Building2 className="w-4 h-4 text-brand-cyan" />
              <span className="text-xs font-semibold text-brand-cyan uppercase tracking-widest">Specialties</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              Optimized for every{" "}
              <span className="text-gradient-cyan-indigo">dental environment</span>
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              SmileOS adapts to independent offices, pediatric practices, cosmetic clinics, and large regional networks. See how clinicians utilize the system.
            </p>
          </div>

          {/* Tab selector */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {useCases.map((uc, i) => (
              <button
                key={uc.specialty}
                onClick={() => setActiveUseCase(i)}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  activeUseCase === i
                    ? "bg-gradient-to-r from-brand-cyan/20 to-brand-indigo/15 text-white border border-brand-cyan/30"
                    : "glass-panel border border-brand-border text-gray-400 hover:text-white hover:border-brand-cyan/20"
                }`}
              >
                <span className="text-brand-cyan">{uc.icon}</span>
                <span>{uc.specialty}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeUseCase}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="glass-panel rounded-2xl border border-brand-border overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="p-8 border-b lg:border-b-0 lg:border-r border-brand-border">
                  <div className={`w-14 h-14 rounded-2xl bg-${useCases[activeUseCase].color}/10 flex items-center justify-center mb-5 text-brand-cyan`}>
                    {useCases[activeUseCase].icon}
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white mb-2">{useCases[activeUseCase].specialty}</h3>
                  <p className="text-sm text-gray-400 mb-6 italic">&ldquo;{useCases[activeUseCase].scenario}&rdquo;</p>
                  <div className="p-4 bg-brand-emerald/10 border border-brand-emerald/20 rounded-xl">
                    <p className="text-xs font-bold text-brand-emerald mb-1">Measured Outcome</p>
                    <p className="text-sm text-gray-300">{useCases[activeUseCase].outcome}</p>
                  </div>
                </div>
                <div className="lg:col-span-2 p-8">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-5">Patient Journey Steps</p>
                  <div className="space-y-4">
                    {useCases[activeUseCase].journey.map((step, i) => (
                      <div key={i} className="flex items-start space-x-4">
                        <div className="w-8 h-8 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan text-xs font-bold flex-shrink-0">
                          {i + 1}
                        </div>
                        <p className="text-sm text-gray-300 pt-1.5 leading-relaxed">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </section>

        {/* ======================================
            SECURITY & COMPLIANCE
        ====================================== */}
        <section className="mb-28">
          <div className="text-center mb-14">
            <div className="inline-flex items-center space-x-2 bg-brand-emerald/10 border border-brand-emerald/20 rounded-full px-4 py-1.5 mb-4">
              <Shield className="w-4 h-4 text-brand-emerald" />
              <span className="text-xs font-semibold text-brand-emerald uppercase tracking-widest">Security & Compliance</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              HIPAA-aligned security,{" "}
              <span className="text-gradient-emerald-cyan">patient-first access control</span>
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Dental charts and scans contain highly sensitive health history. SmileOS is architected with security as the primary guideline, not an after-thought.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {securityFeatures.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="glass-panel rounded-xl p-5 border border-brand-border hover:border-brand-emerald/30 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-emerald/10 text-brand-emerald flex items-center justify-center mb-4 group-hover:bg-brand-emerald/15 transition-colors">
                  {feat.icon}
                </div>
                <h3 className="font-semibold text-white text-sm mb-2">{feat.title}</h3>
                <p className="text-[12px] text-gray-400 leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Compliance badges */}
          <div className="mt-10 glass-panel rounded-xl p-6 border border-brand-border">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider text-center mb-5">Standards & Certifications Alignment</p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { label: "HIPAA Compliant PWA", icon: "" },
                { label: "SOC 2 Audit Ready", icon: "" },
                { label: "AES-256 Encrypted", icon: "" },
                { label: "HL7 FHIR API Compatible", icon: "" },
                { label: "Multi-Tenant Isolation", icon: "" },
                { label: "GDPR Standards Built", icon: "" },
              ].map((badge) => (
                <div key={badge.label} className="flex items-center space-x-2 bg-brand-emerald/10 border border-brand-emerald/20 rounded-full px-4 py-2">
                  <span className="text-xs font-semibold text-brand-emerald">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================
            INTEGRATION ECOSYSTEM
        ====================================== */}
        <section className="mb-28">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-brand-indigo/10 border border-brand-indigo/20 rounded-full px-4 py-1.5 mb-4">
              <RefreshCw className="w-4 h-4 text-brand-indigo" />
              <span className="text-xs font-semibold text-brand-indigo uppercase tracking-widest">PMS Integration</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              Connects with your{" "}
              <span className="text-gradient-cyan-indigo">practice systems</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "OpenAI GPT-4o", category: "AI Processor", desc: "Powers post-op check conversations, panoramic scan narratives, and automated booking assistants." },
              { name: "LangChain Engine", category: "Workflow Orchestrator", desc: "Manages conversation logs context and connects user records to AI queries." },
              { name: "PostgreSQL & Prisma", category: "Database Layer", desc: "Fully typed, schema-validated database with secure namespacing per dental clinic." },
              { name: "Stripe Gateway", category: "Payments Gateway", desc: "Manages credit cards, phase-based installments billing, and invoice dispatching." },
              { name: "AWS S3 / R2 Storage", category: "Scans Repository", desc: "Private storage buckets for massive 3D scans and panoramic X-ray files with signed URLs." },
              { name: "FHIR API Bridge", category: "PMS Sync", desc: "Syncs scheduling and chart entries with Dentrix, Eaglesoft, or Open Dental software." },
            ].map((int, i) => (
              <motion.div
                key={int.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-panel rounded-xl p-5 border border-brand-border hover:border-brand-indigo/30 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-white">{int.name}</h4>
                  <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-brand-indigo/10 text-brand-indigo border border-brand-indigo/20">{int.category}</span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">{int.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ======================================
            TECH STACK
        ====================================== */}
        <section className="mb-28">
          <div className="text-center mb-12">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              Enterprise-grade{" "}
              <span className="text-gradient-cyan-indigo">dental technology stack</span>
            </h2>
            <p className="mt-3 text-gray-400 max-w-xl mx-auto">
              Engineered with modern frameworks that scale from local clinics to multi-city practices.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {techStack.map((stack) => (
              <div key={stack.category} className="glass-panel rounded-xl p-5 border border-brand-border">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-brand-cyan">{stack.icon}</span>
                  <h4 className="font-display font-bold text-white">{stack.category}</h4>
                </div>
                <ul className="space-y-2">
                  {stack.items.map((item) => (
                    <li key={item} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan/60" />
                      <span className="text-sm text-gray-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>


        {/* ======================================
            DATABASE SCHEMA
        ====================================== */}
        <section className="mb-28">
          <div className="glass-panel rounded-2xl p-8 border border-brand-border">
            <div className="flex items-center space-x-3 mb-8">
              <Database className="w-6 h-6 text-brand-cyan" />
              <div>
                <h2 className="font-display font-bold text-2xl text-white">Prisma Database Architecture</h2>
                <p className="text-sm text-gray-400">PostgreSQL Relational Schema - physical isolation per tenant</p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { table: "Users", fields: ["id", "name", "email", "role", "createdAt"] },
                { table: "Patients", fields: ["id", "userId", "dob", "emergencyContact"] },
                { table: "Dentists", fields: ["id", "userId", "licenseNumber", "specialty"] },
                { table: "Appointments", fields: ["id", "patientId", "dentistId", "date", "status"] },
                { table: "TreatmentPlans", fields: ["id", "patientId", "diagnosis", "status", "cost"] },
                { table: "TreatmentPhases", fields: ["id", "planId", "name", "order", "status", "cost"] },
                { table: "XRayScans", fields: ["id", "patientId", "fileUrl", "type", "aiTags"] },
                { table: "BillingInvoices", fields: ["id", "patientId", "amount", "dueDate", "paid"] },
                { table: "PaymentPlans", fields: ["id", "invoiceId", "installments", "monthlyFee"] },
                { table: "FamilyProfiles", fields: ["id", "primaryUserId", "memberPatientId", "relation"] },
                { table: "AuditLogs", fields: ["id", "userId", "action", "resource", "ipAddress"] },
                { table: "ClinicWorkspaces", fields: ["id", "name", "subdomain", "settings"] },
              ].map((t) => (
                <div key={t.table} className="bg-brand-bg/50 rounded-xl p-4 border border-brand-border hover:border-brand-cyan/30 transition-colors">
                  <p className="font-display font-bold text-brand-cyan text-sm mb-2">{t.table}</p>
                  <ul className="space-y-1">
                    {t.fields.map((f) => (
                      <li key={f} className="text-[11px] text-gray-500 font-mono">{f}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================
            FAQ
        ====================================== */}
        <section className="mb-28">
          <div className="text-center mb-14">
            <div className="inline-flex items-center space-x-2 bg-brand-indigo/10 border border-brand-indigo/20 rounded-full px-4 py-1.5 mb-4">
              <BookOpen className="w-4 h-4 text-brand-indigo" />
              <span className="text-xs font-semibold text-brand-indigo uppercase tracking-widest">FAQs</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              20 questions,{" "}
              <span className="text-gradient-cyan-indigo">answered comprehensively</span>
            </h2>
            <p className="mt-3 text-gray-400 max-w-xl mx-auto">
              Find clarity on integration scope, security parameters, user access rules, and practice templates.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              { label: "Product & Onboarding", color: "brand-cyan", count: "10" },
              { label: "Technical & Integrations", color: "brand-indigo", count: "10" },
            ].map((cat) => (
              <div key={cat.label} className={`flex items-center space-x-2 px-4 py-2 rounded-full bg-${cat.color}/10 border border-${cat.color}/20`}>
                <span className={`w-5 h-5 rounded-full bg-${cat.color}/20 flex items-center justify-center text-[10px] font-bold text-${cat.color}`}>{cat.count}</span>
                <span className={`text-xs font-semibold text-${cat.color}`}>{cat.label}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Column 1 */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2 mb-5">
                <div className="h-px flex-grow bg-brand-cyan/20" />
                <span className="text-xs font-bold text-brand-cyan uppercase tracking-widest px-3">Product & Onboarding</span>
                <div className="h-px flex-grow bg-brand-cyan/20" />
              </div>
              {faqs.slice(0, 10).map((faq, i) => (
                <motion.div
                  key={`col1-${i}`}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="glass-panel rounded-xl border border-brand-border overflow-hidden hover:border-brand-cyan/25 transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center space-x-3 px-5 py-4 text-left group"
                  >
                    <span className="w-6 h-6 rounded-lg bg-brand-cyan/10 text-brand-cyan text-[10px] font-extrabold flex items-center justify-center flex-shrink-0 group-hover:bg-brand-cyan/20 transition-colors">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-semibold text-white text-sm flex-grow leading-snug">{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform flex-shrink-0 ${openFaq === i ? "rotate-180 text-brand-cyan" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-1 ml-9">
                          <p className="text-sm text-gray-400 leading-relaxed border-l-2 border-brand-cyan/30 pl-3">{faq.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* Column 2 */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2 mb-5">
                <div className="h-px flex-grow bg-brand-indigo/20" />
                <span className="text-xs font-bold text-brand-indigo uppercase tracking-widest px-3">Technical & Integrations</span>
                <div className="h-px flex-grow bg-brand-indigo/20" />
              </div>
              {faqs.slice(10, 20).map((faq, i) => (
                <motion.div
                  key={`col2-${i}`}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="glass-panel rounded-xl border border-brand-border overflow-hidden hover:border-brand-indigo/25 transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === (i + 10) ? null : (i + 10))}
                    className="w-full flex items-center space-x-3 px-5 py-4 text-left group"
                  >
                    <span className="w-6 h-6 rounded-lg bg-brand-indigo/10 text-brand-indigo text-[10px] font-extrabold flex items-center justify-center flex-shrink-0 group-hover:bg-brand-indigo/20 transition-colors">
                      {String(i + 11).padStart(2, "0")}
                    </span>
                    <span className="font-semibold text-white text-sm flex-grow leading-snug">{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform flex-shrink-0 ${openFaq === (i + 10) ? "rotate-180 text-brand-indigo" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {openFaq === (i + 10) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-1 ml-9">
                          <p className="text-sm text-gray-400 leading-relaxed border-l-2 border-brand-indigo/30 pl-3">{faq.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================
            CTA SECTION
        ====================================== */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative glass-panel rounded-3xl p-12 border border-brand-border text-center overflow-hidden"
          >
            <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-brand-cyan/8 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-brand-indigo/8 rounded-full blur-[80px]" />

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-cyan/20 to-brand-indigo/20 border border-brand-cyan/30 mx-auto mb-6">
                <Smile className="w-8 h-8 text-brand-cyan" />
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl xl:text-5xl text-white mb-4">
                Ready to deploy your custom{" "}
                <span className="text-gradient-cyan-indigo">SmileOS platform?</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
                A complete digital dental experience for patients and clinics. Combine website development, AI assistants, visual treatment tracking, and clinic automation to stand out.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                <Link href="/demo?tab=dental" className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-brand-cyan/25">
                  <Sparkles className="w-4 h-4" />
                  <span>Explore Live Demo</span>
                </Link>
                <Link href="/contact" className="inline-flex items-center space-x-2 glass-panel border border-brand-border text-gray-300 font-semibold px-8 py-4 rounded-xl hover:border-brand-cyan/40 hover:text-white transition-all">
                  <Phone className="w-4 h-4" />
                  <span>Book a Discovery Call</span>
                </Link>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
                <a href="https://smile-os-theta.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-brand-cyan transition-colors">
                  <Globe className="w-4 h-4" />
                  <span>View SmileOS Live</span>
                </a>
                <a href="https://github.com/alimubashir822/SmileOS" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-brand-cyan transition-colors">
                  <BookOpen className="w-4 h-4" />
                  <span>View GitHub Repository</span>
                </a>
              </div>
            </div>
          </motion.div>
        </section>

      </div>
    </div>
  );
}
