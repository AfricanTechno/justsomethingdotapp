import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/Section";
import { apps } from "@/lib/apps";

export const metadata: Metadata = {
  title: "Just Brand Guidelines",
  description:
    "Design principles and visual system behind the Just app ecosystem.",
};

// ---- Small, local building blocks. Kept in-file because they're only
// used on this page and keep the brand definition in one place.

function Principle({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-black/5 bg-white p-6">
      <div className="text-xs font-semibold uppercase tracking-widest text-ink-muted">
        {n}
      </div>
      <h3 className="mt-2 text-base font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-ink-muted">{body}</p>
    </div>
  );
}

function Swatch({
  name,
  hex,
  token,
  className,
  dark = false,
}: {
  name: string;
  hex: string;
  token: string;
  className: string;
  dark?: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-black/5 bg-white">
      <div className={`flex h-24 items-end justify-between p-4 ${className}`}>
        <span
          className={`text-xs font-medium ${dark ? "text-white/80" : "text-ink/70"}`}
        >
          {token}
        </span>
      </div>
      <div className="flex items-center justify-between px-4 py-3 text-sm">
        <span className="font-medium">{name}</span>
        <span className="font-mono text-xs text-ink-muted">{hex}</span>
      </div>
    </div>
  );
}

function Row({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-2 border-t border-black/5 py-5 first:border-t-0 sm:grid-cols-[160px_1fr] sm:gap-8">
      <div className="text-xs font-semibold uppercase tracking-widest text-ink-muted">
        {label}
      </div>
      <div>{children}</div>
    </div>
  );
}

