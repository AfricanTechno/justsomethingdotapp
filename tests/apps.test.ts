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

  it("all three apps are available with App Store links", () => {
    for (const slug of ["just-bp", "just-weight", "just-glucose"]) {
      const app = apps.find((a) => a.slug === slug);
      expect(app?.status).toBe("available");
      expect(app?.appStoreUrl).toMatch(/^https:\/\/apps\.apple\.com\//);
    }
  });

  it("exposes at least one future app placeholder", () => {
    expect(futureApps.length).toBeGreaterThan(0);
  });
});
