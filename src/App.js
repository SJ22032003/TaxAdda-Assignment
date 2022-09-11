import React from "react";
import MyRoutes from "./routes/routes";
import HOC from "./components/HOC";
import "react-notifications-component/dist/theme.css";
import { ReactNotifications } from "react-notifications-component";

function App() {
  return (
    <>
      <ReactNotifications />
      <HOC>
        <MyRoutes />
      </HOC>
    </>
  );
}

export default App;
