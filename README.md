# Stripe.js ES Module

Use [Stripe.js](https://stripe.com/docs/stripe-js) as an ES module.

**Note**: For compliance reasons, Stripe.js must be loaded directly from
`https://js.stripe.com`, and cannot be included in a bundle or hosted yourself.
This package wraps the global `Stripe` function provided by the Stripe.js
script as an ES module.

[![npm version](https://img.shields.io/npm/v/@stripe/stripe-js.svg?style=flat-square)](https://www.npmjs.com/package/@stripe/stripe-js)

## Usage

### `Stripe`

To use the exported `Stripe` function, first include the Stripe.js script on
each page of your site.

```html
<script src="https://js.stripe.com/v3/"></script>
```

Then import and use Stripe.js as you would any other module. 

```js
import {Stripe} from '@stripe/stripe-js';

const stripe = Stripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
```

We’ve placed a random API key in this example. Replace it with your [actual
publishable API keys](https://dashboard.stripe.com/account/apikeys) to test
this code through your Stripe account.

For more information on how to use Stripe.js, please refer to the [Stripe.js
API reference](https://stripe.com/docs/js) or learn to [accept
a payment](https://stripe.com/docs/payments/accept-a-payment) with Stripe.

### `loadStripe`

This function returns a `Promise` that resolves with a newly created `Stripe`
object once Stripe.js has loaded. If necessary, it will load Stripe.js for you
by inserting the Stripe.js script tag.

```js
import {loadStripe} from '@stripe/stripe-js';

const stripe = await loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
```

We’ve placed a random API key in this example. Replace it with your [actual
publishable API keys](https://dashboard.stripe.com/account/apikeys) to test
this code through your Stripe account.

For more information on how to use Stripe.js once it loads, please refer to the
[Stripe.js API reference](https://stripe.com/docs/js) or learn to [accept
a payment](https://stripe.com/docs/payments/accept-a-payment) with Stripe.

## Ensuring Stripe.js is available everywhere

To best leverage Stripe’s advanced fraud functionality, ensure that Stripe.js
is loaded on every page, not just your checkout page. This allows Stripe to
detect anomalous behavior that may be indicative of fraud as customers browse
your website.

If you are adding the `<script>` tag manually, make sure you do so on every
page. If you are relying on the script insertion that this module provides, and
you utilize code splitting or only include your JavaScript app on your checkout
page, you will need to take extra steps to ensure Stripe.js is available
everywhere.

### Import as a side effect

Import `@stripe/stripe-js` as a side effect in code that will be included
throughout your site (e.g. your root module). This will make sure the Stripe.js
script tag is inserted immediately upon page load.

```js
import '@stripe/stripe-js';
```

### Manually include the script tag

Manually add the Stripe.js script tag to the `<head>` of each page on your
site. If you use `loadStripe`, it will use this script tag rather than
inserting a new one.

```html
<!-- Somewhere in your site's <head> -->
<script src="https://js.stripe.com/v3" async></script>
```

## Stripe.js Documentation

- [Stripe.js Docs](https://stripe.com/docs/stripe-js)
- [Stripe.js Reference](https://stripe.com/docs/api)
- [React Stripe.js Docs](https://stripe.com/docs/stripe-js/react)

### Contributing

If you would like to contribute to React Stripe.js, please make sure to read
our [contributor guidelines](CONTRIBUTING.md).
