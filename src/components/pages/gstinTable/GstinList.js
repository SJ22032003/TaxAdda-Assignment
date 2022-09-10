import React from "react";
import { Grid, Button, TextField, Typography } from "@mui/material";

function GstinList() {
  return (
    <div style={{ padding: "0px 3rem" }}>
      <Grid container>
        {/*Search top */}
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12}>
              <Typography
                variant="h4"
                fontWeight="bold"
                sx={{
                  fontSize: "25px",
                  color: "#000000",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              >
                All GSTINs
              </Typography>
            </Grid>
            <Grid item container>
              <Grid
                item
                xs={4}
                sx={{ display: "flex", justifyContent: "flex-start" }}
              >
                <Button
                  sx={{
                    padding: "0 15px",
                    backgroundColor: "#5245dc",
                    textTransform: "none",
                    color: "#fff",
                    fontWeight: "600",
                    borderRadius: "7px",
                    "&:hover": { backgroundColor: "#322a93" },
                  }}
                >
                  Add GSTIN
                </Button>
              </Grid>
              <Grid
                item
                xs={4}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Search by Lagal Name, Trade Name or GSTIN"
                  sx={{
                    backgroundColor: "#fff",
                    borderRadius: "7px",
                  }}
                />
              </Grid>
              <Grid
                item
                xs={4}
                sx={{ display: "flex", justifyContent: "flex-end" }}
              >
                <Button
                  sx={{
                    padding: "0 15px",
                    backgroundColor: "#5245dc",
                    textTransform: "none",
                    color: "#fff",
                    fontWeight: "600",
                    borderRadius: "7px",
                    "&:hover": { backgroundColor: "#322a93" },
                  }}
                >
                  Export as XLSX
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* Table */}
        <Grid item xs={12}></Grid>
      </Grid>
    </div>
  );
}

export default GstinList;
