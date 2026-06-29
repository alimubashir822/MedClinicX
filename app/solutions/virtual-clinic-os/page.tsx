"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Sparkles, Brain, HeartPulse, FileText, Calendar,
  MessageSquare, Shield, Users, Activity, CheckCircle, Star,
  TrendingUp, Lock, Bell, ChevronDown, LayoutDashboard, Stethoscope,
  BookOpen, Globe, Database, HardDrive, Wallet, RefreshCw,
  BarChart3, Building2, Syringe, Heart, AlertTriangle, CloudUpload,
  ShieldCheck, Eye, UserCog, Video, ExternalLink
} from "lucide-react";

/* --- Types --- */
interface Feature { icon: React.ReactNode; title: string; desc: string; badge?: string; }
interface Differentiator { icon: React.ReactNode; title: string; subtitle: string; desc: string; color: string; glow: string; }
interface FAQ { q: string; a: string; }

/* =======================================================
   DATA
 ======================================================= */

const coreFeatures: Feature[] = [
  { icon: <Brain className="w-5 h-5" />, title: "Virtual Clinic OS | Med Clinic X", desc: "A smart patient onboarding system that triages symptoms, matches patients with the correct specialty, and auto-schedules appointments.", badge: "Flagship" },
  { icon: <FileText className="w-5 h-5" />, title: "AI Pre-Consultation Summary", desc: "Collects intake information automatically and builds a comprehensive clinical brief for doctors before the call starts.", badge: "Unique" },
  { icon: <Activity className="w-5 h-5" />, title: "AI SOAP Copilot", desc: "Listens to the consultation conversation in real-time, instantly drafting clinical SOAP notes, summaries, and follow-up steps.", badge: "New" },
  { icon: <Video className="w-5 h-5" />, title: "HD Telemedicine Workspace", desc: "HIPAA-compliant, high-definition video consults with integrated file sharing, patient records drawer, and real-time chat." },
  { icon: <Calendar className="w-5 h-5" />, title: "Advanced Availability Engine", desc: "Allows providers to easily set recurring office hours, breaks, buffer times, vacation days, and multi-location calendars.", badge: "Smart" },
  { icon: <Users className="w-5 h-5" />, title: "Premium Doctor Profiles", desc: "Showcases physician credentials, education, ratings, available slots, video introductions, and accepted insurances.", badge: "Premium" },
  { icon: <HeartPulse className="w-5 h-5" />, title: "Healthcare Journey Roadmap", desc: "Displays patients' treatment plans as step-by-step interactive milestones, rather than simple appointment lists." },
  { icon: <Syringe className="w-5 h-5" />, title: "Family Care Profiles", desc: "Allows primary account holders to manage profiles, medical records, and scheduling for children, parents, and spouses." },
  { icon: <MessageSquare className="w-5 h-5" />, title: "Encrypted Secure Chat", desc: "Encrypted follow-up messaging between patients and care teams to address questions safely post-consultation." },
  { icon: <Wallet className="w-5 h-5" />, title: "Stripe Billing & Invoicing", desc: "Securely processes consultation fees, manages recurring subscription memberships, generates invoices, and processes refunds." },
  { icon: <Bell className="w-5 h-5" />, title: "Care Engagement Automation", desc: "Automates post-visit emails, text messages, review collection, medication refill reminders, and follow-up appointment prompts." },
  { icon: <BarChart3 className="w-5 h-5" />, title: "Practice Growth Dashboard", desc: "Gives clinic owners and doctors deep business analytics on patient acquisition, revenue trends, and operational efficiency." },
];

const differentiators: Differentiator[] = [
  { icon: <Brain className="w-7 h-7" />, title: "AI Health Concierge", subtitle: "Beyond booking - intelligent patient triage", desc: "A patient entering the clinic is guided by an AI concierge that triages symptoms, suggests the appropriate medical specialty, and matches them with available doctors.", color: "from-brand-cyan/20 to-brand-indigo/10", glow: "rgba(6,182,212,0.15)" },
  { icon: <FileText className="w-7 h-7" />, title: "AI Pre-Consultation Summary", subtitle: "Doctors enter visits fully briefed", desc: "The AI conducts intake interviews with patients, analyzing symptoms and history. Doctors receive a structured, 1-page patient summary before starting the consultation.", color: "from-brand-indigo/20 to-purple-500/10", glow: "rgba(99,102,241,0.15)" },
  { icon: <Activity className="w-7 h-7" />, title: "AI SOAP Copilot", subtitle: "Automate clinical charting", desc: "Our speech-to-text AI captures the consultation conversation and automatically drafts medical SOAP notes, saving doctors hours of documentation every day.", color: "from-brand-emerald/20 to-brand-cyan/10", glow: "rgba(16,185,129,0.15)" },
  { icon: <TrendingUp className="w-7 h-7" />, title: "Doctor Business Intelligence", subtitle: "Analytics to grow your practice", desc: "Not just a scheduler. It tracks monthly recurring revenue, patient retention rates, popular consultation categories, and provides marketing growth triggers.", color: "from-amber-500/20 to-orange-500/10", glow: "rgba(245,158,11,0.15)" },
  { icon: <HeartPulse className="w-7 h-7" />, title: "Healthcare Journey Timeline", subtitle: "Visual treatment roadmaps", desc: "Rather than displaying isolated visits, patients see their healthcare as a step-by-step roadmap: Intake → Consultation → Treatment Plan → Follow-ups.", color: "from-rose-500/20 to-pink-500/10", glow: "rgba(244,63,94,0.15)" },
  { icon: <Users className="w-7 h-7" />, title: "Multi-Tenant Clinic Engine", subtitle: "Built for individual practices or networks", desc: "Multi-specialty dashboard for clinic owners to onboard physicians, manage payroll splits, view network-wide revenue analytics, and customize branding.", color: "from-violet-500/20 to-brand-indigo/10", glow: "rgba(139,92,246,0.15)" },
];

const portalModules = [
  { icon: <Stethoscope className="w-5 h-5" />, title: "Doctor Workspace", items: ["AI pre-appointment brief", "Integrated SOAP notes", "HD video workspace", "Availability scheduler"] },
  { icon: <LayoutDashboard className="w-5 h-5" />, title: "Patient Command Center", items: ["Intelligent care roadmap", "Upcoming virtual visits", "Family profile switching", "Direct secure messaging"] },
  { icon: <Building2 className="w-5 h-5" />, title: "Clinic Admin Portal", items: ["Doctor split configurations", "Platform-wide revenue tracking", "Custom billing rates", "Physician credential logs"] },
  { icon: <Brain className="w-5 h-5" />, title: "AI Receptionist Layer", items: ["Automatic symptom screening", "Specialist matching engine", "FAQ automated response", "Booking confirmations"] },
];

