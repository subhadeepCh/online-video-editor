import AddCircleIcon from "@mui/icons-material/AddCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import styles from "components/jumbotron/jumbotron.styles";
import UppyDashboardModal from "components/uppy/DashboardModal";
import React from "react";

const useStyles = makeStyles((theme) => ({
  ...styles(theme),
}));

const Jumbotron = (props) => {
  const classes = useStyles();

  const { handleShowEditor, handleFileDataChange } = props;

  const [modalOpen, setModalOpen] = React.useState(false);

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  const onFileUploadSuccess = (file, response) => {
    const httpStatus = response.status; // HTTP status code
    const httpBody = response.body; // extracted response data
    // eslint-disable-next-line no-console
    console.log(httpStatus, httpBody);
    handleShowEditor(true);
    handleFileDataChange(file);
  };

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
      <UppyDashboardModal
        modalOpen={modalOpen}
        handleClose={handleClose}
        onFileUploadSuccess={onFileUploadSuccess}
        endpoint="/api/hello"
        allowedFileTypes={["video/*"]}
        id="modal1"
      />
    </Grid>
  );
};

export default Jumbotron;
