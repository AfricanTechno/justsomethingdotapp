export type AppStatus = "available" | "in-progress" | "coming-soon";

export type JustApp = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  accent: "bp" | "weight" | "glucose" | "neutral";
  status: AppStatus;
  testflightUrl?: string;
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
  },
  {
    slug: "just-weight",
    name: "Just Weight",
    tagline: "Weight, without the noise.",
    description: "A simple weight logging app.",
    accent: "weight",
    status: "coming-soon",
  },
  {
    slug: "just-glucose",
    name: "Just Glucose",
    tagline: "Glucose, clearly tracked.",
    description: "A simple glucose tracking app.",
    accent: "glucose",
    status: "coming-soon",
  },
];

export const futureApps: { name: string; hint: string }[] = [
  { name: "Just Sleep", hint: "Rest, gently noted." },
  { name: "Just Water", hint: "Hydration at a glance." },
  { name: "Just Meds", hint: "Quiet medication reminders." },
  { name: "Just Steps", hint: "Movement, uncomplicated." },
];
