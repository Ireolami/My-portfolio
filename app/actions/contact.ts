"use server";

import { Resend } from "resend";

interface ActionResult {
  success: boolean;
  error?: string;
}

const lastSubmissions = new Map<string, number>();

function isRateLimited(ip: string): boolean {
  const last = lastSubmissions.get(ip);
  const now = Date.now();
  if (last && now - last < 60_000) return true;
  lastSubmissions.set(ip, now);
  return false;
}

export async function submitContact(
  _prevState: ActionResult,
  formData: FormData
): Promise<ActionResult> {
  // Honeypot check — bots fill hidden fields, humans don't
  const honeypot = formData.get("website") as string | null;
  if (honeypot) return { success: true }; // silently succeed to confuse bots

  const name = (formData.get("name") as string | null)?.trim() ?? "";
  const email = (formData.get("email") as string | null)?.trim() ?? "";
  const message = (formData.get("message") as string | null)?.trim() ?? "";

  if (!name || !email || !message) {
    return { success: false, error: "All fields are required." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: "Enter a valid email address." };
  }
  if (message.length < 10) {
    return { success: false, error: "Message is too short." };
  }
  if (message.length > 2000) {
    return { success: false, error: "Message must be under 2000 characters." };
  }

  // Simple in-memory rate limit by email (resets on server restart)
  if (isRateLimited(email)) {
    return { success: false, error: "Please wait a minute before sending another message." };
  }

  const toEmail = process.env.CONTACT_TO_EMAIL ?? "smarworld25@gmail.com";
  const fromEmail = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";

  if (!process.env.RESEND_API_KEY) {
    return { success: false, error: "Email service not configured. Please reach me directly." };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: `Portfolio Contact <${fromEmail}>`,
      to: toEmail,
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });
    return { success: true };
  } catch {
    return { success: false, error: "Failed to send. Please email me directly." };
  }
}
