import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard-styles/booking.css";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    plateNumber: "",
    destination: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
const navigate=useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Save destinationName in localStorage
    localStorage.setItem("destinationName", formData.destination);
    console.log("Booking Data:", formData);
    // Proceed to next page (for example)
    alert("Booking Successful!");
    // Redirect to parking spots page
    navigate("/availableParking")
  };

  return (
    <div className="booking-container">
      <h2>Book Your Parking Spot</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Plate Number</label>
        <input
          type="text"
          name="plateNumber"
          placeholder="Enter your plate number"
          value={formData.plateNumber}
          onChange={handleChange}
          required
        />

        <label>Destination</label>
        <input
          type="text"
          name="destination"
          placeholder="Enter your destination"
          value={formData.destination}
          onChange={handleChange}
          required
        />

        <label>Phone Number</label>
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Enter your phone number"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />

        <button type="submit">NEXT</button>
      </form>
    </div>
  );
};

export default BookingForm;
