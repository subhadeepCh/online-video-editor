import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  root: {
    fontSize: "calc(0.75vw + 0.75vh)",
    margin: 0,
    padding: 0,
    // height: "calc(100% + 15rem)",
  },
  body: {
    height: "100%",
  },
  components: {
    // Name of the component
    MuiGrid: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          paddingLeft: 0,
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#000000",
      light: "#ffffff",
      light2: "rgba(228, 241, 255, 1)",
      gradient: "linear-gradient(to right, #30CFD0 0%, #330867 100%)",
    },
    secondary: {
      main: "#19857b",
      light: "rgb(50,145,255, 1)",
      light2: "#30CFD0",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
