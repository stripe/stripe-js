///<reference path='./base.d.ts' />

declare module '@stripe/stripe-js' {
  type StripeCardExpiryElement = StripeElementBase & {
    /**
     * The change event is triggered when the `Element`'s value changes.
     */
    on(
      eventType: 'change',
      handler: (event: StripeCardExpiryElementChangeEvent) => any
    ): StripeCardExpiryElement;

    /**
     * Triggered when the element is fully rendered and can accept `element.focus` calls.
     */
    on(eventType: 'ready', handler: () => any): StripeCardExpiryElement;

    /**
     * Triggered when the element gains focus.
     */
    on(eventType: 'focus', handler: () => any): StripeCardExpiryElement;

    /**
     * Triggered when the element loses focus.
     */
    on(eventType: 'blur', handler: () => any): StripeCardExpiryElement;

    /**
     * Triggered when the escape key is pressed within the element.
     */
    on(eventType: 'escape', handler: () => any): StripeCardExpiryElement;

    /**
     * Updates the options the `CardExpiryElement` was initialized with.
     * Updates are merged into the existing configuration.
     *
     * The styles of an `CardExpiryElement` can be dynamically changed using `element.update`.
     * This method can be used to simulate CSS media queries that automatically adjust the size of elements when viewed on different devices.
     */
    update(options: Partial<StripeCardExpiryElementOptions>): void;
  };

  interface StripeCardExpiryElementOptions {
    classes?: StripeElementClasses;

    style?: StripeElementStyle;

    placeholder?: string;

    /**
     * Applies a disabled state to the Element such that user input is not accepted.
     * Default is false.
     */
    disabled?: boolean;
  }

  interface StripeCardExpiryElementChangeEvent
    extends StripeElementChangeEvent {
    /**
     * The type of element that emitted this event.
     */
    elementType: 'cardExpiry';
  }
}
