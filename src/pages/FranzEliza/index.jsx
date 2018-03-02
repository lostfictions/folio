import React, { Component } from "react";

import Gallery from "../Gallery";

import cover from "./cover.png";
import extra from "./extra.png";

const images = [{ src: cover, big: true }, { src: extra, big: true }];

class Bots extends Component {
  render() {
    return (
      <div>
        <h2>
          <span className="em b">Franz &amp; Eliza,</span> 2016
        </h2>
        <h3 className="title-desc title-desc-last">HTML, CSS, JavaScript</h3>
        <Gallery images={images} />
        <p>
          An adaptation of Georg Büchner‘s unfinished stage play{" "}
          <a href="https://en.wikipedia.org/wiki/Woyzeck">Woyzeck</a> for the
          TAG/ZU-UK DRIFT workshop in June 2016. Riffing on the play’s themes of
          medical ethics and the working class, I processed the script into a
          machine-readable format and inserted a new character –{" "}
          <a href="https://en.wikipedia.org/wiki/ELIZA">ELIZA</a>, a computer
          program with a complex legacy (itself named after a character from
          George Bernard Shaw’s Pygmalion). ELIZA responds to Woyzeck, poking
          and prodding at his motives and acting as his personal therapist. Will
          ELIZA’s interventions change the reading of the text? Disrupt the
          performance? Alter the outcome of the narrative?
        </p>
        <p>
          Franz &amp; Eliza can be performed as a regular (albeit
          proceduralized) stage play, an autonomous installation where all parts
          are read via voice synthesis, or anything in between.
        </p>
        <div>
          <a
            href="http://lostfictions.github.io/franz-and-eliza"
            target="_blank"
            rel="noopener noreferrer"
          >
            View the work online.
          </a>{" "}
          (Voice synthesis may only work in Chrome or Firefox.)
        </div>
        <div>
          <a
            href="https://github.com/lostfictions/franz-and-eliza"
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

export default Bots;
