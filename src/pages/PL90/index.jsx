import React, { Component } from "react";

import satosphere from "./satosphere.jpg";

class PL90 extends Component {
  render() {
    return (
      <div>
        <h2>
          <span className="em b">PL@90</span>
          <span className="b"> retrospective archive,</span> 2012 - 2015
        </h2>
        <h3 className="title-desc title-desc-last">Unity</h3>
        <img className="image-fit" src={satosphere} />
        <p>
          An explorable archive created for a private event held for Phyllis
          Lambert on the occasion of her 90th birthday, honouring her numerous
          contributions to architecture and conservation efforts in Canada and
          internationally. Commissioned by the CCA and developed with the
          direction of the SAT and in collaboration with CCA archivists. A kind
          of “VR CMS” for creating and exploring fluid, reconfigurable
          multimedia archives in real-time 3D, it includes tools to empower
          curators to build collections and guided experiences without any
          programmer assistance.
        </p>
        <p>
          Exhibited in the{" "}
          <a href="http://sat.qc.ca/en/satosphere">Satosphere</a>, and
          subsequently in VR.
        </p>
        <br />
        <br />
        <h4>(use password &quot;folio&quot; below.)</h4>
        <iframe
          src="https://player.vimeo.com/video/258210062?title=0&byline=0&portrait=0"
          width={720}
          height={405}
          frameBorder={0}
          allowFullScreen
        />
      </div>
    );
  }
}

export default PL90;
