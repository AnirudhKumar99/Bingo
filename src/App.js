import "./styles.css";
import GameScreen from "./components/GameScreen";
import React from "react";

const App = () => {
  const appStyles = {
    display: "flex",
    alignItesm: "center",
    justifyContent: "center"
  };
  return (
    <React.Fragment>
      <div className="App" style={appStyles}>
        <GameScreen />
      </div>
    </React.Fragment>
  );
};

export default App;
