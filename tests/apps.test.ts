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

  it("Just Weight is building", () => {
    expect(apps.find((a) => a.slug === "just-weight")?.status).toBe("building");
  });

  it("Just Glucose and Just BP are available with App Store links", () => {
    const glucose = apps.find((a) => a.slug === "just-glucose");
    expect(glucose?.status).toBe("available");
    expect(glucose?.appStoreUrl).toMatch(/^https:\/\/apps\.apple\.com\//);

    const bp = apps.find((a) => a.slug === "just-bp");
    expect(bp?.status).toBe("available");
    expect(bp?.appStoreUrl).toMatch(/^https:\/\/apps\.apple\.com\//);
  });

  it("exposes at least one future app placeholder", () => {
    expect(futureApps.length).toBeGreaterThan(0);
  });
});
