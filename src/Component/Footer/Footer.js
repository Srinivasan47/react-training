import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <p className="col-md-4 mb-0 text-body-secondary">&copy; 2025 My Application</p>
      <nav>
        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item"><a href="#privacy">Privacy Policy</a></li>
          <li className="nav-item"><a href="#terms">Terms of Service</a></li>
          <li className="nav-item"><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;