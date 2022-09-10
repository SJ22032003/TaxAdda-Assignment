import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Paper,
  IconButton,
  Grid,
  Box,
} from "@mui/material";
import trashIcon from "../../assets/trash.png";
import { DELETE_GSTIN_USER } from "../../../redux/ActionType";
import { useDispatch, useSelector } from "react-redux";
import { FormatDate } from "../../utils/utils";

// const rows = GstinUser;

function GstinTable() {
  const rows = useSelector((state) => state.MainReducer.gstin_data);

  const dispatch = useDispatch();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleDelete = (gst) => {
    dispatch({
      type: DELETE_GSTIN_USER,
      payload:gst,
    });
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Grid container sx={12}>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead sx={{ backgroundColor: "#fafafa" }}>
                <TableRow
                  sx={{
                    "& .MuiTableCell-root": {
                      fontSize: "12px",
                      fontWeight: "bold",
                      color: "#8c8e92",
                      padding: "0px 18px",
                    },
                  }}
                >
                  <TableCell>LEGAL NAME</TableCell>
                  <TableCell>TRADE NAME</TableCell>
                  <TableCell>GST NUMBER</TableCell>
                  <TableCell>GST TYPE</TableCell>
                  <TableCell>REGISTRATION{<br />}DATE</TableCell>
                  <TableCell>CANCELLATION{<br />}DATE</TableCell>
                  <TableCell>DELETE</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((data) => {
                    return (
                      <TableRow
                        sx={{
                          "& .MuiTableCell-root": {
                            color: "#8c8e92",
                            borderBottom: "none",
                            padding: "20px 18px",
                          },
                        }}
                      >
                        <TableCell id="root-lgmn">{data.lgnm}</TableCell>
                        <TableCell>{data.name}</TableCell>
                        <TableCell>{data.gstin}</TableCell>
                        <TableCell>{data.gstRegType}</TableCell>
                        <TableCell>{FormatDate(data.rgdt)}</TableCell>
                        <TableCell>
                          {data.cancellationDate ? data.cancellationDate : "-"}
                        </TableCell>
                        <TableCell align="center">
                          <IconButton onClick={() => handleDelete(data.gstin)}>
                            <img
                              src={trashIcon}
                              alt="X"
                              style={{ width: "22px" }}
                            />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12} my={2}>
          <Box
            sx={{ backgroundColor: "#fff", padding: "15px" }}
            component={Paper}
          >
            <TablePagination
              rowsPerPageOptions={[5, 10, 20]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default GstinTable;
