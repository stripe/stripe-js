///<reference path='./base.d.ts' />

declare module '@stripe/stripe-js' {
  type StripeShippingAddressElement = StripeElementBase & {
    /**
     * The change event is triggered when the `Element`'s value changes.
     */
    on(
      eventType: 'change',
      handler: (event: StripeShippingAddressElementChangeEvent) => any
    ): StripeShippingAddressElement;
    once(
      eventType: 'change',
      handler: (event: StripeShippingAddressElementChangeEvent) => any
    ): StripeShippingAddressElement;
    off(
      eventType: 'change',
      handler?: (event: StripeShippingAddressElementChangeEvent) => any
    ): StripeShippingAddressElement;

    /**
     * Triggered when the element is fully rendered and can accept `element.focus` calls.
     */
    on(
      eventType: 'ready',
      handler: (event: {elementType: 'shippingAddress'}) => any
    ): StripeShippingAddressElement;
    once(
      eventType: 'ready',
      handler: (event: {elementType: 'shippingAddress'}) => any
    ): StripeShippingAddressElement;
    off(
      eventType: 'ready',
      handler?: (event: {elementType: 'shippingAddress'}) => any
    ): StripeShippingAddressElement;

    /**
     * Triggered when the element gains focus.
     */
    on(
      eventType: 'focus',
      handler: (event: {elementType: 'shippingAddress'}) => any
    ): StripeShippingAddressElement;
    once(
      eventType: 'focus',
      handler: (event: {elementType: 'shippingAddress'}) => any
    ): StripeShippingAddressElement;
    off(
      eventType: 'focus',
      handler?: (event: {elementType: 'shippingAddress'}) => any
    ): StripeShippingAddressElement;

    /**
     * Triggered when the element loses focus.
     */
    on(
      eventType: 'blur',
      handler: (event: {elementType: 'shippingAddress'}) => any
    ): StripeShippingAddressElement;
    once(
      eventType: 'blur',
      handler: (event: {elementType: 'shippingAddress'}) => any
    ): StripeShippingAddressElement;
    off(
      eventType: 'blur',
      handler?: (event: {elementType: 'shippingAddress'}) => any
    ): StripeShippingAddressElement;

    /**
     * Triggered when the escape key is pressed within the element.
     */
    on(
      eventType: 'escape',
      handler: (event: {elementType: 'shippingAddress'}) => any
    ): StripeShippingAddressElement;
    once(
      eventType: 'escape',
      handler: (event: {elementType: 'shippingAddress'}) => any
    ): StripeShippingAddressElement;
    off(
      eventType: 'escape',
      handler?: (event: {elementType: 'shippingAddress'}) => any
    ): StripeShippingAddressElement;

    /**
     * Updates the options the `ShippingAddressElement` was initialized with.
     * Updates are merged into the existing configuration.
     */
    update(
      options: Partial<StripeShippingAddressElementOptions>
    ): StripeShippingAddressElement;
  };

  interface StripeShippingAddressElementOptions {
    /**
     * Control which countries are displayed in the shippingAddress Element.
     */
    allowedCountries?: string[] | null;
  }

  interface StripeShippingAddressElementChangeEvent
    extends StripeElementChangeEvent {
    /**
     * The type of element that emitted this event.
     */
    elementType: 'shippingAddress';

    /**
     * Whether or not the shippingAddress Element is currently empty.
     */
    empty: boolean;

    /**
     * Whether or not the shippingAddress Element is complete.
     */
    complete: boolean;

    /**
     * Whether or not the the shipping address is new.
     */
    isNewAddress: boolean;

    /**
     * An object containing the current address.
     */
    value: {
      name: string;
      addressLine1: string;
      addressLine2: string;
      locality: string;
      administrativeArea: string;
      postalCode: string;
      country: string;
      dependentLocality: string;
      sortingCode: string;
    };
  }
}
