// src/components/DarkModeToggle.js
import React from "react";
import { MdWbSunny } from "react-icons/md";
import { RiMoonClearFill } from "react-icons/ri";
import { useDarkMode } from "./context/DarkModeContext";
import "./dashboard-styles/DarkToggle.css";

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <div className={`toggle-container`}>
        <div className="Toggle-Icon">
        <MdWbSunny size={24} className={`Sun-Icon ${darkMode?'dark':'light'}`} />
        <div className="Toggle-Switch" onClick={toggleDarkMode}>
          <div className={`Toggle-Circle ${darkMode ? "dark" : "light"}`}></div>
        </div>
        <RiMoonClearFill size={24} className={`Moon-Icon ${darkMode ? "dark":"light"}`}/>
      </div>
    </div>
  );
};

export default DarkModeToggle;
