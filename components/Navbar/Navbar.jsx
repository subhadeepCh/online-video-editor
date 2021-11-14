import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.light2,
    color: theme.palette.primary.main,
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const [isDesktop, setDesktop] = React.useState(true);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1450);
  };

  React.useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Video Editor
          </Typography>
          {isDesktop ? (
            <>
              <Button color="inherit">Tools</Button>
              <Button color="inherit">Pricing</Button>
              <Button color="inherit">Resources</Button>
              <Button color="inherit" variant="outlined">
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
