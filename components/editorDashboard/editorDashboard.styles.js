const styles = (theme) => ({
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
    backgroundColor: "rgb(21,21,25)",
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
  dataSettings: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1.5rem",
    width: "100%"
  },
  input:{
    width: "48%",
    background: "none",
    border: "0.1rem solid #767678",
    color: "#767678",
    padding: "0.8rem",
    outline: "none",
    borderRadius: "0.5rem",
    "&:focus":{
      border: "0.1rem solid rgb(50,145,255)"
    }
  }
});

export default styles;
