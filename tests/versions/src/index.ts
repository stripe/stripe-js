import {loadStripe} from '@stripe/stripe-js';

const main = async (): Promise<void> => {
  // setup DOM
  const rootNode = document.getElementById('root')!;
  const form = document.createElement('form');
  const cardWrapper = document.createElement('div');
  const button = document.createElement('button');
  button.innerText = 'Pay';
  form.appendChild(cardWrapper);
  form.appendChild(button);
  rootNode.appendChild(form);

  // setup Stripe.js and Elements
  const stripe = (await loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx'))!;
  const elements = stripe.elements();

  // setup Card Element
  const cardElement = elements.create('card', {});
  cardElement.mount(cardWrapper);

  // handle form submit
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const payload = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });
    console.log('[PaymentMethod]', payload);
  });
};

main();
