declare module '@stripe/stripe-js' {
  // Polyfill for TypeScript < 3.5 compatibility
  type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

  type CreatePaymentMethodData =
    | CreatePaymentMethodAcssDebitData
    | CreatePaymentMethodAfterpayClearpayData
    | CreatePaymentMethodAlipayData
    | CreatePaymentMethodAuBecsDebitData
    | CreatePaymentMethodBancontactData
    | CreatePaymentMethodBoletoData
    | CreatePaymentMethodCardData
    | CreatePaymentMethodEpsData
    | CreatePaymentMethodGiropayData
    | CreatePaymentMethodGrabPayData
    | CreatePaymentMethodIdealData
    | CreatePaymentMethodKlarnaData
    | CreatePaymentMethodP24Data
    | CreatePaymentMethodFpxData
    | CreatePaymentMethodSepaDebitData
    | CreatePaymentMethodSofortData
    | CreatePaymentMethodWechatPayData;

  interface CreatePaymentMethodAlipayData extends PaymentMethodCreateParams {
    type: 'alipay';
  }

  interface CreatePaymentMethodWechatPayData extends PaymentMethodCreateParams {
    /**
     * Requires beta access:
     * Contact [Stripe support](https://support.stripe.com/) for more information.
     */
    type: 'wechat_pay';
  }

  interface CreatePaymentMethodAfterpayClearpayData
    extends PaymentMethodCreateParams {
    type: 'afterpay_clearpay';

    /**
     * Can be omitted as there are no AfterpayClearpay-specific fields.
     */
    afterpay_clearpay?: {}; // eslint-disable-line @typescript-eslint/ban-types
  }

  interface CreatePaymentMethodBancontactData
    extends PaymentMethodCreateParams {
    type: 'bancontact';

    /**
     * The customer's billing details.
     * `name` is required.
     *
     * @docs https://stripe.com/docs/api/payment_methods/create#create_payment_method-billing_details
     */
    billing_details: PaymentMethodCreateParams.BillingDetails & {
      name: string;
    };
  }

  interface CreatePaymentMethodBoletoData extends PaymentMethodCreateParams {
    type: 'boleto';

    /**
     * The customer's billing details.
     * `name`, `email`, and full `address` is required.
     *
     * @docs https://stripe.com/docs/api/payment_methods/create#create_payment_method-billing_details
     */
    billing_details: PaymentMethodCreateParams.BillingDetails & {
      email: string;
      name: string;
      address: PaymentMethodCreateParams.BillingDetails.Address & {
        line1: string;
        city: string;
        postal_code: string;
        state: string;
        country: string;
      };
    };

    boleto: {
      tax_id: string;
    };
  }

  interface CreatePaymentMethodCardData extends PaymentMethodCreateParams {
    type: 'card';

    card: StripeCardElement | StripeCardNumberElement | {token: string};
  }

  interface CreatePaymentMethodEpsData extends PaymentMethodCreateParams {
    type: 'eps';

    /**
     * The customer's billing details.
     * `name` is required.
     *
     * @docs https://stripe.com/docs/api/payment_methods/create#create_payment_method-billing_details
     */
    billing_details: PaymentMethodCreateParams.BillingDetails & {
      name: string;
    };

    eps:
      | StripeEpsBankElement
      | {
          /**
           * The customer's bank
           */
          bank?: string;
        };
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

  interface CreatePaymentMethodGiropayData extends PaymentMethodCreateParams {
    type: 'giropay';

    /**
     * The customer's billing details.
     * `name` is required.
     *
     * @docs https://stripe.com/docs/api/payment_methods/create#create_payment_method-billing_details
     */
    billing_details: PaymentMethodCreateParams.BillingDetails & {
      name: string;
    };
  }

  interface CreatePaymentMethodGrabPayData extends PaymentMethodCreateParams {
    type: 'grabpay';

    /**
     * Can be omitted as there are no GrabPay-specific fields.
     */
    grabpay?: {}; // eslint-disable-line @typescript-eslint/ban-types
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

