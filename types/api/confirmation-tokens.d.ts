import {StripeElements} from '../stripe-js';
import {Address} from './shared';
import {PaymentMethodCreateParams} from './payment-methods';

/**
 * The ConfirmationToken object.
 */
export interface ConfirmationToken {
  // TODO
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
  };

  /**
   * The ID of an existing PaymentMethod.
   */
  payment_method?: string;

  /**
   * Shipping information.
   */
  shipping?: ConfirmationToken.Shipping

  /**
   * The url your customer will be directed to after they complete authentication.
   */
  return_url?: string;

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
}