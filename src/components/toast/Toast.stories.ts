import type { Meta, StoryObj } from "@storybook/react";

import Toast from "./Toast";

const meta = {
  title: "Toasts/Snackbar",
  component: Toast,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    toastMsg: { control: "text" },
    closeMsg: { control: "text" },
    snackbarShown: { control: "boolean" },
  },
} satisfies Meta<typeof Toast>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    toastMsg: "This is a toast message",
    closeMsg: "Close",
    snackbarShown: false,
  },
};

export const Open: Story = {
  args: {
    toastMsg: "This is a toast message",
    closeMsg: "Close",
    snackbarShown: true,
  },
};
