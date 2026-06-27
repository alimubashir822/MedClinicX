import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, source } = body;

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_APP_PASSWORD;

    const emailSubject = `[MedClinicX - Subscription] New Subscriber Alert`;
    const emailHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
        <h2 style="color: #6366f1; border-bottom: 2px solid #6366f1; padding-bottom: 8px; margin-bottom: 20px;">
          New Newsletter Subscription Alert
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr style="background-color: #f8fafc;">
            <td style="padding: 10px; font-weight: bold; width: 35%;">Origin / Source:</td>
            <td style="padding: 10px; color: #1e293b; font-weight: bold;">
              ${source || "Newsletter / General"}
            </td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold;">Subscriber Email:</td>
            <td style="padding: 10px; color: #334155;">
              <a href="mailto:${email}" style="color: #6366f1;">${email}</a>
            </td>
          </tr>
          <tr style="background-color: #f8fafc;">
            <td style="padding: 10px; font-weight: bold;">Time:</td>
            <td style="padding: 10px; color: #334155;">
              ${new Date().toISOString()}
            </td>
          </tr>
        </table>
        <p style="font-size: 11px; color: #64748b; margin-top: 30px; text-align: center; border-top: 1px solid #e5e7eb; padding-top: 15px;">
          This submission was sent from the MedClinicX web application's ${source || "newsletter form"}.
        </p>
      </div>
    `;

    // 1. Send via Gmail SMTP if credentials are configured
    if (gmailUser && gmailPass) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: gmailUser,
          pass: gmailPass,
        },
      });

      try {
        await transporter.sendMail({
          from: `"Med Clinic X" <${gmailUser}>`,
          to: "medclinicx@gmail.com",
          subject: emailSubject,
          html: emailHtml,
        });

        return NextResponse.json({ success: true });
      } catch (err: unknown) {
        console.error("Gmail SMTP error:", err);
        const errMessage = err instanceof Error ? err.message : "Failed to send email";
        return NextResponse.json({ error: errMessage }, { status: 500 });
      }
    }

    // 2. Dev fallback logging if no credentials are found
    console.log("=================================================");
    console.log("🔔 [DEV MOCK EMAIL] GMAIL_USER / GMAIL_APP_PASSWORD not configured.");
    console.log(`FROM: Med Clinic X <medclinicx@gmail.com>`);
    console.log(`TO: medclinicx@gmail.com`);
    console.log(`SUBJECT: ${emailSubject}`);
    console.log("---------------- CONTENT ----------------");
    console.log(`Source / Form Origin: ${source || "Newsletter (General)"}`);
    console.log(`Subscriber Email: ${email}`);
    console.log("=================================================");

    return NextResponse.json({
      success: true,
      message: "Newsletter subscription logged successfully. Add GMAIL_USER and GMAIL_APP_PASSWORD in .env for live email delivery.",
      mock: true
    });
  } catch (error: unknown) {
    console.error("Newsletter route error:", error);
    const errMessage = error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json({ error: errMessage }, { status: 500 });
  }
}
