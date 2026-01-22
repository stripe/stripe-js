import {StripeElementBase} from './base';
import {
  BillingDetails,
  ExpressPaymentType,
  ShippingAddress,
  ShippingRate,
} from './express-checkout';

/**
 * Address type used in PaymentFormElement change events.
 */
export type PaymentFormAddress = {
  line1?: string | null;
  line2?: string | null;
  city?: string | null;
  state?: string | null;
  postal_code?: string | null;
  country?: string | null;
};

/**
 * The change event payload for the PaymentFormElement.
 */
export interface StripePaymentFormElementChangeEvent {
  /**
   * The type of element that emitted this event.
   */
  elementType: 'paymentForm';

  /**
   * Whether all required fields in the PaymentFormElement are complete.
   */
  complete: boolean;

  /**
   * Whether the PaymentFormElement is currently empty.
   */
  empty: boolean;

  /**
   * An object containing the current form values.
   */
  value: {
    customerDetails: {
      email: string;
    };
    shippingOption?: {
      id: string;
      displayName: string;
      amount: string;
    };
    shippingAddress?: PaymentFormAddress;
    billingAddress?: PaymentFormAddress;
    tax?: {
      businessName: string;
      taxId: string;
      taxIdType: string;
      externalTaxIdType: string;
    };
    customFields?: Record<string, string | number>;
    payment?: {
      collapsed: boolean;
      type: string;
      country?: string | null;
      billingDetails?: {
        address?: {
          country?: string;
          postal_code?: string;
        };
      } | null;
      payment_method?: {
        id: string;
        type: string;
        billing_details: {
          address: PaymentFormAddress;
          name: string | null;
          email: string | null;
          phone: string | null;
        };
      } | null;
      savePaymentMethod?: boolean;
    };
  };
}

/**
 * The confirm event payload for the PaymentFormElement.
 */
export interface StripePaymentFormElementConfirmEvent {
  /**
   * Callback when a payment is unsuccessful. Optionally, specifying a reason will show a more detailed error in the payment interface.
   */
  paymentFailed: (payload?: {
    reason?:
      | 'fail'
      | 'invalid_shipping_address'
      | 'invalid_billing_address'
      | 'invalid_payment_data'
      | 'address_unserviceable';
    message?: string;
  }) => void;

  /**
   * Optional callback when payment succeeds.
   */
  paymentSucceeded?: () => void;

  billingDetails?: BillingDetails;

  shippingAddress?: ShippingAddress;

  shippingRate?: ShippingRate;

  /**
   * The express payment type. Only present when source is 'payment-form-ece'.
   */
  expressPaymentType?: ExpressPaymentType;

  /**
   * The source of the confirm event.
   * - 'payment-form-pay-button': User clicked the Pay button
   * - 'payment-form-ece': User completed via Express Checkout (Apple Pay, Google Pay, etc.)
   */
  source?: 'payment-form-pay-button' | 'payment-form-ece';
}

export type StripePaymentFormElement = StripeElementBase & {
  /**
   * Triggered when the element is fully rendered and can accept `element.focus` calls.
   */
  on(
    eventType: 'ready',
    handler: (event: {elementType: 'paymentForm'}) => any
  ): StripePaymentFormElement;
  once(
    eventType: 'ready',
    handler: (event: {elementType: 'paymentForm'}) => any
  ): StripePaymentFormElement;
  off(
    eventType: 'ready',
    handler?: (event: {elementType: 'paymentForm'}) => any
  ): StripePaymentFormElement;

  /**
   * Triggered when the element gains focus.
   */
  on(
    eventType: 'focus',
    handler: (event: {elementType: 'paymentForm'}) => any
  ): StripePaymentFormElement;
  once(
    eventType: 'focus',
    handler: (event: {elementType: 'paymentForm'}) => any
  ): StripePaymentFormElement;
  off(
    eventType: 'focus',
    handler?: (event: {elementType: 'paymentForm'}) => any
  ): StripePaymentFormElement;

  /**
   * Triggered when the element loses focus.
   */
  on(
    eventType: 'blur',
    handler: (event: {elementType: 'paymentForm'}) => any
  ): StripePaymentFormElement;
  once(
    eventType: 'blur',
    handler: (event: {elementType: 'paymentForm'}) => any
  ): StripePaymentFormElement;
  off(
    eventType: 'blur',
    handler?: (event: {elementType: 'paymentForm'}) => any
  ): StripePaymentFormElement;

  /**
   * Triggered when the escape key is pressed within the element.
   */
  on(
    eventType: 'escape',
    handler: (event: {elementType: 'paymentForm'}) => any
  ): StripePaymentFormElement;
  once(
    eventType: 'escape',
    handler: (event: {elementType: 'paymentForm'}) => any
  ): StripePaymentFormElement;
  off(
    eventType: 'escape',
    handler?: (event: {elementType: 'paymentForm'}) => any
  ): StripePaymentFormElement;

  /**
   * Triggered when the element fails to load.
   */
  on(
    eventType: 'loaderror',
    handler: (event: {
      elementType: 'paymentForm';
      error: {type?: string; code?: string; message?: string};
    }) => any
  ): StripePaymentFormElement;
  once(
    eventType: 'loaderror',
    handler: (event: {
      elementType: 'paymentForm';
      error: {type?: string; code?: string; message?: string};
    }) => any
  ): StripePaymentFormElement;
  off(
    eventType: 'loaderror',
    handler?: (event: {
      elementType: 'paymentForm';
      error: {type?: string; code?: string; message?: string};
    }) => any
  ): StripePaymentFormElement;

  /**
   * Triggered when the element's value changes.
   */
  on(
    eventType: 'change',
    handler: (event: StripePaymentFormElementChangeEvent) => any
  ): StripePaymentFormElement;
  once(
    eventType: 'change',
    handler: (event: StripePaymentFormElementChangeEvent) => any
  ): StripePaymentFormElement;
  off(
    eventType: 'change',
    handler?: (event: StripePaymentFormElementChangeEvent) => any
  ): StripePaymentFormElement;

  /**
   * Triggered when a buyer authorizes a payment within a supported payment method.
   */
  on(
    eventType: 'confirm',
    handler: (event: StripePaymentFormElementConfirmEvent) => any
  ): StripePaymentFormElement;
  once(
    eventType: 'confirm',
    handler: (event: StripePaymentFormElementConfirmEvent) => any
  ): StripePaymentFormElement;
  off(
    eventType: 'confirm',
    handler?: (event: StripePaymentFormElementConfirmEvent) => any
  ): StripePaymentFormElement;

  /**
   * Triggered when the payment interface is dismissed (e.g., a buyer closes the payment interface).
   */
  on(
    eventType: 'cancel',
    handler: (event: {elementType: 'paymentForm'}) => any
  ): StripePaymentFormElement;
  once(
    eventType: 'cancel',
    handler: (event: {elementType: 'paymentForm'}) => any
  ): StripePaymentFormElement;
  off(
    eventType: 'cancel',
    handler?: (event: {elementType: 'paymentForm'}) => any
  ): StripePaymentFormElement;

  /**
   * Retrieves the current form values from the PaymentFormElement.
   */
  getValue(): Promise<StripePaymentFormElementChangeEvent>;
};
