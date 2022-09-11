import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../components/pages/home/Home";
import GstinList from "../components/pages/gstinTable/GstinList";
import NoPage from "../components/common/NoPage";

function MyRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate replace to="/add_gstin" />} />
        <Route path="/add_gstin" element={<Home />} />
        <Route path="/gstin" element={<GstinList />} />
        <Route path="/*" element={<NoPage notFound={true} />} />
      </Routes>
    </>
  );
}

export default MyRoutes;
