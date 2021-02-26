///<reference path='./checkout.d.ts' />
///<reference path='./elements.d.ts' />
///<reference path='./payment-intents.d.ts' />
///<reference path='./setup-intents.d.ts' />
///<reference path='./payment-request.d.ts' />
///<reference path='./token-and-sources.d.ts' />

import {TokenCreateParams} from '@stripe/stripe-js';

declare module '@stripe/stripe-js' {
  interface Stripe {
    /////////////////////////////
    /// Elements
    ///
    /// https://stripe.com/docs/js/elements_object
    /////////////////////////////

    /**
     * Create an `Elements` instance, which manages a group of elements.
     */
    elements(options?: StripeElementsOptions): StripeElements;

    /////////////////////////////
    /// Checkout
    ///
    /// https://stripe.com/docs/js/checkout
    /////////////////////////////

    /**
     * Use `stripe.redirectToCheckout` to redirect your customers to [Checkout](https://stripe.com/docs/payments/checkout), a Stripe-hosted page to securely collect payment information.
     * When the customer completes their purchase, they are redirected back to your website.
     */
    redirectToCheckout(
      options: RedirectToCheckoutOptions
    ): Promise<never | {error: StripeError}>;

    /////////////////////////////
    /// Payment Intents
    ///
    /// https://stripe.com/docs/js/payment_intents
    /////////////////////////////

    /**
     * Use `stripe.confirmAlipayPayment` in the [Alipay Payments](https://stripe.com/docs/payments/alipay) with Payment Methods flow when the customer submits your payment form.
     * When called, it will confirm the [PaymentIntent](https://stripe.com/docs/api/payment_intents) with `data` you provide, and it will automatically redirect the customer to authorize the transaction.
     * Once authorization is complete, the customer will be redirected back to your specified `return_url`.
     *
     * When you confirm a `PaymentIntent`, it needs to have an attached [PaymentMethod](https://stripe.com/docs/api/payment_methods).
     * In addition to confirming the `PaymentIntent`, this method can automatically create and attach a new PaymentMethod for you.
     * If you have already attached a `PaymentMethod` you can call this method without needing to provide any additional data.
     *
     * @docs https://stripe.com/docs/js/payment_intents/confirm_alipay_payment
     */
    confirmAlipayPayment(
      clientSecret: string,
      data?: ConfirmAlipayPaymentData,
      options?: ConfirmAlipayPaymentOptions
    ): Promise<PaymentIntentResult>;

    /**
     * Requires beta access:
     * Contact [Stripe support](https://support.stripe.com/) for more information.
     *
     * Use `stripe.confirmAuBecsDebitPayment` in the [BECS Direct Debit Payments](https://stripe.com/docs/payments/payment-methods/au-becs-debit) with Payment Methods flow when the customer submits your payment form.
     * When called, it will confirm the [PaymentIntent](https://stripe.com/docs/api/payment_intents) with `data` you provide.
     * Note that there are some additional requirements to this flow that are not covered in this reference.
     * Refer to our [integration guide](https://stripe.com/docs/payments/payment-methods/au-becs-debit-quickstart-payment-intents) for more details.
     *
     * When you confirm a `PaymentIntent`, it needs to have an attached [PaymentMethod](https://stripe.com/docs/api/payment_methods).
     * In addition to confirming the `PaymentIntent`, this method can automatically create and attach a new PaymentMethod for you.
     * If you have already attached a `PaymentMethod` you can call this method without needing to provide any additional data.
     *
     * @docs https://stripe.com/docs/js/payment_intents/confirm_au_becs_debit_payment
     */
    confirmAuBecsDebitPayment(
      clientSecret: string,
      data?: ConfirmAuBecsDebitPaymentData
    ): Promise<PaymentIntentResult>;

    /**
     * Use `stripe.confirmBancontactPayment` in the [Bancontact Payments with Payment Methods](https://stripe.com/docs/payments/bancontact#web) flow when the customer submits your payment form.
     * When called, it will confirm the `PaymentIntent` with `data` you provide, and it will automatically redirect the customer to authorize the transaction.
     * Once authorization is complete, the customer will be redirected back to your specified `return_url`.
     *
     * When you confirm a `PaymentIntent`, it needs to have an attached [PaymentMethod](https://stripe.com/docs/api/payment_methods).
     * In addition to confirming the `PaymentIntent`, this method can automatically create and attach a new `PaymentMethod` for you.
     * If you have already attached a `PaymentMethod` you can call this method without needing to provide any additional data.
     *
     * @docs https://stripe.com/docs/js/payment_intents/confirm_bancontact_payment
     */
    confirmBancontactPayment(
      clientSecret: string,
      data?: ConfirmBancontactPaymentData,
      options?: ConfirmBancontactPaymentOptions
    ): Promise<PaymentIntentResult>;

