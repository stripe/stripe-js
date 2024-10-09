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
