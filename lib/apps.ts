export type AppStatus = "available" | "in-progress" | "coming-soon" | "building";

export type JustApp = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  accent: "bp" | "weight" | "glucose" | "neutral";
  status: AppStatus;
  testflightUrl?: string;
  appStoreUrl?: string;
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
    status: "building",
    icon: "/icons/just-bp.png",
  },
  {
    slug: "just-weight",
    name: "Just Weight",
    tagline: "Weight, without the wait.",
    description: "A simple weight logging app.",
    accent: "weight",
    status: "building",
    icon: "/icons/just-weight.png",
  },
];

export const futureApps: { name: string; hint: string }[] = [
  { name: "Just Move", hint: "Movement, uncomplicated." },
  { name: "Just Read", hint: "Reading, kept simple." },
];
