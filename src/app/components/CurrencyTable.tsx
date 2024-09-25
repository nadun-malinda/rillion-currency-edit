import { fetchExchangeRates } from "@/shared/data/currency/fetchExchangeRates";

export default async function CurrencyTable() {
  await fetchExchangeRates();

  return <></>;
}
