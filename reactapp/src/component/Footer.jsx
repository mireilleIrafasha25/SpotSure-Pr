import React from "react";
import { LuMapPin } from "react-icons/lu";
import { RiPhoneFill } from "react-icons/ri";
import { CgMail } from "react-icons/cg";
import { RiFacebookCircleFill } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";

import { Link } from "react-router-dom";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Subscribe Section */}
        <div className="footer-section">
          <h3>Subscribe Now</h3>
          <p>There are many variations of passages of SpotSure available,</p>
          <input type="email" placeholder="Enter your email" className="email-input" />
          <button className="subscribe-btn">Subscribe</button>
        </div>

        {/* Helpful Links Section */}
        <div className="footer-section">
          <h3>Helpful Link</h3>
          <ul>
           <li> <Link to="/">Home</Link></li>
           <li> <Link to="/">About Us</Link></li>
           <li> <Link to="/">Services</Link></li>
           <li> <Link to="/">Features</Link></li>
           <li> <Link to="/">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p><LuMapPin className="footer-icon"/><span> Kigali, City</span></p>
          <p><RiPhoneFill className="footer-icon"/><span>+250788675365</span></p>
          <p><CgMail className="footer-icon"/> <span>spotsure@gmail.com</span></p>
          <div className="SocialMedia">
            <RiFacebookCircleFill className="socialMedia-icon" />
            <BsTwitterX className="socialMedia-icon" />
            <FaLinkedinIn className="socialMedia-icon" />
            <AiOutlineGithub className="socialMedia-icon" />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2025 All Rights Reserved By SpotSure</p>
      </div>
    </footer>
  );
};

export default Footer;
