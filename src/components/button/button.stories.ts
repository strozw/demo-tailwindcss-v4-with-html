import type { Meta, StoryObj } from "@storybook/html";
import html from "./button.html?raw";
import { parseHtml } from "#utils/dom-parser.js";

type ButtonProps = {
  children: string;
};

const meta: Meta<ButtonProps> = {
  tags: ["autodocs"],
  render: ({ children }) => {
    const htmlDom = parseHtml(html);

    const button = htmlDom.querySelector("button")!;

    button.textContent = children;

    // script などの付属の dom もレンダリングするため
    return htmlDom.body.innerHTML;
  },
  args: {
    children: "button",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
