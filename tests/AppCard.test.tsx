import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import AppCard from "@/components/AppCard";
import { apps } from "@/lib/apps";

describe("<AppCard />", () => {
  it("renders the TestFlight CTA when a URL is provided", () => {
    const bp = apps.find((a) => a.slug === "just-bp")!;
    render(<AppCard app={bp} />);
    const link = screen.getByRole("link", { name: /testflight/i });
    expect(link).toHaveAttribute("href", bp.testflightUrl);
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("shows a Coming Soon badge for unreleased apps", () => {
    const weight = apps.find((a) => a.slug === "just-weight")!;
    render(<AppCard app={weight} />);
    expect(screen.getByText(/coming soon/i)).toBeInTheDocument();
    expect(
      screen.queryByRole("link", { name: /testflight/i }),
    ).not.toBeInTheDocument();
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
