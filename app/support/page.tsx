import type { Metadata } from "next";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with any Just app — questions, issues, or feedback.",
};

// NOTE: Replace support@justsomething.app with the production support address
// before launch.
const SUPPORT_EMAIL = "support@justsomething.app";

const topics = [
  {
    title: "General help",
    body: "Questions about how an app works or which one fits what you want to track.",
  },
  {
    title: "App issues",
    body: "Something not working as expected? Let us know and we'll take a look.",
  },
  {
    title: "Feature requests",
    body: "Ideas are welcome. We keep the apps simple, but we're always listening.",
  },
  {
    title: "Privacy questions",
    body: "Ask about how a Just app handles your data. Happy to explain.",
  },
];

const faqs = [
  {
    q: "How do I get help with an app?",
    a: `Email us at ${SUPPORT_EMAIL} with the app name and a short description. We try to reply within a few working days.`,
  },
  {
    q: "How do I report a bug?",
    a: "Tell us what you did, what you expected, and what happened instead. A screenshot or the device model helps a lot.",
  },
  {
    q: "How do I request a feature?",
    a: "Send a note with your idea. We keep each Just app focused, so not every request fits — but we read them all.",
  },
  {
    q: "How do I ask a privacy-related question?",
    a: "Use the same support address and mention 'privacy' in the subject line so we can route it quickly.",
  },
];

export default function SupportPage() {
  return (
    <>
      <section className="bg-grid">
        <div className="mx-auto max-w-4xl px-6 pb-16 pt-20 text-center sm:pt-28">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Support
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-ink-muted">
            We're a small team. Drop us a line and we'll do our best to help.
          </p>
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="mt-8 inline-flex rounded-full bg-ink px-6 py-3 text-sm font-medium text-white hover:bg-ink-soft"
          >
            {SUPPORT_EMAIL}
          </a>
        </div>
      </section>

      <Section eyebrow="How can we help?" title="Support topics">
        <div className="grid gap-6 sm:grid-cols-2">
          {topics.map((t) => (
            <div
              key={t.title}
              className="rounded-2xl border border-black/5 bg-white p-6 shadow-card"
            >
              <h3 className="text-base font-semibold">{t.title}</h3>
              <p className="mt-2 text-sm text-ink-muted">{t.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Frequently asked questions">
        <dl className="divide-y divide-black/5 rounded-2xl border border-black/5 bg-white">
          {faqs.map((f) => (
            <div key={f.q} className="p-6">
              <dt className="text-base font-semibold">{f.q}</dt>
              <dd className="mt-2 text-sm text-ink-muted">{f.a}</dd>
            </div>
          ))}
        </dl>
      </Section>
    </>
  );
}
