import type { Meta, StoryObj } from "@storybook/react";

import Toolkit from "./Toolkit";

const meta = {
  title: "Redux/Toolkit",
  component: Toolkit,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Toolkit>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    content: "This is a toast message",
  },
};

export const Open: Story = {
  args: {
    content: "This is a toast message",
  },
};
