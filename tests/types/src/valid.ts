import {assert, Has} from 'conditional-type-checks';

/*
 * This code will not run, but will be typechecked as a test.
 */

import {
  loadStripe,
  Stripe,
  StripeElements,
  StripeElementStyle,
  CssFontSource,
  StripeCardElement,
  StripeCardNumberElement,
  StripeCardExpiryElement,
  StripeCardCvcElement,
  StripeCardElementChangeEvent,
  StripePaymentRequestButtonElementClickEvent,
  PaymentIntent,
  Token,
  StripeError,
  SetupIntent,
  PaymentRequest,
  PaymentRequestShippingOptionEvent,
  PaymentRequestShippingOption,
  CustomFontSource,
  StripeIbanElement,
  StripeIdealBankElement,
  StripeEpsBankElement,
  StripeP24BankElement,
  StripeFpxBankElement,
  StripeFpxBankElementChangeEvent,
  StripeAuBankAccountElement,
  StripeAuBankAccountElementChangeEvent,
  StripePaymentRequestButtonElement,
  StripePaymentElement,
  StripeAffirmMessageElement,
  StripeAfterpayClearpayMessageElement,
  StripePaymentMethodMessagingElement,
  StripeLinkAuthenticationElementChangeEvent,
  StripeLinkAuthenticationElement,
  StripeShippingAddressElementChangeEvent,
  StripeShippingAddressElement,
  StripeAddressElementChangeEvent,
  StripeAddressElement,
  StripeCartElementPayloadEvent,
  StripeCartElementLineItemClickEvent,
  StripeCartElement,
  StripeElementType,
  CanMakePaymentResult,
  VerificationSession,
  StripeExpressCheckoutElementClickEvent,
  StripeExpressCheckoutElementConfirmEvent,
  StripeExpressCheckoutElementShippingAddressChangeEvent,
  StripeExpressCheckoutElementShippingRateChangeEvent,
  AvailablePaymentMethods,
  StripeElementsOptions,
} from '../../../types';

const stripePromise: Promise<Stripe | null> = loadStripe('');
const stripeConnectPromise = loadStripe('', {stripeAccount: '', locale: 'en'});

const stripe: Stripe = window.Stripe!('pk_123');

const stripeWithBetas: Stripe = window.Stripe!('pk_123', {
  stripeAccount: '123',
  locale: 'ar',
  betas: ['beta_1'],
});

const OPEN_SANS: CssFontSource = {
  cssSrc: 'https://fonts.googleapis.com/css?family=Open+Sans',
};

const AVENIR: CustomFontSource = {
  family: 'Avenir',
  src: 'url(https://my-domain.com/assets/avenir.woff)',
  display: 'auto',
  weight: '500',
  style: 'normal',
};

const options: StripeElementsOptions = {
  fonts: [OPEN_SANS, AVENIR],
  locale: 'auto',
  mode: 'payment',
  currency: 'usd',
  amount: 1099,
  setupFutureUsage: 'off_session',
  captureMethod: 'automatic',
  paymentMethodTypes: ['card'],
  paymentMethodCreation: 'manual',
  appearance: {
    disableAnimations: false,
    theme: 'night',
    variables: {
      colorIcon: 'blue',
    },
    rules: {
      '.Tab--selected': {
        backgroundColor: 'blue',
      },
    },
    labels: 'above',
  },
  loader: 'auto',
  customerOptions: {
    customer: 'cus_foo',
    ephemeralKey: 'ek_test_foo',
  },
};

const elements: StripeElements = stripe.elements(options);

stripe.elements({
  mode: 'setup',
  currency: 'usd',
  setup_future_usage: 'off_session',
  capture_method: 'automatic',
  payment_method_types: ['card'],
  payment_method_creation: 'manual',
});

const elementsClientSecret: StripeElements = stripe.elements({
  fonts: [OPEN_SANS, AVENIR],
  locale: 'auto',
  clientSecret: '',
  appearance: {
    disableAnimations: false,
    theme: 'night',
    variables: {
      colorIcon: 'blue',
    },
    rules: {
      '.Tab--selected': {
        backgroundColor: 'blue',
      },
    },
    labels: 'above',
  },
  loader: 'auto',
  customerOptions: {
    customer: 'cus_foo',
    ephemeralKey: 'ek_test_foo',
  },
});

const elementsNoOptions: StripeElements = stripe.elements();

const MY_STYLE: StripeElementStyle = {
  base: {
    iconColor: '#c4f0ff',
    color: '#fff',
    fontWeight: '500',
    fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
    fontSize: '16px',
    fontSmoothing: 'antialiased',
    ':-webkit-autofill': {
      color: '#fce883',
    },
    '::placeholder': {
      color: '#87BBFD',
    },
  },
  invalid: {
    iconColor: '#FFC7EE',
    color: '#FFC7EE',
  },
};

elements.update({});
elements.update({
  locale: 'es',
  appearance: {
    disableAnimations: true,
    theme: 'night',
    variables: {
      colorIcon: 'blue',
    },
    rules: {
      '.Tab--selected': {
        backgroundColor: 'blue',
      },
    },
    labels: 'floating',
  },
  mode: 'payment',
  currency: 'usd',
  amount: 1099,
  setupFutureUsage: 'off_session',
  captureMethod: 'automatic',
  paymentMethodTypes: ['card'],
});

elements.update({
  mode: 'payment',
  currency: 'usd',
  amount: 1099,
  setup_future_usage: 'off_session',
  capture_method: 'automatic',
  payment_method_types: ['card'],
});

const fetchUpdates = async () => {
  const {error} = await elements.fetchUpdates();
};

const handleSubmit = async () => {
  const {error} = await elements.submit();
};

const auBankAccountElement = elements.create('auBankAccount', {});

const retrievedAuBankAccountElement: StripeAuBankAccountElement | null = elements.getElement(
  'auBankAccount'
);

const cardElement: StripeCardElement = elements.create('card', {
  classes: {base: '', focus: ''},
  style: MY_STYLE,
  value: {postalCode: ''},
  hidePostalCode: true,
  iconStyle: 'solid',
  disabled: false,
  disableLink: false,
});

elements.create('card', {style: {base: {fontWeight: 500}}});

const cardElementDefaults: StripeCardElement = elements.create('card');

const retrievedCardElement: StripeCardElement | null = elements.getElement(
  'card'
);

const cardNumberElement: StripeCardNumberElement = elements.create(
  'cardNumber',
  {
    style: MY_STYLE,
    showIcon: true,
    iconStyle: 'solid',
  }
);

elements.create('cardNumber', {style: {base: {fontWeight: 500}}});
elements.create('cardCvc', {style: {base: {fontWeight: 500}}});
elements.create('cardExpiry', {style: {base: {fontWeight: 500}}});

const retrievedCardNumberElement: StripeCardNumberElement | null = elements.getElement(
  'cardNumber'
);

const cardExpiryElement: StripeCardExpiryElement = elements.create(
  'cardExpiry',
  {style: MY_STYLE}
);

const retrievedCardExpiryElement: StripeCardExpiryElement | null = elements.getElement(
  'cardExpiry'
);

const cardCvcElement: StripeCardCvcElement = elements.create('cardCvc');

const retrievedCardCvcElement: StripeCardCvcElement | null = elements.getElement(
  'cardCvc'
);

const fpxBankElement = elements.create('fpxBank', {
  style: MY_STYLE,
  value: '',
  accountHolderType: 'individual',
  classes: {webkitAutofill: ''},
});

elements.create('fpxBank', {
  style: {base: {fontWeight: 500}},
  accountHolderType: 'individual',
});

const retrievedFpxBankElement: StripeFpxBankElement | null = elements.getElement(
  'fpxBank'
);

const ibanElement = elements.create('iban', {supportedCountries: ['']});

const retrievedIbanElement: StripeIbanElement | null = elements.getElement(
  'iban'
);

const idealBankElement = elements.create('idealBank', {
  style: MY_STYLE,
  value: '',
  hideIcon: false,
  classes: {webkitAutofill: ''},
});

elements.create('idealBank', {style: {base: {fontWeight: 500}}});

const retrievedIdealBankElement: StripeIdealBankElement | null = elements.getElement(
  'idealBank'
);

const paymentRequestButtonElement = elements.create('paymentRequestButton', {
  style: {
    paymentRequestButton: {
      theme: 'light',
      height: '21px',
      type: 'donate',
      buttonSpacing: '8px',
    },
  },
  paymentRequest: stripe.paymentRequest({
    country: 'US',
    currency: 'usd',
    total: {label: 'Demo total', amount: 1000},
    requestPayerName: true,
    requestPayerEmail: true,
    disableWallets: ['googlePay', 'link'],
  }),
  disableMultipleButtons: false,
});

