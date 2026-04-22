export type AppStatus =
  | "available"
  | "pre-release"
  | "in-progress"
  | "coming-soon"
  | "building";

export type JustApp = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  accent: "bp" | "weight" | "glucose" | "neutral";
  status: AppStatus;
  testflightUrl?: string;
  appStoreUrl?: string;
  releaseNote?: string;
  icon: string;
};

// Current apps in the Just family. Add new entries here to expand the site.
export const apps: JustApp[] = [
  {
    slug: "just-glucose",
    name: "Just Glucose",
    tagline: "Glucose, clearly tracked.",
    description: "A simple glucose tracking app.",
    accent: "glucose",
    status: "available",
    appStoreUrl: "https://apps.apple.com/us/app/just-glucose/id6761859666",
    icon: "/icons/just-glucose.png",
  },
  {
    slug: "just-bp",
    name: "Just BP",
    tagline: "Blood pressure, simply logged.",
    description: "A simple blood pressure tracking app.",
    accent: "bp",
    status: "available",
    appStoreUrl: "https://apps.apple.com/us/app/just-bp/id6761688889",
    icon: "/icons/just-bp.png",
  },
  {
    slug: "just-weight",
    name: "Just Weight",
    tagline: "Weight, without the wait.",
    description: "A simple weight logging app.",
    accent: "weight",
    status: "available",
    appStoreUrl: "https://apps.apple.com/us/app/just-weight-no-wait/id6761859022",
    icon: "/icons/just-weight.png",
  },
  {
    slug: "just-food",
    name: "Just Food - Journal",
    tagline: "Food, simply journaled.",
    description: "A simple food journal for quick daily logging.",
    accent: "neutral",
    status: "pre-release",
    releaseNote: "Pre-release planned for 30 April 2026.",
    icon: "/icons/just-food.png",
  },
];

export const futureApps: { name: string; hint: string }[] = [
  { name: "Just Move", hint: "Movement, uncomplicated." },
  { name: "Just Read", hint: "Reading, kept simple." },
];
