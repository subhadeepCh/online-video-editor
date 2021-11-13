import React from "react";
import { makeStyles } from "@mui/styles";
import Navbar from "components/Navbar/Navbar";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.main,
    width: "100%",
    height: "100%"
  },
  navbar: {
      width: "100%",
      position: "absolute",
      top: 0
  }
}));

const Dashboard = () => {
  const classes = useStyles();
  return <div className={classes.root}>
  <Navbar className={classes.navbar}/>
  <h1>Welcome to the Dashboard</h1>
  </div>;
};

export default Dashboard;
