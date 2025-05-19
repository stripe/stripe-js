import {StripeElementBase} from './base';
import {StripeError} from '../stripe';
import {ApplePayOption} from './apple-pay';
import {CardNetworkBrand} from '../elements-group';

export type StripePaymentElement = StripeElementBase & {
  /**
   * The change event is triggered when the `Element`'s value changes.
   */
  on(
    eventType: 'change',
    handler: (event: StripePaymentElementChangeEvent) => any
  ): StripePaymentElement;
  once(
    eventType: 'change',
    handler: (event: StripePaymentElementChangeEvent) => any
  ): StripePaymentElement;
  off(
    eventType: 'change',
    handler?: (event: StripePaymentElementChangeEvent) => any
  ): StripePaymentElement;

  /**
   * Triggered when the element is fully rendered and can accept `element.focus` calls.
   */
  on(
    eventType: 'ready',
    handler: (event: {elementType: 'payment'}) => any
  ): StripePaymentElement;
  once(
    eventType: 'ready',
    handler: (event: {elementType: 'payment'}) => any
  ): StripePaymentElement;
  off(
    eventType: 'ready',
    handler?: (event: {elementType: 'payment'}) => any
  ): StripePaymentElement;

  /**
   * Triggered when the element gains focus.
   */
  on(
    eventType: 'focus',
    handler: (event: {elementType: 'payment'}) => any
  ): StripePaymentElement;
  once(
    eventType: 'focus',
    handler: (event: {elementType: 'payment'}) => any
  ): StripePaymentElement;
  off(
    eventType: 'focus',
    handler?: (event: {elementType: 'payment'}) => any
  ): StripePaymentElement;

  /**
   * Triggered when the element loses focus.
   */
  on(
    eventType: 'blur',
    handler: (event: {elementType: 'payment'}) => any
  ): StripePaymentElement;
  once(
    eventType: 'blur',
    handler: (event: {elementType: 'payment'}) => any
  ): StripePaymentElement;
  off(
    eventType: 'blur',
    handler?: (event: {elementType: 'payment'}) => any
  ): StripePaymentElement;

  /**
   * Triggered when the escape key is pressed within the element.
   */
  on(
    eventType: 'escape',
    handler: (event: {elementType: 'payment'}) => any
  ): StripePaymentElement;
  once(
    eventType: 'escape',
    handler: (event: {elementType: 'payment'}) => any
  ): StripePaymentElement;
  off(
    eventType: 'escape',
    handler?: (event: {elementType: 'payment'}) => any
  ): StripePaymentElement;

  /**
   * Triggered when the element fails to load.
   */
  on(
    eventType: 'loaderror',
    handler: (event: {elementType: 'payment'; error: StripeError}) => any
  ): StripePaymentElement;
  once(
    eventType: 'loaderror',
    handler: (event: {elementType: 'payment'; error: StripeError}) => any
  ): StripePaymentElement;
  off(
    eventType: 'loaderror',
    handler?: (event: {elementType: 'payment'; error: StripeError}) => any
  ): StripePaymentElement;

  /**
   * Triggered when the loader UI is mounted to the DOM and ready to be displayed.
   */
  on(
    eventType: 'loaderstart',
    handler: (event: {elementType: 'payment'}) => any
  ): StripePaymentElement;
  once(
    eventType: 'loaderstart',
    handler: (event: {elementType: 'payment'}) => any
  ): StripePaymentElement;
  off(
    eventType: 'loaderstart',
    handler?: (event: {elementType: 'payment'}) => any
  ): StripePaymentElement;

  /**
   * The change event is triggered when the `Element`'s value changes.
   * Represents the details of a selected Card payment method.
   */
  on(
    eventType: 'carddetailschange',
    handler: (event: StripePaymentElementCardDetailsChangeEvent) => any
  ): StripePaymentElement;

  /**
   * Triggered when a Saved Payment Method is updated.
   */
  on(
    eventType: 'savedpaymentmethodupdate',
    handler: (event: StripePaymentElementSavedPaymentMethodUpdateEvent) => any
  ): StripePaymentElement;

  /**
   * Triggered when a Saved Payment Method is removed.
   */
  on(
    eventType: 'savedpaymentmethodremove',
    handler: (event: StripePaymentElementSavedPaymentMethodRemoveEvent) => any
  ): StripePaymentElement;

  /**
   * Updates the options the `PaymentElement` was initialized with.
   * Updates are merged into the existing configuration.
   */
  update(options: Partial<StripePaymentElementOptions>): StripePaymentElement;

  /**
   * Collapses the Payment Element into a row of payment method tabs.
   */
  collapse(): StripePaymentElement;
};

export interface DefaultValuesOption {
  billingDetails?: {
    name?: string;
    email?: string;
    phone?: string;
    address?: {
      country?: string;
      postal_code?: string;
      state?: string;
      city?: string;
      line1?: string;
      line2?: string;
    };
  };
  card?: {
    network?: CardNetworkBrand[];
  };
}