const retrievedPaymentRequestButtonElement: StripePaymentRequestButtonElement | null = elements.getElement(
  'paymentRequestButton'
);

// Make sure that `paymentRequest` is at least optional;
retrievedPaymentRequestButtonElement!.update({});

const affirmMessageElement = elements.create('affirmMessage', {
  amount: 50000,
  currency: 'USD',
});

const afterpayClearpayMessageElement = elements.create(
  'afterpayClearpayMessage',
  {
    amount: 2000,
    currency: 'USD',
  }
);

const paymentMethodMessagingElement = elements.create(
  'paymentMethodMessaging',
  {
    amount: 2000,
    paymentMethodTypes: ['afterpay_clearpay', 'klarna'],
    countryCode: 'US',
    currency: 'USD',
  }
);

const paymentElement: StripePaymentElement = elements.create('payment', {
  defaultValues: {
    billingDetails: {
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
      phone: '8004444444',
      address: {
        line1: '354 Oyster Point Blvd',
        line2: '',
        city: 'South San Francisco',
        state: 'CA',
        country: 'US',
        postal_code: '94080',
      },
    },
  },
  fields: {
    billingDetails: {
      email: 'never',
      phone: 'auto',
      address: 'never',
    },
  },
  terms: {
    card: 'auto',
    sepaDebit: 'always',
    ideal: 'never',
    sofort: 'never',
    bancontact: 'never',
    auBecsDebit: 'never',
    usBankAccount: 'never',
    cashapp: 'auto',
    applePay: 'always',
    googlePay: 'never',
    paypal: 'never',
  },
  business: {
    name: '',
  },
  readOnly: true,
  paymentMethodOrder: ['card', 'sepa_debit'],
  wallets: {
    applePay: 'never',
    googlePay: 'auto',
  },
});

let paymentElementDefaults: StripePaymentElement = elements.create('payment');
paymentElementDefaults = elements.create('payment', {});

const retrievedPaymentElement: StripePaymentElement | null = elements.getElement(
  'payment'
);

paymentElement
  .on('ready', (e: {elementType: 'payment'}) => {})
  .on('focus', (e: {elementType: 'payment'}) => {})
  .on('blur', (e: {elementType: 'payment'}) => {})
  .on('loaderstart', (e: {elementType: 'payment'}) => {})
  .on(
    'change',
    (e: {
      elementType: 'payment';
      value: {type: string};
      collapsed: boolean;
      complete: boolean;
      empty: boolean;
    }) => {}
  )
  .on(
    'loaderror',
    (e: {
      elementType: 'payment';
      error: {
        type: string;
      };
    }) => {}
  );

paymentElement.collapse();

// Test Affirm Messaging Element
affirmMessageElement.on('ready', (e: {elementType: 'affirmMessage'}) => {});

const retrievedAffirmMessageElement: StripeAffirmMessageElement | null = elements.getElement(
  'affirmMessage'
);

retrievedAffirmMessageElement!.update({amount: 10000});

// Test Afterpay Messaging Element
afterpayClearpayMessageElement.on(
  'ready',
  (e: {elementType: 'afterpayClearpayMessage'}) => {}
);

const retrievedAfterpayClearpayMessageElement: StripeAfterpayClearpayMessageElement | null = elements.getElement(
  'afterpayClearpayMessage'
);

retrievedAfterpayClearpayMessageElement!.update({currency: 'GBP'});

// Test Payment Method Messaging Element
paymentMethodMessagingElement.on(
  'ready',
  (e: {elementType: 'paymentMethodMessaging'}) => {}
);

const retrievedPaymentMethodMessagingElement: StripePaymentMethodMessagingElement | null = elements.getElement(
  'paymentMethodMessaging'
);

retrievedPaymentMethodMessagingElement!.update({amount: 10000});

const epsBankElement = elements.create('epsBank', {
  style: MY_STYLE,
  value: '',
  classes: {webkitAutofill: ''},
});

elements.create('epsBank', {style: {base: {fontWeight: 500}}});

const retrievedEpsBankElement: StripeEpsBankElement | null = elements.getElement(
  'epsBank'
);

epsBankElement
  .on('ready', (e: {elementType: 'epsBank'}) => {})
  .on('focus', (e: {elementType: 'epsBank'}) => {})
  .on('blur', (e: {elementType: 'epsBank'}) => {});

const p24BankElement = elements.create('p24Bank', {
  style: MY_STYLE,
  value: '',
  classes: {webkitAutofill: ''},
});

p24BankElement
  .on('ready', (e: {elementType: 'p24Bank'}) => {})
  .on('focus', (e: {elementType: 'p24Bank'}) => {})
  .on('blur', (e: {elementType: 'p24Bank'}) => {});

elements.create('p24Bank', {style: {base: {fontWeight: 500}}});

const retrievedP24BankElement: StripeP24BankElement | null = elements.getElement(
  'p24Bank'
);

type StripePaymentRequestButtonElementUpdateOptions = Parameters<
  StripePaymentRequestButtonElement['update']
>[0];

// Check that giving `paymentRequest` options is not allowed
assert<
  Has<
    Required<StripePaymentRequestButtonElementUpdateOptions>,
    {paymentRequest: PaymentRequest}
  >
>(false);

const auBankElementType: StripeElementType = 'auBankAccount';
const cardElementType: StripeElementType = 'card';
const fpxElementType: StripeElementType = 'fpxBank';
const ibanElementType: StripeElementType = 'iban';

cardElement.mount('#bogus-container');
ibanElement.mount('#bogus-container');

cardElement
  .on('ready', (e: {elementType: 'card'}) => {})
  .on('focus', (e: {elementType: 'card'}) => {})
  .on('blur', (e: {elementType: 'card'}) => {})
  .on('change', (e: StripeCardElementChangeEvent) => {
    if (e.error) {
      console.error(e.error.message);
    }
  })
  .on('networkschange', (e: {elementType: 'card'}) => {});

const onceHandler = () => {};
cardElement.once('ready', onceHandler);
cardElement.off('ready', onceHandler);
cardElement.off('change');

cardNumberElement.on('networkschange', (e: {elementType: 'cardNumber'}) => {});

auBankAccountElement.on(
  'change',
  (e: StripeAuBankAccountElementChangeEvent) => {}
);

auBankAccountElement
  .on('ready', (e: {elementType: 'auBankAccount'}) => {})
  .on('focus', (e: {elementType: 'auBankAccount'}) => {})
  .on('blur', (e: {elementType: 'auBankAccount'}) => {});

fpxBankElement.on('change', (e: StripeFpxBankElementChangeEvent) => {});

fpxBankElement
  .on('ready', (e: {elementType: 'fpxBank'}) => {})
  .on('focus', (e: {elementType: 'fpxBank'}) => {})
  .on('blur', (e: {elementType: 'fpxBank'}) => {});

ibanElement
  .on('ready', (e: {elementType: 'iban'}) => {})
  .on('focus', (e: {elementType: 'iban'}) => {})
  .on('blur', (e: {elementType: 'iban'}) => {});

paymentRequestButtonElement.on(
  'click',
  (e: StripePaymentRequestButtonElementClickEvent) => {
    e.preventDefault();
  }
);

let linkAuthenticationElementDefaults: StripeLinkAuthenticationElement = elements.create(
  'linkAuthentication'
);
linkAuthenticationElementDefaults = elements.create('linkAuthentication', {});

const linkAuthenticationElement = elements.create('linkAuthentication', {
  defaultValues: {email: 'foo@bar.com'},
});

linkAuthenticationElement
  .on('ready', (e: {elementType: 'linkAuthentication'}) => {})
  .on('focus', (e: {elementType: 'linkAuthentication'}) => {})
  .on('blur', (e: {elementType: 'linkAuthentication'}) => {})
  .on('change', (e: StripeLinkAuthenticationElementChangeEvent) => {})
  .on('loaderstart', (e: {elementType: 'linkAuthentication'}) => {})
  .on(
    'loaderror',
    (e: {
      elementType: 'linkAuthentication';
      error: {
        type: string;
      };
    }) => {}
  );

const retrievedLinkAuthenticationElement: StripeLinkAuthenticationElement | null = elements.getElement(
  'linkAuthentication'
);

let addressElementDefaults: StripeAddressElement = elements.create('address', {
  mode: 'shipping',
});

addressElementDefaults = elements.create('address', {mode: 'billing'});

