export default function BrandMark({
  className = "",
}: {
  className?: string;
}) {
  return (
    <span
      className={`text-lg font-semibold tracking-tight text-ink sm:text-xl ${className}`}
    >
      Just<span className="text-ink-muted">Something</span>
    </span>
  );
}
