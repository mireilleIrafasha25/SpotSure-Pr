import { MdOutlineAnalytics } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { CgMail } from "react-icons/cg";
import { FiUser } from "react-icons/fi";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { LiaSignOutAltSolid } from "react-icons/lia";
import "./dashboard-styles/sidebar.css"
import { useDarkMode } from "./context/DarkModeContext";
import{Link,useNavigate} from "react-router-dom"
import { useAuth } from "../component/AuthProvider";
const SideBar=()=>
{
  const {logout}=useAuth();
    const {darkMode}=useDarkMode();
const navigate=useNavigate();
  const handleLogout = () => {
    console.log("Logout called"); 
    logout();  // Call the logout function
    navigate("/");  // Redirect to the home page after logging out
  };
    return(
       
        <div className={`container ${darkMode?"dark":'light'}`}>
          <div className={`Business ${darkMode?"dark":"light"}`}>
            <img src="/dashpicx1.jpg" alt="Business" />
            <span>Business</span>
            </div>  
            <div className="Main-Icon">
            <Link to="/dashboard123" style={{textDecoration:"none"}}><div className={`icon ${darkMode?'dark':'light'}`}><MdOutlineAnalytics/><span >Dashboard</span></div></Link>
           <Link to="/add-product" style={{textDecoration:"none"}}><div className={`icon ${darkMode?'dark':'light'}`}><MdOutlineProductionQuantityLimits/><span >Product</span></div></Link> 
           <Link to="/report" style={{textDecoration:"none"}}><div className={`icon ${darkMode?'dark':'light'}`}><CgMail/><span>Reports</span></div> </Link>
           <Link to="/UserDash" style={{textDecoration:"none"}}>  <div className={`icon ${darkMode?'dark':'light'}`}><FiUser/><span>Customers</span></div> </Link>
            
            </div>
            <div className="Main-Icon2">
            <Link to="/setting" style={{textDecoration:"none"}}>
             <div className={`icon2 ${darkMode?'dark':'light'}`}><MdOutlineSettingsSuggest/><span>Settings</span></div></Link>
            <div onClick={handleLogout} className={`icon2 ${darkMode?'dark':'light'}`}><LiaSignOutAltSolid/><span>Sign Out</span></div>
            </div>
            <div className="Main-DivandCarton">
                <div className={`DivandCarton ${darkMode?'dark':'light'}`}>
                    <img src="/CatoonMan.jpg" alt="User" />
                    <div className="ContactHelp">
                    Need Help feel Free to contact
                        <button> Get Support</button>
                    </div>
                </div>
            </div>
        </div>
              
        
    )
}
const styles={
    container: {
        padding: '20px',
        maxWidth: '1200px',
        margin: '0 auto',
      },
      row: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: '20px',
      },
      profileCard: {
        // flex: 1,
        // backgroundColor: '#f0f0f0',
        // padding: '20px',
        // borderRadius: '8px',
        // boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      },
      welcomeCard: {
        flex: 2,
        backgroundColor: '#e6f7ff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      },
      actions: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        marginTop: '20px',
      },
      actionButton: {
        padding: '10px 20px',
        backgroundColor: '#1890ff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
      },
      logoutButton: {
        padding: '10px 20px',
        backgroundColor: '#ff4d4f',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
      },
}
export  default SideBar;