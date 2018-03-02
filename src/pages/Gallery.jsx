import React, { Component } from "react";
import Lightbox from "react-images";

import "./Gallery.css";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lightboxImage: null
    };
  }

  setLightboxImage(index) {
    this.setState(() => ({
      lightboxImage: index
    }));
  }

  render() {
    const { lightboxImage } = this.state;
    const lightboxActive = lightboxImage !== null;

    // eslint-disable-next-line react/prop-types
    const { images } = this.props;

    return (
      <div className="gallery-container">
        <Lightbox
          images={images.map(i => ({
            src: i
          }))}
          backdropClosesModal
          showThumbnails={true}
          isOpen={lightboxActive}
          currentImage={lightboxImage || 0}
          onClickThumbnail={i => this.setLightboxImage(i)}
          onClickPrev={() => this.setLightboxImage(lightboxImage - 1)}
          onClickNext={() => this.setLightboxImage(lightboxImage + 1)}
          onClose={() => this.setLightboxImage(null)}
        />
        {images.map((img, i) => (
          <a
            key={i}
            className="gallery-image"
            onClick={() => this.setLightboxImage(i)}
          >
            <img className="gallery-image-inner" src={img} alt="" />
          </a>
        ))}
      </div>
    );
  }
}

export default Gallery;
