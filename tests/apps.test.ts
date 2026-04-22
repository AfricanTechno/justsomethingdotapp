import { describe, it, expect } from "vitest";
import { apps, futureApps } from "@/lib/apps";

describe("app family data", () => {
  it("contains the live Just app lineup shown on the site", () => {
    const names = apps.map((a) => a.name);
    expect(names).toEqual(
      expect.arrayContaining([
        "Just BP",
        "Just Weight",
        "Just Glucose",
        "Just Food - Journal",
      ]),
    );
  });

  it("has unique slugs", () => {
    const slugs = apps.map((a) => a.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("the live App Store apps keep their App Store links", () => {
    for (const slug of ["just-bp", "just-weight", "just-glucose"]) {
      const app = apps.find((a) => a.slug === slug);
      expect(app?.status).toBe("available");
      expect(app?.appStoreUrl).toMatch(/^https:\/\/apps\.apple\.com\//);
    }
  });

  it("marks Just Food as a prerelease with a dated note", () => {
    const app = apps.find((a) => a.slug === "just-food");
    expect(app?.status).toBe("pre-release");
    expect(app?.releaseNote).toBe("Pre-release planned for 30 April 2026.");
    expect(app?.appStoreUrl).toBeUndefined();
  });

  it("exposes at least one future app placeholder", () => {
    expect(futureApps.length).toBeGreaterThan(0);
  });
});