export type FieldOption = 'auto' | 'never';

export interface FieldsOption {
  billingDetails?:
    | FieldOption
    | {
        name?: FieldOption;
        email?: FieldOption;
        phone?: FieldOption;
        address?:
          | FieldOption
          | 'if_required'
          | {
              country?: FieldOption;
              postalCode?: FieldOption;
              state?: FieldOption;
              city?: FieldOption;
              line1?: FieldOption;
              line2?: FieldOption;
            };
      };
}

export type TermOption = 'auto' | 'always' | 'never';

export interface TermsOption {
  applePay?: TermOption;
  auBecsDebit?: TermOption;
  bancontact?: TermOption;
  card?: TermOption;
  cashapp?: TermOption;
  googlePay?: TermOption;
  ideal?: TermOption;
  paypal?: TermOption;
  sepaDebit?: TermOption;
  sofort?: TermOption;
  usBankAccount?: TermOption;
}

export type PaymentWalletOption = 'auto' | 'never';

export interface PaymentWalletsOption {
  applePay?: PaymentWalletOption;
  googlePay?: PaymentWalletOption;
  link?: PaymentWalletOption;
}

export type Layout = 'tabs' | 'accordion' | 'auto';

export interface LayoutObject {
  type: Layout;
  defaultCollapsed?: boolean;
  radios?: boolean;
  spacedAccordionItems?: boolean;
  visibleAccordionItemsCount?: number;
}

export interface StripePaymentElementOptions {
  /**
   * Provide initial customer information that will be displayed in the Payment Element.
   */
  defaultValues?: DefaultValuesOption;

  /**
   * Override the business name displayed in the Payment Element.
   * By default the PaymentElement will use your Stripe account or business name.
   */
  business?: {name: string};

  /**
   * Override the order in which payment methods are displayed in the Payment Element.
   * By default, the Payment Element will use a dynamic ordering that optimizes payment method display for each user.
   */
  paymentMethodOrder?: string[];

  /**
   * Control which fields are displayed in the Payment Element.
   */
  fields?: FieldsOption;

  /**
   * Apply a read-only state to the Payment Element so that payment details can’t be changed.
   * Default is false.
   */
  readOnly?: boolean;

  /**
   * Control terms display in the Payment Element.
   */
  terms?: TermsOption;

  /**
   * Control wallets display in the Payment Element.
   */
  wallets?: PaymentWalletsOption;

  /**
   * Specify a layout to use when rendering a Payment Element.
   */
  layout?: Layout | LayoutObject;

  /**
   * Specify the options to be used when the Apple Pay payment interface opens.
   */
  applePay?: ApplePayOption;
}

export interface StripePaymentElementChangeEvent {
  /**
   * The type of element that emitted this event.
   */
  elementType: 'payment';

  /**
   * `true` if the all inputs in the Payment Element are empty.
   */
  empty: boolean;

  /**
   * `true` if the every input in the Payment Element is well-formed and potentially complete.
   */
  complete: boolean;

  /**
   * Whether or not the Payment Element is currently collapsed.
   */
  collapsed: boolean;

  /**
   * An object containing the currently selected PaymentMethod type (in snake_case, for example "afterpay_clearpay").
   * If a payment method is selected, it will be included in the object.
   */
  value: {
    type: string;
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
}

type CardBrand =
  | 'amex'
  | 'diners'
  | 'discover'
  | 'eftpos_au'
  | 'jcb'
  | 'mastercard'
  | 'unionpay'
  | 'visa'
  | 'unknown';
type CardFunding = 'credit' | 'debit' | 'prepaid' | 'unknown';

export interface StripePaymentElementCardDetailsChangeEvent {
  /**
   * The type of element that emitted this event.
   */
  elementType: 'payment';

  /**
   * `true` when the card details are loading.
   */
  loading: boolean;

  /**
   * The card details for the selected payment method.
   * Undefined while loading and for non card payment methods.
   */
  details?: {
    brands: CardBrand[] | null;
    funding: CardFunding | null;
  };
}

export interface StripePaymentElementSavedPaymentMethodUpdateEvent {
  /**
   * The type of element that emitted this event.
   */
  elementType: 'payment';

  /**
   * `true` when the saved payment method is successfully updated.
   */
  success: boolean;

  /**
   * Error message if the saved payment method update fails.
   */
  error?: string;

  /**
   * The updated saved payment method.
   */
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
}

export interface StripePaymentElementSavedPaymentMethodRemoveEvent {
  /**
   * The type of element that emitted this event.
   */
  elementType: 'payment';

  /**
   * `true` when the saved payment method is successfully removed.
   */
  success: boolean;

  /**
   * Error message if the saved payment method removal fails.
   */
  error?: string;

  /**
   * The removed saved payment method.
   */
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
}
