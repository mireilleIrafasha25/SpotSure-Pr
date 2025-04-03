import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt, faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { FaMobileScreenButton } from "react-icons/fa6";
import axios from "axios";

const PaymentForm = () => {
  const [paymentMethod, setPaymentMethod] = useState("mobileMoney");
  const [amount, setAmount] = useState("");
  const [parkingId, setParkingId] = useState("");
  const [message, setMessage] = useState("");

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!amount || !parkingId) {
      setMessage("Please fill in all fields.");
      return;
    }

    const userId = "someUserId"; // Replace with actual user ID (e.g., from session or JWT)

    const paymentData = {
      userId,
      amount,
      parkingid: parkingId,
      paymentMethod
    };

    try {
      const response = await axios.post("http://localhost:5000/fake-payment", paymentData);
      setMessage(`Payment successful! Transaction ID: ${response.data.transaction.id}`);
    } catch (error) {
      setMessage("Payment failed. Please try again.");
    }
  };

  return (
    <div>

      <form onSubmit={handleSubmit}>
        <div>
          <p>Hi Katsu .. amount to be paid is ... for ... </p>
        </div>

        <button type="submit" style={{backgroundColor:"orangered",width:"150px"}}>Pay Now</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default PaymentForm;
