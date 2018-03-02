import React, { Component } from "react";
import { Link } from "react-router-dom";

import Gallery from "../Gallery";

import port0 from "./port0.png";
import port2 from "./port2.png";

// prettier-ignore
const images = [
  { src: port0, big: true },
  { src: port2, big:true }
];

class Bots extends Component {
  render() {
    return (
      <div>
        <h2>
          <span className="b">Visual editor studies,</span> 2015 - 2016
        </h2>
        <h3 className="title-desc title-desc-last">HTML, JavaScript, Unity</h3>
        <Gallery images={images} />
        <p>
          Various editor studies and experiments developed in 2015 and 2016
          either experimentally or as part of contract or other professional
          work.
        </p>
        <p>
          The source code for the Portrait editor (developed as an assistive
          tool while under contract with the SAT) is{" "}
          <a href="https://github.com/lostfictions/dialogue-editor">
            available
          </a>{" "}
          but idiosyncratic to the specific needs expressed during its
          development.
        </p>
      </div>
    );
  }
}

export default Bots;
