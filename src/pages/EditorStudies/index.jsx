import React, { Component } from "react";
import { Link } from "react-router-dom";

import Gallery from "../Gallery";

import long from "./long.png";
import spaghet from "./spaghet.png";
import tang from "./tang.png";
import twitcat from "./twitcat.png";
import twitcat2 from "./twitcat2.png";

const images = [
  { src: tang, big: true },
  { src: twitcat },
  { src: spaghet },
  { src: twitcat2 },
  { src: long }
];

class Bots extends Component {
  render() {
    return (
      <div>
        <h2>
          <span className="b">Visual editor studies,</span> 2015 - 2016
        </h2>
        <h3 className="title-desc title-desc-last">HTML, JavaScript, Unity</h3>
        <Gallery images={images} />
        <p>
          Created in November 2017 as a module for my chatbot{" "}
          <Link className="em b" to="/bort">
            Bort
          </Link>{" "}
          – it originally built the cats out of a grid of custom emoji (with
          “palettes” customizable by any user in the chatroom.) A port to
          Twitter and Mastodon port was done the following month and instead
          creates images out of sprites.
        </p>
        <div>
          <a
            href="https://twitter.com/cool_cats"
            target="_blank"
            rel="noopener noreferrer"
          >
            View the bot online.
          </a>
        </div>
        <div>
          <a
            href="https://github.com/lostfictions/catbot"
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