  interface CreatePaymentMethodKlarnaData extends PaymentMethodCreateParams {
    /**
     * Requires beta access:
     * Contact [Stripe support](https://support.stripe.com/) for more information.
     */
    type: 'klarna';

    /**
     * The customer's billing details.
     * `address.country` is required.
     *
     * @docs https://stripe.com/docs/api/payment_methods/create#create_payment_method-billing_details
     */
    billing_details: PaymentMethodCreateParams.BillingDetails & {
      address: PaymentMethodCreateParams.BillingDetails.Address & {
        country: string;
      };
    };
  }

  interface CreatePaymentMethodOxxoData extends PaymentMethodCreateParams {
    type: 'oxxo';

    /**
     * The customer's billing details.
     * `email` and `name` are required.
     *
     * @docs https://stripe.com/docs/api/payment_methods/create#create_payment_method-billing_details
     */
    billing_details: PaymentMethodCreateParams.BillingDetails & {
      email: string;
      name: string;
    };
  }

  interface CreatePaymentMethodP24Data extends PaymentMethodCreateParams {
    type: 'p24';

    /**
     * The customer's billing details.
     * `email` is required.
     *
     * @docs https://stripe.com/docs/api/payment_methods/create#create_payment_method-billing_details
     */
    billing_details: PaymentMethodCreateParams.BillingDetails & {
      email: string;
    };
    p24?:
      | StripeP24BankElement
      | {
          /**
           * The customer's bank.
           */
          bank?: string;
        };
  }

  interface CreatePaymentMethodPayPalData extends PaymentMethodCreateParams {
    type: 'paypal';
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

    /**
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

  interface CreatePaymentMethodSofortData extends PaymentMethodCreateParams {
    type: 'sofort';

    sofort: {
      /**
       * The country code where customer's bank is located.
       */
      country: string;
    };

    /**
     * The customer's billing details.
     * Required when `setup_future_usage` is set to `off_session`.
     *
     * @docs https://stripe.com/docs/api/payment_methods/create#create_payment_method-billing_details
     */
    billing_details?: PaymentMethodCreateParams.BillingDetails;
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

    /**
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

  interface CreatePaymentMethodBacsDebitData extends PaymentMethodCreateParams {
    type: 'bacs_debit';

    bacs_debit: {
      /**
       * A sort code.
       */
      sort_code: string;

      /**
       * An account number.
       */
      account_number: string;
    };

    /**
     * The customer's billing details.
     * `name`, `email`, and `address` are required.
     *
     * @docs https://stripe.com/docs/api/payment_methods/create#create_payment_method-billing_details
     */
    billing_details: PaymentMethodCreateParams.BillingDetails & {
      name: string;
      email: string;
      address: PaymentMethodCreateParams.BillingDetails.Address & {
        line1: string;
        city: string;
        country: string;
        postal_code: string;
      };
    };
  }
  interface CreatePaymentMethodAcssDebitData extends PaymentMethodCreateParams {
    type: 'acss_debit';

    /**
     * Can be omitted as Stripe will help to collect bank account details and verification.
     * Refer to our [integration guide](https://stripe.com/docs/payments/acss-debit/accept-a-payment) for more details.
     */
    acss_debit?: {
      /**
       * Customer’s bank account number.
       */
      account_number: string;

      /**
       * Institution number of the customer’s bank.
       */
      institution_number: string;

      /**
       * Transit number of the customer’s bank.
       */
      transit_number: string;
    };

    /**
     * The customer's billing details.
     * `name`, `email`, and `address` are required.
     *
     * @docs https://stripe.com/docs/api/payment_methods/create#create_payment_method-billing_details
     */
    billing_details: PaymentMethodCreateParams.BillingDetails;
  }

  /**
   * Data to be sent with a `stripe.confirmBancontactPayment` request.
   * Refer to the [Payment Intents API](https://stripe.com/docs/api/payment_intents/confirm) for a full list of parameters.
   */
  interface ConfirmBancontactPaymentData extends PaymentIntentConfirmParams {
    /**
     * Either the `id` of an existing [PaymentMethod](https://stripe.com/docs/api/payment_methods), or an object containing data to create a `PaymentMethod` with.
     * This field is optional if a `PaymentMethod` has already been attached to this `PaymentIntent`.
     *
     * @recommended
     */
    payment_method?: string | Omit<CreatePaymentMethodBancontactData, 'type'>;

