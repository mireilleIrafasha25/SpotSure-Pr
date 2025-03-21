import SideBar from "./sidebar";
import NavBarDashboard from "./navbar";
import { Outlet } from "react-router-dom";
import "./dashboard-styles/dashboard-layout.css"
import { useDarkMode } from "../dashboard/context/DarkModeContext"
const AdminLayout = () => {
const {theme}=useDarkMode();
    return (
        <div className={`Main-outlet ${theme}`}>
             <div className={`SideBar-Element ${theme}`}>
            <SideBar />
            </div>
            <div className="NavandDashboard">
            <div className="NavBarDashboard"><NavBarDashboard />  </div>
            <div className={`outset  ${theme}`}><Outlet /></div>
            </div> 
        </div>
    );
}
export default AdminLayout;