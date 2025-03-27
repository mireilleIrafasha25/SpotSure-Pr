import React from "react";
import "./dashboard-styles/parkingReport.css";

const ParkingReport = () => {

  // Revenue Reports Data
  const revenueData = [
    { month: "January", revenue: "$1,200" },
    { month: "February", revenue: "$1,500" },
    { month: "March", revenue: "$1,800" },
    { month: "April", revenue: "$2,100" },
  ];

  // Customer Feedback Data
  const feedbacks = [
    { user: "Alice", rating: 5, comment: "Great service!" },
    { user: "Bob", rating: 4, comment: "Easy to find parking spots." },
    { user: "Charlie", rating: 3, comment: "Sometimes spots are full." },
  ];

  return (
    <div className="dashboard-container0">
      {/* Revenue Reports */}
      <div className="report-container">
        <h2>Revenue Reports</h2>
        <table>
          <thead>
            <tr>
              <th>Month</th>
              <th>Revenue</th>
            </tr>
          </thead>
          <tbody>
            {revenueData.map((item, index) => (
              <tr key={index}>
                <td>{item.month}</td>
                <td>{item.revenue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Customer Feedback */}
      <div className="feedback-container">
        <h2>Customer Feedback</h2>
        {feedbacks.map((fb, index) => (
          <div key={index} className="feedback-item">
            <h4>{fb.user} ⭐{fb.rating}</h4>
            <p>{fb.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParkingReport;
