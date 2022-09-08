import React from "react";
import { Routes, Route } from "react-router-dom";
import GstinList from "../components/pages/home/Home";
import HOC from "../components/HOC";

function MyRoutes() {
  return (
    <>
      <HOC>
        <Routes>
          <Route path="/gstin" element={<GstinList />} />
        </Routes>
      </HOC>
    </>
  );
}

export default MyRoutes;
