import {
  StripeElementBase,
  StripeElementStyle,
  StripeElementClasses,
  StripeElementChangeEvent,
} from './base';
import {StripeError} from '../stripe';
import {CardNetworkBrand} from '../elements-group';

export type StripeCardNumberElement = StripeElementBase & {
  /**
   * The change event is triggered when the `Element`'s value changes.
   */
  on(
    eventType: 'change',
    handler: (event: StripeCardNumberElementChangeEvent) => any
  ): StripeCardNumberElement;
  once(
    eventType: 'change',
    handler: (event: StripeCardNumberElementChangeEvent) => any
  ): StripeCardNumberElement;
  off(
    eventType: 'change',
    handler?: (event: StripeCardNumberElementChangeEvent) => any
  ): StripeCardNumberElement;

  /**
   * Triggered when the element is fully rendered and can accept `element.focus` calls.
   */
  on(
    eventType: 'ready',
    handler: (event: {elementType: 'cardNumber'}) => any
  ): StripeCardNumberElement;
  once(
    eventType: 'ready',
    handler: (event: {elementType: 'cardNumber'}) => any
  ): StripeCardNumberElement;
  off(
    eventType: 'ready',
    handler?: (event: {elementType: 'cardNumber'}) => any
  ): StripeCardNumberElement;

  /**
   * Triggered when the element gains focus.
   */
  on(
    eventType: 'focus',
    handler: (event: {elementType: 'cardNumber'}) => any
  ): StripeCardNumberElement;
  once(
    eventType: 'focus',
    handler: (event: {elementType: 'cardNumber'}) => any
  ): StripeCardNumberElement;
  off(
    eventType: 'focus',
    handler?: (event: {elementType: 'cardNumber'}) => any
  ): StripeCardNumberElement;

  /**
   * Triggered when the element loses focus.
   */
  on(
    eventType: 'blur',
    handler: (event: {elementType: 'cardNumber'}) => any
  ): StripeCardNumberElement;
  once(
    eventType: 'blur',
    handler: (event: {elementType: 'cardNumber'}) => any
  ): StripeCardNumberElement;
  off(
    eventType: 'blur',
    handler?: (event: {elementType: 'cardNumber'}) => any
  ): StripeCardNumberElement;

  /**
   * Triggered when the escape key is pressed within the element.
   */
  on(
    eventType: 'escape',
    handler: (event: {elementType: 'cardNumber'}) => any
  ): StripeCardNumberElement;
  once(
    eventType: 'escape',
    handler: (event: {elementType: 'cardNumber'}) => any
  ): StripeCardNumberElement;
  off(
    eventType: 'escape',
    handler?: (event: {elementType: 'cardNumber'}) => any
  ): StripeCardNumberElement;

  /**
   * Triggered when there is a change to the available networks the provided card can run on.
   */
  on(
    eventType: 'networkschange',
    handler: (event: {elementType: 'cardNumber'}) => any
  ): StripeCardNumberElement;
  once(
    eventType: 'networkschange',
    handler: (event: {elementType: 'cardNumber'}) => any
  ): StripeCardNumberElement;
  off(
    eventType: 'networkschange',
    handler?: (event: {elementType: 'cardNumber'}) => any
  ): StripeCardNumberElement;

  /**
   * Triggered when the element fails to load.
   */
  on(
    eventType: 'loaderror',
    handler: (event: {elementType: 'cardNumber'; error: StripeError}) => any
  ): StripeCardNumberElement;
  once(
    eventType: 'loaderror',
    handler: (event: {elementType: 'cardNumber'; error: StripeError}) => any
  ): StripeCardNumberElement;
  off(
    eventType: 'loaderror',
    handler?: (event: {elementType: 'cardNumber'; error: StripeError}) => any
  ): StripeCardNumberElement;

  /**
   * Updates the options the `CardNumberElement` was initialized with.
   * Updates are merged into the existing configuration.
   *
   * The styles of an `Element` can be dynamically changed using `element.update`.
   * This method can be used to simulate CSS media queries that automatically adjust the size of elements when viewed on different devices.
   */
  update(options: Partial<StripeCardNumberElementUpdateOptions>): void;
};

export interface StripeCardNumberElementOptions {
  classes?: StripeElementClasses;

  style?: StripeElementStyle;

  placeholder?: string;

  /**
   * Applies a disabled state to the Element such that user input is not accepted.
   * Default is `false`.
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

  /**
   * Hides and disables the Link Button in the Card Element.
   * Default is `false`.
   */
  disableLink?: boolean;

  /**
   * Specifies a network preference for Card Brand Choice. The first network in the array which is a valid
   * network on the entered card will be selected as the default in the Card Brand Choice dropdown upon
   * entry of a co-branded card.
   *
   * Default is an empty array, meaning no default selection will be made in the Card Brand choice dropdown.
   */
  preferredNetwork?: Array<CardNetworkBrand>;
}

export interface StripeCardNumberElementUpdateOptions {
  classes?: StripeElementClasses;

  style?: StripeElementStyle;

  placeholder?: string;

  /**
   * Applies a disabled state to the Element such that user input is not accepted.
   * Default is `false`.
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

export interface StripeCardNumberElementChangeEvent
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
