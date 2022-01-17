//Created By Rahul Modi
//Dependencies Import
import React from "react";

//Stylesheet Imports
import "./OurTeam.css";

//Data Imports
import OurTeamData from "./OurTeamData";

const OurTeam = () => {
  return (
    <div id="team" className="ourTeam__container">
      <h2 className="ourTeam__heading">Our Team</h2>
      <div className="ourTeam__member">
        {OurTeamData.map((obj, indx) => {
          return (
            <div key={indx} className="ourTeam__teamCard">
              <div className="img_container">
                <img src={obj.img} alt={obj.name} />
                <div className="img_hover_content">
                  <div className="content_mail">{obj.mail}</div>
                  <div className="content_phone1">{obj.phone1}</div>
                  <div className="content_phone2">{obj.phone2}</div>
                </div>
              </div>
              <p className="ourTeam__memberPos">{obj.position}</p>
              <p className="ourTeam__memberName">{obj.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurTeam;
