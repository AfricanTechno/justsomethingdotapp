import Image from "next/image";
import type { JustApp } from "@/lib/apps";

const statusLabel = {
  available: "Available",
  "in-progress": "In Progress",
  "coming-soon": "Coming Soon",
  building: "Building",
} as const;

export default function AppCard({ app }: { app: JustApp }) {
  return (
    <article
      className="group relative flex h-full flex-col rounded-3xl border border-black/5 bg-white p-6 shadow-card transition hover:-translate-y-0.5 hover:shadow-lg"
    >
      <div className="flex items-center justify-between">
        <Image
          src={app.icon}
          alt={`${app.name} app icon`}
          width={72}
          height={72}
          className="h-18 w-18 rounded-2xl"
          style={{ height: 72, width: 72 }}
        />
        <span className="rounded-full bg-black/[0.04] px-3 py-1 text-xs font-medium text-ink-muted">
          {statusLabel[app.status]}
        </span>
      </div>

      <h3 className="mt-6 text-lg font-semibold tracking-tight">{app.name}</h3>
      <p className="mt-1 text-sm text-ink-muted">{app.description}</p>

      <div className="mt-6 text-sm font-medium text-ink-muted">
        {app.tagline}
      </div>

      {app.appStoreUrl ? (
        <a
          href={app.appStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Download ${app.name} on the App Store`}
          className="mt-auto inline-flex self-start rounded-xl pt-6 transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
        >
          <Image
            src="/badges/app-store.svg"
            alt="Download on the App Store"
            width={180}
            height={60}
            className="h-12 w-auto"
          />
        </a>
      ) : app.testflightUrl && (
        <a
          href={app.testflightUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Join ${app.name} on TestFlight`}
          className="mt-6 inline-flex self-start rounded-xl transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
        >
          <Image
            src="/badges/testflight.png"
            alt="Available on TestFlight"
            width={180}
            height={60}
            className="h-12 w-auto"
          />
        </a>
      )}
    </article>
  );
}
