import React, { useState } from 'react';
import './dashboard-styles/Addproduct.css';
import ProductTable from './productTable';

const AddParking = () => {
const [activeContent, setActiveContent] = useState("addParking");
 // Initialize formData state
 const [formData, setFormData] = useState({
  name: "",
  nameofBuilding: "",
  location: "",
  nearbyBuildings: [],
  pricePerHour: "",
  availableSpaces: "",
  numberOfSpaces: "",
  parkingSizes: "",
  image: null, // Important: Default value for the file input should be `null`
});

// Handle input changes (for text fields)
const handleInputChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

// Handle file upload
const handleFileChange = (e) => {
  setFormData({ ...formData, image: e.target.files[0] }); // Store the file object
};
const HandleActionClick=(activeContent)=>
{
setActiveContent(activeContent);
}
const handleSubmit = async (e) => {
  e.preventDefault();
  
  const formDataToSend = new FormData();
  formDataToSend.append("name", formData.name);
  formDataToSend.append("nameofBuilding", formData.nameofBuilding);
  formDataToSend.append("location", formData.location);
  formDataToSend.append("nearbyBuildings", JSON.stringify(formData.nearbyBuildings)); // Convert to JSON string
  formDataToSend.append("pricePerHour", formData.pricePerHour);
  formDataToSend.append("availableSpaces", formData.availableSpaces);
  formDataToSend.append("numberOfSpaces", formData.numberOfSpaces);
  formDataToSend.append("parkingSizes", formData.parkingSizes);
  formDataToSend.append("image", formData.image); // Ensure this matches `req.file`

  try {
    const response = await fetch("http://localhost:4000/SpotSure/parking/create", {
      method: "POST",
      body: formDataToSend,
    });

    if (response.ok) {
      alert("Parking lot added successfully!");
    } else {
      const errorData = await response.json();
      alert(`Failed to add parking: ${errorData.message}`);
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred while adding the parking lot.");
  }
};
  return (
    <div >
      <div className='welcomeCard'>
        <button onClick={()=>HandleActionClick('addParking')}>NEW PARKING</button>
        <button onClick={()=>HandleActionClick('AllProduct')} > VIEW ALL PARKING HERE</button>
         </div>
      {activeContent ==='addParking' &&
      (  
      <div className='form-column2'>
      <form onSubmit={handleSubmit}>
  <div className="form-group">
    <label>Enter Parking information  <span>*</span></label>
  </div>
  <input
  type="text"
  placeholder="Enter parking name"
  value={formData.name}
  onChange={handleInputChange}
  maxLength="20"
  style={{ width: '700px' }}
/>

<input
  type="text"
  placeholder="Enter name of building"
  value={formData.nameofBuilding}
  onChange={handleInputChange}
  maxLength="20"
  style={{ width: '700px' }}
/>

<input
  type="text"
  placeholder="Enter location"
  value={formData.location}
  onChange={handleInputChange}
  maxLength="20"
  style={{ width: '700px' }}
/>

<input
  type="number"
  placeholder="$ Price per hour"
  value={formData.pricePerHour}
  onChange={handleInputChange}
  maxLength={20}
  style={{ width: '700px' }}
/>

<input
  type="number"
  placeholder="Available spaces"
  value={formData.availableSpaces}
  onChange={handleInputChange}
  style={{ width: '700px' }}
/>

<input
  type="number"
  placeholder="Total spaces"
  value={formData.numberOfSpaces}
  onChange={handleInputChange}
  style={{ width: '700px' }}
/>

{/* Handle Parking Sizes (You can modify this according to your requirement) */}
<input
  type="text"
  value={formData.parkingSizes}
  placeholder='Enter Parking size'
  onChange={handleInputChange}
  style={{ width: '700px' }}
/>

<input
  type="file"
  value={formData.image}
  onChange={handleFileChange}
  style={{ width: '700px' }}
/>


  <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
    <button type="submit" style={{background:"orangered",border:"none",color:"white",}}>Add Parking</button>
    <button type="reset" style={{ background: 'orangered', color: 'white', border:"none" ,width:"8rem"}}>
      Cancel
    </button>
  </div>
</form>
      </div>)}
    {activeContent==='AllProduct' && (<ProductTable/>)}
    
    </div>
  );
};

export default AddParking;
