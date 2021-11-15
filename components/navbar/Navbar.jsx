import MenuIcon from "@mui/icons-material/Menu";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import * as React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.main,
    zIndex: 20,
  },
  signInButton: {
    color: theme.palette.secondary.light,
  },
  logo: {
    color: theme.palette.secondary.light2,
    marginRight: "0.2rem",
    fontSize: "2rem",
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const [isDesktop, setDesktop] = React.useState(false);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 750);
  };

  React.useEffect(() => {
    window.addEventListener("resize", updateMedia);
    if (window.innerWidth > 750) setDesktop(true);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" className={classes.root}>
        <Toolbar>
          <VideoLibraryIcon className={classes.logo} />
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Video Editor
          </Typography>
          {isDesktop ? (
            <>
              <Button color="inherit">Tools</Button>
              <Button color="inherit">Pricing</Button>
              <Button color="inherit">Resources</Button>
              <Button
                color="inherit"
                variant="outlined"
                className={classes.signInButton}
              >
                Sign In
              </Button>
            </>
          ) : (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
