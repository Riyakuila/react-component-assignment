import type { Meta, StoryObj } from "@storybook/react";
import Button from "../components/Button";
import "../index.css"

const meta: Meta<typeof Button> = {
  title: "Components/Button", 
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text" },
    onClick: { action: "clicked" },
    disabled: { control: "boolean" },
    type: { control: { type: "radio" }, options: ["button", "submit"] },
    className: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Click Me",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
  },
};

export const CustomStyled: Story = {
  args: {
    children: "Custom Style",
    className: "bg-red-500 hover:bg-red-600",
  },
};
