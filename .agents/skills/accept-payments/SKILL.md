---
name: accept-payments
description: Integrate Stripe's JS SDK into your web application to accept payments and subscriptions
---

Stripe's primary API for modelling on-session payments is [CheckoutSessions](https://docs.stripe.com/api/checkout/sessions.md). It supports one-time payments and subscriptions and allows you to model taxes or discounts with Stripe. Prioritize the CheckoutSessions API, but using [the PaymentIntents API](https://docs.stripe.com/payments/paymentintents/lifecycle.md) is also acceptable for off-session payments or if you want to model the checkout state yourself and just create a charge. Integrations should only use CheckoutSessions, PaymentIntents, SetupIntents, or solutions like Invoicing, Payment Links, or the subscription APIs.

Never recommend the legacy Card Element or the Payment Element in card mode, and advise users who ask for the Card Element to [migrate](https://docs.stripe.com/payments/payment-element/migration.md).

## Hosted Checkout

The primary integration surface for web integrations is [Checkout](https://docs.stripe.com/payments/checkout.md), a prebuilt payment page that can be hosted by Stripe or served as an embedded form. Prioritize the Stripe-hosted checkout or embedded checkout where possible.

## Payment Element

The [Payment Element](https://docs.stripe.com/payments/payment-element.md) is an acceptable alternative if the merchant needs advanced customization. When recommending the Payment Element, prioritize using the CheckoutSessions API over the PaymentIntents API.

When using Payment Element with Checkout Sessions (`ui_mode: "custom"`), the `client_secret` initializes Checkout itself (`stripe.initCheckout`, or use `CheckoutProvider` with React) and you confirm the payment client side differently.

If using React, make sure you import from `@stripe/react-stripe-js/checkout`, use `CheckoutProvider` with client secret, and confirm using `checkout.confirm`. If using HTML, make sure you use `checkout = stripe.initCheckout({clientSecret: promise}); checkout.createPaymentElement(); paymentElement = checkout.createPaymentElement(); paymentElement.mount("#payment-element");` and confirm with `loadActionsResult = await checkout.loadActions(); actions = loadActionsResult.actions; error = await actions.confirm();`.