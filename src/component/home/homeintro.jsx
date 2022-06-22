import React from "react";
import "./styles/homeintro.css";
import "./styles/homepartners.css";
import FamilyImg from "../../assets/HomePage/Familia.webp";
import FamilyMobileImg from "../../assets/HomePage/Family_mobile3.webp"; 
import RoboImg from "../../../src/assets/HomePage/Robo_home.webp";

function HomeIntro() {
  return (
    <>
      <div className="wrapper__gradient">
        <div className="homepage__gradient"></div>
      </div>
      <div className="home">
        <div className="homepage__intro">
          <img src={RoboImg} alt={RoboImg} className="robo__img" />
          <div className="homepage__text">
            <h2 className="homepage__title">Cosmic Exodus</h2>
            <p className="homepage__description">
              <b>Cosmic Exodus</b>, an immersive strategy{" "}
              <b>GameFi experience</b>, focused on <b>NFTs</b>.{" "}
            </p>
            <br />
            <p className="homepage__description">
              Assemble your favourite
              <b> heroes, companions, troops </b>
              and <b>towers</b> to fight the forces of Kairos, the god of time
              and space.{" "}
            </p>
            <p className="homepage__description">
              Deciding that Humanity must be judged and tested, he has created a
              boundless army in his own image,
            </p>{" "}
            <p className="homepage__description">
              possessing reflections of his qualities, abilities, and traits.{" "}
            </p>
            <br />
            <p className="homepage__description">
              Those who explore and compete will discover many treasures! Will
              you emerge victorious?{" "}
            </p>
            <br />
            <p className="homepage__description">
              Do you have what it takes to be on the forefront of this
              ecosystem?
            </p>
          </div>
          <img src={FamilyImg} alt="family-img" className="homepage__family" />
          <img
            src={FamilyMobileImg}
            alt="family-img"
            className="family__mobile"
          />
        </div>
      </div>
    </>
  );
}

export default HomeIntro;
