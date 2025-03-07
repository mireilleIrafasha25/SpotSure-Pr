
import React from 'react';
import "./dashboard-styles/dashview.css"
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
const AdminDashboardPro=()=>
{
    const [userName, setUserName] = useState("");
    const [activeBookings, setActiveBookings] = useState(0);
    const [totalBookings, setTotalBookings] = useState(0);
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
        <div className='Main-View'>
             {/* Welcome Message */}
      <h2 className="welcome-message">Welcome, {userName ? userName : "Guest"}👋</h2>

{/* Booking Summary */}
<div className="booking-summary">
  <div className="booking-card">
    <h3>Active Parking</h3>
    <p>{activeBookings}</p>
  </div>
  <div className="booking-card">
    <h3>Total Parkings</h3>
    <p>{totalBookings}</p>
  </div>
</div>

{/* Quick Actions */}
<div className="quick-actions">
  <Link to="/book-parking" className="action-button">🚗 Book Parking</Link>
  <Link to="/history" className="action-button">📜 View History</Link>
  <Link to="/scan-qr" className="action-button">📲 Scan QR Code</Link>
</div>
            </div>
       
    )
}
export default AdminDashboardPro;