// src/components/DarkModeToggle.js
import React from "react";
import { MdWbSunny } from "react-icons/md";
import { RiMoonClearFill } from "react-icons/ri";
import { useDarkMode } from "./context/DarkModeContext";
import "./dashboard-styles/DarkToggle.css";
import { MdSunny } from "react-icons/md";
import { MdSettingsApplications } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { useState } from "react";
const DarkModeToggle = () => {
  const { theme, toggleTheme } = useDarkMode();
  const handleThemeChange = (selectedTheme) => {
    toggleTheme(selectedTheme);
    setIsDropdownOpen(false);
};
const [isDropdownOpen, setIsDropdownOpen] = useState(false); // 🔹 State ya dropdown

const toggleDropdown = () => {
  setIsDropdownOpen(!isDropdownOpen);
};
  return (
    <div className={`toggle-container ${theme}`}>
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
    </div>
  );
};

export default DarkModeToggle;
