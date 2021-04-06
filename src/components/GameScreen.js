import React from "react";
import NavBar from "./NavBar";
import Board from "./Board";

const GameScreen = () => {
  const screenStyles = {
    width: "400px",
    height: "95%",
    backgroundColor: "#ff0000",
    display: "flex",
    flexDirection: "column",
    alignItesm: "center",
    justifyContent: "flex-start",
    position: "absolute",
    top: "2.5%"
  };

  return (
    <React.Fragment>
      <div style={screenStyles}>
        <NavBar />
        {/* <NavBar /> */}
        <Board />
      </div>
    </React.Fragment>
  );
};

export default GameScreen;
