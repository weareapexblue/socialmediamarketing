import { NextResponse } from "next/server";
import { z } from "zod";

import { sendLeadNotification } from "@/lib/email";
import { insertLead } from "@/lib/leads-db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const leadSchema = z.object({
  fullName: z.string().trim().min(2).max(120),
  businessName: z.string().trim().min(2).max(160),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().max(32).optional().or(z.literal("")),
  preferredReply: z.enum(["text", "email"]),
  businessType: z.string().trim().min(2).max(120),
  currentPlatforms: z.array(z.string().trim().min(1).max(80)).max(10).default([]),
  primaryGoal: z.string().trim().min(2).max(200),
  adBudget: z.string().trim().max(120).optional().or(z.literal("")),
  notes: z.string().trim().max(2000).optional().or(z.literal(""))
});

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON payload." }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "Please complete the required form fields." }, { status: 400 });
  }

  const data = parsed.data;

  const lead = insertLead({
    fullName: data.fullName,
    businessName: data.businessName,
    email: data.email,
    phone: data.phone || null,
    preferredReply: data.preferredReply,
    businessType: data.businessType,
    currentPlatforms: Array.from(new Set(data.currentPlatforms)),
    primaryGoal: data.primaryGoal,
    adBudget: data.adBudget || null,
    notes: data.notes || null
  });

  let notificationSent = false;

  try {
    const notification = await sendLeadNotification(lead);
    notificationSent = notification.sent;

    if (!notification.sent) {
      console.warn("Lead saved but email notification was not sent:", notification.reason);
    }
  } catch (error) {
    console.error("Lead saved but email notification failed", error);
  }

  return NextResponse.json({ ok: true, leadId: lead.id, notificationSent });
}
