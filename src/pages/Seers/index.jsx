import React, { Component } from "react";

import Gallery from "../Gallery";

import splash from "./splash.jpg";
import inmag from "./inmag.jpg";
import muskox from "./muskox.jpg";
import page from "./page.jpg";

const images = [
  { src: inmag, big: true },
  { src: splash },
  { src: muskox },
  { src: page }
];

class Seers extends Component {
  render() {
    return (
      <div>
        <h2>
          <span className="em b">The Seers Catalogue,</span> 2016
        </h2>
        <h3 className="title-desc title-desc-last">
          Twine, HTML5 Canvas, JavaScript
        </h3>
        <Gallery images={images} />
        <a
          href="http://seerscatalogue.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          View the work online.
        </a>
      </div>
    );
  }
}

export default Seers;
