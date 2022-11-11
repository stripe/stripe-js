import {StripeElementBase} from './base';
import {StripeError} from '../stripe';

export type StripePayButtonElement = StripeElementBase & {
  /**
   * Triggered when the element is fully rendered and can accept `element.focus` calls.
   */
  on(
    eventType: 'ready',
    handler: (event: StripePayButtonElementReadyEvent) => any
  ): StripePayButtonElement;
  once(
    eventType: 'ready',
    handler: (event: StripePayButtonElementReadyEvent) => any
  ): StripePayButtonElement;
  off(
    eventType: 'ready',
    handler?: (event: StripePayButtonElementReadyEvent) => any
  ): StripePayButtonElement;

  /**
   * Triggered when a button on the element is clicked.
   */
  on(
    eventType: 'click',
    handler: (event: StripePayButtonElementClickEvent) => any
  ): StripePayButtonElement;
  once(
    eventType: 'click',
    handler: (event: StripePayButtonElementClickEvent) => any
  ): StripePayButtonElement;
  off(
    eventType: 'click',
    handler?: (event: StripePayButtonElementClickEvent) => any
  ): StripePayButtonElement;

  /**
   * Triggered when the element gains focus.
   */
  on(
    eventType: 'focus',
    handler: (event: {elementType: 'payButton'}) => any
  ): StripePayButtonElement;
  once(
    eventType: 'focus',
    handler: (event: {elementType: 'payButton'}) => any
  ): StripePayButtonElement;
  off(
    eventType: 'focus',
    handler?: (event: {elementType: 'payButton'}) => any
  ): StripePayButtonElement;

  /**
   * Triggered when the element loses focus.
   */
  on(
    eventType: 'blur',
    handler: (event: {elementType: 'payButton'}) => any
  ): StripePayButtonElement;
  once(
    eventType: 'blur',
    handler: (event: {elementType: 'payButton'}) => any
  ): StripePayButtonElement;
  off(
    eventType: 'blur',
    handler?: (event: {elementType: 'payButton'}) => any
  ): StripePayButtonElement;

  /**
   * Triggered when the escape key is pressed within the element.
   */
  on(
    eventType: 'escape',
    handler: (event: {elementType: 'payButton'}) => any
  ): StripePayButtonElement;
  once(
    eventType: 'escape',
    handler: (event: {elementType: 'payButton'}) => any
  ): StripePayButtonElement;
  off(
    eventType: 'escape',
    handler?: (event: {elementType: 'payButton'}) => any
  ): StripePayButtonElement;

  /**
   * Triggered when the element fails to load.
   */
  on(
    eventType: 'loaderror',
    handler: (event: {elementType: 'payButton'; error: StripeError}) => any
  ): StripePayButtonElement;
  once(
    eventType: 'loaderror',
    handler: (event: {elementType: 'payButton'; error: StripeError}) => any
  ): StripePayButtonElement;
  off(
    eventType: 'loaderror',
    handler?: (event: {elementType: 'payButton'; error: StripeError}) => any
  ): StripePayButtonElement;

  /**
   * Triggered when a buyer authorizes a payment within a supported payment method.
   */
  on(
    eventType: 'confirm',
    handler: (event: StripePayButtonElementConfirmEvent) => any
  ): StripePayButtonElement;
  once(
    eventType: 'confirm',
    handler: (event: StripePayButtonElementConfirmEvent) => any
  ): StripePayButtonElement;
  off(
    eventType: 'confirm',
    handler?: (event: StripePayButtonElementConfirmEvent) => any
  ): StripePayButtonElement;

  /**
   * Triggered when a payment interface is dismissed (e.g., a buyer closes the payment interface)
   */
  on(
    eventType: 'cancel',
    handler: (event: {elementType: 'payButton'}) => any
  ): StripePayButtonElement;
  once(
    eventType: 'cancel',
    handler: (event: {elementType: 'payButton'}) => any
  ): StripePayButtonElement;
  off(
    eventType: 'cancel',
    handler?: (event: {elementType: 'payButton'}) => any
  ): StripePayButtonElement;

  /**
   * Triggered when a buyer selects a different shipping address.
   */
  on(
    eventType: 'shippingaddresschange',
    handler: (event: StripePayButtonElementShippingAddressChangeEvent) => any
  ): StripePayButtonElement;
  once(
    eventType: 'shippingaddresschange',
    handler: (event: StripePayButtonElementShippingAddressChangeEvent) => any
  ): StripePayButtonElement;
  off(
    eventType: 'shippingaddresschange',
    handler?: (event: StripePayButtonElementShippingAddressChangeEvent) => any
  ): StripePayButtonElement;

  /**
   * Triggered when a buyer selects a different shipping rate.
   */
  on(
    eventType: 'shippingratechange',
    handler: (event: StripePayButtonElementShippingRateChangeEvent) => any
  ): StripePayButtonElement;
  once(
    eventType: 'shippingratechange',
    handler: (event: StripePayButtonElementShippingRateChangeEvent) => any
  ): StripePayButtonElement;
  off(
    eventType: 'shippingratechange',
    handler?: (event: StripePayButtonElementShippingRateChangeEvent) => any
  ): StripePayButtonElement;

  /**
   * Updates the options the `PayButtonElement` was initialized with.
   * Updates are merged into the existing configuration.
   */
  update(options: StripePayButtonElementUpdateOptions): StripePayButtonElement;
};

