import {
  Box,
  Button,
  Snackbar,
  SnackbarCloseReason,
  Stack,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

type SubmitCatProps = {
  fetchCats: () => void;
};

const SubmitCat = ({ fetchCats }: SubmitCatProps) => {
  const [name, setName] = useState("");
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

  const submitCat = async () => {
    if (!name) {
      console.warn("No success, field cannot be empty");
    } else {
      try {
        const response = await fetch("http://localhost:8080/cats", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: name }),
        });

        if (response.ok) {
          setSnackbarMessage(
            "Successfully added a cat! (refresh page to see the updated table)"
          );
          setOpen(true);
        } else {
          setSnackbarMessage("Failed to add cat");
          setOpen(true);
        }
      } catch (error) {
        setSnackbarMessage("Error while adding cat");
        setOpen(true);
      }
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await submitCat();
    fetchCats();
  };

  return (
    <Box sx={{ paddingTop: 3 }}>
      <form onSubmit={handleSubmit}>
        <Stack>
          <TextField
            label="Cat Name"
            onChange={(event) => setName(event.target.value)}
            required
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

export default SubmitCat;
