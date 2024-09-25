"use client";

import { useState } from "react";
import { CurrencyEditDialog } from "../dialog/CurrencyEditDialog";
import type { Currency, Rate } from "@/shared/data/currency/schema";

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

        return (
          <tr className="flex w-full" key={index}>
            <td className="p-3 border-b border-blue-gray-50 w-full">
              <p className="font-bold">{name}</p>
            </td>
            <td className="p-3 border-b border-blue-gray-50 w-full">
              <p className="font-normal">{unit}</p>
            </td>
            <td className="p-3 border-b border-blue-gray-50 w-full">
              <div className="flex gap-1 justify-between">
                <p className="font-normal">{value}</p>
                <button className="pr-4" onClick={() => handleEdit(unitCode)}>
                  Edit
                </button>
              </div>
            </td>
            <td className="p-3 border-b border-blue-gray-50 w-full">
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
