import React, { useEffect } from "react";
import classNames from "classnames";
import "../../component/style/navlinks.css";

const NavMenu = ({ open, toggleOpen }) => {
  const displayMobileNavLinks = classNames("mobile-nav-wrapper", {
    open: open,
  });

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  const navmenu = [
    {
      name: "Giveaway",
      href: "/giveaway",
    },
    {
      name: "Cosmic Pack",
      href: "/cosmicpack",
    },
    {
      name: "Cosmic Dao",
      target: "_blank",
      href: "https://testnet.cosmicexodus.finance/dao",
    },
    {
      name: "About Us",
      href: "/about",
    },
    {
      name: "Privacy Policy",
      href: "/privacypage",
    },
    {
      name: "Disclaimer",
      href: "/disclaimer",
    },
  ];

  return (
    <nav arai-label="mobile navigation" className={displayMobileNavLinks}>
      {navmenu.map((navmenu) => {
        const { href, target, name } = navmenu;
        return (
          <a
            className="mobile-link"
            key={Math.random()}
            activeclassname="active"
            href={href}
            target={target}
            rel="noreferrer"
            onClick={() => {
              toggleOpen();
            }}
          >
            {name}
          </a>
        );
      })}
    </nav>
  );
};

export default NavMenu;
