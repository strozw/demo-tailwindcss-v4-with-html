import type { Meta, StoryObj } from "@storybook/html";
import { parseHtmlToTag } from "../../utils/dom-parser";
import html from "./button.html?raw";

type ButtonProps = {
  slot: string;
  className: string;
};

const meta: Meta<ButtonProps> = {
  tags: ["autodocs"],
  render: ({ slot, className }) => {
    const button = parseHtmlToTag(html, "button");

    button.textContent = button.textContent?.replace("{{ $slot }}", slot) ?? "";

    button.className = button.className.replace("{{ $className }}", className);

    return button;
  },
  args: {
    slot: "button",
    className: "",
  },
  argTypes: {
    className: {
      type: "string",
      name: "className (※tailwindcss の class はビルドが必要なため反映されない)",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
