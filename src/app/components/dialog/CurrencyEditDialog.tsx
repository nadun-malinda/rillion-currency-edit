"use client";

import { useState } from "react";
import { Input } from "@/shared/ui/input/Input";
import { Dialog } from "@/shared/ui/dialog/Dialog";
import { Button } from "@/shared/ui/button/Button";
import { Currency } from "@/shared/data/currency/schema";

interface CurrencyEditDialogProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSave: (value: number) => void;
  selectedCurrency?: Currency;
}

export function CurrencyEditDialog({
  open,
  setOpen,
  onSave,
  selectedCurrency,
}: CurrencyEditDialogProps) {
  const [inputValue, setInputValue] = useState(selectedCurrency?.value || "");

  const handleOnSave = () => {
    onSave(+inputValue);
    handleOnClose();
  };

  const handleOnClose = () => {
    setOpen(false);
    setInputValue("");
  };

  return (
    <Dialog isOpen={open} onClose={() => setOpen(!open)}>
      <Dialog.Header>{selectedCurrency?.name}</Dialog.Header>
      <Dialog.Body>
        <div>
          <Input
            size="lg"
            label="Value"
            type="number"
            inputMode="numeric"
            defaultValue={selectedCurrency?.value}
            onChange={(e) => setInputValue(e.target.value)}
          />

          <div className="flex gap-3 pt-6 justify-end">
            <Button variant="outlined" onClick={handleOnClose}>
              Cancel
            </Button>
            <Button onClick={handleOnSave} disabled={!inputValue}>
              Save
            </Button>
          </div>
        </div>
      </Dialog.Body>
    </Dialog>
  );
}
