import { fetchHttp } from "@/shared/utils/fetchHttp";

export async function fetchExchangeRates() {
  try {
    const url =
      process.env.EXCHANGE_RATES_API_URL ||
      "https://api.coingecko.com/api/v3/exchange_rates";

    const exchangeRates = await fetchHttp(url);

    console.log(">>> exchangeRates: ", exchangeRates);
  } catch (error) {
    return error;
  }
}
