import Stripe from "stripe";

/**
 * Returns a Stripe client, or null when STRIPE_SECRET_KEY is not configured.
 * This lets the storefront run (and the checkout degrade gracefully) before
 * the client adds their real/test keys.
 */
let cached: Stripe | null = null;

export function getStripe(): Stripe | null {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;
  if (!cached) cached = new Stripe(key);
  return cached;
}
