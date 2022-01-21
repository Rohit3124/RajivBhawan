//Created By Rahul Modi
//Dependencies Import
import React from "react";

//Stylesheet Imports
import "./Footer.css";

//Image Imports
import FooterTop from "../../Assets/FooterTop.svg";
import FooterBottom from "../../Assets/FooterBottom.svg";

const feedbackFormLink = "https://forms.gle/vBNSDMcy1DHCxo6u9";
const contactFormLink = "https://wellness.iitr.ac.in/";

const Footer = () => {
  return (
    <div className="Footer__container" id="contactus">
      <img className="Footer__bgTop" src={FooterTop} alt="Bg Design" />
      <div className="Footer__content">
        <h2>Contact Us</h2>
        <div className="Footer__data">
          <div className="Footer__address">
            <p>
              Rajiv Bhawan
              <br />
              Hydrology Road, IIT Roorkee
              <br />
              Roorkee-247667
              <br />
              Uttrakhand,IN
            </p>
            <p className="Footer__email">rajivbhawan@iitr.ac.in</p>
            <p className="Footer__phno">01332-284-520</p>
          </div>
          <div className="Footer__forms">
            <a href={feedbackFormLink} target="_blank">Feedback Form</a>
            <a href={contactFormLink} target="_blank">Wellness Center</a>
          </div>
        </div>
      </div>
      <div className="Footer__map">
        <iframe
          title="rajiv bhawan location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5788.498981101909!2d77.89128976776507!3d29.869998962972947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb3649f4b7ed3%3A0x8fe8006f00f0480f!2sRajiv%20Bhawan!5e0!3m2!1sen!2sin!4v1642010625410!5m2!1sen!2sin"
          style={{ border: "0", aspectRatio: "544/420" }}
          allowFullScreen="no"
          loading="lazy"
        ></iframe>
      </div>
      <img className="Footer__bgBottom" src={FooterBottom} alt="Bg Design" />
    </div>
  );
};

export default Footer;
