"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Sparkles, Brain, HeartPulse, FileText, Calendar,
  MessageSquare, Shield, Users, Activity, CheckCircle, Star, 
  TrendingUp, Lock, Bell, Zap, ChevronDown, LayoutDashboard, 
  Stethoscope, BookOpen, Phone, Globe, Database, Clock, X, 
  Wallet, Mic, BookMarked, RefreshCw, BarChart3, Building2, 
  Smile, Heart, AlertTriangle, CloudUpload, ShieldCheck, Eye, 
  UserCog, Video, Volume2, Plus, Info
} from "lucide-react";

/* --- Types --- */
interface Feature { icon: React.ReactNode; title: string; desc: string; badge?: string; }
interface Differentiator { icon: React.ReactNode; title: string; subtitle: string; desc: string; color: string; glow: string; }
interface FAQ { q: string; a: string; }

/* =======================================================
   DATA
   ======================================================= */

const coreFeatures: Feature[] = [
  { icon: <Brain className="w-5 h-5" />, title: "AI Health Concierge", desc: "Collects symptoms, understands patient intent, suggests the correct medical specialty, and matches available doctors.", badge: "Concierge" },
  { icon: <FileText className="w-5 h-5" />, title: "AI Pre-Consult Summary", desc: "Automatically prepares structured doctor preparation briefs including main concerns, duration, and clinical questions.", badge: "Productivity" },
  { icon: <Mic className="w-5 h-5" />, title: "AI Doctor Copilot", desc: "Transcribes live consultations, auto-generates clinical visit notes, treatment plans, and patient instructions.", badge: "Unique" },
  { icon: <Users className="w-5 h-5" />, title: "Family Health Accounts", desc: "Manage consultations, schedules, prescriptions, and billing lists for parents, children, and spouses in a unified profile.", badge: "New" },
  { icon: <Activity className="w-5 h-5" />, title: "Personal Health Timeline", desc: "Interactive care history tracking consultations, lab reports, and medication changes, with AI-summarized progress trends.", badge: "Timeline" },
  { icon: <ShieldCheck className="w-5 h-5" />, title: "AI Medical Document Analyzer", desc: "Analyzes uploaded laboratory reports or imaging PDFs, translating complex terms into patient-friendly summaries.", badge: "Analysis" },
  { icon: <Video className="w-5 h-5" />, title: "HD Telemedicine Console", desc: "Low-latency WebRTC video room featuring dual-stream layouts, direct chat, screen sharing, and integrated clinical charting." },
  { icon: <Calendar className="w-5 h-5" />, title: "Smart Scheduling Engine", desc: "Enables providers to designate flexible working hours, buffer times, vacation days, and automated slot allocations." },
  { icon: <Wallet className="w-5 h-5" />, title: "Integrated Billing & Stripe", desc: "Handles copays, automated insurance claims invoices, subscription cycles for practices, and secure refund policies." },
  { icon: <MessageSquare className="w-5 h-5" />, title: "Secure Chat Channels", desc: "Encrypted patient-to-doctor messaging before and after virtual consults with secure document attachments." },
  { icon: <Bell className="w-5 h-5" />, title: "Care Automation Builder", desc: "Triggers post-visit check-ins on Day 1, wellness reminders on Day 7, and automated follow-up scheduling." },
  { icon: <BarChart3 className="w-5 h-5" />, title: "Doctor Business Growth", desc: "Advanced clinic analytics monitoring patient growth rates, retention statistics, average reviews, and earnings trends." }
];

const differentiators: Differentiator[] = [
  { icon: <Brain className="w-7 h-7" />, title: "AI Triage Concierge", subtitle: "24/7 Intake & Direct Matching", desc: "Guides patients from initial symptoms to matched doctor booking, reducing administrative triage time by 80%.", color: "from-brand-cyan/20 to-brand-indigo/10", glow: "rgba(6,182,212,0.15)" },
  { icon: <FileText className="w-7 h-7" />, title: "AI Consultation Prep", subtitle: "Pre-briefing in EMR Console", desc: "Synthesizes intake data into structured patient summaries, saving doctors up to 6 minutes of manual charting per consult.", color: "from-brand-indigo/20 to-purple-500/10", glow: "rgba(99,102,241,0.15)" },
  { icon: <Mic className="w-7 h-7" />, title: "AI Voice Copilot", subtitle: "Ambient Clinical Dictation", desc: "Listens to active consultations and automatically creates detailed clinical logs, ICD-10 suggestions, and patient guides.", color: "from-brand-emerald/20 to-brand-cyan/10", glow: "rgba(16,185,129,0.15)" },
  { icon: <Activity className="w-7 h-7" />, title: "Unified Health Story", subtitle: "Chronological Health Timeline", desc: "Brings records, files, prescriptions, and consult logs into a beautiful history that tracks overall wellness trends over years.", color: "from-amber-500/20 to-orange-500/10", glow: "rgba(245,158,11,0.15)" }
];

