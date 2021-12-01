import React, { useContext } from "react";
import StudentItem from "../components/StudentItem";
import { DataContext } from "../context/DataProvider";

const OnCam = () => {
  const { newStudents, setNewStudents, search } = useContext(DataContext);
  const revMyArr = []
    .concat(newStudents)
    .reverse()
    .filter((s) => s.status === "On Campus");

  return (
    <div className="px-10 mt-5">
      <div className="flex flex-column bg-gray-50  mb-0.5">
        <div className="flex w-full py-4 px-4 font-semibold">
          <div className="flex-1">Name</div>
          <div className="flex-1">Card ID</div>
          <div className="flex-1">Leave at</div>
          <div className="flex-1">Came at</div>
          <div className="">Status</div>
        </div>
      </div>
      {revMyArr
        .filter((student) => {
          if (search === "") {
            return student;
          } else if (
            student.name.toLowerCase().includes(search.toLowerCase())
          ) {
            return student;
          }
          return false;
        })
        .map((newStudent, idx) => (
          <StudentItem
            id={idx}
            key={idx}
            newStudent={newStudent}
            setNewStudents={setNewStudents}
          />
        ))}
    </div>
  );
};

export default OnCam;
