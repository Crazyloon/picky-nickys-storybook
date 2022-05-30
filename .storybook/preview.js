import "../src/globals.css";
import { themes } from "@storybook/theming";
import addons from "@storybook/addons";
import { DocsContainer } from "./components/DocContainer";

const channel = addons.getChannel();

export const parameters = {
  darkMode: {
    dark: { ...themes.dark },
    light: { ...themes.normal },
    classTarget: "html",
    stylePreview: true,
  },
  docs: {
    container: DocsContainer,
  },
};
