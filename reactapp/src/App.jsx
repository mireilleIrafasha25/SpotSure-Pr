import React from "react"
import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import Home from "./component/Home"
import Layout from "./component/Layout"
import About from "./component/About"
import Services from "./component/Service"
import Features from "./component/Features"
import Contact from "./component/Contact"
import Login from "./component/Login"
import Register_own from "./component/Register"
import Verification from "./component/Verification"
import BookingConfirmation from "./dashboard/confirmatioPage"
import AuthProvider from "./component/AuthProvider"
import { DarkModeProvider } from "./dashboard/context/DarkModeContext"
import DashboardHome from "./dashboard/DashboardView"
import DashboardLayout from "./dashboard/dashboardLayout"
import ParkingSpots from "./dashboard/AvailableParkingSpots"
import DestinationForm from "./dashboard/DestinationForm"
import Payment from "./dashboard/Payment"
import BookingForm from "./dashboard/BookingForm"
import AdminLayout from "./dashboard1/dashboardLayout"
import AdminDashboardPro from "./dashboard1/DashboardView"
import AddParking from "./dashboard1/AddProduct"
import Report from "./dashboard1/Report"
import ManageUserDash from "./dashboard1/UserTable"
import Settings from "./dashboard1/settings"
function App() {
  return (
    <DarkModeProvider>
      <AuthProvider>
    <Router>
    <Routes>
     <Route path="/" element={<Layout/>}>
      <Route path="/" index element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/service" element={<Services/>}/>
      <Route path="/feature" element={<Features/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register_own/>}/>
      <Route path="/verify" element={<Verification/>}/>
      
     </Route>
     <Route path="/" element={<DashboardLayout/>}>
     <Route path="/client-dashboard" index element={<DashboardHome/>} />
     <Route path="/confirm" element={<BookingConfirmation/>}/> 
     <Route path="/destination" element={<DestinationForm/>}/>
     <Route path="/availableParking" element={<ParkingSpots/>}/>
     <Route path="/payment" element={<Payment/>}/>
     <Route path="/booking" element={<BookingForm/>}/>
     </Route>
     <Route path="/" element={<AdminLayout/>}>
      <Route path="/admin-dashboard" index element={<AdminDashboardPro/>} />
      <Route path="/add-parking" element={<AddParking/>}/>
          <Route path="/report" element={<Report/>} />
          <Route path="/UserDash" element={<ManageUserDash/>} />
          <Route path="/setting" element={<Settings/>} /> 
     </Route>
    </Routes>
    </Router>
    </AuthProvider>
    </DarkModeProvider>
  )
}

export default App
