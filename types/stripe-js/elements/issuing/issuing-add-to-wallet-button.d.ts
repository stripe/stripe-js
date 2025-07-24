import {StripeElementBase} from '../base';

export type StripeIssuingAddToWalletButtonElement = StripeElementBase & {
  /**
   * Triggered when the element is clicked.
   */
  on(
    eventType: 'click',
    handler: (event: {elementType: 'issuingAddToWalletButton'}) => any
  ): StripeIssuingAddToWalletButtonElement;
  once(
    eventType: 'click',
    handler: (event: {elementType: 'issuingAddToWalletButton'}) => any
  ): StripeIssuingAddToWalletButtonElement;
  off(
    eventType: 'click',
    handler?: (event: {elementType: 'issuingAddToWalletButton'}) => any
  ): StripeIssuingAddToWalletButtonElement;

  /**
   * Triggered when add to wallet flow is complete.
   */
  on(
    eventType: 'success',
    handler: (event: {elementType: 'issuingAddToWalletButton'}) => any
  ): StripeIssuingAddToWalletButtonElement;
  once(
    eventType: 'success',
    handler: (event: {elementType: 'issuingAddToWalletButton'}) => any
  ): StripeIssuingAddToWalletButtonElement;
  off(
    eventType: 'success',
    handler?: (event: {elementType: 'issuingAddToWalletButton'}) => any
  ): StripeIssuingAddToWalletButtonElement;

  /**
   * Updates the options the `IssuingAddToWalletButtonElement` was initialized with.
   * Updates are merged into the existing configuration.
   */
  update(options: Partial<StripeIssuingAddToWalletButtonElementOptions>): void;
};

export interface StripeIssuingAddToWalletButtonElementOptions {
  /**
   * The token (e.g. `ic_abc123`) of the issued card to add to the user's wallet.
   */
  issuingCard: string;

  /**
   * The secret component of the ephemeral key with which to authenticate this sensitive
   * card provisioning request
   */
  ephemeralKeySecret: string;

  /**
   * The nonce used to mint the ephemeral key provided in `ephemeralKeySecret`
   */
  nonce: string;

  /**
   * The type of Add to Wallet button to display. For now, only 'apple' is supported.
   */
  wallet: 'apple';

  /**
   * The height of the button in pixels. Defaults to 44px.
   * Must be between 36px and 55px.
   */
  buttonHeight?: number;
}
