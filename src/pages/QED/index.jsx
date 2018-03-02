import React, { Component } from "react";

import Gallery from "../Gallery";

import chargen from "./chargen.jpg";
import facabs from "./fa2013cabs-crop.jpg";
import logo from "./logo1.jpg";

const images = [chargen, logo, facabs];

class QED extends Component {
  render() {
    return (
      <div>
        <h2>QED</h2>
        <Gallery images={images} />
      </div>
    );
  }
}

export default QED;
