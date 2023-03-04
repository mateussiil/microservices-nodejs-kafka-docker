import Stripe from 'stripe';

import config from '@app/config';

const stripe = new Stripe(config.STRIPE_SECRET_KEY!, {
  apiVersion: '2022-11-15',
});

export default stripe;
