import Image from "next/image";

// The /public/brand/justsomething.png file is the full lockup
// (icon + wordmark). BrandMark renders it at a given pixel height;
// width scales automatically.
export default function BrandMark({ height = 28 }: { height?: number }) {
  return (
    <Image
      src="/brand/justsomething.png"
      alt="JustSomething"
      width={height * 4}
      height={height}
      priority
      className="w-auto"
      style={{ height }}
    />
  );
}
