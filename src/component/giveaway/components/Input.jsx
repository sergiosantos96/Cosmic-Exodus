import { useState } from "react";
import "../styles/components.css";

export const Input = ({
	text = "",
	placeholder = "",
	setData,
	valueData = "",
}) => {
	const [value, setValue] = useState(valueData);
	return (
		<div
			className="flex-column justify-center align-items-center"
			style={{ width: "100%", position: "relative" }}
		>
			{text !== "" && (
				<p
					style={{
						margin: 0,
						textAlign: "center",
						marginBottom: 5,

						maxWidth: 600,
					}}
				>
					{text}
				</p>
			)}
			<input
				onChange={(e) => {
					setValue(e.target.value);
					setData(e.target.value);
				}}
				value={valueData || ""}
				className={value === "" ? "inputStyle-uncomplete" : "inputStyle"}
				placeholder={placeholder}
			/>
		</div>
	);
};
