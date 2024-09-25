import { fetchHttp } from "@/shared/utils/fetchHttp";
import type { ExchangeRateResponse } from "./schema";

export async function fetchExchangeRates(): Promise<
  ExchangeRateResponse | Error
> {
  try {
    const url =
      process.env.EXCHANGE_RATES_API_URL ||
      "https://api.coingecko.com/api/v3/exchange_rates";

    return await fetchHttp<ExchangeRateResponse>(url);
  } catch (error) {
    return error as Error;
  }
}
