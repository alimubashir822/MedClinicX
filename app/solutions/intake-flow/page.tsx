"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Sparkles, Brain, FileText, Shield, Users, Activity,
  CheckCircle, Star, TrendingUp, Lock, ChevronDown, LayoutDashboard,
  Stethoscope, Globe, Database, HardDrive, Clock, BarChart3,
  Building2, AlertTriangle, ShieldCheck, Eye, UserCog, ExternalLink,
  Trash2
} from "lucide-react";

/* --- Types --- */
interface Feature { icon: React.ReactNode; title: string; desc: string; badge?: string; }
interface Differentiator { icon: React.ReactNode; title: string; subtitle: string; desc: string; color: string; glow: string; }
interface FAQ { q: string; a: string; }

interface QueuePatient {
  id: string;
  name: string;
  time: string;
  readiness: number;
  reason: string;
  status: "Ready" | "Action Required" | "Pending";
  missingItems: string[];
}

interface IntakeSummary {
  name: string;
  reason: string;
  alerts: string[];
  insurance: string;
  details: string;
  questions: string[];
}

interface BuilderField {
  id: string;
  label: string;
  type: "text" | "dropdown" | "checkbox" | "file" | "signature";
}

interface IntakeData {
  concern: string;
  duration: string;
  allergies: string;
  medications: string;
  readiness: number;
}

/* =======================================================
   DATA
 ======================================================= */

const coreFeatures: Feature[] = [
  { icon: <Brain className="w-5 h-5" />, title: "AI Pre-Visit Interview", desc: "Replaces traditional static forms with a natural conversational flow, asking clinical screening questions.", badge: "Flagship" },
  { icon: <FileText className="w-5 h-5" />, title: "AI Patient Summary", desc: "Auto-generates concise, doctor-friendly briefings on patient complaints, histories, and clinical alerts.", badge: "Smart" },
  { icon: <TrendingUp className="w-5 h-5" />, title: "Appt Readiness Score", desc: "Scores intake completion ratios dynamically, highlighting checklist blockages before patients arrive.", badge: "New" },
  { icon: <AlertTriangle className="w-5 h-5" />, title: "AI Missing Info Detector", desc: "Scans uploaded intakes, identifies incomplete answers, and triggers SMS reminders for missing cards.", badge: "Smart" },
  { icon: <UserCog className="w-5 h-5" />, title: "Personalized Form Flows", desc: "Adapts form requirements in real-time, matching specific treatments (implant vs. teeth cleaning).", badge: "Premium" },
  { icon: <Shield className="w-5 h-5" />, title: "eSign Consent System", desc: "Coordinates secure digital signatures and timestamps aligned with HIPAA and UETA specifications.", badge: "HIPAA" },
  { icon: <Building2 className="w-5 h-5" />, title: "Smart Clinic Queue", desc: "Provides receptionists with real-time intake tracking checklists and waitlist sync capabilities.", badge: "Unique" },
  { icon: <Database className="w-5 h-5" />, title: "EHR Sync Ready", desc: "Syncs structured demographics, insurance categories, and document uploads directly to external databases.", badge: "Enterprise" },
  { icon: <Clock className="w-5 h-5" />, title: "Intake Automation Rules", desc: "Configures automated reminders, welcome campaigns, and thank-you checklists on schedule bookings." },
  { icon: <Lock className="w-5 h-5" />, title: "Security Audit Logging", desc: "Documents user access histories, IP coordinates, and signatures with cryptographical security hashes." },
  { icon: <BarChart3 className="w-5 h-5" />, title: "Onboarding Analytics", desc: "Analyzes form drop-off rates, average completion times, and receptionist administration savings." },
  { icon: <Users className="w-5 h-5" />, title: "Family Intake Manager", desc: "Allows parents or care managers to handle registrations and record uploads for multiple children under one account." }
];

