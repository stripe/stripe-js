///<reference path='./base.d.ts' />

declare module '@stripe/stripe-js' {
  type StripeCardCvcElement = StripeElementBase & {
    /**
     * The change event is triggered when the `Element`'s value changes.
     */
    on(
      eventType: 'change',
      handler: (event: StripeCardCvcElementChangeEvent) => any
    ): void;

    /**
     * Triggered when the element is fully rendered and can accept `element.focus` calls.
     */
    on(eventType: 'ready', handler: () => any): StripeCardCvcElement;

    /**
     * Triggered when the element gains focus.
     */
    on(eventType: 'focus', handler: () => any): StripeCardCvcElement;

    /**
     * Triggered when the element loses focus.
     */
    on(eventType: 'blur', handler: () => any): StripeCardCvcElement;

    /**
     * Updates the options the `CardCvcElement` was initialized with.
     * Updates are merged into the existing configuration.
     *
     * If you collect certain information in a different part of your interface (e.g., ZIP or postal code), use `element.update` with the appropriate information.
     *
     * The styles of an `CardCvcElement` can be dynamically changed using `element.update`.
     * This method can be used to simulate CSS media queries that automatically adjust the size of elements when viewed on different devices.
     */
    update(options: StripeCardCvcElementOptions): void;
  };

  interface StripeCardCvcElementOptions {
    classes?: StripeElementClasses;

    style?: StripeElementStyle;

    placeholder?: string;

    /**
     * Applies a disabled state to the Element such that user input is not accepted.
     * Default is false.
     */
    disabled?: boolean;
  }

  interface StripeCardCvcElementChangeEvent extends StripeElementChangeEvent {
    /**
     * The type of element that emitted this event.
     */
    elementType: 'cardCvc';
  }
}
