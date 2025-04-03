import "./dashboard-styles/dashboardnavbar.css"
import { useDarkMode } from "./context/DarkModeContext";
import { MdSunny } from "react-icons/md";
import { MdSettingsApplications } from "react-icons/md";
import { MdLanguage } from "react-icons/md";
import { useState ,useEffect} from "react";
import { MdDarkMode } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
const NavBarDashBoard=()=>
    
{

  const { theme, toggleTheme } = useDarkMode();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // 🔹 State ya dropdown
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleThemeChange = (selectedTheme) => {
    toggleTheme(selectedTheme);
    setIsDropdownOpen(false);
};

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const token = localStorage.getItem("token");

        // Retrieve username from local storage
        const storedName = localStorage.getItem("userName");
        if (storedName) {
          setUserName(storedName);
        }
      const storedEmail=localStorage.getItem("userEmail");
      if(storedEmail) {
        setUserEmail(storedEmail);
      }
     
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchDashboardData();
  }, []);
return(
    <div>
        <div className="Main-Navbar2">
            <div className={`NavBarDown2 ${theme}`}>
            <IoMenu size={24} className={`Menu-Icon ${theme}`}/>
             <div className={`IconDiv2 ${theme}`}>
                 <MdSunny size={24} className={`Sun-Icon ${theme}`} onClick={toggleDropdown}/>
                 {isDropdownOpen && (
                <div className={`theme-dropdown ${theme}`}>
                  <ul>
                    <li onClick={() => handleThemeChange('dark')}><MdDarkMode style={{marginRight:"5px"}} />  Dark</li>
                    <li onClick={() => handleThemeChange('light')}><MdSunny style={{marginRight:"5px"}}/> Light</li>
                    <li onClick={() => handleThemeChange('default')}><MdSettingsApplications style={{marginRight:"5px"}}/> Default</li>
                  </ul>
                </div>
              )}
                 <img src="/no-profilebg.png" className="profileImage"/>
                 <div className={`dashName ${theme}`}>{userName ? userName : "Guest"} <br/></div>
             </div>
            </div>
        </div>
    </div>
)
}
export default NavBarDashBoard;