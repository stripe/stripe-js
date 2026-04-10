import {StripeElementBase} from './base';
import {StripeError} from '../stripe';

export type StripeContactDetailsElement = StripeElementBase & {
  /**
   * The change event is triggered when the `Element`'s value changes.
   */
  on(
    eventType: 'change',
    handler: (event: StripeContactDetailsElementChangeEvent) => any
  ): StripeContactDetailsElement;
  once(
    eventType: 'change',
    handler: (event: StripeContactDetailsElementChangeEvent) => any
  ): StripeContactDetailsElement;
  off(
    eventType: 'change',
    handler?: (event: StripeContactDetailsElementChangeEvent) => any
  ): StripeContactDetailsElement;

  /**
   * Triggered when the element is fully rendered and can accept `element.focus` calls.
   */
  on(
    eventType: 'ready',
    handler: (event: {elementType: 'contactDetails'}) => any
  ): StripeContactDetailsElement;
  once(
    eventType: 'ready',
    handler: (event: {elementType: 'contactDetails'}) => any
  ): StripeContactDetailsElement;
  off(
    eventType: 'ready',
    handler?: (event: {elementType: 'contactDetails'}) => any
  ): StripeContactDetailsElement;

  /**
   * Triggered when the element gains focus.
   */
  on(
    eventType: 'focus',
    handler: (event: {elementType: 'contactDetails'}) => any
  ): StripeContactDetailsElement;
  once(
    eventType: 'focus',
    handler: (event: {elementType: 'contactDetails'}) => any
  ): StripeContactDetailsElement;
  off(
    eventType: 'focus',
    handler?: (event: {elementType: 'contactDetails'}) => any
  ): StripeContactDetailsElement;

  /**
   * Triggered when the element loses focus.
   */
  on(
    eventType: 'blur',
    handler: (event: {elementType: 'contactDetails'}) => any
  ): StripeContactDetailsElement;
  once(
    eventType: 'blur',
    handler: (event: {elementType: 'contactDetails'}) => any
  ): StripeContactDetailsElement;
  off(
    eventType: 'blur',
    handler?: (event: {elementType: 'contactDetails'}) => any
  ): StripeContactDetailsElement;

  /**
   * Triggered when the escape key is pressed within the element.
   */
  on(
    eventType: 'escape',
    handler: (event: {elementType: 'contactDetails'}) => any
  ): StripeContactDetailsElement;
  once(
    eventType: 'escape',
    handler: (event: {elementType: 'contactDetails'}) => any
  ): StripeContactDetailsElement;
  off(
    eventType: 'escape',
    handler?: (event: {elementType: 'contactDetails'}) => any
  ): StripeContactDetailsElement;

  /**
   * Triggered when the element fails to load.
   */
  on(
    eventType: 'loaderror',
    handler: (event: {elementType: 'contactDetails'; error: StripeError}) => any
  ): StripeContactDetailsElement;
  once(
    eventType: 'loaderror',
    handler: (event: {elementType: 'contactDetails'; error: StripeError}) => any
  ): StripeContactDetailsElement;
  off(
    eventType: 'loaderror',
    handler?: (event: {
      elementType: 'contactDetails';
      error: StripeError;
    }) => any
  ): StripeContactDetailsElement;

  /**
   * Triggered when the loader UI is mounted to the DOM and ready to be displayed.
   */
  on(
    eventType: 'loaderstart',
    handler: (event: {elementType: 'contactDetails'}) => any
  ): StripeContactDetailsElement;
  once(
    eventType: 'loaderstart',
    handler: (event: {elementType: 'contactDetails'}) => any
  ): StripeContactDetailsElement;
  off(
    eventType: 'loaderstart',
    handler?: (event: {elementType: 'contactDetails'}) => any
  ): StripeContactDetailsElement;
};

export interface StripeContactDetailsElementOptions {
  /**
   * Default values for ContactDetailsElement fields
   */
  defaultValues?: {
    email: string;
  };
}

export interface StripeContactDetailsElementChangeEvent {
  /**
   * The type of element that emitted this event.
   */
  elementType: 'contactDetails';

  /**
   * Whether or not the ContactDetails Element is currently empty.
   */
  empty: boolean;

  /**
   * Whether or not the ContactDetails Element is complete.
   */
  complete: boolean;

  /**
   * An object containing the current email.
   */
  value: {
    email: string;
  };
}
