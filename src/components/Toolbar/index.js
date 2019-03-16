import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// eslint-disable-next-line no-unused-vars
const Toolbar = props => (
  <div className="container">
    <div className="small">
      <div className="icon-wrapper">
        <FontAwesomeIcon icon="search" size="2x" />
      </div>
      <div className="icon-wrapper">
        <FontAwesomeIcon icon="piggy-bank" size="2x" />
      </div>
    </div>
    <div className="big">
      <div className="icon-wrapper">
        <FontAwesomeIcon icon="globe-asia" size="3x" />
      </div>
    </div>
    <div className="small">
      <div className="icon-wrapper">
        <FontAwesomeIcon icon="home" size="2x" />
      </div>
      <div className="icon-wrapper">
        <FontAwesomeIcon icon="cog" size="2x" />
      </div>
    </div>
    <style jsx>{`
      .container {
        width: 100%;
        height: 3.5rem;
        background-color: white;
        position: fixed;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: space-around;
      }
      .small {
        display: flex;
        justify-content: space-around;
        width: 100%;
      }
      .big {
        margin-bottom: 1rem;
        background-color: white;
        color: black;
        border-radius: 100rem;
        padding: 18px;
      }
      .big > .icon-wrapper {
        padding: 0;
      }
      .icon-wrapper {
        padding: 0 1rem;
      }
    `}</style>
  </div>
);

export default Toolbar;
