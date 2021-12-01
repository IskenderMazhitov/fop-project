import React, { useContext, useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

import { DataContext } from "../context/DataProvider";

const StudentsList = () => {
  const {
    students,
    setShowStudents,
    AvtoFocus,
    showStudents,
    addStudent,
    inputElement,
    mainInput,
    searchValue,
    setSearchValue,
    InputHandler,
  } = useContext(DataContext);

  const StudentAddHandler = (e) => {
    addStudent(e);
    setShowStudents(false);
    setSearchValue("");
    mainInput.style.display = "block";
    mainInput.focus();
  };

  const btnClick = useRef(null);

  const InputHandlerButton = (event) => {
    InputHandler(event);
  };

  const hand = () => {
    mainInput.style.display = "none";
    inputElement.current.focus();
  };
  return (
    <div
      className={`flex w-96 flex-col bg-gray-50 fixed h-screen duration-300 p-5 top-0 bottom-0 ${
        showStudents ? "left-0" : "-left-full"
      }`}
    >
      <input
        value={searchValue}
        onChange={(e) => InputHandlerButton(e.target.value)}
        className="px-3 py-4 focus:outline-none mb-6"
        placeholder="Search"
        ref={inputElement}
        onClick={hand}
      />
      <div>
        {students
          .filter((s) => {
            if (searchValue === "") {
              return s;
            } else if (
              s.slug.toLowerCase().includes(searchValue.toLowerCase()) ||
              s.name.toLowerCase().includes(searchValue.toLowerCase())
            ) {
              return s;
            }
            return false;
          })
          .map((student, idx) => (
            <button
              id={student.slug}
              ref={btnClick}
              key={idx}
              className="p-2 but mb-2 cursor-pointer block"
              onClick={() =>
                StudentAddHandler({
                  id: uuidv4(),
                  name: student.name,
                  slug: student.slug,
                  leave: new Date().toString(),
                  came: "",
                  status: "Off Campus",
                })
              }
            >
              {student.name}
            </button>
          ))}
      </div>
    </div>
  );
};

export default StudentsList;
