import loadStripe from '../../../src';

(async () => {
  // setup DOM
  const rootNode = document.getElementById('root');
  const form = document.createElement('form');
  const cardWrapper = document.createElement('div');
  const button = document.createElement('button');
  button.innerText = 'Pay';
  form.appendChild(cardWrapper);
  form.appendChild(button);
  rootNode.appendChild(form);

  // setup Stripe.js and Elements
  const Stripe = await loadStripe();
  const stripe = Stripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
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
})();
