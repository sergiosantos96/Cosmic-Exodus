import React from "react";
import ReactPlayer from "react-player/youtube";

function Video() {
	return (
		<div
			style={{ borderRadius: 20, marginBottom: 50 }}
			className="video__container container"
		>
			<ReactPlayer
				url="https://www.youtube.com/embed/2XEaEaS_3Yg"
				width="1220px"
				height="700px"
				controls={true}
				light={true}
				borderRadius={20}
			/>
		</div>
	);
}

export default Video;
