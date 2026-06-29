import { NextResponse } from "next/server";

// Mock data — returned as fallback since SQLite is incompatible with Vercel serverless.
// To use a real database, switch to a cloud-hosted DB (e.g., Neon, PlanetScale, Supabase)
// and update DATABASE_URL in Vercel environment variables.
const mockPatientData = {
  id: "patient-001",
  userId: "user-001",
  name: "John Doe",
  email: "john.doe@gmail.com",
  medicalHistory: "Hypertension (controlled), Type 2 Diabetes (managed with Metformin), No known drug allergies.",
  documents: [
    { name: "Lab Report - June 2025.pdf", uploadedAt: "2025-06-10T10:00:00Z" },
    { name: "Cardiac Stress Test Results.pdf", uploadedAt: "2025-05-22T09:30:00Z" },
    { name: "Insurance Card - BlueCross.pdf", uploadedAt: "2025-01-15T14:00:00Z" },
  ],
  appointments: [
    {
      id: "appt-001",
      date: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString(),
      status: "CONFIRMED",
      notes: "Follow-up on cardiac stress test results.",
      doctor: {
        name: "Dr. Sarah Jenkins",
        specialty: "Cardiology",
        clinic: "Heart & Vascular Center",
      },
    },
    {
      id: "appt-004",
      date: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
      status: "COMPLETED",
      notes: "Routine diabetes check. A1C within target range.",
      doctor: {
        name: "Dr. Michael Torres",
        specialty: "Endocrinology",
        clinic: "Metro Wellness Hub",
      },
    },
    {
      id: "appt-005",
      date: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000).toISOString(),
      status: "PENDING",
      notes: "Annual physical examination.",
      doctor: {
        name: "Dr. Emily Nguyen",
        specialty: "Family Medicine",
        clinic: "Downtown Wellness Hub",
      },
    },
  ],
};

export async function GET() {
  try {
    return NextResponse.json(mockPatientData);
  } catch (error) {
    const err = error as Error;
    console.error("Patient API Error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
