# ES Module for Stripe.js

Import and use [Stripe.js](https://stripe.com/docs/stripe-js) as an ES module.
[![build status](https://img.shields.io/travis/stripe/stripe-js/master.svg?style=flat-square)](https://travis-ci.org/stripe/stripe-js)
[![npm version](https://img.shields.io/npm/v/@stripe/stripe-js.svg?style=flat-square)](https://www.npmjs.com/package/@stripe/stripe-js)

Stripe.js cannot be bundled with your code; it must be served from
**https//js</span>.<span>stripe</span>.<span>com/v3**. This module wraps the
global `Stripe` function provided by the Stripe.js script. If needed, it will
inject the script for you and provide a loading wraper.

## Documentation

### `Stripe()`

To use the exported `Stripe()` function, first include the Stripe.js script on
each page of your site.

```html
<script src="https://js.stripe.com/v3/"></script>
```

Then import and use Stripe.js as you would any other module. For more
information on how to use Stripe.js, please refer to the
[Stripe.js API reference](https://stripe.com/docs/api) or learn to
[accept a payment](https://stripe.com/docs/payments/accept-a-payment) with
Stripe.

```js
import {Stripe} from '@stripe/stripe-js';

const stripe = Stripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
```

We‘ve placed a random API key in the code. Replace it with your
[actual publishable API keys](https://dashboard.stripe.com/account/apikeys) to
test this code through your Stripe account.

### `loadStripe()`

Use this function if you do not want to mess around with adding `<script>` tags,
or want to speed up the initial load time on your site. It will inject the
Stripe.js script tag for you and wait for it to load. For more information on
how to use Stripe.js once it loads, please refer to the
[Stripe.js API reference](https://stripe.com/docs/api) or learn to
[accept a payment](https://stripe.com/docs/payments/accept-a-payment) with
Stripe.

```js
import {loadStripe} from '@stripe/stripe-js';

const stripe = await loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
```

We‘ve placed a random API key in the code. Replace it with your
[actual publishable API keys](https://dashboard.stripe.com/account/apikeys) to
test this code through your Stripe account.

## Ensuring Stripe.js is available everywhere

To best leverage Stripe’s advanced fraud functionality, ensure that Stripe.js is
loaded on every page, not just the checkout page. This allows Stripe to detect
anomalous behavior that may be indicative of fraud as customers browse your
website.

If you are adding the `<script>` tag manually, make sure you do so on every
page. If you are relying on the script injection that this module provides, and
you utilize code splitting or only include your JavaScript app on your checkout
page, you will need to take extra steps to ensure Stripe.js is available
everywhere.

### Import as a side effect

Import `@stripe/stripe-js` as a side effect in code that will be included
throughout your site (e.g. your root module). This will make sure the Stripe.js
script tag is injected right away.

```js
import '@stripe/stripe-js';
```

### Manually include the script tag

Manually add the Stripe.js script tag to the `<head>` of each page on your site.
If you use `loadStripe`, it will use this script tag rather tha injecting a new 
one.

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
