import React, { Component } from "react";
import { Link } from "react-router-dom";

import Gallery from "../Gallery";

import car from "./car.jpg";
import garb from "./garb.jpg";
import bow from "./bow.jpg";
import pider from "./pider.jpg";
import trout from "./trout.jpg";
import hero from "./hero.jpg";
import trust from "./trust.jpg";

const images = [
  { src: car, big: true, pos: "bottom" },
  { src: hero, big: true, pos: "bottom" },
  { src: trout, big: true, pos: "bottom" },
  { src: garb, pos: "bottom" },
  { src: pider, pos: "bottom" },
  { src: trust, pos: "bottom" },
  { src: bow, pos: "bottom" }
];

class Bots extends Component {
  render() {
    return (
      <div>
        <h2>
          <span className="em b">Heathbot,</span> 2016 – 2017
        </h2>
        <h3 className="title-desc title-desc-last">Node.js, Twitter</h3>
        <Gallery images={images} />
        <p>
          A few years ago some friends introduced me to an inane, inoffensive,
          strangely charming single-panel syndicated newpaper comic named
          Heathcliff. I was struck by its formal consistency – almost every gag
          is based on a single speaker in the frame commenting on the action
          with a quip of a few words.
        </p>
        <p>
          It seemed ripe for proceduralizing, so I created this janky remixer in
          a few hours in November 2016. It picks a comic at random from the
          back-catalogue of strips, slices it a few pixels above the bottom of
          the image, and pastes it on top of another random comic. There’s
          usually a weird seam because of the indiscriminate paste job, but it’s
          maybe a testament to how formulaic (or nonsensical) Heathcliff is that
          these remixed versions often pass for the real thing at a quick
          glance.
        </p>
        <p>
          Like{" "}
          <Link className="em b" to="/catbot">
            Catbot
          </Link>, this began life as a module for my chatbot{" "}
          <Link className="em b" to="/bort">
            Bort
          </Link>. I’ve found that implementing prototypes as chatbot modules is
          a nice way to get immediate feedback from folks (and to avoid having
          to perform long setup rituals or confront strange API issues as I
          often do with Twitter bots.) In 2017 I split it off as a standalone
          Twitter bot.
        </p>
        <div>
          <a
            href="https://twitter.com/its_heathcliff"
            target="_blank"
            rel="noopener noreferrer"
          >
            View the bot online.
          </a>
        </div>
        <div>
          <a
            href="https://github.com/lostfictions/heathbot"
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
