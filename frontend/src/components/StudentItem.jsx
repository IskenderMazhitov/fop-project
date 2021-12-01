import React, { useContext } from "react";
import { DataContext } from "../context/DataProvider";
import { BsPlus } from "react-icons/bs";

const StudentItem = ({ newStudent, setNewStudents, id }) => {
  const { Oncampus } = useContext(DataContext);
  const cameOnHandler = () => {
    Oncampus(newStudent.id);
  };

  return (
    <div className="flex flex-column bg-white">
      <div className="flex justify-center items-center w-full py-4 px-4">
        <div className="flex-4">{newStudent.name}</div>
        <div className="flex-2 flex justify-center">{newStudent.slug}</div>
        <div className="flex-3 flex justify-center">
          {newStudent.leave.slice(0, 25)}
        </div>
        <div
          className={`flex-3 flex justify-center ${
            newStudent.come !== "" ? "" : "flex justify-center"
          }`}
        >
          {newStudent.come !== "" ? (
            newStudent.come.slice(0, 25)
          ) : (
            <button
              id={newStudent.slug}
              className="comeOn flex self-center justify-center items-center w-7 h-7 bg-primary text-white rounded-full"
              onClick={cameOnHandler}
            >
              <BsPlus className="text-2xl" />
            </button>
          )}
        </div>
        <div
          className={`px-3 flex-1 justify-center py-1 rounded-full text-white ${
            newStudent.status === "On Campus" ? "bg-blue-400" : "bg-red-300"
          }`}
        >
          {newStudent.status}
        </div>
      </div>
    </div>
  );
};

export default StudentItem;
