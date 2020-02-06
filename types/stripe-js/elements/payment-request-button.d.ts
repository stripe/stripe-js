///<reference path='./base.d.ts' />

declare module '@stripe/stripe-js' {
  type StripePaymentRequestButtonElement = StripeElementBase & {
    /**
     * Triggered when the payment request button is clicked.
     */
    on(
      eventType: 'click',
      handler: (event: StripePaymentRequestButtonElementClickEvent) => any
    ): void;

    /**
     * Triggered when the element is fully rendered and can accept `element.focus` calls.
     */
    on(
      eventType: 'ready',
      handler: () => any
    ): StripePaymentRequestButtonElement;

    /**
     * Triggered when the element gains focus.
     */
    on(
      eventType: 'focus',
      handler: () => any
    ): StripePaymentRequestButtonElement;

    /**
     * Triggered when the element loses focus.
     */
    on(
      eventType: 'blur',
      handler: () => any
    ): StripePaymentRequestButtonElement;

    /**
     * Updates the options the `PaymentRequestButtonElement` was initialized with.
     * Updates are merged into the existing configuration.
     *
     * If you collect certain information in a different part of your interface (e.g., ZIP or postal code), use `element.update` with the appropriate information.
     *
     * The styles of an `PaymentRequestButtonElement` can be dynamically changed using `element.update`.
     * This method can be used to simulate CSS media queries that automatically adjust the size of elements when viewed on different devices.
     */
    update(options: StripePaymentRequestButtonElementOptions): void;
  };

  interface StripePaymentRequestButtonElementOptions {
    classes?: StripeElementClasses;

    /**
     * An object used to customize the appearance of the Payment Request Button.
     */
    style?: {
      paymentRequestButton: {
        type?: 'default' | 'book' | 'buy' | 'donate';

        theme?: 'dark' | 'light' | 'light-outline';

        /**
         * The height of the Payment Request Button.
         */
        height?: number;
      };
    };
  }

  interface StripePaymentRequestButtonElementClickEvent {
    preventDefault: () => void;
  }
}
