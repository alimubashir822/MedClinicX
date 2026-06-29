"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Sparkles, Brain, HeartPulse, FileText, Calendar,
  MessageSquare, Shield, Users, Activity, CheckCircle, Star,
  TrendingUp, Lock, Bell, ChevronDown, LayoutDashboard, Stethoscope,
  BookOpen, Phone, Globe, Database, RefreshCw, Building2,
  Smile, Heart, AlertTriangle, CloudUpload, ShieldCheck, Eye,
  UserCog, Video, VideoOff, Volume2, Info
} from "lucide-react";

/* --- Types --- */
interface Feature { icon: React.ReactNode; title: string; desc: string; badge?: string; }
interface FAQ { q: string; a: string; }

/* =======================================================
   DATA
======================================================= */

const coreFeatures: Feature[] = [
  { icon: <Video className="w-5 h-5" />, title: "Telemedicine Video Engine | Med Clinic X", desc: "Low-latency WebRTC video streams supporting inline charting, screen sharing, and live vitals telemetry tracking.", badge: "Flagship" },
  { icon: <Brain className="w-5 h-5" />, title: "AI Pre-Consult Brief", desc: "Interactive AI pre-interviews patients before calls, delivering structured symptom briefs straight to the physician's screen.", badge: "Unique" },
  { icon: <FileText className="w-5 h-5" />, title: "Digital Prescription Builder", desc: "Enables doctors to select medications, define dosage, and generate cryptographically signed PDF prescriptions directly from calls.", badge: "Smart" },
  { icon: <Calendar className="w-5 h-5" />, title: "Smart Scheduling Engine", desc: "Select departments or doctors, view real-time availability, book appointment slots, and pay securely via integrated Stripe." },
  { icon: <ShieldCheck className="w-5 h-5" />, title: "EMR Health Vault", desc: "Centralized, HIPAA-compliant document storage for laboratory panels, vaccination histories, and previous consultation summaries." },
  { icon: <Users className="w-5 h-5" />, title: "Family Health Hub", desc: "Manage consultations, schedules, prescriptions, and health histories for multiple family members under a single profile.", badge: "New" },
  { icon: <Activity className="w-5 h-5" />, title: "Wearables Integration", desc: "Sync real-time heart rate, blood pressure, and blood glucose values from wearable devices directly into consult dashboards." },
  { icon: <Globe className="w-5 h-5" />, title: "Live Translation AI", desc: "Real-time voice and text translation during video consultations, bridging global language barriers automatically.", badge: "Secure" },
  { icon: <Bell className="w-5 h-5" />, title: "Automated Care Triggers", desc: "AI-driven follow-ups: triggers recovery instructions on Day 1, wellness checks on Day 7, and refill reminders on Day 30." },
  { icon: <MessageSquare className="w-5 h-5" />, title: "HIPAA Chat Room", desc: "Securely encrypted direct messaging channels between patients and care teams before and after video sessions." },
  { icon: <Phone className="w-5 h-5" />, title: "One-Click Triage Call", desc: "Request virtual triage from on-call doctors for urgent medical queries with immediate connection queues.", badge: "Priority" },
  { icon: <RefreshCw className="w-5 h-5" />, title: "EHR Sync Layer", desc: "Bi-directional database synchronization with major institutional EMR systems using HL7 FHIR protocols." }
];



const portalModules = [
  { icon: <Video className="w-5 h-5" />, title: "Consultation Room", items: ["Secure WebRTC Video feed", "Interactive Chat & Files", "Live Vitals Dashboard", "Provider Screen Share"] },
  { icon: <Brain className="w-5 h-5" />, title: "AI Intake Assistant", items: ["Symptom pre-interview", "Structured doctor briefs", "ICD-10 suggestion suggestions", "History summarizing"] },
  { icon: <FileText className="w-5 h-5" />, title: "Prescription Builder", items: ["Pharmacy directory map", "Medication dosage selection", "Digital signature signing", "Automatic PDF delivery"] },
  { icon: <Calendar className="w-5 h-5" />, title: "Schedule Hub", items: ["Live booking calendars", "Automated reminders", "Timezone adjustments", "Multi-doctor views"] },
  { icon: <ShieldCheck className="w-5 h-5" />, title: "EMR Health Vault", items: ["Encrypted medical records", "Lab report uploads", "Imaging scans directory", "Patient consent audit logs"] },
  { icon: <Users className="w-5 h-5" />, title: "Family Accounts", items: ["Unified portal dashboard", "Separate medical profiles", "Shared appointment booking", "Consolidated billing bills"] },
  { icon: <Activity className="w-5 h-5" />, title: "Wearables Sync Engine", items: ["Apple Health / Fitbit sync", "Continuous glucose tracking", "Cardiogram monitoring", "Abnormal value alerts"] },
  { icon: <MessageSquare className="w-5 h-5" />, title: "Encrypted Chat", items: ["HIPAA-compliant channels", "Direct messaging threads", "Attachment sharing vault", "Read indicators"] }
];

const techStack = [
  { category: "Frontend Core", items: ["Next.js 15 App Router", "TypeScript", "Tailwind CSS", "shadcn/ui", "Framer Motion"], icon: <Globe className="w-5 h-5" /> },
  { category: "Video & Comms", items: ["WebRTC protocol", "Daily.co SDK / Zoom SDK", "Twilio SMS", "SendGrid Email"], icon: <Video className="w-5 h-5" /> },
  { category: "Backend & Database", items: ["Next.js API Routes", "Server Actions", "PostgreSQL", "Prisma ORM", "Zod Validation"], icon: <Database className="w-5 h-5" /> },
  { category: "Security & AI", items: ["OpenAI GPT-4o API", "Auth.js / Clerk", "AES-256 field encryption", "AWS S3 / Cloudflare R2"], icon: <Lock className="w-5 h-5" /> }
];

