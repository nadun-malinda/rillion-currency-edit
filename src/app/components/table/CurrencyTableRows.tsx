"use client";

import { useState } from "react";
import { CurrencyEditDialog } from "../dialog/CurrencyEditDialog";
import type { Currency, Rate } from "@/shared/data/currency/schema";
import { IconButton } from "@/shared/ui/button/IconButton";
import Image from "next/image";

interface CurrencyTableRowProps {
  exchangeRates: Rate;
}

export function CurrencyTableRows({ exchangeRates }: CurrencyTableRowProps) {
  const [open, setOpen] = useState(false);
  const [rates, setRates] = useState(exchangeRates);
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>();
  const [selectedUnitCode, setSelectedUnitCode] = useState("");

  const handleEdit = (unitCode: string) => {
    const currency = rates[unitCode] as Currency;

    setSelectedUnitCode(unitCode);
    setSelectedCurrency(currency);
    setOpen(true);
  };

  const handleOnSave = (value: number) => {
    setRates((prevRates) => ({
      ...prevRates,
      [selectedUnitCode]: { ...rates[selectedUnitCode], value },
    }));
  };

  return (
    <>
      {Object.keys(rates).map((unitCode, index) => {
        const { name, unit, value, type } = rates[unitCode];
        const tdClass = "px-3 py-2 border-b border-rl-green/30";

        return (
          <tr key={index}>
            <td className={tdClass}>
              <p className="font-bold text-black">{name}</p>
            </td>
            <td className={tdClass}>
              <p className="font-normal">{unit}</p>
            </td>
            <td className={`${tdClass} bg-rl-light-green/50`}>
              <div className="flex gap-1 items-center justify-between">
                <p className="font-normal">{value}</p>
                <IconButton
                  variant="outlined"
                  size="sm"
                  onClick={() => handleEdit(unitCode)}
                >
                  <Image
                    src="/images/pencil.svg"
                    width={16}
                    height={16}
                    alt="edit icon"
                  />
                </IconButton>
              </div>
            </td>
            <td className={tdClass}>
              <p className="font-medium">{type}</p>
            </td>
          </tr>
        );
      })}

      <CurrencyEditDialog
        open={open}
        setOpen={setOpen}
        onSave={handleOnSave}
        selectedCurrency={selectedCurrency}
      />
    </>
  );
}
