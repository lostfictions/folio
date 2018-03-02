import React, { Component } from "react";

import faf from "./faf-poster-2017.png";

class Posters extends Component {
  render() {
    return (
      <div>
        <h2>
          <span className="title-both">Food Against Fascism</span>
          <span className="title-bold"> poster,</span> 2017
        </h2>
        <h3 className="title-desc">Digital print</h3>
        <h3 className="title-desc title-desc-last">11" x 17"</h3>
        <img className="image-fit" src={faf} />
        <div>Poster design for a local non-profit community project.</div>
      </div>
    );
  }
}

export default Posters;
