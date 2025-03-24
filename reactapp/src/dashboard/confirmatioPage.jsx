import React, { useEffect, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import "./dashboard-styles/confirmationpage.css";
import axios from "axios";
import { Notify } from "notiflix";

const BookingConfirmation = () => {
  const [booking, setBooking] = useState(null); // State for booking data
  const bookingId = localStorage.getItem("bookingId");

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const response = await axios.get(
          `https://spotsure-backend-e4nq.onrender.com/SpotSure/booking/getBooking/${bookingId}`
        );
        setBooking(response.data.data); // ✅ Use actual API response
        Notify.success("Booking details loaded!");
      } catch (error) {
        Notify.failure(
          error.response?.data?.message || "Failed to fetch booking details"
        );
      }
    };
    fetchBooking();
  }, [bookingId]);

  if (!booking) {
    return <p>Loading booking details...</p>;
  }

  // QR Code should contain useful information for verification
  const qrValue = JSON.stringify({
    bookingId: booking._id,
    username: booking.username,
    plateNumber: booking.plateNumber,
    bookingDuration: booking.bookingDuration,
    paymentStatus: booking.PaymentStatus,
    bookingDate: booking.bookingDate,
  });

  return (
    <div className="confirmation-container">
      <div className="booking-details">
        <h2>Booking Confirmed! 🎉</h2>
        <p><strong>Username:</strong> {booking.username}</p>
        <p><strong>Plate Number:</strong> {booking.plateNumber}</p>
        <p><strong>Booking Duration:</strong> {booking.bookingDuration} hours</p>
        <p><strong>Total Price:</strong> {booking.totalPrice} RWF</p>
        <p><strong>Payment Status:</strong> {booking.PaymentStatus}</p>
        <p><strong>Booking Date:</strong> {new Date(booking.bookingDate).toLocaleString()}</p>
      </div>

      <div className="qr-code">
        <h3>Scan to Verify 🚗</h3>
        <QRCodeCanvas value={qrValue} size={180} />
      </div>
    </div>
  );
};

export default BookingConfirmation;
