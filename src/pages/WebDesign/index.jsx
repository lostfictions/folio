import React, { Component } from "react";

import Gallery from "../Gallery";

import admiralsclub from "./admiralsclub.png";
import spaceteam from "./spaceteam.png";

const images = [spaceteam, admiralsclub];

class WebDesign extends Component {
  render() {
    return (
      <div>
        <h2>Bots and Generative work</h2>
        <Gallery images={images} />
      </div>
    );
  }
}

export default WebDesign;
