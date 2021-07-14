import React from "react";
import { KeyboardArrowUp } from "@material-ui/icons";
import { IconButton, Fade, makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  iconStyle: {
    color: "white",
  },
});

export function UpArrow({ currentPage, navCallback }) {
  const classes = useStyles();
  const callbackHandler = () => {
    switch (currentPage) {
      case 2:
        navCallback(0);
        break;
      case 3:
        navCallback(4);
        break;
      default:
      // do nothing because it shouldn't be there!
    }
  };

  return (
    <Grid xs={1} item>
      <Fade in={currentPage === 2 || currentPage === 3}>
        <IconButton
          style={{
            position: "absolute",
            width: "100%",
            right: 0,
            left: 0,
            marginLeft: "auto",
            marginRight: "auto",
            top: "0",
          }}
          onClick={callbackHandler}
        >
          <KeyboardArrowUp fontSize="large" className={classes.iconStyle} />
        </IconButton>
      </Fade>
    </Grid>
  );
}
