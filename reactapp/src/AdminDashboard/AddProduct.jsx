import React, { useState } from 'react';
import './dashboard-styles/Addproduct.css';
import ProductTable from './productTable';

const AddParking = () => {
  const [name, setName] = useState('');
const [nameofBuilding, setNameofBuilding] = useState('');
const [location, setLocation] = useState('');
const [pricePerHour, setPricePerHour] = useState('');
const [availableSpaces, setAvailableSpaces] = useState('');
const [numberOfSpaces, setNumberOfSpaces] = useState('');
const [parkingSizes, setParkingSizes] = useState([]);
const [image, setImage] = useState(null);
const [activeContent, setActiveContent] = useState("addParking");
const HandleActionClick=(activeContent)=>
{
setActiveContent(activeContent);
}
const handleSubmit = async (e) => {
  e.preventDefault();

  // Image upload logic (if required)
  const formData = new FormData();
  formData.append("file", image);

  try {
    // Assuming you're uploading to an image hosting service
    const uploadResponse = await fetch('/upload-image', {
      method: 'POST',
      body: formData,
    });
    const result = await uploadResponse.json();
    const imageUrl = result.url; // Assume the response contains the image URL

    // Now send the parking details to your backend
    const parkingDetails = {
      name,
      nameofBuilding,
      location,
      pricePerHour,
      availableSpaces,
      numberOfSpaces,
      parkingSizes,
      image: { url: imageUrl }, // Pass the image URL
    };

    const response = await fetch('/add-parking', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(parkingDetails),
    });

    if (response.ok) {
      console.log("Parking added successfully");
    } else {
      console.log("Error adding parking");
    }
  } catch (error) {
    console.log("Error:", error);
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
    <input
      type="text"
      placeholder="Enter parking name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      maxLength="20"
      style={{ width: '700px' }}
    />
  </div>
  <input
  type="text"
  placeholder="Enter parking name"
  value={name}
  onChange={(e) => setName(e.target.value)}
  maxLength="20"
  style={{ width: '700px' }}
/>

<input
  type="text"
  placeholder="Enter name of building"
  value={nameofBuilding}
  onChange={(e) => setNameofBuilding(e.target.value)}
  maxLength="20"
  style={{ width: '700px' }}
/>

<input
  type="text"
  placeholder="Enter location"
  value={location}
  onChange={(e) => setLocation(e.target.value)}
  maxLength="20"
  style={{ width: '700px' }}
/>

<input
  type="number"
  placeholder="$ Price per hour"
  value={pricePerHour}
  onChange={(e) => setPricePerHour(e.target.value)}
  maxLength={20}
  style={{ width: '700px' }}
/>

<input
  type="number"
  placeholder="Available spaces"
  value={availableSpaces}
  onChange={(e) => setAvailableSpaces(e.target.value)}
  style={{ width: '700px' }}
/>

<input
  type="number"
  placeholder="Total spaces"
  value={numberOfSpaces}
  onChange={(e) => setNumberOfSpaces(e.target.value)}
  style={{ width: '700px' }}
/>

{/* Handle Parking Sizes (You can modify this according to your requirement) */}
<input
  type="text"
  value={parkingSizes}
  placeholder='Enter Parking size'
  onChange={(e) => setParkingSizes(e.target.value.split(','))}
  style={{ width: '700px' }}
/>

<input
  type="file"
  onChange={(e) => setImage(e.target.files[0])}
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
