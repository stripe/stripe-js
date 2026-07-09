import {Omit} from '../../utils';
import {StripeError} from '../stripe';
import {StripeElementBase} from './base';
import {StripeExpressCheckoutElementConfirmEvent} from './express-checkout';
import {TaxIdType, ExternalTaxIdType} from './tax-id';

/**
 * Address type used in CheckoutForm change events.
 */
export type CheckoutFormAddress = {
  line1?: string | null;
  line2?: string | null;
  city?: string | null;
  state?: string | null;
  postal_code?: string | null;
  country?: string | null;
};

/**
 * The `value` payload returned in the change event and getValue() method.
 */
export type CheckoutFormValues = {
  customerDetails: {
    email: string;
    name?: string;
    businessName?: string;
    phone?: string;
  };
  shippingOption?: {
    id: string;
    displayName: string;
    amount: string;
  };
  shippingAddress?: {
    name: string;
    address: CheckoutFormAddress;
  };
  billingAddress?: {
    name: string;
    address: CheckoutFormAddress;
  };
  tax?: {
    businessName?: string;
    taxId: string;
    taxIdType: TaxIdType;
    externalTaxIdType: ExternalTaxIdType;
  };
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
        address: CheckoutFormAddress;
        name: string | null;
        email: string | null;
        phone: string | null;
      };
    } | null;
    savePaymentMethod?: boolean;
  };
  adaptivePricing?: {
    /**
     * The currently selected local currency code (e.g. 'eur', 'gbp').
     */
    currency: string;
  };
  customFields?: Record<string, string | number>;
  customComponents?: Record<string, string | number>;
};

/**
 * The items in the `value` object that have a corresponding status object.
 */
type CheckoutFormValueSectionsWithStatuses = Omit<
  CheckoutFormValues,
  'adaptivePricing' | 'shippingOption'
>;

type SectionStatus = {complete: boolean; empty: boolean};

/**
 * The `status` payload returned in the change event and getValue() method.
 * - each section in the values object has a corresponding status object: {complete: boolean, empty: boolean}.
 * - customComponents includes the status of each component: {"id of custom component": {complete: boolean, empty: boolean}} .
 */
export type CheckoutFormStatus = {
  [K in keyof CheckoutFormValueSectionsWithStatuses]: K extends 'customComponents'
    ? Record<string, SectionStatus>
    : SectionStatus;
};

/**
 * The change event payload for the CheckoutForm.
 */
export interface StripeCheckoutFormChangeEvent {
  /**
   * The type of element that emitted this event.
   */
  elementType: 'checkoutForm';

  /**
   * Whether all required fields in the CheckoutForm are complete.
   */
  complete: boolean;

  /**
   * Whether the CheckoutForm is currently empty.
   */
  empty: boolean;

  /**
   * An object containing the current form values.
   */
  value: CheckoutFormValues;

  /**
   * An object containing the current status (complete/empty) of each section in the values object.
   *
   * Ex.
   *  - when all values in the `values.customerDetails` object are empty,
   *    `status.customerDetails.empty` will be true.
   *  - when all values in the `values.customerDetails` object are complete,
   *     `status.customerDetails.complete` will be true.
   */
  status: CheckoutFormStatus;

  /**
   * Array of views in compact layout. Only defined for compact layout.
   */
  views?: {
    /**
     * Localized view name: "Express" | "Payment" | etc
     * */
    label: string;

    /**
     * Whether the user can currently navigate to this view
     * */
    canNavigate: boolean;

    /**
     * Whether this is the current view
     * */
    active: boolean;
  }[];
}

/**
 * Confirm event when user completes via Express Checkout (Apple Pay, Google Pay, etc.)
 */
interface StripeCheckoutFormExpressCheckoutConfirmEvent
  extends StripeExpressCheckoutElementConfirmEvent {
  source: 'checkout-form-ece';
}

/**
 * Confirm event when user clicks the Pay button.
 * paymentMethodType is the selected payment method (e.g., 'card', 'sepa_debit')
 * or null if payment collection is not needed.
 */
interface StripeCheckoutFormPayButtonConfirmEvent {
  source: 'checkout-form-pay-button';
  paymentMethodType: string | null;
}

/**
 * The value returned by `checkoutForm.getValue()`.
 * Same shape as the change event payload, but without `elementType`.
 */
export type StripeCheckoutFormValue = Omit<
  StripeCheckoutFormChangeEvent,
  'elementType'
>;

/**
 * The confirm event payload for the CheckoutForm.
 */
export type StripeCheckoutFormConfirmEvent =
  | StripeCheckoutFormExpressCheckoutConfirmEvent
  | StripeCheckoutFormPayButtonConfirmEvent;