const addressElement = elements.create('address', {
  mode: 'shipping',
  allowedCountries: ['US'],
  autocomplete: {mode: 'disabled'},
  contacts: [
    {
      name: 'Jane Doe',
      address: {
        line1: '513 Townsend St',
        city: 'San Francisco',
        state: 'CA',
        postal_code: '92122',
        country: 'US',
      },
    },
  ],
  blockPoBox: true,
  defaultValues: {
    name: 'Jane Doe',
    address: {
      line1: '513 Townsend St',
      city: 'San Francisco',
      state: 'CA',
      postal_code: '92122',
      country: 'US',
    },
  },
  fields: {
    phone: 'always',
  },
  validation: {
    phone: {
      required: 'never',
    },
  },
  display: {
    name: 'full',
  },
});

addressElement
  .on('ready', (e: {elementType: 'address'}) => {})
  .on('focus', (e: {elementType: 'address'}) => {})
  .on('blur', (e: {elementType: 'address'}) => {})
  .on('change', (e: StripeAddressElementChangeEvent) => {})
  .on('loaderstart', (e: {elementType: 'address'}) => {})
  .on(
    'loaderror',
    (e: {
      elementType: 'address';
      error: {
        type: string;
      };
    }) => {}
  );

addressElement.update({
  validation: {
    phone: {
      required: 'always',
    },
  },
});

addressElement.getValue().then((res) => {
  if (res.complete && res.isNewAddress) {
    const value = res.value;
  }
});

const retrievedAddressElement: StripeAddressElement | null = elements.getElement(
  'address'
);

let shippingAddressElementDefaults: StripeShippingAddressElement = elements.create(
  'shippingAddress'
);
shippingAddressElementDefaults = elements.create('shippingAddress', {});

const shippingAddressElement = elements.create('shippingAddress', {
  allowedCountries: ['US'],
  blockPoBox: true,
  defaultValues: {
    name: 'Jane Doe',
    address: {
      line1: '513 Townsend St',
      city: 'San Francisco',
      state: 'CA',
      postal_code: '92122',
      country: 'US',
    },
  },
  fields: {
    phone: 'always',
  },
  validation: {
    phone: {
      required: 'never',
    },
  },
});

shippingAddressElement
  .on('ready', (e: {elementType: 'shippingAddress'}) => {})
  .on('focus', (e: {elementType: 'shippingAddress'}) => {})
  .on('blur', (e: {elementType: 'shippingAddress'}) => {})
  .on('change', (e: StripeShippingAddressElementChangeEvent) => {})
  .on('loaderstart', (e: {elementType: 'shippingAddress'}) => {})
  .on(
    'loaderror',
    (e: {
      elementType: 'shippingAddress';
      error: {
        type: string;
      };
    }) => {}
  );

shippingAddressElement.update({
  validation: {
    phone: {
      required: 'always',
    },
  },
});

const retrievedShippingAddressElement: StripeShippingAddressElement | null = elements.getElement(
  'shippingAddress'
);

let cartElementDefaults: StripeCartElement = elements.create('cart', {
  clientSecret: '',
});

const cartElement = elements.create('cart', {
  clientSecret: '',
  descriptor: 'cart',
  header: {
    text: 'cart',
  },
  showOnAdd: 'auto',
});

cartElement.show();

cartElement.hide();

cartElement.cancelCheckout();

cartElement.cancelCheckout('Error message');

cartElement.addLineItem({product: ''});

cartElement.addLineItem({price: ''});

cartElement.addLineItem({product: '', quantity: 1});

cartElement.addLineItem({price: '', quantity: 1});

cartElement.addLineItem({
  item_details: {
    external_id: '',
    name: '',
    unit_amount: 0,
  },
  quantity: 1,
});

cartElement.addLineItem({
  item_details: {
    external_id: '',
    name: '',
    unit_amount: 0,
    image: '',
    description: '',
  },
  quantity: 1,
});

cartElement.on('ready', (e: StripeCartElementPayloadEvent) => {
  console.log(e.lineItems.count);
});

cartElement.on('lineitemclick', (e: StripeCartElementLineItemClickEvent) => {
  e.preventDefault();
  console.log(e.url);
});

cartElement.on('change', (e: StripeCartElementPayloadEvent) => {
  console.log(e.lineItems.count);
});

cartElement.on('checkout', (e: StripeCartElementPayloadEvent) => {
  console.log(e.lineItems.count);
});

cartElement.on(
  'loaderror',
  (e: {
    elementType: 'cart';
    error: {
      type: string;
    };
  }) => {}
);

cartElement.update({
  header: {
    text: 'Your Cart',
  },
  showOnAdd: 'never',
});

const retrievedCartElement: StripeCartElement | null = elements.getElement(
  'cart'
);

const expressCheckoutElementDefault = elements.create('expressCheckout');

const expressCheckoutElement = elements.create('expressCheckout', {
  buttonHeight: 55,
  layout: {maxRows: 1, maxColumns: 1, overflow: 'auto'},
  paymentMethodOrder: ['apple_pay', 'google_pay'],
  wallets: {
    googlePay: 'always',
    applePay: 'auto',
  },
  buttonTheme: {
    applePay: 'white-outline',
    googlePay: 'white',
  },
  buttonType: {
    googlePay: 'donate',
    applePay: 'add-money',
  },
});

const expressCheckoutElement2 = elements.create('expressCheckout', {
  layout: {
    maxRows: 1,
  },
  wallets: {
    applePay: 'never',
  },
  buttonTheme: {
    googlePay: 'black',
  },
  buttonType: {
    applePay: 'check-out',
  },
});

expressCheckoutElement
  .on(
    'ready',
    (e: {
      elementType: 'expressCheckout';
      availablePaymentMethods: undefined | AvailablePaymentMethods;
    }) => {}
  )
  .on('click', (e: StripeExpressCheckoutElementClickEvent) => {})
  .on('focus', (e: {elementType: 'expressCheckout'}) => {})
  .on('blur', (e: {elementType: 'expressCheckout'}) => {})
  .on('escape', (e: {elementType: 'expressCheckout'}) => {})
  .on(
    'loaderror',
    (e: {
      elementType: 'expressCheckout';
      error: {
        type: string;
      };
    }) => {}
  );

expressCheckoutElement.on('confirm', ({paymentFailed, expressPaymentType}) => {
  paymentFailed();
  paymentFailed({});
  paymentFailed({reason: 'invalid_shipping_address'});
});

expressCheckoutElement.on(
  'cancel',
  (e: {elementType: 'expressCheckout'}) => {}
);

expressCheckoutElement.on(
  'shippingaddresschange',
  (e: StripeExpressCheckoutElementShippingAddressChangeEvent) => {
    e.reject();
    e.resolve();
    e.resolve({
      lineItems: [{name: 'Pizza', amount: 1200}],
    });
    e.resolve({
      shippingRates: [
        {
          id: 'fastest-shipping',
          amount: 1500,
          displayName: 'Pizza time',
          deliveryEstimate: {
            maximum: {
              unit: 'hour',
              value: 1,
            },
          },
        },
        {
          id: 'faster-shipping',
          amount: 500,
          displayName: 'Pizza time, sort of',
          deliveryEstimate: {
            minimum: {
              unit: 'day',
              value: 2,
            },
            maximum: {
              unit: 'week',
              value: 1,
            },
          },
        },
        {
          id: 'free-shipping',
          amount: 0,
          displayName: 'Pizza time, eventually',
        },
      ],
    });
  }
);

expressCheckoutElement.on(
  'shippingratechange',
  (e: StripeExpressCheckoutElementShippingRateChangeEvent) => {
    e.reject();
    e.resolve();
    e.resolve({
      lineItems: [{name: 'Pizza', amount: 1200}],
    });
    e.resolve({
      shippingRates: [
        {
          id: 'fastest-shipping',
          amount: 1500,
          displayName: 'Pizza time',
          deliveryEstimate: {
            maximum: {
              unit: 'hour',
              value: 1,
            },
          },
        },
        {
          id: 'faster-shipping',
          amount: 500,
          displayName: 'Pizza time, sort of',
          deliveryEstimate: {
            minimum: {
              unit: 'day',
              value: 2,
            },
            maximum: {
              unit: 'week',
              value: 1,
            },
          },
        },
        {
          id: 'free-shipping',
          amount: 0,
          displayName: 'Pizza time, eventually',
        },
      ],
    });
  }
);

const retrievedExpressCheckoutElement = elements.getElement('expressCheckout');

auBankAccountElement.destroy();
cardElement.destroy();
cardNumberElement.destroy();
cardCvcElement.destroy();
cardExpiryElement.destroy();
fpxBankElement.destroy();
ibanElement.destroy();
idealBankElement.destroy();
paymentRequestButtonElement.destroy();
linkAuthenticationElement.destroy();
shippingAddressElement.destroy();
expressCheckoutElementDefault.destroy();
expressCheckoutElement.destroy();
expressCheckoutElement2.destroy();

