# Contributing to Stripe.js

This project is maintained by Stripe and does not accept external pull requests.
We welcome bug reports and feature requests as issues.

## Issues

This project is a very thin loading wrapper around Stripe.js. Please only file
issues here that you believe represent bugs with the loader, not Stripe.js
itself.

If you're having general trouble with Stripe.js or your Stripe integration,
please reach out to us using the form at <https://support.stripe.com/email> or
come chat with us on the [Stripe Discord server][developer-chat]. We're very
proud of our level of service, and we're more than happy to help you out with
your integration.

If you've found a bug in the Stripe.js loading wrapper, please [let us
know][issue]!

## Developing

Install dependencies:

```sh
yarn install
```

We use a number of automated checks:

- Jest, for testing
  - `yarn test`
- ESLint, for assorted warnings
  - `yarn run lint`
- Prettier, for code formatting
  - `yarn run prettier`

You might want to configure your editor to automatically run these checks. Not
passing any of these checks will cause the CI build to fail.

[issue]: https://github.com/stripe/stripe-js/issues/new/choose
[developer-chat]: https://stripe.com/go/developer-chat
