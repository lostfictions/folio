import React, { Component } from "react";

import Gallery from "../Gallery";

// import gang0 from "./gangbot-0.jpg";
// import gang1 from "./gangbot-1.jpg";
// import gang2 from "./gangbot-2.jpg";

// const images = [gang0, gang1, gang2];

class Bort extends Component {
  render() {
    return (
      <div>
        <h2>
          <span className="em b">Bort,</span> 2016 –
        </h2>
        <h3 className="title-desc title-desc-last">
          Node.js, Discord, Slack, Electron
        </h3>
        <iframe
          src="https://doam.keybase.pub/"
          width={720}
          height={720}
          frameBorder={0}
        />
        <Gallery images={[]} />
      </div>
    );
  }
}

export default Bort;