export type PaymentMethodType = 'google_pay' | 'apple_pay';

export type PayButtonPartialAddress = {
  city: string;
  state: string;
  postal_code: string;
  country: string;
};

export type PayButtonAddress = PayButtonPartialAddress & {
  line1: string;
  line2: string | null;
};

export type BillingDetails = {
  name: string;
  email?: string;
  phone?: string;
  address: PayButtonAddress;
};

export type ShippingAddress = {
  name: string;
  address: PayButtonAddress;
};

export type LineItem = {
  name: string;
  amount: number;
};

export type DeliveryUnit = 'hour' | 'day' | 'business_day' | 'week' | 'month';

export type DeliveryEstimate = {
  unit: DeliveryUnit;
  value: number;
};

export type ShippingRate = {
  id: string;
  amount: number;
  displayName: string;
  deliveryEstimate?: {
    maximum?: DeliveryEstimate;
    minimum?: DeliveryEstimate;
  };
};

export type LayoutType = 'auto' | 'horizontal' | 'vertical';

export type LayoutOption =
  | LayoutType
  | {
      type: LayoutType;
      visibleButtonCount?: number;
    };

export type PayButtonWalletOption = 'always' | 'auto' | 'never';

export type PayButtonWalletsOption = {
  applePay?: PayButtonWalletOption;
  googlePay?: PayButtonWalletOption;
};

export type ApplePayButtonTheme = 'black' | 'white' | 'white-outline';

export type GooglePayButtonTheme = 'black' | 'white';

export type ButtonThemeOption = {
  applePay?: ApplePayButtonTheme;
  googlePay?: GooglePayButtonTheme;
};

export type ApplePayButtonType =
  | 'add-money'
  | 'book'
  | 'buy'
  | 'check-out'
  | 'contribute'
  | 'donate'
  | 'order'
  | 'plain'
  | 'reload'
  | 'rent'
  | 'subscribe'
  | 'support'
  | 'tip'
  | 'top-up';

export type GooglePayButtonType =
  | 'book'
  | 'buy'
  | 'checkout'
  | 'donate'
  | 'order'
  | 'pay'
  | 'plain'
  | 'subscribe';

export type ButtonTypeOption = {
  applePay?: ApplePayButtonType;
  googlePay?: GooglePayButtonType;
};

export interface StripePayButtonElementOptions {
  /**
   * Manually sets the height of the buttons shown.
   */
  buttonHeight?: number;

  /**
   * Controls the color of each button.
   */
  buttonTheme?: ButtonThemeOption;

  /**
   * Specifies the type of each button.
   */
  buttonType?: ButtonTypeOption;

  /**
   * Specifies how buttons should be laid out in relation to each other.
   */
  layout?: LayoutOption;

