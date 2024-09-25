"use client";

import {
  Dialog as MTDialog,
  DialogBody as MTDialogBody,
  DialogFooter as MTDialogFooter,
  DialogHeader as MTDialogHeader,
  type DialogProps,
} from "@material-tailwind/react";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  size?: DialogProps["size"];
  className?: DialogProps["className"];
}

export function Dialog({
  isOpen,
  onClose,
  children,
  size = "xs",
  className,
}: ModalProps) {
  return (
    <MTDialog
      open={isOpen}
      handler={onClose}
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
      className={`rounded-2xl ${className}`}
      size={size}
    >
      {children}
    </MTDialog>
  );
}

function Header({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: DialogProps["className"];
}) {
  return (
    <MTDialogHeader
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
      className={`box-content min-h-8 justify-center rounded-t-2xl text-title-large font-bold text-on-surface-variant lg:px-kv04 lg:pt-kv03 ${
        className ?? ""
      }`}
    >
      {children}
    </MTDialogHeader>
  );
}

function Body({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: DialogProps["className"];
}) {
  return (
    <MTDialogBody
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
      className={`bg-surface-variant lg:px-kv04 lg:py-kv03 ${className}`}
    >
      {children}
    </MTDialogBody>
  );
}

function Footer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: DialogProps["className"];
}) {
  return (
    <MTDialogFooter
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
      className={`overflow-hidden rounded-b-2xl p-0 ${className}`}
    >
      {children}
    </MTDialogFooter>
  );
}

Dialog.Header = Header;
Dialog.Body = Body;
Dialog.Footer = Footer;
