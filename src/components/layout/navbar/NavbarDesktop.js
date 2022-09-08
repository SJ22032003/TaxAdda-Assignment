import React from "react";
import {
  Grid,
  Typography,
  Button,
  AppBar,
  Toolbar,
  Stack,
  IconButton,
  Box,
} from "@mui/material";
import TaxAddaLogo from "../../assets/TaxAdda.png";
import smallTaxAdda from "../../assets/small-taxadda.png";
import { makeStyles } from "@mui/styles";
import { SideNavbarList } from "../../data/StaticData";
import { NavLink } from "react-router-dom";
import useCheckSize from "../../hooks/useCheckSize";

function NavbarDesktop({ children }) {
  const size = useCheckSize();

  return (
    <Grid container sx={{ display: "flex", flexWrap: "wrap" }}>
      <Grid item xs={2}>
        <AppBar
          position="static"
          sx={{ minHeight: "100vh", backgroundColor: "#1d2631" }}
        >
          <Toolbar disableGutters={true}>
            <Stack spacing={2} sx={{ width: "100%" }}>
              <Box sx={{ backgroundColor: "#101825" }}>
                <Typography
                  variant="h5"
                  type="div"
                  sx={{
                    padding: "5px",
                    margin: "5px 0",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={TaxAddaLogo}
                    alt="logo"
                    style={{ maxWidth: "180px", width: "100%" }}
                  />
                </Typography>
              </Box>
              <Box>
                {SideNavbarList.map((item, index) => {
                  return (
                    <NavLink id="navbar-item" to={`/${item.link}`}>
                      <Button
                        variant="outline"
                        key={index}
                        sx={{
                          display: "flex",
                          justifyContent: "flex-start",
                          textTransform: "none",
                          color: "#98a2af",
                          padding: "10px 16px",
                          fontWeight: "600",
                          margin: "15px 0",
                          width: "100%",
                          textAlign: "left",
                          "&:hover": {
                            backgroundColor: "#2d3743",
                          },
                        }}
                      >
                        <img
                          src={item.image}
                          alt="img"
                          style={{ width: "25px", marginRight: "15px" }}
                        />{" "}
                        {item.name}
                      </Button>
                    </NavLink>
                  );
                })}
              </Box>
            </Stack>
          </Toolbar>
        </AppBar>
      </Grid>
      <Grid item xs={10}>
        <Grid item container>
          <AppBar position="static" sx={{ backgroundColor: "#ffffff" }}>
            <Toolbar
              sx={{ display: "flex", justifyContent: "flex-end" }}
              disableGutters={true}
            >
              <Stack direction="row" spacing={2}>
                <Typography variant="h6" component="div">
                  <Button
                    variant="outline"
                    sx={{
                      backgroundColor: "#5245dc",
                      textTransform: "none",
                      marginRight: "20px",
                      "&:hover": { backgroundColor: "#101825" },
                    }}
                  >
                    Manage Subscription
                  </Button>
                  <IconButton>
                    <img
                      src={smallTaxAdda}
                      alt="logo"
                      style={{ width: "38px" }}
                    />
                  </IconButton>
                </Typography>
              </Stack>
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid item container sx={{minHeight:'calc(100% - 64px)', backgroundColor:'#f3f3f5'}}>
            <main>
                {children}
            </main>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default NavbarDesktop;
