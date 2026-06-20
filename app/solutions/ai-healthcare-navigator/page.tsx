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
  { icon: <Brain className="w-5 h-5" />, title: "AI Healthcare Journey Builder", desc: "Maps out a visual care path from symptom description, department routing, specialty matching, to follow-up care.", badge: "Core" },
  { icon: <MessageSquare className="w-5 h-5" />, title: "AI Patient Interview Mode", desc: "Conversational intake interviews that ask detail-oriented follow-up queries (duration, severity, previous injury).", badge: "Smart" },
  { icon: <FileText className="w-5 h-5" />, title: "AI Doctor Prep Brief", desc: "Synthesizes intake responses into a structured consultation summary with pre-populated patient questions.", badge: "Time-Saver" },
  { icon: <Activity className="w-5 h-5" />, title: "Symptom Timeline Tracker", desc: "Algorithmic pain-index comparisons tracking severity changes (e.g. 8/10 down to 4/10) over time.", badge: "New" },
  { icon: <Users className="w-5 h-5" />, title: "Family AI Health Profiles", desc: "Maintains records, histories, and symptoms for dependants and spouses under a unified central account.", badge: "Care" },
  { icon: <AlertTriangle className="w-5 h-5" />, title: "Urgent Safety Triggers", desc: "Flags critical red-flag inputs (e.g., chest pain) and instantly displays localized emergency service instructions.", badge: "Compliance" },
  { icon: <Globe className="w-5 h-5" />, title: "Multilingual Care Router", desc: "Interactive symptom checker support for English, Spanish, and multi-language patient guides.", badge: "Global" },
  { icon: <Mic className="w-5 h-5" />, title: "Voice Intake Assistant", desc: "Allows patients to dictate symptoms via secure speech-to-text engines to construct briefs automatically." },
  { icon: <ShieldCheck className="w-5 h-5" />, title: "Lead Intelligence Board", desc: "Analytics showing patient interest tracking, most requested specialties, and conversion funnels.", badge: "SaaS" },
  { icon: <RefreshCw className="w-5 h-5" />, title: "Lead Conversion Tracking", desc: "Monitors clinical funnels from assessment starts, booked slots, to clinic visit completions." },
  { icon: <Bell className="w-5 h-5" />, title: "Automated Care Triggers", desc: "Follow-up workflows automatically messaging patients on Day 1, Day 7, and scheduling refills on Day 30." },
  { icon: <BookMarked className="w-5 h-5" />, title: "SEO Health Education", desc: "AI-generated educational pages addressing common symptoms to capture local search visibility." }
];

const differentiators: Differentiator[] = [
  { icon: <Brain className="w-7 h-7" />, title: "Visual Care Pathways", subtitle: "Symptoms to Consult Journeys", desc: "Visualizes the patient care path from triage mapping to local appointment execution, reducing intake friction.", color: "from-brand-cyan/20 to-brand-indigo/10", glow: "rgba(6,182,212,0.15)" },
  { icon: <MessageSquare className="w-7 h-7" />, title: "Conversational Interview", subtitle: "Dynamic Health Intake", desc: "Replaces standard checklist selectors with deep conversational AI symptom interviews matching doctor prep briefs.", color: "from-brand-indigo/20 to-purple-500/10", glow: "rgba(99,102,241,0.15)" },
  { icon: <FileText className="w-7 h-7" />, title: "Doctor Brief Summaries", subtitle: "Pre-Populated Visit Forms", desc: "Automatically formats symptom durations, severity flags, and key clinic queries directly into EMR consoles.", color: "from-brand-emerald/20 to-brand-cyan/10", glow: "rgba(16,185,129,0.15)" },
  { icon: <AlertTriangle className="w-7 h-7" />, title: "Urgency Safety Layer", subtitle: "Red-Flag Symptom Auditing", desc: "Ensures legal and clinical safety with instant emergency redirects for chest pain, stroke signs, or severe trauma.", color: "from-amber-500/20 to-orange-500/10", glow: "rgba(245,158,11,0.15)" }
];

