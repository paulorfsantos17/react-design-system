import { PropsHeading, Heading } from "./Heading";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/Heading",
  component: Heading,
  args: {
    children: "Lorem Ipsum.",
    size: "md",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<PropsHeading>;

export const Default: StoryObj<PropsHeading> = {};

export const Small: StoryObj<PropsHeading> = {
  args: {
    size: "sm",
  },
};

export const Large: StoryObj<PropsHeading> = {
  args: {
    size: "lg",
  },
};

export const CustomComponent: StoryObj<PropsHeading> = {
  args: {
    asChild: true,
    children: <h1>Testando</h1>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};
