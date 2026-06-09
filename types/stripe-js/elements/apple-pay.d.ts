export type ApplePayRecurringPaymentRequestIntervalUnit =
  | 'year'
  | 'month'
  | 'day'
  | 'hour'
  | 'minute';

export interface ApplePayLineItem {
  /**
   * A short, localized description of the line item.
   */
  label: string;

  /**
   * The amount in the currency's subunit (e.g. cents, yen, etc.)
   */
  amount: number;
}

export type ApplePayRegularBilling = ApplePayLineItem & {
  /**
   * The date of the first payment.
   */
  recurringPaymentStartDate?: Date;

  /**
   * The date of the final payment.
   */
  recurringPaymentEndDate?: Date;

  /**
   * The amount of time — in calendar units, such as day, month, or year — that represents a fraction of the total payment interval.
   */
  recurringPaymentIntervalUnit?: ApplePayRecurringPaymentRequestIntervalUnit;

  /**
   * The number of interval units that make up the total payment interval.
   */
  recurringPaymentIntervalCount?: number;
};

export interface ApplePayRecurringPaymentRequest {
  /**
   * The description of the payment that the customer will see in their Apple Pay wallet.
   */
  paymentDescription: string;

  /**
   * The URL to manage items related to the recurring payment on your website.
   */
  managementURL: string;
  regularBilling: ApplePayRegularBilling;
  trialBilling?: ApplePayRegularBilling;

  /**
   * The billing agreement label that is displayed to the customer in the Apple Pay payment interface.
   */
  billingAgreement?: string;
}

export type ApplePayAutomaticReloadBilling = ApplePayLineItem & {
  /**
   * The balance an account reaches before the merchant applies the automatic reload amount.
   */
  automaticReloadPaymentThresholdAmount: number;
};

export interface ApplePayAutomaticReloadPaymentRequest {
  /**
   * The description of the payment that the customer will see in their Apple Pay wallet.
   */
  paymentDescription: string;

  /**
   * The URL to manage items related to the automatic reload payment on your website.
   */
  managementURL: string;
  automaticReloadBilling: ApplePayAutomaticReloadBilling;

  /**
   * The billing agreement label that is displayed to the customer in the Apple Pay payment interface.
   */
  billingAgreement?: string;
}

export type ApplePayDeferredBilling = ApplePayLineItem & {
  /**
   * The date, in the future, of the payment.
   */
  deferredPaymentDate: Date;
};

export interface ApplePayDeferredPaymentRequest {
  /**
   * The description of the payment that the customer will see in their Apple Pay wallet.
   */
  paymentDescription: string;

  /**
   * The URL to manage items related to the deferred payment on your website.
   */
  managementURL: string;
  deferredBilling: ApplePayDeferredBilling;

  /**
   * The billing agreement label that is displayed to the customer in the Apple Pay payment interface.
   */
  billingAgreement?: string;

  /**
   * The future date before which the customer can cancel the deferred payment for free.
   */
  freeCancellationDate?: Date;

  /**
   * The time zone of the free cancellation date.
   *
   * These are [tz](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) timezones such as `America/Los_Angeles`, `Europe/Dublin`, and `Asia/Singapore`.
   */
  freeCancellationDateTimeZone?: string;
}

export type ApplePayOption =
  | {
      recurringPaymentRequest: ApplePayRecurringPaymentRequest;
      deferredPaymentRequest?: null;
      automaticReloadPaymentRequest?: null;
    }
  | {
      recurringPaymentRequest?: null;
      deferredPaymentRequest: ApplePayDeferredPaymentRequest;
      automaticReloadPaymentRequest?: null;
    }
  | {
      recurringPaymentRequest?: null;
      deferredPaymentRequest?: null;
      automaticReloadPaymentRequest: ApplePayAutomaticReloadPaymentRequest;
    }
  | {
      recurringPaymentRequest?: null;
      deferredPaymentRequest?: null;
      automaticReloadPaymentRequest?: null;
    };

export type ApplePayUpdateOption =
  | {
      recurringPaymentRequest: ApplePayRecurringPaymentRequest;
      automaticReloadPaymentRequest?: null;
    }
  | {
      recurringPaymentRequest?: null;
      automaticReloadPaymentRequest: ApplePayAutomaticReloadPaymentRequest;
    }
  | {
      recurringPaymentRequest?: null;
      automaticReloadPaymentRequest?: null;
    };
