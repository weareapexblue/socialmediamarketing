import nodemailer from "nodemailer";

import { LeadRecord } from "@/lib/leads-db";
import { siteConfig } from "@/lib/site";

type EmailResult = {
  sent: boolean;
  reason?: string;
};

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function createTransporter() {
  const host = process.env.SMTP_HOST;

  if (!host) {
    return null;
  }

  const port = Number(process.env.SMTP_PORT ?? "587");
  const secure = process.env.SMTP_SECURE === "true" || port === 465;
  const user = process.env.SMTP_USER ?? (host.includes("resend.com") ? "resend" : undefined);
  const pass = process.env.SMTP_PASS ?? process.env.RESEND_API_KEY;

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: user && pass ? { user, pass } : undefined
  });
}

export async function sendLeadNotification(lead: LeadRecord): Promise<EmailResult> {
  const transporter = createTransporter();

  if (!transporter) {
    return {
      sent: false,
      reason: "missing_smtp_config"
    };
  }

  const to = process.env.LEAD_NOTIFICATION_TO ?? siteConfig.email;
  const from = process.env.SMTP_FROM ?? siteConfig.email;
  const platformSummary = lead.currentPlatforms.length > 0 ? lead.currentPlatforms.join(", ") : "Not provided";

  const text = [
    `New contact form lead for ${siteConfig.name}`,
    "",
    `Submitted: ${lead.createdAt}`,
    `Name: ${lead.fullName}`,
    `Business: ${lead.businessName}`,
    `Email: ${lead.email}`,
    `Phone: ${lead.phone ?? "Not provided"}`,
    `Preferred Reply: ${lead.preferredReply}`,
    `Business Type: ${lead.businessType}`,
    `Current Platforms: ${platformSummary}`,
    `Primary Goal: ${lead.primaryGoal}`,
    `Current Ad Budget: ${lead.adBudget ?? "Not provided"}`,
    `Notes: ${lead.notes ?? "None"}`,
    "",
    "This lead was saved in the website leads database."
  ].join("\n");

  const html = `
    <h2>New contact form lead for ${escapeHtml(siteConfig.name)}</h2>
    <p><strong>Submitted:</strong> ${escapeHtml(lead.createdAt)}</p>
    <p><strong>Name:</strong> ${escapeHtml(lead.fullName)}</p>
    <p><strong>Business:</strong> ${escapeHtml(lead.businessName)}</p>
    <p><strong>Email:</strong> ${escapeHtml(lead.email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(lead.phone ?? "Not provided")}</p>
    <p><strong>Preferred Reply:</strong> ${escapeHtml(lead.preferredReply)}</p>
    <p><strong>Business Type:</strong> ${escapeHtml(lead.businessType)}</p>
    <p><strong>Current Platforms:</strong> ${escapeHtml(platformSummary)}</p>
    <p><strong>Primary Goal:</strong> ${escapeHtml(lead.primaryGoal)}</p>
    <p><strong>Current Ad Budget:</strong> ${escapeHtml(lead.adBudget ?? "Not provided")}</p>
    <p><strong>Notes:</strong> ${escapeHtml(lead.notes ?? "None")}</p>
    <p>This lead was saved in the website leads database.</p>
  `;

  await transporter.sendMail({
    from,
    to,
    subject: `New SMM Lead: ${lead.businessName}`,
    text,
    html,
    replyTo: lead.email
  });

  return { sent: true };
}
