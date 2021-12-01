import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { DataContext } from "../context/DataProvider";

const StudentsList = () => {
  const { students, setShowStudents, showStudents, addStudent, inputElement } =
    useContext(DataContext);

  const StudentAddHandler = (e) => {
    addStudent(e);
    setShowStudents(false);
  };

  const [searchValue, setSearchValue] = useState("");

  return (
    <div
      className={`flex w-96 flex-col bg-gray-50 fixed h-screen duration-300 p-5 top-0 bottom-0 ${
        showStudents ? "left-0" : "-left-full"
      }`}
    >
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="px-3 py-4 focus:outline-none mb-6"
        placeholder="Search"
        ref={inputElement}
      />
      <div>
        {students
          .filter((s) => {
            if (searchValue === "") {
              return s;
            } else if (
              s.slug.toLowerCase().includes(searchValue.toLowerCase())
            ) {
              return s;
            }
            return false;
          })
          .map((student, idx) => (
            <div
              key={idx}
              className="p-2 mb-2 cursor-pointer"
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
            </div>
          ))}
      </div>
    </div>
  );
};

export default StudentsList;
