import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../components/pages/home/Home";
import HOC from "../components/HOC";

function MyRoutes() {
  return (
    <>
      <HOC>
        <Routes>
          <Route path="/" element={<Navigate replace to="/add_gstin" />} />
          <Route path="/add_gstin" element={<Home />} />
        </Routes>
      </HOC>
    </>
  );
}

export default MyRoutes;