function DoDont({ tone, items }: { tone: "do" | "dont"; items: string[] }) {
  const isDo = tone === "do";
  return (
    <div
      className={`rounded-2xl border p-6 ${
        isDo
          ? "border-accent-weight/30 bg-accent-weight/5"
          : "border-accent-bp/30 bg-accent-bp/5"
      }`}
    >
      <div
        className={`text-xs font-semibold uppercase tracking-widest ${
          isDo ? "text-accent-weight" : "text-accent-bp"
        }`}
      >
        {isDo ? "Do" : "Don't"}
      </div>
      <ul className="mt-4 space-y-2 text-sm">
        {items.map((i) => (
          <li key={i} className="flex gap-2">
            <span aria-hidden>{isDo ? "✓" : "✗"}</span>
            <span>{i}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ---- Page ---------------------------------------------------------------

export default function BrandPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-black/5 bg-grid">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-20 sm:pt-28">
          <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted">
            Brand system · v1.0
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
            Just Brand Guidelines
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-muted">
            A system for building simple, focused apps. One app. One purpose.
            No clutter.
          </p>
        </div>
      </section>

      {/* 1. Principles */}
      <Section
        eyebrow="01 · Principles"
        title="What the brand stands for."
        intro="Four ideas that every Just app — and everything around it — should follow."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Principle
            n="01"
            title="Simplicity over features"
            body="Each app solves one thing. We'd rather ship less than add noise."
          />
          <Principle
            n="02"
            title="Speed over complexity"
            body="Logging should take seconds. If it's slow, it's wrong."
          />
          <Principle
            n="03"
            title="Clarity over cleverness"
            body="Plain language, obvious layouts, readable numbers."
          />
          <Principle
            n="04"
            title="Consistency over novelty"
            body="Every new Just app inherits the same system, unchanged."
          />
        </div>
      </Section>

      {/* 2. Logo system */}
      <Section
        eyebrow="02 · Logo system"
        title="One parent mark, one icon per app."
        intro="JustSomething is the parent brand. Each app icon shares the same rounded-square base and a single symbol."
      >
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-3xl border border-black/5 bg-white p-10">
            <div className="flex h-40 items-center justify-center">
              <Image
                src="/brand/justsomething.png"
                alt="JustSomething parent logo"
                width={480}
                height={160}
                className="h-full w-auto"
              />
            </div>
            <div className="mt-6 text-xs font-semibold uppercase tracking-widest text-ink-muted">
              Parent mark
            </div>
            <div className="mt-1 text-sm">JustSomething</div>
          </div>

          <div className="rounded-3xl border border-black/5 bg-white p-10">
            <div className="grid grid-cols-3 items-center gap-6">
              {apps.map((a) => (
                <div key={a.slug} className="flex flex-col items-center gap-3">
                  <Image
                    src={a.icon}
                    alt={`${a.name} icon`}
                    width={96}
                    height={96}
                    className="h-20 w-20 rounded-2xl"
                  />
                  <div className="text-xs text-ink-muted">{a.name}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-xs font-semibold uppercase tracking-widest text-ink-muted">
              App icons
            </div>
            <div className="mt-1 text-sm">Shared base shape, single accent</div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <DoDont
            tone="do"
            items={[
              "Keep the rounded-square base shape for every app icon.",
              "Use a single bold symbol, centred.",
              "Use the app's assigned accent colour and nothing else.",
            ]}
          />
          <DoDont
            tone="dont"
            items={[
              "Do not distort, rotate, or recolour the parent mark.",
              "Do not change the proportions of the app icon base.",
              "Do not mix icon styles or stack multiple symbols.",
            ]}
          />
        </div>
      </Section>

      {/* 3. Colour */}
      <Section
        eyebrow="03 · Colour"
        title="Neutral canvas, accent per app."
        intro="The site runs on a quiet neutral palette. Accent colour is owned by each app and used sparingly."
      >
        <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-ink-muted">
          Neutrals
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <Swatch
            name="Paper"
            token="bg-paper"
            hex="#FBFBFD"
            className="bg-paper border-b border-black/5"
          />
          <Swatch
            name="Ink"
            token="text-ink"
            hex="#0B0F17"
            className="bg-ink"
            dark
          />
          <Swatch
            name="Ink Muted"
            token="text-ink-muted"
            hex="#5B6473"
            className="bg-ink-muted"
            dark
          />
        </div>

        <div className="mb-4 mt-12 text-xs font-semibold uppercase tracking-widest text-ink-muted">
          App accents
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <Swatch
            name="Just BP · Red"
            token="accent-bp"
            hex="#E1485A"
            className="bg-accent-bp"
            dark
          />
          <Swatch
            name="Just Weight · Green"
            token="accent-weight"
            hex="#2FA36B"
            className="bg-accent-weight"
            dark
          />
          <Swatch
            name="Just Glucose · Blue"
            token="accent-glucose"
            hex="#3A7BD5"
            className="bg-accent-glucose"
            dark
          />
        </div>

        <p className="mt-8 max-w-2xl text-sm text-ink-muted">
          Each app owns a single accent colour. Accents never mix on the same
          surface. New apps pick a new accent from a calm, mature palette.
        </p>
      </Section>

      {/* 4. Typography */}
      <Section
        eyebrow="04 · Typography"
        title="One family. Clear hierarchy."
        intro="The primary typeface is a modern system sans-serif. No decorative faces, no multiple families."
      >
        <div className="rounded-3xl border border-black/5 bg-white p-8 sm:p-10">
          <Row label="Display">
            <div className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Simple health tracking, without the clutter.
            </div>
            <div className="mt-2 text-xs text-ink-muted">
              text-4xl → text-6xl · font-semibold · tracking-tight
            </div>
          </Row>
          <Row label="Heading">
            <div className="text-2xl font-semibold tracking-tight sm:text-3xl">
              One focused app for each thing you want to track.
            </div>
            <div className="mt-2 text-xs text-ink-muted">
              text-3xl/text-4xl · font-semibold · tracking-tight
            </div>
          </Row>
          <Row label="Body">
            <p className="max-w-2xl text-base text-ink">
              Health tracking should take seconds, not minutes. Each Just app
              focuses on a single measurement so logging feels effortless.
            </p>
            <div className="mt-2 text-xs text-ink-muted">
              text-base · text-ink
            </div>
          </Row>
          <Row label="Muted">
            <p className="max-w-2xl text-sm text-ink-muted">
              Supporting copy, metadata, and captions use the muted tone so
              the primary ink stays reserved for headings and key content.
            </p>
            <div className="mt-2 text-xs text-ink-muted">
              text-sm · text-ink-muted
            </div>
          </Row>
          <Row label="Eyebrow">
            <div className="text-xs font-semibold uppercase tracking-widest text-ink-muted">
              Section label
            </div>
          </Row>
        </div>
      </Section>

      {/* 5. Iconography */}
      <Section
        eyebrow="05 · Iconography"
        title="Simple, bold, recognisable."
        intro="Icons use one clear symbol per app. No thin strokes. No decorative detail. No gradients inside the symbol itself."
      >
        <div className="grid gap-6 sm:grid-cols-3">
          {apps.map((a) => (
            <div
              key={a.slug}
              className="flex flex-col items-center rounded-2xl border border-black/5 bg-white p-8"
            >
              <Image
                src={a.icon}
                alt={`${a.name} icon`}
                width={96}
                height={96}
                className="h-24 w-24 rounded-2xl"
              />
              <div className="mt-4 text-sm font-semibold">{a.name}</div>
              <div className="text-xs text-ink-muted">
                {a.slug === "just-bp" && "Heart with a simple pulse line."}
                {a.slug === "just-weight" && "Bathroom scale, front-on."}
                {a.slug === "just-glucose" && "A single droplet with a highlight."}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 6. Layout & spacing */}
      <Section
        eyebrow="06 · Layout & spacing"
        title="Generous whitespace. Strict rhythm."
        intro="A single spacing scale controls every gap, padding, and section rhythm on the site."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-black/5 bg-white p-8">
            <div className="text-xs font-semibold uppercase tracking-widest text-ink-muted">
              Spacing scale
            </div>
            <div className="mt-6 space-y-3">
              {[
                { token: "4", px: 4 },
                { token: "8", px: 8 },
                { token: "16", px: 16 },
                { token: "24", px: 24 },
                { token: "32", px: 32 },
                { token: "48", px: 48 },
                { token: "64", px: 64 },
              ].map((s) => (
                <div key={s.token} className="flex items-center gap-4">
                  <div className="w-8 text-xs font-mono text-ink-muted">
                    {s.token}
                  </div>
                  <div
                    className="h-2 rounded-full bg-ink"
                    style={{ width: s.px * 2 }}
                  />
                  <div className="text-xs text-ink-muted">{s.px}px</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-black/5 bg-white p-8">
            <div className="text-xs font-semibold uppercase tracking-widest text-ink-muted">
              Radius
            </div>
            <div className="mt-6 flex flex-wrap items-end gap-6">
              {[
                { label: "lg", cls: "rounded-lg" },
                { label: "xl", cls: "rounded-xl" },
                { label: "2xl", cls: "rounded-2xl" },
                { label: "3xl", cls: "rounded-3xl" },
                { label: "full", cls: "rounded-full" },
              ].map((r) => (
                <div key={r.label} className="flex flex-col items-center gap-2">
                  <div className={`h-16 w-16 bg-ink ${r.cls}`} />
                  <div className="text-xs text-ink-muted">{r.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 7. Components */}
      <Section
        eyebrow="07 · Components"
        title="Quiet surfaces. Clear actions."
        intro="A small set of component styles is reused everywhere. Shadows and depth are used only when they earn it."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-black/5 bg-white p-8">
            <div className="text-xs font-semibold uppercase tracking-widest text-ink-muted">
              Buttons
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-white hover:bg-ink-soft"
              >
                Primary
              </button>
              <button
                type="button"
                className="rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium hover:border-black/20"
              >
                Secondary
              </button>
              <button
                type="button"
                className="rounded-full px-6 py-3 text-sm font-medium text-ink-muted hover:text-ink"
              >
                Tertiary
              </button>
            </div>
          </div>

          <div className="rounded-3xl border border-black/5 bg-white p-8">
            <div className="text-xs font-semibold uppercase tracking-widest text-ink-muted">
              Card
            </div>
            <div className="mt-6 rounded-2xl border border-black/5 bg-white p-6 shadow-card">
              <div className="text-sm font-semibold">Card title</div>
              <div className="mt-1 text-sm text-ink-muted">
                Rounded 2xl, hairline border, one soft shadow.
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 8. Tone of voice */}
      <Section
        eyebrow="08 · Tone of voice"
        title="Direct. Calm. Concise."
        intro="We write the way the apps feel. No marketing fluff, no jargon, no exclamation marks."
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <DoDont
            tone="do"
            items={[
              "Use plain English. Short sentences.",
              "State what the app does, then stop.",
              "Respect the reader's time.",
              "UK/SA English spelling.",
            ]}
          />
          <DoDont
            tone="dont"
            items={[
              "Don't use hype words like 'revolutionary' or 'seamless'.",
              "Don't make health claims.",
              "Don't over-promise or invent urgency.",
              "Don't write in corporate voice.",
            ]}
          />
        </div>
      </Section>

      {/* 9. Naming */}
      <Section
        eyebrow="09 · Naming"
        title={`"Just + [Category]"`}
        intro="Every app in the family follows one naming rule. No exceptions, no sub-brands."
      >
        <div className="rounded-3xl border border-black/5 bg-white p-8 sm:p-10">
          <div className="font-mono text-2xl font-semibold tracking-tight">
            Just + &lt;Category&gt;
          </div>
          <div className="mt-6 grid gap-2 sm:grid-cols-2">
            <div className="text-sm">
              <div className="text-xs font-semibold uppercase tracking-widest text-ink-muted">
                Shipping
              </div>
              <ul className="mt-2 space-y-1">
                <li>Just BP</li>
                <li>Just Weight</li>
                <li>Just Glucose</li>
              </ul>
            </div>
            <div className="text-sm">
              <div className="text-xs font-semibold uppercase tracking-widest text-ink-muted">
                In the pipeline
              </div>
              <ul className="mt-2 space-y-1">
                <li>Just Move</li>
                <li>Just Read</li>
              </ul>
            </div>
          </div>
          <p className="mt-6 max-w-2xl text-sm text-ink-muted">
            Names are always two words: the word <em>Just</em> followed by a
            single noun category. No taglines, no version suffixes, no colour
            or edition variants.
          </p>
        </div>
      </Section>

      {/* 10. Extending */}
      <Section
        eyebrow="10 · Extending the system"
        title="Adding a new Just app."
        intro="The system is designed so a new app slots in without a redesign."
      >
        <ol className="space-y-4 text-sm">
          {[
            "Pick a single category noun and name the app 'Just <Category>'.",
            "Assign one accent colour from a calm, mature palette. It must not clash with an existing app.",
            "Draw one bold symbol on the shared rounded-square base. No second symbol, no gradients inside the glyph.",
            "Add an entry to lib/apps.ts with name, tagline, description, accent, status, and icon path.",
            "Ship the icon PNG into public/icons/<slug>.png. The homepage and /apps page will pick it up automatically.",
          ].map((step, i) => (
            <li
              key={i}
              className="flex gap-4 rounded-2xl border border-black/5 bg-white p-5"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-xs font-semibold text-white">
                {i + 1}
              </div>
              <div>{step}</div>
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}
