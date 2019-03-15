import React from "react";

export default props => (
  <div className="container">
    {props.children}
    <style jsx>{`
      .container {
        color: grey;
      }
    `}</style>
  </div>
);
