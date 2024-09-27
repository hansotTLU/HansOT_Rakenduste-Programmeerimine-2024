import {
  Box,
  List,
  ListItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import EditCat from "./EditCat";
import SubmitCat from "./SubmitCat";

type Cat = {
  id: string;
  name: string;
  createdAt: number;
  updatedAt: number | null;
  deleted: boolean;
};

const Cats = () => {
  const [cats, setCats] = useState<Cat[]>([]);

  const fetchCats = async () => {
    const response = await fetch("http://localhost:8080/cats");
    const data = await response.json();

    setCats(data);
  };

  useEffect(() => {
    fetchCats();
  }, []);

  return (
    <Box
      sx={{
        width: 750,
        margin: 2,
      }}
    >
      <Typography variant="h3">Cats</Typography>

      <TableContainer component={Paper}>
        <Table
          sx={{
            minWidth: 650,
            backgroundColor: "#cfcfcf",
          }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "black" }}>Cat Name</TableCell>
              <TableCell sx={{ color: "black" }} align="right">
                Created
              </TableCell>
              <TableCell sx={{ color: "black" }} align="right">
                Updated
              </TableCell>
              <TableCell sx={{ color: "black" }} align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cats.map((cat) => (
              <TableRow
                key={cat.name}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell sx={{ color: "black" }} component="th" scope="row">
                  {cat.name}
                </TableCell>
                <TableCell sx={{ color: "black" }} align="right">
                  {new Date(cat.createdAt).toLocaleString()}
                </TableCell>
                <TableCell sx={{ color: "black" }} align="right">
                  {" "}
                  {cat.updatedAt
                    ? new Date(cat.updatedAt).toLocaleString()
                    : "N/A"}
                </TableCell>
                <TableCell sx={{ color: "white" }} align="right">
                  <EditCat cat={cat} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <SubmitCat />
    </Box>
  );
};

export default Cats;
