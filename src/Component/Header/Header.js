import React from "react";
import { Link } from "react-router";
const Header = () => {
  return (
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <h1 className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">My Application</h1>
      <nav>
        <ul className="nav nav-pills">
          <li className="nav-item"><Link to={`/`}><a className="nav-link active" href="#home">Home</a></Link></li>
          <li className="nav-item"><Link to={`/about-us`}><a className="nav-link" href="#about">About</a></Link></li>
          <li className="nav-item"><Link to={`/contact`}><a className="nav-link" href="#contact">Contact</a></Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;