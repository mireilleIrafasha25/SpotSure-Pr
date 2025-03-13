import { useState, useEffect } from "react";
import "./dashboard-styles/bookingForm.css";
const BookingForm = () => {
  const [bookingDuration, setBookingDuration] = useState("");
  const [plateNumber, setPlateNumber] = useState("");
  const [parkingid, setParkingid] = useState("");
  const [message, setMessage] = useState(null);

  useEffect(() => {
    // Retrieve the parking ID from localStorage
    const storedParkingId = localStorage.getItem("selectedParkingId");
    if (storedParkingId) {
      setParkingid(storedParkingId);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!parkingid) {
      setMessage({ type: "error", text: "No parking spot selected!" });
      return;
    }

    const bookingData = { bookingDuration, parkingid, plateNumber };

    try {
      const response = await fetch("http://localhost:4000/SpotSure/booking/newBooking", {
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

      setMessage({ type: "success", text: data.message });
      localStorage.removeItem("selectedParkingId"); // Clear selected parking after booking
    } catch (error) {
      setMessage({ type: "error", text: error.message });
    }
  };

  return (
    <div className="booking-container">
      <h2>Book a Parking Spot</h2>
      {message && (
        <div className={`message ${message.type}`}>{message.text}</div>
      )}
      <form onSubmit={handleSubmit}>
        <label>Booking Duration (Hours):</label>
        <input
          type="number"
          value={bookingDuration}
          onChange={(e) => setBookingDuration(e.target.value)}
          required
        />

        <label>Selected Parking ID:</label>
        <input type="text" value={parkingid} disabled />

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