const differentiators: Differentiator[] = [
  { icon: <Brain className="w-7 h-7" />, title: "AI Conversational Interview", subtitle: "Turn documents into dialogue", desc: "Patients converse with a conversational AI agent that adapts follow-up questions to their symptoms, producing a structured intake chart in minutes.", color: "from-brand-cyan/20 to-brand-indigo/10", glow: "rgba(6,182,212,0.15)" },
  { icon: <TrendingUp className="w-7 h-7" />, title: "AI Readiness Scoring Index", subtitle: "Optimize daily operations", desc: "Staff immediately see an Onboarding Score (e.g. 92% ready) for each visitor, identifying who has pending items before they check in.", color: "from-brand-indigo/20 to-purple-500/10", glow: "rgba(99,102,241,0.15)" },
  { icon: <AlertTriangle className="w-7 h-7" />, title: "AI Missing Item Detector", subtitle: "Zero missing cards on arrival", desc: "Scans form submissions and automatically triggers SMS links prompting patients to capture missing cards or sign consents before their slots.", color: "from-brand-emerald/20 to-brand-cyan/10", glow: "rgba(16,185,129,0.15)" },
  { icon: <UserCog className="w-7 h-7" />, title: "Intelligent Form Personalization", subtitle: "Form routing by treatment intent", desc: "Creates dynamic fields based on treatment selected. An implant patient gets scan uploads, whereas a hygiene check patient receives basic surveys.", color: "from-amber-500/20 to-orange-500/10", glow: "rgba(245,158,11,0.15)" },
  { icon: <FileText className="w-7 h-7" />, title: "AI Summaries for Doctors", subtitle: "Saving 5-10 minutes per patient", desc: "Synthesizes multi-page forms into a structured briefing, warning clinicians of allergies, past surgeries, and providing diagnostic context.", color: "from-rose-500/20 to-pink-500/10", glow: "rgba(244,63,94,0.15)" },
  { icon: <Building2 className="w-7 h-7" />, title: "Intake-to-Workflow Engine", subtitle: "Automate downstream actions", desc: "Triggers EHR record generation, schedules calendar confirmations, and assigns nurse checkups as soon as a form is signed off.", color: "from-violet-500/20 to-brand-indigo/10", glow: "rgba(139,92,246,0.15)" }
];

const stats = [
  { value: "94%", label: "Average Form Completion Rate", icon: <CheckCircle className="w-5 h-5" /> },
  { value: "7.2 min", label: "Average Completion Time", icon: <Clock className="w-5 h-5" /> },
  { value: "1.4 hrs", label: "Admin Labor Saved / Doctor Daily", icon: <Activity className="w-5 h-5" /> },
  { value: "35%+", label: "No-Show & Drop-Off Reduction", icon: <TrendingUp className="w-5 h-5" /> },
  { value: "100%", label: "HIPAA and SOC2 Compliant", icon: <Shield className="w-5 h-5" /> },
  { value: "5/5", label: "Average Patient Experience Score", icon: <Star className="w-5 h-5" /> }
];

const faqs: FAQ[] = [
  { q: "Is IntakeFlow AI HIPAA-compliant?", a: "Yes. All Protected Health Information (PHI) collected during intake is encrypted using AES-256 at rest and TLS 1.3 in transit. Full access logs are maintained permanently." },
  { q: "What is the AI Pre-Visit Interview?", a: "Instead of typing answers into complex grids, patients talk to a conversational interface. The AI asks about symptoms, pain duration, and medication histories, compiling a structured, formatted intake." },
  { q: "How does the Appointment Readiness Score work?", a: "It is a receptionist tool. The system evaluates whether a patient has uploaded insurance cards, signed treatment consents, and filled in history details, displaying a percentage (e.g. 95% Ready) on the dashboard queue." },
  { q: "Can clinics build custom intake forms?", a: "Yes. The Smart Form Builder allows clinic owners to drag and drop custom questions, dropdown inputs, signature blocks, and upload buttons without any code." },
  { q: "How are missing documents captured?", a: "If a patient submits an intake form but forgets their insurance card or ID, the AI Missing Info Detector flags it, automatically dispatching an SMS text reminder with an upload link." },
  { q: "What information is included in the Doctor AI Summary?", a: "It compiles a 1-page briefing outlining the patient's primary concern, medical alerts (e.g. Penicillin allergy), active medications, verified insurance details, and proposed questions for the doctor to ask." },
  { q: "Does the system sync with our Electronic Health Record (EHR) database?", a: "Yes. IntakeFlow AI supports bi-directional FHIR API integrations to create profiles, sync files, and update histories in EHR directories." },
  { q: "How are digital consent forms managed?", a: "The platform hosts standard templates for treatment, privacy, and billing consents. Signatures are secured with digital audit logs containing timestamp credentials and IP addresses." },
  { q: "Can family members complete forms together?", a: "Yes. The Family account allows care managers to submit registrations, sign documents, and coordinate insurance details for children or elderly relatives in one place." },
  { q: "What messaging services are integrated?", a: "We utilize Twilio SMS for transaction notifications, Resend for email calendar updates, and WhatsApp Business API for conversational intakes." },
  { q: "Does the system verify insurance cards?", a: "Our AI extracts the insurance provider, policy ID, and group number from uploaded photos, validating patient records against payer registries." },
  { q: "Is the patient experience mobile-friendly?", a: "Absolutely. IntakeFlow is a fully responsive PWA (Progressive Web App), allowing patients to scan documents and write digital signatures directly from their phones." },
  { q: "What roles and permissions are available?", a: "We configure five user roles: Owner (full revenue control), Doctor (clinical logs and summaries), Receptionist (booking and queue manager), Nurse (intake reviews), and Patient (form completions)." },
  { q: "How does the system reduce no-shows?", a: "By engaging patients in a micro-onboarding flow (signing forms, verifying benefits) prior to their visits, commitment levels increase, reducing missed slots by an average of 35%." },
  { q: "How long does onboarding a clinic take?", a: "Single clinic setups take under a week. Large multi-location medical groups with EHR integrations and RBAC profiles are deployed in 3-4 weeks." },
  { q: "What databases and hosting are used?", a: "We build with PostgreSQL as the relational database layer and Prisma ORM for safe type-checking. Forms, responses, and log history rows are логически изолированы." },
  { q: "How is file upload security handled?", a: "Patient reports are stored in secure AWS S3 buckets. Public read access is blocked. Files can only be retrieved using secure pre-signed URLs that expire automatically after 10 minutes." },
  { q: "Can we translate forms into other languages?", a: "Yes. Forms, chatbot interviews, and SMS notifications are fully localized in English and Spanish, which is vital for clinics serving diverse patient groups." },
  { q: "Can doctors edit the patient summary?", a: "Yes. The Doctor AI portal has simple text editors allowing clinicians to modify the generated pre-briefing notes before signing off." },
  { q: "Is there a free trial for medical groups?", a: "Yes. We offer a 14-day trial with full access to custom form builders and the AI qualification sandbox." }
];

