// Button.stories.tsx
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "../components/buttons/Button";
import { Colors } from "../types/colors/colortypes";

// Required default export w/ title
export default {
  title: "Button",
  // Though optional, `component` is required to fully populate ArgsTable
  component: Button,
  argTypes: {
    backgroundColorClass: {
      options: [...Object.values(Colors).map((c) => `bg-${c}`)],
      control: { type: "select" },
    },
    textColorClass: {
      options: [...Object.values(Colors).map((c) => `text-${c}`)],
      control: { type: "select" },
    },
    darkBackgroundColorClass: {
      options: [...Object.values(Colors).map((c) => `dark:bg-${c}`)],
      control: { type: "select" },
    },
    darkTextColorClass: {
      options: [...Object.values(Colors).map((c) => `dark:text-${c}`)],
      control: { type: "select" },
    },
  },
  // Optional parameters
  parameters: {
    componentSubtitle: "This is the Primary Button style",
  },
} as ComponentMeta<typeof Button>;

// Optionally define a template to reuse
const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}></Button>
);

export const Primary = Template.bind({});
// Overwrite previous args
Primary.args = {
  label: "Learn More",
  isDisabled: false,
  onClick: () => console.log("test"),
  backgroundColorClass: `bg-purple-500`,
  textColorClass: "text-gray-100",
  darkBackgroundColorClass: `bg-blue-500`,
  darkTextColorClass: "text-gray-100",
};
Primary.story = {
  parameters: {
    docs: {
      storyDescription:
        "This is the primary button we'll use and it has some modifications",
    },
  },
};

export const PrimaryDisabled = Template.bind({});
// Overwrite previous args
PrimaryDisabled.args = {
  label: "Learn More",
  isDisabled: true,
  onClick: () => console.log("test"),
};
PrimaryDisabled.story = {
  parameters: {
    docs: {
      storyDescription:
        "This is the primary button rendered in a disabled state",
    },
  },
};
