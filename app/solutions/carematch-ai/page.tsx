"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Sparkles, Brain, FileText, Shield, Users, Activity,
  CheckCircle, Star, TrendingUp, Lock, Bell, ChevronDown,
  LayoutDashboard, Stethoscope, Globe, Database, HardDrive, Clock, Wallet,
  BarChart3, Building2, Smile, Heart, ShieldCheck, Eye, UserCog,
  Video, Search, DollarSign, Check
} from "lucide-react";

/* --- Types --- */
interface Feature { icon: React.ReactNode; title: string; desc: string; badge?: string; }
interface Differentiator { icon: React.ReactNode; title: string; subtitle: string; desc: string; color: string; glow: string; }
interface FAQ { q: string; a: string; }

interface MatchResult {
  name: string;
  specialty: string;
  score: number;
  availability: string;
  rating: string;
  fee: string;
  insurance: string;
}

interface DoctorProfile {
  name: string;
  specialty: string;
  experience: string;
  languages: string;
  rating: string;
  responseTime: string;
  fee: string;
  insurance: string;
  bio: string;
}

/* =======================================================
   DATA
 ======================================================= */

const coreFeatures: Feature[] = [
  { icon: <Brain className="w-5 h-5" />, title: "CareMatch AI Doctor Booking | Med Clinic X", desc: "An intelligent chatbot assistant that understands patient symptoms and coordinates compatibility matching.", badge: "Flagship" },
  { icon: <Activity className="w-5 h-5" />, title: "Doctor Compatibility Score", desc: "Calculates compatibility matches based on insurance, location, language preferences, and clinical needs.", badge: "Smart" },
  { icon: <FileText className="w-5 h-5" />, title: "AI Patient Intake System", desc: "Conducts pre-booking intake dialogues to compile comprehensive clinical briefs for providers.", badge: "Unique" },
  { icon: <Clock className="w-5 h-5" />, title: "Smart Waitlist System", desc: "Automatically alerts waitlisted patients via SMS when calendar slots open up due to cancellation.", badge: "Premium" },
  { icon: <Video className="w-5 h-5" />, title: "Built-In Telemedicine", desc: "Allows instant encrypted WebRTC video consults, messaging, and clinical document transfers in-browser.", badge: "Unique" },
  { icon: <Search className="w-5 h-5" />, title: "Discovery Engine", desc: "A robust public search directory with granular filtering: specialty, language, fee, and insurance.", badge: "New" },
  { icon: <Star className="w-5 h-5" />, title: "Verified Reviews & Feedback", desc: "Limits reviews to patients with completed bookings to guarantee absolute trust and authenticity." },
  { icon: <DollarSign className="w-5 h-5" />, title: "Stripe Escrow Payments", desc: "Secures consultation fees and processes refunds or invoicing splits automatically." },
  { icon: <Wallet className="w-5 h-5" />, title: "Healthcare Passport", desc: "A secure patient records vault holding previous medical histories, documents, and consult summaries." },
  { icon: <BarChart3 className="w-5 h-5" />, title: "Doctor Growth Analytics", desc: "Provides practitioners with conversion indexes, profile views counts, and revenue tracking gauges." },
  { icon: <Building2 className="w-5 h-5" />, title: "Clinic Roster Manager", desc: "Enables clinical franchise organizations to manage schedules, directories, and payouts for multiple doctors.", badge: "Enterprise" },
  { icon: <Lock className="w-5 h-5" />, title: "Role-Based Platforms", desc: "Provides specialized dashboards and accessibility permissions for patients, doctors, and administrators." }
];

const differentiators: Differentiator[] = [
  { icon: <Brain className="w-7 h-7" />, title: "AI Healthcare Matchmaker", subtitle: "Say goodbye to random searches", desc: "Instead of scanning hundreds of listings, patients converse with an AI concierge that identifies their needs and maps them directly to the most compatible doctors.", color: "from-brand-cyan/20 to-brand-indigo/10", glow: "rgba(6,182,212,0.15)" },
  { icon: <Activity className="w-7 h-7" />, title: "Doctor Compatibility Index", subtitle: "Smarter matches, better compliance", desc: "Our compatibility engine scores providers on factors such as specialty credentials, calendar slots, insurance compatibility, and communication styles.", color: "from-brand-indigo/20 to-purple-500/10", glow: "rgba(99,102,241,0.15)" },
  { icon: <FileText className="w-7 h-7" />, title: "AI Pre-Appointment Briefs", subtitle: "Prepare doctors before the call", desc: "The AI conducts symptom intakes prior to scheduling. Providers receive a summary of chief concerns and prepared questions, saving 5-10 minutes per consult.", color: "from-brand-emerald/20 to-brand-cyan/10", glow: "rgba(16,185,129,0.15)" },
  { icon: <Clock className="w-7 h-7" />, title: "Smart Waitlist Automation", subtitle: "Zero gap slots on calendars", desc: "When an appointment is rescheduled, the system automatically detects open time slots and messages nearby matching patients via SMS to fill the slot instantly.", color: "from-amber-500/20 to-orange-500/10", glow: "rgba(245,158,11,0.15)" },
  { icon: <Wallet className="w-7 h-7" />, title: "Lifelong Health Passport", subtitle: "Your secure clinical records hub", desc: "A patient-owned medical vault holding previous consultation briefs, prescriptions, and reports that transfer easily to any matched clinician.", color: "from-rose-500/20 to-pink-500/10", glow: "rgba(244,63,94,0.15)" },
  { icon: <TrendingUp className="w-7 h-7" />, title: "Doctor Practice Growth OS", subtitle: "Help physicians acquire patients", desc: "Built with SEO landing layouts, profile optimization tips, patient conversion funnels, and marketing subscriptions to scale independent practices.", color: "from-violet-500/20 to-brand-indigo/10", glow: "rgba(139,92,246,0.15)" }
];

const portalModules = [
  { icon: <Users className="w-5 h-5" />, title: "Patient Platform", items: ["AI Matchmaker Assistant", "Healthcare Passport vault", "HD video consultation room", "Waitlist booking tracker"] },
  { icon: <Stethoscope className="w-5 h-5" />, title: "Doctor Portal", items: ["AI pre-visit intake briefs", "Earnings and payouts dashboard", "Availability schedule manager", "AI profile description optimizer"] },
  { icon: <Building2 className="w-5 h-5" />, title: "Clinic Center", items: ["Multi-physician roster control", "Locations split billing config", "Staff permissions settings", "Network reviews aggregator"] },
  { icon: <LayoutDashboard className="w-5 h-5" />, title: "Admin Marketplace", items: ["Platform volume analytics", "Stripe payment payout logs", "EHR integrations triggers", "Physician credentials audit"] }
];

