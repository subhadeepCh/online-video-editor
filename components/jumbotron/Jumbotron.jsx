import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography, Button } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Grid from "@mui/material/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "10rem",
    marginBottom: "5rem"
  },
  header: {
    fontWeight: 700,
    fontSize: "4rem",
    color: theme.palette.primary.main,
  },
  subtitle: {
    fontSize: "1.5rem",
    fontWeight: 200,
  },
  fileButton: {
    background: theme.palette.secondary.light,
    padding: "1rem",
    borderRadius: "0.5rem 0 0 0.5rem",
    width: "15rem",
    fontSize: "1.1rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  addCircleIcon: {
    fontSize: "2rem",
    marginRight: "0.8rem",
  },
  verticalAlign: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dropDownButton: {
    background: theme.palette.secondary.light,
    padding: "1rem",
    borderRadius: "0 0.5rem 0.5rem 0",
    width: "4rem",
    fontSize: "1.1rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dropDownIcon: {
    fontSize: "2rem",
  },
}));

const Jumbotron = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={2}
      className={classes.root}
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={12}>
        <Typography className={classes.header} variant="h1" align="center">
          Add Music to Video
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          className={classes.subtitle}
          variant="subtitle1"
          align="center"
        >
          Add audio to video for uploading to YouTube, Facebook, Instagram, IGTV
          <br />
          or another social media
        </Typography>
      </Grid>
      <Grid item container xs={12} alignItems="center" justifyContent="center">
        <Button variant="contained" size="large" className={classes.fileButton}>
          <span className={classes.verticalAlign}>
            <AddCircleIcon className={classes.addCircleIcon} /> Choose file
          </span>
        </Button>
        <Button
          variant="contained"
          size="large"
          className={classes.dropDownButton}
        >
          <span className={classes.verticalAlign}>
            <KeyboardArrowDownIcon className={classes.dropDownIcon} />
          </span>
        </Button>
      </Grid>
    </Grid>
  );
};

export default Jumbotron;