    /**
     * The url your customer will be directed to after they complete authentication.
     *
     * @recommended
     */
    return_url?: string;
  }

  /**
   * Data to be sent with a `stripe.confirmBoletoPayment` request.
   * Refer to the [Payment Intents API](https://stripe.com/docs/api/payment_intents/confirm) for a full list of parameters.
   */
  interface ConfirmBoletoPaymentData extends PaymentIntentConfirmParams {
    /**
     * Either the `id` of an existing [PaymentMethod](https://stripe.com/docs/api/payment_methods), or an object containing data to create a `PaymentMethod` with.
     * This field is optional if a `PaymentMethod` has already been attached to this `PaymentIntent`.
     *
     * @recommended
     */
    payment_method?: string | Omit<CreatePaymentMethodBoletoData, 'type'>;
  }

  /**
   * An options object to control the behavior of `stripe.confirmBoletoPayment`.
   */
  interface ConfirmBoletoPaymentOptions {
    /**
     * Set this to `false` if you want to handle next actions yourself. Please refer to our [Stripe Boleto integration guide](https://stripe.com/docs/payments/boleto) for more info. Default is `true`.
     */
    handleActions?: boolean;
  }

  /**
   * Data to be sent with a `stripe.confirmAlipayPayment` request.
   * Refer to the [Payment Intents API](https://stripe.com/docs/api/payment_intents/confirm) for a full list of parameters.
   */
  interface ConfirmAlipayPaymentData extends PaymentIntentConfirmParams {
    /**
     * The `id` of an existing [PaymentMethod](https://stripe.com/docs/api/payment_methods).
     * This field is optional if a `PaymentMethod` has already been attached to this `PaymentIntent` or a new `PaymentMethod` will be created.
     *
     * @recommended
     */
    payment_method?: string | Omit<CreatePaymentMethodAlipayData, 'type'>;

    /**
     * The url your customer will be directed to after they complete authentication.
     *
     * @recommended
     */
    return_url?: string;
  }

  /**
   * An options object to control the behavior of `stripe.confirmAlipayPayment`.
   */
  interface ConfirmAlipayPaymentOptions {
    /**
     * Set this to `false` if you want to [manually handle the authorization redirect](https://stripe.com/docs/payments/alipay/accept-a-payment#handle-redirect).
     * Default is `true`.
     */
    handleActions?: boolean;
  }

  /**
   * An options object to control the behavior of `stripe.confirmBancontactPayment`.
   */
  interface ConfirmBancontactPaymentOptions {
    /**
     * Set this to `false` if you want to [manually handle the authorization redirect](https://stripe.com/docs/payments/bancontact#handle-redirect).
     * Default is `true`.
     */
    handleActions?: boolean;
  }

  /**
   * Data to be sent with a `stripe.confirmCardPayment` request.
   * Refer to the [Payment Intents API](https://stripe.com/docs/api/payment_intents/confirm) for a full list of parameters.
   */
  interface ConfirmCardPaymentData extends PaymentIntentConfirmParams {
    /**
     * Either the `id` of an existing [PaymentMethod](https://stripe.com/docs/api/payment_methods), or an object containing data to create a `PaymentMethod` with.
     * This field is optional if a `PaymentMethod` has already been attached to this `PaymentIntent`.
     *
     * @recommended
     */
    payment_method?: string | Omit<CreatePaymentMethodCardData, 'type'>;

    /**
     * An object containing payment-method-specific configuration to confirm the [PaymentIntent](https://stripe.com/docs/api/payment_intents) with.
     */
    payment_method_options?: {
      /**
       * Configuration for this card payment.
       */
      card: {
        /**
         * Use the provided `CardCvcElement` when confirming the PaymentIntent with an existing PaymentMethod.
         */
        cvc?: StripeCardCvcElement;

        /**
         * Selected network to process this PaymentIntent on. Depends on the available networks of the card attached to the PaymentIntent.
         */
        network?: string;
      };
    };
  }

