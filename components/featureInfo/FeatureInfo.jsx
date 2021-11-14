import React from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import featureData from "./featureData";
import SpeedIcon from "@mui/icons-material/Speed";
import SecurityIcon from "@mui/icons-material/Security";
import MovieIcon from "@mui/icons-material/Movie";
import SettingsIcon from "@mui/icons-material/Settings";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import LanguageIcon from "@mui/icons-material/Language";
import Card from "components/card/Card";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "4rem auto",
  },
  icons: {
    fontSize: "3rem",
  }
}));

const FeatureInfo = () => {
  const classes = useStyles();
  const icons = [
    <SpeedIcon className={classes.icons} />,
    <SecurityIcon className={classes.icons} />,
    <MovieIcon className={classes.icons} />,
    <SettingsIcon className={classes.icons} />,
    <StarOutlineIcon className={classes.icons} />,
    <LanguageIcon className={classes.icons} />,
  ];
  return (
    <Grid
      container
      spacing={4}
      className={classes.root}
    >
      {featureData.map((data, key) => (
        <Grid
          key={key}
          item
          container
          xs={12}
          md={4}
          alignItems="center"
          justify="center"
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
