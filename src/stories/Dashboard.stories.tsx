import type { Meta, StoryObj } from "@storybook/react";
import Dashboard from "../components/Dashboard";
import "../index.css";

const meta: Meta<typeof Dashboard> = {
  title: "Components/Dashboard",
  component: Dashboard,
  tags: ["autodocs"],
  argTypes: {
    data: { control: "object" },
  },
};
export default meta;

type Story = StoryObj<typeof Dashboard>;

const sampleUsers = [
  { id: 1, name: "Riya", email: "riya@example.com", role: "Admin" },
  { id: 2, name: "Bob", email: "bob@example.com", role: "Moderator" },
  { id: 3, name: "Charlie", email: "charlie@example.com", role: "User" },
  { id: 4, name: "Alice", email: "alice@example.com", role: "User" },
];

export const Default: Story = {
  args: {
    data: sampleUsers,
  },
};
