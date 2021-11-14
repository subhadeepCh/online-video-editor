import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0 5rem 0 5rem",
  },
  heading: {
    background: theme.palette.primary.gradient,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  description: {},
  gridRoot: {
    padding: "2rem 4rem",
  },
  title: {},
}));

const Card = (props) => {
  const classes = useStyles();
  const { data, variant, icon, alignment } = props;
  return (
    <Grid
      container
      spacing={2}
      className={classes.root}
      alignItems="center"
      justifyContent="center"
      classes={{ root: classes.gridRoot }}
    >
      {variant === "icon-card" ? (
        <Grid item container xs={12} justifyContent={alignment}>
          {icon}
        </Grid>
      ) : (
        <Grid item container xs={12} justifyContent={alignment}>
          <Typography
            align={alignment}
            variant="h6"
            classes={{ root: classes.title }}
          >
            {data?.title}
          </Typography>
        </Grid>
      )}
      <Grid item container xs={12} justifyContent={alignment}>
        <Typography
          align={alignment}
          variant="h6"
          classes={{ root: classes.heading }}
        >
          {data?.heading}
        </Typography>
      </Grid>
      <Grid item container xs={12} justifyContent={alignment}>
        <Typography
          align={alignment}
          variant="subtitle1"
          className={classes.description}
        >
          {data?.description}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Card;