stripe.redirectToCheckout({sessionId: ''});

stripe
  .redirectToCheckout({
    items: [{sku: 'sku_123', quantity: 1}],
    successUrl: 'https://your-website.com/success',
    cancelUrl: 'https://your-website.com/canceled',
    shippingAddressCollection: {
      allowedCountries: ['EN'],
    },
  })
  .then((result) => {
    console.error(result.error.message);
  });

stripe.createRadarSession();

stripe
  .createRadarSession()
  .then(
    (result: {radarSession?: Record<any, any>; error?: StripeError}) => null
  );

stripe.createToken(cardElement, {name: ''});

stripe
  .createToken(cardElement)
  .then(({token, error}: {token?: Token; error?: StripeError}) => {
    console.log(token);
  });

stripe.createToken(cardElement).then(({token, error}) => {
  if (error) {
    console.log(error.code);
  } else if (token) {
    console.log(token.id);
  }
});

stripe.createToken(cardElement).then((res) => {
  if (res.error) {
    console.log(res.error.code);
  } else {
    console.log(res.token.id);
  }
});

stripe.createToken(cardNumberElement);

stripe.createToken('cvc_update', cardCvcElement);

stripe.createToken('pii', {personal_id_number: ''});

stripe.createToken(ibanElement, {
  currency: '',
  account_holder_name: '',
  account_holder_type: '',
});

stripe.createToken('bank_account', {
  country: '',
  currency: '',
  routing_number: '',
  account_number: '',
  account_holder_name: '',
  account_holder_type: '',
  account_type: '',
});

stripe.createToken('account', {
  individual: {
    first_name: 'Jane',
    last_name: 'Doe',
  },
  tos_shown_and_accepted: true,
});

stripe.createToken('person', {
  first_name: 'Jane',
  last_name: 'Doe',
  relationship: {owner: true},
});

const createSource = async () => {
  const {source, error} = await stripe.createSource(ibanElement, {
    type: 'sepa_debit',
    currency: 'eur',
    owner: {
      name: 'Jenny Rosen',
    },
  });

  if (error) {
    console.log(error.message);
  }

  if (source) {
    console.log(source.type);
  }
};

const createSourceRaw = async () => {
  const {source, error} = await stripe.createSource({
    type: 'ideal',
    amount: 1099,
    currency: 'eur',
    statement_descriptor: 'ORDER AT11990',
    owner: {
      name: 'Jenny Rosen',
    },
    redirect: {
      return_url: 'https://shop.example.com/crtA6B28E1',
    },
  });

  if (error) {
    console.log(error.message);
  }

  if (source) {
    console.log(source.type);
  }
};

stripe.createSource(cardElement, {
  owner: {
    name: 'Jenny Rosen',
    address: {
      line1: 'Nollendorfstraße 27',
      city: 'Berlin',
      postal_code: '10777',
      country: 'DE',
    },
    email: 'jenny.rosen@example.com',
  },
});

stripe.createSource({
  type: 'klarna',
  amount: 816,
  currency: 'eur',
  klarna: {
    product: 'payment',
    purchase_country: 'DE',
  },
  source_order: {
    items: [
      {
        type: 'sku',
        description: 'Grey cotton T-shirt',
        quantity: 2,
        currency: 'eur',
        amount: 796,
      },
      {
        type: 'tax',
        description: 'Taxes',
        currency: 'eur',
        amount: 20,
      },
      {
        type: 'shipping',
        description: 'Free Shipping',
        currency: 'eur',
        amount: 0,
      },
    ],
  },
});

stripe.createSource({
  type: 'alipay',
  amount: 1099,
  currency: 'usd',
  redirect: {
    return_url: 'https://shop.example.com/crtA6B28E1',
  },
});

stripe.createSource({
  type: 'bancontact',
  amount: 1099,
  currency: 'eur',
  bancontact: {
    preferred_language: 'fr',
  },
  owner: {
    name: 'Jenny Rosen',
  },
  redirect: {
    return_url: 'https://shop.example.com/crtA6B28E1',
  },
});

stripe.createSource({
  type: 'eps',
  amount: 1099,
  currency: 'eur',
  owner: {
    name: 'Jenny Rosen',
  },
  redirect: {
    return_url: 'https://shop.example.com/crtA6B28E1',
  },
});

stripe.createSource({
  type: 'giropay',
  amount: 1099,
  currency: 'eur',
  owner: {
    name: 'Jenny Rosen',
  },
  redirect: {
    return_url: 'https://shop.example.com/crtA6B28E1',
  },
});

stripe.createSource({
  type: 'ideal',
  amount: 1099,
  currency: 'eur',
  ideal: {bank: ''},
  statement_descriptor: 'ORDER AT11990',
  owner: {
    name: 'Jenny Rosen',
  },
  redirect: {
    return_url: 'https://shop.example.com/crtA6B28E1',
  },
});

stripe.createSource({
  type: 'p24',
  amount: 1099,
  currency: 'eur',
  owner: {
    name: 'Jenny Rosen',
    email: 'jenny.rosen@example.com',
  },
  redirect: {
    return_url: 'https://shop.example.com/crtA6B28E1',
  },
});

stripe.createSource({
  type: 'wechat',
  amount: 1099,
  currency: 'usd',
});

stripe.createSource({
  type: 'multibanco',
  amount: 1099,
  currency: 'eur',
  owner: {
    name: 'Jenny Rosen',
    email: 'jenny.rosen@example.com',
  },
  redirect: {
    return_url: 'https://shop.example.com/crtA6B28E1',
  },
});

stripe.createSource({
  type: 'sofort',
  amount: 1099,
  currency: 'eur',
  redirect: {
    return_url: 'https://shop.example.com/crtA6B28E1',
  },
  sofort: {
    country: 'DE',
  },
});

stripe.retrieveSource({id: '', client_secret: ''}).then((result) => {
  console.log(result.source!.type);
});

stripe.retrieveSource({id: '', client_secret: ''}).then(({source, error}) => {
  if (error) {
    console.log(error.code);
  } else if (source) {
    console.log(source.id);
  }
});

stripe.retrieveSource({id: '', client_secret: ''}).then((res) => {
  if (res.error) {
    console.log(res.error.code);
  } else {
    console.log(res.source.id);
  }
});

stripe
  .confirmAcssDebitPayment('', {
    payment_method: {
      billing_details: {name: '', email: ''},
    },
  })
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmAcssDebitPayment('', {
    payment_method: {
      acss_debit: {
        institution_number: '',
        transit_number: '',
        account_number: '',
      },
      billing_details: {name: '', email: ''},
    },
  })
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmAcssDebitPayment('', {payment_method: ''})
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmAcssDebitPayment('', {payment_method: ''}, {skipMandate: true})
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmUsBankAccountPayment('', {
    payment_method: {
      us_bank_account: {
        account_number: '',
        routing_number: '',
        account_holder_type: '',
      },
      billing_details: {name: '', email: ''},
    },
  })
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmUsBankAccountPayment('', {
    payment_method: {
      us_bank_account: {
        account_number: '',
        routing_number: '',
        account_holder_type: '',
        account_type: '',
      },
      billing_details: {name: '', email: ''},
    },
  })
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmUsBankAccountPayment('', {payment_method: ''})
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmAlipayPayment('', {
    payment_method: '',
    return_url: window.location.href,
  })
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmAlipayPayment('', {return_url: window.location.href})
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmAlipayPayment('', {payment_method: ''})
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmAlipayPayment('', {payment_method: ''}, {handleActions: false})
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmAlipayPayment('')
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmAuBecsDebitPayment('', {
    payment_method: {
      au_becs_debit: auBankAccountElement,
      billing_details: {name: '', email: ''},
    },
  })
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmAuBecsDebitPayment('', {
    payment_method: {
      au_becs_debit: {bsb_number: '', account_number: ''},
      billing_details: {name: '', email: ''},
    },
  })
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmAuBecsDebitPayment('', {payment_method: ''})
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmAuBecsDebitPayment('')
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmBancontactPayment('', {
    payment_method: {billing_details: {name: 'Jenny Rosen'}},
    return_url: window.location.href,
  })
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmBancontactPayment('', {payment_method: ''})
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmBancontactPayment('', {payment_method: ''}, {handleActions: false})
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmBancontactPayment('')
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmBlikPayment(
    '',
    {
      payment_method: {
        blik: {},
        billing_details: {
          email: 'jenny@example.com',
        },
      },
      payment_method_options: {
        blik: {
          code: '123456',
        },
      },
    },
    {
      handleActions: false,
    }
  )
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmBoletoPayment(
    '',
    {
      payment_method: {
        billing_details: {
          name: 'Jenny Rosen',
          email: 'jennyrosen@stripe.com',
          address: {
            line1: 'Av. Paulista 1374',
            country: 'BR',
            state: 'SP',
            postal_code: '01310100',
            city: 'São Paulo',
          },
        },
        boleto: {
          tax_id: '000.000.000-00',
        },
      },
    },
    {
      handleActions: false,
    }
  )
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmBoletoPayment('', {payment_method: ''})
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmBoletoPayment('', {payment_method: ''}, {handleActions: false})
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmBoletoPayment('')
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmCardPayment('', {
    payment_method: {card: cardElement, billing_details: {name: ''}},
  })
  .then((result) => console.log(result.paymentIntent!.amount));

