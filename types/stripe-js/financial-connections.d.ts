/**
 * Requires beta access:
 * Contact [Stripe support](https://support.stripe.com/) for more information.
 *
 * Evidence is subject to server-side eligibility and validation. Providing it
 * does not guarantee that Stripe.js will omit its consent pane.
 */
export interface PreCollectedConsent {
  /**
   * ID of a financial_connections.consent object returned by the merchant's server.
   */
  consent: string;

  /**
   * Unix timestamp in seconds when the customer affirmatively accepted the complete consent text.
   */
  collectedAt: number;
}

/**
 * Data to be sent with a `stripe.collectFinancialConnectionsAccounts` request.
 */
export interface CollectFinancialConnectionsAccountsOptions {
  /**
   * The client secret of the [Financial Connections Session](https://stripe.com/docs/api/financial_connections/session).
   */
  clientSecret: string;

  preCollectedConsent?: PreCollectedConsent;
}

/**
 * Data to be sent with a `stripe.collectBankAccountToken` request.
 */
export interface CollectBankAccountTokenOptions {
  /**
   * The client secret of the [Financial Connections Session](https://stripe.com/docs/api/financial_connections/session).
   */
  clientSecret: string;

  preCollectedConsent?: PreCollectedConsent;
}
