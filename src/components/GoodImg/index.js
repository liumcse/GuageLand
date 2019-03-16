import React from "react";
import PropTypes from "prop-types";

const GoodImg = props => (
  <div className="container">
    <img className="img" src={props.src} style={{ ...props.style }} />
    <style jsx>{`
      .container {
        display: inline;
      }
      .img {
        width: ${props.width ? props.width : "auto"};
        height: ${props.height ? props.width : "auto"};
      }
    `}</style>
  </div>
);

GoodImg.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};

export default GoodImg;
