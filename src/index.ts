///<reference path='../types/index.d.ts' />
import {Stripe as StripeInstance, StripeConstructor} from '@stripe/stripe-js';
import {loadScript, initStripe} from './shared';

const stripePromise = loadScript();

let loadCalled = false;

stripePromise.catch((err) => {
  if (!loadCalled) {
    console.warn(err);
  }
});

export const loadStripe = (
  ...args: Parameters<StripeConstructor>
): Promise<StripeInstance | null> => {
  loadCalled = true;

  return stripePromise.then((maybeStripe) => initStripe(maybeStripe, args));
};
