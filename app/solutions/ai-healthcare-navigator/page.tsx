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
  Check, Paperclip, MessagesSquare, ExternalLink
} from "lucide-react";

/* --- Types --- */
interface Feature { icon: React.ReactNode; title: string; desc: string; badge?: string; }
interface Differentiator { icon: React.ReactNode; title: string; subtitle: string; desc: string; color: string; glow: string; }
interface FAQ { q: string; a: string; }

interface AssessmentSummary {
  concern: string;
  duration: string;
  department: string;
  symptoms: string[];
  questions: string[];
}

interface DoctorProfile {
  name: string;
  specialty: string;
  experience: string;
  languages: string;
  rating: string;
  time: string;
  fee: string;
  insurance: string;
}

/* =======================================================
   DATA
 ======================================================= */

const coreFeatures: Feature[] = [
  { icon: <Brain className="w-5 h-5" />, title: "Conversational Intake", desc: "An intelligent medical interview agent that converses with patients naturally, asking relevant follow-up questions.", badge: "Flagship" },
  { icon: <Stethoscope className="w-5 h-5" />, title: "Department Triage Engine", desc: "Maps symptom descriptions directly to the most appropriate clinical specialty (e.g. Neurology, Orthopedics) instead of diagnostic guesses.", badge: "Smart" },
  { icon: <FileText className="w-5 h-5" />, title: "AI Doctor Brief Creator", desc: "Compiles patient answers, timeline, and concerns into a structured brief for doctors, automatically generated before the visit.", badge: "Unique" },
  { icon: <Users className="w-5 h-5" />, title: "Smart Provider Matching", desc: "Filters matching specialists based on the triage category, doctor availability, location, accepted insurance, and languages.", badge: "Premium" },
  { icon: <HeartPulse className="w-5 h-5" />, title: "Visual Care Pathways", desc: "Visualizes the patient's care route step-by-step: Intake → Department Routing → Booking → Consultation → Follow-up Care.", badge: "Unique" },
  { icon: <AlertTriangle className="w-5 h-5" />, title: "Emergency Safety Guard", desc: "Detects high-risk symptoms (e.g. chest pain, stroke signs) in real-time and immediately triggers red-flag urgent warnings.", badge: "Safety" },
  { icon: <Mic className="w-5 h-5" />, title: "Voice AI Assessment", desc: "Enables hands-free intake for elderly or visually impaired patients via integrated voice-to-text processing.", badge: "Advanced" },
  { icon: <BookMarked className="w-5 h-5" />, title: "Health Education Portal", desc: "Generates patient learning guides and customized questions to ask the doctor post-assessment.", badge: "New" },
  { icon: <Database className="w-5 h-5" />, title: "AI Patient Health Memory", desc: "Stores previous triage transcripts and reports, allowing the AI to recall past history when symptoms flare up again." },
  { icon: <Upload className="w-5 h-5" />, title: "Diagnostic PDF Reader", desc: "Upload reports or medication labels. AI extracts information and adds it to the clinical intake summary." },
  { icon: <BarChart3 className="w-5 h-5" />, title: "Clinic Lead Dashboard", desc: "Provides clinic managers and marketing teams with department volume metrics, intake logs, and patient booking conversion rates." },
  { icon: <RefreshCw className="w-5 h-5" />, title: "Follow-Up Automations", desc: "Triggers check-in texts on day 1 and day 7 post-visit to monitor symptoms and prompt follow-up visits if needed." },
];

const differentiators: Differentiator[] = [
  { icon: <HeartPulse className="w-7 h-7" />, title: "AI Care Journey Builder", subtitle: "Visual pathways from confusion to care", desc: "Instead of giving a list of diagnostic percentages, the platform creates a visual step-by-step pathway showing how to get the right care, which reduces patient anxiety.", color: "from-brand-cyan/20 to-brand-indigo/10", glow: "rgba(6,182,212,0.15)" },
  { icon: <Brain className="w-7 h-7" />, title: "Conversational Interview", subtitle: "No static checklists or basic forms", desc: "The AI acts like an empathetic medical assistant, asking custom follow-up questions: 'Where does it hurt?', 'Does movement aggravate it?', 'How long has it lasted?'", color: "from-brand-indigo/20 to-purple-500/10", glow: "rgba(99,102,241,0.15)" },
  { icon: <FileText className="w-7 h-7" />, title: "AI Pre-Consult Brief", subtitle: "Prepare doctors in seconds", desc: "Generates a 1-page clinical summary (Chief concern, history, drugs, and prepared patient questions) so doctors can review the patient's state before the appointment starts.", color: "from-brand-emerald/20 to-brand-cyan/10", glow: "rgba(16,185,129,0.15)" },
  { icon: <AlertTriangle className="w-7 h-7" />, title: "Emergency Safety Layer", subtitle: "Real-time red-flag screenings", desc: "Triage engine dynamically parses entries. If serious or life-threatening symptoms are mentioned, it prompts the patient to contact emergency services immediately.", color: "from-rose-500/20 to-pink-500/10", glow: "rgba(244,63,94,0.15)" },
  { icon: <Building2 className="w-7 h-7" />, title: "Clinic Lead Intelligence", subtitle: "Value for healthcare businesses", desc: "Tracks patient intake trends across departments, measuring conversion rates from symptom searches into booked appointments to increase practice ROI.", color: "from-amber-500/20 to-orange-500/10", glow: "rgba(245,158,11,0.15)" },
  { icon: <Users className="w-7 h-7" />, title: "Smart Matching Engine", subtitle: "Find the right provider", desc: "Recommends doctors based on the mapped specialty, calendar slots, health insurance networks, language, fees, and location coordinates.", color: "from-violet-500/20 to-brand-indigo/10", glow: "rgba(139,92,246,0.15)" },
];

const portalModules = [
  { icon: <Brain className="w-5 h-5" />, title: "AI Assessment Hub", items: ["Conversational intake UI", "Emergency symptom screen", "Department recommendation", "Intake brief compiler"] },
  { icon: <LayoutDashboard className="w-5 h-5" />, title: "Patient Care Dashboard", items: ["Previous triage history", "Visual care pathways", "Upcoming appointments", "Saved educational articles"] },
  { icon: <Stethoscope className="w-5 h-5" />, title: "Doctor Portal", items: ["Review intake summaries", "Accept consult requests", "Direct patient chat", "SOAP note integration"] },
  { icon: <Building2 className="w-5 h-5" />, title: "Clinic Lead Center", items: ["Department analytics", "Intake logs tracking", "Physician slot usage", "Lead conversion splits"] },
];