stripe
  .confirmCardPayment('', {payment_method: ''})
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmCardPayment('', {payment_method: ''}, {handleActions: false})
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmCardPayment('', {payment_method: {card: {token: ''}}})
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmCardPayment('', {
    payment_method: '',
    payment_method_options: {card: {cvc: cardCvcElement, network: ''}},
  })
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmCardPayment('')
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe.confirmCardPayment('').then(({paymentIntent, error}) => {
  if (error) {
    console.log(error.code);
  } else if (paymentIntent) {
    console.log(paymentIntent.id);
  }
});

stripe.confirmCardPayment('').then((res) => {
  if (res.error) {
    console.log(res.error.code);
  } else {
    console.log(res.paymentIntent.id);
  }
});

stripe
  .confirmCashappPayment('', {
    payment_method: '',
    return_url: window.location.href,
  })
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmCashappPayment('', {
    return_url: window.location.href,
  })
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmCashappPayment(
    '',
    {
      payment_method: '',
      return_url: window.location.href,
    },
    {
      handleActions: false,
    }
  )
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmCustomerBalancePayment(
    '',
    {
      payment_method: {
        customer_balance: {},
      },
    },
    {
      handleActions: false,
    }
  )
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmCustomerBalancePayment(
    '',
    {
      payment_method: {
        customer_balance: {},
      },
      payment_method_options: {
        customer_balance: {
          funding_type: 'bank_transfer',
          bank_transfer: {
            type: 'us_bank_transfer',
            requested_address_types: ['aba', 'swift'],
          },
        },
      },
    },
    {
      handleActions: false,
    }
  )
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmCustomerBalancePayment(
    '',
    {
      payment_method: {
        customer_balance: {},
      },
      payment_method_options: {
        customer_balance: {
          funding_type: 'bank_transfer',
          bank_transfer: {
            type: 'eu_bank_transfer',
            eu_bank_transfer: {
              country: 'NL',
            },
          },
        },
      },
    },
    {
      handleActions: false,
    }
  )
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmCustomerBalancePayment(
    '',
    {
      payment_method: {
        customer_balance: {},
      },
      payment_method_options: {
        customer_balance: {
          funding_type: 'bank_transfer',
          bank_transfer: {
            type: 'id_bank_transfer',
            id_bank_transfer: {
              bank: 'bni',
            },
          },
        },
      },
    },
    {
      handleActions: false,
    }
  )
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmEpsPayment('', {
    payment_method: {
      eps: {bank: 'bank_austria'},
      billing_details: {name: 'Jenny Rosen'},
    },
    return_url: window.location.href,
  })
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmEpsPayment('', {
    payment_method: {
      eps: epsBankElement,
      billing_details: {name: 'Jenny Rosen'},
    },
    return_url: window.location.href,
  })
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmEpsPayment('', {payment_method: ''})
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmEpsPayment('', {payment_method: ''}, {handleActions: false})
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmEpsPayment('')
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmFpxPayment('', {
    payment_method: {fpx: fpxBankElement},
    return_url: window.location.href,
  })
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmFpxPayment('', {payment_method: ''})
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmFpxPayment('', {payment_method: ''}, {handleActions: false})
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmFpxPayment('', {payment_method: {fpx: {bank: ''}}})
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmFpxPayment('')
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmGiropayPayment('', {
    payment_method: {billing_details: {name: 'Jenny Rosen'}},
    return_url: window.location.href,
  })
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmGiropayPayment('', {payment_method: ''})
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmGiropayPayment('', {payment_method: ''}, {handleActions: false})
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmGiropayPayment('')
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmGrabPayPayment('', {return_url: window.location.href})
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmGrabPayPayment('')
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmGrabPayPayment('', {payment_method: {grabpay: {}}})
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmGrabPayPayment('', {payment_method: ''})
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmGrabPayPayment('', {payment_method: ''}, {handleActions: false})
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmIdealPayment('', {
    payment_method: {ideal: idealBankElement},
    return_url: window.location.href,
  })
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmIdealPayment('', {payment_method: ''})
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmIdealPayment('', {payment_method: ''}, {handleActions: false})
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmIdealPayment('', {payment_method: {ideal: {bank: ''}}})
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmIdealPayment('')
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmKlarnaPayment('', {
    payment_method: {billing_details: {address: {country: 'DE'}}},
    return_url: window.location.href,
  })
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmKlarnaPayment('', {payment_method: ''})
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmKlarnaPayment('', {payment_method: ''}, {handleActions: false})
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmKlarnaPayment('')
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmKonbiniPayment('', {payment_method: ''})
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmKonbiniPayment('', {payment_method: ''}, {handleActions: false})
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmKonbiniPayment('', {
    payment_method: {
      billing_details: {
        name: '',
        email: '',
      },
    },
  })
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmKonbiniPayment('', {
    payment_method: {
      billing_details: {
        name: '',
        email: '',
      },
    },
    payment_method_options: {
      konbini: {
        confirmation_number: '',
      },
    },
  })
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmKonbiniPayment('')
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmOxxoPayment('', {payment_method: ''})
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmOxxoPayment('', {payment_method: ''}, {handleActions: false})
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmOxxoPayment('', {
    payment_method: {
      billing_details: {
        name: '',
        email: '',
      },
    },
  })
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmOxxoPayment('')
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmP24Payment('', {
    payment_method: {billing_details: {email: 'jenny@example.com'}},
    return_url: window.location.href,
  })
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmP24Payment('', {payment_method: ''})
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmP24Payment('', {payment_method: ''}, {handleActions: false})
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmP24Payment('')
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmP24Payment('', {
    payment_method: {
      p24: {bank: 'ing'},
      billing_details: {email: 'jenny@example.com'},
    },
    return_url: window.location.href,
  })
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmP24Payment('', {
    payment_method: {
      p24: p24BankElement,
      billing_details: {email: 'jenny@example.com'},
    },
    return_url: window.location.href,
  })
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmP24Payment('', {
    payment_method: {
      p24: {bank: 'ing'},
      billing_details: {email: 'jenny@example.com'},
    },
    payment_method_options: {
      p24: {
        tos_shown_and_accepted: true,
      },
    },
    return_url: window.location.href,
  })
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmP24Payment('', {
    payment_method: {
      p24: p24BankElement,
      billing_details: {email: 'jenny@example.com'},
    },
    payment_method_options: {
      p24: {
        tos_shown_and_accepted: true,
      },
    },
    return_url: window.location.href,
  })
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmPayNowPayment('', {})
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmPayNowPayment(
    '',
    {
      payment_method: '',
    },
    {handleActions: false}
  )
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmPayNowPayment(
    '',
    {
      payment_method: {
        billing_details: {
          name: '',
          email: '',
        },
      },
    },
    {handleActions: false}
  )
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmPayNowPayment(
    '',
    {
      payment_method: {
        billing_details: {
          name: '',
          email: '',
        },
      },
    },
    {handleActions: false}
  )
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmPayPalPayment('', {
    return_url: 'https://example.com',
  })
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmPayPalPayment('', {
    payment_method: '',
    return_url: 'https://example.com',
  })
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmPixPayment('', {})
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmPixPayment('', {
    payment_method: '',
  })
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmPixPayment(
    '',
    {
      payment_method: '',
    },
    {handleActions: false}
  )
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmPromptPayPayment('', {})
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmPromptPayPayment(
    '',
    {
      payment_method: '',
    },
    {handleActions: false}
  )
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmPromptPayPayment(
    '',
    {
      payment_method: {
        billing_details: {
          name: '',
          email: '',
        },
      },
    },
    {handleActions: false}
  )
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmSepaDebitPayment('', {
    payment_method: {
      sepa_debit: ibanElement,
      billing_details: {name: '', email: ''},
    },
  })
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmSepaDebitPayment('', {
    payment_method: {
      sepa_debit: {iban: ''},
      billing_details: {name: '', email: ''},
    },
  })
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmSepaDebitPayment('', {payment_method: ''})
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmSepaDebitPayment('')
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmSofortPayment('', {
    payment_method: {
      sofort: {
        country: '',
      },
      billing_details: {
        name: '',
      },
    },
    return_url: '',
  })
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmSofortPayment('', {
    payment_method: '',
  })
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmSofortPayment('')
  .then(({paymentIntent}: {paymentIntent?: PaymentIntent}) => {});

