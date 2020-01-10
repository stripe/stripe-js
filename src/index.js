const V3_URL = 'https://js.stripe.com/v3';

let hasInjectedScript = false;

// Execute our own script injection after a tick to give users time to
// do their own script injection.
const stripePromise = Promise.resolve().then(() => {
  if (typeof window === 'undefined') {
    // Resolve to null when imported server side. This makes the module
    // safe to import in an isomorphic code base.
    return null;
  }

  if (window.Stripe) {
    return window.Stripe;
  }

  let script = document.querySelector(`script[src="${V3_URL}"]`);

  if (!script) {
    hasInjectedScript = true;
    script = document.createElement('script');
    script.src = V3_URL;

    const headOrBody = document.head || document.body;

    if (!headOrBody) {
      throw new Error(
        'Expected document.body not to be null. Stripe.js requires a <body> element.'
      );
    }

    headOrBody.appendChild(script);
  }

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
});

let hasCalledLoadStripe = false;
export const loadStripe = (...args) => {
  hasCalledLoadStripe = true;
  return stripePromise.then((Stripe) => Stripe(...args));
};

const STRIPE_NOT_LOADED_ERROR_TEXT = `Stripe.js has not yet loaded. Instead of calling \`Stripe\` directly, try using the \`loadStripe\` utility from this package.

See https://stripe.com/docs/js/including for more information.
`;

const STRIPE_UNAVAILABLE_ERROR_TEXT = `window.Stripe is not defined. Did you include Stripe.js on your page?

For compliance reasons, Stripe.js must be loaded directly from https://js.stripe.com, and cannot be included in a bundle or hosted yourself. This npm module exists as a convenience, but delegates to window.Stripe.

You can load Stripe.js by using the \`loadStripe\` utility from this package, or by including the following <script> tag on your page:

<script src="${V3_URL}"></script>

See https://stripe.com/docs/js/including for more information.
`;

const hasUserIncludedScript = () =>
  document.querySelector(`script[src="${V3_URL}"]`) && !hasInjectedScript;

export const Stripe = (...args) => {
  if (window.Stripe) {
    return window.Stripe(...args);
  }

  if (hasCalledLoadStripe || hasUserIncludedScript()) {
    throw new Error(STRIPE_NOT_LOADED_ERROR_TEXT);
  }

  throw new Error(STRIPE_UNAVAILABLE_ERROR_TEXT);
};
