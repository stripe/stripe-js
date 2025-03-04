import {
  LayoutObject,
  Layout,
  TermsOption,
  StripePaymentElement,
} from './elements/payment';
import {
  AddressMode,
  ContactOption,
  StripeAddressElement,
} from './elements/address';
import {Appearance, CssFontSource, CustomFontSource} from './elements-group';
import {StripeError} from './stripe';
import {
  StripeCurrencySelectorElement,
  FieldsOption,
  StripeElementBase,
  StripeExpressCheckoutElement,
  StripeExpressCheckoutElementConfirmEvent,
  StripeExpressCheckoutElementOptions,
  StripeExpressCheckoutElementReadyEvent,
} from './elements';

/**
 * Requires beta access:
 * Contact [Stripe support](https://support.stripe.com/) for more information.
 */

export interface StripeCheckoutElementsOptions {
  appearance?: Appearance;
  loader?: 'auto' | 'always' | 'never';
  fonts?: Array<CssFontSource | CustomFontSource>;
}

export interface StripeCheckoutOptions {
  clientSecret: string;
  elementsOptions?: StripeCheckoutElementsOptions;
}

/* Elements with CheckoutSessions API types */
export type StripeCheckoutAddress = {
  country: string;
  line1?: string | null;
  line2?: string | null;
  city?: string | null;
  postal_code?: string | null;
  state?: string | null;
};

export type StripeCheckoutAdjustableQuantity = {
  maximum: number;
  minimum: number;
};

export type StripeCheckoutBillingInterval = 'day' | 'month' | 'week' | 'year';

export type StripeCheckoutConfirmationRequirement =
  | 'phoneNumber'
  | 'shippingAddress'
  | 'billingAddress'
  | 'paymentDetails'
  | 'email';

export type StripeCheckoutContact = {
  name?: string | null;
  address: StripeCheckoutAddress;
};

export type StripeCheckoutDeliveryEstimate = {
  maximum: StripeCheckoutEstimate | null;
  minimum: StripeCheckoutEstimate | null;
};

export type StripeCheckoutDiscountAmount = {
  amount: number;
  displayName: string;
  promotionCode: string | null;
  recurring:
    | {type: 'forever'}
    | {type: 'repeating'; durationInMonths: number}
    | null;
};

export type StripeCheckoutDueNext = {
  amountSubtotal: number;
  amountDiscount: number;
  amountTaxInclusive: number;
  amountTaxExclusive: number;
  billingCycleAnchor: number | null;
};

export type StripeCheckoutEstimate = {
  unit: 'business_day' | 'day' | 'hour' | 'week' | 'month';
  value: number;
};

export type StripeCheckoutLastPaymentError = {
  message: string;
};

export type StripeCheckoutRedirectBehavior = 'always' | 'if_required';

export type StripeCheckoutSavedPaymentMethod = {
  id: string;
  type: 'card';
  card: {
    brand: string;
    expMonth: number;
    expYear: number;
    last4: string;
  };
  billingDetails: {
    email?: string | null;
    name?: string | null;
    phone?: string | null;
    address?: {
      line1?: string | null;
      line2?: string | null;
      city?: string | null;
      postal_code?: string | null;
      state?: string | null;
      country?: string | null;
    } | null;
  };
};

export type StripeCheckoutTaxAmount = {
  amount: number;
  inclusive: boolean;
  displayName: string;
};

export type StripeCheckoutLineItem = {
  id: string;
  name: string;
  amountDiscount: number;
  amountSubtotal: number;
  amountTaxExclusive: number;
  amountTaxInclusive: number;
  unitAmount: number;
  description: string | null;
  quantity: number;
  discountAmounts: Array<StripeCheckoutDiscountAmount> | null;
  taxAmounts: Array<StripeCheckoutTaxAmount> | null;
  recurring: {
    interval: StripeCheckoutBillingInterval;
    intervalCount: number;
    isProrated: boolean;
    usageType: 'metered' | 'licensed';
  } | null;
  adjustableQuantity: StripeCheckoutAdjustableQuantity | null;
  images: string[];
};

