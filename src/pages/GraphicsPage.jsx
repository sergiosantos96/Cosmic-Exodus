import React from "react";
import Graphics from "../component/graphics/graphics";
import Banner from "../component/banner/banner";
import Routemap from "../component/routemap/routemap";

const routes = [
  {
    name: "Cosmic Pack",
    href: "/cosmicpack",
  },
];

const GraphicsPage = () => {
  return (
    <>
      <Banner />
      <Routemap routes={routes} />
      <div>
        <h2 className="graphics__title">Cosmic Pack</h2>
        <Graphics />
      </div>
    </>
  );
};

export default GraphicsPage;
