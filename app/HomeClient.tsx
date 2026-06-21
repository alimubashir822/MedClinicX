"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Shield,
  Sparkles,
  Users,
  Search,
  Smile,
  Phone,
  Video,
  Building2,
  Brain,
  Zap,
  FileText,
  Database,
} from "lucide-react";

export default function HomeClient() {

  const solutions = [
    {
      icon: <Users className="w-6 h-6 text-brand-cyan" />,
      title: "AI Patient Portal Platform",
      desc: "A secure, AI-powered patient platform that transforms healthcare - from a simple record store into an intelligent companion that understands your complete health journey.",
      href: "/solutions/ai-patient-portal",
    },
    {
      icon: <Smile className="w-6 h-6 text-brand-cyan" />,
      title: "Smart Dental Patient Portal",
      desc: "A complete digital dental experience for patients and clinics, bringing visual treatment plan tracking, family hub, records vault, and follow-up automations.",
      href: "/solutions/smart-dental-portal",
    },
    {
      icon: <Phone className="w-6 h-6 text-brand-cyan" />,
      title: "AI Medical Receptionist System",
      desc: "An AI front-desk employee that works 24/7 for clinics - answers phone calls, books appointments, pre-qualifies patients, and manages the entire patient journey.",
      href: "/solutions/ai-medical-receptionist",
    },
    {
      icon: <Video className="w-6 h-6 text-brand-cyan" />,
      title: "Telemedicine Consultation Platform",
      desc: "A complete virtual clinic system connecting patients and doctors anywhere, offering secure video visits, digital prescriptions, and AI pre-consultation briefings.",
      href: "/solutions/telemedicine-consultation-platform",
    },
    {
      icon: <Building2 className="w-6 h-6 text-brand-cyan" />,
      title: "Virtual Clinic OS",
      desc: "A secure digital clinic platform that helps doctors deliver online care, manage patients, and grow their practice remotely.",
      href: "/solutions/virtual-clinic-os",
    },
    {
      icon: <Brain className="w-6 h-6 text-brand-cyan" />,
      title: "AI Healthcare Navigator",
      desc: "An AI-powered care navigation platform helping patients check symptoms, receive clinic routing, and match with doctors.",
      href: "/solutions/ai-healthcare-navigator",
    },
    {
      icon: <Zap className="w-6 h-6 text-brand-cyan" />,
      title: "CareFlow AI Growth CRM",
      desc: "An AI-powered growth and practice operating system that attracts patients, automates CRM pipelines, and increases clinic revenue.",
      href: "/solutions/careflow-ai",
    },
    {
      icon: <Search className="w-6 h-6 text-brand-cyan" />,
      title: "CareMatch AI Marketplace",
      desc: "An AI-powered doctor matching and booking marketplace that connects patients with doctors based on symptoms, specialty, insurance, and availability.",
      href: "/solutions/carematch-ai",
    },
    {
      icon: <Building2 className="w-6 h-6 text-brand-cyan" />,
      title: "Specialty Clinic Growth OS",
      desc: "An AI-powered clinical operations, patient journey tracker, and lead qualification CRM system built specifically for high-value specialty practices.",
      href: "/solutions/health-os",
    },
    {
      icon: <FileText className="w-6 h-6 text-brand-cyan" />,
      title: "IntakeFlow AI Onboarding",
      desc: "An AI-powered patient intake, digital consent e-signing, and insurance verification system that prepares clinical teams before a patient arrives.",
      href: "/solutions/intake-flow",
    },
    {
      icon: <Database className="w-6 h-6 text-brand-cyan" />,
      title: "MediSync AI Data Platform",
      desc: "An AI-powered clinical data synchronization and middleware engine connecting EHR databases, patient portals, and health apps securely.",
      href: "/solutions/medi-sync",
    },
  ];

  const features = [
    {
      icon: <Sparkles className="w-5 h-5 text-brand-cyan" />,
      title: "Self-Improving Medical NLP",
      desc: "Our model is fine-tuned on clinical vocabulary, offering high accuracy for appointment scheduling and clinical triage questions.",
    },
    {
      icon: <Shield className="w-5 h-5 text-brand-cyan" />,
      title: "HIPAA & SOC2 Compliance",
      desc: "End-to-end encryption for all patient data, secure access logging, and role-based permissions standard on all plans.",
    },
    {
      icon: <Search className="w-5 h-5 text-brand-cyan" />,
      title: "Website Audit & Optimization",
      desc: "Instant search engine indexability and conversion audits tailored to increase booking volume for regional practices.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-cyan/10 rounded-full blur-[120px] -z-10 animate-pulse-slow" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-brand-indigo/5 rounded-full blur-[140px] -z-10" />

      {/* 1. Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-10 pb-20 md:py-28 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 bg-brand-cyan/10 border border-brand-cyan/20 rounded-full px-4.5 py-1.5 mb-8"
        >
          <Sparkles className="w-4.5 h-4.5 text-brand-cyan animate-spin" style={{ animationDuration: "3s" }} />
          <span className="text-xs font-semibold tracking-wide text-brand-cyan uppercase">
            Introducing Med Clinic X 2.0
          </span>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-none max-w-5xl mx-auto"
        >
          Build The Future Of Healthcare With <span className="text-gradient-cyan-indigo">AI</span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-base sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
        >
          AI-powered patient portals, automated digital receptionists, high-performance websites, and clinical workflows built to scale modern medical practices.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <Link
            href="/demo"
            className="w-full sm:w-auto bg-gradient-to-r from-brand-cyan to-brand-indigo hover:from-brand-cyan/95 hover:to-brand-indigo/95 text-white font-semibold px-8 py-4 rounded-xl shadow-xl shadow-brand-cyan/10 active:scale-[0.98] transition-all flex items-center justify-center space-x-2"
          >
            <span>Explore Live Demos</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/demo?tab=roi"
            className="w-full sm:w-auto glass-panel glass-panel-hover text-white font-semibold px-8 py-4 rounded-xl flex items-center justify-center space-x-2"
          >
            <span>Calculate ROI</span>
          </Link>
        </motion.div>
      </section>

      {/* 2. Trusted Partner Section */}
      <section className="border-y border-brand-border bg-brand-bg/40 py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs font-semibold tracking-wider text-gray-500 uppercase font-display">
            Trusted by modern medical institutions & regional clinics
          </p>
          <div className="flex flex-wrap items-center gap-8 md:gap-12 opacity-50 grayscale hover:grayscale-0 hover:opacity-80 transition-all duration-300">
            <span className="text-white font-display font-bold text-sm tracking-wide">METRO GENERAL</span>
            <span className="text-white font-display font-bold text-sm tracking-wide">EXPRESS CLINIC</span>
            <span className="text-white font-display font-bold text-sm tracking-wide">APEX HEALTH</span>
            <span className="text-white font-display font-bold text-sm tracking-wide">SILICON VALE MEDICAL</span>
          </div>
        </div>
      </section>

      {/* 3. Healthcare Solutions Overview */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white">
            Integrated AI Systems Built For Medical Growth
          </h2>
          <p className="mt-4 text-sm md:text-base text-gray-400 leading-relaxed">
            Eliminate receptionist fatigue, decrease missed appointments, and provide a fluid portal experience for your patients.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {solutions.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="glass-panel glass-panel-hover p-8 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-bg/50 border border-brand-border flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">{item.desc}</p>
              </div>
              <Link
                href={item.href}
                className="text-brand-cyan hover:text-brand-cyan/80 text-sm font-semibold flex items-center space-x-1.5 mt-auto group"
              >
                <span>Learn more about this solution</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 4. AI Features Showcase */}
      <section className="bg-brand-bg/40 border-y border-brand-border relative z-10 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-brand-cyan/15 rounded-full px-3 py-1 mb-6">
              <Shield className="w-4 h-4 text-brand-cyan" />
              <span className="text-xs font-semibold tracking-wide text-brand-cyan uppercase">Enterprise Security</span>
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white leading-tight">
              Clinical-Grade Technology & Industry Standard Compliance
            </h2>
            <p className="mt-4 text-sm md:text-base text-gray-400 leading-relaxed">
              We design our applications from the ground up to support medical protocols. From HIPAA compliant database storage to strict data isolation, we ensure your patient information is protected.
            </p>

            <div className="mt-8 space-y-6">
              {features.map((item, idx) => (
                <div key={idx} className="flex space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{item.title}</h4>
                    <p className="text-xs md:text-sm text-gray-400 leading-relaxed mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Screen Simulation */}
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-brand-cyan to-brand-indigo opacity-30 blur-lg" />
            <div className="relative glass-panel rounded-2xl overflow-hidden p-6 aspect-video flex flex-col justify-between">
              <div className="flex items-center justify-between border-b border-brand-border pb-4 mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="text-xs text-gray-500 font-mono">receptionist-agent-terminal.mdcx</div>
                <div className="w-4 h-4 rounded bg-brand-cyan/20" />
              </div>
              <div className="flex-grow space-y-4 font-mono text-xs overflow-y-auto text-gray-300 pr-2">
                <div className="text-gray-500">{"// AI receptionist initialized in suite 10A..."}</div>
                <div className="flex items-start space-x-2">
                  <span className="text-brand-cyan">[Patient]:</span>
                  <span>Hello, my name is John Doe and I need to book a cardiology appointment.</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-brand-indigo">[Agent]:</span>
                  <span className="text-brand-cyan animate-pulse">
                    Scanning Dr. Jenkins&apos; availability... I have tomorrow at 10:00 AM or Friday at 2:00 PM. Which works best?
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-brand-cyan">[Patient]:</span>
                  <span>Tomorrow at 10:00 AM is perfect.</span>
                </div>
                <div className="flex items-start space-x-2 text-brand-emerald">
                  <span>[System]:</span>
                  <span>Appointment provisioned. Triggering SMS verification. Saving record to SQLite database...</span>
                </div>
              </div>
              <div className="mt-4 border-t border-brand-border pt-4 flex justify-between items-center text-xs text-gray-500">
                <span>Latency: 120ms</span>
                <span>Accuracy: 99.8%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Action Call Section (CTA) */}
      <section className="max-w-7xl mx-auto px-6 pb-20 md:pb-28 relative z-10">
        <div className="relative rounded-3xl overflow-hidden p-8 md:p-16 text-center border border-brand-border bg-gradient-cyber">
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-brand-cyan/10 rounded-full blur-[90px] -z-10" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-brand-indigo/10 rounded-full blur-[90px] -z-10" />
          
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white leading-tight">
            Ready to Transition Your Clinic?
          </h2>
          <p className="mt-4 text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
            Book a consulting session with our healthcare solutions team to discuss integrations with your existing systems and see customized demos.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="mailto:consultation@medclinicx.com?subject=Consultation%20Request"
              className="w-full sm:w-auto bg-white hover:bg-gray-100 text-brand-bg font-semibold px-8 py-4 rounded-xl shadow-lg transition-transform active:scale-[0.98]"
            >
              Book Consultation
            </Link>
            <Link
              href="/demo"
              className="w-full sm:w-auto glass-panel glass-panel-hover text-white font-semibold px-8 py-4 rounded-xl flex items-center justify-center space-x-2"
            >
              <span>Explore Demos</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
