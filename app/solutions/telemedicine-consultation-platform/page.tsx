"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Sparkles, Brain, HeartPulse, FileText, Calendar,
  Shield, Users, Activity, CheckCircle, Star,
  TrendingUp, Lock, Bell, ChevronDown,
  Globe, Database, Server, Clock,
  Building2, ShieldCheck, Video, VideoOff, Volume2, Plus, Info
} from "lucide-react";

/* --- Interfaces --- */
interface Feature { icon: React.ReactNode; title: string; desc: string; badge?: string; }
interface FAQ { q: string; a: string; }

/* =======================================================
   DATA
 ======================================================= */

const coreFeatures: Feature[] = [
  { icon: <Video className="w-5 h-5" />, title: "Secure Video Consultation", desc: "HIPAA-compliant, low-latency WebRTC video engine supporting inline medical charting, screen sharing, and real-time patient vitals tracking.", badge: "Flagship" },
  { icon: <Brain className="w-5 h-5" />, title: "AI Pre-Consultation Assistant", desc: "Before the call begins, the AI interviews the patient to gather symptoms, duration, and history, generating an structured overview summary for the physician.", badge: "Unique" },
  { icon: <FileText className="w-5 h-5" />, title: "Digital Prescription Builder", desc: "Allows doctors to select medications, set dosage levels, and generate signed PDF prescriptions directly from the call screen.", badge: "Smart" },
  { icon: <Calendar className="w-5 h-5" />, title: "Intelligent Booking Engine", desc: "Select doctor, visit type (video, follow-up, emergency), and pay via Stripe - auto-updates schedules and sends calendar invites." },
  { icon: <ShieldCheck className="w-5 h-5" />, title: "Medical Record Vault (EMR)", desc: "Centralized database for histories, vaccine cards, diagnostic test PDFs, and past consultations, fully encrypted with strict access controls." },
  { icon: <Users className="w-5 h-5" />, title: "Family Health Accounts", desc: "Allows patients to manage records, bookings, and alerts for spouses, children, and elderly parents under a single dashboard.", badge: "New" },
  { icon: <Activity className="w-5 h-5" />, title: "Remote Patient Monitoring", desc: "Integrate glucose, blood pressure, and heart rate data from wearable devices. Doctors see trends on an interactive timeline chart." },
  { icon: <Globe className="w-5 h-5" />, title: "Multi-Language Translation", desc: "Real-time AI voice translation for global consultations - doctor speaks English, patient understands Spanish, Urdu, or Arabic." },
  { icon: <Bell className="w-5 h-5" />, title: "Smart Follow-Up Engine", desc: "Automated care triggers: sends recovery instructions on Day 1, wellness checks on Day 7, and schedule reminders on Day 30." }
];

