import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TopBar = props => {
  return (
    <div className="container">
      <div className="back-icon">
        <Link to="/">
          <FontAwesomeIcon icon="caret-square-left" size="2x" />
        </Link>
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            height: 2rem;
            background-color: transparent;
            position: fixed;
            top: 0;
            display: flex;
            align-items: left;
            justify-content: space-around;
          }

          .back-icon {
            display: left;
            justify-content: space-around;
            width: 100%;
            height: 100%;
            align-items: left;
          }
        `}
      </style>
    </div>
  )
}

export default TopBar;