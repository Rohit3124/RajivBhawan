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
              <a href="#">
                <h1>RAJIV BHAWAN</h1>
              </a>
            </li>
            <li>
              <a href="#about">ABOUT BHAWAN</a>
            </li>
            <li>
              <a href="#facilities">FACILITIES</a>
            </li>
            <li>
              <a href="#team">TEAM</a>
            </li>
            <li>
              <a href="#contactus">CONTACT US</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    </>
  );
};

export default Navbar;
