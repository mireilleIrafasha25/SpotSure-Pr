import axios from "axios";
import { useState, useEffect } from "react";

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  th: {
    backgroundColor: "#1890ff", // Dark blue
    color: "white",
    padding: "10px",
    border: "1px solid #ddd",
    textAlign: "left",
    fontSize:"14px",
  },
  td: {
    padding: "10px",
    border: "1px solid #ddd",
    textAlign: "left",
    fontSize:"12px",
  },
  stripedRow: {
    backgroundColor: "#f0f8ff", // Skyblue
  },
  normalRow: {
    backgroundColor: "#e6f7ff", // Light blue
  },
  editButton: {
    backgroundColor: "#1890ff",
    color: "white",
    padding: "5px 10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

const ManageUserDash = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:5000/Botiga/user/listAll");
        setUsers(response.data.getUsers || []);
      } catch (err) {
        console.error("Error fetching users:", err);
        setError("Failed to fetch users. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={{ color: "#1890ff" }}>Manage Users</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && users.length > 0 ? (
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Firstname</th>
              <th style={styles.th}>Lastname</th>
              <th style={styles.th}>Email</th>
              <th style={styles.th}>Role</th>
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user.id}
                style={index % 2 === 0 ? styles.stripedRow : styles.normalRow} // Alternating row colors
              >
                <td style={styles.td}>{user.Firstname}</td>
                <td style={styles.td}>{user.Lastname}</td>
                <td style={styles.td}>{user.email}</td>
                <td style={styles.td}>{user.role}</td>
                <td style={styles.td}>
                  <button style={styles.editButton}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        !loading && !error && <p>No users found.</p>
      )}
    </div>
  );
};

export default ManageUserDash;
