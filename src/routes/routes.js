import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../components/pages/home/Home";

function MyRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate replace to="/add_gstin" />} />
        <Route path="/add_gstin" element={<Home />} />
      </Routes>
    </>
  );
}

export default MyRoutes;
