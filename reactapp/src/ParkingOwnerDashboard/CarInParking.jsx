import React from "react";
import "./dashboard-styles/carInparking.css"
const CarsInParking = () => {
  const cars = [
    { plate: "RAB 123 D", checkIn: "9:00 AM", checkOut: "2:00 PM" },
    { plate: "RAF 456 E", checkIn: "10:30 AM", checkOut: "3:00 PM" },
  ];

  return (
    <div className="cars-container">
      <h2>Cars in Parking</h2>
      <table>
        <thead>
          <tr>
            <th>Plate Number</th>
            <th>Check-in Time</th>
            <th>Expected Check-out</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car, index) => (
            <tr key={index}>
              <td>{car.plate}</td>
              <td>{car.checkIn}</td>
              <td>{car.checkOut}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CarsInParking;
