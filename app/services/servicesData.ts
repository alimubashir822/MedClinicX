export interface ServiceProp {
  title: string;
  desc: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  category: string;
  headline: string;
  summary: string;
  iconName: "Laptop" | "Brain" | "LayoutDashboard" | "Server" | "Video" | "Clock" | "Smartphone" | "Search";
  valueProps: ServiceProp[];
  techHighlight: {
    language: string;
    title: string;
    code: string;
  };
  comparison: {
    metric: string;
    traditional: string;
    medclinicx: string;
  }[];
  statValue: string;
  statLabel: string;
}

export const servicesData: Record<string, ServiceDetail> = {
  "healthcare-websites": {
    id: "healthcare-websites",
    title: "Healthcare Websites",
    category: "Web Engineering",
    headline: "Modern Clinic & Hospital Websites Built for High-Performance Growth",
    summary: "We design and engineer lightning-fast clinic and hospital websites optimized to convert visitors into patients, rank high on local Google Maps, and sync with your EHR booking databases.",
    iconName: "Laptop",
    statValue: "99/100",
    statLabel: "Average Lighthouse Speed Score",
    valueProps: [
      { title: "Local Map Search Domination", desc: "Built with structured local clinic schema markup to guarantee ranking for regional proximity queries." },
      { title: "HIPAA Compliant Intakes", desc: "All patient contact and booking forms utilize AES-256 field encryption and route securely to EHR endpoints." },
      { title: "EHR Sync Integrations", desc: "Pre-integrates scheduling widgets from top health platforms like Zocdoc, PatientPoint, or custom APIs." }
    ],
    techHighlight: {
      language: "json",
      title: "Medical Clinic Structured JSON-LD Schema",
      code: `{
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "name": "Med Clinic X Houston",
  "image": "https://medclinicx.com/assets/logo.png",
  "medicalSpecialty": "PrimaryCare",
  "currenciesAccepted": "USD",
  "paymentAccepted": "Cash, Credit Card, Insurance",
  "openingHours": "Mo-Fr 08:00-18:00"
}`
    },
    comparison: [
      { metric: "Mobile Speed Index", traditional: "5.8 Seconds (Average)", medclinicx: "1.2 Seconds (Static HTML)" },
      { metric: "Patient Conversions", traditional: "2.4% Average", medclinicx: "7.8% (Conversion Optimized)" },
      { metric: "Local Search Visibility", traditional: "Unindexed / Maps Page 3", medclinicx: "Top 3 local Map-Pack rankings" }
    ]
  },
  "ai-healthcare-solutions": {
    id: "ai-healthcare-solutions",
    title: "AI Healthcare Solutions",
    category: "Artificial Intelligence",
    headline: "Clinical LLMs and AI Medical Receptionists for Patient Care",
    summary: "Fine-tune LLM pipelines on your clinical data guidelines to automate symptom triage queues, answer portal messages 24/7, and generate physician briefs.",
    iconName: "Brain",
    statValue: "74%",
    statLabel: "Reduction in Intake Response Delay",
    valueProps: [
      { title: "Conversational Patient Triage", desc: "AI receptionists evaluate symptoms, suggest emergency alerts, and direct users to appropriate appointments." },
      { title: "Automated Doctor Briefings", desc: "Synthesizes patient intake questionnaires into standard chief-complaint templates before examinations." },
      { title: "Zero Data Retention Boundary", desc: "Model queries process through dedicated HIPAA private cloud boundaries, ensuring no data feeds public training." }
    ],
    techHighlight: {
      language: "typescript",
      title: "Clinical LLM Classification Gateway",
      code: `export async function classifyIntake(symptoms: string) {
  const result = await model.complete({
    prompt: \`Triage symptoms and label priority: \${symptoms}\`,
    format: "json"
  });
  return result.priority; // ROUTINE | URGENT | EMERGENCY
}`
    },
    comparison: [
      { metric: "Triage Capacity", traditional: "Limited by phone staff hours", medclinicx: "24/7 Unlimited Simultaneous Triage" },
      { metric: "Data Extraction", traditional: "Manual EHR copy by receptionist", medclinicx: "Immediate structured FHIR pushing" },
      { metric: "Error Rates", traditional: "Manual entry typo prone", medclinicx: "Verified clinical model checks" }
    ]
  },
  "patient-portal-development": {
    id: "patient-portal-development",
    title: "Patient Portal Development",
    category: "Portal Systems",
    headline: "Unified Patient Portal Dashboards Connecting Records & Billing",
    summary: "Build clinical front doors that empower patients to access imaging scans, review prescription details, chat securely with nurses, and pay in installments.",
    iconName: "LayoutDashboard",
    statValue: "82%",
    statLabel: "Patient Adoption Activation Rate",
    valueProps: [
      { title: "FHIR Diagnostic Imaging Vaults", desc: "Integrate panoramic X-rays, 3D CBCT scans, and clinical galleries directly with patient charts." },
      { title: "Phase-Based Installment Billing", desc: "Break up complex treatment schedules into automated Stripe billing phases and deductibles." },
      { title: "HIPAA Message Scoping", desc: "Encrypted direct messaging between patients and clinical caretakers, utilizing secure file lockers." }
    ],
    techHighlight: {
      language: "typescript",
      title: "Secure Signed DICOM X-ray Retrieval",
      code: `export async function getXrayUrl(patientId: string, scanId: string) {
  // Generates short-lived, encrypted AWS S3 URL
  return await s3.getSignedUrlPromise('getObject', {
    Bucket: 'secure-clinic-scans',
    Key: \`\${patientId}/\${scanId}.dcm\`,
    Expires: 60 // Expire in 60 seconds
  });
}`
    },
    comparison: [
      { metric: "X-ray Access", traditional: "Physical CD-ROM or mail print", medclinicx: "Instant secure browser DICOM viewer" },
      { metric: "Payment Collections", traditional: "Paper invoicing / collection calls", medclinicx: "Auto-debit milestone installments" },
      { metric: "Access Auditing", traditional: "Paper logs (Vulnerable)", medclinicx: "Append-only cryptographic access log" }
    ]
  },
  "healthcare-saas-development": {
    id: "healthcare-saas-development",
    title: "Healthcare SaaS Development",
    category: "SaaS Engineering",
    headline: "Secure Multi-Tenant Medical Software & SaaS Engineering",
    summary: "Develop scalable multi-tenant platforms, EHR wrappers, and clinical analytics systems conforming to ISO 27001 data safeguards.",
    iconName: "Server",
    statValue: "100%",
    statLabel: "EHR API Interoperability Compliance",
    valueProps: [
      { title: "Isolated Tenant DB Architecture", desc: "Guarantees physical clinical data separation to eliminate cross-tenant leakage risks." },
      { title: "Restful HL7 FHIR APIs", desc: "Build gateways that safely write and retrieve records from epic, cerner, or local EHR databases." },
      { title: "ISO 27001 Compliance Core", desc: "Engineered from day one to easily clear institutional hospital security audits." }
    ],
    techHighlight: {
      language: "sql",
      title: "Multi-Tenant Data Scoping Isolation Policy",
      code: `-- Force PostgreSQL Row Level Security (RLS)
ALTER TABLE patient_records ENABLE ROW LEVEL SECURITY;

CREATE POLICY tenant_isolation_policy ON patient_records
    USING (clinic_tenant_id = current_setting('app.current_tenant_id'));`
    },
    comparison: [
      { metric: "Data Separation", traditional: "Shared schema without safety policies", medclinicx: "Postgres RLS + Tenant Isolated DBs" },
      { metric: "Integrations", traditional: "Custom file dumping scripts", medclinicx: "HL7 FHIR API endpoints standard" },
      { metric: "Security Certification", traditional: "Weeks of manual documentation review", medclinicx: "Audit-ready compliance packages" }
    ]
  },
  "telemedicine-solutions": {
    id: "telemedicine-solutions",
    title: "Telemedicine Solutions",
    category: "Care Delivery",
    headline: "Secure Virtual Consultations & Telehealth Telemetry Gateways",
    summary: "Deploy low-latency, WebRTC video consultation setups integrated with medical telemetry sensors for remote chronic disease care.",
    iconName: "Video",
    statValue: "< 150ms",
    statLabel: "Average Video Gateway Latency",
    valueProps: [
      { title: "Encrypted WebRTC Consultations", desc: "HD video calls streaming directly in browser using peer-to-peer data encryption protocols." },
      { title: "Vitals Telemetry gateway", desc: "Ingests readings from Bluetooth scales, smartwatches, and prescribed glucose monitors." },
      { title: "Digital Prescription Signatures", desc: "Integrates with e-prescribing networks to push orders to pharmacies during video calls." }
    ],
    techHighlight: {
      language: "typescript",
      title: "Bluetooth Telemetry Payload Validation",
      code: `export function processGlucoseReading(mgDl: number) {
  if (mgDl < 70 || mgDl > 250) {
    triggerAlert("Critical glucose threshold warning!");
  }
  return saveReading(mgDl);
}`
    },
    comparison: [
      { metric: "Connection Delay", traditional: "Need to install third-party plugins", medclinicx: "One-click native browser WebRTC" },
      { metric: "Data Context", traditional: "Physician guesses patient state", medclinicx: "Live vitals telemetry dashboards" },
      { metric: "Prescription Flow", traditional: "Doctor emails PDF script (Insecure)", medclinicx: "API pharmacy routing instantly" }
    ]
  },
  "healthcare-automation": {
    id: "healthcare-automation",
    title: "Healthcare Automation",
    category: "Automation",
    headline: "Autopilot Patient Reminders & Practice Recalls Scheduler",
    summary: "Eliminate manual reminder calls by using AI-driven SMS campaigns that calculate cancellation risks and fill slots dynamically.",
    iconName: "Clock",
    statValue: "68%",
    statLabel: "Reduction in Patient No-Show Rates",
    valueProps: [
      { title: "No-Show Machine Learning", desc: "Predicts which bookings are high no-show risks and triggers early confirmation checks." },
      { title: "Auto-Refill Appointment Queue", desc: "Instantly offers canceled slots to patients waitlisted for hygiene checkups." },
      { title: "Automated Recall Flows", desc: "Periodically loops patients back for standard preventative checkups (6-month recalls)." }
    ],
    techHighlight: {
      language: "typescript",
      title: "No-Show Risk Analysis Algorithm",
      code: `export function predictNoShowRisk(patientHistory: number[], distance: number) {
  const missedRatios = patientHistory.filter(status => status === 0).length / patientHistory.length;
  // returns risk factor percentage
  return (missedRatios * 0.7) + (distance > 20 ? 0.3 : 0.0);
}`
    },
    comparison: [
      { metric: "Recall Outreach", traditional: "Staff calls patients manually (8hrs/wk)", medclinicx: "Autopilot background SMS scheduler" },
      { metric: "Cancellation Recovery", traditional: "Slot stays open / Lost practice revenue", medclinicx: "Instant SMS waitlist refilling" },
      { metric: "Staff Hours Reclaimed", traditional: "0 hours (constant calls)", medclinicx: "Up to 12 administrative hours saved weekly" }
    ]
  },
  "mobile-healthcare-apps": {
    id: "mobile-healthcare-apps",
    title: "Mobile Healthcare Apps",
    category: "Mobile Systems",
    headline: "Responsive Progressive Web Apps & Native Mobile Builds",
    summary: "Engage patients on mobile devices with PWAs and native iOS/Android portals that sync medical records and telemetry offline.",
    iconName: "Smartphone",
    statValue: "4.8/5",
    statLabel: "Average App Store User Rating",
    valueProps: [
      { title: "Biometric Secure Logging", desc: "Supports TouchID, FaceID, or simple passcode logins for instant clinical data retrieval." },
      { title: "Offline Records Synchronization", desc: "Caches important vitals history and medical logs locally on devices for access anywhere." },
      { title: "Push Notification Reminders", desc: "Send direct notifications for aligner steps, medication schedules, or virtual calls." }
    ],
    techHighlight: {
      language: "typescript",
      title: "PWA Service Worker Offline Cache Register",
      code: `self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('vitals-cache-v1').then((cache) => {
      return cache.addAll(['/my-records', '/offline-summary']);
    })
  );
});`
    },
    comparison: [
      { metric: "Setup Friction", traditional: "Slow app store downloads required", medclinicx: "PWA single-tap home screen install" },
      { metric: "Connectivity", traditional: "Page crashes if patient has bad cell signal", medclinicx: "Offline cache retrieves records" },
      { metric: "Logins", traditional: "Confusing username / password reset cycle", medclinicx: "Single-tap FaceID / TouchID auth" }
    ]
  },
  "healthcare-seo-growth": {
    id: "healthcare-seo-growth",
    title: "Healthcare SEO & Growth",
    category: "Growth & SEO",
    headline: "Medical Local SEO & Strategic Patient Intake Funnel Design",
    summary: "Acquire patients organically by dominating local Google searches, maps local-packs, and automated patient reviews.",
    iconName: "Search",
    statValue: "3.2x",
    statLabel: "Increase in Organic Practice Leads",
    valueProps: [
      { title: "Local Maps Optimization", desc: "Optimizes clinic directory listings to claim high map listings in target counties." },
      { title: "Review Acquisition Loops", desc: "Sends automated post-visit text prompts asking patients for feedback on Google Business profiles." },
      { title: "Dynamic Lead Capture", desc: "Pairs search results with tailored landing pages and instant appointment bookings." }
    ],
    techHighlight: {
      language: "json",
      title: "Local Business Search Schema",
      code: `{
  "@context": "https://schema.org",
  "@type": "Physician",
  "name": "Dr. Sarah Jenkins",
  "medicalSpecialty": "Pediatrician",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "789 Care Ln",
    "addressLocality": "Houston",
    "addressRegion": "TX"
  }
}`
    },
    comparison: [
      { metric: "Leads Acquisition Cost", traditional: "$80 - $120 via Paid Google Ads", medclinicx: "$12 - $18 via Organic SEO funnel" },
      { metric: "Review Volume", traditional: "Spontaneous reviews (Often negative)", medclinicx: "Proactive automated patient feedback loops" },
      { metric: "Maps Positioning", traditional: "Hidden on maps list (Zero visibility)", medclinicx: "Top 3 Local Map Pack positioning" }
    ]
  }
};
