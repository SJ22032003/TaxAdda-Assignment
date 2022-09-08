import React from "react";
import {
  Typography,
  Button,
  AppBar,
  Toolbar,
  Stack,
  IconButton,
} from "@mui/material";
import smallTaxAdda from "../../assets/small-taxadda.png";

function TopNavbar() {
  return (
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
              <img src={smallTaxAdda} alt="logo" style={{ width: "38px" }} />
            </IconButton>
          </Typography>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default TopNavbar;
