import React from "react";
import "./footer.css";

// Assuming logo is stored in the 'assets' folder

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-logo">
          <img src="https://i.imgur.com/eGgVTVY.png" alt="Company Logo" />
        </div>
        <div className="row">
          {/* Company Info */}
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/careers">Careers</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>
          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="/shop">Shop</a>
              </li>
              <li>
                <a href="/cart">Cart</a>
              </li>
              <li>
                <a href="/orders">My Orders</a>
              </li>
              <li>
                <a href="/profile">Profile</a>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="tel:+1234567890">+1 234 567 890</a>
              </li>
              <li>
                <a href="mailto:info@example.com">info@example.com</a>
              </li>
              <li>
                <a href="/faq">FAQs</a>
              </li>
              <li>
                <a href="/support">Support</a>
              </li>
            </ul>
          </div>
          {/* Social Media Links */}
          <div className="footer-col">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="https://facebook.com" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        {/* Copyright Notice */}
        <div className="footer-bottom">
          <p>&copy; 2024 E-Commerce. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
