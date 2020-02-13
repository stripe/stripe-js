declare module '@stripe/stripe-js' {
  // Polyfill for TypeScript < 3.5 compatibility
  type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

  type CreatePaymentMethodData =
    | CreatePaymentMethodAuBecsDebitData
    | CreatePaymentMethodCardData
    | CreatePaymentMethodIdealData
    | CreatePaymentMethodFpxData
    | CreatePaymentMethodSepaDebitData;

  interface CreatePaymentMethodCardData extends PaymentMethodCreateParams {
    type: 'card';

    card: StripeCardElement | StripeCardNumberElement | {token: string};
  }

  interface CreatePaymentMethodFpxData extends PaymentMethodCreateParams {
    type: 'fpx';

    fpx:
      | StripeFpxBankElement
      | {
          /**
           * The customer's bank.
           */
          bank: string;
        };
  }

  interface CreatePaymentMethodIdealData extends PaymentMethodCreateParams {
    type: 'ideal';

    ideal:
      | StripeIdealBankElement
      | {
          /**
           * The customer's bank.
           */
          bank?: string;
        };
  }

  interface CreatePaymentMethodSepaDebitData extends PaymentMethodCreateParams {
    type: 'sepa_debit';

    sepa_debit:
      | StripeIbanElement
      | {
          /**
           * An IBAN account number.
           */
          iban: string;
        };

    /*
     * The customer's billing details.
     * `name` and `email` are required.
     *
     * @docs https://stripe.com/docs/api/payment_methods/create#create_payment_method-billing_details
     */
    billing_details: PaymentMethodCreateParams.BillingDetails & {
      name: string;
      email: string;
    };
  }

  interface CreatePaymentMethodAuBecsDebitData
    extends PaymentMethodCreateParams {
    /**
     * Requires beta access:
     * Contact [Stripe support](https://support.stripe.com/) for more information.
     */
    type: 'au_becs_debit';

    /**
     * Requires beta access:
     * Contact [Stripe support](https://support.stripe.com/) for more information.
     */
    au_becs_debit:
      | StripeAuBankAccountElement
      | {
          /**
           * A BSB number.
           */
          bsb_number: string;

          /**
           * An account number.
           */
          account_number: string;
        };

    /*
     * The customer's billing details.
     * `name` and `email` are required.
     *
     * @docs https://stripe.com/docs/api/payment_methods/create#create_payment_method-billing_details
     */
    billing_details: PaymentMethodCreateParams.BillingDetails & {
      name: string;
      email: string;
    };
  }

  /**
   * Data to be sent with a `stripe.confirmCardPayment` request.
   * Refer to the [Payment Intents API](https://stripe.com/docs/api/payment_intents/confirm) for a full list of parameters.
   */
  interface ConfirmCardPaymentData extends PaymentIntentConfirmParams {
    /*
     * Either the `id` of an existing [PaymentMethod](https://stripe.com/docs/api/payment_methods), or an object containing data to create a `PaymentMethod` with.
     * This field is optional if a `PaymentMethod` has already been attached to this `PaymentIntent`.
     *
     * @recommended
     */
    payment_method?: string | Omit<CreatePaymentMethodCardData, 'type'>;
  }

  /**
   * An options object to control the behavior of `stripe.confirmCardPayment`.
   */
  interface ConfirmCardPaymentOptions {
    /*
     * Set this to `false` if you want to [handle next actions yourself](https://stripe.com/docs/payments/payment-intents/verifying-status#next-actions), or if you want to defer next action handling until later (e.g. for use in the [PaymentRequest API](https://stripe.com/docs/stripe-js/elements/payment-request-button#complete-payment-intents)).
     * Default is `true`.
     */
    handleActions?: boolean;
  }

  /**
   * Data to be sent with a `stripe.confirmSepaDebitPayment` request.
   * Refer to the [Payment Intents API](https://stripe.com/docs/api/payment_intents/confirm) for a full list of parameters.
   */
  interface ConfirmSepaDebitPaymentData extends PaymentIntentConfirmParams {
    /*
     * Either the `id` of an existing [PaymentMethod](https://stripe.com/docs/api/payment_methods), or an object containing data to create a `PaymentMethod` with.
     * This field is optional if a `PaymentMethod` has already been attached to this `PaymentIntent`.
     *
     * @recommended
     */
    payment_method?: string | Omit<CreatePaymentMethodSepaDebitData, 'type'>;

    /**
     * To save the SEPA Direct Debit account for reuse, set this parameter to `off_session`.
     * SEPA Direct Debit only accepts an `off_session` value for this parameter.
     */
    setup_future_usage?: 'off_session';
  }

  /**
   * Data to be sent with a `stripe.confirmFpxPayment` request.
   * Refer to the [Payment Intents API](https://stripe.com/docs/api/payment_intents/confirm) for a full list of parameters.
   */
  interface ConfirmFpxPaymentData extends PaymentIntentConfirmParams {
    /*
     * Either the `id` of an existing [PaymentMethod](https://stripe.com/docs/api/payment_methods), or an object containing data to create a `PaymentMethod` with.
     * This field is optional if a `PaymentMethod` has already been attached to this `PaymentIntent`.
     *
     * @recommended
     */
    payment_method?: string | Omit<CreatePaymentMethodFpxData, 'type'>;

    /**
     * The url your customer will be directed to after they complete authentication.
     *
     * @recommended
     */
    return_url?: string;
  }

  /**
   * An options object to control the behavior of `stripe.confirmFpxPayment`.
   */
  interface ConfirmFpxPaymentOptions {
    /*
     * Set this to `false` if you want to [manually handle the authorization redirect](https://stripe.com/docs/payments/fpx#handle-redirect).
     * Default is `true`.
     */
    handleActions?: boolean;
  }

  /**
   * Data to be sent with a `stripe.confirmIdealPayment` request.
   * Refer to the [Payment Intents API](https://stripe.com/docs/api/payment_intents/confirm) for a full list of parameters.
   */
  interface ConfirmIdealPaymentData extends PaymentIntentConfirmParams {
    /*
     * Either the `id` of an existing [PaymentMethod](https://stripe.com/docs/api/payment_methods), or an object containing data to create a `PaymentMethod` with.
     * This field is optional if a `PaymentMethod` has already been attached to this `PaymentIntent`.
     *
     * @recommended
     */
    payment_method?: string | Omit<CreatePaymentMethodIdealData, 'type'>;

    /**
     * The url your customer will be directed to after they complete authentication.
     *
     * @recommended
     */
    return_url?: string;
  }

  /**
   * An options object to control the behavior of `stripe.confirmIdealPayment`.
   */
  interface ConfirmIdealPaymentOptions {
    /*
     * Set this to `false` if you want to [manually handle the authorization redirect](https://stripe.com/docs/payments/ideal#handle-redirect).
     * Default is `true`.
     */
    handleActions?: boolean;
  }

  /**
   * Data to be sent with a `stripe.confirmAuBecsDebitPayment` request.
   * Refer to the [Payment Intents API](https://stripe.com/docs/api/payment_intents/confirm) for a full list of parameters.
   */
  interface ConfirmAuBecsDebitPaymentData extends PaymentIntentConfirmParams {
    /*
     * Either the `id` of an existing [PaymentMethod](https://stripe.com/docs/api/payment_methods), or an object containing data to create a `PaymentMethod` with.
     * This field is optional if a `PaymentMethod` has already been attached to this `PaymentIntent`.
     *
     * @recommended
     */
    payment_method?: string | Omit<CreatePaymentMethodAuBecsDebitData, 'type'>;

    /**
     * To save the BECS Direct Debit account for reuse, set this parameter to `off_session`.
     * BECS Direct Debit only accepts an `off_session` value for this parameter.
     */
    setup_future_usage?: 'off_session';
  }
}
