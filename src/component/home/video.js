import React from "react";
import ReactPlayer from "react-player/youtube";
import "./styles/video.css";

function Video() {
  return (
    <div className="video__container container">
      <ReactPlayer
        url="https://www.youtube.com/embed/9gFi5NmHBLc"
        width="1220px"
        height="700px"
        controls={true}
        light={true}
      />
    </div>
  );
}

export default Video;
