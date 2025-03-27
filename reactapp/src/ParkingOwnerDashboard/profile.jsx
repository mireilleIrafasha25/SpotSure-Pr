import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, LineChart, Line } from "recharts";
import "./dashboard-styles/parkingReport.css";

const ParkingReport = () => {
  // Reservation Trends Data
  const reservationData = [
    { name: "Week 1", reservations: 30 },
    { name: "Week 2", reservations: 45 },
    { name: "Week 3", reservations: 50 },
    { name: "Week 4", reservations: 70 },
  ];

  // Peak Hours Data
  const peakHoursData = [
    { hour: "6AM", count: 5 },
    { hour: "9AM", count: 20 },
    { hour: "12PM", count: 35 },
    { hour: "3PM", count: 50 },
    { hour: "6PM", count: 80 },
    { hour: "9PM", count: 40 },
  ];

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
    <div className="dashboard-container">
      {/* Reservation Trends */}
      <div className="chart-container">
        <h2>Reservation Trends</h2>
        <BarChart width={400} height={250} data={reservationData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="reservations" fill="orangered" />
        </BarChart>
      </div>

      {/* Peak Hours Analysis */}
      <div className="chart-container">
        <h2>Peak Hours Analysis</h2>
        <LineChart width={400} height={250} data={peakHoursData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="hour" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="count" stroke="darkblue" />
        </LineChart>
      </div>

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
