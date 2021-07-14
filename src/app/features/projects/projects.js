import React from "react";
import { Grid, Fade, makeStyles } from "@material-ui/core";
import { ProjectEntry } from "../projectEntry/projectEntry";

const projects = [
  {
    title: "mTracker",
    description: "Something",
    stack: "express/react",
    image: "aURL",
  },
];
const useStyles = makeStyles({
  gridTop: {
    paddingTop: "10vh",
  },
});
export function Projects({ currentPage, setAnimeStatus, animationStatus }) {
  const classes = useStyles();

  return (
    <Fade
      in={currentPage === 3 && !animationStatus}
      onEnter={setAnimeStatus(true)}
      onExit={setAnimeStatus(false)}
    >
      <Grid
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        className={classes.gridTop}
        container
      >
        <ProjectEntry />
      </Grid>
    </Fade>
  );
}
