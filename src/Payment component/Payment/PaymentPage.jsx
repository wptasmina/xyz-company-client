


const PaymentPage = ({ amount }) => (
  <Elements stripe={stripePromise}>
      <CheckoutForm amount={amount} />
  </Elements>
);

export default PaymentPage;
