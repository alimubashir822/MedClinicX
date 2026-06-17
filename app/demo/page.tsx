"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  Bot,
  User,
  Users,
  Smartphone,
  Sparkles,
  Send,
  Calendar,
  FileText,
  DollarSign,
  TrendingUp,
  Search,
  CheckCircle,
  AlertCircle,
  FileHeart,
  RefreshCw,
  Mail,
  Sliders,
  PenTool,
} from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

type ActiveTab = "receptionist" | "patient" | "doctor" | "admin" | "audit" | "roi" | "content";

function DemoContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // Set default tab based on query param
  const tabQuery = searchParams.get("tab") as ActiveTab;
  const [activeTab, setActiveTab] = useState<ActiveTab>(tabQuery || "receptionist");

  // Sync state with URL parameter for a premium routing feel
  const handleTabChange = (tab: ActiveTab) => {
    setActiveTab(tab);
    router.push(`/demo?tab=${tab}`, { scroll: false });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:px-6">
      {/* Demo Suite Navigation Panel */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Sidebar Menu */}
        <aside className="w-full lg:w-64 flex-shrink-0 space-y-2">
          <div className="glass-panel p-4 rounded-xl mb-4">
            <h2 className="font-display font-bold text-sm text-gray-400 uppercase tracking-wider">Demos Dashboard</h2>
            <p className="text-[11px] text-gray-500 mt-1">Select a solution module to explore live simulated operations.</p>
          </div>

          <nav className="space-y-1">
            <SidebarBtn
              active={activeTab === "receptionist"}
              onClick={() => handleTabChange("receptionist")}
              icon={<Bot className="w-4 h-4" />}
              label="AI Receptionist"
            />
            <SidebarBtn
              active={activeTab === "patient"}
              onClick={() => handleTabChange("patient")}
              icon={<User className="w-4 h-4" />}
              label="Patient Portal"
            />
            <SidebarBtn
              active={activeTab === "doctor"}
              onClick={() => handleTabChange("doctor")}
              icon={<Smartphone className="w-4 h-4" />}
              label="Doctor Dashboard"
            />
            <SidebarBtn
              active={activeTab === "admin"}
              onClick={() => handleTabChange("admin")}
              icon={<Users className="w-4 h-4" />}
              label="Admin Dashboard"
            />
            <div className="h-px bg-brand-border my-4" />
            <div className="px-4 py-1 text-[10px] font-bold text-gray-500 uppercase tracking-wider">Advanced Tools</div>
            <SidebarBtn
              active={activeTab === "audit"}
              onClick={() => handleTabChange("audit")}
              icon={<Search className="w-4 h-4" />}
              label="AI Website Audit"
            />
            <SidebarBtn
              active={activeTab === "roi"}
              onClick={() => handleTabChange("roi")}
              icon={<Sliders className="w-4 h-4" />}
              label="ROI Calculator"
            />
            <SidebarBtn
              active={activeTab === "content"}
              onClick={() => handleTabChange("content")}
              icon={<PenTool className="w-4 h-4" />}
              label="AI Content Generator"
            />
          </nav>
        </aside>

        {/* Right Active Workspace */}
        <main className="flex-grow w-full overflow-hidden min-h-[550px] relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full"
            >
              {activeTab === "receptionist" && <AIReceptionistDemo refreshPatientData={() => {}} />}
              {activeTab === "patient" && <PatientPortalDemo />}
              {activeTab === "doctor" && <DoctorDashboardDemo />}
              {activeTab === "admin" && <AdminDashboardDemo />}
              {activeTab === "audit" && <WebsiteAuditDemo />}
              {activeTab === "roi" && <RoiCalculatorDemo />}
              {activeTab === "content" && <ContentGeneratorDemo />}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

export default function DemoSuite() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-full border-2 border-brand-cyan border-t-transparent animate-spin" />
          <p className="text-gray-400 text-sm">Loading Demo Suite…</p>
        </div>
      </div>
    }>
      <DemoContent />
    </Suspense>
  );
}

/* Sidebar Button Component */
interface SidebarBtnProps {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}

