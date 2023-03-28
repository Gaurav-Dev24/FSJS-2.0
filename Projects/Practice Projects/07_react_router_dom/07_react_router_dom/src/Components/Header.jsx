import React from "react";
import { Link, } from "react-router-dom";
import "../App.css";
const Header = () => {
  return (
    <>
      <div className="navbar">
        
        <ul className="nav-items">
          <Link to="/">
            <li className="list-items">Home</li>
          </Link>
          <Link to="/about">
            <li className="list-items">About</li>
          </Link>
          <Link to="/contact">
            <li className="list-items">Contact</li>
          </Link>
          <Link to="/blog">
            <li className="list-items">Blog</li>
          </Link>
        </ul>
      </div>

    </>
  );
};

export default Header;
