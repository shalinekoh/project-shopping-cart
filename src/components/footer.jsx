import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-sections">
        <div className="footer-column">
          <h4>About Us</h4>
          <ul>
            <li><a href="/about">Our Story</a></li>
            <li><a href="/team">Meet the Team</a></li>
            <li><a href="/careers">Careers</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Customer Service</h4>
          <ul>
            <li><a href="/faq">FAQs</a></li>
            <li><a href="/shipping">Shipping & Delivery</a></li>
            <li><a href="/returns">Returns & Refunds</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Follow Us</h4>
          <ul className="social-icons">
            <li><a href="https://www.facebook.com"><i className="fab fa-facebook-f"></i> Facebook</a></li>
            <li><a href="https://www.twitter.com"><i className="fab fa-twitter"></i> Twitter</a></li>
            <li><a href="https://www.instagram.com"><i className="fab fa-instagram"></i> Instagram</a></li>
            <li><a href="https://www.linkedin.com"><i className="fab fa-linkedin"></i> LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Zarr. All rights reserved.</p>
        <p><a href="/">Privacy Policy</a> | <a href="/">Terms of Service</a></p>
      </div>
    </footer>
  );
};

export default Footer;
