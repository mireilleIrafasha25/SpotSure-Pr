import React from "react";
import "./dashboard-styles/carInparking.css"
const CarsInParking = () => {
    const cars = [
        { plate: "ABC123", checkIn: "10:00 AM", checkOut: "12:00 PM" },
        { plate: "DEF456", checkIn: "11:00 AM", checkOut: "1:00 PM" },
        { plate: "GHI789", checkIn: "9:00 AM", checkOut: "11:00 AM" },
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
