import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    // Fetch John Doe patient
    const patientUser = await prisma.user.findFirst({
      where: { email: "john.doe@gmail.com" },
      include: {
        patient: {
          include: {
            appointments: {
              include: {
                doctor: {
                  include: {
                    user: true,
                  },
                },
              },
              orderBy: {
                date: "asc",
              },
            },
          },
        },
      },
    });

    if (!patientUser || !patientUser.patient) {
      return NextResponse.json({ error: "Patient profile not found" }, { status: 404 });
    }

    return NextResponse.json({
      id: patientUser.patient.id,
      userId: patientUser.id,
      name: patientUser.name,
      email: patientUser.email,
      medicalHistory: patientUser.patient.medicalHistory,
      documents: JSON.parse(patientUser.patient.documents || "[]"),
      appointments: patientUser.patient.appointments.map((appt) => ({
        id: appt.id,
        date: appt.date,
        status: appt.status,
        notes: appt.notes,
        doctor: {
          name: appt.doctor.user.name,
          specialty: appt.doctor.specialty,
          clinic: appt.doctor.clinic,
        },
      })),
    });
  } catch (error) {
    const err = error as Error;
    console.error("Patient API Error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
