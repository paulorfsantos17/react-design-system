import { PropsButton, Button } from "./Button";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Create acount",
  },
  argTypes: {

  }
} as Meta<PropsButton>;

export const Default: StoryObj<PropsButton> = {};

