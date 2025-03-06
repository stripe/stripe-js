import {RELEASE_TRAIN} from './shared';

export const SCRIPT_SRC =
  RELEASE_TRAIN === 'v3'
    ? `https://js.stripe.com/v3`
    : `https://js.stripe.com/${RELEASE_TRAIN}/stripe.js`;
