import "./dashboard-styles/navbarDashboard.css"
import { useDarkMode } from "../dashboard/context/DarkModeContext";
import { MdSunny } from "react-icons/md";
import { MdSettingsApplications } from "react-icons/md";
import { MdLanguage } from "react-icons/md";
import { useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
const NavBarDashBoard=()=>
    
{
  const { theme, toggleTheme } = useDarkMode();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // 🔹 State ya dropdown

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleThemeChange = (selectedTheme) => {
    toggleTheme(selectedTheme);
    setIsDropdownOpen(false);
};


return(
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
                 
                 <MdLanguage size={24} className={`Language-Icon ${theme}`}/>
                 <img src="/no-profilebg.png" className="profileImage"/>
             </div>
            </div>
        </div>
)
}
export default NavBarDashBoard;