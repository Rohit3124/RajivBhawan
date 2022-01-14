//Created By Rahul Modi
//Dependencies Import
import React from "react";

//Stylesheet Imports
import "./OyoCampus.css";

//Images Import
import GoogleBadge from "../../Assets/google-play-badge.png";
import OyoCampusLogo from "../../Assets/OyoCampus.png";

const OyoCampus = () => {
  return (
    <div className="oyoCampus__container">
      <div className="oyoCampus__content">
        <h2 className="oyoCampus__heading">
          Download the OYO Campus App to stay up to date!
        </h2>
        <p>
          Give feedbacks, search the menu and know our workers better with the
          app.
        </p>
        <a href="https://play.google.com/store/apps/details?id=com.oyo.campus&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
          <img
            className="oyoCampus__googleBadge"
            alt="Get it on Google Play"
            src={GoogleBadge}
          />
        </a>
      </div>
      <img className="oyoCampus__oyoLogo" src={OyoCampusLogo} alt="" />
    </div>
  );
};

export default OyoCampus;
