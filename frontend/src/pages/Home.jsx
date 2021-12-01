import React, { useContext } from "react";
import StudentItem from "../components/StudentItem";
import { DataContext } from "../context/DataProvider";
const Home = () => {
  const { newStudents, setNewStudents, search } = useContext(DataContext);
  var revMyArr = [].concat(newStudents).reverse();
  return (
    <div className="px-10 mt-5">
      <div className="flex flex-column bg-gray-50  mb-0.5">
        <div className="flex w-full py-4 px-4 font-semibold">
          <div className="flex-4 flex justify-center">Name</div>
          <div className="flex-2 flex justify-center">Card ID</div>
          <div className="flex-3 flex justify-center">Leave at</div>
          <div className="flex-3 flex justify-center">Came at</div>
          <div className="flex-1 flex justify-center">Status</div>
        </div>
      </div>
      {revMyArr.length === 0 ? (
        <h1>All students in campus</h1>
      ) : (
        revMyArr
          .filter((student) => {
            if (search === "") {
              return student;
            } else if (
              student.name.toLowerCase().includes(search.toLowerCase()) ||
              student.slug.toLowerCase().includes(search.toLowerCase())
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
          ))
      )}
    </div>
  );
};

export default Home;
