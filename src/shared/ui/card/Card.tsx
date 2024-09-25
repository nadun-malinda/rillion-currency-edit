"use client";

import {
  Card as MTCard,
  type CardProps as MTCardProps,
} from "@material-tailwind/react";

interface CardProps {
  children: string | React.ReactNode;
  className?: MTCardProps["className"];
}

export default function Card({ children }: CardProps) {
  return (
    <MTCard
      className="h-full w-full overflow-scroll"
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      {children}
    </MTCard>
  );
}
