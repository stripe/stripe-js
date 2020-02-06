declare module '@stripe/stripe-js' {
  /**
   * The Token object.
   */
  interface Token {
    /**
     * Unique identifier for the object.
     */
    id: string;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'token';

    bank_account?: BankAccount;

    card?: Card;

    /**
     * IP address of the client that generated the token.
     */
    client_ip: string | null;

    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;

    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;

    /**
     * Type of the token: `account`, `bank_account`, `card`, or `pii`.
     */
    type: string;

    /**
     * Whether this token has already been used (tokens can be used only once).
     */
    used: boolean;
  }
}
