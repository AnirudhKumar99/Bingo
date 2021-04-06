import React from "react";
import Cell from "./Cell";

const Board = () => {
  const boardArray = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
  ];
  const crossedArray = [
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1]
  ];
  const gridStyles = {
    position: "relative",
    display: "flex",
    alignContent: "stretch"
  };
  const Grid = () =>
    boardArray.map((i, indI) => (
      <div style={gridStyles}>
        {i.map((j, indJ) => (
          <Cell num={j} cross={crossedArray[indI][indJ] > 0 ? true : false} />
        ))}
        <br />
      </div>
    ));
  return (
    <React.Fragment>
      <div>
        <Grid />
        {/* <Cell num="3" /> */}
        <div style={{ display: "flex", position: "relative" }}>
          {["B", "I", "N", "G", "O"].map((j) => (
            <Cell num={j} cross={true} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Board;
