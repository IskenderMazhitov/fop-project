import React, { useState } from "react";
import { Link } from "react-router-dom";

import SearchBar from "./SearchBar";
const Navbar = () => {
  const [activeItem, setActiveItem] = useState(1);
  const NavbarItems = [
    {
      id: 1,
      name: "All",
      path: "/",
    },
    {
      id: 2,
      name: "Off Campus",
      path: "/off",
    },
    {
      id: 3,
      name: "On Campus",
      path: "/on",
    },
  ];

  const MenuHandler = (e) => {
    setActiveItem(e);
  };

  return (
    <div className="flex items-center justify-between py-5 px-10 bg-white">
      <div className="flex">
        {NavbarItems.map((item, idx) => (
          <Link
            key={idx}
            className={`relative block mr-3 transition-all duration-300 ${
              activeItem === item.id ? "text-black" : "text-gray-400"
            }`}
            onClick={() => MenuHandler(item.id)}
            to={item.path}
          >
            <span
              className={`absolute transition-all duration-300 ${
                activeItem === item.id
                  ? "-bottom-7 opacity-100"
                  : "-bottom-8 opacity-0"
              } w-full h-0.5 bg-black`}
            ></span>
            {item.name}
          </Link>
        ))}
      </div>
      <SearchBar />
    </div>
  );
};

export default Navbar;
