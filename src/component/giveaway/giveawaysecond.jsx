import React, { useState } from "react";
import { Step } from "./components/Step";
import { CosmicSteps } from "./utils/CosmicSteps";
import { YAYSteps } from "./utils/YAYSteps";
import "./styles/giveawaysecond.css";
import { Input } from "./components/Input";
import { toast, ToastContainer } from "react-toastify";
import YAY from "../../assets/HomeLinks/yay.png";
import LogoTypo from "../../assets/HomeLinks/logo-typo.png";
import { useMoralis, useMoralisCloudFunction } from "react-moralis";

function GiveAwaySecond({ goPreviousStep, email }) {
	const { Moralis } = useMoralis();

	const [data, setData] = useState({
		email: email,
		youtube: "",
		telegram: "",
		discord: "",
		twitter: "",
		medium: "",
		reddit: "",
		wallet: "",
		affiliate: "",
	});

	const YAYContest = useMoralisCloudFunction(
		"saveContestEntry",
		{
			email: data.email,
			youtube: data.youtube,
			telegram: data.telegram,
			discord: data.discord,
			twitter: data.twitter,
			medium: data.medium,
			reddit: data.reddit,
			wallet: data.wallet,
			affiliate: data.affiliate,
		},
		{ autoFetch: false }
	);

	const saveEntry = () => {
		YAYContest.fetch({
			onSuccess: (data) =>
				toast.success("GG! You are now participating to the contest!"),
			onError: (error) => console.log(error),
		});
	};

	function validateEmail(email) {
		const validRegex =
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (email === "") {
			return true;
		} else {
			if (email.match(validRegex)) {
				return true;
			} else {
				return false;
			}
		}
	}

	const handleInput = (value, type) => {
		const prefix1 = "@";
		const prefix2 = "u/";
		const prefix3 = "#";

		const input = value;

		let val1 = value;
		let val2 = value;
		let val3 = value;
		if (input === "" || undefined) {
			val1 = prefix1 + input;
			val2 = prefix2 + input;
			val3 = prefix3 + input;
		} else {
			val1 = prefix1 + input.substr(prefix1.length);
			val2 = prefix2 + input.substr(prefix2.length);
			val3 = prefix3 + input.substr(prefix3.length);
		}

		let val4 = value;
		if (input.includes("#")) {
			val4 = input;
		} else {
			val4 = value + "#";
		}

		// eslint-disable-next-line default-case
		switch (type) {
			case "youtube":
				setData({ ...data, youtube: val1 });
				break;
			case "telegram":
				setData({ ...data, telegram: val1 });
				break;
			case "discord":
				setData({ ...data, discord: val4 });
				break;
			case "twitter":
				setData({ ...data, twitter: val1 });
				break;
			case "medium":
				setData({ ...data, medium: val1 });
				break;
			case "reddit":
				setData({ ...data, reddit: val2 });
				break;
			case "wallet":
				setData({ ...data, wallet: value });
				break;
			case "affiliate":
				setData({ ...data, affiliate: value });
				break;
		}
	};

	const checkAndSave = async (e) => {
		if (data.telegram === "") {
			return toast.error("Please fill your Telegram ID");
		}
		if (data.twitter === "") {
			return toast.error("Please fill your Twitter ID");
		}

		if (data.wallet === "") {
			return toast.error("Please fill your Avalanche FUJI wallet address.");
		}
		const params = { wallet: data.wallet };
		const isGoogToGo = await Moralis.Cloud.run("checkContestWallet", params);

		if (isGoogToGo) {
			saveEntry();
			goPreviousStep();
		} else
			toast.error(
				`This wallet address is already used. Please contact the team to troubleshoot.`
			);
	};

	return (
		<>
			<ToastContainer theme={"dark"} pauseOnHover={true} limit={3} />
			<h1 id="title">How to Participate?</h1>

			<div className="flex-desktop justify-between" style={{ width: "100%" }}>
				<div
					style={{
						width: "100%",
						gap: 10,
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
					}}
				>
					<br />
					<img
						alt="yay"
						src={LogoTypo}
						style={{ marginInline: "auto", height: "3rem", marginBottom: 10 }}
					/>
					<br />
					{/* <h2 style={{ margin: 0, fontSize: "2rem" }}>COSMIC EXODUS</h2> */}
					<div
						className="flex-column justify-content-center"
						style={{ width: "fit-content", marginInline: "auto", gap: 10 }}
					>
						{CosmicSteps?.map((elem, idx) => (
							<Step
								stepNB={idx + 1}
								todo={elem.todo}
								href={elem.href}
								key={idx}
							/>
						))}
					</div>
				</div>
				<div
					style={{
						width: "100%",
						gap: 10,
						display: "flex",
						flexDirection: "column",
					}}
				>
					{" "}
					<br />
					{/* <h2 style={{ margin: 0, fontSize: "2rem" }}>YAY GAMES</h2> */}
					<img
						alt="yay"
						src={YAY}
						style={{ marginInline: "auto", height: "5rem", marginBottom: 10 }}
					/>{" "}
					<br />
					<div
						className="flex-column justify-content-center"
						style={{ width: "fit-content", marginInline: "auto", gap: 10 }}
					>
						{YAYSteps?.map((elem, idx) => (
							<Step
								stepNB={idx + 1}
								todo={elem.todo}
								href={elem.href}
								key={idx}
							/>
						))}
					</div>
				</div>
			</div>
			<br />
			<hr />
			<br />
			<h3 style={{ textAlign: "center", margin: 0 }}>
				All the steps are done? Now fill up this form!
			</h3>
			<div className="flex-column" style={{ gap: 30 }}>
				<br />
				<Input
					setData={(value) => handleInput(value, "telegram")}
					text={"Input your Telegram ID*"}
					placeholder={"Telegram User ID"}
					valueData={data.telegram === "" ? undefined : data.telegram}
				/>
				<Input
					setData={(value) => handleInput(value, "twitter")}
					text={"Input your Twitter ID*"}
					placeholder={"Twitter User ID"}
					valueData={data.twitter === "" ? undefined : data.twitter}
				/>
				<Input
					setData={(value) => handleInput(value, "wallet")}
					text={
						"Please input a valid wallet address (Avalanche FUJI Test Net) in order to receive the airdrop:  *We recommend creating a new wallet just to receive any future airdrops.* "
					}
					placeholder={"Avalanche FUJI Testnet address(0x893...CeE55) "}
					valueData={data.wallet === "" ? undefined : data.wallet}
				/>
				<br />
				<hr />
				<h3 style={{ textAlign: "center", margin: 0 }}>
					Get bonus entries by filling these inputs!
				</h3>
				<Input
					setData={(value) => handleInput(value, "youtube")}
					text={"Input your Youtube ID"}
					placeholder={"Youtube User ID"}
					valueData={data.youtube === "" ? undefined : data.youtube}
				/>
				<Input
					setData={(value) => handleInput(value, "discord")}
					text={"Input your Discord ID"}
					placeholder={"Discord Username#1234"}
					valueData={data.discord === "" ? undefined : data.discord}
				/>
				<Input
					setData={(value) => handleInput(value, "medium")}
					text={"Input your Medium ID"}
					placeholder={"Medium User ID"}
					valueData={data.medium === "" ? undefined : data.medium}
				/>
				<Input
					setData={(value) => handleInput(value, "reddit")}
					text={"Input your Reddit ID"}
					placeholder={"Reddit User ID"}
					valueData={data.reddit === "" ? undefined : data.reddit}
				/>
				<Input
					setData={(value) => handleInput(value, "affiliate")}
					text={
						"Did you get here because someone shared it with you? Drop the person wallet address below and it will give +1 entry for both of you: "
					}
					placeholder={"Affiliate wallet address (0x893...CeE55)"}
					valueData={data.affiliate === "" ? undefined : data.affiliate}
				/>

				<div
					className="flex justify-between align-items-center justify-content-center"
					style={{ width: "100%", maxWidth: "690px", marginInline: "auto" }}
				>
					<button onClick={() => goPreviousStep()}>Back</button>
					<button onClick={(e) => checkAndSave(e)}>Submit</button>
				</div>
			</div>
		</>
	);
}

export default GiveAwaySecond;