export type StripeCheckoutRecurring = {
  interval: StripeCheckoutBillingInterval;
  intervalCount: number;
  dueNext: StripeCheckoutDueNext;
  trial: StripeCheckoutTrial | null;
};

export type StripeCheckoutShipping = {
  shippingOption: StripeCheckoutShippingOption;
  taxAmounts: Array<StripeCheckoutTaxAmount> | null;
};

export type StripeCheckoutShippingOption = {
  id: string;
  amount: number;
  currency: string;
  displayName: string | null;
  deliveryEstimate: StripeCheckoutDeliveryEstimate | null;
};

export type StripeCheckoutStatus =
  | {type: 'open'}
  | {type: 'expired'}
  | {
      type: 'complete';
      paymentStatus: 'paid' | 'unpaid' | 'no_payment_required';
    };

export type StripeCheckoutTaxStatus =
  | {status: 'ready'}
  | {status: 'requires_shipping_address'}
  | {status: 'requires_billing_address'};

export type StripeCheckoutTotalSummary = {
  appliedBalance: number;
  balanceAppliedToNextInvoice: boolean;
  discount: number;
  shippingRate: number;
  subtotal: number;
  taxExclusive: number;
  taxInclusive: number;
  total: number;
};

export type StripeCheckoutTrial = {
  trialEnd: number;
  trialPeriodDays: number;
};

export type StripeCheckoutCurrencyOption = {
  amount: number;
  currency: string;
  currencyConversion?: {fxRate: number; sourceCurrency: string};
};

export type StripeCheckoutTaxIdType =
  | 'al_tin'
  | 'am_tin'
  | 'ao_tin'
  | 'at_vat'
  | 'ba_tin'
  | 'bb_tin'
  | 'be_vat'
  | 'bg_vat'
  | 'bs_tin'
  | 'cd_nif'
  | 'cl_tin'
  | 'tr_tin'
  | 'cy_vat'
  | 'cz_vat'
  | 'de_vat'
  | 'dk_vat'
  | 'ee_vat'
  | 'es_vat'
  | 'fi_vat'
  | 'fr_vat'
  | 'gn_nif'
  | 'gr_vat'
  | 'hr_vat'
  | 'th_vat'
  | 'ie_vat'
  | 'it_vat'
  | 'kh_tin'
  | 'lt_vat'
  | 'lu_vat'
  | 'lv_vat'
  | 'me_pib'
  | 'mk_vat'
  | 'mr_nif'
  | 'mt_vat'
  | 'nl_vat'
  | 'np_pan'
  | 'pe_ruc'
  | 'pl_vat'
  | 'pt_vat'
  | 'ro_vat'
  | 'se_vat'
  | 'sa_vat'
  | 'si_vat'
  | 'sk_vat'
  | 'sn_ninea'
  | 'sr_fin'
  | 'tj_tin'
  | 'ug_tin'
  | 'uy_ruc'
  | 'xi_vat'
  | 'zm_tin'
  | 'zw_tin'
  | 'gb_vat'
  | 'nz_gst'
  | 'au_abn'
  | 'no_vat'
  | 'ch_vat'
  | 'mx_rfc'
  | 'hu_vat'
  | 'ca_bn'
  | 'ca_qst'
  | 'ca_gst_hst'
  | 'ca_pst_bc'
  | 'ca_pst_mb'
  | 'ca_pst_sk'
  | 'sg_gst'
  | 'za_vat'
  | 'ru_inn'
  | 'ru_kpp'
  | 'ae_trn'
  | 'is_vat'
  | 'in_gst'
  | 'kr_brn'
  | 'es_cif'
  | 'bh_vat'
  | 'kz_bin'
  | 'ng_tin'
  | 'om_vat'
  | 'ge_vat'
  | 'ke_pin'
  | 'eg_tin'
  | 'tw_vat'
  | 'ua_vat'
  | 'ec_ruc'
  | 'cr_tin'
  | 'tz_vat'
  | 'rs_pib'
  | 'uz_vat'
  | 'uz_tin'
  | 'md_vat'
  | 'ma_vat'
  | 'by_tin'
  | 'li_vat';

