import React from "react";
import {
  Container,
  Typography,
  Grid,
  Fade,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  containerStyle: {
    zIndex: 2,
  },
  titleCardStyle: {
    //margin: "10vh",
    marginTop: "20vh",
    zIndex: 2,
    borderRadius: "7px",
  },
  titleItem: {
    zIndex: 3,
    color: "white",
    textAlign: "center",
    fontSize: "8vw",
  },
  subTitleCardStyle: {
    backgroundColor: "hsla(0, 63%, 0%, 0.20)",
  },
  subTitleItem: {
    zIndex: 4,
    fontSize: "2vw",
    color: "white",
    width: "auto",
    height: "auto",
  },
});

export function MainPage({ currentPage, setAnimeStatus, animationStatus }) {
  const classes = useStyles();
  return (
    <Fade
      in={currentPage === 0 && !animationStatus}
      onEnter={setAnimeStatus(true)}
      onExit={setAnimeStatus(false)}
      unmountOnExit
    >
      <Container>
        <Grid
          container
          spacing={3}
          direction="column"
          alignItems="center"
          justify="center"
          className={classes.containerStyle}
        >
          <Grid className={classes.titleCardStyle} item>
            <Typography className={classes.titleItem} variant={"h1"}>
              Johan Ortega
            </Typography>
          </Grid>
          <Grid className={classes.subTitleCardStyle} item>
            <Typography variant="h4" className={classes.subTitleItem}>
              {
                // TODO Make api calls that'll get jokes from https://icanhazdadjoke.com/api
              }
              "I said what now?"
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Fade>
  );
}