const techStack = [
  { category: "Frontend Core", items: ["Next.js 15 App Router", "TypeScript", "Tailwind CSS", "shadcn/ui", "Framer Motion"], icon: <Globe className="w-5 h-5" /> },
  { category: "Backend Engine", items: ["Server Actions", "Next.js Route Handlers", "Zod Validation Schema", "React Hook Form"], icon: <HardDrive className="w-5 h-5" /> },
  { category: "Database Layer", items: ["PostgreSQL database", "Prisma ORM", "Logical database isolation", "Signed URLs cloud storage"], icon: <Database className="w-5 h-5" /> },
  { category: "AI & Media Services", items: ["OpenAI GPT-4o API", "Daily.co WebRTC Video", "Stripe Connect Split Payouts", "Twilio SMS Gateway"], icon: <Lock className="w-5 h-5" /> }
];

const useCases = [
  {
    icon: <Heart className="w-6 h-6" />,
    specialty: "Cardiology Networks",
    color: "rose-400",
    scenario: "Matching chronic heart patients with nearby specialists",
    journey: [
      "Patient inputs severe chronic chest fatigue into the marketplace locator",
      "AI identifies cardiology, matches local providers accepting UnitedHealth",
      "Matches patient with Dr. Sarah Stone (96% compatibility) who has a slot today",
      "Patient pays co-pay via Stripe Connect; clinical brief shared with doctor's queue",
      "Consultation proceeds in-browser using WebRTC video room",
      "After visit, follow-up reminders prompt patient to check blood metrics"
    ],
    outcome: "Cardiology networks see a 40% reduction in patient onboarding and scheduling delays."
  },
  {
    icon: <Smile className="w-6 h-6" />,
    specialty: "Dental Practices",
    color: "brand-cyan",
    scenario: "Filling vacant calendar slots via automated waitlist loops",
    journey: [
      "Dental patient reschedules an implant consultation due tomorrow at 3 PM",
      "Waitlist module instantly scans database for local implant leads",
      "Dispatches alert texts to 5 matching prospects on the waitlist",
      "First matching patient accepts the slot via SMS in under 4 minutes",
      "Calendar is automatically updated; intake paperwork sent to patient",
      "Dental clinic keeps schedule 100% full, avoiding revenue loss"
    ],
    outcome: "Dental offices recover an average of $3,200 per month in otherwise lost cancellation slots."
  },
  {
    icon: <Users className="w-6 h-6" />,
    specialty: "Independent Therapists",
    color: "brand-indigo",
    scenario: "Acquiring and retaining mental health patients via subscription packages",
    journey: [
      "Therapist lists services (e.g. Cognitive Therapy) on the marketplace",
      "Optimizes profile bio and FAQs using the integrated AI optimizer",
      "Patient discovers therapist via language (Spanish) and specialty filters",
      "Patient signs up for weekly consultation subscription billed via Stripe",
      "Secure chat allows patient to ask follow-up questions between calls",
      "Practice Growth dashboard tracks MRR and patient retention trends"
    ],
    outcome: "Therapists double client acquisition volume while decreasing scheduling administration time by 70%."
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    specialty: "Aesthetic Clinics",
    color: "brand-emerald",
    scenario: "Managing multi-physician listings and verified reviews",
    journey: [
      "Clinic onboards 6 cosmetic doctors onto their customized group listing",
      "Leads from Google search are directed to the custom department pages",
      "Intake system qualifies patient concerns (e.g. skin peeling)",
      "Booked patients receive verified review requests post-consultation",
      "Admin reviews reviews and responds to feedback from the dashboard",
      "Clinic analytics maps profile views, conversions, and ratings by doctor"
    ],
    outcome: "Aesthetics groups improve organic local SEO rankings, increasing booking counts by 35%."
  }
];

const securityFeatures = [
  { icon: <Lock className="w-5 h-5" />, title: "HIPAA Compliant", desc: "Follows strict HIPAA guidelines. Patient profiles, transcripts, and documents are encrypted at rest (AES-256) and in transit (TLS 1.3)." },
  { icon: <ShieldCheck className="w-5 h-5" />, title: "Access Audit Logging", desc: "Every profile read, scheduling edit, and record export action is permanently logged with IP coordinates." },
  { icon: <Eye className="w-5 h-5" />, title: "Logical Data Isolation", desc: "Multi-tenant logic ensures logical partition of clinic variables, preventing cross-organization leakage." },
  { icon: <UserCog className="w-5 h-5" />, title: "Secure Media Vault", desc: "Consultation summaries, billing details, and reports are held in AWS S3 buckets with URLs signed for short lifespans." }
];

const integrations = [
  { name: "OpenAI GPT-4o", category: "AI Services", desc: "Powers the intake chatbot, clinical summaries, and doctor pre-brief details." },
  { name: "WebRTC / Daily.co", category: "Video Engine", desc: "Provides high-definition, encrypted, in-app video and audio consulting rooms." },
  { name: "Stripe Connect", category: "Billing Engine", desc: "Handles co-pay collections, subscription plans, and physician split payouts." },
  { name: "Prisma & PostgreSQL", category: "Database Layer", desc: "Ensures type-safe SQL queries, robust migrations, and transaction processing." },
  { name: "Twilio API", category: "SMS Messaging", desc: "Automates waitlist SMS text notifications and calendar reservation alerts." },
  { name: "SendGrid", category: "Email Dispatch", desc: "Manages appointment calendar links, invoice copies, and feedback loops." },
  { name: "FHIR standard API", category: "EHR Sync", desc: "Compatible with Electronic Health Record systems, allowing direct patient transfers." },
  { name: "Auth.js / Clerk", category: "Authentication", desc: "Manages session control, multi-factor verification, and secure password hashes." },
  { name: "AWS Cloud S3", category: "File Vault", desc: "Holds medical documents, prescriptions, lab panels, and patient profile details securely." },
];

