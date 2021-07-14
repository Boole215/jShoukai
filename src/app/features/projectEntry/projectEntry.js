import React from "react";
import {
  Grid,
  makeStyles,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@material-ui/core";

const useStyles = makeStyles({
  projectTitle: {
    position: "relative",
    marginLeft: "1vw",
    marginTop: "1vh",
    fontSize: "4vh",
  },
  projectDescription: {
    position: "relative",
    marginBottom: "2vh",
    marginLeft: "2vw",
    fontSize: "2vh",
  },
  projectStack: {
    marginTop: "1vh",
  },
  listItem: {
    marginTop: 0,
    paddingTop: 0,
    paddingBottom: 0,
    marginBottom: 0,
    fontSize: "1.8vh",
  },
});

export function ProjectEntry({ title, description, stack, image }) {
  const classes = useStyles();

  return (
    <Grid xs={12} style={{ width: "90vw" }} item>
      <Paper style={{ paddingLeft: "-3vw", width: "auto" }}>
        <Grid
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={1}
          style={{ width: "auto" }}
          container
        >
          <Grid
            xs={6}
            sm={5}
            md={4}
            lg={5}
            xl={7}
            style={{ width: "20vw" }}
            item
          >
            <Typography
              variant="h3"
              className={classes.projectTitle}
              align="left"
              gutterBottom
            >
              mTracker
            </Typography>
            <Typography
              variant="h6"
              className={classes.projectDescription}
              gutterBottom
            >
              Following many series at once and want to stay on-top of updates?
              mTracker is for you!
            </Typography>
          </Grid>
          <Grid xs={1} item />
          <Divider orientation="vertical" flexItem />
          <Grid xs={1} item />
          <Grid
            xs={3}
            sm={4}
            md={4}
            lg={4}
            xl={2}
            style={{ width: "30vw" }}
            item
          >
            <Typography variant="h4">Technologies used</Typography>
            <List>
              <ListItem component="ol" dense>
                <ListItemText
                  primaryTypographyProps={{ className: classes.listItem }}
                  primary="React"
                />
              </ListItem>
              <ListItem dense>
                <ListItemText
                  className={classes.listItem}
                  primaryTypographyProps={{ className: classes.listItem }}
                  primary="Express.js"
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>

        <Grid xs={12} item>
          <div></div>
        </Grid>
      </Paper>
    </Grid>
  );
}