    /**
     * Use `stripe.confirmCardPayment` when the customer submits your payment form.
     * When called, it will confirm the [PaymentIntent](https://stripe.com/docs/api/payment_intents) with `data` you provide and carry out 3DS or other next actions if they are required.
     *
     * If you are using [Dynamic 3D Secure](https://stripe.com/docs/payments/3d-secure#three-ds-radar), `stripe.confirmCardPayment` will trigger your Radar rules to execute and may open a dialog for your customer to authenticate their payment.
     *
     * When you confirm a `PaymentIntent`, it needs to have an attached [PaymentMethod](https://stripe.com/docs/api/payment_methods).
     * In addition to confirming the `PaymentIntent`, this method can automatically create and attach a new `PaymentMethod` for you.
     * It can also be called with an existing `PaymentMethod`, or if you have already attached a `PaymentMethod` you can call this method without needing to provide any additional data.
     *
     * @docs https://stripe.com/docs/js/payment_intents/confirm_card_payment
     */
    confirmCardPayment(
      clientSecret: string,
      data?: ConfirmCardPaymentData,
      options?: ConfirmCardPaymentOptions
    ): Promise<PaymentIntentResult>;

    /**
     * Use `stripe.confirmEpsPayment` in the [EPS Payments with Payment Methods](https://stripe.com/docs/payments/eps#web) flow when the customer submits your payment form.
     * When called, it will confirm the `PaymentIntent` with `data` you provide, and it will automatically redirect the customer to authorize the transaction.
     * Once authorization is complete, the customer will be redirected back to your specified `return_url`.
     *
     * When you confirm a `PaymentIntent`, it needs to have an attached [PaymentMethod](https://stripe.com/docs/api/payment_methods).
     * In addition to confirming the `PaymentIntent`, this method can automatically create and attach a new `PaymentMethod` for you.
     * If you have already attached a `PaymentMethod` you can call this method without needing to provide any additional data.
     *
     * @docs https://stripe.com/docs/js/payment_intents/confirm_eps_payment
     */
    confirmEpsPayment(
      clientSecret: string,
      data?: ConfirmEpsPaymentData,
      options?: ConfirmEpsPaymentOptions
    ): Promise<PaymentIntentResult>;

    /**
     * Use `stripe.confirmFpxPayment` in the [FPX Payments with Payment Methods](https://stripe.com/docs/payments/fpx#web) flow when the customer submits your payment form.
     * When called, it will confirm the `PaymentIntent` with `data` you provide, and it will automatically redirect the customer to authorize the transaction.
     * Once authorization is complete, the customer will be redirected back to your specified `return_url`.
     *
     * When you confirm a `PaymentIntent`, it needs to have an attached [PaymentMethod](https://stripe.com/docs/api/payment_methods).
     * In addition to confirming the `PaymentIntent`, this method can automatically create and attach a new `PaymentMethod` for you.
     * If you have already attached a `PaymentMethod` you can call this method without needing to provide any additional data.
     *
     * @docs https://stripe.com/docs/js/payment_intents/confirm_fpx_payment
     */
    confirmFpxPayment(
      clientSecret: string,
      data?: ConfirmFpxPaymentData,
      options?: ConfirmFpxPaymentOptions
    ): Promise<PaymentIntentResult>;

    /**
     * Use `stripe.confirmGiropayPayment` in the [giropay Payments with Payment Methods](https://stripe.com/docs/payments/giropay#web) flow when the customer submits your payment form.
     * When called, it will confirm the `PaymentIntent` with `data` you provide, and it will automatically redirect the customer to authorize the transaction.
     * Once authorization is complete, the customer will be redirected back to your specified `return_url`.
     *
     * When you confirm a `PaymentIntent`, it needs to have an attached [PaymentMethod](https://stripe.com/docs/api/payment_methods).
     * In addition to confirming the `PaymentIntent`, this method can automatically create and attach a new `PaymentMethod` for you.
     * If you have already attached a `PaymentMethod` you can call this method without needing to provide any additional data.
     *
     * @docs https://stripe.com/docs/js/payment_intents/confirm_giropay_payment
     */
    confirmGiropayPayment(
      clientSecret: string,
      data?: ConfirmGiropayPaymentData,
      options?: ConfirmGiropayPaymentOptions
    ): Promise<PaymentIntentResult>;

