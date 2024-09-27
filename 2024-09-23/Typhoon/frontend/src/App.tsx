import { Stack } from "@mui/material";
import "./App.css";
import Cats from "./components/Cats";
import Todo from "./components/Todo";

function App() {
  return (
    <>
      <Stack direction="row" padding={5}>
        <Cats />
        <Todo />
      </Stack>
    </>
  );
}

export default App;
