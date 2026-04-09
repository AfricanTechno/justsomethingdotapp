import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import AppCard from "@/components/AppCard";
import { apps } from "@/lib/apps";

describe("<AppCard />", () => {
  it("shows a Building badge for in-development apps", () => {
    const bp = apps.find((a) => a.slug === "just-bp")!;
    render(<AppCard app={bp} />);
    expect(screen.getByText(/building/i)).toBeInTheDocument();
    expect(
      screen.queryByRole("link", { name: /testflight/i }),
    ).not.toBeInTheDocument();
  });

  it("renders the App Store CTA when an appStoreUrl is provided", () => {
    const glucose = apps.find((a) => a.slug === "just-glucose")!;
    render(<AppCard app={glucose} />);
    const link = screen.getByRole("link", { name: /app store/i });
    expect(link).toHaveAttribute("href", glucose.appStoreUrl);
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("renders the app name and description", () => {
    const glucose = apps.find((a) => a.slug === "just-glucose")!;
    render(<AppCard app={glucose} />);
    expect(
      screen.getByRole("heading", { name: "Just Glucose" }),
    ).toBeInTheDocument();
    expect(screen.getByText(glucose.description)).toBeInTheDocument();
  });
});
