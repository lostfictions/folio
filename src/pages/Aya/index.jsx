import React, { Component } from "react";

import Gallery from "../Gallery";

import aug from "./aug.png";
import may from "./may.png";
import math from "./math.png";
import mobile from "./mobile.png";

const images = [
  { src: aug, big: true },
  { src: may },
  { src: math },
  { src: mobile }
];

class Seers extends Component {
  render() {
    return (
      <div>
        <h2>
          <span className="em b">Aya,</span> 2017-
        </h2>
        <h3 className="title-desc title-desc-last">
          JavaScript, HTML, Node.js
        </h3>
        <Gallery images={images} />
        <p>
          A work-in-progress VJ/DJ tool and visual creative environment,
          initially prototyped between April and July of 2017. Oriented towards
          immediate gratification and low barriers to entry – there’s a
          web-based version to allow users to quickly jump in and start
          experimenting, and audio and video can be streamed in from YouTube or
          a microphone, etc. (it even works on phones!)
        </p>
        <p>
          Browser tech is pretty amazing to me. It’s easy to forget that what we
          use to read Facebook or check email can also serve as a synthesizer, a
          3D renderer, a MIDI interface – and offers lots of other rich
          affordances besides. I’ve been thinking a lot about how so many folks
          are carrying this kit of creative tools in their pocket, and how it
          would just take a bit of plumbing to make those tools much more
          accessible and pliable. Since there are many future directions this
          project could take me, it’s at times been helpful for me to think of
          it in this way while prototyping – as just a bit of plumbing to make
          low-hanging affordances a little bit easier to reach.
        </p>
        <p>
          The project is currently on hiatus – I’m trying to find a way to keep
          working on it sustainably.
        </p>
      </div>
    );
  }
}

export default Seers;
