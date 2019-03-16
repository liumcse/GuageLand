import React from "react";
import ImageGallery from 'react-image-gallery';
import {images} from "@common/assets/images";

const Findings = props => (
  <div>
    <ImageGallery classsName="gallery"
      items={images}
      showBullets
      showFullscreenButton={false}
      showPlayButton={false}
      showThumbnails={false}
      showNav
      autoPlay={false}
    />
    <style jsx>{`
      .gallery {
        height: 15rem;
      }

      .image-gallery {
        height: 15rem;
      }
    `}</style>
  </div>
);

export default Findings;