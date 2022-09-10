import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import { GstinUser } from "../../data/TempData";
import trashIcon from "../../assets/trash.png";

const tableData = GstinUser;

const requiredData = [
  "lgnm",
  "name",
  "gstin",
  "gstRegType",
  "rgdt",
  "cancellationDate",
];

function GstinTable() {
  return (
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
          {tableData.map((data) => {
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
                <TableCell>{data.rgdt}</TableCell>
                <TableCell>
                  {data.cancellationDate ? data.cancellationDate : "-"}
                </TableCell>
                <TableCell align="center">
                  <IconButton>
                    <img src={trashIcon} alt="X" style={{width:'22px'}} />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default GstinTable;
