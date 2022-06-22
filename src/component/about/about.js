import React, { useRef } from "react";
import { teamMembers, teamMembers2 } from "../utils/team";
import about_icon from "../../assets/AboutUs/About_icon.png";
import linkedin_icon from "../../assets/AboutUs/Linkedin-icon.svg";
import behance_icon from "../../assets/AboutUs/Behance_icon.svg";
import www_icon from "../../assets/AboutUs/Www_icon.svg";
import icon from "../../assets/Right_arrow.svg";
import "./about.css";

function About() {
  const carousel = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth + 15;
  };

  return (
    <>
      <div className="roadmap__container">
        <div className="roadmap__buttons">
          <button onClick={handleLeftClick} className="roadmap__arrow">
            <img src={icon} alt="arrow" className="roadmap__image" />
          </button>
        </div>
        <div className="about__grid" ref={carousel}>
          <div className="about__flex">
            {teamMembers.map((teamMembers) => {
              const { name, department, linkedin, behance, www, id } =
                teamMembers;
              return (
                <div className="card" key={id}>
                  <img src={about_icon} alt="logo" className="about__logo" />
                  <div className="about__wrapper">
                    <h3 className="about__name">{name}</h3>
                    <p className="about__departement">{department}</p>
                  </div>
                  <div className="about__icons">
                    <a href={linkedin} className="about__link">
                      <img
                        src={linkedin_icon}
                        className="about__social"
                        alt="linkedin icon"
                      />
                    </a>
                    <a href={behance} className="about__link">
                      <img
                        src={behance_icon}
                        className="about__social"
                        alt="behance icon"
                      />
                    </a>
                    <a href={www} className="about__link">
                      <img
                        src={www_icon}
                        className="about__social"
                        alt="Www icon"
                      />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="about__flex" ref={carousel}>
            {teamMembers2.map((teamMembers2) => {
              const { name2, department2, linkedin2, behance2, www2, id2 } =
                teamMembers2;

              return (
                <>
                  <div className="card" key={id2}>
                    <img src={about_icon} alt="logo" className="about__logo" />
                    <div className="about__wrapper">
                      <h3 className="about__name">{name2}</h3>
                      <p className="about__departement">{department2}</p>
                    </div>
                    <div className="about__icons">
                      <a href={linkedin2} className="about__link">
                        <img
                          src={linkedin_icon}
                          className="about__social"
                          alt="linkedin icon"
                        />
                      </a>
                      <a href={behance2} className="about__link">
                        <img
                          src={behance_icon}
                          className="about__social"
                          alt="behance icon"
                        />
                      </a>
                      <a href={www2} className="about__link">
                        <img
                          src={www_icon}
                          className="about__social"
                          alt="Www icon"
                        />
                      </a>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        <div className="roadmap__buttons">
          <button onClick={handleRightClick} className="roadmap__arrow">
            <img src={icon} alt="arrow" className="roadmap__image-rigth" />
          </button>
        </div>
        <div className="mobile__arrows">
          <button onClick={handleLeftClick} className="roadmap__arrow">
            <img src={icon} alt="arrow" className="roadmap__image" />
          </button>
          <button onClick={handleRightClick} className="roadmap__arrow">
            <img src={icon} alt="arrow" className="roadmap__image-rigth" />
          </button>
        </div>
      </div>
    </>
  );
}

export default About;
