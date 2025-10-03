import {
  StripeAddressElement,
  StripeAddressElementOptions,
  StripeCurrencySelectorElement,
  StripeShippingAddressElement,
  StripeShippingAddressElementOptions,
  StripePaymentRequestButtonElement,
  StripePaymentRequestButtonElementOptions,
  StripePaymentElement,
  StripePaymentElementOptions,
  StripeLinkAuthenticationElement,
  StripeLinkAuthenticationElementOptions,
  StripeIbanElement,
  StripeIbanElementOptions,
  StripeCardCvcElement,
  StripeCardCvcElementOptions,
  StripeCardExpiryElement,
  StripeCardExpiryElementOptions,
  StripeCardNumberElement,
  StripeCardNumberElementOptions,
  StripeCardElement,
  StripeCardElementOptions,
  StripeAuBankAccountElement,
  StripePaymentMethodMessagingElementOptions,
  StripePaymentMethodMessagingElement,
  StripeAuBankAccountElementOptions,
  StripeIssuingCardNumberDisplayElement,
  StripeIssuingCardNumberDisplayElementOptions,
  StripeIssuingCardCvcDisplayElement,
  StripeIssuingCardCvcDisplayElementOptions,
  StripeIssuingCardExpiryDisplayElement,
  StripeIssuingCardExpiryDisplayElementOptions,
  StripeIssuingCardPinDisplayElement,
  StripeIssuingCardPinDisplayElementOptions,
  StripeIssuingCardCopyButtonElement,
  StripeIssuingCardCopyButtonElementOptions,
  StripeExpressCheckoutElement,
  StripeExpressCheckoutElementOptions,
  StripeAddressElementGetElementOptions,
  StripeTaxIdElement,
} from './elements';
import {StripeError} from './stripe';

export interface StripeElements {
  /**
   * Updates the options that `Elements` was initialized with.
   * Updates are shallowly merged into the existing configuration.
   */
  update(options: StripeElementsUpdateOptions): void;

  /**
   * Triggered when the call to elements.update() is complete.
   */
  on(eventType: 'update-end', handler: () => void): void;

  /**
   * Fetches updates from the associated PaymentIntent or SetupIntent on an existing
   * instance of Elements, and reflects these updates in the Payment Element.
   */
  fetchUpdates(): Promise<{error?: {message: string; status?: string}}>;

  /**
   * Before confirming payment, call elements.submit() to validate the state of the
   * Payment Element and collect any data required for wallets.
   */
  submit(): Promise<
    | {error?: StripeError; selectedPaymentMethod?: undefined}
    | {selectedPaymentMethod: string; error?: undefined}
  >;

  /////////////////////////////
  /// address
  /////////////////////////////

  /**
   * Creates an `AddressElement`.
   */
  create(
    elementType: 'address',
    options: StripeAddressElementOptions
  ): StripeAddressElement;

  /**
   * Looks up a previously created `Element` by its type.
   */
  getElement(
    elementType: 'address',
    options?: StripeAddressElementGetElementOptions
  ): StripeAddressElement | null;

  /////////////////////////////
  /// paymentMethodMessaging
  /////////////////////////////

  /**
   * Creates an `paymentMethodMessagingElement`.
   */
  create(
    elementType: 'paymentMethodMessaging',
    options: StripePaymentMethodMessagingElementOptions
  ): StripePaymentMethodMessagingElement;

  /**
   * Looks up a previously created `Element` by its type.
   */
  getElement(
    elementType: 'paymentMethodMessaging'
  ): StripePaymentMethodMessagingElement | null;

  /////////////////////////////
  /// auBankAccount
  /////////////////////////////

  /**
   * Requires beta access:
   * Contact [Stripe support](https://support.stripe.com/) for more information.
   *
   * Creates an `AuBankAccountElement`.
   */
  create(
    elementType: 'auBankAccount',
    options?: StripeAuBankAccountElementOptions
  ): StripeAuBankAccountElement;

  /**
   * Requires beta access:
   * Contact [Stripe support](https://support.stripe.com/) for more information.
   *
   * Looks up a previously created `Element` by its type.
   */
  getElement(elementType: 'auBankAccount'): StripeAuBankAccountElement | null;

  /////////////////////////////
  /// card
  /////////////////////////////

