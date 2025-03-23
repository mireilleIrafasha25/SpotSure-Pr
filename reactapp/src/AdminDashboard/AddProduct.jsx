import React, { useState } from 'react';
import './dashboard-styles/Addproduct.css';
import AllParking from './AllParking';
import { Notify } from 'notiflix';
const AddParking = () => {
  const [activeContent, setActiveContent] = useState("addParking");
  const [formData, setFormData] = useState({
    name: "",
    nameofBuilding: "",
    location: "",
    nearbyBuildings: "", // Store as a string for input
    pricePerHour: "",
    availableSpaces: "",
    numberOfSpaces: "",
    parkingSizes: "",
    image: null,
  });
 const [loading,setLoading]=useState(false)
  // Handle input changes
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle file upload
  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  // Handle tab switch
  const handleActionClick = (activeContent) => {
    setActiveContent(activeContent);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("nameofBuilding", formData.nameofBuilding);
    formDataToSend.append("location", formData.location);
    formDataToSend.append("nearbyBuildings", JSON.stringify(formData.nearbyBuildings.split(","))); // Convert to array
    formDataToSend.append("pricePerHour", formData.pricePerHour);
    formDataToSend.append("availableSpaces", formData.availableSpaces);
    formDataToSend.append("numberOfSpaces", formData.numberOfSpaces);
    formDataToSend.append("parkingSizes", formData.parkingSizes);
    formDataToSend.append("image", formData.image);

    try {
      const response = await fetch("https://spotsure-backend.onrender.com/SpotSure/parking/create", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        Notify.success("Parking lot added successfully!");
      } else {
        const errorData = await response.json();
        Notify.failure(`${errorData.message}`);
      }
    } catch (error) {
      // console.error("Error:", error);
      Notify.failure(error);
    }
    finally
    {
      setLoading(false)
    }
  };

  return (
    <div>
      <div className="welcomeCard">
        <button onClick={() => handleActionClick('addParking')}>NEW PARKING</button>
        <button onClick={() => handleActionClick('AllProduct')}> VIEW ALL PARKING HERE</button>
      </div>

      {activeContent === 'addParking' && (
        <div className="form-column2">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Enter Parking information <span>*</span></label>
            </div>

            <input type="text" name="name" placeholder="Enter parking name" value={formData.name} onChange={handleInputChange} maxLength="20" style={{ width: '700px' }} />
            <input type="text" name="nameofBuilding" placeholder="Enter name of building" value={formData.nameofBuilding} onChange={handleInputChange} maxLength="20" style={{ width: '700px' }} />
            <input type="text" name="location" placeholder="Enter location" value={formData.location} onChange={handleInputChange} maxLength="20" style={{ width: '700px' }} />
            <input type="text" name="nearbyBuildings" placeholder="Nearby buildings (comma-separated)" value={formData.nearbyBuildings} onChange={handleInputChange} style={{ width: '700px' }} />
            <input type="number" name="pricePerHour" placeholder="$ Price per hour" value={formData.pricePerHour} onChange={handleInputChange} maxLength={20} style={{ width: '700px' }} />
            <input type="number" name="availableSpaces" placeholder="Available spaces" value={formData.availableSpaces} onChange={handleInputChange} style={{ width: '700px' }} />
            <input type="number" name="numberOfSpaces" placeholder="Total spaces" value={formData.numberOfSpaces} onChange={handleInputChange} style={{ width: '700px' }} />
            <input type="text" name="parkingSizes" placeholder="Enter Parking size" value={formData.parkingSizes} onChange={handleInputChange} style={{ width: '700px' }} />
            <input type="file" onChange={handleFileChange} style={{ width: '700px' }} />

            <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
              <button type="submit" style={{ background: "orangered", border: "none", color: "white" }}  disabled={loading}>
            {loading ? 'Loading...' : 'Add Parking'}
            </button>
              <button type="reset" style={{ background: 'orangered', color: 'white', border: "none", width: "8rem" }}>Cancel</button>
            </div>
          </form>
        </div>
      )}

      {activeContent === 'AllProduct' && <AllParking/>}
    </div>
  );
};

export default AddParking;
