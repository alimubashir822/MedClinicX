const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  console.log("Starting database seeding...");

  // Clean existing data
  await prisma.message.deleteMany({});
  await prisma.appointment.deleteMany({});
  await prisma.doctor.deleteMany({});
  await prisma.patient.deleteMany({});
  await prisma.user.deleteMany({});

  console.log("Cleaned existing database records.");

  // Create ADMIN
  const admin = await prisma.user.create({
    data: {
      name: "MedClinicX Admin",
      email: "admin@medclinicx.com",
      password: "adminpassword",
      role: "ADMIN",
    },
  });

  // Create DOCTOR Users & Profiles
  const doc1User = await prisma.user.create({
    data: {
      name: "Dr. Sarah Jenkins",
      email: "sarah.jenkins@medclinicx.com",
      password: "doctorpassword",
      role: "DOCTOR",
    },
  });

  const doc1 = await prisma.doctor.create({
    data: {
      userId: doc1User.id,
      specialty: "Cardiology & Vascular Medicine",
      clinic: "Heart & Vascular Center (Suite A)",
    },
  });

  const doc2User = await prisma.user.create({
    data: {
      name: "Dr. Alex Patel",
      email: "alex.patel@medclinicx.com",
      password: "doctorpassword",
      role: "DOCTOR",
    },
  });

  const doc2 = await prisma.doctor.create({
    data: {
      userId: doc2User.id,
      specialty: "Pediatrics & Family Medicine",
      clinic: "Metro Pediatrics & Wellness (Suite C)",
    },
  });

  // Create PATIENT Users & Profiles
  const patient1User = await prisma.user.create({
    data: {
      name: "John Doe",
      email: "john.doe@gmail.com",
      password: "patientpassword",
      role: "PATIENT",
    },
  });

  const patient1 = await prisma.patient.create({
    data: {
      userId: patient1User.id,
      medicalHistory: "Chronic Hypertension. Managed with Lisinopril 10mg daily. Complains of mild seasonal allergies.",
      documents: JSON.stringify([
        { id: "doc-1", name: "Blood_Panel_June2026.pdf", date: "2026-06-10", size: "1.2 MB", type: "PDF" },
        { id: "doc-2", name: "ECG_Report_May2026.pdf", date: "2026-05-18", size: "850 KB", type: "PDF" }
      ]),
    },
  });

  const patient2User = await prisma.user.create({
    data: {
      name: "Jane Smith",
      email: "jane.smith@gmail.com",
      password: "patientpassword",
      role: "PATIENT",
    },
  });

  const patient2 = await prisma.patient.create({
    data: {
      userId: patient2User.id,
      medicalHistory: "Type 2 Diabetes Mellitus. Uses Metformin 500mg twice daily. Routine retina screening is up to date.",
      documents: JSON.stringify([
        { id: "doc-3", name: "HbA1c_Test_April2026.pdf", date: "2026-04-12", size: "640 KB", type: "PDF" },
        { id: "doc-4", name: "Retinal_Scan_May2026.png", date: "2026-05-02", size: "2.4 MB", type: "Image" }
      ]),
    },
  });

  // Create APPOINTMENTS
  const today = new Date();
  
  const appt1 = await prisma.appointment.create({
    data: {
      patientId: patient1.id,
      doctorId: doc1.id,
      date: new Date(today.getTime() + 24 * 60 * 60 * 1000), // Tomorrow
      status: "CONFIRMED",
      notes: "Routine cardiovascular checkup and blood pressure monitoring.",
    },
  });

  const appt2 = await prisma.appointment.create({
    data: {
      patientId: patient1.id,
      doctorId: doc1.id,
      date: new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000), // Last week
      status: "COMPLETED",
      notes: "Follow up ECG review. Rhythm normal.",
    },
  });

  const appt3 = await prisma.appointment.create({
    data: {
      patientId: patient2.id,
      doctorId: doc2.id,
      date: new Date(today.getTime() + 3 * 24 * 60 * 60 * 1000), // 3 days later
      status: "PENDING",
      notes: "Quarterly diabetes management consultation and glucose check.",
    },
  });

  // Create MESSAGES
  await prisma.message.create({
    data: {
      senderId: patient1User.id,
      receiverId: doc1User.id,
      content: "Hello Dr. Jenkins, I wanted to follow up on my blood test results. Have they been released yet?",
      createdAt: new Date(today.getTime() - 2 * 60 * 60 * 1000),
    },
  });

  await prisma.message.create({
    data: {
      senderId: doc1User.id,
      receiverId: patient1User.id,
      content: "Yes John, they have. Your blood work looks excellent. Your cholesterol levels are within range. I'll review it together at your checkup tomorrow.",
      createdAt: new Date(today.getTime() - 1 * 60 * 60 * 1000),
    },
  });

  console.log("Seeding complete! Successfully seeded users, profiles, appointments, and messages.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
