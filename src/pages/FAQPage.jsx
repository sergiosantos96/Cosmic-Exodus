import React from "react";
import { useState } from "react";
import Accordion from "../component/accordion/accordion";
import Accordionitem from "../component/accordion/accordionitem";

const telegram = `<a href="https://t.me/Cosmic_Exodus" target="_blank">Telegram</a>`;
const discord = `<a href="https://discord.com/invite/36AdSFvSX5" target="_blank">Discord</a>`;
const linkTree = `<a href="https://linktr.ee/Cosmic_Exodus" target="_blank">https://linktr.ee/Cosmic_Exodus</a>`;
const lineBreak = `<br>`;

function FAQPage() {
  const [active, setActive] = useState("");
  return (
    <div className="accordion__main">
      <Accordion />
      <Accordionitem
        title="What is a metaverse?"
        description="The metaverse as a term was coined in Neal Stephenson’s 1992
        science fiction novel Snow Crash, where humans, as avatars,
        interact with each other."
        active={active}
        setActive={setActive}
      />
      <Accordionitem
        title="What does gamefi and p2e mean?"
        description="The new metaverse and GameFi experiences allow players to be the real owners of their assets and be an integral part of the game economy, bringing more value to the community while increasing decentralization."
        active={active}
        setActive={setActive}
      />
      <Accordionitem
        title="What is cosmic exodus?"
        description={`Cosmic Exodus, ${lineBreak}
        An immersive strategy GameFi experience, focused on NFTs.
        ${lineBreak}
        ${lineBreak}
        There is a RPG mode where players will be able to explore, collect, build, craft, upgrade, and have a lot of practice! After the grind it is time to test your skills in the Tower Defense game mode. Assemble your favorite heroes, companions, troops and towers to fight the forces of Kairos, the god of time and space. 
        ${lineBreak}
        ${lineBreak}
        Deciding that Humanity must be judged and tested, he has created a boundless army in his own image, possessing reflections of his qualities, abilities, and traits. There are dungeons to practice (F2P), to grind for game progress (P2E) and Epic Runs (PVP) for the more competitive players. Those who explore and compete will discover many treasures! 
        ${lineBreak}
        ${lineBreak}
        Will you emerge victorious? 
        ${lineBreak}
        ${lineBreak}
        Do you have what it takes to be on the forefront of this ecosystem?
        ${lineBreak}
        ${lineBreak}
        Coming soon to Avalanche Network!
        ${lineBreak}
        ${linkTree}
        `}
        active={active}
        setActive={setActive}
      />
      <Accordionitem
        title="Gaming Tokens"
        description="Cosmic Exodus ecosystem tokens were created with the sole purpose to unlock the full extent of the existing content gameplay (i.e. Heroes, Companions), as transactions of value between player to player (e.g. swap resources, items) or as means necessary to progress the game content (e.g. open loot box, upgrade NFTs). They can be obtained either by regular DeFi applications or by playing and reaching certain achievements in the game."
        active={active}
        setActive={setActive}
      />
      <Accordionitem
        title="How can I learn more?"
        description={`The best way to know more about Cosmic Exodus ecosystem is by following us on social media or directly participating in our communities. Join us on ${telegram} or ${discord} to feel that Cosmic energy!`}
        active={active}
        setActive={setActive}
      />
    </div>
  );
}

export default FAQPage;
