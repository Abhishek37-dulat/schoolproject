import React from "react";
import TopNavbar from "./TopNavbar";
import MenuNavbar from "./MenuNavbar";
import TopMostBar from "./TopMostBar";

const Navbar = () => {
  return (
    <>
      <TopMostBar />
      {/* <TopNavbar /> */}
      <MenuNavbar />
    </>
  );
};

export default Navbar;