function SidebarBtn({ active, onClick, icon, label }: SidebarBtnProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
        active
          ? "bg-gradient-to-r from-brand-cyan/20 to-brand-indigo/15 text-brand-cyan border-l-3 border-brand-cyan shadow-md shadow-brand-cyan/5"
          : "text-gray-400 hover:text-white hover:bg-white/5 border-l-3 border-transparent"
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

/* 1. AI Receptionist Chatbot Demo */
function AIReceptionistDemo({ refreshPatientData }: { refreshPatientData: () => void }) {
  const [messages, setMessages] = useState<Array<{ role: "user" | "assistant"; content: string }>>([
    {
      role: "assistant",
      content: "Hello! I am the Med Clinic X AI Receptionist. I can help you schedule an appointment. May I start by getting your name?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [collectedData, setCollectedData] = useState<{
    name: string | null;
    phone: string | null;
    service: string | null;
    dateTime: string | null;
  }>({ name: null, phone: null, service: null, dateTime: null });
  const [completed, setCompleted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setInput("");
    const newMessages = [...messages, { role: "user" as const, content: userMsg }];
    setMessages(newMessages);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });
      const data = await res.json();
      
      if (data.collectedData) {
        setCollectedData(data.collectedData);
      }
      
      setMessages([...newMessages, { role: "assistant", content: data.content }]);
      
      if (data.bookingCompleted) {
        setCompleted(true);
        refreshPatientData();
      }
    } catch (err) {
      console.error(err);
      setMessages([...newMessages, { role: "assistant", content: "Apologies, I encountered a communication slip. Let's try that again." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Chat Area */}
      <div className="md:col-span-2 glass-panel rounded-2xl flex flex-col h-[520px] overflow-hidden">
        <div className="border-b border-brand-border p-4 bg-brand-bg/60 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm font-semibold text-white">AI Medical Receptionist</span>
          </div>
          <span className="text-[10px] text-gray-500 font-mono">HIPAA Encrypted Channel</span>
        </div>

        {/* Message Log */}
        <div className="flex-grow p-4 overflow-y-auto space-y-4">
          {messages.map((m, idx) => (
            <div key={idx} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[80%] rounded-xl px-4 py-2.5 text-xs sm:text-sm leading-relaxed ${
                  m.role === "user"
                    ? "bg-brand-indigo text-white rounded-br-none"
                    : "glass-panel text-gray-300 rounded-bl-none border border-brand-cyan/20 bg-brand-cyan-glow"
                }`}
              >
                {m.content}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="glass-panel text-gray-400 rounded-xl px-4 py-2.5 text-xs flex items-center space-x-2">
                <RefreshCw className="w-3.5 h-3.5 animate-spin text-brand-cyan" />
                <span>AI is thinking...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <form onSubmit={handleSend} className="p-3 border-t border-brand-border bg-brand-bg/40 flex gap-2">
          <input
            type="text"
            placeholder={completed ? "Booking complete. Check your portal!" : "Type a response... (e.g. My name is John)"}
            value={input}
            disabled={completed}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={completed || !input.trim() || loading}
            className="bg-brand-cyan hover:bg-brand-cyan/90 disabled:bg-gray-800 disabled:text-gray-500 text-brand-bg font-bold p-3 rounded-xl transition-all active:scale-95"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>

      {/* State Sidebar */}
      <div className="glass-panel p-6 rounded-2xl flex flex-col justify-between">
        <div>
          <h3 className="font-display font-bold text-base text-white mb-4 flex items-center space-x-1.5">
            <Sparkles className="w-4 h-4 text-brand-cyan" />
            <span>Information Collected</span>
          </h3>

          <div className="space-y-4">
            <CollectedItem label="Patient Name" value={collectedData.name} />
            <CollectedItem label="Phone Number" value={collectedData.phone} />
            <CollectedItem label="Medical Service" value={collectedData.service} />
            <CollectedItem label="Preferred Time" value={collectedData.dateTime} />
          </div>
        </div>

        {completed ? (
          <div className="border border-emerald-500/20 bg-emerald-500/10 p-4 rounded-xl mt-6 text-center">
            <CheckCircle className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
            <h4 className="text-emerald-400 font-semibold text-xs uppercase">Appointment Confirmed</h4>
            <p className="text-[10px] text-gray-400 mt-1">
              Synchronized into the Patient Portal and Doctor Dashboard database.
            </p>
          </div>
        ) : (
          <div className="border border-brand-border bg-white/5 p-4 rounded-xl mt-6">
            <div className="flex space-x-2.5 items-start">
              <Activity className="w-4.5 h-4.5 text-brand-cyan mt-0.5 flex-shrink-0 animate-pulse" />
              <p className="text-[10px] text-gray-400 leading-relaxed">
                The receptionist tracks inputs to dynamically trigger booking confirmation when all fields are successfully matching.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function CollectedItem({ label, value }: { label: string; value: string | null }) {
  return (
    <div className="border-b border-brand-border pb-3.5 flex justify-between items-center text-xs">
      <span className="text-gray-500">{label}</span>
      {value ? (
        <span className="text-white font-semibold text-right">{value}</span>
      ) : (
        <span className="text-gray-600 italic font-mono">waiting...</span>
      )}
    </div>
  );
}

/* 2. Patient Portal Demo */
interface PatientData {
  name: string;
  email: string;
  medicalHistory: string;
  documents: Array<{ id: string; name: string; date: string; size: string; type: string }>;
  appointments: Array<{ id: string; date: string; status: string; notes: string; doctor: { name: string; specialty: string; clinic: string } }>;
}

function PatientPortalDemo() {
  const [data, setData] = useState<PatientData | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/patient");
      const json = await res.json();
      setData(json);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="glass-panel p-16 rounded-2xl flex flex-col items-center justify-center h-[520px]">
        <RefreshCw className="w-8 h-8 text-brand-cyan animate-spin mb-4" />
        <p className="text-sm text-gray-400 font-medium">Fetching secure Patient Record...</p>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="space-y-6">
      {/* Patient Header */}
      <div className="glass-panel p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-xl bg-brand-indigo/20 flex items-center justify-center font-display font-bold text-white text-xl border border-brand-indigo/30">
            {data.name.charAt(0)}
          </div>
          <div>
            <h3 className="font-display font-bold text-lg text-white">{data.name}</h3>
            <p className="text-xs text-gray-500">{data.email} | HIPAA-Protected Account</p>
          </div>
        </div>
        <button
          onClick={fetchData}
          className="flex items-center space-x-1.5 text-xs text-gray-400 hover:text-white border border-brand-border hover:border-brand-cyan/30 px-3 py-1.5 rounded-lg transition-colors"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Sync Database</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Double-Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Medical Records Card */}
          <div className="glass-panel p-6 rounded-2xl">
            <h4 className="font-display font-bold text-sm text-white mb-3.5 flex items-center space-x-2">
              <FileHeart className="w-4.5 h-4.5 text-brand-cyan" />
              <span>Medical History & Profile Notes</span>
            </h4>
            <div className="bg-brand-bg/50 border border-brand-border p-4 rounded-xl text-xs text-gray-300 leading-relaxed font-mono">
              {data.medicalHistory}
            </div>
          </div>

          {/* Appointments Grid */}
          <div className="glass-panel p-6 rounded-2xl">
            <h4 className="font-display font-bold text-sm text-white mb-4 flex items-center space-x-2">
              <Calendar className="w-4.5 h-4.5 text-brand-cyan" />
              <span>Provisioned Appointments</span>
            </h4>
            
            <div className="space-y-3">
              {data.appointments.map((appt) => (
                <div key={appt.id} className="border border-brand-border rounded-xl p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center bg-brand-bg/30 gap-4">
                  <div>
                    <h5 className="text-xs text-white font-semibold">{appt.doctor.name}</h5>
                    <p className="text-[10px] text-brand-cyan mt-0.5">{appt.doctor.specialty}</p>
                    <p className="text-[10px] text-gray-500 mt-1">{appt.doctor.clinic}</p>
                    <p className="text-[10px] text-gray-400 mt-2 italic leading-relaxed">Note: {appt.notes}</p>
                  </div>
                  <div className="text-right flex flex-col items-end gap-2 self-stretch sm:self-auto border-t sm:border-t-0 border-brand-border pt-2 sm:pt-0">
                    <span className="text-xs text-white font-mono">{new Date(appt.date).toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })}</span>
                    <span className={`text-[9px] font-extrabold uppercase px-2 py-0.5 rounded ${
                      appt.status === "CONFIRMED" ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20" :
                      appt.status === "COMPLETED" ? "bg-brand-indigo/10 text-brand-indigo border border-brand-indigo/20" :
                      "bg-yellow-500/10 text-yellow-500 border border-yellow-500/20"
                    }`}>
                      {appt.status}
                    </span>
                  </div>
                </div>
              ))}
              {data.appointments.length === 0 && (
                <div className="text-center py-8 text-xs text-gray-500">No appointments scheduled.</div>
              )}
            </div>
          </div>
        </div>

        {/* Right Sidebar: Documents & Actions */}
        <div className="space-y-6">
          <div className="glass-panel p-6 rounded-2xl">
            <h4 className="font-display font-bold text-sm text-white mb-4 flex items-center space-x-2">
              <FileText className="w-4.5 h-4.5 text-brand-cyan" />
              <span>Released Lab Scans & Documents</span>
            </h4>

            <div className="space-y-3">
              {data.documents.map((doc) => (
                <div key={doc.id} className="border border-brand-border hover:border-brand-cyan/20 rounded-xl p-3 bg-brand-bg/20 flex justify-between items-center group transition-colors">
                  <div className="overflow-hidden">
                    <h5 className="text-xs text-white font-semibold truncate">{doc.name}</h5>
                    <p className="text-[10px] text-gray-500 mt-0.5">{doc.date} | {doc.size}</p>
                  </div>
                  <button className="text-[10px] text-brand-cyan hover:underline font-bold flex-shrink-0 ml-2">
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* 3. Doctor Dashboard Demo */
interface DoctorData {
  userId: string;
  name: string;
  email: string;
  specialty: string;
  clinic: string;
  appointments: Array<{ id: string; date: string; status: string; notes: string; patient: { id: string; name: string; email: string; medicalHistory: string } }>;
  messages: Array<{ id: string; senderId: string; receiverId: string; content: string; createdAt: string }>;
}

function DoctorDashboardDemo() {
  const [data, setData] = useState<DoctorData | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/doctor");
      const json = await res.json();
      setData(json);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="glass-panel p-16 rounded-2xl flex flex-col items-center justify-center h-[520px]">
        <RefreshCw className="w-8 h-8 text-brand-cyan animate-spin mb-4" />
        <p className="text-sm text-gray-400 font-medium">Fetching clinical metrics...</p>
      </div>
    );
  }

  if (!data) return null;

  const todayAppts = data.appointments.filter(
    (a) => new Date(a.date).toDateString() === new Date().toDateString() || a.status === "CONFIRMED"
  );

  return (
    <div className="space-y-6">
      {/* Metrics Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <MetricCard label="Today's Appointments" value={todayAppts.length} change="+12% vs yesterday" />
        <MetricCard label="Total Practice Patients" value={142} change="+3.2% monthly" />
        <MetricCard label="Monthly Revenue" value="$14.2k" change="+8.1% vs avg" />
        <MetricCard label="Satisfaction Score" value="99.4%" change="98th percentile" />
      </div>

      {/* Chart Panel */}
      <div className="glass-panel p-6 rounded-2xl">
        <h4 className="font-display font-bold text-sm text-white mb-4 flex items-center space-x-2">
          <TrendingUp className="w-4.5 h-4.5 text-brand-cyan" />
          <span>Weekly Patient Intake Trends</span>
        </h4>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={[
              { name: "Mon", appointments: 12 },
              { name: "Tue", appointments: 19 },
              { name: "Wed", appointments: 15 },
              { name: "Thu", appointments: 22 },
              { name: "Fri", appointments: 30 },
              { name: "Sat", appointments: 8 },
              { name: "Sun", appointments: 3 },
            ]} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
              <XAxis dataKey="name" stroke="#6b7280" style={{ fontSize: 10 }} />
              <YAxis stroke="#6b7280" style={{ fontSize: 10 }} />
              <Tooltip contentStyle={{ backgroundColor: "#0a0f1e", borderColor: "#1f2937", borderRadius: 8, fontSize: 11 }} />
              <Area type="monotone" dataKey="appointments" stroke="#06b6d4" fillOpacity={1} fill="url(#colorRevenue)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Appointments List */}
        <div className="lg:col-span-2 glass-panel p-6 rounded-2xl">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-display font-bold text-sm text-white flex items-center space-x-2">
              <Calendar className="w-4.5 h-4.5 text-brand-cyan" />
              <span>Clinical Intake Schedule</span>
            </h4>
            <button
              onClick={fetchData}
              className="text-[10px] text-gray-500 hover:text-white flex items-center space-x-1"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Refresh</span>
            </button>
          </div>

          <div className="space-y-3 max-h-[350px] overflow-y-auto pr-1">
            {data.appointments.map((appt) => (
              <div key={appt.id} className="border border-brand-border rounded-xl p-4 bg-brand-bg/30 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h5 className="text-xs text-white font-semibold">{appt.patient.name}</h5>
                  <p className="text-[10px] text-gray-500 mt-0.5">{appt.patient.email}</p>
                  <p className="text-[10px] text-brand-indigo mt-1">Timeline details: {appt.notes}</p>
                </div>
                <div className="text-right flex flex-col items-end gap-1 flex-shrink-0">
                  <span className="text-xs font-mono text-white">{new Date(appt.date).toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })}</span>
                  <span className="text-[9px] uppercase font-bold text-brand-cyan">{appt.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Secure Messaging Sidebar */}
        <div className="glass-panel p-6 rounded-2xl flex flex-col h-[420px]">
          <h4 className="font-display font-bold text-sm text-white mb-4 flex items-center space-x-2 border-b border-brand-border pb-3">
            <Mail className="w-4.5 h-4.5 text-brand-cyan" />
            <span>Encrypted Messaging (Intra-App)</span>
          </h4>
          
          <div className="flex-grow space-y-3 overflow-y-auto pr-1 text-xs">
            {data.messages.map((msg) => {
              const isSenderDoctor = msg.senderId === data.userId;
              return (
                <div key={msg.id} className={`flex flex-col ${isSenderDoctor ? "items-end" : "items-start"}`}>
                  <span className="text-[9px] text-gray-500 mb-1">{isSenderDoctor ? "You" : "John Doe"}</span>
                  <div className={`p-2.5 rounded-lg leading-relaxed ${
                    isSenderDoctor ? "bg-brand-indigo text-white rounded-tr-none" : "glass-panel text-gray-300 rounded-tl-none"
                  }`}>
                    {msg.content}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricCard({ label, value, change }: { label: string; value: string | number; change: string }) {
  return (
    <div className="glass-panel p-5 rounded-xl border border-brand-border flex flex-col justify-between">
      <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">{label}</span>
      <span className="text-2xl font-display font-bold text-white my-2">{value}</span>
      <span className="text-[10px] text-brand-cyan">{change}</span>
    </div>
  );
}

/* 4. Admin Dashboard Demo */
interface AdminData {
  stats: {
    totalClinics: number;
    totalDoctors: number;
    totalPatients: number;
    totalAppointments: number;
    totalUsers: number;
    estimatedRevenue: number;
  };
  clinics: Array<{ name: string; location: string; doctors: number; patients: number }>;
  subscriptions: Array<{ clinicName: string; tier: string; status: string; price: number }>;
  recentUsers: Array<{ id: string; name: string; email: string; role: string; createdAt: string }>;
}

function AdminDashboardDemo() {
  const [data, setData] = useState<AdminData | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin");
      const json = await res.json();
      setData(json);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="glass-panel p-16 rounded-2xl flex flex-col items-center justify-center h-[520px]">
        <RefreshCw className="w-8 h-8 text-brand-cyan animate-spin mb-4" />
        <p className="text-sm text-gray-400 font-medium">Gathering administrative structures...</p>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="space-y-6">
      {/* Admin stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <MetricCard label="Registered Clinics" value={data.stats.totalClinics} change="Live system nodes" />
        <MetricCard label="Active Clinicians" value={data.stats.totalDoctors} change="Credentialed profiles" />
        <MetricCard label="Provisioned Appointments" value={data.stats.totalAppointments} change="Synchronized schedules" />
        <MetricCard label="MRR Estimate" value={`$${data.stats.estimatedRevenue}`} change="Active billing subscriptions" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Clinics list */}
        <div className="lg:col-span-2 glass-panel p-6 rounded-2xl">
          <h4 className="font-display font-bold text-sm text-white mb-4 flex items-center space-x-2">
            <Activity className="w-4.5 h-4.5 text-brand-cyan animate-pulse" />
            <span>Clinic Operational Nodes</span>
          </h4>

          <div className="space-y-3">
            {data.clinics.map((clinic, idx) => (
              <div key={idx} className="border border-brand-border rounded-xl p-4 bg-brand-bg/30 flex justify-between items-center">
                <div>
                  <h5 className="text-xs text-white font-semibold">{clinic.name}</h5>
                  <p className="text-[10px] text-gray-500 mt-0.5">{clinic.location}</p>
                </div>
                <div className="text-right flex items-center space-x-6 text-[11px] text-gray-300">
                  <div>
                    <span className="text-brand-cyan font-bold font-mono">{clinic.doctors}</span> Doctors
                  </div>
                  <div>
                    <span className="text-brand-indigo font-bold font-mono">{clinic.patients}</span> Patients
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subscription billing */}
        <div className="glass-panel p-6 rounded-2xl">
          <h4 className="font-display font-bold text-sm text-white mb-4 flex items-center space-x-2">
            <DollarSign className="w-4.5 h-4.5 text-brand-cyan" />
            <span>SaaS Subscriptions</span>
          </h4>

          <div className="space-y-3">
            {data.subscriptions.map((sub, idx) => (
              <div key={idx} className="border border-brand-border rounded-xl p-3 bg-brand-bg/20 flex justify-between items-center text-xs">
                <div>
                  <h5 className="text-xs text-white font-semibold">{sub.clinicName}</h5>
                  <p className="text-[10px] text-brand-cyan font-mono mt-0.5">{sub.tier} Plan</p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono font-bold text-white">${sub.price}/mo</span>
                  <span className="block text-[8px] text-emerald-500 uppercase mt-0.5 font-bold">Active</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

interface AuditResult {
  seo: number;
  conversion: number;
  accessibility: number;
  loadTime: string;
  errors: string[];
}

/* 5. AI Website Audit Tool Demo */
function WebsiteAuditDemo() {
  const [url, setUrl] = useState("");
  const [scanning, setScanning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<AuditResult | null>(null);

  const handleScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim() || scanning) return;

    setScanning(true);
    setProgress(0);
    setResult(null);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setScanning(false);
          setResult({
            seo: 92,
            conversion: 78,
            accessibility: 88,
            loadTime: "0.8s",
            errors: [
              "Missing local Schema.org metadata for medical clinic indexing.",
              "Intake schedule button requires three clicks; should be simplified into one-click overlay.",
              "Mobile viewport loading resources blocked by heavy script bundle size (1.8MB).",
            ],
          });
          return 100;
        }
        return prev + 10;
      });
    }, 250);
  };

  return (
    <div className="glass-panel p-8 rounded-2xl max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center mx-auto mb-4">
          <Search className="w-6 h-6 text-brand-cyan" />
        </div>
        <h3 className="font-display font-bold text-xl text-white">AI Clinic Website Audit Tool</h3>
        <p className="text-xs text-gray-400 mt-1">Enter your clinic website URL to check SEO rankings & patient booking leakage.</p>
      </div>

      <form onSubmit={handleScan} className="flex gap-3 max-w-xl mx-auto mb-8">
        <input
          type="text"
          placeholder="e.g., www.downtowncardiology.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          disabled={scanning}
          className="flex-grow bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={scanning || !url.trim()}
          className="bg-brand-cyan hover:bg-brand-cyan/90 disabled:bg-gray-800 disabled:text-gray-500 text-brand-bg font-bold px-6 py-2.5 rounded-xl transition-all"
        >
          {scanning ? "Scanning..." : "Scan Website"}
        </button>
      </form>

      {scanning && (
        <div className="max-w-md mx-auto space-y-2 text-center">
          <div className="h-1.5 w-full bg-brand-border rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-brand-cyan to-brand-indigo"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.2 }}
            />
          </div>
          <span className="text-[10px] text-gray-500 font-mono">Running Lighthouse diagnostic algorithms... {progress}%</span>
        </div>
      )}

      {result && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="space-y-6 max-w-2xl mx-auto border-t border-brand-border pt-6"
        >
          {/* Diagnostic Scores */}
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="border border-brand-border rounded-xl p-4 bg-brand-bg/40">
              <span className="text-[10px] text-gray-500 uppercase tracking-wider block">SEO Score</span>
              <span className="text-2xl font-display font-extrabold text-emerald-500 block my-1">{result.seo}/100</span>
              <span className="text-[9px] text-emerald-600">Great index rate</span>
            </div>
            <div className="border border-brand-border rounded-xl p-4 bg-brand-bg/40">
              <span className="text-[10px] text-gray-500 uppercase tracking-wider block">Booking Conv.</span>
              <span className="text-2xl font-display font-extrabold text-yellow-500 block my-1">{result.conversion}/100</span>
              <span className="text-[9px] text-yellow-600">High checkout drop-off</span>
            </div>
            <div className="border border-brand-border rounded-xl p-4 bg-brand-bg/40">
              <span className="text-[10px] text-gray-500 uppercase tracking-wider block">Load Speed</span>
              <span className="text-2xl font-display font-extrabold text-emerald-500 block my-1">{result.loadTime}</span>
              <span className="text-[9px] text-emerald-600">Fast static bundle</span>
            </div>
          </div>

          {/* Detailed Audits */}
          <div className="glass-panel p-6 rounded-xl space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center space-x-1">
              <AlertCircle className="w-4 h-4 text-yellow-500" />
              <span>Diagnostic Recommendations</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              {result.errors.map((err: string, idx: number) => (
                <li key={idx} className="flex items-start space-x-2 leading-relaxed">
                  <span className="text-yellow-500 font-mono">•</span>
                  <span>{err}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </div>
  );
}

/* 6. Healthcare ROI Calculator Demo */
function RoiCalculatorDemo() {
  const [patientVolume, setPatientVolume] = useState(400); // monthly appointments
  const [missedRate, setMissedRate] = useState(12); // % missed appointments
  const [ticketValue, setTicketValue] = useState(150); // average ticket value in $
  const [adminHours, setAdminHours] = useState(40); // receptionist hours weekly

  // Derived ROI calculations
  const totalMissed = Math.round(patientVolume * (missedRate / 100));

  // Assuming MedClinicX reduces missed rate by 70% and saves 80% of admin hours
  const reducedMissed = Math.round(totalMissed * 0.7);
  const revenueSavedMonthly = reducedMissed * ticketValue;
  const staffHoursSavedMonthly = Math.round((adminHours * 4) * 0.8);

  const annualRevenueSaved = revenueSavedMonthly * 12;
  const annualStaffCostSaved = staffHoursSavedMonthly * 25 * 12; // assuming $25/hr staff cost

  const totalAnnualSavings = annualRevenueSaved + annualStaffCostSaved;

  return (
    <div className="glass-panel p-6 md:p-8 rounded-2xl max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center mx-auto mb-4">
          <TrendingUp className="w-6 h-6 text-brand-cyan" />
        </div>
        <h3 className="font-display font-bold text-xl text-white">Healthcare ROI Calculator</h3>
        <p className="text-xs text-gray-400 mt-1">Adjust sliders to calculate how much staff time and booking revenue you capture with Med Clinic X.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Sliders Grid */}
        <div className="space-y-6">
          <SliderControl
            label="Monthly Patient Bookings"
            min={50}
            max={2000}
            step={50}
            value={patientVolume}
            onChange={setPatientVolume}
            suffix=" appointments"
          />
          <SliderControl
            label="Current Missed/No-Show Rate"
            min={2}
            max={30}
            step={1}
            value={missedRate}
            onChange={setMissedRate}
            suffix="%"
          />
          <SliderControl
            label="Average Consult Fee"
            min={50}
            max={500}
            step={10}
            value={ticketValue}
            onChange={setTicketValue}
            prefix="$"
            suffix=" per ticket"
          />
          <SliderControl
            label="Weekly Front-Desk Admin Hours"
            min={10}
            max={120}
            step={5}
            value={adminHours}
            onChange={setAdminHours}
            suffix=" hours"
          />
        </div>

        {/* Diagnostic Output Screen */}
        <div className="relative">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-brand-cyan to-brand-indigo opacity-20 blur-lg" />
          <div className="relative glass-panel rounded-2xl p-6 bg-brand-bg/50 border border-brand-border text-center">
            <span className="text-[10px] font-bold tracking-wider text-gray-500 uppercase font-display block">Total Estimated Annual Net Savings</span>
            <span className="text-4xl font-display font-extrabold text-brand-cyan block my-3 animate-pulse">
              ${totalAnnualSavings.toLocaleString()}
            </span>
            <div className="border-t border-brand-border my-5" />

            <div className="grid grid-cols-2 gap-4 text-left">
              <div>
                <span className="text-[9px] text-gray-500 uppercase block">Captured Booking Revenue</span>
                <span className="text-base font-display font-bold text-white mt-1 block">${annualRevenueSaved.toLocaleString()} / year</span>
                <span className="text-[9px] text-brand-cyan block mt-0.5">{reducedMissed * 12} saved appointments</span>
              </div>
              <div>
                <span className="text-[9px] text-gray-500 uppercase block">Front-Desk Hours Saved</span>
                <span className="text-base font-display font-bold text-white mt-1 block">{staffHoursSavedMonthly * 12} hrs / year</span>
                <span className="text-[9px] text-brand-cyan block mt-0.5">${annualStaffCostSaved.toLocaleString()} admin cost saved</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface SliderControlProps {
  label: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (val: number) => void;
  prefix?: string;
  suffix?: string;
}

function SliderControl({ label, min, max, step, value, onChange, prefix = "", suffix = "" }: SliderControlProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center text-xs font-semibold">
        <span className="text-gray-400">{label}</span>
        <span className="text-white">
          {prefix}
          {value}
          {suffix}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-1 bg-brand-border rounded-lg appearance-none cursor-pointer accent-brand-cyan"
      />
    </div>
  );
}

/* 7. AI Content Generator Demo */
function ContentGeneratorDemo() {
  const [category, setCategory] = useState<"blog" | "email" | "social">("blog");
  const [prompt, setPrompt] = useState("");
  const [generating, setGenerating] = useState(false);
  const [outputText, setOutputText] = useState("");

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim() || generating) return;

    setGenerating(true);
    setOutputText("");

    const blogTemplate = `## Tips for Heart Health during Summer

As temperature levels spike during summer, your cardiovascular system must work harder to radiate heat and maintain standard body temperatures. Below are key recommendations to keep your vascular system functioning efficiently:

1. **Hydrate Regularly:** Dehydration restricts blood flow, forcing your heart rate to jump. Aim for 8-10 glasses of water daily.
2. **Coordinate Exercise:** Shift cardiovascular sessions to cooler morning or evening hours to avoid over-exertion.
3. **Audit Dietary Sodium:** Summer barbecues contain hidden sodium. Keep sodium load minimal to control standard blood pressure.

*Brought to you by Med Clinic X.*`;

    const emailTemplate = `Subject: Welcome to Med Clinic X: Setting Up Your Portal Account

Hello,

Thank you for choosing Med Clinic X as your healthcare technology partner. Your personal health profile has been successfully set up by our team.

To finalize registration, please click the secure HIPAA verification link below:
[Confirm Patient Account](https://medclinicx.com/confirm)

Once logged in, you can directly:
- Schedule or reschedule medical consultations.
- Retrieve lab test diagnostics and pathology documents.
- Exchange secure, encrypted messages with your clinical physician.

Stay well,
Med Clinic X Team`;

    const socialTemplate = `🤖 24/7 patient inquiries can stretch front-desk resources to breaking points. Med Clinic X provides AI Receptionists capable of scheduling appointments, answering clinical FAQs, and logging timeline notes directly into your EHR in seconds. 

Explore how we reduce missed bookings by 70%: https://medclinicx.com/solutions/ai-medical-receptionist #HealthTech #AI #ClinicAutomation`;

    const targetText = category === "blog" ? blogTemplate : category === "email" ? emailTemplate : socialTemplate;

    let idx = 0;
    const interval = setInterval(() => {
      if (idx < targetText.length) {
        setOutputText((prev) => prev + targetText.charAt(idx));
        idx++;
      } else {
        clearInterval(interval);
        setGenerating(false);
      }
    }, 15);
  };

  return (
    <div className="glass-panel p-8 rounded-2xl max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center mx-auto mb-4">
          <PenTool className="w-6 h-6 text-brand-cyan" />
        </div>
        <h3 className="font-display font-bold text-xl text-white">AI Clinical Content Generator</h3>
        <p className="text-xs text-gray-400 mt-1">Draft blog templates, welcome emails, or social outreach copy instantly.</p>
      </div>

      <form onSubmit={handleGenerate} className="space-y-4 max-w-xl mx-auto mb-8">
        <div className="flex gap-2 justify-center">
          <button
            type="button"
            onClick={() => setCategory("blog")}
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              category === "blog" ? "bg-brand-cyan text-brand-bg" : "glass-panel text-gray-400 hover:text-white"
            }`}
          >
            Blog Template
          </button>
          <button
            type="button"
            onClick={() => setCategory("email")}
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              category === "email" ? "bg-brand-cyan text-brand-bg" : "glass-panel text-gray-400 hover:text-white"
            }`}
          >
            Patient Email
          </button>
          <button
            type="button"
            onClick={() => setCategory("social")}
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              category === "social" ? "bg-brand-cyan text-brand-bg" : "glass-panel text-gray-400 hover:text-white"
            }`}
          >
            Social Outreach
          </button>
        </div>

        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Topic (e.g., Summer Cardiology Care or Intake Link email)"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            disabled={generating}
            className="flex-grow bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={generating || !prompt.trim()}
            className="bg-brand-cyan hover:bg-brand-cyan/90 disabled:bg-gray-800 disabled:text-gray-500 text-brand-bg font-bold px-6 py-2.5 rounded-xl transition-all"
          >
            Draft
          </button>
        </div>
      </form>

      {outputText && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-2xl mx-auto glass-panel p-6 rounded-xl border border-brand-border text-xs leading-relaxed text-gray-300 font-mono whitespace-pre-wrap max-h-80 overflow-y-auto"
        >
          {outputText}
        </motion.div>
      )}
    </div>
  );
}
