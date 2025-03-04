import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header_section">
      <div className="container-fluid">
        <nav className="navbar custom_nav-container">
          <Link to="/" className="navbar-brand">
            <div className="Logo">SpotSure</div>
          </Link>
          <button className="navbar-toggler" onClick={toggleMenu}>
            <span className="menu-icon">☰</span>
          </button>

          <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">About Us</Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">Service</Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">Features</Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">Contact Us</Link>
              </li>
            </ul>
            <div className="LoginAndRegister">
              <Link to="/"><button>LOGIN</button></Link>
              <Link to="/"><button>REGISTER</button></Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