  /**
   * Creates a `CardElement`.
   */
  create(
    elementType: 'card',
    options?: StripeCardElementOptions
  ): StripeCardElement;

  /**
   * Looks up a previously created `Element` by its type.
   */
  getElement(elementType: 'card'): StripeCardElement | null;

  /////////////////////////////
  /// cardNumber
  /////////////////////////////

  /**
   * Creates a `CardNumberElement`.
   */
  create(
    elementType: 'cardNumber',
    options?: StripeCardNumberElementOptions
  ): StripeCardNumberElement;

  /**
   * Looks up a previously created `Element` by its type.
   */
  getElement(elementType: 'cardNumber'): StripeCardNumberElement | null;

  /////////////////////////////
  /// cardExpiry
  /////////////////////////////

  /**
   * Creates a `CardExpiryElement`.
   */
  create(
    elementType: 'cardExpiry',
    options?: StripeCardExpiryElementOptions
  ): StripeCardExpiryElement;

  /**
   * Looks up a previously created `Element` by its type.
   */
  getElement(elementType: 'cardExpiry'): StripeCardExpiryElement | null;

  /////////////////////////////
  /// cardCvc
  /////////////////////////////

  /**
   * Creates a `CardCvcElement`.
   */
  create(
    elementType: 'cardCvc',
    options?: StripeCardCvcElementOptions
  ): StripeCardCvcElement;

  /**
   * Looks up a previously created `Element` by its type.
   */
  getElement(elementType: 'cardCvc'): StripeCardCvcElement | null;

  /////////////////////////////
  /// iban
  /////////////////////////////

  /**
   * Creates an `IbanElement`.
   */
  create(
    elementType: 'iban',
    options?: StripeIbanElementOptions
  ): StripeIbanElement;

  /**
   * Looks up a previously created `Element` by its type.
   */
  getElement(elementType: 'iban'): StripeIbanElement | null;

  /////////////////////////////
  /// linkAuthentication
  /////////////////////////////

  /**
   * Creates a `LinkAuthenticationElement`.
   */
  create(
    elementType: 'linkAuthentication',
    options?: StripeLinkAuthenticationElementOptions
  ): StripeLinkAuthenticationElement;

  /**
   * Looks up a previously created `Element` by its type.
   */
  getElement(
    elementType: 'linkAuthentication'
  ): StripeLinkAuthenticationElement | null;

  /////////////////////////////
  /// expressCheckout
  /////////////////////////////

  /**
   * Creates an `ExpressCheckoutElement`.
   */
  create(
    elementType: 'expressCheckout',
    options?: StripeExpressCheckoutElementOptions
  ): StripeExpressCheckoutElement;

  /**
   * Looks up a previously created `Element` by its type.
   */
  getElement(
    elementType: 'expressCheckout'
  ): StripeExpressCheckoutElement | null;

  /////////////////////////////
  /// payment
  /////////////////////////////

  /**
   * Creates a `PaymentElement`.
   *
   * @docs https://stripe.com/docs/payments/payment-element
   */
  create(
    elementType: 'payment',
    options?: StripePaymentElementOptions
  ): StripePaymentElement;

  /**
   * Looks up a previously created `Element` by its type.
   */
  getElement(elementType: 'payment'): StripePaymentElement | null;

  /////////////////////////////
  /// paymentRequestButton
  /////////////////////////////

  /**
   * Creates a `PaymentRequestButtonElement`.
   *
   * @docs https://stripe.com/docs/stripe-js/elements/payment-request-button
   */
  create(
    elementType: 'paymentRequestButton',
    options: StripePaymentRequestButtonElementOptions
  ): StripePaymentRequestButtonElement;

  /**
   * Looks up a previously created `Element` by its type.
   */
  getElement(
    elementType: 'paymentRequestButton'
  ): StripePaymentRequestButtonElement | null;

  /////////////////////////////
  /// shippingAddress
  /////////////////////////////

  /**
   * @deprecated
   * Use `Address` element instead.
   *
   * Creates a `ShippingAddressElement`.
   */
  create(
    elementType: 'shippingAddress',
    options?: StripeShippingAddressElementOptions
  ): StripeShippingAddressElement;

  /**
   * @deprecated
   * Use `Address` element instead.
   *
   * Looks up a previously created `Element` by its type.
   */
  getElement(
    elementType: 'shippingAddress'
  ): StripeShippingAddressElement | null;

