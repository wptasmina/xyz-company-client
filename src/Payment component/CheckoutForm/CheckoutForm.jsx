// import React, { useState } from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements, useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
// import axios from "axios";

// const stripePromise = loadStripe("YOUR_STRIPE_PUBLIC_KEY");

// const CheckoutForm = ({ amount }) => {
//     const stripe = useStripe();
//     const elements = useElements();
//     const [message, setMessage] = useState("");

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         const { error, paymentIntent } = await stripe.confirmCardPayment(
//             "CLIENT_SECRET", // Fetch from backend
//             {
//                 payment_method: {
//                     card: elements.getElement(CardElement),
//                 },
//             }
//         );

//         if (error) {
//             setMessage(error.message);
//         } else if (paymentIntent.status === "succeeded") {
//             setMessage("Payment Successful!");
//             // Handle successful payment logic here (e.g., update user package)
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <CardElement />
//             <button
//                 type="submit"
//                 disabled={!stripe || !elements}
//                 className="bg-blue-600 text-white px-4 py-2 mt-4 rounded"
//             >
//                 Pay ${amount}
//             </button>
//             {message && <p className="mt-2">{message}</p>}
//         </form>
//     );
// };

// export default CheckoutForm;