"use client";

import {
  Input as MTInput,
  type InputProps as MTInputProps,
} from "@material-tailwind/react";

type InputProps = Pick<
  MTInputProps,
  | "label"
  | "onChange"
  | "type"
  | "inputMode"
  | "value"
  | "defaultValue"
  | "size"
>;

export function Input({
  label,
  type = "text",
  inputMode,
  value,
  defaultValue,
  size,
  onChange,
}: InputProps) {
  return (
    <MTInput
      label={label}
      type={type}
      inputMode={inputMode}
      value={value}
      size={size}
      className="text-base"
      onChange={onChange}
      defaultValue={defaultValue}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
      crossOrigin={undefined}
    />
  );
}
