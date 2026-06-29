import { NextResponse } from "next/server";

// Mock data — returned as fallback since SQLite is incompatible with Vercel serverless.
// To use a real database, switch to a cloud-hosted DB (e.g., Neon, PlanetScale, Supabase)
// and update DATABASE_URL in Vercel environment variables.
const mockAdminData = {
  stats: {
    totalClinics: 3,
    totalDoctors: 12,
    totalPatients: 265,
    totalAppointments: 48,
    totalUsers: 280,
    estimatedRevenue: 1117, // 279 + 719 + 119
  },
  clinics: [
    { name: "Heart & Vascular Center", location: "Suite A", doctors: 1, patients: 45 },
    { name: "Metro Pediatrics & Wellness", location: "Suite C", doctors: 1, patients: 78 },
    { name: "Downtown Wellness Hub", location: "Suite B", doctors: 3, patients: 142 },
  ],
  subscriptions: [
    { clinicName: "Metro Pediatrics", tier: "Professional", status: "ACTIVE", price: 279 },
    { clinicName: "Downtown Cardiology", tier: "Enterprise", status: "ACTIVE", price: 719 },
    { clinicName: "Westside Family Care", tier: "Starter", status: "ACTIVE", price: 119 },
  ],
  recentUsers: [
    { id: "user-001", name: "John Doe", email: "john.doe@gmail.com", role: "PATIENT", createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString() },
    { id: "user-002", name: "Dr. Sarah Jenkins", email: "sarah.jenkins@medclinicx.com", role: "DOCTOR", createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString() },
    { id: "user-003", name: "Jane Smith", email: "jane.smith@gmail.com", role: "PATIENT", createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString() },
    { id: "user-004", name: "Dr. Michael Torres", email: "m.torres@medclinicx.com", role: "DOCTOR", createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString() },
    { id: "user-005", name: "Admin User", email: "admin@medclinicx.com", role: "ADMIN", createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString() },
  ],
};

export async function GET() {
  try {
    return NextResponse.json(mockAdminData);
  } catch (error) {
    const err = error as Error;
    console.error("Admin API Error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
