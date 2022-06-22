import React from "react";
import Content from "../component/content/content";
import Routemap from "../component/routemap/routemap";
import Banner from "../component/banner/banner";

function ContentPage() {
  const routes = [
    {
      name: "Cosmic Graphics Pack",
      href: "/cosmicpack",
    },
    {
      name: "Content",
      href: "/content",
    },
  ];
  return (
    <div>
      <Banner />
      <Routemap routes={routes} />
      <h2 className="content__title">Content</h2>
      <Content title={"Artwork"}/>
      <Content title={"Banners"}/>
      <Content title={"Wallpapers"}/>
    </div>
  );
}

export default ContentPage;
