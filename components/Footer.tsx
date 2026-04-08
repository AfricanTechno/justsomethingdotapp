import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="flex items-center gap-2 font-semibold">
              <span
                aria-hidden
                className="inline-block h-5 w-5 rounded-md bg-gradient-to-br from-accent-glucose via-accent-weight to-accent-bp"
              />
              justsomething.app
            </div>
            <p className="mt-2 max-w-sm text-sm text-ink-muted">
              Simple apps. Clear tracking.
            </p>
          </div>

          <nav aria-label="Footer" className="flex gap-10 text-sm">
            <ul className="space-y-2">
              <li className="text-ink-muted">Site</li>
              <li><Link href="/" className="hover:text-ink">Home</Link></li>
              <li><Link href="/apps" className="hover:text-ink">Apps</Link></li>
            </ul>
            <ul className="space-y-2">
              <li className="text-ink-muted">Help</li>
              <li><Link href="/support" className="hover:text-ink">Support</Link></li>
              <li><Link href="/privacy" className="hover:text-ink">Privacy</Link></li>
            </ul>
          </nav>
        </div>

        <div className="mt-10 border-t border-black/5 pt-6 text-xs text-ink-muted">
          © {new Date().getFullYear()} Just Apps. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
