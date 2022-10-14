import { PropsCheckbox, Checkbox } from "./Checkbox";
import { Meta, StoryObj } from "@storybook/react";
import { Text } from "../Text/Text";

export default {
  title: "Components/CheckBox",
  component: Checkbox,
  args: {},
  argTypes: {},
  decorators: [
    (Story) => {
      return (
        <div className="flex items-center gap-2">
          {Story()}
          <Text size="sm">Lembrar-me de mim por 30 dias</Text>
        </div>
      )
    }
  ]
} as Meta<PropsCheckbox>;

export const Default: StoryObj<PropsCheckbox> = {};

