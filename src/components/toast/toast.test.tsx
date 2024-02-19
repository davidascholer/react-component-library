import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent, { UserEvent } from "@testing-library/user-event";
import Toast from "./Toast";

describe("Toast", () => {
  const tree = (snackbarShown) => {
    return render(
      <Toast
        toastMsg="This is a toast message"
        closeMsg="Close"
        snackbarShown={snackbarShown}
      />
    );
  };

  it("hidden on render", async () => {
    tree(false);
    const alert = screen.queryByRole("alert");
    expect(alert).toBeFalsy();
  });

  it("appears", async () => {
    tree(true);
    const alert = screen.getByRole("alert");
    expect(alert).toBeInTheDocument();
    expect(alert).toBeVisible();
  });
});
