import React, { Component } from "react";
import { Link } from "react-router-dom";

import Gallery from "../Gallery";

import port0 from "./port0.png";
import port2 from "./port2.png";

import skein from "./Kigte64.gif";

// prettier-ignore
const images = [
  { src: port0, big: true },
  { src: port2, big:true }
];

class Bots extends Component {
  render() {
    return (
      <div>
        <h2>
          <span className="b">Visual editor studies,</span> 2015 - 2016
        </h2>
        <h3 className="title-desc title-desc-last">HTML, JavaScript, Unity</h3>
        <p>
          Various editor studies and experiments developed in 2015 and 2016
          either experimentally or as part of contract or other professional
          work.
        </p>
        <img className="image-fit" src={skein} />
        <p>
          Skein for Unity (above) was a personal project; I experimented with
          using it during the development of{" "}
          <Link to="/seers">The Seers Catalogue</Link> but was worried it
          wasn&apos;t mature enough for other folks on the project to use; we
          eventually opted to use Twine 2 instead (a decision we later
          regretted.) It later informed the development of{" "}
          <Link to="/aya">Aya</Link>.
        </p>
        <br />
        <Gallery images={images} />
        <p>
          The Portrait editor was developed as a tool while under contract with
          the SAT; its video-centric workflow allows for easy development of
          multiple-choice dialogue trees, as well as simple captioning of videos
          - all with an intuitive multilingual workflow. The source code is{" "}
          <a href="https://github.com/lostfictions/dialogue-editor">
            available
          </a>{" "}
          but idiosyncratic to the specific needs expressed during its
          development.
        </p>
      </div>
    );
  }
}

export default Bots;
