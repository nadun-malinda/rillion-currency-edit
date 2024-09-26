/**
 * Interface representing a single currency's exchange rate details.
 *
 * @interface
 * @property {string} name - The name of the currency.
 * @property {string} unit - The unit code of the currency.
 * @property {number} value - The current value of the currency.
 * @property {string} type - The type of the currency (e.g., fiat, crypto).
 */
export interface Currency {
  name: string;
  unit: string;
  value: number;
  type: string;
}

/**
 * Interface representing a collection of currencies, where each currency is
 * identified by a unique key (usually the unit code).
 *
 * @interface
 * @property {Record<string, Currency>} [key: string] - The currency keyed by its unit code.
 */
export interface Rate {
  [key: string]: Currency;
}

/**
 * Interface representing the structure of the response returned by the exchange
 * rate API.
 *
 * @interface
 * @property {Rate} rates - An object containing the rates of various currencies.
 */
export interface ExchangeRateResponse {
  rates: Rate;
}
