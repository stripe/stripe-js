export type PricingCurrency = {
  currency: string;
};

export type ResolvedPriceAmount = {amount: string; minorUnitsAmount: number};

export type ResolvedPrice = {
  currency: string;
  unitAmount: null | ResolvedPriceAmount;
  unitAmountDecimal: null | ResolvedPriceAmount;
  minorUnitsAmountDivisor: number;
};

export type PricingToken = {
  id: string;
};

export type PricingChangeEvent = Record<string, never>;

export type InitializePricingOptions = {
  pricingPolicy: string;
  detectedCurrencyOverride?: string;
};

/**
 * Requires beta access: Contact [Stripe support](https://support.stripe.com/) for more information.
 */
export interface Pricing {
  getAvailableCurrencies(): Promise<PricingCurrency[]>;

  getSelectedCurrency(): Promise<PricingCurrency>;

  setSelectedCurrency(currency: string): Promise<void>;

  resolvePrice(price: string): Promise<ResolvedPrice>;

  createPricingToken(): Promise<PricingToken>;

  on(eventType: 'change', handler: (event: PricingChangeEvent) => void): this;

  once(eventType: 'change', handler: (event: PricingChangeEvent) => void): this;

  off(
    eventType: 'change',
    handler?: ((event: PricingChangeEvent) => void) | null
  ): this;
}
