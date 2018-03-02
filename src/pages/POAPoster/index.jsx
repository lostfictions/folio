import React, { Component } from "react";

import poa from "./poa-poster-2012.png";

class Posters extends Component {
  render() {
    return (
      <div>
        <h2>
          <span className="em b">Prince of Arcade</span>
          <span className="b"> poster,</span> 2012
        </h2>
        <h3 className="title-desc">Digital print</h3>
        <h3 className="title-desc title-desc-last">11&quot; x 17&quot;</h3>
        <img className="image-fit" src={poa} />
        <div>
          An alternate poster design for the Prince of Arcade games event in
          November 2012. G.P. Lackey provided some models in the render.
        </div>
      </div>
    );
  }
}

export default Posters;
