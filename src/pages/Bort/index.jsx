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
        <p>
          A multifaceted, playful chatbot for online communities, under
          continuous development.
        </p>
        <p>
          Its modular design includes various utilities, a few jokes, and pretty
          extensive faculties for procedural generation and even storytelling
          (originally based on my{" "}
          <a href="https://gist.github.com/lostfictions/607ab2eccef8385270d3393eb328e246">
            minimal reimplementation
          </a>{" "}
          of Kate Compton&apos;s excellent{" "}
          <a href="http://www.crystalcodepalace.com/tracery.html">Tracery</a>{" "}
          library, and later further expanded.)
        </p>
        <iframe
          src="https://doam.keybase.pub/"
          className="image-fit"
          height={500}
          frameBorder={0}
        />
        <p>
          (Above: noninteractive visualization, intended for eventual use as the
          backdrop of the user-facing supplemental chatbot GUI.)
        </p>
        {/* <Gallery images={[]} /> */}
        <div>
          <a
            href="https://github.com/lostfictions/bort"
            target="_blank"
            rel="noopener noreferrer"
          >
            View the source code.
          </a>
        </div>
      </div>
    );
  }
}

export default Bort;