    /**
     * Use `stripe.confirmGrabPayPayment` in the [GrabPay payments](https://stripe.com/docs/payments/grabpay) flow when the customer submits your payment form.
     * When called, it will confirm the [PaymentIntent](https://stripe.com/docs/api/payment_intents).
     * Refer to our [integration guide](https://stripe.com/docs/payments/grabpay/accept-a-payment) for more details.
     *
     * @docs https://stripe.com/docs/js/payment_intents/confirm_grabpay_payment
     */

    confirmGrabPayPayment(
      clientSecret: string,
      data?: ConfirmGrabPayPaymentData,
      options?: ConfirmGrabPayPaymentOptions
    ): Promise<PaymentIntentResult>;

    /**
     * Use `stripe.confirmIdealPayment` in the [iDEAL Payments with Payment Methods](https://stripe.com/docs/payments/ideal) flow when the customer submits your payment form.
     * When called, it will confirm the `PaymentIntent` with `data` you provide, and it will automatically redirect the customer to authorize the transaction.
     * Once authorization is complete, the customer will be redirected back to your specified `return_url`.
     *
     * When you confirm a `PaymentIntent`, it needs to have an attached [PaymentMethod](https://stripe.com/docs/api/payment_methods).
     * In addition to confirming the `PaymentIntent`, this method can automatically create and attach a new `PaymentMethod` for you.
     * If you have already attached a `PaymentMethod` you can call this method without needing to provide any additional data.
     *
     * @docs https://stripe.com/docs/js/payment_intents/confirm_ideal_payment
     */
    confirmIdealPayment(
      clientSecret: string,
      data?: ConfirmIdealPaymentData,
      options?: ConfirmIdealPaymentOptions
    ): Promise<PaymentIntentResult>;

    /**
     * Use `stripe.confirmOxxoPayment` in the [OXXO Payment](https://stripe.com/docs/payments/oxxo) with Payment Methods flow when the customer submits your payment form.
     * When called, it will confirm the [PaymentIntent](https://stripe.com/docs/api/payment_intents) with `data` you provide.
     * Note that there are some additional requirements to this flow that are not covered in this reference.
     * Refer to our [integration guide](https://stripe.com/docs/payments/oxxo) for more details.
     *
     * When you confirm a `PaymentIntent`, it needs to have an attached [PaymentMethod](https://stripe.com/docs/api/payment_methods).
     * In addition to confirming the `PaymentIntent`, this method can automatically create and attach a new PaymentMethod for you.
     * If you have already attached a `PaymentMethod` you can call this method without needing to provide any additional data.
     *
     * @docs https://stripe.com/docs/js/payment_intents/confirm_oxxo_payment
     */
    confirmOxxoPayment(
      clientSecret: string,
      data?: ConfirmOxxoPaymentData,
      options?: ConfirmOxxoPaymentOptions
    ): Promise<PaymentIntentResult>;

    /**
     * Use `stripe.confirmP24Payment` in the [Przelewy24 Payments with Payment Methods](https://stripe.com/docs/payments/p24#web) flow when the customer submits your payment form.
     * When called, it will confirm the `PaymentIntent` with `data` you provide, and it will automatically redirect the customer to authorize the transaction.
     * Once authorization is complete, the customer will be redirected back to your specified `return_url`.
     *
     * When you confirm a `PaymentIntent`, it needs to have an attached [PaymentMethod](https://stripe.com/docs/api/payment_methods).
     * In addition to confirming the `PaymentIntent`, this method can automatically create and attach a new `PaymentMethod` for you.
     * If you have already attached a `PaymentMethod` you can call this method without needing to provide any additional data.
     *
     * @docs https://stripe.com/docs/js/payment_intents/confirm_p24_payment
     */
    confirmP24Payment(
      clientSecret: string,
      data?: ConfirmP24PaymentData,
      options?: ConfirmP24PaymentOptions
    ): Promise<PaymentIntentResult>;

