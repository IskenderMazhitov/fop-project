import React, { useState, createContext, useEffect, useRef } from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [students, setStudents] = useState([]);
  const [newStudents, setNewStudents] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const inputElement = useRef(null);
  const focusDefault = useRef(null);
  const inputSearch = useRef(null);
  const mainInput = document.getElementById("mainInput");

  const AvtoFocus = (e) => {
    if (e === "default") {
      focusDefault.current.focus();
    } else if (e === "student") {
      inputElement.current.focus();
    }
  };

  const InputHandler = (event) => {
    setSearchValue(event);
    const editedStudent = students.map((s) => {
      if (s.slug === event) {
        const slugs = document.querySelectorAll(".but");
        slugs.forEach((slug) => {
          if (event === slug.id) {
            slug.click();
          }
        });
      } else {
      }
    });
  };

  const getData = async () => {
    try {
      const response = await axios.get("/api/v1/student/");
      const { data } = response;
      setStudents(data);
    } catch (err) {
      console.log(err);
    }
  };
  const getStudent = async () => {
    try {
      const response = await axios.get("/api/v1/newstudents/");
      const { data } = response;
      setNewStudents(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
    getStudent();
  }, []);

  const addStudent = async (newStudent) => {
    try {
      axios.defaults.xsrfCookieName = "csrftoken";
      axios.defaults.xsrfHeaderName = "X-CSRFToken";
      await axios.post("/api/v1/newstudents/", newStudent);
      getStudent();
    } catch (err) {
      console.log(err);
    }
  };

  const Oncampus = async (id) => {
    try {
      const editStudent = newStudents.filter((stud) => stud.id === id)[0];
      editStudent.come = new Date().toString();
      editStudent.status = "On Campus";
      await axios.put(`/api/v1/newstudents/${id}/`, editStudent);
      getStudent();
    } catch (err) {
      console.log(err);
    }
  };

  const [search, setSearch] = useState("");
  const [showStudents, setShowStudents] = useState(false);

  return (
    <DataContext.Provider
      value={{
        students,
        setStudents,
        newStudents,
        setNewStudents,
        search,
        setSearch,
        showStudents,
        setShowStudents,
        addStudent,
        Oncampus,
        inputElement,
        focusDefault,
        AvtoFocus,
        mainInput,
        inputSearch,
        searchValue,
        setSearchValue,
        InputHandler,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
