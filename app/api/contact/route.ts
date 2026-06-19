import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend client if key is set
const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, clinic, phone, type, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const emailSubject = `[MedClinicX - Contact Form] New Inquiry: ${type || "General"}`;
    const emailHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; rounded: 8px;">
        <h2 style="color: #0ea5e9; border-bottom: 2px solid #0ea5e9; padding-bottom: 8px; margin-bottom: 20px;">
          New Contact Form Inquiry
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr style="background-color: #f8fafc;">
            <td style="padding: 10px; font-weight: bold; width: 35%;">Origin / Source:</td>
            <td style="padding: 10px; color: #1e293b; font-weight: bold;">Contact Form</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold;">Name:</td>
            <td style="padding: 10px; color: #334155;">${name}</td>
          </tr>
          <tr style="background-color: #f8fafc;">
            <td style="padding: 10px; font-weight: bold;">Email:</td>
            <td style="padding: 10px; color: #334155;">
              <a href="mailto:${email}" style="color: #0ea5e9;">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold;">Clinic / Org:</td>
            <td style="padding: 10px; color: #334155;">${clinic || "N/A"}</td>
          </tr>
          <tr style="background-color: #f8fafc;">
            <td style="padding: 10px; font-weight: bold;">Phone:</td>
            <td style="padding: 10px; color: #334155;">${phone || "N/A"}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold;">Inquiry Type:</td>
            <td style="padding: 10px; color: #334155; font-weight: bold;">${type}</td>
          </tr>
        </table>
        <div style="background-color: #f1f5f9; padding: 15px; border-radius: 6px;">
          <p style="margin-top: 0; font-weight: bold; color: #1e293b;">Message:</p>
          <p style="margin-bottom: 0; color: #334155; white-space: pre-wrap; line-height: 1.6;">${message}</p>
        </div>
        <p style="font-size: 11px; color: #64748b; margin-top: 30px; text-align: center; border-top: 1px solid #e5e7eb; padding-top: 15px;">
          This submission was sent from the MedClinicX Contact Page form.
        </p>
      </div>
    `;

    // 1. Send via Resend if API key is configured
    if (resend) {
      const recipients = ["neefox360@gmail.com", "alimubashir822@gmail.com"];
      let sentCount = 0;
      let lastErrorMsg = "Failed to send email";

      for (const recipient of recipients) {
        try {
          const { error } = await resend.emails.send({
            from: "Med Clinic X <onboarding@resend.dev>", // replace with domain once verified
            to: [recipient],
            subject: emailSubject,
            html: emailHtml,
          });

          if (error) {
            console.error(`Resend send error for ${recipient}:`, error);
            lastErrorMsg = error.message;
          } else {
            sentCount++;
          }
        } catch (err: unknown) {
          console.error(`Resend connection exception for ${recipient}:`, err);
          if (err instanceof Error) {
            lastErrorMsg = err.message;
          }
        }
      }

      if (sentCount === 0) {
        return NextResponse.json({ error: lastErrorMsg }, { status: 400 });
      }

      return NextResponse.json({ success: true, sentCount });
    }

    // 2. Dev fallback logging if no API key is found
    console.log("=================================================");
    console.log("🔔 [DEV MOCK EMAIL] RESEND_API_KEY not configured.");
    console.log(`FROM: Med Clinic X <onboarding@resend.dev>`);
    console.log(`TO: neefox360@gmail.com, alimubashir822@gmail.com`);
    console.log(`SUBJECT: ${emailSubject}`);
    console.log("---------------- CONTENT ----------------");
    console.log(`Source: Contact Form`);
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Clinic: ${clinic || "N/A"}`);
    console.log(`Phone: ${phone || "N/A"}`);
    console.log(`Type: ${type}`);
    console.log(`Message:\n${message}`);
    console.log("=================================================");

    return NextResponse.json({
      success: true,
      message: "Form submission logged successfully. Add RESEND_API_KEY in .env for live email delivery.",
      mock: true
    });
  } catch (error: unknown) {
    console.error("Contact route error:", error);
    const errMessage = error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json({ error: errMessage }, { status: 500 });
  }
}
