import React from "react";
import Toolbar from "@components/Toolbar";
import { withRouter } from "react-router";

import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faCheckSquare,
  faCoffee,
  faSearch,
  faPiggyBank,
  faHome,
  faCog,
  faGlobeAsia,
  faMicrophone,
  faPaperPlane
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faCheckSquare,
  faCoffee,
  faSearch,
  faPiggyBank,
  faHome,
  faCog,
  faGlobeAsia,
  faMicrophone,
  faPaperPlane
);

const NO_TOOLBAR_PATH = ["/chat"];

export default withRouter(props => {
  const {
    location: { pathname }
  } = props;
  return (
    <div className="container">
      {props.children}
      <div className="toolbar">
        <Toolbar />
      </div>
      <style jsx>{`
        .container {
          color: grey;
          background-color: #5cadff;
          min-height: 100vh;
        }
        .toolbar {
          display: ${NO_TOOLBAR_PATH.includes(pathname) ? "none" : "block"};
        }
      `}</style>
    </div>
  );
});
