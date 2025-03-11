import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard-styles/booking.css";
import {useDarkMode} from "./context/DarkModeContext"
const BookingForm = () => {
  const [formData, setFormData] = useState({
    destination: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
const navigate=useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Save destinationName in localStorage
    localStorage.setItem("destinationName", formData.destination);
    // Redirect to parking spots page
    navigate("/availableParking")
  };
   const {theme}=useDarkMode();
  return (
    <div className={`booking-container ${theme}`}>
      <h2>Find Near Parking Available</h2>
      <form onSubmit={handleSubmit}>
        <label>Destination</label>
        <input
          type="text"
          name="destination"
          placeholder="Enter your destination"
          value={formData.destination}
          onChange={handleChange}
          required
        />

        <button type="submit">NEXT</button>
      </form>
    </div>
  );
};

export default BookingForm;
