import React from "react";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/contact.css";
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message1,setMessage1]=useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response=await axios.post("http://localhost:4000/SpotSure/contact/add",
       { 
        email,
        name,
        message1,
        phone,
       }
      );
      setMessage(response.data.message);
      setName("");
      setEmail("");
      setMessage1("");
      setPhone("");
      setTimeout(()=>{
        navigate("/contact");
      },1000);
      
    } catch (error) {
      setMessage(error.response?.data?.message|| "Failed to send message");
    }
    finally{
      setLoading(false);
    }
  }
  return (
    <div className="contact-container">
      <div className="contact-image">
        <img src="ContactImage2.jpg" alt="Contact" />
      </div>
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)}/>
          
          <label>Email</label>
          <input type="email" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)} />
          
          <label>Phone Number</label>
          <input type="text" placeholder="Enter your phone number" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
          
          <label>Message</label>
          <textarea placeholder="Enter your message" value={message1} onChange={(e)=>setMessage1(e.target.value)}></textarea>
          
          <button type="submit" disabled={loading}>{loading?"sending":"SEND"}</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default Contact;
