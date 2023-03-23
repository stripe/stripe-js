import {
  Stripe,
  StripeCardElement,
  StripeIbanElement,
  StripePaymentElement,
  StripeCartElement,
  StripeExpressCheckoutElement,
  StripeElementsOptions,
} from '../../../types';

declare const stripe: Stripe;
declare const cardElement: StripeCardElement;
declare const ibanElement: StripeIbanElement;
declare const paymentElement: StripePaymentElement;
declare const cartElement: StripeCartElement;
declare const expressCheckoutElement: StripeExpressCheckoutElement;

// @ts-expect-error: Passing `clientSecret` or `mode` implies different integration paths which cannot be combined
const options: StripeElementsOptions = {clientSecret: '', mode: ''};

// @ts-expect-error: Passing `clientSecret` or `mode` implies different integration paths which cannot be combined
const elements = stripe.elements(options);

// @ts-expect-error mode must be one of payment, setup, or subscription
stripe.elements({mode: 'test'});

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

cardElement.update({
  // @ts-expect-error: 'disableLink' does not exist in type 'StripeCardElementUpdateOptions'
  disableLink: false,
});

paymentElement.on('change', (e) => {
  // @ts-expect-error: `error` is not present on PaymentElement "change" event.
  if (e.error) {
  }
});

// @ts-expect-error: either `product`, `price`, or `item_details` is required
cartElement.addLineItem({});

// @ts-expect-error: either `product`, `price`, or `item_details` is required
cartElement.addLineItem({quantity: 1});

// @ts-expect-error: only one of `product`, `price`, or `item_details` may be specified
cartElement.addLineItem({product: '', price: ''});

// @ts-expect-error: only one of `product`, `price`, or `item_details` may be specified
cartElement.addLineItem({
  product: '',
  item_details: {
    external_id: '',
    name: '',
    unit_amount: 0,
  },
});

// @ts-expect-error: `item_details.external_id` is required if `item_details` is present
cartElement.addLineItem({item_details: {name: '', unit_amount: 0}});

// @ts-expect-error: `item_details.name` is required if `item_details` is present
cartElement.addLineItem({item_details: {external_id: '', unit_amount: 0}});

// @ts-expect-error: `item_details.unit_amount` is required if `item_details` is present
cartElement.addLineItem({item_details: {external_id: '', name: ''}});

// @ts-expect-error: `clientSecret` is not updatable
cartElement.update({clientSecret: ''});

// @ts-expect-error: cartElement has no function `escape`
cartElement.escape();

expressCheckoutElement.update({
  // @ts-expect-error: `wallets` option can't be updated
  wallets: {
    applePay: 'never',
  },
});

expressCheckoutElement.update({
  // @ts-expect-error: buttonTheme option can't be updated
  buttonTheme: {
    applePay: 'white-outline',
  },
});

expressCheckoutElement.update({
  // @ts-expect-error: buttonType option can't be updated
  buttonType: {
    applePay: 'donate',
  },
});

expressCheckoutElement.on('shippingaddresschange', ({address}) => {
  // @ts-expect-error Property 'line1' does not exist on type 'PartialAddress'.
  address.line1;
  // @ts-expect-error Property 'line2' does not exist on type 'PartialAddress'.
  address.line2;
});

expressCheckoutElement.on('confirm', ({paymentFailed}) => {
  // @ts-expect-error Can only fail a payment for a reason of 'fail' or 'invalid-shipping-address'
  paymentFailed({reason: 'pizza-time'});
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

// @ts-expect-error: CartElement requires a clientSecret
elements.create('cart');

// @ts-expect-error: `white-outline` is only supported by apple pay
elements.create('expressCheckout', {
  buttonTheme: {
    googlePay: 'white-outline',
  },
});

// @ts-expect-error: `checkout` is only supported by google pay
elements.create('expressCheckout', {
  buttonType: {
    applePay: 'checkout',
  },
});

// @ts-expect-error at least one of elements or clientSecret is required
stripe.confirmPayment({confirmParams: {return_url: ''}});

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

// @ts-expect-error either elements or clientSecret is required
stripe.confirmSetup({confirmParams: {return_url: ''}});

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

stripe.handleNextAction({clientSecret: ''}).then((res) => {
  if (res.paymentIntent) {
    // @ts-expect-error If result has a paymentIntent, setupIntent will be undefined
    const setupIntentId = res.setupIntent.id;
  }
  if (res.setupIntent) {
    // @ts-expect-error If result has a setupIntent, paymentIntent will be undefined
    const paymentIntentId = res.paymentIntent.id;
  }
  if (res.error) {
    // @ts-expect-error If result has an error, paymentIntent will be undefined
    const paymentIntentId = res.paymentIntent.id;
    // @ts-expect-error If result has an error, setupIntent will be undefined
    const setupIntentId = res.setupIntent.id;
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

// @ts-expect-error type and element are incompatible
stripe.createPaymentMethod({
  type: 'card',
  element: cardElement,
  params: {
    billing_details: {
      address: '',
    },
  },
});

// @ts-expect-error type and elements are incompatible
stripe.createPaymentMethod({
  type: 'card',
  elements: elements,
  params: {
    billing_details: {
      address: '',
    },
  },
});

// @ts-expect-error element and elements are incompatible
stripe.createPaymentMethod({
  element: cardElement,
  elements: elements,
  params: {
    billing_details: {
      address: '',
    },
  },
});
