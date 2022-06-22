import React, { useState } from "react";
import Hiring from "../component/hiring/hiring";
import "../component/hiring/hiring.css";
import HiringImage from "../assets/Banners/Hiring_banner.png";
import HiringMobileImage from "../assets/Banners/Hiringmobile_banner.png";

function HiringPage() {
  const [isDetail, setIsDetail] = useState(false);
  const toggleIsDetail = () => {
    setIsDetail(!isDetail);
  };

  return (
    <>
      <img src={HiringImage} alt="banner" className="hiring__banner" />
      <img
        src={HiringMobileImage}
        alt="banner"
        className="hiring__verticalbanner"
      />

      <h2 className="hiring__title">We are hiring</h2>
      <div className="hiring__line"></div>
      <h3 className="hiring__subtitle">Open Positions</h3>
      <Hiring />
    </>
  );
}

export default HiringPage;
