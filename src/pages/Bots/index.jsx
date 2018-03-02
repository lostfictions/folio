import React, { Component } from "react";

import Gallery from "../Gallery";

import gang0 from "./gangbot-0.jpg";
import gang1 from "./gangbot-1.jpg";
import gang2 from "./gangbot-2.jpg";

const images = [gang0, gang1, gang2];

const heathDesc = `
last year some friends got me into heathcliff, the inane, inoffensive,
dad-jokey, strangely charming single-panel syndicated newpaper comic. i was
pretty struck by its formal consistency – almost every gag is based on a single
speaker in the frame commenting on the action with a quip of a line or two.

it seemed ripe for proceduralizing, so i knocked out a janky remixer in a few
hours in november 2016. all it does is pick a comic from the archive at random,
slice it a few pixels above the bottom of the image, and paste it on top of
another random comic. there’s usually a weird seam because of the indiscriminate
paste job, but it’s maybe a testament to how formulaic (or nonsensical)
heathcliff is that some folks who saw the remixed versions didn’t notice much of
a difference at first between them and the original comics.
`;

class Bots extends Component {
  render() {
    return (
      <div>
        <Gallery images={images} />
      </div>
    );
  }
}

export default Bots;
