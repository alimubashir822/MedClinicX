"use client";

import { 
  ExternalLink, 
  Sparkles, 
  Activity,
  Shield,
  Fingerprint,
  Database
} from "lucide-react";

interface DemoItem {
  id: string;
  name: string;
  tag: string;
  desc: string;
  url: string;
  githubUrl: string;
  techStack: string[];
  features: string[];
}

export default function DemoPage() {
  const demos: DemoItem[] = [
    {
      id: "patient-iq",
      name: "Patient IQ",
      tag: "EHR Sync & Imaging",
      desc: "A unified portal enabling patients to view diagnostics, consult securely with care providers, manage installment plans, and access physical files.",
      url: "https://patient-iq.vercel.app/",
      githubUrl: "https://github.com/alimubashir822/PatientIQ",
      techStack: ["Next.js", "Tailwind CSS", "Prisma"],
      features: ["Interactive DICOM scans", "Milestone Installment Plans", "Biometric Authentication Simulator"]
    },
    {
      id: "smile-os",
      name: "Smile OS",
      tag: "Dental & Aesthetics",
      desc: "Sleek, clinical portal tailored for dental networks and aesthetic surgeons. Offers patient check-ins, treatment tracking, and clinic forms.",
      url: "https://smile-os-theta.vercel.app/",
      githubUrl: "https://github.com/alimubashir822/SmileOS",
      techStack: ["Vite", "React", "Vanilla CSS"],
      features: ["Custom Treatment Schedules", "Visual Intraoral Map", "Paperless Intakes Integrator"]
    },
    {
      id: "caredesk",
      name: "CareDesk",
      tag: "Care Delivery & Automation",
      desc: "An intelligent clinician control desk alongside an automated AI receptionist chatbot to triage symptom streams, recall checkups, and auto-refill schedules.",
      url: "https://caredesk-sigma.vercel.app/",
      githubUrl: "https://github.com/alimubashir822/CareDesk",
      techStack: ["React", "WebRTC", "Clinical LLMs"],
      features: ["Intelligent Patient Triage Queue", "Live Chat Sync", "Vitals Telemetry Monitors"]
    }
  ];

  return (
    <div className="min-h-screen bg-brand-bg pt-24 md:pt-28 pb-16 relative overflow-hidden">
      {/* Background ambient elements */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-10 left-1/4 w-[500px] h-[500px] bg-brand-indigo/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-brand-cyan/15 rounded-full px-3.5 py-1 mb-5">
            <Activity className="w-4 h-4 text-brand-cyan animate-pulse" />
            <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-wider">Live Showroom</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight leading-tight">
            Interactive Healthcare Product Demonstrations
          </h1>
          <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
            Test and interact with our production-ready dental portals, hospital EHR systems, and triage management desks in simulated real-time browser contexts.
          </p>
        </div>

        {/* Demo Selector Panel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {demos.map((demo) => {
            return (
              <div
                key={demo.id}
                className="glass-panel p-6 rounded-2xl border border-brand-border hover:border-brand-cyan/25 flex flex-col justify-between transition-all hover:scale-[1.01] hover:shadow-lg hover:shadow-brand-cyan/5"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] font-bold text-brand-cyan uppercase tracking-wider bg-brand-cyan/10 border border-brand-cyan/20 px-2.5 py-0.5 rounded-full">
                      {demo.tag}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-white">
                    {demo.name}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {demo.desc}
                  </p>
                </div>

                <div>
                  <div className="mt-5 pt-3 border-t border-brand-border/50 flex flex-wrap gap-1.5">
                    {demo.techStack.map((tech) => (
                      <span key={tech} className="text-[9px] font-semibold text-gray-500 bg-brand-bg/50 px-2 py-0.5 rounded border border-brand-border">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-brand-border/50 grid grid-cols-2 gap-3">
                    <a
                      href={demo.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex justify-center items-center gap-2 bg-gradient-to-r from-brand-cyan to-brand-indigo hover:opacity-95 text-white font-bold text-xs py-3 px-4 rounded-xl transition-all shadow-md shadow-brand-cyan/10"
                    >
                      <span>View Project</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={demo.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex justify-center items-center gap-2 bg-brand-bg/60 border border-brand-border hover:border-brand-cyan/30 text-gray-300 hover:text-white font-bold text-xs py-3 px-4 rounded-xl transition-all"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                      <span>GitHub Link</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom checklist key features block */}
        <section className="mt-20">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center space-x-2 bg-brand-cyan/15 rounded-full px-3.5 py-1 mb-4 border border-brand-cyan/20">
              <Sparkles className="w-3.5 h-3.5 text-brand-cyan animate-pulse" />
              <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest">Enterprise Architecture</span>
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-400/90 tracking-tight leading-tight">
              Engineered Core Integration Features
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-gray-400 leading-relaxed font-normal">
              Each portal utilizes next-generation standards configured specifically for security, conversion optimization, and lightweight browser integration.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Shield className="w-5 h-5 text-emerald-400" />,
                iconBg: "bg-emerald-500/10 border-emerald-500/20",
                title: "Row-Level Database Security",
                desc: "Isolated schemas structured so clinic tenants cannot read cross-tenant charts.",
                badge: "Isolated Schema",
                badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
                shadowClass: "hover:shadow-[0_0_30px_rgba(16,185,129,0.08)]",
                borderColor: "hover:border-emerald-500/30"
              },
              {
                icon: <Fingerprint className="w-5 h-5 text-purple-400" />,
                iconBg: "bg-purple-500/10 border-purple-500/20",
                title: "One-Tap Biometric Gateways",
                desc: "Mobile layout integrations designed to support FaceID/TouchID local browser authentication.",
                badge: "FaceID / TouchID",
                badgeColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
                shadowClass: "hover:shadow-[0_0_30px_rgba(168,85,247,0.08)]",
                borderColor: "hover:border-purple-500/30"
              },
              {
                icon: <Activity className="w-5 h-5 text-amber-400" />,
                iconBg: "bg-amber-500/10 border-amber-500/20",
                title: "WebRTC Streaming Engines",
                desc: "Secure peer-to-peer audio-video pathways allowing low-latency telehealth consults.",
                badge: "Low-latency Video",
                badgeColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
                shadowClass: "hover:shadow-[0_0_30px_rgba(245,158,11,0.08)]",
                borderColor: "hover:border-amber-500/30"
              },
              {
                icon: <Database className="w-5 h-5 text-brand-cyan" />,
                iconBg: "bg-brand-cyan/10 border-brand-cyan/20",
                title: "HL7 FHIR API Interoperability",
                desc: "Pre-mapped ingestion pathways reading records straight from epic or cerner databanks.",
                badge: "Epic & Cerner Sync",
                badgeColor: "text-brand-cyan bg-brand-cyan/10 border-brand-cyan/20",
                shadowClass: "hover:shadow-[0_0_30px_rgba(6,182,212,0.08)]",
                borderColor: "hover:border-brand-cyan/30"
              }
            ].map((feature, i) => (
              <div 
                key={i}
                className={`glass-panel p-6 rounded-2xl border border-brand-border flex flex-col justify-between transition-all hover:-translate-y-1 hover:scale-[1.01] hover:shadow-lg ${feature.shadowClass} ${feature.borderColor}`}
              >
                <div>
                  <div className={`w-10 h-10 rounded-xl ${feature.iconBg} border flex items-center justify-center`}>
                    {feature.icon}
                  </div>
                  <h3 className="font-display font-bold text-base text-white mb-2 mt-4 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed font-normal mb-6">
                    {feature.desc}
                  </p>
                </div>
                <div>
                  <span className={`inline-block text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${feature.badgeColor}`}>
                    {feature.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
