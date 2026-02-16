"use client";

import { FormEvent, useState } from "react";

const businessTypes = [
  "Local business",
  "Restaurant",
  "Contractor",
  "Service provider",
  "Creator",
  "Nonprofit",
  "Church",
  "Other"
] as const;

const goalOptions = [
  "Get more local visibility",
  "Generate more leads",
  "Increase engagement and replies",
  "Stay consistent with posting",
  "Promote events or launches"
] as const;

const platformOptions = ["Facebook", "Instagram", "TikTok", "YouTube", "Google Business Profile", "LinkedIn"] as const;

const adBudgetOptions = [
  "",
  "No ad budget yet",
  "Under $500/month",
  "$500-$1,500/month",
  "$1,500-$5,000/month",
  "$5,000+/month",
  "Not sure yet"
] as const;

type SubmissionState = {
  status: "idle" | "submitting" | "success" | "error";
  message: string;
};

const initialState: SubmissionState = {
  status: "idle",
  message: ""
};

export function ContactForm() {
  const [submission, setSubmission] = useState<SubmissionState>(initialState);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      fullName: String(formData.get("fullName") ?? "").trim(),
      businessName: String(formData.get("businessName") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      preferredReply: String(formData.get("preferredReply") ?? "text"),
      businessType: String(formData.get("businessType") ?? "").trim(),
      currentPlatforms: formData.getAll("currentPlatforms").map((value) => String(value)),
      primaryGoal: String(formData.get("primaryGoal") ?? "").trim(),
      adBudget: String(formData.get("adBudget") ?? "").trim(),
      notes: String(formData.get("notes") ?? "").trim()
    };

    setSubmission({
      status: "submitting",
      message: "Sending your info to our team..."
    });

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const result = (await response.json().catch(() => null)) as { ok?: boolean; error?: string } | null;

      if (!response.ok || !result?.ok) {
        setSubmission({
          status: "error",
          message: result?.error ?? "Something went wrong. Please try again."
        });
        return;
      }

      form.reset();
      setSubmission({
        status: "success",
        message: "Thanks. Your request is in our system and our team will follow up soon."
      });
    } catch {
      setSubmission({
        status: "error",
        message: "Could not submit the form right now. Please text or email us and try again shortly."
      });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-ocean/10 bg-white p-6 shadow-card sm:p-8">
      <h2 className="font-heading text-3xl text-ink">Tell us about your business</h2>
      <p className="mt-3 text-sm leading-relaxed text-ink/75">
        This takes about 1-2 minutes. We keep it simple and only ask for details that help us recommend the right social
        media plan.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-semibold text-ink">
          Your name *
          <input
            name="fullName"
            required
            className="mt-2 w-full rounded-xl border border-ocean/20 bg-cloud px-3 py-2.5 text-sm outline-none transition focus:border-ocean"
            placeholder="Jamie Morgan"
          />
        </label>

        <label className="text-sm font-semibold text-ink">
          Business name *
          <input
            name="businessName"
            required
            className="mt-2 w-full rounded-xl border border-ocean/20 bg-cloud px-3 py-2.5 text-sm outline-none transition focus:border-ocean"
            placeholder="Harbor Street Cafe"
          />
        </label>

        <label className="text-sm font-semibold text-ink">
          Best email *
          <input
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-xl border border-ocean/20 bg-cloud px-3 py-2.5 text-sm outline-none transition focus:border-ocean"
            placeholder="you@business.com"
          />
        </label>

        <label className="text-sm font-semibold text-ink">
          Mobile number (for text replies)
          <input
            name="phone"
            inputMode="tel"
            className="mt-2 w-full rounded-xl border border-ocean/20 bg-cloud px-3 py-2.5 text-sm outline-none transition focus:border-ocean"
            placeholder="(443) 555-1212"
          />
        </label>
      </div>

      <div className="mt-5">
        <p className="text-sm font-semibold text-ink">Preferred reply method *</p>
        <div className="mt-2 flex flex-wrap gap-3 text-sm text-ink/90">
          <label className="inline-flex items-center gap-2 rounded-full border border-ocean/20 bg-cloud px-4 py-2">
            <input type="radio" name="preferredReply" value="text" defaultChecked />
            Text message
          </label>
          <label className="inline-flex items-center gap-2 rounded-full border border-ocean/20 bg-cloud px-4 py-2">
            <input type="radio" name="preferredReply" value="email" />
            Email
          </label>
        </div>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-semibold text-ink">
          Business type *
          <select
            name="businessType"
            required
            defaultValue=""
            className="mt-2 w-full rounded-xl border border-ocean/20 bg-cloud px-3 py-2.5 text-sm outline-none transition focus:border-ocean"
          >
            <option value="" disabled>
              Select your business type
            </option>
            {businessTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>

        <label className="text-sm font-semibold text-ink">
          Primary goal *
          <select
            name="primaryGoal"
            required
            defaultValue=""
            className="mt-2 w-full rounded-xl border border-ocean/20 bg-cloud px-3 py-2.5 text-sm outline-none transition focus:border-ocean"
          >
            <option value="" disabled>
              Select your top goal
            </option>
            {goalOptions.map((goal) => (
              <option key={goal} value={goal}>
                {goal}
              </option>
            ))}
          </select>
        </label>
      </div>

      <fieldset className="mt-5">
        <legend className="text-sm font-semibold text-ink">Current active platforms (optional)</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {platformOptions.map((platform) => (
            <label
              key={platform}
              className="inline-flex items-center gap-2 rounded-full border border-ocean/20 bg-cloud px-3 py-1.5 text-xs font-semibold text-ink/90"
            >
              <input name="currentPlatforms" type="checkbox" value={platform} />
              {platform}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-semibold text-ink">
          What&apos;s Your Current Ad Budget? <span className="font-normal text-ink/60">(optional)</span>
          <select
            name="adBudget"
            defaultValue=""
            className="mt-2 w-full rounded-xl border border-ocean/20 bg-cloud px-3 py-2.5 text-sm outline-none transition focus:border-ocean"
          >
            {adBudgetOptions.map((budget) => (
              <option key={budget || "none"} value={budget}>
                {budget || "Select one (optional)"}
              </option>
            ))}
          </select>
        </label>

        <label className="text-sm font-semibold text-ink">
          Anything else we should know?
          <textarea
            name="notes"
            rows={4}
            className="mt-2 w-full rounded-xl border border-ocean/20 bg-cloud px-3 py-2.5 text-sm outline-none transition focus:border-ocean"
            placeholder="Share campaign timing, launch dates, service area, or any social challenges."
          />
        </label>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={submission.status === "submitting"}
          className="rounded-full bg-ocean px-6 py-3 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-ink disabled:cursor-not-allowed disabled:opacity-70"
        >
          {submission.status === "submitting" ? "Sending..." : "Send My Request"}
        </button>
        <p className="text-xs text-ink/65">By submitting, your details are saved securely in our lead system.</p>
      </div>

      {submission.status !== "idle" ? (
        <p
          className={
            submission.status === "success"
              ? "mt-4 rounded-xl bg-leaf/15 px-4 py-3 text-sm font-semibold text-leaf"
              : submission.status === "error"
                ? "mt-4 rounded-xl bg-coral/15 px-4 py-3 text-sm font-semibold text-coral"
                : "mt-4 rounded-xl bg-skyMint px-4 py-3 text-sm font-semibold text-ocean"
          }
        >
          {submission.message}
        </p>
      ) : null}
    </form>
  );
}
