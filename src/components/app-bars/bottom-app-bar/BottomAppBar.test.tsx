import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import BottomAppBar from "./BottomAppBar";

describe("BottomAppBar", () => {
  const tree = () => {
    return render(
      <BottomAppBar
        handleAddClick={() => {}}
        handleDrawerClick={() => {}}
        handleKebabClick={() => {}}
        handleSearchClick={() => {}}
        displayName="Jane Doe"
      />
    );
  };

  it("renders menu", async () => {
    tree();
    const menu = screen.queryByTestId(/menuicon/i);
    expect(menu).toBeInTheDocument();
  });

  it("renders add", async () => {
    tree();
    const add = screen.queryByTestId(/addicon/i);
    expect(add).toBeInTheDocument();
  });

  it("renders search", async () => {
    tree();
    const search = screen.queryByTestId(/searchicon/i);
    expect(search).toBeInTheDocument();
  });

  it("renders kebab", async () => {
    tree();
    const kebab = screen.queryByTestId(/moreverticon/i);
    expect(kebab).toBeInTheDocument();
  });
});
