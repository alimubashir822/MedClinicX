"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Sparkles, Brain, HeartPulse, FileText, Calendar,
  MessageSquare, Shield, Users, Activity, FlaskConical, Upload,
  CheckCircle, Star, TrendingUp, Lock, Bell, Zap, ChevronDown,
  LayoutDashboard, Microscope, Stethoscope, BookOpen, Phone,
  Globe, Database, Server, Clock, X, Wallet, Mic, BookMarked,
  RefreshCw, BarChart3, Building2, Syringe, Smile, Heart,
  AlertTriangle, CloudUpload, ShieldCheck, Eye, UserCog,
} from "lucide-react";

/* --- Types --- */
interface Feature { icon: React.ReactNode; title: string; desc: string; badge?: string; }
interface Differentiator { icon: React.ReactNode; title: string; subtitle: string; desc: string; color: string; glow: string; }
interface FAQ { q: string; a: string; }

/* =======================================================
   DATA
======================================================= */

const coreFeatures: Feature[] = [
  { icon: <Brain className="w-5 h-5" />, title: "AI Health Companion", desc: "A conversational AI that knows your complete health journey - answers questions, explains reports, and prepares you for every doctor visit.", badge: "Flagship" },
  { icon: <HeartPulse className="w-5 h-5" />, title: "Visual Health Timeline", desc: "\"Your Health Story\" - a beautiful visual timeline of every condition, medication change, lab result, and visit, narrated by AI in plain language.", badge: "Unique" },
  { icon: <Calendar className="w-5 h-5" />, title: "Smart Appointment Booking", desc: "Select department, doctor, date, and time in seconds. AI pre-fills your history and generates a doctor brief automatically before each visit.", badge: "Smart" },
  { icon: <FileText className="w-5 h-5" />, title: "AI Document Understanding", desc: "Upload any medical PDF - blood test, MRI, prescription. AI reads it, highlights abnormal values, and explains every term in simple words." },
  { icon: <FlaskConical className="w-5 h-5" />, title: "Lab Results System", desc: "Structured lab result cards with normal/abnormal indicators, trend graphs, and one-click sharing with your doctor." },
  { icon: <Users className="w-5 h-5" />, title: "Family Health Hub", desc: "Manage the health of your entire family - parents, children, and spouse - from one unified dashboard with separate profiles.", badge: "New" },
  { icon: <MessageSquare className="w-5 h-5" />, title: "Secure Messaging", desc: "HIPAA-compliant encrypted messaging between patients and care teams. No third-party apps, no data leaks." },
  { icon: <Shield className="w-5 h-5" />, title: "Data Ownership & Privacy", desc: "Your health data belongs to you. Export everything, control sharing permissions, and view a complete audit log of who accessed your data." },
  { icon: <Bell className="w-5 h-5" />, title: "Preventive Care Engine", desc: "AI-powered reminders for vaccinations, annual checkups, prescription refills, and follow-ups - personalized to your health profile." },
  { icon: <Wallet className="w-5 h-5" />, title: "Healthcare Wallet", desc: "Store insurance cards, prescriptions, lab reports, and medical bills in one secure digital wallet - always accessible, always organized." },
  { icon: <Mic className="w-5 h-5" />, title: "Voice AI Commands", desc: "Speak naturally: \"Book my dentist appointment for next Tuesday.\" The AI understands, books, and confirms - hands-free healthcare management." },
  { icon: <BookMarked className="w-5 h-5" />, title: "Patient Education Engine", desc: "After every visit, AI creates personalized learning content: exercises, preparation guides, and explanations tailored to your diagnosis." },
];

const differentiators: Differentiator[] = [
  { icon: <Activity className="w-7 h-7" />, title: "AI Health Timeline", subtitle: "\"Your Health Story\" - not just a list of records", desc: "A visual, narrative timeline that transforms raw medical data into a personal health story. AI narrates improvements: \"Your cholesterol improved 18% after lifestyle changes.\"", color: "from-brand-cyan/20 to-brand-indigo/10", glow: "rgba(6,182,212,0.15)" },
  { icon: <Brain className="w-7 h-7" />, title: "AI Health Memory", subtitle: "Remembers everything so you don't have to", desc: "Unlike portals that just store data, our platform remembers context. Ask \"Why did my doctor prescribe this?\" - AI already knows: \"You started this after your June 2025 visit for back pain.\"", color: "from-brand-indigo/20 to-purple-500/10", glow: "rgba(99,102,241,0.15)" },
  { icon: <Stethoscope className="w-7 h-7" />, title: "AI Appointment Prep", subtitle: "Walk into every appointment fully prepared", desc: "Before each visit, AI interviews you about symptoms, changes, and questions - then auto-generates a doctor brief so your physician understands your status before you walk in.", color: "from-brand-emerald/20 to-brand-cyan/10", glow: "rgba(16,185,129,0.15)" },
  { icon: <Microscope className="w-7 h-7" />, title: "AI Document Reading", subtitle: "Upload PDF → Get plain-English explanation", desc: "Upload Blood_Report.pdf. AI reads it, flags Vitamin D below normal, explains hemoglobin levels, and suggests what to discuss with your doctor - instantly.", color: "from-amber-500/20 to-orange-500/10", glow: "rgba(245,158,11,0.15)" },
  { icon: <TrendingUp className="w-7 h-7" />, title: "Health Score Dashboard", subtitle: "Your wellness at a glance", desc: "A real-time health score card covering medications, upcoming appointments, pending lab reviews, and preventive care status - all color-coded and actionable.", color: "from-rose-500/20 to-pink-500/10", glow: "rgba(244,63,94,0.15)" },
  { icon: <Users className="w-7 h-7" />, title: "Family Health Hub", subtitle: "One dashboard, entire family covered", desc: "Most portals focus on one patient. Our platform lets you manage parents, children, and spouse with individual profiles, shared appointments, and cross-family AI health insights.", color: "from-violet-500/20 to-brand-indigo/10", glow: "rgba(139,92,246,0.15)" },
];

