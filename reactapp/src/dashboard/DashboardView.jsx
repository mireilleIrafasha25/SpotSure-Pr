
import React from 'react';
import "./dashboard-styles/dashview.css"
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {useDarkMode} from "./context/DarkModeContext";
const AdminDashboardPro=()=>
{
    const [userName, setUserName] = useState("");
    const {theme}=useDarkMode();
    useEffect(() => {
      const fetchDashboardData = async () => {
        try {
          const token = localStorage.getItem("token");
          // Soma izina rya user muri localStorage
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setUserName(storedName);
    }
          const response = await axios.get("http://localhost:4000/SpotSure/user/listAll", {
            headers: { Authorization: `Bearer ${token}` },
          });
  
          setUserName(response.data.userName);
          setActiveBookings(response.data.activeBookings);
          setTotalBookings(response.data.totalBookings);
        } catch (error) {
          console.error("Error fetching dashboard data:", error);
        }
      };
  
      fetchDashboardData();
    }, []);
    return(
        <div className={`Main-View ${theme}`}>
             {/* Welcome Message */}
      <div className={`welcome-message ${theme}`}>Welcome to your Portal, {userName ? userName : "Guest"}👋</div>


{/* Quick Actions */}
<div className={`quick-actions ${theme}`}>
  <div  className={`action-button ${theme}`}>🚗 Book Parking</div>
  <div className={`action-button ${theme}`}>📲 Scan QR Code</div>
</div>
            </div>
       
    )
}
export default AdminDashboardPro;