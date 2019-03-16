import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// eslint-disable-next-line no-unused-vars
const InputBar = props => {
  return (
    <div className="container">
      <div className="icon-wrapper">
        <FontAwesomeIcon icon="microphone" size="2x" />
      </div>
      <div className="input-wrapper">
        <input className="input" type="text" />
      </div>
      <div className="icon-wrapper">
        <FontAwesomeIcon icon="paper-plane" size="2x" />
      </div>
      <style jsx>{`
        .container {
          width: 100%;
          height: 3.5rem;
          background-color: #edefea;
          position: fixed;
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: space-around;
        }
        .icon-wrapper {
          padding: 0 1rem;
        }
        .input-wrapper {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
        }
        .input {
          width: 100%;
          height: 1.75rem;
          border-radius: 2px;
          border: 0;
          padding: 0.5rem;
          outline: none;
        }
      `}</style>
    </div>
  );
};

export default InputBar;
