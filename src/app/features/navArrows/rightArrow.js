import React, { useEffect } from "react";
import { KeyboardArrowRight } from "@material-ui/icons";
import { IconButton, Fade, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  iconStyle: {
    position: "absolute",
    color: "white",
  },
});

export function RightArrow({ currentPage, navCallback }) {
  const classes = useStyles();
  const callbackHandler = () => {
    switch (currentPage) {
      case 3:
        navCallback(0);
        break;
      case 0:
        navCallback(1);
        break;
      default:
      // do nothing because it shouldn't be there!
    }
  };

  useEffect((currentPage) => {
    if (currentPage !== 0 || currentPage !== 3) {
    }
  });
  return (
    <Fade in={currentPage === 0 || currentPage === 3} unmountOnExit>
      <IconButton
        style={{ position: "absolute", right: 0, top: "50%" }}
        onClick={callbackHandler}
      >
        <KeyboardArrowRight fontSize="large" className={classes.iconStyle} />
      </IconButton>
    </Fade>
  );
}