const portalModules = [
  { icon: <Users className="w-5 h-5" />, title: "Patient Experience", items: ["Conversational intake chat", "Insurance card scanning", "Consent e-signatures", "Intake progress tracker"] },
  { icon: <Building2 className="w-5 h-5" />, title: "Clinic Staff Portal", items: ["Today's readiness queue", "Reminders SMS dispatch", "Insurance validation status", "Pending files check"] },
  { icon: <Stethoscope className="w-5 h-5" />, title: "Doctor Dashboard", items: ["AI patient pre-visit summaries", "Active allergy alerts", "Medical history timeline", "Patient concerns list"] },
  { icon: <LayoutDashboard className="w-5 h-5" />, title: "Form SaaS Admin", items: ["Drag-and-drop form builder", "Organization sitemaps logs", "EHR sync triggers", "Audit log hash listings"] }
];

const techStack = [
  { category: "Frontend OS", items: ["Next.js 15 App Router", "TypeScript", "Tailwind CSS", "shadcn/ui", "Framer Motion"], icon: <Globe className="w-5 h-5" /> },
  { category: "Database Layer", items: ["PostgreSQL database", "Prisma ORM", "Logical tenant isolation", "AWS S3 / Cloudflare R2"], icon: <Database className="w-5 h-5" /> },
  { category: "AI & Messaging", items: ["OpenAI GPT-4o API", "Twilio SMS Gateway", "Resend Transactional Email", "Daily.co API"], icon: <Lock className="w-5 h-5" /> },
  { category: "Security & eSign", items: ["UETA Compliance hashes", "AES-256 PHI encryption", "Auth.js auth gates", "IP audit trail trackers"], icon: <HardDrive className="w-5 h-5" /> }
];

/* =======================================================
   COMPONENT
 ======================================================= */
