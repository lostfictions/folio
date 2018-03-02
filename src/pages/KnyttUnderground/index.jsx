import React, { Component } from "react";

import cover from "./cover.png";

class Knytt extends Component {
  render() {
    return (
      <div>
        <h2>Knytt Underground Music</h2>
        <img className="image-fit" src={cover} />
      </div>
    );
  }
}

export default Knytt;
