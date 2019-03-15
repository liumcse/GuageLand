import React from "react";

export default props => (
  <div className="container">
    {props.children}
    <style jsx>{`
      .container {
        color: grey;
        background-color: #5cadff;
        min-height: 100vh;
      }
    `}</style>
  </div>
);
