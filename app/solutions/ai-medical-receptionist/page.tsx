"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Sparkles, Brain, Calendar, MessageSquare,
  Shield, Users, Activity, CheckCircle, Star, TrendingUp,
  Lock, Bell, Zap, ChevronDown, LayoutDashboard, Phone, Globe,
  Database, Server, BarChart3, Building2,
  RefreshCw, Smile, Stethoscope, BookOpen, Mic, X, Clock,
  ShieldCheck, Eye, UserCog
} from "lucide-react";


/* --- Types --- */
interface Feature { icon: React.ReactNode; title: string; desc: string; badge?: string; }
interface Differentiator { icon: React.ReactNode; title: string; subtitle: string; desc: string; color: string; glow: string; }
interface FAQ { q: string; a: string; }

/* =======================================================
   DATA
======================================================= */

const coreFeatures: Feature[] = [
  { icon: <Brain className="w-5 h-5" />, title: "AI Patient Qualification", desc: "Before booking, the AI qualifies leads by capturing their name, contact, insurance details, and clinical concerns.", badge: "Flagship" },
  { icon: <Phone className="w-5 h-5" />, title: "AI Voice Receptionist", desc: "A natural telephone voice agent that answers clinic calls, schedules procedures, answers FAQs, and routes complex calls.", badge: "Premium" },
  { icon: <Calendar className="w-5 h-5" />, title: "Smart Appointment Booking", desc: "Interactive slot selection synced with provider rosters, location availability, treatment duration, and buffer rules.", badge: "Smart" },
  { icon: <LayoutDashboard className="w-5 h-5" />, title: "Command Center Dashboard", desc: "Track conversation volumes, bookings, leads, call logs, and performance metrics from one unified workspace.", badge: "Centralized" },
  { icon: <TrendingUp className="w-5 h-5" />, title: "Revenue Opportunity Finder", desc: "AI indexes conversations to highlight missed opportunities: e.g. '12 implant inquiries did not book - potential $24,000 lost.'", badge: "ROI Driven" },
  { icon: <Users className="w-5 h-5" />, title: "Human Handoff Workspace", desc: "Allows clinical staff to intervene in live chats seamlessly when a patient flags high-priority or urgent symptoms.", badge: "Co-Pilot" },
  { icon: <MessageSquare className="w-5 h-5" />, title: "Omnichannel Integrations", desc: "One centralized AI receptionist brain deployed across Web Widget, WhatsApp, SMS, Email, and Phone routing channels." },
  { icon: <Lock className="w-5 h-5" />, title: "Healthcare Safety Standards", desc: "AI is constrained by strict clinical boundaries: provides general info, avoids diagnoses, and recommends professional care." },
  { icon: <Clock className="w-5 h-5" />, title: "Missed Call Recovery", desc: "When a call is missed, the AI instantly triggers a text back: 'Sorry we missed you. How can our clinic team help today?'" },
  { icon: <Bell className="w-5 h-5" />, title: "Reminder Automations", desc: "Auto-routes SMS and email notifications: confirmations, 24h reminders, post-treatment instructions, and cleaning recalls." },
  { icon: <BookOpen className="w-5 h-5" />, title: "Clinic Knowledge Studio", desc: "Upload PDFs, clinician profiles, pricing tables, insurance lists, and website URLs. The AI updates its knowledge instantly." },
  { icon: <Database className="w-5 h-5" />, title: "Patient CRM Ledger", desc: "Store qualified patient cards containing contact details, complete conversation histories, active bookings, and lead scores." },
];

const differentiators: Differentiator[] = [
  { icon: <Activity className="w-7 h-7" />, title: "Full Patient Journey Loop", subtitle: "Visitor → Lead Qualification → Booking → Follow-up", desc: "While traditional chatbots only answer basic FAQs, CareDesk manages the complete patient journey automatically - re-engaging them for post-visit feedback and checkup recalls.", color: "from-brand-cyan/20 to-brand-indigo/10", glow: "rgba(6,182,212,0.15)" },
  { icon: <Brain className="w-7 h-7" />, title: "Clinic Knowledge Studio", subtitle: "Upload clinic PDFs, URLs, and rules to train your AI", desc: "Instead of generic answers, the AI learns the clinic's exact policies: doctors list, copay rules, pricing sheets, and custom directions. Pushes clinic-approved, accurate data to patients.", color: "from-brand-indigo/20 to-purple-500/10", glow: "rgba(99,102,241,0.15)" },
  { icon: <Phone className="w-7 h-7" />, title: "AI Voice Receptionist", subtitle: "Handles telephone booking and calls routing naturally", desc: "An enterprise voice agent utilizing advanced speech synthesis (ElevenLabs) and call flows (Twilio). Answers calls, confirms dates, coordinates cancellations, and routes emergencies.", color: "from-brand-emerald/20 to-brand-cyan/10", glow: "rgba(16,185,129,0.15)" },
  { icon: <TrendingUp className="w-7 h-7" />, title: "Revenue Opportunity Finder", subtitle: "Identifies unconverted patients and highlights lost revenue", desc: "AI reviews chats, flags inquiries that left without booking (e.g. cosmetic whitening, implants), calculates potential revenue value, and prompts front desk follow-ups.", color: "from-amber-500/20 to-orange-500/10", glow: "rgba(245,158,11,0.15)" },
  { icon: <Users className="w-7 h-7" />, title: "Staff Collaboration Workspace", subtitle: "Seamless handover from AI to clinic staff", desc: "Designed to help receptionists. Pushes live transcripts, intent summaries, and patient background context when transferring chats to staff, reducing human friction.", color: "from-rose-500/20 to-pink-500/10", glow: "rgba(244,63,94,0.15)" },
  { icon: <Bell className="w-7 h-7" />, title: "No-Show Risk Predictor", subtitle: "Flags cancel risks and triggers extra reminders", desc: "Reviews patient scheduling logs, identifies high-risk slots (e.g. double cancels in past), and initiates personalized confirmation requests to prevent clinic gaps.", color: "from-violet-500/20 to-brand-indigo/10", glow: "rgba(139,92,246,0.15)" },
];