  /////////////////////////////
  /// issuing
  /////////////////////////////

  /**
   * Creates an `issuingCardNumberDisplay` Element
   *
   * @docs https://stripe.com/docs/js/issuing_elements/create?type=issuingCardNumberDisplay
   */
  create(
    elementType: 'issuingCardNumberDisplay',
    options: StripeIssuingCardNumberDisplayElementOptions
  ): StripeIssuingCardNumberDisplayElement;

  /**
   * Creates an `issuingCardCvcDisplay` Element
   *
   * @docs https://stripe.com/docs/js/issuing_elements/create?type=issuingCardCvcDisplay
   */
  create(
    elementType: 'issuingCardCvcDisplay',
    options: StripeIssuingCardCvcDisplayElementOptions
  ): StripeIssuingCardCvcDisplayElement;

  /**
   * Creates an `issuingCardExpiryDisplay` Element
   *
   * @docs https://stripe.com/docs/js/issuing_elements/create?type=issuingCardExpiryDisplay
   */
  create(
    elementType: 'issuingCardExpiryDisplay',
    options: StripeIssuingCardExpiryDisplayElementOptions
  ): StripeIssuingCardExpiryDisplayElement;

  /**
   * Creates an `issuingCardPinDisplay` Element
   *
   * @docs https://stripe.com/docs/js/issuing_elements/create?type=issuingCardPinDisplay
   */
  create(
    elementType: 'issuingCardPinDisplay',
    options: StripeIssuingCardPinDisplayElementOptions
  ): StripeIssuingCardPinDisplayElement;

  /**
   * Creates an `issuingCardCopyButton` Element
   *
   * @docs https://stripe.com/docs/js/issuing_elements/create?type=issuingCardCopyButton
   */
  create(
    elementType: 'issuingCardCopyButton',
    options: StripeIssuingCardCopyButtonElementOptions
  ): StripeIssuingCardCopyButtonElement;
}

export type StripeElementType =
  | 'address'
  | 'auBankAccount'
  | 'card'
  | 'cardNumber'
  | 'cardExpiry'
  | 'cardCvc'
  | 'currencySelector'
  | 'expressCheckout'
  | 'iban'
  | 'payment'
  | 'paymentMethodMessaging'
  | 'paymentRequestButton'
  | 'linkAuthentication'
  | 'shippingAddress'
  | 'issuingCardNumberDisplay'
  | 'issuingCardCvcDisplay'
  | 'issuingCardExpiryDisplay'
  | 'issuingCardPinDisplay'
  | 'issuingCardCopyButton'
  | 'taxId'
  | 'issuingAddToWalletButton';

export type StripeElement =
  | StripeAddressElement
  | StripeAuBankAccountElement
  | StripeCardElement
  | StripeCardNumberElement
  | StripeCardExpiryElement
  | StripeCardCvcElement
  | StripeIbanElement
  | StripeCurrencySelectorElement
  | StripeExpressCheckoutElement
  | StripePaymentElement
  | StripePaymentMethodMessagingElement
  | StripePaymentRequestButtonElement
  | StripeIssuingCardNumberDisplayElement
  | StripeIssuingCardCvcDisplayElement
  | StripeIssuingCardExpiryDisplayElement
  | StripeIssuingCardPinDisplayElement
  | StripeIssuingCardCopyButtonElement
  | StripeShippingAddressElement
  | StripeTaxIdElement;

export type StripeElementLocale =
  | 'auto'
  | 'ar'
  | 'bg'
  | 'cs'
  | 'da'
  | 'de'
  | 'el'
  | 'en'
  | 'en-AU'
  | 'en-CA'
  | 'en-NZ'
  | 'en-GB'
  | 'es'
  | 'es-ES'
  | 'es-419'
  | 'et'
  | 'fi'
  | 'fil'
  | 'fr'
  | 'fr-CA'
  | 'fr-FR'
  | 'he'
  | 'hu'
  | 'hr'
  | 'id'
  | 'it'
  | 'it-IT'
  | 'ja'
  | 'ko'
  | 'lt'
  | 'lv'
  | 'ms'
  | 'mt'
  | 'nb'
  | 'nl'
  | 'no'
  | 'pl'
  | 'pt'
  | 'pt-BR'
  | 'ro'
  | 'ru'
  | 'sk'
  | 'sl'
  | 'sv'
  | 'th'
  | 'tr'
  | 'vi'
  | 'zh'
  | 'zh-HK'
  | 'zh-TW';

