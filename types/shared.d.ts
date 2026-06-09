import {StripeConstructorOptions, Stripe} from './stripe-js';

export type ReleaseTrain = 'dahlia';

export const loadStripe: (
  publishableKey: string,
  options?: StripeConstructorOptions | undefined
) => Promise<Stripe | null>;
