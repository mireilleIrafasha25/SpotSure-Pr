import React, { useEffect, useState } from "react";
import axios from "axios";
import "../dashboard/dashboard-styles/availableParking.css" 
import { useDarkMode } from "../dashboard/context/DarkModeContext"; // Assuming this is the hook for dark mode
import { Link, useNavigate } from "react-router-dom";
import { Notify } from "notiflix";
const AllParking = () => {
  const { theme } = useDarkMode(); // Get current theme (true/false)
  const [parkingSpots, setParkingSpots] = useState([]);

  useEffect(() => {
      const fetchParkingSpots = async () => {
        try {
          const response = await axios.get(
            "https://spotsure-backend.onrender.com/SpotSure/parking/list"
          );
          setParkingSpots(response.data.data); // Assuming data is an array of parking spots

        } catch (err) {
          // console.error("Error fetching parking spots:", err);
          Notify.failure(err.message);
        }
    }
    fetchParkingSpots();
  }, []);
  return (
    <div className={`parking-container ${theme}`}>
      {/* {error && <p>{error}</p>} */}
        <div className="parking-list">
          {parkingSpots.map((spot, index) => (
            <div key={index} className="parking-item">
              <div className="parking-image">
                <img src={spot.image.url} alt="Parking Spot" />
              </div>
              <div className="parking-description">
                <h3>{spot.name}</h3>
                <p><strong>Building Name:</strong> {spot.nameofBuilding}</p>
                <p><strong>Location:</strong> {spot.location}</p>
                <p><strong>Number of Spaces:</strong> {spot.numberOfSpaces}</p>
                <p><strong>Available Spaces:</strong> {spot.availableSpaces}</p>
                <p><strong>Parking Size:</strong> {spot.parkingSizes}</p> 
                <p><strong>Nearby Buildings:</strong> {spot.nearbyBuildings.join(", ")}</p>
                <p><strong>Price per Hour:</strong> {spot.pricePerHour} RWF</p>
    
              </div>
            </div>
          ))}
        </div>
    </div>
  );
};

export default AllParking;
