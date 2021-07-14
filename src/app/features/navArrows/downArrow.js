import React from "react";
import { KeyboardArrowDown } from "@material-ui/icons";
import { IconButton, Fade, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  iconStyle: {
    color: "white",
  },
});

export function DownArrow({ currentPage, navCallback }) {
  const classes = useStyles();
  const callbackHandler = () => {
    switch (currentPage) {
      case 0:
        navCallback(2);
        break;
      case 4:
        navCallback(3);
        break;
      default:
      // do nothing because it shouldn't be there!
    }
  };

  return (
    <Fade in={currentPage === 0 || currentPage === 4}>
      <IconButton
        style={{
          position: "absolute",
          width: "100%",
          right: 0,
          left: 0,
          marginLeft: "auto",
          marginRight: "auto",
          bottom: "0",
        }}
        onClick={callbackHandler}
      >
        <KeyboardArrowDown fontSize="large" className={classes.iconStyle} />
      </IconButton>
    </Fade>
  );
}
