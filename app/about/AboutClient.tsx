"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, Heart, Shield, Zap, Users, Brain, Globe,
  Target, Sparkles, CheckCircle, Building2, TrendingUp,
  Award, Clock, Phone,
} from "lucide-react";

const values = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Patient-First Design",
    desc: "Every feature we build starts with one question: does this make the patient's experience simpler, safer, and more empowering?",
    color: "brand-cyan",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Trust Through Transparency",
    desc: "We believe patients own their data. Full audit logs, consent-based sharing, and zero data monetization — ever.",
    color: "brand-indigo",
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "AI That Assists, Not Replaces",
    desc: "Our AI is a healthcare information assistant. It explains, reminds, and prepares — it never diagnoses or prescribes.",
    color: "brand-emerald",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Speed Without Compromise",
    desc: "Healthcare shouldn't be slow. We obsess over load times, booking flows, and AI response quality so clinics can move fast.",
    color: "amber-400",
  },
];

const milestones = [
  { year: "2022", title: "Founded", desc: "Med Clinic X was born out of frustration with outdated, fragmented patient portals that served administrators, not patients." },
  { year: "2023", title: "First Clinic Live", desc: "Launched our first AI-powered patient portal with a cardiology clinic in San Francisco. 3,000 patients onboarded in 6 weeks." },
  { year: "2024", title: "AI Layer Launched", desc: "Introduced the AI Health Companion, AI Document Reader, and AI Pre-Appointment Brief — transforming portals into intelligent companions." },
  { year: "2025", title: "10+ Clinics Powered", desc: "Expanded to dental, pediatric, and multi-specialty hospital networks. Processed over 500,000 patient interactions." },
  { year: "2026", title: "Platform 2.0", desc: "Launched the Family Health Hub, Visual Health Timeline, and Voice AI Commands. Building the future of connected healthcare." },
];

const stats = [
  { value: "500K+", label: "Patient Interactions", icon: <Users className="w-5 h-5" /> },
  { value: "10+", label: "Clinics Powered", icon: <Building2 className="w-5 h-5" /> },
  { value: "99.9%", label: "Platform Uptime", icon: <TrendingUp className="w-5 h-5" /> },
  { value: "4 yrs", label: "In Healthcare AI", icon: <Clock className="w-5 h-5" /> },
];

const team = [
  { name: "Dr. Aisha Malik", role: "Co-Founder & CEO", bg: "from-brand-cyan/20 to-brand-indigo/20", initials: "AM", expertise: "Former cardiologist, 12 years clinical practice" },
  { name: "Tariq Hassan", role: "Co-Founder & CTO", bg: "from-brand-indigo/20 to-purple-500/20", initials: "TH", expertise: "Ex-Google Health, ML & distributed systems" },
  { name: "Sara Chen", role: "Head of Product", bg: "from-brand-emerald/20 to-brand-cyan/20", initials: "SC", expertise: "Former product lead at Epic Systems" },
  { name: "Omar Al-Farsi", role: "Head of AI", bg: "from-amber-400/20 to-orange-500/20", initials: "OA", expertise: "PhD in Medical NLP, Stanford AI Lab alumnus" },
];

