/**
 * Data to be sent with a `stripe.collectFinancialConnectionsAccounts` request.
 */
export interface CollectFinancialConnectionsAccountsOptions {
  /**
   * The client secret of the [Financial Connections Session](https://stripe.com/docs/api/financial_connections/session).
   */
  clientSecret: string;
}
