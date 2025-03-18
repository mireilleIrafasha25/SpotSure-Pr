import React, { useEffect, useState } from "react";
import axios from "axios";
import "./dashboard-styles/availableParking.css"; 
import { useDarkMode } from "./context/DarkModeContext"; // Assuming this is the hook for dark mode
import { Link, useNavigate } from "react-router-dom";

const ParkingSpots = () => {
  const { theme } = useDarkMode(); // Get current theme (true/false)
  const [parkingSpots, setParkingSpots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 const [userName, setUserName] = useState('');
  const destinationName = localStorage.getItem("destinationName");
  const navigate = useNavigate();

  useEffect(() => {
    if (destinationName) {
      const fetchParkingSpots = async () => {
        try {
            const token = localStorage.getItem("token");

            // Retrieve username from local storage
            const storedName = localStorage.getItem("userName");
            if (storedName) {
              setUserName(storedName);
            }
          const response = await axios.post(
            "http://localhost:4000/SpotSure/parking/findNearBy", 
            { destinationName }
          );
          setParkingSpots(response.data.data); // Assuming data is an array of parking spots

        } catch (err) {
          console.error("Error fetching parking spots:", err);
          setError("Failed to load parking spots.");
        } finally {
          setLoading(false);
        }
      };

      fetchParkingSpots();
    } else {
      console.log("No destination name found.");
      setLoading(false);
    }
  }, [destinationName]);

  if (loading) {
    return <div>Loading...</div>;
  }
  const handleBookingSelection = (parkingId,parkingName) => {
    localStorage.setItem("selectedParkingId", parkingId);
    localStorage.setItem("selectedParkingName",parkingName)
  
  };
  return (
    <div className={`parking-container ${theme}`}>
      <h2>Welcome to Available spots {userName?userName:"Guest"}</h2>
      {error && <p>{error}</p>}
      {parkingSpots.length === 0 ? (
        <p>No parking spots found near this destination.</p>
      ) : (
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
                <Link to="/booking">
                    <button type="submit"  className={`spaceButton ${theme}`} onClick={() => handleBookingSelection(spot._id)}>  Book space here </button>
            </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ParkingSpots;
