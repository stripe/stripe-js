import {StripeElementBase} from './base';
import {StripeError} from '../stripe';

export type StripeLinkSignupElement = StripeElementBase & {
  /**
   * Triggered when the element is fully rendered and can accept `element.focus` calls.
   */
  on(
    eventType: 'ready',
    handler: (event: {elementType: 'linkSignup'}) => any
  ): StripeLinkSignupElement;
  once(
    eventType: 'ready',
    handler: (event: {elementType: 'linkSignup'}) => any
  ): StripeLinkSignupElement;
  off(
    eventType: 'ready',
    handler?: (event: {elementType: 'linkSignup'}) => any
  ): StripeLinkSignupElement;

  /**
   * Triggered when the element gains focus.
   */
  on(
    eventType: 'focus',
    handler: (event: {elementType: 'linkSignup'}) => any
  ): StripeLinkSignupElement;
  once(
    eventType: 'focus',
    handler: (event: {elementType: 'linkSignup'}) => any
  ): StripeLinkSignupElement;
  off(
    eventType: 'focus',
    handler?: (event: {elementType: 'linkSignup'}) => any
  ): StripeLinkSignupElement;

  /**
   * Triggered when the element loses focus.
   */
  on(
    eventType: 'blur',
    handler: (event: {elementType: 'linkSignup'}) => any
  ): StripeLinkSignupElement;
  once(
    eventType: 'blur',
    handler: (event: {elementType: 'linkSignup'}) => any
  ): StripeLinkSignupElement;
  off(
    eventType: 'blur',
    handler?: (event: {elementType: 'linkSignup'}) => any
  ): StripeLinkSignupElement;

  /**
   * Triggered when the escape key is pressed within the element.
   */
  on(
    eventType: 'escape',
    handler: (event: {elementType: 'linkSignup'}) => any
  ): StripeLinkSignupElement;
  once(
    eventType: 'escape',
    handler: (event: {elementType: 'linkSignup'}) => any
  ): StripeLinkSignupElement;
  off(
    eventType: 'escape',
    handler?: (event: {elementType: 'linkSignup'}) => any
  ): StripeLinkSignupElement;

  /**
   * Triggered when the loader UI is mounted to the DOM and ready to be displayed.
   */
  on(
    eventType: 'loaderstart',
    handler: (event: {elementType: 'linkSignup'}) => any
  ): StripeLinkSignupElement;
  once(
    eventType: 'loaderstart',
    handler: (event: {elementType: 'linkSignup'}) => any
  ): StripeLinkSignupElement;
  off(
    eventType: 'loaderstart',
    handler?: (event: {elementType: 'linkSignup'}) => any
  ): StripeLinkSignupElement;

  /**
   * Triggered when the element fails to load.
   */
  on(
    eventType: 'loaderror',
    handler: (event: {elementType: 'linkSignup'; error: StripeError}) => any
  ): StripeLinkSignupElement;
  once(
    eventType: 'loaderror',
    handler: (event: {elementType: 'linkSignup'; error: StripeError}) => any
  ): StripeLinkSignupElement;
  off(
    eventType: 'loaderror',
    handler?: (event: {elementType: 'linkSignup'; error: StripeError}) => any
  ): StripeLinkSignupElement;
};

export interface StripeLinkSignupElementOptions {
  defaultValues?: {
    email?: string;
    name?: string;
    phone?: string;
  };
}
