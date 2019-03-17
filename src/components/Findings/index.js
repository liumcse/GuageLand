import React from "react";
import ImageGallery from 'react-image-gallery';
import {images} from "@common/assets/images";

const Findings = props => (
  <div>
    <ImageGallery 
      items={images}
      showBullets
      showFullscreenButton={false}
      showPlayButton={false}
      showThumbnails={false}
      showNav
      autoPlay
    />
    <style jsx>{`
    
    `}</style>
  </div>
);

export default Findings;