const techStack = [
  { category: "Frontend Core", items: ["Next.js 15 App Router", "TypeScript", "Tailwind CSS", "shadcn/ui", "Framer Motion"], icon: <Globe className="w-5 h-5" /> },
  { category: "Backend & Logic", items: ["Next.js Server Actions", "Next.js API Handlers", "Zod Validation Schema", "React Hook Form"], icon: <HardDrive className="w-5 h-5" /> },
  { category: "Data Layer", items: ["PostgreSQL database", "Prisma ORM", "Auditable database logs", "Version-safe migrations"], icon: <Database className="w-5 h-5" /> },
  { category: "AI & APIs", items: ["OpenAI GPT-4o", "LangChain memory", "Stripe payment splits", "Twilio & SendGrid APIs"], icon: <Lock className="w-5 h-5" /> },
];

const useCases = [
  {
    icon: <Brain className="w-6 h-6" />,
    specialty: "Primary Care Clinics",
    color: "brand-cyan",
    scenario: "Managing daily patient scheduling flow",
    journey: [
      "Patient accesses clinic site and starts symptom assessment",
      "AI interviews patient about cold symptoms and fever duration",
      "AI suggests booking with General Medicine and shows matching slots",
      "Patient confirms slot, which automatically populates the scheduling system",
      "Doctor reviews the pre-visit brief containing symptoms and allergies",
      "Consultation proceeds smoothly with notes automatically pre-drafted"
    ],
    outcome: "Primary clinics reduce intake time by 50% and decrease scheduling errors."
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    specialty: "Hospital Networks",
    color: "brand-indigo",
    scenario: "Routing patients to specialized departments",
    journey: [
      "Patient enters symptoms (e.g. chronic knee joint stiffness)",
      "AI triages inputs, identifying Orthopedics as the correct path",
      "Matches with orthopedic surgeons inside the hospital network",
      "Patient selects provider, pays consultation co-pay via Stripe",
      "Patient's profile, history, and AI briefs are routed to doctor's queue",
      "Analytics tracks intake metrics, department volumes, and bookings"
    ],
    outcome: "Hospital networks eliminate patient misrouting and improve lead-to-booking conversions by 36%."
  },
  {
    icon: <Users className="w-6 h-6" />,
    specialty: "Telehealth Networks",
    color: "brand-emerald",
    scenario: "Direct intake-to-consultation routing for remote practices",
    journey: [
      "Patient types concerns into the white-label intake widget",
      "AI screens for emergency issues before suggesting telehealth slots",
      "Connects patient with available remote doctors, processing consult fees",
      "Consultation brief is shared; patient attends video call",
      "Automated follow-up reminders check symptom severity on Day 7",
      "Patient updates symptoms in health profile, showing timeline history"
    ],
    outcome: "Telehealth practices increase patient compliance, retaining 40% more patients for follow-up care."
  },
  {
    icon: <AlertTriangle className="w-6 h-6" />,
    specialty: "Emergency Screening",
    color: "rose-400",
    scenario: "Triaging urgent symptoms and guiding to emergency rooms",
    journey: [
      "Patient enters severe sudden headache and difficulty speaking",
      "AI recognizes high-risk stroke symptoms in the triage system",
      "Triggers red emergency alert warning to seek immediate emergency care",
      "Provides emergency contact links and maps nearest emergency rooms",
      "Saves log in patient audit log for compliance records",
      "Prompts follow-up check-in to confirm safety status"
    ],
    outcome: "Reduces clinical liability and secures patient safety through instant high-risk warning alerts."
  },
];

const securityFeatures = [
  { icon: <Lock className="w-5 h-5" />, title: "HIPAA Aligned", desc: "Protected Patient Information (PHI) is encrypted at rest (AES-256) and in transit (TLS 1.3)." },
  { icon: <ShieldCheck className="w-5 h-5" />, title: "Audit Trail Logging", desc: "Every read, write, and assessment log event is logged with IP, user ID, and timestamp coordinates." },
  { icon: <Eye className="w-5 h-5" />, title: "Role-Based Security", desc: "Scopes dashboard accessibility. Patients can see their history, doctors see assigned briefs, and clinic admins view metrics." },
  { icon: <UserCog className="w-5 h-5" />, title: "Consent Scoped Files", desc: "Sharing triage summaries with clinicians is a consent-controlled action, ensuring patient authority." },
  { icon: <RefreshCw className="w-5 h-5" />, title: "Data Portability", desc: "Patients can download their entire assessment and booking timeline in HL7 FHIR or PDF bundles." },
  { icon: <AlertTriangle className="w-5 h-5" />, title: "Intrusion Screening", desc: "Automatically blocks accounts in case of multiple login failures, unauthorized access, or mass downloads." },
  { icon: <CloudUpload className="w-5 h-5" />, title: "Secure Report Vault", desc: "Diagnostic PDFs are securely hosted in S3 buckets with access keys signed for limited lifetimes." },
  { icon: <Database className="w-5 h-5" />, title: "Isolated Data Schemas", desc: "Keeps clinic records logically partitioned, preventing cross-organization records leakage." },
];

const integrations = [
  { name: "OpenAI GPT-4o", category: "AI Services", desc: "Powers the intake dialog, follow-up screening questions, specialty routing, and patient summary briefs." },
  { name: "Prisma & PostgreSQL", category: "Database Layer", desc: "Ensures type-safe SQL queries, robust transaction tables, audit logs, and migration stability." },
  { name: "Stripe Connect", category: "Billing Engine", desc: "Processes consultation copays, clinic revenue shares, and clinic subscription plans." },
  { name: "Twilio API", category: "SMS Messaging", desc: "Sends immediate triage notifications, slot reminders, and automated Day 1/7 symptom follow-up checks." },
  { name: "SendGrid", category: "Email Service", desc: "Dispatches clinic booking confirmations, care guides, and rating reviews." },
  { name: "FHIR HL7 API", category: "EHR Integration", desc: "Compatible with hospital networks, enabling seamless transfer of intake briefs to Epic or Cerner." },
  { name: "Daily.co / Twilio Video", category: "Telehealth SDKs", desc: "Integrated WebRTC in-browser consulting rooms linked to the doctor matching engine." },
  { name: "Clerk / Auth.js", category: "Authentication", desc: "Secures patient profiles with MFA, single sign-on, and role credentials." },
  { name: "AWS Cloud S3", category: "File Vault", desc: "Hosts patient diagnostics, lab reports, and doctor intake documents securely." },
];

