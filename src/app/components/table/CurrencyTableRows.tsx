"use client";

import { useState } from "react";
import { CurrencyEditDialog } from "../dialog/CurrencyEditDialog";
import type { Currency, Rate } from "@/shared/data/currency/schema";
import { IconButton } from "@/shared/ui/button/IconButton";
import Image from "next/image";

interface CurrencyTableRowProps {
  exchangeRates: Rate;
}

/**
 * CurrencyTableRows component renders the rows of the currency table,
 * displaying the name, unit, value, and type for each currency.
 * It allows users to edit the value of a currency through a dialog.
 *
 * @param {CurrencyTableRowProps} props - The exchange rates data for currencies.
 * @param {Rate} props.exchangeRates - The rates object containing currency information.
 * @returns {JSX.Element} The table rows displaying currency data with an option to edit values.
 */
export function CurrencyTableRows({ exchangeRates }: CurrencyTableRowProps) {
  const [open, setOpen] = useState(false);
  const [rates, setRates] = useState(exchangeRates);
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>();
  const [selectedUnitCode, setSelectedUnitCode] = useState("");

  /**
   * Handles the edit action by opening the edit dialog for a selected currency.
   *
   * @param {string} unitCode - The unit code of the selected currency.
   */
  const handleEdit = (unitCode: string) => {
    const currency = rates[unitCode] as Currency;

    setSelectedUnitCode(unitCode);
    setSelectedCurrency(currency);
    setOpen(true);
  };

  /**
   * Handles saving the updated currency value, updating the state with the new value.
   *
   * @param {number} value - The new value to be saved for the selected currency.
   */
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
              <p className="font-bold text-black text-base">{name}</p>
            </td>
            <td className={tdClass}>
              <p className="font-normal text-base">{unit}</p>
            </td>
            <td className={`${tdClass} bg-rl-light-green/50`}>
              <div className="flex gap-1 items-center justify-between">
                <p className="font-normal text-base">{value}</p>
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
              <p className="font-medium text-base">{type}</p>
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
