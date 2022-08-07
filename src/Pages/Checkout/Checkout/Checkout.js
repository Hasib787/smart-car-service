import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import Payment from "../Payment";

const stripePromise = loadStripe(
  "pk_test_51IfDb4BioGMnkIPG0h9x4j8eeFW1xQoO3i0TXhQoEBMcmgp8vcwhH1jkQAqhgysYRZccp6JTcWypP3WHXYUcdjox00vTTu5vRk"
);

const Checkout = () => {
  return (
    <div className="App mt-5">
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Please add your Card info</h5>
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
