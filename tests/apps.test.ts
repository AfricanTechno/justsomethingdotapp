import { describe, it, expect } from "vitest";
import { apps, futureApps } from "@/lib/apps";

describe("app family data", () => {
  it("contains the three launch apps", () => {
    const names = apps.map((a) => a.name);
    expect(names).toEqual(
      expect.arrayContaining(["Just BP", "Just Weight", "Just Glucose"]),
    );
  });

  it("has unique slugs", () => {
    const slugs = apps.map((a) => a.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("Just BP is available with a TestFlight link", () => {
    const bp = apps.find((a) => a.slug === "just-bp");
    expect(bp?.status).toBe("available");
    expect(bp?.testflightUrl).toMatch(/^https:\/\/testflight\.apple\.com\//);
  });

  it("Weight and Glucose are coming soon", () => {
    expect(apps.find((a) => a.slug === "just-weight")?.status).toBe(
      "coming-soon",
    );
    expect(apps.find((a) => a.slug === "just-glucose")?.status).toBe(
      "coming-soon",
    );
  });

  it("exposes at least one future app placeholder", () => {
    expect(futureApps.length).toBeGreaterThan(0);
  });
});