const portalModules = [
  { icon: <Brain className="w-5 h-5" />, title: "AI Patient Triage Hub", items: ["Conversational symptom input", "Specialty department routing", "Severe symptom audit rules", "Multilingual translation flags"] },
  { icon: <FileText className="w-5 h-5" />, title: "Clinical Intake Vault", items: ["Structured doctor summaries", "Patient question lists", "Laboratory PDF parsing", "EHR data synchronizations"] },
  { icon: <Calendar className="w-5 h-5" />, title: "Specialist Match Engine", items: ["Specialty slot allocations", "Language filter matches", "Insurance billing matches", "One-click Stripe checkouts"] },
  { icon: <BarChart3 className="w-5 h-5" />, title: "Clinic Lead Dashboard", items: ["Patient inquiry conversion stats", "Specialty demand charts", "AI session audit histories", "White-label branding settings"] }
];

const techStack = [
  { category: "Frontend UI", items: ["Next.js 15 App Routing", "TypeScript", "Tailwind CSS Layouts", "Framer Motion Actions"], icon: <Globe className="w-5 h-5" /> },
  { category: "Intelligent Systems", items: ["OpenAI GPT-4o API", "LangChain Workflows", "Whisper Speech Engine", "Structured JSON Schema Parsing"], icon: <Brain className="w-5 h-5" /> },
  { category: "Data Storage", items: ["PostgreSQL Cluster", "Prisma ORM Relations", "AWS S3 HIPAA Storage", "Redis Session Caching"], icon: <Database className="w-5 h-5" /> },
  { category: "SaaS Layer", items: ["Auth.js Credentials Auth", "Stripe Billing Subscriptions", "Twilio SMS Dispatcher", "Resend Email Alerts"], icon: <Lock className="w-5 h-5" /> }
];

const useCases = [
  {
    icon: <Smile className="w-6 h-6" />,
    specialty: "Dental Care Routing",
    color: "brand-cyan",
    scenario: "Patient searches for tooth pain, matching emergency dentistry slots",
    journey: [
      "Patient inputs: 'My back tooth is throbbing and I have a fever.'",
      "AI asks follow-up: 'Is there facial swelling?' Patient answers yes.",
      "AI identifies dental infection risk, recommends Dental Triage.",
      "Matches Dr. Sarah Ahmed, booking a same-day slots via the Portal."
    ],
    outcome: "Dental networks convert 40% more inquiries into appointments by routing emergency triages automatically."
  },
  {
    icon: <Heart className="w-6 h-6" />,
    specialty: "Cardiac Care Triage",
    color: "rose-400",
    scenario: "Patient searches for chest pressure, triggered emergency guidelines",
    journey: [
      "Patient inputs: 'I feel a crushing weight on my chest.'",
      "AI triggers emergency audit layer instantly.",
      "System suspends scheduling and displays prompt: 'Seek emergency care now.'",
      "Provides local ER maps and dial-in shortcuts for medical services."
    ],
    outcome: "Clinics maintain strict clinical safety protocols, avoiding liability while directing urgent cases safely."
  },
  {
    icon: <Users className="w-6 h-6" />,
    specialty: "Mental Health Guidance",
    color: "brand-emerald",
    scenario: "Patient manages depression trends and syncs to counseling",
    journey: [
      "Patient seeks weekly anxiety check-in using the AI intake checker.",
      "AI tracks symptom comparisons (anxiety index down to 3/10).",
      "Compiles a prep brief summarizing changes in anxiety triggers.",
      "Therapist reviews progress timeline in EMR console before consult."
    ],
    outcome: "Mental health groups reduce appointment preparation overhead by 70% and raise patient engagement scores."
  }
];

const databaseTables = [
  { table: "Users", fields: ["id", "email", "hashedPassword", "role (Patient/Doc/Admin)", "createdAt"] },
  { table: "Patients", fields: ["id", "userId", "familyId", "healthMemoryTimeline", "savedReportsCount"] },
  { table: "Doctors", fields: ["id", "userId", "specialty", "availabilityCalendar", "insuranceAccepted"] },
  { table: "Clinics", fields: ["id", "name", "whiteLabelSettings", "stripeSubscriptionId"] },
  { table: "Symptoms", fields: ["id", "symptomName", "dangerFlag", "primaryDepartmentMatch"] },
  { table: "Assessments", fields: ["id", "patientId", "conversationLog", "painScoreBefore", "painScoreAfter"] },
  { table: "AIResponses", fields: ["id", "assessmentId", "suggestedDepartment", "carePathwayBrief"] },
  { table: "Appointments", fields: ["id", "patientId", "doctorId", "slotTime", "status"] },
  { table: "Documents", fields: ["id", "patientId", "title", "fileUrl", "ocrOcrBrief"] },
  { table: "Messages", fields: ["id", "senderId", "receiverId", "content", "sentAt"] },
  { table: "AuditLogs", fields: ["id", "operatorId", "action", "ipAddress", "timestamp"] }
];

