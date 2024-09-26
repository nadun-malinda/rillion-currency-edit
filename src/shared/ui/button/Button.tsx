"use client";

import {
  Button as MTButton,
  type ButtonProps as MTButtonProps,
} from "@material-tailwind/react";

interface ButtonProps
  extends Pick<MTButtonProps, "type" | "variant" | "onClick" | "disabled"> {
  children: string;
}

/**
 * A custom Button component that wraps Material Tailwind's Button component.
 * It accepts a subset of the props from the Material Tailwind Button, along with children text.
 *
 * @param {ButtonProps} props - The properties passed to the Button component.
 * @param {string} props.children - The text to display inside the button.
 * @param {string} [props.type] - The type of the button (e.g., "button", "submit").
 * @param {string} [props.variant] - The variant of the button (e.g., "filled", "outlined").
 * @param {boolean} [props.disabled] - If true, disables the button.
 * @param {React.MouseEventHandler<HTMLButtonElement>} [props.onClick] - The onClick handler for the button.
 * @returns {JSX.Element} The rendered button component.
 */
export function Button({
  children,
  type,
  variant,
  disabled,
  onClick,
}: ButtonProps) {
  return (
    <MTButton
      type={type}
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      {children}
    </MTButton>
  );
}