const stats = [
  { value: "48%", label: "Waitlist Slot Recovery Rate", icon: <Clock className="w-5 h-5" /> },
  { value: "96.4%", label: "Match Match Precision Score", icon: <Brain className="w-5 h-5" /> },
  { value: "100%", label: "HIPAA Compliant", icon: <Shield className="w-5 h-5" /> },
  { value: "35%+", label: "Average Doctor Booking Conversion", icon: <TrendingUp className="w-5 h-5" /> },
  { value: "1.8 hrs", label: "Admin Labor Saved Per Doctor Daily", icon: <Activity className="w-5 h-5" /> },
  { value: "5.0/5", label: "Patient Rating Score", icon: <Star className="w-5 h-5" /> }
];

const faqs: FAQ[] = [
  { q: "Does CareMatch AI diagnose patient symptoms?", a: "No. The AI Matchmaker is strictly a care navigation, routing, and patient intake assistant. It provides educational health information, suggests relevant clinical specialties (e.g., Cardiology, Dermatology), and recommends compatible doctors. It does not provide diagnoses or replace physicians." },
  { q: "What is the Doctor Compatibility Score?", a: "It is a recommendation metric. Unlike simple directories that just filter listings, CareMatch AI scores doctors based on their alignment with patient symptoms, insurance networks, calendar availability, language preferences, location proximity, and clinical focus." },
  { q: "How does the Smart Waitlist System function?", a: "When an appointment is cancelled, the system identifies the open slot. It automatically checks the waitlist for patients requesting that specialty and alerts up to 5 prospects via SMS text. The first to confirm via the link takes the slot automatically, and the schedule updates." },
  { q: "Is patient records vault security HIPAA-aligned?", a: "Yes. All Protected Health Information (PHI) in the Healthcare Passport is encrypted at rest using AES-256 and in transit using TLS 1.3. Access audit logs track every single record read or write event." },
  { q: "How are consultation payments processed?", a: "Payments are handled using Stripe Connect. When a patient books an appointment, the fee is pre-authorized. Once the consultation finishes, the payment is captured, processing payouts dynamically between the marketplace and the clinician's bank account." },
  { q: "Can multi-specialty clinics use this platform?", a: "Yes. The Clinic Dashboard allows organizations to manage directories, schedules, custom pricing tiers, and revenue payouts split for multiple physicians and office locations." },
  { q: "What is in the AI Patient Intake Brief?", a: "It is a 1-page clinical summary compiling patient-reported chief concerns, duration of symptoms, medical history parameters, active medications, and a list of prepared questions to discuss with the doctor during the visit." },
  { q: "How does the in-browser telemedicine video consulting work?", a: "We utilize WebRTC technology integrated via Daily.co or Twilio Video. Patient video calls launch in-browser inside the dashboard workspace, requiring no external downloads. Connections are secure and encrypted." },
  { q: "How do verified reviews work?", a: "To prevent fake reviews, only patients with completed bookings and captured payments on the platform can rate doctors. Review responses are audited, and constructive complaints can be flagged privately to clinic managers." },
  { q: "What is the Doctor Growth Dashboard?", a: "It is an analytics panel for providers displaying monthly recurring revenues, profile views counts, booking requests, scheduling conversion rates, and patient retention statistics." },
  { q: "How does the AI Profile Optimization work?", a: "The AI Growth dashboard has a built-in content optimizer. It scans the doctor's biography, listings, services, and FAQs, proposing suggestions and template rewrites to improve their conversion rates and search discoverability." },
  { q: "What email and SMS services are integrated?", a: "We integrate Twilio for text messaging reminders and waitlist alerts, and Resend for modern, beautifully structured transactional emails and appointment receipts." },
  { q: "Does the system sync with external calendars?", a: "Yes, the calendar engine integrates with Google Calendar and Outlook, syncing availability blocks and reservation slots in real-time." },
  { q: "Is the patient healthcare passport downloadable?", a: "Yes, patients can download their medical timeline, consultation summaries, and prescriptions as signed PDFs at any time." },
  { q: "What databases and ORMs are used?", a: "We build with PostgreSQL as the relational database layer and Prisma ORM for safe type-checking. Schemas include Assessments, Symptoms, AIResponses, Users, Patients, Doctors, and Clinics." },
  { q: "How is file upload security managed?", a: "Patient reports are stored in secure AWS S3 buckets. Public read access is blocked. Files can only be retrieved using secure pre-signed URLs that expire automatically after 10 minutes." },
  { q: "What subscription packages are available for doctors?", a: "Doctors can join under three tiers: Free (basic listing), Professional (featured ranking, optimization tips, and analytics), and Enterprise (clinic roster and multi-location management)." },
  { q: "What roles and permissions are available?", a: "We configure five user roles: Owner (full revenue control), Doctor (clinical logs and schedule), Manager (leads pipeline and staff assignments), Receptionist (booking and task items), and Marketer (campaign design and analytics)." },
  { q: "Does the platform support multiple languages?", a: "Yes. Triage assessments, summaries, and notifications are fully localized in English and Spanish, which is vital for clinics serving diverse patient groups." },
  { q: "How long does implementation take for clinic groups?", a: "A white-label MVP (Phase 1) is deployed in 4-6 weeks. A complete enterprise rollout with full EHR database integrations, voice AI, and multi-department analytics takes 3-4 months." }
];

/* =======================================================
   COMPONENT
 ======================================================= */
