///<reference path='../types/index.d.ts' />
import {Stripe as StripeInstance, StripeConstructor} from '@stripe/stripe-js';
import {loadScript, initStripe} from './shared';

let stripePromise: Promise<StripeConstructor | null> | null = null;

export const loadStripe = (
  ...args: Parameters<StripeConstructor>
): Promise<StripeInstance | null> => {
  // Ensure we only attempt to load Stripe.js once, no matter how many times
  // `loadStripe` is called
  if (!stripePromise) {
    stripePromise = loadScript();
  }

  return stripePromise.then((maybeStripe) => initStripe(maybeStripe, args));
};
