import React, { Component } from "react";

import Gallery from "../Gallery";

import faf from "./faf-poster-2017.png";
import poa from "./poa-poster-2012.png";

const images = [faf, poa];

class Posters extends Component {
  render() {
    return (
      <div>
        <h2>Posters</h2>
        <Gallery images={images} />
      </div>
    );
  }
}

export default Posters;
