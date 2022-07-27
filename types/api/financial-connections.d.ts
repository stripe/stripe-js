/**
 * The Financial Connections Session object
 */
export interface FinancialConnectionsSession {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * List of accounts collected by the Session
   */
  accounts: FinancialConnectionsSession.Account[];

  /**
   * Filters applied to the Session
   */
  filters?: FinancialConnectionsSession.Filters;

  /**
   * List of data permissions requested in the Session
   */
  permissions?: FinancialConnectionsSession.Permission[];

  /**
   * For webview integrations only. The user will be redirected to this URL to return to your app.
   */
  return_url?: string;
}

export namespace FinancialConnectionsSession {
  /**
   * The Financial Connections Account object
   */
  export interface Account {
    /**
     * Unique identifier for the object.
     */
    id: string;

    /**
     * String representing the object's type. `'linked_account'` is present for backwards-compatibility.
     */
    object: 'linked_account' | 'financial_connections.account';

    /**
     * The type of the account.
     */
    category: string;

    /**
     * A human-readable name that has been assigned to this account, either by the account holder or by the institution.
     */
    display_name: string;

    /**
     * The name of the institution that holds this account.
     */
    institution_name: string;

    /**
     * The last 4 digits of the account number. If present, this will be 4 numeric characters.
     */
    last4: string | null;
  }

  /**
   * Filters to restrict the kinds of accounts to collect.
   */
  export interface Filters {
    /**
     * List of countries from which to collect accounts.
     */
    countries?: string[];
  }

  /**
   * Data features to which access can be requested
   */
  export type Permission =
    | 'payment_method'
    | 'balances'
    | 'transactions'
    | 'ownership'
    | 'account_numbers';
}
