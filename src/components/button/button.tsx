import { ComponentProps } from "react";
import { clsx } from "clsx";

export type ButtonProps = ComponentProps<"button">;

export const Button = ({ className, ...restProps }: ButtonProps) => (
  <button
    className={clsx(
      "min-w-30 rounded-full bg-green-600 p-2 text-white inset-ring inset-shadow-sm ring shadow-md ring-green-600 inset-shadow-white/20 inset-ring-white/15 hover:bg-green-500",
      className,
    )}
    {...restProps}
  />
);
