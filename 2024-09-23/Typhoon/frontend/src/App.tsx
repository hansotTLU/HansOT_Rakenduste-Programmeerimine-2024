import { createTheme, Stack, ThemeProvider, CssBaseline } from "@mui/material";
import "./App.css";
import Cats from "./components/Cats";
import Todo from "./components/Todo";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#26dfff",
    },
    secondary: {
      main: "#1993c7",
    },
    info: {
      main: "#26dfff",
    },
    background: {
      default: "#252424",
      paper: "#414d4f",
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Stack direction="row" padding={5}>
          <Cats />
          <Todo />
        </Stack>
      </ThemeProvider>
    </>
  );
}

export default App;
