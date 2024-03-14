import type { Meta, StoryObj } from "@storybook/react";

import SignInForm from "./SignInForm";

const meta = {
  title: "Pages/SignInForm",
  component: SignInForm,
  argTypes: {
    initialEmail: { type: "string", default: "" },
    initialPassword: { type: "string", default: "" },
    handleSignIn: { action: "handleSignIn" },
  },
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "light",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SignInForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    handleSignIn(values) {
      alert(JSON.stringify(values, null, 2));
    },
  },
};

export const FormErrorEmail: Story = {
  args: {
    initialEmail: "email-no-at-symbol",
    handleSignIn(values) {
      alert(JSON.stringify(values, null, 2));
    },
  },
};

export const FormErrorPassword: Story = {
  args: {
    initialPassword: "under-8",
    handleSignIn(values) {
      alert(JSON.stringify(values, null, 2));
    },
  },
};

export const FormHappyPath: Story = {
  args: {
    initialEmail: "email@email.com",
    initialPassword: "password",
    handleSignIn(values) {
      alert(JSON.stringify(values, null, 2));
    },
  },
};
