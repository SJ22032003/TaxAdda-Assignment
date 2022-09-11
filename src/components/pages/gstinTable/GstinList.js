import React from "react";
import { Grid, TextField, Typography, IconButton, Box } from "@mui/material";
import MuiButton from "../../common/MuiButton";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import downloadIcon from "../../assets/downloadIcon.png";
import searchImg from "../../assets/searchimg.png";
import GstinTable from "./GstinTable";
import { useDispatch } from "react-redux";
import {
  GET_GSTIN_USER,
  POPUP_CLEAN,
  SEARCH_USER,
} from "../../../redux/ActionType";
import { CSVLink } from "react-csv";
import {CsvHeaders} from "../../data/StaticData";

function GstinList() {
  const history = useNavigate();
  const dispatch = useDispatch();
  const gstin_data = useSelector((state) => state.MainReducer.gstin_data);

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
    dispatch({
      type: SEARCH_USER,
      payload: search,
    });
  };

  const handleClear = () => {
    dispatch({
      type: SEARCH_USER,
      payload: "",
    });
    setSearch("");
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
                xs={3}
                sx={{ display: "flex", justifyContent: "flex-start" }}
              >
                <MuiButton
                  onClick={() => history("/add_gstin")}
                  btnName="Add GSTIN"
                />
              </Grid>
              <Grid
                item
                xs={6}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignContent: "center",
                  }}
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
                  <IconButton onClick={handleClear}>
                    <img
                      src={searchImg}
                      alt="clear"
                      style={{ width: "25px" }}
                    />
                  </IconButton>
                </Box>
              </Grid>
              <Grid
                item
                xs={3}
                sx={{ display: "flex", justifyContent: "flex-end" }}
              >
                <CSVLink data={gstin_data} headers={CsvHeaders} filename={"User-GSTIN.csv"}>
                  <MuiButton btnName="Export as XLSX" image={downloadIcon} customStyle={{padding:"10px 15px"}} />
                </CSVLink>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* Table */}
        <Grid item xs={12} my={2}>
          <GstinTable rows={gstin_data} />
        </Grid>
      </Grid>
    </div>
  );
}

export default GstinList;