const useCases = [
  {
    icon: <Smile className="w-6 h-6" />,
    specialty: "Dental Triage",
    color: "brand-cyan",
    scenario: "Patient seeks emergency virtual consult for a cracked tooth",
    journey: [
      "Patient logs into TeleCare, selects Dental Triage",
      "AI pre-intake collects symptoms and captures photos of the tooth",
      "On-call dentist joins low-latency WebRTC video - views intake photos",
      "Dentist diagnoses root exposure, prescribes pain relief via prescription builder",
      "System generates signed prescription PDF and routes it to nearby pharmacy",
      "Front desk schedules an in-person root canal for the following morning"
    ],
    outcome: "Dental clinics report 65% fewer emergency triage delays and capture immediate procedure conversions."
  },
  {
    icon: <Heart className="w-6 h-6" />,
    specialty: "Virtual Cardiology",
    color: "rose-400",
    scenario: "Remote cardiac checkup with real-time vitals tracking",
    journey: [
      "Hypertensive patient logs in for their monthly cardiology follow-up",
      "TeleCare syncs blood pressure trends from patient's Apple Health kit",
      "Dr. Sarah Khan initiates video consult - vitals stream live on her dashboard",
      "AI notes a 10% reduction in average systolic blood pressure over 30 days",
      "Doctor adjusts Beta-blocker dosage, signs electronic prescription inline",
      "Smart Follow-Up Engine triggers weekly BP check-in alerts"
    ],
    outcome: "Cardiologists reduce 40% of routine checkup overheads while maintaining detailed vitals history."
  },
  {
    icon: <Users className="w-6 h-6" />,
    specialty: "Telemental Health",
    color: "brand-emerald",
    scenario: "Weekly virtual therapy session with encrypted chat support",
    journey: [
      "Patient books counseling slot with Dr. Elena Rostova",
      "Secure chat room opens 24h prior - patient sends journal entries",
      "Video room starts - low-latency video ensures body language cues are captured",
      "Doctor conducts cognitive behavioral session, takes private clinical notes",
      "AI compiles post-session exercises and reflections into patient's educational vault",
      "Patient uses HIPAA chat to ask follow-up questions during the week"
    ],
    outcome: "Mental health centers show 85% higher therapy compliance and 50% stronger patient booking retention."
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    specialty: "Hospital Tele-Triage",
    color: "brand-indigo",
    scenario: "Multi-department patient routing during high volume hours",
    journey: [
      "Patient enters hospital's digital portal experiencing flu symptoms",
      "AI pre-consult checks symptoms, flags mild fever, routes to Virtual Urgent Care",
      "Triage nurse reviews AI brief, starts video call within 2 minutes",
      "Nurse diagnoses flu, coordinates virtual prescription and home care guide",
      "System alerts patient's primary care provider and shares FHIR record bundle",
      "Follow-up tracker monitors temperature changes over 3 days automatically"
    ],
    outcome: "Hospital networks eliminate data silos between emergency teams, reducing emergency wait times by 45%."
  }
];

const securityFeatures = [
  { icon: <Lock className="w-5 h-5" />, title: "AES-256 Encryption", desc: "All patient charts, files, and chat messages encrypted at rest and in transit. Video runs on secure DTLS/SRTP WebRTC protocols." },
  { icon: <ShieldCheck className="w-5 h-5" />, title: "HIPAA & SOC 2 Auditable", desc: "Architecture aligns with strict clinical regulatory standards, ensuring secure log audit trails and role-based permissions." },
  { icon: <Eye className="w-5 h-5" />, title: "Full Access Logging", desc: "Every database read, video join event, and prescription release is logged with verified timestamp, user ID, and IP address." },
  { icon: <UserCog className="w-5 h-5" />, title: "Patient-Controlled Sharing", desc: "Patients select which providers can view their medical files. Access can be granted or revoked at any time." },
  { icon: <RefreshCw className="w-5 h-5" />, title: "FHIR Data Portability", desc: "Export clinic data, consultations, and prescriptions as standard HL7 FHIR bundles or cryptographically secure PDFs." },
  { icon: <AlertTriangle className="w-5 h-5" />, title: "Anomaly Safeguards", desc: "Machine learning algorithms monitor active login sessions, flagging duplicate IPs or unauthorized file download attempts." },
  { icon: <CloudUpload className="w-5 h-5" />, title: "Secure Cloud Storage", desc: "Files and imaging scans saved on cloud servers with time-limited signed URLs, ensuring files are never publicly exposed." },
  { icon: <Database className="w-5 h-5" />, title: "Multi-Tenant Isolation", desc: "Physical namespace isolation inside the database cluster, guaranteeing one clinic's data is never visible to another." }
];

const integrations = [
  { name: "Daily.co / Zoom SDK", category: "WebRTC Video", desc: "Powers low-latency, HIPAA-compliant video rooms directly inside patient and provider dashboards." },
  { name: "OpenAI GPT-4o", category: "AI Framework", desc: "Orchestrates AI pre-consult interviews, builds doctor prep briefs, and translates conversations." },
  { name: "PostgreSQL + Prisma", category: "Database System", desc: "Robust data layer managing tables for users, doctors, appointments, documents, and payments." },
  { name: "Clerk / Auth.js", category: "User Security", desc: "MFA authentication, secure provider sign-in, session timeouts, and role-based permissions." },
  { name: "AWS S3 / Cloudflare R2", category: "Record Vault", desc: "Stores diagnostic files, signed prescription PDFs, and imaging studies with strict access control." },
  { name: "Stripe", category: "Billing Engine", desc: "Handles copay payments, subscription models for clinics, and secure invoice receipts." },
  { name: "Twilio / SendGrid", category: "Comms Gateway", desc: "Powers automated SMS and email alerts for appointment slots, follow-ups, and refill notifications." },
  { name: "FHIR API Connection", category: "EHR Sync", desc: "Enables bi-directional integrations with institutional EMR solutions using HL7 standards." },
  { name: "Vercel Platform", category: "Hosting Layer", desc: "Optimized serverless edge deployment with continuous integration, DDoS protection, and SSL." }
];

const stats = [
  { value: "50ms", label: "Video Latency (WebRTC)", icon: <Video className="w-5 h-5" /> },
  { value: "100%", label: "HIPAA Compliant", icon: <Shield className="w-5 h-5" /> },
  { value: "12+", label: "AI Intake Features", icon: <Brain className="w-5 h-5" /> },
  { value: "4-6 Min", label: "Doctor Prep Saved", icon: <CheckCircle className="w-5 h-5" /> },
  { value: "4", label: "Deployment Phases", icon: <TrendingUp className="w-5 h-5" /> },
  { value: "9", label: "Ecosystem Connections", icon: <RefreshCw className="w-5 h-5" /> }
];

const databaseTables = [
  { table: "Users", fields: ["id", "name", "email", "role", "createdAt"] },
  { table: "Patients", fields: ["id", "userId", "medicalHistory", "createdAt"] },
  { table: "Doctors", fields: ["id", "userId", "specialty", "experience", "languages", "availability"] },
  { table: "Appointments", fields: ["id", "patientId", "doctorId", "date", "type", "status"] },
  { table: "Consultations", fields: ["id", "appointmentId", "notes", "aiSummary"] },
  { table: "VideoSessions", fields: ["id", "consultationId", "sessionUrl", "duration", "recordingUrl"] },
  { table: "MedicalRecords", fields: ["id", "patientId", "title", "category", "fileUrl", "uploadedAt"] },
  { table: "Prescriptions", fields: ["id", "patientId", "consultationId", "medications", "createdAt"] },
  { table: "Payments", fields: ["id", "appointmentId", "amount", "status", "stripeId"] },
  { table: "AuditLogs", fields: ["id", "userId", "action", "resource", "timestamp", "ip"] },
  { table: "Notifications", fields: ["id", "userId", "type", "message", "read", "createdAt"] },
  { table: "Clinics", fields: ["id", "name", "address", "plan", "settings"] }
];

