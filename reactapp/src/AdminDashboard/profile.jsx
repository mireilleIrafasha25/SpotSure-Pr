import React, { useState } from "react";
import axios from "axios";
import "./dashboard-styles/profile.css";

const Profile = () => {
  const [formData, setFormData] = useState({
    Firstname: "",
    Lastname: "",
    email: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put("http://localhost:5000/Botiga/user/updateByEmail", formData);
      setMessage("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      setMessage("Failed to update profile. Please try again.");
    }
  };

  return (
    <div className="tab-panel">
      <h2>Profile Settings</h2>
      <p>Update your personal information here.</p>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="Firstname"
            value={formData.Firstname}
            onChange={handleChange}
            placeholder="Enter your first name"
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="Lastname"
            value={formData.Lastname}
            onChange={handleChange}
            placeholder="Enter your last name"
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </label>
        <button type="submit" className="submit-button">Save Changes</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Profile;
