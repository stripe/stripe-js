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
  StripeAuBankAccountElement,
  StripeAuBankAccountElementChangeEvent,
  StripePaymentRequestButtonElement,
  StripePaymentElement,
  StripePaymentMethodMessagingElement,
  StripeLinkAuthenticationElementChangeEvent,
  StripeLinkAuthenticationElement,
  StripeShippingAddressElementChangeEvent,
  StripeShippingAddressElement,
  StripeAddressElementChangeEvent,
  StripeAddressElement,
  StripeElementType,
  CanMakePaymentResult,
  VerificationSession,
  StripeExpressCheckoutElementClickEvent,
  StripeExpressCheckoutElementConfirmEvent,
  StripeExpressCheckoutElementShippingAddressChangeEvent,
  StripeExpressCheckoutElementShippingRateChangeEvent,
  AvailablePaymentMethods,
  StripeElementsOptions,
  CardBrand,
  CardFunding,
  StripeCurrencySelectorElement,
  StripeTaxIdElement,
  ExternalTaxIdType,
  TaxIdType,
  StripePaymentFormElement,
  StripePaymentFormElementChangeEvent,
  StripePaymentFormElementConfirmEvent,
  StripeIssuingAddToWalletButtonElementOptions,
  StripeIssuingAddToWalletButtonElement,
} from '../../../types';

const stripePromise: Promise<Stripe | null> = loadStripe('');
const stripeConnectPromise = loadStripe('', {stripeAccount: '', locale: 'en'});

const stripe: Stripe = window.Stripe!('pk_123');

const stripeWithBetas: Stripe = window.Stripe!('pk_123', {
  stripeAccount: '123',
  locale: 'ar',
  betas: ['beta_1'],
});

const stripeWithDeveloperToolsEnabled: Stripe = window.Stripe!('pk_123', {
  stripeAccount: '123',
  developerTools: {
    assistant: {
      enabled: true,
    },
  },
});

const stripeWithDeveloperToolsDisabled: Stripe = window.Stripe!('pk_123', {
  stripeAccount: '123',
  developerTools: {
    assistant: {
      enabled: false,
    },
  },
});

