import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import Login from "../component/Login";
import { Notify } from "notiflix";

const RegisterParkingOwner = () => {
  const [name, setName] = useState(""); // Fixed incorrect setter
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [modal, setModal] = useState(false); // Fixed incorrect setter name

  const navigate = useNavigate();

  const HandleLoginForm = () => {
    setModal(!modal); // Fixed incorrect function call
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // Reset message before submission

    // Basic validation
    if (!name || !email || !password || !confirmPassword) {
      setMessage("All fields are required!");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        "https://spotsure-backend.onrender.com/SpotSure/user/signup",
        {
          Name: name, // Fixed naming
          email,
          password,
          confirmPassword,
          role: "parkingOwner",
        }
      );
      Notify.success(response.data.message);
      setTimeout(() => {
        navigate("/verify");
      }, 1000);
    } catch (error) {
      setMessage(error.response?.data?.message || "Sign-up failed");
    } finally {
      setLoading(false);
    }
  };

  const styles = {
    overlay: {
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginLeft: "7rem",
    },
    modal: {
      backgroundColor: "white",
      padding: "2rem",
      borderRadius: "8px",
      width: "600px",
      maxWidth: "90%",
    },
    input: {
      width: "360px",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
    },
    button: {
      width: "200px",
      marginLeft: "8rem",
      backgroundColor: "#FE4801",
      border: "none",
      padding: "10px",
      color: "white",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.overlay}>
      {modal && <Login HandleLoginForm={HandleLoginForm} />}
      <div style={styles.modal}>
        <div
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#4a5568",
            marginBottom: "20px",
          }}
        >
          Register Parking Owner
        </div>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={{ display: "flex", gap: "20px" }}>
            <span style={{ color: "black", paddingTop: "10px" }}>Name:</span>
            <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} style={styles.input} required />
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            <span style={{ color: "black", paddingTop: "10px" }}>Email:</span>
            <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} style={styles.input} required />
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <span style={{ color: "black", paddingTop: "10px" }}>Password:</span>
            <input type={showPassword ? "text" : "password"} style={{width:"350px"}} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            <span style={{ color: "black", paddingTop: "10px" }}>Confirm Password:</span>
            <input type="password" placeholder="Re-type your password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} style={{width:"280px"}} required />
          </div>
          <button type="submit" disabled={loading} style={styles.button}>
            {loading ? "Signing Up..." : "SIGN UP"}
          </button>
          {message && <p style={{ color: "red", textAlign: "center" }}>{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default RegisterParkingOwner;