  /**
   * An options object to control the behavior of `stripe.confirmCardPayment`.
   */
  interface ConfirmCardPaymentOptions {
    /**
     * Set this to `false` if you want to [handle next actions yourself](https://stripe.com/docs/payments/payment-intents/verifying-status#next-actions), or if you want to defer next action handling until later (e.g. for use in the [PaymentRequest API](https://stripe.com/docs/stripe-js/elements/payment-request-button#complete-payment-intents)).
     * Default is `true`.
     */
    handleActions?: boolean;
  }

  /**
   * Data to be sent with a `stripe.confirmEpsPayment` request.
   * Refer to the [Payment Intents API](https://stripe.com/docs/api/payment_intents/confirm) for a full list of parameters.
   */
  interface ConfirmEpsPaymentData extends PaymentIntentConfirmParams {
    /**
     * Either the `id` of an existing [PaymentMethod](https://stripe.com/docs/api/payment_methods), or an object containing data to create a `PaymentMethod` with.
     * This field is optional if a `PaymentMethod` has already been attached to this `PaymentIntent`.
     *
     * @recommended
     */
    payment_method?: string | Omit<CreatePaymentMethodEpsData, 'type'>;

    /**
     * The url your customer will be directed to after they complete authentication.
     *
     * @recommended
     */
    return_url?: string;
  }

  /**
   * An options object to control the behavior of `stripe.confirmEpsPayment`.
   */
  interface ConfirmEpsPaymentOptions {
    /**
     * Set this to `false` if you want to [manually handle the authorization redirect](https://stripe.com/docs/payments/eps#handle-redirect).
     * Default is `true`.
     */
    handleActions?: boolean;
  }

  /**
   * Data to be sent with a `stripe.confirmSepaDebitPayment` request.
   * Refer to the [Payment Intents API](https://stripe.com/docs/api/payment_intents/confirm) for a full list of parameters.
   */
  interface ConfirmSepaDebitPaymentData extends PaymentIntentConfirmParams {
    /**
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
    /**
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
    /**
     * Set this to `false` if you want to [manually handle the authorization redirect](https://stripe.com/docs/payments/fpx#handle-redirect).
     * Default is `true`.
     */
    handleActions?: boolean;
  }

  /**
   * Data to be sent with a `stripe.confirmGiropayPayment` request.
   * Refer to the [Payment Intents API](https://stripe.com/docs/api/payment_intents/confirm) for a full list of parameters.
   */
  interface ConfirmGiropayPaymentData extends PaymentIntentConfirmParams {
    /**
     * Either the `id` of an existing [PaymentMethod](https://stripe.com/docs/api/payment_methods), or an object containing data to create a `PaymentMethod` with.
     * This field is optional if a `PaymentMethod` has already been attached to this `PaymentIntent`.
     *
     * @recommended
     */
    payment_method?: string | Omit<CreatePaymentMethodGiropayData, 'type'>;

    /**
     * The url your customer will be directed to after they complete authentication.
     *
     * @recommended
     */
    return_url?: string;
  }

  /**
   * An options object to control the behavior of `stripe.confirmGiropayPayment`.
   */
  interface ConfirmGiropayPaymentOptions {
    /**
     * Set this to `false` if you want to [manually handle the authorization redirect](https://stripe.com/docs/payments/giropay#handle-redirect).
     * Default is `true`.
     */
    handleActions?: boolean;
  }

  /**
   * Data to be sent with a `stripe.confirmGrabPayPayment` request.
   * Refer to the [Payment Intents API](https://stripe.com/docs/api/payment_intents/confirm) for a full list of parameters.
   */
  interface ConfirmGrabPayPaymentData extends PaymentIntentConfirmParams {
    /**
     * Either the `id` of an existing [PaymentMethod](https://stripe.com/docs/api/payment_methods), or an object containing data to create a `PaymentMethod` with.
     * This field is optional if a `PaymentMethod` has already been attached to this `PaymentIntent`.
     *
     * @recommended
     */
    payment_method?: string | Omit<CreatePaymentMethodGrabPayData, 'type'>;

