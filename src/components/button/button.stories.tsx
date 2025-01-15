import type { Meta, StoryObj } from "@storybook/html";
import { renderToString } from "react-dom/server";
import { Button, ButtonProps } from "./button.tsx";

const meta: Meta<Pick<ButtonProps, "children" | "className">> = {
  tags: ["autodocs"],
  render: ({ children }) => {
    const htmlDom = renderToString(<Button>{children}</Button>);

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
