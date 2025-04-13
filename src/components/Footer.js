import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Delicious Eats</h4>
          <p>123 Tasty Street<br />Foodville, FD 12345</p>
        </div>
        <div className="footer-section">
          <h4>Opening Hours</h4>
          <p>Monday - Friday: 11am - 10pm<br />
             Saturday & Sunday: 10am - 11pm</p>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Phone: (123) 456-7890<br />
             Email: info@deliciouseats.com</p>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2025 Delicious Eats. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;