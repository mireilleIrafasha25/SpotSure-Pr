import React from 'react';
import './dashboard-styles/customertable.css'; // Import the CSS file for styling

export default function CustomerOrderTable() {
  const orders = [
    { profile: "Press", address: "London", date: "22.08.2022", status: "Delivered", price: "$920" },
    { profile: "Marina", address: "Man City", date: "24.08.2022", status: "Processed", price: "$452" },
    { profile: "Alex", address: "Unknown", date: "18.08.2022", status: "Cancelled", price: "$1200" },
    { profile: "Robert", address: "New York", date: "03.08.2022", status: "Delivered", price: "$1235" },
  ];

  return (
    <div className="table-container">
      <table className="customer-table">
        <thead>
          <tr>
            <th>Profile</th>
            <th>Address</th>
            <th>Date</th>
            <th>Status</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index} className={`row-${index % 3}`}>
              <td>{order.profile}</td>
              <td>{order.address}</td>
              <td>{order.date}</td>
              <td>{order.status}</td>
              <td>{order.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
