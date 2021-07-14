import React from "react";
import { KeyboardArrowLeft } from "@material-ui/icons";
import { IconButton, Fade, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  iconStyle: {
    position: "absolute",
    color: "white",
  },
});

export function LeftArrow({ currentPage, navCallback }) {
  const classes = useStyles();
  const callbackHandler = () => {
    switch (currentPage) {
      case 1:
        navCallback(0);
        break;
      case 0:
        navCallback(3);
        break;
      default:
      // do nothing because it shouldn't be there!
    }
  };

  return (
    <Fade in={currentPage === 0 || currentPage === 1}>
      <IconButton
        style={{ position: "absolute", left: 0, top: "50%" }}
        onClick={callbackHandler}
      >
        <KeyboardArrowLeft fontSize="large" className={classes.iconStyle} />
      </IconButton>
    </Fade>
  );
}