export type StripeCheckoutForm = StripeElementBase & {
  /**
   * Triggered when the element is fully rendered and can accept `element.focus` calls.
   */
  on(
    eventType: 'ready',
    handler: (event: {elementType: 'checkoutForm'}) => any
  ): StripeCheckoutForm;
  once(
    eventType: 'ready',
    handler: (event: {elementType: 'checkoutForm'}) => any
  ): StripeCheckoutForm;
  off(
    eventType: 'ready',
    handler?: (event: {elementType: 'checkoutForm'}) => any
  ): StripeCheckoutForm;

  /**
   * Triggered when the element gains focus.
   */
  on(
    eventType: 'focus',
    handler: (event: {elementType: 'checkoutForm'}) => any
  ): StripeCheckoutForm;
  once(
    eventType: 'focus',
    handler: (event: {elementType: 'checkoutForm'}) => any
  ): StripeCheckoutForm;
  off(
    eventType: 'focus',
    handler?: (event: {elementType: 'checkoutForm'}) => any
  ): StripeCheckoutForm;

  /**
   * Triggered when the element loses focus.
   */
  on(
    eventType: 'blur',
    handler: (event: {elementType: 'checkoutForm'}) => any
  ): StripeCheckoutForm;
  once(
    eventType: 'blur',
    handler: (event: {elementType: 'checkoutForm'}) => any
  ): StripeCheckoutForm;
  off(
    eventType: 'blur',
    handler?: (event: {elementType: 'checkoutForm'}) => any
  ): StripeCheckoutForm;

  /**
   * Triggered when the escape key is pressed within the element.
   */
  on(
    eventType: 'escape',
    handler: (event: {elementType: 'checkoutForm'}) => any
  ): StripeCheckoutForm;
  once(
    eventType: 'escape',
    handler: (event: {elementType: 'checkoutForm'}) => any
  ): StripeCheckoutForm;
  off(
    eventType: 'escape',
    handler?: (event: {elementType: 'checkoutForm'}) => any
  ): StripeCheckoutForm;

  /**
   * Triggered when the element fails to load.
   */
  on(
    eventType: 'loaderror',
    handler: (event: {elementType: 'checkoutForm'; error: StripeError}) => any
  ): StripeCheckoutForm;
  once(
    eventType: 'loaderror',
    handler: (event: {elementType: 'checkoutForm'; error: StripeError}) => any
  ): StripeCheckoutForm;
  off(
    eventType: 'loaderror',
    handler?: (event: {elementType: 'checkoutForm'; error: StripeError}) => any
  ): StripeCheckoutForm;

  /**
   * Triggered when the loader UI is mounted to the DOM and ready to be displayed.
   */
  on(
    eventType: 'loaderstart',
    handler: (event: {elementType: 'checkoutForm'}) => any
  ): StripeCheckoutForm;
  once(
    eventType: 'loaderstart',
    handler: (event: {elementType: 'checkoutForm'}) => any
  ): StripeCheckoutForm;
  off(
    eventType: 'loaderstart',
    handler?: (event: {elementType: 'checkoutForm'}) => any
  ): StripeCheckoutForm;

  /**
   * Triggered when the element's value changes.
   */
  on(
    eventType: 'change',
    handler: (event: StripeCheckoutFormChangeEvent) => any
  ): StripeCheckoutForm;
  once(
    eventType: 'change',
    handler: (event: StripeCheckoutFormChangeEvent) => any
  ): StripeCheckoutForm;
  off(
    eventType: 'change',
    handler?: (event: StripeCheckoutFormChangeEvent) => any
  ): StripeCheckoutForm;

  /**
   * Triggered when a buyer authorizes a payment within a supported payment method.
   */
  on(
    eventType: 'confirm',
    handler: (event: StripeCheckoutFormConfirmEvent) => any
  ): StripeCheckoutForm;
  once(
    eventType: 'confirm',
    handler: (event: StripeCheckoutFormConfirmEvent) => any
  ): StripeCheckoutForm;
  off(
    eventType: 'confirm',
    handler?: (event: StripeCheckoutFormConfirmEvent) => any
  ): StripeCheckoutForm;

  /**
   * Triggered when the payment interface is dismissed (e.g., a buyer closes the payment interface).
   */
  on(
    eventType: 'cancel',
    handler: (event: {elementType: 'checkoutForm'}) => any
  ): StripeCheckoutForm;
  once(
    eventType: 'cancel',
    handler: (event: {elementType: 'checkoutForm'}) => any
  ): StripeCheckoutForm;
  off(
    eventType: 'cancel',
    handler?: (event: {elementType: 'checkoutForm'}) => any
  ): StripeCheckoutForm;

  /**
   * Retrieves the current form values from the CheckoutForm.
   */
  getValue(): Promise<StripeCheckoutFormValue>;

  /**
   * Navigates to the view at the given index (from the change event's views array).
   */
  setView(viewIndex: number): Promise<void>;
};
