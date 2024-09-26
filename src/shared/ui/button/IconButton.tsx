"use client";

import {
  IconButton as MTIconButton,
  type IconButtonProps as MTIconButtonProps,
} from "@material-tailwind/react";

interface IconButtonProps
  extends Pick<MTIconButtonProps, "variant" | "size" | "onClick"> {
  children: React.ReactNode;
}

export function IconButton({
  children,
  variant,
  size,
  onClick,
}: IconButtonProps) {
  return (
    <MTIconButton
      variant={variant}
      size={size}
      onClick={onClick}
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      {children}
    </MTIconButton>
  );
}
