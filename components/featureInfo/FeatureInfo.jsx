import React from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({}));

const FeatureInfo = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={2} className={classes.container}>
      <Grid item container xs={12} md={4}>vdvdv</Grid>
      <Grid item container xs={12} md={4}>vdvdv</Grid>
      <Grid item container xs={12} md={4}>vdvdv</Grid>
      <Grid item container xs={12} md={4}>vdvdv</Grid>
      <Grid item container xs={12} md={4}>vdvdv</Grid>
      <Grid item container xs={12} md={4}>vdvdv</Grid>
    </Grid>
  );
};

export default FeatureInfo;