const faqs: FAQ[] = [
  // Platform & Product (1-10)
  { q: "Is the video communication HIPAA compliant?", a: "Yes. All video and audio streams are end-to-end encrypted using WebRTC protocols. Our video server providers sign Business Associate Agreements (BAAs) and compile full audit logs, ensuring that no patient data is accessible by third parties." },
  { q: "How does the AI Pre-Consultation Assistant work?", a: "Before an appointment connects, the AI assistant interviews the patient about symptoms, severity, and medical history. It compiles these responses into a concise Doctor Brief, which is shared directly on the doctor's screen to save session time." },
  { q: "Can doctors sign digital prescriptions?", a: "Yes. The platform provides a digital signature input inside the Doctor Workspace. Prescriptions are generated as cryptographically secured, tamper-evident PDFs, which patients can download or forward to pharmacies." },
  { q: "What happens if a patient speaks a different language?", a: "The AI Translation Engine translates live chat and speech. If a doctor speaks English and the patient speaks Spanish, Urdu, or Arabic, transcripts and voice briefs are auto-translated in real-time." },
  { q: "Can this solution integrate with existing hospital EHR systems?", a: "Yes. The platform is designed with HL7 FHIR APIs, allowing it to read and write records to major EMR/EHR systems like Epic, Cerner, or custom databases." },
  { q: "How does payment processing work?", a: "Payments are processed securely via Stripe. Clinics can configure appointment fees, copays, or monthly membership models. The system invoices patients automatically and releases payouts to clinics." },
  { q: "Does the system work on mobile devices?", a: "Yes. The platform is built as a Progressive Web App (PWA) with full mobile-responsive design. It runs smoothly on iOS and Android browsers without requiring any downloads." },
  { q: "What file formats can patients upload to their records vault?", a: "Patients can upload PDFs (blood reports, prescriptions), images (X-rays, skin photos), and standard documents. All files are scanned for malware and encrypted before saving." },
  { q: "Can family members be managed under a single account?", a: "Yes. The Family Health Hub allows a parent or caregiver to add dependents (children, seniors, spouses) and switch between their profiles to book consults and view records." },
  { q: "How long does it take to deploy the platform?", a: "A single clinic MVP (Phase 1) can be deployed in 4-6 weeks. Custom hospital integrations with AI layers and custom database connections take approximately 3-4 months." },
  
  // Technical & Features (11-20)
  { q: "What database architecture does the platform use?", a: "We utilize PostgreSQL with Prisma ORM as the typed data layer. The schema includes 12 tables (Users, Patients, Doctors, Appointments, Consultations, VideoSessions, MedicalRecords, Prescriptions, Payments, AuditLogs, Notifications, Clinics) to ensure strict data validation and isolation." },
  { q: "How is video latency optimized?", a: "Our WebRTC engine routes connections through the nearest STUN/TURN servers globally. This maintains sub-100ms video and audio latency under normal network conditions, with fallback configurations for low bandwidth." },
  { q: "What happens if the patient loses connection during a call?", a: "The system automatically attempts to reconnect for 30 seconds. If the reconnection fails, the call status updates to 'Interrupted' and alerts both doctor and patient with a dial-in phone fallback." },
  { q: "How does the AI verify lab reports?", a: "When a report is uploaded, our AI OCR pipeline extracts key values, flags measurements outside standard reference ranges, and translates medical jargon into plain-English patient summaries." },
  { q: "Are consultation notes editable after the session ends?", a: "Doctors can edit notes for up to 24 hours. After that window, the record is cryptographically locked for auditing compliance. Any subsequent changes must be added as signed addendums." },
  { q: "Does the platform support multi-clinic structures?", a: "Yes. It supports multi-tenant configurations. Hospital networks can administer multiple individual clinic locations, distinct scheduling lists, and distinct billing streams from a centralized super-admin dashboard." },
  { q: "How are notifications and reminders delivered?", a: "Notifications are dispatched through SMS (via Twilio) and email (via SendGrid). Patients receive reminders 24 hours and 1 hour before scheduled sessions, with one-click links to join." },
  { q: "What security measures protect the EMR vault?", a: "Files are stored in private cloud storage and accessed via signed URLs that expire after 15 minutes. Data is encrypted at rest using AES-256 and in transit via TLS 1.3." },
  { q: "How does the Wearable Sync Engine function?", a: "Patients authorize connections to Apple Health, Google Fit, or wearable accounts. The platform pulls metrics like heart rate and glucose levels, showing trends to doctors in charts." },
  { q: "Does the AI assistant diagnose medical conditions?", a: "No. The AI provides administrative and triage support: gathering history, compiling questions, and clarifying terms. It explicitly redirects diagnostic decisions to licensed providers." }
];

const mockDoctors = [
  {
    name: "Dr. Sarah Khan",
    specialty: "Dermatology",
    experience: "12 Years",
    languages: "English, Urdu",
    availability: "Today",
    rating: 5,
    reviews: 148,
    price: "$75",
    image: "SK"
  },
  {
    name: "Dr. Ahmed Bilal",
    specialty: "Cardiology",
    experience: "15 Years",
    languages: "English, Urdu, Arabic",
    availability: "Tomorrow",
    rating: 5,
    reviews: 231,
    price: "$120",
    image: "AB"
  },
  {
    name: "Dr. Elena Rostova",
    specialty: "Mental Health (Therapy)",
    experience: "9 Years",
    languages: "English, Russian",
    availability: "Today",
    rating: 4.9,
    reviews: 95,
    price: "$90",
    image: "ER"
  }
];

