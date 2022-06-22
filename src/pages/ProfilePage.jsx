import React from "react";
import Profile from "../component/profile/profile";
import Routemap from "../component/routemap/routemap";
import Banner from "../component/banner/banner";

function ProfilePage() {
  const routes = [
    {
      name: "Cosmic Graphics Pack",
      href: "/cosmicpack",
    },
    {
      name: "Profile Pictures",
      href: "/profiles",
    },
  ];
  return (
    <div>
      <Banner />
      <Routemap routes={routes} />
      <h2 className="profile__title">Profile Pictures</h2>
      <Profile title={"Heroes"} />
      <Profile title={"Avatars"} />
      <Profile title={"Npc"} />
    </div>
  );
}

export default ProfilePage;