    /**
     * The url your customer will be directed to after they complete authentication.
     *
     * @recommended
     */
    return_url?: string;
  }

  /**
   * An options object to control the behavior of `stripe.confirmGrabPayPayment`.
   */
  interface ConfirmGrabPayPaymentOptions {
    /**
     * Set this to `false` if you want to handle next actions yourself. Please refer to our [Stripe GrabPay integration guide](https://stripe.com/docs/payments/grabpay/accept-a-payment)
     * for more info. Default is `true`.
     */
    handleActions?: boolean;
  }

  /**
   * Data to be sent with a `stripe.confirmIdealPayment` request.
   * Refer to the [Payment Intents API](https://stripe.com/docs/api/payment_intents/confirm) for a full list of parameters.
   */
  interface ConfirmIdealPaymentData extends PaymentIntentConfirmParams {
    /**
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
    /**
     * Set this to `false` if you want to [manually handle the authorization redirect](https://stripe.com/docs/payments/ideal#handle-redirect).
     * Default is `true`.
     */
    handleActions?: boolean;
  }

  /**
   * Data to be sent with a `stripe.confirmKlarnaPayment` request.
   * Refer to the [Payment Intents API](https://stripe.com/docs/api/payment_intents/confirm) for a full list of parameters.
   */
  interface ConfirmKlarnaPaymentData extends PaymentIntentConfirmParams {
    /**
     * Either the `id` of an existing [PaymentMethod](https://stripe.com/docs/api/payment_methods), or an object containing data to create a `PaymentMethod` with.
     * This field is optional if a `PaymentMethod` has already been attached to this `PaymentIntent`.
     *
     * @recommended
     */
    payment_method?: string | Omit<CreatePaymentMethodKlarnaData, 'type'>;

    /**
     * The url your customer will be directed to after they complete authentication.
     *
     * @recommended
     */
    return_url?: string;
  }

  /**
   * An options object to control the behavior of `stripe.confirmKlarnaPayment`.
   */
  interface ConfirmKlarnaPaymentOptions {
    /**
     * Set this to `false` if you want to [manually handle the authorization redirect](https://stripe.com/docs/payments/klarna#handle-redirect).
     * Default is `true`.
     */
    handleActions?: boolean;
  }

  /**
   * Data to be sent with a `stripe.confirmOxxoPayment` request.
   * Refer to the [Payment Intents API](https://stripe.com/docs/api/payment_intents/confirm) for a full list of parameters.
   */
  interface ConfirmOxxoPaymentData extends PaymentIntentConfirmParams {
    /**
     * Either the `id` of an existing [PaymentMethod](https://stripe.com/docs/api/payment_methods), or an object containing data to create a `PaymentMethod` with.
     * This field is optional if a `PaymentMethod` has already been attached to this `PaymentIntent`.
     *
     * @recommended
     */
    payment_method?: string | Omit<CreatePaymentMethodOxxoData, 'type'>;
  }

  /**
   * An options object to control the behavior of `stripe.confirmOxxoPayment`.
   */
  interface ConfirmOxxoPaymentOptions {
    /**
     * Set this to `false` if you want to handle next actions yourself. Please refer to our [Stripe OXXO integration guide](https://stripe.com/docs/payments/oxxo) for more info. Default is `true`.
     */
    handleActions?: boolean;
  }

  /**
   * Data to be sent with a `stripe.confirmP24Payment` request.
   * Refer to the [Payment Intents API](https://stripe.com/docs/api/payment_intents/confirm) for a full list of parameters.
   */
  interface ConfirmP24PaymentData extends PaymentIntentConfirmParams {
    /**
     * Either the `id` of an existing [PaymentMethod](https://stripe.com/docs/api/payment_methods), or an object containing data to create a `PaymentMethod` with.
     * This field is optional if a `PaymentMethod` has already been attached to this `PaymentIntent`.
     *
     * @recommended
     */
    payment_method?: string | Omit<CreatePaymentMethodP24Data, 'type'>;

