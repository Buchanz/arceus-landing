import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import { WaitlistConfirmation } from "@/emails/WaitlistConfirmation";
import React from "react";

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

    // Save email to Supabase
    const { error } = await supabase
      .from("marketing.waitlist")
      .upsert(
        { email: email.toLowerCase(), source: source ?? "landing" },
        { onConflict: "email" }
      );
    if (error) throw error;

    // Send confirmation email
    await resend.emails.send({
      from: `Arceus <${process.env.FROM_EMAIL!}>`,
      to: email,
      subject: "🎉 Welcome to the Aiva Waitlist",
      react: React.createElement(WaitlistConfirmation, {}),
    });

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Server error";
    return NextResponse.json({ ok: false, error: errorMessage }, { status: 500 });
  }
}
