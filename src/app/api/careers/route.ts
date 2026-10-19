import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const formData = await req.formData().catch(() => null);
        if (!formData) {
            return NextResponse.json(
                { success: false, error: "Invalid form data submission." },
                { status: 400 }
            );
        }

        const name = formData.get("name");
        const email = formData.get("email");
        const phone = formData.get("phone");
        const role = formData.get("role");
        const experience = formData.get("experience");
        const message = formData.get("message");
        const resumeFile = formData.get("resume");

        // 1. Server-side validations
        if (!name || typeof name !== "string" || !name.trim()) {
            return NextResponse.json(
                { success: false, error: "Candidate full name is required." },
                { status: 400 }
            );
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
            return NextResponse.json(
                { success: false, error: "A valid email address is required." },
                { status: 400 }
            );
        }

        if (!phone || typeof phone !== "string" || !phone.trim()) {
            return NextResponse.json(
                { success: false, error: "A valid contact phone number is required." },
                { status: 400 }
            );
        }

        if (!role || typeof role !== "string" || !role.trim()) {
            return NextResponse.json(
                { success: false, error: "Target position / role is required." },
                { status: 400 }
            );
        }

        // Validate resume file
        if (!resumeFile || !(resumeFile instanceof File) || typeof resumeFile === "string") {
            return NextResponse.json(
                { success: false, error: "Please upload your resume in PDF format." },
                { status: 400 }
            );
        }

        const isPdf =
            resumeFile.type === "application/pdf" ||
            resumeFile.name.toLowerCase().endsWith(".pdf");

        if (!isPdf) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Invalid file format. Only PDF documents (.pdf) are accepted for resume submissions.",
                },
                { status: 400 }
            );
        }

        // File size limit: 5 MB (5 * 1024 * 1024)
        const maxFileSize = 5 * 1024 * 1024;
        if (resumeFile.size > maxFileSize) {
            return NextResponse.json(
                {
                    success: false,
                    error: `Resume file is too large (${(resumeFile.size / (1024 * 1024)).toFixed(2)} MB). Maximum allowed size is 5 MB.`,
                },
                { status: 400 }
            );
        }

        if (resumeFile.size === 0) {
            return NextResponse.json(
                { success: false, error: "Uploaded resume file is empty." },
                { status: 400 }
            );
        }

        // Spam & Length limits
        if (
            name.length > 120 ||
            email.length > 120 ||
            phone.length > 35 ||
            role.length > 150 ||
            (typeof message === "string" && message.length > 5000)
        ) {
            return NextResponse.json(
                { success: false, error: "Input text exceeds allowable length." },
                { status: 400 }
            );
        }

        const cleanName = name.trim();
        const cleanEmail = email.trim();
        const cleanPhone = phone.trim();
        const cleanRole = role.trim();
        const cleanExperience =
            (experience && typeof experience === "string" && experience.trim()) || "Not specified";
        const cleanMessage =
            (message && typeof message === "string" && message.trim()) ||
            "No additional cover note provided.";

        // Convert uploaded file to base64 for Resend attachment
        const arrayBuffer = await resumeFile.arrayBuffer();
        const base64Content = Buffer.from(arrayBuffer).toString("base64");
        const cleanFilename =
            resumeFile.name.replace(/[^a-zA-Z0-9._-]/g, "_") || "Candidate_Resume.pdf";
        const formattedFileSize = `${(resumeFile.size / 1024).toFixed(1)} KB`;

        // 2. Resolve credentials & recipient
        const resendApiKey = process.env.RESEND_API_KEY || "";
        const recipientEmail =
            process.env.RECEIVER_EMAIL || "suryaganesh2619@gmail.com";
        const senderEmail =
            process.env.SENDER_EMAIL || "PPM Consulting Solutions <onboarding@resend.dev>";

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
        const emailSubject = `Job Application: ${cleanRole} - ${cleanName}`;

        const htmlTemplate = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Candidate Job Application</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0b0f19; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #f1f5f9;">
  <div style="max-width: 640px; margin: 30px auto; background-color: #0f172a; border: 1px solid #1e293b; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);">
    
    <!-- Header Banner -->
    <div style="background-color: #0284c7; padding: 28px; text-align: left;">
      <p style="margin: 0 0 6px 0; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #e0f2fe;">PPM CONSULTING SOLUTIONS — TALENT ACQUISITION</p>
      <h1 style="margin: 0; font-size: 20px; font-weight: 800; color: #ffffff; letter-spacing: -0.02em;">New Candidate Job Application</h1>
    </div>

    <!-- Content Area -->
    <div style="padding: 28px;">
      <p style="margin: 0 0 20px 0; font-size: 14px; color: #94a3b8; line-height: 1.5;">
        A new candidate application has been submitted through the <strong style="color: #38bdf8;">PPM Consulting Solutions Careers Portal</strong>. The candidate's resume is attached to this transmission.
      </p>

      <!-- Candidate Details Card -->
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; background-color: #1e293b; border-radius: 8px; overflow: hidden;">
        <tbody>
          <tr style="border-bottom: 1px solid #334155;">
            <td style="padding: 12px 16px; font-size: 13px; font-weight: 600; color: #94a3b8; width: 35%;">Applicant Name</td>
            <td style="padding: 12px 16px; font-size: 14px; font-weight: 700; color: #f8fafc;">${cleanName}</td>
          </tr>
          <tr style="border-bottom: 1px solid #334155;">
            <td style="padding: 12px 16px; font-size: 13px; font-weight: 600; color: #94a3b8;">Target Position</td>
            <td style="padding: 12px 16px; font-size: 14px; font-weight: 700; color: #38bdf8;">${cleanRole}</td>
          </tr>
          <tr style="border-bottom: 1px solid #334155;">
            <td style="padding: 12px 16px; font-size: 13px; font-weight: 600; color: #94a3b8;">Candidate Email</td>
            <td style="padding: 12px 16px; font-size: 14px; font-weight: 600; color: #38bdf8;">
              <a href="mailto:${cleanEmail}" style="color: #38bdf8; text-decoration: none;">${cleanEmail}</a>
            </td>
          </tr>
          <tr style="border-bottom: 1px solid #334155;">
            <td style="padding: 12px 16px; font-size: 13px; font-weight: 600; color: #94a3b8;">Phone Number</td>
            <td style="padding: 12px 16px; font-size: 14px; color: #f8fafc;">
              <a href="tel:${cleanPhone}" style="color: #f8fafc; text-decoration: none;">${cleanPhone}</a>
            </td>
          </tr>
          <tr style="border-bottom: 1px solid #334155;">
            <td style="padding: 12px 16px; font-size: 13px; font-weight: 600; color: #94a3b8;">Experience Level</td>
            <td style="padding: 12px 16px; font-size: 14px; color: #f8fafc;">${cleanExperience}</td>
          </tr>
          <tr>
            <td style="padding: 12px 16px; font-size: 13px; font-weight: 600; color: #94a3b8;">Resume Attachment</td>
            <td style="padding: 12px 16px; font-size: 13px; font-weight: 600; color: #34d399;">
              📄 ${cleanFilename} (${formattedFileSize})
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Cover Note / Summary -->
      <div style="margin-bottom: 24px;">
        <p style="margin: 0 0 8px 0; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #94a3b8;">Cover Note / Candidate Summary:</p>
        <div style="padding: 16px; background-color: #0b0f19; border: 1px solid #334155; border-radius: 8px; font-size: 14px; line-height: 1.6; color: #e2e8f0; white-space: pre-wrap;">${cleanMessage.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>
      </div>

      <!-- Footer Info -->
      <div style="padding-top: 18px; border-top: 1px dashed #334155; font-size: 12px; color: #64748b; line-height: 1.5;">
        <em>Reply directly to this email to schedule an interview or contact <strong>${cleanName}</strong> at <strong>${cleanEmail}</strong>.</em>
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
                attachments: [
                    {
                        filename: cleanFilename,
                        content: base64Content,
                    },
                ],
            }),
        });

        const resendData = await resendRes.json();

        if (!resendRes.ok) {
            console.error("[Careers Apply API] Resend Error:", resendData);
            return NextResponse.json(
                {
                    success: false,
                    error: resendData.message || "Failed to dispatch application via email service.",
                },
                { status: resendRes.status }
            );
        }

        return NextResponse.json({
            success: true,
            message: "Your application and resume have been successfully transmitted to our recruitment team!",
            id: resendData.id,
            receiver: recipientEmail,
        });
    } catch (error: unknown) {
        console.error("[Careers Apply API] Error:", error);
        const errorMessage =
            error instanceof Error
                ? error.message
                : "An unexpected error occurred while transmitting your application.";
        return NextResponse.json(
            {
                success: false,
                error: errorMessage,
            },
            { status: 500 }
        );
    }
}