export type StripeCheckoutTaxId = {
  type: StripeCheckoutTaxIdType;
  value: string;
};

export type StripeCheckoutTaxIdInfo = {
  taxId: StripeCheckoutTaxId;
  businessName: string;
};

/* Custom Checkout session */
export interface StripeCheckoutSession {
  billingAddress: StripeCheckoutContact | null;
  businessName: string | null;
  canConfirm: boolean;
  confirmationRequirements: StripeCheckoutConfirmationRequirement[];
  currency: string;
  currencyOptions: Array<StripeCheckoutCurrencyOption> | null;
  discountAmounts: Array<StripeCheckoutDiscountAmount> | null;
  email: string | null;
  id: string;
  lastPaymentError: StripeCheckoutLastPaymentError | null;
  lineItems: Array<StripeCheckoutLineItem>;
  livemode: boolean;
  phoneNumber: string | null;
  recurring: StripeCheckoutRecurring | null;
  savedPaymentMethods: Array<StripeCheckoutSavedPaymentMethod> | null;
  shipping: StripeCheckoutShipping | null;
  shippingAddress: StripeCheckoutContact | null;
  shippingOptions: Array<StripeCheckoutShippingOption>;
  status: StripeCheckoutStatus;
  tax: StripeCheckoutTaxStatus;
  taxAmounts: Array<StripeCheckoutTaxAmount> | null;
  taxIdInfo: StripeCheckoutTaxIdInfo | null;
  total: StripeCheckoutTotalSummary;
}

export type StripeCheckoutPaymentElementOptions = {
  layout?: Layout | LayoutObject;
  paymentMethodOrder?: Array<string>;
  readonly?: boolean;
  terms?: TermsOption;
  fields?: FieldsOption;
};

export type StripeCheckoutAddressElementOptions = {
  mode: AddressMode;
  contacts?: ContactOption[];
  display?: {
    name?: 'full' | 'split' | 'organization';
  };
};

export type StripeCheckoutExpressCheckoutElementOptions = {
  buttonHeight: StripeExpressCheckoutElementOptions['buttonHeight'];
  buttonTheme: StripeExpressCheckoutElementOptions['buttonTheme'];
  buttonType: StripeExpressCheckoutElementOptions['buttonType'];
  layout: StripeExpressCheckoutElementOptions['layout'];
  paymentMethodOrder: StripeExpressCheckoutElementOptions['paymentMethodOrder'];
  paymentMethods: StripeExpressCheckoutElementOptions['paymentMethods'];
};

export type StripeCheckoutUpdateHandler = (
  session: StripeCheckoutSession
) => void;

