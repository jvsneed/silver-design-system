import React from "react";
import Do from "./Dos.js";
import Dont from "./Donts.js";
import "./TextDecorExample.css";
import planeIcon from "../images/planeicon.png";

const TextDecorExample = () => {
  return (
    <div className="text-decor-example-container">
      <div className="example-item text-decor-example">
        <Do></Do>
        <div className="note">
          <span>
            The navigation links use sentence case, and instead of using all capital letters, a larger font size of 16pt is used to make the links easier to read.
          </span>
        </div>
        <div className="header">
          <div className="header-content">
            <div className="logo">Indigo Airlines</div>
            <div className="nav-links">
              <a href="#" style={{fontSize: "16pt"}}>Book a flight</a>
              <a href="#" style={{fontSize: "16pt"}}>Explore</a>
              <a href="#" style={{fontSize: "16pt"}}>Find help</a>
              <a href="#" style={{fontSize: "16pt"}}>Sign in</a>
            </div>
          </div>
        </div>
      </div>
      <div className="example-item text-decor-example">
        <Dont></Dont>
        <div className="note">
        The navigation links are all in capitalized letters. While it may seem this would be easier to read for someone with low vision, it is better to increase the font size instead.
          <span>
          </span>
        </div>
        <div className="header">
          <div className="header-content">
            <div className="logo">Indigo Airlines</div>
            <div className="nav-links">
              <a href="#">BOOK A FLIGHT</a>
              <a href="#">EXPLORE</a>
              <a href="#">FIND HELP</a>
              <a href="#">SIGN IN</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextDecorExample;
