import React, { lazy } from "react";
import HomeIntro from "../component/home/homeintro";
import HomeBanner from "../assets/HomePage/Cosmic_Banner.svg";
import Roadmap from "../component/home/roadmap";
import HomePartners from "../component/home/homepartners";
import HomePaper from "../component/home/homepaper";
const Video = lazy(() => import ('../component/home/video'));

function HomePage() {
  return (
    <>
      <div className="homepage">
        <img className="homepage__banner" src={HomeBanner} alt={HomeBanner} />
        <HomePartners />
      </div>
      <HomeIntro />
      <Video />
      <HomePaper />
      <Roadmap />
    </>
  );
}

export default HomePage;