const techStack = [
  { category: "Frontend Core", items: ["Next.js 15 App Router", "TypeScript", "Tailwind CSS", "shadcn/ui", "Framer Motion"], icon: <Globe className="w-5 h-5" /> },
  { category: "Backend Engine", items: ["Next.js Server Actions", "Next.js API Handlers", "Zod Schema Validation", "React Hook Form"], icon: <HardDrive className="w-5 h-5" /> },
  { category: "Database Layer", items: ["PostgreSQL database", "Prisma ORM", "Multi-tenant tenantId scoping", "Audit logging tables"], icon: <Database className="w-5 h-5" /> },
  { category: "AI & Media Services", items: ["OpenAI GPT-4o API", "WebRTC / Daily.co", "Stripe Connect Billing", "AWS S3 HIPAA storage"], icon: <Lock className="w-5 h-5" /> },
];

const useCases = [
  {
    icon: <Video className="w-6 h-6" />,
    specialty: "Telehealth Practices",
    color: "brand-cyan",
    scenario: "Solo practitioners running a remote medical practice",
    journey: [
      "Doctor creates custom scheduling link reflecting their hours and buffer times",
      "Patient books online and submits copay via the integrated Stripe checkout",
      "Prior to the call, AI interviews the patient and drafts a pre-consult brief",
      "Video call takes place inside the browser - no external software needed",
      "AI SOAP Copilot drafts the consultation summary for the doctor's review",
      "Doctor signs off on the prescription, which is automatically saved in the patient vault"
    ],
    outcome: "Solo practitioners report saving over 12 hours per week on charting, administration, and billing."
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    specialty: "Multi-Specialty Networks",
    color: "brand-indigo",
    scenario: "Hospital network managing multiple departments and doctors",
    journey: [
      "Admin configures departments: General Medicine, Cardiology, Dermatology, etc.",
      "Doctors are added with specific roles, fee structures, and availability schedules",
      "AI Concierge triages incoming patients, routing them to the correct department doctor",
      "Admin tracks revenue split, appointment booking metrics, and active doctors",
      "Automated follow-up sequences trigger SMS surveys based on doctor rating settings",
      "Consolidated financial reporting splits payouts between clinic and physician automatically"
    ],
    outcome: "Clinic networks eliminate booking gaps, decrease no-show rates by 45%, and automate doctor scheduling payouts."
  },
  {
    icon: <Users className="w-6 h-6" />,
    specialty: "Family & Care Coordinators",
    color: "brand-emerald",
    scenario: "Families coordinating care for elderly parents or children",
    journey: [
      "Primary account holder creates child and parental sub-profiles under a single login",
      "Shared appointment dashboard displays upcoming pediatric and cardiology consultations",
      "AI reminders prompt for kid's vaccination schedules and parent's refill timelines",
      "Co-pay invoices are paid using the healthcare wallet from a single credit card",
      "Medical records, diagnostics, and doctor briefs are organized in a unified family folder",
      "Direct chat with the pediatric nurse allows quick queries without booking separate calls"
    ],
    outcome: "Family engagement rates increase, helping reduce emergency calls and improving appointment compliance by 38%."
  },
  {
    icon: <Heart className="w-6 h-6" />,
    specialty: "Mental Health Clinics",
    color: "rose-400",
    scenario: "Psychiatric and therapy clinics offering subscription-based packages",
    journey: [
      "Therapist offers starter, professional, and unlimited session subscription plans",
      "Patients sign up via monthly billing, giving them access to direct encrypted messaging",
      "Prior to sessions, patient tracks mood scores; results are shared in the clinical summary",
      "Secure virtual chat allows patients to ask follow-up questions between scheduled calls",
      "Therapist utilizes voice-to-text dictation to draft clinical progress reports post-visit",
      "System logs audit entries of document access to maintain absolute patient confidentiality"
    ],
    outcome: "Therapists double client retention by offering continuous, structured engagement and simplified plan packages."
  },
];

const securityFeatures = [
  { icon: <Lock className="w-5 h-5" />, title: "HIPAA Compliant", desc: "Designed following HIPAA standards. All protected health information (PHI) is encrypted at rest and in transit." },
  { icon: <ShieldCheck className="w-5 h-5" />, title: "Tenant Isolation", desc: "Data namespaces are partitioned at the database layer. One clinic's medical files can never leak to another tenant's system." },
  { icon: <Eye className="w-5 h-5" />, title: "Detailed Audit Logs", desc: "Every record edit, view, and document access event is logged with IP addresses and user IDs, ensuring complete traceability." },
  { icon: <UserCog className="w-5 h-5" />, title: "RBAC Controls", desc: "Role-based access controls separate permissions for doctors, admins, patients, and billing coordinators." },
  { icon: <RefreshCw className="w-5 h-5" />, title: "Data Portability", desc: "Allows instant export of health records in industry-standard formats (JSON/PDF), ensuring patient data freedom." },
  { icon: <AlertTriangle className="w-5 h-5" />, title: "Security Anomalies", desc: "Automatic login locks and security alerts for suspicious connections, mass data downloads, or IP changes." },
  { icon: <CloudUpload className="w-5 h-5" />, title: "Secure Media Storage", desc: "Consultation recordings, reports, and lab documents are stored securely with expired signature URL keys." },
  { icon: <Database className="w-5 h-5" />, title: "Database Audit Trails", desc: "Integrates automatic timestamps and history logs on user record rows, maintaining version safety." },
];

const integrations = [
  { name: "OpenAI GPT-4o", category: "AI Services", desc: "Powers the intake chatbot, clinical summaries, SOAP transcription logs, and doctor pre-brief details." },
  { name: "WebRTC / Daily.co", category: "Video Engine", desc: "Provides high-definition, encrypted, in-app video and audio consulting rooms with screen sharing." },
  { name: "Stripe Connect", category: "Billing Engine", desc: "Handles co-pay collections, subscription plans, physician split payouts, and automated invoicing." },
  { name: "Prisma & PostgreSQL", category: "Database Layer", desc: "Ensures type-safe SQL queries, robust migrations, audit schemas, and efficient transaction processing." },
  { name: "Twilio API", category: "SMS Messaging", desc: "Automates appointment alerts, verification codes, prescription updates, and urgent alerts." },
  { name: "SendGrid", category: "Email Dispatch", desc: "Manages appointment calendar links, post-consult care plans, invoice copies, and feedback loops." },
  { name: "FHIR standard API", category: "EHR Sync", desc: "Compatible with Electronic Health Record systems, allowing direct patient transfers between hospital databases." },
  { name: "Auth.js / Clerk", category: "Authentication", desc: "Manages session control, multi-factor verification, single sign-on, and secure password hashes." },
  { name: "AWS Cloud S3", category: "File Vault", desc: "Holds medical documents, prescriptions, lab panels, and patient profile details securely." },
];