    payment_method_options?: {
      /**
       * Configuration for this Przelewy24 payment.
       */
      p24: {
        /**
         * Specify that payer has agreed to the Przelewy24 Terms of Service
         */
        tos_shown_and_accepted?: boolean;
      };
    };

    /**
     * The url your customer will be directed to after they complete authentication.
     *
     * @recommended
     */
    return_url?: string;
  }

  /**
   * Data to be sent with a `stripe.confirmPayPalPayment` request.
   * Refer to the [Payment Intents API](https://stripe.com/docs/api/payment_intents/confirm) for a full list of parameters.
   */
  interface ConfirmPayPalPaymentData extends PaymentIntentConfirmParams {
    /**
     * Either the `id` of an existing [PaymentMethod](https://stripe.com/docs/api/payment_methods), or an object containing data to create a `PaymentMethod` with.
     * This field is optional if a `PaymentMethod` has already been attached to this `PaymentIntent`.
     *
     * @recommended
     */
    payment_method?: string | Omit<CreatePaymentMethodPayPalData, 'type'>;

    /**
     * The required url your customer will be directed to after they complete authentication.
     */
    return_url: string;
  }

  /**
   * An options object to control the behavior of `stripe.confirmP24Payment`.
   */
  interface ConfirmP24PaymentOptions {
    /**
     * Set this to `false` if you want to [manually handle the authorization redirect](https://stripe.com/docs/payments/p24#handle-redirect).
     * Default is `true`.
     */
    handleActions?: boolean;
  }

  /**
   * Data to be sent with a `stripe.confirmSofortPayment` request.
   * Refer to the [Payment Intents API](https://stripe.com/docs/api/payment_intents/confirm) for a full list of parameters.
   */
  interface ConfirmSofortPaymentData extends PaymentIntentConfirmParams {
    /**
     * Either the `id` of an existing [PaymentMethod](https://stripe.com/docs/api/payment_methods), or an object containing data to create a `PaymentMethod` with.
     * This field is optional if a `PaymentMethod` has already been attached to this `PaymentIntent`.
     *
     * @recommended
     */
    payment_method?: string | Omit<CreatePaymentMethodSofortData, 'type'>;

    /**
     * The url your customer will be directed to after they complete authentication.
     *
     * @recommended
     */
    return_url?: string;

    /**
     * To set up a SEPA Direct Debit payment method using the bank details from this SOFORT payment, set this parameter to `off_session`.
     * When using this parameter, a `customer` will need to be set on the [PaymentIntent](https://stripe.com/docs/api/payment_intents).
     * The newly created SEPA Direct Debit [PaymentMethod](https://stripe.com/docs/api/payment_methods) will be attached to this customer.
     */
    setup_future_usage?: 'off_session';
  }

  /**
   * Data to be sent with a `stripe.confirmWechatPayPayment` request.
   * Refer to the [Payment Intents API](https://stripe.com/docs/api/payment_intents/confirm) for a full list of parameters.
   */
  interface ConfirmWechatPayPaymentData extends PaymentIntentConfirmParams {
    /**
     * The `id` of an existing [PaymentMethod](https://stripe.com/docs/api/payment_methods).
     * This field is optional if a `PaymentMethod` has already been attached to this `PaymentIntent` or a new `PaymentMethod` will be created.
     *
     * @recommended
     */
    payment_method?: string | Omit<CreatePaymentMethodWechatPayData, 'type'>;

    /**
     * An object containing payment-method-specific configuration to confirm the [PaymentIntent](https://stripe.com/docs/api/payment_intents) with.
     */
    payment_method_options?: {
      /**
       * Configuration for this wechat payment.
       */
      wechat_pay: {
        client?: 'web';
      };
    };
  }

  /**
   * An options object to control the behavior of `stripe.confirmWechatPayPayment`.
   */
  interface ConfirmWechatPayPaymentOptions {
    /**
     * This must be set to false, and you are responsible for handling the next_action after confirming the PaymentIntent.
     */
    handleActions: boolean;
  }

