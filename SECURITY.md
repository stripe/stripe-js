# Security

## Reporting Security Issues

To report a security vulnerability in Stripe.js or any Stripe product, please
use Stripe's responsible disclosure program described at
https://stripe.com/docs/security. Do not open a public GitHub issue for
security vulnerabilities.

## Why SRI is Not Supported

Stripe.js is loaded directly from Stripe's CDN (`https://js.stripe.com`) and
is updated continuously to respond to emerging fraud vectors and PCI DSS
compliance requirements. Pinning a specific version via a Subresource Integrity
(SRI) hash would prevent these security updates from reaching your users, which
could result in outdated fraud detection and potential PCI compliance issues.

The CDN serves Stripe.js exclusively over HTTPS. The integrity of the
connection is ensured by TLS and Stripe's certificate — not SRI. This is
consistent with Stripe's PCI DSS obligations, which require that the script be
loaded from Stripe's servers at all times. See:
https://stripe.com/docs/security/guide#validating-pci-compliance

Customers who need additional assurance can restrict which scripts are
permitted to load by configuring a Content Security Policy (CSP) with
`script-src` set to allowlist only `https://js.stripe.com`. See the README for
CSP guidance.

## Stripe.js Cookies (`__stripe_mid`, `__stripe_sid`)

The `__stripe_mid` and `__stripe_sid` cookies are set and managed entirely by
Stripe.js for fraud detection and abuse prevention (for example, card testing
detection). They are device- and browser-level identifiers used by Stripe's
risk models.

These cookies intentionally do **not** have the `HttpOnly` attribute because
Stripe.js reads them client-side for cross-tab session continuity and
correlation. They do **not** contain user session credentials or authentication
tokens, so the standard motivation for `HttpOnly` (preventing script access to
session cookies) does not apply here.

Security scanners may flag the absence of `HttpOnly` on these cookies. This is
a known, intentional design decision and is not a vulnerability. See:
https://stripe.com/docs/security/guide
