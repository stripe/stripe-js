///<reference path='./base.d.ts' />

declare module '@stripe/stripe-js' {
  type StripePaymentElement = StripeElementBase & {
    /**
     * The change event is triggered when the `Element`'s value changes.
     */
    on(
      eventType: 'change',
      handler: (event: StripePaymentElementChangeEvent) => any
    ): StripePaymentElement;
    once(
      eventType: 'change',
      handler: (event: StripePaymentElementChangeEvent) => any
    ): StripePaymentElement;
    off(
      eventType: 'change',
      handler?: (event: StripePaymentElementChangeEvent) => any
    ): StripePaymentElement;

    /**
     * Triggered when the element is fully rendered and can accept `element.focus` calls.
     */
    on(
      eventType: 'ready',
      handler: (event: {elementType: 'payment'}) => any
    ): StripePaymentElement;
    once(
      eventType: 'ready',
      handler: (event: {elementType: 'payment'}) => any
    ): StripePaymentElement;
    off(
      eventType: 'ready',
      handler?: (event: {elementType: 'payment'}) => any
    ): StripePaymentElement;

    /**
     * Triggered when the element gains focus.
     */
    on(
      eventType: 'focus',
      handler: (event: {elementType: 'payment'}) => any
    ): StripePaymentElement;
    once(
      eventType: 'focus',
      handler: (event: {elementType: 'payment'}) => any
    ): StripePaymentElement;
    off(
      eventType: 'focus',
      handler?: (event: {elementType: 'payment'}) => any
    ): StripePaymentElement;

    /**
     * Triggered when the element loses focus.
     */
    on(
      eventType: 'blur',
      handler: (event: {elementType: 'payment'}) => any
    ): StripePaymentElement;
    once(
      eventType: 'blur',
      handler: (event: {elementType: 'payment'}) => any
    ): StripePaymentElement;
    off(
      eventType: 'blur',
      handler?: (event: {elementType: 'payment'}) => any
    ): StripePaymentElement;

    /**
     * Triggered when the escape key is pressed within the element.
     */
    on(
      eventType: 'escape',
      handler: (event: {elementType: 'payment'}) => any
    ): StripePaymentElement;
    once(
      eventType: 'escape',
      handler: (event: {elementType: 'payment'}) => any
    ): StripePaymentElement;
    off(
      eventType: 'escape',
      handler?: (event: {elementType: 'payment'}) => any
    ): StripePaymentElement;

    /**
     * Updates the options the `PaymentElement` was initialized with.
     * Updates are merged into the existing configuration.
     */
    update(options: Partial<StripePaymentElementOptions>): StripePaymentElement;

    /**
     * Collapses the Payment Element into a row of payment method tabs.
     */
    collapse(): StripePaymentElement;
  };

  type FieldOption = 'auto' | 'never';

  interface FieldsOption {
    billingDetails?:
      | FieldOption
      | {
          name?: FieldOption;
          email?: FieldOption;
          phone?: FieldOption;
          address?:
            | FieldOption
            | {
                country?: FieldOption;
                postalCode?: FieldOption;
                state?: FieldOption;
                city?: FieldOption;
                line1?: FieldOption;
                line2?: FieldOption;
              };
        };
  }

  type TermOption = 'auto' | 'always' | 'never';

  interface TermsOption {
    bancontact?: TermOption;
    card?: TermOption;
    ideal?: TermOption;
    sepaDebit?: TermOption;
    sofort?: TermOption;
  }

  interface StripePaymentElementOptions {
    /**
     * Override the business name displayed in the Payment Element.
     * By default the PaymentElement will use your Stripe account or business name.
     */
    business?: {name: string};

    /**
     * Override the order in which payment methods are displayed in the Payment Element.
     * By default, the Payment Element will use a dynamic ordering that optimizes payment method display for each user.
     */
    paymentMethodOrder?: string[];

    /**
     * Control which fields are displayed in the Payment Element.
     */
    fields?: FieldsOption;

    /**
     * Control terms display in the Payment Element.
     */
    terms?: TermsOption;
  }

  interface StripePaymentElementChangeEvent
    extends Omit<StripeElementChangeEvent, 'error'> {
    /**
     * The type of element that emitted this event.
     */
    elementType: 'payment';

    /**
     * Whether or not the Payment Element is currently collapsed.
     */
    collapsed: boolean;

    /**
     * An object containing the currently selected PaymentMethod type.
     */
    value: {type: string};
  }
}
