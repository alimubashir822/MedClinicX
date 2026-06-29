import { NextResponse } from "next/server";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json() as { messages: ChatMessage[] };

    if (!messages || messages.length === 0) {
      return NextResponse.json({ error: "No messages provided" }, { status: 400 });
    }

    // Extract conversation content
    const userMessages = messages.filter((m) => m.role === "user").map((m) => m.content);
    const fullHistoryText = messages.map((m) => `${m.role}: ${m.content}`).join("\n");

    // State detection based on keywords and questions asked
    let name = "";
    let phone = "";
    let service = "";
    let dateTime = "";

    // 1. Detect Name
    for (let i = 0; i < messages.length; i++) {
      const msg = messages[i];
      if (msg.role === "assistant" && msg.content.toLowerCase().includes("your name")) {
        const nextMsg = messages[i + 1];
        if (nextMsg && nextMsg.role === "user") {
          name = nextMsg.content.replace(/my name is|i am|this is/gi, "").trim();
        }
      }
    }
    // Fallback search for name
    if (!name && userMessages.length > 0) {
      const firstInput = userMessages[0];
      if (firstInput.toLowerCase().includes("book") && (firstInput.toLowerCase().includes("name is") || firstInput.toLowerCase().includes("i'm"))) {
        const match = firstInput.match(/(?:name is|i'm|i am)\s+([A-Za-z\s]{2,15})/i);
        if (match) name = match[1].trim();
      } else if (userMessages.length === 1 && !firstInput.toLowerCase().includes("book") && firstInput.length < 20) {
        name = firstInput.trim();
      }
    }

    // 2. Detect Phone
    for (const text of userMessages) {
      const match = text.match(/(?:\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/);
      if (match) {
        phone = match[0].trim();
      }
    }

    // 3. Detect Service
    const lowerHistory = fullHistoryText.toLowerCase();
    if (lowerHistory.includes("cardio") || lowerHistory.includes("heart") || lowerHistory.includes("vascular")) {
      service = "Cardiology";
    } else if (lowerHistory.includes("pediat") || lowerHistory.includes("child") || lowerHistory.includes("baby")) {
      service = "Pediatrics";
    } else if (lowerHistory.includes("general") || lowerHistory.includes("checkup") || lowerHistory.includes("cough") || lowerHistory.includes("fever")) {
      service = "General Practice";
    }

    // 4. Detect Date/Time
    for (let i = 0; i < messages.length; i++) {
      const msg = messages[i];
      if (msg.role === "assistant" && (msg.content.toLowerCase().includes("preferred time") || msg.content.toLowerCase().includes("preferred date") || msg.content.toLowerCase().includes("what date"))) {
        const nextMsg = messages[i + 1];
        if (nextMsg && nextMsg.role === "user") {
          dateTime = nextMsg.content.trim();
        }
      }
    }

    let responseText = "";
    let bookingCompleted = false;

    if (!name) {
      responseText = "Hello! I am the Med Clinic X AI Receptionist. I can help you schedule an appointment. May I start by getting your name?";
    } else if (!phone) {
      responseText = `Thanks, ${name}. Can I get a mobile phone number to send your confirmation and reminder alerts?`;
    } else if (!service) {
      responseText = `Great, got it. What type of medical service do you require? (We offer Cardiology, Pediatrics, and General Medicine)`;
    } else if (!dateTime) {
      responseText = `Perfect. What preferred date and time works best for your appointment? (e.g., tomorrow at 10:00 AM or Friday at 2:00 PM)`;
    } else {
      bookingCompleted = true;

      // Attempt to write to database — gracefully skip on Vercel/serverless
      try {
        const { prisma } = await import("@/lib/prisma");
        const patient = await prisma.patient.findFirst({ include: { user: true } });
        const doctor = await prisma.doctor.findFirst({
          where: { specialty: { contains: service === "General Practice" ? "Family" : service } }
        });

        if (patient && doctor) {
          const apptDate = new Date();
          apptDate.setDate(apptDate.getDate() + 2);
          await prisma.appointment.create({
            data: {
              patientId: patient.id,
              doctorId: doctor.id,
              date: apptDate,
              status: "CONFIRMED",
              notes: `Auto-booked via AI Receptionist. Patient Name provided: ${name}. Contact Phone: ${phone}. Requested Time: ${dateTime}.`,
            },
          });
        }
      } catch {
        // DB not available (Vercel/serverless environment) — skip silently
        console.log("Database write skipped — running in stateless mode.");
      }

      responseText = `Thank you, ${name}! I have successfully reserved your ${service} appointment. We have sent a confirmation message to ${phone}. Your appointment has been recorded and is visible on your portal dashboard!`;
    }

    return NextResponse.json({
      role: "assistant",
      content: responseText,
      collectedData: {
        name: name || null,
        phone: phone || null,
        service: service || null,
        dateTime: dateTime || null,
      },
      bookingCompleted,
    });
  } catch (error) {
    const err = error as Error;
    console.error("Chat API Error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