export type CardNetworkBrand =
  | 'accel'
  | 'amex'
  | 'carnet'
  | 'cartes_bancaires'
  | 'diners'
  | 'discover'
  | 'eftpos_au'
  | 'elo'
  | 'girocard'
  | 'interac'
  | 'jcb'
  | 'mastercard'
  | 'nyce'
  | 'pulse'
  | 'rupay'
  | 'star'
  | 'unionpay'
  | 'visa';

type PaymentMethodOptions = {
  card?: {require_cvc_recollection?: boolean};
  us_bank_account?: {
    financial_connections?: {
      permissions?: Array<
        'balances' | 'ownership' | 'payment_method' | 'transactions'
      >;
    };
    verification_method?: 'automatic' | 'instant';
  };
};

/**
 * Options to create an `Elements` instance with.
 */
interface BaseStripeElementsOptions {
  /**
   * An array of custom fonts, which elements created from the `Elements` object can use.
   */
  fonts?: Array<CssFontSource | CustomFontSource>;

  /**
   * The [IETF language tag](https://en.wikipedia.org/wiki/IETF_language_tag) of the locale to display placeholders and error strings in.
   * Default is `auto` (Stripe detects the locale of the browser).
   * Setting the locale does not affect the behavior of postal code validation—a valid postal code for the billing country of the card is still required.
   */
  locale?: StripeElementLocale;

  /**
   * Match the Payment Element with the design of your site with the appearance option.
   * The layout of the Payment Element stays consistent, but you can modify colors, fonts, borders, padding, and more.
   *
   * @docs https://stripe.com/docs/stripe-js/appearance-api
   */
  appearance?: Appearance;

  /**
   * Display skeleton loader UI while waiting for Elements to be fully loaded, after they are mounted.
   * Supported for the `payment`, `shippingAddress`, and `linkAuthentication` Elements.
   * Default is `'auto'` (Stripe determines if a loader UI should be shown).
   */
  loader?: 'auto' | 'always' | 'never';

  /**
   * Requires beta access:
   * Contact [Stripe support](https://support.stripe.com/) for more information.
   *
   * Display saved PaymentMethods and Customer information.
   * Supported for the `payment`, `shippingAddress`, and `linkAuthentication` Elements.
   */
  customerOptions?: CustomerOptions;

  /**
   * Display saved PaymentMethods and Customer information.
   */
  customerSessionClientSecret?: string;

  /**
   * Display Custom Payment Methods in the Payment Element that you are already registered with.
   *
   * @docs https://docs.stripe.com/js/elements_object/create#stripe_elements-options-customPaymentMethods
   */
  customPaymentMethods?: CustomPaymentMethod[];

  /**
   * The syncAddressCheckbox parameter configures which Address Element to show the checkbox above when using 2 Address Elements.
   *
   * Default is 'billing'
   *
   * @docs https://docs.stripe.com/js/elements_object/create#stripe_elements-options-syncAddressCheckbox
   */
  syncAddressCheckbox?: 'billing' | 'shipping' | 'none';
}

