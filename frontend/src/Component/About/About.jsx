import React from "react";
import hostel from "../../Assets/about1.jpg";
import "./About.css";
export default function About() {
  return (
    <div className="about" id="about">
      <div className="heading">About Rajiv Bhawan</div>
      <div className="container">
        <p className="desc">
          Rajiv Bhawan is a jewel amongst the hostels of IIT Roorkee. It is the
          heart of gaao. Named after the 6th prime minister of India, Rajiv
          Gandhi, it was on 27th October, 2008 that the founding stones of the
          Bhawan were laid by the then director of IITR , Dr. S.C. Saxena. The
          construction was completed on 12 November 2010. The Bhawan came to be
          known in its present inhabitable form on 17 July, 2011, when the
          students first walked in.<br/>
          Rajiv Bhawan boasts of 675 rooms distributed between 6 floors, dining
          mess , canteen and 8 guest rooms. The bhawan has a common room with HD
          television , 2 table tennis tables, 2 foosball tables, 2 caroms and
          chess boards. It also has a washing room with 6 front loading fully
          automatic washing machines. The bhawan provides ease of accessibility
          with 6 lifts. Bhawan inmates also enjoy high speed internet through
          wired LAN. We also have an eco friendly design with solar powered
          water heater and lighting.
        </p>
        <img src={hostel} alt="" />
      </div>
    </div>
  );
}
