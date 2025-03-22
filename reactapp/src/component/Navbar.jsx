import { useState,useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import Login from "./Login";
import Register_own from "./Register";
import { useAuth } from "./AuthProvider";
const NavBar = () => {
  const {logout}=useAuth();
  const [modal,useModal]=useState(false);
    const [model,useModel] = useState(false);
    const [user, setUser] = useState(null);
    const navigate=useNavigate();
    const [isDropdownOpen,setIsDropdownOpen] = useState(false); 
    const toggleDropdown=()=>
    {
      setIsDropdownOpen(!isDropdownOpen);
    }
    const HandleLoginForm=()=>
    {
        useModal(!modal)
    }
    const HandleSignUpForm=()=>
    {
        useModel(!model)
    }
    const HandleLogout=()=>
    {
      logout();
      navigate ("/");
    }
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
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
            {user ? (
          <div className="UserPrandName" onClick={toggleDropdown}>
            
              <img
                src="/no-profilebg.png"
                alt="Profile"
                width="40"
                height="40"
                style={{ borderRadius: "50%" }}
              />
            
            <div className="userName2">{user.Name}</div>
          
              {isDropdownOpen && (
                           <div className='theme_dropdown1'>
                             <ul>
                               <li> Dashboard</li>
                               <li onClick={HandleLogout}> Logout</li>
                              <Link to="/" style={{textDecoration:"none"}}> <li>Home</li></Link>
                             </ul>
                           </div>
                         )}
          </div>
        ) : (
          <>
            <button onClick={HandleLoginForm} className="LoginButton">LOGIN</button>
            <button onClick={HandleSignUpForm} className="RegisterButton">REGISTER</button>
          </>
        )}
             
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
