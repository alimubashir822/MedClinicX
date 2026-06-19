"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Mail, Phone, MapPin, Clock, Send, MessageSquare,
  Calendar, Building2, ArrowRight, CheckCircle, Sparkles,
} from "lucide-react";

const contactMethods = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email Us",
    detail: "support@medclinicx.com",
    sub: "We respond within 4 business hours",
    href: "mailto:support@medclinicx.com",
    color: "brand-cyan",
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Call Us",
    detail: "+1 (800) 555-MDCX",
    sub: "Mon–Fri, 9am–6pm PT",
    href: "tel:+18005556329",
    color: "brand-indigo",
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Book a Demo",
    detail: "30-minute live walkthrough",
    sub: "See the platform in action",
    href: "/demo",
    color: "brand-emerald",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Headquarters",
    detail: "San Francisco, CA",
    sub: "United States",
    href: "#",
    color: "amber-400",
  },
];

const inquiryTypes = [
  "General Inquiry",
  "Platform Demo Request",
  "Enterprise / Multi-Clinic",
  "Technical Integration",
  "Partnership",
  "Press & Media",
];

const reasons = [
  "Typical response within 4 business hours",
  "Free 30-minute discovery call included",
  "No obligation — just an honest conversation",
  "We will tailor a demo specific to your specialty",
];

export default function ContactClient() {
  const [form, setForm] = useState({
    name: "", clinic: "", email: "", phone: "", type: inquiryTypes[0], message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const errData = await response.json();
        alert(errData.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred while sending the message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative overflow-hidden">
      <div className="fixed top-0 left-1/3 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-brand-indigo/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">

        {/* Breadcrumb */}
        <div className="mb-8 flex items-center space-x-2 text-xs">
          <Link href="/" className="text-gray-500 hover:text-brand-cyan transition-colors">Home</Link>
          <span className="text-gray-600">/</span>
          <span className="text-white">Get In Touch</span>
        </div>

        {/* Hero */}
        <section className="mb-16 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center space-x-2 bg-brand-cyan/10 border border-brand-cyan/20 rounded-full px-4 py-1.5 mb-6">
              <MessageSquare className="w-4 h-4 text-brand-cyan" />
              <span className="text-xs font-semibold text-brand-cyan uppercase tracking-widest">Contact Us</span>
            </div>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white mb-4">
              Let&apos;s build something{" "}
              <span className="text-gradient-cyan-indigo">remarkable</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Whether you&apos;re a single clinic or a hospital network — we&apos;d love to understand your challenges and show you how Med Clinic X can help.
            </p>
          </motion.div>
        </section>

        {/* Contact Cards */}
        <section className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactMethods.map((m, i) => (
              <motion.a
                key={m.title}
                href={m.href}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="glass-panel rounded-2xl p-6 border border-brand-border hover:border-brand-cyan/30 transition-all group"
              >
                <div className={`w-12 h-12 rounded-xl bg-${m.color}/10 text-${m.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  {m.icon}
                </div>
                <h3 className="font-display font-bold text-white mb-1">{m.title}</h3>
                <p className={`text-sm font-semibold text-${m.color} mb-1`}>{m.detail}</p>
                <p className="text-xs text-gray-500">{m.sub}</p>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Main Grid: Form + Sidebar */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="glass-panel rounded-2xl border border-brand-border p-8">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-cyan to-brand-indigo flex items-center justify-center">
                  <Send className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="font-display font-bold text-white">Send us a message</h2>
                  <p className="text-xs text-gray-500">We typically respond within 4 business hours</p>
                </div>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-emerald/10 text-brand-emerald flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-extrabold text-2xl text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-400 text-sm max-w-sm mx-auto leading-relaxed">
                    Thanks for reaching out. A member of our team will be in touch within 4 business hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", clinic: "", email: "", phone: "", type: inquiryTypes[0], message: "" }); }}
                    className="mt-6 text-sm text-brand-cyan hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 mb-1.5">Full Name *</label>
                      <input
                        type="text" name="name" required value={form.name} onChange={handleChange}
                        placeholder="Dr. Sarah Johnson"
                        className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand-cyan/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 mb-1.5">Clinic / Organization</label>
                      <input
                        type="text" name="clinic" value={form.clinic} onChange={handleChange}
                        placeholder="Metro General Hospital"
                        className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand-cyan/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 mb-1.5">Email Address *</label>
                      <input
                        type="email" name="email" required value={form.email} onChange={handleChange}
                        placeholder="sarah@metrohealth.com"
                        className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand-cyan/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 mb-1.5">Phone Number</label>
                      <input
                        type="tel" name="phone" value={form.phone} onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand-cyan/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-400 mb-1.5">Inquiry Type</label>
                    <select
                      name="type" value={form.type} onChange={handleChange}
                      className="w-full bg-brand-bg/80 border border-brand-border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-cyan/50 transition-colors appearance-none"
                    >
                      {inquiryTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-400 mb-1.5">Message *</label>
                    <textarea
                      name="message" required value={form.message} onChange={handleChange} rows={5}
                      placeholder="Tell us about your clinic, your current patient portal challenges, and what you're hoping to achieve..."
                      className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand-cyan/50 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit" disabled={loading}
                    className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-bold py-4 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-60 text-sm"
                  >
                    {loading ? (
                      <span className="animate-pulse">Sending message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                  <p className="text-xs text-gray-600 text-center">
                    By submitting, you agree to our Privacy Policy. We never share your information.
                  </p>
                </form>
              )}
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            {/* Why Contact Us */}
            <div className="glass-panel rounded-2xl border border-brand-border p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="w-4 h-4 text-brand-cyan" />
                <h3 className="font-display font-bold text-white text-sm">Why reach out?</h3>
              </div>
              <div className="space-y-3">
                {reasons.map((r, i) => (
                  <div key={i} className="flex items-start space-x-2.5">
                    <CheckCircle className="w-4 h-4 text-brand-emerald flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-gray-400 leading-relaxed">{r}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Office Hours */}
            <div className="glass-panel rounded-2xl border border-brand-border p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Clock className="w-4 h-4 text-brand-indigo" />
                <h3 className="font-display font-bold text-white text-sm">Office Hours</h3>
              </div>
              <div className="space-y-2 text-xs text-gray-400">
                <div className="flex justify-between">
                  <span>Monday – Friday</span>
                  <span className="text-white font-semibold">9:00 AM – 6:00 PM PT</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-white font-semibold">10:00 AM – 2:00 PM PT</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-gray-600">Closed</span>
                </div>
              </div>
              <div className="mt-4 flex items-center space-x-1.5 bg-brand-emerald/10 border border-brand-emerald/20 rounded-full px-3 py-1.5">
                <div className="w-1.5 h-1.5 bg-brand-emerald rounded-full animate-pulse" />
                <span className="text-xs text-brand-emerald font-semibold">Team online now</span>
              </div>
            </div>

            {/* Enterprise */}
            <div className="glass-panel rounded-2xl border border-brand-border p-6">
              <div className="flex items-center space-x-2 mb-3">
                <Building2 className="w-4 h-4 text-amber-400" />
                <h3 className="font-display font-bold text-white text-sm">Enterprise Inquiries</h3>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                For hospital networks, multi-clinic rollouts, or EHR integration projects, reach our enterprise team directly.
              </p>
              <a
                href="mailto:enterprise@medclinicx.com"
                className="inline-flex items-center space-x-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
              >
                <span>enterprise@medclinicx.com</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </motion.div>
        </section>

      </div>
    </div>
  );
}