const faqs: FAQ[] = [
  { q: "Does the AI Symptom Checker diagnose medical conditions?", a: "No. AuraCare is an AI healthcare navigation platform designed to collect symptom histories, translate medical terms, suggest correct clinical departments, and connect patients to doctors. It does not replace medical advice, diagnoses, or treatments." },
  { q: "How is the Emergency Safety Layer implemented?", a: "The platform features a real-time red-flag checker. If a user describes severe symptoms (like severe chest pressure, sudden face numbness, or major trauma), AuraCare bypasses triage matching, displays emergency contact warnings, and links to local ER services." },
  { q: "Is the patient data secure and HIPAA compliant?", a: "Yes. All intakes, timeline sessions, and medical documents are saved inside AWS databases matching HIPAA compliance standards, featuring TLS 1.3 encryption, and restricted role-based logs." },
  { q: "How does the AI Patient Interview Mode function?", a: "Rather than asking static, long forms, the AI dynamically adapts follow-up questions (e.g., asking for specific location, severity, duration, and associated side symptoms) to map custom patient profiles." },
  { q: "How does AuraCare match patients to doctors?", a: "Upon identifying the correct department (e.g., Orthopedics for knee pain), the AI scans matching specialists for open schedule slots, accepted insurance plans, languages, location, and fees." },
  { q: "What is the AI Consultation Preparation Report?", a: "It is a synthesized brief compiled before a doctor visit. It details primary concerns, symptom timelines, and generated questions for the doctor, saving providers valuable charting time during visits." },
  { q: "Can hospitals white-label this AI platform?", a: "Yes. AuraCare provides a complete white-label SaaS configuration. Healthcare networks can apply custom styling, insert their specific roster of specialists, and host it under their own domain." },
  { q: "Does AuraCare support voice inputs?", a: "Yes. AuraCare features a secure voice checker. Patient voice inputs are processed through secure transcription APIs, allowing hands-free symptom descriptions." },
  { q: "How does the Symptom Comparison Timeline track progress?", a: "When patients return for follow-ups, the AI reads previous symptom entries, compares pain indexes, and logs details (e.g., pain reduced from 8 to 4) to verify care efficacy." },
  { q: "What database architecture does AuraCare use?", a: "We utilize PostgreSQL structured with Prisma ORM. The relational schema includes 11 tables (Users, Patients, Doctors, Clinics, Symptoms, Assessments, AIResponses, Appointments, Documents, Messages, AuditLogs) for data integrity." }
];

const mockDoctors = [
  { name: "Dr. Sarah Ahmed", specialty: "Cardiology", experience: "12 Years", languages: "English, Spanish", availability: "Today", price: "$95" },
  { name: "Dr. John Smith", specialty: "Dermatology", experience: "15 Years", languages: "English, French", availability: "Tomorrow", price: "$85" },
  { name: "Dr. Elena Rostova", specialty: "Therapy (Mental Health)", experience: "9 Years", languages: "English, Russian", availability: "Today", price: "$75" }
];

/* =======================================================
   COMPONENT
   ======================================================= */
export default function AiHealthcareNavigatorPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeUseCase, setActiveUseCase] = useState(0);

  // OS Simulator States
  const [activeDashboardTab, setActiveDashboardTab] = useState("interview");

  // Tab 1: AI Interview Simulation
  const [interviewStep, setInterviewStep] = useState(0);
  const [patientInput, setPatientInput] = useState("");
  const [chatLog, setChatLog] = useState<Array<{ sender: "ai" | "user", text: string }>>([
    { sender: "ai", text: "Hello! I am AuraCare AI Care Navigator. What symptoms are you experiencing today?" }
  ]);
  const [chatLoading, setChatLoading] = useState(false);
  const [assessmentSummary, setAssessmentSummary] = useState(false);
  const [emergencyAlert, setEmergencyAlert] = useState(false);

  // Tab 2: Match Specialist
  const [matchedDoc, setMatchedDoc] = useState(mockDoctors[0]);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  // Tab 3: Health History Timeline
  const [painLevelBefore, setPainLevelBefore] = useState(8);
  const [painLevelAfter, setPainLevelAfter] = useState(4);

  const handleInterviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientInput || chatLoading) return;

    const userText = patientInput;
    setChatLog(prev => [...prev, { sender: "user", text: userText }]);
    setPatientInput("");
    setChatLoading(true);

    setTimeout(() => {
      // Check for emergency keywords
      if (userText.toLowerCase().includes("chest pain") || userText.toLowerCase().includes("severe crushing")) {
        setChatLog(prev => [...prev, {
          sender: "ai",
          text: "WARNING: Severe chest discomfort detected. Suspend triage immediately. Please seek immediate emergency medical care (dial 911)."
        }]);
        setEmergencyAlert(true);
        setChatLoading(false);
        return;
      }

      if (interviewStep === 0) {
        setChatLog(prev => [...prev, {
          sender: "ai",
          text: "Understood. How long has this symptom been occurring, and on a scale of 1-10, how severe is the discomfort?"
        }]);
        setInterviewStep(1);
      } else if (interviewStep === 1) {
        setChatLog(prev => [...prev, {
          sender: "ai",
          text: "Thank you. Do you have any known medical histories related to this, or are you currently taking medications?"
        }]);
        setInterviewStep(2);
      } else {
        setChatLog(prev => [...prev, {
          sender: "ai",
          text: "Triage completed. I have compiled your Patient Intake Brief and routed your inquiry to Cardiology."
        }]);
        setAssessmentSummary(true);
      }
      setChatLoading(false);
    }, 1000);
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
          <span className="text-white">AI Healthcare Navigator</span>
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
                <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest">AI Symptom Care Triage</span>
                <Sparkles className="w-3 h-3 text-brand-cyan" />
              </div>

              <h1 className="font-display font-extrabold text-3xl sm:text-4xl xl:text-5xl text-white leading-[1.15] tracking-tight">
                AI Symptom Checker.<br />
                <span className="text-gradient-cyan-indigo">Understand Symptoms.</span><br />
                <span className="text-gradient-emerald-cyan">Navigate Right Care.</span>
              </h1>

              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Replaces basic keyword search with clinical AI pathways. Patients describe concerns, receive structured department guidance, match with local specialists, and generate EMR pre-consult briefs.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-bold px-8 py-4 rounded-xl hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-brand-cyan/25 text-sm"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Start AI Assessment</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center space-x-2 glass-panel border border-brand-border text-gray-300 font-semibold px-8 py-4 rounded-xl hover:border-brand-cyan/40 hover:text-white hover:scale-[1.02] active:scale-[0.98] transition-all text-sm"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Hospital White-Labeling</span>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-2.5 pt-4">
                {[
                  { icon: <Shield className="w-3.5 h-3.5 text-brand-emerald" />, label: "HIPAA Certified Vault", bg: "bg-brand-emerald/10 border-brand-emerald/20" },
                  { icon: <Lock className="w-3.5 h-3.5 text-brand-cyan" />, label: "Emergency Red-Flag Layer", bg: "bg-brand-cyan/10 border-brand-cyan/20" },
                  { icon: <CheckCircle className="w-3.5 h-3.5 text-brand-indigo" />, label: "Clinical Navigation (No Diagnosis)", bg: "bg-brand-indigo/10 border-brand-indigo/20" }
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
                    <span className="font-display font-bold text-white text-xs tracking-wide">AuraCare AI OS Engine</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 bg-brand-emerald/10 border border-brand-emerald/25 rounded-full px-2.5 py-1">
                    <div className="w-1.5 h-1.5 bg-brand-emerald rounded-full animate-pulse" />
                    <span className="text-[10px] text-brand-emerald font-semibold">Triage Navigator Active</span>
                  </div>
                </div>

                {/* Dashboard Inner Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-brand-border h-[450px]">
                  
                  {/* Left Navigation (4 cols) */}
                  <div className="md:col-span-4 p-4 space-y-1.5 bg-white/[0.01]">
                    <p className="text-[9px] text-gray-500 uppercase font-bold tracking-wider mb-2 px-2">Assessment Tabs</p>
                    {[
                      { id: "interview", label: "AI Interview Triage", icon: <Brain className="w-3.5 h-3.5" /> },
                      { id: "matching", label: "Specialist Matcher", icon: <Users className="w-3.5 h-3.5" /> },
                      { id: "timeline", label: "Health Memory Timeline", icon: <Activity className="w-3.5 h-3.5" /> },
                      { id: "leads", label: "Clinic Leads Board", icon: <Building2 className="w-3.5 h-3.5" /> }
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
                      <p className="text-[9px] text-gray-500 uppercase font-bold tracking-wider mb-2 px-2">Clinical Rule</p>
                      <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-[9px] text-amber-400 leading-normal flex gap-1">
                        <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                        <span>Not Diagnostic: Provides guidance mapping and specialty matching only.</span>
                      </div>
                    </div>
                  </div>

                  {/* Main Display (8 cols) */}
                  <div className="md:col-span-8 p-5 overflow-y-auto flex flex-col justify-between h-full bg-brand-bg/10">
                    
                    {/* Tab 1: AI Interview Triage */}
                    {activeDashboardTab === "interview" && (
                      <div className="flex-grow flex flex-col justify-between space-y-4">
                        <div className="flex items-center justify-between border-b border-brand-border/60 pb-2">
                          <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-wider flex items-center">
                            <Brain className="w-3.5 h-3.5 text-brand-cyan animate-pulse mr-1.5" />
                            <span>AI Conversational Intake</span>
                          </span>
                          <span className="text-[8px] bg-brand-cyan/15 text-brand-cyan font-bold px-2 py-0.5 rounded-full border border-brand-cyan/10">Triage Process</span>
                        </div>

                        {/* Chat history */}
                        <div className="flex-grow overflow-y-auto max-h-[190px] space-y-3 pr-1 text-[11px] leading-relaxed">
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
                                <span className="animate-pulse">Analysing clinical pathway...</span>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Emergency Red-Flag overlay */}
                        {emergencyAlert && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl"
                          >
                            <div className="flex items-center space-x-1.5 text-red-500 mb-1">
                              <AlertTriangle className="w-4 h-4 text-red-500 animate-bounce" />
                              <span className="text-[10px] font-bold uppercase">CRITICAL SYSTEM WARNING</span>
                            </div>
                            <p className="text-[10px] text-gray-300">
                              Symptoms suggest emergency. Triage terminated. Please seek emergency medical care now.
                            </p>
                          </motion.div>
                        )}

                        {/* Intake Triage Summary */}
                        {assessmentSummary && !emergencyAlert && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-brand-emerald/10 border border-brand-emerald/20 rounded-xl p-3"
                          >
                            <div className="flex items-center space-x-1.5 mb-1">
                              <CheckCircle className="w-3.5 h-3.5 text-brand-emerald" />
                              <span className="text-[9px] text-brand-emerald font-bold uppercase">Patient Intake Brief Generated</span>
                            </div>
                            <p className="text-[10px] text-gray-300 leading-normal">
                              <strong>Primary:</strong> Sore throat & fever · <strong>Routing Match:</strong> ENT Specialist / General Medicine · <strong>Action:</strong> Consultation Prep Brief routed.
                            </p>
                          </motion.div>
                        )}

                        {/* Interactive Form Input */}
                        {!assessmentSummary && !emergencyAlert && (
                          <form onSubmit={handleInterviewSubmit} className="flex gap-2">
                            <input
                              type="text"
                              required
                              value={patientInput}
                              onChange={(e) => setPatientInput(e.target.value)}
                              disabled={chatLoading}
                              placeholder={interviewStep === 0 ? "e.g. My throat hurts and I have fever..." : "Provide detail..."}
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

                        {(assessmentSummary || emergencyAlert) && (
                          <button
                            onClick={() => {
                              setAssessmentSummary(false);
                              setEmergencyAlert(false);
                              setInterviewStep(0);
                              setChatLog([{ sender: "ai", text: "Hello! I am AuraCare AI Care Navigator. What symptoms are you experiencing today?" }]);
                            }}
                            className="text-[10px] text-brand-cyan hover:underline text-center block mt-1"
                          >
                            Restart Triage Simulation
                          </button>
                        )}
                      </div>
                    )}

                    {/* Tab 2: Specialist Matcher */}
                    {activeDashboardTab === "matching" && (
                      <div className="flex-grow flex flex-col justify-between space-y-4">
                        <div>
                          <div className="flex items-center justify-between border-b border-brand-border/60 pb-2 mb-3">
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">AI Doctor Matcher Engine</span>
                            <span className="text-[8px] bg-brand-cyan/15 text-brand-cyan font-bold px-2 py-0.5 rounded-full border border-brand-cyan/10">Matches Found</span>
                          </div>

                          <div className="space-y-2">
                            {mockDoctors.slice(0, 2).map((doc) => (
                              <div key={doc.name} className="glass-panel border border-brand-border rounded-xl p-3 flex items-center justify-between">
                                <div>
                                  <p className="text-[11px] font-bold text-white leading-none">{doc.name}</p>
                                  <p className="text-[9px] text-gray-500 mt-1">{doc.specialty} · {doc.experience}</p>
                                </div>
                                <button
                                  onClick={() => {
                                    setMatchedDoc(doc);
                                    setBookingConfirmed(true);
                                  }}
                                  className="bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-bold text-[9px] px-3 py-1.5 rounded-lg hover:opacity-90 transition-colors"
                                >
                                  Book Slot
                                </button>
                              </div>
                            ))}
                          </div>

                          {bookingConfirmed && (
                            <motion.div
                              initial={{ opacity: 0, y: 5 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="mt-3 bg-brand-emerald/10 border border-brand-emerald/20 rounded-xl p-3 flex items-center justify-between"
                            >
                              <div className="text-[10px]">
                                <span className="font-bold text-brand-emerald block">Booking Scheduled!</span>
                                <span className="text-gray-400">Consultation set with {matchedDoc.name} ({matchedDoc.price})</span>
                              </div>
                              <CheckCircle className="w-5 h-5 text-brand-emerald" />
                            </motion.div>
                          )}
                        </div>

                        <button
                          onClick={() => {
                            setBookingConfirmed(false);
                            setActiveDashboardTab("timeline");
                          }}
                          className="w-full bg-brand-cyan/10 hover:bg-brand-cyan/20 border border-brand-cyan/25 text-brand-cyan font-bold text-xs py-2 rounded-xl transition-all"
                        >
                          Check Health Journey Timeline
                        </button>
                      </div>
                    )}

                    {/* Tab 3: Health Memory Timeline */}
                    {activeDashboardTab === "timeline" && (
                      <div className="flex-grow flex flex-col justify-between space-y-4">
                        <div>
                          <div className="flex items-center justify-between border-b border-brand-border/60 pb-2 mb-3">
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Symptom Comparison memory</span>
                            <span className="text-[9px] text-brand-emerald font-semibold">Timeline</span>
                          </div>

                          <div className="space-y-3">
                            <div className="p-3 bg-white/2 border border-brand-border rounded-xl flex items-center justify-between">
                              <div>
                                <span className="text-[8px] text-gray-500 uppercase font-bold block">Assessment 1 (Initial)</span>
                                <span className="text-xs text-white font-semibold">Triage Pain Scale:</span>
                              </div>
                              <span className="text-xs font-bold text-brand-indigo">{painLevelBefore}/10 Severe</span>
                            </div>

                            <div className="p-3 bg-white/2 border border-brand-border rounded-xl flex items-center justify-between">
                              <div>
                                <span className="text-[8px] text-gray-500 uppercase font-bold block">Assessment 2 (Post-Consult)</span>
                                <span className="text-xs text-white font-semibold">Triage Pain Scale:</span>
                              </div>
                              <span className="text-xs font-bold text-brand-cyan">{painLevelAfter}/10 Improved</span>
                            </div>

                            <div className="p-2.5 bg-brand-emerald/10 border border-brand-emerald/15 rounded-xl text-[10px] text-gray-300 leading-normal flex gap-1.5">
                              <CheckCircle className="w-4 h-4 text-brand-emerald flex-shrink-0 mt-0.5" />
                              <span>AI Analysis: Symptom pain logs show a 50% decrease. Next follow-up care reminders set on Day 30.</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <button
                            onClick={() => { setPainLevelBefore(8); setPainLevelAfter(2); }}
                            className="flex-grow text-[9px] bg-brand-bg/50 border border-brand-border rounded-lg py-1.5 text-gray-400 hover:text-white"
                          >
                            Simulate Recovery
                          </button>
                          <button
                            onClick={() => setActiveDashboardTab("leads")}
                            className="flex-grow text-[9px] bg-brand-cyan text-brand-bg font-bold rounded-lg py-1.5 text-center"
                          >
                            Go to Clinic Lead Board
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Tab 4: Clinic Leads Board */}
                    {activeDashboardTab === "leads" && (
                      <div className="flex-grow flex flex-col justify-between space-y-4">
                        <div>
                          <div className="flex items-center justify-between border-b border-brand-border/60 pb-2 mb-3">
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Clinic Lead Intelligence</span>
                            <span className="text-[8px] bg-brand-indigo/15 text-brand-indigo font-bold px-2 py-0.5 rounded-full border border-brand-indigo/10">Funnels</span>
                          </div>

                          <div className="grid grid-cols-3 gap-2">
                            <div className="bg-white/2 border border-brand-border rounded-xl p-2.5 text-center">
                              <span className="text-[8px] text-gray-500 block uppercase">Intakes Started</span>
                              <span className="text-sm font-extrabold text-white block mt-0.5">1,240</span>
                            </div>
                            <div className="bg-white/2 border border-brand-border rounded-xl p-2.5 text-center">
                              <span className="text-[8px] text-gray-500 block uppercase">Leads Matched</span>
                              <span className="text-sm font-extrabold text-brand-cyan block mt-0.5">856</span>
                            </div>
                            <div className="bg-white/2 border border-brand-border rounded-xl p-2.5 text-center">
                              <span className="text-[8px] text-gray-500 block uppercase">Bookings</span>
                              <span className="text-sm font-extrabold text-brand-emerald block mt-0.5">520</span>
                            </div>
                          </div>

                          <div className="p-3 bg-brand-bg/40 border border-brand-border rounded-xl mt-2 text-[10px]">
                            <p className="font-bold text-white uppercase text-[8px] tracking-wider mb-1">Most Requested Departments</p>
                            <div className="space-y-1.5">
                              <div>
                                <div className="flex justify-between mb-0.5 text-[9px]">
                                  <span className="text-gray-400">Cardiology</span>
                                  <span className="text-white">35% (182 leads)</span>
                                </div>
                                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                                  <div className="h-full w-[35%] bg-brand-cyan" />
                                </div>
                              </div>
                              <div>
                                <div className="flex justify-between mb-0.5 text-[9px]">
                                  <span className="text-gray-400">Dermatology</span>
                                  <span className="text-white">25% (130 leads)</span>
                                </div>
                                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                                  <div className="h-full w-[25%] bg-brand-indigo" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Navigation helper */}
                    <div className="text-[9px] text-gray-500 text-center border-t border-brand-border/60 pt-2 flex items-center justify-between mt-2">
                      <span>Click sidebar tabs to simulate navigation workflows.</span>
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
                { value: "24/7", label: "AI Nav Guidance", icon: <Brain className="w-5 h-5" /> },
                { value: "85%+", label: "Matcher Conversion", icon: <Users className="w-5 h-5" /> },
                { value: "5 min", label: "Avg Intake Session", icon: <Clock className="w-5 h-5" /> },
                { value: "3x", label: "Patient Retention", icon: <TrendingUp className="w-5 h-5" /> },
                { value: "100%", label: "HIPAA Certified", icon: <Shield className="w-5 h-5" /> },
                { value: "94%+", label: "Lead Funnel Capture", icon: <Wallet className="w-5 h-5" /> }
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
              <span className="text-xs font-semibold text-brand-cyan uppercase tracking-widest">Intake Intelligence</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              Why AuraCare is Different
            </h2>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed max-w-xl mx-auto">
              Moving beyond basic chatbot tools to provide structured care navigation systems.
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
                <span className="text-xs font-semibold text-brand-indigo uppercase tracking-widest">System Overview</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-4">
                Clinical-grade navigation infrastructure
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Designed to guide patients from initial confusion to scheduled clinic consultations while feeding clean, pre-populated health briefs directly to physician dashboards.
              </p>
              
              <div className="p-4 bg-brand-cyan/5 border border-brand-cyan/15 rounded-xl text-[11px] leading-relaxed text-gray-400 flex gap-2">
                <Info className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                <span>Supports deep API structures enabling secure integrations with Stripe payments, Auth.js credentials, and AWS S3 storage vaults.</span>
              </div>
            </motion.div>

            {/* Right Grid (7 cols) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {portalModules.map((m) => (
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
              <span className="text-xs font-semibold text-brand-cyan uppercase tracking-widest">Medical Workflows</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              Triage Use Cases
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              See how the AuraCare platform structures patient care pathways across distinct medical scenarios.
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
                    <p className="text-xs font-bold text-brand-emerald mb-1">Clinic Conversion Output</p>
                    <p className="text-sm text-gray-300">{useCases[activeUseCase].outcome}</p>
                  </div>
                </div>
                <div className="lg:col-span-2 p-8">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-5">Patient Navigation Journey</p>
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
            17 ADVANCED FEATURES
        ====================================== */}
        <section className="mb-28">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              17 Platform Capabilities
            </h2>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed max-w-xl mx-auto">
              Explore the comprehensive features matching our medical triage and lead capture platform layout.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {[
              { num: "01", title: "AI Care Journey Builder", desc: "Maps visual step pathways from symptoms directly to scheduled clinic follow-ups." },
              { num: "02", title: "AI Patient Interview Mode", desc: "Dynamic conversational symptom intakes replacing rigid checkboxes." },
              { num: "03", title: "AI Doctor Prep Brief", desc: "Compiles intake reports with generated clinician consult questions." },
              { num: "04", title: "AI Specialty Navigator", desc: "Intelligent routing connecting patients to correct departments." },
              { num: "05", title: "Personal Health Memory", desc: "Tracks patient triage history across years for care coherence." },
              { num: "06", title: "Symptom Comparison", desc: "Tracks pain indexes (8/10 down to 4/10) to verify symptom changes." },
              { num: "07", title: "AI Voice Symptom checker", desc: "Allows elderly patients to speak symptoms hands-free." },
              { num: "08", title: "Smart Matching Engine", desc: "Matches providers on specialty, slot timings, insurance, and rates." },
              { num: "09", title: "Family AI Health Account", desc: "Manage children, senior parents, and spouses in one unified profile." },
              { num: "10", title: "AI Document OCR Summary", desc: "Summarizes lab report PDFs and translates technical medical terms." },
              { num: "11", title: "Emergency Safety Layer", desc: "Identifies life-threatening symptoms and redirects to local ER services." },
              { num: "12", title: "Doctor Review Dashboard", desc: "Provides clinicians with EMR intake summaries prior to visits." },
              { num: "13", title: "Clinic Lead Intelligence", desc: "Monitors patient interest trends and department demand analytics." },
              { num: "14", title: "Conversion Analytics", desc: "Tracks patients from triage start to completed consultation booking." },
              { num: "15", title: "AI Follow-Up Automation", desc: "Checks in with patients on Day 1 and Day 7 post-consultation." },
              { num: "16", title: "White-Label Configuration", desc: "Allows hospitals and groups to brand and host the AI portal." },
              { num: "17", title: "AI + Human Handoff", desc: "Intelligent symptom collection bridging directly to human consultations." }
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
              Enterprise Care-Navigation Stack
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
                Ready to deploy AuraCare?
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
                Integrate intelligent triage, automate patient intake histories, and route patient inquiry traffic to matched medical specialists safely.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                <Link href="/contact" className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-semibold px-8 py-4 rounded-xl hover:opacity-95 transition-opacity shadow-lg shadow-brand-cyan/25">
                  <Sparkles className="w-4 h-4" />
                  <span>Launch AI Navigator</span>
                </Link>
                <Link href="/contact" className="inline-flex items-center space-x-2 glass-panel border border-brand-border text-gray-300 font-semibold px-8 py-4 rounded-xl hover:border-brand-cyan/40 hover:text-white transition-all">
                  <Phone className="w-4 h-4" />
                  <span>Request White-Label Info</span>
                </Link>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
                <a href="https://github.com/alimubashir822/AuraCare" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-brand-cyan transition-colors">
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