const portalModules = [
  { icon: <LayoutDashboard className="w-5 h-5" />, title: "Patient Overview", items: ["Health Score Card", "Upcoming Appointments", "Recent Documents", "AI Health Alerts"] },
  { icon: <HeartPulse className="w-5 h-5" />, title: "Medical History", items: ["Active Conditions", "Allergies & Medications", "Previous Visits", "Health Timeline"] },
  { icon: <Upload className="w-5 h-5" />, title: "Documents", items: ["Upload Reports, X-rays, Prescriptions", "AI Document Analysis", "Category Filters", "Share with Doctor"] },
  { icon: <FlaskConical className="w-5 h-5" />, title: "Lab Results", items: ["Structured Result Cards", "Normal / Abnormal Flags", "Trend Graphs", "Download & Share"] },
  { icon: <Calendar className="w-5 h-5" />, title: "Appointments", items: ["Department → Doctor → Slot flow", "AI Pre-Appointment Brief", "Status Tracking", "Reschedule / Cancel"] },
  { icon: <Brain className="w-5 h-5" />, title: "AI Assistant", items: ["Explain lab reports", "Prepare doctor questions", "Medical terminology help", "Appointment coaching"] },
  { icon: <MessageSquare className="w-5 h-5" />, title: "Messages", items: ["Encrypted patient-doctor chat", "Message history", "File attachments", "Read receipts"] },
  { icon: <Users className="w-5 h-5" />, title: "Family Hub", items: ["Add family members", "Separate health profiles", "Shared appointment calendar", "Consolidated health view"] },
];

const techStack = [
  { category: "Frontend", items: ["Next.js 15 App Router", "TypeScript", "Tailwind CSS", "shadcn/ui", "Framer Motion"], icon: <Globe className="w-5 h-5" /> },
  { category: "Backend", items: ["Next.js API Routes", "Server Actions", "Zod Validation", "React Hook Form"], icon: <Server className="w-5 h-5" /> },
  { category: "Database", items: ["PostgreSQL", "Prisma ORM", "Secure migrations", "Audit logging"], icon: <Database className="w-5 h-5" /> },
  { category: "AI & Security", items: ["OpenAI GPT-4o", "LangChain", "Auth.js / Clerk", "AWS S3 / R2 Storage"], icon: <Lock className="w-5 h-5" /> },
];


const useCases = [
  {
    icon: <Smile className="w-6 h-6" />,
    specialty: "Dental Practice",
    color: "brand-cyan",
    scenario: "Patient books a dental implant procedure",
    journey: [
      "Patient logs in, selects Oral Surgery department",
      "Books consultation with Dr. Ahmed - AI pre-fills dental history",
      "After consultation, AI creates an Implant Journey timeline",
      "Step-by-step: Consultation  → X-ray → Treatment Plan → Procedure → Follow-up",
      "AI sends personalized recovery care instructions post-procedure",
      "Patient uploads follow-up X-ray - AI compares with baseline"
    ],
    outcome: "Dental clinics report 60% fewer front-desk calls and 40% better patient compliance with follow-up care."
  },
  {
    icon: <Heart className="w-6 h-6" />,
    specialty: "Cardiology Clinic",
    color: "rose-400",
    scenario: "Managing a chronic heart condition patient",
    journey: [
      "Patient uploads monthly ECG report - AI reads and explains the results",
      "AI Health Timeline shows: \"BP improved 12% over 6 months\"",
      "Medication tracker shows daily adherence rate: 94%",
      "Preventive Care Engine flags: \"Annual stress test due in 3 weeks\"",
      "AI appointment prep generates cardiac symptom checklist for next visit",
      "Doctor receives pre-brief: trends, recent reports, patient concerns"
    ],
    outcome: "Cardiologists reduce 30% of routine follow-up calls because patients proactively monitor their own data."
  },
  {
    icon: <Syringe className="w-6 h-6" />,
    specialty: "Pediatric Clinic",
    color: "brand-emerald",
    scenario: "Parent managing child's vaccination schedule",
    journey: [
      "Parent creates a child profile under Family Health Hub",
      "AI generates a complete vaccination schedule based on age and location",
      "Bell reminder: \"MMR vaccine due in 5 days\"",
      "Parent books pediatric appointment - doctor receives vaccination history pre-brief",
      "After visit, parent uploads vaccine record - AI updates the schedule",
      "AI Education Engine sends: \"What to expect after the MMR vaccine\" guide"
    ],
    outcome: "Pediatric clinics see 70% reduction in missed vaccinations among families using the platform."
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    specialty: "Hospital Network",
    color: "brand-indigo",
    scenario: "Multi-department patient journey across specialists",
    journey: [
      "Patient referred from GP to Neurology - full history auto-transfers",
      "Neurologist sees AI summary: previous MRI, GP notes, medications",
      "Patient books MRI - uploads result PDF - AI reads and explains it",
      "Neurology refers to Physiotherapy - AI creates treatment journey",
      "Admin dashboard tracks patient across departments in real-time",
      "Patient receives consolidated billing and discharge summary in healthcare wallet"
    ],
    outcome: "Hospital networks eliminate data silos between departments, reducing duplicate tests by 35%."
  },
];

const securityFeatures = [
  { icon: <Lock className="w-5 h-5" />, title: "AES-256 Encryption", desc: "All patient data encrypted at rest and in transit. Zero-knowledge architecture ensures no unencrypted data ever touches the server." },
  { icon: <ShieldCheck className="w-5 h-5" />, title: "Role-Based Access Control", desc: "Patients, doctors, and admins each have strictly scoped permissions. Doctors can only see their assigned patients. Admins cannot read message content." },
  { icon: <Eye className="w-5 h-5" />, title: "Full Audit Logging", desc: "Every data access event is logged: who accessed what, when, and from which IP. Patients can view their own audit trail at any time." },
  { icon: <UserCog className="w-5 h-5" />, title: "Patient-Controlled Sharing", desc: "Patients grant and revoke access to their records. Sharing a document with a doctor is a deliberate, consent-based action - not automatic." },
  { icon: <RefreshCw className="w-5 h-5" />, title: "Data Portability", desc: "Export your complete health record as a portable JSON or PDF at any time. Data belongs to the patient, not the platform." },
  { icon: <AlertTriangle className="w-5 h-5" />, title: "Breach Detection", desc: "Automated anomaly detection on access patterns. Unusual login locations or mass data access triggers immediate alerts and account lockout." },
  { icon: <CloudUpload className="w-5 h-5" />, title: "Secure File Storage", desc: "Documents stored in AWS S3 or Cloudflare R2 with signed URLs. No public URLs. Files expire after a set access window." },
  { icon: <Database className="w-5 h-5" />, title: "Database Isolation", desc: "Multi-tenant architecture with per-clinic database namespacing. One clinic's data is physically isolated from another's." },
];

