import React, { useState, useEffect } from "react";
import "./dashboard-styles/dashview.css";
import { useDarkMode } from "./context/DarkModeContext";
import DestinationForm from "./DestinationForm"; // Ensure this is correctly imported
import BookingConfirmation from "./confirmatioPage"; // Ensure this is correctly imported
import axios from "axios"; // Ensure axios is imported


const DashboardHome = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
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
      const storedEmail=localStorage.getItem("userEmail");
      if(storedEmail) {
        setUserEmail(storedEmail);
      }
        const response = await axios.get("https://spotsure-backend-e4nq.onrender.com/SpotSure/user/listAll", {
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
        <div className={`dashName ${theme}`}>{userEmail?userEmail:"Guest Email"}</div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className={`quick-actions ${theme}`}>
        <div className="action-button" onClick={() => HandleActionClick("dashUser")}>
         <div className={`step1 ${theme}`}><span className="startWith">Start With</span><span> Find Near Parking</span></div>
        </div>
        <div className="action-button" onClick={() => HandleActionClick("QRCode")}>
        <div className={`step1 ${theme}`}><span className="endWith">At The End</span><span> QR CODE</span></div>
        </div>
      </div>
      {/* Main Active Content */}
      <div className={`Main-Active-Content ${theme}`}>
        {activeContent === "dashUser" && (
          <DestinationForm />
        )}
        {activeContent === "QRCode" && <BookingConfirmation />}
      </div>
    </div>
  );
};

export default DashboardHome;
