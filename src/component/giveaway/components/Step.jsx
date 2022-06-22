import "../styles/components.css";

export const Step = ({ stepNB, todo, href }) => {
	return (
		<div className="giveaway-step">
			<div className="number">{stepNB}</div>
			<div>
				<h4>{todo}</h4>
				<div className="flex align-items-center">
					<a
						style={{ wordBreak: "break-word" }}
						href={href}
						target="_blank"
						rel="noreferrer"
					>
						{href}
					</a>

					<span style={{ marginLeft: 5 }}>👈 </span>
				</div>
			</div>
		</div>
	);
};
