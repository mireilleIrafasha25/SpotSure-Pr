import { useState, useEffect } from "react";
import "../styles/verification.css";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Verification = () => {
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    if (!token) {
      setMessage("Token not found, please register first.");
      return;
    }

    const decoded = jwt_decode(token);
    setUserEmail(decoded.email);

    // Optionally, you could show a message like "OTP has been sent to your email"
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("https://spotsure-backend.onrender.com/SpotSure/user/verify", { otp});
      const { message, newToken } = response.data;
      
      setMessage(response.data.message || "Verification done Successfully");

      if (newToken) {
        localStorage.setItem("token", newToken); // Store the new token if generated
        const userDecoded = jwt_decode(newToken);
        const userRole = userDecoded.role;
        console.log(userRole)

        // Navigate based on the user role
        if (userRole === "admin") {
          navigate('/admin-dashboard');
        } else if(userRole === "carOwner"){
          navigate('/client-dashboard');
        } 
        else {
          navigate('/parkingOwner-dashboard'); // Redirect to the dashboard for non-admin users
        }
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "Verification Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="Main-Verification">
      <div className="verify-card">
        <div>OTP VERIFICATION</div>
        <div className="verify-content">
          Please enter the verification code sent at <br />
          <span>your registered email.</span>
        </div>
        <form className="verify-form" onSubmit={handleSubmit}>
          <input
            type="number"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? "Verifying..." : "Verify"}
          </button>
          {message && <div>{message}</div>}
        </form>
      </div>
    </div>
  );
};

export default Verification;
