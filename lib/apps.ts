export type AppStatus = "available" | "in-progress" | "coming-soon";

export type JustApp = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  accent: "bp" | "weight" | "glucose" | "neutral";
  status: AppStatus;
  testflightUrl?: string;
  icon: string;
};

// Current apps in the Just family. Add new entries here to expand the site.
export const apps: JustApp[] = [
  {
    slug: "just-bp",
    name: "Just BP",
    tagline: "Blood pressure, simply logged.",
    description: "A simple blood pressure tracking app.",
    accent: "bp",
    status: "available",
    testflightUrl: "https://testflight.apple.com/join/1NqxSEA2",
    icon: "/icons/just-bp.png",
  },
  {
    slug: "just-weight",
    name: "Just Weight",
    tagline: "Weight, without the wait.",
    description: "A simple weight logging app.",
    accent: "weight",
    status: "coming-soon",
    icon: "/icons/just-weight.png",
  },
  {
    slug: "just-glucose",
    name: "Just Glucose",
    tagline: "Glucose, clearly tracked.",
    description: "A simple glucose tracking app.",
    accent: "glucose",
    status: "coming-soon",
    icon: "/icons/just-glucose.png",
  },
];

export const futureApps: { name: string; hint: string }[] = [
  { name: "Just Move", hint: "Movement, uncomplicated." },
  { name: "Just Read", hint: "Reading, kept simple." },
];
