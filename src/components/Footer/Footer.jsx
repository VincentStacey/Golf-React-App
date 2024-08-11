import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>What Do We Have To Offer?</h3>
          <p>
          At Golf City, we offer a premium selection of golf clubs, accessories, and apparel tailored to elevate your game. From top-brand drivers and irons to custom fitting services and expert advice, our store is your go-to destination for everything golf. Whether you're a beginner or a seasoned pro, we provide the quality gear and personalized support you need to excel on the course. Visit us for unbeatable deals, professional guidance, and a golfing experience like no other.
          </p>
        </div>
        <div className="footer-section">
          <h3>Featured Brands We Carry</h3>
          <ul>
            <li>Taylormade</li>
            <li>Titliest</li>
            <li>Callaway</li>
            <li>Srixon</li>
            <li>Cobra</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: GolfCity@gmail.com</p>
          <br />
          <p>Phone: (709) 689-3732</p>
          <br />
          Location: St. John's, Newfoundland and Labrador
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; Vincent Stacey, Liam Forsey and Jack Morris. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;