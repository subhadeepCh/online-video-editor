const styles = (theme) => ({
  root: {
    marginTop: "10rem",
    marginBottom: "9rem"
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
});

export default styles;
