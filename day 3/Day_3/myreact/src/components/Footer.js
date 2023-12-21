// Footer.js
import React from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import '../assets/Footer.css';

const Footer = () => {
  return (
    <footer>
      <div>
        <p>&copy; 2023 Blossom Haven. All rights reserved.</p>
      </div>
      <div className="contact-info">
        <div>
          <h4>Contact Information</h4>
          <p>Email: <a href="mailto:luthadcruz@gmail.com" style={{ color: 'white' }}>luthadcruz@gmail.com</a></p>
          <p>Phone: +91 9344392757</p>
        </div>
        <div>
          <h4>Follow Us</h4>
          <p>
            Twitter:{' '}
            <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
              <FaTwitter size={24} /> @ThadeusCruz
            </a>
          </p>
          <p>
            Facebook:{' '}
            <a href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }} >
              <FaFacebook size={24} /> facebook.com/Thadeus_Cruz_G
            </a>
          </p>
        </div>
        <div>
          <h4>Address</h4>
          <p>15(3), Indira Nagar,</p>
          <p>Podanur, Coimbatore - 641 023</p>
        </div>
      </div>
      <div className="important-pages">
        <div>
          <h4>Important Pages</h4>
          <p><a href="/terms" style={{ color: 'white' }} >Terms and Conditions</a></p>
          <p><a href="/privacy" style={{ color: 'white' }}>Privacy Policy</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;