const stats = [
  { value: "50ms", label: "Video Latency (WebRTC)", icon: <Video className="w-5 h-5" /> },
  { value: "100%", label: "HIPAA & SOC2 Compliant", icon: <Shield className="w-5 h-5" /> },
  { value: "4-6 Min", label: "Doctor Session Prep Saved", icon: <Brain className="w-5 h-5" /> },
  { value: "92%", label: "Patient Care Adherence", icon: <CheckCircle className="w-5 h-5" /> },
  { value: "14+", label: "Prisma Database Entities", icon: <Database className="w-5 h-5" /> },
  { value: "350+", label: "Monthly Visits / Clinic Avg", icon: <TrendingUp className="w-5 h-5" /> }
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

const prismaSchemaCode = `// prisma/schema.prisma

model User {
  id        String   @id @default(uuid())
  email     String   @unique
  name      String
  role      String   // ADMIN, DOCTOR, PATIENT
  createdAt DateTime @default(now())
  
  patient   Patient?
  doctor    Doctor?
}

model Doctor {
  id           String        @id @default(uuid())
  userId       String        @unique
  user         User          @relation(fields: [userId], references: [id], onDelete: Cascade)
  specialty    String
  experience   Int
  languages    String        // Comma-separated list
  availability String        // JSON string of schedules
  appointments Appointment[]
}

model Patient {
  id             String          @id @default(uuid())
  userId         String          @unique
  user           User            @relation(fields: [userId], references: [id], onDelete: Cascade)
  medicalHistory String          @default("")
  records        MedicalRecord[]
  prescriptions  Prescription[]
  appointments   Appointment[]
}

model Appointment {
  id          String        @id @default(uuid())
  patientId   String
  patient     Patient       @relation(fields: [patientId], references: [id])
  doctorId    String
  doctor      Doctor        @relation(fields: [doctorId], references: [id])
  date        DateTime
  type        String        // VIDEO, FOLLOW_UP, EMERGENCY
  status      String        // PENDING, CONFIRMED, COMPLETED
  payment     Payment?
  consultation Consultation?
}

model Consultation {
  id             String        @id @default(uuid())
  appointmentId  String        @unique
  appointment    Appointment   @relation(fields: [appointmentId], references: [id])
  notes          String        // Clinical notes
  aiSummary      String        // AI auto-generated summary
  prescription   Prescription?
  videoSession   VideoSession?
}

model VideoSession {
  id             String       @id @default(uuid())
  consultationId String       @unique
  consultation   Consultation @relation(fields: [consultationId], references: [id])
  sessionUrl     String
  duration       Int          // in seconds
  recordingUrl   String?
}

model MedicalRecord {
  id         String   @id @default(uuid())
  patientId  String
  patient    Patient  @relation(fields: [patientId], references: [id])
  title      String
  category   String   // LAB_REPORT, X_RAY, ECG, HISTORY
  fileUrl    String
  uploadedAt DateTime @default(now())
}

model Prescription {
  id             String       @id @default(uuid())
  patientId      String
  patient        Patient      @relation(fields: [patientId], references: [id])
  consultationId String       @unique
  consultation   Consultation @relation(fields: [consultationId], references: [id])
  medications    String       // JSON string of meds details
  createdAt      DateTime     @default(now())
}

model Payment {
  id            String      @id @default(uuid())
  appointmentId String      @unique
  appointment   Appointment @relation(fields: [appointmentId], references: [id])
  amount        Int
  status        String      // PENDING, SUCCEEDED, REFUNDED
  stripeId      String      @unique
}`;

const techStack = [
  { category: "Frontend Core", items: ["Next.js 15 (App Router)", "TypeScript", "Tailwind CSS", "Framer Motion", "shadcn/ui"], icon: <Globe className="w-5 h-5 text-brand-cyan" /> },
  { category: "Video & Comms", items: ["WebRTC protocol", "Daily.co SDK / Zoom SDK", "Twilio SMS", "SendGrid Email"], icon: <Video className="w-5 h-5 text-brand-indigo" /> },
  { category: "Backend & Database", items: ["Next.js Server Actions", "PostgreSQL", "Prisma ORM", "Next.js API Routes"], icon: <Database className="w-5 h-5 text-brand-emerald" /> },
  { category: "Security & AI", items: ["Auth.js / Clerk", "AES-256 field encryption", "OpenAI GPT-4o API", "AWS S3 / Cloudflare R2"], icon: <Lock className="w-5 h-5 text-amber-400" /> }
];

const roadmap = [
  {
    phase: "Phase 1: MVP Core",
    status: "Completed",
    items: [
      "Role-based secure authentication & profiles",
      "Doctor directory discovery engine",
      "Appointment calendar booking calendar",
      "Basic Patient & Doctor dashboards"
    ]
  },
  {
    phase: "Phase 2: Video & Records",
    status: "Completed",
    items: [
      "Secure WebRTC video consult workspace integration",
      "Digital prescription PDF generation & signing",
      "Medical records health vault uploads",
      "Stripe payment gateway integration"
    ]
  },
  {
    phase: "Phase 3: AI & Automation",
    status: "Active",
    items: [
      "AI Pre-Consultation intake assistant",
      "AI Consultation Summary report creation",
      "Smart follow-up automation system",
      "Clinic analytics & metrics dashboard"
    ]
  }
];

const faqs: FAQ[] = [
  { q: "Is the video communication HIPAA compliant?", a: "Yes. The platform utilizes end-to-end encrypted WebRTC streams for all video sessions. Daily.co/Twilio configurations sign Business Associate Agreements (BAAs), ensuring no video or chat data is accessible by third parties." },
  { q: "How does the AI Pre-Consultation Assistant work?", a: "Before the call connects, the AI companion interviews the patient about symptoms, severity, and medical history. It synthesizes this into a concise Doctor Brief, which is shared directly on the doctor's screen to save session time." },
  { q: "Can doctors sign digital prescriptions?", a: "Yes. The platform provides a digital signature input inside the Doctor Workspace. Prescriptions are generated as cryptographically secured, tamper-evident PDFs, which patients can download or forward to pharmacies." },
  { q: "What happens if a patient is using a different language?", a: "The AI Translation Engine translates live chat and speech. If a doctor speaks English and the patient speaks Spanish, Urdu, or Arabic, transcripts and voice briefs are auto-translated in real-time." },
  { q: "Can this solution integrate with existing hospital EHR systems?", a: "Yes. The platform is designed with HL7 FHIR APIs, allowing it to read and write records to major EMR/EHR systems like Epic, Cerner, or custom databases." }
];

/* =======================================================
   COMPONENT
 ======================================================= */
export default function TelemedicinePlatformPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  // Interactive Dashboard States
  const [activeTab, setActiveTab] = useState("pre-consult");
  
  // Tab 1: Pre-Consult State
  const [preConsultStep, setPreConsultStep] = useState(0);
  const [patientInput, setPatientInput] = useState("");
  const [chatLog, setChatLog] = useState<Array<{ sender: "ai" | "user", text: string }>>([
    { sender: "ai", text: "Hello! I am your TeleCare AI Companion. What symptoms are you experiencing today?" }
  ]);
  const [chatLoading, setChatLoading] = useState(false);
  const [aiReportGenerated, setAiReportGenerated] = useState(false);

  // Tab 2: Doctor Search State
  const [filterSpecialty, setFilterSpecialty] = useState("All");
  const [selectedDoctorForBooking, setSelectedDoctorForBooking] = useState<string | null>(null);
  const [bookingStep, setBookingStep] = useState(0);
  const [bookingType, setBookingType] = useState("Video Consultation");
  const [bookingTime, setBookingTime] = useState("Today, 4:00 PM");

  // Tab 3: Video Consult Workspace States
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [consultNotes, setConsultNotes] = useState("Patient reports mild rash on lower arm. Initiating assessment.");
  const [prescriptionList, setPrescriptionList] = useState<Array<{ name: string, dose: string, duration: string, instructions: string }>>([]);
  const [newMed, setNewMed] = useState({ name: "Amoxicillin", dose: "500mg", duration: "7 Days", instructions: "After meals" });
  const [prescDownloaded, setPrescDownloaded] = useState(false);

  // Handlers
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
      {/* Ambient backgrounds */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
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

        {/* =======================================================
           HERO SECTION
        ======================================================= */}
        <section className="relative mb-24 pt-8 md:pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left: Text & Pitch */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 flex flex-col space-y-6 text-left"
            >
              <div className="inline-flex items-center space-x-2 self-start bg-gradient-to-r from-brand-cyan/15 to-brand-indigo/15 border border-brand-cyan/20 rounded-full px-4 py-1.5 shadow-lg shadow-brand-cyan/5">
                <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full animate-pulse" />
                <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest">TeleCare AI Platform</span>
                <Sparkles className="w-3 h-3 text-brand-cyan animate-pulse" />
              </div>

              <h1 className="font-display font-extrabold text-3xl sm:text-4xl xl:text-5xl text-white leading-[1.15] tracking-tight">
                Virtual Healthcare.<br />
                <span className="text-gradient-cyan-indigo">Secure Video. AI Briefs.</span><br />
                Connected <span className="text-gradient-emerald-cyan">End-To-End.</span>
              </h1>

              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                A complete digital clinic platform connecting patients and doctors anywhere. Provide low-latency video visits, digital prescriptions, EMR health vaults, and automated follow-ups in one secure, HIPAA-compliant ecosystem.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-bold px-8 py-4 rounded-xl hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-brand-cyan/25 text-sm"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Book Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center space-x-2 glass-panel border border-brand-border text-gray-300 font-semibold px-8 py-4 rounded-xl hover:border-brand-cyan/40 hover:text-white hover:scale-[1.02] active:scale-[0.98] transition-all text-sm"
                >
                  <Users className="w-3.5 h-3.5 text-brand-cyan" />
                  <span>Join as Doctor</span>
                </Link>
              </div>

              <div className="flex flex-wrap gap-2.5 pt-4">
                {[
                  { icon: <Shield className="w-3.5 h-3.5 text-brand-emerald" />, label: "HIPAA Compliant", bg: "bg-brand-emerald/10 border-brand-emerald/20" },
                  { icon: <Lock className="w-3.5 h-3.5 text-brand-cyan" />, label: "End-to-End Encrypted", bg: "bg-brand-cyan/10 border-brand-cyan/20" },
                  { icon: <Activity className="w-3.5 h-3.5 text-brand-indigo" />, label: "WebRTC Video", bg: "bg-brand-indigo/10 border-brand-indigo/20" },
                ].map((t) => (
                  <div key={t.label} className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full border ${t.bg}`}>
                    {t.icon}
                    <span className="text-[10px] font-semibold text-gray-300">{t.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Interactive OS Simulator */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-7 relative"
            >
              <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-cyan to-brand-indigo rounded-2xl blur-xl opacity-20 transition-all duration-1000 -z-10" />
              
              <div className="glass-panel rounded-2xl border border-brand-border overflow-hidden bg-brand-bg/90">
                
                {/* Top header navigation */}
                <div className="border-b border-brand-border px-5 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white/2">
                  <div className="flex items-center space-x-2">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-brand-cyan to-brand-indigo flex items-center justify-center shadow shadow-brand-cyan/25">
                      <HeartPulse className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <span className="font-display font-bold text-white text-xs tracking-wide block">TeleCare AI Portal</span>
                      <span className="text-[8px] text-gray-500 font-mono">WORKSPACE OS v2.4</span>
                    </div>
                  </div>

                  {/* Tabs select */}
                  <div className="flex bg-brand-bg/50 border border-brand-border p-0.5 rounded-lg text-[10px] font-semibold">
                    <button
                      onClick={() => setActiveTab("pre-consult")}
                      className={`px-2.5 py-1 rounded transition-colors ${activeTab === "pre-consult" ? "bg-brand-cyan text-brand-bg font-bold" : "text-gray-400 hover:text-white"}`}
                    >
                      AI Pre-Intake
                    </button>
                    <button
                      onClick={() => setActiveTab("doc-search")}
                      className={`px-2.5 py-1 rounded transition-colors ${activeTab === "doc-search" ? "bg-brand-cyan text-brand-bg font-bold" : "text-gray-400 hover:text-white"}`}
                    >
                      Doctor Search
                    </button>
                    <button
                      onClick={() => setActiveTab("video-consult")}
                      className={`px-2.5 py-1 rounded transition-colors ${activeTab === "video-consult" ? "bg-brand-cyan text-brand-bg font-bold" : "text-gray-400 hover:text-white"}`}
                    >
                      Video Consult
                    </button>
                    <button
                      onClick={() => setActiveTab("clinic-analytics")}
                      className={`px-2.5 py-1 rounded transition-colors ${activeTab === "clinic-analytics" ? "bg-brand-cyan text-brand-bg font-bold" : "text-gray-400 hover:text-white"}`}
                    >
                      Clinic Admin
                    </button>
                  </div>
                </div>

                {/* Dashboard display space */}
                <div className="p-5 min-h-[420px] max-h-[460px] overflow-y-auto flex flex-col justify-between">
                  
                  {/* --- TAB 1: AI PRE-CONSULTATION --- */}
                  {activeTab === "pre-consult" && (
                    <div className="flex-grow flex flex-col justify-between space-y-4">
                      <div className="flex items-center justify-between border-b border-brand-border/60 pb-2">
                        <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-wider flex items-center">
                          <Brain className="w-3.5 h-3.5 text-brand-cyan animate-pulse mr-1.5" />
                          <span>Pre-Appointment AI Chat</span>
                        </span>
                        <span className="text-[8px] bg-brand-cyan/15 text-brand-cyan font-bold px-2 py-0.5 rounded-full border border-brand-cyan/10">Active Session</span>
                      </div>

                      {/* Chat area */}
                      <div className="flex-grow overflow-y-auto max-h-[220px] space-y-3 pr-1 text-xs">
                        {chatLog.map((msg, i) => (
                          <div key={i} className={`flex space-x-2 ${msg.sender === "user" ? "justify-end" : ""}`}>
                            {msg.sender === "ai" && (
                              <div className="w-6 h-6 rounded-full bg-brand-cyan/20 flex items-center justify-center text-[9px] font-bold text-brand-cyan flex-shrink-0">
                                AI
                              </div>
                            )}
                            <div className={`p-2.5 rounded-xl border max-w-[80%] leading-relaxed ${
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
                            <div className="w-6 h-6 rounded-full bg-brand-cyan/20 flex items-center justify-center text-[9px] font-bold text-brand-cyan flex-shrink-0">
                              AI
                            </div>
                            <div className="bg-brand-cyan/5 border border-brand-cyan/15 rounded-xl rounded-tl-none p-2.5 text-gray-400">
                              <span className="animate-pulse">Thinking...</span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Interactive Brief Card if generated */}
                      {aiReportGenerated && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="bg-brand-emerald/10 border border-brand-emerald/20 rounded-xl p-3.5"
                        >
                          <div className="flex items-center space-x-1.5 mb-1.5">
                            <CheckCircle className="w-3.5 h-3.5 text-brand-emerald" />
                            <span className="text-[10px] text-brand-emerald font-bold uppercase">Doctor Pre-Brief Summary Generated</span>
                          </div>
                          <p className="text-[10px] text-gray-300 leading-normal">
                            <strong>Symptoms:</strong> Stomach pain after meals · <strong>Duration:</strong> 5 Days · <strong>History:</strong> Penicillin allergy, high cholesterol. This summary has been automatically synced to Dr. Sarah Khan&apos;s workspace.
                          </p>
                        </motion.div>
                      )}

                      {/* Input Form */}
                      {!aiReportGenerated && (
                        <form onSubmit={handlePreConsultSubmit} className="flex gap-2">
                          <input
                            type="text"
                            required
                            value={patientInput}
                            onChange={(e) => setPatientInput(e.target.value)}
                            disabled={chatLoading}
                            placeholder={preConsultStep === 0 ? "e.g. I have mild stomach pain after eating..." : "Answer here..."}
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
                          className="text-[10px] text-brand-cyan hover:underline text-center block"
                        >
                          Restart simulation
                        </button>
                      )}
                    </div>
                  )}

                  {/* --- TAB 2: DOCTOR DISCOVERY --- */}
                  {activeTab === "doc-search" && (
                    <div className="flex-grow flex flex-col justify-between space-y-4">
                      {bookingStep === 0 ? (
                        <>
                          {/* Search Filters Row */}
                          <div className="flex items-center justify-between border-b border-brand-border/60 pb-3">
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Available Doctors</span>
                            <div className="flex gap-1.5 text-[9px]">
                              {["All", "Dermatology", "Cardiology", "Mental Health"].map((spec) => (
                                <button
                                  key={spec}
                                  onClick={() => setFilterSpecialty(spec)}
                                  className={`px-2 py-0.5 rounded border ${
                                    filterSpecialty === spec
                                      ? "bg-brand-cyan/15 border-brand-cyan text-brand-cyan"
                                      : "border-brand-border text-gray-400 hover:text-white"
                                  }`}
                                >
                                  {spec}
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* Doctors List */}
                          <div className="space-y-2.5 overflow-y-auto max-h-[260px] pr-1">
                            {mockDoctors
                              .filter((doc) => filterSpecialty === "All" || doc.specialty.includes(filterSpecialty))
                              .map((doc) => (
                                <div key={doc.name} className="glass-panel border border-brand-border rounded-xl p-3.5 flex items-center justify-between hover:border-brand-cyan/30 transition-all">
                                  <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-cyan/20 to-brand-indigo/20 border border-brand-cyan/10 flex items-center justify-center font-bold text-white text-xs">
                                      {doc.image}
                                    </div>
                                    <div>
                                      <div className="flex items-center space-x-1">
                                        <p className="text-xs font-bold text-white leading-none">{doc.name}</p>
                                        <span className="text-[8px] bg-brand-cyan/10 text-brand-cyan px-1.5 py-0.2 rounded font-bold">{doc.availability}</span>
                                      </div>
                                      <p className="text-[10px] text-gray-500 mt-1">{doc.specialty} · {doc.experience} Exp</p>
                                      <div className="flex items-center space-x-1.5 mt-1 text-[9px] text-gray-400">
                                        <div className="flex text-amber-400">
                                          {Array.from({ length: 5 }).map((_, idx) => (
                                            <Star key={idx} className="w-2.5 h-2.5 fill-current" />
                                          ))}
                                        </div>
                                        <span>({doc.reviews})</span>
                                        <span>·</span>
                                        <span>{doc.languages}</span>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="text-right">
                                    <p className="text-xs font-bold text-white">{doc.price}</p>
                                    <button
                                      onClick={() => {
                                        setSelectedDoctorForBooking(doc.name);
                                        setBookingStep(1);
                                      }}
                                      className="mt-2 bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-bold text-[9px] px-3 py-1.5 rounded-lg hover:opacity-90 transition-all"
                                    >
                                      Book Call
                                    </button>
                                  </div>
                                </div>
                              ))}
                          </div>
                        </>
                      ) : (
                        // Booking flow step
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4 py-2">
                          <h4 className="text-xs font-bold text-white border-b border-brand-border/60 pb-2">
                            Book Consultation with {selectedDoctorForBooking}
                          </h4>

                          <div className="space-y-3 text-xs">
                            {/* Visit Type */}
                            <div className="space-y-1">
                              <label className="text-[10px] text-gray-500 font-bold uppercase">Appointment Type</label>
                              <div className="grid grid-cols-3 gap-2">
                                {["Video Consultation", "Follow-up", "Emergency"].map((t) => (
                                  <button
                                    key={t}
                                    type="button"
                                    onClick={() => setBookingType(t)}
                                    className={`p-2 rounded-lg border text-center font-semibold text-[10px] ${
                                      bookingType === t ? "bg-brand-cyan/15 border-brand-cyan text-brand-cyan" : "border-brand-border text-gray-400 hover:text-white"
                                    }`}
                                  >
                                    {t}
                                  </button>
                                ))}
                              </div>
                            </div>

                            {/* Booking time */}
                            <div className="space-y-1">
                              <label className="text-[10px] text-gray-500 font-bold uppercase">Select Availability</label>
                              <div className="grid grid-cols-2 gap-2">
                                {["Today, 4:00 PM", "Tomorrow, 10:00 AM"].map((time) => (
                                  <button
                                    key={time}
                                    type="button"
                                    onClick={() => setBookingTime(time)}
                                    className={`p-2.5 rounded-lg border text-center font-semibold text-[10px] ${
                                      bookingTime === time ? "bg-brand-cyan/15 border-brand-cyan text-brand-cyan" : "border-brand-border text-gray-400 hover:text-white"
                                    }`}
                                  >
                                    {time}
                                  </button>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Submit booking */}
                          <div className="flex gap-3 justify-end pt-4 border-t border-brand-border/60">
                            <button
                              onClick={() => setBookingStep(0)}
                              className="text-[10px] text-gray-400 hover:text-white font-semibold"
                            >
                              Back
                            </button>
                            <button
                              onClick={() => {
                                alert(`Booking confirmed with ${selectedDoctorForBooking} for ${bookingTime} (${bookingType}).`);
                                setBookingStep(0);
                                setSelectedDoctorForBooking(null);
                              }}
                              className="bg-brand-cyan text-brand-bg font-bold text-[10px] px-4 py-2 rounded-xl"
                            >
                              Confirm & Pay $75
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  )}

                  {/* --- TAB 3: VIDEO CONSULTATION WORKSPACE --- */}
                  {activeTab === "video-consult" && (
                    <div className="flex-grow flex flex-col md:flex-row gap-4 h-full">
                      {/* Left: Video feed simulation (60% width on md) */}
                      <div className="md:w-7/12 bg-[#0a0f1d] border border-brand-border rounded-xl p-3 flex flex-col justify-between relative overflow-hidden aspect-video md:aspect-auto md:h-full">
                        <div className="flex items-center justify-between border-b border-white/5 pb-2 text-[9px] text-gray-500">
                          <span className="flex items-center gap-1.5">
                            <Video className="w-3.5 h-3.5 text-brand-cyan" />
                            <span className="text-white font-semibold">Live Room MDCX-4912</span>
                          </span>
                          <span className="bg-rose-500/10 text-rose-500 border border-rose-500/20 px-2 py-0.2 rounded font-bold animate-pulse">Live</span>
                        </div>

                        {/* Simulated video view */}
                        <div className="flex-grow flex items-center justify-center relative my-4 bg-white/2 rounded-lg border border-white/5 overflow-hidden">
                          {isVideoOn ? (
                            <div className="text-center">
                              <div className="w-16 h-16 rounded-full bg-brand-cyan/20 flex items-center justify-center font-bold text-brand-cyan text-lg mx-auto mb-2">
                                PS
                              </div>
                              <p className="text-xs font-bold text-white">Patient: John Smith</p>
                              <p className="text-[9px] text-gray-500 mt-1">Connecting WebRTC Stream (50ms latency)</p>
                            </div>
                          ) : (
                            <div className="text-center text-gray-500">
                              <VideoOff className="w-8 h-8 mx-auto mb-1" />
                              <p className="text-[10px]">Video is disabled</p>
                            </div>
                          )}

                          {/* Doctor small thumbnail */}
                          {isVideoOn && (
                            <div className="absolute bottom-2 right-2 w-16 h-12 bg-brand-bg border border-brand-cyan/30 rounded-lg overflow-hidden flex items-center justify-center text-[9px] font-bold text-brand-cyan">
                              Dr. Sarah (You)
                            </div>
                          )}
                        </div>

                        {/* Action buttons bar */}
                        <div className="flex items-center justify-center gap-3 pt-2 border-t border-white/5">
                          <button
                            onClick={() => setIsVideoOn(!isVideoOn)}
                            className={`p-2 rounded-lg border ${isVideoOn ? "bg-brand-cyan/15 border-brand-cyan text-brand-cyan" : "bg-red-500/10 border-red-500/20 text-red-500"}`}
                          >
                            {isVideoOn ? <Video className="w-3.5 h-3.5" /> : <VideoOff className="w-3.5 h-3.5" />}
                          </button>
                          <button
                            onClick={() => setIsMuted(!isMuted)}
                            className={`p-2 rounded-lg border ${!isMuted ? "bg-white/5 border-white/10 text-gray-300" : "bg-red-500/10 border-red-500/20 text-red-500"}`}
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      {/* Right: EMR & Prescribing Sidebar (5/12 width) */}
                      <div className="md:w-5/12 flex flex-col justify-between h-full bg-[#0a0f1d] border border-brand-border rounded-xl p-3 space-y-3.5">
                        <div className="border-b border-white/5 pb-2">
                          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Clinical Workspace</p>
                        </div>

                        {/* Clinical notes input */}
                        <div className="space-y-1">
                          <label className="text-[9px] text-gray-500 font-bold uppercase">Consultation Notes</label>
                          <textarea
                            value={consultNotes}
                            onChange={(e) => setConsultNotes(e.target.value)}
                            rows={3}
                            className="w-full bg-brand-bg/50 border border-brand-border rounded-lg p-2 text-[10px] text-white placeholder-gray-600 focus:outline-none focus:border-brand-cyan resize-none"
                          />
                        </div>

                        {/* Prescription builder */}
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <label className="text-[9px] text-gray-500 font-bold uppercase">Prescribe Medication</label>
                            <button
                              onClick={handleAddMedication}
                              disabled={!newMed.name}
                              className="bg-brand-cyan/15 hover:bg-brand-cyan/20 border border-brand-cyan/20 text-brand-cyan text-[8px] font-bold px-2 py-0.5 rounded flex items-center gap-1 disabled:opacity-50"
                            >
                              <Plus className="w-2.5 h-2.5" />
                              <span>Add</span>
                            </button>
                          </div>

                          <div className="grid grid-cols-2 gap-1.5 text-[9px]">
                            <input
                              type="text"
                              value={newMed.name}
                              onChange={(e) => setNewMed({ ...newMed, name: e.target.value })}
                              placeholder="Med Name (Amoxicillin)"
                              className="bg-brand-bg/60 border border-brand-border rounded p-1.5 text-white"
                            />
                            <input
                              type="text"
                              value={newMed.dose}
                              onChange={(e) => setNewMed({ ...newMed, dose: e.target.value })}
                              placeholder="Dosage (500mg)"
                              className="bg-brand-bg/60 border border-brand-border rounded p-1.5 text-white"
                            />
                          </div>

                          {/* List of active prescriptions */}
                          {prescriptionList.length > 0 && (
                            <div className="bg-brand-bg/85 border border-brand-border rounded-lg p-2 max-h-[80px] overflow-y-auto space-y-1.5 text-[9px] text-gray-300">
                              {prescriptionList.map((m, idx) => (
                                <div key={idx} className="flex justify-between items-center border-b border-white/5 pb-1">
                                  <span><strong>{m.name}</strong> ({m.dose}) · {m.duration}</span>
                                  <span className="text-[8px] bg-white/5 px-1.5 py-0.2 rounded text-gray-500">{m.instructions}</span>
                                </div>
                              ))}
                            </div>
                          )}

                          {prescriptionList.length > 0 && (
                            <button
                              onClick={() => {
                                setPrescDownloaded(true);
                                alert("PDF digital prescription generated, signed cryptographically, and synced to Patient Health records.");
                              }}
                              className="w-full text-center bg-brand-cyan text-brand-bg font-bold text-[9px] py-1.5 rounded-lg"
                            >
                              {prescDownloaded ? "✓ Prescription Saved & PDF Synced" : "Generate Signed Prescription PDF"}
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* --- TAB 4: CLINIC ANALYTICS --- */}
                  {activeTab === "clinic-analytics" && (
                    <div className="flex-grow flex flex-col justify-between space-y-4 text-xs">
                      <div className="flex items-center justify-between border-b border-brand-border/60 pb-2">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider flex items-center">
                          <Building2 className="w-3.5 h-3.5 text-brand-indigo mr-1.5" />
                          <span>Clinic Management Dashboard</span>
                        </span>
                        <span className="text-[8px] bg-brand-indigo/15 text-brand-indigo font-bold px-2 py-0.5 rounded-full border border-brand-indigo/10">Admin Metrics</span>
                      </div>

                      {/* Analytics counters grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        <div className="bg-white/2 border border-brand-border rounded-xl p-3">
                          <span className="text-[8px] text-gray-500 block">Total Active Doctors</span>
                          <span className="text-xl font-display font-extrabold text-white block mt-0.5">25</span>
                          <span className="text-[8px] text-brand-emerald font-semibold">Full Staffing Active</span>
                        </div>
                        <div className="bg-white/2 border border-brand-border rounded-xl p-3">
                          <span className="text-[8px] text-gray-500 block">Total Patients</span>
                          <span className="text-xl font-display font-extrabold text-white block mt-0.5">10,000</span>
                          <span className="text-[8px] text-brand-emerald font-semibold">^ +15% quarterly</span>
                        </div>
                        <div className="bg-white/2 border border-brand-border rounded-xl p-3">
                          <span className="text-[8px] text-gray-500 block">Monthly Consults</span>
                          <span className="text-xl font-display font-extrabold text-white block mt-0.5">350</span>
                          <span className="text-[8px] text-brand-emerald font-semibold">94% session success</span>
                        </div>
                        <div className="bg-white/2 border border-brand-border rounded-xl p-3">
                          <span className="text-[8px] text-gray-500 block">Monthly Revenue</span>
                          <span className="text-xl font-display font-extrabold text-white block mt-0.5">$45,000</span>
                          <span className="text-[8px] text-brand-cyan font-semibold">Avg visit: $128</span>
                        </div>
                      </div>

                      {/* Retention & System uptime indicators */}
                      <div className="glass-panel border border-brand-border rounded-xl p-3.5 flex items-center justify-between bg-white/[0.01]">
                        <div>
                          <p className="text-[9px] text-gray-500 font-bold uppercase">Patient Retention Rate</p>
                          <p className="text-base font-extrabold text-white mt-0.5">82%</p>
                        </div>
                        <div className="h-1.5 w-1/2 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full w-[82%] bg-gradient-to-r from-brand-cyan to-brand-indigo rounded-full" />
                        </div>
                      </div>

                      <div className="text-[9px] text-gray-500 text-center bg-brand-bg/50 border border-brand-border rounded-lg p-2 flex items-center justify-center gap-1.5">
                        <Info className="w-3.5 h-3.5 text-brand-cyan" />
                        <span>Interactive EMR, search availability, and clinical charts are fully compatible with Epic & FHIR configurations.</span>
                      </div>
                    </div>
                  )}

                  {/* Interactive navigation info */}
                  <div className="text-[9px] text-gray-500 text-center border-t border-brand-border/60 pt-2 flex items-center justify-between mt-4">
                    <span>Click dashboard tabs in workspace header to simulate different solution workflows.</span>
                    <Brain className="w-3 h-3 text-brand-cyan" />
                  </div>

                </div>

              </div>
            </motion.div>

          </div>
        </section>

        {/* =======================================================
           STATS BAR
        ======================================================= */}
        <section className="mb-28">
          <div className="glass-panel rounded-2xl border border-brand-border p-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center space-y-1.5">
                  <div className="w-9 h-9 rounded-xl bg-brand-cyan/5 border border-brand-cyan/15 text-brand-cyan flex items-center justify-center mx-auto mb-1">
                    {stat.icon}
                  </div>
                  <h4 className="text-xl sm:text-2xl font-display font-extrabold text-white tracking-tight">{stat.value}</h4>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =======================================================
           CORE FEATURES
        ======================================================= */}
        <section className="mb-28">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display font-bold text-2xl sm:text-4xl text-white">
              End-to-End Clinic Ecosystem Features
            </h2>
            <p className="text-sm text-gray-400 mt-3 leading-relaxed">
              Move beyond simple screen calling. Provide a complete digital clinic environment for providers, managers, and patients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreFeatures.map((f) => (
              <div
                key={f.title}
                className="glass-panel p-6 border border-brand-border hover:border-brand-cyan/35 rounded-2xl flex flex-col justify-between transition-all group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 text-brand-cyan flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    {f.icon}
                  </div>
                  <h3 className="font-display font-bold text-white text-base mb-2 flex items-center gap-2">
                    <span>{f.title}</span>
                    {f.badge && (
                      <span className="text-[9px] bg-brand-cyan/10 text-brand-cyan font-bold border border-brand-cyan/25 rounded px-2 py-0.5">
                        {f.badge}
                      </span>
                    )}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =======================================================
           DATABASE DESIGN & PRISMA MODELS
        ======================================================= */}
        <section className="mb-28 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 text-left space-y-6">
            <div className="inline-flex items-center space-x-2 bg-brand-indigo/15 border border-brand-indigo/25 rounded-full px-3 py-1">
              <Database className="w-4 h-4 text-brand-indigo" />
              <span className="text-[10px] font-bold text-brand-indigo uppercase tracking-wider">Database Architecture</span>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-4xl text-white leading-tight">
              Production-Grade Relational Schema
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              We design robust relational models optimized for clinical SaaS platforms. The schema supports strict data isolation, role constraints, consultation session mapping, document tracking, and secure transactions.
            </p>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-brand-emerald" />
                <span>Fully typed relation mapping between Patients, Doctors, and Bookings</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-brand-emerald" />
                <span>Isolated structures for private EMR medical vault files and prescriptions</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-brand-emerald" />
                <span>WebRTC room session links tied directly to consultation logs for audits</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl overflow-hidden border border-brand-border shadow-2xl relative">
              {/* Code Editor Header */}
              <div className="bg-brand-bg px-5 py-3 border-b border-brand-border flex items-center justify-between text-xs text-gray-500 font-mono">
                <span className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-brand-indigo" />
                  <span>schema.prisma</span>
                </span>
                <span className="bg-white/5 border border-white/10 px-2 py-0.5 rounded text-[10px] text-gray-400 font-bold uppercase">
                  Prisma Code
                </span>
              </div>
              <pre className="p-5 bg-[#050b14] overflow-x-auto text-xs font-mono text-cyan-400/90 leading-relaxed text-left max-h-[380px] overflow-y-auto">
                <code>{prismaSchemaCode}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* =======================================================
           TECH STACK & ROADMAP
        ======================================================= */}
        <section className="mb-28 grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Tech Stack List */}
          <div className="glass-panel p-8 border border-brand-border rounded-2xl flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center space-x-2.5 mb-6">
                <Server className="w-5 h-5 text-brand-cyan" />
                <h3 className="font-display font-bold text-white text-lg">Next.js Platform Stack</h3>
              </div>
              
              <div className="space-y-6">
                {techStack.map((stack) => (
                  <div key={stack.category} className="flex gap-4">
                    <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-white/2 border border-white/5 flex items-center justify-center mt-0.5">
                      {stack.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">{stack.category}</h4>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {stack.items.map((item) => (
                          <span key={item} className="bg-white/2 border border-white/5 text-gray-400 text-[10px] px-2 py-0.5 rounded-md font-semibold">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Development Roadmap */}
          <div className="glass-panel p-8 border border-brand-border rounded-2xl flex flex-col justify-between text-left bg-gradient-to-br from-brand-bg/80 to-brand-indigo/5">
            <div>
              <div className="flex items-center space-x-2.5 mb-6">
                <Clock className="w-5 h-5 text-brand-indigo animate-pulse" />
                <h3 className="font-display font-bold text-white text-lg">Platform Development Roadmap</h3>
              </div>

              <div className="space-y-6">
                {roadmap.map((phase) => (
                  <div key={phase.phase} className="relative pl-6 border-l border-brand-border/60">
                    <div className="absolute top-1.5 -left-1.5 w-3 h-3 rounded-full bg-brand-cyan shadow shadow-brand-cyan/50" />
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="text-sm font-bold text-white leading-tight">{phase.phase}</h4>
                      <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${
                        phase.status === "Completed"
                          ? "bg-brand-emerald/10 border-brand-emerald/20 text-brand-emerald"
                          : "bg-brand-cyan/10 border-brand-cyan/20 text-brand-cyan"
                      }`}>
                        {phase.status}
                      </span>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[10px] text-gray-400 mt-2 list-none">
                      {phase.items.map((item) => (
                        <li key={item} className="flex items-center gap-1.5">
                          <CheckCircle className="w-3.5 h-3.5 text-brand-emerald flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </section>

        {/* =======================================================
           FAQ SECTION
        ======================================================= */}
        <section className="mb-24 max-w-4xl mx-auto text-left">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">Frequently Asked Questions</h2>
            <p className="text-xs text-gray-500 mt-2">Answers to compliance, video technology, and security queries.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="glass-panel border border-brand-border rounded-xl overflow-hidden transition-all bg-white/2">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left px-5 py-4 flex justify-between items-center text-sm font-semibold text-white hover:text-brand-cyan transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${openFaq === idx ? "rotate-180 text-brand-cyan" : ""}`} />
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className="px-5 pb-5 pt-1 text-xs text-gray-400 leading-relaxed border-t border-brand-border/40">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        {/* =======================================================
           CTA / CONVERSION BANNER
        ======================================================= */}
        <section className="relative rounded-3xl overflow-hidden p-8 sm:p-12 md:p-16 border border-brand-cyan/25 bg-gradient-cyber shadow-2xl text-center max-w-5xl mx-auto">
          <div className="absolute -top-12 -left-12 w-32 h-32 bg-brand-cyan/10 rounded-full blur-[40px] pointer-events-none" />
          <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-brand-indigo/10 rounded-full blur-[40px] pointer-events-none" />

          <div className="max-w-2xl mx-auto space-y-6 relative">
            <div className="inline-flex items-center space-x-2 bg-brand-cyan/15 rounded-full px-3 py-1 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
              <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-wider">Start Your Telemedicine Shift</span>
            </div>

            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight leading-tight">
              Ready to Launch an AI-Powered Virtual Clinic?
            </h2>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Empower your clinical practices with low-latency virtual consultations, automated patient triage interviews, and secure digital prescription workflows.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-brand-cyan to-brand-indigo hover:from-brand-cyan/95 hover:to-brand-indigo/95 text-white font-bold text-sm px-8 py-4 rounded-xl shadow-lg shadow-brand-cyan/15 hover:scale-[1.01] active:scale-[0.99] transition-all"
              >
                <span>Launch TeleCare OS</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="https://github.com/alimubashir822/TeleCare"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center glass-panel hover:bg-brand-cyan/10 border border-brand-border hover:border-brand-cyan/25 text-xs sm:text-sm font-semibold text-gray-300 hover:text-white px-8 py-4 rounded-xl transition-all"
              >
                View Repository Core
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
