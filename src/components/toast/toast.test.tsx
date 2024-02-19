import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Toast from "./Toast";

describe("Toast", () => {
  const tree = () => {
    return render(
      <Toast toastMsg="This is a toast message" closeMsg="Close" />
    );
  };

  it("hidden on render", async () => {
    tree();
    expect(screen.getByTestId("toast")).not.toBeInTheDocument();
  });

  it("appears", async () => {
    tree();
    expect(screen.getByTestId("toast")).toBeInTheDocument();
  });
});
