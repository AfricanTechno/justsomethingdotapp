import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import AppCard from "@/components/AppCard";
import { apps } from "@/lib/apps";

describe("<AppCard />", () => {
  it("renders the App Store CTA when an appStoreUrl is provided", () => {
    const weight = apps.find((a) => a.slug === "just-weight")!;
    render(<AppCard app={weight} />);
    const link = screen.getByRole("link", { name: /app store/i });
    expect(link).toHaveAttribute("href", weight.appStoreUrl);
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

  it("renders the prerelease note when provided", () => {
    const food = apps.find((a) => a.slug === "just-food")!;
    render(<AppCard app={food} />);

    expect(screen.getByText(food.releaseNote!)).toBeInTheDocument();
    expect(
      screen.getByText("Pre-release", { selector: "span" }),
    ).toBeInTheDocument();
  });
});
