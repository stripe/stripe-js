import {
  Stripe,
  StripeElements,
  StripeCardElement,
  StripeIbanElement,
  StripePaymentElement,
} from '../../../types';

declare const stripe: Stripe;
declare const elements: StripeElements;
declare const cardElement: StripeCardElement;
declare const ibanElement: StripeIbanElement;
declare const paymentElement: StripePaymentElement;

elements.update({
  // @ts-expect-error: `clientSecret` is not updatable
  clientSecret: 'pk_foo_secret_bar',
});

elements.update({
  // @ts-expect-error: `fonts` is not updatable
  fonts: [],
});

elements.update({
  // @ts-expect-error: `loader` is not updatable
  loader: 'auto',
});

elements.update({
  // @ts-expect-error: `customerOptions` is not updatable
  customerOptions: {
    customer: 'cus_foo',
    ephemeralKey: 'ek_test_foo',
  },
});

paymentElement.on('change', (e) => {
  // @ts-expect-error: `error` is not present on PaymentElement "change" event.
  if (e.error) {
  }
});

// @ts-expect-error: AddressElement requires a mode
elements.create('address');

// @ts-expect-error: No overload matches this call
elements.create('issuingCardNumberDisplay');

// @ts-expect-error: No overload matches this call
elements.create('issuingCardCvcDisplay');

// @ts-expect-error: No overload matches this call
elements.create('issuingCardExpiryDisplay');

// @ts-expect-error: No overload matches this call
elements.create('issuingCardPinDisplay');

elements.create('issuingCardCopyButton', {
  // @ts-expect-error: Type '"non_existent"' is not assignable to type '"number" | "expiry" | "cvc" | "pin"'
  toCopy: 'non_existent',
});

stripe
  .confirmPayment({elements, confirmParams: {return_url: ''}})
  .then((res) => {
    if (res.error) {
    }

    // @ts-expect-error redirect only, no paymentIntent expected
    if (res.paymentIntent) {
    }
  });

stripe
  .confirmPayment({
    elements,
    confirmParams: {return_url: ''},
    redirect: 'always',
  })
  .then((res) => {
    if (res.error) {
    }

    // @ts-expect-error redirect only, no paymentIntent expected
    if (res.paymentIntent) {
    }
  });

stripe.confirmSetup({elements, confirmParams: {return_url: ''}}).then((res) => {
  if (res.error) {
  }

  // @ts-expect-error redirect only, no paymentIntent expected
  if (res.paymentIntent) {
  }
});

stripe
  .confirmSetup({elements, confirmParams: {return_url: ''}, redirect: 'always'})
  .then((res) => {
    if (res.error) {
    }

    // @ts-expect-error redirect only, no paymentIntent expected
    if (res.paymentIntent) {
    }
  });

stripe.processOrder({elements, confirmParams: {return_url: ''}}).then((res) => {
  if (res.error) {
  }

  // @ts-expect-error redirect only, no paymentIntent expected
  if (res.paymentIntent) {
  }

  // @ts-expect-error redirect only, no order expected
  if (res.order) {
  }
});

stripe
  .processOrder({
    elements,
    confirmParams: {return_url: ''},
    redirect: 'always',
  })
  .then((res) => {
    if (res.error) {
    }

    // @ts-expect-error redirect only, no paymentIntent expected
    if (res.paymentIntent) {
    }

    // @ts-expect-error redirect only, no order expected
    if (res.order) {
    }
  });

stripe.retrieveOrder('{ORDER_CLIENT_SECRET}').then((res) => {
  if (res.error) {
  }

  if (res.order) {
  }

  // @ts-expect-error retrieve order, no paymentIntent expected
  if (res.paymentIntent) {
  }
});

stripe.createToken(cardElement, {
  currency: '',
  name: '',
  // @ts-expect-error: `extra_property` is not valid
  extra_property: '',
});

// @ts-expect-error: `extra_property` is not valid
stripe.createToken(ibanElement, {
  currency: '',
  account_holder_name: '',
  extra_property: '',
});

// @ts-expect-error: Argument of type '{}' is not assignable to parameter of type 'EphemeralKeyNonceOptions'
stripe.createEphemeralKeyNonce({});

// @ts-expect-error: Expected 1 arguments, but got 0
stripe.createEphemeralKeyNonce();
