import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

export const runtime = "nodejs"; // ensure Node runtime for Resend/Supabase SDKs

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE!
);
const resend = new Resend(process.env.RESEND_API_KEY!);

const isEmail = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);

export async function POST(req: Request) {
  try {
    const { email, source } = await req.json();

    if (!email || !isEmail(email)) {
      return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
    }

    // 1) Try to save to Supabase first (upsert)
    let supabaseSuccess = false;
    try {
      const { error } = await supabase
        .from("waitlist")
        .upsert(
          { email: String(email).toLowerCase(), source: source ?? "landing" },
          { onConflict: "email" }
        );

      if (error) {
        const msg = String(error.message || "");
        // allow unique/duplicate conflicts to pass silently
        if (!/duplicate|unique/i.test(msg)) {
          console.error("Supabase error:", error);
          // Don't fail completely - continue to try sending email
        } else {
          supabaseSuccess = true;
        }
      } else {
        supabaseSuccess = true;
      }
    } catch (supabaseErr) {
      console.error("Supabase connection error:", supabaseErr);
      // Continue anyway - try to send email
    }

    // 2) Try to send email - Resend will queue it even if DNS is pending
    try {
      await resend.emails.send({
        from: `Arceus <${process.env.FROM_EMAIL!}>`,
        to: email,
        subject: "You're on the Aiva waitlist ✨",
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome to Aiva Waitlist</title>
            <style>
              @media only screen and (max-width: 600px) {
                .container { padding: 20px 15px !important; }
                .header { margin-bottom: 30px !important; }
                .logo { width: 60px !important; height: 60px !important; margin-bottom: 20px !important; }
                .title { font-size: 28px !important; }
                .subtitle { font-size: 16px !important; }
                .section-title { font-size: 20px !important; }
                .content { max-width: 100% !important; }
                .social-links { text-align: center !important; }
                .social-link { font-size: 12px !important; margin: 0 4px !important; }
                .social-separator { margin: 0 2px !important; }
                .footer { padding: 30px 15px !important; }
              }
            </style>
          </head>
          <body>
                   <div style="font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif; max-width: 100%; margin: 0 auto; padding: 40px 30px; background-color: #ffffff;" class="container">
            <!-- Centered Header with Aiva Logo -->
            <div style="text-align: center; margin-bottom: 50px;" class="header">
              <div style="width: 80px; height: 80px; border-radius: 20px; background-color: #f8f9fa; margin: 0 auto 30px auto; display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 24px rgba(0,0,0,0.15), 0 4px 12px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.05); overflow: hidden;" class="logo">
                <img src="https://www.arceus.ca/assets/aiva-app-icon.png" alt="Aiva App Icon" style="width: 100%; height: 100%; object-fit: cover;" />
              </div>
              
              <h1 style="color: #1d1d1f; font-size: 36px; margin-bottom: 16px; font-weight: 600; letter-spacing: -0.02em;" class="title">
                Welcome to the Aiva Waitlist
              </h1>
              <p style="color: #86868b; font-size: 18px; line-height: 1.4; max-width: 400px; margin: 0 auto;" class="subtitle">
                You're officially on the list. We'll email you when early access opens.
              </p>
            </div>

            <!-- Centered content section -->
            <div style="max-width: 600px; margin: 0 auto; text-align: center;" class="content">
              <!-- What happens next section -->
              <div style="margin-bottom: 40px;">
                <h2 style="color: #1d1d1f; font-size: 24px; margin-bottom: 20px; font-weight: 600; letter-spacing: -0.01em;" class="section-title">
                  What happens next
                </h2>
                <div style="text-align: left;">
                  <ul style="color: #515154; font-size: 16px; line-height: 1.6; padding-left: 0; margin: 0; list-style: none;">
                    <li style="margin-bottom: 16px; padding-left: 24px; position: relative;">
                      <span style="position: absolute; left: 0; top: 8px; width: 6px; height: 6px; border-radius: 50%; background-color: #000000;"></span>
                      We'll keep you updated on our progress
                    </li>
                    <li style="margin-bottom: 16px; padding-left: 24px; position: relative;">
                      <span style="position: absolute; left: 0; top: 8px; width: 6px; height: 6px; border-radius: 50%; background-color: #000000;"></span>
                      You'll be among the first to know when Aiva launches
                    </li>
                    <li style="margin-bottom: 16px; padding-left: 24px; position: relative;">
                      <span style="position: absolute; left: 0; top: 8px; width: 6px; height: 6px; border-radius: 50%; background-color: #000000;"></span>
                      Get early access to exclusive features and updates
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Light gray bottom section -->
            <div style="background-color: #f8f9fa; margin-top: 60px; padding: 40px 20px; text-align: center;" class="footer">
              <!-- Social Links - Above the divider -->
              <div style="text-align: center; margin-bottom: 32px;" class="social-links">
                <span style="color: #FF0000; text-decoration: none; margin: 0 8px; font-size: 16px; font-weight: 500;">
                  <a href="https://www.youtube.com/@ArceusAI" style="color: #FF0000; text-decoration: none;" class="social-link">YouTube</a>
                </span>
                <span style="color: #d1d5db; margin: 0 4px;">|</span>
                <span style="color: #E4405F; text-decoration: none; margin: 0 8px; font-size: 16px; font-weight: 500;">
                  <a href="https://www.instagram.com/arceusai/" style="color: #E4405F; text-decoration: none;" class="social-link">Instagram</a>
                </span>
                <span style="color: #d1d5db; margin: 0 4px;">|</span>
                <span style="color: #0077B5; text-decoration: none; margin: 0 8px; font-size: 16px; font-weight: 500;">
                  <a href="https://www.linkedin.com/company/arceusai/" style="color: #0077B5; text-decoration: none;" class="social-link">LinkedIn</a>
                </span>
                <span style="color: #d1d5db; margin: 0 4px;">|</span>
                <span style="color: #5865F2; text-decoration: none; margin: 0 8px; font-size: 16px; font-weight: 500;">
                  <a href="https://discord.com/channels/1379314631037816852/1379317472817319986" style="color: #5865F2; text-decoration: none;" class="social-link">Discord</a>
                </span>
              </div>

              <!-- Divider above contact section -->
              <div style="border-top: 1px solid #e5e7eb; margin-bottom: 32px;"></div>

              <!-- Contact info -->
              <div style="text-align: center; margin-bottom: 24px;">
                <p style="color: #515154; font-size: 16px; margin: 0;">
                  Contact us at <a href="mailto:info@arceus.ca" style="color: #007AFF; text-decoration: none; font-weight: 500;">info@arceus.ca</a>
                </p>
              </div>

              <!-- Arceus Logo - Centered -->
              <div style="text-align: center; margin-bottom: 20px;">
                <div style="width: 40px; height: 40px; border-radius: 10px; background-color: #ffffff; display: inline-block; box-shadow: 0 4px 12px rgba(0,0,0,0.06); overflow: hidden; vertical-align: middle;">
                  <img src="https://www.arceus.ca/assets/arceus-logo-glass.png" alt="Arceus Logo" style="width: 100%; height: 100%; object-fit: cover; display: block;" />
                </div>
              </div>

              <p style="color: #86868b; font-size: 14px; margin: 0;">
                © 2025 Arceus Inc. All rights reserved.
              </p>
            </div>
          </div>
          </body>
          </html>
        `,
      });
      
      // Email queued successfully (even if DNS is pending)
      // Return success even if Supabase failed (email confirmation is more important)
      return NextResponse.json({ ok: true });
      
    } catch (sendErr: unknown) {
      console.error("Resend email error:", sendErr instanceof Error ? sendErr.message : sendErr);
      
      // If email fails but Supabase succeeded, still return success
      if (supabaseSuccess) {
        return NextResponse.json({ ok: true });
      }
      // If both failed, return a more helpful error
      return NextResponse.json({ 
        ok: false, 
        error: "Unable to process your request. Please try again later." 
      }, { status: 500 });
    }

  } catch (e: unknown) {
    console.error("Unexpected error:", e);
    const errorMessage = e instanceof Error ? e.message : "Server error";
    return NextResponse.json({ 
      ok: false, 
      error: "Something went wrong. Please try again." 
    }, { status: 500 });
  }
}
