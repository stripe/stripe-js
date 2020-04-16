/* eslint-disable @typescript-eslint/no-var-requires */

const SCRIPT_SELECTOR =
  'script[src="https://js.stripe.com/v3"], script[src="https://js.stripe.com/v3/"]';

describe('pure module', () => {
  afterEach(() => {
    const script = document.querySelector(SCRIPT_SELECTOR);
    if (script && script.parentElement) {
      script.parentElement.removeChild(script);
    }

    delete window.Stripe;
    jest.resetModules();
  });

  test('does not inject the script if loadStripe is not called', async () => {
    require('./pure');

    expect(document.querySelector(SCRIPT_SELECTOR)).toBe(null);
  });

  test('it injects the script if loadStripe is called', async () => {
    const {loadStripe} = require('./pure');
    loadStripe('pk_test_foo');

    expect(document.querySelector(SCRIPT_SELECTOR)).not.toBe(null);
  });
});
