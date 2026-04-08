import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-32 text-center">
      <h1 className="text-4xl font-semibold tracking-tight">Not found</h1>
      <p className="mt-4 text-ink-muted">
        We couldn't find that page. It may have moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full bg-ink px-6 py-3 text-sm font-medium text-white hover:bg-ink-soft"
      >
        Back home
      </Link>
    </section>
  );
}
