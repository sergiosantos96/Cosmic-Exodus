import React, { useState } from "react";
import GiveAwayMain from "../component/giveaway/giveawaymain";
import GiveAwaySecond from "../component/giveaway/giveawaysecond";
import contact_banner from "../assets/Banners/Giveaway_banner.png";
import mobileversion from "../assets/Banners/Vertical_banner.png";

function GiveAwayPage() {
  const [email, setEmail] = useState("");
  const handleEmail = (val) => setEmail(val);

  const [step, setStep] = useState(0);
  const nextStep = () => {
    setStep(step + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const previousStep = () => {
    setStep(step - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      <img
        src={contact_banner}
        alt="Contact Banner"
        className="giveaway__banner"
      />
      <img
        src={mobileversion}
        alt="Contact Banner"
        className="giveaway__mobilebanner"
      />
      <div className="container">
        {step === 0 ? (
          <GiveAwayMain
            email={email}
            goNextStep={nextStep}
            handleEmail={(val) => handleEmail(val)}
          />
        ) : (
          <>
            <GiveAwaySecond email={email} goPreviousStep={previousStep} />
            <br />
          </>
        )}
      </div>
    </div>
  );
}

export default GiveAwayPage;
