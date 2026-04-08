import type { JustApp } from "@/lib/apps";

const accentRing: Record<JustApp["accent"], string> = {
  bp: "from-accent-bp/20 to-accent-bp/5 text-accent-bp",
  weight: "from-accent-weight/20 to-accent-weight/5 text-accent-weight",
  glucose: "from-accent-glucose/20 to-accent-glucose/5 text-accent-glucose",
  neutral: "from-black/10 to-black/0 text-ink",
};

const statusLabel = {
  available: "Available",
  "in-progress": "In Progress",
  "coming-soon": "Coming Soon",
} as const;

export default function AppCard({ app }: { app: JustApp }) {
  return (
    <article
      className="group relative flex flex-col rounded-3xl border border-black/5 bg-white p-6 shadow-card transition hover:-translate-y-0.5 hover:shadow-lg"
    >
      <div className="flex items-center justify-between">
        <div
          aria-hidden
          className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${accentRing[app.accent]}`}
        >
          <span className="text-xl font-semibold">
            {app.name.replace("Just ", "")[0]}
          </span>
        </div>
        <span className="rounded-full bg-black/[0.04] px-3 py-1 text-xs font-medium text-ink-muted">
          {statusLabel[app.status]}
        </span>
      </div>

      <h3 className="mt-6 text-lg font-semibold tracking-tight">{app.name}</h3>
      <p className="mt-1 text-sm text-ink-muted">{app.description}</p>

      <div className="mt-6 text-sm font-medium text-ink-muted">
        {app.tagline}
      </div>

      {app.testflightUrl && (
        <a
          href={app.testflightUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Join ${app.name} on TestFlight`}
          className="mt-6 inline-flex items-center gap-2 self-start rounded-xl bg-ink px-4 py-2.5 text-sm font-medium text-white transition hover:bg-ink-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm4.3 6.5-3.1 7.2a1 1 0 0 1-.6.6l-7.2 3.1a.4.4 0 0 1-.5-.5l3.1-7.2a1 1 0 0 1 .6-.6l7.2-3.1a.4.4 0 0 1 .5.5Z"
              fill="currentColor"
            />
          </svg>
          Available on TestFlight
        </a>
      )}
    </article>
  );
}
