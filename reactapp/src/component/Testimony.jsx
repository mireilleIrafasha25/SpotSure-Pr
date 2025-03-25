import React, { useState } from "react";
import "../styles/testimony.css"; // Importing CSS

const testimonials = [
  {
    image: "/client1.png",
    text: "I've had an amazing experience with this parking service! The online booking is quick and easy, the parking spots are secure, and the staff is always helpful. I highly recommend it!",
  },
  {
    image: "/client2.jpg",
    text: "This service saved me so much time! I can reserve a spot in advance, and the customer support is fantastic. Highly recommended!",
  },
  {
    image: "/client3.jpg",
    text: "Convenient, reliable, and affordable. The parking spaces are well-maintained, and the process is super smooth. Great service!",
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  const nextTestimonial = (i) => {
    setIndex(i);
  };

  return (
    <div className="testimonial-container">
        <div className="testimony-content">
      <h2 className="testimonial-title">What Our Customers Say</h2>
      <div className="testimonial-card">
        <img src={testimonials[index].image} alt="Customer" className="testimonial-img" />
        <p className="testimonial-text">{testimonials[index].text}</p>
      </div>
      <div className="dots">
        {testimonials.map((_, i) => (
          <span
            key={i}
            className={`dot ${index === i ? "active" : ""}`}
            onClick={() => nextTestimonial(i)}
          ></span>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Testimonial;
