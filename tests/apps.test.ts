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

  it("Just BP and Just Weight are building", () => {
    expect(apps.find((a) => a.slug === "just-bp")?.status).toBe("building");
    expect(apps.find((a) => a.slug === "just-bp")?.testflightUrl).toBeUndefined();
    expect(apps.find((a) => a.slug === "just-weight")?.status).toBe("building");
  });

  it("Just Glucose is available with an App Store link", () => {
    const glucose = apps.find((a) => a.slug === "just-glucose");
    expect(glucose?.status).toBe("available");
    expect(glucose?.appStoreUrl).toMatch(/^https:\/\/apps\.apple\.com\//);
  });

  it("exposes at least one future app placeholder", () => {
    expect(futureApps.length).toBeGreaterThan(0);
  });
});
