import {StripeElement, StripeElements} from '../stripe-js';
import {Metadata, MetadataParam, Address} from './shared';

/**
 * The PaymentMethod object.
 */
export interface PaymentMethod {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'payment_method';

  affirm?: PaymentMethod.Affirm;

  afterpay_clearpay?: PaymentMethod.AfterpayClearpay;

  acss_debit?: PaymentMethod.AcssDebit;

  alipay?: PaymentMethod.Alipay;

  /**
   * This field indicates whether this payment method can be shown again to its customer in a checkout flow. Stripe products such as Checkout and Elements use this field to determine whether a payment method can be shown as a saved payment method in a checkout flow. Can be `always`, `limited` or `unspecified`.
   */
  allow_redisplay: string | null;

  alma?: PaymentMethod.Alma;

  amazon_pay?: PaymentMethod.AmazonPay;

  au_becs_debit?: PaymentMethod.AuBecsDebit;

  bacs_debit?: PaymentMethod.BacsDebit;

  bancontact?: PaymentMethod.Bancontact;

  billie?: PaymentMethod.Billie;

  blik?: PaymentMethod.Blik;

  boleto?: PaymentMethod.Boleto;

  billing_details: PaymentMethod.BillingDetails;

  card?: PaymentMethod.Card;

  card_present?: PaymentMethod.CardPresent;

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  crypto?: PaymentMethod.Crypto;

  /**
   * The ID of the Customer to which this PaymentMethod is saved. This will not be set when the PaymentMethod has not been saved to a Customer.
   */
  customer: string | null;

  eps?: PaymentMethod.Eps;

  fpx?: PaymentMethod.Fpx;

  grabpay?: PaymentMethod.GrabPay;

  ideal?: PaymentMethod.Ideal;

  kakao_pay?: PaymentMethod.KakaoPay;

  klarna?: PaymentMethod.Klarna;

  konbini?: PaymentMethod.Konbini;

  link?: PaymentMethod.Link;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: Metadata;

  mobile_pay?: PaymentMethod.MobilePay;

  multibanco?: PaymentMethod.Multibanco;

  naver_pay?: PaymentMethod.NaverPay;

  nz_bank_account?: PaymentMethod.NzBankAccount;

  oxxo?: PaymentMethod.Oxxo;

  p24?: PaymentMethod.P24;

  pay_by_bank?: PaymentMethod.PayByBank;

  payco?: PaymentMethod.Payco;

  paynow?: PaymentMethod.Paynow;

  paypal?: PaymentMethod.Paypal;

  pix?: PaymentMethod.Pix;

  promptpay?: PaymentMethod.PromptPay;

  revolut_pay?: PaymentMethod.RevolutPay;

  samsun_pay?: PaymentMethod.SamsungPay;

  satispay?: PaymentMethod.Satispay;

  sepa_debit?: PaymentMethod.SepaDebit;

  swish?: PaymentMethod.Swish;

  twint?: PaymentMethod.Twint;

  /**
   * The type of the PaymentMethod. An additional hash is included on the PaymentMethod with a name matching this value. It contains additional information specific to the PaymentMethod type.
   */
  type: string;

  us_bank_account?: PaymentMethod.UsBankAccount;

  wechat_pay?: PaymentMethod.WechatPay;

  zip?: PaymentMethod.Zip;
}

export namespace PaymentMethod {
  export interface AcssDebit {
    /**
     * The name of the bank.
     */
    bank_name: string;

    /**
     * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
     */
    fingerprint: string | null;

    /**
     * Institution number of the customer’s bank.
     */
    institution_number: string;

    /**
     * Last four digits of the bank account number.
     */
    last4: string;

    /**
     * Transit number of the customer’s bank.
     */
    transit_number: string;
  }

  export interface Affirm {}

  export interface AfterpayClearpay {}

  export interface Alipay {}

  export interface Alma {}

  export interface AmazonPay {}

  export interface AuBecsDebit {
    /**
     * Bank State Branch
     */
    bsb_number: string | null;

    /**
     * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
     */
    fingerprint: string | null;

    /**
     * Last four characters of the account number.
     */
    last4: string | null;
  }

  export interface BacsDebit {
    /**
     * Last four characters of the account number.
     */
    last4: string | null;

    /**
     * Sort code of the bank account. (e.g., 10-20-30).
     */
    sort_code: string | null;
  }

  export interface Bancontact {}

  export interface Billie {}

  export interface BillingDetails {
    /**
     * Billing address.
     */
    address: Address | null;

    /**
     * Email address.
     */
    email: string | null;

    /**
     * Full name.
     */
    name: string | null;

    /**
     * Billing phone number (including extension).
     */
    phone: string | null;
  }