stripe
  .confirmSofortPayment('', {}, {handleActions: false})
  .then(({paymentIntent}: {paymentIntent?: PaymentIntent}) => {});

stripe
  .confirmWechatPayPayment('', {}, {handleActions: false})
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmWechatPayPayment(
    '',
    {
      payment_method: '',
    },
    {handleActions: false}
  )
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmWechatPayPayment(
    '',
    {
      payment_method: {
        billing_details: {
          name: '',
          email: '',
        },
      },
    },
    {handleActions: false}
  )
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmWechatPayPayment(
    '',
    {
      payment_method_options: {
        wechat_pay: {
          client: 'web',
        },
      },
    },
    {handleActions: false}
  )
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmWechatPayPayment(
    '',
    {
      payment_method: {
        billing_details: {
          name: '',
          email: '',
        },
      },
      payment_method_options: {
        wechat_pay: {},
      },
    },
    {handleActions: false}
  )
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmAffirmPayment('', {return_url: window.location.href})
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmAffirmPayment('')
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmAffirmPayment('', {payment_method: {affirm: {}}})
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmAffirmPayment('', {payment_method: ''})
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmAffirmPayment('', {payment_method: ''}, {handleActions: false})
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmAfterpayClearpayPayment('', {return_url: window.location.href})
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmAfterpayClearpayPayment('')
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmAfterpayClearpayPayment('', {payment_method: {afterpay_clearpay: {}}})
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmAfterpayClearpayPayment('', {payment_method: ''})
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmAfterpayClearpayPayment(
    '',
    {payment_method: ''},
    {handleActions: false}
  )
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .handleCardAction('')
  .then(({paymentIntent}: {paymentIntent?: PaymentIntent}) => {});

stripe.handleNextAction({clientSecret: ''}).then((res) => {
  if (res.paymentIntent) {
    const paymentIntentId = res.paymentIntent.id;
  }
  if (res.setupIntent) {
    const setupIntentId = res.setupIntent.id;
  }
  if (res.error) {
    const errorType = res.error.type;
  }
});

stripe
  .verifyMicrodepositsForPayment('', {amounts: [32, 45]})
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe.createPaymentMethod({
  elements: elements,
  params: {
    billing_details: {
      name: 'Jenny Rosen',
    },
  },
});

stripe.createPaymentMethod({
  element: cardElement,
  params: {
    billing_details: {
      name: 'Jenny Rosen',
    },
  },
});

stripe.createPaymentMethod({
  type: 'acss_debit',
  billing_details: {name: '', email: ''},
});

stripe.createPaymentMethod({
  type: 'acss_debit',
  acss_debit: {institution_number: '', transit_number: '', account_number: ''},
  billing_details: {name: '', email: ''},
});

stripe
  .collectBankAccountForPayment({
    clientSecret: '',
    params: {
      payment_method_type: '',
      payment_method_data: {
        billing_details: {name: 'Jenny Rosen', email: 'jenny@example.com'},
      },
    },
    expand: ['payment_method'],
  })
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe.createPaymentMethod({
  type: 'us_bank_account',
  us_bank_account: {
    account_number: '',
    routing_number: '',
    account_holder_type: '',
  },
  billing_details: {name: '', email: ''},
});

stripe.createPaymentMethod({
  type: 'au_becs_debit',
  au_becs_debit: auBankAccountElement,
  billing_details: {name: 'Jenny Rosen', email: 'jenny@example.com'},
});

stripe
  .createPaymentMethod({
    type: 'au_becs_debit',
    au_becs_debit: {bsb_number: '', account_number: ''},
    billing_details: {name: 'Jenny Rosen', email: 'jenny@example.com'},
  })
  .then(({paymentMethod}) => {
    if (
      paymentMethod &&
      paymentMethod.au_becs_debit &&
      paymentMethod.au_becs_debit.fingerprint
    ) {
      console.log(paymentMethod.au_becs_debit.fingerprint);
    }
  });

stripe
  .createPaymentMethod({
    type: 'card',
    card: cardElement,
    billing_details: {name: 'Jenny Rosen'},
  })
  .then((result) => {
    if (result.paymentMethod) {
      console.log(result.paymentMethod.id);
    }
  });

stripe
  .createPaymentMethod({
    type: 'card',
    card: cardElement,
  })
  .then(({paymentMethod, error}) => {
    if (error) {
      console.log(error.code);
    } else if (paymentMethod) {
      console.log(paymentMethod.id);
    }
  });

stripe
  .createPaymentMethod({
    type: 'card',
    card: cardElement,
  })
  .then((res) => {
    if (res.error) {
      console.log(res.error.code);
    } else {
      console.log(res.paymentMethod.id);
    }
  });

stripe.createPaymentMethod({
  type: 'fpx',
  fpx: fpxBankElement,
});

stripe.createPaymentMethod({
  type: 'fpx',
  fpx: {bank: ''},
});

stripe.createPaymentMethod({
  type: 'grabpay',
});

stripe.createPaymentMethod({
  type: 'grabpay',
  grabpay: {},
});

stripe.createPaymentMethod({
  type: 'ideal',
  ideal: idealBankElement,
});

stripe.createPaymentMethod({
  type: 'ideal',
  ideal: {},
});

stripe.createPaymentMethod({
  type: 'ideal',
  ideal: {bank: ''},
});

stripe.createPaymentMethod({
  type: 'sepa_debit',
  sepa_debit: ibanElement,
  billing_details: {name: 'Jenny Rosen', email: 'jenny@example.com'},
});

stripe.createPaymentMethod({
  type: 'sepa_debit',
  sepa_debit: {iban: ''},
  billing_details: {name: 'Jenny Rosen', email: 'jenny@example.com'},
});

stripe.createPaymentMethod({
  type: 'sofort',
  sofort: {country: ''},
  billing_details: {name: ''},
});

stripe.createPaymentMethod({
  type: 'affirm',
});

stripe.createPaymentMethod({
  type: 'affirm',
  affirm: {},
});

stripe.createPaymentMethod({
  type: 'afterpay_clearpay',
});

stripe.createPaymentMethod({
  type: 'afterpay_clearpay',
  afterpay_clearpay: {},
});

stripe.createPaymentMethod({
  type: 'paynow',
  billing_details: {name: '', email: ''},
});

stripe.createPaymentMethod({
  type: 'promptpay',
  billing_details: {name: '', email: ''},
});

stripe.retrievePaymentIntent('{PAYMENT_INTENT_CLIENT_SECRET}');

stripe
  .confirmAcssDebitSetup('', {
    payment_method: {
      billing_details: {name: '', email: ''},
    },
  })
  .then((result: {setupIntent?: SetupIntent; error?: StripeError}) => null);

stripe
  .confirmAcssDebitSetup('', {
    payment_method: {
      acss_debit: {
        institution_number: '',
        transit_number: '',
        account_number: '',
      },
      billing_details: {name: '', email: ''},
    },
  })
  .then((result: {setupIntent?: SetupIntent; error?: StripeError}) => null);

stripe
  .confirmAcssDebitSetup('', {payment_method: ''})
  .then((result: {setupIntent?: SetupIntent; error?: StripeError}) => null);

stripe
  .confirmAcssDebitSetup('', {payment_method: ''}, {skipMandate: true})
  .then((result: {setupIntent?: SetupIntent; error?: StripeError}) => null);

stripe
  .confirmUsBankAccountSetup('', {
    payment_method: {
      us_bank_account: {
        account_number: '',
        routing_number: '',
        account_holder_type: '',
      },
      billing_details: {name: '', email: ''},
    },
  })
  .then((result: {setupIntent?: SetupIntent; error?: StripeError}) => null);

stripe
  .confirmUsBankAccountSetup('', {
    payment_method: {
      us_bank_account: {
        account_number: '',
        routing_number: '',
        account_holder_type: '',
        account_type: '',
      },
      billing_details: {name: '', email: ''},
    },
  })
  .then((result: {setupIntent?: SetupIntent; error?: StripeError}) => null);

stripe
  .confirmUsBankAccountSetup('', {payment_method: ''})
  .then((result: {setupIntent?: SetupIntent; error?: StripeError}) => null);

stripe
  .confirmAuBecsDebitSetup('', {
    payment_method: {
      au_becs_debit: auBankAccountElement,
      billing_details: {name: '', email: ''},
    },
  })
  .then((result: {setupIntent?: SetupIntent; error?: StripeError}) => null);

