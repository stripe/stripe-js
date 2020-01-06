# ES Module for Stripe.js

Import and use [Stripe.js](https://stripe.com/docs/stripe-js) as an ES module.
[![build status](https://img.shields.io/travis/stripe/stripe-js/master.svg?style=flat-square)](https://travis-ci.org/stripe/stripe-js)
[![npm version](https://img.shields.io/npm/v/@stripe/stripe-js.svg?style=flat-square)](https://www.npmjs.com/package/@stripe/stripe-js)

This project is a thin loading wraper around Stripe.js. Stripe.js cannot be
bundled with your code; it must be served from `https://js.stripe.com/v3`. This
module works by injecting the script for you.

## Basic Usage

`Stripe` cannot be imported directly because the injected Stripe.js script loads
asynchronously. Use `loadStripe`, which will resolve once the Stripe.js script
is loaded.

```js
import {loadStripe} from '@stripe/stripe-js';

const Stripe = await loadStripe();
const stripe = Stripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
```

We‘ve placed a random API key in the code. Replace it with your
[actual publishable API keys](https://dashboard.stripe.com/account/apikeys) to
test this code through your Stripe account.

## Ensuring Stripe.js is available everywhere

When imported, the Stripe.js module will asynchronously inject a script tag as a
side effect. To reduce fraud and costly chargebacks, make sure this script tag
is injected on every page. If you are utilizing code splitting, or if you do not
include the code that imports `@stripe/stripe-js` on every page of your site,
then you will need to take extra steps to ensure Stripe.js is avaiable
everwhere.

### Code Splitting

When using code splitting, import `@stripe/stripe-js` in your root module even
if you do not need to use Stripe.js there. This will make sure the Stripe.js
script tag is injected right away.

```js
// Somewhere near the top of your root module
import '@stripe/stripe-js';
```

### Server rendered and static sites

If the code that imports `@stripe/stripe-js` is only included on part of your
site, ensure that Stripe.js loads on all pages by manually adding the Stripe.js
script tag to the `<head>` of your site.

```html
<!-- Somewhere in your site's <head> -->
<script src="https://js.stripe.com/v3" async></script>
```

The part of your site that calls `loadStripe()` will use the existing script tag
rather than injecting a new one.

## Stripe.js Documentation

- [Stripe.js Docs](https://stripe.com/docs/stripe-js)
- [Stripe.js Reference](https://stripe.com/docs/api)
- [React Stripe.js Docs](https://stripe.com/docs/stripe-js/react)

### Contributing

If you would like to contribute to React Stripe.js, please make sure to read our
[contributor guidelines](CONTRIBUTING.md).
