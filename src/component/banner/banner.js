import React from "react";
import banner from "../../assets/Banners/Purple_banner.png";
import "./banner.css";

function Banner() {
  return (
    <>
      <img src={banner} alt="banner" className="banner__image" />
      <div className="banner__container"></div>
    </>
  );
}

export default Banner;
