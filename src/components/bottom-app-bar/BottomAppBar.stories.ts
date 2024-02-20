import type { Meta, StoryObj } from "@storybook/react";

import BottomAppBar from "./BottomAppBar";

const meta = {
  title: "Appbars/BottomAppBar",
  component: BottomAppBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    handleDrawerClick: { action: "handleDrawerClick" },
    displayName: { control: "text" },
    handleAddClick: { action: "handleAddClick" },
    handleSearchClick: { action: "handleSearchClick" },
    handleKebabClick: { action: "handleKebabClick" },
  },
} satisfies Meta<typeof BottomAppBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    displayName: "Jane Doe",
  },
};
