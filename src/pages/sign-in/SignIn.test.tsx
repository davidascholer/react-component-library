/* eslint-disable @typescript-eslint/no-unused-vars */
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import SignIn from "./SignIn";
import userEvent from "@testing-library/user-event";

describe("BottomAppBar", () => {
  const tree = () => {
    return render(<SignIn />);
  };

  it("renders", async () => {
    tree();
    const emailTextField = screen.getByRole("textbox", { name: /email/i });
    expect(emailTextField).toBeInTheDocument();
    const passwordTextField = screen.getByTestId("sign-in-password");
    expect(passwordTextField).toBeInTheDocument();
    const submitButton = screen.getByRole("button", { name: /sign in/i });
    expect(submitButton).toBeInTheDocument();
  });

  it("email error", async () => {
    tree();
    const user = userEvent.setup();
    const emailTextField = screen.getByRole("textbox", { name: /email/i });
    const submitButton = screen.getByRole("button", { name: /sign in/i });

    await user.click(submitButton);
    let emailError = await screen.queryByText(/email is required/i);
    expect(emailError).toBeInTheDocument();

    await user.type(emailTextField, "test");
    await user.click(submitButton);
    emailError = await screen.queryByText(/enter a valid email/i);
    expect(emailError).toBeInTheDocument();
  });

  it("password error", async () => {
    tree();
    const user = userEvent.setup();
    const submitButton = screen.getByRole("button", { name: /sign in/i });
    await user.click(submitButton);
    const passwordError = await screen.queryByText(/password is required/i);
    expect(passwordError).toBeInTheDocument();
    // screen.logTestingPlaygroundURL();
  });

  it("success", async () => {
    tree();
    const user = userEvent.setup();
    const emailTextField = screen.getByRole("textbox", { name: /email/i });
    const passwordTextField = screen.getByTestId("sign-in-password");
    const submitButton = screen.getByRole("button", { name: /sign in/i });

    await user.type(emailTextField, "must_have_@_symbol_dot.com");
    await user.click(passwordTextField);
    await user.keyboard("test");
    await user.click(submitButton);
    //handle success
  });
});
