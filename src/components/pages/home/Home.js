import React from "react";
import { Grid } from "@mui/material";
import GstInfo from "./GstInfo";
import GstList from "./GstList";

function Home() {
  return (
    <Grid container>
      <Grid item lg={4.5} md={12}>
        <GstInfo />
      </Grid>
      <Grid item lg={7.5} md={12}>
        <GstList />
      </Grid>
    </Grid>
  );
}

export default Home;
