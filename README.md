# ES Module for Stripe.js

Import and use [Stripe.js](https://stripe.com/docs/stripe-js) as an ES module.
[![build status](https://img.shields.io/travis/stripe/stripe-js/master.svg?style=flat-square)](https://travis-ci.org/stripe/stripe-js)
[![npm version](https://img.shields.io/npm/v/@stripe/stripe-js.svg?style=flat-square)](https://www.npmjs.com/package/@stripe/stripe-js)

Stripe.js cannot be bundled with your code; it must be served from
**https//js</span>.<span>stripe</span>.<span>com/v3**. This module injects the
script for you and provides a thin loading wraper around Stripe.js.

## Basic Usage

`Stripe` cannot be imported directly because the injected Stripe.js script will
load asynchronously. Use `loadStripe`, which will resolve once the Stripe.js
script is loaded.

```js
import {loadStripe} from '@stripe/stripe-js';

const Stripe = await loadStripe();
const stripe = Stripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
```

We‘ve placed a random API key in the code. Replace it with your
[actual publishable API keys](https://dashboard.stripe.com/account/apikeys) to
test this code through your Stripe account.

## Ensuring Stripe.js is available everywhere

When imported, the Stripe.js module will inject an async script tag as a side
effect. To reduce fraud and costly chargebacks, make sure this script tag is
present on every page. If you are utilizing code splitting, or if you do not
include the code that imports `@stripe/stripe-js` on every page of your site,
then you will need to take extra steps to ensure Stripe.js is avaiable
everwhere.

### Import as a side effect

Import `@stripe/stripe-js` as a side effect in code that will be included
throughout your site (e.g. your root module). This will make sure the Stripe.js
script tag is injected right away.

```js
import '@stripe/stripe-js';
```

### Manually include the script tag

Ensure that Stripe.js loads on all pages by manually adding the Stripe.js script
tag to the `<head>` of your site. When `loadStripe()` is called it will use the
existing script tag rather than injecting a new one.

```html
<!-- Somewhere in your site's <head> -->
<script src="https://js.stripe.com/v3" async></script>
```

## Stripe.js Documentation

- [Stripe.js Docs](https://stripe.com/docs/stripe-js)
- [Stripe.js Reference](https://stripe.com/docs/api)
- [React Stripe.js Docs](https://stripe.com/docs/stripe-js/react)

### Contributing

If you would like to contribute to React Stripe.js, please make sure to read our
[contributor guidelines](CONTRIBUTING.md).
