import React, { useEffect, useState } from "react";
import { MainPage } from "./app/features/mainPage/mainPage";
import { makeStyles } from "@material-ui/core";

import Particles from "react-particles-js";
import particleConf from "./app/config/particles.json";

import { Projects } from "./app/features/projects/projects";

import { LeftArrow } from "./app/features/navArrows/leftArrow";
import { RightArrow } from "./app/features/navArrows/rightArrow";
import { UpArrow } from "./app/features/navArrows/upArrow";
import { DownArrow } from "./app/features/navArrows/downArrow";
import { Minimap } from "./app/features/minimap/minimap";

import "./index.css";
import "@fontsource/roboto";

const useStyles = makeStyles({
  root: {
    height: "99vh",
    width: "99vw",
  },
  downChev: { color: "white", position: "absolute" },
  leftChev: { color: "white", position: "absolute" },
  rightChev: { color: "white", position: "absolute" },
});

// TODO use the background colour as the main colour for the theme?
function App() {
  const classes = useStyles();
  const [currentPage, setPage] = useState(0);
  const [animationOccurring, setAnimationStatus] = useState(false);

  const handleSetPage = (page) => setPage(page);
  const handleSetAnime = (status) => setAnimationStatus(status);
  useEffect(() => {
    console.log(`Current page is: ${currentPage}`);
    console.log(`${currentPage === 0}`);
  });

  return (
    <div className={classes.root}>
      <div style={{ position: "absolute", zIndex: -1 }}>
        <Particles params={particleConf} />
      </div>
      <Minimap currentPage={currentPage} />
      <UpArrow currentPage={currentPage} navCallback={handleSetPage} />
      <LeftArrow currentPage={currentPage} navCallback={handleSetPage} />
      <RightArrow currentPage={currentPage} navCallback={handleSetPage} />
      <DownArrow currentPage={currentPage} navCallback={handleSetPage} />
      {currentPage === 0 && (
        <MainPage
          currentPage={currentPage}
          animationStatus={animationOccurring}
          setAnimeStatus={handleSetAnime}
        />
      )}
      {currentPage === 3 && (
        <Projects
          currentPage={currentPage}
          animationStatus={animationOccurring}
          setAnimeStatus={handleSetAnime}
        />
      )}
    </div>
  );
}

export default App;
