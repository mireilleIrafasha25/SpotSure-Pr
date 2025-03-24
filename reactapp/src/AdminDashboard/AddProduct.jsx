import React, { useState } from "react";
import { Notify } from "notiflix";
import AllParking from "./AllParking";
import "./dashboard-styles/Addparking.css"
const AddParkingLot = () => {
  const [formData, setFormData] = useState({
    name: "",
    nameofBuilding: "",
    location: "",
    nearbyBuildings: "",
    pricePerHour: "",
    availableSpaces: "",
    numberOfSpaces: "",
    parkingSizes: "",
    image: null,
  });

  const [loading, setLoading] = useState(false);
    const[activeContent, setActiveContent] = useState("add-parking")
    const handleTabClick = (tab) => {
        setActiveContent(tab);
    }
  const handleChange = (e) => {
    if (e.target.name === "image") {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure an image is selected
    if (!formData.image) {
      Notify.failure("Please select an image");
      return;
    }

    setLoading(true);
    const formDataToSend = new FormData();

    // Append all form fields
    Object.keys(formData).forEach((key) => {
      if (key === "nearbyBuildings") {
        formDataToSend.append(key, JSON.stringify(formData.nearbyBuildings.split(",")));
      } else {
        formDataToSend.append(key, formData[key]);
      }
    });

    try {
      const response = await fetch(
        "https://spotsure-backend.onrender.com/SpotSure/parking/create",
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      if (response.ok) {
        Notify.success("Parking lot added successfully!");
        setFormData({
          name: "",
          nameofBuilding: "",
          location: "",
          nearbyBuildings: "",
          pricePerHour: "",
          availableSpaces: "",
          numberOfSpaces: "",
          parkingSizes: "",
          image: null,
        });
      } else {
        const errorData = await response.json();
        Notify.failure(errorData.message);
      }
    } catch (error) {
      Notify.failure("Failed to create parking lot");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
          <div className="welcomeCard">
        <button onClick={() => handleTabClick('add-parking')}>NEW PARKING</button>
        <button onClick={() => handleTabClick('AllProduct')}> VIEW ALL PARKING HERE</button>
      </div>
      {activeContent==='add-parking'&&(
    <form onSubmit={handleSubmit} encType="multipart/form-data" style={{backgroundColor:"none",marginLeft:"14rem"}}>
      <input type="text" name="name" placeholder="Parking Name" value={formData.name} onChange={handleChange} required />
      <input type="text" name="nameofBuilding" placeholder="Building Name" value={formData.nameofBuilding} onChange={handleChange} required />
      <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} required />
      <input type="text" name="nearbyBuildings" placeholder="Nearby Buildings (comma-separated)" value={formData.nearbyBuildings} onChange={handleChange} required />
      <input type="number" name="pricePerHour" placeholder="Price per Hour" value={formData.pricePerHour} onChange={handleChange} required />
      <input type="number" name="availableSpaces" placeholder="Available Spaces" value={formData.availableSpaces} onChange={handleChange} required />
      <input type="number" name="numberOfSpaces" placeholder="Total Spaces" value={formData.numberOfSpaces} onChange={handleChange} required />
      <input type="text" name="parkingSizes" placeholder="Parking Sizes" value={formData.parkingSizes} onChange={handleChange} required />
      <input type="file" name="image" accept="image/*" onChange={handleChange} required />
      <button type="submit" disabled={loading} style={{backgroundColor:"orangered"}}>
        {loading ? "Submitting..." : "Add Parking Lot"}
      </button>
    </form>
    )}
    {activeContent==='AllProduct'&&(<AllParking/>)}
    </div>
  );
};

export default AddParkingLot;
