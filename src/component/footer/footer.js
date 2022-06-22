import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { footerData, footerLinks } from "../utils/footerData";
import linktree from "../../assets/FooterLinks/Linktree_icon.svg";
import logo from "../../assets/Cosmic_logo.svg";
import everywhere from "../../assets/FooterLinks/Logo_Everywhere.png";
import cosmic from "../../assets/FooterLinks/Cosmic_copyright.png";
import FooterLine from "../../assets/FooterLinks/Footer_line.png";
import TopArrow from "../../assets/FooterLinks/Top-button.svg";
import TopArrowMobile from "../../assets/FooterLinks/Top-button-mobile.svg";
import "./footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="footer">
      <div className="footer__line"></div>
      <button className="footer__arrow">
        <img
          src={TopArrow}
          alt="top-arrow"
          className="footer__svg"
          onClick={scrollToTop}
        />
      </button>
      <button className="footer__mobile">
        <img
          src={TopArrowMobile}
          alt="top-arrow"
          className="footer__svg"
          onClick={scrollToTop}
        />
      </button>
      <div className="footer__brands">
        <a href="/">
          <img src={logo} alt="logo" className="footer__logo" />
        </a>
        <div className="footer__icon">
          <AiOutlineClose className="footer__iconx" />
        </div>
        <a
          href="https://twitter.com/_EverywhereTeam"
          target="_blank"
          rel="noreferrer"
        >
          <img src={everywhere} alt="brand" className="footer__brand" />
        </a>
      </div>
      <img src={FooterLine} alt="footer-line" className="partner__line" />
      <div className="footer__partners">
        <p className="footer__powered">Powered by:</p>
        <div className="footer__items">
          {footerLinks.map((item, index) => {
            return (
              <div key={index} className="footer__item">
                <a
                  href={item.link}
                  target="_blank"
                  className="footer__partner"
                  rel="noreferrer"
                >
                  <img
                    src={item.linkImage}
                    alt="partner-logo"
                    className="footer__img"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <div className="footer__menu">
        <a
          target="_blank"
          rel="noreferrer"
          className="footer__link"
          onClick={scrollToTop}
          href="https://testnet.cosmicexodus.finance/"
        >
          DAPP
        </a>

        {footerData.map((footerData) => {
          const { textLink, style, id, link } = footerData;
          return (
            <NavLink to={link} key={id} className={style} onClick={scrollToTop}>
              {textLink}
            </NavLink>
          );
        })}
      </div>
      <div className="footer__cosmicexodus">
        <img src={cosmic} alt="logo" className="footer__cosmicsesodus2022" />
        <a
          href="https://linktr.ee/cosmic_exodus"
          rel="noopener noreferrer"
          target="_blank"
          className="footer__linktree"
        >
          <img src={linktree} alt="logo" className="footer__linktree" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