  export interface Blik {}

  export interface Boleto {}

  export interface Card {
    /**
     * Card brand. Can be `amex`, `diners`, `discover`, `jcb`, `mastercard`, `unionpay`, `visa`, or `unknown`.
     */
    brand: string;

    /**
     * Checks on Card address and CVC if provided.
     */
    checks: Card.Checks | null;

    /**
     * Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you've collected.
     */
    country: string | null;

    /**
     * The brand to use when displaying the card, this accounts for customer’s brand choice on dual-branded cards. Can be `american_express`, `cartes_bancaires`, `diners_club`, `discover`, `eftpos_australia`, `interac`, `jcb`, `mastercard`, `union_pay`, `visa`, or other and may contain more values in the future.
     */
    display_brand: string | null;

    /**
     * Two-digit number representing the card's expiration month.
     */
    exp_month: number;

    /**
     * Four-digit number representing the card's expiration year.
     */
    exp_year: number;

    /**
     * Uniquely identifies this particular card number. You can use this attribute to check whether two customers who've signed up with you are using the same card number.
     */
    fingerprint?: string | null;

    /**
     * Card funding type. Can be `credit`, `debit`, `prepaid`, or `unknown`.
     */
    funding: string;

    /**
     * The last four digits of the card.
     */
    last4: string;

    /**
     * Contains information about card networks that can be used to process the payment.
     */
    networks: {
      /**
       * The preferred network for co-branded cards.
       */
      preferred: string | null;

      /**
       * All available networks for the card.
       */
      available: string[];
    } | null;

    /**
     * Status of a card based on the card issuer. Can be `regulated` or `unregulated`.
     */
    regulated_status: string | null;

    /**
     * Contains details on how this Card maybe be used for 3D Secure authentication.
     */
    three_d_secure_usage: Card.ThreeDSecureUsage | null;

    /**
     * If this Card is part of a card wallet, this contains the details of the card wallet.
     */
    wallet: null | {[k: string]: any};
  }

  export namespace Card {
    export interface Checks {
      /**
       * If a address line1 was provided, results of the check, one of `pass`, `fail`, `unavailable`, or `unchecked`.
       */
      address_line1_check: string | null;

      /**
       * If a address postal code was provided, results of the check, one of `pass`, `fail`, `unavailable`, or `unchecked`.
       */
      address_postal_code_check: string | null;

      /**
       * If a CVC was provided, results of the check, one of `pass`, `fail`, `unavailable`, or `unchecked`.
       */
      cvc_check: string | null;
    }

    export interface ThreeDSecureUsage {
      /**
       * Whether 3D Secure is supported on this card.
       */
      supported: boolean;
    }
  }

  export interface CardPresent {}

  export interface CashApp {
    /**
     * A unique and immutable identifier assigned by Cash App to every buyer.
     */
    buyer_id: string | null;

    /**
     * A public identifier for buyers using Cash App.
     */
    cashtag: string | null;
  }

  export interface Crypto {}

  export interface Eps {
    /**
     * The customer's bank.
     */
    bank: string;
  }

  export interface Fpx {
    /**
     * The customer's bank.
     */
    bank: string;
  }

  export interface GrabPay {}

  export interface Ideal {
    /**
     * The customer's bank, if provided.
     */
    bank: string | null;

    /**
     * The Bank Identifier Code of the customer's bank, if the bank was provided.
     */
    bic: string | null;
  }

  export interface KakaoPay {}

  export interface Klarna {}

  export interface Konbini {}

  export interface KrCard {
    /**
     * The local credit or debit card brand.
     */
    brand: string | null;

    /**
     * Last four characters of the IBAN.
     */
    last4: string | null;
  }

  export interface Link {
    /**
     * Account owner’s email address.
     */
    email: string | null;
  }

  export interface MobilePay {}

  export interface Multibanco {}

  export interface NaverPay {}

  export interface NzBankAccount {
    /**
     * The name on the bank account. Only present if the account holder name is different from the name of the authorized signatory collected in the PaymentMethod’s billing details.
     */
    account_holder_name: string | null;

    /**
     * The numeric code for the bank account’s bank.
     */
    bank_code: string | null;

    /**
     * The name of the bank.
     */
    bank_name: string | null;

    /**
     * Branch code of bank associated with the bank account.
     */
    branch_code: string | null;

    /**
     * Last four digits of the bank account number.
     */
    last4: string | null;

    /**
     * The suffix of the bank account number.
     */
    suffix: string | null;
  }

  export interface Oxxo {}

  export interface P24 {
    /**
     * The customer's bank.
     */
    bank: string;
  }

  export interface PayByBank {}

  export interface Payco {}

