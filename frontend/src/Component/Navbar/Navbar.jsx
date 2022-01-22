//Dependencies Import
import React, { useState } from "react";
import Hamburger from "./Hamburger";

//Stylesheet Imports
import "./Navbar.css";

//Image Imports

const Navbar = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const HamburgerHandler = () => {
    setIsHamburgerOpen((prevstate) => {
      return !prevstate;
    });
  };

  const LinkHandler = () => {
    setIsHamburgerOpen(false);
  };

  return (
    <nav className="navbar__nav">
      <a onClick={LinkHandler} className="navbar__logo" href="#Home">
        RAJIV BHAWAN
      </a>

      <ul className={`navbar__navMenu ${isHamburgerOpen ? "" : " notActive"}`}>
        <li>
          <a onClick={LinkHandler} href="#about">
            ABOUT BHAWAN
          </a>
        </li>
        <li>
          <a onClick={LinkHandler} href="#facilities">
            FACILITIES
          </a>
        </li>
        <li>
          <a onClick={LinkHandler} href="#team">
            TEAM
          </a>
        </li>
        <li>
          <a onClick={LinkHandler} href="#contactus">
            CONTACT US
          </a>
        </li>
      </ul>
      <Hamburger isOpen={isHamburgerOpen} onClick={HamburgerHandler} />
    </nav>
  );
};

export default Navbar;
