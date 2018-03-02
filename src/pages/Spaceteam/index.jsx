import React, { Component } from "react";

import Gallery from "../Gallery";

import admiralsclub from "./admiralsclub.png";
import spaceteam from "./spaceteam.png";

const images = [
  { src: spaceteam, big: true },
  { src: admiralsclub, big: true }
];

class Spaceteam extends Component {
  render() {
    return (
      <div>
        <h2>
          <span className="em b">Spaceteam</span>
          <span className="b"> websites,</span> 2016
        </h2>
        <h3 className="title-desc title-desc-last">HTML, CSS, JavaScript</h3>
        <Gallery images={images} />
        <p>
          A pair of responsite websites designed for local game developer Henry
          Smith, who was embarking on a new campaign to try to explore
          sustainable ways of creating free work.
        </p>
        <div>
          <a
            href="http://spaceteam.ca/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View the Spaceteam website.
          </a>
        </div>
        <div>
          <a
            href="http://spaceteamadmirals.club/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View the Spaceteam Admirals Club website.
          </a>
        </div>
        <div>
          (Note that the sites currently live may have changed since my original
          design work.)
        </div>
      </div>
    );
  }
}

export default Spaceteam;
