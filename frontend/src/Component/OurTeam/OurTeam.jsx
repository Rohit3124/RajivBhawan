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
            <div className="ourTeam__teamCard">
              <img src={obj.img} alt={obj.name} />
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
