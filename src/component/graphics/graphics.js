import React from "react";
import { graphicsData } from "../utils/graphicsData";

import "./graphics.css";

function Graphics() {
  return (
    <div className="graphics">
      <div className="graphics__container">
        <hr className="graphics__line" />
        <div>
          {graphicsData.map((element) => {
            const {
              title,
              description,
              para,
              image,
              buttonText,
              id,
            } = element;
            return (
              <>
                <div key={id} className="graphics__flex">
                  <img src={image} alt="logo" className="graphics__logo" />
                  <div className="graphics__wrapper">
                    <h3 className="graphics__subtitle">{title}</h3>
                    <p className="graphics__description">{description}</p>
                    <p className="graphics__para">{para}</p>
                  </div>
                  <a /* href={link} */>
                    <button className="graphics__btn">{buttonText}</button>
                  </a>
                </div>
                <hr className="graphics__line" />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Graphics;
