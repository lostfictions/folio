import React, { Component } from "react";

import Gallery from "../Gallery";

import sshot from "./sshot.jpg";
import chargen from "./chargen.jpg";
import facabs from "./fa2013cabs-crop.jpg";
import logo from "./logo1.jpg";

const images = [
  { src: sshot, big: true },
  { src: chargen },
  { src: logo },
  { src: facabs }
];

class QED extends Component {
  render() {
    return (
      <div>
        <h2>
          <span className="em b">QED,</span> 2012 - 2015
        </h2>
        <h3 className="title-desc title-desc-last">Unity</h3>
        <Gallery images={images} />
        <p>
          QED is a game of curiosity, exploration, playful collaboration, and
          emergent comedy. An experiment in raw kinaesthetics, it pulls
          inspiration in equal measure from{" "}
          <em>
            <a href="https://www.youtube.com/watch?v=WM8Br2nV6hg">Skate 3</a>
          </em>,{" "}
          <em>
            <a href="https://www.youtube.com/watch?v=dM5sIBIRDLQ">
              Eric B and Rakim
            </a>
          </em>,{" "}
          <em>
            <a href="https://www.youtube.com/watch?v=vlMhthzbL1I">
              Noby Noby Boy
            </a>
          </em>, and{" "}
          <em>
            <a href="https://www.youtube.com/watch?v=bsaA903oxvc">
              Breakin&apos; 2: Electric Boogaloo
            </a>
          </em>.
        </p>
        <p>
          Showcased at Fantastic Arcade in Austin, TX, Babycastles in Manhattan,
          Videofag and Gamercamp in Toronto, and at several events in Montréal.
        </p>
        <p>Development ceased in early 2016.</p>
      </div>
    );
  }
}

export default QED;
