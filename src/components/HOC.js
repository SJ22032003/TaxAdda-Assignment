import React from "react";
import { Grid } from "@mui/material";
import SideNavbar from "./layout/navbar/SideNavbar";
import TopNavbar from "./layout/navbar/TopNavbar";

function HOC({ children }) {
  return (
    <Grid container>
      <Grid item xs={2} sx={{ backgroundColor: "#1d2631" }}>
        <SideNavbar />
      </Grid>
      <Grid item xs={10}>
        <Grid item container>
          <Grid item xs={12}>
            <TopNavbar />
          </Grid>
          <Grid item xs={12} sx={{minHeight:'calc(100vh - 64px)' , backgroundColor:'#f3f3f5'}}>
            {children}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default HOC;
