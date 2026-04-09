import type { Metadata } from "next";

// NOTE: This is a STARTER privacy policy layout only. It is not legal advice.
// Have the final copy reviewed by a qualified legal professional before any
// production use, and tailor the sections to match the actual data practices
// of each Just app.

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy information for the Just Apps family.",
};

const sections: { title: string; body: string }[] = [
  {
    title: "Introduction",
    body: "This page explains, in plain language, how the Just Apps family approaches your information. It applies to the Just Apps website and to each app in the family unless a specific app provides its own notice.",
  },
  {
    title: "Information we may collect",
    body: "Depending on the app, we may process the data you enter yourself (for example, a blood pressure reading or a weight entry) and basic technical information needed to keep the app working. We aim to collect as little as possible.",
  },
  {
    title: "How information is used",
    body: "Any information you enter is used to provide the features of the app — for example, showing your own history back to you. We do not sell your information.",
  },
  {
    title: "Third-party services",
    body: "Where an app relies on a third-party service (such as a platform's built-in sync), that service's own terms and privacy notice also apply. We try to keep this list short.",
  },
  {
    title: "Data retention",
    body: "Entries you create remain available inside the app until you remove them or uninstall the app, unless stated otherwise in an app's own notice.",
  },
  {
    title: "Your choices",
    body: "You can stop using any Just app at any time. Where an app offers an export or delete option, you can use it directly from within the app.",
  },
  {
    title: "Children's privacy",
    body: "The Just Apps are not directed at children. If you believe a child has provided information through one of our apps, please contact us and we will take appropriate steps.",
  },
  {
    title: "Changes to this policy",
    body: "We may update this page from time to time. When we do, we will update the date below and, where appropriate, note the change.",
  },
  {
    title: "Contact",
    body: "Questions about privacy? Email info@africantechno.com and we'll respond as soon as we can.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-grid">
        <div className="mx-auto max-w-3xl px-6 pb-12 pt-20 sm:pt-28">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Privacy
          </h1>
          <p className="mt-5 text-lg text-ink-muted">
            A short, plain-English summary of how we think about your
            information across the Just Apps family.
          </p>
          <p className="mt-3 text-sm text-ink-muted">
            Last updated: 9 April 2026
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-6 pb-24">
        <div className="rounded-2xl border border-black/5 bg-white p-8 shadow-card">
          {sections.map((s) => (
            <section key={s.title} className="mb-8 last:mb-0">
              <h2 className="text-lg font-semibold tracking-tight">
                {s.title}
              </h2>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">
                {s.body}
              </p>
            </section>
          ))}
        </div>
      </article>
    </>
  );
}
