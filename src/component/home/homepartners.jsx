import React from "react";
import EverywhereLogo from '../../assets/HomePage/Everywhere_Logo.png';
import YayLogo from '../../assets/HomeLinks/Yay_Logo.svg';
import Rectangle from '../../assets/HomePage/Rectangle.png';

import "./styles/homepartners.css";

function HomePartners() {
  return (
    <div className="homepage__flex">
      <button className="homepage__btn">
        <a
          href="https://testnet.cosmicexodus.finance/"
          target="_blank"
          rel="noreferrer"
        >
          DAPP
        </a>
      </button>
      <h3 className="homepage__partners">Partners</h3>
      <img src={Rectangle} alt="line" className="homepage__line" />

      <ul>
        <div className="homepage__items">
          <li className="homepage__item">
            <a
              className="homepage__link"
              href="https://twitter.com/_EverywhereTeam"
              target="_blank"
              rel="noreferrer"
            >
              <img src={EverywhereLogo} alt="logo" className="homepage__img" />
            </a>
          </li>
          <li className="homepage__item">
            <a
              className="homepage__link"
              href="https://youtu.be/2XEaEaS_3Yg"
              target="_blank"
              rel="noreferrer"
            >
              <img src={YayLogo} alt="logo" className="homepage__img" />
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default HomePartners;
