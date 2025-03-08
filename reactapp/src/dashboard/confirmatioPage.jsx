import React from "react";
import { QRCodeCanvas } from "qrcode.react";
import "../styles/confirmationpage.css";

const BookingConfirmation = () => {
  const booking = {
    _id: "ABC123",
    parkingName: "Parking Spot 1",
    location: "Kigali",
    parkingSpotId: "PS01",
    bookingDate: "2022-01-15",
    bookingDuration: 2,
    totalPrice: 4000,
  };

  const qrValue = `BookingID: ${booking._id}`;
  console.log("QR Code Value:", qrValue); // Check if the value is correct

  return (
    <div className="confirmation-container">
      <div className="booking-details">
        <h2>Booking Confirmed! 🎉</h2>
        <p><strong>Parking Name:</strong> {booking.parkingName}</p>
        <p><strong>Location:</strong> {booking.location}</p>
        <p><strong>Spot:</strong> {booking.parkingSpotId}</p>
        <p><strong>Booking Date:</strong> {booking.bookingDate}</p>
        <p><strong>Duration:</strong> {booking.bookingDuration} hours</p>
        <p><strong>Total Price:</strong> {booking.totalPrice} RWF</p>
      </div>

      <div className="qr-code">
        <h3>Scan to Check-in 🚗</h3>
        <QRCodeCanvas value={qrValue} size={180} />
      </div>
    </div>
  );
};

export default BookingConfirmation;
