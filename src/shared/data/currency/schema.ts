export interface Currency {
  name: string;
  unit: string;
  value: number;
  type: string;
}

export interface Rate {
  [key: string]: Currency;
}

export interface ExchangeRateResponse {
  rates: Rate;
}
