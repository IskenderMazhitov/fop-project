import React, { useContext } from "react";
import { ReactComponent as Logo } from "../icons/logo.svg";
import { DataContext } from "../context/DataProvider";
import { BsPlus } from "react-icons/bs";
const Header = () => {
  const { showStudents, setShowStudents, inputElement } =
    useContext(DataContext);
  const StudentsListHandler = () => {
    if (showStudents === false) {
      inputElement.current.focus();
    } else {
      inputElement.current.blur();
    }
    setShowStudents(!showStudents);
  };
  return (
    <div className="bg-primary px-10 flex justify-between items-center text-white">
      <Logo width="50px" />
      <button
        className={`bg-transparent items-center flex shadow-lg hover:shadow-sm duration-300 h-auto px-4 py-2`}
        onClick={StudentsListHandler}
      >
        {!showStudents ? (
          <div className="flex">
            <BsPlus className="text-xl mr-1" />
            Add Student
          </div>
        ) : (
          "Close"
        )}
      </button>
    </div>
  );
};

export default Header;
