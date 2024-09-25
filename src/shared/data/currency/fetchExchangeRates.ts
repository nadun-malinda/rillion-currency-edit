import { fetchHttp } from "@/shared/utils/fetchHttp";
import { ExchangeRateResponse, Currency } from "./schema";

export async function fetchExchangeRates(): Promise<Currency[] | Error> {
  try {
    const url =
      process.env.EXCHANGE_RATES_API_URL ||
      "https://api.coingecko.com/api/v3/exchange_rates";

    const exchangeRates = await fetchHttp<ExchangeRateResponse>(url);

    if (exchangeRates instanceof Error) {
      return exchangeRates;
    }

    return Object.values(exchangeRates.rates);
  } catch (error) {
    return error as Error;
  }
}
