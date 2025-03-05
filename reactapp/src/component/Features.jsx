import React from "react";
import "../styles/feature.css";
import { TbMoneybag } from "react-icons/tb";
import { FaClock, FaUserShield } from "react-icons/fa";

const features = [
  { icon: <TbMoneybag />, title: "Save Money", description: "Get the best parking rates by booking in advance and avoiding expensive last-minute fees" },
  { icon: <FaClock />, title: "Save Time", description: "Find and reserve a parking spot instantly, so you don’t waste time searching for one." },
  { icon: <FaUserShield />, title: "Save Stress", description: "No more frustration—secure your parking spot beforehand and park with confidence" },
];

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="feature-card">
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section className="features-container">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </section>
  );
};

export default Features;
