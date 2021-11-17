import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import Card from "components/card/Card";
import React from "react";
import guideData from "./guideData";

const useStyles = makeStyles((_theme) => ({
  root: {
    margin: "4rem auto",
  },
  icons: {
    fontSize: "3rem",
  },
}));

const Guide = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={4} className={classes.root}>
      <Grid item xs={12} alignItems="center" justify="center">
        <Typography variant="h4" align="center" className={classes.heading}>
          Add sound, song or voiceover to your video
        </Typography>
      </Grid>
      {guideData.map((data, key) => (
        <Grid
          key={key}
          item
          container
          xs={12}
          md={4}
          alignItems="center"
          justify="center"
        >
          <Card data={data} alignment="left" />
        </Grid>
      ))}
    </Grid>
  );
};

export default Guide;