    /**
     * Use `stripe.confirmSepaDebitPayment` in the [SEPA Direct Debit Payments](https://stripe.com/docs/payments/sepa-debit) with Payment Methods flow when the customer submits your payment form.
     * When called, it will confirm the [PaymentIntent](https://stripe.com/docs/api/payment_intents) with `data` you provide.
     * Note that there are some additional requirements to this flow that are not covered in this reference.
     * Refer to our [integration guide](https://stripe.com/docs/payments/sepa-debit) for more details.
     *
     * When you confirm a `PaymentIntent`, it needs to have an attached [PaymentMethod](https://stripe.com/docs/api/payment_methods).
     * In addition to confirming the `PaymentIntent`, this method can automatically create and attach a new PaymentMethod for you.
     * If you have already attached a `PaymentMethod` you can call this method without needing to provide any additional data.
     *
     * @docs https://stripe.com/docs/js/payment_intents/confirm_sepa_debit_payment
     */
    confirmSepaDebitPayment(
      clientSecret: string,
      data?: ConfirmSepaDebitPaymentData
    ): Promise<PaymentIntentResult>;

    /**
     * Use `stripe.confirmSofortPayment` in the [Sofort Payments with Payment Methods](https://stripe.com/docs/payments/sofort) flow when the customer submits your payment form.
     * When called, it will confirm the `PaymentIntent` with `data` you provide. It will then automatically redirect the customer to authorize the transaction.
     * Once authorization is complete, the customer will be redirected back to your specified `return_url`.
     *
     * When you confirm a `PaymentIntent`, it needs to have an attached [PaymentMethod](https://stripe.com/docs/api/payment_methods).
     * In addition to confirming the `PaymentIntent`, this method can automatically create and attach a new `PaymentMethod` for you.
     * If you have already attached a `PaymentMethod` you can call this method without needing to provide any additional data.
     *
     * @docs https://stripe.com/docs/js/payment_intents/confirm_sofort_payment
     */
    confirmSofortPayment(
      clientSecret: string,
      data?: ConfirmSofortPaymentData
    ): Promise<PaymentIntentResult>;

    /**
     * Use `stripe.handleCardAction` in the Payment Intents API [manual confirmation](https://stripe.com/docs/payments/payment-intents/web-manual) flow to handle a [PaymentIntent](https://stripe.com/docs/api/payment_intents) with the `requires_action` status.
     * It will throw an error if the `PaymentIntent` has a different status.
     *
     * Note that `stripe.handleCardAction` may take several seconds to complete.
     * During that time, you should disable your form from being resubmitted and show a waiting indicator like a spinner.
     * If you receive an error result, you should be sure to show that error to the customer, re-enable the form, and hide the waiting indicator.
     *
     * Additionally, `stripe.handleCardAction` may trigger a [3D Secure](https://stripe.com/docs/payments/3d-secure) authentication challenge.
     * The authentication challenge requires a context switch that can be hard to follow on a screen-reader.
     * Ensure that your form is accessible by ensuring that success or error messages are clearly read out.
     *
     * @docs https://stripe.com/docs/js/payment_intents/handle_card_action
     */
    handleCardAction(clientSecret: string): Promise<PaymentIntentResult>;

    /**
     * Use stripe.createPaymentMethod to convert payment information collected by elements into a [PaymentMethod](https://stripe.com/docs/api/payment_methods) object that you safely pass to your server to use in an API call.
     *
     * @docs https://stripe.com/docs/js/payment_intents/create_payment_method
     */
    createPaymentMethod(
      paymentMethodData: CreatePaymentMethodData
    ): Promise<PaymentMethodResult>;

    /**
     * Retrieve a [PaymentIntent](https://stripe.com/docs/api/payment_intents) using its [client secret](https://stripe.com/docs/api/payment_intents/object#payment_intent_object-client_secret).
     *
     * @docs https://stripe.com/docs/js/payment_intents/retrieve_payment_intent
     */
    retrievePaymentIntent(clientSecret: string): Promise<PaymentIntentResult>;

    /////////////////////////////
    /// Setup Intents
    ///
    /// https://stripe.com/docs/js/setup_intents
    /////////////////////////////

