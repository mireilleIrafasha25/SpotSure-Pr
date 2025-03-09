import React, { useState, useEffect } from "react";
import "./dashboard-styles/dashview.css";
import { Link } from "react-router-dom";
import { useDarkMode } from "./context/DarkModeContext";
import BookingForm from "./Booking"; // Ensure this is correctly imported
import BookingConfirmation from "./confirmatioPage"; // Ensure this is correctly imported
import axios from "axios"; // Ensure axios is imported
import { IoIosHome } from "react-icons/io";
import { FaCarAlt } from "react-icons/fa";
import { BsQrCode } from "react-icons/bs";
const AdminDashboardPro = () => {
  const [userName, setUserName] = useState("");
  const { theme } = useDarkMode();
  const [activeContent, setActiveContent] = useState("dashUser");

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const token = localStorage.getItem("token");

        // Retrieve username from local storage
        const storedName = localStorage.getItem("userName");
        if (storedName) {
          setUserName(storedName);
        }

        const response = await axios.get("http://localhost:4000/SpotSure/user/listAll", {
          headers: { Authorization: `Bearer ${token}` },
        });
     
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchDashboardData();
  }, []);

  // Function to switch content dynamically
  const HandleActionClick = (action) => {
    setActiveContent(action);
  };

  return (
    <div className={`Main-View ${theme}`}>
      {/* Welcome Message */}
      <div className={`welcome-message ${theme}`}>
        Welcome to your Portal, {userName ? userName : "Guest"} 👋
      </div>

      {/* Quick Actions */}
      <div className={`quick-actions ${theme}`}>
        <div className="action-button" onClick={() => HandleActionClick("dashUser")}>
          <span><IoIosHome/></span> <span>Basic Info</span>
        </div>
        <div className="action-button" onClick={() => HandleActionClick("BookNow")}>
          <FaCarAlt/> Book Parking
        </div>
        <div className="action-button" onClick={() => HandleActionClick("QRCode")}>
          <BsQrCode/>Scan QR Code
        </div>
      </div>

      {/* Main Active Content */}
      <div className={`Main-Active-Content ${theme}`}>
        {activeContent === "dashUser" && (
          <div>
            <h3>Welcome to the Dashboard</h3>
          </div>
        )}
        {activeContent === "BookNow" && <BookingForm />}
        {activeContent === "QRCode" && <BookingConfirmation />}
      </div>
    </div>
  );
};

export default AdminDashboardPro;