const stats = [
  { value: "5+", label: "Dashboards & Views", icon: <LayoutDashboard className="w-5 h-5" /> },
  { value: "3", label: "User Roles", icon: <Users className="w-5 h-5" /> },
  { value: "15+", label: "Integrated Workflows", icon: <Activity className="w-5 h-5" /> },
  { value: "100%", label: "HIPAA Compliant", icon: <Shield className="w-5 h-5" /> },
  { value: "3", label: "MVP Roadmap Phases", icon: <TrendingUp className="w-5 h-5" /> },
  { value: "9", label: "Core Integrations", icon: <RefreshCw className="w-5 h-5" /> },
];

const faqs: FAQ[] = [
  { q: "Is the Virtual Clinic platform HIPAA-compliant?", a: "Yes. The platform is architected following strict HIPAA and SOC2 compliance rules. All Patient Health Information (PHI) is encrypted both in transit (TLS 1.3) and at rest (AES-256). We maintain complete audit logging for every single data read, write, or view action." },
  { q: "Can doctors run their own independent practice on this platform?", a: "Absolutely. Virtual Clinic OS is built as a multi-tenant SaaS. A solo practitioner can sign up, configure their custom subdomain, set their consultation rates, connect their Stripe account, and run bookings, consultations, and billing from a single platform." },
  { q: "What does the AI Pre-Consultation Summary do?", a: "Before an appointment, the AI Concierge triages the patient. It conducts a brief intake chat, asking about the duration of symptoms, location, pain scale, and past medications. It packages this into a concise medical brief automatically linked to the doctor's appointment record, saving valuable consultation time." },
  { q: "How does the AI SOAP Note Copilot work?", a: "During the telemedicine video call, the doctor can enable the AI SOAP Copilot. With patient consent, it transcribes the consult dialogue and auto-generates structured SOAP clinical notes (Subjective, Objective, Assessment, Plan). The doctor can edit and sign off on these notes, directly sync them to the patient's record, and export them." },
  { q: "How are video consultations handled?", a: "We utilize WebRTC technology integrated via Daily.co or Twilio Video. Video consulting rooms open directly within the patient portal and doctor workspace in the browser. There is no external app download required for patients or doctors. The connections are end-to-end encrypted." },
  { q: "What availability structures does the scheduler support?", a: "The Availability Engine goes far beyond simple calendar booking. Doctors can set precise working hours, specify in-person vs. remote hours, block off break times, configure appointment buffers (e.g., 10 minutes between visits), log holiday days, and sync available slots dynamically with external calendars." },
  { q: "How do Stripe payments work for clinics and doctors?", a: "We integrate Stripe Connect. When a patient books an appointment, the fee is pre-authorized. Once the consultation is completed, the payment is captured. Clinic owners can set up automated revenue splits (e.g., 80% to the doctor, 20% to the clinic platform) to distribute payouts seamlessly." },
  { q: "Can doctors prescribe medication directly through the platform?", a: "Yes. The Doctor Workspace has a built-in prescription generator. Doctors can enter drug details, dosage, instructions, and duration. Upon submission, it generates a secure, signed prescription document that patients can download as a PDF or share with a pharmacy." },
  { q: "Does the platform support subscription packages?", a: "Yes. Doctors or clinics can create subscription-based care plans. For example, a mental health therapist can offer a weekly package (e.g., $199/month for 4 text-based check-ins and 1 call). Stripe handles monthly recurring billing and automated renewals." },
  { q: "How does the AI Triage / Healthcare Navigator operate?", a: "When a patient accesses the public website, they can consult the AI Health Navigator. The patient describes their concern (e.g., 'I have skin rashes'). The AI analyzes the description, guides the patient through screening questions, matches them to the correct specialty (e.g., Dermatology), and recommends appropriate doctors." },
  { q: "Is there a patient medical history timeline?", a: "Yes. The patient portal features a visual, interactive Health Timeline. Every visit, prescription, lab panel, and lifestyle goal is organized chronologically. AI summarizes changes over time, helping patients visualize their overall healthcare journey milestones." },
  { q: "What happens to patient data if a clinic leaves the platform?", a: "Data ownership is absolute. Clinic administrators can request a complete backup export. Patient records, medical notes, billing history, and documents are bundled into HL7 FHIR-compliant JSON schemas and exported, ensuring no vendor lock-in." },
  { q: "Does the platform support family accounts?", a: "Yes. The Family Health Hub allows a primary account holder to manage profiles for dependents, children, and elderly parents. Scheduling appointments, viewing prescriptions, and uploading health records can all be managed from a unified parent account." },
  { q: "What notifications are automated?", a: "We utilize Twilio for SMS and SendGrid for emails. The platform automatically triggers: appointment confirmation links, 24-hour booking reminders, billing invoices, post-visit instructions, prescription refill notifications, and follow-up consultation reminders." },
  { q: "How long does it take to deploy Virtual Clinic OS?", a: "An MVP deployment (Phase 1, which includes doctor profiles, basic scheduling, and authentication) takes about 4-6 weeks. A complete enterprise rollout with AI diagnostics summaries, SOAP note copilots, and custom hospital integrations takes 3-4 months." },
  { q: "What EHR systems can the FHIR API sync with?", a: "Our FHIR-aligned API layer allows integration with major Electronic Health Record systems such as Epic, Cerner, and Athenahealth. Patient demographics, vitals, and diagnostic summaries can be synced securely between systems." },
  { q: "How secure is file storage for uploaded reports?", a: "Files are stored in AWS S3 buckets configured with HIPAA security protocols. Storage buckets have public access disabled. The platform accesses files using short-lived signed URLs that expire after 10 minutes to prevent unauthorized URL sharing." },
  { q: "Are there tools to help doctors grow their practice?", a: "Yes. The Practice Growth Dashboard tracks patient metrics: new registrations, patient retention rate, active subscribers, and monthly recurring revenue. It also monitors rating trends, allowing doctors to proactively optimize patient satisfaction." },
  { q: "Can a clinic owner customize the branding?", a: "Yes, clinic owners have a styling tab in their dashboard to upload logos, customize theme colors, insert legal disclosures, and establish localized clinic terms, ensuring the portal matches their practice's identity." },
  { q: "Does the AI diagnose patients?", a: "No. The AI Health Assistant is strictly a triage, routing, and summarization tool. It is not diagnostic and does not prescribe medicine. It collects data and explains terminology to prepare the patient for the physician's clinical assessment." }
];


/* =======================================================
   COMPONENT
 ======================================================= */
