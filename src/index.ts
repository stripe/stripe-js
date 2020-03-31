// eslint-disable-next-line @typescript-eslint/triple-slash-reference
///<reference path='../types/index.d.ts' />
import {Stripe as StripeInstance, StripeConstructor} from '@stripe/stripe-js';

// `_VERSION` will be rewritten by `@rollup/plugin-replace` as a string literal
// containing the package.json version
declare const _VERSION: string;

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

const registerWrapper = (stripe: any): void => {
  if (!stripe || !stripe._registerWrapper) {
    return;
  }

  stripe._registerWrapper({name: 'stripe-js', version: _VERSION});
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
      document.querySelector(
        `script[src="${V3_URL}"], script[src="${V3_URL}/"]`
      ) || injectScript();

    return new Promise((resolve, reject) => {
      script.addEventListener('load', () => {
        if (window.Stripe) {
          resolve(window.Stripe);
        } else {
          reject(new Error('Stripe.js not available'));
        }
      });

      script.addEventListener('error', () => {
        reject(new Error('Failed to load Stripe.js'));
      });
    });
  }
);

let loadCalled = false;

stripePromise.catch((err) => {
  if (!loadCalled) console.warn(err);
});

export const loadStripe = (
  ...args: Parameters<StripeConstructor>
): Promise<StripeInstance | null> => {
  loadCalled = true;

  return stripePromise.then((maybeStripe) => {
    if (maybeStripe === null) {
      return null;
    }

    const stripe = maybeStripe(...args);
    registerWrapper(stripe);
    return stripe;
  });
};
