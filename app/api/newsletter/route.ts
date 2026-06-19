import { NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, source } = body;

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

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

    // 1. Send via Resend if API key is configured
    if (resend) {
      const { data, error } = await resend.emails.send({
        from: "Med Clinic X <onboarding@resend.dev>", // replace with domain once verified
        to: ["neefox360@gmail.com"],
        subject: emailSubject,
        html: emailHtml,
      });

      if (error) {
        console.error("Resend newsletter send error:", error);
        return NextResponse.json({ error: error.message }, { status: 400 });
      }

      return NextResponse.json({ success: true, data });
    }

    // 2. Dev fallback logging if no API key is found
    console.log("=================================================");
    console.log("🔔 [DEV MOCK EMAIL] RESEND_API_KEY not configured.");
    console.log(`FROM: Med Clinic X <onboarding@resend.dev>`);
    console.log(`TO: neefox360@gmail.com`);
    console.log(`SUBJECT: ${emailSubject}`);
    console.log("---------------- CONTENT ----------------");
    console.log(`Source / Form Origin: ${source || "Newsletter (General)"}`);
    console.log(`Subscriber Email: ${email}`);
    console.log("=================================================");

    return NextResponse.json({
      success: true,
      message: "Newsletter subscription logged successfully. Add RESEND_API_KEY in .env for live email delivery.",
      mock: true
    });
  } catch (error: unknown) {
    console.error("Newsletter route error:", error);
    const errMessage = error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json({ error: errMessage }, { status: 500 });
  }
}
