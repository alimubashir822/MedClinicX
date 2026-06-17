import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const userCount = await prisma.user.count();
    const doctorCount = await prisma.doctor.count();
    const patientCount = await prisma.patient.count();
    const appointmentCount = await prisma.appointment.count();

    const clinics = [
      { name: "Heart & Vascular Center", location: "Suite A", doctors: 1, patients: 45 },
      { name: "Metro Pediatrics & Wellness", location: "Suite C", doctors: 1, patients: 78 },
      { name: "Downtown Wellness Hub", location: "Suite B", doctors: 3, patients: 142 },
    ];

    const subscriptions = [
      { clinicName: "Metro Pediatrics", tier: "Professional", status: "ACTIVE", price: 279 },
      { clinicName: "Downtown Cardiology", tier: "Enterprise", status: "ACTIVE", price: 719 },
      { clinicName: "Westside Family Care", tier: "Starter", status: "ACTIVE", price: 119 },
    ];

    const recentUsers = await prisma.user.findMany({
      take: 5,
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({
      stats: {
        totalClinics: clinics.length,
        totalDoctors: doctorCount,
        totalPatients: patientCount,
        totalAppointments: appointmentCount,
        totalUsers: userCount,
        estimatedRevenue: 1117, // 279 + 719 + 119
      },
      clinics,
      subscriptions,
      recentUsers: recentUsers.map((u) => ({
        id: u.id,
        name: u.name,
        email: u.email,
        role: u.role,
        createdAt: u.createdAt,
      })),
    });
    } catch (error) {
    const err = error as Error;
    console.error("Admin API Error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
