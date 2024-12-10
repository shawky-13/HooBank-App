import React from "react";
// importing all images from assets folder
import { logo, menu, close } from "../assets";
// importing state hook
import { useState } from "react";
// importing links from constants folder
import { navLinks } from "../constants/index";

const Navbar = () => {
  // set active state
  const [active, setActive] = useState("Home");
  // set icon state
  const [icon, setIcon] = useState(false);
  return (
    <nav className="flex justify-between items-center py-6 mx-auto text-white">
      <img src={logo} alt="hooback" className={`w-[120px] h-[32px]`} />
      <ul className="list-none hidden justify-between items-center sm:flex ">
        {navLinks.map((link, index) => (
          <li
            key={link.id}
            className={`font-normal text-[16px] font-poppins cursor-pointer ${
              active === link.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(link.title)}
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>
      {/* for small screen && menu icon and other links */}
      <div className="flex sm:hidden">
        <img
          src={icon ? close : menu}
          alt="menu"
          className={`cursor-pointer w-[30px] h-[30px] object-contain`}
          onClick={() => setIcon((prev) => !prev)}
        />
        <div
          className={`
            ${!icon ? "hidden" : "flex"}
            absolute top-20 right-0 mx-4 p-6 bg-black-gradient min-w-[120px] w-1/2 rounded-b-xl justify-center sidebar z-50`}
        >
          <ul className="list-none items-center flex flex-col ">
            {navLinks.map((link, index) => (
              <li
                key={link.id}
                className={`font-normal text-[16px] font-poppins cursor-pointer ${
                  active === link.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-10"}`}
                onClick={() => {
                  setActive(link.title);
                  setIcon((prev) => !prev);
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

/*
   New Notes:
                - In Tailwindcss the w-[write any size in px]
                - using dynamic className with {}
                - using State Hook to update the menu and active link
*/
