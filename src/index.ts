// eslint-disable-next-line @typescript-eslint/triple-slash-reference
///<reference path='../types/index.d.ts' />
import {Stripe as StripeInstance, StripeConstructor} from '@stripe/stripe-js';

const V3_URL = 'https://js.stripe.com/v3';

const injectScript = (): HTMLScriptElement => {
  const script = document.createElement('script');
  script.src = V3_URL;

  const headOrBody = document.head || document.body;

  if (!headOrBody) {
    throw new Error(
      'Expected document.body not to be null. Stripe.js requires a <body> element.'
    );
  }

  headOrBody.appendChild(script);

  return script;
};

// Execute our own script injection after a tick to give users time to
// do their own script injection.
const stripePromise: Promise<StripeConstructor | null> = Promise.resolve().then(
  () => {
    if (typeof window === 'undefined') {
      // Resolve to null when imported server side. This makes the module
      // safe to import in an isomorphic code base.
      return null;
    }

    if (window.Stripe) {
      return window.Stripe;
    }

    const script: HTMLScriptElement =
      document.querySelector(`script[src="${V3_URL}"]`) || injectScript();

    return new Promise((resolve, reject) => {
      script.addEventListener('load', () => {
        if (window.Stripe) {
          resolve(window.Stripe);
        } else {
          reject(new Error('Failed to load Stripe.js'));
        }
      });

      script.addEventListener('error', () => {
        reject(new Error('Failed to load Stripe.js'));
      });
    });
  }
);

export const loadStripe = (
  ...args: Parameters<StripeConstructor>
): Promise<StripeInstance | null> =>
  stripePromise.then((maybeStripe) =>
    maybeStripe ? maybeStripe(...args) : null
  );
