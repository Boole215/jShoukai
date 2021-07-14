import React from "react";
import { Grid, Box, makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  root: {
    position: "absolute",
    top: "2vh",
    right: "1vw",
    minWidth: "75px",
    minHeight: "20px",
    zIndex: 20,
  },
  borderStyle: {
    borderStyle: "solid",
    borderWidth: "thin",
    borderColor: "hsla(0,0%,0%,0.4)",
  },
  areaBox: {
    position: "relative",
    width: "1vw",
    height: ".75vw",
  },
  highlightArea: {
    backgroundColor: "hsla(0, 63%, 0%, 0.40)",
  },
});

export function Minimap({ currentPage }) {
  const classes = useStyle();
  return (
    <Box className={`${classes.root} ${classes.borderStyle}`}>
      <Grid
        justify="center"
        alignItems="center"
        spacing={1}
        style={{
          paddingTop: "1vh",
          paddingBottom: "1vh",
          marginLeft: "1vw",
        }}
        container
      >
        {
          // mTracker
        }

        <Grid xs={4} item>
          <div
            className={`${classes.areaBox} ${classes.borderStyle} ${
              currentPage === 4 ? classes.highlightArea : ""
            }`}
          />
        </Grid>
        <Grid xs={4} item />
        <Grid xs={4} item />
        {
          // Projects
        }

        <Grid xs={4} item>
          <div
            className={`${classes.areaBox} ${classes.borderStyle} ${
              currentPage === 3 ? classes.highlightArea : ""
            } `}
          />
        </Grid>
        {
          // Main page
        }

        <Grid xs={4} item>
          <div
            className={`${classes.areaBox} ${classes.borderStyle} ${
              currentPage === 0 ? classes.highlightArea : ""
            }`}
          />
        </Grid>
        {
          // Links
        }
        <Grid xs={4} item>
          <div
            className={`${classes.areaBox} ${classes.borderStyle} ${
              currentPage === 1 ? classes.highlightArea : ""
            }`}
          />
        </Grid>
        <Grid xs={4} item />
        {
          // About Me
        }

        <Grid xs={4} item>
          <div
            className={`${classes.areaBox} ${classes.borderStyle} ${
              currentPage === 2 ? classes.highlightArea : ""
            }`}
          />
        </Grid>
        <Grid xs={4} item />
      </Grid>
    </Box>
  );
}
