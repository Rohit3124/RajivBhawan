import React from "react";

import "./Facilities.css";

import Mess from "../../Assets/fmess.jpg";
import canteen from "../../Assets/fcanteen.jpg";
import wash from "../../Assets/fwash.jpg";
import tv from "../../Assets/ftv.jpg";
export default function Facilities() {
  return (
    <>
      <div className="Facilities" id="facilities">
        <div className="facility">
          <div className="content">
            <div className="heading">Mess</div>
            <p className="desc">
              Rajiv Bhawan mess serves students on daily basis. The tender is
              currently with -A Diet Express Hospitality, IIT Roorkee. The mess
              warden along with the mess secretary is responsible for the weekly
              menu set. Our mess has best food quality available as compared to
              other bhawan’s. Mess is located on ground floor of our bhawan.
              Visitors can also eat food in mess. Also Rajiv Bhawan mess is
              awarded as the best mess in the year 2019-2020.
            </p>
          </div>
          <img src={Mess} alt="" />
        </div>
        <div className="facility">
          <img src={canteen} alt="" />
          <div className="content">
            <div className="heading">Canteen</div>
            <p className="desc">
              Rajiv Bhawan canteen is one of the most run canteens in the ‘gaao’
              area of our campus. Our canteen have a variety of quality food and
              packed items. Also canteen is equipped with sound system, it feels
              good listening music while eating food. Our canteen is situated at
              First floor which is easily accessible. If you miss food in mess,
              no worry! As our canteen has best food available and at very
              reasonable price. It remains open till 2 am from 2:30 pm.
            </p>
            <a href="https://drive.google.com/file/d/1eJ3uOCKHe6IeLeCey5686TTmbCURgw2r/view?usp=sharing" target="_blank">Download Canteen Menu</a>
          </div>
        </div>
        <div className="facility">
          <div className="content">
            <div className="heading">Washing Room</div>
            <p className="desc">
              Rajiv Bhawan like the all other bhawan’s has a washing area open
              for anyone to wash their clothes. Students give their clothes in a
              bucket along with washing powder and get their clothes washed in
              about 2-3 hours. We also have a paid washerman in the bhawan.
              Washing room is situated at the 3rd floor of our bhawan. Paid
              washerman come on two days in Bhawan i.e Monday and Thrusday.
              Washing room is open for 5:30 pm to 11:00 pm.
            </p>
          </div>
          <img src={wash} alt="" />
        </div>
        <div className="facility">
          <img src={tv} alt="" />
          <div className="content">
            <div className="heading">TV/Multipurpose Room</div>
            <p className="desc">
              TV Room/ Multipurpose room is the best place to relax after
              attending classes. It is equipped with various facilities such as,
              it has 2 Table Tennis Tables, 2 Foosball Tables, 2 chess Board, 2
              Carom Board and LED to watch TV. Also it has large sitting area to
              watch TV. TV room is situated on 2nd floor of our bhawan. It opens
              in the evening form 7:00 pm to 10:00 pm. Students can also use it
              to learn new things and also for refreshment purpose.
            </p>
          </div>
        </div>
      </div>
      <div className="others">
        <div className="container">
          <div className="mainheading">Other facilities</div>
          <div className="content">
            <div className="block">
              <div className="heading">Sports</div>
              <div className="desc">
                There are 4 maintained badminton courts in the bhawan, We also
                have a half basketball court on the back side of the bhawan. Our
                bhawan has various equipment of sports like badminton rackets,
                cricket bat, basketball and volleyball. In front of our bhawan,
                ABN Ground is there where students can play outdoor games like
                cricket.
              </div>
            </div>
            <div className="block">
              <div className="heading">Gymnasium</div>
              <div className="desc">
                Rajiv Bhawan boasts of one of the best gyms in the entire
                campus. It has many updated machines for the fitness freaks and
                a proper sound system. It is located on the 3rd floor of our
                bhawan. It opens in two shifts i.e morning shift and evening
                shift for three hours.
              </div>
            </div>
            <div className="block">
              <div className="heading">Night Canteen</div>
              <div className="desc">
                We have a night canteen/tapri and fruit stall. Fruit stall sells
                various fresh fruits as well shakes which are beneficial for
                everybody’s health. It is of major help for all the students who
                need mid night snacks or miss breakfast. Both Night canteen and
                fruit stall are situated at the A block entrance of our bhawan.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
