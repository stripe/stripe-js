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

/**
 * Requires beta access:
 * Contact [Stripe support](https://support.stripe.com/) for more information.
 */

/**
 * StripeCustomCheckoutInitOptions
 */
export interface StripeCustomCheckoutElementsOptions {
  appearance?: Appearance;
  loader?: 'auto' | 'always' | 'never';
  fonts?: Array<CssFontSource | CustomFontSource>;
}

export interface StripeCustomCheckoutOptions {
  clientSecret: string;
  elementsOptions?: StripeCustomCheckoutElementsOptions;
}

/**
 * StripeCustomCheckoutActions
 */

export type StripeCustomCheckoutAddress = {
  country: string;
  line1?: string | null;
  line2?: string | null;
  city?: string | null;
  postal_code?: string | null;
  state?: string | null;
};

export type StripeCustomCheckoutContact = {
  name?: string | null;
  address: StripeCustomCheckoutAddress;
};

export type StripeCustomCheckoutResult =
  | {session: StripeCustomCheckoutSession; error?: undefined}
  | {session?: undefined; error: StripeError};

export interface StripeCustomCheckoutActions {
  applyPromotionCode: (
    promotionCode: string
  ) => Promise<StripeCustomCheckoutResult>;
  removePromotionCode: () => Promise<StripeCustomCheckoutResult>;
  updateShippingAddress: (
    shippingAddress: StripeCustomCheckoutContact
  ) => Promise<StripeCustomCheckoutResult>;
  updateBillingAddress: (
    billingAddress: StripeCustomCheckoutContact
  ) => Promise<StripeCustomCheckoutResult>;
  updatePhoneNumber: (phoneNumber: string) => void;
  updateEmail: (email: string) => void;
  updateLineItemQuantity: (args: {
    lineItem: string;
    quantity: number;
  }) => Promise<StripeCustomCheckoutResult>;
  updateShippingOption: (
    shippingOption: string
  ) => Promise<StripeCustomCheckoutResult>;
  confirm: (args?: {
    return_url?: string;
  }) => Promise<StripeCustomCheckoutResult>;
}

/**
 * StripeCustomCheckoutSession
 */

export type StripeCustomCheckoutTaxAmount = {
  amount: number;
  inclusive: boolean;
  displayName: string;
};

export type StripeCustomCheckoutDiscountAmount = {
  amount: number;
  displayName: string;
  promotionCode: string | null;
};

export type StripeCustomCheckoutShipping = {
  shippingOption: StripeCustomCheckoutShippingOption;
  taxAmounts: Array<StripeCustomCheckoutTaxAmount> | null;
};

export type StripeCustomCheckoutShippingOption = {
  id: string;
  amount: number;
  currency: string;
  displayName: string | null;
  deliveryEstimate: StripeCustomCheckoutDeliveryEstimate | null;
};

export type StripeCustomCheckoutDeliveryEstimate = {
  maximum: StripeCustomCheckoutEstimate | null;
  minimum: StripeCustomCheckoutEstimate | null;
};

export type StripeCustomCheckoutEstimate = {
  unit: 'business_day' | 'day' | 'hour' | 'week' | 'month';
  value: number;
};

export type StripeCustomCheckoutBillingInterval =
  | 'day'
  | 'month'
  | 'week'
  | 'year';

export type StripeCustomCheckoutLineItem = {
  id: string;
  name: string;
  amount: number;
  unitAmount: number;
  description: string | null;
  quantity: number;
  discountAmounts: Array<StripeCustomCheckoutDiscountAmount> | null;
  taxAmounts: Array<StripeCustomCheckoutTaxAmount> | null;
  recurring: {
    interval: StripeCustomCheckoutBillingInterval;
    interval_count: number;
  } | null;
};

export type StripeCustomCheckoutTotalSummary = {
  subtotal: number;
  taxExclusive: number;
  taxInclusive: number;
  shippingRate: number;
  discount: number;
  total: number;
};

export type StripeCustomCheckoutConfirmationRequirement =
  | 'phoneNumber'
  | 'shippingAddress'
  | 'billingAddress'
  | 'paymentDetails'
  | 'email';

export interface StripeCustomCheckoutSession {
  lineItems: Array<StripeCustomCheckoutLineItem>;
  taxAmounts: Array<StripeCustomCheckoutTaxAmount> | null;
  discountAmounts: Array<StripeCustomCheckoutDiscountAmount> | null;
  currency: string;
  shipping: StripeCustomCheckoutShipping | null;
  shippingOptions: Array<StripeCustomCheckoutShippingOption>;
  shippingAddress: StripeCustomCheckoutContact | null;
  billingAddress: StripeCustomCheckoutContact | null;
  phoneNumber: string | null;
  email: string | null;
  total: StripeCustomCheckoutTotalSummary;
  confirmationRequirements: StripeCustomCheckoutConfirmationRequirement[];
  canConfirm: boolean;
}

/**
 * StripeCustomCheckoutElements
 */
export type StripeCustomCheckoutPaymentElementOptions = {
  layout?: Layout | LayoutObject;
  paymentMethodOrder?: Array<string>;
  readonly?: boolean;
  terms?: TermsOption;
};

export type StripeCustomCheckoutAddressElementOptions = {
  mode: AddressMode;
  contacts?: ContactOption[];
  display?: {
    name?: 'full' | 'split' | 'organization';
  };
};

export interface StripeCustomCheckoutElementsActions {
  changeAppearance: (appearance: Appearance) => void;
  getElement(elementType: 'payment'): StripePaymentElement | null;
  getElement(
    elementType: 'address',
    mode: AddressMode
  ): StripeAddressElement | null;
  createElement(
    elementType: 'payment',
    options?: StripeCustomCheckoutPaymentElementOptions
  ): StripePaymentElement;
  createElement(
    elementType: 'address',
    options: StripeCustomCheckoutAddressElementOptions
  ): StripeAddressElement;
}

/**
 * StripeCustomCheckout
 */
export type StripeCustomCheckoutUpdateHandler = (
  session: StripeCustomCheckoutSession
) => void;

export interface StripeCustomCheckout
  extends StripeCustomCheckoutActions,
    StripeCustomCheckoutElementsActions {
  session: () => StripeCustomCheckoutSession;
  on: (event: 'change', handler: StripeCustomCheckoutUpdateHandler) => void;
}