stripe
  .confirmAuBecsDebitSetup('', {payment_method: ''})
  .then((result: {setupIntent?: SetupIntent; error?: StripeError}) => null);

stripe
  .confirmAuBecsDebitSetup('', {
    payment_method: {
      au_becs_debit: {bsb_number: '', account_number: ''},
      billing_details: {name: '', email: ''},
    },
  })
  .then((result: {setupIntent?: SetupIntent; error?: StripeError}) => null);

stripe
  .confirmBacsDebitSetup('', {payment_method: ''})
  .then((result: {setupIntent?: SetupIntent; error?: StripeError}) => null);

stripe
  .confirmBacsDebitSetup('', {
    payment_method: {
      bacs_debit: {sort_code: '', account_number: ''},
      billing_details: {
        name: '',
        email: '',
        address: {
          line1: '',
          city: '',
          country: '',
          postal_code: '',
        },
      },
    },
  })
  .then((result: {setupIntent?: SetupIntent; error?: StripeError}) => null);

stripe
  .confirmBancontactSetup('', {payment_method: ''})
  .then((result: {setupIntent?: SetupIntent; error?: StripeError}) => null);

stripe
  .confirmBancontactSetup('', {
    payment_method: {
      billing_details: {
        name: '',
        email: '',
      },
    },
    return_url: '',
  })
  .then((result: {setupIntent?: SetupIntent; error?: StripeError}) => null);

stripe
  .confirmCardSetup('', {
    payment_method: {card: cardElement, billing_details: {name: ''}},
  })
  .then((result: {setupIntent?: SetupIntent; error?: StripeError}) => null);

stripe
  .confirmCardSetup('', {payment_method: ''})
  .then((result: {setupIntent?: SetupIntent; error?: StripeError}) => null);

stripe
  .confirmCardSetup('', {payment_method: ''}, {handleActions: false})
  .then((result: {setupIntent?: SetupIntent; error?: StripeError}) => null);

stripe
  .confirmCardSetup('', {payment_method: {card: {token: ''}}})
  .then((result: {setupIntent?: SetupIntent; error?: StripeError}) => null);

stripe
  .confirmCardSetup('')
  .then((result: {setupIntent?: SetupIntent; error?: StripeError}) => null);

stripe.confirmCardSetup('').then(({setupIntent, error}) => {
  if (error) {
    console.log(error.code);
  } else if (setupIntent) {
    console.log(setupIntent.id);
  }
});

stripe.confirmCardSetup('').then((res) => {
  if (res.error) {
    console.log(res.error.code);
  } else {
    console.log(res.setupIntent.id);
  }
});

stripe
  .confirmCashappSetup('', {
    payment_method: '',
    return_url: window.location.href,
  })
  .then((result: {setupIntent?: SetupIntent; error?: StripeError}) => null);

stripe
  .confirmCashappSetup('', {
    return_url: window.location.href,
  })
  .then((result: {setupIntent?: SetupIntent; error?: StripeError}) => null);

stripe
  .confirmCashappSetup(
    '',
    {
      payment_method: '',
      return_url: window.location.href,
    },
    {
      handleActions: false,
    }
  )
  .then((result: {setupIntent?: SetupIntent; error?: StripeError}) => null);

stripe
  .confirmIdealSetup('', {
    payment_method: {
      ideal: idealBankElement,
      billing_details: {
        name: '',
        email: '',
      },
    },
  })
  .then((result: {setupIntent?: SetupIntent; error?: StripeError}) => null);

stripe
  .confirmIdealSetup('', {payment_method: ''})
  .then((result: {setupIntent?: SetupIntent; error?: StripeError}) => null);

stripe
  .confirmIdealSetup('', {
    payment_method: {
      ideal: {
        bank: '',
      },
      billing_details: {
        name: '',
        email: '',
      },
    },
    return_url: '',
  })
  .then((result: {setupIntent?: SetupIntent; error?: StripeError}) => null);

stripe
  .confirmPayPalSetup('', {return_url: 'https://example.com'})
  .then((result: {setupIntent?: SetupIntent; error?: StripeError}) => null);

stripe
  .confirmPayPalSetup('', {
    payment_method: '',
    return_url: 'https://example.com',
  })
  .then((result: {setupIntent?: SetupIntent; error?: StripeError}) => null);

stripe
  .confirmSepaDebitSetup('', {
    payment_method: {
      sepa_debit: ibanElement,
      billing_details: {name: '', email: ''},
    },
  })
  .then((result: {setupIntent?: SetupIntent; error?: StripeError}) => null);

stripe
  .confirmSepaDebitSetup('', {payment_method: ''})
  .then((result: {setupIntent?: SetupIntent; error?: StripeError}) => null);

stripe
  .confirmSepaDebitSetup('', {
    payment_method: {
      sepa_debit: {iban: ''},
      billing_details: {name: '', email: ''},
    },
  })
  .then((result: {setupIntent?: SetupIntent; error?: StripeError}) => null);

stripe
  .confirmSofortSetup('', {
    payment_method: {
      sofort: {
        country: '',
      },
      billing_details: {
        name: '',
      },
    },
    return_url: '',
  })
  .then((result: {setupIntent?: SetupIntent}) => null);

stripe
  .confirmSofortSetup('', {
    payment_method: '',
  })
  .then((result: {setupIntent?: SetupIntent; error?: StripeError}) => null);

stripe
  .confirmSofortSetup('')
  .then((result: {setupIntent?: SetupIntent; error?: StripeError}) => null);

stripe
  .confirmSofortSetup('', {}, {handleActions: false})
  .then((result: {setupIntent?: SetupIntent; error?: StripeError}) => null);

stripe
  .verifyMicrodepositsForSetup('', {amounts: [32, 45]})
  .then((result: {setupIntent?: SetupIntent; error?: StripeError}) => null);

stripe
  .verifyMicrodepositsForSetup('', {
    amounts: [32, 45],
    descriptor_code: '123456',
  })
  .then((result: {setupIntent?: SetupIntent; error?: StripeError}) => null);

stripe
  .collectBankAccountForSetup({
    clientSecret: '',
    params: {
      payment_method_type: '',
      payment_method_data: {
        billing_details: {name: 'Jenny Rosen', email: 'jenny@example.com'},
      },
    },
    expand: ['payment_method'],
  })
  .then((result: {setupIntent?: SetupIntent; error?: StripeError}) => null);

stripe
  .retrieveSetupIntent('')
  .then((result: {setupIntent?: SetupIntent}) => null);

stripe.registerAppInfo({
  name: 'Demo_Wrapper',
  partner_id: 'pp_partner_1234',
  version: '1.2.34',
  url: 'https://example.com',
});

stripe
  .verifyIdentity('')
  .then(
    (result: {
      verificationSession?: VerificationSession;
      error?: StripeError;
    }) => null
  );

// confirmPayment: redirect: 'always' without clientSecret
stripe
  .confirmPayment({
    elements,
    confirmParams: {
      return_url: '',
    },
  })
  .then((res) => {
    if (res.error) {
    }
  });
stripe
  .confirmPayment({
    elements,
    confirmParams: {
      return_url: '',
    },
    redirect: 'always',
  })
  .then((res) => {
    if (res.error) {
    }
  });

// confirmPayment: redirect: 'always' with clientSecret
stripe
  .confirmPayment({
    clientSecret: '',
    confirmParams: {
      return_url: '',
    },
  })
  .then((res) => {
    if (res.error) {
    }
  });
stripe
  .confirmPayment({
    clientSecret: '',
    confirmParams: {
      return_url: '',
    },
    elements,
    redirect: 'always',
  })
  .then((res) => {
    if (res.error) {
    }
  });

// confirmPayment: redirect: 'if_required' without clientSecret
stripe
  .confirmPayment({
    elements,
    redirect: 'if_required',
  })
  .then((res) => {
    if (res.error) {
    }
    if (res.paymentIntent) {
    }
  });
stripe
  .confirmPayment({
    elements,
    redirect: 'if_required',
    confirmParams: {},
  })
  .then((res) => {
    if (res.error) {
    }
    if (res.paymentIntent) {
    }
  });

// confirmPayment redirect: 'if_required' with clientSecret
stripe
  .confirmPayment({
    clientSecret: '',
    redirect: 'if_required',
  })
  .then((res) => {
    if (res.error) {
    }
    if (res.paymentIntent) {
    }
  });
stripe
  .confirmPayment({
    clientSecret: '',
    redirect: 'if_required',
    confirmParams: {},
    elements,
  })
  .then((res) => {
    if (res.error) {
    }
    if (res.paymentIntent) {
    }
  });