export type StripeCheckoutExpressCheckoutElement = StripeElementBase & {
  /**
   * Triggered when the element is fully rendered.
   */
  on(
    eventType: 'ready',
    handler: (event: StripeExpressCheckoutElementReadyEvent) => any
  ): StripeCheckoutExpressCheckoutElement;
  once(
    eventType: 'ready',
    handler: (event: StripeExpressCheckoutElementReadyEvent) => any
  ): StripeCheckoutExpressCheckoutElement;
  off(
    eventType: 'ready',
    handler?: (event: StripeExpressCheckoutElementReadyEvent) => any
  ): StripeCheckoutExpressCheckoutElement;

  /**
   * Triggered when the element gains focus.
   */
  on(
    eventType: 'focus',
    handler: (event: {elementType: 'expressCheckout'}) => any
  ): StripeCheckoutExpressCheckoutElement;
  once(
    eventType: 'focus',
    handler: (event: {elementType: 'expressCheckout'}) => any
  ): StripeCheckoutExpressCheckoutElement;
  off(
    eventType: 'focus',
    handler?: (event: {elementType: 'expressCheckout'}) => any
  ): StripeCheckoutExpressCheckoutElement;

  /**
   * Triggered when the element loses focus.
   */
  on(
    eventType: 'blur',
    handler: (event: {elementType: 'expressCheckout'}) => any
  ): StripeCheckoutExpressCheckoutElement;
  once(
    eventType: 'blur',
    handler: (event: {elementType: 'expressCheckout'}) => any
  ): StripeCheckoutExpressCheckoutElement;
  off(
    eventType: 'blur',
    handler?: (event: {elementType: 'expressCheckout'}) => any
  ): StripeCheckoutExpressCheckoutElement;

  /**
   * Triggered when the escape key is pressed within the element.
   */
  on(
    eventType: 'escape',
    handler: (event: {elementType: 'expressCheckout'}) => any
  ): StripeCheckoutExpressCheckoutElement;
  once(
    eventType: 'escape',
    handler: (event: {elementType: 'expressCheckout'}) => any
  ): StripeCheckoutExpressCheckoutElement;
  off(
    eventType: 'escape',
    handler?: (event: {elementType: 'expressCheckout'}) => any
  ): StripeCheckoutExpressCheckoutElement;

  /**
   * Triggered when the element fails to load.
   */
  on(
    eventType: 'loaderror',
    handler: (event: {
      elementType: 'expressCheckout';
      error: StripeError;
    }) => any
  ): StripeCheckoutExpressCheckoutElement;
  once(
    eventType: 'loaderror',
    handler: (event: {
      elementType: 'expressCheckout';
      error: StripeError;
    }) => any
  ): StripeCheckoutExpressCheckoutElement;
  off(
    eventType: 'loaderror',
    handler?: (event: {
      elementType: 'expressCheckout';
      error: StripeError;
    }) => any
  ): StripeCheckoutExpressCheckoutElement;

  /**
   * Triggered when a buyer authorizes a payment within a supported payment method.
   */
  on(
    eventType: 'confirm',
    handler: (event: StripeExpressCheckoutElementConfirmEvent) => any
  ): StripeCheckoutExpressCheckoutElement;
  once(
    eventType: 'confirm',
    handler: (event: StripeExpressCheckoutElementConfirmEvent) => any
  ): StripeCheckoutExpressCheckoutElement;
  off(
    eventType: 'confirm',
    handler?: (event: StripeExpressCheckoutElementConfirmEvent) => any
  ): StripeCheckoutExpressCheckoutElement;

  /**
   * Updates the options the `ExpressCheckoutElement` was initialized with.
   * Updates are merged into the existing configuration.
   */
  update: StripeExpressCheckoutElement['update'];
};

type AnyBuyerError = {message: string; code: null};
type ApplyPromotionCodeError =
  | {message: string; code: 'invalidCode'}
  | AnyBuyerError;
export type StripeCheckoutApplyPromotionCodeResult =
  | {type: 'success'; success: StripeCheckoutSession}
  | {type: 'error'; error: ApplyPromotionCodeError};

export type StripeCheckoutRemovePromotionCodeResult =
  | {type: 'success'; success: StripeCheckoutSession}
  | {type: 'error'; error: AnyBuyerError};

export type StripeCheckoutUpdateAddressResult =
  | {type: 'success'; success: StripeCheckoutSession}
  | {type: 'error'; error: AnyBuyerError};

export type StripeCheckoutUpdatePhoneNumberResult =
  | {type: 'success'; success: StripeCheckoutSession}
  | {type: 'error'; error: never};

type UpdateEmailError =
  | {message: string; code: 'incompleteEmail'}
  | {message: string; code: 'invalidEmail'};
export type StripeCheckoutUpdateEmailResult =
  | {type: 'success'; success: StripeCheckoutSession}
  | {type: 'error'; error: UpdateEmailError};

export type StripeCheckoutUpdateLineItemQuantityResult =
  | {type: 'success'; success: StripeCheckoutSession}
  | {type: 'error'; error: AnyBuyerError};

export type StripeCheckoutUpdateShippingOptionResult =
  | {type: 'success'; success: StripeCheckoutSession}
  | {type: 'error'; error: AnyBuyerError};

type UpdateTaxIdInfoError =
  | {message: string; code: 'invalidTaxId'}
  | AnyBuyerError;