const portalModules = [
  { icon: <LayoutDashboard className="w-5 h-5" />, title: "Command Center", items: ["Conversations Counter", "Appointments Booked", "Leads qualified", "AI Resolution Rate %"] },
  { icon: <MessageSquare className="w-5 h-5" />, title: "Chat Widget Settings", items: ["Embed script builder", "Name & Tone configs", "Suggested action buttons", "Translation triggers"] },
  { icon: <Phone className="w-5 h-5" />, title: "Voice Call Portal", items: ["Twilio SIP registrations", "Voice log transcripts", "Transfer routing rules", "Voice synthesis selectors"] },
  { icon: <Calendar className="w-5 h-5" />, title: "Smart Scheduling", items: ["Doctor duration matrices", "Reschedule automations", "Buffer block controls", "Waitlist matchmaking"] },
  { icon: <Users className="w-5 h-5" />, title: "Patient CRM Hub", items: ["Lead qualification cards", "Conversation history", "Contact information ledger", "Lead scoring index"] },
  { icon: <BookOpen className="w-5 h-5" />, title: "Knowledge Studio", items: ["FAQ upload templates", "Website URL scanners", "Policy PDF indexing", "Training simulator studio"] },
  { icon: <Bell className="w-5 h-5" />, title: "Reminders Engine", items: ["SMS appointment alerts", "Email confirmation sheets", "Recall campaign schedules", "Feedback forms dispatch"] },
  { icon: <BarChart3 className="w-5 h-5" />, title: "Business Analytics", items: ["Missed call recoveries", "Revenue opportunities log", "Staff load indicators", "Conversion rate analytics"] },
];

const techStack = [
  { category: "Frontend", items: ["Next.js 15 App Router", "TypeScript", "Tailwind CSS styling", "shadcn/ui layout modules", "Framer Motion micro-animations"], icon: <Globe className="w-5 h-5" /> },
  { category: "Backend & Voice", items: ["Next.js Server Actions", "Twilio SIP call routing", "ElevenLabs voice APIs", "Zod data schema validation"], icon: <Server className="w-5 h-5" /> },
  { category: "Database & Storage", items: ["PostgreSQL database cluster", "Prisma ORM database schema", "Multi-tenant clinic separation", "Audit logs storage"], icon: <Database className="w-5 h-5" /> },
  { category: "AI & Communication", items: ["OpenAI GPT-4o LLM", "LangChain conversational flows", "SendGrid email templates", "Twilio SMS messaging integrations"], icon: <Lock className="w-5 h-5" /> },
];

const stats = [
  { value: "24/7", label: "Front-Desk Coverage", icon: <LayoutDashboard className="w-5 h-5" /> },
  { value: "85%", label: "Avg. Resolution Rate", icon: <CheckCircle className="w-5 h-5" /> },
  { value: "70%", label: "Missed Call Reduction", icon: <Phone className="w-5 h-5" /> },
  { value: "30%", label: "Staff Time Saved", icon: <Users className="w-5 h-5" /> },
  { value: "4", label: "Deployment Channels", icon: <TrendingUp className="w-5 h-5" /> },
  { value: "9+", label: "Ecosystem Integrations", icon: <RefreshCw className="w-5 h-5" /> },
];

const useCases = [
  {
    icon: <Phone className="w-6 h-6" />,
    specialty: "High-Volume Pediatric Practice",
    color: "brand-cyan",
    scenario: "Managing seasonal appointment spikes and parent queries",
    journey: [
      "Parent calls at 8 PM regarding child's fever. AI Voice answers instantly: 'Thank you for calling Pediatric Care...'",
      "AI references knowledge base: 'Minor fever post-vaccine is common. Let's schedule a priority consult tomorrow at 9 AM with Dr. Jenkins.'",
      "Schedules slot, triggers confirmation text to parent, and compiles background context brief.",
      "Pushes patient symptoms and call logs to the receptionist dashboard.",
      "Automated SMS triggers at 8 AM next morning confirming pediatric checkup."
    ],
    outcome: "Pediatric clinics reduce phone queue hold times by 80% and save 15 front-desk hours weekly."
  },
  {
    icon: <Smile className="w-6 h-6" />,
    specialty: "Aesthetic Dentistry Clinic",
    color: "rose-400",
    scenario: "Qualifying and capturing high-value cosmetic leads",
    journey: [
      "Visitor opens website widget, asks: 'Do you offer porcelain veneers and what are the costs?'",
      "AI Chat Widget details clinic process, pricing estimates, and checks options.",
      "Lead qualification scanner asks: 'Do you have insurance? Are you looking for orthodontics?'",
      "Flags Sarah as a 'High-Value Lead' (Veneer candidate) and schedules consultation with cosmetic doctor.",
      "If Sarah abandons: Revenue opportunity tracker highlights lead value for manager follow-up."
    ],
    outcome: "Cosmetic practices boost booking conversion rates by 40% and capture $15,000+ monthly in missed leads."
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    specialty: "Multi-Specialty Clinic Group",
    color: "brand-emerald",
    scenario: "Coordinating call routing across 5 branch departments",
    journey: [
      "Patient contacts central helpline requesting cardiology consult.",
      "Omnichannel AI checks provider availability schedules across branches.",
      "Books slot at Downtown Branch, triggers EHR check, updates clinic schedules.",
      "When patient asks specific clinical questions, AI initiates human handoff: routes call to head nurse."
    ],
    outcome: "Healthcare groups save $40,000 annually per location on call-center staffing costs."
  },
  {
    icon: <Users className="w-6 h-6" />,
    specialty: "Family Orthodontic Practice",
    color: "brand-indigo",
    scenario: "Managing multi-phase aligner appointments & recalls",
    journey: [
      "Parent opens WhatsApp, requests back-to-back checks for two children.",
      "CareDesk booking assistant groups slots, schedules reminders on family calendar.",
      "Reminders engine sends bi-weekly aligner swap prompts and monthly payment invoices.",
      "Recall automations re-engage lost hygiene patients, re-booking them automatically."
    ],
    outcome: "Orthodontists decrease no-shows to under 2% and increase hygiene recall bookings by 35%."
  }
];

