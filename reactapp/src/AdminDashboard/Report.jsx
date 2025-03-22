import React from "react";
import "./dashboard-styles/report.css";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const reports = [
  {
    id: 1,
    title: "Total Sales",
    description: "Total sales this month",
    percentage: 70,
    data: [{ name: "Completed", value: 70 }, { name: "Pending", value: 30 }],
  },
  {
    id: 2,
    title: "New Customers",
    description: "New customers registered",
    percentage: 80,
    data: [{ name: "New", value: 80 }, { name: "Returning", value: 20 }],
  },
  {
    id: 3,
    title: "Total Orders",
    description: "Orders processed this month",
    percentage: 60,
    data: [{ name: "Delivered", value: 60 }, { name: "In Progress", value: 40 }],
  },
  {
    id: 4,
    title: "Revenue Growth",
    description: "Growth compared to last month",
    percentage: 75,
    data: [{ name: "Current", value: 75 }, { name: "Previous", value: 25 }],
  },
];

const COLORS = ["#1e90ff", "#87cefa"]; // Blue and Skyblue colors

const Report = () => {
  return (
    <div className="report-container">
      <h2 className="report-title"> Reports</h2>
      <div className="report-grid">
        {reports.map((report) => (
          <div key={report.id} className="report-card">
            <h3>{report.title}</h3>
            <div className="chart-container">
              <div className="percentage">{report.percentage}%</div>
              <ResponsiveContainer width={100} height={100}>
                <PieChart>
                  <Pie
                    data={report.data}
                    cx="50%"
                    cy="50%"
                    innerRadius={30}
                    outerRadius={45}
                    dataKey="value"
                    stroke="none"
                  >
                    {report.data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            <div className="legend">
              {report.data.map((entry, index) => (
                <div key={index} className="legend-item">
                  <span
                    className="legend-color"
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  ></span>
                  {entry.name}
                </div>
              ))}
            </div>
            <p>{report.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Report;
