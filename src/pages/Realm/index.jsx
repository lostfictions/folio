import React, { Component } from "react";

class Realm extends Component {
  render() {
    return (
      <div>
        <h2>
          <span className="em b">untitled (realm),</span> 2011
        </h2>
        <h3 className="title-desc title-desc-last">
          Unity, digital video capture
        </h3>
        <iframe
          src="https://player.vimeo.com/video/30044845?title=0&byline=0&portrait=0"
          width={720}
          height={405}
          frameBorder={0}
          allowFullScreen
        />
        <div>Some modeling work by G.P. Lackey. Music by Anoraak.</div>
      </div>
    );
  }
}

export default Realm;