export default function IntakeFlowPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Interactive Simulator States
  const [activeTab, setActiveTab] = useState("AIIntake");

  // AI Intake Chat States
  const [intakeChat, setIntakeChat] = useState([
    { sender: "ai", text: "Hi! I am your IntakeFlow AI Onboarding Assistant. How can we help prepare your clinic visit today?" }
  ]);
  const [intakeLoading, setIntakeLoading] = useState(false);
  const [intakeStep, setIntakeStep] = useState(1);
  const [intakeData, setIntakeData] = useState<IntakeData | null>(null);

  // Clinic Staff Queue States
  const [patientQueue] = useState<QueuePatient[]>([
    { id: "john-doe", name: "John Doe", time: "10:00 AM", readiness: 100, reason: "Cleaning checkup", status: "Ready", missingItems: [] },
    { id: "sarah-jones", name: "Sarah Jones", time: "11:30 AM", readiness: 85, reason: "Dental implant consult", status: "Action Required", missingItems: ["Insurance Card Upload"] },
    { id: "mike-ross", name: "Mike Ross", time: "1:00 PM", readiness: 60, reason: "Wisdom teeth extraction", status: "Pending", missingItems: ["Treatment Consent eSignature", "Medical Questionnaire"] }
  ]);
  const [sentReminderId, setSentReminderId] = useState<string | null>(null);

  // Doctor Brief States
  const [selectedQueuePatientId, setSelectedQueuePatientId] = useState("sarah-jones");

  // Mock Intake Summaries for Doctors
  const doctorSummaries: Record<string, IntakeSummary> = {
    "john-doe": {
      name: "John Doe",
      reason: "Dental Hygiene & Cleaning checkup",
      alerts: ["None reported"],
      insurance: "MetLife (Verified)",
      details: "Patient checked in with 100% completed intake. Last hygiene cleaning was 6 months ago. Reports normal sensitivity to cold liquids, but no localized pain.",
      questions: ["Verify sensitivity on lower incisors during exam."]
    },
    "sarah-jones": {
      name: "Sarah Jones",
      reason: "Dental Implant Consultation",
      alerts: ["Penicillin Allergy"],
      insurance: "Aetna (Pending card verification)",
      details: "Sarah Jones is seeking a consultation for replacement of a missing molar. Intake conversation flags Penicillin allergy. Completed medical history but missed card photo upload.",
      questions: ["Discuss implant placement phases.", "Validate Cigna/Aetna policy split coverage parameters."]
    },
    "mike-ross": {
      name: "Mike Ross",
      reason: "Wisdom Teeth Extraction",
      alerts: ["High Blood Pressure (142/90)"],
      insurance: "Cigna (Pending verification)",
      details: "Mike is scheduled for surgical removal of lower third molars. Pre-intake forms indicate mild heart murmur and elevated blood pressure metrics. Consent forms are currently unsigned.",
      questions: ["Confirm blood pressure stability before surgery.", "Collect physical signature on the surgical extraction consent form."]
    }
  };

  // Form Builder States
  const [formFields, setFormFields] = useState<BuilderField[]>([
    { id: "f-1", label: "Full Name", type: "text" },
    { id: "f-2", label: "Date of Birth", type: "text" },
    { id: "f-3", label: "Medical Allergies", type: "text" }
  ]);
  const [newFieldLabel, setNewFieldLabel] = useState("");
  const [newFieldType, setNewFieldType] = useState<"text" | "dropdown" | "checkbox" | "file" | "signature">("text");

  const handleIntakeInput = (inputText: string, aiResponseText: string, compiledData: IntakeData | null, nextStep: number) => {
    if (intakeLoading) return;
    setIntakeChat(prev => [...prev, { sender: "patient", text: inputText }]);
    setIntakeLoading(true);
    setIntakeStep(nextStep);

    setTimeout(() => {
      setIntakeChat(prev => [...prev, { sender: "ai", text: aiResponseText }]);
      if (compiledData) {
        setIntakeData(compiledData);
      }
      setIntakeLoading(false);
    }, 850);
  };

  const handleSendReminder = (patId: string) => {
    setSentReminderId(patId);
    setTimeout(() => {
      setSentReminderId(null);
    }, 3000);
  };

  const handleAddField = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFieldLabel.trim()) return;
    const newField: BuilderField = {
      id: `f-${Date.now()}`,
      label: newFieldLabel,
      type: newFieldType
    };
    setFormFields(prev => [...prev, newField]);
    setNewFieldLabel("");
  };

  const handleRemoveField = (id: string) => {
    setFormFields(prev => prev.filter(f => f.id !== id));
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
          <span className="text-white">IntakeFlow AI</span>
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
                <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest">IntakeFlow AI Onboarding</span>
                <Sparkles className="w-3 h-3 text-brand-cyan" />
              </div>

              {/* Headline */}
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl xl:text-5xl text-white leading-[1.15] tracking-tight">
                Automate Patient Onboarding.<br />
                <span className="text-gradient-cyan-indigo">Conversational AI Intake.</span><br />
                <span className="text-gradient-emerald-cyan">Check-in Ready.</span>
              </h1>

              {/* Subtitle */}
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                An AI-powered onboarding operating system that collects patient medical history, scans insurance cards, gets consent e-signatures, and creates doctor briefing summaries before the first visit.
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
                  href="https://intake-flow-sooty.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 glass-panel border border-brand-border text-white font-semibold px-5 py-3.5 rounded-xl hover:border-brand-cyan/40 hover:scale-[1.02] active:scale-[0.98] transition-all text-xs whitespace-nowrap"
                >
                  <Globe className="w-3.5 h-3.5 text-brand-cyan" />
                  <span>Launch Live App</span>
                </a>
                <a
                  href="https://github.com/alimubashir822/IntakeFlow"
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
                  { icon: <Shield className="w-3.5 h-3.5 text-brand-emerald" />, label: "HIPAA PHI Encrypted", bg: "bg-brand-emerald/10 border-brand-emerald/20" },
                  { icon: <Lock className="w-3.5 h-3.5 text-brand-cyan" />, label: "UETA eSign Hash", bg: "bg-brand-cyan/10 border-brand-cyan/20" },
                  { icon: <CheckCircle className="w-3.5 h-3.5 text-brand-indigo" />, label: "Insurance Card OCR", bg: "bg-brand-indigo/10 border-brand-indigo/20" },
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
                      <FileText className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="font-display font-bold text-white text-xs tracking-wide">IntakeFlow AI Sandbox</span>
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
                    <p className="text-[9px] text-gray-500 uppercase font-bold tracking-wider mb-2 px-2">Navigation</p>
                    {[
                      { id: "AIIntake", label: "AI Conversational", icon: <Brain className="w-3.5 h-3.5" /> },
                      { id: "ClinicQueue", label: "Reception Queue", icon: <Users className="w-3.5 h-3.5" /> },
                      { id: "DoctorBrief", label: "Doctor AI Summary", icon: <Stethoscope className="w-3.5 h-3.5" /> },
                      { id: "FormBuilder", label: "Form Builder", icon: <LayoutDashboard className="w-3.5 h-3.5" /> },
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
                      <p className="text-[9px] text-gray-500 uppercase font-bold tracking-wider mb-2 px-2">Compliance</p>
                      <div className="flex items-center space-x-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-gray-400">
                        <Lock className="w-3.5 h-3.5" />
                        <span>HIPAA Vault</span>
                      </div>
                      <div className="flex items-center space-x-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-gray-400">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>eSign Hashing</span>
                      </div>
                    </div>
                  </div>

                  {/* Main Display Area */}
                  <div className="md:col-span-8 p-5 overflow-y-auto flex flex-col justify-between h-full bg-brand-bg/20">
                    
                    {/* Tab 1: AI Conversational Intake */}
                    {activeTab === "AIIntake" && (
                      <div className="flex flex-col h-full justify-between flex-grow">
                        <div className="flex justify-between items-center border-b border-brand-border/60 pb-2 mb-2">
                          <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-wider flex items-center">
                            <Brain className="w-3.5 h-3.5 text-brand-cyan mr-1.5" />
                            <span>AI Conversational Intake</span>
                          </span>
                        </div>

                        {/* Chat Messages */}
                        <div className="space-y-3 flex-grow overflow-y-auto max-h-[190px] pr-1 mb-2 font-sans">
                          {intakeChat.map((msg, i) => (
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

                          {intakeLoading && (
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
                          {intakeStep === 1 && (
                            <>
                              <p className="text-[8px] text-gray-500 font-bold uppercase tracking-wider">Select Symptom Concern to Simulate:</p>
                              <div className="flex flex-wrap gap-1.5">
                                <button
                                  onClick={() => handleIntakeInput(
                                    "I have severe tooth pain.",
                                    "Understood. Tooth pain detected. When did the pain start?",
                                    null,
                                    2
                                  )}
                                  className="text-[9px] border border-brand-cyan/20 bg-brand-cyan/5 hover:bg-brand-cyan/10 text-brand-cyan rounded-lg px-2.5 py-1"
                                >
                                  Severe Tooth Pain
                                </button>
                                <button
                                  onClick={() => handleIntakeInput(
                                    "I need a general skin consultation.",
                                    "Got it. Skin checkup routing. Do you have any known medical allergies?",
                                    null,
                                    3
                                  )}
                                  className="text-[9px] border border-brand-cyan/20 bg-brand-cyan/5 hover:bg-brand-cyan/10 text-brand-cyan rounded-lg px-2.5 py-1"
                                >
                                  General Skin Consult
                                </button>
                              </div>
                            </>
                          )}

                          {intakeStep === 2 && (
                            <>
                              <p className="text-[8px] text-gray-500 font-bold uppercase tracking-wider">Select Duration Response:</p>
                              <div className="flex flex-wrap gap-1.5">
                                <button
                                  onClick={() => handleIntakeInput(
                                    "It started 3 days ago.",
                                    "Thanks. Pain duration noted (3 days). Are you currently taking any regular medications?",
                                    null,
                                    3
                                  )}
                                  className="text-[9px] border border-brand-cyan/20 bg-brand-cyan/5 hover:bg-brand-cyan/10 text-brand-cyan rounded-lg px-2.5 py-1"
                                >
                                  3 Days Ago
                                </button>
                                <button
                                  onClick={() => handleIntakeInput(
                                    "It has been hurting for over a week.",
                                    "Understood. Extended pain duration noted (1+ week). Do you have any known medical allergies?",
                                    null,
                                    3
                                  )}
                                  className="text-[9px] border border-brand-cyan/20 bg-brand-cyan/5 hover:bg-brand-cyan/10 text-brand-cyan rounded-lg px-2.5 py-1"
                                >
                                  Over 1 Week
                                </button>
                              </div>
                            </>
                          )}

                          {intakeStep === 3 && (
                            <>
                              <p className="text-[8px] text-gray-500 font-bold uppercase tracking-wider">Select Allergy Response:</p>
                              <div className="flex flex-wrap gap-1.5">
                                <button
                                  onClick={() => handleIntakeInput(
                                    "Yes, I am allergic to Penicillin.",
                                    "Critical Alert: Penicillin allergy noted. I will now compile your AI Patient Intake Summary for the doctor.",
                                    { concern: "Tooth pain", duration: "3 days", allergies: "Penicillin Allergy", medications: "None reported", readiness: 100 },
                                    4
                                  )}
                                  className="text-[9px] border border-red-500/20 bg-red-500/5 hover:bg-red-500/10 text-red-400 rounded-lg px-2.5 py-1"
                                >
                                  Penicillin Allergy
                                </button>
                                <button
                                  onClick={() => handleIntakeInput(
                                    "No, I have no medical allergies.",
                                    "Perfect. No allergies reported. I will now compile your AI Patient Intake Summary for the doctor.",
                                    { concern: "Skin checkup", duration: "Routine", allergies: "None reported", medications: "None reported", readiness: 100 },
                                    4
                                  )}
                                  className="text-[9px] border border-brand-cyan/20 bg-brand-cyan/5 hover:bg-brand-cyan/10 text-brand-cyan rounded-lg px-2.5 py-1"
                                >
                                  No Known Allergies
                                </button>
                              </div>
                            </>
                          )}

                          {intakeStep === 4 && intakeData && (
                            <div className="space-y-2 text-[10px]">
                              <p className="font-bold text-white flex items-center">
                                <CheckCircle className="w-3.5 h-3.5 text-brand-emerald mr-1.5" />
                                <span>Intake Completed (Readiness 100%)</span>
                              </p>
                              <div className="bg-slate-900/60 border border-brand-border rounded-xl p-2.5 space-y-1 text-gray-400 font-mono">
                                <p><strong className="text-gray-300">Primary Concern:</strong> {intakeData.concern}</p>
                                <p><strong className="text-gray-300">Allergy Alert:</strong> <span className="text-red-400">{intakeData.allergies}</span></p>
                                <p><strong className="text-gray-300">Status:</strong> Ready for Doctor Review</p>
                              </div>
                              <button
                                onClick={() => {
                                  setIntakeStep(1);
                                  setIntakeData(null);
                                  setIntakeChat([
                                    { sender: "ai", text: "Hi! I am your IntakeFlow AI Onboarding Assistant. How can we help prepare your clinic visit today?" }
                                  ]);
                                }}
                                className="text-[8px] text-gray-500 hover:text-white uppercase font-bold tracking-wider pt-1 self-start"
                              >
                                Reset Intake Flow
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Tab 2: Clinic Staff Dashboard Queue */}
                    {activeTab === "ClinicQueue" && (
                      <div className="flex flex-col h-full justify-between flex-grow">
                        <div className="flex justify-between items-center border-b border-brand-border/60 pb-2 mb-2">
                          <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-wider">Receptionist Intake Queue</span>
                          <span className="text-[8px] text-gray-400">Today&apos;s Appointments</span>
                        </div>

                        {/* Patient Queue List */}
                        <div className="space-y-2.5 flex-grow overflow-y-auto max-h-[300px] pr-1">
                          {patientQueue.map((pat) => (
                            <div key={pat.id} className="bg-slate-900/40 border border-brand-border rounded-xl p-3 flex justify-between items-center text-[10px]">
                              <div className="space-y-1">
                                <p className="font-bold text-white flex items-center">
                                  <span>{pat.name}</span>
                                  <span className="text-[8px] text-gray-400 ml-2">({pat.time})</span>
                                </p>
                                <p className="text-[9px] text-gray-400">{pat.reason} &bull; Progress: <span className="text-brand-cyan font-semibold">{pat.readiness}%</span></p>
                                {pat.missingItems.length > 0 && (
                                  <p className="text-[8px] text-red-400">Missing: {pat.missingItems.join(", ")}</p>
                                )}
                              </div>
                              
                              <div className="flex flex-col items-end space-y-1.5">
                                <span className={`px-2 py-0.5 rounded text-[8px] font-bold border ${
                                  pat.status === "Ready"
                                    ? "bg-brand-emerald/10 border-brand-emerald/20 text-brand-emerald"
                                    : pat.status === "Action Required"
                                    ? "bg-red-500/10 border-red-500/20 text-red-400"
                                    : "bg-amber-500/10 border-amber-500/20 text-amber-400"
                                }`}>
                                  {pat.status}
                                </span>
                                {pat.status !== "Ready" && (
                                  <button
                                    onClick={() => handleSendReminder(pat.id)}
                                    className="bg-brand-cyan/20 hover:bg-brand-cyan/35 text-white border border-brand-cyan/40 px-2 py-1 rounded text-[8px] font-bold"
                                  >
                                    {sentReminderId === pat.id ? "SMS Sent ✓" : "Send SMS Link"}
                                  </button>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Tab 3: Doctor AI Briefing Summaries */}
                    {activeTab === "DoctorBrief" && (
                      <div className="flex flex-col h-full justify-between flex-grow">
                        <div className="flex justify-between items-center border-b border-brand-border/60 pb-2 mb-2">
                          <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-wider flex items-center">
                            <Stethoscope className="w-3.5 h-3.5 text-brand-cyan mr-1.5" />
                            <span>Doctor Pre-Visit Summaries</span>
                          </span>

                          {/* Patient Queue Selector */}
                          <select
                            value={selectedQueuePatientId}
                            onChange={(e) => setSelectedQueuePatientId(e.target.value)}
                            className="bg-slate-900 border border-brand-border text-[9px] text-gray-300 rounded px-1.5 py-0.5 focus:outline-none"
                          >
                            <option value="john-doe">John Doe (Cleaning)</option>
                            <option value="sarah-jones">Sarah Jones (Implant)</option>
                            <option value="mike-ross">Mike Ross (Wisdom Teeth)</option>
                          </select>
                        </div>

                        {/* Intake summary profile details */}
                        {doctorSummaries[selectedQueuePatientId] && (
                          <div className="space-y-3.5 text-[10px]">
                            <div className="flex justify-between items-center bg-slate-950/40 border border-brand-border p-2.5 rounded-xl">
                              <div>
                                <p className="text-[8px] text-gray-500 font-bold uppercase">Insurance Verification</p>
                                <p className="font-extrabold text-white text-xs">{doctorSummaries[selectedQueuePatientId].insurance}</p>
                              </div>
                              <div>
                                <p className="text-[8px] text-gray-500 font-bold uppercase">Medical Alert</p>
                                <span className={`inline-block px-2 py-0.5 rounded text-[8px] font-bold ${
                                  doctorSummaries[selectedQueuePatientId].alerts[0] === "None reported"
                                    ? "bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/20"
                                    : "bg-red-500/10 text-red-400 border border-red-500/20"
                                }`}>
                                  {doctorSummaries[selectedQueuePatientId].alerts.join(", ")}
                                </span>
                              </div>
                            </div>

                            <div className="space-y-2">
                              <p className="font-bold text-white flex items-center">
                                <Sparkles className="w-3.5 h-3.5 text-brand-cyan mr-1.5" />
                                <span>AI Pre-Appointment Brief</span>
                              </p>
                              <div className="bg-slate-900/60 border border-brand-border rounded-xl p-3 text-gray-300 leading-relaxed font-sans">
                                {doctorSummaries[selectedQueuePatientId].details}
                              </div>
                            </div>

                            <div className="bg-brand-cyan/5 border border-brand-cyan/20 p-2.5 rounded-xl space-y-1">
                              <p className="text-[8px] text-brand-cyan uppercase font-bold tracking-wider">Suggested Doctor Questions:</p>
                              <ul className="space-y-0.5 text-gray-300 font-sans">
                                {doctorSummaries[selectedQueuePatientId].questions.map((q, idx) => (
                                  <li key={idx}>&bull; {q}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Tab 4: Smart Drag-and-Drop Form Builder */}
                    {activeTab === "FormBuilder" && (
                      <div className="flex flex-col h-full justify-between flex-grow text-[10px]">
                        <div className="flex justify-between items-center border-b border-brand-border/60 pb-2 mb-2">
                          <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-wider">SaaS Intake Form Builder</span>
                        </div>

                        {/* Interactive Form Field Adder */}
                        <form onSubmit={handleAddField} className="grid grid-cols-12 gap-2 bg-slate-900/40 border border-brand-border p-2.5 rounded-xl items-end mb-2.5">
                          <div className="col-span-6">
                            <label className="text-[8px] text-gray-500 uppercase font-bold tracking-wider mb-1 block">Field Label</label>
                            <input
                              type="text"
                              value={newFieldLabel}
                              onChange={(e) => setNewFieldLabel(e.target.value)}
                              placeholder="e.g. Tooth Sensitivity"
                              className="w-full bg-slate-950 border border-brand-border text-gray-300 rounded-lg px-2.5 py-1 focus:outline-none focus:border-brand-cyan text-[10px]"
                            />
                          </div>
                          
                          <div className="col-span-4">
                            <label className="text-[8px] text-gray-500 uppercase font-bold tracking-wider mb-1 block">Input Type</label>
                            <select
                              value={newFieldType}
                              onChange={(e) => setNewFieldType(e.target.value as BuilderField["type"])}
                              className="w-full bg-slate-950 border border-brand-border text-gray-300 rounded-lg px-1.5 py-1 focus:outline-none text-[10px]"
                            >
                              <option value="text">Text Field</option>
                              <option value="checkbox">Checkbox</option>
                              <option value="file">File Upload</option>
                              <option value="signature">Signature Pad</option>
                            </select>
                          </div>

                          <div className="col-span-2">
                            <button
                              type="submit"
                              className="w-full bg-brand-cyan hover:bg-brand-cyan/90 text-brand-bg font-bold py-1.5 rounded-lg text-[9px] transition-colors"
                            >
                              Add
                            </button>
                          </div>
                        </form>

                        {/* Active Form Fields Grid */}
                        <div className="space-y-1.5 flex-grow overflow-y-auto max-h-[170px] pr-1">
                          <p className="text-[8px] text-gray-500 font-bold uppercase tracking-wider mb-1">Active Form Elements Preview:</p>
                          {formFields.map((field) => (
                            <div key={field.id} className="bg-slate-900/60 border border-brand-border rounded-xl p-2.5 flex justify-between items-center text-[10px]">
                              <div>
                                <span className="text-[8px] font-mono px-1.5 py-0.5 rounded bg-brand-cyan/10 text-brand-cyan uppercase tracking-wider mr-2">
                                  {field.type}
                                </span>
                                <span className="font-semibold text-white">{field.label}</span>
                              </div>
                              <button
                                onClick={() => handleRemoveField(field.id)}
                                className="text-gray-500 hover:text-red-400 p-1"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          ))}
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
              12 Patient Intake Automation Features
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Automate onboarding logistics using medical screening models, digital signature logs, and queue tracking metrics.
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
              Why IntakeFlow AI represents a patient onboarding system, not just generic digital web forms.
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
              Dynamic RBAC interfaces separating patient form queues from doctor briefings and receptionist reminder dashboards.
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
              Relational tables built for patient onboarding. Scopes custom forms, drag-and-drop fields, e-signature hashes, and audit logs.
            </p>
          </div>

          {/* Schematic table representation */}
          <div className="glass-panel border border-brand-border rounded-2xl overflow-hidden p-6 md:p-8 bg-slate-950/40">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              
              {/* Left sidebar: schema models index */}
              <div className="md:col-span-4 space-y-2">
                <p className="text-[9px] text-gray-500 uppercase font-bold tracking-wider mb-2 px-1">Prisma Schemas</p>
                {[
                  { name: "Patient & Clinic", desc: "User demographics, patient profile details, organization directories." },
                  { name: "Forms & Drag-Drop Fields", desc: "Custom intake forms configurations, drag-and-drop field types (Text, File, Signature)." },
                  { name: "Form Responses & Signatures", desc: "Patient response logs, verified e-signature hashes, timestamp logs." },
                  { name: "Insurance & Audit Trails", desc: "Extracted OCR insurance card details, permanent access audit log records." },
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
                <p className="text-brand-cyan mb-2">{"// Prisma database schemas (IntakeFlow AI)"}</p>
                <div className="space-y-4">
                  <div>
                    <span className="text-brand-indigo">model</span> <span className="text-white font-bold">Form</span> &#123;
                    <div className="pl-4 text-gray-400">
                      id          String         @id @default(uuid())<br />
                      clinicId    String<br />
                      title       String         @default(&quot;New Patient Intake&quot;)<br />
                      fields      FormField[]<br />
                      responses   Response[]
                    </div>
                    &#125;
                  </div>
                  <div>
                    <span className="text-brand-indigo">model</span> <span className="text-white font-bold">FormField</span> &#123;
                    <div className="pl-4 text-gray-400">
                      id        String            @id @default(uuid())<br />
                      formId    String<br />
                      label     String<br />
                      fieldType String            @default(&quot;text&quot;)<br />
                      form      Form              @relation(fields: [formId], references: [id])
                    </div>
                    &#125;
                  </div>
                  <div>
                    <span className="text-brand-indigo">model</span> <span className="text-white font-bold">Signature</span> &#123;
                    <div className="pl-4 text-gray-400">
                      id          String            @id @default(uuid())<br />
                      patientId   String<br />
                      esignHash   String<br />
                      timestamp   DateTime          @default(now())<br />
                      ipAddress   String
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
