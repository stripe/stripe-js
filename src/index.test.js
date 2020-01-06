/* eslint-disable global-require */

describe('Stripe module loader', () => {
  beforeEach(() => {
    const script = document.querySelector(
      'script[src="https://js.stripe.com/v3"]'
    );
    if (script) {
      script.parentElement.removeChild(script);
    }
    delete window.Stripe;
    jest.resetModules();
  });

  it('injects the Stripe script as a side effect', () => {
    require('./index');
    expect(
      document.querySelector('script[src="https://js.stripe.com/v3"]')
    ).not.toBe(null);
  });

  it('resolves loadStripe with Stripe factory', async () => {
    const loadStripe = require('./index').default;
    const stripePromise = loadStripe();

    window.Stripe = 'mockStripe';
    document
      .querySelector('script[src="https://js.stripe.com/v3"]')
      .dispatchEvent(new Event('load'));

    await expect(stripePromise).resolves.toEqual('mockStripe');
  });

  it('rejects when the script fails', async () => {
    const loadStripe = require('./index').default;
    const stripePromise = loadStripe();

    document
      .querySelector('script[src="https://js.stripe.com/v3"]')
      .dispatchEvent(new Event('error'));

    await expect(stripePromise).rejects.toEqual(
      new Error('Failed to load Stripe.js')
    );
  });

  it('rejects when Stripe is not added to the window for some reason', async () => {
    const loadStripe = require('./index').default;
    const stripePromise = loadStripe();

    document
      .querySelector('script[src="https://js.stripe.com/v3"]')
      .dispatchEvent(new Event('load'));

    await expect(stripePromise).rejects.toEqual(
      new Error('Failed to load Stripe.js')
    );
  });
});
