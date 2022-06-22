import React from "react";
import BannerImg from "../../assets/Banners/FAQ_banner.png";
import MobileBannerImg from "../../assets/Banners/FAQbanner_mobile.png";
import "./accordion.css";

function Accordion() {
  return (
    <div className="faq">
      <img className="faq__img" src={BannerImg} alt={BannerImg} />
      <img
        src={MobileBannerImg}
        alt={MobileBannerImg}
        className="mobile__banner"
      />
      <h2 className="faq__title">FAQ</h2>
    </div>
  );
}

export default Accordion;
