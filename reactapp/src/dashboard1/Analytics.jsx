import React from "react";
import { MdContentCopy } from "react-icons/md";
import { FaArrowDown, FaRegSquareCheck } from "react-icons/fa6";
import { BsCurrencyDollar } from "react-icons/bs";
import { BsCalendarEvent } from "react-icons/bs";
import { FaArrowUp } from "react-icons/fa6";
import "./dashboard-styles/analytics.css"
import { LuNotebook } from "react-icons/lu";
import { TfiBag } from "react-icons/tfi";
import { TbCircleDashedPercentage } from "react-icons/tb";
import { useDarkMode } from "./context/DarkModeContext";
import SimpleBarChart from "./BarChart";
import { FaCaretDown } from "react-icons/fa6";
import PieChart1 from "./PieChart1";
import SmallRadialChart from "./SmallPieChart";
import LineChart1 from "./linechart";
import CustomerOrderTable from "./customerTable";
import { LuRefreshCw } from "react-icons/lu";
const Analytics = () => {
  const { darkMode } = useDarkMode();
  const cardData = [
    { title: "Orders", value: 201 ,icon:<MdContentCopy/>,perc:"20%"},
    { title: "Approved", value: 36 ,icon:<FaRegSquareCheck/>,perc:"8.5%"},

  ];
  const cardData1=[
    { title: "Month Total", value: "25,410",icon:<BsCurrencyDollar/>,perc:"0.2%" },
    { title: "Revenue", value: "1,352",icon:<BsCalendarEvent/> ,perc:"2.4%"},
  ]
  const cardData2=[
    { title: "Paid Invoice", value: "$25,410",icon:<LuNotebook/>,perc:"0.2%",description:"The total paid invoices for the current financial year amount to $25,410,and verified payments received during this period." },
    { title: "Fund Received", value: "$145,652",icon:<TfiBag/> ,perc:"2.4%",description:"15% of the current financial year's target has been met, with $145,652 received so far in funds."},
  ]
  const cardData3=[
    { title: "User", value: "4567"}
  ]
  const cardData4=[
    { title: "Subscription", value: "256"}
  ]

  return (
    <div>
      <div className="Column3">
      <div className="Order-Approval">
    <div className={`dashboard-container ${darkMode?"dark":"light"}`}>
      {/* Cards section */}
      {cardData.map((card, index) => (
        <div className={`stats-card ${darkMode?"dark":"light"}`} key={index}>
          <div className={`card-title ${darkMode? 'dark':"light"}`}><span>{card.title}</span><span>{card.icon}</span></div>
          <p>{card.value}</p>
          <div className={`Arrow-Number ${darkMode? 'dark':'light'}`}><span><FaArrowUp className="Up-icon" />{card.perc}</span> <div>since last month</div></div>
         
        </div>
      ))}
      </div>
      <div className="dashboard-container">
      {/* Cards section */}
      {cardData1.map((card, index) => (
        <div className={`stats-card ${darkMode?'dark':'light'} card-${index + 1}`} key={index}>
          <div className={`card-title ${darkMode?'dark':'light'}`}><span>{card.title}</span><span>{card.icon}</span></div>
          <p>{card.value}</p>
          <div className={`Arrow-Number ${darkMode?'dark':'light'}`}><span className="Down-Perc"><FaArrowDown className="Down-icon" />{card.perc}</span> <div className="lastMonth">since last month</div></div>
         
        </div>
      ))}
      </div>
      </div>
      <div className={`othercolumn ${darkMode?'dark':'light'}`}>
      <div className={`dashboard-container3 ${darkMode?'dark':'light'}`}>
      {/* Cards section */}
      {cardData3.map((card, index) => (
        <div className={`stats-card3 ${darkMode?'dark':'light'} card-${index + 1}`} key={index}>
          <div className={`card-title3 ${darkMode?'dark':'light'}` }>{card.title}</div>
          <div className={`card-number3 ${darkMode?'dark':'light'}`}>{card.value}</div>
          <div className={`Arrow-Number3 ${darkMode?'dark':'light'}`}>since last month</div>
         <PieChart1/>
        </div>
      ))}
      </div>
      </div>
      <div className={`othercolumn ${darkMode?'dark':'light'}`}>
      <div className={`dashboard-container3 ${darkMode?'dark':'light'}`}>
      {/* Cards section */}
      {cardData4.map((card, index) => (
        <div className={`stats-card3 ${darkMode?'dark':'light'} card-${index + 1}`} key={index}>
          <div className={`card-title3 ${darkMode?'dark':'light'}` }>{card.title}</div>
          <div className={`card-number3 ${darkMode?'dark':'light'}`}>{card.value}</div>
          <div className={`Arrow-Number3 ${darkMode?'dark':'light'}`}>since last month</div>
         <PieChart1/>
        </div>
      ))}
      </div>
      </div>
      </div>
      <div className={`column2  ${darkMode?'dark':'light'}`}>
        <div className={`BarChartcolumn  ${darkMode?'dark':'light'}`}>
          <div className={`Bar-top  ${darkMode?'dark':'light'}`}>
            <div className={`sale  ${darkMode?'dark':'light'}`}>Sale Dynamics</div>
            <div className={`Year-Bar  ${darkMode?'dark':'light'}`}><span>2021 <FaCaretDown/> </span></div>
          </div>
        <SimpleBarChart className={`simple-chartD  ${darkMode?'dark':'light'}`}/>
        </div>
        <div className={`dashboard-container  ${darkMode?'dark':'light'}`}>
      {/* Cards section */}
      {cardData2.map((card, index) => (
        <div className={`stats-card  ${darkMode?'dark':'light'} card-${index + 1}`} key={index}>
          <div className={`card-title2  ${darkMode?'dark':'light'}`}><span>{card.icon}</span><span className="circle-chart"><SmallRadialChart/></span></div>
          <div className={`title1  ${darkMode?'dark':'light'}`}>{card.title}</div>
          <div className={`value  ${darkMode?'dark':'light'}`}>{card.value}</div>
          <div className={`current-financial  ${darkMode?'dark':'light'}`}> Current Financial Year</div>
    
         
        </div>
      ))}
      </div>
      </div>
      <div className={`column22 ${darkMode?'dark':'light'}`}>
        <div className={`LineChartcolumn ${darkMode?'dark':'light'}`}>
          <div className={`user-activity ${darkMode?'dark':'light'}`}>
            <span>Overall User Activity</span>
          <div className={`Year-Bar ${darkMode?'dark':'light'}`}><span>2021 <FaCaretDown/> </span></div>
          </div>
          <LineChart1/>
        </div>
        <div className={`User-table  ${darkMode?'dark':'light'}`}>
        <div className={`Customer-Order  ${darkMode?'dark':'light'}`}><span>Customer Order</span> <LuRefreshCw/></div>
          <CustomerOrderTable/>
        </div>
      </div>
      </div>
  );
};

export default Analytics;
