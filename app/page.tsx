import Link from "next/link";
import { Section } from "@/components/Section";
import AppCard from "@/components/AppCard";
import { apps, futureApps } from "@/lib/apps";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-grid">
        <div className="mx-auto max-w-6xl px-6 pb-24 pt-20 sm:pt-28">
          <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-ink-muted">
            justsomething.app
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
            Simple health tracking, without the clutter.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-muted sm:text-xl">
            A growing family of focused apps. One thing each. Quick to log,
            calm to use, and designed to stay out of your way.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/apps"
              className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition hover:bg-ink-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
            >
              View apps
            </Link>
            <Link
              href="/support"
              className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium text-ink transition hover:border-black/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
            >
              Get support
            </Link>
          </div>
        </div>
      </section>

      {/* App family */}
      <Section
        id="apps"
        eyebrow="The family"
        title="One focused app for each thing you want to track."
        intro="Every Just app does a single job well — no dashboards to configure, no feeds to scroll."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {apps.map((app) => (
            <AppCard key={app.slug} app={app} />
          ))}
        </div>
      </Section>

      {/* Philosophy */}
      <section className="border-y border-black/5 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-ink-muted">
                Philosophy
              </div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Just the essentials.
              </h2>
              <p className="mt-5 text-lg text-ink-muted">
                Health tracking should take seconds, not minutes. Each Just
                app focuses on a single measurement so logging feels effortless
                and the numbers stay readable.
              </p>
            </div>
            <ul className="grid gap-6 sm:grid-cols-2">
              {[
                ["Single purpose", "One app, one job — no feature creep."],
                ["Low friction", "Log an entry in a tap or two."],
                ["Clarity first", "Calm screens, readable numbers."],
                ["Useful, not loud", "Helpful without getting in the way."],
              ].map(([t, d]) => (
                <li
                  key={t}
                  className="rounded-2xl border border-black/5 bg-paper p-5"
                >
                  <div className="text-sm font-semibold">{t}</div>
                  <div className="mt-1 text-sm text-ink-muted">{d}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Future apps */}
      <Section
        eyebrow="More to come"
        title="The family is growing."
        intro="We release new Just apps when they feel truly useful. Here are a few ideas we're exploring."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {futureApps.map((f) => (
            <div
              key={f.name}
              className="rounded-2xl border border-dashed border-black/15 bg-white/60 p-5"
            >
              <div className="text-sm font-semibold text-ink">{f.name}</div>
              <div className="mt-1 text-sm text-ink-muted">{f.hint}</div>
              <div className="mt-4 text-xs uppercase tracking-wider text-ink-muted">
                Coming soon
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Trust / privacy */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-ink-muted">
            Built with care
          </div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Respectful by default.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-ink-muted">
            We aim to collect as little as possible and keep the experience
            straightforward. You can read more in our{" "}
            <Link href="/privacy" className="underline underline-offset-4">
              privacy notes
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-grid">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Explore the Just family.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-ink-muted">
            Find the one that fits what you want to track — or reach out if
            you need a hand.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/apps"
              className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-white hover:bg-ink-soft"
            >
              View apps
            </Link>
            <Link
              href="/support"
              className="rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium hover:border-black/20"
            >
              Get support
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
