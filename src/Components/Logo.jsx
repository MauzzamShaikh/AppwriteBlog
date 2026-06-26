import React from "react";
import logo from "../assets/logo.png";

function Logo({ width = "180px" }) {
  return (
    <img
      src={logo}
      alt="My Blog"
      style={{ width }}
      className="object-contain"
    />
  );
}

export default Logo;