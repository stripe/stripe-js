import {StripeError} from '../stripe';
import {StripeElementBase} from './base';

export type StripePaymentFormElement = StripeElementBase & {
  /**
   * Triggered when the element is fully rendered and can accept `element.focus` calls.
   */
  on(
    eventType: 'ready',
    handler: (event: {elementType: 'paymentForm'}) => any
  ): StripePaymentFormElement;
  once(
    eventType: 'ready',
    handler: (event: {elementType: 'paymentForm'}) => any
  ): StripePaymentFormElement;
  off(
    eventType: 'ready',
    handler?: (event: {elementType: 'paymentForm'}) => any
  ): StripePaymentFormElement;

  /**
   * Triggered when the element fails to load.
   */
  on(
    eventType: 'loaderror',
    handler: (event: {elementType: 'paymentForm'; error: StripeError}) => any
  ): StripePaymentFormElement;
  once(
    eventType: 'loaderror',
    handler: (event: {elementType: 'paymentForm'; error: StripeError}) => any
  ): StripePaymentFormElement;
  off(
    eventType: 'loaderror',
    handler?: (event: {elementType: 'paymentForm'; error: StripeError}) => any
  ): StripePaymentFormElement;
};
