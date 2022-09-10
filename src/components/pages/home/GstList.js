import React from "react";
import { Grid, Typography, Box, TextareaAutosize, Paper } from "@mui/material";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import AddTag_DelUser from "../../common/AddTag_DelUser";
import { ADD_GSTIN_LIST } from "../../../redux/ActionType";
import errorMessage from "../../common/Notification";
import MuiButton from "../../common/MuiButton";

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    width: "100%",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "grey",
    fontFamily: "Roboto,Helvetica,Arial,sans-serif",
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "#5245dc" : "white",
    color: state.isFocused ? "#fff" : "#000000",
  }),
};

function GstList() {
  const dispatch = useDispatch();
  const gstin_tags = useSelector((state) => state.TagsReducer.tags);

  const selectOptions = gstin_tags?.map((item) => {
    return { value: item.name, label: item.name, id: item.id };
  });

  const [gstinListText, setGstinListText] = React.useState("");
  const [selectedTags, setSelectedTags] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const gstinList = gstinListText.split("\n").map((item) => item.trim());
    if (gstinListText.trim() === "") {
      errorMessage("Add GSTIN", "Please enter GSTIN list", "warning");
    } else {
      dispatch({
        type: ADD_GSTIN_LIST,
        payload: {
          gstin: gstinList,
          tags: selectedTags.id == null ? [] : [selectedTags.id],
        },
      });
    }
  };

  return (
    <Grid container sx={{ padding: { lg: "0 70px 0 0", md: "0 20px" } }}>
      <Grid
      component={Paper}
        item
        container
        sx={{
          backgroundColor: "#fff",
          width: "100%",
          marginTop: "20px",
          padding: "25px",
        }}
      >
        <Grid item xs={12} sx={{ marginTop: "30px" }}></Grid>
        <Grid item xs={12}>
          <Box>
            <Typography
              variant="body2"
              fontWeight="bold"
              color="textSecondary"
              sx={{ fontSize: "15px" }}
            >
              Enter one or more GSTIN to import
            </Typography>

            <TextareaAutosize
              value={gstinListText}
              onChange={(e) => setGstinListText(e.target.value)}
              minRows={20}
              id="text-area"
              style={{ height: "250px" }}
            />
          </Box>
        </Grid>

        <Grid item sx={{ marginTop: "15px", width: "100%" }}>
          <Box>
            <Grid
              item
              container
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Typography
                variant="body2"
                color="textSecondary"
                fontWeight="bold"
                sx={{ fontSize: "15px", marginTop: "10px" }}
              >
                Select Tags
              </Typography>
              <AddTag_DelUser />
            </Grid>
            <Select
              isClearable
              value={selectedTags?.name}
              styles={customStyles}
              placeholder="Showing All Tags"
              options={selectOptions}
              onChange={(e) => setSelectedTags(e)}
            />
          </Box>
        </Grid>
        <Grid>
          <Box my={2}>
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ fontSize: "14px" }}
            >
              Paste all the client GSTIN in the box which you want to import.
              Each GSTIN should be in a new line.
            </Typography>
            <br />
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ fontSize: "14px" }}
            >
              QRMP prefrence along with the GSTIN return status from Jan 2021
              till date will be imported automatically.
            </Typography>
          </Box>
        </Grid>
        <Grid
          sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
        >
          <Typography variant="h6" component="div">
            <MuiButton
              onClick={handleSubmit}
              variant="outline"
              btnName="Save Multiple GSTIN"
              customStyle={{ padding: "8px 12px" }}
            />
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default GstList;
