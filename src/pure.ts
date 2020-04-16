///<reference path='../types/index.d.ts' />
import {Stripe as StripeInstance, StripeConstructor} from '@stripe/stripe-js';
import {loadScript, initStripe} from './shared';

export const loadStripe = (
  ...args: Parameters<StripeConstructor>
): Promise<StripeInstance | null> =>
  loadScript().then((maybeStripe) => initStripe(maybeStripe, args));
