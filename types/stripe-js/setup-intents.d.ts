declare module '@stripe/stripe-js' {
  /**
   * Data to be sent with a `stripe.confirmCardSetup` request.
   * Refer to the [Setup Intents API](https://stripe.com/docs/api/setup_intents/confirm) for a full list of parameters.
   */
  interface ConfirmCardSetupData extends SetupIntentConfirmParams {
    /*
     * Either the `id` of an existing [PaymentMethod](https://stripe.com/docs/api/payment_methods), or an object containing data to create a `PaymentMethod` with.
     * This field is optional if a `PaymentMethod` has already been attached to this `SetupIntent`.
     *
     * @recommended
     */
    payment_method?: string | Omit<CreatePaymentMethodCardData, 'type'>;
  }

  /**
   * An options object to control the behavior of `stripe.confirmCardSetup`.
   */
  interface ConfirmCardSetupOptions {
    /*
     * Set this to `false` if you want to [handle next actions yourself](https://stripe.com/docs/payments/payment-intents/verifying-status#next-actions), or if you want to defer next action handling until later (e.g. for use in the [PaymentRequest API](https://stripe.com/docs/stripe-js/elements/payment-request-button#complete-payment-intents)).
     * Default is `true`.
     */
    handleActions?: boolean;
  }

  /**
   * Data to be sent with a `stripe.confirmSepaDebitSetup` request.
   * Refer to the [Setup Intents API](https://stripe.com/docs/api/setup_intents/confirm) for a full list of parameters.
   */
  interface ConfirmSepaDebitSetupData extends SetupIntentConfirmParams {
    /*
     * Either the `id` of an existing [PaymentMethod](https://stripe.com/docs/api/payment_methods), or an object containing data to create a `PaymentMethod` with.
     * This field is optional if a `PaymentMethod` has already been attached to this `SetupIntent`.
     *
     * @recommended
     */
    payment_method?: string | Omit<CreatePaymentMethodSepaDebitData, 'type'>;
  }

  /**
   * Data to be sent with a `stripe.confirmAuBecsDebitSetup` request.
   * Refer to the [Setup Intents API](https://stripe.com/docs/api/setup_intents/confirm) for a full list of parameters.
   */
  interface ConfirmAuBecsDebitSetupData extends SetupIntentConfirmParams {
    /*
     * Either the `id` of an existing [PaymentMethod](https://stripe.com/docs/api/payment_methods), or an object containing data to create a `PaymentMethod` with.
     * This field is optional if a `PaymentMethod` has already been attached to this `SetupIntent`.
     *
     * @recommended
     */
    payment_method?: string | Omit<CreatePaymentMethodAuBecsDebitData, 'type'>;
  }
}
