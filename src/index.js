const V3_URL = 'https://js.stripe.com/v3';

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

export const loadStripe = (...args) =>
  stripePromise.then((maybeStripe) =>
    maybeStripe ? maybeStripe(...args) : null
  );
