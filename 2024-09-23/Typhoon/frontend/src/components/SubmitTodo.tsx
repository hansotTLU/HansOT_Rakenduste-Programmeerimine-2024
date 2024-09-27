import {
  Box,
  Button,
  Input,
  Snackbar,
  SnackbarCloseReason,
  Stack,
  TextField,
} from "@mui/material";
import { setPriority } from "os";
import React, { useState } from "react";

const SubmitTodo = () => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState<number>();
  const [open, setOpen] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const submitTodo = async () => {
    if (!title) {
      console.warn("No success, field cannot be empty");
    } else {
      try {
        const response = await fetch("http://localhost:8080/todo", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title: title, priority: priority }),
        });

        if (response.ok) {
          console.log("Success", response);
          setSnackbarMessage(
            "Successfully added a task! (refresh page to see the updated table)"
          );
          setOpen(true);
        } else {
          console.warn("No success");
          setSnackbarMessage("Failed to add task");
          setOpen(true);
        }
      } catch (error) {
        console.warn(error);
        setSnackbarMessage("Error while adding task");
        setOpen(true);
      }
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    submitTodo();
  };

  return (
    <Box sx={{ paddingTop: 3 }}>
      <form onSubmit={handleSubmit}>
        <Stack>
          <TextField
            label="Task"
            onChange={(event) => setTitle(event.target.value)}
            required
          />
          <TextField
            label="Priority"
            type="number"
            value={priority}
            onChange={(event) => setPriority(Number(event.target.value))}
            required
            inputProps={{ min: 1, max: 5 }}
          />
          <Button type="submit">Submit</Button>
        </Stack>
      </form>

      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message={snackbarMessage}
      />
    </Box>
  );
};

export default SubmitTodo;
