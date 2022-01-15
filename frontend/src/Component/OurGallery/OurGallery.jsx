//Created By Rahul Modi
//Dependencies Import
import React from "react";

//Stylesheet Imports
import "./OurGallery.css";

//Data Imports
import OurGalleryData from "./OurGalleryData";

const OurGallery = () => {
  return (
    <div className="ourGallery__container">
      <div className="ourGallery__content">
        <h2 className="ourGallery__heading">Our Gallery</h2>
        <div className="ourGallery__carousel">
          {OurGalleryData.map((obj, indx) => {
            return <img key={indx} src={obj.img} alt="" />;
          })}
        </div>
      </div>
    </div>
  );
};

export default OurGallery;
