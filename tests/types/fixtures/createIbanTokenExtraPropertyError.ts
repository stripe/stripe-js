///<reference path='../../../types/index.d.ts' />

import {Stripe, StripeElements, StripeIbanElement} from '@stripe/stripe-js';

declare const stripe: Stripe;

const elements: StripeElements = stripe.elements();

const ibanElement: StripeIbanElement = elements.create('iban');

stripe.createToken(ibanElement, {
  currency: '',
  account_holder_name: '',
  extra_property: '',
});