const integrations = [
  { name: "OpenAI GPT-4o", category: "AI Engine", desc: "Powers the AI Health Companion, document understanding, appointment briefs, and health timeline narration." },
  { name: "LangChain", category: "AI Framework", desc: "Orchestrates AI workflows, manages conversation memory, and connects patient context to AI responses." },
  { name: "PostgreSQL + Prisma", category: "Database", desc: "Fully typed, schema-validated database layer with audit logging, migrations, and connection pooling." },
  { name: "Clerk / Auth.js", category: "Authentication", desc: "Enterprise-grade auth with MFA, social login, session management, and role-based access." },
  { name: "AWS S3 / Cloudflare R2", category: "File Storage", desc: "Secure, scalable cloud storage for medical documents, lab reports, and imaging files." },
  { name: "Stripe", category: "Payments", desc: "Subscription billing for clinics, appointment payments, and invoice management." },
  { name: "Twilio / SendGrid", category: "Notifications", desc: "SMS and email reminders for appointments, lab results, and preventive care alerts." },
  { name: "FHIR API", category: "EHR Integration", desc: "HL7 FHIR-compatible API layer allows integration with existing Electronic Health Record systems." },
  { name: "Vercel", category: "Deployment", desc: "Edge-optimized deployment with automatic scaling, zero-downtime deployments, and global CDN." },
];



const stats = [
  { value: "8+", label: "Patient Portal Modules", icon: <LayoutDashboard className="w-5 h-5" /> },
  { value: "3", label: "User Roles", icon: <Users className="w-5 h-5" /> },
  { value: "12+", label: "AI-Powered Features", icon: <Brain className="w-5 h-5" /> },
  { value: "100%", label: "Data Owned by Patient", icon: <Shield className="w-5 h-5" /> },
  { value: "4", label: "Deployment Phases", icon: <TrendingUp className="w-5 h-5" /> },
  { value: "9", label: "Platform Integrations", icon: <RefreshCw className="w-5 h-5" /> },
];

const faqs: FAQ[] = [
  // Column 1 - Platform & Product
  { q: "Is patient data secure and HIPAA compliant?", a: "Yes. All data is encrypted at rest and in transit using AES-256. We implement role-based access control, a full audit log of every data access event, and patient-controlled sharing permissions. Patients own their data and can export or delete it at any time." },
  { q: "Will the AI diagnose medical conditions?", a: "No. The AI Health Companion is positioned as a healthcare information assistant. It explains reports, defines medical terms, and helps patients prepare questions for their doctor. It does not diagnose, prescribe medication, or replace professional medical advice." },
  { q: "Can this work for a single clinic or a hospital network?", a: "Yes. The platform scales from a solo practitioner to a multi-clinic hospital network. Phase 4 includes multi-tenant support, allowing separate workspaces for each clinic while sharing infrastructure." },
  { q: "What file types can be uploaded to the document vault?", a: "PDFs (lab reports, prescriptions, discharge summaries), images (X-rays, MRI scans, ultrasounds), and standard document formats. Files are stored in AWS S3 or Cloudflare R2 and are only accessible to authorized team members." },
  { q: "Does the Doctor Dashboard have AI assistance too?", a: "Yes. Before opening a patient record, the AI generates a visit summary: last visit notes, active medications, recent lab results, and patient-submitted pre-appointment questions. Doctors save 5-10 minutes per patient." },
  { q: "How does the AI Appointment Brief work?", a: "Before each appointment, the AI sends a short interview to the patient asking about symptom changes, new medications, and questions. The AI compiles this into a structured brief automatically shared with the doctor, improving appointment quality dramatically." },
  { q: "Can family members have separate profiles?", a: "Yes. The Family Health Hub allows one account holder to manage separate health profiles for parents, spouse, and children. Each profile has its own medical history, appointments, documents, and lab results. Shared calendars show all family appointments in one view." },
  { q: "How is the Health Score calculated?", a: "The AI Health Score is based on: medication adherence, preventive care status, pending lab reviews, appointment frequency, and documented conditions. It is a general wellness indicator, not a clinical diagnostic score." },
  { q: "What integrations does the platform support?", a: "The platform supports EHR systems via FHIR APIs, payment gateways (Stripe), email and SMS notifications (SendGrid, Twilio), and cloud file storage (AWS S3, Cloudflare R2). Custom integrations can be built for existing clinic management software." },
  { q: "How long does implementation take?", a: "For a single clinic MVP (Phase 1), implementation takes approximately 4-6 weeks. Full platform with AI layer (Phase 3) takes 3-4 months. Enterprise multi-clinic rollout is scoped individually based on data migration requirements." },
  // Column 2 - Technical & Features
  { q: "What database technology does the platform use?", a: "PostgreSQL with Prisma ORM as the typed data layer. The schema includes 12+ tables: Users, Patients, Doctors, Appointments, MedicalRecords, Documents, LabResults, Messages, FamilyMembers, AuditLogs, Notifications, and Clinics. All migrations are version-controlled and rollback-safe." },
  { q: "How does the Voice AI feature work?", a: "Patients can speak commands naturally: 'Book my dentist appointment for next Tuesday at 10am.' The Voice AI uses speech-to-text, processes the intent via the AI Health Companion, checks available slots, and confirms the booking - all hands-free." },
  { q: "What happens when a patient uploads a medical report?", a: "The document is stored securely in the cloud. An AI pipeline reads the PDF, extracts key values (e.g., Hemoglobin, Vitamin D, LDL), compares against normal ranges, highlights abnormal values in red, explains each term in plain language, and creates a patient-readable summary card." },
  { q: "Can doctors add notes and treatment plans?", a: "Yes. The Doctor Dashboard includes a rich text treatment notes editor. Notes are versioned, timestamped, and linked to specific appointments or visits. AI can summarize previous notes before each new appointment to give the doctor instant context." },
  { q: "Is there a mobile app?", a: "The platform is built as a Progressive Web App (PWA) with full mobile-responsive design. It installs on iOS and Android like a native app. A dedicated React Native app is planned for Phase 5 with push notifications and offline access to key records." },
  { q: "How is multi-clinic support handled?", a: "Each clinic gets a separate workspace (tenant) within the platform. Patient data is namespaced per clinic. Doctors belong to one or more clinics. Admins manage their clinic independently. A super-admin layer can monitor all clinics from a centralized dashboard." },
  { q: "Does the platform support telemedicine or video calls?", a: "Phase 4 includes integration with video call providers (Zoom SDK, Daily.co) for virtual consultations. Doctors can initiate video appointments from the dashboard, and patients join from the portal. Session notes and recordings link to the patient record." },
  { q: "What analytics does the Admin Dashboard provide?", a: "Admins see: total active patients, appointments by department and doctor, document uploads by category, AI assistant usage, lab result trends, user growth, platform health metrics, and revenue tracking (if Stripe billing is enabled)." },
  { q: "How are notifications and reminders sent?", a: "Notifications are delivered via in-app alerts, email (SendGrid), and SMS (Twilio). The Preventive Care Engine auto-triggers reminders for: upcoming appointments (48h before), lab result availability, prescription refill dates, vaccination schedules, and annual checkup dues." },
  { q: "What is the Healthcare Wallet?", a: "The Healthcare Wallet is a secure digital storage layer within each patient account. It holds: insurance cards, prescription history, past medical bills, lab reports, discharge summaries, and vaccination records - all categorized, searchable, and exportable as a PDF or HL7 FHIR bundle." },
];

