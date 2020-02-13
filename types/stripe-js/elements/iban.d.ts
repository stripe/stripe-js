///<reference path='./base.d.ts' />

declare module '@stripe/stripe-js' {
  type StripeIbanElement = StripeElementBase & {
    /**
     * The change event is triggered when the `Element`'s value changes.
     */
    on(
      eventType: 'change',
      handler: (event: StripeIbanElementChangeEvent) => any
    ): StripeIbanElement;

    /**
     * Triggered when the element is fully rendered and can accept `element.focus` calls.
     */
    on(eventType: 'ready', handler: () => any): StripeIbanElement;

    /**
     * Triggered when the element gains focus.
     */
    on(eventType: 'focus', handler: () => any): StripeIbanElement;

    /**
     * Triggered when the element loses focus.
     */
    on(eventType: 'blur', handler: () => any): StripeIbanElement;

    /**
     * Updates the options the `IbanElement` was initialized with.
     * Updates are merged into the existing configuration.
     *
     * The styles of an `IbanElement` can be dynamically changed using `element.update`.
     * This method can be used to simulate CSS media queries that automatically adjust the size of elements when viewed on different devices.
     */
    update(options: Partial<StripeIbanElementOptions>): void;
  };

  interface StripeIbanElementOptions {
    classes?: StripeElementClasses;

    style?: StripeElementStyle;

    supportedCountries?: string[];

    placeholderCountry?: string;

    /**
     * Appearance of the icon in the Element.
     */
    iconStyle?: 'default' | 'solid';

    /**
     * Hides the icon in the Element.
     * Default is `false`.
     */
    hideIcon?: boolean;

    /**
     * Applies a disabled state to the Element such that user input is not accepted.
     * Default is false.
     */
    disabled?: boolean;
  }

  interface StripeIbanElementChangeEvent extends StripeElementChangeEvent {
    /**
     * The type of element that emitted this event.
     */
    elementType: 'iban';

    country: string;

    bankName: string;
  }
}
