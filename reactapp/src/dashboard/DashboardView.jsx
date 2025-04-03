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
      <div className={`Main-Active-Content ${theme}`}>
        {activeContent === "dashUser" && (
          <DestinationForm />
        )}
      </div>
    </div>
  );
};

export default DashboardHome;
