import React, { Component } from "react";

import Gallery from "../Gallery";

import splash from "./splash.jpg";
import inmag from "./inmag.jpg";
import muskox from "./muskox.jpg";
import page from "./page.jpg";

const images = [splash, inmag, muskox, page];

class Seers extends Component {
  render() {
    return (
      <div>
        <h2>The Seers Catalogue</h2>
        <Gallery images={images} />
      </div>
    );
  }
}

export default Seers;