const portalModules = [
  { icon: <Video className="w-5 h-5" />, title: "Consultation Workspace", items: ["HD WebRTC Audio & Video", "Inline Clinical Notes", "E-Prescription Builder", "Real-Time Telemetry Tracking"] },
  { icon: <Brain className="w-5 h-5" />, title: "AI Triage System", items: ["Symptom pre-intake workflow", "Direct specialist routing", "Matched booking slot selection", "Patient brief auto-generation"] },
  { icon: <FileText className="w-5 h-5" />, title: "Digital Health Vault", items: ["Malware scanned S3 storage", "Expiring signed download URLs", "AI lab report summaries", "Timeline-based record grids"] },
  { icon: <Users className="w-5 h-5" />, title: "Practice Management", items: ["Smart booking engine", "Staff scheduling boards", "Stripe payment invoicing", "Patient retention score analytics"] }
];

const techStack = [
  { category: "Frontend Engine", items: ["Next.js 15 App Router", "TypeScript", "Tailwind CSS & shadcn/ui", "Framer Motion Animations"], icon: <Globe className="w-5 h-5" /> },
  { category: "Communications", items: ["WebRTC / Daily.co SDK", "Twilio SMS Gateways", "SendGrid Email Dispatcher", "Secure Chat Websockets"], icon: <Video className="w-5 h-5" /> },
  { category: "Database & Backend", items: ["PostgreSQL Cluster", "Prisma ORM Migrations", "Next.js Server Actions", "Redis Cache / Session Vault"], icon: <Database className="w-5 h-5" /> },
  { category: "Security & AI Services", items: ["OpenAI GPT-4o API", "AES-256 Record Encryption", "Clerk Authentication", "AWS HIPAA-Secure Storage"], icon: <Lock className="w-5 h-5" /> }
];

const useCases = [
  {
    icon: <Smile className="w-6 h-6" />,
    specialty: "Dental Clinic OS",
    color: "brand-cyan",
    scenario: "Emergency virtual dental triage with visual treatment tracking",
    journey: [
      "Patient reports chipped tooth; AI Concierge collects images and symptoms.",
      "Smart Match matches availability and routes patient to on-call Dentist.",
      "HD Video consultation allows visual inspection; Dentist updates treatment timeline.",
      "Dentist schedules in-office restoration and syncs record automatically via FHIR."
    ],
    outcome: "Dental groups increase consultation capacity by 45% and capture emergency procedures instantly."
  },
  {
    icon: <Heart className="w-6 h-6" />,
    specialty: "Virtual Cardiology",
    color: "rose-400",
    scenario: "Chronic hypertension tracking with live wearable telemetry sync",
    journey: [
      "Patient syncs Apple Health BP telemetry to the Health OS Portal.",
      "AI flags average BP spike over 10 days, alerting cardiologist.",
      "Cardiologist starts consult workspace with vitals streaming live on-screen.",
      "Dosage updated in Digital Prescription Builder; system handles Stripe payment."
    ],
    outcome: "Cardiac practices report a 35% reduction in readmissions and 96% medication compliance."
  },
  {
    icon: <Users className="w-6 h-6" />,
    specialty: "Mental Health Practices",
    color: "brand-emerald",
    scenario: "Unified therapy hub with encrypted chat and cognitive worksheets",
    journey: [
      "Therapist schedules recurring weekly counseling sessions.",
      "Encrypted Chat remains active 24/7 for support worksheets.",
      "AI Doctor Assistant transcribes call and extracts post-session goals.",
      "Progress notes are locked into audit logs for clinical compliance."
    ],
    outcome: "Therapists achieve 88% patient retention and save 5 hours weekly in session write-ups."
  }
];

const databaseTables = [
  { table: "Users", fields: ["id", "email", "hashedPassword", "role (Admin/Doc/Patient)", "createdAt"] },
  { table: "Doctors", fields: ["id", "userId", "specialty", "experience", "fees", "insuranceAccepted"] },
  { table: "Patients", fields: ["id", "userId", "medicalHistory", "familyHubId", "timelineSummary"] },
  { table: "Appointments", fields: ["id", "patientId", "doctorId", "slotTime", "duration", "status"] },
  { table: "Availability", fields: ["id", "doctorId", "dayOfWeek", "startTime", "endTime", "bufferTime"] },
  { table: "Consultations", fields: ["id", "appointmentId", "notes", "aiSummaryBrief", "copilotTranscription"] },
  { table: "MedicalRecords", fields: ["id", "patientId", "title", "fileUrl", "aiTermTranslation"] },
  { table: "Prescriptions", fields: ["id", "patientId", "consultationId", "medicationsList", "digitalSignature"] },
  { table: "Payments", fields: ["id", "appointmentId", "amount", "status", "stripeSessionId"] },
  { table: "Messages", fields: ["id", "senderId", "receiverId", "content", "sentAt", "attachmentUrl"] },
  { table: "Subscriptions", fields: ["id", "clinicId", "plan (Starter/Pro/Enterprise)", "status", "nextBillDate"] },
  { table: "AuditLogs", fields: ["id", "operatorId", "action", "ipAddress", "resourceAccessed", "timestamp"] }
];

