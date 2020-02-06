///<reference path='./elements/card.d.ts' />
///<reference path='./elements/card-number.d.ts' />
///<reference path='./elements/card-expiry.d.ts' />
///<reference path='./elements/card-cvc.d.ts' />
///<reference path='./elements/iban.d.ts' />
///<reference path='./elements/ideal-bank.d.ts' />
///<reference path='./elements/payment-request-button.d.ts' />

declare module '@stripe/stripe-js' {
  interface StripeElements {
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
    /// idealBank
    /////////////////////////////

    /**
     * Creates an `IdealBankElement`.
     */
    create(
      elementType: 'idealBank',
      options?: StripeIdealBankElementOptions
    ): StripeIdealBankElement;

    /**
     * Looks up a previously created `Element` by its type.
     */
    getElement(elementType: 'idealBank'): StripeIdealBankElement | null;

    /////////////////////////////
    /// paymentRequestButton
    /////////////////////////////

    /**
     * Creates a `PaymentRequestButtonElement`.
     */
    create(
      elementType: 'paymentRequestButton',
      options?: StripePaymentRequestButtonElementOptions
    ): StripePaymentRequestButtonElement;

    /**
     * Looks up a previously created `Element` by its type.
     */
    getElement(
      elementType: 'paymentRequestButton'
    ): StripePaymentRequestButtonElement | null;
  }

  type StripeElementType =
    | 'card'
    | 'cardNumber'
    | 'cardExpiry'
    | 'cardCvc'
    | 'iban'
    | 'idealBank'
    | 'paymentRequestButton';

  type StripeElement =
    | StripeCardElement
    | StripeCardNumberElement
    | StripeCardExpiryElement
    | StripeCardCvcElement
    | StripeIbanElement
    | StripeIdealBankElement
    | StripePaymentRequestButtonElement;

  /**
   * Options to create an `Elements` instance with.
   */
  interface StripeElementsOptions {
    /**
     * An array of custom fonts, which elements created from the `Elements` object can use.
     */
    fonts?: Array<CssFontSource | CustomFontSource>;

    /**
     * The [IETF language tag](https://en.wikipedia.org/wiki/IETF_language_tag) of the locale to display placeholders and error strings in.
     * Default is `auto` (Stripe detects the locale of the browser).
     * Setting the locale does not affect the behavior of postal code validation—a valid postal code for the billing country of the card is still required.
     */
    locale?:
      | 'auto'
      | 'ar'
      | 'da'
      | 'de'
      | 'en'
      | 'es'
      | 'fi'
      | 'fr'
      | 'he'
      | 'it'
      | 'ja'
      | 'lt'
      | 'lv'
      | 'ms'
      | 'nb'
      | 'nl'
      | 'pl'
      | 'pt'
      | 'ru'
      | 'sv'
      | 'zh';
  }

  /*
   * Use a `CssFontSource` to pass custom fonts via a stylesheet URL when creating an `Elements` object.
   */
  interface CssFontSource {
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
  interface CustomFontSource {
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
}
