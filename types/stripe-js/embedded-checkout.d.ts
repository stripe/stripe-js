export interface StripeEmbeddedCheckoutOptions {
  clientSecret: string;
  onComplete?: () => void;
}

export interface StripeEmbeddedCheckout {
  mount(location: string | HTMLElement): void;
  unmount(): void;
  destroy(): void;
}
