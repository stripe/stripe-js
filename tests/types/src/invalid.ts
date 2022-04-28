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
  // @ts-expect-error: `loader` is not updatable
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
