export type StripeEmbeddedCheckoutAddress = {
  country: string;
  line1?: string | null;
  line2?: string | null;
  city?: string | null;
  postal_code?: string | null;
  state?: string | null;
};

export type StripeEmbeddedCheckoutShippingDetails = {
  name: string;
  address: StripeEmbeddedCheckoutAddress;
};

export type StripeEmbeddedCheckoutShippingDetailsChangeEvent = {
  checkoutSessionId: string;
  shippingDetails: StripeEmbeddedCheckoutShippingDetails;
};

export type StripeEmbeddedCheckoutLineItem = {
  id?: string;
  quantity?: number;
  price?: string;
  display?: {
    name?: string;
    description?: string;
    images?: string[];
  };
  pricingSpec?: {
    unitAmount?: number;
    unitAmountDecimal?: string;
    currency?: string;
    taxBehavior?: 'inclusive' | 'exclusive' | 'unspecified';
    taxCode?: string;
  };
};

export type StripeEmbeddedCheckoutLineItemsChangeEvent = {
  checkoutSessionId: string;
  lineItems: StripeEmbeddedCheckoutLineItem[];
};

export type ResultAction =
  | {type: 'accept'}
  | {type: 'reject'; errorMessage?: string};

/**
 * Analytics types for Embedded Checkout events
 */
export type StripeEmbeddedCheckoutClientMetadata = {
  [k: string]: string;
};

export type StripeEmbeddedCheckoutAnalyticsItemsAndTotals = {
  items?: Array<{
    quantity?: number;
    product?: string;
    amount?: number;
    rateCard?: string;
    pricingPlan?: string;
    price?: string;
  }>;
  currency?: string;
  amount?: number;
};

export type StripeEmbeddedCheckoutAnalyticsEvent<
  EventType extends string,
  EventDetails
> = {
  checkoutSession: string;
  eventType: EventType;
  details: EventDetails;
  clientMetadata: StripeEmbeddedCheckoutClientMetadata;
  /**
   * The timestamp of the event in unix seconds
   */
  timestamp: number;
};

export type StripeEmbeddedCheckoutSubmittedDetails = StripeEmbeddedCheckoutAnalyticsItemsAndTotals & {
  paymentMethodType: string;
};

export type StripeEmbeddedCheckoutRenderedDetails = StripeEmbeddedCheckoutAnalyticsItemsAndTotals;

export type StripeEmbeddedCheckoutDeviceDataDetails = {
  device: {
    category: 'mobile' | 'tablet' | 'desktop';
    language?: string;
    platform?: string;
    viewport?: {width: number; height: number};
  };
};

export type StripeEmbeddedCheckoutPromotionCodeAppliedDetails = {
  code: string;
};

export type StripeEmbeddedCheckoutSubmitFailureReason =
  | 'api_error'
  | 'user_cancelled'
  | 'reverification'
  | 'unexpected';

export type StripeEmbeddedCheckoutSubmitFailedDetails = StripeEmbeddedCheckoutAnalyticsItemsAndTotals & {
  paymentMethodType: string;
  failureReason: StripeEmbeddedCheckoutSubmitFailureReason;
};

export type StripeEmbeddedCheckoutRenderedEvent = StripeEmbeddedCheckoutAnalyticsEvent<
  'checkoutRendered',
  StripeEmbeddedCheckoutRenderedDetails
>;

export type StripeEmbeddedCheckoutDeviceDataEvent = StripeEmbeddedCheckoutAnalyticsEvent<
  'deviceData',
  StripeEmbeddedCheckoutDeviceDataDetails
>;

export type StripeEmbeddedCheckoutPromotionCodeAppliedEvent = StripeEmbeddedCheckoutAnalyticsEvent<
  'promotionCodeApplied',
  StripeEmbeddedCheckoutPromotionCodeAppliedDetails
>;

export type StripeEmbeddedCheckoutLineItemChangeEvent = StripeEmbeddedCheckoutAnalyticsEvent<
  'lineItemChange',
  StripeEmbeddedCheckoutAnalyticsItemsAndTotals
>;

export type StripeEmbeddedCheckoutSubmittedEvent = StripeEmbeddedCheckoutAnalyticsEvent<
  'checkoutSubmitted',
  StripeEmbeddedCheckoutSubmittedDetails
>;

export type StripeEmbeddedCheckoutSubmitFailedEvent = StripeEmbeddedCheckoutAnalyticsEvent<
  'checkoutSubmitFailed',
  StripeEmbeddedCheckoutSubmitFailedDetails
>;

export type StripeEmbeddedCheckoutAnalyticsEventUnion =
  | StripeEmbeddedCheckoutRenderedEvent
  | StripeEmbeddedCheckoutDeviceDataEvent
  | StripeEmbeddedCheckoutPromotionCodeAppliedEvent
  | StripeEmbeddedCheckoutLineItemChangeEvent
  | StripeEmbeddedCheckoutSubmittedEvent
  | StripeEmbeddedCheckoutSubmitFailedEvent;

export interface StripeEmbeddedCheckoutOptions {
  /**
   * The client secret of the [Checkout Session](https://stripe.com/docs/api/checkout/sessions).
   */
  clientSecret?: string;
  /**
   * A function that returns a Promise which resolves with the client secret of
   * the [Checkout Session](https://stripe.com/docs/api/checkout/sessions).
   */
  fetchClientSecret?: () => Promise<string>;
  /**
   * onComplete is called when the Checkout Session completes successfully.
   * You can use it to unmount Embedded Checkout and render a custom success UI.
   */
  onComplete?: () => void;
  /**
   * onShippingDetailsChange is called when the customer completes the shipping details form.
   *
   * The callback is required when [permissions.update.shipping_details](https://docs.stripe.com/api/checkout/sessions/create#create_checkout_session-permissions-update-shipping_details) is set to `server_only`.
   * For a step-by-step guide on using this callback to customize shipping options during checkout, see [Customize Shipping Options](https://docs.stripe.com/payments/checkout/custom-shipping-options).
   */
  onShippingDetailsChange?: (
    event: StripeEmbeddedCheckoutShippingDetailsChangeEvent
  ) => Promise<ResultAction>;
  /**
   * onLineItemsChange is called when the customer adds, removes, or modifies a line item.
   * The callback is required when [permissions.update.line_items](https://docs.stripe.com/api/checkout/sessions/create#create_checkout_session-permissions-update-line_items) is set to `server_only`.
   */
  onLineItemsChange?: (
    event: StripeEmbeddedCheckoutLineItemsChangeEvent
  ) => Promise<ResultAction>;
  /**
   * onAnalyticsEvent is called when analytics events occur during the checkout session.
   * You can use it to track customer behavior during the checkout session.
   */
  onAnalyticsEvent?: (event: StripeEmbeddedCheckoutAnalyticsEventUnion) => void;
}

export interface StripeEmbeddedCheckout {
  /**
   * The `embeddedCheckout.mount` method attaches your Embedded Checkout to the DOM.
   * `mount` accepts either a CSS Selector (e.g., `'#checkout'`) or a DOM element.
   */
  mount(location: string | HTMLElement): void;
  /**
   * Unmounts Embedded Checkout from the DOM.
   * Call `embeddedCheckout.mount` to re-attach it to the DOM.
   */
  unmount(): void;
  /**
   * Removes Embedded Checkout from the DOM and destroys it.
   * Once destroyed it not be re-mounted to the DOM.
   * Use this if you want to create a new Embedded Checkout instance.
   */
  destroy(): void;
}
