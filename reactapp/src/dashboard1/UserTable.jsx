import axios from "axios";
import { useState, useEffect } from "react";
import { Notify } from "notiflix";

const styles = {
  container: { padding: "20px", fontFamily: "Arial, sans-serif" },
  table: { width: "100%", borderCollapse: "collapse", marginBottom: "20px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" },
  th: { backgroundColor: "#022F4A", color: "white", padding: "10px", border: "1px solid #ddd", textAlign: "left", fontSize: "14px" },
  td: { padding: "10px", border: "1px solid #ddd", textAlign: "left", fontSize: "12px" },
  stripedRow: { backgroundColor: "#f0f8ff" },
  normalRow: { backgroundColor: "#e6f7ff" },
  deleteButton: { backgroundColor: "red", color: "white", padding: "5px 10px", border: "none", borderRadius: "5px", cursor: "pointer", marginLeft: "10px" },
  editButton: { backgroundColor: "#022F4A", color: "white", padding: "5px 10px", border: "none", borderRadius: "5px", cursor: "pointer" },
};

const ManageUserDash = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [editUser, setEditUser] = useState(null);
  const [editedName, setEditedName] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://spotsure-backend.onrender.com/SpotSure/user/listAll");
      setUsers(response.data.getUsers || []);
    } catch (err) {
      console.error("Error fetching users:", err);
      Notify.failure("Failed to fetch users. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    try {
      await axios.delete(`https://spotsure-backend.onrender.com/SpotSure/user/delete/${id}`);
      Notify.success("User deleted successfully!");
      setUsers(users.filter(user => user.id !== id)); // Refresh list
    } catch (error) {
      console.error("Error deleting user:", error);
      Notify.failure("Failed to delete user.");
    }
  };

  const handleEdit = (user) => {
    setEditUser(user);
    setEditedName(user.Name);
  };

  const handleUpdate = async () => {
    if (!editUser) return;

    try {
      const response = await axios.put(`https://spotsure-backend.onrender.com/SpotSure/user/update/${editUser.id}`, {
        Name: editedName,
      });

      Notify.success("User updated successfully!");
      setUsers(users.map(user => (user.id === editUser.id ? { ...user, Name: editedName } : user)));
      setEditUser(null);
    } catch (error) {
      console.error("Error updating user:", error);
      Notify.failure("Failed to update user.");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={{ color: "#022F4A" }}>Manage Users</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && users.length > 0 ? (
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Email</th>
              <th style={styles.th}>Role</th>
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id} style={index % 2 === 0 ? styles.stripedRow : styles.normalRow}>
                <td style={styles.td}>{user.Name}</td>
                <td style={styles.td}>{user.email}</td>
                <td style={styles.td}>{user.role}</td>
                <td style={styles.td}>
                  <div>
                    <button style={styles.editButton} onClick={() => handleEdit(user)}>Edit</button>
                    <button style={styles.deleteButton} onClick={() => handleDelete(user.id)}>Delete</button>
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
          <input type="text" value={Name} onChange={(e) => setEditedName(e.target.value)} />
          <button style={styles.editButton} onClick={handleUpdate}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default ManageUserDash;
