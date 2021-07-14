import React from "react";
import {
  IconButton,
  Drawer,
  makeStyles,
  Grid,
  Divider,
} from "@material-ui/core";

import FolderIcon from "@material-ui/icons/Folder";
import HomeIcon from "@material-ui/icons/Home";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles({
  buttonStyle: {
    fontSize: "3.5vh",
  },
  drawerContainer: {
    width: "auto",
  },
});

export function DrawerButton({ navigate }) {
  const classes = useStyles();

  // TODO some way to
  const handleHomeClick = () => navigate(0);
  const handleProjectClick = () => navigate(1);

  const handleLinkedinClick = () => {
    window.open("https://www.linkedin.com/in/johan-a-ortegarios/");
  };

  const handleGithubClick = () => {
    window.open("https://github.com/Boole215");
  };

  return (
    <div>
      <Drawer anchor={"left"} open={true} variant="permanent">
        <Grid
          direction="column"
          alignItems="center"
          justify="center"
          className={classes.drawerContainer}
          container
        >
          <Grid item>
            <IconButton onClick={handleHomeClick}>
              <HomeIcon className={classes.buttonStyle} />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton onClick={handleProjectClick}>
              <FolderIcon className={classes.buttonStyle} />
            </IconButton>
          </Grid>

          <Divider style={{ width: "100%", height: ".3vh" }} />

          <Grid item>
            <IconButton onClick={handleLinkedinClick}>
              <LinkedInIcon className={classes.buttonStyle} />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton onClick={handleGithubClick}>
              <GitHubIcon className={classes.buttonStyle} />
            </IconButton>
          </Grid>
        </Grid>
      </Drawer>
    </div>
  );
}
