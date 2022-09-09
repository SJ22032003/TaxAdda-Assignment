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
      <Button
        onClick={() => dispatch({ type: POPUP_OPEN, payload: true })}
        variant="outline"
        sx={{
          backgroundColor: "#101825",
          textTransform: "none",
          color: "#fff",
          margin: "0 20px 10px 0",
          padding: "2px 4px",
          fontWeight: "600",
          "&:hover": { backgroundColor: "#2d3743" },
        }}
      >
        <img
          src={AddTagsImg}
          alt="tags"
          style={{ width: "20px", marginRight: "5px" }}
        />{" "}
        Add Tags
      </Button>
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
                  <Button
                    onClick={handleClose}
                    variant="contained"
                    sx={{
                      margin: "5px 10px",
                      textTransform: "none",
                      color: "#000",
                      backgroundColor: "#fcfcfc",
                      "&:hover": { backgroundColor: "#fff" },
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    disabled={!tagDetails.tagname}
                    type="submit"
                    autoFocus
                    onClick={handleSubmit}
                    variant="contained"
                    sx={{
                      margin: "5px 10px",
                      textTransform: "none",
                      color: "#fff",
                      backgroundColor: "#5245dc",
                      "&:hover": { backgroundColor: "#5245dc" },
                    }}
                  >
                    Submit
                  </Button>
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