const faqs: FAQ[] = [
  // Column 1 - Product & Setup
  { q: "Is the AI Medical Receptionist secure and HIPAA compliant?", a: "Yes. CareDesk is built on end-to-end encrypted architecture using AES-256 standards. All conversations, leads, and scheduling data are stored securely. We sign Business Associate Agreements (BAAs) with all medical clinics." },
  { q: "Will the AI provide medical diagnoses to patients?", a: "No. CareDesk follows strict safety guidelines. It answers general FAQs (pricing, location, policies, insurance checks) and books slots. It is blocked from diagnosing symptoms, instead routing clinical issues to staff." },
  { q: "How does the AI Voice Receptionist work?", a: "It utilizes Twilio SIP trunks to route your clinic telephone lines. ElevenLabs advanced voice synthesis handles calls naturally: answers questions, matches calendar slots, and transfers complex calls to your staff." },
  { q: "How do we train the AI on our clinic guidelines?", a: "Via the Knowledge Studio. Admins upload clinic policy PDFs, doctor bio sheets, pricing tables, and website URLs. The AI parses the data and learns your operations instantly." },
  { q: "Does the AI receptionist support multi-clinic groups?", a: "Yes. CareDesk has multi-tenant database isolation. One account can manage separate branches, separate schedules, separate payment profiles, and isolated rosters." },
  { q: "What happens during a human handoff?", a: "When a patient requests urgent help or flags clinical issues, the AI alerts your staff. Staff opens the Human Receptionist Workspace, views the conversation summary, and takes over the chat." },
  { q: "Does CareDesk integrate with EHR or PMS setups?", a: "Yes. CareDesk supports HL7 FHIR APIs to sync schedules and patient details with practice management systems like Dentrix, Eaglesoft, Open Dental, or Epic." },
  { q: "How does the Missed Call Recovery SMS work?", a: "If a call to the clinic is missed or busy, Twilio triggers an automated text: 'Sorry we missed your call. How can we help you book or query?' Re-engages patients instantly." },
  { q: "What is the Revenue Opportunity Finder?", a: "A dashboard feature that reads chat logs and flags inquiries that left without booking. Calculates potential treatment revenue (e.g. implants value) to prompt front-office outreach." },
  { q: "How long does onboarding take?", a: "A standard setup (Web widget, booking schedules, and basic FAQ index) is typically deployed within 4–6 weeks. Custom voice lines or EHR integrations take 3–4 months." },
  // Column 2 - Technical & Integrations
  { q: "What database architecture does CareDesk use?", a: "We run a PostgreSQL database with Prisma ORM. The relational tables include: Users, Clinics, Patients, Conversations, Messages, Appointments, Services, KnowledgeBase, Automations, and Analytics." },
  { q: "Can we customize the AI personality, voice, and language?", a: "Yes. Inside the Personality settings, admins can select the AI name, language (English, Spanish, Arabic), tone (Friendly, Professional, Luxury), and gender voices (Male or Female)." },
  { q: "How are notifications and reminders triggered?", a: "Our reminders engine links to Twilio for SMS and SendGrid for emails. Workflows trigger automatically: confirmation on booking, 24h reminder text, post-treatment instructions, and 6-month checks." },
  { q: "What happens if a patient uploads a document?", a: "Files (e.g. insurance cards, clinical forms) are sent to secure Cloudflare R2 storage using expiring, signed URLs. Only authorized staff and clinic databases can read the files." },
  { q: "Is there a desktop app for clinic receptionists?", a: "CareDesk is built as a highly responsive Next.js Progressive Web App (PWA). It runs on any desktop, tablet, or mobile phone, sending real-time browser notifications for human handoffs." },
  { q: "Can patients reschedule or cancel through the AI?", a: "Yes. Patients can ask the AI widget or voice agent to reschedule. The system validates availability rules, cancels the old slot, and updates the database instantly." },
  { q: "Does the system support split payments or installment plans?", a: "Yes. CareDesk integrates with Stripe to manage deposit payments, installment agreements, and multi-phase treatment plan invoices." },
  { q: "What business metrics are visible to the clinic manager?", a: "Managers see KPI cards for total calls, appointments booked, leads qualified, AI resolution rate %, missed call recoveries, and estimated revenue saved." },
  { q: "Can we test the AI before it goes live?", a: "Yes. Inside the Knowledge Studio, admins can use the Training Simulator to chat with the AI, review its answers, and adjust clinic FAQs before embed scripting." },
  { q: "How do we export patient and conversation data?", a: "Clinic admins can download complete lists of patient records, booking history ledgers, and conversation logs compiled into standard HL7 FHIR bundles or CSV sheets." },
];