export default function AboutClient() {
  return (
    <div className="relative overflow-hidden">
      <div className="fixed top-0 left-1/3 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="fixed top-1/2 right-0 w-[500px] h-[500px] bg-brand-indigo/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">

        {/* Breadcrumb */}
        <div className="mb-8 flex items-center space-x-2 text-xs">
          <Link href="/" className="text-gray-500 hover:text-brand-cyan transition-colors">Home</Link>
          <span className="text-gray-600">/</span>
          <span className="text-white">About</span>
        </div>

        {/* Hero */}
        <section className="mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-brand-cyan/10 border border-brand-cyan/20 rounded-full px-4 py-1.5 mb-6">
              <Sparkles className="w-4 h-4 text-brand-cyan" />
              <span className="text-xs font-semibold text-brand-cyan uppercase tracking-widest">Our Story</span>
            </div>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6">
              Built by clinicians,{" "}
              <span className="text-gradient-cyan-indigo">for patients</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              Med Clinic X was founded on a simple belief: healthcare technology should serve patients first. Not administrators. Not insurers. <span className="text-white font-semibold">Patients.</span>
            </p>
          </motion.div>
        </section>

        {/* Stats */}
        <section className="mb-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-panel rounded-2xl p-6 border border-brand-border text-center"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 text-brand-cyan flex items-center justify-center mx-auto mb-3">
                  {s.icon}
                </div>
                <p className="font-display font-extrabold text-3xl text-white mb-1">{s.value}</p>
                <p className="text-sm text-gray-400">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Mission */}
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center space-x-2 bg-brand-indigo/10 border border-brand-indigo/20 rounded-full px-4 py-1.5 mb-6">
                <Target className="w-4 h-4 text-brand-indigo" />
                <span className="text-xs font-semibold text-brand-indigo uppercase tracking-widest">Our Mission</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-6">
                Turning raw medical data into a{" "}
                <span className="text-gradient-emerald-cyan">personal health story</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Most patient portals are digital filing cabinets. A list of PDFs, an appointment calendar, and a lab results table that reads like a spreadsheet. Nobody understands them. Nobody uses them.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                We built something different: an <span className="text-white font-semibold">AI-powered companion</span> that reads your health history, explains your results in plain language, prepares you for every doctor visit, and helps your care team understand you before you walk through the door.
              </p>
              <Link
                href="/solutions/ai-patient-portal"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-bold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity text-sm"
              >
                <span>See the Platform</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="glass-panel rounded-2xl border border-brand-border p-8 space-y-4">
                {[
                  "We never sell or share patient data with third parties",
                  "AI assists — it never diagnoses or replaces a doctor",
                  "Patients own their data and can export it anytime",
                  "Every data access is logged and auditable",
                  "HIPAA-aligned architecture from day one",
                  "Built with clinicians, not just engineers",
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-brand-emerald flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-24">
          <div className="text-center mb-14">
            <div className="inline-flex items-center space-x-2 bg-brand-emerald/10 border border-brand-emerald/20 rounded-full px-4 py-1.5 mb-4">
              <Award className="w-4 h-4 text-brand-emerald" />
              <span className="text-xs font-semibold text-brand-emerald uppercase tracking-widest">Core Values</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              Principles we build{" "}
              <span className="text-gradient-cyan-indigo">everything on</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-panel glass-panel-hover rounded-2xl p-7 border border-brand-border"
              >
                <div className={`w-12 h-12 rounded-xl bg-${v.color}/10 text-${v.color} flex items-center justify-center mb-4`}>
                  {v.icon}
                </div>
                <h3 className="font-display font-bold text-white text-lg mb-2">{v.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-24">
          <div className="text-center mb-14">
            <div className="inline-flex items-center space-x-2 bg-brand-cyan/10 border border-brand-cyan/20 rounded-full px-4 py-1.5 mb-4">
              <Globe className="w-4 h-4 text-brand-cyan" />
              <span className="text-xs font-semibold text-brand-cyan uppercase tracking-widest">Our Journey</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              From idea to{" "}
              <span className="text-gradient-cyan-indigo">healthcare platform</span>
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-brand-cyan via-brand-indigo to-brand-emerald hidden lg:block" />
            <div className="space-y-6">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="glass-panel rounded-2xl p-6 border border-brand-border lg:ml-20 relative"
                >
                  <div className="absolute -left-[64px] top-6 w-8 h-8 rounded-full bg-brand-cyan border-4 border-brand-bg hidden lg:flex items-center justify-center text-[10px] font-bold text-white">
                    {m.year.slice(2)}
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <div className="flex-shrink-0">
                      <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20 mb-2">
                        {m.year}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-white mb-1">{m.title}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="mb-24">
          <div className="text-center mb-14">
            <div className="inline-flex items-center space-x-2 bg-brand-indigo/10 border border-brand-indigo/20 rounded-full px-4 py-1.5 mb-4">
              <Users className="w-4 h-4 text-brand-indigo" />
              <span className="text-xs font-semibold text-brand-indigo uppercase tracking-widest">Leadership Team</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              Clinicians, engineers,{" "}
              <span className="text-gradient-cyan-indigo">and AI researchers</span>
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Our founding team combines deep clinical experience with world-class engineering — because great healthcare software requires both.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-panel rounded-2xl p-6 border border-brand-border text-center hover:border-brand-cyan/30 transition-colors"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.bg} flex items-center justify-center mx-auto mb-4 text-xl font-bold text-white font-display`}>
                  {member.initials}
                </div>
                <h3 className="font-display font-bold text-white mb-0.5">{member.name}</h3>
                <p className="text-xs font-semibold text-brand-cyan mb-2">{member.role}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{member.expertise}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="relative rounded-3xl overflow-hidden p-10 md:p-16 text-center border border-brand-border bg-gradient-cyber">
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-brand-cyan/10 rounded-full blur-[90px] -z-10" />
            <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-brand-indigo/10 rounded-full blur-[90px] -z-10" />
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white mb-4">
              Ready to transform your clinic?
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              Join the clinics already using Med Clinic X to deliver a better patient experience — powered by AI.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-bold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Book a Discovery Call</span>
              </Link>
              <Link
                href="/solutions/ai-patient-portal"
                className="inline-flex items-center space-x-2 glass-panel border border-brand-border text-gray-300 font-semibold px-8 py-4 rounded-xl hover:border-brand-cyan/40 hover:text-white transition-all text-sm"
              >
                <span>Explore the Platform</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