    /**
     * Requires beta access:
     * Contact [Stripe support](https://support.stripe.com/) for more information.
     *
     * Use `stripe.confirmAuBecsDebitSetup` in the [BECS Direct Debit with Setup Intents](https://stripe.com/docs/payments/payment-methods/au-becs-debit-quickstart-setup-intents) flow when the customer submits your payment form.
     * When called, it will confirm the `SetupIntent` with `data` you provide.
     * Note that there are some additional requirements to this flow that are not covered in this reference.
     * Refer to our [integration guide](https://stripe.com/docs/payments/payment-methods/au-becs-debit-quickstart-setup-intents) for more details.
     *
     * When you confirm a `SetupIntent`, it needs to have an attached [PaymentMethod](https://stripe.com/docs/api/payment_methods).
     * In addition to confirming the `SetupIntent`, this method can automatically create and attach a new `PaymentMethod` for you.
     * It can also be called with an existing `PaymentMethod`, or if you have already attached a `PaymentMethod` you can call this method without needing to provide any additional data.
     *
     * @docs https://stripe.com/docs/js/setup_intents/confirm_au_becs_debit_setup
     */
    confirmAuBecsDebitSetup(
      clientSecret: string,
      data?: ConfirmAuBecsDebitSetupData
    ): Promise<SetupIntentResult>;

    /**
     * Use `stripe.confirmBacsDebitSetup` in the [Bacs Direct Debit Payments](https://stripe.com/docs/payments/payment-methods/bacs-debit) flow when the customer submits your payment form.
     * When called, it will confirm the [SetupIntent](https://stripe.com/docs/api/setup_intents) with `data` you provide.
     * Note that there are some additional requirements to this flow that are not covered in this reference.
     * Refer to our [integration guide](https://stripe.com/docs/payments/payment-methods/bacs-debit) for more details.
     *
     * When you confirm a `SetupIntent`, it needs to have an attached [PaymentMethod](https://stripe.com/docs/api/payment_methods).
     * In addition to confirming the `SetupIntent`, this method can automatically create and attach a new `PaymentMethod` for you.
     * It can also be called with an existing `PaymentMethod`, or if you have already attached a `PaymentMethod` you can call this method without needing to provide any additional data.
     *
     * @docs https://stripe.com/docs/js/setup_intents/confirm_bacs_debit_setup
     */
    confirmBacsDebitSetup(
      clientSecret: string,
      data?: ConfirmBacsDebitSetupData
    ): Promise<SetupIntentResult>;

    /**
     * Use `stripe.confirmBancontactSetup` in the [Set up future payments](https://stripe.com/docs/payments/bancontact/set-up-payment) flow to use Bancontact bank details to set up a SEPA Direct Debit payment method for future payments.
     * When called, it will confirm a `SetupIntent` with `data` you provide, and it will automatically redirect the customer to authorize the transaction.
     * Once authorization is complete, the customer will be redirected back to your specified `return_url`.
     * Note that there are some additional requirements to this flow that are not covered in this reference.
     * Refer to our [integration guide](https://stripe.com/docs/payments/bancontact/set-up-payment) for more details.
     *
     * When you confirm a `SetupIntent`, it needs to have an attached [PaymentMethod](https://stripe.com/docs/api/payment_methods).
     * In addition to confirming the `SetupIntent`, this method can automatically create and attach a new `PaymentMethod` for you.
     * It can also be called with an existing `PaymentMethod`, or if you have already attached a `PaymentMethod` you can call this method without needing to provide any additional data.
     *
     * @docs https://stripe.com/docs/js/payment_intents/confirm_bancontact_setup
     */
    confirmBancontactSetup(
      clientSecret: string,
      data?: ConfirmBancontactSetupData
    ): Promise<SetupIntentResult>;

    /**
     * Use `stripe.confirmCardSetup` in the [Setup Intents API flow](https://stripe.com/docs/payments/save-and-reuse) when the customer submits your payment form.
     * When called, it will confirm the [SetupIntent](https://stripe.com/docs/api/setup_intents) with `data` you provide and carry out 3DS or other next actions if they are required.
     *
     * When you confirm a `SetupIntent`, it needs to have an attached [PaymentMethod](https://stripe.com/docs/api/payment_methods).
     * In addition to confirming the `SetupIntent`, this method can automatically create and attach a new `PaymentMethod` for you.
     * It can also be called with an existing `PaymentMethod`, or if you have already attached a `PaymentMethod` you can call this method without needing to provide any additional data.
     *
     * @docs https://stripe.com/docs/js/setup_intents/confirm_card_setup
     */
    confirmCardSetup(
      clientSecret: string,
      data?: ConfirmCardSetupData,
      options?: ConfirmCardSetupOptions
    ): Promise<SetupIntentResult>;

