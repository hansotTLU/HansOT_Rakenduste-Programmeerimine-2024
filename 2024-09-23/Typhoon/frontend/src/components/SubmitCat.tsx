import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

const SubmitCat = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(null);

  const submitCat = async () => {
    const response = await fetch("https://localhost:8080/cats", {
      method: "POST",
      body: JSON.stringify({ name: name }),
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Stack>
          <TextField onChange={(event) => setName(event.target.value)} />
          <Button type="submit">Submit</Button>
        </Stack>
      </form>
    </Box>
  );
};

export default SubmitCat;
