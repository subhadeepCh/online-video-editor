import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import { ThemeProvider } from "styled-components";

const theme = {
  palette: {
    primaryColor: "#ffffff",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
