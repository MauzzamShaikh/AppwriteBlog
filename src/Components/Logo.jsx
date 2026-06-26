import React from "react";
import Logo from "../assets/Logo.png";

function Logo({ width = "180px" }) {
  return (
    <img
      src={Logo}
      alt="My Blog"
      style={{ width }}
      className="object-contain"
    />
  );
}

export default Logo;