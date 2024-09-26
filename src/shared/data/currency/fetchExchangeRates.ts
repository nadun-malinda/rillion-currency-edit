import { fetchHttp } from "@/shared/utils/fetchHttp";
import type { ExchangeRateResponse } from "./schema";

/**
 * Fetches the currency exchange rates from an external API.
 * It retrieves the rates via a provided URL, falling back to a default
 * if no environment variable is set. Returns either the exchange rates
 * data or an error in case of failure.
 *
 * @returns {Promise<ExchangeRateResponse | Error>} A promise that resolves to
 * the exchange rates response object or an error if the fetch fails.
 *
 * @throws {Error} Throws an error if the network request fails.
 */
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
