import Image from "next/image";

// Renders the full JustSomething horizontal lockup (icon + wordmark)
// from public/brand/justsomething.png, sized by pixel height.
// Source image is tightly cropped (1185 x 278).
const SRC_W = 1185;
const SRC_H = 278;

export default function BrandMark({ height = 32 }: { height?: number }) {
  const width = Math.round((height * SRC_W) / SRC_H);
  return (
    <Image
      src="/brand/justsomething.png"
      alt="JustSomething"
      width={width}
      height={height}
      priority
      style={{ height, width }}
    />
  );
}
