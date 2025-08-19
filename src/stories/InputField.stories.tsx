import type { Meta, StoryObj } from "@storybook/react";
import InputField from "../components/InputField";
import { useState } from "react";
import "../index.css";

const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    helperText: { control: "text" },
    errorMessage: { control: "text" },
    variant: { control: "radio", options: ["filled", "outlined", "ghost"] },
    size: { control: "radio", options: ["sm", "md", "lg"] },
    type: { control: "radio", options: ["text", "password", "email"] },
    clearable: { control: "boolean" },
    passwordToggle: { control: "boolean" },
    disabled: { control: "boolean" },
    invalid: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof InputField>;

const ControlledInput = (props: any) => {
  const [value, setValue] = useState("");
  return (
    <InputField
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const Default: Story = {
  render: (args) => <ControlledInput {...args} />,
  args: {
    label: "Username",
    placeholder: "Enter your name",
    helperText: "This is a helper text",
  },
};

export const Variants: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4 w-80">
      <ControlledInput {...args} variant="outlined" label="Outlined" />
      <ControlledInput {...args} variant="filled" label="Filled" />
      <ControlledInput {...args} variant="ghost" label="Ghost" />
    </div>
  ),
};

export const Password: Story = {
  render: (args) => <ControlledInput {...args} />,
  args: {
    label: "Password",
    placeholder: "Enter password",
    passwordToggle: true,
  },
};

export const Error: Story = {
  render: (args) => <ControlledInput {...args} />,
  args: {
    label: "Email",
    placeholder: "Enter email",
    errorMessage: "Invalid email address",
    invalid: true,
  },
};

export const Clearable: Story = {
  render: (args) => <ControlledInput {...args} />,
  args: {
    label: "Search",
    placeholder: "Type something...",
    clearable: true,
  },
};
