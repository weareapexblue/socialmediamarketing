import { neon, NeonQueryFunction } from "@neondatabase/serverless";

export type LeadInput = {
  fullName: string;
  businessName: string;
  email: string;
  phone: string | null;
  preferredReply: "text" | "email";
  businessType: string;
  currentPlatforms: string[];
  primaryGoal: string;
  adBudget: string | null;
  notes: string | null;
};

export type LeadRecord = LeadInput & {
  id: number;
  createdAt: string;
};

type LeadRow = {
  id: number;
  created_at: string | Date;
  full_name: string;
  business_name: string;
  email: string;
  phone: string | null;
  preferred_reply: "text" | "email";
  business_type: string;
  current_platforms: unknown;
  primary_goal: string;
  ad_budget: string | null;
  notes: string | null;
};

declare global {
  var __smmNeonSql: NeonQueryFunction<false, false> | undefined;
  var __smmLeadTablePromise: Promise<void> | undefined;
}

function getSql() {
  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    throw new Error("DATABASE_URL is required for Neon lead storage.");
  }

  if (!global.__smmNeonSql) {
    global.__smmNeonSql = neon(databaseUrl);
  }

  return global.__smmNeonSql;
}

async function ensureLeadTable() {
  if (!global.__smmLeadTablePromise) {
    const sql = getSql();

    global.__smmLeadTablePromise = (async () => {
      await sql`
        CREATE TABLE IF NOT EXISTS socialmediamarketing_leads (
          id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
          created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
          full_name TEXT NOT NULL,
          business_name TEXT NOT NULL,
          email TEXT NOT NULL,
          phone TEXT,
          preferred_reply TEXT NOT NULL CHECK (preferred_reply IN ('text', 'email')),
          business_type TEXT NOT NULL,
          current_platforms JSONB NOT NULL DEFAULT '[]'::jsonb,
          primary_goal TEXT NOT NULL,
          ad_budget TEXT,
          notes TEXT
        )
      `;

      await sql`
        CREATE INDEX IF NOT EXISTS socialmediamarketing_leads_created_at_idx
        ON socialmediamarketing_leads (created_at DESC)
      `;
    })();
  }

  await global.__smmLeadTablePromise;
}

export async function insertLead(input: LeadInput): Promise<LeadRecord> {
  await ensureLeadTable();
  const sql = getSql();

  const rows = (await sql`
      INSERT INTO socialmediamarketing_leads (
        full_name,
        business_name,
        email,
        phone,
        preferred_reply,
        business_type,
        current_platforms,
        primary_goal,
        ad_budget,
        notes
      ) VALUES (
        ${input.fullName},
        ${input.businessName},
        ${input.email},
        ${input.phone},
        ${input.preferredReply},
        ${input.businessType},
        ${JSON.stringify(input.currentPlatforms)}::jsonb,
        ${input.primaryGoal},
        ${input.adBudget},
        ${input.notes}
      )
      RETURNING
        id,
        created_at,
        full_name,
        business_name,
        email,
        phone,
        preferred_reply,
        business_type,
        current_platforms,
        primary_goal,
        ad_budget,
        notes
    `) as LeadRow[];

  const lead = rows[0];

  return {
    id: lead.id,
    createdAt: toIsoString(lead.created_at),
    fullName: lead.full_name,
    businessName: lead.business_name,
    email: lead.email,
    phone: lead.phone,
    preferredReply: lead.preferred_reply,
    businessType: lead.business_type,
    currentPlatforms: normalizePlatforms(lead.current_platforms),
    primaryGoal: lead.primary_goal,
    adBudget: lead.ad_budget,
    notes: lead.notes
  };
}

function normalizePlatforms(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.map((platform) => String(platform));
  }

  return [];
}

function toIsoString(value: string | Date) {
  if (value instanceof Date) {
    return value.toISOString();
  }

  const date = new Date(value);

  return Number.isNaN(date.getTime()) ? new Date().toISOString() : date.toISOString();
}
