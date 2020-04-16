import {Stripe, StripeConstructor} from '@stripe/stripe-js';

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

let stripePromise: Promise<StripeConstructor | null> | null = null;

export const loadScript = (): Promise<StripeConstructor | null> => {
  // Ensure that we only attempt to load Stripe.js at most once
  if (stripePromise !== null) {
    return stripePromise;
  }

  stripePromise = new Promise((resolve, reject) => {
    if (typeof window === 'undefined') {
      // Resolve to null when imported server side. This makes the module
      // safe to import in an isomorphic code base.
      resolve(null);
      return;
    }

    if (window.Stripe) {
      resolve(window.Stripe);
      return;
    }

    const script: HTMLScriptElement =
      document.querySelector(
        `script[src="${V3_URL}"], script[src="${V3_URL}/"]`
      ) || injectScript();

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

  return stripePromise;
};

export const initStripe = (
  maybeStripe: StripeConstructor | null,
  args: Parameters<StripeConstructor>
): Stripe | null => {
  if (maybeStripe === null) {
    return null;
  }

  const stripe = maybeStripe(...args);
  registerWrapper(stripe);
  return stripe;
};