// confirmSetup: redirect: 'always' without clientSecret
stripe
  .confirmSetup({
    elements,
    confirmParams: {
      return_url: '',
    },
  })
  .then((res) => {
    if (res.error) {
    }
  });
stripe
  .confirmSetup({
    elements,
    confirmParams: {
      return_url: '',
    },
    redirect: 'always',
  })
  .then((res) => {
    if (res.error) {
    }
  });

// confirmSetup: redirect: 'always' with clientSecret
stripe
  .confirmSetup({
    clientSecret: '',
    confirmParams: {
      return_url: '',
    },
  })
  .then((res) => {
    if (res.error) {
    }
  });
stripe
  .confirmSetup({
    clientSecret: '',
    confirmParams: {
      return_url: '',
    },
    elements,
    redirect: 'always',
  })
  .then((res) => {
    if (res.error) {
    }
  });

// confirmSetup: redirect: 'if_required' without clientSecret
stripe
  .confirmSetup({
    elements,
    redirect: 'if_required',
  })
  .then((res) => {
    if (res.error) {
    }
    if (res.setupIntent) {
    }
  });
stripe
  .confirmSetup({
    elements,
    redirect: 'if_required',
    confirmParams: {},
  })
  .then((res) => {
    if (res.error) {
    }
    if (res.setupIntent) {
    }
  });

// confirmSetup redirect: 'if_required' with clientSecret
stripe
  .confirmSetup({
    clientSecret: '',
    redirect: 'if_required',
  })
  .then((res) => {
    if (res.error) {
    }
    if (res.setupIntent) {
    }
  });
stripe
  .confirmSetup({
    clientSecret: '',
    redirect: 'if_required',
    confirmParams: {},
    elements,
  })
  .then((res) => {
    if (res.error) {
    }
    if (res.setupIntent) {
    }
  });

stripe
  .processOrder({
    elements,
    redirect: 'if_required',
  })
  .then((res) => {
    if (res.error) {
    }
    if (res.paymentIntent) {
    }
    if (res.order) {
    }
  });

stripe
  .processOrder({
    elements,
    confirmParams: {},
    redirect: 'if_required',
  })
  .then((res) => {
    if (res.error) {
    }
    if (res.paymentIntent) {
    }
    if (res.order) {
    }
  });

stripe.retrieveOrder('{ORDER_CLIENT_SECRET}').then((res) => {
  if (res.error) {
  }
  if (res.order) {
  }
});

stripe
  .collectFinancialConnectionsAccounts({
    clientSecret: '{FINANCIAL_CONNECTIONS_CLIENT_SECRET}',
  })
  .then((result) => {
    if (result.error) {
    }

    if (result.financialConnectionsSession) {
      const numAccounts = result.financialConnectionsSession.accounts.length;
      const accountNames = result.financialConnectionsSession.accounts.map(
        (account) => {
          if (account.balance) {
            console.log(account.balance.as_of);
            console.log(
              account.balance.current.usd && account.balance.current.usd > 0
            );

            if (
              account.balance.type === 'cash' &&
              account.balance.cash.available.usd
            ) {
              console.log(account.balance.cash.available.usd > 0);
            }

            if (
              account.balance.type === 'credit' &&
              account.balance.credit.used.usd
            ) {
              console.log(account.balance.credit.used.usd > 0);
            }
          }

          if (
            account.balance_refresh &&
            account.balance_refresh.status === 'pending'
          ) {
          }

          if (
            account.ownership_refresh &&
            account.ownership_refresh.status === 'failed'
          ) {
          }

          console.log(
            account.supported_payment_method_types.includes('us_bank_account')
          );

          if (account.livemode) {
          }

          if (account.permissions.includes('balances')) {
          }

          if (account.status === 'inactive') {
          }

          if (
            account.category === 'cash' &&
            account.subcategory === 'checking'
          ) {
          }

          return account.display_name;
        }
      );

      console.log(numAccounts);
      console.log(accountNames);
    }
  });

stripe
  .collectBankAccountToken({
    clientSecret: '{FINANCIAL_CONNECTIONS_CLIENT_SECRET}',
  })
  .then((result) => {
    if (result.error) {
    }

    if (result.financialConnectionsSession) {
    }

    if (result.token) {
      if (result.token.id) {
      }
    }
  });

const paymentRequest: PaymentRequest = stripe.paymentRequest({
  country: 'US',
  currency: 'usd',
  total: {label: 'Demo total', amount: 1000},
  requestPayerName: true,
  requestPayerEmail: true,
});

paymentRequest.canMakePayment().then((result) => {
  if (result) {
    const {applePay}: CanMakePaymentResult = result;
    console.log(applePay);
  }
});

paymentRequest.show();

paymentRequest.update({
  total: {
    label: 'Demo total',
    amount: 2000,
  },
  shippingOptions: [
    {
      id: 'basic',
      label: 'Ground shipping',
      detail: 'Ground shipping via UPS or FedEx',
      amount: 995,
    },
  ],
});

paymentRequest.on('paymentmethod', function(ev) {
  console.log(ev.paymentMethod.id);
  ev.complete('success');
  ev.complete('fail');
  ev.complete('invalid_payer_name');
  ev.complete('invalid_payer_phone');
  ev.complete('invalid_payer_email');
  ev.complete('invalid_shipping_address');
});

paymentRequest.on('token', function(ev) {
  console.log(ev.token.id);
  console.log(ev.payerEmail);
  ev.complete('success');
});

paymentRequest.on('source', function(ev) {
  console.log(ev.source.id);
  console.log(ev.walletName);
  console.log(ev.methodName);
  console.log(ev.payerPhone);
  ev.complete('invalid_payer_email');

  const {
    country,
    addressLine,
    region,
    city,
    postalCode,
    recipient,
    phone,
    sortingCode,
    dependentLocality,
  } = ev.shippingAddress!;
});

paymentRequest.on('shippingaddresschange', function(ev) {
  if (ev.shippingAddress.country !== 'US') {
    ev.updateWith({status: 'invalid_shipping_address'});
  } else {
    fetch('/calculateShipping', {
      body: JSON.stringify({shippingAddress: ev.shippingAddress}),
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(result) {
        ev.updateWith({
          status: 'success',
          shippingOptions: result.supportedShippingOptions,
        });
      });
  }
});

paymentRequest.on('cancel', () => {});

paymentRequest.on(
  'shippingoptionchange',
  (e: PaymentRequestShippingOptionEvent) => {
    const selectedOption: PaymentRequestShippingOption = e.shippingOption;

    console.log(selectedOption);

    e.updateWith({
      total: {amount: 2, label: ''},
      shippingOptions: [
        {
          id: 'someUniqueID',
          label: 'Ground',
          detail: 'UPS standard ground shipping',
          amount: 9.99,
        },
      ],
    });
  }
);

const issuingCardElement = elements.create('issuingCardNumberDisplay', {
  issuingCard: '',
  nonce: '',
  ephemeralKeySecret: '',
  style: {
    base: {
      fontSize: '2rem',
    },
  },
});

issuingCardElement.mount('#bogus-container');

issuingCardElement.update({
  style: {
    base: {
      fontSize: '5rem',
    },
  },
});

const issuingCvcElement = elements.create('issuingCardCvcDisplay', {
  issuingCard: '',
  nonce: '',
  ephemeralKeySecret: '',
  style: {
    base: {
      fontSize: '2rem',
    },
  },
});

issuingCvcElement.mount('#bogus-container');

issuingCvcElement.update({
  style: {
    base: {
      fontSize: '5rem',
    },
  },
});

const issuingExpiryElement = elements.create('issuingCardExpiryDisplay', {
  issuingCard: '',
  nonce: '',
  ephemeralKeySecret: '',
  style: {
    base: {
      fontSize: '2rem',
    },
  },
});

issuingExpiryElement.mount('#bogus-container');

issuingExpiryElement.update({
  style: {
    base: {
      fontSize: '5rem',
    },
  },
});

const issuingPinElement = elements.create('issuingCardPinDisplay', {
  issuingCard: '',
  nonce: '',
  ephemeralKeySecret: '',
  style: {
    base: {
      fontSize: '2rem',
    },
  },
});

issuingPinElement.mount('#bogus-container');

issuingPinElement.update({
  style: {
    base: {
      fontSize: '5rem',
    },
  },
});

const issuingCopyButtonElement = elements.create('issuingCardCopyButton', {
  toCopy: 'pin',
  style: {
    base: {
      fontSize: '2rem',
    },
  },
});

issuingCopyButtonElement.mount('#bogus-container');

issuingCopyButtonElement.update({
  toCopy: 'number',
  style: {
    base: {
      fontSize: '5rem',
    },
  },
});

stripe.createEphemeralKeyNonce({
  issuingCard: '',
});
