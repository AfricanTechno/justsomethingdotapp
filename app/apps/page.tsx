import type { Metadata } from "next";
import { Section } from "@/components/Section";
import AppCard from "@/components/AppCard";
import { apps, futureApps } from "@/lib/apps";

export const metadata: Metadata = {
  title: "Apps",
  description: "The full Just Apps family — simple, focused health trackers.",
};

export default function AppsPage() {
  return (
    <>
      <Section
        eyebrow="The family"
        title="Every Just app, in one place."
        intro="A small, deliberate set of single-purpose trackers. Pick the one you need."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {apps.map((app) => (
            <AppCard key={app.slug} app={app} />
          ))}
        </div>
      </Section>

      <Section eyebrow="On the way" title="Future apps">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {futureApps.map((f) => (
            <div
              key={f.name}
              className="rounded-2xl border border-dashed border-black/15 bg-white/60 p-5"
            >
              <div className="text-sm font-semibold">{f.name}</div>
              <div className="mt-1 text-sm text-ink-muted">{f.hint}</div>
              <div className="mt-4 text-xs uppercase tracking-wider text-ink-muted">
                Coming soon
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