export default function VirtualClinicOSPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeUseCase, setActiveUseCase] = useState(0);

  // Interactive Simulator States
  const [activeTab, setActiveTab] = useState("DoctorWorkspace");
  const [selectedPatientId, setSelectedPatientId] = useState("john-smith");
  const [showTelemedicineRoom, setShowTelemedicineRoom] = useState(false);
  const [telemedicineTimer] = useState("29:54");
  const [doctorNotes, setDoctorNotes] = useState("");
  const [prescriptionForm, setPrescriptionForm] = useState({ medicine: "", dosage: "", duration: "" });
  const [prescriptionStatus, setPrescriptionStatus] = useState<"idle" | "success">("idle");
  const [soapStatus, setSoapStatus] = useState<"idle" | "drafted">("idle");

  // Triage simulator states
  const [triageChat, setTriageChat] = useState([
    { sender: "ai", text: "Hello! I am the AI Health Concierge. How are you feeling today? (Please describe your concern or select an option below)" }
  ]);
  const [triageLoading, setTriageLoading] = useState(false);
  const [triageStep, setTriageStep] = useState(1);

  // Growth Dashboard Subscription Toggle
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const patientsList = [
    {
      id: "john-smith",
      name: "John Smith",
      age: 46,
      gender: "Male",
      specialty: "Cardiology",
      time: "10:00 AM",
      status: "Ready",
      concern: "Chest tightness and fatigue for the past 5 days.",
      history: "Diagnosed with mild hypertension in 2023. Taking Lisinopril 10mg. Family history of coronary disease.",
      allergies: "Penicillin (causes hives)",
      aiBrief: {
        reason: "Sub-acute chest tightness, onset 5 days ago, aggravated by exertion.",
        duration: "5 days, progressive.",
        previousVisits: "1 visit (Nov 2025 - Routine BP check)",
        notes: "Hypertensive patient. Penicillin allergy confirmed.",
        questions: [
          "Confirm if tightness radiates to left arm, neck, or jaw.",
          "Check compliance with Lisinopril medication.",
          "Inquire about accompanying shortness of breath or diaphoresis."
        ]
      }
    },
    {
      id: "alice-johnson",
      name: "Alice Johnson",
      age: 29,
      gender: "Female",
      specialty: "Dermatology",
      time: "11:30 AM",
      status: "Scheduled",
      concern: "Dry red patches spreading on hands and forearms.",
      history: "Atopic dermatitis in childhood. No chronic medications.",
      allergies: "None reported",
      aiBrief: {
        reason: "Pruritic, erythematous patches on bilateral upper extremities.",
        duration: "2 weeks, worsening after using a new laundry detergent.",
        previousVisits: "0 visits (New Patient)",
        notes: "History of childhood eczema. No active medications.",
        questions: [
          "Assess exposure to new soaps, detergents, or cosmetics.",
          "Verify severity of pruritus (itching) and impact on sleep.",
          "Check for secondary skin changes or signs of infection."
        ]
      }
    }
  ];

  const activePatient = patientsList.find(p => p.id === selectedPatientId) || patientsList[0];

  const handleTriageAction = (question: string, answer: string, nextStep: number) => {
    if (triageLoading) return;
    setTriageChat(prev => [...prev, { sender: "patient", text: question }]);
    setTriageLoading(true);
    setTriageStep(nextStep);

    setTimeout(() => {
      setTriageChat(prev => [...prev, { sender: "ai", text: answer }]);
      setTriageLoading(false);
    }, 850);
  };

  const handleDraftSoap = () => {
    setDoctorNotes(`SUBJECTIVE:
Patient ${activePatient.name}, a ${activePatient.age}-year-old ${activePatient.gender}, presents with ${activePatient.concern.toLowerCase()} Patient reports symptoms began ${activePatient.id === "john-smith" ? "5 days" : "2 weeks"} ago.

OBJECTIVE:
Simulated vitals: BP 132/84, HR 78 bpm, Temp 98.6°F. Video consult reveals patient is alert, oriented, in no acute distress.

ASSESSMENT:
${activePatient.id === "john-smith" ? "Chest tightness, rule out angina/ischemia, secondary to history of hypertension." : "Contact dermatitis vs. flare of eczema."}

PLAN:
1. Refer for ${activePatient.id === "john-smith" ? "urgent in-clinic ECG and lipid panel screening" : "topical hydrocortisone cream 1% application"}.
2. Patient to follow up in 7 days or report immediately if symptoms worsen.
3. Automated reminders scheduled.`);
    setSoapStatus("drafted");
  };

  const handleSubmitPrescription = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prescriptionForm.medicine || !prescriptionForm.dosage) return;
    setPrescriptionStatus("success");
    setTimeout(() => {
      setPrescriptionStatus("idle");
      setPrescriptionForm({ medicine: "", dosage: "", duration: "" });
    }, 3000);
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
          <span className="text-white">Virtual Clinic OS</span>
        </div>

        {/* -- HERO SECTION -- */}
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
                <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest">Virtual Clinic Operating System</span>
                <Sparkles className="w-3 h-3 text-brand-cyan" />
              </div>

              {/* Headline */}
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl xl:text-5xl text-white leading-[1.15] tracking-tight">
                Run Your Entire<br />
                <span className="text-gradient-cyan-indigo">Digital Practice</span> On One<br />
                <span className="text-gradient-emerald-cyan">AI-Powered OS.</span>
              </h1>

              {/* Subtitle */}
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                A secure digital clinic platform that helps doctors deliver online care, automate medical charting, manage patient dashboards, and grow their practices remotely.
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
                  href="https://clinicos-two.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 glass-panel border border-brand-border text-white font-semibold px-5 py-3.5 rounded-xl hover:border-brand-cyan/40 hover:scale-[1.02] active:scale-[0.98] transition-all text-xs whitespace-nowrap"
                >
                  <Globe className="w-3.5 h-3.5 text-brand-cyan" />
                  <span>Launch Live App</span>
                </a>
                <a
                  href="https://github.com/alimubashir822/ClinicOS"
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
                  { icon: <Shield className="w-3.5 h-3.5 text-brand-emerald" />, label: "HIPAA Compliant", bg: "bg-brand-emerald/10 border-brand-emerald/20" },
                  { icon: <Lock className="w-3.5 h-3.5 text-brand-cyan" />, label: "AES-256 Secured", bg: "bg-brand-cyan/10 border-brand-cyan/20" },
                  { icon: <CheckCircle className="w-3.5 h-3.5 text-brand-indigo" />, label: "Stripe Connect Split Payouts", bg: "bg-brand-indigo/10 border-brand-indigo/20" },
                  { icon: <Star className="w-3.5 h-3.5 text-amber-400" />, label: "5.0 Rating App", bg: "bg-amber-400/10 border-amber-400/20" },
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
                      <Stethoscope className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="font-display font-bold text-white text-xs tracking-wide">Virtual Clinic OS Simulator</span>
                  </div>
                  
                  {/* Status Indicator */}
                  <div className="flex items-center space-x-2 bg-brand-cyan/10 border border-brand-cyan/25 rounded-full px-2.5 py-1">
                    <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full animate-pulse" />
                    <span className="text-[10px] text-brand-cyan font-semibold">Active Demo Environment</span>
                  </div>
                </div>

                {/* Dashboard Inner Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-brand-border h-[460px]">
                  
                  {/* Sidebar (3 cols) */}
                  <div className="md:col-span-4 p-4 space-y-1.5 bg-white/[0.01]">
                    <p className="text-[9px] text-gray-500 uppercase font-bold tracking-wider mb-2 px-2">Simulate Dashboards</p>
                    {[
                      { id: "DoctorWorkspace", label: "Doctor Workspace", icon: <Stethoscope className="w-3.5 h-3.5" /> },
                      { id: "AICongierge", label: "AI Concierge Triage", icon: <Brain className="w-3.5 h-3.5" /> },
                      { id: "GrowthDashboard", label: "Practice Growth", icon: <TrendingUp className="w-3.5 h-3.5" /> },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => {
                          setActiveTab(tab.id);
                          setShowTelemedicineRoom(false);
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
                      <p className="text-[9px] text-gray-500 uppercase font-bold tracking-wider mb-2 px-2">Clinic Operations</p>
                      <div className="flex items-center space-x-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-gray-400">
                        <Lock className="w-3.5 h-3.5" />
                        <span>HIPAA Vault</span>
                      </div>
                      <div className="flex items-center space-x-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-gray-400">
                        <Wallet className="w-3.5 h-3.5" />
                        <span>Stripe Payouts</span>
                      </div>
                    </div>
                  </div>

                  {/* Main Display (8 cols) */}
                  <div className="md:col-span-8 p-5 overflow-y-auto flex flex-col justify-between h-full bg-brand-bg/20">
                    
                    {/* Active tab: Doctor Workspace */}
                    {activeTab === "DoctorWorkspace" && !showTelemedicineRoom && (
                      <div className="space-y-4 flex-grow">
                        <div className="flex justify-between items-center">
                          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Today&apos;s Appointments</h4>
                          <span className="text-[9px] text-brand-cyan font-mono bg-brand-cyan/10 border border-brand-cyan/20 px-2 py-0.5 rounded-full">2 Patients</span>
                        </div>

                        {/* Patient Selection list */}
                        <div className="space-y-2">
                          {patientsList.map((pat) => (
                            <div 
                              key={pat.id}
                              onClick={() => setSelectedPatientId(pat.id)}
                              className={`glass-panel rounded-xl p-3 border cursor-pointer transition-all flex items-center justify-between ${
                                selectedPatientId === pat.id 
                                  ? "border-brand-cyan bg-brand-cyan/5" 
                                  : "border-brand-border hover:border-brand-cyan/35"
                              }`}
                            >
                              <div className="flex items-center space-x-3">
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${
                                  selectedPatientId === pat.id ? "bg-brand-cyan text-brand-bg" : "bg-brand-indigo/10 text-brand-indigo"
                                }`}>
                                  {pat.name.split(" ").map(n => n[0]).join("")}
                                </div>
                                <div>
                                  <p className="text-xs font-bold text-white">{pat.name} <span className="text-[10px] text-gray-400 font-normal">({pat.gender}, {pat.age})</span></p>
                                  <p className="text-[9px] text-gray-500">{pat.time} · {pat.specialty}</p>
                                </div>
                              </div>
                              <span className={`text-[8px] font-bold uppercase px-2 py-0.5 rounded-full border ${
                                pat.status === "Ready" 
                                  ? "bg-brand-emerald/10 text-brand-emerald border-brand-emerald/20 animate-pulse" 
                                  : "bg-gray-500/10 text-gray-400 border-gray-500/20"
                              }`}>
                                {pat.status}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Selected Patient Pre-Consultation AI Brief */}
                        <div className="bg-brand-indigo/5 border border-brand-indigo/15 rounded-xl p-3.5 space-y-2">
                          <div className="flex items-center space-x-1">
                            <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
                            <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-wider">AI Pre-Consult Brief: {activePatient.name}</span>
                          </div>
                          
                          <div className="text-[10px] text-gray-300 space-y-1">
                            <p><strong className="text-gray-400">Chief Complaint:</strong> {activePatient.aiBrief.reason}</p>
                            <p><strong className="text-gray-400">Duration:</strong> {activePatient.aiBrief.duration}</p>
                            <p><strong className="text-gray-400">Allergies:</strong> <span className="text-red-400">{activePatient.allergies}</span></p>
                          </div>

                          <div className="border-t border-brand-border/60 my-2 pt-2">
                            <p className="text-[9px] text-gray-500 uppercase font-bold mb-1.5">Recommended Clinical Screening Questions:</p>
                            <ul className="space-y-1">
                              {activePatient.aiBrief.questions.map((q, idx) => (
                                <li key={idx} className="flex items-start space-x-1 text-[9px] text-gray-400">
                                  <span className="text-brand-cyan mr-1">•</span>
                                  <span>{q}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <button
                            onClick={() => setShowTelemedicineRoom(true)}
                            className="w-full text-center block text-xs bg-brand-cyan hover:bg-brand-cyan/95 text-brand-bg font-bold py-2 rounded-lg transition-transform active:scale-[0.98]"
                          >
                            Launch Video Consultation Room &rarr;
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Telemedicine Video Room overlay inside Doctor Workspace */}
                    {activeTab === "DoctorWorkspace" && showTelemedicineRoom && (
                      <div className="flex flex-col h-full justify-between flex-grow space-y-3">
                        
                        {/* Video call area header */}
                        <div className="flex justify-between items-center border-b border-brand-border/60 pb-2">
                          <div className="flex items-center space-x-2">
                            <Video className="w-3.5 h-3.5 text-brand-cyan" />
                            <span className="text-[11px] font-bold text-white">Consultation with {activePatient.name}</span>
                          </div>
                          <div className="flex items-center space-x-2 bg-brand-emerald/10 border border-brand-emerald/25 rounded-full px-2 py-0.5">
                            <div className="w-1.5 h-1.5 bg-brand-emerald rounded-full animate-pulse" />
                            <span className="text-[8px] text-brand-emerald font-semibold font-mono">TIMER {telemedicineTimer}</span>
                          </div>
                        </div>

                        {/* Split consultation screen */}
                        <div className="grid grid-cols-2 gap-3 flex-grow min-h-[180px]">
                          {/* Video call simulator */}
                          <div className="relative rounded-xl bg-slate-950 border border-brand-border overflow-hidden flex flex-col justify-between p-2">
                            {/* Patient Video view */}
                            <div className="absolute inset-0 flex items-center justify-center bg-slate-900/60">
                              <div className="text-center">
                                <Users className="w-8 h-8 text-gray-500 mx-auto animate-pulse" />
                                <p className="text-[9px] text-gray-400 mt-1">{activePatient.name}</p>
                                <span className="text-[8px] text-brand-cyan font-mono block">End-to-End Encrypted</span>
                              </div>
                            </div>

                            {/* Doctor Video Thumbnail (small PIP) */}
                            <div className="relative z-10 self-end w-14 h-10 rounded border border-brand-border bg-slate-800 flex items-center justify-center text-[7px] text-gray-500 font-bold">
                              You (DR)
                            </div>
                            
                            {/* Call controls */}
                            <div className="relative z-10 flex justify-center space-x-1.5 pt-2">
                              <span className="bg-brand-bg/80 hover:bg-brand-bg border border-brand-border rounded p-1 text-white cursor-pointer text-[8px]">Mute</span>
                              <span className="bg-brand-bg/80 hover:bg-brand-bg border border-brand-border rounded p-1 text-white cursor-pointer text-[8px]">Share Screen</span>
                              <span 
                                onClick={() => setShowTelemedicineRoom(false)} 
                                className="bg-rose-600 hover:bg-rose-700 rounded px-1.5 py-1 text-white cursor-pointer text-[8px] font-bold"
                              >
                                End Consult
                              </span>
                            </div>
                          </div>

                          {/* Charting & Prescriptions panels */}
                          <div className="flex flex-col space-y-2 h-[220px] overflow-y-auto pr-1">
                            <div className="glass-panel rounded-lg p-2.5 border border-brand-border">
                              <div className="flex justify-between items-center mb-1.5">
                                <span className="text-[9px] text-brand-cyan font-bold uppercase">Clinical SOAP Notes</span>
                                <button
                                  onClick={handleDraftSoap}
                                  className="text-[8px] bg-brand-cyan/15 hover:bg-brand-cyan/20 border border-brand-cyan/35 text-brand-cyan px-2 py-0.5 rounded font-bold"
                                >
                                  {soapStatus === "drafted" ? "Update Note" : "Auto-Draft SOAP Note"}
                                </button>
                              </div>
                              <textarea
                                value={doctorNotes}
                                onChange={(e) => setDoctorNotes(e.target.value)}
                                placeholder="Type consultation notes or click Auto-Draft SOAP Note..."
                                className="w-full h-[85px] bg-brand-bg/50 border border-brand-border rounded text-[9px] p-1.5 outline-none font-mono text-gray-300 placeholder-gray-600 resize-none"
                              />
                            </div>

                            {/* Prescription Creator */}
                            <form onSubmit={handleSubmitPrescription} className="glass-panel rounded-lg p-2.5 border border-brand-border space-y-1.5">
                              <span className="text-[9px] text-brand-indigo font-bold uppercase block">Add Prescription</span>
                              <div className="grid grid-cols-2 gap-1.5">
                                <input
                                  type="text"
                                  placeholder="Medicine name"
                                  value={prescriptionForm.medicine}
                                  onChange={(e) => setPrescriptionForm({ ...prescriptionForm, medicine: e.target.value })}
                                  className="bg-brand-bg/50 border border-brand-border rounded text-[9px] px-1.5 py-1 outline-none text-white w-full"
                                />
                                <input
                                  type="text"
                                  placeholder="Dosage (e.g. 2x daily)"
                                  value={prescriptionForm.dosage}
                                  onChange={(e) => setPrescriptionForm({ ...prescriptionForm, dosage: e.target.value })}
                                  className="bg-brand-bg/50 border border-brand-border rounded text-[9px] px-1.5 py-1 outline-none text-white w-full"
                                />
                              </div>
                              <div className="flex items-center space-x-1.5">
                                <input
                                  type="text"
                                  placeholder="Duration (e.g. 7 days)"
                                  value={prescriptionForm.duration}
                                  onChange={(e) => setPrescriptionForm({ ...prescriptionForm, duration: e.target.value })}
                                  className="bg-brand-bg/50 border border-brand-border rounded text-[9px] px-1.5 py-1 outline-none text-white flex-grow"
                                />
                                <button
                                  type="submit"
                                  className="bg-brand-indigo hover:bg-brand-indigo/95 text-white font-bold text-[8px] px-2 py-1 rounded cursor-pointer"
                                >
                                  Add Drug
                                </button>
                              </div>
                              {prescriptionStatus === "success" && (
                                <p className="text-[8px] text-brand-emerald font-bold text-center">✓ Prescription signed & generated in Patient Vault</p>
                              )}
                            </form>
                          </div>
                        </div>

                        <p className="text-[8px] text-gray-500 text-center">The AI SOAP Copilot logs and transcribes audio to pre-generate medical charts dynamically.</p>
                      </div>
                    )}

                    {/* Active tab: AI Concierge Triage */}
                    {activeTab === "AICongierge" && (
                      <div className="flex flex-col h-full justify-between flex-grow">
                        <div className="flex justify-between items-center border-b border-brand-border/60 pb-2 mb-2">
                          <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-wider flex items-center space-x-1">
                            <Brain className="w-3.5 h-3.5 text-brand-cyan animate-pulse mr-1" />
                            <span>AI Triage Concierge</span>
                          </span>
                          <span className="text-[8px] text-brand-emerald font-semibold">Online Assistant</span>
                        </div>

                        {/* Conversational chatbot area */}
                        <div className="space-y-3 flex-grow overflow-y-auto max-h-[220px] pr-1 mb-2 font-sans">
                          {triageChat.map((msg, i) => (
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

                          {triageLoading && (
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
                        <div className="space-y-1.5 border-t border-brand-border/60 pt-2">
                          <p className="text-[8px] text-gray-500 font-bold uppercase tracking-wider">Select Symptom to Simulate Onboarding:</p>
                          <div className="flex flex-wrap gap-1.5">
                            {triageStep === 1 && (
                              <>
                                <button
                                  onClick={() => handleTriageAction("I have chest tightness and pain", "Understood. Chest pain is a clinical priority. Let's screen: Is the tightness radiating to your left arm or jaw, or accompanied by shortness of breath?", 2)}
                                  className="text-[9px] border border-brand-cyan/20 bg-brand-cyan/5 hover:bg-brand-cyan/10 text-brand-cyan rounded-lg px-2.5 py-1"
                                >
                                  Chest Tightness
                                </button>
                                <button
                                  onClick={() => handleTriageAction("I have red dry patches on my hands", "Got it. Dermatological flare. Let's screen: Has there been exposure to any new soap, laundry detergent, or topical chemical?", 3)}
                                  className="text-[9px] border border-brand-cyan/20 bg-brand-cyan/5 hover:bg-brand-cyan/10 text-brand-cyan rounded-lg px-2.5 py-1"
                                >
                                  Skin Rash
                                </button>
                              </>
                            )}

                            {triageStep === 2 && (
                              <>
                                <button
                                  onClick={() => handleTriageAction("No radiating pain, but I feel fatigued.", "Thank you. Based on chest tightness + fatigue, Cardiology is the recommended specialty.\n\nMatching Doctor:\n• Dr. Sarah Ahmed (Cardiologist, 12 Yrs Exp)\n• Available slot today: 10:00 AM.\n\nClick below to book.", 4)}
                                  className="text-[9px] border border-brand-cyan/20 bg-brand-cyan/5 hover:bg-brand-cyan/10 text-brand-cyan rounded-lg px-2.5 py-1"
                                >
                                  No radiating pain
                                </button>
                              </>
                            )}

                            {triageStep === 3 && (
                              <>
                                <button
                                  onClick={() => handleTriageAction("Yes, changed laundry detergent recently.", "Thank you. Exposure-based irritation. Dermatology is the recommended specialty.\n\nMatching Doctor:\n• Dr. Sarah Ahmed (Specialist Team)\n• Available slot: 11:30 AM.\n\nClick below to book.", 4)}
                                  className="text-[9px] border border-brand-cyan/20 bg-brand-cyan/5 hover:bg-brand-cyan/10 text-brand-cyan rounded-lg px-2.5 py-1"
                                >
                                  Changed laundry detergent
                                </button>
                              </>
                            )}

                            {triageStep === 4 && (
                              <button
                                onClick={() => {
                                  handleTriageAction("Confirm appointment booking.", "Perfect! Your consultation is scheduled. An intake packet has been generated. The doctor has been notified in their Doctor Workspace.", 1);
                                }}
                                className="text-[9px] border border-brand-emerald/30 bg-brand-emerald/10 hover:bg-brand-emerald/20 text-brand-emerald rounded-lg px-2.5 py-1 font-bold"
                              >
                                Confirm Booking
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Active tab: Practice Growth */}
                    {activeTab === "GrowthDashboard" && (
                      <div className="space-y-4 flex-grow">
                        <div className="flex justify-between items-center">
                          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Practice Business Metrics</h4>
                          
                          {/* Billing Cycle Toggle */}
                          <div className="flex bg-slate-900 border border-brand-border rounded-lg p-0.5 text-[8px] font-bold">
                            <button
                              onClick={() => setBillingCycle("monthly")}
                              className={`px-2 py-0.5 rounded ${billingCycle === "monthly" ? "bg-brand-cyan text-brand-bg" : "text-gray-400"}`}
                            >
                              Monthly
                            </button>
                            <button
                              onClick={() => setBillingCycle("yearly")}
                              className={`px-2 py-0.5 rounded ${billingCycle === "yearly" ? "bg-brand-cyan text-brand-bg" : "text-gray-400"}`}
                            >
                              Yearly
                            </button>
                          </div>
                        </div>

                        {/* Top analytics row */}
                        <div className="grid grid-cols-3 gap-2">
                          <div className="bg-slate-900/60 rounded-xl p-3 border border-brand-border text-center">
                            <span className="text-[8px] text-gray-500 block">MRR Revenue</span>
                            <span className="text-sm font-extrabold text-white font-mono">
                              {billingCycle === "monthly" ? "$14,820" : "$177,840"}
                            </span>
                            <span className="text-[7px] text-brand-emerald block mt-0.5">^ +12% growth</span>
                          </div>
                          <div className="bg-slate-900/60 rounded-xl p-3 border border-brand-border text-center">
                            <span className="text-[8px] text-gray-500 block">Patient Retention</span>
                            <span className="text-sm font-extrabold text-white font-mono">92%</span>
                            <span className="text-[7px] text-brand-cyan block mt-0.5">National Top 5%</span>
                          </div>
                          <div className="bg-slate-900/60 rounded-xl p-3 border border-brand-border text-center">
                            <span className="text-[8px] text-gray-500 block">Active Subscriptions</span>
                            <span className="text-sm font-extrabold text-white font-mono">32 Doctors</span>
                            <span className="text-[7px] text-brand-indigo block mt-0.5">Starter / Professional</span>
                          </div>
                        </div>

                        {/* Workflow automation list */}
                        <div className="glass-panel rounded-xl p-3 border border-brand-border space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">Engagement Automation Triggers</span>
                            <span className="text-[8px] text-brand-emerald font-semibold">* 3 Active</span>
                          </div>

                          <div className="space-y-1.5">
                            {[
                              { label: "Trigger: Consultation Completed", action: "Send post-visit care guide via SMS/email", status: "Active" },
                              { label: "Trigger: Prescription Issued", action: "Schedule prescription refill alert in 23 days", status: "Active" },
                              { label: "Trigger: Visit Completed (Day 7)", action: "Auto-request rating review link", status: "Active" }
                            ].map((w, idx) => (
                              <div key={idx} className="flex items-center justify-between text-[9px] bg-slate-900/40 p-2 rounded border border-brand-border/60">
                                <div>
                                  <p className="font-bold text-gray-300">{w.label}</p>
                                  <p className="text-gray-500 text-[8px]">{w.action}</p>
                                </div>
                                <span className="text-[7px] font-bold text-brand-emerald uppercase bg-brand-emerald/10 border border-brand-emerald/20 px-1 rounded">
                                  {w.status}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Bottom active tab navigation helper */}
                    <div className="text-[9px] text-gray-500 text-center border-t border-brand-border/60 pt-2.5 flex items-center justify-between mt-auto">
                      <span>Click left sidebar tabs to simulate different operating system features.</span>
                      <Stethoscope className="w-3.5 h-3.5 text-brand-cyan" />
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
          {/* Section header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-cyan/10 border border-brand-cyan/20 rounded-full px-4 py-1.5 mb-4">
              <Sparkles className="w-4 h-4 text-brand-cyan" />
              <span className="text-xs font-semibold text-brand-cyan uppercase tracking-widest">Platform Core Modules</span>
            </div>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-white leading-tight">
              A Complete Virtual Practice Infrastructure
            </h2>
            <p className="mt-4 text-gray-400 leading-relaxed text-sm md:text-base">
              Say goodbye to administrative headaches, scheduling splits, and manual SOAP charting. Virtual Clinic OS automates the complete lifecycle for healthcare providers.
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
            CLINIC MODULES MAP
        ====================================== */}
        <section className="mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center space-x-2 bg-brand-cyan/10 border border-brand-cyan/20 rounded-full px-4 py-1.5 mb-6">
                <LayoutDashboard className="w-4 h-4 text-brand-cyan" />
                <span className="text-xs font-semibold text-brand-cyan uppercase tracking-widest">Product Structure</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-4">
                Structured for patients, doctors,{" "}
                <span className="text-gradient-cyan-indigo">and owners</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Run an end-to-end digital practice. Triage patients automatically, matching them with doctor profiles that showcase availabilities, certifications, video bios, and accepted insurances.
              </p>
              <div className="glass-panel rounded-xl p-5 border border-brand-border">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Telemedicine Consultation Workflow</p>
                <div className="flex items-center flex-wrap gap-2">
                  {["Patient Triage Chat", "Choose Provider", "Stripe Co-Pay", "AI pre-consult brief", "Secure Video", "SOAP note draft"].map((step, i, arr) => (
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
            DIFFERENTIATORS SHOWCASE
        ====================================== */}
        <section className="mb-28">
          <div className="text-center mb-14">
            <div className="inline-flex items-center space-x-2 bg-brand-cyan/10 border border-brand-cyan/20 rounded-full px-4 py-1.5 mb-4">
              <Activity className="w-4 h-4 text-brand-cyan" />
              <span className="text-xs font-semibold text-brand-cyan uppercase tracking-widest">Why We Are Different</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              Built for automation,{" "}
              <span className="text-gradient-cyan-indigo">not just video calls</span>
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Every basic telehealth platform provides profile booking and video rooms. Virtual Clinic OS differentiates on clinical productivity, smart patient triage, and CRM automations.
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
            USE CASE SCENARIOS (SPECIALTIES)
        ====================================== */}
        <section className="mb-28">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-brand-cyan/10 border border-brand-cyan/20 rounded-full px-4 py-1.5 mb-4">
              <Building2 className="w-4 h-4 text-brand-cyan" />
              <span className="text-xs font-semibold text-brand-cyan uppercase tracking-widest">Vertically Integrated</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              Tailored for every{" "}
              <span className="text-gradient-cyan-indigo">medical business model</span>
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Our platform matches the business processes of general consults, specialized hospital branches, psychiatry packages, and dental plans.
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
                    <p className="text-xs font-bold text-brand-emerald mb-1">Measured Result</p>
                    <p className="text-sm text-gray-300">{useCases[activeUseCase].outcome}</p>
                  </div>
                </div>
                <div className="lg:col-span-2 p-8">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-5">Patient Journey Workflow</p>
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
            SECURITY & HIPAA SECURITY
        ====================================== */}
        <section className="mb-28">
          <div className="text-center mb-14">
            <div className="inline-flex items-center space-x-2 bg-brand-emerald/10 border border-brand-emerald/20 rounded-full px-4 py-1.5 mb-4">
              <Shield className="w-4 h-4 text-brand-emerald" />
              <span className="text-xs font-semibold text-brand-emerald uppercase tracking-widest">Compliance First</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              HIPAA-Aligned Infrastructure Architecture
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Our code and database logic enforce complete patient confidentiality, isolated tenants, role permissions, and access auditing.
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
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider text-center mb-5">Compliance Alignments</p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { label: "HIPAA Aligned", icon: "" },
                { label: "SOC 2 Structure", icon: "" },
                { label: "AES-256 File Keys", icon: "" },
                { label: "FHIR HL7 API Sync", icon: "" },
                { label: "Vercel GDPR Safe", icon: "" },
                { label: "Tenant Isolation", icon: "" },
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
              SaaS Development Stack
            </h2>
            <p className="mt-3 text-gray-400 max-w-xl mx-auto">
              Built on production-ready structures that auto-scale effortlessly.
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
            DATABASE SCHEMA (14 TABLES SCALAR DEFINITION)
        ====================================== */}
        <section className="mb-28">
          <div className="glass-panel rounded-2xl p-8 border border-brand-border">
            <div className="flex items-center space-x-3 mb-8">
              <Database className="w-6 h-6 text-brand-cyan" />
              <div>
                <h2 className="font-display font-bold text-2xl text-white">Database Relationships</h2>
                <p className="text-sm text-gray-400">PostgreSQL Relational DB Schema managed via Prisma ORM</p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { table: "Users", fields: ["id", "name", "email", "role (DOCTOR/PATIENT/ADMIN)", "createdAt"] },
                { table: "Doctors", fields: ["id", "userId (FK)", "specialty", "licenseNo", "clinicId (FK)", "subscriptionActive"] },
                { table: "Patients", fields: ["id", "userId (FK)", "dateOfBirth", "gender", "bloodType", "familyOwnerId"] },
                { table: "Clinics", fields: ["id", "name", "address", "planType", "ownerUserId"] },
                { table: "Appointments", fields: ["id", "patientId (FK)", "doctorId (FK)", "consultationTime", "status (PENDING/READY/COMPLETED)"] },
                { table: "Availability", fields: ["id", "doctorId (FK)", "dayOfWeek", "startTime", "endTime", "breakTimeRange"] },
                { table: "Consultations", fields: ["id", "appointmentId (FK)", "transcription", "soapNotes", "endedAt"] },
                { table: "MedicalRecords", fields: ["id", "patientId (FK)", "recordTitle", "conditionType", "dateAdded"] },
                { table: "Documents", fields: ["id", "patientId (FK)", "fileUrl (S3)", "docCategory", "aiMetadataSummary"] },
                { table: "Prescriptions", fields: ["id", "patientId (FK)", "doctorId (FK)", "medicineName", "dosageRules", "pdfSignedKey"] },
                { table: "Payments", fields: ["id", "patientId (FK)", "stripeSessionId", "amountPaid", "status", "clinicShare"] },
                { table: "Messages", fields: ["id", "senderId (FK)", "receiverId (FK)", "contentString", "timestamp"] },
                { table: "Subscriptions", fields: ["id", "doctorId (FK)", "stripeSubscriptionId", "plan (STARTER/PRO)", "status"] },
                { table: "Reviews", fields: ["id", "patientId (FK)", "doctorId (FK)", "scoreRating", "reviewText"] },
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
              Everything you need to know about the SaaS clinic system.
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
                <Stethoscope className="w-8 h-8 text-brand-cyan" />
              </div>
              
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-4">
                Attract Patients, Automate Workflows, and Scale Practice Revenue
              </h2>
              <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
                Whether you are an independent provider running a private clinic or a hospital administrator overseeing multi-specialty teams, Virtual Clinic OS streamlines your telemedicine and scheduling workflow.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
                <Link
                  href="/contact"
                  className="w-full bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-bold px-8 py-4 rounded-xl hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-brand-cyan/25 text-sm"
                >
                  Schedule Setup Call
                </Link>
                <Link
                  href="mailto:licensing@medclinicx.com"
                  className="w-full glass-panel border border-brand-border text-gray-300 font-semibold px-8 py-4 rounded-xl hover:border-brand-cyan/40 hover:text-white hover:scale-[1.02] active:scale-[0.98] transition-all text-sm"
                >
                  Contact Enterprise Sales
                </Link>
              </div>
            </div>
          </motion.div>
        </section>

      </div>
    </div>
  );
}
