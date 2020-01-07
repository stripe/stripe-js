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
    expect(
      document.querySelector('script[src="https://js.stripe.com/v3"]')
    ).toBe(null);
    require('./index');
    expect(
      document.querySelector('script[src="https://js.stripe.com/v3"]')
    ).not.toBe(null);
  });

  it('resolves loadStripe with Stripe object', () => {
    const {loadStripe} = require('./index');
    const stripePromise = loadStripe('pk_test_foo');

    window.Stripe = jest.fn((key) => ({key}));
    document
      .querySelector('script[src="https://js.stripe.com/v3"]')
      .dispatchEvent(new Event('load'));

    return expect(stripePromise).resolves.toEqual({key: 'pk_test_foo'});
  });

  it('rejects when the script fails', () => {
    const {loadStripe} = require('./index');
    const stripePromise = loadStripe();

    document
      .querySelector('script[src="https://js.stripe.com/v3"]')
      .dispatchEvent(new Event('error'));

    return expect(stripePromise).rejects.toEqual(
      new Error('Failed to load Stripe.js')
    );
  });

  it('rejects when Stripe is not added to the window for some reason', () => {
    const {loadStripe} = require('./index');
    const stripePromise = loadStripe();

    document
      .querySelector('script[src="https://js.stripe.com/v3"]')
      .dispatchEvent(new Event('load'));

    return expect(stripePromise).rejects.toEqual(
      new Error('Failed to load Stripe.js')
    );
  });
});
