import React, { Component } from "react";

import Gallery from "../Gallery";

import cover from "./cover.png";
import extra from "./extra.png";

const images = [cover, extra];

class Bots extends Component {
  render() {
    return (
      <div>
        <h2>Franz & Eliza</h2>
        <Gallery images={images} />
      </div>
    );
  }
}

export default Bots;