    /**
     * Use `stripe.confirmIdealSetup` in the [Set up future payments](https://stripe.com/docs/payments/ideal/set-up-payment) flow to use iDEAL bank details to set up a SEPA Direct Debit payment method for future payments.
     * When called, it will confirm a `SetupIntent` with `data` you provide, and it will automatically redirect the customer to authorize the transaction.
     * Once authorization is complete, the customer will be redirected back to your specified `return_url`.
     * Note that there are some additional requirements to this flow that are not covered in this reference.
     * Refer to our [integration guide](https://stripe.com/docs/payments/ideal/set-up-payment) for more details.
     *
     * When you confirm a `SetupIntent`, it needs to have an attached [PaymentMethod](https://stripe.com/docs/api/payment_methods).
     * In addition to confirming the `SetupIntent`, this method can automatically create and attach a new `PaymentMethod` for you.
     * It can also be called with an existing `PaymentMethod`, or if you have already attached a `PaymentMethod` you can call this method without needing to provide any additional data.
     *
     * @docs https://stripe.com/docs/js/setup_intents/confirm_ideal_setup
     */
    confirmIdealSetup(
      clientSecret: string,
      data?: ConfirmIdealSetupData
    ): Promise<SetupIntentResult>;

    /**
     * Use `stripe.confirmSepaDebitSetup` in the [SEPA Direct Debit with Setup Intents](https://stripe.com/docs/payments/sepa-debit-setup-intents) flow when the customer submits your payment form.
     * When called, it will confirm the `SetupIntent` with `data` you provide.
     * Note that there are some additional requirements to this flow that are not covered in this reference.
     * Refer to our [integration guide](https://stripe.com/docs/payments/sepa-debit-setup-intents) for more details.
     *
     * When you confirm a `SetupIntent`, it needs to have an attached [PaymentMethod](https://stripe.com/docs/api/payment_methods).
     * In addition to confirming the `SetupIntent`, this method can automatically create and attach a new `PaymentMethod` for you.
     * It can also be called with an existing `PaymentMethod`, or if you have already attached a `PaymentMethod` you can call this method without needing to provide any additional data.
     *
     * @docs https://stripe.com/docs/js/setup_intents/confirm_sepa_debit_setup
     */
    confirmSepaDebitSetup(
      clientSecret: string,
      data?: ConfirmSepaDebitSetupData
    ): Promise<SetupIntentResult>;

    /*
     * Use `stripe.confirmSofortSetup` in the [Set up future payments](https://stripe.com/docs/payments/sofort/set-up-payment) flow to use SOFORT bank details to set up a SEPA Direct Debit payment method for future payments.
     * When called, it will confirm a `SetupIntent` with `data` you provide, and it will automatically redirect the customer to authorize the transaction.
     * Once authorization is complete, the customer will be redirected back to your specified `return_url`.
     * Note that there are some additional requirements to this flow that are not covered in this reference.
     * Refer to our [integration guide](https://stripe.com/docs/payments/sofort/set-up-payment) for more details.
     *
     * When you confirm a `SetupIntent`, it needs to have an attached [PaymentMethod](https://stripe.com/docs/api/payment_methods).
     * In addition to confirming the `SetupIntent`, this method can automatically create and attach a new `PaymentMethod` for you.
     * It can also be called with an existing `PaymentMethod`, or if you have already attached a `PaymentMethod` you can call this method without needing to provide any additional data.
     */
    confirmSofortSetup(
      clientSecret: string,
      data?: ConfirmSofortSetupData
    ): Promise<SetupIntentResult>;

    /**
     * Retrieve a [SetupIntent](https://stripe.com/docs/api/setup_intents) using its client secret.
     *
     * @docs https://stripe.com/docs/js/setup_intents/retrieve_setup_intent
     */
    retrieveSetupIntent(clientSecret: string): Promise<SetupIntentResult>;

    /////////////////////////////
    /// Payment Request
    ///
    /// https://stripe.com/docs/js/payment_request
    /////////////////////////////

    /**
     * Use `stripe.paymentRequest` to create a `PaymentRequest` object.
     * Creating a `PaymentRequest` requires that you configure it with an `options` object.
     *
     * In Safari, `stripe.paymentRequest` uses Apple Pay, and in other browsers it uses the [Payment Request API standard](https://www.w3.org/TR/payment-request/).
     */
    paymentRequest(options: PaymentRequestOptions): PaymentRequest;

    /////////////////////////////
    /// Token and Sources
    ///
    /// https://stripe.com/docs/js/tokens_sources
    /////////////////////////////

