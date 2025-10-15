import type { Meta, StoryObj } from "@storybook/html";
import { Button, type ButtonProps } from "./button.tsx";
import { renderReactToHtml } from "#utils/react-to-html.ts";

const meta: Meta<Pick<ButtonProps, "children" | "className">> = {
  tags: ["autodocs"],
  render: ({ children }) => {
    const htmlDom = renderReactToHtml(<Button>{children}</Button>);

    return htmlDom;
  },
  args: {
    children: "button",
    className: "",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
