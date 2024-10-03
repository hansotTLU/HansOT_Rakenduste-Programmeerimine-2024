import {
  Box,
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
import EditTodo from "./EditTodo";
import SubmitTodo from "./SubmitTodo";

type Todo = {
  id: string;
  title: string;
  priority: number;
  createdAt: number;
  updatedAt: number | null;
  deleted: boolean;
};

const Todo = () => {
  const [tasks, setTasks] = useState<Todo[]>([]);

  const fetchTasks = async () => {
    const response = await fetch("http://localhost:8080/todo");
    const data = await response.json();

    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <Box
      sx={{
        width: 750,
        margin: 2,
      }}
    >
      <Typography variant="h3">Tasks</Typography>

      <TableContainer component={Paper}>
        <Table
          sx={{
            minWidth: 650,
          }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Task</TableCell>
              <TableCell>Priority</TableCell>
              <TableCell align="right">Created</TableCell>
              <TableCell align="right">Updated</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map((task) => (
              <TableRow
                key={task.title}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell component="th" scope="row">
                  {task.title}
                </TableCell>
                <TableCell component="th" scope="row">
                  {task.priority}
                </TableCell>
                <TableCell align="right">
                  {new Date(task.createdAt).toLocaleString()}
                </TableCell>
                <TableCell align="right">
                  {" "}
                  {task.updatedAt
                    ? new Date(task.updatedAt).toLocaleString()
                    : "N/A"}
                </TableCell>
                <TableCell align="right">
                  <EditTodo task={task} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <SubmitTodo fetchTasks={fetchTasks} />
    </Box>
  );
};

export default Todo;