  export interface Paynow {}

  export interface Paypal {
    /**
     * Two-letter ISO code representing the buyer’s country. Values are provided by PayPal directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
     */
    country: string | null;

    /**
     * Owner’s email. Values are provided by PayPal directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
     */
    payer_name: string | null;

    /**
     * PayPal account PayerID. This identifier uniquely identifies the PayPal customer.
     */
    payer_id: string | null;
  }

  export interface Pix {}

  export interface PromptPay {}

  export interface RevolutPay {}

  export interface SamsungPay {}

  export interface Satispay {}

  export interface SepaDebit {
    /**
     * Bank code of bank associated with the bank account.
     */
    bank_code: string | null;

    /**
     * Branch code of bank associated with the bank account.
     */
    branch_code: string | null;

    /**
     * Two-letter ISO code representing the country the bank account is located in.
     */
    country: string | null;

    /**
     * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
     */
    fingerprint: string | null;

    /**
     * Last four characters of the IBAN.
     */
    last4: string | null;
  }

  export interface Swish {}

  export interface Twint {}

  export interface UsBankAccount {
    /**
     * Customer’s bank account number.
     */
    account_number: string;

    /**
     * The routing transit number for the bank account.
     */
    routing_number: string;

    /**
     * The type of entity that holds the account. This can be either `individual` or `company`.
     */
    account_holder_type: string;

    /**
     * Account type: checkings or savings. Defaults to checking if omitted.
     */
    account_type: string;

    /**
     * The name of the bank.
     */
    bank_name: string;

    /**
     * The ID of the Financial Connections Account used to create the payment method.
     */
    financial_connections_account: string;

    /**
     * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
     */
    fingerprint: string;

    /**
     * Last four digits of the bank account number.
     */
    last4: string;

    /**
     * Contains information about US bank account networks that can be used.
     */
    networks: {
      /**
       * The preferred network.
       */
      preferred: string;

      /**
       * All supported networks.
       */
      supported: string[];
    };
  }

  export interface WechatPay {}

  export interface Zip {}
}

export interface PaymentMethodCreateParams {
  /**
   * Billing information associated with the PaymentMethod that may be used or required by particular types of payment methods.
   */
  billing_details?: PaymentMethodCreateParams.BillingDetails;

  /**
   * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: MetadataParam;

  /**
   * The PaymentMethod to share.
   */
  payment_method?: string;

  /**
   * The type of the PaymentMethod. An additional hash is included on the PaymentMethod with a name matching this value. It contains additional information specific to the PaymentMethod type. Required unless `payment_method` is specified (see the [Cloning PaymentMethods](https://stripe.com/docs/payments/payment-methods/connect#cloning-payment-methods) guide)
   */
  type?: string;

  /**
   * Specifies if the PaymentMethod should be redisplayed when using the Saved Payment Method feature.
   */
  allow_redisplay?: 'always' | 'limited' | 'unspecified';
}

export interface CreatePaymentMethodFromElements {
  /**
   * The Elements instance
   *
   * @docs https://stripe.com/docs/js/elements_object
   */
  elements: StripeElements;

  /**
   * Parameters that will be passed on to the PaymentMethod API
   *
   * @docs https://stripe.com/docs/api/payment_methods/create
   */
  params?: PaymentMethodCreateParams;

  /**
   * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: MetadataParam;
}
export interface CreatePaymentMethodFromElement {
  /**
   * The specific Element used to collect payment details
   *
   * @docs https://stripe.com/docs/js/element
   */
  element: StripeElement;

  /**
   * Parameters that will be passed on to the PaymentMethod API
   *
   * @docs https://stripe.com/docs/api/payment_methods/create
   */
  params?: PaymentMethodCreateParams;

  /**
   * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: MetadataParam;
}

export namespace PaymentMethodCreateParams {
  export interface BillingDetails {
    /**
     * Billing address.
     */
    address?: BillingDetails.Address;

    /**
     * Email address.
     */
    email?: string | null;

    /**
     * Full name.
     */
    name?: string | null;

    /**
     * Billing phone number (including extension).
     */
    phone?: string | null;
  }

  export namespace BillingDetails {
    export interface Address {
      /**
       * City, district, suburb, town, or village.
       */
      city?: string | null;

      /**
       * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
       */
      country?: string | null;

      /**
       * Address line 1 (e.g., street, PO Box, or company name).
       */
      line1?: string | null;

      /**
       * Address line 2 (e.g., apartment, suite, unit, or building).
       */
      line2?: string | null;

      /**
       * ZIP or postal code.
       */
      postal_code?: string | null;

      /**
       * State, county, province, or region.
       */
      state?: string | null;
    }
  }
}