export type StripeCheckoutUpdateTaxIdInfoResult =
  | {type: 'success'; success: StripeCheckoutSession}
  | {type: 'error'; error: UpdateTaxIdInfoError};

type ConfirmError =
  | {
      message: string;
      code: 'paymentFailed';
      paymentFailed: {
        declineCode: string | null;
      };
    }
  | AnyBuyerError;
export type StripeCheckoutConfirmResult =
  | {type: 'success'; success: StripeCheckoutSession}
  | {type: 'error'; error: ConfirmError};

type RunServerUpdateFunction = () => Promise<unknown>;
export type StripeCheckoutRunServerUpdateResult =
  | {type: 'success'; success: StripeCheckoutSession}
  | {type: 'error'; error: AnyBuyerError};

export interface StripeCheckout {
  /* Custom Checkout methods */
  applyPromotionCode: (
    promotionCode: string
  ) => Promise<StripeCheckoutApplyPromotionCodeResult>;
  removePromotionCode: () => Promise<StripeCheckoutRemovePromotionCodeResult>;
  updateShippingAddress: (
    shippingAddress: StripeCheckoutContact | null
  ) => Promise<StripeCheckoutUpdateAddressResult>;
  updateBillingAddress: (
    billingAddress: StripeCheckoutContact | null
  ) => Promise<StripeCheckoutUpdateAddressResult>;
  updatePhoneNumber: (
    phoneNumber: string
  ) => Promise<StripeCheckoutUpdatePhoneNumberResult>;
  updateEmail: (email: string) => Promise<StripeCheckoutUpdateEmailResult>;
  updateLineItemQuantity: (args: {
    lineItem: string;
    quantity: number;
  }) => Promise<StripeCheckoutUpdateLineItemQuantityResult>;
  updateTaxIdInfo: (
    taxIdInfo: StripeCheckoutTaxIdInfo | null
  ) => Promise<StripeCheckoutUpdateTaxIdInfoResult>;
  updateShippingOption: (
    shippingOption: string
  ) => Promise<StripeCheckoutUpdateShippingOptionResult>;
  confirm: (args?: {
    returnUrl?: string;
    redirect?: StripeCheckoutRedirectBehavior;
    paymentMethod?: string;
    savePaymentMethod?: boolean;
    email?: string;
    phoneNumber?: string;
    billingAddress?: StripeCheckoutContact;
    shippingAddress?: StripeCheckoutContact;
    expressCheckoutConfirmEvent?: StripeExpressCheckoutElementConfirmEvent;
  }) => Promise<StripeCheckoutConfirmResult>;
  session: () => StripeCheckoutSession;
  on: (event: 'change', handler: StripeCheckoutUpdateHandler) => void;
  runServerUpdate: (
    userFunction: RunServerUpdateFunction
  ) => Promise<StripeCheckoutRunServerUpdateResult>;

  /* Elements methods */
  changeAppearance: (appearance: Appearance) => void;
  getElement(elementType: 'payment'): StripePaymentElement | null;
  getElement(
    elementType: 'address',
    mode: AddressMode
  ): StripeAddressElement | null;
  getElement(
    elementType: 'expressCheckout'
  ): StripeCheckoutExpressCheckoutElement | null;
  /* Requires beta access: Contact [Stripe support](https://support.stripe.com/) for more information. */
  getElement(
    elementType: 'currencySelector'
  ): StripeCurrencySelectorElement | null;
  createElement(
    elementType: 'payment',
    options?: StripeCheckoutPaymentElementOptions
  ): StripePaymentElement;
  createElement(
    elementType: 'address',
    options: StripeCheckoutAddressElementOptions
  ): StripeAddressElement;
  createElement(
    elementType: 'expressCheckout',
    options: StripeCheckoutExpressCheckoutElementOptions
  ): StripeCheckoutExpressCheckoutElement;
  /* Requires beta access: Contact [Stripe support](https://support.stripe.com/) for more information. */
  createElement(elementType: 'currencySelector'): StripeCurrencySelectorElement;
}
