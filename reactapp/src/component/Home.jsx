import "../styles/home.css";
import About from "./About";
import Contact from "./Contact";
import Services from "./Service";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
        <div className="Main-Home">
      <div className="Home-Content">
        <div className="Home-title"><span>The Best </span><br/> <span>Deals For Parking Lots</span></div>
        <div className="SubHome-content">
        Find secure, affordable, and convenient parking with real-time availability and easy reservations. Book now for a hassle-free experience!
        </div>
       <Link to="/booking"><button className="Book-Button">BOOK NOW</button></Link> 
      </div>
      </div>
      <About/>
      <Services/>
      <Contact/>
    </div>
  );
};

export default Home;
