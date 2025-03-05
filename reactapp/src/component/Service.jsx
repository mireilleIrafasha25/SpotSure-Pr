import React from "react";
import "../styles/service.css"; // Import the CSS file

const servicesData = [
  {
    id: 1,
    icon: "/car_service.png",
    title: "Parking Assistance",
    description: "Get real-time guidance to find the best available parking spots quickly and easily.",
  },
  {
    id: 2,
    icon: "/safety_service.png",
    title: "Secure Parking Solutions",
    description: "Enjoy peace of mind with our safe, well-monitored, and secured parking areas.",
  },
  {
    id: 3,
    icon: "/online_service.png",
    title: "Online Booking Parking",
    description: "Reserve your parking space in advance through our seamless online booking system.",
  },
  {
    id: 4,
    icon: "/easy_service.png",
    title: "Hourly & Monthly Parking Plans",
    description: "Flexible parking options tailored to your needs—pay by the hour or choose a monthly plan.",
  },
];

const Services = () => {
  return (
    <div className="services">
      {servicesData.map((service) => (
        <div className="service" key={service.id}>
          <img src={service.icon} alt={service.title} />
          <div className="service-text">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
