import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json().catch(() => null);
        if (!body) {
            return NextResponse.json(
                { success: false, error: "Invalid JSON request body." },
                { status: 400 }
            );
        }

        const { name, email, company, phone, service, message } = body;

        // 1. Server-side validation
        if (!name || typeof name !== "string" || !name.trim()) {
            return NextResponse.json(
                { success: false, error: "Full Name is required." },
                { status: 400 }
            );
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
            return NextResponse.json(
                { success: false, error: "A valid business email address is required." },
                { status: 400 }
            );
        }

        if (!message || typeof message !== "string" || !message.trim()) {
            return NextResponse.json(
                { success: false, error: "Message / Project details are required." },
                { status: 400 }
            );
        }

        // Spam & Length limits
        if (name.length > 120 || email.length > 120 || (company && company.length > 150) || message.length > 5000) {
            return NextResponse.json(
                { success: false, error: "Input content exceeds allowable length." },
                { status: 400 }
            );
        }

        const cleanName = name.trim();
        const cleanEmail = email.trim();
        const cleanCompany = (company && typeof company === "string" && company.trim()) || "Not specified";
        const cleanPhone = (phone && typeof phone === "string" && phone.trim()) || "Not provided";
        const cleanService = (service && typeof service === "string" && service.trim()) || "Oracle PPM Consulting";
        const cleanMessage = message.trim();

        // 2. Resolve credentials & recipient
        const resendApiKey = process.env.RESEND_API_KEY || "";
        const recipientEmail = process.env.RECEIVER_EMAIL || "suryaganesh2619@gmail.com";
        const senderEmail = process.env.SENDER_EMAIL || "PPM Consulting Solutions <onboarding@resend.dev>";

        if (!resendApiKey) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Email dispatch service is not configured (RESEND_API_KEY missing).",
                },
                { status: 500 }
            );
        }

        // 3. Dispatch to Resend API
        const emailSubject = `Oracle PPM Inquiry: ${cleanService} | ${cleanCompany} (${cleanName})`;
        
        const htmlTemplate = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Oracle PPM Client Inquiry</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0b0f19; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #f1f5f9;">
  <div style="max-width: 640px; margin: 30px auto; background-color: #0f172a; border: 1px solid #1e293b; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);">
    
    <!-- Header Banner -->
    <div style="background-color: #0284c7; padding: 28px; text-align: left;">
      <p style="margin: 0 0 6px 0; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #e0f2fe;">PPM CONSULTING SOLUTIONS</p>
      <h1 style="margin: 0; font-size: 20px; font-weight: 800; color: #ffffff; letter-spacing: -0.02em;">New Client Project Inquiry</h1>
    </div>

    <!-- Content Area -->
    <div style="padding: 28px;">
      <p style="margin: 0 0 20px 0; font-size: 14px; color: #94a3b8; line-height: 1.5;">
        A new enterprise inquiry has been submitted via the <strong style="color: #38bdf8;">ppm-consulting-solutions</strong> contact portal.
      </p>

      <!-- Client Details Card -->
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; background-color: #1e293b; border-radius: 8px; overflow: hidden;">
        <tbody>
          <tr style="border-bottom: 1px solid #334155;">
            <td style="padding: 12px 16px; font-size: 13px; font-weight: 600; color: #94a3b8; width: 35%;">Client Name</td>
            <td style="padding: 12px 16px; font-size: 14px; font-weight: 700; color: #f8fafc;">${cleanName}</td>
          </tr>
          <tr style="border-bottom: 1px solid #334155;">
            <td style="padding: 12px 16px; font-size: 13px; font-weight: 600; color: #94a3b8;">Company / Org</td>
            <td style="padding: 12px 16px; font-size: 14px; font-weight: 600; color: #f8fafc;">${cleanCompany}</td>
          </tr>
          <tr style="border-bottom: 1px solid #334155;">
            <td style="padding: 12px 16px; font-size: 13px; font-weight: 600; color: #94a3b8;">Business Email</td>
            <td style="padding: 12px 16px; font-size: 14px; font-weight: 600; color: #38bdf8;">
              <a href="mailto:${cleanEmail}" style="color: #38bdf8; text-decoration: none;">${cleanEmail}</a>
            </td>
          </tr>
          <tr style="border-bottom: 1px solid #334155;">
            <td style="padding: 12px 16px; font-size: 13px; font-weight: 600; color: #94a3b8;">Phone Number</td>
            <td style="padding: 12px 16px; font-size: 14px; color: #f8fafc;">${cleanPhone}</td>
          </tr>
          <tr>
            <td style="padding: 12px 16px; font-size: 13px; font-weight: 600; color: #94a3b8;">Service Domain</td>
            <td style="padding: 12px 16px; font-size: 14px; font-weight: 600; color: #38bdf8;">${cleanService}</td>
          </tr>
        </tbody>
      </table>

      <!-- Message Container -->
      <div style="margin-bottom: 24px;">
        <p style="margin: 0 0 8px 0; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #94a3b8;">Requirements & Message:</p>
        <div style="padding: 16px; background-color: #0b0f19; border: 1px solid #334155; border-radius: 8px; font-size: 14px; line-height: 1.6; color: #e2e8f0; white-space: pre-wrap;">${cleanMessage.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>
      </div>

      <!-- Footer Info -->
      <div style="padding-top: 18px; border-top: 1px dashed #334155; font-size: 12px; color: #64748b; line-height: 1.5;">
        <em>Reply directly to this email to respond to <strong>${cleanName}</strong> at <strong>${cleanEmail}</strong>.</em>
      </div>
    </div>
  </div>
</body>
</html>
        `;

        const resendRes = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${resendApiKey}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                from: senderEmail,
                to: [recipientEmail],
                reply_to: cleanEmail,
                subject: emailSubject,
                html: htmlTemplate,
            }),
        });

        const resendData = await resendRes.json();

        if (!resendRes.ok) {
            console.error("[PPM Contact API] Resend Error:", resendData);
            return NextResponse.json(
                {
                    success: false,
                    error: resendData.message || "Failed to dispatch email via Resend API.",
                },
                { status: resendRes.status }
            );
        }

        return NextResponse.json({
            success: true,
            message: "Enquiry successfully transmitted to PPM Consulting Solutions team!",
            id: resendData.id,
            receiver: recipientEmail,
        });
    } catch (error: unknown) {
        console.error("[PPM Contact API] Error:", error);
        const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred while transmitting your message.";
        return NextResponse.json(
            {
                success: false,
                error: errorMessage,
            },
            { status: 500 }
        );
    }
}
