import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../components/pages/home/Home";
import GstinList from "../components/pages/gstinTable/GstinList";

function MyRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate replace to="/add_gstin" />} />
        <Route path="/add_gstin" element={<Home />} />
        <Route path="/gstin" element={<GstinList />} />
      </Routes>
    </>
  );
}

export default MyRoutes;
