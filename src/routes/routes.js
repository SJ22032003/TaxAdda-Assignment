import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/pages/home/Home";
import HOC from "../components/HOC";

function MyRoutes() {
  return (
    <>
      <HOC>
        <Routes>
          <Route path="/add_gstin" element={<Home />} />
        </Routes>
      </HOC>
    </>
  );
}

export default MyRoutes;
