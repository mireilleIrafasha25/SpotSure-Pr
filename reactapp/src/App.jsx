import React from "react"
import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import Home from "./component/Home"
import Layout from "./component/Layout"
import About from "./component/About"
import Services from "./component/Service"
import Features from "./component/Features"
import Contact from "./component/Contact"
import BookingForm from "./component/Booking"
import Login from "./component/Login"
import Register_own from "./component/Register"
import Verification from "./component/Verification"
import BookingConfirmation from "./component/confirmatioPage"
import AuthProvider from "./component/AuthProvider"
import { DarkModeProvider } from "./dashboard/context/DarkModeContext"
import AdminDashboardPro from "./dashboard/DashboardView"
import DashboardLayout from "./dashboard/dashboardLayout"
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
      <Route path="/booking" element={<BookingForm/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register_own/>}/>
      <Route path="/verify" element={<Verification/>}/>
      <Route path="/confirm" element={<BookingConfirmation/>}/> 
     </Route>
     <Route path="/" element={<DashboardLayout/>}>
     <Route path="/client-dashboard" index element={<AdminDashboardPro/>} />
     </Route>
    </Routes>
    </Router>
    </AuthProvider>
    </DarkModeProvider>
  )
}

export default App
