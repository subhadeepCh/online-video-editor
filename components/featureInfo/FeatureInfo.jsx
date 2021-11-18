import LanguageIcon from "@mui/icons-material/Language";
import MovieIcon from "@mui/icons-material/Movie";
import SecurityIcon from "@mui/icons-material/Security";
import SettingsIcon from "@mui/icons-material/Settings";
import SpeedIcon from "@mui/icons-material/Speed";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import Card from "components/card/Card";
import React from "react";
import featureData from "./featureData";

const useStyles = makeStyles((_theme) => ({
  root: {
    margin: "4rem auto",
  },
  icons: {
    fontSize: "3rem",
  },
  gridItem:{
    paddingLeft: "0 !important"
  }
}));

const FeatureInfo = () => {
  const classes = useStyles();
  const icons = [
    <SpeedIcon key={1} className={classes.icons} />,
    <SecurityIcon key={2} className={classes.icons} />,
    <MovieIcon key={3} className={classes.icons} />,
    <SettingsIcon key={4} className={classes.icons} />,
    <StarOutlineIcon key={5} className={classes.icons} />,
    <LanguageIcon key={6} className={classes.icons} />,
  ];
  return (
    <Grid container spacing={4} className={classes.root}>
      {featureData.map((data, key) => (
        <Grid
          key={key}
          item
          container
          xs={12}
          md={4}
          alignItems="center"
          justify="center"
          classes={{item: classes.gridItem}}
        >
          <Card
            data={data}
            variant="icon-card"
            icon={icons[key]}
            alignment="center"
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default FeatureInfo;
