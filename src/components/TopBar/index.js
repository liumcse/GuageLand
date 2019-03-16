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
            color: black;
            padding: 0.5rem;
            align-items: left;
          }
        `}
      </style>
    </div>
  );
};

export default withRouter(TopBar);