const stats = [
  { value: "4", label: "Dashboard Interfaces", icon: <LayoutDashboard className="w-5 h-5" /> },
  { value: "3", label: "User Roles", icon: <Users className="w-5 h-5" /> },
  { value: "12+", label: "Intake Workflows", icon: <Activity className="w-5 h-5" /> },
  { value: "100%", label: "HIPAA Compliant", icon: <Shield className="w-5 h-5" /> },
  { value: "3", label: "MVP Roadmap Phases", icon: <TrendingUp className="w-5 h-5" /> },
  { value: "9", label: "Core Integrations", icon: <RefreshCw className="w-5 h-5" /> },
];

const faqs: FAQ[] = [
  { q: "Does the AI Symptom Checker diagnose patients?", a: "No. The AI Symptom Checker is built as a triage, care navigation, and patient onboarding assistant. It provides educational health information, suggests relevant clinical departments, and prepares consult summaries. It does not diagnose diseases or replace professional medical advice." },
  { q: "Is the Care Navigator HIPAA-compliant?", a: "Yes. The platform is designed following HIPAA and SOC2 specifications. All clinical details and chat transcripts are encrypted at rest and in transit. Detailed audit logs record every single access event." },
  { q: "What is the Emergency Safety Layer?", a: "The triage engine constantly parses user input. If red-flag emergency symptoms (e.g. chest pain, numbness, sudden confusion, severe bleeding) are detected, the system overrides the triage flow and immediately displays warning cards instructing the patient to seek urgent emergency care." },
  { q: "How does the AI Patient Interview Mode function?", a: "Unlike static checklists, our AI conducts a conversational interview. It asks adaptive, context-aware follow-up questions: 'How long has it lasted?', 'What is the severity on a 1-10 scale?', 'Does it worsen with movement?' to collect detailed intake records." },
  { q: "What is in the Doctor Consultation Preparation Report?", a: "It is a 1-page clinical summary containing the patient's primary concern, symptom timeline, severity, medical history, active medications, and a list of AI-generated questions to discuss during the visit. This brief is sent directly to the doctor's queue, saving 5-10 minutes per consult." },
  { q: "How does the Smart Doctor Matching Engine work?", a: "After identifying the recommended department, the AI matches patients with doctors. It evaluates specialties, availability slots, insurance networks, language settings, consultation pricing, and location proximity to present the best matching providers." },
  { q: "How can clinics monetize this platform?", a: "Clinics use it as a patient acquisition and lead intake engine. Clinic owners pay subscription fees for the AI receptionist, automated triage flows, and analytics dashboards, or pay commission rates based on booked consult leads." },
  { q: "Can doctors manage appointments through the dashboard?", a: "Yes. The Doctor Dashboard displays the patient list, consult requests, scheduling calendars, and AI triage summaries. Doctors can approve bookings and review clinical notes before starting calls." },
  { q: "What analytics does the Clinic Lead Dashboard provide?", a: "Clinic managers see: total intake leads, routed department volumes (e.g. Neurology vs. Cardiology), scheduling conversion rates (assessments completed vs. appointments booked), and slot occupancy metrics." },
  { q: "How does the Voice AI symptom checking work?", a: "For elderly or visually impaired patients, the system includes a microphone voice intake. The patient speaks their concern, the system processes it using speech-to-text, conducts the intake conversation, and compiles the brief hands-free." },
  { q: "Can family members be managed under one account?", a: "Yes. The Family Health AI Account allows a parent or care coordinator to switch between profiles for children, spouse, or parents. Each profile maintains its own triage history and appointments." },
  { q: "What automated follow-ups does the system send?", a: "Using Twilio SMS and SendGrid email, the system automatically checks in on patients. It sends symptom check-ins on Day 1 and Day 7, collects rating reviews, and sends reminders for recommended follow-up visits." },
  { q: "What EHR systems can this connect to?", a: "The platform features a FHIR HL7-aligned API layer. This allows integration with major Electronic Health Record systems such as Epic, Cerner, or Athenahealth, syncing intake briefs directly into existing hospital databases." },
  { q: "How does the SEO Growth Engine work?", a: "The platform generates indexable, SEO-friendly health education articles (e.g. 'When should you see a cardiologist?', 'Common causes of back pain'). These articles contain CTAs directing readers to the AI intake flow, capturing organic traffic." },
  { q: "Is the patient triage summary downloadable?", a: "Yes, patients can download their triage summaries and doctor briefs as signed PDFs from their dashboard, or share them with existing primary care providers." },
  { q: "What databases and ORMs are used?", a: "We build with PostgreSQL as the relational database layer and Prisma ORM for safe type-checking. Schemas include Assessments, Symptoms, AIResponses, Users, Patients, Doctors, and Clinics." },
  { q: "How is file upload security managed?", a: "Patient reports are stored in secure AWS S3 buckets. Public read access is blocked. Files can only be retrieved using secure pre-signed URLs that expire automatically after 10 minutes." },
  { q: "What is the difference between a normal symptom checker and this platform?", a: "A normal checker gives a diagnostic estimate and stops. Our platform guides the patient through a care pathway: understanding symptoms → suggesting departments → doctor matching → booking → clinical briefs → follow-up care." },
  { q: "Does the platform support multiple languages?", a: "Yes. Triage assessments, summaries, and notifications are fully localized in English and Spanish, which is vital for clinics serving diverse patient groups." },
  { q: "How long does implementation take for clinic groups?", a: "A white-label MVP (Phase 1) is deployed in 4-6 weeks. A complete enterprise rollout with full EHR database integrations, voice AI, and multi-department analytics takes 3-4 months." }
];

/* =======================================================
   COMPONENT
 ======================================================= */
export default function AIHealthcareNavigatorPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeUseCase, setActiveUseCase] = useState(0);

  // Interactive Simulator States
  const [activeTab, setActiveTab] = useState("TriageSimulator");
  const [assessmentChat, setAssessmentChat] = useState([
    { sender: "ai", text: "Hello! I am the AI Healthcare Navigator. How are you feeling today? (Select a symptom pill below or describe your concern)" }
  ]);
  const [chatLoading, setChatLoading] = useState(false);
  const [chatStep, setChatStep] = useState(1);
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(null);
  const [showDoctorMatch, setShowDoctorMatch] = useState(false);
  const [assessmentSummary, setAssessmentSummary] = useState<AssessmentSummary | null>(null);

  // Emergency safety trigger state
  const [emergencyAlert, setEmergencyAlert] = useState(false);

  // Clinic Leads analytics cycle toggle
  const [analyticsInterval, setAnalyticsInterval] = useState<"weekly" | "monthly">("monthly");

  const matchingDoctors: Record<string, DoctorProfile[]> = {
    "Neurology": [
      { name: "Dr. Sarah Stone", specialty: "Neurology", experience: "15 Years", languages: "English, Spanish", rating: "4.9", time: "10:30 AM", fee: "$150", insurance: "Cigna, Aetna" }
    ],
    "Orthopedics": [
      { name: "Dr. Robert Patel", specialty: "Orthopedic Surgery", experience: "12 Years", languages: "English", rating: "4.8", time: "2:00 PM", fee: "$180", insurance: "Blue Cross, UnitedHealth" }
    ],
    "Dentistry": [
      { name: "Dr. Elena Gomez", specialty: "Cosmetic Dentistry", experience: "10 Years", languages: "Spanish, English", rating: "5.0", time: "11:00 AM", fee: "$120", insurance: "MetLife, Delta Dental" }
    ]
  };

  const handlePatientInput = (inputText: string, aiResponseText: string, nextStep: number, isEmergency: boolean = false) => {
    if (chatLoading) return;
    setAssessmentChat(prev => [...prev, { sender: "patient", text: inputText }]);
    setChatLoading(true);
    setChatStep(nextStep);

    if (isEmergency) {
      setTimeout(() => {
        setAssessmentChat(prev => [
          ...prev, 
          { sender: "ai", text: "🚨 EMERGENCY ALERT TRIGGERED: Severe symptom detected." }
        ]);
        setEmergencyAlert(true);
        setChatLoading(false);
      }, 700);
      return;
    }

    setTimeout(() => {
      setAssessmentChat(prev => [...prev, { sender: "ai", text: aiResponseText }]);
      setChatLoading(false);
    }, 850);
  };

  const generateReport = (specialty: string, concern: string, duration: string) => {
    setSelectedSpecialty(specialty);
    setAssessmentSummary({
      concern: concern,
      duration: duration,
      department: specialty,
      symptoms: [concern, "Fatigue", "Increased localized pain"],
      questions: [
        "What diagnostic screening tests (e.g. MRI, Blood panel) are recommended?",
        "Should I avoid any specific physical movements or diet options?",
        "Are there immediate non-prescription steps to relieve discomfort?"
      ]
    });
    setShowDoctorMatch(true);
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
          <span className="text-white">AI Healthcare Navigator</span>
        </div>

        {/* -- HERO SECTION -- */}
        <section className="relative mb-24 pt-8 md:pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left side: Heading (5 cols) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 flex flex-col space-y-6 text-left"
            >
              {/* Top Badge */}
              <div className="inline-flex items-center space-x-2 self-start bg-gradient-to-r from-brand-cyan/15 to-brand-indigo/15 border border-brand-cyan/20 rounded-full px-4.5 py-1.5 shadow-lg shadow-brand-cyan/5">
                <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full animate-pulse" />
                <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest">AI Healthcare Navigator</span>
                <Sparkles className="w-3 h-3 text-brand-cyan" />
              </div>

              {/* Headline */}
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl xl:text-5xl text-white leading-[1.15] tracking-tight">
                Understand Symptoms.<br />
                <span className="text-gradient-cyan-indigo">Find The Right Specialty.</span><br />
                <span className="text-gradient-emerald-cyan">Get Mapped to Care.</span>
              </h1>

              {/* Subtitle */}
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                An AI-powered care navigation platform that triages symptoms, suggests appropriate clinical departments, generates doctor summaries, and connects patients with providers.
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
                  href="https://aura-care-sepia.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 glass-panel border border-brand-border text-white font-semibold px-5 py-3.5 rounded-xl hover:border-brand-cyan/40 hover:scale-[1.02] active:scale-[0.98] transition-all text-xs whitespace-nowrap"
                >
                  <Globe className="w-3.5 h-3.5 text-brand-cyan" />
                  <span>Launch Live App</span>
                </a>
                <a
                  href="https://github.com/alimubashir822/AuraCare"
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
                  { icon: <Shield className="w-3.5 h-3.5 text-brand-emerald" />, label: "HIPAA Compliant Data", bg: "bg-brand-emerald/10 border-brand-emerald/20" },
                  { icon: <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />, label: "Safety Triage Filters", bg: "bg-rose-400/10 border-rose-400/20" },
                  { icon: <CheckCircle className="w-3.5 h-3.5 text-brand-cyan" />, label: "EHR Sync Ready", bg: "bg-brand-cyan/10 border-brand-cyan/20" },
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
              id="simulator"
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
                    <span className="font-display font-bold text-white text-xs tracking-wide">AI Care Navigator Simulator</span>
                  </div>
                  
                  {/* Status Indicator */}
                  <div className="flex items-center space-x-2 bg-brand-cyan/10 border border-brand-cyan/25 rounded-full px-2.5 py-1">
                    <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full animate-pulse" />
                    <span className="text-[10px] text-brand-cyan font-semibold">Triage Sandbox</span>
                  </div>
                </div>

                {/* Dashboard Inner Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-brand-border h-[460px]">
                  
                  {/* Sidebar (3 cols) */}
                  <div className="md:col-span-4 p-4 space-y-1.5 bg-white/[0.01]">
                    <p className="text-[9px] text-gray-500 uppercase font-bold tracking-wider mb-2 px-2">Navigation</p>
                    {[
                      { id: "TriageSimulator", label: "Triage Triage Flow", icon: <Brain className="w-3.5 h-3.5" /> },
                      { id: "PathwayViewer", label: "Care Pathway Timeline", icon: <Activity className="w-3.5 h-3.5" /> },
                      { id: "LeadAnalytics", label: "Clinic Lead Tracking", icon: <BarChart3 className="w-3.5 h-3.5" /> },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => {
                          setActiveTab(tab.id);
                          setEmergencyAlert(false);
                          setShowDoctorMatch(false);
                        }}
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
                      <p className="text-[9px] text-gray-500 uppercase font-bold tracking-wider mb-2 px-2">Triage Metrics</p>
                      <div className="flex items-center space-x-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-gray-400">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>Safety Filters</span>
                      </div>
                      <div className="flex items-center space-x-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-gray-400">
                        <Users className="w-3.5 h-3.5" />
                        <span>Referral Matches</span>
                      </div>
                    </div>
                  </div>

                  {/* Main Display (8 cols) */}
                  <div className="md:col-span-8 p-5 overflow-y-auto flex flex-col justify-between h-full bg-brand-bg/20">
                    
                    {/* Active tab: Triage Simulator */}
                    {activeTab === "TriageSimulator" && !emergencyAlert && !showDoctorMatch && (
                      <div className="flex flex-col h-full justify-between flex-grow">
                        <div className="flex justify-between items-center border-b border-brand-border/60 pb-2 mb-2">
                          <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-wider flex items-center space-x-1">
                            <Sparkles className="w-3.5 h-3.5 text-brand-cyan mr-1" />
                            <span>AI Symptom Intake Conversation</span>
                          </span>
                          <span className="text-[8px] text-brand-emerald font-semibold">Triage Live</span>
                        </div>

                        {/* Triage Chat window */}
                        <div className="space-y-3 flex-grow overflow-y-auto max-h-[220px] pr-1 mb-2 font-sans">
                          {assessmentChat.map((msg, i) => (
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

                        {/* Interactive symptom choice pills */}
                        <div className="space-y-1.5 border-t border-brand-border/60 pt-2">
                          <p className="text-[8px] text-gray-500 font-bold uppercase tracking-wider">Select Symptom to Simulate Patient Intake:</p>
                          <div className="flex flex-wrap gap-1.5">
                            {chatStep === 1 && (
                              <>
                                <button
                                  onClick={() => handlePatientInput("I have frequent severe headaches.", "Understood. Headaches require screening. Let's ask: How long has this been happening, and is it accompanied by any vision changes or nausea?", 2)}
                                  className="text-[9px] border border-brand-cyan/20 bg-brand-cyan/5 hover:bg-brand-cyan/10 text-brand-cyan rounded-lg px-2.5 py-1"
                                >
                                  Frequent Headaches
                                </button>
                                <button
                                  onClick={() => handlePatientInput("I have severe chest pain and breath shortness.", "", 9, true)}
                                  className="text-[9px] border border-rose-500/30 bg-rose-500/5 hover:bg-rose-500/10 text-rose-400 rounded-lg px-2.5 py-1"
                                >
                                  🚨 Chest Pain (Emergency)
                                </button>
                                <button
                                  onClick={() => handlePatientInput("My knee is swollen and hurts when walking.", "I see. Joint swelling and pain. Let's screen: Was there a recent injury or twist to the knee, and are you able to bear weight?", 3)}
                                  className="text-[9px] border border-brand-cyan/20 bg-brand-cyan/5 hover:bg-brand-cyan/10 text-brand-cyan rounded-lg px-2.5 py-1"
                                >
                                  Knee Swelling
                                </button>
                              </>
                            )}

                            {chatStep === 2 && (
                              <>
                                <button
                                  onClick={() => handlePatientInput("Happening for 2 weeks, mild nausea, no vision issues.", "Thank you. Based on frequent headaches + mild nausea lasting 2 weeks, Neurology is the suggested department.\n\nGenerate report below to view matched doctors and consultation briefs.", 4)}
                                  className="text-[9px] border border-brand-cyan/20 bg-brand-cyan/5 hover:bg-brand-cyan/10 text-brand-cyan rounded-lg px-2.5 py-1"
                                >
                                  2 Weeks + Nausea
                                </button>
                              </>
                            )}

                            {chatStep === 3 && (
                              <>
                                <button
                                  onClick={() => handlePatientInput("No direct injury, hurts to bear weight.", "Thank you. Non-injury joint pain. Orthopedics and Physiotherapy are the recommended departments.\n\nGenerate report below to view specialists.", 5)}
                                  className="text-[9px] border border-brand-cyan/20 bg-brand-cyan/5 hover:bg-brand-cyan/10 text-brand-cyan rounded-lg px-2.5 py-1"
                                >
                                  Unable to bear weight
                                </button>
                              </>
                            )}

                            {chatStep === 4 && (
                              <button
                                onClick={() => generateReport("Neurology", "Frequent severe headaches", "2 weeks")}
                                className="text-[9px] border border-brand-emerald/30 bg-brand-emerald/10 hover:bg-brand-emerald/20 text-brand-emerald rounded-lg px-2.5 py-1 font-bold"
                              >
                                Generate Care Report &rarr;
                              </button>
                            )}

                            {chatStep === 5 && (
                              <button
                                onClick={() => generateReport("Orthopedics", "Knee joint swelling", "3 days")}
                                className="text-[9px] border border-brand-emerald/30 bg-brand-emerald/10 hover:bg-brand-emerald/20 text-brand-emerald rounded-lg px-2.5 py-1 font-bold"
                              >
                                Generate Care Report &rarr;
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Emergency Alert screen */}
                    {activeTab === "TriageSimulator" && emergencyAlert && (
                      <div className="glass-panel border-rose-500/40 bg-rose-950/20 rounded-xl p-5 flex flex-col justify-between h-full">
                        <div className="space-y-3">
                          <div className="flex items-center space-x-2 text-rose-400">
                            <AlertTriangle className="w-5 h-5 animate-bounce" />
                            <span className="text-xs font-bold uppercase tracking-wider">🚨 URGENT CRITICAL WARNING</span>
                          </div>
                          
                          <p className="text-xs text-white leading-relaxed">
                            Your symptoms (<strong>severe chest pain and shortness of breath</strong>) indicate a possible acute cardiac event or emergency condition.
                          </p>
                          <p className="text-[11px] text-gray-400 leading-relaxed">
                            Please seek immediate emergency care by calling <strong>911</strong> (or your local emergency services number) or traveling to the nearest hospital emergency room. Do not wait for an online consultation.
                          </p>
                        </div>

                        <div className="space-y-2 pt-4 border-t border-rose-500/20">
                          <button
                            onClick={() => {
                              setEmergencyAlert(false);
                              setChatStep(1);
                              setAssessmentChat([
                                { sender: "ai", text: "Hello! I am the AI Healthcare Navigator. How are you feeling today? (Select a symptom pill below or describe your concern)" }
                              ]);
                            }}
                            className="w-full text-center block text-xs bg-slate-900 border border-brand-border text-gray-300 hover:text-white py-2 rounded-lg"
                          >
                            Return to Sandbox Triage
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Doctor Match & Preparation Report View */}
                    {activeTab === "TriageSimulator" && showDoctorMatch && assessmentSummary && (
                      <div className="space-y-4 flex-grow h-full overflow-y-auto pr-1 flex flex-col justify-between">
                        <div className="space-y-3">
                          
                          {/* Brief Header */}
                          <div className="flex justify-between items-center bg-slate-900/60 p-2 rounded-lg border border-brand-border">
                            <div>
                              <p className="text-[8px] text-gray-500 uppercase font-bold">Recommended Care Department</p>
                              <p className="text-xs font-bold text-white">{assessmentSummary.department}</p>
                            </div>
                            <span className="text-[9px] bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/20 px-2 py-0.5 rounded font-mono font-bold">Referral Active</span>
                          </div>

                          {/* Prepared Brief card */}
                          <div className="glass-panel border border-brand-border rounded-xl p-3 space-y-2">
                            <span className="text-[9px] text-brand-cyan font-bold uppercase block">AI Patient Intake Brief</span>
                            <div className="text-[10px] text-gray-300 space-y-1">
                              <p><strong className="text-gray-400">Chief Complaint:</strong> {assessmentSummary.concern}</p>
                              <p><strong className="text-gray-400">Duration:</strong> {assessmentSummary.duration}</p>
                            </div>
                            <div className="border-t border-brand-border/60 pt-2 space-y-1">
                              <p className="text-[8px] text-gray-500 uppercase font-bold">Suggested questions for your doctor:</p>
                              {assessmentSummary.questions.map((q: string, idx: number) => (
                                <p key={idx} className="text-[9px] text-gray-400 leading-snug flex items-start">
                                  <span className="text-brand-cyan mr-1.5">•</span>
                                  <span>{q}</span>
                                </p>
                              ))}
                            </div>
                          </div>

                          {/* Matched Specialist profile card */}
                          <div className="border border-brand-indigo/35 bg-brand-indigo/5 rounded-xl p-3 space-y-2">
                            <span className="text-[9px] text-brand-indigo font-bold uppercase block">Top Matched Specialist Available Today</span>
                            {matchingDoctors[assessmentSummary.department]?.map((doc) => (
                              <div key={doc.name} className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                  <div className="w-8 h-8 rounded bg-brand-indigo/10 flex items-center justify-center font-bold text-xs text-brand-indigo">
                                    {doc.name.split(" ").slice(1).map((n: string) => n[0]).join("")}
                                  </div>
                                  <div>
                                    <p className="text-xs font-bold text-white">{doc.name}</p>
                                    <p className="text-[8px] text-gray-500">{doc.specialty} · {doc.experience} Exp</p>
                                  </div>
                                </div>
                                <button
                                  onClick={() => {
                                    alert(`Successfully booked consultation with ${doc.name} at ${doc.time}! The Intake brief was transferred to their queue.`);
                                    setShowDoctorMatch(false);
                                    setChatStep(1);
                                    setAssessmentChat([
                                      { sender: "ai", text: "Hello! I am the AI Healthcare Navigator. How are you feeling today? (Select a symptom pill below or describe your concern)" }
                                    ]);
                                  }}
                                  className="text-[9px] bg-brand-cyan hover:bg-brand-cyan/95 text-brand-bg px-2.5 py-1.5 rounded-lg font-bold"
                                >
                                  Book {doc.time}
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>

                        <button
                          onClick={() => {
                            setShowDoctorMatch(false);
                            setChatStep(1);
                            setAssessmentChat([
                              { sender: "ai", text: "Hello! I am the AI Healthcare Navigator. How are you feeling today? (Select a symptom pill below or describe your concern)" }
                            ]);
                          }}
                          className="w-full text-center text-[9px] text-gray-500 hover:text-gray-300 py-1"
                        >
                          Cancel & restart triage
                        </button>
                      </div>
                    )}

                    {/* Active tab: Care Pathway Viewer */}
                    {activeTab === "PathwayViewer" && (
                      <div className="space-y-4 flex-grow">
                        <div className="flex justify-between items-center">
                          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Your Visual Healthcare Pathway</h4>
                          <span className="text-[8px] text-brand-emerald font-semibold bg-brand-emerald/10 border border-brand-emerald/20 px-2 py-0.5 rounded-full">Intake Journey</span>
                        </div>

                        {/* Pathway Road map */}
                        <div className="space-y-3 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-brand-cyan/20">
                          {[
                            { step: 1, title: "Understand Symptoms", desc: "Complete conversational intake session with AI concierge.", status: "completed" },
                            { step: 2, title: "Specialist Recommendation", desc: "AI maps symptoms to Cardiology, Dermatology, or Orthopedics.", status: "completed" },
                            { step: 3, title: "Choose Provider & Sync Insurance", desc: "Evaluate matched doctors, check co-pay rates, and verify Cigna/Aetna details.", status: "current" },
                            { step: 4, title: "Consultation Pre-Brief", desc: "AI auto-generates symptom checklist summaries for doctor's queue.", status: "pending" },
                            { step: 5, title: "Secure Telehealth Visit", desc: "Discuss intake report with physician via encrypted video consultation.", status: "pending" },
                            { step: 6, title: "Follow-Up Triage (Day 7)", desc: "AI prompts automated check-in survey to trace treatment compliance.", status: "pending" }
                          ].map((node) => (
                            <div key={node.step} className="flex items-start space-x-3.5 relative pl-7 text-[10px]">
                              {/* Indicator dot */}
                              <div className={`absolute left-0 top-1 w-6 h-6 rounded-full border-2 flex items-center justify-center text-[8px] font-bold ${
                                node.status === "completed" 
                                  ? "bg-brand-cyan border-brand-cyan text-brand-bg" 
                                  : node.status === "current" 
                                    ? "bg-brand-indigo/10 border-brand-indigo text-brand-indigo animate-pulse" 
                                    : "bg-slate-900 border-brand-border text-gray-600"
                              }`}>
                                {node.step}
                              </div>
                              
                              <div>
                                <h5 className={`font-bold ${node.status === "completed" ? "text-brand-cyan" : node.status === "current" ? "text-brand-indigo" : "text-gray-500"}`}>
                                  {node.title}
                                </h5>
                                <p className="text-gray-400 mt-0.5 leading-snug">{node.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Active tab: Clinic Lead Tracking */}
                    {activeTab === "LeadAnalytics" && (
                      <div className="space-y-4 flex-grow">
                        <div className="flex justify-between items-center">
                          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Patient Lead Conversion Metrics</h4>
                          
                          {/* Interval selector */}
                          <div className="flex bg-slate-900 border border-brand-border rounded-lg p-0.5 text-[8px] font-bold">
                            <button
                              onClick={() => setAnalyticsInterval("weekly")}
                              className={`px-2 py-0.5 rounded ${analyticsInterval === "weekly" ? "bg-brand-cyan text-brand-bg" : "text-gray-400"}`}
                            >
                              Weekly
                            </button>
                            <button
                              onClick={() => setAnalyticsInterval("monthly")}
                              className={`px-2 py-0.5 rounded ${analyticsInterval === "monthly" ? "bg-brand-cyan text-brand-bg" : "text-gray-400"}`}
                            >
                              Monthly
                            </button>
                          </div>
                        </div>

                        {/* Leads statistics */}
                        <div className="grid grid-cols-3 gap-2">
                          <div className="bg-slate-900/60 rounded-xl p-3 border border-brand-border text-center">
                            <span className="text-[8px] text-gray-500 block">Total Intake Leads</span>
                            <span className="text-sm font-extrabold text-white font-mono">
                              {analyticsInterval === "weekly" ? "345" : "1,420"}
                            </span>
                            <span className="text-[7px] text-brand-cyan block mt-0.5">^ +15% conversion</span>
                          </div>
                          <div className="bg-slate-900/60 rounded-xl p-3 border border-brand-border text-center">
                            <span className="text-[8px] text-gray-500 block">Routed to Clinics</span>
                            <span className="text-sm font-extrabold text-white font-mono">
                              {analyticsInterval === "weekly" ? "210" : "840"}
                            </span>
                            <span className="text-[7px] text-brand-emerald block mt-0.5">60% Triage rate</span>
                          </div>
                          <div className="bg-slate-900/60 rounded-xl p-3 border border-brand-border text-center">
                            <span className="text-[8px] text-gray-500 block">Booked Appts</span>
                            <span className="text-sm font-extrabold text-white font-mono">
                              {analyticsInterval === "weekly" ? "125" : "520"}
                            </span>
                            <span className="text-[7px] text-brand-indigo block mt-0.5">36% Booking rate</span>
                          </div>
                        </div>

                        {/* Specialty breakdown */}
                        <div className="glass-panel rounded-xl p-3 border border-brand-border space-y-2">
                          <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider block">Intake Volume by specialty</span>
                          <div className="space-y-2">
                            {[
                              { label: "Dermatology", value: 42, color: "bg-brand-cyan" },
                              { label: "Orthopedics & Rehab", value: 35, color: "bg-brand-indigo" },
                              { label: "Cardiology", value: 23, color: "bg-rose-400" }
                            ].map((spec) => (
                              <div key={spec.label} className="space-y-1">
                                <div className="flex justify-between text-[9px] font-semibold text-gray-300">
                                  <span>{spec.label}</span>
                                  <span className="font-mono">{spec.value}%</span>
                                </div>
                                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                                  <div className={`h-full ${spec.color} rounded-full`} style={{ width: `${spec.value}%` }} />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Bottom navigator indicator helper */}
                    <div className="text-[9px] text-gray-500 text-center border-t border-brand-border/60 pt-2.5 flex items-center justify-between">
                      <span>Explore triage, pathways, and clinic lead tracking interfaces.</span>
                      <Brain className="w-3.5 h-3.5 text-brand-cyan" />
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
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="text-center space-y-1.5"
                >
                  <div className="flex justify-center text-brand-cyan">
                    {stat.icon}
                  </div>
                  <h3 className="font-display font-extrabold text-2xl md:text-3xl text-white">{stat.value}</h3>
                  <p className="text-[10px] font-medium text-gray-500 uppercase tracking-wider">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================
            CORE FEATURES GRID
        ====================================== */}
        <section className="mb-28">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-cyan/10 border border-brand-cyan/20 rounded-full px-4 py-1.5 mb-4">
              <Sparkles className="w-4 h-4 text-brand-cyan" />
              <span className="text-xs font-semibold text-brand-cyan uppercase tracking-widest">Platform Modules</span>
            </div>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-white leading-tight">
              Intelligent Intake & Care Routing
            </h2>
            <p className="mt-4 text-gray-400 leading-relaxed text-sm md:text-base">
              Convert random health questions into structured care paths. Eliminate receptionist load while presenting doctors with well-prepared clinical briefs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {coreFeatures.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
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
            PORTAL STRUCTURE MAP
        ====================================== */}
        <section className="mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center space-x-2 bg-brand-cyan/10 border border-brand-cyan/20 rounded-full px-4 py-1.5 mb-6">
                <LayoutDashboard className="w-4 h-4 text-brand-cyan" />
                <span className="text-xs font-semibold text-brand-cyan uppercase tracking-widest">Platform Mapping</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-4">
                Symptom Triage to Doctor Handoff
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Triage patients empathetically, identify clinical department referrals, and recommend the best providers based on schedule slot configurations, insurance networks, and locations.
              </p>
              <div className="glass-panel rounded-xl p-5 border border-brand-border">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Patient Routing Flow</p>
                <div className="flex items-center flex-wrap gap-2">
                  {["Symptom Input", "Triage Interview", "Department Identified", "Specialist Match", "Appointment Booked", "Day 1/7 Follow-up"].map((step, i, arr) => (
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
            DIFFERENTIATORS GRID
        ====================================== */}
        <section className="mb-28">
          <div className="text-center mb-14">
            <div className="inline-flex items-center space-x-2 bg-brand-cyan/10 border border-brand-cyan/20 rounded-full px-4 py-1.5 mb-4">
              <Activity className="w-4 h-4 text-brand-cyan" />
              <span className="text-xs font-semibold text-brand-cyan uppercase tracking-widest">Why We Excel</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              Built for seamless care navigation
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              We focus on converting patient questions into the correct healthcare journey, rather than generating simple database check responses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                style={{ boxShadow: `0 10px 30px -10px ${d.glow}` }}
                className={`glass-panel rounded-2xl p-6 border border-brand-border hover:border-brand-cyan/30 transition-all flex flex-col justify-between`}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-bg/50 border border-brand-border flex items-center justify-center mb-5 text-brand-cyan">
                    {d.icon}
                  </div>
                  <h3 className="font-display font-bold text-white text-lg mb-1">{d.title}</h3>
                  <p className="text-xs text-brand-cyan font-semibold mb-3">{d.subtitle}</p>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">{d.desc}</p>
                </div>
              </motion.div>
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
              <span className="text-xs font-semibold text-brand-cyan uppercase tracking-widest">Medical Use Cases</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              Optimized for varied clinics & telehealth networks
            </h2>
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
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-5">Patient Journey Sequence</p>
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
              <span className="text-xs font-semibold text-brand-emerald uppercase tracking-widest">Compliance</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              Clinical Integrity & Data Safeguards
            </h2>
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
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider text-center mb-5">Compliance Alignments</p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { label: "HIPAA Aligned", icon: "" },
                { label: "SOC 2 Security", icon: "" },
                { label: "AES-256 Storage Keys", icon: "" },
                { label: "FHIR HL7 Standards", icon: "" },
                { label: "Isolated Clinic Tenants", icon: "" },
              ].map((badge) => (
                <div key={badge.label} className="flex items-center space-x-2 bg-brand-emerald/10 border border-brand-emerald/20 rounded-full px-4 py-2">
                  <span className="text-xs font-semibold text-brand-emerald">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================
            INTEGRATIONS GRID
        ====================================== */}
        <section className="mb-28">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-brand-indigo/10 border border-brand-indigo/20 rounded-full px-4 py-1.5 mb-4">
              <RefreshCw className="w-4 h-4 text-brand-indigo" />
              <span className="text-xs font-semibold text-brand-indigo uppercase tracking-widest">Connectors</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              Third-Party APIs & Ecosystem Services
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
            TECH STACK GRID
        ====================================== */}
        <section className="mb-28">
          <div className="text-center mb-12">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              Platform Technology Stack
            </h2>
            <p className="mt-3 text-gray-400 max-w-xl mx-auto">
              Leverages modern, scalable tools to build a robust SaaS application.
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
                <h2 className="font-display font-bold text-2xl text-white">Database Relationships</h2>
                <p className="text-sm text-gray-400">PostgreSQL Schema managed through Prisma ORM</p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { table: "Users", fields: ["id", "name", "email", "role (DOCTOR/PATIENT/ADMIN)", "createdAt"] },
                { table: "Patients", fields: ["id", "userId (FK)", "dateOfBirth", "gender", "familyOwnerId"] },
                { table: "Doctors", fields: ["id", "userId (FK)", "specialty", "licenseNo", "clinicId (FK)"] },
                { table: "Clinics", fields: ["id", "name", "addressType", "ownerUserId"] },
                { table: "Symptoms", fields: ["id", "symptomName", "severityRating", "createdAt"] },
                { table: "Assessments", fields: ["id", "patientId (FK)", "primaryConcern", "symptomDuration", "recommendedSpecialty"] },
                { table: "AIResponses", fields: ["id", "assessmentId (FK)", "chatTranscript", "generatedBriefJSON"] },
                { table: "Appointments", fields: ["id", "patientId (FK)", "doctorId (FK)", "timeSlot", "status"] },
                { table: "Departments", fields: ["id", "departmentName", "specialistCount", "clinicId (FK)"] },
                { table: "Documents", fields: ["id", "patientId (FK)", "documentUrl (S3)", "docCategory"] },
                { table: "Messages", fields: ["id", "senderId (FK)", "receiverId (FK)", "contentString", "createdAt"] },
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
            FAQ SECTION
        ====================================== */}
        <section className="mb-28">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center space-x-2 bg-brand-indigo/10 border border-brand-indigo/20 rounded-full px-4 py-1.5 mb-4">
              <BookOpen className="w-4 h-4 text-brand-indigo" />
              <span className="text-xs font-semibold text-brand-indigo uppercase tracking-widest">Help Center</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-gray-400 max-w-xl mx-auto">
              Everything you need to know about the AI Healthcare Navigation Platform.
            </p>
          </div>

          {/* 2-column FAQ grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Column 1 */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2 mb-5">
                <div className="h-px flex-grow bg-brand-cyan/20" />
                <span className="text-xs font-bold text-brand-cyan uppercase tracking-widest px-3">Product Questions</span>
                <div className="h-px flex-grow bg-brand-cyan/20" />
              </div>
              {faqs.slice(0, 10).map((faq, i) => (
                <motion.div
                  key={`faq1-${i}`}
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
                <span className="text-xs font-bold text-brand-indigo uppercase tracking-widest px-3">Technical Questions</span>
                <div className="h-px flex-grow bg-brand-indigo/20" />
              </div>
              {faqs.slice(10, 20).map((faq, i) => (
                <motion.div
                  key={`faq2-${i}`}
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
            CTA BOX
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
              
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-4">
                Deploy Care Navigation & Triage For Your Hospital Or Clinic Group
              </h2>
              <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
                Streamline patient onboarding, recommend clinical departments, and increase appointment booking conversion rates by converting patient queries into structured care pathways.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
                <Link
                  href="/contact"
                  className="w-full bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-bold px-8 py-4 rounded-xl hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-brand-cyan/25 text-sm"
                >
                  Request White-Label Demo
                </Link>
                <Link
                  href="mailto:licensing@medclinicx.com"
                  className="w-full glass-panel border border-brand-border text-gray-300 font-semibold px-8 py-4 rounded-xl hover:border-brand-cyan/40 hover:text-white hover:scale-[1.02] active:scale-[0.98] transition-all text-sm"
                >
                  Enterprise Licensing
                </Link>
              </div>
            </div>
          </motion.div>
        </section>

      </div>
    </div>
  );
}
