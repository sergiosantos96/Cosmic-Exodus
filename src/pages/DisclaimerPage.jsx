import React from "react";
import "../component/style/disclaimer.css";
import "../component/style/pp.css";
import disclaimer_banner from "../assets/Banners/Disclaimer_banner.png";
import disclaimer_verticalbanner from "../assets/Banners/Disclaimer_verticalbanner.png";

function DisclaimerPage() {
  return (
    <>
      <img
        src={disclaimer_banner}
        alt="Disclaimer Banner"
        className="disclaimer__banner"
      />
      <img
        src={disclaimer_verticalbanner}
        alt="Disclaimer Banner"
        className="disclaimer__verticalbanner"
      />
      <div className="disclaimer">
        <h2 className="disclaimer__title">Disclaimer</h2>
        <div className="pp__line"></div>
        <p className="disclaimer__description">
          There are general risks associated in cryptocurrency assets and DeFi
          ecosystems, such as pump and dumps, errors in the smart contracts or
          dApp’s and malicious attacks by bad actors in the space, leading to
          the loss or inaccessibility of funds for the investors.
        </p>
        <p className="disclaimer__description">The team will never ask you to:</p>
        <p className="disclaimer__description">- Transfer any funds for any reason whatsoever.</p>
        <p className="disclaimer__description">- Input any private key or seed phrase at any point.</p>
        <p className="disclaimer__description">
          Scammers and impersonators will always find a loophole and a perfect
          timing to strike, so the best we can do is to educate as much as
          possible our community for these bad situations, and how to proceed
          upon them.
        </p>
        <p className="disclaimer__description">
          Users should always DYOR and never invest more they are willing to
          lose.
        </p>
        <p className="disclaimer__description">
          The contents of this document should not be considered as financial
          advice, but as educational purposes only.
        </p>
        <p className="disclaimer__description">
          Cosmic Exodus ecosystem tokens were created with the sole purpose to
          unlock the full extent of the existing content gameplay (i.e. Heroes
          and Companions), as transactions of value between player to player
          (i.e. swap resources, items) or as means necessary to progress the
          game content (i.e. open loot box, upgrade NFTs).
        </p>
        <p className="disclaimer__description">
          The information publicly displayed by any team members and associates
          can be subject to change or deleted without any prior notice or
          warning.
        </p>
      </div>
    </>
  );
}

export default DisclaimerPage;
