import React, { Component } from "react";

import satosphere from "./satosphere.jpg";

class PL90 extends Component {
  render() {
    return (
      <div>
        <h2>PL@90</h2>
        <img className="image-fit" src={satosphere} />
      </div>
    );
  }
}

export default PL90;
