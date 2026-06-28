import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, portfolioUrl, resumeName, position, extraFields } = body;

    if (!name || !email || !position) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_APP_PASSWORD;

    // Build extra fields HTML rows
    let extraRowsHtml = "";
    if (extraFields && typeof extraFields === "object") {
      for (const [key, value] of Object.entries(extraFields)) {
        const label = key
          .replace(/([A-Z])/g, " $1")
          .replace(/^./, (s) => s.toUpperCase())
          .trim();
        extraRowsHtml += `
          <tr>
            <td style="padding: 10px; font-weight: bold;">${label}:</td>
            <td style="padding: 10px; color: #334155;">${value ?? "N/A"}</td>
          </tr>`;
      }
    }

    const emailSubject = `[MedClinicX - Job Application] New Application: ${position}`;
    const emailHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
        <h2 style="color: #0ea5e9; border-bottom: 2px solid #0ea5e9; padding-bottom: 8px; margin-bottom: 20px;">
          New Job Application
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr style="background-color: #f8fafc;">
            <td style="padding: 10px; font-weight: bold; width: 35%;">Position Applied:</td>
            <td style="padding: 10px; color: #1e293b; font-weight: bold;">${position}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold;">Applicant Name:</td>
            <td style="padding: 10px; color: #334155;">${name}</td>
          </tr>
          <tr style="background-color: #f8fafc;">
            <td style="padding: 10px; font-weight: bold;">Email:</td>
            <td style="padding: 10px; color: #334155;">
              <a href="mailto:${email}" style="color: #0ea5e9;">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold;">Portfolio / LinkedIn:</td>
            <td style="padding: 10px; color: #334155;">${portfolioUrl || "N/A"}</td>
          </tr>
          <tr style="background-color: #f8fafc;">
            <td style="padding: 10px; font-weight: bold;">Resume / CV File:</td>
            <td style="padding: 10px; color: #334155;">${resumeName || "N/A"}</td>
          </tr>
          ${extraRowsHtml}
        </table>
        <p style="font-size: 11px; color: #64748b; margin-top: 30px; text-align: center; border-top: 1px solid #e5e7eb; padding-top: 15px;">
          This application was submitted from the MedClinicX Careers page.
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
          replyTo: email,
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
    console.log(`Position: ${position}`);
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Portfolio/LinkedIn: ${portfolioUrl || "N/A"}`);
    console.log(`Resume File: ${resumeName || "N/A"}`);
    if (extraFields) {
      console.log(`Extra Fields: ${JSON.stringify(extraFields, null, 2)}`);
    }
    console.log("=================================================");

    return NextResponse.json({
      success: true,
      message: "Application logged successfully. Add GMAIL_USER and GMAIL_APP_PASSWORD in .env for live email delivery.",
      mock: true,
    });
  } catch (error: unknown) {
    console.error("Careers route error:", error);
    const errMessage = error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json({ error: errMessage }, { status: 500 });
  }
}
