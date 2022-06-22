import React from "react";
import Routemap from "../component/routemap/routemap";
import aboutimg from "../assets/AboutUs/Aboutus_banner.png";
import mobileBanner from "../assets/AboutUs/Aboutus_verticalbanner.png";
import About from "../component/about/about";

import "../../src/component/about/about.css";

function AboutPage() {
  const routes = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About Us",
      href: "/aboutus",
    },
  ];
  return (
    <>
      <img className="about__banner" alt="About Banner" src={aboutimg} />
      <img
        className="about__mobilebanner"
        src={mobileBanner}
        alt="About Vertical Banner"
      />
      <Routemap routes={routes} />
      <div className="about container">
        <h2 className="about__title">Everywhere Team</h2>
        <div className="about__line"></div>
        <h3 className="about__subtitle">Who we are?</h3>

        <p className="about__text">
          _Everywhere Team has been developing and innovating within the
          cryptocurrency and blockchain world since early 2021. We are a
          passionate team with highly skilled individuals that saw the potential
          and added value of being early birds in this massive game changer.
        </p>
        <p className="about__text">
          This is more than a 9 to 5 job for us.. We really care about what we
          do and put a lot of time into making sure everything we touch shines.
          This is what puts the bread on the table, pays our rents, makes us
          happy and excited to wake up everyday!
        </p>
        <div className="about__container">
          <About />
        </div>
      </div>
    </>
  );
}
export default AboutPage;
