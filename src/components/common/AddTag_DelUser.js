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
import closeImg from "../assets/close.png";
import addTagcommon from "../assets/addtagcommon.png";
import warningIcon from "../assets/warning.png";
import { useSelector, useDispatch } from "react-redux";
import {
  POPUP_CLOSE,
  ADD_TAGS_LIST,
  GET_TAGS_LIST,
  DELETE_GSTIN_USER,
} from "../../redux/ActionType";

function AddTag_DelUser() {
  const dispatch = useDispatch();
  const popupState = useSelector((state) => state.PopupReducer.popup);
  const deleteUserBtn = useSelector((state) => state.PopupReducer.deleteGstin);
  const gstNumber = useSelector((state) => state.PopupReducer.gstinNumber);

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
    if (deleteUserBtn && gstNumber) {
      dispatch({
        type: DELETE_GSTIN_USER,
        payload: gstNumber,
      });
    } else {
      dispatch({
        type: ADD_TAGS_LIST,
        payload: tagDetails,
      });
    }

    dispatch({ type: POPUP_CLOSE, open: false });
    setTagDetails({
      tagname: "",
      tagdescription: "",
    });
  };

  const handleClose = () => {
    dispatch({
      type: POPUP_CLOSE,
      open: false,
    });
  };

  return (
    <div>
      <Dialog open={popupState} onClose={() => setOpen(false)}>
        <Grid container>
          <Grid item xs={1.5}>
            <Box sx={{ margin: "18px 0 0 18px" }}>
              <img src={deleteUserBtn ? warningIcon : addTagcommon} alt="" />
            </Box>
          </Grid>
          <Grid item xs={10.5}>
            <form onSubmit={handleSubmit}>
              <DialogTitle>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="h6" fontWeight="bold">
                    {deleteUserBtn ? "Confirm Delete" : "Add Tag"}
                  </Typography>
                  <IconButton onClick={handleClose}>
                    <img src={closeImg} alt="close" style={{ width: "20px" }} />
                  </IconButton>
                </Box>
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  {deleteUserBtn ? (
                    <Typography variant="body2" fontWeight="bold">
                      Are you sure you want to delete this GSTIN?{<br />}This
                      cannot be undone. Please note that the{<br />}GSTIN credit
                      will not be reversed{<br />}
                    </Typography>
                  ) : (
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
                  )}
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
                    disabled={deleteUserBtn ? false : !tagDetails.tagname}
                    btnName="Submit"
                    type="submit"
                    autoFocus
                    onClick={handleSubmit}
                    variant="contained"
                    customStyle={{
                      padding: "5px 10px",
                      backgroundColor: deleteUserBtn ? "red" : "#5245dc",
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

export default React.memo(AddTag_DelUser);
