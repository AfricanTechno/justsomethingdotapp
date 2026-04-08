import Image from "next/image";

export default function BrandMark({
  size = 24,
  withWordmark = true,
}: {
  size?: number;
  withWordmark?: boolean;
}) {
  return (
    <span className="inline-flex items-center gap-2">
      <Image
        src="/brand/justsomething-mark.png"
        alt=""
        width={size}
        height={size}
        className="rounded-[22%]"
        aria-hidden
      />
      {withWordmark && (
        <span className="font-semibold tracking-tight">JustSomething</span>
      )}
    </span>
  );
}