const faqs: FAQ[] = [
  { q: "What is Virtual Clinic OS?", a: "Virtual Clinic OS is a secure digital infrastructure that combines doctor marketplaces, telemedicine video rooms, patient portals, smart scheduling, online payments, and AI healthcare tools into a single platform for clinics." },
  { q: "Is the platform HIPAA and SOC 2 compliant?", a: "Yes. All patient databases, video rooms (DTLS/SRTP WebRTC), EMR vaults, and messaging channels are encrypted using AES-256 and TLS 1.3, maintaining full audit logging for clinical standards." },
  { q: "How does the AI Health Concierge match patients?", a: "The AI conducts intake interviews asking about symptoms, severity, and history. It cross-references specialties, language preferences, available scheduling slots, and insurance lists to recommend the best physician match." },
  { q: "How does the AI Doctor Copilot save charting time?", a: "During the virtual consultation, the AI listens to the session, transcribes the dialog, and formats it into clinical notes (SOAP layout), suggested ICD-10 diagnostic codes, and plain-English care plans." },
  { q: "Can doctors manage custom scheduling slots?", a: "Yes. Doctors can set distinct working hours, configure consultation durations (e.g. 15m, 30m, 45m), designate administrative break times, and automate timezone translations." },
  { q: "How are prescriptions generated and downloaded?", a: "Doctors select medications and dosages inside the consult console and sign electronically. The platform exports a tamper-evident, cryptographically signed PDF prescription, which patients can download or directly map to nearby pharmacies." },
  { q: "Can clinics configure custom subscription plans?", a: "Yes. Clinic owners can enroll in our SaaS tiers: Starter (up to 100 consultations/month), Professional (unlimited consultations), or Enterprise (multi-provider networks) with recurring Stripe payments." },
  { q: "Does the system support family accounts?", a: "Yes. The Family Health Hub allows patients to manage consultations, schedules, prescriptions, and health histories for children, parents, and spouses under a unified dashboard profile." },
  { q: "How does the AI medical document analysis work?", a: "When a patient uploads a lab report (PDF) or imaging study, our OCR pipeline extracts metrics, flags readings outside standard reference levels, and provides clear explanations of medical terminology." },
  { q: "How long does deployment take for a custom clinic?", a: "Deploying a branded Clinic OS instance takes 4-6 weeks for initial configurations, while custom integrations with legacy EHR/EMR databases via HL7 FHIR require 2-3 months." }
];

const mockDoctors = [
  { name: "Dr. Sarah Ahmed", specialty: "Cardiology", experience: "12 Years", languages: "English, Spanish", availability: "10:00 AM", rating: 5, reviews: 218, price: "$95" },
  { name: "Dr. John Smith", specialty: "Dermatology", experience: "15 Years", languages: "English, French", availability: "2:00 PM", rating: 4.9, reviews: 184, price: "$85" },
  { name: "Dr. Elena Rostova", specialty: "Therapy (Mental Health)", experience: "9 Years", languages: "English, Russian", availability: "5:30 PM", rating: 5, reviews: 96, price: "$75" }
];

/* =======================================================
   COMPONENT
   ======================================================= */
