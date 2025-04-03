import { useState, useEffect } from "react";
import "./dashboard-styles/bookingForm.css";
import {Notify} from "notiflix"
import { useNavigate } from "react-router-dom";
const BookingForm = () => {
  const [bookingDuration, setBookingDuration] = useState("");
  const [plateNumber, setPlateNumber] = useState("");
  const [parkingid, setParkingid] = useState("");
  const[ParkingName, setParkingName] = useState("");
const navigate=useNavigate();
  useEffect(() => {
    // Retrieve the parking ID from localStorage
    const storedParkingId = localStorage.getItem("selectedParkingId");
    if (storedParkingId) {
      setParkingid(storedParkingId);
    }
    const storedParkingName=localStorage.getItem("selectedParkingName");
    if (storedParkingName) {
      setParkingName(storedParkingName);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!parkingid) {
      Notify.failure( "No parking spot selected!");
    }

    const bookingData = { bookingDuration, parkingid, plateNumber,ParkingName };
    try {
      const response = await fetch("https://spotsure-backend-e4nq.onrender.com/SpotSure/booking/newBooking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(bookingData),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to book parking");
      }

      Notify.success(data.message);
    // ✅ Store booking ID for confirmation page
        localStorage.setItem("bookingId", data.data._id);

     // ✅ Redirect user to confirmation page for QR Code scanning
        navigate("/confirm");
    } catch (error) {
      Notify.failure( error.message);
    }
  };

  return (
    <div className="booking-container">
      <h2>Book a Parking Spot</h2>
      <form onSubmit={handleSubmit}>
        <label>Booking Duration (Hours):</label>
        <input
          type="number"
          value={bookingDuration}
          onChange={(e) => setBookingDuration(e.target.value)}
          required
        />

        <label>Selected Parking </label>
        <input type="password" value={parkingid} disabled />
        <label>Parking Name:</label>
        <input type="text" value={ParkingName} disabled />

        <label>Plate Number:</label>
        <input
          type="text"
          value={plateNumber}
          onChange={(e) => setPlateNumber(e.target.value)}
          required
        />

        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default BookingForm;
