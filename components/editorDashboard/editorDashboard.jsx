/* eslint-disable arrow-body-style */
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ClearIcon from "@mui/icons-material/Clear";
import {
  Button, createTheme, MenuItem,
  OutlinedInput, Select, Slider, ThemeProvider
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import UppyDashboardModal from "components/uppy/DashboardModal";
import Image from "next/image";
import Promise from "promise";
import React from "react";
import ReactPlayer from "react-player";

const useStyles = makeStyles((theme) => ({
  "@global": {
    "*::-webkit-scrollbar": {
      width: "0.2rem",
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "#767678",
      outline: "1px solid #767678",
      borderRadius: "0.5rem",
    },
  },
  root: {
    width: "100%",
    height: "100vh",
    overflow: "hidden",
  },
  container: {
    width: "100%",
    height: "100%",
  },
  player: {
    backgroundColor: "rgb(21,21,25)",
  },
  utility: {
    backgroundColor: "rgb(32,32,36)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  timeline: {
    backgroundColor: "rgb(32,32,36)",
  },
  gridRoot: {
    padding: 0,
    margin: 0,
  },
  playerDiv: {
    height: "50vh",
    width: "100%",
    padding: "1rem 3rem 1rem 1rem",
    display: "flex",
  },
  playerDivResponsive: {
    height: "20vh",
    width: "100%",
    padding: "1rem 3rem 1rem 1rem",
    display: "flex",
  },
  backButtonIcon: {
    color: "rgb(91,91,94)",
    "&:hover": {
      color: "white",
    },
  },
  timelineSection: {
    backgroundColor: "rgb(44,44,49)",
    width: "100%",
    height: "12vw",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  loader: {
    color: "white",
  },
  fileButton: {
    background: "rgb(44,44,49)",
    borderRadius: "0.5rem",
    fontSize: "0.8rem",
    width: "15rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  verticalAlign: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  addIcon: {
    fontSize: "1.5rem",
    marginRight: "0.3rem",
  },
  verticalLine: {
    width: "0.1rem",
    height: "100%",
    position: "absolute",
    zIndex: 30,
    backgroundColor: "white",
    margin: 0,
    transitionDuration: "1s",
  },
  footer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: "0 2rem 0 2rem",
  },
  timeLineComponent: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
  },
  audio: {
    width: "100%",
    height: "2vw",
    backgroundImage: "url(/sound.gif)",
    backgroundSize: "2vw 2vw",
    backgroundRepeat: "repeat-x",
  },
  exportButton: {
    background: theme.palette.secondary.light,
    fontSize: "1rem",
  },
  fileExtension: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "2vw",
    whiteSpace: "nowrap",
    color: "#767678",
  },
  formatText: {
    marginRight: "2rem",
  },
  outlinedSelector: {
    height: "2.5rem",
    background: "#767678",
  },
  editorConfig: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: "0 3rem 0 3rem",
  },
  sliderRoot: {
    width: "100%",
  },
  utilitySection: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  fileDetails: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    background: "rgb(21,21,25)",
    width: "100%",
    borderRadius: "0.3rem",
    padding: "0.5rem",
    color: "white",
    marginBottom: "1rem",
  },
  clearAudio: {
    color: "#767678",
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

const muiTheme = createTheme({});

const EditorDashboard = (props) => {
  const classes = useStyles();
  const {
    handleShowEditor,
    handleFileDataChange,
    fileData,
    handleAudioDataChange,
    audioData,
  } = props;

  const [timeLine, setTimeLine] = React.useState([]);
  const [windowWidth, setwindowWidth] = React.useState(0);
  const [windowHeight, setwindowHeight] = React.useState(0);
  const [isDesktop, setDesktop] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const [audioObject, setAudioObject] = React.useState(null);
  const [extension, setExtension] = React.useState("Keep Format");
  const [videoVolume, setVideoVolume] = React.useState(100);
  const [audioVolume, setAudioVolume] = React.useState(100);

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: 45 * 4.5 + 8,
        width: 50,
        backgroundColor: "rgb(54,54,59)",
        color: "white",
        borderRadius: "0.5rem",
      },
    },
  };

  const handleExport = async () => {
    const response = await fetch("/api/result", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        audioVolume: audioVolume,
        videoVolume: videoVolume,
        extension: extension,
      }),
    });

    const content = await response.json();

    alert(
      `Configuration Sent to Server :\nAudioVolume: ${content?.dataRecieved?.audioVolume}\nVideo Volume: ${content?.dataRecieved?.videoVolume}\nExtension: ${content?.dataRecieved?.extension}`
    );

    handleShowEditor(false);
    handleFileDataChange(null);
    handleAudioDataChange(null);
    setAudioObject(null);
  };

  const handleOpen = () => {
    setModalOpen(true);
    setAudioObject(null);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  const handleSetExtension = (event) => {
    setExtension(event.target.value);
  };

  const handleVideoVolumeChange = (event) => {
    setVideoVolume(event.target.value);
  };

  const handleAudioVolumeChange = (event) => {
    setAudioVolume(event.target.value);
    if (audioObject) {
      const audioObj = audioObject;
      audioObj.volume = event.target.value / 100;
      setAudioObject(audioObj);
    }
  };

  const handleClearAudio = () => {
    audioObject?.pause();
    setAudioObject(null);
    handleAudioDataChange(null);
  };

  const onFileUploadSuccess = React.useMemo(
    () => (file) => {
      handleAudioDataChange(file);
      const audio = document.getElementsByClassName("audio-element")[0];
      setAudioObject(audio);
    },
    [handleAudioDataChange]
  );

  const updateMedia = () => {
    setDesktop(window.innerWidth > 750);
    setwindowWidth(window.innerWidth / 11);
    setwindowHeight(window.innerWidth / 11 - 10);
  };

  const updateVideoProgress = (event) => {
    setProgress(event?.played);
  };

  const onPlay = React.useMemo(
    () => () => {
      audioObject?.play();
    },
    [audioObject]
  );

  const onPause = React.useMemo(
    () => () => {
      audioObject?.pause();
    },
    [audioObject]
  );

  React.useEffect(() => {
    window.addEventListener("resize", updateMedia);
    if (window.innerWidth > 750) setDesktop(true);
    // eslint-disable-next-line no-console
    console.log("IsDesktop: ", isDesktop);
    return () => window.removeEventListener("resize", updateMedia);
  }, [isDesktop]);

  React.useEffect(() => {
    setModalOpen(false);
  }, [audioData]);

  const handleBackButtonClick = () => {
    handleShowEditor(false);
    handleFileDataChange(null);
    handleAudioDataChange(null);
    setAudioObject(null);
  };

  React.useEffect(() => {
    setwindowWidth(window.innerWidth / 11);
    setwindowHeight(window.innerWidth / 11 - 10);
    const videoObjectUrl = URL.createObjectURL(fileData.data);
    const video = document.createElement("video");
    video.src = videoObjectUrl;
    let seekResolve;
    video.addEventListener("seeked", async function () {
      if (seekResolve) seekResolve();
    });
    video.onloadedmetadata = async function () {
      const canvas = document.getElementById("myCanvas");
      const context = canvas.getContext("2d");
      const [width, height] = [video.videoWidth, video.videoHeight];
      canvas.width = width;
      canvas.height = height;
      const currentTime = 0;
      const duration = video.duration;
      const interval = duration / 10;
      const base64ImageDataArray = [];
      while (currentTime < duration) {
        video.currentTime = currentTime;
        await new Promise((r) => (seekResolve = r));
        context.drawImage(video, 0, 0, width, height);
        base64ImageDataArray.push(canvas.toDataURL());
        currentTime += interval;
      }
      setTimeLine(base64ImageDataArray);
    };
  }, [fileData.data]);

  const playerSection = React.useMemo(() => {
    return (
      <div
        className={
          !isDesktop && audioData
            ? classes.playerDivResponsive
            : classes.playerDiv
        }
      >
        <ReactPlayer
          url={URL.createObjectURL(fileData.data)}
          playing={true}
          controls={true}
          width="100%"
          height="100%"
          onProgress={updateVideoProgress}
          onPlay={onPlay}
          onPause={onPause}
          volume={videoVolume / 100}
        />
      </div>
    );
  }, [
    isDesktop,
    audioData,
    classes.playerDivResponsive,
    classes.playerDiv,
    fileData.data,
    onPlay,
    onPause,
    videoVolume,
  ]);

  const getUppyDashboardModal = React.useMemo(
    () => (
      <UppyDashboardModal
        modalOpen={modalOpen}
        handleClose={handleClose}
        onFileUploadSuccess={onFileUploadSuccess}
        endpoint="/api/hello"
        allowedFileTypes={["audio/*"]}
        id="modal2"
      />
    ),
    [modalOpen, onFileUploadSuccess]
  );

  const getRightSection = () => {
    return (
      <>
        {audioData ? (
          <div className={classes.editorConfig}>
            <div className={classes.fileDetails}>
              <span style={{ color: "rgb(186,186,188)" }}>
                {audioData?.data?.name}
              </span>{" "}
              <ClearIcon
                className={classes.clearAudio}
                onClick={handleClearAudio}
              />
            </div>
            <div className={classes.dataSettings}>
              <div></div>
              <div></div>
            </div>
            <div className={classes.sliderRoot}>
              <span style={{ color: "#767678" }}> Video Sound Volume</span>
              <ThemeProvider theme={muiTheme}>
                <Slider
                  size="small"
                  defaultValue={100}
                  aria-label="Small"
                  valueLabelDisplay="auto"
                  onChange={handleVideoVolumeChange}
                />
              </ThemeProvider>
            </div>
            <div className={classes.sliderRoot}>
              <span style={{ color: "#767678" }}> Audio Track Volume</span>
              <ThemeProvider theme={muiTheme}>
                <Slider
                  size="small"
                  defaultValue={100}
                  aria-label="Small"
                  valueLabelDisplay="auto"
                  onChange={handleAudioVolumeChange}
                />
              </ThemeProvider>
            </div>
          </div>
        ) : (
          <Button
            variant="contained"
            size="medium"
            className={classes.fileButton}
            onClick={handleOpen}
          >
            <span className={classes.verticalAlign}>
              <AddIcon className={classes.addIcon} /> Add Audio
            </span>
          </Button>
        )}
      </>
    );
  };

  const utilitySection = () => {
    return (
      <div className={classes.utilitySection}>
        {timeLine.length > 0 ? (
          getRightSection()
        ) : (
          <Button
            variant="disabled"
            size="medium"
            className={classes.fileButton}
            onClick={handleOpen}
          >
            <span className={classes.verticalAlign}>
              <AddIcon className={classes.addIcon} /> Add Audio
            </span>
          </Button>
        )}
        {getUppyDashboardModal}
        <audio className="audio-element" loop>
          {audioData && (
            <source src={URL.createObjectURL(audioData.data)}></source>
          )}
        </audio>
      </div>
    );
  };

  const timeLineImages = React.useMemo(() => {
    return (
      <>
        {timeLine.map((image, key) => (
          <Image
            key={key}
            src={image}
            alt=""
            width={`${windowWidth}px`}
            height={`${windowHeight}px`}
          />
        ))}
      </>
    );
  }, [timeLine, windowHeight, windowWidth]);

  const getPosition = () => {
    return progress * windowWidth * timeLine.length;
  };

  const timelineSection = () => {
    return (
      <div className={classes.timelineSection}>
        <canvas id="myCanvas" style={{ display: "none" }}></canvas>
        {timeLine.length > 0 ? (
          <div className={classes.timeLineComponent}>
            <hr
              className={classes.verticalLine}
              style={{ left: getPosition() }}
            />
            <span> {timeLineImages}</span>
            {audioObject && <span className={classes.audio} />}
          </div>
        ) : (
          <div className={classes.loader}>Loading...</div>
        )}
      </div>
    );
  };

  const footerSection = () => {
    return (
      <div className={classes.footer}>
        <div className={classes.fileExtension}>
          <span className={classes.formatText}>Format —</span>
          <Select
            value={extension}
            label={extension}
            onChange={handleSetExtension}
            MenuProps={MenuProps}
            input={<OutlinedInput />}
            classes={{ root: classes.outlinedSelector }}
          >
            <MenuItem disabled value="Keep Format">
              <em>Keep Format</em>
            </MenuItem>
            <MenuItem value="3G2">3G2</MenuItem>
            <MenuItem value="3GP">3GP</MenuItem>
            <MenuItem value="AVI">AVI</MenuItem>
            <MenuItem value="ASF">ASF</MenuItem>
            <MenuItem value="F4V">F4V</MenuItem>
            <MenuItem value="FLV">FLV</MenuItem>
            <MenuItem value="M2TS">M2TS</MenuItem>
            <MenuItem value="M2V">M2V</MenuItem>
            <MenuItem value="M4V">M4V</MenuItem>
            <MenuItem value="MPG">MPG</MenuItem>
            <MenuItem value="MPEG">MPEG</MenuItem>
          </Select>
        </div>
        <Button
          className={classes.exportButton}
          variant="contained"
          size="large"
          onClick={handleExport}
        >
          Export
        </Button>
      </div>
    );
  };

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={2}
        className={classes.container}
        classes={{ root: classes.gridRoot }}
      >
        <Grid item container xs={12} md={8.3} className={classes.player}>
          <Button onClick={handleBackButtonClick}>
            <ArrowBackIosIcon className={classes.backButtonIcon} />
          </Button>
          {playerSection}
        </Grid>
        <Grid item container xs={12} md={3.7} className={classes.utility}>
          {utilitySection()}
        </Grid>
        <Grid container xs={12} className={classes.timeline}>
          {timelineSection()}
          {footerSection()}
        </Grid>
      </Grid>
    </div>
  );
};

export default EditorDashboard;