export default function VirtualClinicOSPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeUseCase, setActiveUseCase] = useState(0);

  // OS Simulator States
  const [activeDashboardTab, setActiveDashboardTab] = useState("concierge");

  // Tab 1: AI Concierge Simulator
  const [conciergeStep, setConciergeStep] = useState(0);
  const [patientInput, setPatientInput] = useState("");
  const [chatLog, setChatLog] = useState<Array<{ sender: "ai" | "user", text: string }>>([
    { sender: "ai", text: "Hello! I am your Clinic OS AI Concierge. What symptoms are you experiencing today?" }
  ]);
  const [chatLoading, setChatLoading] = useState(false);
  const [triageComplete, setTriageComplete] = useState(false);

  // Tab 2: Doctor Schedule Config
  const [selectedDoctor, setSelectedDoctor] = useState(mockDoctors[0]);
  const [bookingTime, setBookingTime] = useState("10:00 AM");

  // Tab 3: Consultation Workspace
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [clinicalNotes, setClinicalNotes] = useState("");
  const [isWritingNotes, setIsWritingNotes] = useState(false);

  const handleConciergeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientInput || chatLoading) return;

    const userText = patientInput;
    setChatLog(prev => [...prev, { sender: "user", text: userText }]);
    setPatientInput("");
    setChatLoading(true);

    setTimeout(() => {
      if (conciergeStep === 0) {
        setChatLog(prev => [...prev, {
          sender: "ai",
          text: "Understood. How long have you felt this way, and are you experiencing any chest pressure or breathing difficulties?"
        }]);
        setConciergeStep(1);
      } else {
        setChatLog(prev => [...prev, {
          sender: "ai",
          text: "Thank you. I recommend consulting Cardiology. I have found Dr. Sarah Ahmed who is available at 10:00 AM. Would you like to schedule?"
        }]);
        setTriageComplete(true);
      }
      setChatLoading(false);
    }, 1000);
  };

  const simulateSpeech = () => {
    setIsWritingNotes(true);
    setClinicalNotes("Patient speaking...");
    setTimeout(() => {
      setClinicalNotes("Symptom: Intermittent chest discomfort. Duration: 3 weeks. Plan: Schedule follow-up ECG, adjust beta-blockers, avoid high sodium meals.");
      setIsWritingNotes(false);
    }, 2000);
  };

  return (
    <div className="relative overflow-hidden bg-brand-bg text-white">
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
          <span className="text-white">Virtual Clinic OS</span>
        </div>

        {/* ======================================
            HERO SECTION + SIMULATOR
        ====================================== */}
        <section className="relative mb-24 pt-8 md:pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column (5 cols) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 flex flex-col space-y-6 text-left"
            >
              <div className="inline-flex items-center space-x-2 self-start bg-gradient-to-r from-brand-cyan/15 to-brand-indigo/15 border border-brand-cyan/20 rounded-full px-4.5 py-1.5 shadow-lg shadow-brand-cyan/5">
                <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full animate-pulse" />
                <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest">Virtual Clinic Operating System</span>
                <Sparkles className="w-3 h-3 text-brand-cyan" />
              </div>

              <h1 className="font-display font-extrabold text-3xl sm:text-4xl xl:text-5xl text-white leading-[1.15] tracking-tight">
                AI-Powered Clinic OS.<br />
                <span className="text-gradient-cyan-indigo">Deliver Online Care.</span><br />
                <span className="text-gradient-emerald-cyan">Automate Your Practice.</span>
              </h1>

              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                A secure, digital healthcare operating infrastructure that helps doctors host video consultations, match patient triages automatically, coordinate family records, and scale practice operations.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-bold px-8 py-4 rounded-xl hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-brand-cyan/25 text-sm"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Request Platform Demo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center space-x-2 glass-panel border border-brand-border text-gray-300 font-semibold px-8 py-4 rounded-xl hover:border-brand-cyan/40 hover:text-white hover:scale-[1.02] active:scale-[0.98] transition-all text-sm"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Consultation Pricing</span>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-2.5 pt-4">
                {[
                  { icon: <Shield className="w-3.5 h-3.5 text-brand-emerald" />, label: "HIPAA Compliant", bg: "bg-brand-emerald/10 border-brand-emerald/20" },
                  { icon: <Lock className="w-3.5 h-3.5 text-brand-cyan" />, label: "AES-256 Encrypted", bg: "bg-brand-cyan/10 border-brand-cyan/20" },
                  { icon: <CheckCircle className="w-3.5 h-3.5 text-brand-indigo" />, label: "FHIR EMR Interop", bg: "bg-brand-indigo/10 border-brand-indigo/20" }
                ].map((t) => (
                  <div key={t.label} className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full border ${t.bg}`}>
                    {t.icon}
                    <span className="text-[10px] font-semibold text-gray-300">{t.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Column: Interactive OS Simulator (7 cols) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-7 relative"
            >
              <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-cyan to-brand-indigo rounded-2xl blur-xl opacity-20 transition-all duration-1000 -z-10" />
              
              <div className="glass-panel rounded-2xl border border-brand-border overflow-hidden bg-brand-bg/95">
                
                {/* Simulator Header */}
                <div className="border-b border-brand-border px-5 py-3 flex items-center justify-between bg-white/5">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-6.5 h-6.5 rounded-lg bg-gradient-to-br from-brand-cyan to-brand-indigo flex items-center justify-center">
                      <HeartPulse className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="font-display font-bold text-white text-xs tracking-wide">Virtual Clinic OS Simulator</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 bg-brand-emerald/10 border border-brand-emerald/25 rounded-full px-2.5 py-1">
                    <div className="w-1.5 h-1.5 bg-brand-emerald rounded-full animate-pulse" />
                    <span className="text-[10px] text-brand-emerald font-semibold">Active Session (Standard Port 3000)</span>
                  </div>
                </div>

                {/* Dashboard Inner Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-brand-border h-[450px]">
                  
                  {/* Left Navigation (4 cols) */}
                  <div className="md:col-span-4 p-4 space-y-1.5 bg-white/[0.01]">
                    <p className="text-[9px] text-gray-500 uppercase font-bold tracking-wider mb-2 px-2">Workspaces</p>
                    {[
                      { id: "concierge", label: "AI Health Concierge", icon: <Brain className="w-3.5 h-3.5" /> },
                      { id: "booking", label: "Scheduling & Match", icon: <Calendar className="w-3.5 h-3.5" /> },
                      { id: "consult", label: "Video Consult Room", icon: <Video className="w-3.5 h-3.5" /> },
                      { id: "admin", label: "SaaS Admin Portal", icon: <Building2 className="w-3.5 h-3.5" /> }
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveDashboardTab(tab.id)}
                        className={`w-full flex items-center space-x-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
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
                      <p className="text-[9px] text-gray-500 uppercase font-bold tracking-wider mb-2 px-2">Matched Provider</p>
                      <div className="flex items-center space-x-2 px-2 py-1 bg-white/2 border border-brand-border rounded-xl">
                        <div className="w-7 h-7 rounded-full bg-brand-cyan/15 flex items-center justify-center text-[10px] font-bold text-brand-cyan">
                          SA
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-white">Dr. Sarah Ahmed</p>
                          <p className="text-[8px] text-gray-500">Cardiology Specialist</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Main Display (8 cols) */}
                  <div className="md:col-span-8 p-5 overflow-y-auto flex flex-col justify-between h-full bg-brand-bg/10">
                    
                    {/* Tab 1: AI Health Concierge */}
                    {activeDashboardTab === "concierge" && (
                      <div className="flex-grow flex flex-col justify-between space-y-4">
                        <div className="flex items-center justify-between border-b border-brand-border/60 pb-2">
                          <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-wider flex items-center">
                            <Brain className="w-3.5 h-3.5 text-brand-cyan animate-pulse mr-1.5" />
                            <span>AI Specialty Intake Navigator</span>
                          </span>
                          <span className="text-[8px] bg-brand-cyan/15 text-brand-cyan font-bold px-2 py-0.5 rounded-full border border-brand-cyan/10">Live Concierge</span>
                        </div>

                        {/* Chat history */}
                        <div className="flex-grow overflow-y-auto max-h-[200px] space-y-3 pr-1 text-[11px] leading-relaxed">
                          {chatLog.map((msg, i) => (
                            <div key={i} className={`flex space-x-2 ${msg.sender === "user" ? "justify-end" : ""}`}>
                              {msg.sender === "ai" && (
                                <div className="w-5 h-5 rounded-full bg-brand-cyan/20 flex items-center justify-center text-[8px] font-bold text-brand-cyan flex-shrink-0">
                                  AI
                                </div>
                              )}
                              <div className={`p-2.5 rounded-xl border max-w-[80%] ${
                                msg.sender === "user"
                                  ? "bg-brand-indigo/15 border-brand-indigo/25 text-white rounded-tr-none"
                                  : "bg-brand-cyan/5 border-brand-cyan/15 text-gray-300 rounded-tl-none"
                              }`}>
                                {msg.text}
                              </div>
                            </div>
                          ))}

                          {chatLoading && (
                            <div className="flex space-x-2">
                              <div className="w-5 h-5 rounded-full bg-brand-cyan/20 flex items-center justify-center text-[8px] font-bold text-brand-cyan flex-shrink-0">
                                AI
                              </div>
                              <div className="bg-brand-cyan/5 border border-brand-cyan/15 rounded-xl rounded-tl-none p-2.5 text-gray-400">
                                <span className="animate-pulse">Analyzing symptoms & matching specialties...</span>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Interactive Match Triage Output */}
                        {triageComplete && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-brand-emerald/10 border border-brand-emerald/20 rounded-xl p-3"
                          >
                            <div className="flex items-center space-x-1.5 mb-1">
                              <CheckCircle className="w-3.5 h-3.5 text-brand-emerald" />
                              <span className="text-[9px] text-brand-emerald font-bold uppercase">Specialty Match Successful</span>
                            </div>
                            <p className="text-[10px] text-gray-300 leading-normal">
                              <strong>Matched Specialty:</strong> Cardiology · <strong>Matched Doctor:</strong> Dr. Sarah Ahmed (Available today) · <strong>Action:</strong> Booking slot pre-allocated.
                            </p>
                          </motion.div>
                        )}

                        {/* Interactive Form Input */}
                        {!triageComplete && (
                          <form onSubmit={handleConciergeSubmit} className="flex gap-2">
                            <input
                              type="text"
                              required
                              value={patientInput}
                              onChange={(e) => setPatientInput(e.target.value)}
                              disabled={chatLoading}
                              placeholder={conciergeStep === 0 ? "e.g. I am experiencing chest discomfort..." : "Describe details..."}
                              className="flex-grow bg-brand-bg/50 border border-brand-border rounded-xl px-3 py-2 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-brand-cyan"
                            />
                            <button
                              type="submit"
                              disabled={chatLoading}
                              className="bg-brand-cyan hover:bg-brand-cyan/90 text-brand-bg font-bold text-xs px-4 py-2 rounded-xl transition-colors disabled:opacity-50"
                            >
                              Send
                            </button>
                          </form>
                        )}

                        {triageComplete && (
                          <button
                            onClick={() => {
                              setTriageComplete(false);
                              setConciergeStep(0);
                              setChatLog([{ sender: "ai", text: "Hello! I am your Clinic OS AI Concierge. What symptoms are you experiencing today?" }]);
                            }}
                            className="text-[10px] text-brand-cyan hover:underline text-center block mt-1"
                          >
                            Reset AI Triage Simulator
                          </button>
                        )}
                      </div>
                    )}

                    {/* Tab 2: Smart Scheduling & Availability matching */}
                    {activeDashboardTab === "booking" && (
                      <div className="flex-grow flex flex-col justify-between space-y-4">
                        <div>
                          <div className="flex items-center justify-between border-b border-brand-border/60 pb-2 mb-3">
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Smart Calendar Allocator</span>
                            <span className="text-[9px] text-brand-cyan font-semibold">Matched Slots</span>
                          </div>

                          <div className="space-y-3">
                            <div className="glass-panel border border-brand-border rounded-xl p-3 flex items-center justify-between">
                              <div>
                                <p className="text-[11px] font-bold text-white">Dr. Sarah Ahmed</p>
                                <p className="text-[9px] text-gray-500 mt-1">Cardiology · 12 Years Exp</p>
                              </div>
                              <span className="text-xs font-bold text-brand-cyan">{selectedDoctor.price}</span>
                            </div>

                            <div>
                              <p className="text-[9px] text-gray-500 uppercase font-bold tracking-wider mb-2">Available Consultation Hours (Today)</p>
                              <div className="grid grid-cols-3 gap-2">
                                {["10:00 AM", "2:00 PM", "5:30 PM"].map((time) => (
                                  <button
                                    key={time}
                                    onClick={() => setBookingTime(time)}
                                    className={`py-2 px-2.5 rounded-lg border text-xs font-semibold transition-all ${
                                      bookingTime === time
                                        ? "bg-brand-cyan/20 border-brand-cyan text-brand-cyan"
                                        : "border-brand-border text-gray-400 hover:text-white"
                                    }`}
                                  >
                                    {time}
                                  </button>
                                ))}
                              </div>
                            </div>

                            <div className="p-3 bg-white/2 border border-brand-border rounded-xl text-[10px] space-y-1.5">
                              <div className="flex justify-between text-gray-400">
                                <span>Selected Slot:</span>
                                <span className="text-white font-bold">Today, {bookingTime}</span>
                              </div>
                              <div className="flex justify-between text-gray-400">
                                <span>Consultation Duration:</span>
                                <span className="text-white">30 mins (Online Video)</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <button
                          onClick={() => setActiveDashboardTab("consult")}
                          className="w-full bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-bold text-xs py-2.5 rounded-xl hover:opacity-90 transition-all flex items-center justify-center space-x-1.5"
                        >
                          <Video className="w-3.5 h-3.5" />
                          <span>Initiate Video Consult Room</span>
                        </button>
                      </div>
                    )}

                    {/* Tab 3: Consultation Workspace */}
                    {activeDashboardTab === "consult" && (
                      <div className="flex-grow flex flex-col justify-between space-y-3">
                        <div className="grid grid-cols-2 gap-3 flex-grow">
                          
                          {/* Left: Video Area */}
                          <div className="bg-brand-bg border border-brand-border rounded-xl relative overflow-hidden flex items-center justify-center aspect-video h-[120px] my-auto">
                            {isVideoOn ? (
                              <div className="w-full h-full bg-gradient-to-br from-brand-cyan/20 to-brand-indigo/25 flex items-center justify-center">
                                <Users className="w-8 h-8 text-brand-cyan animate-pulse" />
                                <span className="absolute bottom-2 left-2 text-[8px] bg-black/60 px-1.5 py-0.5 rounded text-gray-300">Dr. Sarah Ahmed</span>
                              </div>
                            ) : (
                              <div className="text-[10px] text-gray-500">Camera Off</div>
                            )}

                            <div className="absolute bottom-2 right-2 flex space-x-1">
                              <button
                                onClick={() => setIsVideoOn(!isVideoOn)}
                                className={`p-1 rounded bg-black/60 hover:bg-black/80 transition-colors text-white`}
                              >
                                <Video className="w-3 h-3" />
                              </button>
                              <button
                                onClick={() => setIsMuted(!isMuted)}
                                className={`p-1 rounded bg-black/60 hover:bg-black/80 transition-colors ${isMuted ? "text-red-500" : "text-white"}`}
                              >
                                <Volume2 className="w-3 h-3" />
                              </button>
                            </div>
                          </div>

                          {/* Right: Notes / AI Copilot dictation */}
                          <div className="glass-panel border border-brand-border rounded-xl p-3 flex flex-col justify-between h-[125px]">
                            <div className="flex items-center justify-between border-b border-brand-border pb-1">
                              <span className="text-[8px] font-bold text-gray-500 uppercase tracking-wider">AI Doctor Copilot</span>
                              <div className="w-1.5 h-1.5 rounded-full bg-brand-emerald animate-pulse" />
                            </div>
                            <textarea
                              readOnly
                              value={clinicalNotes || "Click Speech Dictation to start transcribing active consult dialogue..."}
                              className="w-full flex-grow bg-transparent border-0 text-[10px] text-gray-300 placeholder-gray-600 outline-none resize-none pt-1"
                            />
                            <button
                              onClick={simulateSpeech}
                              disabled={isWritingNotes}
                              className="bg-brand-cyan/15 hover:bg-brand-cyan/25 border border-brand-cyan/20 text-brand-cyan font-bold text-[9px] py-1 rounded transition-colors"
                            >
                              {isWritingNotes ? "Dictating..." : "Simulate Speech Dictation"}
                            </button>
                          </div>

                        </div>

                        <div className="p-3 bg-brand-indigo/15 border border-brand-indigo/25 rounded-xl">
                          <p className="text-[9px] text-brand-cyan font-bold uppercase">AI Pre-Consult Brief</p>
                          <p className="text-[10px] text-gray-300 mt-1 leading-snug">
                            <strong>Reason:</strong> Chest pressure · <strong>Prior History:</strong> High sodium diet · <strong>Allergies:</strong> Sulfa
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Tab 4: Clinic Admin Dashboard */}
                    {activeDashboardTab === "admin" && (
                      <div className="flex-grow flex flex-col justify-between space-y-4">
                        <div className="flex items-center justify-between border-b border-brand-border/60 pb-2">
                          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Super Clinic Operations</span>
                          <span className="text-[8px] bg-brand-cyan/15 text-brand-cyan font-bold px-2 py-0.5 rounded-full border border-brand-cyan/10">SaaS Metrics</span>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-white/2 border border-brand-border rounded-xl p-3 text-center">
                            <span className="text-[8px] text-gray-500 block uppercase">Total Revenue</span>
                            <span className="text-base font-extrabold text-white block mt-0.5">$24,840</span>
                            <span className="text-[8px] text-brand-emerald font-semibold">+18.5% MoM</span>
                          </div>
                          <div className="bg-white/2 border border-brand-border rounded-xl p-3 text-center">
                            <span className="text-[8px] text-gray-500 block uppercase">Consultations</span>
                            <span className="text-base font-extrabold text-white block mt-0.5">312 visits</span>
                            <span className="text-[8px] text-brand-cyan font-semibold">Starter Tier active</span>
                          </div>
                        </div>

                        <div className="glass-panel border border-brand-border rounded-xl p-3 flex items-center justify-between bg-white/[0.01]">
                          <div>
                            <p className="text-[8px] text-gray-500 font-bold uppercase">Provider Allocation Score</p>
                            <p className="text-xs font-bold text-white mt-0.5">92% Engagement</p>
                          </div>
                          <div className="h-1.5 w-1/3 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full w-[92%] bg-gradient-to-r from-brand-cyan to-brand-indigo rounded-full" />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Navigation helper */}
                    <div className="text-[9px] text-gray-500 text-center border-t border-brand-border/60 pt-2 flex items-center justify-between mt-2">
                      <span>Select tab workspace to simulate workflow.</span>
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
              {[
                { value: "99.8%", label: "Triage Accuracy", icon: <Brain className="w-5 h-5" /> },
                { value: "24/7", label: "AI Concierge", icon: <Users className="w-5 h-5" /> },
                { value: "4-6 Min", label: "Doctor Prep Saved", icon: <Clock className="w-5 h-5" /> },
                { value: "92%", label: "Slot Optimization", icon: <TrendingUp className="w-5 h-5" /> },
                { value: "100%", label: "HIPAA Certified", icon: <Shield className="w-5 h-5" /> },
                { value: "$150k+", label: "Avg Practice Growth", icon: <Wallet className="w-5 h-5" /> }
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="text-center space-y-1.5"
                >
                  <div className="w-9 h-9 rounded-xl bg-brand-cyan/5 border border-brand-cyan/15 text-brand-cyan flex items-center justify-center mx-auto mb-1">
                    {stat.icon}
                  </div>
                  <h4 className="text-xl sm:text-2xl font-display font-extrabold text-white tracking-tight">{stat.value}</h4>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold leading-tight">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================
            DIFFERENTIATORS (4 Core Differentiators)
        ====================================== */}
        <section className="mb-28">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-cyan/10 border border-brand-cyan/20 rounded-full px-4 py-1.5 mb-4">
              <Sparkles className="w-4 h-4 text-brand-cyan" />
              <span className="text-xs font-semibold text-brand-cyan uppercase tracking-widest">SaaS Differentiation</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              Why Clinic OS is Different
            </h2>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed max-w-xl mx-auto">
              Moving beyond basic booking and screen calling to offer a comprehensive AI-driven care infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="glass-panel rounded-2xl p-6 border border-brand-border flex flex-col justify-between relative group hover:border-brand-cyan/40 transition-colors"
              >
                <div className="absolute -inset-px bg-gradient-to-br from-brand-cyan/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 text-brand-cyan flex items-center justify-center mb-5">
                    {d.icon}
                  </div>
                  <h3 className="font-display font-bold text-white text-lg mb-1">{d.title}</h3>
                  <p className="text-xs text-brand-cyan font-mono mb-3">{d.subtitle}</p>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{d.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ======================================
            PORTAL MODULES GRID
        ====================================== */}
        <section className="mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Info (5 cols) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 text-left"
            >
              <div className="inline-flex items-center space-x-2 bg-brand-indigo/10 border border-brand-indigo/20 rounded-full px-4 py-1.5 mb-6">
                <LayoutDashboard className="w-4 h-4 text-brand-indigo" />
                <span className="text-xs font-semibold text-brand-indigo uppercase tracking-widest">Portal Architecture</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-4">
                Structured for every role in the medical ecosystem
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                A unified core containing separate, modular workspace dashboards designed exclusively for patient workflows, doctor workloads, and general administrative control.
              </p>
              
              <div className="p-4 bg-brand-cyan/5 border border-brand-cyan/15 rounded-xl text-[11px] leading-relaxed text-gray-400 flex gap-2">
                <Info className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                <span>The platform utilizes HL7 FHIR database connections to maintain perfect alignment with major electronic health record structures.</span>
              </div>
            </motion.div>

            {/* Right Grid (7 cols) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {portalModules.map((m, i) => (
                <div key={m.title} className="glass-panel rounded-xl p-5 border border-brand-border">
                  <div className="flex items-center space-x-2.5 mb-3">
                    <span className="text-brand-cyan">{m.icon}</span>
                    <h4 className="font-semibold text-white text-sm">{m.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {m.items.map((item) => (
                      <li key={item} className="flex items-start space-x-2">
                        <CheckCircle className="w-3.5 h-3.5 text-brand-emerald mt-0.5 flex-shrink-0" />
                        <span className="text-xs text-gray-400">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ======================================
            SPECIALTIES USE CASES
        ====================================== */}
        <section className="mb-28">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-brand-cyan/10 border border-brand-cyan/20 rounded-full px-4 py-1.5 mb-4">
              <Stethoscope className="w-4 h-4 text-brand-cyan" />
              <span className="text-xs font-semibold text-brand-cyan uppercase tracking-widest">Care Journeys</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              Optimized for Healthcare Verticals
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              See how the Virtual Clinic OS structures customized clinic workflows to support varying remote disciplines.
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
              className="glass-panel rounded-2xl border border-brand-border overflow-hidden text-left"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="p-8 border-b lg:border-b-0 lg:border-r border-brand-border">
                  <div className="w-14 h-14 rounded-2xl bg-brand-cyan/10 flex items-center justify-center mb-5 text-brand-cyan">
                    {useCases[activeUseCase].icon}
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white mb-2">{useCases[activeUseCase].specialty}</h3>
                  <p className="text-sm text-gray-400 mb-6 italic">&ldquo;{useCases[activeUseCase].scenario}&rdquo;</p>
                  <div className="p-4 bg-brand-emerald/10 border border-brand-emerald/20 rounded-xl">
                    <p className="text-xs font-bold text-brand-emerald mb-1">Measured Clinical Output</p>
                    <p className="text-sm text-gray-300">{useCases[activeUseCase].outcome}</p>
                  </div>
                </div>
                <div className="lg:col-span-2 p-8">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-5">Patient Journey Flow</p>
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
            16 ADVANCED FEATURES
        ====================================== */}
        <section className="mb-28">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              16 Advanced SaaS Features
            </h2>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed max-w-xl mx-auto">
              A comprehensive checklist of features engineered to provide real-world business value and automate administrative tasks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {[
              { num: "01", title: "AI Health Concierge", desc: "Interactive triage collecting vitals, symptom details, and matching providers." },
              { num: "02", title: "AI Pre-Consult Brief", desc: "Summarizes patient history prior to appointment to boost clinician speed." },
              { num: "03", title: "AI Doctor Copilot", desc: "Ambient transcription building notes, care plans, and instructions automatically." },
              { num: "04", title: "Smart Doctor Matching", desc: "Matches based on availability, language, reviews, and clinical background." },
              { num: "05", title: "Healthcare Journey Maps", desc: "Visual steps displaying booking, consultation, and recovery treatment milestones." },
              { num: "06", title: "AI Follow-Up System", desc: "Dispatches recovery feedback triggers on Day 1, Day 7, and Day 30 automatically." },
              { num: "07", title: "Practice Growth Board", desc: "Clinician analytics for tracking patient counts, billing volume, and feedback." },
              { num: "08", title: "Unified Health Story", desc: "Visual personal health timeline summarizing medical events across years." },
              { num: "09", title: "Family Care Hub", desc: "Allows caregivers to coordinate files and bookings for multiple dependants." },
              { num: "10", title: "Document Analyzer", desc: "AI OCR summarizing complex laboratory reports and explaining clinical terms." },
              { num: "11", title: "Voice Booking Concierge", desc: "Enables patients to query availability and book providers via speech commands." },
              { num: "12", title: "Smart Availability Engine", desc: "Optimal slot prediction reducing no-show probability and clinic downtime." },
              { num: "13", title: "Marketplace-SaaS Hybrid", desc: "Provides patient doctor-discovery alongside dedicated backend practice tools." },
              { num: "14", title: "Patient Engagement Score", desc: "Algorithmic grading based on consultation attendance and medication updates." },
              { num: "15", title: "Healthcare Workflow Builder", desc: "Visual trigger automations (e.g. Completed consult -> Send prescription -> Request Review)." },
              { num: "16", title: "Specialty Clinic Templates", desc: "Pre-designed vertical structures for Dental, Cardiology, and Mental Health practices." }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="glass-panel rounded-xl p-5 border border-brand-border flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-brand-cyan/60 block mb-2">{item.num}</span>
                  <h4 className="font-display font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ======================================
            TECH STACK GRID
        ====================================== */}
        <section className="mb-28">
          <div className="text-center mb-12">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              Enterprise Telemedicine Stack
            </h2>
            <p className="mt-3 text-gray-400 max-w-xl mx-auto">
              Modern framework technologies selected to maintain low WebRTC video latency and secure EMR database scaling.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
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
            DATABASE SCHEMA DESIGN
        ====================================== */}
        <section className="mb-28">
          <div className="glass-panel rounded-2xl p-8 border border-brand-border text-left">
            <div className="flex items-center space-x-3 mb-8">
              <Database className="w-6 h-6 text-brand-cyan" />
              <div>
                <h2 className="font-display font-bold text-2xl text-white">Prisma DB Schema Layout</h2>
                <p className="text-sm text-gray-400">PostgreSQL Relational Structures - fully typed, migration-safe, auditable records</p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {databaseTables.map((t) => (
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
            FAQ SECTION
        ====================================== */}
        <section className="mb-28 text-left">
          <div className="text-center mb-14">
            <div className="inline-flex items-center space-x-2 bg-brand-indigo/10 border border-brand-indigo/20 rounded-full px-4 py-1.5 mb-4">
              <BookOpen className="w-4 h-4 text-brand-indigo" />
              <span className="text-xs font-semibold text-brand-indigo uppercase tracking-widest">FAQS</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              Questions & Answers
            </h2>
            <p className="mt-3 text-gray-400 max-w-xl mx-auto">
              Everything you need to know about compliance, features, subscription plans, and integration steps.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
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
                Ready to deploy Virtual Clinic OS?
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
                Host remote patient portals, optimize doctor schedules with AI, and grow clinic revenues safely inside your organization.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                <Link href="/contact" className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-semibold px-8 py-4 rounded-xl hover:opacity-95 transition-opacity shadow-lg shadow-brand-cyan/25">
                  <Sparkles className="w-4 h-4" />
                  <span>Launch Platform OS</span>
                </Link>
                <Link href="/contact" className="inline-flex items-center space-x-2 glass-panel border border-brand-border text-gray-300 font-semibold px-8 py-4 rounded-xl hover:border-brand-cyan/40 hover:text-white transition-all">
                  <Phone className="w-4 h-4" />
                  <span>Request Custom Setup</span>
                </Link>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
                <a href="https://github.com/alimubashir822/ClinicOS" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-brand-cyan transition-colors">
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