/* =======================================================
   COMPONENT
======================================================= */
export default function AIPatientPortalPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeUseCase, setActiveUseCase] = useState(0);

  // Interactive Mock Dashboard States
  const [activeDashboardTab, setActiveDashboardTab] = useState("Dashboard");
  const [dashboardChat, setDashboardChat] = useState([
    { sender: "ai", text: "Hello Mubashir! I've reviewed your latest blood test. Your Hemoglobin is normal, but your Vitamin D is slightly below range (18 ng/mL). Would you like me to explain what this means?" }
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
          <span className="text-white">AI Patient Portal Platform</span>
        </div>

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
                <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest">AI Patient Portal Platform</span>
                <Sparkles className="w-3 h-3 text-brand-cyan" />
              </div>

              {/* Headline */}
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl xl:text-5xl text-white leading-[1.15] tracking-tight">
                Your Health Records.<br />
                <span className="text-gradient-cyan-indigo">Appointments. Care Team.</span><br />
                <span className="text-gradient-emerald-cyan">All in One</span> Secure Platform.
              </h1>

              {/* Subtitle */}
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                A secure, AI-powered patient platform that transforms the healthcare experience - from a simple record store into an <span className="text-white font-semibold">intelligent healthcare companion</span> that understands your complete health journey.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/demo?tab=patient"
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
                  { icon: <Lock className="w-3.5 h-3.5 text-brand-cyan" />, label: "End-to-End Encrypted", bg: "bg-brand-cyan/10 border-brand-cyan/20" },
                  { icon: <CheckCircle className="w-3.5 h-3.5 text-brand-indigo" />, label: "Role-Based Access", bg: "bg-brand-indigo/10 border-brand-indigo/20" },
                  { icon: <Star className="w-3.5 h-3.5 text-amber-400" />, label: "Patient-Owned", bg: "bg-amber-400/10 border-amber-400/20" },
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
                      <HeartPulse className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="font-display font-bold text-white text-xs tracking-wide">PatientIQ Portal</span>
                  </div>
                  
                  {/* Status */}
                  <div className="flex items-center space-x-2 bg-brand-emerald/10 border border-brand-emerald/25 rounded-full px-2.5 py-1">
                    <div className="w-1.5 h-1.5 bg-brand-emerald rounded-full animate-pulse" />
                    <span className="text-[10px] text-brand-emerald font-semibold">Mubashir Ali (Online)</span>
                  </div>
                </div>

                {/* Dashboard Inner Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-brand-border h-[430px]">
                  
                  {/* Sidebar (3 cols) */}
                  <div className="md:col-span-4 p-4 space-y-1.5 bg-white/[0.01]">
                    <p className="text-[9px] text-gray-500 uppercase font-bold tracking-wider mb-2 px-2">Navigation</p>
                    {[
                      { id: "Dashboard", label: "Overview", icon: <LayoutDashboard className="w-3.5 h-3.5" /> },
                      { id: "LabResults", label: "Lab Results", icon: <FlaskConical className="w-3.5 h-3.5" /> },
                      { id: "AIAssistant", label: "AI Companion", icon: <Brain className="w-3.5 h-3.5" /> },
                      { id: "Documents", label: "Health Vault", icon: <FileText className="w-3.5 h-3.5" /> },
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
                      <p className="text-[9px] text-gray-500 uppercase font-bold tracking-wider mb-2 px-2">Care Team</p>
                      <div className="flex items-center space-x-2 px-2 py-1">
                        <div className="w-6 h-6 rounded-full bg-brand-indigo/20 flex items-center justify-center text-[10px] font-bold text-brand-indigo">
                          DS
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-white">Dr. Sarah Stone</p>
                          <p className="text-[8px] text-gray-500">Cardiologist</p>
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
                          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Health Dashboard</h4>
                          <span className="text-[10px] text-gray-500 font-mono">Last Sync: Just now</span>
                        </div>

                        {/* Top Cards row */}
                        <div className="grid grid-cols-2 gap-3">
                          {/* Score Card */}
                          <div className="bg-gradient-to-br from-brand-cyan/10 to-brand-indigo/5 rounded-xl p-3.5 border border-brand-cyan/15">
                            <span className="text-[9px] text-gray-500 block">AI Health Score</span>
                            <div className="flex items-end space-x-1.5 mt-0.5 mb-1.5">
                              <span className="text-3xl font-display font-extrabold text-white">87</span>
                              <span className="text-[10px] text-brand-cyan font-bold mb-1">/100</span>
                            </div>
                            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden mb-1">
                              <div className="h-full w-[87%] bg-gradient-to-r from-brand-cyan to-brand-indigo rounded-full" />
                            </div>
                            <span className="text-[8px] text-brand-emerald font-semibold">^ +4 points this month</span>
                          </div>

                          {/* Insight Alert */}
                          <div className="bg-brand-indigo/5 rounded-xl p-3.5 border border-brand-indigo/15 flex flex-col justify-between">
                            <div>
                              <div className="flex items-center space-x-1 mb-1">
                                <Sparkles className="w-3 h-3 text-brand-cyan" />
                                <span className="text-[9px] text-brand-cyan font-bold uppercase">AI Health Alert</span>
                              </div>
                              <p className="text-[10px] text-gray-300 leading-snug">
                                Vitamin D is low (<span className="text-amber-400 font-semibold">18 ng/mL</span>). Discuss with Dr. Sarah tomorrow.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Timeline snippet */}
                        <div className="glass-panel rounded-xl p-3 border border-brand-border bg-white/[0.01]">
                          <p className="text-[9px] text-gray-500 font-bold uppercase tracking-wider mb-2">Upcoming Appointment</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <div className="w-8 h-8 rounded-lg bg-brand-indigo/10 flex items-center justify-center text-brand-indigo">
                                <Calendar className="w-4 h-4" />
                              </div>
                              <div>
                                <p className="text-xs font-bold text-white">Cardiology Consult</p>
                                <p className="text-[9px] text-gray-500">Tomorrow at 10:30 AM · Dr. Sarah Stone</p>
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

                    {activeDashboardTab === "LabResults" && (
                      <div className="space-y-3.5 flex-grow">
                        <div className="flex justify-between items-center">
                          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Latest Lab Panel</h4>
                          <span className="text-[9px] bg-brand-cyan/10 border border-brand-cyan/20 rounded-full px-2 py-0.5 text-brand-cyan text-[8px] font-bold">3 Tests</span>
                        </div>

                        <div className="space-y-2.5">
                          {[
                            { name: "Vitamin D, 25-Hydroxy", value: "18 ng/mL", range: "30 - 100 ng/mL", status: "Low", color: "text-rose-400 bg-rose-400/10 border-rose-400/20" },
                            { name: "Hemoglobin", value: "14.2 g/dL", range: "13.8 - 17.2 g/dL", status: "Normal", color: "text-brand-emerald bg-brand-emerald/10 border-brand-emerald/20" },
                            { name: "Thyroid Stimulating Hormone (TSH)", value: "2.1 mIU/L", range: "0.4 - 4.0 mIU/L", status: "Normal", color: "text-brand-emerald bg-brand-emerald/10 border-brand-emerald/20" },
                          ].map((test) => (
                            <div key={test.name} className="glass-panel rounded-xl p-3 border border-brand-border flex items-center justify-between">
                              <div>
                                <p className="text-xs font-semibold text-white">{test.name}</p>
                                <p className="text-[9px] text-gray-500">Reference: {test.range}</p>
                              </div>
                              <div className="text-right">
                                <p className="text-xs font-bold text-white">{test.value}</p>
                                <span className={`inline-block text-[8px] font-extrabold px-1.5 py-0.5 rounded-full border mt-0.5 ${test.color}`}>
                                  {test.status}
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
                            <span>AI Health Companion</span>
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
                              { q: "Explain Vitamin D deficiency", a: "Vitamin D helps your body absorb calcium for bone health. Levels below 20 ng/mL are considered low. Your level of 18 ng/mL is a mild deficiency, which can be improved with diet or supplements." },
                              { q: "What should I ask Dr. Sarah?", a: "You should ask: 1. Should I take a Vitamin D supplement? 2. What dosage is appropriate for 18 ng/mL? 3. When should we retest? I have pre-filled these into your pre-appointment brief." },
                              { q: "Show my doctor brief", a: "Here is your Doctor Brief summary:\n• Condition: Mild Vitamin D Deficiency (18 ng/mL)\n• Recommendation: Request supplement advice\n• Status: Automatically shared with Dr. Sarah's dashboard." },
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

                    {activeDashboardTab === "Documents" && (
                      <div className="space-y-4 flex-grow flex flex-col justify-center">
                        <div className="border border-dashed border-brand-cyan/35 bg-brand-cyan/5 rounded-2xl p-6 text-center hover:border-brand-cyan/50 hover:bg-brand-cyan/10 transition-all cursor-pointer">
                          <CloudUpload className="w-8 h-8 text-brand-cyan mx-auto mb-2 animate-bounce" />
                          <p className="text-xs font-bold text-white">Upload Diagnostic Reports</p>
                          <p className="text-[10px] text-gray-500 mt-1 max-w-[220px] mx-auto">
                            Drag and drop any lab results, prescriptions, or MRI PDFs. AI will analyze them instantly.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Bottom active tab navigation helper on mobile */}
                    <div className="text-[9px] text-gray-500 text-center border-t border-brand-border/60 pt-2 flex items-center justify-between">
                      <span>Click tabs in navigation sidebar to explore solution features.</span>
                      <Brain className="w-3 h-3 text-brand-cyan" />
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
              <span className="text-xs font-semibold text-brand-indigo uppercase tracking-widest">What Makes It Different</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              Not just a portal -{" "}
              <span className="text-gradient-cyan-indigo">an intelligent healthcare companion</span>
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Every healthcare platform has patient login, appointments, and document upload. We went further. Here is what sets the AI Patient Portal apart from every competitor.
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
              Old platforms vs{" "}
              <span className="text-gradient-emerald-cyan">AI Patient Portal</span>
            </h2>
            <p className="mt-3 text-gray-400 max-w-xl mx-auto">
              The difference between storing data and understanding it.
            </p>
          </div>

          <div className="glass-panel rounded-2xl border border-brand-border overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 bg-white/3 border-b border-brand-border">
              <div className="p-5 text-xs font-bold text-gray-500 uppercase tracking-wider">Feature</div>
              <div className="p-5 text-center border-x border-brand-border">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Traditional Portal</p>
              </div>
              <div className="p-5 text-center bg-brand-cyan/5">
                <p className="text-xs font-bold text-brand-cyan uppercase tracking-wider">AI Patient Portal</p>
              </div>
            </div>
            {[
              ["Patient Records", "Store PDFs", "Store + AI reads, explains, highlights abnormalities"],
              ["Appointments", "Basic calendar booking", "Smart booking + AI pre-appointment brief for doctor"],
              ["Lab Results", "View PDF", "Structured cards, trend graphs, AI explanation, doctor share"],
              ["AI Assistant", "None / generic chatbot", "Context-aware AI that knows your complete health history"],
              ["Medical Documents", "Upload & store only", "Upload → AI reads → explains → highlights → summarizes"],
              ["Patient Preparation", "None", "AI interviews patient before each visit, creates doctor brief"],
              ["Health Tracking", "Manual entry", "Automated AI Health Score with trend analysis"],
              ["Family Management", "Single patient only", "Full Family Health Hub with individual profiles"],
              ["Data Ownership", "Platform-controlled", "Patient-owned, exportable, revocable access controls"],
              ["Post-Visit Care", "None", "AI Education Engine creates personalized recovery guides"],
              ["Voice Interface", "None", "Voice commands for booking, questions, and navigation"],
              ["Health Timeline", "Date-sorted list", "Visual narrative timeline with AI-generated health story"],
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
              <span className="text-gradient-cyan-indigo">connected patient</span>
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Here is how a patient named Ahmed uses the AI Patient Portal throughout a single health episode - from symptom to recovery.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-brand-cyan via-brand-indigo via-brand-emerald to-amber-400 hidden lg:block" />
            <div className="space-y-6">
              {[
                {
                  time: "Monday 8:00 AM",
                  title: "Symptom appears - Ahmed opens the app",
                  desc: "Ahmed notices chest discomfort. He opens the AI Health Companion and types his symptoms. The AI does not diagnose - instead it says: \"Based on your cardiac history, this is worth discussing with Dr. Sarah. Would you like me to book an appointment?\"",
                  color: "brand-cyan",
                  tag: "AI Companion",
                },
                {
                  time: "Monday 8:05 AM",
                  title: "Appointment booked in 90 seconds",
                  desc: "Ahmed selects Cardiology → Dr. Sarah → Tomorrow 10:30 AM. The system confirms the slot and immediately triggers the AI Pre-Appointment Interview: \"Has your chest pain frequency changed? Are you taking your blood thinners daily?\"",
                  color: "brand-indigo",
                  tag: "Smart Booking",
                },
                {
                  time: "Monday Evening",
                  title: "AI generates doctor brief",
                  desc: "Based on Ahmed's interview responses and his medical history, the AI creates a structured brief: Chief Complaint, Recent Symptoms, Medication Status, Patient Questions (3 items). Dr. Sarah receives this before the appointment.",
                  color: "brand-emerald",
                  tag: "AI Brief",
                },
                {
                  time: "Tuesday 10:30 AM",
                  title: "Doctor sees everything before saying hello",
                  desc: "Dr. Sarah opens the Doctor Dashboard. Before Ahmed enters the room, she has already reviewed: his last 3 visits, current medications, the patient-generated brief, and his latest ECG from 3 months ago. The appointment is focused and efficient.",
                  color: "amber-400",
                  tag: "Doctor Dashboard",
                },
                {
                  time: "Tuesday Afternoon",
                  title: "Lab test ordered - results explained by AI",
                  desc: "Dr. Sarah orders a blood panel. The lab uploads results directly to the portal. Ahmed receives a notification. He opens Lab Results and the AI has already analyzed the report: \"Your Troponin levels are normal - this is a good sign. Your LDL is slightly elevated.\"",
                  color: "brand-cyan",
                  tag: "Lab AI",
                },
                {
                  time: "One Week Later",
                  title: "Health Timeline updated with the full episode",
                  desc: "Ahmed's Health Timeline now shows the complete story: Symptom → Appointment → Blood Test → Medication Change. The AI narrates: \"Your LDL decreased 11% after starting the new medication. Keep it up.\" His Health Score improved by 3 points.",
                  color: "brand-indigo",
                  tag: "Health Timeline",
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
              <span className="text-xs font-semibold text-brand-emerald uppercase tracking-widest">Full Feature Set</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              Everything a patient needs,{" "}
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
                <span className="text-xs font-semibold text-brand-cyan uppercase tracking-widest">Patient Navigation</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-4">
                Every module patients{" "}
                <span className="text-gradient-cyan-indigo">actually need</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                The patient portal is built as a modular system. Each section is purpose-built, with AI assistance embedded throughout - not bolted on afterward.
              </p>
              <div className="glass-panel rounded-xl p-5 border border-brand-border">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Appointment Booking Flow</p>
                <div className="flex items-center flex-wrap gap-2">
                  {["Select Department", "Select Doctor", "Choose Date & Time", "AI Pre-Brief", "Confirm"].map((step, i, arr) => (
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
            AI HEALTH TIMELINE SHOWCASE
        ====================================== */}
        <section className="mb-28">
          {/* Section header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center space-x-2 bg-brand-cyan/10 border border-brand-cyan/20 rounded-full px-4 py-1.5 mb-4">
              <Activity className="w-4 h-4 text-brand-cyan" />
              <span className="text-xs font-semibold text-brand-cyan uppercase tracking-widest">AI Health Timeline</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              Your complete health story,{" "}
              <span className="text-gradient-cyan-indigo">told by AI</span>
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Instead of a boring list of PDFs, the AI Health Timeline transforms raw medical data into a visual, narrative health story - complete with AI-written insights and milestone celebrations.
            </p>
          </div>

          {/* Vertical timeline - same layout as Patient Journey */}
          <div className="relative mb-10">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-brand-cyan via-brand-indigo via-amber-400 to-brand-emerald hidden lg:block" />
            <div className="space-y-6">
              {[
                {
                  year: "2021", event: "First Diagnosis",
                  detail: "Type 2 Diabetes detected · Started Metformin 500mg",
                  color: "brand-cyan",
                  ai: "", category: "Diagnosis"
                },
                {
                  year: "2022", event: "Medication Adjusted",
                  detail: "Metformin increased to 1000mg · HbA1c improved from 8.2 = 7.1",
                  color: "brand-indigo",
                  ai: "HbA1c improved 13.4% - excellent response to medication. Keep it up.", category: "Treatment"
                },
                {
                  year: "2023", event: "Annual Blood Panel",
                  detail: "Cholesterol slightly elevated · LDL 142 mg/dL · Added dietary recommendations",
                  color: "amber-400",
                  ai: "LDL above optimal range. Diet modification initiated. Retest in 3 months recommended.", category: "Lab Results"
                },
                {
                  year: "2024", event: "Lifestyle Milestone",
                  detail: "Lost 8kg · Exercise routine established · Blood pressure normalized to 118/76",
                  color: "brand-emerald",
                  ai: "Cholesterol improved 18% after lifestyle changes. This is outstanding progress - you are in control of your health.", category: "Milestone"
                },
                {
                  year: "2025", event: "Specialist Referral",
                  detail: "Cardiology consult with Dr. Sarah · Stress test passed · Continue current treatment",
                  color: "brand-cyan",
                  ai: "Heart function normal. Stress test results excellent. Current treatment plan is optimal.", category: "Specialist"
                },
                {
                  year: "2026", event: "Today - Thriving",
                  detail: "HbA1c: 6.4% · BP: 118/76 · LDL: 112 mg/dL · All markers within normal range",
                  color: "brand-emerald",
                  ai: "Health Score: 87/100. You are in the top 20% for diabetes management. Exceptional health journey.", category: "Current"
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
                  {/* Year circle indicator */}
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

          {/* 4 feature callouts below the timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: <Activity className="w-5 h-5" />, title: "Chronological Narrative", desc: "Every diagnosis, lab result, and visit arranged with full AI context.", color: "brand-cyan" },
              { icon: <Brain className="w-5 h-5" />, title: "AI-Written Insights", desc: "The AI analyzes trends and writes readable insights: \"BP improved 12%.\"", color: "brand-indigo" },
              { icon: <Star className="w-5 h-5" />, title: "Milestone Celebrations", desc: "Health improvements are highlighted - building patient motivation.", color: "brand-emerald" },
              { icon: <Stethoscope className="w-5 h-5" />, title: "Doctor Context", desc: "Doctors get instant AI context before opening a patient record.", color: "amber-400" },
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
            AI ASSISTANT SHOWCASE
        ====================================== */}
        <section className="mb-28">
          <div className="glass-panel rounded-2xl border border-brand-border overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 border-r border-brand-border">
                <div className="inline-flex items-center space-x-2 bg-brand-indigo/10 border border-brand-indigo/20 rounded-full px-4 py-1.5 mb-6">
                  <Brain className="w-4 h-4 text-brand-indigo" />
                  <span className="text-xs font-semibold text-brand-indigo uppercase tracking-widest">AI Health Companion</span>
                </div>
                <h2 className="font-display font-extrabold text-3xl text-white mb-4">
                  Your personal{" "}
                  <span className="text-gradient-cyan-indigo">healthcare brain</span>
                </h2>
                <p className="text-gray-400 leading-relaxed mb-6">
                  The AI Health Companion is not a generic chatbot. It knows your medical history, your medications, your previous visits, and your upcoming appointments. Every answer is personalized to your health profile.
                </p>
                <div className="space-y-3 mb-6">
                  {[
                    { action: "Ask about reports", desc: "Explains lab results in plain language, highlights abnormal values" },
                    { action: "Prepare doctor questions", desc: "Generates smart, context-aware questions based on your history" },
                    { action: "Explain medical terms", desc: "Translates complex terminology into understandable language" },
                    { action: "Appointment coaching", desc: "Guides you on what to share with your doctor before each visit" },
                    { action: "Medication questions", desc: "Explains what your medications do and when to take them" },
                    { action: "Recovery guidance", desc: "Post-visit personalized care instructions and next steps" },
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
                  <p className="text-xs text-amber-400 font-semibold">! Ethical AI Positioning</p>
                  <p className="text-xs text-gray-400 mt-1">
                    The AI provides healthcare information and helps patients prepare for appointments. It does not diagnose, prescribe, or replace medical advice.
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
                      <p className="text-sm font-semibold text-white">AI Health Companion</p>
                      <p className="text-[10px] text-brand-emerald">* Online - Personalized to your profile</p>
                    </div>
                  </div>

                  <div className="p-4 space-y-4 min-h-[320px]">
                    <div className="flex space-x-2">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-brand-cyan to-brand-indigo flex-shrink-0 flex items-center justify-center">
                        <Brain className="w-3.5 h-3.5 text-white" />
                      </div>
                      <div className="bg-brand-cyan/10 border border-brand-cyan/15 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%]">
                        <p className="text-sm text-gray-200">Hello Mubashir! I&apos;ve reviewed your latest blood test. Your Hemoglobin is normal, but your Vitamin D is slightly below the recommended range. Would you like me to explain what this means?</p>
                      </div>
                    </div>
                    <div className="flex space-x-2 justify-end">
                      <div className="bg-brand-indigo/20 border border-brand-indigo/20 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%]">
                        <p className="text-sm text-gray-200">Yes, and what should I ask Dr. Sarah tomorrow?</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-brand-cyan to-brand-indigo flex-shrink-0 flex items-center justify-center">
                        <Brain className="w-3.5 h-3.5 text-white" />
                      </div>
                      <div className="bg-brand-cyan/10 border border-brand-cyan/15 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%]">
                        <p className="text-sm text-gray-200 mb-2">Vitamin D supports bone health, immunity, and mood. Levels below 20 ng/mL are considered deficient.</p>
                        <p className="text-xs font-semibold text-brand-cyan">Suggested questions for Dr. Sarah:</p>
                        <ul className="mt-1 space-y-1 text-xs text-gray-400">
                          <li>• Should I start a Vitamin D supplement?</li>
                          <li>• What dosage would you recommend?</li>
                          <li>• Should I repeat this test in 3 months?</li>
                        </ul>
                      </div>
                    </div>
                    {/* Quick actions */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {["Ask about reports", "Prepare doctor questions", "Explain medical terms"].map((q) => (
                        <div key={q} className="text-[11px] bg-brand-cyan/10 border border-brand-cyan/20 rounded-full px-3 py-1.5 text-brand-cyan cursor-pointer hover:bg-brand-cyan/15 transition-colors">
                          {q}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="px-4 py-3 border-t border-brand-border">
                    <div className="flex items-center space-x-2 glass-panel rounded-xl px-3 py-2 border border-brand-border">
                      <input type="text" placeholder="Ask about your health..." className="flex-grow bg-transparent text-sm text-gray-300 placeholder-gray-600 outline-none" readOnly />
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
              Built for every role in the{" "}
              <span className="text-gradient-emerald-cyan">care ecosystem</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <HeartPulse className="w-6 h-6 text-brand-cyan" />,
                iconBg: "bg-brand-cyan/10",
                title: "Patient Portal", route: "/patient/dashboard", color: "brand-cyan",
                items: ["Health timeline & score", "Appointment booking", "Medical history", "Document management", "Lab results", "AI Health Companion", "Family hub", "Secure messaging", "Healthcare wallet", "Voice AI commands"],
              },
              {
                icon: <Stethoscope className="w-6 h-6 text-brand-indigo" />,
                iconBg: "bg-brand-indigo/10",
                title: "Doctor Dashboard", route: "/doctor/dashboard", color: "brand-indigo",
                items: ["AI patient visit brief", "Patient medical history", "Uploaded document viewer", "Appointment management", "Treatment notes editor", "Secure patient messaging", "Lab result review", "AI history summarizer", "Patient timeline view", "Prescription management"],
              },
              {
                icon: <Activity className="w-6 h-6 text-brand-emerald" />,
                iconBg: "bg-brand-emerald/10",
                title: "Admin Dashboard", route: "/admin/dashboard", color: "brand-emerald",
                items: ["User & doctor management", "Platform analytics", "Appointment overview", "Audit log viewer", "Clinic configuration", "Role & permission control", "Billing & subscription", "Multi-clinic support", "Data export tools", "System health monitoring"],
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
              <span className="text-xs font-semibold text-brand-cyan uppercase tracking-widest">Use Cases</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              Built for every{" "}
              <span className="text-gradient-cyan-indigo">healthcare specialty</span>
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              The AI Patient Portal adapts to the specific workflow of each specialty. See how it works across different healthcare environments.
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
              Enterprise-grade security,{" "}
              <span className="text-gradient-emerald-cyan">patient-first design</span>
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Healthcare data is the most sensitive data in existence. Every architectural decision is made with security as the first principle, not an afterthought.
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
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider text-center mb-5">Compliance & Standards Alignment</p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { label: "HIPAA Aligned", icon: "" },
                { label: "GDPR Compatible", icon: "" },
                { label: "AES-256 Encryption", icon: "" },
                { label: "FHIR API Ready", icon: "+" },
                { label: "SOC 2 Architecture", icon: "" },
                { label: "Zero-Knowledge Design", icon: "" },
              ].map((badge) => (
                <div key={badge.label} className="flex items-center space-x-2 bg-brand-emerald/10 border border-brand-emerald/20 rounded-full px-4 py-2">
                  <span>{badge.icon}</span>
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
              <span className="text-xs font-semibold text-brand-indigo uppercase tracking-widest">Integrations</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              Plugs into your{" "}
              <span className="text-gradient-cyan-indigo">existing ecosystem</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {integrations.map((int, i) => (
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
              <span className="text-gradient-cyan-indigo">technology stack</span>
            </h2>
            <p className="mt-3 text-gray-400 max-w-xl mx-auto">
              Built with the modern tools that scale from a single clinic to a hospital network.
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
                <h2 className="font-display font-bold text-2xl text-white">Database Architecture</h2>
                <p className="text-sm text-gray-400">PostgreSQL + Prisma ORM - fully typed, migration-safe, auditable</p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { table: "Users", fields: ["id", "name", "email", "role", "createdAt"] },
                { table: "Patients", fields: ["id", "userId", "dob", "gender", "bloodType", "emergencyContact"] },
                { table: "Doctors", fields: ["id", "userId", "specialty", "licenseNo", "clinicId"] },
                { table: "Appointments", fields: ["id", "patientId", "doctorId", "date", "status", "brief"] },
                { table: "MedicalRecords", fields: ["id", "patientId", "title", "type", "description"] },
                { table: "Documents", fields: ["id", "patientId", "fileUrl", "category", "aiSummary"] },
                { table: "LabResults", fields: ["id", "patientId", "testName", "result", "status", "date"] },
                { table: "Messages", fields: ["id", "senderId", "receiverId", "content", "read"] },
                { table: "FamilyMembers", fields: ["id", "ownerId", "name", "relation", "patientId"] },
                { table: "AuditLogs", fields: ["id", "userId", "action", "resource", "timestamp", "ip"] },
                { table: "Notifications", fields: ["id", "userId", "type", "message", "read", "createdAt"] },
                { table: "Clinics", fields: ["id", "name", "address", "plan", "ownerId", "settings"] },
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
          {/* Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center space-x-2 bg-brand-indigo/10 border border-brand-indigo/20 rounded-full px-4 py-1.5 mb-4">
              <BookOpen className="w-4 h-4 text-brand-indigo" />
              <span className="text-xs font-semibold text-brand-indigo uppercase tracking-widest">Frequently Asked Questions</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              20 questions,{" "}
              <span className="text-gradient-cyan-indigo">answered clearly</span>
            </h2>
            <p className="mt-3 text-gray-400 max-w-xl mx-auto">
              Everything you need to know about the AI Patient Portal Platform - platform, features, security, and technology.
            </p>
          </div>

          {/* Category labels */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              { label: "Platform & Product", color: "brand-cyan", count: "10" },
              { label: "Technical & Features", color: "brand-indigo", count: "10" },
            ].map((cat) => (
              <div key={cat.label} className={`flex items-center space-x-2 px-4 py-2 rounded-full bg-${cat.color}/10 border border-${cat.color}/20`}>
                <span className={`w-5 h-5 rounded-full bg-${cat.color}/20 flex items-center justify-center text-[10px] font-bold text-${cat.color}`}>{cat.count}</span>
                <span className={`text-xs font-semibold text-${cat.color}`}>{cat.label}</span>
              </div>
            ))}
          </div>

          {/* 2-column FAQ grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Column 1 */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2 mb-5">
                <div className="h-px flex-grow bg-brand-cyan/20" />
                <span className="text-xs font-bold text-brand-cyan uppercase tracking-widest px-3">Platform & Product</span>
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
                <span className="text-xs font-bold text-brand-indigo uppercase tracking-widest px-3">Technical & Features</span>
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
                <HeartPulse className="w-8 h-8 text-brand-cyan" />
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl xl:text-5xl text-white mb-4">
                Ready to transform patient{" "}
                <span className="text-gradient-cyan-indigo">healthcare experience?</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
                The AI Patient Portal Platform is designed to be deployed for individual clinics, dental practices, specialty centers, and hospital networks. Let&apos;s build your version.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                <Link href="/demo?tab=patient" className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-brand-cyan/25">
                  <Sparkles className="w-4 h-4" />
                  <span>Explore Live Demo</span>
                </Link>
                <Link href="/contact" className="inline-flex items-center space-x-2 glass-panel border border-brand-border text-gray-300 font-semibold px-8 py-4 rounded-xl hover:border-brand-cyan/40 hover:text-white transition-all">
                  <Phone className="w-4 h-4" />
                  <span>Book a Discovery Call</span>
                </Link>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
                <a href="https://patient-iq.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-brand-cyan transition-colors">
                  <Globe className="w-4 h-4" />
                  <span>View PatientIQ Live</span>
                </a>
                <a href="https://github.com/alimubashir822/PatientIQ" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-brand-cyan transition-colors">
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
