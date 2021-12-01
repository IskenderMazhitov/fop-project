import React, { useContext, useState, useRef, useEffect } from "react";
import { ReactComponent as Logo } from "../icons/logo.svg";
import { DataContext } from "../context/DataProvider";
import { BsPlus } from "react-icons/bs";
const Header = () => {
  const {
    showStudents,
    setShowStudents,
    inputElement,
    focusDefault,
    AvtoFocus,
    mainInput,
    students,
    newStudents,
    InputHandler,
  } = useContext(DataContext);
  const StudentsListHandler = () => {
    setShowStudents(!showStudents);
    mainInput.style.display = "block";
    mainInput.focus();
  };

  const [value, setValue] = useState();
  const autoCheck = (e) => {
    setValue(e);
    const a = newStudents.filter((t) => {
      if (t.slug === e) {
        return t;
      }
      return false;
    });

    if (a.length === 0) {
      const editedStudent = students.map((s) => {
        if (s.slug === e) {
          InputHandler(e);
        }
        return s;
      });
    } else {
      const last = Object.keys(a)[Object.keys(a).length - 1];

      if (a[last].status === "Off Campus" && a[last].slug === e) {
        const slugs = document.querySelectorAll(".comeOn");
        slugs.forEach((slug) => {
          if (e === slug.id) {
            slug.click();
          }
        });
      } else if (a[last].status == "On Campus") {
        const editedStudent = students.map((s) => {
          if (s.slug === e) {
            InputHandler(e);
          }
          return s;
        });
      }
    }

    setTimeout(() => {
      setValue("");
    }, 1000);
  };

  return (
    <div className="bg-primary px-10 flex justify-between items-center text-white">
      <Logo width="50px" />
      <form autoComplete="off">
        <input
          value={value}
          id="mainInput"
          type="text"
          name="rr"
          className="text-white opacity-0 focus:outline-none bg-primary"
          ref={focusDefault}
          autoComplete="nope"
          onChange={(e) => autoCheck(e.target.value)}
          autoFocus={true}
          onBlur={() => AvtoFocus("default")}
        />
      </form>
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