  /**
   * Override the order in which payment methods are displayed in the Pay Button Element.
   * By default, the Pay Button Element will use a dynamic ordering that optimizes payment method display for each user.
   */
  paymentMethodOrder?: string[];

  /**
   * Control wallets display in the Pay Button Element.
   */
  wallets?: PayButtonWalletsOption;
}

/*
 * Updatable options for an `Elements` instance
 */
export interface StripePayButtonElementUpdateOptions {
  /**
   * Manually sets the height of the buttons shown.
   */
  buttonHeight?: number;

  /**
   * Specifies how buttons should be laid out in relation to each other.
   */
  layout?: LayoutOption;

  /**
   * Override the order in which payment methods are displayed in the Pay Button Element.
   * By default, the Pay Button Element will use a dynamic ordering that optimizes payment method display for each user.
   */
  paymentMethodOrder?: string[];
}

export type AvailablePaymentMethods = {
  applePay: boolean;
  googlePay: boolean;
};

export interface StripePayButtonElementReadyEvent {
  /**
   * The type of element that emitted this event.
   */
  elementType: 'payButton';

  /**
   * The list of payment methods that could possibly show in the element, or undefined if no payment methods can show.
   */
  availablePaymentMethods: undefined | AvailablePaymentMethods;
}

export type RecurringPaymentIntervalUnit =
  | 'year'
  | 'month'
  | 'day'
  | 'hour'
  | 'minute';

export type ApplePayOption = {
  recurringPaymentRequest?: {
    paymentDescription: string;
    managementURL: string;
    regularBilling: {
      amount: number;
      label: string;
      recurringPaymentStartDate?: Date;
      recurringPaymentEndDate?: Date;
      recurringPaymentIntervalUnit?: RecurringPaymentIntervalUnit;
      recurringPaymentIntervalCount?: number;
    };
    billingAgreement?: string;
  };
};

export type ClickResolveDetails = {
  /**
   * An array of two-letter ISO country codes representing which countries
   * are eligible shipping locations.
   */
  allowedShippingCountries?: string[];

  billingAddressRequired?: boolean;

  /**
   * Provide information about your business that will be displayed in the payment interface.
   * This information will be retrieved from your Stripe account if not provided.
   */
  business?: {name: string};

  emailRequired?: boolean;

  lineItems?: Array<LineItem>;

  phoneNumberRequired?: boolean;

  shippingAddressRequired?: boolean;

  shippingRates?: Array<ShippingRate>;

  applePay?: ApplePayOption;
};

export interface StripePayButtonElementClickEvent {
  /**
   * The type of element that emitted this event.
   */
  elementType: 'payButton';

  /**
   * The payment method associated with the button that was clicked.
   */
  paymentMethodType: PaymentMethodType;

  /**
   * Callback to configure the details shown on a payment interface, including which fields to collect.
   * This must be called within 1 second of the 'click' event being emitted.
   */
  resolve: (resolveDetails?: ClickResolveDetails) => void;
}

export interface StripePayButtonElementConfirmEvent {
  /**
   * Callback when a payment is unsuccessful. Optionally, specifying a reason will show a more detailed error in the payment interface.
   */
  paymentFailed: (payload?: {
    reason?: 'fail' | 'invalid_shipping_address';
  }) => void;

  billingDetails?: BillingDetails;

  shippingAddress?: ShippingAddress;

  shippingRate?: ShippingRate;

  paymentMethodType: PaymentMethodType;
}

export type ChangeResolveDetails = {
  lineItems?: Array<LineItem>;
  shippingRates?: Array<ShippingRate>;
};

export interface StripePayButtonElementShippingAddressChangeEvent {
  name: string;
  address: PayButtonPartialAddress;
  resolve: (resolveDetails?: ChangeResolveDetails) => void;
  reject: () => void;
}

export interface StripePayButtonElementShippingRateChangeEvent {
  shippingRate: ShippingRate;
  resolve: (resolveDetails?: ChangeResolveDetails) => void;
  reject: () => void;
}
