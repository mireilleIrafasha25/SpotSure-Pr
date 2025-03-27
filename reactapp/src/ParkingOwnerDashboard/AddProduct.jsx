import React, { useState } from "react";
import { Notify } from "notiflix";
import ParkingSlots from "./ParkingSlots";
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
        <button onClick={() => handleTabClick('AllProduct')}> PARKING SLOTS</button>
      </div>
      {activeContent==='add-parking'&&(
    <CarsInParking/>
    )}
    {activeContent==='AllProduct'&&(<ParkingSlots/>)}
    </div>
  );
};

export default ParkingStatus;
