import AddCircleIcon from "@mui/icons-material/AddCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import Uppy from "@uppy/core";
import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";
import GoogleDrive from "@uppy/google-drive";
import { DashboardModal } from "@uppy/react";
import Url from "@uppy/url";
import XHRUpload from "@uppy/xhr-upload";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "10rem",
    marginBottom: "5rem",
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
    alignItems: "center",
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

  const [modalOpen, setModalOpen] = React.useState(false);

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  const uppy = new Uppy({
    id: "uppy1",
    autoProceed: true,
    allowMultipleUploadBatches: true,
    debug: true,
    restrictions: {
      maxFileSize: null,
      minFileSize: null,
      maxTotalFileSize: null,
      maxNumberOfFiles: 1,
      minNumberOfFiles: 1,
      allowedFileTypes: ["video/*"],
      requiredMetaFields: [],
    },
    infoTimeout: 5000,
  });

  uppy.use(XHRUpload, {
    method: "post",
    formData: true,
    endpoint: "http://localhost:3000/api/hello",
    fieldName: "file",
    bundle: true,
    headers: {
      "Acess-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS, GET, POST, PATCH, PUT",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept, Authorization, Extra-Data",
    },
  });

  uppy.use(Url, {
    companionUrl: "instagram",
  });

  uppy.use(GoogleDrive, {
    companionUrl: "https://companion.uppy.io/",
  });

  React.useEffect(() => {
    return () => uppy.close();
  });
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
        <Button
          variant="contained"
          size="large"
          className={classes.fileButton}
          onClick={handleOpen}
        >
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
      <DashboardModal
        uppy={uppy}
        closeModalOnClickOutside
        open={modalOpen}
        onRequestClose={handleClose}
        plugins={["Url", "GoogleDrive"]}
        proudlyDisplayPoweredByUppy={false}
      />
    </Grid>
  );
};

export default Jumbotron;
