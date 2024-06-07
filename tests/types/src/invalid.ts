import {
  Stripe,
  StripeCardElement,
  StripeCardNumberElement,
  StripeIbanElement,
  StripePaymentElement,
  StripeExpressCheckoutElement,
  StripeElementsOptions,
} from '../../../types';
import {ApplePayUpdateOption} from '../../../types/stripe-js/elements/apple-pay';

declare const stripe: Stripe;
declare const cardElement: StripeCardElement;
declare const cardNumberElement: StripeCardNumberElement;
declare const ibanElement: StripeIbanElement;
declare const paymentElement: StripePaymentElement;
declare const expressCheckoutElement: StripeExpressCheckoutElement;

const options: StripeElementsOptions = {
  clientSecret: '',
  // @ts-expect-error Type 'string' is not assignable to type '"payment" | "setup" | "subscription" | undefined'.ts(2322)
  mode: '',
  payment_method_creation: 'manual',
};

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

// invalid value for 'preferredNetwork'
// @ts-expect-error: No overload matches this call
elements.create('cardNumber', {preferredNetwork: ['invalid_network']});

// invalid value for 'preferredNetwork'
// @ts-expect-error: No overload matches this call
elements.create('card', {preferredNetwork: ['invalid_network']});

// invalid type for 'preferredNetwork'
// @ts-expect-error: No overload matches this call
elements.create('cardNumber', {preferredNetwork: 'cartes_bancaires'});

// invalid type for 'preferredNetwork'
// @ts-expect-error: No overload matches this call
elements.create('card', {preferredNetwork: 'cartes_bancaires'});

cardElement.update({
  // @ts-expect-error: 'disableLink' does not exist in type 'StripeCardElementUpdateOptions'
  disableLink: false,
});

cardNumberElement.update({
  // @ts-expect-error: 'disableLink' does not exist in type 'StripeCardNumberElementUpdateOptions'
  disableLink: false,
});

cardElement.update({
  // @ts-expect-error: 'preferredNetwork' does not exist in type 'StripeCardElementUpdateOptions'
  preferredNetwork: ['cartes_bancaires'],
});

cardNumberElement.update({
  // @ts-expect-error: 'preferredNetwork' does not exist in type 'StripeCardNumberElementUpdateOptions'
  preferredNetwork: ['cartes_bancaires'],
});

paymentElement.on('change', (e) => {
  // @ts-expect-error: `error` is not present on PaymentElement "change" event.
  if (e.error) {
  }
});

expressCheckoutElement.update({
  // @ts-expect-error: `paymentMethods` option can't be updated
  paymentMethods: {
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

expressCheckoutElement.on('shippingaddresschange', ({address, resolve}) => {
  // @ts-expect-error Property 'line1' does not exist on type 'PartialAddress'.
  address.line1;
  // @ts-expect-error Property 'line2' does not exist on type 'PartialAddress'.
  address.line2;

  resolve({
    applePay: {
      // @ts-expect-error: Object literal may only specify known properties, and 'deferredPaymentRequest' does not exist in type 'ApplePayUpdateOption'.
      deferredPaymentRequest: {
        paymentDescription: 'Deferred payment',
        deferredBilling: {
          label: 'Deferred payment',
          amount: 2000,
          deferredPaymentDate: new Date(Date.now()),
        },
        managementURL: 'https://atnnews.com/manage-subscription',
        billingAgreement:
          'You agree to pay 20 dollars some time in the future.',
      },
    },
  });

  const applePayUpdateOptions: ApplePayUpdateOption = {
    recurringPaymentRequest: {
      paymentDescription: 'Subscription to ATN News',
      regularBilling: {
        label: 'Online & paper news',
        amount: 2000,
      },
      managementURL: 'https://atnnews.com/manage-subscription',
      billingAgreement: 'You agree to pay ATN News $20.00 every month.',
    },
  };

  resolve({
    applePay: applePayUpdateOptions,
  });
});

expressCheckoutElement.on('confirm', ({paymentFailed}) => {
  // @ts-expect-error Can only fail a payment for a reason of 'fail' or 'invalid-shipping-address'
  paymentFailed({reason: 'pizza-time'});
});

expressCheckoutElement.on('click', ({resolve}) => {
  resolve({
    applePay: {
      // @ts-ignore
      recurringPaymentRequest: {
        paymentDescription: 'Subscription to ATN News',
        regularBilling: {
          label: 'Online & paper news',
          amount: 2000,
        },
        managementURL: 'https://atnnews.com/manage-subscription',
        billingAgreement: 'You agree to pay ATN News $20.00 every month.',
      },
      // @ts-expect-error: Type '{ paymentDescription: string; deferredBilling: { label: string; amount: number; deferredPaymentDate: Date; }; managementURL: string; billingAgreement: string; }' is not assignable to type 'null | undefined'.
      deferredPaymentRequest: {
        paymentDescription: 'Deferred payment',
        deferredBilling: {
          label: 'Deferred payment',
          amount: 2000,
          deferredPaymentDate: new Date(Date.now()),
        },
        managementURL: 'https://atnnews.com/manage-subscription',
        billingAgreement:
          'You agree to pay 20 dollars some time in the future.',
      },
    },
  });
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

stripe.confirmPayment({
  clientSecret: '',
  // @ts-expect-error Existing payment method by ID string only, not object
  confirmParams: {return_url: '', payment_method: {}},
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

// @ts-expect-error either elements or clientSecret is required
stripe.confirmSetup({confirmParams: {return_url: ''}});

stripe.confirmSetup({
  clientSecret: '',
  // @ts-expect-error Existing payment method by ID string only, not object
  confirmParams: {return_url: '', payment_method: {}},
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

stripe
  .createConfirmationToken({
    elements,
    params: {
      // @ts-expect-error payment_method is not a valid parameter
      payment_method: 'pm_12345',
    },
  })
  .then((result) => {
    if (result.error) {
      return result.error.code;
    }
    // @ts-expect-error mandate_data is not a valid parameter
    result.confirmationToken.mandate_data;
  });

const paymentRequest = stripe.paymentRequest({
  country: 'US',
  currency: 'usd',
  total: {
    label: 'Demo total',
    amount: 1000,
  },
  // @ts-expect-error Type 'number' is not assignable to type 'string'.
  onBehalfOf: 123,
});
paymentRequest.update({
  // @ts-expect-error Object literal may only specify known properties, and 'onBehalfOf' does not exist in type 'PaymentRequestUpdateOptions'.
  onBehalfOf: 'acct_123',
});
