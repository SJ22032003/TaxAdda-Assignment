import React from "react";
import { Grid, TextField, Typography } from "@mui/material";
import MuiButton from "../../common/MuiButton";
import { useNavigate } from "react-router-dom";
import downloadIcon from "../../assets/downloadIcon.png";
import GstinTable from "./GstinTable";
import { useDispatch } from "react-redux";
import { GET_GSTIN_USER, POPUP_CLEAN } from "../../../redux/ActionType";

function GstinList() {
  const history = useNavigate();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch({
      type: GET_GSTIN_USER,
    });
    return () => {
      dispatch({ type: POPUP_CLEAN });
    };
  }, []);

  const [search, setSearch] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submitted");
  };

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
                <MuiButton
                  onClick={() => history("/add_gstin")}
                  btnName="Add GSTIN"
                />
              </Grid>
              <Grid
                item
                xs={4}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <form
                  onSubmit={(e) => handleSubmit(e)}
                  style={{ width: "100%" }}
                >
                  <TextField
                    value={search}
                    fullWidth
                    size="small"
                    placeholder="Search by Lagal Name, Trade Name or GSTIN"
                    sx={{
                      backgroundColor: "#fff",
                      borderRadius: "7px",
                    }}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </form>
              </Grid>
              <Grid
                item
                xs={4}
                sx={{ display: "flex", justifyContent: "flex-end" }}
              >
                <MuiButton btnName="Export as XLSX" image={downloadIcon} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* Table */}
        <Grid item xs={12} my={2}>
          <GstinTable />
        </Grid>
      </Grid>
    </div>
  );
}

export default GstinList;
