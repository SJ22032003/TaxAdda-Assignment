import React from "react";
import {
  Grid,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import MuiButton from "./MuiButton";
import AddTagsImg from "../assets/tag.png";
import closeImg from "../assets/close.png";
import addTagcommon from "../assets/addtagcommon.png";
import { useSelector, useDispatch } from "react-redux";
import {
  POPUP_CLOSE,
  POPUP_OPEN,
  ADD_TAGS_LIST,
  GET_TAGS_LIST,
} from "../../redux/ActionType";

function AddTag_DelUser() {
  const dispatch = useDispatch();
  const popupState = useSelector((state) => state.PopupReducer.popup);

  const [tagDetails, setTagDetails] = React.useState({
    tagname: "",
    tagdescription: "",
  });

  React.useEffect(() => {
    dispatch({
      type: GET_TAGS_LIST,
    });
  }, [popupState]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: ADD_TAGS_LIST,
      payload: tagDetails,
    });
    dispatch({ type: POPUP_CLOSE, payload: false });
    setTagDetails({
      tagname: "",
      tagdescription: "",
    });
  };

  const handleClose = () => {
    dispatch({
      type: POPUP_CLOSE,
      payload: false,
    });
  };

  return (
    <div>
      <MuiButton
        btnName="Add Tag"
        onClick={() => dispatch({ type: POPUP_OPEN, payload: true })}
        image={AddTagsImg}
        customStyle={{
          margin: "0 20px 10px 0",
          padding: "2px 4px",
          backgroundColor: "#101825",
          "&:hover": { backgroundColor: "#2d3743" },
        }}
      />
      <Dialog open={popupState} onClose={() => setOpen(false)}>
        <Grid container>
          <Grid item xs={1.5}>
            <Box sx={{ margin: "18px 0 0 18px" }}>
              <img src={addTagcommon} alt="add tag" />
            </Box>
          </Grid>
          <Grid item xs={10.5}>
            <form onSubmit={handleSubmit}>
              <DialogTitle>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="h6" fontWeight="bold">
                    Add Tag
                  </Typography>
                  <IconButton onClick={handleClose}>
                    <img src={closeImg} alt="close" style={{ width: "20px" }} />
                  </IconButton>
                </Box>
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  <Grid container>
                    <Grid item xs={12} sx={{ margin: "6px" }}>
                      <TextField
                        required
                        value={tagDetails.tagname}
                        onChange={(e) =>
                          setTagDetails({
                            ...tagDetails,
                            tagname: e.target.value,
                          })
                        }
                        label="Tag Name"
                        variant="outlined"
                        color="secondary"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sx={{ margin: "6px" }}>
                      <TextField
                        value={tagDetails.tagdescription}
                        onChange={(e) =>
                          setTagDetails({
                            ...tagDetails,
                            tagdescription: e.target.value,
                          })
                        }
                        label="Tag Description"
                        variant="outlined"
                        color="secondary"
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Box>
                  <MuiButton
                    onClick={handleClose}
                    variant="outlined"
                    btnName="Cancel"
                    customStyle={{
                      padding: "5px 10px",
                      color: "#000",
                      backgroundColor: "#fcfcfc",
                      "&:hover": { backgroundColor: "#fff" },
                    }}
                  />
                  <MuiButton
                    disabled={!tagDetails.tagname}
                    btnName="Submit"
                    type="submit"
                    autoFocus
                    onClick={handleSubmit}
                    variant="contained"
                    customStyle={{
                      padding: "5px 10px",
                    }}
                  />
                </Box>
              </DialogActions>
            </form>
          </Grid>
        </Grid>
      </Dialog>
    </div>
  );
}

export default AddTag_DelUser;
