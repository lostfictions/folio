import React, { Component } from "react";

import satosphere from "./satosphere.jpg";

class PL90 extends Component {
  render() {
    return (
      <div>
        <h2>PL@90</h2>
        <img className="image-fit" src={satosphere} />
        <br />
        <br />
        <h4>(use password &quot;folio&quot; below.)</h4>
        <iframe
          src="https://player.vimeo.com/video/258210062?title=0&byline=0&portrait=0"
          width={720}
          height={405}
          frameBorder={0}
          allowFullScreen
        />
      </div>
    );
  }
}

export default PL90;