/* =======================================================
   COMPONENT
======================================================= */
export default function AIMedicalReceptionistPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeUseCase, setActiveUseCase] = useState(0);

  // Interactive Mock Dashboard States
  const [activeDashboardTab, setActiveDashboardTab] = useState("Dashboard");
  const [dashboardChat, setDashboardChat] = useState([
    { sender: "ai", text: "Hello! Welcome to Smile Clinic. How can I help you today? 👋" }
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
          <span className="text-white">AI Medical Receptionist System</span>
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
                <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest">AI Medical Receptionist System</span>
                <Sparkles className="w-3 h-3 text-brand-cyan" />
              </div>

              {/* Headline */}
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl xl:text-5xl text-white leading-[1.15] tracking-tight">
                Your AI Healthcare Receptionist.<br />
                <span className="text-gradient-cyan-indigo">Conversations. Bookings. Leads.</span><br />
                <span className="text-gradient-emerald-cyan">Works 24/7</span> For Your Clinic.
              </h1>

              {/* Subtitle */}
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                An AI employee that works 24/7 for healthcare businesses. Replaces repetitive desk work by handling the complete patient journey from visitor checkups and lead qualification to smart booking, confirmations, and follow-ups.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/demo?tab=receptionist"
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
                  { icon: <Star className="w-3.5 h-3.5 text-amber-400" />, label: "24/7 Availability", bg: "bg-amber-400/10 border-amber-400/20" },
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
                      <Brain className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="font-display font-bold text-white text-xs tracking-wide">CareDesk Workspace</span>
                  </div>
                  
                  {/* Status */}
                  <div className="flex items-center space-x-2 bg-brand-emerald/10 border border-brand-emerald/25 rounded-full px-2.5 py-1">
                    <div className="w-1.5 h-1.5 bg-brand-emerald rounded-full animate-pulse" />
                    <span className="text-[10px] text-brand-emerald font-semibold">AI Receptionist (Online)</span>
                  </div>
                </div>

                {/* Dashboard Inner Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-brand-border h-[430px]">
                  
                  {/* Sidebar (3 cols) */}
                  <div className="md:col-span-4 p-4 space-y-1.5 bg-white/[0.01]">
                    <p className="text-[9px] text-gray-500 uppercase font-bold tracking-wider mb-2 px-2">Navigation</p>
                    {[
                      { id: "Dashboard", label: "KPIs Dashboard", icon: <LayoutDashboard className="w-3.5 h-3.5" /> },
                      { id: "Conversations", label: "AI Conversations", icon: <MessageSquare className="w-3.5 h-3.5" /> },
                      { id: "Leads", label: "Leads Qualified", icon: <Users className="w-3.5 h-3.5" /> },
                      { id: "Voice", label: "Voice Logs", icon: <Mic className="w-3.5 h-3.5" /> },
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
                      <p className="text-[9px] text-gray-500 uppercase font-bold tracking-wider mb-2 px-2">Active Agent</p>
                      <div className="flex items-center space-x-2 px-2 py-1">
                        <div className="w-6 h-6 rounded-full bg-brand-cyan/20 flex items-center justify-center text-[10px] font-bold text-brand-cyan">
                          S
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-white">Sarah AI</p>
                          <p className="text-[8px] text-gray-500">Language: En / Es</p>
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
                          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Business Analytics</h4>
                          <span className="text-[10px] text-gray-500 font-mono">Real-time sync</span>
                        </div>

                        {/* Top Cards row */}
                        <div className="grid grid-cols-2 gap-3">
                          {/* Conversational Counter */}
                          <div className="bg-gradient-to-br from-brand-cyan/10 to-brand-indigo/5 rounded-xl p-3.5 border border-brand-cyan/15">
                            <span className="text-[9px] text-gray-500 block">AI Resolution Rate</span>
                            <div className="flex items-end space-x-1.5 mt-0.5 mb-1.5">
                              <span className="text-3xl font-display font-extrabold text-white">85</span>
                              <span className="text-sm font-bold text-brand-cyan mb-1">%</span>
                            </div>
                            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden mb-1">
                              <div className="h-full w-[85%] bg-gradient-to-r from-brand-cyan to-brand-indigo rounded-full" />
                            </div>
                            <span className="text-[8px] text-brand-emerald font-semibold">124 active chats today</span>
                          </div>

                          {/* Insight Alert */}
                          <div className="bg-brand-indigo/5 rounded-xl p-3.5 border border-brand-indigo/15 flex flex-col justify-between">
                            <div>
                              <div className="flex items-center space-x-1 mb-1">
                                <Sparkles className="w-3 h-3 text-brand-cyan" />
                                <span className="text-[9px] text-brand-cyan font-bold uppercase">Opportunity Finder</span>
                              </div>
                              <p className="text-[10px] text-gray-300 leading-snug">
                                45 patients asked about implants, 12 did not book. Potential revenue: <span className="text-amber-400 font-semibold">$60,000</span>.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Recent Event log */}
                        <div className="glass-panel rounded-xl p-3 border border-brand-border bg-white/[0.01]">
                          <p className="text-[9px] text-gray-500 font-bold uppercase tracking-wider mb-2">Missed Call Recovery</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <div className="w-8 h-8 rounded-lg bg-brand-cyan/10 flex items-center justify-center text-brand-cyan">
                                <Phone className="w-4 h-4" />
                              </div>
                              <div>
                                <p className="text-xs font-bold text-white">SMS back triggered</p>
                                <p className="text-[9px] text-gray-500">To +1 (555) 321-9876 · Just now</p>
                              </div>
                            </div>
                            <span className="text-[8px] bg-brand-emerald/10 border border-brand-emerald/25 text-brand-emerald rounded px-1.5 py-0.5">Success</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeDashboardTab === "Conversations" && (
                      <div className="flex flex-col h-full justify-between flex-grow">
                        <div className="flex justify-between items-center border-b border-brand-border/60 pb-2 mb-2">
                          <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-wider flex items-center space-x-1">
                            <Brain className="w-3 h-3 text-brand-cyan animate-pulse mr-1" />
                            <span>Sarah AI Widget</span>
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
                                {msg.text}
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
                              { q: "🦷 Book Cleaning", a: "I can check scheduling templates for dental cleaning. Which day works best for your appointment, tomorrow or Friday?" },
                              { q: "💰 Implant Pricing", a: "Standard implants are $2,500. With insurance pre-auth, out-of-pocket estimates average $1,200. Would you like to check dates?" },
                              { q: "📍 Check Location", a: "Smile Clinic is located at Suite 320, 100 Medical Plaza, SF. We have free parking for patients. Would you like directions sent?" },
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

                    {activeDashboardTab === "Leads" && (
                      <div className="space-y-3.5 flex-grow">
                        <div className="flex justify-between items-center">
                          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Qualified Leads CRM</h4>
                          <span className="text-[9px] bg-brand-cyan/10 border border-brand-cyan/20 rounded-full px-2 py-0.5 text-brand-cyan text-[8px] font-bold">2 Pinned</span>
                        </div>

                        <div className="space-y-2.5">
                          {[
                            { name: "John Smith", value: "92/100", reason: "Implant pricing query, has Delta Dental", color: "text-brand-emerald bg-brand-emerald/10 border-brand-emerald/20" },
                            { name: "Emily Watson", value: "78/100", reason: "Root canal discomfort, looking for slots", color: "text-brand-cyan bg-brand-cyan/10 border-brand-cyan/20" },
                          ].map((lead) => (
                            <div key={lead.name} className="glass-panel rounded-xl p-3 border border-brand-border flex items-center justify-between">
                              <div>
                                <p className="text-xs font-semibold text-white">{lead.name}</p>
                                <p className="text-[9px] text-gray-500">{lead.reason}</p>
                              </div>
                              <div className="text-right">
                                <span className={`inline-block text-[8px] font-extrabold px-1.5 py-0.5 rounded-full border mt-0.5 ${lead.color}`}>
                                  Score: {lead.value}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeDashboardTab === "Voice" && (
                      <div className="space-y-3.5 flex-grow flex flex-col justify-center">
                        <div className="border border-dashed border-brand-cyan/35 bg-brand-cyan/5 rounded-2xl p-6 text-center hover:border-brand-cyan/50 hover:bg-brand-cyan/10 transition-all cursor-pointer">
                          <Mic className="w-8 h-8 text-brand-cyan mx-auto mb-2 animate-pulse" />
                          <p className="text-xs font-bold text-white">Call Routing Console</p>
                          <p className="text-[10px] text-gray-500 mt-1 max-w-[220px] mx-auto">
                            Inspect voice call audio transcripts, route numbers, and ElevenLabs synthesis models settings.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Bottom active tab navigation helper on mobile */}
                    <div className="text-[9px] text-gray-500 text-center border-t border-brand-border/60 pt-2 flex items-center justify-between">
                      <span>Click tabs in navigation sidebar to explore CareDesk dashboard.</span>
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
              <span className="text-xs font-semibold text-brand-indigo uppercase tracking-widest">Differentiators</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              Not just a basic chatbot -{" "}
              <span className="text-gradient-cyan-indigo">an intelligent employee</span>
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              SaaS platforms for clinics usually stop at basic FAQs. CareDesk manages the complete patient journey from visitor to scheduling, reminders, and follow-ups.
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
              Traditional Chatbots vs{" "}
              <span className="text-gradient-emerald-cyan">CareDesk AI System</span>
            </h2>
            <p className="mt-3 text-gray-400 max-w-xl mx-auto">
              How CareDesk eliminates front-desk fatigue and recovers missed clinic revenue.
            </p>
          </div>

          <div className="glass-panel rounded-2xl border border-brand-border overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 bg-white/3 border-b border-brand-border">
              <div className="p-5 text-xs font-bold text-gray-500 uppercase tracking-wider">Feature</div>
              <div className="p-5 text-center border-x border-brand-border">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Basic Chatbot</p>
              </div>
              <div className="p-5 text-center bg-brand-cyan/5">
                <p className="text-xs font-bold text-brand-cyan uppercase tracking-wider">CareDesk AI employee</p>
              </div>
            </div>
            {[
              ["Patient Journey", "Answers FAQs only", "Visitor → Qualification → Booking → Reminders → Recalls"],
              ["Availability Engine", "Static calendar link", "Real-time doctor calendar slots, duration checks, location sync"],
              ["Voice Telephone Support", "None", "Twilio SIP natural audio agent answers phone calls, books, and transfers"],
              ["Lead Collection & Scoring", "Forms dispatch", "Conversational pre-qualification and priority lead scoring"],
              ["Revenue Tracker", "None", "Identifies unconverted chat queries, calculating potential revenue values"],
              ["Clinic Setup Studio", "Developer integration needed", "Setup wizard connects calendars and uploads FAQ templates in clicks"],
              ["Human Handoff", "Disconnects chat", "Seamless handoff routing transcripts and intent briefs to staff"],
              ["Channels Supported", "Web only", "Pushes same AI context to Web, Voice, WhatsApp, SMS, and Email"],
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
              <span className="text-xs font-semibold text-brand-cyan uppercase tracking-widest">Employee Flow</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              The automated patient journey,{" "}
              <span className="text-gradient-cyan-indigo">managed by AI</span>
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Here is how CareDesk handles a patient named John from his first missed call to post-visit checkups.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-brand-cyan via-brand-indigo via-brand-emerald to-amber-400 hidden lg:block" />
            <div className="space-y-6">
              {[
                {
                  time: "Step 1: Missed Call Recovery",
                  title: "SMS back triggers instantly",
                  desc: "John calls the clinic at 12 PM when lines are busy. The system intercepts the missed call and auto-dispatches an SMS: 'Hi, we missed your call. Need to book an appointment or check pricing? Click to chat.'",
                  color: "brand-cyan",
                  tag: "Missed Call",
                },
                {
                  time: "Step 2: Conversation & Lead Check",
                  title: "Patient qualified conversationally",
                  desc: "John clicks the link. AI asks: 'What service do you need today?' John: 'Teeth cleaning and whitening.' AI pre-qualifies: checks if he's a new patient, captures his insurance carrier (Aetna), and scores the lead at 90/100.",
                  color: "brand-indigo",
                  tag: "AI Qualification",
                },
                {
                  time: "Step 3: Appointment Booking",
                  title: "Calendar optimized and booked",
                  desc: "AI presents available cleaning slots matching John's timing and Dr. Siddiqui's schedule. John selects Friday at 2:00 PM. AI books the slot, triggers database schedules, and updates the clinic CRM.",
                  color: "brand-emerald",
                  tag: "Booking Engine",
                },
                {
                  time: "Step 4: Automated Reminders",
                  title: "No-Show prevention workflows",
                  desc: "CareDesk triggers an email confirmation immediately. On Thursday at 2:00 PM (24 hours prior), the system routing sends a text: 'Hi John, verify your appointment tomorrow at 2 PM by replying YES.' John confirms.",
                  color: "amber-400",
                  tag: "Reminders",
                },
                {
                  time: "Step 5: Follow-Up & Feedback",
                  title: "Brings patient back",
                  desc: "After the checkup, CareDesk sends a follow-up text check-in: 'How was your cleaning with Dr. Siddiqui?' John leaves a 5-star rating. AI updates hygiene indicators and flags next recall checkup for 6 months.",
                  color: "brand-cyan",
                  tag: "AI Follow-Up",
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
              An AI employee built for clinic growth,{" "}
              <span className="text-gradient-emerald-cyan">all-in-one platform</span>
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
                <span className="text-xs font-semibold text-brand-cyan uppercase tracking-widest">Workspaces Map</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-4">
                Structured clinical dashboards{" "}
                <span className="text-gradient-cyan-indigo">for clinic staff</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                CareDesk separates clinical scheduling, audio voice routing, and SMS campaigns logs. Pushes real-time context briefs when routing calls to receptionist desks.
              </p>
              <div className="glass-panel rounded-xl p-5 border border-brand-border">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">5-Step Patient Journey Funnel</p>
                <div className="flex items-center flex-wrap gap-2">
                  {["Visitor", "Conversation", "Qualification", "Booking", "Reminders", "Follow-up"].map((step, i, arr) => (
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
              <span className="text-xs font-semibold text-brand-cyan uppercase tracking-widest">Performance Timeline</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              AI Employee performance log,{" "}
              <span className="text-gradient-cyan-indigo">tracked over time</span>
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Follow the deployment steps and measured metrics as the AI receptionist is onboarded and integrated into your daily clinic workflows.
            </p>
          </div>

          <div className="relative mb-10">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-brand-cyan via-brand-indigo via-amber-400 to-brand-emerald hidden lg:block" />
            <div className="space-y-6">
              {[
                {
                  year: "Phase 1: Onboarding", event: "Setup & Knowledge studio",
                  detail: "Connect calendars · Upload FAQ policy PDFs and URLs · Train the receptionist brain.",
                  color: "brand-cyan",
                  ai: "Knowledge base indexed successfully: 48 services mapped. Calendar sync setup with Dentrix.", category: "Onboarding"
                },
                {
                  year: "Phase 2: Launch widget", event: "Web widget goes live",
                  detail: "Embed booking widget on main site. Launch lead scoring metrics.",
                  color: "brand-indigo",
                  ai: "Conversation rate: 72%. Qualified leads CRM active. AI handles 85% of queries without staff help.", category: "Integration"
                },
                {
                  year: "Phase 3: Omnichannel voice", event: "Twilio Voice & WhatsApp links",
                  detail: "Answers telephone routing. WhatsApp recall automations enabled.",
                  color: "amber-400",
                  ai: "Voice log active: 250 calls processed. Twilio SMS missed call text backs recovered 35 patient leads.", category: "Omnichannel"
                },
                {
                  year: "Phase 4: Full Autopilot", event: "Recall campaigns & ROI metrics",
                  detail: "Revenue Opportunity Finder enabled. Hygiene recall text flows active.",
                  color: "brand-emerald",
                  ai: "Conversion rate increased to 88%. Saved $18,500 in missed bookings. Staff load reduced 30%.", category: "Autopilot"
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
                    {i + 1}
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
              { icon: <Mic className="w-5 h-5" />, title: "Voice Call Transcripts", desc: "Access full audio records and text transcripts of calls handled by the AI.", color: "brand-cyan" },
              { icon: <Globe className="w-5 h-5" />, title: "Multilingual translation", desc: "AI chats naturally in English, Spanish, and Arabic to resolve patient barriers.", color: "brand-indigo" },
              { icon: <TrendingUp className="w-5 h-5" />, title: "Smart Lead Scoring", desc: "Sort incoming inquiries by procedure values, insurance, and slot priority.", color: "brand-emerald" },
              { icon: <Users className="w-5 h-5" />, title: "Staff Collaboration Workspace", desc: "Transfers complex chat records and summaries to your office desks in one click.", color: "amber-400" },
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
            AI RECEPTIONIST SIMULATOR SHOWCASE
        ====================================== */}
        <section className="mb-28">
          <div className="glass-panel rounded-2xl border border-brand-border overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 border-r border-brand-border">
                <div className="inline-flex items-center space-x-2 bg-brand-indigo/10 border border-brand-indigo/20 rounded-full px-4 py-1.5 mb-6">
                  <Brain className="w-4 h-4 text-brand-indigo" />
                  <span className="text-xs font-semibold text-brand-indigo uppercase tracking-widest">Training studio</span>
                </div>
                <h2 className="font-display font-extrabold text-3xl text-white mb-4">
                  CareDesk Widget -{" "}
                  <span className="text-gradient-cyan-indigo">your custom AI employee</span>
                </h2>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Set your receptionist details, choose friendly or professional tones, and select English, Spanish, or Arabic. CareDesk index files compile custom instructions.
                </p>
                <div className="space-y-3 mb-6">
                  {[
                    { action: "Natural Conversation", desc: "Discusses clinic options, locations, and procedures naturally" },
                    { action: "Symptom Intent Matching", desc: "Identifies if patient requires cleanings, implants, or emergencies" },
                    { action: "Pre-Qualification Checks", desc: "Collects insurance network status and emergency checkup triage" },
                    { action: "Calendar match engine", desc: "Presents available slot times matching doctor duration templates" },
                    { action: "Installment billing splits", desc: "Explains estimates, Stripe billing phases, and insurance shares" },
                    { action: "Staff handoff routing", desc: "Pushes transcription logs context when transferring to clinical staff" },
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
                  <p className="text-xs text-amber-400 font-semibold">! Healthcare Triage Rules</p>
                  <p className="text-xs text-gray-400 mt-1">
                    CareDesk provides booking parameters and FAQ details. It does not provide medical diagnoses or bypass physician consults.
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
                      <p className="text-sm font-semibold text-white">Sarah (AI Receptionist)</p>
                      <p className="text-[10px] text-brand-emerald">* Online - Trained on Smile Clinic data</p>
                    </div>
                  </div>

                  <div className="p-4 space-y-4 min-h-[320px]">
                    <div className="flex space-x-2">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-brand-cyan to-brand-indigo flex-shrink-0 flex items-center justify-center">
                        <Brain className="w-3.5 h-3.5 text-white" />
                      </div>
                      <div className="bg-brand-cyan/10 border border-brand-cyan/15 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%]">
                        <p className="text-sm text-gray-200">Hi! Welcome to Smile Clinic. I can help you check pricing, find directions, or book cleanings. What can I do for you today?</p>
                      </div>
                    </div>
                    <div className="flex space-x-2 justify-end">
                      <div className="bg-brand-indigo/20 border border-brand-indigo/20 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%]">
                        <p className="text-sm text-gray-200">I need teeth cleaning and whitening, and I have MetLife insurance.</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-brand-cyan to-brand-indigo flex-shrink-0 flex items-center justify-center">
                        <Brain className="w-3.5 h-3.5 text-white" />
                      </div>
                      <div className="bg-brand-cyan/10 border border-brand-cyan/15 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%]">
                        <p className="text-sm text-gray-200 mb-2">Excellent! Smile Clinic is in-network with MetLife. Cleanings are 100% covered. In-office whitening is $350 out-of-pocket.</p>
                        <p className="text-xs font-semibold text-brand-cyan">Confirm booking parameters:</p>
                        <ul className="mt-1 space-y-1 text-xs text-gray-400">
                          <li>• Dentist: Dr. Ahmed Siddiqui</li>
                          <li>• Cleaning slot: Friday at 2:00 PM</li>
                          <li>• Pre-Qualification: New patient status</li>
                        </ul>
                      </div>
                    </div>
                    {/* Quick actions */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {["🦷 Book Cleaning", "💰 Whitening Cost", "📍 Get Directions"].map((q) => (
                        <div key={q} className="text-[11px] bg-brand-cyan/10 border border-brand-cyan/20 rounded-full px-3 py-1.5 text-brand-cyan cursor-pointer hover:bg-brand-cyan/15 transition-colors">
                          {q}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="px-4 py-3 border-t border-brand-border">
                    <div className="flex items-center space-x-2 glass-panel rounded-xl px-3 py-2 border border-brand-border">
                      <input type="text" placeholder="Ask about services or timings..." className="flex-grow bg-transparent text-sm text-gray-300 placeholder-gray-600 outline-none" readOnly />
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
              <span className="text-xs font-semibold text-brand-emerald uppercase tracking-widest">Clinic Ecosystem</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              Symphonizing front-desk operations across your{" "}
              <span className="text-gradient-emerald-cyan">entire clinic</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <MessageSquare className="w-6 h-6 text-brand-cyan" />,
                iconBg: "bg-brand-cyan/10",
                title: "Embed Chat Widget", route: "/solutions/widget-builder", color: "brand-cyan",
                items: ["Natural FAQ conversationalist", "Patient pre-qualification", "Location & hours lookup", "Suggested action keys", "Multi-language translations", "Stripe payment deposits", "Secure document uploads", "Lead capture forms", "Live staff handoff alerts", "Mobile-responsive widget"],
              },
              {
                icon: <Users className="w-6 h-6 text-brand-indigo" />,
                iconBg: "bg-brand-indigo/10",
                title: "Receptionist Console", route: "/dashboard/workspace", color: "brand-indigo",
                items: ["Live chat transcripts viewer", "Conversation summaries briefs", "Qualified leads CRM lists", "Voice logs playback portal", "Priority appointment indicators", "Emergency triage warnings", "Patient notes editor", "Doctor availability grids", "Stripe invoice summaries", "Recall campaign dispatchers"],
              },
              {
                icon: <Activity className="w-6 h-6 text-brand-emerald" />,
                iconBg: "bg-brand-emerald/10",
                title: "Central Admin Dashboard", route: "/dashboard/settings", color: "brand-emerald",
                items: ["AI Name & Voice configs", "Knowledge Studio scanners", "Twilio SIP route routing", "Doctor schedule template blocks", "Omnichannel account links", "Multi-clinic database settings", "Auditable logging ledger", "Patient portability exports", "System health checker", "Recall strategy toggles"],
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
              <span className="text-gradient-cyan-indigo">medical environment</span>
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              CareDesk adapts to orthodontics, general practices, multi-location dental groups, and pediatrics offices. Review client results.
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
              <span className="text-gradient-emerald-cyan">clinical-grade patient privacy</span>
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Call logs and conversation transcripts are protected under strict security guidelines. CareDesk is built with data safety as a core parameter, not an afterthought.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: <Lock className="w-5 h-5" />, title: "AES-256 Encryption", desc: "All patient contact info and chat histories encrypted. No unencrypted logs touch server logs." },
              { icon: <ShieldCheck className="w-5 h-5" />, title: "Role-Based Access Control", desc: "Staff, billing admins, and office managers each have scoped console access rules." },
              { icon: <Eye className="w-5 h-5" />, title: "Full Audit Logging", desc: "Every call record view or chat logs export is logged with User ID, IP address, and timestamp." },
              { icon: <UserCog className="w-5 h-5" />, title: "Consent-based Storage", desc: "AI pre-qualifies data capture, requesting explicit patient consent before storing records in database tables." },
            ].map((feat, i) => (
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
                { label: "HIPAA Aligned Architecture", icon: "" },
                { label: "SOC 2 Audit Prepared", icon: "" },
                { label: "AES-256 Data Security", icon: "" },
                { label: "HL7 FHIR Sync Compatible", icon: "" },
                { label: "Multi-Tenant Separation", icon: "" },
                { label: "ISO 27001 Infrastructure", icon: "" },
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
              <span className="text-xs font-semibold text-brand-indigo uppercase tracking-widest">Integrations</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              Plugs into your{" "}
              <span className="text-gradient-cyan-indigo">existing clinic PMS</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "OpenAI GPT-4o", category: "AI Brain", desc: "Powers conversational qualification, FAQs search, and receptionist intent classification." },
              { name: "LangChain Engine", category: "AI Framework", desc: "Orchestrates chat contexts, conversational history checks, and training briefs." },
              { name: "PostgreSQL & Prisma", category: "Database Layer", desc: "Fully typed, schema-validated database with secure multi-tenant partitioning per clinic." },
              { name: "Stripe gateway", category: "Payments", desc: "Coordinates booking deposit payments, installment splits billing, and monthly SaaS billing." },
              { name: "AWS S3 / Cloudflare R2", category: "File Storage", desc: "Secure cloud buckets for clinic files, insurance cards, and transcript audio logs." },
              { name: "FHIR API Bridge", category: "PMS Syncing", desc: "Synchronizes rosters and appointments directly with Dentrix, Eaglesoft, or Open Dental software." },
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
              <span className="text-gradient-cyan-indigo">receptionist tech stack</span>
            </h2>
            <p className="mt-3 text-gray-400 max-w-xl mx-auto">
              Trained on modern medical language libraries, built to scale across multi-specialty practices.
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
                <p className="text-sm text-gray-400">PostgreSQL Relational Schema - fully typed, migration-safe, auditable</p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { table: "Users", fields: ["id", "name", "email", "role", "createdAt"] },
                { table: "Clinics", fields: ["id", "name", "subdomain", "settings", "ownerId"] },
                { table: "Patients", fields: ["id", "userId", "dob", "emergencyContact"] },
                { table: "Conversations", fields: ["id", "patientId", "clinicId", "status", "score"] },
                { table: "Messages", fields: ["id", "conversationId", "sender", "content", "createdAt"] },
                { table: "Appointments", fields: ["id", "patientId", "dentistId", "date", "status"] },
                { table: "Services", fields: ["id", "clinicId", "name", "duration", "cost"] },
                { table: "KnowledgeBase", fields: ["id", "clinicId", "fileName", "fileUrl", "aiIndexed"] },
                { table: "Automations", fields: ["id", "clinicId", "name", "trigger", "action"] },
                { table: "Analytics", fields: ["id", "clinicId", "chatsCount", "leadsCount", "revenueSaved"] },
                { table: "Leads", fields: ["id", "patientId", "interest", "score", "notes"] },
                { table: "AuditLogs", fields: ["id", "userId", "action", "resource", "ipAddress"] },
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
              <span className="text-gradient-cyan-indigo">answered clearly</span>
            </h2>
            <p className="mt-3 text-gray-400 max-w-xl mx-auto">
              Learn about CareDesk setups, custom voices configuration, PMS systems sync, and pricing bounds.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              { label: "Product & Setup", color: "brand-cyan", count: "10" },
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
                <span className="text-xs font-bold text-brand-cyan uppercase tracking-widest px-3">Product & Setup</span>
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
                <Brain className="w-8 h-8 text-brand-cyan" />
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl xl:text-5xl text-white mb-4">
                Ready to deploy your custom{" "}
                <span className="text-gradient-cyan-indigo">CareDesk employee?</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
                A complete AI Front Desk Operating System for clinics. Combine website widgets, natural voice agents, smart scheduling, patient CRM, and reminders automation to stand out.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                <Link href="/demo?tab=receptionist" className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-brand-cyan/25">
                  <Sparkles className="w-4 h-4" />
                  <span>Explore Live Demo</span>
                </Link>
                <Link href="/contact" className="inline-flex items-center space-x-2 glass-panel border border-brand-border text-gray-300 font-semibold px-8 py-4 rounded-xl hover:border-brand-cyan/40 hover:text-white transition-all">
                  <Phone className="w-4 h-4" />
                  <span>Book a Discovery Call</span>
                </Link>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
                <a href="https://caredesk-sigma.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-brand-cyan transition-colors">
                  <Globe className="w-4 h-4" />
                  <span>View CareDesk Live</span>
                </a>
                <a href="https://github.com/alimubashir822/CareDesk" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-brand-cyan transition-colors">
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
