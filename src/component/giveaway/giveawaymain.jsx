import React, { lazy, useState } from "react";
import { NavLink } from "react-router-dom";
import Rectangle from "../../assets/Rectangle.png";
import "./styles/giveawaymain.css";
import { validateEmail } from "../utils/emailValidation";
import { toast, ToastContainer } from "react-toastify";
import { useMoralis } from "react-moralis";
const Video = lazy(() => import("./components/video.js"));

function GiveAwayMain({ goNextStep, handleEmail, email }) {
	const { Moralis } = useMoralis();
	const params = { email: email };

	const onNextClick = async () => {
		goNextStep();
		{
			/* 		const isGoogToGo = await Moralis.Cloud.run("checkContestEmail", params);
		if (validateEmail(email)) {
			if (isGoogToGo) {
				goNextStep();
			} else {
				toast.error(
					"Seems like this email has already been used. Contact us to troubleshoot."
				);
			}
		} else return toast.error("Please input a correct email address");
 */
		}
	};

	return (
		<>
			<ToastContainer theme={"dark"} pauseOnHover={true} limit={3} />
			<h2 className="giveawaymain__title">
				GIVEAWAY
				<br /> Cosmic Exodus vs YAY.Games <br /> Official Partnership
			</h2>
			<img className="giveaway__line" src={Rectangle} alt={Rectangle} />
			<div className="giveawaymain__text">
				<p className="giveawaymain__para">
					To celebrate this event and as a special thank you, the team has built
					100 unique NFTs! 🍀 <br />
					Made exclusively to share with the most engaging users 😱
				</p>

				<p className="giveawaymain__para">
					You will be able to play with these Avatars around Stage 0, inside the
					Cosmic Exodus game! <br />
					👉{" "}
					<a
						href="https://alpha.cosmicexodus.finance/"
						target="_blank"
						rel="noreferrer"
						style={{ color: "#30D1FF" }}
					>
						alpha.cosmicexodus.finance/
					</a>{" "}
					(FUJI - Test net).
				</p>

				<p className="giveawaymain__para">
					Yes, once we move to the main net this will also be airdrop to the
					winners.
					<br /> To be eligible to win you must participate in the following
					giveaway and respect the rules. 👀
				</p>

				<p className="giveawaymain__para">
					🔺 Each action = 1 entry <br /> 🔺 Share with your friends to win
					extra entries! <br /> 🔺 This event will be open from 25/05/2022 to
					25/06/2022
				</p>

				<p className="giveawaymain__para">
					<b>DISCLAIMER:</b> <br /> If a user does not complete the actions the
					entry will be disqualified, so make sure you do the required step to
					validate each task. For the team to be able to verify each entry,
					users must input the correct handle of each platform supported in the
					entries below.
				</p>

				<p className="giveawaymain__para">
					We recommend creating a new metamask wallet just to receive any future
					airdrops. <br />
					The Cosmic Exodus team has the right to change the conditions of this
					giveaway at any moment without previous warning or communication.
				</p>

				<div className="giveawaymain__form">
					{/*       <input
            value={email || ""}
            type="email"
            className="giveaway__email"
            placeholder="Email"
            onChange={(e) => handleEmail(e.target.value)}
          />
          <p className="giveawaymain__newsletter">
            By clicking “next”, you agree to be subscribed to Cosmic Exodus
            newsletter according to our{" "}
            <NavLink to="/privacypage">
              <span className="giveawaymain-span">privacy policy.</span>
            </NavLink>
          </p>
*/}{" "}
					<button
						style={{ width: "100%", maxWidth: "150px" }}
						className="giveaway__next"
						onClick={() => onNextClick()}
					>
						Next
					</button>
				</div>
				<Video />
			</div>
		</>
	);
}

export default GiveAwayMain;
