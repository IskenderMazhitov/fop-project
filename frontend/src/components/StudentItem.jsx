import React, { useContext } from "react";
import { DataContext } from "../context/DataProvider";
import { BsPlusSquare } from "react-icons/bs";

const StudentItem = ({ newStudent, setNewStudents, id }) => {
  const { Oncampus } = useContext(DataContext);
  const cameOnHandler = () => {
    Oncampus(newStudent.id);
  };

  return (
    <div className="flex flex-column bg-white">
      <div className="flex items-center w-full py-4 px-4">
        <div className="flex-1">{newStudent.name}</div>
        <div className="flex-1">{newStudent.slug}</div>
        <div className="flex-1">{newStudent.leave.slice(0, 25)}</div>
        <div className="flex-1">
          {newStudent.come !== "" ? (
            newStudent.come.slice(0, 25)
          ) : (
            <button onClick={cameOnHandler}>
              <BsPlusSquare />
            </button>
          )}
        </div>
        <div
          className={`px-3 py-1 rounded-full text-white ${
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
