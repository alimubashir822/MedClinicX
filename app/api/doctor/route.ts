import { NextResponse } from "next/server";

// Mock data — returned as fallback since SQLite is incompatible with Vercel serverless.
// To use a real database, switch to a cloud-hosted DB (e.g., Neon, PlanetScale, Supabase)
// and update DATABASE_URL in Vercel environment variables.
const mockDoctorData = {
  id: "doctor-001",
  userId: "user-002",
  name: "Dr. Sarah Jenkins",
  email: "sarah.jenkins@medclinicx.com",
  specialty: "Cardiology",
  clinic: "Heart & Vascular Center",
  appointments: [
    {
      id: "appt-001",
      date: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString(),
      status: "CONFIRMED",
      notes: "Follow-up on cardiac stress test results.",
      patient: {
        id: "patient-001",
        name: "John Doe",
        email: "john.doe@gmail.com",
        medicalHistory: "Hypertension, Type 2 Diabetes",
      },
    },
    {
      id: "appt-002",
      date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
      status: "PENDING",
      notes: "Initial consultation for chest pains.",
      patient: {
        id: "patient-002",
        name: "Jane Smith",
        email: "jane.smith@gmail.com",
        medicalHistory: "No prior cardiac history",
      },
    },
    {
      id: "appt-003",
      date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
      status: "CONFIRMED",
      notes: "6-month checkup for arrhythmia monitoring.",
      patient: {
        id: "patient-003",
        name: "Robert Chen",
        email: "r.chen@email.com",
        medicalHistory: "Atrial fibrillation, on anticoagulants",
      },
    },
  ],
  messages: [
    {
      id: "msg-001",
      senderId: "user-003",
      receiverId: "user-002",
      content: "Dr. Jenkins, can we move my appointment to Thursday?",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: "msg-002",
      senderId: "user-002",
      receiverId: "user-003",
      content: "Of course, John. Thursday at 10 AM works perfectly.",
      createdAt: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
    },
  ],
};

export async function GET() {
  try {
    return NextResponse.json(mockDoctorData);
  } catch (error) {
    const err = error as Error;
    console.error("Doctor API Error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
