import React from "react";
import Image from "next/image";

import icon from "./assets/icon.svg";
import DesktopNavLinks from "./DesktopNavLinks";
import MobileNavLinks from "../MobileNavLinks";
// import DesktopNavLinks from './components/DesktopNavLinks'
// import MobileNavLinks from './components/MobileNavLinks'

const Navbar = () => {
  return (
    <nav
      className="w-full h-14 fixed flex flex-row items-center justify-between drop-shadow-md border-b-2 border-black"
      style={{ backgroundColor: "#FBFBF2" }}
    >
      <a href="/#landing-introduction">
        <Image src={icon} alt="To home page icon" className="ml-4" />
      </a>
      <DesktopNavLinks />
      <MobileNavLinks />
    </nav>
  );
};

export default Navbar;
