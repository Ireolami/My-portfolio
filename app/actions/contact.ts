"use server";

import { Resend } from "resend";

export interface ActionResult {
  success: boolean;
  error?: string;
}

const lastSubmissions = new Map<string, number>();

function isRateLimited(key: string): boolean {
  const last = lastSubmissions.get(key);
  const now = Date.now();
  if (last && now - last < 60_000) return true;
  lastSubmissions.set(key, now);
  return false;
}

export async function submitContact(
  _prevState: ActionResult,
  formData: FormData
): Promise<ActionResult> {
  // Honeypot — bots fill it, humans don't
  if (formData.get("website")) return { success: true };

  const name = (formData.get("name") as string | null)?.trim() ?? "";
  const email = (formData.get("email") as string | null)?.trim() ?? "";
  const company = (formData.get("company") as string | null)?.trim() ?? "";
  const service = (formData.get("service") as string | null)?.trim() ?? "";
  const message = (formData.get("message") as string | null)?.trim() ?? "";
  const budget = (formData.get("budget") as string | null)?.trim() ?? "";
  const timeline = (formData.get("timeline") as string | null)?.trim() ?? "";
  const source = (formData.get("source") as string | null)?.trim() ?? "";

  if (!name || !email || !message) {
    return { success: false, error: "Name, email, and project description are required." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: "Enter a valid email address." };
  }
  if (message.length < 10) {
    return { success: false, error: "Project description is too short (min 10 characters)." };
  }
  if (message.length > 3000) {
    return { success: false, error: "Message must be under 3000 characters." };
  }

  if (isRateLimited(email)) {
    return { success: false, error: "Please wait a minute before sending another message." };
  }

  if (!process.env.RESEND_API_KEY) {
    return { success: false, error: "Email not configured. Please reach me at smarworld25@gmail.com" };
  }

  const toEmail = process.env.CONTACT_TO_EMAIL ?? "smarworld25@gmail.com";
  const fromEmail = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";
  const resend = new Resend(process.env.RESEND_API_KEY);

  const body = [
    `New inquiry from your portfolio`,
    ``,
    `Name:     ${name}`,
    `Email:    ${email}`,
    company ? `Company:  ${company}` : null,
    service ? `Service:  ${service}` : null,
    budget ? `Budget:   ${budget}` : null,
    timeline ? `Timeline: ${timeline}` : null,
    source ? `Source:   ${source}` : null,
    ``,
    `--- Project Description ---`,
    message,
  ]
    .filter((l) => l !== null)
    .join("\n");

  try {
    await resend.emails.send({
      from: `Portfolio Lead <${fromEmail}>`,
      to: toEmail,
      replyTo: email,
      subject: `[Lead] ${service || "Inquiry"} — ${name}${company ? ` (${company})` : ""}`,
      text: body,
    });
    return { success: true };
  } catch {
    return { success: false, error: "Failed to send. Email me directly: smarworld25@gmail.com" };
  }
}
