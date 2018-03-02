import React, { Component } from "react";

import Gallery from "../Gallery";

import admiralsclub from "./admiralsclub.png";
import spaceteam from "./spaceteam.png";

const images = [
  { src: spaceteam, big: true },
  { src: admiralsclub, big: true }
];

class Spaceteam extends Component {
  render() {
    return (
      <div>
        <h2>
          <span className="em b">Spaceteam</span>
          <span className="b"> websites,</span> 2016
        </h2>
        <h3 className="title-desc title-desc-last">
          Twine, HTML5 Canvas, JavaScript
        </h3>
        <Gallery images={images} />
      </div>
    );
  }
}

export default Spaceteam;
