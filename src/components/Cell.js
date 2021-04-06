import React from "react";

const Cell = (props) => {
  const wid = "100px";
  const cellStyles = {
    backgroundColor: props.cross ? "white" : "red",
    color: "black",
    width: "60px",
    height: "60px",
    padding: "10px",
    // textAlign: "center",
    margin: "auto",
    fontSize: "40px",
    border: "1px solid black",
    // position: "absolute",
    left: wid,
    top: "20px"
  };
  const cross = props.cross;
  return (
    <React.Fragment>
      <div style={cellStyles}>{props.num}</div>
    </React.Fragment>
  );
};

export default Cell;
