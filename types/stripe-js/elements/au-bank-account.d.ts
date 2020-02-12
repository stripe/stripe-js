///<reference path='./base.d.ts' />

declare module '@stripe/stripe-js' {
  type StripeAuBankAccountElement = StripeElementBase & {
    /**
     * The change event is triggered when the `Element`'s value changes.
     */
    on(
      eventType: 'change',
      handler: (event: StripeAuBankAccountElementChangeEvent) => any
    ): void;

    /**
     * Triggered when the element is fully rendered and can accept `element.focus` calls.
     */
    on(eventType: 'ready', handler: () => any): StripeAuBankAccountElement;

    /**
     * Triggered when the element gains focus.
     */
    on(eventType: 'focus', handler: () => any): StripeAuBankAccountElement;

    /**
     * Triggered when the element loses focus.
     */
    on(eventType: 'blur', handler: () => any): StripeAuBankAccountElement;

    /**
     * Updates the options the `AuBankAccountElement` was initialized with.
     * Updates are merged into the existing configuration.
     *
     * If you collect certain information in a different part of your interface (e.g., ZIP or postal code), use `element.update` with the appropriate information.
     *
     * The styles of an `AuBankAccountElement` can be dynamically changed using `element.update`.
     * This method can be used to simulate CSS media queries that automatically adjust the size of elements when viewed on different devices.
     */
    update(options: Partial<StripeAuBankAccountElementOptions>): void;
  };

  interface StripeAuBankAccountElementOptions {
    classes?: StripeElementClasses;

    style?: StripeElementStyle;

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

  interface StripeAuBankAccountElementChangeEvent
    extends StripeElementChangeEvent {
    /**
     * The type of element that emitted this event.
     */
    elementType: 'auBankAccount';

    /**
     * The bank name corresponding to the entered BSB.
     */
    bankName?: string;

    /**
     * The branch name corresponding to the entered BSB.
     */
    branchName?: string;
  }
}
