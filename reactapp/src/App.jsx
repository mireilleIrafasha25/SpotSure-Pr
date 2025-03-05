import React from "react"
import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import Home from "./component/Home"
import Layout from "./component/Layout"
import About from "./component/About"
import Services from "./component/Service"
import Features from "./component/Features"
import Contact from "./component/Contact"
import BookingForm from "./component/Booking"
function App() {
  return (
    <Router>
    <Routes>
     <Route path="/" element={<Layout/>}>
      <Route path="/" index element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/service" element={<Services/>}/>
      <Route path="/feature" element={<Features/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/booking" element={<BookingForm/>}/>
     </Route>
    </Routes>
    </Router>
  )
}

export default App
