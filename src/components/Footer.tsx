import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>
            <strong>📞 Phone:</strong> <a href="tel:+919876543210">+91 98765 43210</a>
          </p>
          <p>
            <strong>📧 Email:</strong> <a href="mailto:info@stationeryshop.com">info@stationeryshop.com</a>
          </p>
        </div>
        <div className="footer-section">
          <h4>Business Hours</h4>
          <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
          <p>Saturday: 10:00 AM - 4:00 PM</p>
          <p>Sunday: Closed</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Catalog</a></li>
            <li><a href="/admin">Admin</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Stationery Shop. All rights reserved.</p>
      </div>
    </footer>
  );
};
