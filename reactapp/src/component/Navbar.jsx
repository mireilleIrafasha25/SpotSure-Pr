import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import Login from "./Login";
import Register_own from "./Register";
const NavBar = () => {
  const [modal,useModal]=useState(false);
    const [model,useModel] = useState(false);
    const navigate=useNavigate();
    const HandleLoginForm=()=>
    {
        useModal(!modal)
    }
    const HandleSignUpForm=()=>
    {
        useModel(!model)
    }
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header_section">
         {modal && <Login HandleLoginForm={HandleLoginForm} />}
         {model && <Register_own HandleSignUpForm={HandleSignUpForm} />}
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
                <Link to="/about" className="nav-link">About Us</Link>
              </li>
              <li className="nav-item">
                <Link to="/service" className="nav-link">Service</Link>
              </li>
              <li className="nav-item">
                <Link to="/feature" className="nav-link">Features</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact Us</Link>
              </li>
            </ul>
            <div className="LoginAndRegister">
              <button onClick={HandleLoginForm}>LOGIN</button>
              <button onClick={HandleSignUpForm}>REGISTER</button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
