const V3_URL = 'https://js.stripe.com/v3';

const stripePromise = new Promise((resolve, reject) => {
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

  let script = document.querySelector(`script[src="${V3_URL}"]`);

  if (!script) {
    script = document.createElement('script');
    script.src = V3_URL;

    const headOrBody = document.head || document.body;

    if (!headOrBody) {
      reject(
        new Error(
          'Expected document.body not to be null. Stripe.js requires a <body> element.'
        )
      );
      return;
    }

    headOrBody.appendChild(script);
  }

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

export const loadStripe = (...args) =>
  stripePromise.then((Stripe) => Stripe(...args));
