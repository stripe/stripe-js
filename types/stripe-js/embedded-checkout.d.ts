export interface StripeEmbeddedCheckoutOptions {
  /**
   * The client secret of the [Checkout Session](https://stripe.com/docs/api/checkout/sessions).
   */
  clientSecret: string;
  /**
   * onComplete is called when the Checkout Session completes successfully.
   * You can use it to unmount Embedded Checkout and render a custom success UI.
   */
  onComplete?: () => void;
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
