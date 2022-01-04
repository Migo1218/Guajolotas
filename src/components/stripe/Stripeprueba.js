import React, { useContext } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from 'axios'

import "bootswatch/dist/lux/bootstrap.min.css";
import { ContextoCarrito } from "../../routes/AppRouter";

const stripePromise = loadStripe(
  "pk_test_51JzRwEFv8Sdb0JlyjievtY6rQVGzxhHGgGOECxSxNS7mxbYgJ22X6a1DaaHlAdhtIiGaNBs83H6sn5U95RdqTiDj00BB65Hfs5"
);
const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if(!error){
       const {id} = paymentMethod

       const {data} = await axios.post('/http://localhost:3001/api/checkout', {
         id,
         amount: 10000
       })
       console.log(data)
    }
  };

  const { carrito } = useContext(ContextoCarrito);
  console.log(carrito);

  return (
    <form onSubmit={handleSubmit} className="card">
      <img
        src={carrito.producto.imagen}
        alt="imagenproducto"
        className="img-fluid"
      />

      <h3 className="text-center my-2">Precio : 100$</h3>
      <div className="form-group">
      <CardElement className="form-control" />
      </div>
      
      <button className="btn btn-success">Comprar</button>
    </form>
  );
};

const Stripeprueba = () => {
  return (
    <Elements stripe={stripePromise}>
      <div className="container p-4">
        <CheckoutForm />
      </div>
    </Elements>
  );
};

export default Stripeprueba;
