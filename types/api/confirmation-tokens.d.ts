import {StripeElements} from '../stripe-js';
import {Address} from './shared';
import {PaymentMethod, PaymentMethodCreateParams} from './payment-methods';
import {PaymentIntent} from './payment-intents';

/**
 * The ConfirmationToken object.
 */
export interface ConfirmationToken {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'confirmation_token';

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * Time at which this ConfirmationToken expires and can no longer be used to confirm a PaymentIntent or SetupIntent. This is set to null once this ConfirmationToken has been used. Measured in seconds since the Unix epoch.
   */
  expires_at: number;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * ID of the PaymentIntent that this ConfirmationToken was used to confirm, or null if this ConfirmationToken has not yet been used.
   */
  payment_intent: null | string;

  /**
   * Payment details collected by the Payment Element, used to create a PaymentMethod when a PaymentIntent or SetupIntent is confirmed with this ConfirmationToken.
   */
  payment_method_preview: ConfirmationToken.PaymentMethodPreview;

  /**
   * The URL your customer is redirected to after they complete the payment.
   */
  return_url: string | null;

  /**
   * Indicates that you intend to make future payments with this ConfirmationToken’s payment method.
   *
   * The presence of this property will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent’s Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete.
   *
   * Stripe uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules. For example, if your customer is impacted by [SCA](https://stripe.com/docs/strong-customer-authentication), using `off_session` will ensure that they are authenticated while processing this PaymentIntent. You will then be able to collect [off-session payments](https://stripe.com/docs/payments/cards/charging-saved-cards#off-session-payments-with-saved-cards) for this customer.
   */
  setup_future_usage: PaymentIntent.SetupFutureUsage | null;

  /**
   * ID of the SetupIntent that this ConfirmationToken was used to confirm, or null if this ConfirmationToken has not yet been used.
   */
  setup_intent: null | string;

  /**
   * Shipping information for this ConfirmationToken.
   */
  shipping: PaymentIntent.Shipping | null;

  /**
   * Set to true when confirming server-side and using Stripe.js, iOS, or Android client-side SDKs to handle the next actions.
   */
  use_stripe_sdk: boolean;
}

export interface ConfirmationTokenCreateParams {
  /**
   * Data used to create a new payment method.
   *
   */
  payment_method_data?: {
    /**
     * The customer's billing details.
     */
    billing_details?: PaymentMethodCreateParams.BillingDetails;

    /**
     * Specifies if the PaymentMethod should be redisplayed when using the Saved Payment Method feature
     */
    allow_redisplay?: 'always' | 'limited' | 'unspecified';
  };

  /**
   * Shipping information.
   */
  shipping?: ConfirmationToken.Shipping;

  /**
   * The url your customer will be directed to after they complete authentication.
   */
  return_url?: string | null;
}

export interface CreateConfirmationToken {
  /**
   * The Elements instance.
   *
   * @docs https://stripe.com/docs/js/elements_object
   */
  elements: StripeElements;

  /**
   * Parameters for creating the ConfirmationToken.
   * Details collected by Elements will be overriden by values passed here.
   */
  params?: ConfirmationTokenCreateParams;
}

export namespace ConfirmationToken {
  export interface Shipping {
    /**
     * Recipient address.
     */
    address: Address;

    /**
     * Recipient name.
     */
    name: string | null;

    /**
     * Recipient phone (including extension).
     */
    phone?: string | null;
  }

  export interface PaymentMethodPreview {
    /**
     * The type of the PaymentMethod. An additional hash is included on payment_method_preview with a name matching this value. It contains additional information specific to the PaymentMethod type.
     */
    type: string;

    billing_details: PaymentMethod.BillingDetails;

    acss_debit?: PaymentMethod.AcssDebit;

    affirm?: PaymentMethod.Affirm;

    afterpay_clearpay?: PaymentMethod.AfterpayClearpay;

    au_becs_debit?: PaymentMethod.AuBecsDebit;

    card?: PaymentMethod.Card;

    card_present?: PaymentMethod.CardPresent;

    eps?: PaymentMethod.Eps;

    fpx?: PaymentMethod.Fpx;

    grabpay?: PaymentMethod.GrabPay;

    ideal?: PaymentMethod.Ideal;

    p24?: PaymentMethod.P24;

    sepa_debit?: PaymentMethod.SepaDebit;

    us_bank_account?: PaymentMethod.UsBankAccount;
  }

  export interface MandateData {
    customer_acceptance: {
      type: 'online';

      online?: {
        /**
         * The IP address from which the Mandate was accepted by the customer.
         */
        ip_address: string;

        /**
         * The user agent of the browser from which the Mandate was accepted by the customer.
         */
        user_agent: string;
      };
    };
  }
}
