import React, { Component } from "react";

import Gallery from "../Gallery";

import gang0 from "./gangbot-0.jpg";
import gang1 from "./gangbot-1.jpg";
import gang2 from "./gangbot-2.jpg";

//prettier-ignore
const images = [
  { src: gang0, big: true },
  { src: gang1 },
  { src: gang2 }
];

class Bots extends Component {
  render() {
    return (
      <div>
        <h2>
          <span className="em b">Gangbot,</span> 2016
        </h2>
        <h3 className="title-desc title-desc-last">HTML5, JavaScript</h3>
        <Gallery images={images} />
        <a
          href="https://lostfictions.github.io/gangnams/"
          target="_blank"
          rel="noopener noreferrer"
        >
          View the generator online.
        </a>
      </div>
    );
  }
}

export default Bots;
