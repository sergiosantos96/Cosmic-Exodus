import React from "react";
import Banner from "../../../component/banner/banner";
import Routemap from "../../../component/routemap/routemap";
import Image from "../../../assets/Blog/Single_article.png";
import single from "../../../assets/Blog/Single_lastpost.png";
import ReactPlayer from "react-player/youtube";
import "./single.css";

function Single() {
  const routes = [
    {
      name: "Cosmic Blog",
      href: "/blog",
    },
    {
      name: "Last Post",
      href: "/lastpost",
    },
  ];
  return (
    <>
      <Banner />

      <div className="single container">
        <Routemap routes={routes} />
        <h2 className="single__title">Last Post</h2>
        <div className="single__info">
          <p className="single__autor">“Autor of the post”</p>
          <p className="single__separation">|</p>
          <p className="single__date">Thursday, March 2 - 2022</p>
          <p className="buttons__type">Guides</p>
        </div>
        <p className="respbuttons__type">Guides</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>

        <img className="single__image" src={Image} alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>

        <div className="single__video container">
          <ReactPlayer
            url="https://www.youtube.com/embed/9gFi5NmHBLc"
            width="1220px"
            height="700px"
            controls={true}
            light={true}
          />
        </div>
        <div className="single__line"></div>
        <div className="single__flex">
          <img src={single} alt="" />

          <div className="single__right">
            <h2 className="single__title">Last Post</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Single;
