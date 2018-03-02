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
    let { images } = this.props;

    if (!Array.isArray(images)) {
      console.warn("no images provided for gallery!");
      return null;
    }
    if (images.length > 0) {
      if (typeof images[0] === "string") {
        images = images.map(src => ({
          src
        }));
      }
    }

    return (
      <div className="gallery-container">
        <Lightbox
          images={images}
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
            className={`gallery-image ${img.big ? "gallery-image-big" : ""}`}
            onClick={() => this.setLightboxImage(i)}
          >
            <img className="gallery-image-inner" src={img.src} alt="" />
          </a>
        ))}
      </div>
    );
  }
}

export default Gallery;
