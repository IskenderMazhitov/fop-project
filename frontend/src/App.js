import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Title from "./components/Title";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import OffCam from "./pages/OffCam";
import OnCam from "./pages/OnCam";
import StudentsList from "./components/StudentsList";

function App() {
  return (
    <div className="relative">
      <Header />
      <Navbar />
      <Title />
      <StudentsList />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/off" element={<OffCam />} />
        <Route index path="/on" element={<OnCam />} />
      </Routes>
    </div>
  );
}

export default App;
