import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
import demoBackground from "public/demo.png";
import React from "react";

const useStyles = makeStyles((_theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontWeight: 700,
    fontSize: "1.8rem",
    margin: "0.8rem auto",
  },
  caption: {
    fontWeight: 200,
    fontSize: "2rem",
    marginBottom: "1rem",
  },
  box: {
    margin: "2rem auto",
  },
  paper: {
    padding: "1.8rem",
  },
  demoBackground: {
    width: "100%",
    height: "100%",
  },
}));

const DemoSegment = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Add sound, song or voiceover to your video
      </Typography>
      <Typography variant="body1" align="center" className={classes.caption}>
        Just upload an audio track and trim it to the video length
      </Typography>
      <Box
        className={classes.box}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: "70vw",
            height: "40vw",
          },
        }}
      >
        <Paper elevation={4} className={classes.paper}>
          <Image src={demoBackground} alt="Demo" layout="responsive" />
        </Paper>
      </Box>
    </div>
  );
};

export default DemoSegment;
