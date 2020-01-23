/* eslint-disable global-require */

describe('Stripe module loader', () => {
  afterEach(() => {
    const script = document.querySelector(
      'script[src="https://js.stripe.com/v3"]'
    );
    if (script) {
      script.parentElement.removeChild(script);
    }
    delete window.Stripe;
    jest.resetModules();
  });

  it('injects the Stripe script as a side effect after a tick', () => {
    require('./index');

    expect(
      document.querySelector('script[src="https://js.stripe.com/v3"]')
    ).toBe(null);

    return Promise.resolve().then(() => {
      expect(
        document.querySelector('script[src="https://js.stripe.com/v3"]')
      ).not.toBe(null);
    });
  });

  it('does not inject the script when Stripe is already loaded', () => {
    require('./index');

    window.Stripe = jest.fn((key) => ({key}));

    return new Promise((resolve) => setTimeout(resolve)).then(() => {
      expect(
        document.querySelector('script[src="https://js.stripe.com/v3"]')
      ).toBe(null);
    });
  });

  it('does not inject a duplicate script when one is already present', () => {
    require('./index');

    const script = document.createElement('script');
    script.src = 'https://js.stripe.com/v3';
    document.body.appendChild(script);

    return new Promise((resolve) => setTimeout(resolve)).then(() => {
      expect(
        document.querySelectorAll('script[src="https://js.stripe.com/v3"]')
      ).toHaveLength(1);
    });
  });

  describe('loadStripe', () => {
    it('resolves loadStripe with Stripe object', () => {
      const {loadStripe} = require('./index');
      const stripePromise = loadStripe('pk_test_foo');

      return new Promise((resolve) => setTimeout(resolve)).then(() => {
        window.Stripe = jest.fn((key) => ({key}));
        document
          .querySelector('script[src="https://js.stripe.com/v3"]')
          .dispatchEvent(new Event('load'));

        return expect(stripePromise).resolves.toEqual({key: 'pk_test_foo'});
      });
    });

    it('rejects when the script fails', () => {
      const {loadStripe} = require('./index');
      const stripePromise = loadStripe('pk_test_foo');

      return Promise.resolve().then(() => {
        document
          .querySelector('script[src="https://js.stripe.com/v3"]')
          .dispatchEvent(new Event('error'));

        return expect(stripePromise).rejects.toEqual(
          new Error('Failed to load Stripe.js')
        );
      });
    });

    it('rejects when Stripe is not added to the window for some reason', () => {
      const {loadStripe} = require('./index');
      const stripePromise = loadStripe('pk_test_foo');
      return Promise.resolve().then(() => {
        document
          .querySelector('script[src="https://js.stripe.com/v3"]')
          .dispatchEvent(new Event('load'));

        return expect(stripePromise).rejects.toEqual(
          new Error('Failed to load Stripe.js')
        );
      });
    });
  });
});