/* =======================================================
   COMPONENT
======================================================= */
export default function TelemedicinePlatformPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeUseCase, setActiveUseCase] = useState(0);

  // Interactive OS Simulator States
  const [activeDashboardTab, setActiveDashboardTab] = useState("pre-consult");

  // Tab 1: AI Pre-Consult Chat States
  const [preConsultStep, setPreConsultStep] = useState(0);
  const [patientInput, setPatientInput] = useState("");
  const [chatLog, setChatLog] = useState<Array<{ sender: "ai" | "user", text: string }>>([
    { sender: "ai", text: "Hello! I am your TeleCare AI Companion. What symptoms are you experiencing today?" }
  ]);
  const [chatLoading, setChatLoading] = useState(false);
  const [aiReportGenerated, setAiReportGenerated] = useState(false);

  // Tab 2: Doctor Discovery States
  const [filterSpecialty, setFilterSpecialty] = useState("All");
  const [selectedDoctorForBooking, setSelectedDoctorForBooking] = useState<string | null>(null);
  const [bookingStep, setBookingStep] = useState(0);
  const [bookingType, setBookingType] = useState("Video Consultation");
  const [bookingTime, setBookingTime] = useState("Today, 4:00 PM");

  // Tab 3: Video Consult Workspace States
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [prescriptionList, setPrescriptionList] = useState<Array<{ name: string, dose: string, duration: string, instructions: string }>>([]);
  const [newMed, setNewMed] = useState({ name: "Amoxicillin", dose: "500mg", duration: "7 Days", instructions: "After meals" });
  const [prescDownloaded, setPrescDownloaded] = useState(false);

  const handlePreConsultSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientInput || chatLoading) return;

    const userText = patientInput;
    setChatLog(prev => [...prev, { sender: "user", text: userText }]);
    setPatientInput("");
    setChatLoading(true);

    setTimeout(() => {
      if (preConsultStep === 0) {
        setChatLog(prev => [...prev, {
          sender: "ai",
          text: "Understood. How long have you had this issue, and have you tried any treatments?"
        }]);
        setPreConsultStep(1);
      } else if (preConsultStep === 1) {
        setChatLog(prev => [...prev, {
          sender: "ai",
          text: "Thank you. Do you have any known drug allergies or medical conditions?"
        }]);
        setPreConsultStep(2);
      } else {
        setChatLog(prev => [...prev, {
          sender: "ai",
          text: "Perfect. I have compiled the Doctor Preparation Report and updated your consultation file."
        }]);
        setAiReportGenerated(true);
      }
      setChatLoading(false);
    }, 1000);
  };

  const handleAddMedication = () => {
    if (!newMed.name) return;
    setPrescriptionList(prev => [...prev, { ...newMed }]);
    setNewMed({ name: "", dose: "", duration: "", instructions: "" });
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
          <span className="text-white">Telemedicine Consultation Platform</span>
        </div>

        {/* ======================================
            HERO SECTION + SIMULATOR
        ====================================== */}
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
                <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest">Telemedicine consultation platform</span>
                <Sparkles className="w-3 h-3 text-brand-cyan" />
              </div>

              {/* Headline */}
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl xl:text-5xl text-white leading-[1.15] tracking-tight">
                Virtual Consultations.<br />
                <span className="text-gradient-cyan-indigo">Secure Video. AI Briefs.</span><br />
                <span className="text-gradient-emerald-cyan">All in One</span> Clinical Console.
              </h1>

              {/* Subtitle */}
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                A secure, HIPAA-compliant virtual clinic workspace that streamlines telemedicine consults - combining <span className="text-white font-semibold">low-latency WebRTC streams</span>, AI triage intake, and instant digital prescribing.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-bold px-8 py-4 rounded-xl hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-brand-cyan/25 text-sm"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Request Custom Demo</span>
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
                  { icon: <Shield className="w-3.5 h-3.5 text-brand-emerald" />, label: "HIPAA Compliant", bg: "bg-brand-emerald/10 border-brand-emerald/20" },
                  { icon: <Lock className="w-3.5 h-3.5 text-brand-cyan" />, label: "DTLS/SRTP WebRTC", bg: "bg-brand-cyan/10 border-brand-cyan/20" },
                  { icon: <CheckCircle className="w-3.5 h-3.5 text-brand-indigo" />, label: "EHR Sync Ready", bg: "bg-brand-indigo/10 border-brand-indigo/20" },
                  { icon: <Star className="w-3.5 h-3.5 text-amber-400" />, label: "SOC 2 Designed", bg: "bg-amber-400/10 border-amber-400/20" },
                ].map((t) => (
                  <div key={t.label} className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full border ${t.bg}`}>
                    {t.icon}
                    <span className="text-[10px] font-semibold text-gray-300">{t.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right side: High-Fidelity Mock OS Simulator (7 cols) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-7 relative"
            >
              <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-cyan to-brand-indigo rounded-2xl blur-xl opacity-20 transition-all duration-1000 -z-10" />
              
              <div className="glass-panel rounded-2xl border border-brand-border overflow-hidden bg-brand-bg/90">
                
                {/* Top header nav */}
                <div className="border-b border-brand-border px-5 py-3 flex items-center justify-between bg-white/2">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-6.5 h-6.5 rounded-lg bg-gradient-to-br from-brand-cyan to-brand-indigo flex items-center justify-center">
                      <HeartPulse className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="font-display font-bold text-white text-xs tracking-wide">TeleCare OS Console</span>
                  </div>
                  
                  {/* Status */}
                  <div className="flex items-center space-x-2 bg-brand-emerald/10 border border-brand-emerald/25 rounded-full px-2.5 py-1">
                    <div className="w-1.5 h-1.5 bg-brand-emerald rounded-full animate-pulse" />
                    <span className="text-[10px] text-brand-emerald font-semibold">WORKSPACE OS v2.4 (Online)</span>
                  </div>
                </div>

                {/* Dashboard Inner Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-brand-border h-[430px]">
                  
                  {/* Sidebar (4 cols) */}
                  <div className="md:col-span-4 p-4 space-y-1.5 bg-white/[0.01]">
                    <p className="text-[9px] text-gray-500 uppercase font-bold tracking-wider mb-2 px-2">Simulator Tabs</p>
                    {[
                      { id: "pre-consult", label: "AI Pre-Intake", icon: <Brain className="w-3.5 h-3.5" /> },
                      { id: "doc-search", label: "Doctor Search", icon: <Users className="w-3.5 h-3.5" /> },
                      { id: "video-consult", label: "Video Consult", icon: <Video className="w-3.5 h-3.5" /> },
                      { id: "clinic-analytics", label: "Clinic Admin", icon: <Building2 className="w-3.5 h-3.5" /> },
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
                      <p className="text-[9px] text-gray-500 uppercase font-bold tracking-wider mb-2 px-2">Provider On Call</p>
                      <div className="flex items-center space-x-2 px-2 py-1">
                        <div className="w-6 h-6 rounded-full bg-brand-indigo/20 flex items-center justify-center text-[10px] font-bold text-brand-indigo">
                          SK
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-white">Dr. Sarah Khan</p>
                          <p className="text-[8px] text-gray-500">Dermatologist</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Main Display (8 cols) */}
                  <div className="md:col-span-8 p-5 overflow-y-auto flex flex-col justify-between h-full bg-brand-bg/20">
                    
                    {/* Tab 1: AI Pre-Intake */}
                    {activeDashboardTab === "pre-consult" && (
                      <div className="flex-grow flex flex-col justify-between space-y-4">
                        <div className="flex items-center justify-between border-b border-brand-border/60 pb-2">
                          <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-wider flex items-center">
                            <Brain className="w-3.5 h-3.5 text-brand-cyan animate-pulse mr-1.5" />
                            <span>Pre-Appointment AI Chat</span>
                          </span>
                          <span className="text-[8px] bg-brand-cyan/15 text-brand-cyan font-bold px-2 py-0.5 rounded-full border border-brand-cyan/10">Active Session</span>
                        </div>

                        {/* Chat log */}
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
                                <span className="animate-pulse">Analyzing symptoms...</span>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* AI Summary report details */}
                        {aiReportGenerated && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-brand-emerald/10 border border-brand-emerald/20 rounded-xl p-3"
                          >
                            <div className="flex items-center space-x-1.5 mb-1">
                              <CheckCircle className="w-3.5 h-3.5 text-brand-emerald" />
                              <span className="text-[9px] text-brand-emerald font-bold uppercase">Doctor Intake Brief Syncing</span>
                            </div>
                            <p className="text-[10px] text-gray-300 leading-normal">
                              <strong>Symptoms:</strong> Rash on forearm · <strong>Duration:</strong> 3 Days · <strong>Allergies:</strong> Sulfa drugs. Sent to Dr. Sarah Khan&apos;s workspace dashboard.
                            </p>
                          </motion.div>
                        )}

                        {/* Interactive Form */}
                        {!aiReportGenerated && (
                          <form onSubmit={handlePreConsultSubmit} className="flex gap-2">
                            <input
                              type="text"
                              required
                              value={patientInput}
                              onChange={(e) => setPatientInput(e.target.value)}
                              disabled={chatLoading}
                              placeholder={preConsultStep === 0 ? "e.g. I have a skin rash for 3 days..." : "Reply here..."}
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

                        {aiReportGenerated && (
                          <button
                            onClick={() => {
                              setAiReportGenerated(false);
                              setPreConsultStep(0);
                              setChatLog([{ sender: "ai", text: "Hello! I am your TeleCare AI Companion. What symptoms are you experiencing today?" }]);
                            }}
                            className="text-[10px] text-brand-cyan hover:underline text-center block mt-1"
                          >
                            Restart simulation
                          </button>
                        )}
                      </div>
                    )}

                    {/* Tab 2: Doctor Discovery */}
                    {activeDashboardTab === "doc-search" && (
                      <div className="flex-grow flex flex-col justify-between space-y-4">
                        {bookingStep === 0 ? (
                          <>
                            <div className="flex items-center justify-between border-b border-brand-border/60 pb-2">
                              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Available Doctors</span>
                              <div className="flex gap-1 text-[8px]">
                                {["All", "Dermatology", "Cardiology", "Mental Health"].map((spec) => (
                                  <button
                                    key={spec}
                                    onClick={() => setFilterSpecialty(spec)}
                                    className={`px-1.5 py-0.5 rounded border ${
                                      filterSpecialty === spec
                                        ? "bg-brand-cyan/15 border-brand-cyan text-brand-cyan"
                                        : "border-brand-border text-gray-400"
                                    }`}
                                  >
                                    {spec}
                                  </button>
                                ))}
                              </div>
                            </div>

                            <div className="space-y-2 max-h-[190px] overflow-y-auto pr-1">
                              {mockDoctors
                                .filter((doc) => filterSpecialty === "All" || doc.specialty.includes(filterSpecialty))
                                .map((doc) => (
                                  <div key={doc.name} className="glass-panel border border-brand-border rounded-xl p-3 flex items-center justify-between hover:border-brand-cyan/30 transition-all">
                                    <div className="flex items-center space-x-2">
                                      <div className="w-8 h-8 rounded-lg bg-brand-cyan/10 flex items-center justify-center font-bold text-white text-[10px]">
                                        {doc.image}
                                      </div>
                                      <div>
                                        <p className="text-[11px] font-bold text-white leading-none">{doc.name}</p>
                                        <p className="text-[9px] text-gray-500 mt-1">{doc.specialty} · {doc.experience}</p>
                                      </div>
                                    </div>
                                    <button
                                      onClick={() => {
                                        setSelectedDoctorForBooking(doc.name);
                                        setBookingStep(1);
                                      }}
                                      className="bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-bold text-[9px] px-2.5 py-1 rounded-lg hover:opacity-90 transition-all"
                                    >
                                      Select
                                    </button>
                                  </div>
                                ))}
                            </div>
                          </>
                        ) : (
                          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
                            <h4 className="text-[11px] font-bold text-white border-b border-brand-border/60 pb-1.5">
                              Book Consult with {selectedDoctorForBooking}
                            </h4>
                            <div className="space-y-2 text-[10px]">
                              <div className="space-y-1">
                                <span className="text-gray-500 uppercase tracking-wider block font-bold text-[8px]">Type</span>
                                <div className="flex gap-2">
                                  {["Video Call", "Follow-up"].map((t) => (
                                    <button
                                      key={t}
                                      onClick={() => setBookingType(t)}
                                      className={`px-2 py-1 rounded border ${bookingType === t ? "bg-brand-cyan/10 border-brand-cyan text-brand-cyan" : "border-brand-border text-gray-400"}`}
                                    >
                                      {t}
                                    </button>
                                  ))}
                                </div>
                              </div>
                              <div className="space-y-1">
                                <span className="text-gray-500 uppercase tracking-wider block font-bold text-[8px]">Time Slot</span>
                                <div className="flex gap-2">
                                  {["Today, 4:00 PM", "Tomorrow, 10:00 AM"].map((time) => (
                                    <button
                                      key={time}
                                      onClick={() => setBookingTime(time)}
                                      className={`px-2 py-1 rounded border ${bookingTime === time ? "bg-brand-cyan/10 border-brand-cyan text-brand-cyan" : "border-brand-border text-gray-400"}`}
                                    >
                                      {time}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            </div>
                            <div className="flex justify-end gap-2 pt-2 border-t border-brand-border/60">
                              <button onClick={() => setBookingStep(0)} className="text-[10px] text-gray-400 hover:text-white">Back</button>
                              <button
                                onClick={() => {
                                  alert(`Consultation booked with ${selectedDoctorForBooking} for ${bookingTime}.`);
                                  setBookingStep(0);
                                  setSelectedDoctorForBooking(null);
                                }}
                                className="bg-brand-cyan text-brand-bg font-extrabold text-[9px] px-3 py-1.5 rounded-lg"
                              >
                                Book slot ($75)
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </div>
                    )}

                    {/* Tab 3: Video Consult */}
                    {activeDashboardTab === "video-consult" && (
                      <div className="flex-grow flex flex-col gap-3 h-full justify-between">
                        {/* Video screen */}
                        <div className="bg-[#0a0f1d] border border-brand-border rounded-xl p-2.5 flex flex-col justify-between relative overflow-hidden aspect-video flex-grow">
                          <div className="flex items-center justify-between border-b border-white/5 pb-1 text-[8px] text-gray-500">
                            <span className="flex items-center gap-1">
                              <Video className="w-3 h-3 text-brand-cyan" />
                              <span className="text-white font-semibold">Video Consult MDCX-4912</span>
                            </span>
                            <span className="bg-rose-500/10 text-rose-500 border border-rose-500/20 px-1.5 py-0.2 rounded font-bold animate-pulse">Live</span>
                          </div>

                          <div className="flex-grow flex items-center justify-center relative my-2 bg-white/2 rounded border border-white/5">
                            {isVideoOn ? (
                              <div className="text-center">
                                <div className="w-12 h-12 rounded-full bg-brand-cyan/20 flex items-center justify-center font-bold text-brand-cyan text-xs mx-auto mb-1">
                                  JS
                                </div>
                                <p className="text-[10px] font-bold text-white">Patient: John Smith</p>
                                <p className="text-[8px] text-gray-500">WebRTC connection stable (50ms latency)</p>
                              </div>
                            ) : (
                              <div className="text-center text-gray-500">
                                <VideoOff className="w-6 h-6 mx-auto mb-1" />
                                <p className="text-[9px]">Video turned off</p>
                              </div>
                            )}

                            {isVideoOn && (
                              <div className="absolute bottom-1 right-1 w-12 h-9 bg-brand-bg border border-brand-cyan/20 rounded flex items-center justify-center text-[7px] font-bold text-brand-cyan">
                                Dr. Sarah (You)
                              </div>
                            )}
                          </div>

                          {/* Controls */}
                          <div className="flex items-center justify-center gap-2.5 pt-1.5 border-t border-white/5">
                            <button
                              onClick={() => setIsVideoOn(!isVideoOn)}
                              className={`p-1.5 rounded border ${isVideoOn ? "bg-brand-cyan/15 border-brand-cyan text-brand-cyan" : "bg-red-500/10 border-red-500/20 text-red-500"}`}
                            >
                              {isVideoOn ? <Video className="w-3 h-3" /> : <VideoOff className="w-3 h-3" />}
                            </button>
                            <button
                              onClick={() => setIsMuted(!isMuted)}
                              className={`p-1.5 rounded border ${!isMuted ? "bg-white/5 border-white/10 text-gray-300" : "bg-red-500/10 border-red-500/20 text-red-500"}`}
                            >
                              <Volume2 className="w-3 h-3" />
                            </button>
                          </div>
                        </div>

                        {/* Prescription generator */}
                        <div className="glass-panel border border-brand-border p-2 rounded-xl text-[9px] space-y-1.5">
                          <div className="flex justify-between items-center">
                            <span className="font-bold text-white">Prescription Builder</span>
                            <button
                              onClick={handleAddMedication}
                              disabled={!newMed.name}
                              className="bg-brand-cyan/15 border border-brand-cyan/20 text-brand-cyan px-2 py-0.5 rounded text-[8px] font-bold"
                            >
                              Add
                            </button>
                          </div>
                          <div className="flex gap-1">
                            <input
                              type="text"
                              value={newMed.name}
                              onChange={(e) => setNewMed({ ...newMed, name: e.target.value })}
                              placeholder="Medication name"
                              className="bg-brand-bg border border-brand-border rounded p-1 w-1/2 text-white"
                            />
                            <input
                              type="text"
                              value={newMed.dose}
                              onChange={(e) => setNewMed({ ...newMed, dose: e.target.value })}
                              placeholder="Dose"
                              className="bg-brand-bg border border-brand-border rounded p-1 w-1/2 text-white"
                            />
                          </div>

                          {prescriptionList.length > 0 && (
                            <div className="max-h-[50px] overflow-y-auto space-y-1 border-t border-white/5 pt-1">
                              {prescriptionList.map((m, idx) => (
                                <div key={idx} className="flex justify-between text-gray-300">
                                  <span>{m.name} ({m.dose})</span>
                                  <span className="text-[7px] text-gray-500">{m.duration}</span>
                                </div>
                              ))}
                            </div>
                          )}

                          {prescriptionList.length > 0 && (
                            <button
                              onClick={() => {
                                setPrescDownloaded(true);
                                alert("PDF Digital prescription signed and synchronized.");
                              }}
                              className="w-full bg-brand-cyan text-brand-bg font-bold py-1 rounded text-center"
                            >
                              {prescDownloaded ? "✓ Prescriptions Signed" : "Generate Signed Rx PDF"}
                            </button>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Tab 4: Clinic Admin */}
                    {activeDashboardTab === "clinic-analytics" && (
                      <div className="flex-grow flex flex-col justify-between space-y-3.5 text-xs">
                        <div className="flex items-center justify-between border-b border-brand-border/60 pb-1">
                          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider flex items-center">
                            <Building2 className="w-3.5 h-3.5 text-brand-indigo mr-1.5" />
                            <span>Clinic Console metrics</span>
                          </span>
                          <span className="text-[8px] bg-brand-indigo/15 text-brand-indigo font-bold px-2 py-0.5 rounded-full border border-brand-indigo/10">Real-time</span>
                        </div>

                        {/* Stats grid */}
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-white/2 border border-brand-border rounded-xl p-2.5">
                            <span className="text-[8px] text-gray-500 block">Active Staff</span>
                            <span className="text-base font-extrabold text-white block">25 Doctors</span>
                          </div>
                          <div className="bg-white/2 border border-brand-border rounded-xl p-2.5">
                            <span className="text-[8px] text-gray-500 block">Total Patients</span>
                            <span className="text-base font-extrabold text-white block">10,000+</span>
                          </div>
                          <div className="bg-white/2 border border-brand-border rounded-xl p-2.5">
                            <span className="text-[8px] text-gray-500 block">Monthly Consults</span>
                            <span className="text-base font-extrabold text-white block">350</span>
                          </div>
                          <div className="bg-white/2 border border-brand-border rounded-xl p-2.5">
                            <span className="text-[8px] text-gray-500 block">Visit Copay Avg</span>
                            <span className="text-base font-extrabold text-white block">$128</span>
                          </div>
                        </div>

                        {/* Retention */}
                        <div className="glass-panel border border-brand-border rounded-xl p-2.5 flex items-center justify-between bg-white/[0.01]">
                          <div>
                            <p className="text-[8px] text-gray-500 font-bold uppercase">Patient Retention</p>
                            <p className="text-xs font-bold text-white mt-0.5">82%</p>
                          </div>
                          <div className="h-1.5 w-1/2 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full w-[82%] bg-gradient-to-r from-brand-cyan to-brand-indigo rounded-full" />
                          </div>
                        </div>

                        <div className="text-[9px] text-gray-500 text-center bg-brand-bg/50 border border-brand-border rounded-lg p-2 flex items-center justify-center gap-1">
                          <Info className="w-3 h-3 text-brand-cyan" />
                          <span>Console is fully compatible with institutional EHR databases.</span>
                        </div>
                      </div>
                    )}

                    {/* Navigation helper */}
                    <div className="text-[9px] text-gray-500 text-center border-t border-brand-border/60 pt-2 flex items-center justify-between mt-2">
                      <span>Click sidebar tabs to simulate workspace workflows.</span>
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
            CORE FEATURES
        ====================================== */}
        <section className="mb-28">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-cyan/10 border border-brand-cyan/20 rounded-full px-4 py-1.5 mb-4">
              <Sparkles className="w-4 h-4 text-brand-cyan" />
              <span className="text-xs font-semibold text-brand-cyan uppercase tracking-widest">Platform capabilities</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              End-to-End Clinic Ecosystem Features
            </h2>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed max-w-xl mx-auto">
              Provide a complete digital clinic workspace for patients, doctors, and admins - moving far beyond standard screen calling.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreFeatures.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="glass-panel glass-panel-hover rounded-xl p-5 border border-brand-border group flex flex-col justify-between"
              >
                <div>
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
                </div>
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
                <span className="text-xs font-semibold text-brand-cyan uppercase tracking-widest">Workspace Navigation</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-4">
                Every module clinics{" "}
                <span className="text-gradient-cyan-indigo">actually need</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                The telemedicine console is structured as a modular workspace. Each feature coordinates cleanly, with conversational AI assistance embedded throughout the provider console.
              </p>
              <div className="glass-panel rounded-xl p-5 border border-brand-border">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Telemedicine Consultation Flow</p>
                <div className="flex items-center flex-wrap gap-2">
                  {["Patient Triage", "AI Intake Brief", "WebRTC Video", "Signed Prescription", "Pharmacy Sync"].map((step, i, arr) => (
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
            AI CONSULTATION TIMELINE SHOWCASE
        ====================================== */}
        <section className="mb-28">
          <div className="text-center mb-14">
            <div className="inline-flex items-center space-x-2 bg-brand-cyan/10 border border-brand-cyan/20 rounded-full px-4 py-1.5 mb-4">
              <Activity className="w-4 h-4 text-brand-cyan" />
              <span className="text-xs font-semibold text-brand-cyan uppercase tracking-widest">Patient care timeline</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              AI Telemedicine Consultation & Care Journey
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Our timeline showcase explains how a patient leverages virtual consultations to track progress, coordinate with specialists, and manage recovery milestones.
            </p>
          </div>

          {/* Vertical timeline */}
          <div className="relative mb-10">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-brand-cyan via-brand-indigo via-amber-400 to-brand-emerald hidden lg:block" />
            <div className="space-y-6">
              {[
                {
                  year: "2023", event: "Initial Virtual Triage",
                  detail: "Patient consults doctor virtually for skin rash · Photos uploaded to EMR Vault",
                  color: "brand-cyan",
                  ai: "Intake AI matches symptoms to mild contact dermatitis. Doctor confirms and prescribes topical steroids.", category: "Triage"
                },
                {
                  year: "2024", event: "Cardiac Consultation",
                  detail: "Patient syncs blood pressure values from Apple Health · Doctor adjust beta-blocker dosage",
                  color: "brand-indigo",
                  ai: "BP telemetry trends downward by 10% post-dosage adjustment. Adherence remains high at 96%.", category: "Follow-up"
                },
                {
                  year: "2025", event: "Telemental Therapy",
                  detail: "Weekly low-latency WebRTC behavioral therapy session · Exercises synced directly to vault",
                  color: "amber-400",
                  ai: "Patient completed all cognitive exercises. Session logs private and secured under SOC 2 keys.", category: "Counseling"
                },
                {
                  year: "2026", event: "Multi-Specialty Routing",
                  detail: "Relational DB schema transfers case files to Orthopedics · Patient schedules joint checkup",
                  color: "brand-emerald",
                  ai: "Joint mobility reviews complete. Telemedicine tracking metrics flag 100% recovery compliance.", category: "Current"
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
                  {/* Indicator dot */}
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
              { icon: <Activity className="w-5 h-5" />, title: "Full Patient History", desc: "Every video consult, intake transcript, and medication change logged chronologically.", color: "brand-cyan" },
              { icon: <Brain className="w-5 h-5" />, title: "AI Symptom Analysis", desc: "Triage assistant identifies patterns and highlights clinical changes dynamically.", color: "brand-indigo" },
              { icon: <Star className="w-5 h-5" />, title: "Wearables Telemetry", desc: "Direct hardware interfaces aggregate glucose, pressure, and heart vitals.", color: "brand-emerald" },
              { icon: <Stethoscope className="w-5 h-5" />, title: "Specialist Sync", desc: "Multi-department access structures let primary doctors route files safely.", color: "amber-400" },
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
            AI ASSISTANT CHAT SHOWCASE
        ====================================== */}
        <section className="mb-28">
          <div className="glass-panel rounded-2xl border border-brand-border overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 border-r border-brand-border text-left">
                <div className="inline-flex items-center space-x-2 bg-brand-indigo/10 border border-brand-indigo/20 rounded-full px-4 py-1.5 mb-6">
                  <Brain className="w-4 h-4 text-brand-indigo" />
                  <span className="text-xs font-semibold text-brand-indigo uppercase tracking-widest">AI Intake Engine</span>
                </div>
                <h2 className="font-display font-extrabold text-3xl text-white mb-4">
                  Streamline triage with{" "}
                  <span className="text-gradient-cyan-indigo">conversational AI</span>
                </h2>
                <p className="text-gray-400 leading-relaxed mb-6">
                  The AI Pre-Consultation Engine conducts symptom interviews with patients before the call connects. Answers are organized into structured summaries synced straight to EMR records.
                </p>
                <div className="space-y-3 mb-6">
                  {[
                    { action: "Automated Symptom Checks", desc: "Identifies severity, duration, and clinical warning flags" },
                    { action: "Structured Doctor Briefs", desc: "Outputs clean patient summaries directly inside video rooms" },
                    { icon: <ShieldCheck className="w-4 h-4" />, action: "MFA & Role Isolation", desc: "Keeps conversation files encrypted, accessible only to care teams" },
                    { action: "Multi-Language Translating", desc: "Converts chats to doctors' or patients' selected language" },
                    { action: "ICD-10 Code Suggestions", desc: "Suggests appropriate diagnostic tags based on descriptions" }
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
                  <p className="text-xs text-amber-400 font-semibold">! Ethical AI Guidelines</p>
                  <p className="text-xs text-gray-400 mt-1">
                    The AI gathers patient metrics and prepares summary briefs. It does not provide diagnoses or replace professional provider decisions.
                  </p>
                </div>
              </div>

              {/* Chat interface */}
              <div className="p-10 bg-brand-bg/50">
                <div className="glass-panel rounded-2xl overflow-hidden border border-brand-border text-left">
                  <div className="px-4 py-3 border-b border-brand-border flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-cyan to-brand-indigo flex items-center justify-center">
                      <Brain className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">AI Intake Companion</p>
                      <p className="text-[10px] text-brand-emerald">* Active - Analyzing case profile</p>
                    </div>
                  </div>

                  <div className="p-4 space-y-4 min-h-[320px]">
                    <div className="flex space-x-2">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-brand-cyan to-brand-indigo flex-shrink-0 flex items-center justify-center">
                        <Brain className="w-3.5 h-3.5 text-white" />
                      </div>
                      <div className="bg-brand-cyan/10 border border-brand-cyan/15 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%]">
                        <p className="text-sm text-gray-200">Hello! I&apos;ve reviewed your booking. What skin symptoms are you experiencing today?</p>
                      </div>
                    </div>
                    <div className="flex space-x-2 justify-end">
                      <div className="bg-brand-indigo/20 border border-brand-indigo/20 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%]">
                        <p className="text-sm text-gray-200">I have a mild red rash on my arm that has been itching for 3 days.</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-brand-cyan to-brand-indigo flex-shrink-0 flex items-center justify-center">
                        <Brain className="w-3.5 h-3.5 text-white" />
                      </div>
                      <div className="bg-brand-cyan/10 border border-brand-cyan/15 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%]">
                        <p className="text-sm text-gray-200 mb-2">Got it. I have noted: Rash on forearm, duration 3 days. Are you experiencing any other symptoms, or do you have any allergies?</p>
                        <p className="text-xs font-semibold text-brand-cyan">Syncing status:</p>
                        <ul className="mt-1 space-y-1 text-xs text-gray-400">
                          <li>• Summary pre-brief synchronized to Dr. Khan</li>
                          <li>• Patient record fields updated in DB</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="px-4 py-3 border-t border-brand-border">
                    <div className="flex items-center space-x-2 glass-panel rounded-xl px-3 py-2 border border-brand-border">
                      <input type="text" placeholder="Explain symptoms..." className="flex-grow bg-transparent text-sm text-gray-300 placeholder-gray-600 outline-none" readOnly />
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
              Built for every role in the{" "}
              <span className="text-gradient-emerald-cyan">telemedicine workflow</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              {
                icon: <HeartPulse className="w-6 h-6 text-brand-cyan" />,
                iconBg: "bg-brand-cyan/10",
                title: "Patient Dashboard", route: "/patient/dashboard", color: "brand-cyan",
                items: ["Secure video room join", "Symptom pre-intake chat", "Digital prescription vault", "Wearables authorization", "Stripe payment invoices", "Family hub profile management"],
              },
              {
                icon: <Stethoscope className="w-6 h-6 text-brand-indigo" />,
                iconBg: "bg-brand-indigo/10",
                title: "Doctor Console", route: "/doctor/dashboard", color: "brand-indigo",
                items: ["Live WebRTC consultation view", "AI patient symptom pre-briefs", "Inline notes editor", "ICD-10 code selectors", "Prescription PDF signing", "FHIR patient record integrations"],
              },
              {
                icon: <Activity className="w-6 h-6 text-brand-emerald" />,
                iconBg: "bg-brand-emerald/10",
                title: "Clinic Admin Portal", route: "/admin/dashboard", color: "brand-emerald",
                items: ["Doctor slot configurations", "Uptime & call telemetry stats", "Audit logging reviews", "Multi-clinic databases", "Stripe subscription billing", "Super-admin role control"],
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
                    <li key={item} className="flex items-center space-x-2 text-sm text-gray-400">
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
              <span className="text-xs font-semibold text-brand-cyan uppercase tracking-widest">Specialty Use Cases</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              Optimized for every{" "}
              <span className="text-gradient-cyan-indigo">medical specialty</span>
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              See how the TeleCare platform structures customized workflows to support virtual clinics across varying healthcare disciplines.
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
              <span className="text-xs font-semibold text-brand-emerald uppercase tracking-widest">Clinical Security</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              Enterprise-grade WebRTC encryption,{" "}
              <span className="text-gradient-emerald-cyan">HIPAA compliance</span>
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Virtual consult sessions operate on secure networks with strict authorization layers, ensuring clinical data integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
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
                { label: "HIPAA Compliant", icon: "" },
                { label: "SOC 2 Type II Architecture", icon: "" },
                { label: "AES-256 EMR Encryption", icon: "" },
                { label: "HL7 FHIR API Interoperability", icon: "+" },
                { label: "DTLS/SRTP WebRTC Streams", icon: "" },
                { label: "Zero-Knowledge Database Model", icon: "" },
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
              <span className="text-xs font-semibold text-brand-indigo uppercase tracking-widest">EMR Integrations</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              Connects directly to your{" "}
              <span className="text-gradient-cyan-indigo">clinical ecosystem</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
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
              <span className="text-gradient-cyan-indigo">telemedicine stack</span>
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
            DATABASE SCHEMA
        ====================================== */}
        <section className="mb-28">
          <div className="glass-panel rounded-2xl p-8 border border-brand-border text-left">
            <div className="flex items-center space-x-3 mb-8">
              <Database className="w-6 h-6 text-brand-cyan" />
              <div>
                <h2 className="font-display font-bold text-2xl text-white">Database Schema Design</h2>
                <p className="text-sm text-gray-400">PostgreSQL + Prisma ORM - fully typed, migration-safe, auditable EMR structures</p>
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
              <span className="text-xs font-semibold text-brand-indigo uppercase tracking-widest">Frequently Asked Questions</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              20 questions,{" "}
              <span className="text-gradient-cyan-indigo">answered clearly</span>
            </h2>
            <p className="mt-3 text-gray-400 max-w-xl mx-auto">
              Everything you need to know about WebRTC technology, compliance rules, EMR integrations, and security standards.
            </p>
          </div>

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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Column 1: Platform & Product */}
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

            {/* Column 2: Technical & Features */}
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
                Ready to launch virtual{" "}
                <span className="text-gradient-cyan-indigo">consultations?</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
                The TeleCare AI Platform is designed for solo clinics, multi-doctor groups, dental clinics, and large hospital networks. Let&apos;s build your solution.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                <Link href="/contact" className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-brand-cyan/25">
                  <Sparkles className="w-4 h-4" />
                  <span>Launch TeleCare OS</span>
                </Link>
                <Link href="/contact" className="inline-flex items-center space-x-2 glass-panel border border-brand-border text-gray-300 font-semibold px-8 py-4 rounded-xl hover:border-brand-cyan/40 hover:text-white transition-all">
                  <Phone className="w-4 h-4" />
                  <span>Book a Discovery Call</span>
                </Link>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
                <a href="https://github.com/alimubashir822/TeleCare" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-brand-cyan transition-colors">
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
