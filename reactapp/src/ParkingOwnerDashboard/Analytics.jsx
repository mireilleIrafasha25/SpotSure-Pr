import React from "react";
import { MdContentCopy } from "react-icons/md";
import { FaArrowDown, FaRegSquareCheck } from "react-icons/fa6";
import { BsCurrencyDollar } from "react-icons/bs";
import { BsCalendarEvent } from "react-icons/bs";
import { FaArrowUp } from "react-icons/fa6";
import "./dashboard-styles/analytics.css"
import { LuNotebook } from "react-icons/lu";
import { TfiBag } from "react-icons/tfi";
import { useDarkMode } from "../dashboard/context/DarkModeContext";
import SimpleBarChart from "./BarChart";
import { FaCaretDown } from "react-icons/fa6";
import PieChart1 from "./PieChart1";
import { LuRefreshCw } from "react-icons/lu";
import TodayBookingTable from "./TodayBookingTable";
import { useState } from "react";
import { useEffect } from "react";
import { Notify } from "notiflix";
import axios from "axios";
const Analytics = () => {
  const { theme } = useDarkMode();
  const cardData = [
    { title: "Booking", value: 201 ,icon:<MdContentCopy/>,perc:"20%"},
    { title: "Vechicle left", value: 36 ,icon:<FaRegSquareCheck/>,perc:"8.5%"},

  ];
  const cardData1=[
    { title: "Revenue", value: "25,410",icon:<BsCurrencyDollar/>,perc:"0.2%" },
    { title: "Parking Slots", value: "1,352",icon:<BsCalendarEvent/> ,perc:"2.4%"},
  ]
  const cardData2=[
    { title: "Paid Invoice", value: "$25,410",icon:<LuNotebook/>,perc:"0.2%",description:"The total paid invoices for the current financial year amount to $25,410,and verified payments received during this period." },
    { title: "Fund Received", value: "$145,652",icon:<TfiBag/> ,perc:"2.4%",description:"15% of the current financial year's target has been met, with $145,652 received so far in funds."},
  ]
  const cardData3=[
    { title: "Occupied & Available slots", value: "4567"}
  ]
  const cardData4=[
    { title: "Booking Status", value: "256"}
  ]
    const [parkingSpots, setParkingSpots] = useState([]);
  useEffect(() => {
        const fetchParkingSpots = async () => {
          try {
            const response = await axios.get(
              "https://spotsure-backend-e4nq.onrender.com/SpotSure/booking/listBooking"
            );
            setParkingSpots(response.data); // Assuming data is an array of parking spots
            console.log(response.data);

          } catch (err) {
            // console.error("Error fetching parking spots:", err);
            Notify.failure(err.message);
          }
      }
      fetchParkingSpots();
    }, []);

  return (
    <div className="Main-Analytic">
      <div className="Column3">
      <div className="Order-Approval">
    <div className={`dashboard-container ${theme}`}>
      {/* Cards section */}
      {cardData.map((card, index) => (
        <div className={`stats-card ${theme}`} key={index}>
          <div className={`card-title ${theme}`}><span>{card.title}</span><span>{card.icon}</span></div>
          <p>{card.value}</p>
          <div className={`Arrow-Number ${theme}`}><span><FaArrowUp className="Up-icon" />{card.perc}</span> <div>since last month</div></div>
         
        </div>
      ))}
      </div>
      <div className="dashboard-container">
      {/* Cards section */}
      {cardData1.map((card, index) => (
        <div className={`stats-card ${theme} card-${index + 1}`} key={index}>
          <div className={`card-title ${theme}`}><span>{card.title}</span><span>{card.icon}</span></div>
          <p>{card.value}</p>
          <div className={`Arrow-Number ${theme}`}><span className="Down-Perc"><FaArrowDown className="Down-icon" />{card.perc}</span> <div className="lastMonth">since last month</div></div>
         
        </div>
      ))}
      </div>
      </div>
      <div className={`othercolumn ${theme}`}>
      <div className={`dashboard-container3 ${theme}`}>
      {/* Cards section */}
      {cardData3.map((card, index) => (
        <div className={`stats-card3 ${theme} card-${index + 1}`} key={index}>
          <div className={`card-title3 ${theme}` }>{card.title}</div>
          <div className={`card-number3 ${theme}`}>{card.value}</div>
          <div className={`Arrow-Number3 ${theme}`}>Daily</div>
         <PieChart1/>
        </div>
      ))}
      </div>
      </div>
      <div className={`othercolumn ${theme}`}>
      <div className={`dashboard-container3 ${theme}`}>
      {/* Cards section */}
      {cardData4.map((card, index) => (
        <div className={`stats-card3 ${theme} card-${index + 1}`} key={index}>
          <div className={`card-title3 ${theme}` }>{card.title}</div>
          <div className={`card-number3 ${theme}`}>{parkingSpots.length}</div>
          <div className={`Arrow-Number3 ${theme}`}>Daily</div>
         <PieChart1/>
        </div>
      ))}
      </div>
      </div>
      </div>
      <div className={`column2  ${theme}`}>
      <div className={`User-table  ${theme}`}>
        <div className={`Customer-Order  ${theme}`}><span>Today Booking</span> <LuRefreshCw/></div>
          <TodayBookingTable/>
        </div>
        <div className={`BarChartcolumn  ${theme}`}>
                  <div className={`Bar-top  ${theme}`}>
                    <div className={`sale  ${theme}`}>Monthly Booking</div>
                    <div className={`Year-Bar  ${theme}`}><span>2025<FaCaretDown/> </span></div>
                  </div>
                <SimpleBarChart className={`simple-chartD  ${theme}`}/>
                </div>
      
      </div>
      </div>
  );
};

export default Analytics;
