import type { StorybookConfig } from "@storybook/html-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.tsx"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-interactions"],
  framework: {
    name: "@storybook/html-vite",
    options: {},
  },
};
export default config;
