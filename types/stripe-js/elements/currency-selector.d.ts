import {StripeElementBase} from './base';
import {StripeError} from '../stripe';

export type StripeCurrencySelectorElement = StripeElementBase & {
  /**
   * Triggered when the element is fully rendered and can accept `element.focus` calls.
   */
  on(
    eventType: 'ready',
    handler: (event: {elementType: 'currencySelector'}) => any
  ): StripeCurrencySelectorElement;
  once(
    eventType: 'ready',
    handler: (event: {elementType: 'currencySelector'}) => any
  ): StripeCurrencySelectorElement;
  off(
    eventType: 'ready',
    handler?: (event: {elementType: 'currencySelector'}) => any
  ): StripeCurrencySelectorElement;

  /**
   * Triggered when the element gains focus.
   */
  on(
    eventType: 'focus',
    handler: (event: {elementType: 'currencySelector'}) => any
  ): StripeCurrencySelectorElement;
  once(
    eventType: 'focus',
    handler: (event: {elementType: 'currencySelector'}) => any
  ): StripeCurrencySelectorElement;
  off(
    eventType: 'focus',
    handler?: (event: {elementType: 'currencySelector'}) => any
  ): StripeCurrencySelectorElement;

  /**
   * Triggered when the element loses focus.
   */
  on(
    eventType: 'blur',
    handler: (event: {elementType: 'currencySelector'}) => any
  ): StripeCurrencySelectorElement;
  once(
    eventType: 'blur',
    handler: (event: {elementType: 'currencySelector'}) => any
  ): StripeCurrencySelectorElement;
  off(
    eventType: 'blur',
    handler?: (event: {elementType: 'currencySelector'}) => any
  ): StripeCurrencySelectorElement;

  /**
   * Triggered when the escape key is pressed within the element.
   */
  on(
    eventType: 'escape',
    handler: (event: {elementType: 'currencySelector'}) => any
  ): StripeCurrencySelectorElement;
  once(
    eventType: 'escape',
    handler: (event: {elementType: 'currencySelector'}) => any
  ): StripeCurrencySelectorElement;
  off(
    eventType: 'escape',
    handler?: (event: {elementType: 'currencySelector'}) => any
  ): StripeCurrencySelectorElement;

  /**
   * Triggered when the element fails to load.
   */
  on(
    eventType: 'loaderror',
    handler: (event: {
      elementType: 'currencySelector';
      error: StripeError;
    }) => any
  ): StripeCurrencySelectorElement;
  once(
    eventType: 'loaderror',
    handler: (event: {
      elementType: 'currencySelector';
      error: StripeError;
    }) => any
  ): StripeCurrencySelectorElement;
  off(
    eventType: 'loaderror',
    handler?: (event: {
      elementType: 'currencySelector';
      error: StripeError;
    }) => any
  ): StripeCurrencySelectorElement;
};
