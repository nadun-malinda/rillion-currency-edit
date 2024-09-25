"use client";

import {
  Button as MTButton,
  type ButtonProps as MTButtonProps,
} from "@material-tailwind/react";

interface ButtonProps
  extends Pick<MTButtonProps, "type" | "variant" | "onClick" | "disabled"> {
  children: string;
}

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