    /**
     * Use `stripe.createToken` to convert information collected by an `IbanElement` into a single-use [Token](https://stripe.com/docs/api#tokens) that you safely pass to your server to use in an API call.
     *
     * @docs https://stripe.com/docs/js/tokens_sources/create_token?type=ibanElement
     */
    createToken(
      tokenType: StripeIbanElement,
      data: CreateTokenIbanData
    ): Promise<TokenResult>;

    /**
     * Use `stripe.createToken` to convert information collected by card elements into a single-use [Token](https://stripe.com/docs/api#tokens) that you safely pass to your server to use in an API call.
     *
     * @docs https://stripe.com/docs/js/tokens_sources/create_token?type=cardElement
     */
    createToken(
      tokenType: StripeCardElement | StripeCardNumberElement,
      data?: CreateTokenCardData
    ): Promise<TokenResult>;

    /**
     * Use `stripe.createToken` to convert personally identifiable information (PII) into a single-use [Token](https://stripe.com/docs/api#tokens) for account identity verification.
     *
     * @docs https://stripe.com/docs/js/tokens_sources/create_token?type=pii
     */
    createToken(
      tokenType: 'pii',
      data: CreateTokenPiiData
    ): Promise<TokenResult>;

    /**
     * Use `stripe.createToken` to convert bank account information into a single-use token that you safely pass to your server to use in an API call.
     *
     * @docs https://stripe.com/docs/js/tokens_sources/create_token?type=bank_account
     */
    createToken(
      tokenType: 'bank_account',
      data: CreateTokenBankAccountData
    ): Promise<TokenResult>;

    /**
     * Use `stripe.createToken` to tokenize the recollected CVC for a saved card.

     * First, render a `CardCvcElement` to collect the data.
     * Then pass the `CardCvcElement` to `stripe.createToken` to tokenize the collected data.
     *
     * @docs https://stripe.com/docs/js/tokens_sources/create_token?type=cvc_update
     */
    createToken(
      tokenType: 'cvc_update',
      element: StripeCardCvcElement
    ): Promise<TokenResult>;

    /**
     * Use `stripe.createToken` to create a single-use token that wraps a user’s legal entity information.
     * Use this when creating or updating a Connect account.
     * See the [account tokens documentation](https://stripe.com/docs/connect/account-tokens) to learn more.
     */
    createToken(
      tokenType: 'account',
      data: TokenCreateParams.Account
    ): Promise<TokenResult>;

    /**
     * Use `stripe.createToken` to create a single-use token that represents the details for a person.
     * Use this when creating or updating persons associated with a Connect account.
     * See the [documentation](https://stripe.com/docs/connect/account-tokens) to learn more.
     */
    createToken(
      tokenType: 'person',
      data: TokenCreateParams.Person
    ): Promise<TokenResult>;

    /**
     * Use `stripe.createSource` to convert payment information collected by elements into a `Source` object that you safely pass to your server to use in an API call.
     * See the [Sources documentation](https://stripe.com/docs/sources) for more information about sources.
     */
    createSource(
      element: StripeElement,
      sourceData: CreateSourceData
    ): Promise<SourceResult>;

    /**
     * Use `stripe.createSource` to convert raw payment information into a `Source` object that you safely pass to your server to use in an API call.
     * See the [Sources documentation](https://stripe.com/docs/sources) for more information about sources.
     */
    createSource(sourceData: CreateSourceData): Promise<SourceResult>;

    /**
     * Retrieve a [Source](https://stripe.com/docs/api#sources) using its unique ID and client secret.
     *
     * @docs https://stripe.com/docs/js/tokens_sources/retrieve_source
     */
    retrieveSource(source: RetrieveSourceParam): Promise<SourceResult>;
  }

  type PaymentIntentResult =
    | {paymentIntent: PaymentIntent; error?: undefined}
    | {paymentIntent?: undefined; error: StripeError};

  type SetupIntentResult =
    | {setupIntent: SetupIntent; error?: undefined}
    | {setupIntent?: undefined; error: StripeError};

  type PaymentMethodResult =
    | {paymentMethod: PaymentMethod; error?: undefined}
    | {paymentMethod?: undefined; error: StripeError};

  type SourceResult =
    | {source: Source; error?: undefined}
    | {source?: undefined; error: StripeError};

  type TokenResult =
    | {token: Token; error?: undefined}
    | {token?: undefined; error: StripeError};

