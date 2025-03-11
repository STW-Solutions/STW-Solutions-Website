import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
    <Routes>
    <Route index element={<Home />} />
    {/* <Route path="about" element={<About />} /> */}
    </Routes>
    </>
  );
}

export default App;
