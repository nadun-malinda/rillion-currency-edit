"use client";

import {
  Typography as MTTypography,
  type TypographyProps as MTTypographyProps,
} from "@material-tailwind/react";

interface TypographyProps {
  children: string | React.ReactNode;
  variant?: MTTypographyProps["variant"];
  color?: MTTypographyProps["color"];
  className?: MTTypographyProps["className"];
  as?: MTTypographyProps["as"];
  href?: MTTypographyProps["href"];
}

export default function Typography({ children }: TypographyProps) {
  return (
    <MTTypography
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      {children}
    </MTTypography>
  );
}
