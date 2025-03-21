import React, { useState } from 'react';
import './dashboard-styles/Addproduct.css';
import ProductTable from './productTable';

const AddProduct = () => {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [activeContent, setActiveContent] = useState('productAction');
    const HandleActionClick=(action)=>
    {
      setActiveContent(action)
    }
  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <div >
      <div className='welcomeCard'>
        <button onClick={()=>HandleActionClick('productAction')}>NEW PRODUCT</button>
        <button onClick={()=>HandleActionClick('AllProduct')} > VIEW ALL PRODUCTS</button>
         </div>
      {activeContent ==='productAction' &&
      (    <div className="add-product">
      
      <div className="upload-section">
       <div style={{marginBottom:"10px"}}> <label style={{fontSize:"13px",fontWeight:"bold"}}>Upload Images</label></div>
        <div className="image-preview" style={{gap:"40px"}}>
          <div className="image-box">+</div>
          <div className="image-box">+</div>
        </div>
        <div style={{width:"650px"}}><span style={{color:"gray"}}>you are allowed to add only two picture pay attention to the quality of picture you add</span></div>
      </div>
      <div className='form-column2'>
      <form>
        <div className="form-group">
          <label>Product Title 
            <span> *</span>
          </label>
          <input type="text" placeholder="Enter title" maxLength="20" style={{width:'700px'}} />
        </div>
        <div className="form-group">
            <label>Category <span>  *</span></label>
            <select>
              <option>Choose category</option>
              <option>Clothing</option>
              <option>Electronics</option>
            </select>
          </div>
        <div className="form-row1">
          
          <div className="form-group">
            <div>Price <span> *</span>
            </div>
            <input type="number" placeholder="$ Price" />
          </div>
          <div className="form-group">
            <div style={{marginLeft:'20px'}}>Number of Stars <span> *</span></div>
           <div><input type="number" placeholder='star number' style={{marginLeft:"20px"}}/></div> 
          </div>
        </div>
           <div className='form-row12'>
        <div className="form-group">
          <label>Color</label>
          <div className="color-options">
            <div className={`color-box ${selectedColor === 'blue' ? 'selected' : ''}`} style={{ backgroundColor: 'blue' }} onClick={() => handleColorClick('blue')} />
            <div className={`color-box ${selectedColor === 'skyblue' ? 'selected' : ''}`} style={{ backgroundColor: 'skyblue' }} onClick={() => handleColorClick('skyblue')} />
            <div className={`color-box ${selectedColor === 'orange' ? 'selected' : ''}`} style={{ backgroundColor: 'orange' }} onClick={() => handleColorClick('orange')} />
          </div>
        </div>

        <div className="form-group">
          <label>Size</label>
          <div className="size-options">
            {['S', 'M', 'L', 'XL'].map((size) => (
              <div key={size} className={`size-box ${selectedSize === size ? 'selected' : ''}`} onClick={() => handleSizeClick(size)}>
                {size}
              </div>
            ))}
          </div>
        </div>
        </div>

        <div className="form-group">
          <label>Description *</label>
          <input type='text' style={{width:"700px",height:"80px"}} placeholder="Short description about product"/>
        </div>

        
      </form>
      
      </div>
      <div style={{display:"flex",flexDirection:"row",gap:"50px"}}>
      <button type="submit">Add Product</button>
      <button type='reset' style={{background:"white",color:"blue",border:"1px solid blue"}}>Cancel</button>
      </div>
      
    </div>)}
    {activeContent==='AllProduct' && (<ProductTable/>)}
    
    </div>
  );
};

export default AddProduct;
