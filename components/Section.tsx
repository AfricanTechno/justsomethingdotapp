import type { ReactNode } from "react";
import Reveal from "./Reveal";

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-6 py-20 ${className}`}>
      {(eyebrow || title || intro) && (
        <Reveal as="header" className="mb-12 max-w-2xl">
          {eyebrow && (
            <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-ink-muted">
              {eyebrow}
            </div>
          )}
          {title && (
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {title}
            </h2>
          )}
          {intro && (
            <p className="mt-4 text-lg text-ink-muted">{intro}</p>
          )}
        </Reveal>
      )}
      {children}
    </section>
  );
}
