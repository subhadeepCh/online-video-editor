/* eslint-disable no-unused-vars */
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import DemoSegment from "components/demoSegment/DemoSegment";
import FeatureInfo from "components/featureInfo/FeatureInfo";
import Guide from "components/guide/Guide";
import Jumbotron from "components/jumbotron/Jumbotron";
import Navbar from "components/navbar/Navbar";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.main,
    width: "100%",
    height: "100%",
  },
  navbar: {
    width: "100%",
    position: "absolute",
    top: 0,
  },
  container: {
    padding: "2rem",
  },
}));

const Dashboard = (props) => {
  const classes = useStyles();
  const { handleShowEditor, handleFileDataChange } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={2} className={classes.container}>
        <Grid item container xs={12}>
          <Jumbotron
            handleShowEditor={handleShowEditor}
            handleFileDataChange={handleFileDataChange}
          />
        </Grid>
        <Grid item container xs={12}>
        </Grid>
        <Grid item container xs={12}>
          <DemoSegment />
        </Grid>
        <Grid item container xs={12}>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
