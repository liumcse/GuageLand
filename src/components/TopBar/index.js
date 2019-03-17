import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TopBar = props => {
  const goBack = () => {
    props.history.goBack();
  };
  return (
    <div className="container">
      <div className="back-icon">
        <span onClick={goBack}>
          <FontAwesomeIcon icon="chevron-left" size="2x" />
        </span>
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            height: 2rem;
            z-index: 10000;
            background-color: transparent;
            position: fixed;
            top: 0;
            display: flex;
            align-items: left;
            justify-content: space-around;
          }

          .back-icon {
            display: left;
            z-index: 10000;
            justify-content: space-around;
            width: 100%;
            height: 100%;
            color: white;
            padding: 0.75rem;
            align-items: left;
          }
        `}
      </style>
    </div>
  );
};

export default withRouter(TopBar);
