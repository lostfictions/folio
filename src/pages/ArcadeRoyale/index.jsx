import React, { Component } from "react";

import Gallery from "../Gallery";

import a1 from "./a1.jpg";
import a2 from "./a2.jpg";
import a3 from "./a3.jpg";
import a4 from "./a4.jpg";

const images = [
  { src: a1, big: true },
  { src: a2, big: true },
  { src: a3, big: true },
  { src: a4, big: true }
];

class Seers extends Component {
  render() {
    return (
      <div>
        <h2>
          <span className="em b">Arcade Royale,</span> 2012 - 2015
        </h2>
        <h3 className="title-desc title-desc-last">
          Wooden arcade cabinet, LCD television, Arduino, iPAC controller,
          JavaScript
        </h3>
        <Gallery images={images} />
      </div>
    );
  }
}

export default Seers;
