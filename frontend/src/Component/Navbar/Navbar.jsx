//Dependencies Import
import React from "react";

//Stylesheet Imports
import "./Navbar.css";

//Image Imports

const Navbar = () => {
  return (
    <>
    <div className="main">
      <div className="navigation">
        <nav id="nav-menu-container">
          <ul classname="nav-menu">
            <li id="logo" classname="pull-left">
              <a href="#intro">
                <h1>RAJIV BHAWAN</h1>
              </a>
            </li>
            <li>
              <a href="#about">About Bhawan</a>
            </li>
            <li>
              <a href="#facilities">Facilities</a>
            </li>
            <li>
              <a href="#team">Team</a>
            </li>
            <li>
              <a href="#contactus">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    </>
  );
};

export default Navbar;
