import "../styles/home.css";
import About from "./About";
import Contact from "./Contact";
import Services from "./Service";
import Login from "./Login";
import { Link } from "react-router-dom";
import { useState } from "react";
const Home = () => {
  const [modal,useModal]=useState(false);
  const HandleLoginForm=()=>
      {
          useModal(!modal)
      }
  return (
    <div>
       {modal && <Login HandleLoginForm={HandleLoginForm} />}
        <div className="Main-Home">
      <div className="Home-Content">
        <div className="Home-title"><span>The Best </span><br/> <span>Deals For Parking Lots</span></div>
        <div className="SubHome-content">
        Find secure, affordable, and convenient parking with real-time availability and easy reservations. Book now for a hassle-free experience!
        </div>
       <button className="Book-Button" onClick={HandleLoginForm}>BOOK NOW</button>
      </div>
      </div>
      <About/>
      <Services/>
      <Contact/>
    </div>
  );
};

export default Home;
