import { fetchExchangeRates } from "@/shared/data/currency/fetchExchangeRates";
import { CurrencyTableRows } from "./CurrencyTableRows";

export async function CurrencyTableBody() {
  const exchangeRates = await fetchExchangeRates();

  if (exchangeRates instanceof Error) {
    return <p className="p-4 text-center">Something went wrong!</p>;
  }

  if (Object.keys(exchangeRates).length === 0) {
    return <p className="p-4 text-center">Nothing to show!</p>;
  }

  return (
    <>
      <tbody className="items-center justify-between overflow-scroll w-full h-[90vh] lg:h-[80vh]">
        <CurrencyTableRows exchangeRates={exchangeRates.rates} />
      </tbody>
    </>
  );
}
