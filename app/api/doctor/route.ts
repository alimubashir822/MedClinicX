import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    // Fetch Dr. Sarah Jenkins
    const doctorUser = await prisma.user.findFirst({
      where: { email: "sarah.jenkins@medclinicx.com" },
      include: {
        doctor: {
          include: {
            appointments: {
              include: {
                patient: {
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

    if (!doctorUser || !doctorUser.doctor) {
      return NextResponse.json({ error: "Doctor profile not found" }, { status: 404 });
    }

    // Fetch messages
    const messages = await prisma.message.findMany({
      where: {
        OR: [
          { senderId: doctorUser.id },
          { receiverId: doctorUser.id }
        ]
      },
      orderBy: {
        createdAt: "asc"
      }
    });

    return NextResponse.json({
      id: doctorUser.doctor.id,
      userId: doctorUser.id,
      name: doctorUser.name,
      email: doctorUser.email,
      specialty: doctorUser.doctor.specialty,
      clinic: doctorUser.doctor.clinic,
      appointments: doctorUser.doctor.appointments.map((appt) => ({
        id: appt.id,
        date: appt.date,
        status: appt.status,
        notes: appt.notes,
        patient: {
          id: appt.patient.id,
          name: appt.patient.user.name,
          email: appt.patient.user.email,
          medicalHistory: appt.patient.medicalHistory,
        },
      })),
      messages: messages.map((msg) => ({
        id: msg.id,
        senderId: msg.senderId,
        receiverId: msg.receiverId,
        content: msg.content,
        createdAt: msg.createdAt,
      })),
    });
  } catch (error) {
    const err = error as Error;
    console.error("Doctor API Error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
