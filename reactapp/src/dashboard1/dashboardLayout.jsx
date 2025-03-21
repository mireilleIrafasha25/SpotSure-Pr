import SideBar from "./sidebar";
import NavBarDashboard from "./navbar";
import { Outlet } from "react-router-dom";
import "./dashboard-styles/dashboard-layout.css"
import { useDarkMode } from "./context/DarkModeContext";
const DashboardLayout = () => {
const {darkMode}=useDarkMode();
    return (
        <div className={`Main-outlet ${darkMode ? "dark":"light"}`}>
             <div className={`SideBar-Element ${darkMode?"dark":"light"}`}>
            <SideBar />
            </div>
            <div className="NavandDashboard">
            <div className="NavBarDashboard"><NavBarDashboard />  </div>
            <div className={`outset  ${darkMode?'dark':'light'}`}><Outlet /></div>
            </div> 
        </div>
    );
}
export default DashboardLayout;