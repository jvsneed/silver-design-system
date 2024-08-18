import React from "react";
import Do from "./Dos.js";
import Dont from "./Donts.js";
import "./ReadableTextExample.css";
import planeImage from "../images/planeimage.jpg";

const ReadableTextExample = () => {
  return (
    <div className="readable-text-example-container">
      <div className="example-item readable-text-example">
        <Do></Do>
        <div className="note">
          <span>
            The body text size is 14 pt, making it easy to read across devices.
          </span>
        </div>
        <div className="example-blurb-correct">
          <img
            src={planeImage}
            className="example-blurb-image"
            alt="Airplane flying through sky"
          />
          <p id="example-blurb-heading-correct">Fly More, Save More</p>
          <p id="example-blurb-text-correct">
            Join the frequent flyer program and enjoy exclusive discounts, free
            upgrades, and more benefits every time you fly.
          </p>
        </div>
      </div>
      <div className="example-item readable-text-example">
        <Dont></Dont>
        <div className="note">
          <span>
          The body text size is 10 pt, making it hard to read for someone with vision loss.

          </span>
        </div>
        <div className="example-blurb-incorrect">
          <img
            src={planeImage}
            className="example-blurb-image"
            alt="Airplane flying through sky"
          />
          <p id="example-blurb-heading-incorrect">Fly More, Save More</p>
          <p id="example-blurb-text-incorrect">
            Join the frequent flyer program and enjoy exclusive discounts, free
            upgrades, and more benefits every time you fly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReadableTextExample;
