import Database from "better-sqlite3";
import fs from "node:fs";
import path from "node:path";

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
  created_at: string;
  full_name: string;
  business_name: string;
  email: string;
  phone: string | null;
  preferred_reply: "text" | "email";
  business_type: string;
  current_platforms: string;
  primary_goal: string;
  ad_budget: string | null;
  notes: string | null;
};

declare global {
  var __smmLeadDb: Database.Database | undefined;
}

function getDatabasePath() {
  return process.env.LEADS_DB_PATH ?? path.join(process.cwd(), "data", "leads.sqlite");
}

function createDatabase() {
  const databasePath = getDatabasePath();
  fs.mkdirSync(path.dirname(databasePath), { recursive: true });

  const db = new Database(databasePath);
  db.pragma("journal_mode = WAL");

  db.prepare(
    `CREATE TABLE IF NOT EXISTS leads (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      created_at TEXT NOT NULL,
      full_name TEXT NOT NULL,
      business_name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      preferred_reply TEXT NOT NULL,
      business_type TEXT NOT NULL,
      current_platforms TEXT NOT NULL,
      primary_goal TEXT NOT NULL,
      ad_budget TEXT,
      notes TEXT
    )`
  ).run();

  return db;
}

const db = global.__smmLeadDb ?? createDatabase();

if (process.env.NODE_ENV !== "production") {
  global.__smmLeadDb = db;
}

export function insertLead(input: LeadInput): LeadRecord {
  const createdAt = new Date().toISOString();

  const insert = db.prepare(
    `INSERT INTO leads (
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
    ) VALUES (
      @created_at,
      @full_name,
      @business_name,
      @email,
      @phone,
      @preferred_reply,
      @business_type,
      @current_platforms,
      @primary_goal,
      @ad_budget,
      @notes
    )`
  );

  const result = insert.run({
    created_at: createdAt,
    full_name: input.fullName,
    business_name: input.businessName,
    email: input.email,
    phone: input.phone,
    preferred_reply: input.preferredReply,
    business_type: input.businessType,
    current_platforms: JSON.stringify(input.currentPlatforms),
    primary_goal: input.primaryGoal,
    ad_budget: input.adBudget,
    notes: input.notes
  });

  const lead = db
    .prepare(
      `SELECT
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
      FROM leads
      WHERE id = ?`
    )
    .get(result.lastInsertRowid) as LeadRow;

  return {
    id: lead.id,
    createdAt: lead.created_at,
    fullName: lead.full_name,
    businessName: lead.business_name,
    email: lead.email,
    phone: lead.phone,
    preferredReply: lead.preferred_reply,
    businessType: lead.business_type,
    currentPlatforms: JSON.parse(lead.current_platforms) as string[],
    primaryGoal: lead.primary_goal,
    adBudget: lead.ad_budget,
    notes: lead.notes
  };
}
