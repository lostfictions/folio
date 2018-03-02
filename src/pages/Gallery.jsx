import React, { Component } from "react";
import Lightbox from "react-images";

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

    const { images } = this.props;

    return (
      <div>
        <Lightbox
          images={images.map(i => ({ src: i }))}
          backdropClosesModal
          showCloseButton={false}
          showThumbnails={true}
          isOpen={lightboxActive}
          currentImage={lightboxImage || 0}
          onClickThumbnail={i => this.setLightboxImage(i)}
          onClickPrev={() => this.setLightboxImage(lightboxImage - 1)}
          onClickNext={() => this.setLightboxImage(lightboxImage + 1)}
          onClose={() => this.setLightboxImage(null)}
        />
        {images.map((img, i) => (
          <a key={i} onClick={() => this.setLightboxImage(i)}>
            <img src={img} />
          </a>
        ))}
      </div>
    );
  }
}

export default Gallery;
