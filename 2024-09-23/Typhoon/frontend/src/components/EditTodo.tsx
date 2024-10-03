import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Snackbar,
  SnackbarCloseReason,
  Stack,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import React, { useState } from "react";

type Todo = {
  id: string;
  title: string;
  priority: number;
};

const EditTodo = (
  { task }: { task: Todo },
  { fetchTasks }: { fetchTasks: Todo }
) => {
  const [editOpen, setEditOpen] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newPriority, setNewPriority] = useState<number | null>(null);
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleSnackbarClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  const handleClickOpen = () => {
    setNewTitle(task.title);
    setNewPriority(task.priority);
    setEditOpen(true);
  };

  const handleClose = () => {
    setEditOpen(false);
    setNewTitle("");
    setNewPriority(null);
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:8080/todo/${task.id}`, {
        method: "DELETE",
      });
      setSnackbarMessage(
        "Task deleted (refresh page to see the updated table)"
      );
      setSnackbarOpen(true);
    } catch (error) {
      setSnackbarMessage("Error deleting the task");
      setSnackbarOpen(true);
    }
  };

  const handleUpdate = async (event: React.FormEvent) => {
    try {
      const response = await fetch(`http://localhost:8080/todo/${task.id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: newTitle, priority: newPriority }),
      });
      setSnackbarMessage("Successfully edited the task");
      setSnackbarOpen(true);
    } catch (error) {
      setSnackbarMessage("Error updating the task");
      setSnackbarOpen(true);
    }
  };

  return (
    <Box>
      <IconButton aria-label="delete" onClick={handleDelete}>
        <DeleteIcon />
      </IconButton>
      <IconButton aria-label="edit" onClick={handleClickOpen}>
        <EditIcon />
      </IconButton>
      <Dialog open={editOpen} onClose={handleClose}>
        <DialogTitle>Edit Task</DialogTitle>
        <DialogContent>
          <form onSubmit={handleUpdate}>
            <Stack sx={{ paddingTop: 1 }}>
              <TextField
                label="New Task"
                value={newTitle}
                onChange={(event) => setNewTitle(event.target.value)}
                required
                sx={{ paddingBottom: 3 }}
              />
              <TextField
                label="Priority"
                type="number"
                value={newPriority}
                onChange={(event) => setNewPriority(Number(event.target.value))}
                required
                inputProps={{ min: 1, max: 5 }}
              />
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit">Submit</Button>
              </DialogActions>
            </Stack>
          </form>
        </DialogContent>
      </Dialog>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={5000}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
      />
    </Box>
  );
};

export default EditTodo;
