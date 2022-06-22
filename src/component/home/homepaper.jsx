import React from "react";
import "./styles/homepaper.css";

function HomePaper() {
  return (
    <div className="homepaper homepaper__container">
      <div className="homepaper__content">
        <h2 className="homepaper__title">Read our whitepaper</h2>
        <p className="homepaper__description">
          Users should always DYOR and never invest more than they are willing
          to lose. <br /> The contents of these documents should not be
          considered as financial <br /> advice, but as educational purposes
          only.
        </p>
        <hr className="homepaper__line" />
        <p className="homepaper__info">
          The information publicly displayed by any team members and associates{" "}
          <br />
          can be subject to change or deleted without any prior notice or
          warning.
        </p>
        <div className="homepaper__buttons">
          <button className="homepaper__btn">
            <a
              href="https://cosmicexodus.finance/whitepaper.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Whitepaper
            </a>
          </button>
          <button className="homepaper__btn">
            <a
              href="https://cosmicexodus.finance/cosmicdeck.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Cosmic Deck
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePaper;
