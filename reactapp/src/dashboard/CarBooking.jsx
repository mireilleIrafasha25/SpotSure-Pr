import axios from "axios";
import { useState, useEffect } from "react";
import { Notify } from "notiflix";

const styles = {
  container: { padding: "20px", fontFamily: "Arial, sans-serif", marginLeft: "6rem" },
  table: { width: "100%", borderCollapse: "collapse", marginBottom: "20px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" },
  th: { backgroundColor: "#022F4A", color: "white", padding: "10px", border: "1px solid #ddd", textAlign: "left", fontSize: "14px" },
  td: { padding: "10px", border: "1px solid #ddd", textAlign: "left", fontSize: "12px" },
  stripedRow: { backgroundColor: "none" },
  normalRow: { backgroundColor: "none" },
};

const CarOwnerBooking = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token"); // Get token from storage

  console.log("Token from localStorage:", token);

  useEffect(() => {
    if (userId) {
      handleGetBookingByUser();
    }
  }, [userId]);

  const handleGetBookingByUser = async () => {
    setLoading(true);
    setError(""); // Reset error before fetching

    try {
      if (!token) {
        console.error("No token found. User is not authenticated.");
        setError("User not authenticated.");
        setLoading(false);
        return;
      }

      const response = await axios.get(
        `http://localhost:4000/SpotSure/booking/getBookingByUser/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("API Response:", response.data);
      Notify.success("Bookings retrieved successfully");

      // ✅ Update bookings with the data from API
      setBookings(response.data.data);
    } catch (error) {
      console.error("Error fetching booking:", error);
      setError("Failed to fetch booking.");
      Notify.failure("Failed to fetch booking.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={{ color: "#022F4A" }}>All Booking</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && bookings.length > 0 ? (
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Parking Name</th>
              <th style={styles.th}>Plate Number</th>
              <th style={styles.th}>Duration</th>
              <th style={styles.th}>Total Price</th>
              <th style={styles.th}>Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={booking._id} style={index % 2 === 0 ? styles.stripedRow : styles.normalRow}>
                <td style={styles.td}>{booking.parkingName}</td>
                <td style={styles.td}>{booking.plateNumber}</td>
                <td style={styles.td}>{booking.duration}</td>
                <td style={styles.td}>{booking.totalPrice}</td>
                <td style={styles.td}>{booking.paymentStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        !loading && !error && <p>No Booking found.</p>
      )}
    </div>
  );
};

export default CarOwnerBooking;
