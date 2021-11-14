import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  root: {
    fontSize: "calc(0.75vw + 0.75vh)",
    margin: 0,
    padding: 0,
  },
  components: {
    // Name of the component
    MuiGrid: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          paddingLeft: 0,
        }
      },
    },
  },
  palette: {
    primary: {
      main: "#000000",
      light: "#ffffff",
      light2: "rgba(228, 241, 255, 1)"
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
