import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import { WaitlistConfirmation } from "@/emails/WaitlistConfirmation";
import React from "react";

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

    // 1) Always save to Supabase first (upsert) - this should never fail
    const { error } = await supabase
      .from("marketing.waitlist")
      .upsert(
        { email: String(email).toLowerCase(), source: source ?? "landing" },
        { onConflict: "email" }
      );

    if (error) {
      const msg = String(error.message || "");
      // allow unique/duplicate conflicts to pass silently
      if (!/duplicate|unique/i.test(msg)) {
        console.error("Supabase error:", error);
        return NextResponse.json({ ok: false, error: "Failed to save email" }, { status: 500 });
      }
    }

    // 2) Try to send email - Resend will queue it even if DNS is pending
    try {
      await resend.emails.send({
        from: `Arceus <${process.env.FROM_EMAIL!}>`,
        to: email,
        subject: "You're on the Aiva waitlist ✨",
        react: React.createElement(WaitlistConfirmation, {}),
      });
      
      // Email queued successfully (even if DNS is pending)
      return NextResponse.json({ ok: true });
      
    } catch (sendErr: unknown) {
      console.error("Resend email error:", sendErr instanceof Error ? sendErr.message : sendErr);
      
      // If email fails completely, still return success since email is saved
      // Resend will retry/queue once DNS is verified
      return NextResponse.json({ ok: true });
    }

  } catch (e: unknown) {
    console.error("Unexpected error:", e);
    const errorMessage = e instanceof Error ? e.message : "Server error";
    return NextResponse.json({ ok: false, error: errorMessage }, { status: 500 });
  }
}
