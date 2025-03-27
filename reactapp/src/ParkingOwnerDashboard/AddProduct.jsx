import React, { useState } from "react";
import { Notify } from "notiflix";
import AllParking from "./AllParking";
import CarsInParking from "./CarInParking";
import "./dashboard-styles/Addparking.css"
const ParkingStatus = () => {
    const[activeContent, setActiveContent] = useState("add-parking")
    const handleTabClick = (tab) => {
        setActiveContent(tab);
    }

  return (
    <div>
          <div className="welcomeCard">
        <button onClick={() => handleTabClick('add-parking')}>CAR IN PARKING</button>
        <button onClick={() => handleTabClick('AllProduct')}> VIEW ALL PARKING HERE</button>
      </div>
      {activeContent==='add-parking'&&(
    <CarsInParking/>
    )}
    {activeContent==='AllProduct'&&(<AllParking/>)}
    </div>
  );
};

export default ParkingStatus;
