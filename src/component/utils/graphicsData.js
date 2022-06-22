import logo from "../../assets/Cosmic_logo.svg";
import contentPic from "../../assets/GraphicsPack/Graphics_content.png";
import profilePic from "../../assets/GraphicsPack/Graphics_profile.png";

export const graphicsData = [
  {
    id: 1,
    title: "Logos",
    image: logo,
    buttonText: "download",
    description: `Our logo is our most recognizeable asset. That’s why we’re so protective of it.`,
    para: "Take a moment to think about how you apply it and take a read of our Brand Guidelines for examples of how we like to use it.",
    link: "#",
  },
  {
    id: 2,
    title: "Content",
    image: contentPic,
    buttonText: "view",
    description:
      "This pack includes banners for social media (facebook, instagram, twitter, etc), backgrounds and other useful assets.",
    link: "/content",
  },
  {
    id: 3,
    title: "Profile Pictures",
    image: profilePic,
    buttonText: "view",
    description:
      "Are you excited about Cosmic Exodus? Let’s share the hype with our friends by using a Cosmic picture in our profiles online. ",
    para: "When sharing our linktree in your bio and using one of these pictures you are making sure our brand is noticed by other members in the space.",
    link: "/profiles",
  },
];
