import React from "react";
import "./Header.css";
import Netflix from "./images/netflix-logo.png";

const Header = () => {
  return (
    <div className="container-lg pb-3 d-flex flex-wrap flex-items-start my-3 flex-md-items-center">
      <img
        src={Netflix}
        className="img-fluid netflix-img mb-3"
        width={100}
        height={100}
        alt="Netflix Github Logo"
      />
      <div className="flex-1">
        <h1>Netflix, Inc.</h1>
        <p>Netflix Open Source Platform</p>
      </div>
    </div>
  );
};

export default Header;
