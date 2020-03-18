///<reference path='./base.d.ts' />

declare module '@stripe/stripe-js' {
  type StripeCardNumberElement = StripeElementBase & {
    /**
     * The change event is triggered when the `Element`'s value changes.
     */
    on(
      eventType: 'change',
      handler: (event: StripeCardNumberElementChangeEvent) => any
    ): StripeCardNumberElement;

    /**
     * Triggered when the element is fully rendered and can accept `element.focus` calls.
     */
    on(eventType: 'ready', handler: () => any): StripeCardNumberElement;

    /**
     * Triggered when the element gains focus.
     */
    on(eventType: 'focus', handler: () => any): StripeCardNumberElement;

    /**
     * Triggered when the element loses focus.
     */
    on(eventType: 'blur', handler: () => any): StripeCardNumberElement;

    /**
     * Triggered when the escape key is pressed within the element.
     */
    on(eventType: 'escape', handler: () => any): StripeCardNumberElement;

    /**
     * Updates the options the `CardNumberElement` was initialized with.
     * Updates are merged into the existing configuration.
     *
     * The styles of an `Element` can be dynamically changed using `element.update`.
     * This method can be used to simulate CSS media queries that automatically adjust the size of elements when viewed on different devices.
     */
    update(options: Partial<StripeCardNumberElementOptions>): void;
  };

  interface StripeCardNumberElementOptions {
    classes?: StripeElementClasses;

    style?: StripeElementStyle;

    placeholder?: string;

    /**
     * Applies a disabled state to the Element such that user input is not accepted.
     * Default is false.
     */
    disabled?: boolean;

    /**
     * Show a card brand icon in the Element.
     * Default is `false`.
     */
    showIcon?: boolean;

    /**
     * Appearance of the brand icon in the Element.
     */
    iconStyle?: 'default' | 'solid';
  }

  interface StripeCardNumberElementChangeEvent
    extends StripeElementChangeEvent {
    /**
     * The type of element that emitted this event.
     */
    elementType: 'cardNumber';

    /*
     * The card brand of the card number being entered.
     */
    brand:
      | 'visa'
      | 'mastercard'
      | 'amex'
      | 'discover'
      | 'diners'
      | 'jcb'
      | 'unionpay'
      | 'unknown';
  }
}