export interface StripeElementsOptionsClientSecret
  extends BaseStripeElementsOptions {
  /**
   * The client secret for a PaymentIntent or SetupIntent used by the Payment Element.
   *
   * @docs https://stripe.com/docs/api/payment_intents/object#payment_intent_object-client_secret
   */
  clientSecret?: string;

  /**
   * Either use mode or clientSecret when creating an Elements group
   */
  mode?: never;

  /**
   * Influences available payment methods when creating SetupIntents with automatic_payment_methods.
   * Payment Element renders the payment methods enabled in the Stripe Dashboard that support the provided currency.
   *
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency?: string;
}

interface StripeElementsOptionsModeBase extends BaseStripeElementsOptions {
  /**
   * Indicates that you intend to make future payments with this PaymentIntent’s payment method.
   *
   * @docs https://stripe.com/docs/api/payment_intents/create#create_payment_intent-setup_future_usage
   */
  setupFutureUsage?: 'off_session' | 'on_session' | null;

  /**
   * Indicates that you intend to make future payments with this PaymentIntent’s payment method.
   *
   * @docs https://stripe.com/docs/api/payment_intents/create#create_payment_intent-setup_future_usage
   */
  setup_future_usage?: 'off_session' | 'on_session' | null;

  /**
   * Controls when the funds will be captured from the customer’s account.
   *
   * @docs https://stripe.com/docs/api/payment_intents/create#create_payment_intent-capture_method
   */
  captureMethod?: 'manual' | 'automatic' | 'automatic_async';

  /**
   * Controls when the funds will be captured from the customer’s account.
   *
   * @docs https://stripe.com/docs/api/payment_intents/create#create_payment_intent-capture_method
   */
  capture_method?: 'manual' | 'automatic' | 'automatic_async';

  /**
   * The Stripe account ID which is the business of record.
   *
   * @docs https://stripe.com/docs/js/elements_object/create_without_intent#stripe_elements_no_intent-options-onBehalfOf
   */
  onBehalfOf?: string;

  /**
   * The Stripe account ID which is the business of record.
   *
   * @docs https://stripe.com/docs/js/elements_object/create_without_intent#stripe_elements_no_intent-options-onBehalfOf
   */
  on_behalf_of?: string;

  /**
   * Instead of using automatic payment methods, declare specific payment methods to enable.
   *
   * @docs https://stripe.com/docs/payments/payment-methods/overview
   */
  paymentMethodTypes?: string[];

  /**
   * Instead of using automatic payment methods, declare specific payment methods to enable.
   *
   * @docs https://stripe.com/docs/payments/payment-methods/overview
   */
  payment_method_types?: string[];

  /**
   * The list of payment method types to exclude from use with this payment.
   *
   * @docs https://stripe.com/docs/payments/payment-methods/overview
   */
  excludedPaymentMethodTypes?: string[];

  /**
   * The list of payment method types to allow for use with this payment. From this list, Stripe will automatically render the relevant payment methods for this payment.
   *
   * @docs https://stripe.com/docs/payments/payment-methods/overview
   */
  allowedPaymentMethodTypes?: string[];

  /**
   * When using automatic payment methods (omitting paymentMethodTypes), provide a
   * payment method configuration ID for deriving payment methods.
   *
   * @docs https://stripe.com/docs/connect/payment-method-configurations
   */
  paymentMethodConfiguration?: string;

  /**
   * When using automatic payment methods (omitting payment_method_types), provide a
   * payment method configuration ID for deriving payment methods.
   *
   * @docs https://stripe.com/docs/connect/payment-method-configurations
   */
  payment_method_configuration?: string;

  /**
   * Allows PaymentMethods to be created from the Elements instance.
   */
  paymentMethodCreation?: 'manual';

  /**
   * Additional payment-method-specific options for configuring Payment Element behavior.
   *
   * @docs https://stripe.com/docs/js/elements_object/create_without_intent#stripe_elements_no_intent-options-paymentMethodOptions
   */
  paymentMethodOptions?: PaymentMethodOptions;

  /**
   * Additional payment-method-specific options for configuring Payment Element behavior.
   *
   * @docs https://stripe.com/docs/js/elements_object/create_without_intent#stripe_elements_no_intent-options-paymentMethodOptions
   */
  payment_method_options?: PaymentMethodOptions;

  /**
   * Either use mode or clientSecret when creating an Elements group
   */
  clientSecret?: never;

  /**
   * The external payment methods to be displayed in the Payment Element that you are already integrated with.
   *
   * @docs https://stripe.com/docs/js/elements_object/create#stripe_elements-options-externalPaymentMethodTypes
   */
  externalPaymentMethodTypes?: string[];
}

type StripeElementsOptionsModePayment = StripeElementsOptionsModeBase & {
  mode: 'payment';

  /**
   * The amount to be charged. Shown in Apple Pay, Google Pay, or Buy now pay later UIs, and influences available payment methods.
   */
  amount: number;
  /**
   * Three character currency code (e.g., usd).
   */
  currency: string;
};

type StripeElementsOptionsModeSubscription = StripeElementsOptionsModeBase & {
  mode: 'subscription';

  /**
   * The amount to be charged. Shown in Apple Pay, Google Pay, or Buy now pay later UIs, and influences available payment methods.
   */
  amount: number;
  /**
   * Three character currency code (e.g., usd).
   */
  currency: string;
};

