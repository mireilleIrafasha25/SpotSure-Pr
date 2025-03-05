import NavBar from "./Navbar"
import Footer from "./Footer"
import {Outlet} from "react-router-dom"
import "../styles/layout.css"
const Layout=()=>
{
    return(
        <div>
            <NavBar />
            <Outlet/>
           <div className="Footer-Layout"><Footer /></div> 
        </div>
    )
}

export default Layout;