import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.main,
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  return <h1 className={classes.root}>Welcome to the Dashboard</h1>;
};

export default Dashboard;