type StripeElementsOptionsModeSetup = StripeElementsOptionsModeBase & {
  mode: 'setup';
  /**
   * Three character currency code (e.g., usd).
   *
   * Required when creating SetupIntents with dynamic payment methods.
   * Payment Element renders the payment methods enabled in the Stripe Dashboard that support the provided currency.
   */
  currency?: string;
};

export type StripeElementsOptionsMode =
  | StripeElementsOptionsModePayment
  | StripeElementsOptionsModeSubscription
  | StripeElementsOptionsModeSetup;

export type StripeElementsOptions =
  | StripeElementsOptionsClientSecret
  | StripeElementsOptionsMode;

/*
 * Updatable options for an `Elements` instance
 */
export interface StripeElementsUpdateOptions {
  /**
   * The [IETF language tag](https://en.wikipedia.org/wiki/IETF_language_tag) of the locale to display placeholders and error strings in.
   * Default is `auto` (Stripe detects the locale of the browser).
   * Setting the locale does not affect the behavior of postal code validation—a valid postal code for the billing country of the card is still required.
   */
  locale?: StripeElementLocale;

  /**
   * An array of custom fonts to update, which elements created from the `Elements` object can use.
   */
  fonts?: Array<CssFontSource | CustomFontSource>;

  /**
   * Match the design of your site with the appearance option.
   * The layout of each Element stays consistent, but you can modify colors, fonts, borders, padding, and more.
   *
   * @docs https://stripe.com/docs/stripe-js/appearance-api
   */
  appearance?: Appearance;

  /**
   * Whether the Payment Element will be used to create a PaymentIntent, SetupIntent, or Subscription.
   */
  mode?: 'payment' | 'setup' | 'subscription';

  /**
   * Three character currency code (e.g., usd).
   */
  currency?: string;

  /**
   * The amount to be charged. Shown in Apple Pay, Google Pay, or Buy now pay later UIs, and influences available payment methods.
   */
  amount?: number;

  /**
   * Indicates that you intend to make future payments with this PaymentIntent’s payment method.
   *
   * @docs https://stripe.com/docs/api/payment_intents/update#update_payment_intent-setup_future_usage
   */
  setupFutureUsage?: 'off_session' | 'on_session' | null;

  /**
   * Indicates that you intend to make future payments with this PaymentIntent’s payment method.
   *
   * @docs https://stripe.com/docs/api/payment_intents/update#update_payment_intent-setup_future_usage
   */
  setup_future_usage?: 'off_session' | 'on_session' | null;

  /**
   * Controls when the funds will be captured from the customer’s account.
   *
   * @docs https://stripe.com/docs/api/payment_intents/create#create_payment_intent-capture_method
   */
  captureMethod?: 'manual' | 'automatic' | 'automatic_async';

  /**
   * Controls when the funds will be captured from the customer’s account.
   *
   * @docs https://stripe.com/docs/api/payment_intents/create#create_payment_intent-capture_method
   */
  capture_method?: 'manual' | 'automatic' | 'automatic_async';

  /**
   * Instead of using automatic payment methods, declare specific payment methods to enable.
   *
   * @docs https://stripe.com/docs/payments/payment-methods/overview
   */
  payment_method_types?: string[];

  /**
   * Instead of using automatic payment methods, declare specific payment methods to enable.
   *
   * @docs https://stripe.com/docs/payments/payment-methods/overview
   */
  paymentMethodTypes?: string[];

  /**
   * The list of payment method types to exclude from use with this payment.
   *
   * @docs https://stripe.com/docs/payments/payment-methods/overview
   */
  excludedPaymentMethodTypes?: string[];

  /**
   * The list of payment method types to allow for use with this payment. From this list, Stripe will automatically render the relevant payment methods for this payment.
   *
   * @docs https://stripe.com/docs/payments/payment-methods/overview
   */
  allowedPaymentMethodTypes?: string[];

  /**
   * The Stripe account ID which is the business of record.
   *
   * @docs https://stripe.com/docs/js/elements_object/create_without_intent#stripe_elements_no_intent-options-onBehalfOf
   */
  onBehalfOf?: string;

