import { fetchExchangeRates } from "@/shared/data/currency/fetchExchangeRates";
import { CurrencyTableRows } from "./CurrencyTableRows";

export async function CurrencyTableBody() {
  const exchangeRates = await fetchExchangeRates();

  if (exchangeRates instanceof Error) {
    return <p>Something went wrong!</p>;
  }

  return (
    <>
      <tbody className="flex flex-col items-center justify-between overflow-y-scroll w-full h-[80vh]">
        <CurrencyTableRows exchangeRates={exchangeRates.rates} />
      </tbody>
    </>
  );
}