const stripeWithDeveloperToolsPartial: Stripe = window.Stripe!('pk_123', {
  stripeAccount: '123',
  developerTools: {
    assistant: {},
  },
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
  paymentMethodOptions: {
    card: {require_cvc_recollection: true, setup_future_usage: 'none'},
    amazon_pay: {setup_future_usage: 'none'},
  },
  appearance: {
    disableAnimations: false,
    theme: 'night',
    variables: {
      iconColor: 'blue',
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
  customPaymentMethods: [
    {
      id: 'cpmt_123',
      options: {
        type: 'static',
      },
    },
  ],
  syncAddressCheckbox: 'shipping',
};

const elements: StripeElements = stripe.elements(options);

stripe.elements({
  mode: 'setup',
  currency: 'usd',
  setup_future_usage: 'off_session',
  capture_method: 'automatic',
  payment_method_types: ['card'],
  payment_method_options: {
    us_bank_account: {financial_connections: {permissions: ['payment_method']}},
  },
  on_behalf_of: 'acct_id',
});

stripe.elements({
  mode: 'setup',
  setup_future_usage: 'off_session',
  capture_method: 'automatic',
  payment_method_types: ['card'],
  payment_method_options: {
    us_bank_account: {financial_connections: {permissions: ['payment_method']}},
  },
  on_behalf_of: 'acct_id',
});

stripe.elements({
  mode: 'subscription',
  currency: 'usd',
  amount: 1000,
});

const elementsClientSecret: StripeElements = stripe.elements({
  fonts: [OPEN_SANS, AVENIR],
  locale: 'auto',
  clientSecret: '',
  currency: 'usd',
  appearance: {
    disableAnimations: false,
    theme: 'night',
    variables: {
      iconColor: 'blue',
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
  customPaymentMethods: [
    {
      id: 'cpmt_123',
      options: {
        type: 'static',
      },
    },
  ],
  syncAddressCheckbox: 'shipping',
  paymentMethodCreation: 'manual',
});

const elementsPMCProvided = stripe.elements({
  mode: 'payment',
  currency: 'usd',
  amount: 1000,
  setup_future_usage: 'off_session',
  capture_method: 'automatic',
  payment_method_configuration: 'pmc_12345678901234567890',
});

const elementsNoOptions: StripeElements = stripe.elements();

const elementsCustomerSessionClientSecret = stripe.elements({
  customerSessionClientSecret: 'test_123',
});

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

elements.update({
  fonts: [{cssSrc: 'https://example.com/haha.css'}],
});

elements.update({});
elements.update({
  locale: 'es',
  appearance: {
    disableAnimations: true,
    theme: 'night',
    variables: {
      iconColor: 'blue',
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
  captureMethod: 'automatic_async',
  paymentMethodTypes: ['card'],
  on_behalf_of: 'acct_id',
});

elements.update({
  mode: 'payment',
  currency: 'usd',
  amount: 1099,
  setup_future_usage: 'off_session',
  capture_method: 'automatic',
  payment_method_types: ['card'],
  customPaymentMethods: [
    {
      id: 'cpmt_123',
      options: {
        type: 'static',
      },
    },
  ],
});

elements.on('update-end', () => {});

const fetchUpdates = async () => {
  const {error} = await elements.fetchUpdates();
};

const handleSubmit = async () => {
  const {error, selectedPaymentMethod} = await elements.submit();
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

elements.create('card', {preferredNetwork: undefined});

elements.create('card', {preferredNetwork: ['cartes_bancaires', 'accel']});

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
    disableLink: false,
  }
);

elements.create('cardNumber', {preferredNetwork: undefined});

elements.create('cardNumber', {
  preferredNetwork: ['cartes_bancaires', 'accel'],
});

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

const ibanElement = elements.create('iban', {supportedCountries: ['']});

const retrievedIbanElement: StripeIbanElement | null = elements.getElement(
  'iban'
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

const paymentMethodMessagingElement = elements.create(
  'paymentMethodMessaging',
  {
    amount: 2000,
    currency: 'USD',
  }
);

elements.create('paymentMethodMessaging', {
  amount: 2000,
  countryCode: 'US',
  currency: 'USD',
  paymentMethodTypes: ['afterpay_clearpay', 'klarna', 'affirm'],
});

elements.create('paymentMethodMessaging', {
  amount: 2000,
  countryCode: 'US',
  currency: 'USD',
  paymentMethodOrder: ['klarna'],
});

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
    card: {
      network: ['cartes_bancaires', 'visa'],
    },
  },
  fields: {
    billingDetails: {
      email: 'never',
      phone: 'auto',
      address: 'if_required',
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
  applePay: {
    recurringPaymentRequest: {
      paymentDescription: 'Subscription to ATN News',
      regularBilling: {
        label: 'Online & paper news',
        amount: 2000,
      },
      managementURL: 'https://atnnews.com/manage-subscription',
    },
  },
  wallets: {
    applePay: 'never',
    googlePay: 'auto',
    link: 'auto',
  },
  layout: {
    type: 'accordion',
    visibleAccordionItemsCount: 2,
    defaultCollapsed: true,
    radios: true,
    spacedAccordionItems: true,
    paymentMethodLogoPosition: 'end',
  },
});

const paymentElementWithRadiosEnum: StripePaymentElement = elements.create(
  'payment',
  {
    layout: {
      type: 'accordion',
      radios: 'auto',
    },
  }
);

paymentElementWithRadiosEnum.update({
  layout: {
    type: 'accordion',
    radios: 'if_multiple',
  },
});

paymentElement.update({
  applePay: {
    recurringPaymentRequest: {
      paymentDescription: 'Subscription to ATN News',
      regularBilling: {
        label: 'Online & paper news',
        amount: 2000,
      },
      managementURL: 'https://atnnews.com/manage-subscription',
    },
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
      value: {
        type: string;
        billingDetails?: {
          address: {
            country?: null | string;
            postalCode?: null | string;
          };
        };
        payment_method?: {
          id: string;
          type: string;
          billing_details: {
            address: {
              city: null | string;
              country: null | string;
              line1: null | string;
              line2: null | string;
              postal_code: null | string;
              state: null | string;
            };
            name: null | string;
            email: null | string;
            phone: null | string;
          };
        };
      };
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
  )
  .on(
    'carddetailschange',
    (e: {
      elementType: 'payment';
      loading: boolean;
      details?: {
        brands: CardBrand[] | null;
        funding: CardFunding | null;
      };
    }) => {}
  )
  .on(
    'savedpaymentmethodupdate',
    (e: {
      elementType: 'payment';
      success: boolean;
      error?: string;
      payment_method: {
        id: string;
        type: string;
        billing_details: {
          address: {
            city: null | string;
            country: null | string;
            line1: null | string;
            line2: null | string;
            postal_code: null | string;
            state: null | string;
          };
          name: null | string;
          email: null | string;
          phone: null | string;
        };
      };
    }) => {}
  )
  .on(
    'savedpaymentmethodremove',
    (e: {
      elementType: 'payment';
      success: boolean;
      error?: string;
      payment_method: {
        id: string;
        type: string;
        billing_details: {
          address: {
            city: null | string;
            country: null | string;
            line1: null | string;
            line2: null | string;
            postal_code: null | string;
            state: null | string;
          };
          name: null | string;
          email: null | string;
          phone: null | string;
        };
      };
    }) => {}
  );

paymentElement.collapse();

// Test Payment Method Messaging Element
paymentMethodMessagingElement.on(
  'ready',
  (e: {elementType: 'paymentMethodMessaging'}) => {}
);

const retrievedPaymentMethodMessagingElement: StripePaymentMethodMessagingElement | null = elements.getElement(
  'paymentMethodMessaging'
);

retrievedPaymentMethodMessagingElement!.update({amount: 10000});

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
  .on('networkschange', (e: {elementType: 'card'}) => {})
  .on(
    'loaderror',
    (e: {
      elementType: 'card';
      error: {
        type: string;
      };
    }) => {}
  );

const onceHandler = () => {};
cardElement.once('ready', onceHandler);
cardElement.off('ready', onceHandler);
cardElement.off('change');

cardNumberElement
  .on('networkschange', (e: {elementType: 'cardNumber'}) => {})
  .on(
    'loaderror',
    (e: {
      elementType: 'cardNumber';
      error: {
        type: string;
      };
    }) => {}
  );

auBankAccountElement.on(
  'change',
  (e: StripeAuBankAccountElementChangeEvent) => {}
);

auBankAccountElement
  .on('ready', (e: {elementType: 'auBankAccount'}) => {})
  .on('focus', (e: {elementType: 'auBankAccount'}) => {})
  .on('blur', (e: {elementType: 'auBankAccount'}) => {});

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

const expressCheckoutElementDefault = elements.create('expressCheckout');

const expressCheckoutElement = elements.create('expressCheckout', {
  allowedShippingCountries: ['US'],
  applePay: {
    recurringPaymentRequest: {
      paymentDescription: 'Subscription to ATN News',
      regularBilling: {
        label: 'Online & paper news',
        amount: 2000,
      },
      managementURL: 'https://atnnews.com/manage-subscription',
      billingAgreement: 'You agree to pay ATN News $20.00 every month.',
    },
  },
  billingAddressRequired: true,
  business: {name: 'Stripe Shop'},
  buttonHeight: 55,
  emailRequired: true,
  layout: {maxRows: 1, maxColumns: 1, overflow: 'auto'},
  lineItems: [{name: 'Pizza', amount: 1200}],
  paymentMethodOrder: ['apple_pay', 'google_pay'],
  paymentMethods: {
    googlePay: 'always',
    applePay: 'auto',
    link: 'auto',
  },
  phoneNumberRequired: true,
  shippingAddressRequired: true,
  shippingRates: [{id: 'free-shipping', amount: 0, displayName: 'Free'}],
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
  paymentMethods: {
    applePay: 'never',
  },
  buttonTheme: {
    googlePay: 'black',
  },
  buttonType: {
    applePay: 'check-out',
    paypal: 'checkout',
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
  .on('click', (e: StripeExpressCheckoutElementClickEvent) => {
    e.resolve({
      applePay: {
        recurringPaymentRequest: {
          paymentDescription: 'Subscription to ATN News',
          regularBilling: {
            label: 'Online & paper news',
            amount: 2000,
          },
          managementURL: 'https://atnnews.com/manage-subscription',
          billingAgreement: 'You agree to pay ATN News $20.00 every month.',
        },
      },
    });
  })
  .on('click', (e: StripeExpressCheckoutElementClickEvent) => {
    e.resolve({
      applePay: {
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
  })
  .on('click', (e: StripeExpressCheckoutElementClickEvent) => {
    e.resolve({
      applePay: {
        automaticReloadPaymentRequest: {
          paymentDescription: 'Automatic Reload Payment',
          automaticReloadBilling: {
            label: 'Online & paper news',
            amount: 2000,
            automaticReloadPaymentThresholdAmount: 1000,
          },
          managementURL: 'https://atnnews.com/manage-subscription',
          billingAgreement: "You agree to reload your card when it's low.",
        },
      },
    });
  })
  .on('click', (e: StripeExpressCheckoutElementClickEvent) => {
    e.reject();
  })
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
  paymentFailed({reason: 'invalid_billing_address'});
  paymentFailed({reason: 'invalid_payment_data'});
  paymentFailed({reason: 'address_unserviceable'});
  paymentFailed({message: 'Test error message'});
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
      applePay: {
        recurringPaymentRequest: {
          paymentDescription: 'Subscription to ATN News',
          regularBilling: {
            label: 'Online & paper news',
            amount: 2000,
          },
          managementURL: 'https://atnnews.com/manage-subscription',
        },
      },
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
      applePay: {
        recurringPaymentRequest: {
          paymentDescription: 'Subscription to ATN News',
          regularBilling: {
            label: 'Online & paper news',
            amount: 2000,
          },
          managementURL: 'https://atnnews.com/manage-subscription',
        },
      },
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
          id: 'fast-shipping',
          amount: 300,
          displayName: 'Pizza time, soon',
          deliveryEstimate: 'A couple of weeks',
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

expressCheckoutElement.update({
  allowedShippingCountries: ['US'],
  billingAddressRequired: true,
  buttonHeight: 55,
  emailRequired: true,
  layout: {maxRows: 1, maxColumns: 1, overflow: 'auto'},
  paymentMethodOrder: ['apple_pay', 'google_pay'],
  phoneNumberRequired: true,
  shippingAddressRequired: true,
});

const retrievedExpressCheckoutElement = elements.getElement('expressCheckout');

declare const currencySelectorElement: StripeCurrencySelectorElement;

currencySelectorElement
  .on('ready', (e: {elementType: 'currencySelector'}) => {})
  .on('focus', (e: {elementType: 'currencySelector'}) => {})
  .on('blur', (e: {elementType: 'currencySelector'}) => {})
  .on(
    'loaderror',
    (e: {
      elementType: 'currencySelector';
      error: {
        type: string;
      };
    }) => {}
  );

declare const taxIdElement: StripeTaxIdElement;

taxIdElement
  .on('ready', (e: {elementType: 'taxId'}) => {})
  .on('focus', (e: {elementType: 'taxId'}) => {})
  .on('blur', (e: {elementType: 'taxId'}) => {})
  .on('escape', (e: {elementType: 'taxId'}) => {})
  .on('loaderstart', (e: {elementType: 'taxId'}) => {})
  .on(
    'loaderror',
    (e: {
      elementType: 'taxId';
      error: {
        type: string;
      };
    }) => {}
  )
  .on(
    'change',
    (e: {
      elementType: 'taxId';
      empty: boolean;
      complete: boolean;
      visible: boolean;
      value: {
        businessName: string;
        taxId: string;
        taxIdType: TaxIdType;
        externalTaxIdType: ExternalTaxIdType;
      };
    }) => {}
  );

const createdTaxIdElement: StripeTaxIdElement = elements.create('taxId', {
  visibility: 'always',
  fields: {
    businessName: 'auto',
  },
  validation: {
    businessName: {required: 'auto'},
    taxId: {required: 'always'},
  },
  defaultValues: {
    businessName: 'Acme, Inc.',
    taxIdType: 'de_vat',
    taxId: 'DE123456789',
  },
});

const retrievedTaxIdElement: StripeTaxIdElement | null = elements.getElement(
  'taxId'
);

createdTaxIdElement.mount('#bogus-container');
retrievedTaxIdElement?.mount('#bogus-container');

createdTaxIdElement.update({
  visibility: 'auto',
  validation: {
    taxId: {required: 'never'},
  },
});

createdTaxIdElement.getValue().then((res) => {
  if (res.complete) {
    const {taxIdType, externalTaxIdType} = res.value;
    console.log(taxIdType, externalTaxIdType);
  }
});

declare const paymentFormElement: StripePaymentFormElement;

paymentFormElement
  .on('ready', (e: {elementType: 'paymentForm'}) => {})
  .on('focus', (e: {elementType: 'paymentForm'}) => {})
  .on('blur', (e: {elementType: 'paymentForm'}) => {})
  .on('escape', (e: {elementType: 'paymentForm'}) => {})
  .on(
    'loaderror',
    (e: {elementType: 'paymentForm'; error: {type: string}}) => {}
  )
  .on('change', (e: StripePaymentFormElementChangeEvent) => {})
  .on('confirm', (e: StripePaymentFormElementConfirmEvent) => {})
  .on('cancel', (e: {elementType: 'paymentForm'}) => {});

paymentFormElement.once('ready', (e: {elementType: 'paymentForm'}) => {});
paymentFormElement.off('ready');
paymentFormElement.once(
  'change',
  (e: StripePaymentFormElementChangeEvent) => {}
);
paymentFormElement.off('change');
paymentFormElement.once(
  'confirm',
  (e: StripePaymentFormElementConfirmEvent) => {}
);
paymentFormElement.off('confirm');

paymentFormElement.getValue().then((result) => {});

paymentFormElement.setView(0);
auBankAccountElement.destroy();
cardElement.destroy();
cardNumberElement.destroy();
cardCvcElement.destroy();
cardExpiryElement.destroy();
currencySelectorElement.destroy();
ibanElement.destroy();
paymentRequestButtonElement.destroy();
linkAuthenticationElement.destroy();
shippingAddressElement.destroy();
expressCheckoutElementDefault.destroy();
expressCheckoutElement.destroy();
expressCheckoutElement2.destroy();
taxIdElement.destroy();

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
  .confirmEpsPayment('', {payment_method: ''})
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmEpsPayment('', {payment_method: ''}, {handleActions: false})
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmEpsPayment('')
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
  .confirmMobilepayPayment('', {payment_method: ''})
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmMobilepayPayment('', {payment_method: ''}, {handleActions: false})
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmMobilepayPayment('', {
    payment_method: '',
    return_url: window.location.href,
  })
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmMobilepayPayment('', {
    return_url: window.location.href,
  })
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmMobilepayPayment(
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
  .confirmMultibancoPayment('', {
    payment_method: {billing_details: {email: 'jenny@example.com'}},
  })
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmMultibancoPayment('', {payment_method: ''})
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmMultibancoPayment('', {payment_method: ''}, {handleActions: false})
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmMultibancoPayment('')
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
  .confirmTwintPayment('', {
    payment_method: {billing_details: {name: 'Jenny Rosen'}},
    return_url: window.location.href,
  })
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmTwintPayment('', {payment_method: ''})
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmTwintPayment('', {payment_method: ''}, {handleActions: false})
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

stripe
  .confirmTwintPayment('')
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => null);

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
  .then((result: {paymentIntent?: PaymentIntent; error?: StripeError}) => {
    if (result.paymentIntent?.next_action?.verify_with_microdeposits) {
      console.log(
        result.paymentIntent?.next_action?.verify_with_microdeposits
          .arrival_date
      );
    }
  });

stripe.createPaymentMethod({
  elements: elements,
  params: {
    billing_details: {
      name: 'Jenny Rosen',
    },
    allow_redisplay: 'always',
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
  element: cardElement,
  params: {
    billing_details: {
      name: null,
      address: {
        line1: null,
        city: null,
        state: null,
        country: null,
        postal_code: null,
      },
      email: null,
      phone: null,
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
  .createConfirmationToken({
    elements,
    params: {
      payment_method_data: {
        billing_details: {
          name: 'Jenny Rosen',
        },
        allow_redisplay: 'always',
      },
      shipping: {
        address: {
          line1: '1234 Main St',
          line2: 'Apt 213',
          city: 'San Francisco',
          state: 'CA',
          country: 'US',
          postal_code: '94111',
        },
        name: 'Jenny Rosen',
      },
      return_url: 'https://shop.example.com/success.html',
    },
  })
  .then((result) => {
    if (result.error) {
      return console.log(result.error.code);
    }
    result.confirmationToken.payment_method_preview;
  });

stripe
  .createConfirmationToken({
    elements,
  })
  .then((result) => {
    if (result.error) {
      return console.log(result.error.code);
    }
    const a = result.confirmationToken.payment_method_preview;
    const b = result.confirmationToken.setup_future_usage;
    const c = result.confirmationToken.shipping;
    const d = result.confirmationToken.payment_intent;
    const e = result.confirmationToken.use_stripe_sdk;
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
  .confirmAmazonPaySetup('{{SETUP_INTENT_CLIENT_SECRET}}', {
    return_url: 'https://example.com/setup/complete',
    mandate_data: {
      customer_acceptance: {
        type: 'online',
        online: {
          infer_from_client: true,
        },
      },
    },
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
  .then((result: {setupIntent?: SetupIntent; error?: StripeError}) => {
    if (result.setupIntent?.next_action?.verify_with_microdeposits) {
      console.log(
        result.setupIntent?.next_action?.verify_with_microdeposits.arrival_date
      );
    }
  });

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

// confirmPayment redirect: 'if_required' with clientSecret and existing PM
stripe
  .confirmPayment({
    clientSecret: '',
    redirect: 'if_required',
    confirmParams: {
      payment_method: '',
    },
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

// confirmSetup redirect: 'if_required' with clientSecret and existing PM
stripe
  .confirmSetup({
    clientSecret: '',
    redirect: 'if_required',
    confirmParams: {
      payment_method: '',
    },
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
  applePay: {
    recurringPaymentRequest: {
      paymentDescription: 'Subscription to ATN News',
      regularBilling: {
        label: 'Online & paper news',
        amount: 2000,
      },
      managementURL: 'https://atnnews.com/manage-subscription',
    },
    cardFunding: 'supportsCredit',
  },
});

const paymentRequestOBO: PaymentRequest = stripe.paymentRequest({
  country: 'US',
  currency: 'usd',
  total: {label: 'Demo total', amount: 1000},
  onBehalfOf: 'acct_123',
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
  applePay: {
    recurringPaymentRequest: {
      paymentDescription: 'Subscription to ATN News',
      regularBilling: {
        label: 'Online & paper news',
        amount: 2000,
      },
      managementURL: 'https://atnnews.com/manage-subscription',
    },
    cardFunding: 'supportsDebit',
  },
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
          applePay: {
            recurringPaymentRequest: {
              paymentDescription: 'Subscription to ATN News',
              regularBilling: {
                label: 'Online & paper news',
                amount: 2000,
              },
              managementURL: 'https://atnnews.com/manage-subscription',
            },
          },
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
      applePay: {
        recurringPaymentRequest: {
          paymentDescription: 'Subscription to ATN News',
          regularBilling: {
            label: 'Online & paper news',
            amount: 2000,
          },
          managementURL: 'https://atnnews.com/manage-subscription',
        },
      },
    });
  }
);

declare const issuingAddToWalletButtonElement: StripeIssuingAddToWalletButtonElement;
declare const issuingAddToWalletButtonOptions: StripeIssuingAddToWalletButtonElementOptions;

const {
  buttonHeight,
  wallet,
  issuingCard,
  nonce,
  ephemeralKeySecret,
} = issuingAddToWalletButtonOptions;

issuingAddToWalletButtonElement.mount('#bogus-container');
issuingAddToWalletButtonElement.update({
  buttonHeight: 44,
});

issuingAddToWalletButtonElement.on('click', () => {});
issuingAddToWalletButtonElement.once('click', () => {});
issuingAddToWalletButtonElement.off('click', () => {});

issuingAddToWalletButtonElement.on('success', () => {});
issuingAddToWalletButtonElement.once('success', () => {});
issuingAddToWalletButtonElement.off('success', () => {});

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

stripe.initCheckout({clientSecret: Promise.resolve('cs_test_foo')});
const checkout = stripe.initCheckout({clientSecret: 'cs_test_foo'});
const checkoutPaymentElement: StripePaymentElement = checkout.createPaymentElement();
checkout.getPaymentElement();
const checkoutAddressElement: StripeAddressElement = checkout.createBillingAddressElement();
checkout.getBillingAddressElement();

const checkoutPaymentFormElement1: StripePaymentFormElement = checkout.createPaymentFormElement();
checkout.createPaymentFormElement({});
checkout.createPaymentFormElement({layout: 'expanded'});
checkout.createPaymentFormElement({layout: 'compact'});
checkout.createPaymentFormElement({
  contacts: [
    {
      name: 'John Doe',
      phone: '+1234567890',
      address: {
        line1: '123 Main St',
        line2: 'Apt 4',
        city: 'San Francisco',
        state: 'CA',
        postal_code: '94102',
        country: 'US',
      },
    },
  ],
});
checkout.createPaymentFormElement({
  wallets: {
    buttonTheme: {
      applePay: 'black',
      googlePay: 'white',
      paypal: 'gold',
      klarna: 'light',
    },
  },
});
checkout.createPaymentFormElement({
  layout: 'compact',
  contacts: [
    {
      name: 'Jane Doe',
      address: {
        line1: '456 Market St',
        city: 'San Francisco',
        state: 'CA',
        postal_code: '94103',
        country: 'US',
      },
    },
  ],
  wallets: {
    buttonTheme: {
      applePay: 'white-outline',
      googlePay: 'black',
      paypal: 'blue',
      klarna: 'dark',
    },
  },
});
const retrievedPaymentFormElement: StripePaymentFormElement | null = checkout.getPaymentFormElement();

checkout.loadFonts([
  {
    cssSrc: 'https://example.com/font.css',
  },
  {
    src: 'url(https://example.com/Blah.woff)',
    family: 'Blah',
    weight: '500',
    style: 'italic',
    unicodeRange: 'some range',
    display: 'display value',
  },
]);

checkout.loadActions().then((loadActionsResult) => {
  if (loadActionsResult.type === 'success') {
    const {actions} = loadActionsResult;
    actions.applyPromotionCode('code').then((result) => {
      if (result.type === 'success') {
        const {session} = result;
      } else {
        const {error} = result;
      }
    });
    actions.removePromotionCode().then((result) => {
      if (result.type === 'success') {
        const {session} = result;
      } else {
        const {error} = result;
      }
    });

    const session = actions.getSession();
    const {
      minorUnitsAmountDivisor,
      lineItems,
      total: {
        taxExclusive: {amount, minorUnitsAmount},
      },
    } = session;
    const {
      subtotal: {amount: _, minorUnitsAmount: __},
    } = lineItems[0];

    actions.confirm().then((result) => {
      if (result.type === 'success') {
        const {session} = result;
      } else {
        const {error} = result;
      }
    });
  } else {
    const {error} = loadActionsResult;
  }
});

// savedPaymentMethod variations for initCheckout:
stripe.initCheckout({
  clientSecret: 'cs_test_foo',
  elementsOptions: {
    savedPaymentMethod: {
      enableSave: 'never',
      enableRedisplay: 'auto',
    },
    syncAddressCheckbox: 'billing',
  },
});

// only enableSave
stripe.initCheckout({
  clientSecret: 'cs_test_foo',
  elementsOptions: {
    savedPaymentMethod: {
      enableSave: 'auto',
    },
    syncAddressCheckbox: 'shipping',
  },
});

// only enableRedisplay
stripe.initCheckout({
  clientSecret: 'cs_test_foo',
  elementsOptions: {
    savedPaymentMethod: {
      enableRedisplay: 'never',
    },
    syncAddressCheckbox: 'none',
  },
});

// empty savedPaymentMethod object
stripe.initCheckout({
  clientSecret: 'cs_test_foo',
  elementsOptions: {
    savedPaymentMethod: {},
  },
});