  /**
   * The Stripe account ID which is the business of record.
   *
   * @docs https://stripe.com/docs/js/elements_object/create_without_intent#stripe_elements_no_intent-options-onBehalfOf
   */
  on_behalf_of?: string;

  /**
   * Display saved PaymentMethods and Customer information.
   */
  customerSessionClientSecret?: string;

  /**
   * Display Custom Payment Methods in the Payment Element that you are already registered with.
   *
   * @docs https://docs.stripe.com/js/elements_object/update#elements_update-options-customPaymentMethods
   */
  customPaymentMethods?: CustomPaymentMethod[];
}

/*
 * Use a `CssFontSource` to pass custom fonts via a stylesheet URL when creating an `Elements` object.
 */
export interface CssFontSource {
  /**
   * A relative or absolute URL pointing to a CSS file with [@font-face](https://developer.mozilla.org/en/docs/Web/CSS/@font-face) definitions, for example:
   *
   *     https://fonts.googleapis.com/css?family=Open+Sans
   *
   * Note that if you are using a [content security policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) (CSP), [additional directives](https://stripe.com/docs/security#content-security-policy) may be necessary.
   */
  cssSrc: string;
}

/*
 * Use a `CustomFontSource` to pass custom fonts when creating an `Elements` object.
 */
export interface CustomFontSource {
  /**
   * The name to give the font
   */
  family: string;

  /**
   * A valid [src](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/src) value pointing to your custom font file.
   * This is usually (though not always) a link to a file with a `.woff` , `.otf`, or `.svg` suffix.
   */
  src: string;

  /**
   * A valid [font-display](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display) value.
   */
  display?: string;

  /**
   * Defaults to `normal`.
   */
  style?: 'normal' | 'italic' | 'oblique';

  /**
   * A valid [unicode-range](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/unicode-range) value.
   */
  unicodeRange?: string;

  /**
   * A valid [font-weight](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight), as a string.
   */
  weight?: string;
}

/*
 * @docs https://stripe.com/docs/stripe-js/appearance-api
 */
export interface Appearance {
  /**
   * Disables animations throughout Elements. Defaults to false.
   */
  disableAnimations?: boolean;

  /**
   * The theme to use for the Elements. Defaults to 'stripe'.
   */
  theme?: 'stripe' | 'night' | 'flat';

