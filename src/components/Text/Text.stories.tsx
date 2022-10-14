import { PropsText, Text } from "./Text";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/Text",
  component: Text,
  args: {
    children: "Lorem Ipsum.",
    size: 'md'
  },
  argTypes: {
    size: {
      options: ['sm', 'md',  'lg'],
      control: {
        type: 'inline-radio'
      }
    },

  }
} as Meta<PropsText>;

export const Default: StoryObj<PropsText> = {};

export const Small: StoryObj<PropsText> = {
  args: {
    size: "sm",
  },
};

export const Large: StoryObj<PropsText> = {
  args: {
    size: "lg",
  },
};

export const CustomComponent: StoryObj<PropsText> = {
  args: {
    asChild: true,
    children: (
      <p>Testando</p>
    )
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    asChild: {
      table: {
        disable: true
      }
    }
  }
};
