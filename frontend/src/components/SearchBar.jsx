import React, { useContext } from "react";

import { DataContext } from "../context/DataProvider";
import { BiSearch } from "react-icons/bi";

const SearchBar = () => {
  const { search, setSearch } = useContext(DataContext);
  const InputHandler = (e) => {
    setSearch(e);
  };
  return (
    <div className="flex w-96 relative">
      <BiSearch className="absolute top-3 left-3 text-lg text-gray-400" />
      <input
        className="w-full bg-gray-100 focus:outline-none pl-10 px-4 py-2 rounded-sm"
        onChange={(e) => InputHandler(e.target.value)}
        value={search}
        type="text"
        placeholder="Search for student"
      />
    </div>
  );
};

export default SearchBar;
