import {StripeConstructorOptions, Stripe} from './stripe-js';

export type ReleaseTrain = 'endive';

export const loadStripe: (
  publishableKey: string,
  options?: StripeConstructorOptions | undefined
) => Promise<Stripe | null>;