  variables?: {
    // General font styles
    fontFamily?: string;
    fontSmooth?: string;
    fontVariantLigatures?: string;
    fontVariationSettings?: string;
    fontLineHeight?: string;

    // Font sizes
    fontSizeBase?: string;
    fontSizeSm?: string;
    fontSizeXs?: string;
    fontSize2Xs?: string;
    fontSize3Xs?: string;
    fontSizeLg?: string;
    fontSizeXl?: string;

    // Font weights
    fontWeightLight?: string;
    fontWeightNormal?: string;
    fontWeightMedium?: string;
    fontWeightBold?: string;

    // Spacing
    spacingUnit?: string;
    gridRowSpacing?: string;
    gridColumnSpacing?: string;
    tabSpacing?: string;
    accordionItemSpacing?: string;
    /** @deprecated Use gridRowSpacing instead. */
    spacingGridRow?: string;
    /** @deprecated Use gridColumnSpacing instead. */
    spacingGridColumn?: string;
    /** @deprecated Use tabSpacing instead. */
    spacingTab?: string;
    /** @deprecated Use accordionItemSpacing instead. */
    spacingAccordionItem?: string;

    // Colors
    colorPrimary?: string;
    colorBackground?: string;
    colorText?: string;
    colorSuccess?: string;
    colorDanger?: string;
    colorWarning?: string;

    // Text variations
    colorTextSecondary?: string;
    colorTextPlaceholder?: string;

    // Accessible text
    accessibleColorOnColorPrimary?: string;
    accessibleColorOnColorBackground?: string;
    accessibleColorOnColorSuccess?: string;
    accessibleColorOnColorDanger?: string;
    accessibleColorOnColorWarning?: string;
    /** @deprecated Use accessibleColorOnColorPrimary instead. */
    colorPrimaryText?: string;
    /** @deprecated Use accessibleColorOnColorBackground instead. */
    colorBackgroundText?: string;
    /** @deprecated Use accessibleColorOnColorSuccess instead. */
    colorSuccessText?: string;
    /** @deprecated Use accessibleColorOnColorDanger instead. */
    colorDangerText?: string;
    /** @deprecated Use accessibleColorOnColorWarning instead. */
    colorWarningText?: string;

    // Icons
    iconColor?: string;
    iconHoverColor?: string;
    iconCardErrorColor?: string;
    iconCardCvcColor?: string;
    iconCardCvcErrorColor?: string;
    iconCheckmarkColor?: string;
    iconChevronDownColor?: string;
    iconChevronDownHoverColor?: string;
    iconCloseColor?: string;
    iconCloseHoverColor?: string;
    iconLoadingIndicatorColor?: string;
    iconMenuColor?: string;
    iconMenuHoverColor?: string;
    iconPasscodeDeviceColor?: string;
    iconPasscodeDeviceHoverColor?: string;
    iconPasscodeDeviceNotificationColor?: string;
    iconRedirectColor?: string;
    /** @deprecated Use iconColor instead. */
    colorIcon?: string;
    /** @deprecated Use iconHoverColor instead. */
    colorIconHover?: string;
    /** @deprecated Use iconCardErrorColor instead. */
    colorIconCardError?: string;
    /** @deprecated Use iconCardCvcColor instead. */
    colorIconCardCvc?: string;
    /** @deprecated Use iconCardCvcErrorColor instead. */
    colorIconCardCvcError?: string;
    /** @deprecated Use iconCheckmarkColor instead. */
    colorIconCheckmark?: string;
    /** @deprecated Use iconChevronDownColor instead. */
    colorIconChevronDown?: string;
    /** @deprecated Use iconChevronDownHoverColor instead. */
    colorIconChevronDownHover?: string;
    /** @deprecated Use iconRedirectColor instead. */
    colorIconRedirect?: string;

    // TabIcons
    tabIconColor?: string;
    tabIconHoverColor?: string;
    tabIconSelectedColor?: string;
    tabIconMoreColor?: string;
    tabIconMoreHoverColor?: string;
    /** @deprecated Use tabIconColor instead. */
    colorIconTab?: string;
    /** @deprecated Use tabIconHoverColor instead. */
    colorIconTabHover?: string;
    /** @deprecated Use tabIconHoverColor instead. */
    colorIconTabSelected?: string;
    /** @deprecated Use tabIconMoreColor instead. */
    colorIconTabMore?: string;
    /** @deprecated Use tabIconMoreHoverColor instead. */
    colorIconTabMoreHover?: string;

    // Logos
    logoColor?: string;
    tabLogoColor?: string;
    tabLogoSelectedColor?: string;
    blockLogoColor?: string;
    /** @deprecated Use logoColor instead. */
    colorLogo?: string;
    /** @deprecated Use tabLogoColor instead. */
    colorLogoTab?: string;
    /** @deprecated Use tabLogoSelectedColor instead. */
    colorLogoTabSelected?: string;
    /** @deprecated Use blockLogoColor instead. */
    colorLogoBlock?: string;

    // Focus
    focusBoxShadow?: string;
    focusOutline?: string;

    // Radius
    buttonBorderRadius?: string;
    borderRadius?: string;
  };

  rules?: {
    [selector: string]: {
      [cssPropertyName: string]: string;
    };
  };

  /**
   * The style of labels associated with input fields to use for the Elements. Defaults to 'auto'.
   * @docs https://stripe.com/docs/stripe-js/appearance-api#labels
   */
  labels?: 'auto' | 'above' | 'floating';

  /**
   * The style of input fields to use for the Elements. Defaults to 'spaced'.
   * @docs https://stripe.com/docs/stripe-js/appearance-api#inputs
   */
  inputs?: 'spaced' | 'condensed';
}

export interface CustomerOptions {
  /**
   * The Customer id.
   */
  customer: string;

  /**
   * The ephemeral key for a Customer that grants temporary access to Customer data.
   */
  ephemeralKey: string;
}

export interface CustomPaymentMethod {
  /**
   * The Custom Payment Method id, prefixed with `cpmt_`.
   */
  id: string;

  /**
   * Additional options to configure the Custom Payment Method.
   */
  options: {
    /**
     * The payment form type.
     */
    type: 'static';

    /**
     * Display additional information about the payment method, max 100 characters.
     */
    subtitle?: string;
  };
}
