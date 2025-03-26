import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Notify } from 'notiflix';
import './dashboard-styles/customertable.css'; // Import CSS for styling

export default function TodayBookingTable() {
  const [bookings, setBooking] = useState([]);
  const fetchBooking = async () => {
    try {
      const token = localStorage.getItem("token"); // Check if token exists
      if (!token) {
        Notify.failure("No authentication token found!");
        return;
      }
      const response = await axios.get('http://localhost:4000/SpotSure/booking/todayBooking' , 
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setBooking(response.data.data || []);
    } catch (error) {
      console.error("Error fetching booking:", error);
      Notify.failure('Failed to fetch bookings');
    }
  };

  useEffect(() => {
    fetchBooking();
  }, []);

  return (
    <div className="table-container">
      <table className="customer-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Plate Number</th>
            <th>Booking Duration</th>
            <th>Total Price</th>
            <th>Status</th>
            <th>Payment Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={index} className={`row-${index % 3}`}>
              <td>{booking.username}</td>
              <td>{booking.plateNumber}</td>
              <td>{booking.bookingDuration} hours</td>
              <td>{booking.totalPrice} RWF</td>
              <td>{booking.status}</td>
              <td>{booking.PaymentStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
