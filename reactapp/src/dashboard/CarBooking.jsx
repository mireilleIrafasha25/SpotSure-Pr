import axios from "axios";
import { useState, useEffect } from "react";
import { Notify } from "notiflix";

const styles = {
  container: { padding: "20px", fontFamily: "Arial, sans-serif",marginLeft:"6rem" },
  table: { width: "100%", borderCollapse: "collapse", marginBottom: "20px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" },
  th: { backgroundColor: "#022F4A", color: "white", padding: "10px", border: "1px solid #ddd", textAlign: "left", fontSize: "14px" },
  td: { padding: "10px", border: "1px solid #ddd", textAlign: "left", fontSize: "12px" },
  stripedRow: { backgroundColor: "none" },
  normalRow: { backgroundColor: "none" },
  deleteButton: { backgroundColor: "red", color: "white", padding: "5px 10px", border: "none", borderRadius: "5px", cursor: "pointer", marginLeft: "10px" },
  editButton: { backgroundColor: "#022F4A", color: "white", padding: "5px 10px", border: "none", borderRadius: "5px", cursor: "pointer" },
};

const CarOwnerBooking = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [editUser, setEditUser] = useState(null);
  const [editedName, setEditedName] = useState("");
  
  useEffect(() => {
    handleGetBookingByUser();
  }, []);

  const handleGetBookingByUser = async (id) => {
  setLoading(true);
    try {
    const response=  await axios.get(`http://localhost:4000/SpotSure/booking/getBookingByUser/${id}`);
      Notify.success(response.data.data);
      setBookings(bookings.filter(booking => booking.user !== id)); // Instead of user.id, use user._id
    } catch (error) {
      console.error("Error deleting user:", error);
      Notify.failure("Failed to delete user.");
    }
  };

  
  
  

  return (
    <div style={styles.container}>
      <h1 style={{ color: "#022F4A" }}>All Booking</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && users.length > 0 ? (
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Email</th>
              <th style={styles.th}>Role</th>
              <th style={styles.th}>Verified</th>
              <th style={styles.th}>Actions</th>
  
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id} style={index % 2 === 0 ? styles.stripedRow : styles.normalRow}>
                <td style={styles.td}>{user.Name}</td>
                <td style={styles.td}>{user.email}</td>
                <td style={styles.td}>{user.role}</td>
                <td style={styles.td}>{user.verified ? "Yes" : "No"}</td>
                <td style={styles.td}>
                  <div>
                    <button style={styles.editButton} onClick={() => handleEdit(user)}>Edit</button>
                    <button style={styles.deleteButton} onClick={() => handleDelete(user._id)}>Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        !loading && !error && <p>No users found.</p>
      )}

      {/* Edit User Form */}
      {editUser && (
        <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ddd", borderRadius: "5px" }}>
          <h3>Edit User</h3>
          <input type="text" value={editedName} onChange={(e) => setEditedName(e.target.value)} />
          <button style={styles.editButton} onClick={handleUpdate}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default CarOwnerBooking;