  /**
   * Use `Stripe(publishableKey, options?)` to create an instance of the `Stripe` object.
   * The Stripe object is your entrypoint to the rest of the Stripe.js SDK.
   *
   * Your Stripe publishable [API key](https://stripe.com/docs/keys) is required when calling this function, as it identifies your website to Stripe.
   *
   * When you’re ready to accept live payments, replace the test key with your live key in production.
   * Learn more about how API keys work in [test mode and live mode](https://stripe.com/docs/dashboard#viewing-test-data).
   */
  interface StripeConstructor {
    (
      /**
       * Your publishable key.
       */
      publishableKey: string,

      /**
       * Initialization options.
       */
      options?: StripeConstructorOptions
    ): Stripe;
  }

  interface StripeConstructorOptions {
    /**
     * For usage with [Connect](https://stripe.com/docs/connect) only.
     * Specifying a connected account ID (e.g., `acct_24BFMpJ1svR5A89k`) allows you to perform actions on behalf of that account.
     */
    stripeAccount?: string;

    /**
     * Override your account's [API version](https://stripe.com/docs/api/versioning).
     */
    apiVersion?: string;

    /**
     * The [IETF language tag](https://en.wikipedia.org/wiki/IETF_language_tag) used to globally configure localization in Stripe.js.
     * Setting the locale here will localize error strings for all Stripe.js methods.
     * It will also configure the locale for [Elements](#element_mount) and [Checkout](https://stripe.com/docs/js/checkout/redirect_to_checkout). Default is `auto` (Stripe detects the locale of the browser).
     *
     * Supported values depend on which features you are using.
     * Checkout supports a slightly different set of locales than the rest of Stripe.js.
     * If you are planning on using Checkout, make sure to use a [value](#checkout_redirect_to_checkout-options-locale) that it supports.
     */
    locale?: StripeElementLocale | CheckoutLocale;

    /**
     * Opt-in to prerelease Stripe.js features by passing `betas` when instantiating a `Stripe` object.
     *
     * Supported values for the `betas` option can be found in integration guides for prerelease features.
     * Most users of Stripe.js do not pass this option.
     */
    betas?: string[];
  }

  type StripeErrorType =
    /**
     * Failure to connect to Stripe's API.
     */
    | 'api_connection_error'

    /**
     * API errors cover any other type of problem (e.g., a temporary problem with Stripe's servers), and are extremely uncommon.
     */
    | 'api_error'

    /**
     * Failure to properly authenticate yourself in the request.
     */
    | 'authentication_error'

    /**
     * Card errors are the most common type of error you should expect to handle.
     * They result when the user enters a card that can't be charged for some reason.
     */
    | 'card_error'

    /**
     * Idempotency errors occur when an `Idempotency-Key` is re-used on a request that does not match the first request's API endpoint and parameters.
     */
    | 'idempotency_error'

    /**
     * Invalid request errors arise when your request has invalid parameters.
     */
    | 'invalid_request_error'

    /**
     * Too many requests hit the API too quickly.
     */
    | 'rate_limit_error'

    /**
     * Errors triggered by our client-side libraries when failing to validate fields (e.g., when a card number or expiration date is invalid or incomplete).
     */
    | 'validation_error';

  interface StripeError {
    /**
     * The type of error.
     */
    type: StripeErrorType;

    /**
     * For card errors, the ID of the failed charge
     */
    charge?: string;

    /**
     * For some errors that could be handled programmatically, a short string indicating the [error code](https://stripe.com/docs/error-codes) reported.
     */
    code?: string;

    /**
     * For card errors resulting from a card issuer decline, a short string indicating the [card issuer’s reason for the decline](https://stripe.com/docs/declines#issuer-declines) if they provide one.
     */
    decline_code?: string;

    /**
     * A URL to more information about the [error code](https://stripe.com/docs/error-codes) reported.
     */
    doc_url?: string;

    /**
     * A human-readable message providing more details about the error. For card errors, these messages can be shown to your users.
     */
    message?: string;

    /**
     * If the error is parameter-specific, the parameter related to the error.
     * For example, you can use this to display a message near the correct form field.
     */
    param?: string;

    /**
     * The `PaymentIntent` object for errors returned on a request involving a `PaymentIntent`.
     */
    payment_intent?: PaymentIntent;

    /**
     * The `PaymentMethod` object for errors returned on a request involving a `PaymentMethod`.
     */
    payment_method?: PaymentMethod;

    /**
     * The `SetupIntent` object for errors returned on a request involving a `SetupIntent`.
     */
    setup_intent?: SetupIntent;

    /**
     * The `Source` object for errors returned on a request involving a `Source`.
     */
    source?: Source;
  }
}
