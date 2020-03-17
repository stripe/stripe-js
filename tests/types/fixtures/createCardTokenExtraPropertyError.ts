///<reference path='../../../types/index.d.ts' />

import {Stripe, StripeElements, StripeCardElement} from '@stripe/stripe-js';

declare const stripe: Stripe;

const elements: StripeElements = stripe.elements();

const cardElement: StripeCardElement = elements.create('card');

stripe.createToken(cardElement, {
  currency: '',
  name: '',
  extra_property: '',
});
