import React, { useState, useEffect } from "react";
import "./dashboard-styles/dashview.css";
import { Link } from "react-router-dom";
import { useDarkMode } from "./context/DarkModeContext";
import BookingForm from "./Booking"; // Ensure this is correctly imported
import BookingConfirmation from "./confirmatioPage"; // Ensure this is correctly imported
import axios from "axios"; // Ensure axios is imported


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
        <img src="/CarHomeBg.jpg" alt="" className={`ProfImage ${theme}`}/>
        <div className={`dashName ${theme}`}>{userName ? userName : "Guest"} <br/>
        <div>Email</div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className={`quick-actions ${theme}`}>
        <div className="action-button" onClick={() => HandleActionClick("dashUser")}>
         <div className={`step1 ${theme}`}><span>Step 1</span><span> Find Near Parking</span></div>
        </div>
        <div className="action-button" onClick={() => HandleActionClick("BookNow")}>
        <div className={`step1 ${theme}`}><span>Step 2</span><span> Booking Form</span></div>
        </div>
        <div className="action-button" onClick={() => HandleActionClick("QRCode")}>
        <div className={`step1 ${theme}`}><span>Step 3</span><span> QR CODE</span></div>
        </div>
      </div>
      {/* Main Active Content */}
      <div className={`Main-Active-Content ${theme}`}>
        {activeContent === "dashUser" && (
          <BookingForm />
        )}
        {activeContent === "BookNow" && <BookingForm />}
        {activeContent === "QRCode" && <BookingConfirmation />}
      </div>
    </div>
  );
};

export default AdminDashboardPro;