  /**
   * Data to be sent with a `stripe.confirmAuBecsDebitPayment` request.
   * Refer to the [Payment Intents API](https://stripe.com/docs/api/payment_intents/confirm) for a full list of parameters.
   */
  interface ConfirmAuBecsDebitPaymentData extends PaymentIntentConfirmParams {
    /**
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

  /**
   * Data to be sent with a `stripe.confirmAfterpayClearpayPayment` request.
   * Refer to the [Payment Intents API](https://stripe.com/docs/api/payment_intents/confirm) for a full list of parameters.
   */
  interface ConfirmAfterpayClearpayPaymentData
    extends PaymentIntentConfirmParams {
    /**
     * Either the `id` of an existing [PaymentMethod](https://stripe.com/docs/api/payment_methods), or an object containing data to create a `PaymentMethod` with.
     * This field is optional if a `PaymentMethod` has already been attached to this `PaymentIntent`.
     *
     * @recommended
     */
    payment_method?:
      | string
      | Omit<CreatePaymentMethodAfterpayClearpayData, 'type'>;

    /**
     * The url your customer will be directed to after they complete authentication.
     */
    return_url?: string;
  }

  /**
   * An options object to control the behavior of `stripe.confirmAfterpayClearpayPayment`.
   */
  interface ConfirmAfterpayClearpayPaymentOptions {
    /**
     * Set this to `false` if you want to handle next actions yourself. Please refer to our [Stripe Afterpay / Clearpay integration guide](https://stripe.com/docs/payments/afterpay-clearpay/accept-a-payment#handle-redirect)
     * for more info. Default is `true`.
     */
    handleActions?: boolean;
  }

  /**
   * Data to be sent with a `stripe.confirmAcssDebitPayment` request.
   * Refer to the [Payment Intents API](https://stripe.com/docs/api/payment_intents/confirm) for a full list of parameters.
   */
  interface ConfirmAcssDebitPaymentData extends PaymentIntentConfirmParams {
    /**
     * Either the `id` of an existing [PaymentMethod](https://stripe.com/docs/api/payment_methods), or an object containing data to create a `PaymentMethod` with.
     * This field is optional if a `PaymentMethod` has already been attached to this `PaymentIntent`.
     *
     * @recommended
     */
    payment_method?: string | Omit<CreatePaymentMethodAcssDebitData, 'type'>;
  }

  /**
   * An options object to control the behavior of `stripe.confirmAcssDebitPayment`.
   */
  interface ConfirmAcssDebitPaymentOptions {
    /**
     * Set `skipMandate` to `true` if you want to skip displaying the mandate confirmation screen.
     */
    skipMandate?: boolean;
  }

  /**
   * Data to be sent with a `stripe.confirmPayment` request.
   * Refer to the [Payment Intents API](https://stripe.com/docs/api/payment_intents/confirm) for a full list of parameters.
   */
  interface ConfirmPaymentData extends PaymentIntentConfirmParams {
    /**
     * The url your customer will be directed to after they complete payment.
     */
    return_url: string;

    /**
     * An object to attach additional billing_details to the PaymentMethod created via Elements.
     *
     * @docs https://stripe.com/docs/api/payment_intents/create#create_payment_intent-payment_method_data
     */
    payment_method_data?: {
      /**
       * The customer's billing details. Details collected by Elements will override values passed here.
       * Billing fields that are omitted in the Payment Element via the `fields` option required.
       *
       * @docs https://stripe.com/docs/api/payment_intents/create#create_payment_intent-payment_method_data-billing_details
       */
      billing_details?: PaymentMethodCreateParams.BillingDetails;
    };
  }

  /**
   * Data to be sent with a `stripe.verifyMicrodepositsForPayment` request.
   */
  interface VerifyMicrodepositsForPaymentData {
    /**
     * An array of two positive integers, in cents, equal to the values of the microdeposits sent to the bank account.
     */
    amounts?: Array<number>;
  }
}
