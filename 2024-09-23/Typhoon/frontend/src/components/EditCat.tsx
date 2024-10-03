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

type Cat = {
  id: string;
  name: string;
};

const EditCat = ({ cat }: { cat: Cat }, { fetchCats }: { fetchCats: Cat }) => {
  const [editOpen, setEditOpen] = useState(false);
  const [newName, setNewName] = useState("");
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
    setNewName(cat.name);
    setEditOpen(true);
  };

  const handleClose = () => {
    setEditOpen(false);
    setNewName("");
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:8080/cats/${cat.id}`, {
        method: "DELETE",
      });
      setSnackbarMessage("Cat deleted (refresh page to see the updated table)");
      setSnackbarOpen(true);
    } catch (error) {
      setSnackbarMessage("Error deleting the cat");
      setSnackbarOpen(true);
    }
  };

  const handleUpdate = async (event: React.FormEvent) => {
    try {
      const response = await fetch(`http://localhost:8080/cats/${cat.id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: newName }),
      });
      setSnackbarMessage("Successfully edited the cat");
      setSnackbarOpen(true);
    } catch (error) {
      setSnackbarMessage("Error updating the cat");
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
        <DialogTitle>Edit Cat Name</DialogTitle>
        <DialogContent>
          <form onSubmit={handleUpdate}>
            <Stack sx={{ paddingTop: 1 }}>
              <TextField
                label="Cat Name"
                value={newName}
                onChange={(event) => setNewName(event.target.value)}
                required
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

export default EditCat;