export default function CareMatchAIPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeUseCase, setActiveUseCase] = useState(0);

  // Interactive Simulator States
  const [activeTab, setActiveTab] = useState("Matchmaker");
  
  // AI Matchmaker States
  const [matchChat, setMatchChat] = useState([
    { sender: "ai", text: "Hello! I am the CareMatch AI Concierge. What type of care do you need today? (Select a symptom below or describe your concern)" }
  ]);
  const [matchLoading, setMatchLoading] = useState(false);
  const [matchStep, setMatchStep] = useState(1);
  const [suggestedDoctors, setSuggestedDoctors] = useState<MatchResult[]>([]);

  // Directory States
  const [specialtyFilter, setSpecialtyFilter] = useState("All");
  const [selectedDocProfile, setSelectedDocProfile] = useState<DoctorProfile | null>(null);
  const [bookingStep, setBookingStep] = useState<"idle" | "service" | "slots" | "receipt">("idle");
  const [selectedService, setSelectedService] = useState("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");

  // Doctor Growth States
  const [optimizationOn, setOptimizationOn] = useState(false);

  // Waitlist States
  const [waitlistAlertSent, setWaitlistAlertSent] = useState(false);

  // Simulated Database
  const doctorsDatabase: DoctorProfile[] = [
    {
      name: "Dr. Sarah Ahmed",
      specialty: "Dermatology",
      experience: "15 Years",
      languages: "English, Spanish",
      rating: "4.9",
      responseTime: "Under 2 Hours",
      fee: "$120",
      insurance: "Cigna, UnitedHealth, Blue Cross",
      bio: "Dr. Sarah Ahmed specializes in advanced medical and cosmetic dermatology. She has extensive experience treating chronic skin irritations, acne, eczema, and skin cancer screenings.",
    },
    {
      name: "Dr. John Patel",
      specialty: "Orthopedics",
      experience: "12 Years",
      languages: "English, Hindi",
      rating: "4.8",
      responseTime: "Under 1 Hour",
      fee: "$180",
      insurance: "Aetna, Blue Cross, Medicare",
      bio: "Dr. John Patel is a board-certified orthopedic surgeon focusing on sports medicine, joint replacements, and physical therapy coordination.",
    },
    {
      name: "Dr. Elena Gomez",
      specialty: "Cardiology",
      experience: "14 Years",
      languages: "Spanish, English",
      rating: "5.0",
      responseTime: "Under 3 Hours",
      fee: "$200",
      insurance: "MetLife, Blue Cross, Cigna",
      bio: "Dr. Elena Gomez is a dedicated cardiologist focusing on preventive heart healthcare, cholesterol management, hypertension, and remote ECG monitoring.",
    }
  ];

  const handleMatchmakerInput = (inputText: string, aiResponseText: string, matches: MatchResult[], nextStep: number) => {
    if (matchLoading) return;
    setMatchChat(prev => [...prev, { sender: "patient", text: inputText }]);
    setMatchLoading(true);
    setMatchStep(nextStep);

    setTimeout(() => {
      setMatchChat(prev => [...prev, { sender: "ai", text: aiResponseText }]);
      setSuggestedDoctors(matches);
      setMatchLoading(false);
    }, 850);
  };

  const handleBookingConfirm = () => {
    setBookingStep("receipt");
  };

  const handleTriggerWaitlist = () => {
    setWaitlistAlertSent(true);
    setTimeout(() => {
      setWaitlistAlertSent(false);
    }, 4000);
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
          <span className="text-white">CareMatch AI</span>
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
                <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest">CareMatch AI Marketplace</span>
                <Sparkles className="w-3 h-3 text-brand-cyan" />
              </div>

              {/* Headline */}
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl xl:text-5xl text-white leading-[1.15] tracking-tight">
                Find Trusted Care.<br />
                <span className="text-gradient-cyan-indigo">Match by Intent & Schedule.</span><br />
                <span className="text-gradient-emerald-cyan">Book Instantly.</span>
              </h1>

              {/* Subtitle */}
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                An AI-powered doctor matching and scheduling marketplace that connects patients with compatible providers based on clinical symptoms, insurance plans, and real-time open calendar blocks.
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
                  href="https://care-match-beryl.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 glass-panel border border-brand-border text-white font-semibold px-5 py-3.5 rounded-xl hover:border-brand-cyan/40 hover:scale-[1.02] active:scale-[0.98] transition-all text-xs whitespace-nowrap"
                >
                  <Globe className="w-3.5 h-3.5 text-brand-cyan" />
                  <span>Launch Live App</span>
                </a>
                <a
                  href="https://github.com/alimubashir822/CareMatch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 glass-panel border border-brand-border text-gray-300 font-semibold px-5 py-3.5 rounded-xl hover:border-brand-cyan/40 hover:text-white hover:scale-[1.02] active:scale-[0.98] transition-all text-xs whitespace-nowrap"
                >
                  <Search className="w-3.5 h-3.5 text-brand-indigo" />
                  <span>View Source</span>
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2.5 pt-4">
                {[
                  { icon: <Shield className="w-3.5 h-3.5 text-brand-emerald" />, label: "HIPAA Compliant", bg: "bg-brand-emerald/10 border-brand-emerald/20" },
                  { icon: <Lock className="w-3.5 h-3.5 text-brand-cyan" />, label: "Encrypted WebRTC", bg: "bg-brand-cyan/10 border-brand-cyan/20" },
                  { icon: <CheckCircle className="w-3.5 h-3.5 text-brand-indigo" />, label: "Verified Reviews Only", bg: "bg-brand-indigo/10 border-brand-indigo/20" },
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
                    <span className="font-display font-bold text-white text-xs tracking-wide">CareMatch AI Sandbox</span>
                  </div>
                  
                  {/* Status Indicator */}
                  <div className="flex items-center space-x-2 bg-brand-emerald/10 border border-brand-emerald/25 rounded-full px-2.5 py-1">
                    <div className="w-1.5 h-1.5 bg-brand-emerald rounded-full animate-pulse" />
                    <span className="text-[10px] text-brand-emerald font-semibold">Live Sandbox</span>
                  </div>
                </div>

                {/* Dashboard Inner Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-brand-border h-[460px]">
                  
                  {/* Sidebar (4 cols) */}
                  <div className="md:col-span-4 p-4 space-y-1.5 bg-white/[0.01]">
                    <p className="text-[9px] text-gray-500 uppercase font-bold tracking-wider mb-2 px-2">Navigation</p>
                    {[
                      { id: "Matchmaker", label: "AI Matchmaker", icon: <Brain className="w-3.5 h-3.5" /> },
                      { id: "Directory", label: "Doctors Grid", icon: <Search className="w-3.5 h-3.5" /> },
                      { id: "Growth", label: "Doctor Growth", icon: <BarChart3 className="w-3.5 h-3.5" /> },
                      { id: "Waitlist", label: "Smart Waitlist", icon: <Clock className="w-3.5 h-3.5" /> },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => {
                          setActiveTab(tab.id);
                          setBookingStep("idle");
                          setSelectedDocProfile(null);
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
                      <p className="text-[9px] text-gray-500 uppercase font-bold tracking-wider mb-2 px-2">Access Status</p>
                      <div className="flex items-center space-x-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-gray-400">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>HIPAA Passport</span>
                      </div>
                      <div className="flex items-center space-x-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-gray-400">
                        <Star className="w-3.5 h-3.5" />
                        <span>Verified Reviews</span>
                      </div>
                    </div>
                  </div>

                  {/* Main Display (8 cols) */}
                  <div className="md:col-span-8 p-5 overflow-y-auto flex flex-col justify-between h-full bg-brand-bg/20">
                    
                    {/* Tab 1: AI Matchmaker */}
                    {activeTab === "Matchmaker" && (
                      <div className="flex flex-col h-full justify-between flex-grow">
                        <div className="flex justify-between items-center border-b border-brand-border/60 pb-2 mb-2">
                          <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-wider flex items-center space-x-1">
                            <Sparkles className="w-3.5 h-3.5 text-brand-cyan mr-1" />
                            <span>AI Care Matchmaker Chat</span>
                          </span>
                        </div>

                        {/* Matchmaker Chat Window */}
                        <div className="space-y-3 flex-grow overflow-y-auto max-h-[220px] pr-1 mb-2 font-sans">
                          {matchChat.map((msg, i) => (
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

                          {matchLoading && (
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

                        {/* Interactive Pill Choices */}
                        <div className="space-y-1.5 border-t border-brand-border/60 pt-2 flex flex-col justify-end">
                          {matchStep === 1 && (
                            <>
                              <p className="text-[8px] text-gray-500 font-bold uppercase tracking-wider">Select Symptom to Simulate Matching:</p>
                              <div className="flex flex-wrap gap-1.5">
                                <button
                                  onClick={() => handleMatchmakerInput(
                                    "I have severe shoulder pain.",
                                    "Understood. For shoulder pain, an Orthopedics specialist is recommended. I have identified 2 matching doctors accepting your UnitedHealth network.",
                                    [
                                      { name: "Dr. John Patel", specialty: "Orthopedic Surgery", score: 98, availability: "Tomorrow 2:30 PM", rating: "4.8", fee: "$180", insurance: "Blue Cross, Aetna" }
                                    ],
                                    2
                                  )}
                                  className="text-[9px] border border-brand-cyan/20 bg-brand-cyan/5 hover:bg-brand-cyan/10 text-brand-cyan rounded-lg px-2.5 py-1"
                                >
                                  Shoulder Joint Pain
                                </button>
                                <button
                                  onClick={() => handleMatchmakerInput(
                                    "I need a dermatologist for skin rashes.",
                                    "Got it. Skin rashes map to Dermatology. I have matched Dr. Sarah Ahmed who has 96% compatibility based on your location and accepts Cigna/UnitedHealth.",
                                    [
                                      { name: "Dr. Sarah Ahmed", specialty: "Dermatology", score: 96, availability: "Today 2:30 PM", rating: "4.9", fee: "$120", insurance: "Cigna, UnitedHealth" }
                                    ],
                                    2
                                  )}
                                  className="text-[9px] border border-brand-cyan/20 bg-brand-cyan/5 hover:bg-brand-cyan/10 text-brand-cyan rounded-lg px-2.5 py-1"
                                >
                                  Skin Irritation / Rash
                                </button>
                              </div>
                            </>
                          )}

                          {matchStep === 2 && suggestedDoctors.length > 0 && (
                            <div className="space-y-2">
                              <p className="text-[8px] text-gray-500 font-bold uppercase tracking-wider">AI Suggested Matches:</p>
                              {suggestedDoctors.map((doc, idx) => (
                                <div key={idx} className="bg-slate-900/60 border border-brand-border rounded-xl p-2.5 flex justify-between items-center text-[10px]">
                                  <div>
                                    <p className="font-bold text-white">{doc.name} ({doc.score}% Match)</p>
                                    <p className="text-[9px] text-gray-400">{doc.specialty} &bull; Next Available: <span className="text-brand-cyan">{doc.availability}</span></p>
                                  </div>
                                  <button
                                    onClick={() => {
                                      setActiveTab("Directory");
                                      const fullDoc = doctorsDatabase.find(d => d.name === doc.name);
                                      if (fullDoc) {
                                        setSelectedDocProfile(fullDoc);
                                        setBookingStep("service");
                                      }
                                    }}
                                    className="bg-brand-cyan/20 hover:bg-brand-cyan/35 text-white border border-brand-cyan/40 px-2.5 py-1 rounded text-[9px] font-bold"
                                  >
                                    Book Consult
                                  </button>
                                </div>
                              ))}
                              <button
                                onClick={() => {
                                  setMatchStep(1);
                                  setSuggestedDoctors([]);
                                  setMatchChat([
                                    { sender: "ai", text: "Hello! I am the CareMatch AI Concierge. What type of care do you need today? (Select a symptom below or describe your concern)" }
                                  ]);
                                }}
                                className="text-[8px] text-gray-500 hover:text-white uppercase font-bold tracking-wider pt-1 self-start"
                              >
                                Reset Matcher
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Tab 2: Doctor Directory Discovery */}
                    {activeTab === "Directory" && (
                      <div className="flex flex-col h-full justify-between flex-grow">
                        {!selectedDocProfile ? (
                          <>
                            {/* Directory List */}
                            <div className="flex justify-between items-center border-b border-brand-border/60 pb-2 mb-2">
                              <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-wider">Doctor Directory Listings</span>
                              
                              {/* Filter tag */}
                              <select
                                value={specialtyFilter}
                                onChange={(e) => setSpecialtyFilter(e.target.value)}
                                className="bg-slate-900 border border-brand-border text-[9px] text-gray-300 rounded px-1.5 py-0.5 focus:outline-none"
                              >
                                <option value="All">All Specialties</option>
                                <option value="Dermatology">Dermatology</option>
                                <option value="Orthopedics">Orthopedics</option>
                                <option value="Cardiology">Cardiology</option>
                              </select>
                            </div>

                            <div className="space-y-2 flex-grow overflow-y-auto max-h-[290px] pr-1">
                              {doctorsDatabase
                                .filter(d => specialtyFilter === "All" || d.specialty === specialtyFilter)
                                .map((doc, idx) => (
                                  <div key={idx} className="bg-slate-900/60 border border-brand-border rounded-xl p-3 flex justify-between items-center text-[10px]">
                                    <div>
                                      <p className="font-bold text-white flex items-center">
                                        <span>{doc.name}</span>
                                        <span className="text-[9px] text-amber-400 font-bold ml-1.5 flex items-center">
                                          <Star className="w-2.5 h-2.5 fill-amber-400 mr-0.5" />
                                          <span>{doc.rating}</span>
                                        </span>
                                      </p>
                                      <p className="text-[9px] text-gray-400">{doc.specialty} &bull; Experience: <span className="text-gray-300">{doc.experience}</span></p>
                                    </div>
                                    <button
                                      onClick={() => setSelectedDocProfile(doc)}
                                      className="bg-brand-cyan/15 hover:bg-brand-cyan/25 text-brand-cyan border border-brand-cyan/35 px-2.5 py-1.5 rounded text-[9px] font-semibold"
                                    >
                                      View Profile
                                    </button>
                                  </div>
                                ))}
                            </div>
                          </>
                        ) : (
                          <div className="flex flex-col h-full justify-between overflow-y-auto max-h-[350px] pr-1">
                            {/* Doctor profile card */}
                            <div className="space-y-3">
                              <div className="flex justify-between items-start border-b border-brand-border/60 pb-2">
                                <div>
                                  <h3 className="text-xs font-bold text-white">{selectedDocProfile.name}</h3>
                                  <p className="text-[9px] text-brand-cyan font-bold">{selectedDocProfile.specialty}</p>
                                </div>
                                <button
                                  onClick={() => {
                                    setSelectedDocProfile(null);
                                    setBookingStep("idle");
                                  }}
                                  className="text-[9px] text-gray-500 hover:text-white"
                                >
                                  Back to Grid
                                </button>
                              </div>

                              <p className="text-[10px] text-gray-400 leading-relaxed font-sans">{selectedDocProfile.bio}</p>
                              
                              <div className="grid grid-cols-2 gap-2 text-[9px] text-gray-400 bg-slate-900/60 p-2.5 rounded-lg border border-brand-border">
                                <p><strong className="text-gray-300">Languages:</strong> {selectedDocProfile.languages}</p>
                                <p><strong className="text-gray-300">Insurance:</strong> {selectedDocProfile.insurance}</p>
                                <p><strong className="text-gray-300">Consultation Fee:</strong> {selectedDocProfile.fee}</p>
                                <p><strong className="text-gray-300">Avg Response Time:</strong> {selectedDocProfile.responseTime}</p>
                              </div>

                              {/* Booking Flow Simulator */}
                              {bookingStep === "idle" && (
                                <button
                                  onClick={() => setBookingStep("service")}
                                  className="w-full text-center py-2 text-[10px] font-bold text-white bg-gradient-to-r from-brand-cyan to-brand-indigo rounded-xl"
                                >
                                  Book Appointment Now
                                </button>
                              )}

                              {bookingStep === "service" && (
                                <div className="space-y-1.5">
                                  <p className="text-[8px] text-gray-500 font-bold uppercase">Select Consultation Service:</p>
                                  <div className="flex space-x-2">
                                    {["Virtual Consultation ($80)", "In-Office Treatment ($150)"].map((srv) => (
                                      <button
                                        key={srv}
                                        onClick={() => {
                                          setSelectedService(srv);
                                          setBookingStep("slots");
                                        }}
                                        className="text-[9px] bg-slate-900 border border-brand-border text-gray-300 hover:text-white px-2.5 py-1.5 rounded-lg flex-grow text-center"
                                      >
                                        {srv}
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {bookingStep === "slots" && (
                                <div className="space-y-1.5">
                                  <p className="text-[8px] text-gray-500 font-bold uppercase">Select Available Time Slot Today:</p>
                                  <div className="flex space-x-2">
                                    {["10:00 AM", "2:30 PM", "5:00 PM"].map((slot) => (
                                      <button
                                        key={slot}
                                        onClick={() => {
                                          setSelectedTimeSlot(slot);
                                          handleBookingConfirm();
                                        }}
                                        className="text-[9px] bg-slate-900 border border-brand-border text-gray-300 hover:text-white px-2.5 py-1.5 rounded-lg flex-grow text-center"
                                      >
                                        {slot}
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {bookingStep === "receipt" && (
                                <div className="bg-brand-emerald/5 border border-brand-emerald/30 rounded-xl p-3 space-y-2">
                                  <span className="text-[9px] text-brand-emerald font-bold uppercase block">Booking Confirmation Ticket</span>
                                  <div className="text-[9px] text-gray-300 space-y-1">
                                    <p><strong>Doctor:</strong> {selectedDocProfile.name}</p>
                                    <p><strong>Service:</strong> {selectedService}</p>
                                    <p><strong>Time Slot:</strong> {selectedTimeSlot} (Today)</p>
                                    <p><strong>Status:</strong> Paid & Confirmed via Stripe</p>
                                  </div>
                                  <button
                                    onClick={() => setBookingStep("idle")}
                                    className="w-full text-center py-1.5 text-[8px] uppercase font-bold text-gray-400 hover:text-white border border-brand-border/60 hover:border-white rounded-lg mt-2 transition-colors"
                                  >
                                    Re-book Slot
                                  </button>
                                </div>
                              )}

                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Tab 3: Doctor Growth Tools */}
                    {activeTab === "Growth" && (
                      <div className="flex flex-col h-full justify-between flex-grow">
                        <div className="flex justify-between items-center border-b border-brand-border/60 pb-2 mb-3">
                          <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-wider">Doctor Portal & Profile Optimization</span>
                        </div>

                        <div className="space-y-4 flex-grow overflow-y-auto max-h-[300px] pr-1 text-[10px]">
                          
                          {/* Growth Stats widgets */}
                          <div className="grid grid-cols-2 gap-2 text-center">
                            <div className="bg-slate-900/60 border border-brand-border rounded-xl p-2.5">
                              <p className="text-[8px] text-gray-500 font-bold uppercase leading-none">Profile Views</p>
                              <p className="text-sm font-mono font-bold text-white mt-1.5">2,500 views</p>
                            </div>
                            <div className="bg-slate-900/60 border border-brand-border rounded-xl p-2.5">
                              <p className="text-[8px] text-gray-500 font-bold uppercase leading-none">Monthly Earnings</p>
                              <p className="text-sm font-mono font-bold text-white mt-1.5">$25,000</p>
                            </div>
                            <div className="bg-slate-900/60 border border-brand-border rounded-xl p-2.5">
                              <p className="text-[8px] text-gray-500 font-bold uppercase leading-none">Booking Requests</p>
                              <p className="text-sm font-mono font-bold text-white mt-1.5">180 leads</p>
                            </div>
                            <div className="bg-slate-900/60 border border-brand-border rounded-xl p-2.5">
                              <p className="text-[8px] text-gray-500 font-bold uppercase leading-none">Conversion Rate</p>
                              <p className="text-sm font-mono font-bold text-white mt-1.5">35% conv.</p>
                            </div>
                          </div>

                          {/* Profile optimization toggle */}
                          <div className="border border-brand-indigo/35 bg-brand-indigo/5 rounded-xl p-3 space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-[9px] text-brand-indigo font-bold uppercase block">AI Profile Optimization Advice</span>
                              <button
                                onClick={() => setOptimizationOn(!optimizationOn)}
                                className={`text-[8px] font-bold px-2 py-0.5 rounded border transition-colors ${
                                  optimizationOn
                                    ? "bg-brand-emerald/10 border-brand-emerald/20 text-brand-emerald"
                                    : "bg-brand-cyan/10 border-brand-cyan/20 text-brand-cyan"
                                }`}
                              >
                                {optimizationOn ? "Suggestions Applied ✓" : "Run AI Review"}
                              </button>
                            </div>

                            <p className="text-gray-300 leading-relaxed font-sans">
                              {optimizationOn 
                                ? "Profile recommendation applied! Added clear treatment price listings and formatted education milestones, boosting search visibility index by 24%."
                                : "Analyze profile bio to increase bookings. The AI checks credentials listings, average response ratings, and missing tags."
                              }
                            </p>
                          </div>

                        </div>
                      </div>
                    )}

                    {/* Tab 4: Smart Waitlist */}
                    {activeTab === "Waitlist" && (
                      <div className="flex flex-col h-full justify-between flex-grow">
                        <div className="flex justify-between items-center border-b border-brand-border/60 pb-2 mb-3">
                          <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-wider">Smart Cancellation Waitlist</span>
                        </div>

                        <div className="space-y-4 flex-grow overflow-y-auto max-h-[300px] pr-1 text-[10px]">
                          <p className="text-gray-400">
                            A gap slot has opened on <strong>Dr. Sarah Ahmed&apos;s</strong> calendar for tomorrow at <strong>3:00 PM</strong> due to cancellation.
                          </p>

                          <div className="bg-slate-900/60 border border-brand-border rounded-xl p-3 space-y-2">
                            <p className="font-bold text-white flex items-center">
                              <Bell className="w-3.5 h-3.5 text-brand-cyan mr-1.5" />
                              <span>Waitlist Alert Parameters</span>
                            </p>
                            <ul className="space-y-1 text-gray-400 font-sans">
                              <li>&bull; Specialty Target: Dermatology</li>
                              <li>&bull; Waiting Patient Leads: 5 matches</li>
                              <li>&bull; Alert Channel: Twilio SMS Broadcast</li>
                            </ul>
                          </div>

                          <div className="pt-2">
                            {waitlistAlertSent ? (
                              <div className="bg-brand-emerald/15 border border-brand-emerald/30 text-brand-emerald rounded-lg p-2.5 text-center font-bold">
                                SMS Broadcast Dispatched! 5 matching patients alerted.
                              </div>
                            ) : (
                              <button
                                onClick={handleTriggerWaitlist}
                                className="w-full text-center py-2 bg-brand-cyan/20 hover:bg-brand-cyan/35 text-white border border-brand-cyan/40 rounded-xl font-bold transition-colors"
                              >
                                Trigger AI Waitlist SMS Broadcast
                              </button>
                            )}
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

        {/* -- STATS SECTION -- */}
        <section className="relative mb-24">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {stats.map((s, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="glass-panel border border-brand-border rounded-2xl p-4.5 text-center flex flex-col justify-between items-center hover:border-brand-cyan/20 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center mb-3.5 text-brand-cyan">
                  {s.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="font-display font-extrabold text-lg text-white leading-none">{s.value}</h3>
                  <p className="text-[9px] text-gray-400 uppercase font-semibold leading-tight">{s.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <hr className="border-brand-border mb-20" />

        {/* -- FEATURES SECTION -- */}
        <section className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-display font-bold text-3xl text-white tracking-tight">
              Platform Architecture Modules
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Granular features coordinating physician marketplaces, patient dashboards, availability calendar triggers, and Stripe transactions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreFeatures.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.03 }}
                className="glass-panel border border-brand-border rounded-xl p-5 hover:border-brand-cyan/20 transition-all flex flex-col justify-between relative group"
              >
                {f.badge && (
                  <span className="absolute top-4 right-4 text-[8px] font-bold px-1.5 py-0.5 rounded bg-brand-cyan/10 text-brand-cyan uppercase tracking-wider">
                    {f.badge}
                  </span>
                )}
                <div>
                  <div className="w-10 h-10 rounded-lg bg-slate-900/60 border border-brand-border flex items-center justify-center text-brand-cyan mb-4 group-hover:scale-105 transition-transform duration-300">
                    {f.icon}
                  </div>
                  <h3 className="text-white font-bold text-sm mb-2">{f.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <hr className="border-brand-border mb-20" />

        {/* -- DIFFERENTIATORS -- */}
        <section className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-display font-bold text-3xl text-white tracking-tight">
              Smarter Healthcare Discoveries
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              We move beyond generic static doctor index pages to establish dynamic patient intakes, compatibility matches, and automated follow-ups.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                style={{
                  boxShadow: `0 10px 30px -10px ${d.glow}`
                }}
                className={`rounded-2xl border border-brand-border/60 bg-gradient-to-br ${d.color} p-6 space-y-4 hover:border-brand-cyan/30 transition-all flex flex-col justify-between`}
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-955/60 border border-brand-border flex items-center justify-center text-brand-cyan">
                    {d.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base leading-snug">{d.title}</h3>
                    <p className="text-[10px] text-brand-cyan font-bold tracking-wider uppercase mt-0.5">{d.subtitle}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <hr className="border-brand-border mb-20" />

        {/* -- PORTAL MODULES DETAILS -- */}
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side: Information */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="font-display font-bold text-3xl text-white tracking-tight leading-tight">
                Three-Sided Marketplace System
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                CareMatch AI unifies patients seeking specialists, physicians scaling bookings, and multi-physician organizations overseeing billing splits.
              </p>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                By standardizing HIPAA compliance and encrypted video consulting rooms directly in-browser, the platform serves as an enterprise operating system.
              </p>

              <div className="pt-4 border-t border-brand-border/60 space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-brand-emerald/10 border border-brand-emerald/30 flex items-center justify-center text-brand-emerald flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-xs">EHR Database Synchronization</h4>
                    <p className="text-gray-400 text-xs mt-0.5">Compatible with FHIR HL7 standards for instant hospital scheduling syncs.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-xs">Verified Rating Filters</h4>
                    <p className="text-gray-400 text-xs mt-0.5">Guarantees reputation integrity by scoping reviews to patients with captured booking payments.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Modules Accordion/Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {portalModules.map((m, idx) => (
                <div key={idx} className="glass-panel border border-brand-border rounded-2xl p-5 space-y-4 bg-white/[0.01]">
                  <div className="flex items-center space-x-3 text-brand-cyan">
                    <div className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center">
                      {m.icon}
                    </div>
                    <h3 className="text-white font-bold text-sm leading-none">{m.title}</h3>
                  </div>

                  <ul className="space-y-2">
                    {m.items.map((item, i) => (
                      <li key={i} className="text-xs text-gray-400 flex items-start">
                        <span className="text-brand-cyan mr-2 mt-1 flex-shrink-0">&bull;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </div>
        </section>

        <hr className="border-brand-border mb-20" />

        {/* -- USE CASES -- */}
        <section className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-display font-bold text-3xl text-white tracking-tight">
              Marketplace Case Scenarios
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Explore how clinical networks, private practices, and telemedicine companies utilize scheduling features to maximize occupancies.
            </p>
          </div>

          {/* Tabs header */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {useCases.map((uc, idx) => (
              <button
                key={idx}
                onClick={() => setActiveUseCase(idx)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold border transition-all ${
                  activeUseCase === idx
                    ? "bg-gradient-to-r from-brand-cyan/20 to-brand-indigo/20 border-brand-cyan/40 text-white"
                    : "bg-slate-900/40 border-brand-border text-gray-400 hover:text-gray-200"
                }`}
              >
                {uc.specialty}
              </button>
            ))}
          </div>

          {/* Active Tab View */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeUseCase}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="glass-panel border border-brand-border rounded-3xl p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left side: details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center text-brand-cyan">
                    {useCases[activeUseCase].icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{useCases[activeUseCase].specialty} Roster</h3>
                    <p className="text-xs text-brand-cyan font-bold mt-0.5">{useCases[activeUseCase].scenario}</p>
                  </div>
                </div>

                {/* Workflow timeline */}
                <div className="relative pl-6 space-y-4 border-l border-brand-border/60">
                  {useCases[activeUseCase].journey.map((step, idx) => (
                    <div key={idx} className="relative">
                      <div className="absolute -left-[30px] top-1.5 w-2 h-2 rounded-full bg-brand-cyan" />
                      <p className="text-xs text-gray-300 leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right side: Outcome metrics */}
              <div className="lg:col-span-5 border border-brand-indigo/20 bg-brand-indigo/5 rounded-2xl p-6 text-center space-y-4">
                <h4 className="text-[10px] text-brand-cyan font-bold uppercase tracking-widest leading-none">Platform Growth Value</h4>
                <p className="text-sm font-semibold text-white leading-relaxed">
                  &ldquo;{useCases[activeUseCase].outcome}&rdquo;
                </p>
                <div className="pt-4 border-t border-brand-border/60 flex justify-center space-x-6">
                  <div>
                    <p className="text-xs font-mono font-bold text-white">48%</p>
                    <p className="text-[9px] text-gray-500 uppercase mt-0.5">Waitlist fills</p>
                  </div>
                  <div>
                    <p className="text-xs font-mono font-bold text-white">35%+</p>
                    <p className="text-[9px] text-gray-500 uppercase mt-0.5">Conv rate</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </section>

        <hr className="border-brand-border mb-20" />

        {/* -- INTEGRATIONS & TECH STACK -- */}
        <section className="mb-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Tech stack lists (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-display font-bold text-2xl text-white tracking-tight leading-tight">
              Type-Safe Technical Stack
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              CareMatch AI is built using Next.js 15, PostgreSQL database layers, and Prisma schemas, guaranteeing fast load metrics and deployment safety.
            </p>

            <div className="space-y-4">
              {techStack.map((category, idx) => (
                <div key={idx} className="border border-brand-border rounded-xl p-4 bg-slate-900/30 flex items-start space-x-3">
                  <div className="text-brand-cyan mt-0.5">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-white leading-none mb-2">{category.category}</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {category.items.map((item, i) => (
                        <span key={i} className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 border border-brand-border text-gray-300">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Integrations checklist (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-display font-bold text-2xl text-white tracking-tight leading-tight">
              Marketplace Integrations
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Integrated with secure APIs that synchronize clinical intake timelines, text message lists, WebRTC channels, and payment checks.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {integrations.map((int, idx) => (
                <div key={idx} className="glass-panel border border-brand-border rounded-xl p-3 flex flex-col justify-between hover:border-brand-cyan/20 transition-colors bg-white/[0.01]">
                  <div>
                    <span className="text-[8px] font-mono px-1.5 py-0.5 rounded bg-brand-cyan/10 text-brand-cyan uppercase tracking-wider block w-max mb-2">
                      {int.category}
                    </span>
                    <h3 className="text-xs font-bold text-white leading-none mb-1">{int.name}</h3>
                  </div>
                  <p className="text-[10px] text-gray-400 leading-snug mt-1.5">{int.desc}</p>
                </div>
              ))}
            </div>
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
                <p className="text-brand-cyan mb-2">{"// Prisma database schemas (Three-Sided Marketplace)"}</p>
                <div className="space-y-4">
                  <div>
                    <span className="text-brand-indigo">model</span> <span className="text-white font-bold">Doctor</span> &#123;
                    <div className="pl-4 text-gray-400">
                      id            String         @id @default(uuid())<br />
                      specialty     String<br />
                      experience    String<br />
                      feeCode       Int            @default(100)<br />
                      responseTime  String<br />
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
            {securityFeatures.map((s, idx) => (
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
