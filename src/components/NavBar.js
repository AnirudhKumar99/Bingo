import React from "react";
import TitleCard from "./TitleCard";
// import Menu from './Menu'

const NavBar = () => {
  const navBarStyles = {
    backgroundColor: "blue",
    width: "100%",
    height: "10%",
    display: "flex",
    flexDirection: "row",
    gap: "10%",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "space-between"
  };
  return (
    <React.Fragment>
      <div style={navBarStyles}>
        {/* <Menu/> */}
        <TitleCard />
        {/* <Profile/> */}
      </div>
    </React.Fragment>
  );
};

export default NavBar;
