import React from "react";
import Toolbar from "@components/Toolbar";
import TopBar from "@components/TopBar";
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
  faPaperPlane,
  faCaretSquareLeft
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
  faPaperPlane,
  faCaretSquareLeft
);

const NO_TOOLBAR_PATH = ["/chat"];
const NO_TOPBAR_PATH = ["/home"];

export default withRouter(props => {
  const {
    location: { pathname }
  } = props;
  return (
    <div className="container">
      <div className="topbar">
        <TopBar />
      </div>
      {props.children}
      <div className="toolbar">
        <Toolbar />
      </div>
      <style jsx>{`
        .topbar{
          display: ${NO_TOPBAR_PATH.includes(pathname) ? "none" : "block"};
        }
        .container {
          color: grey;
          background-color: rgba(137, 187, 187, 0.8);
          min-height: 100vh;
        }
        .toolbar {
          display: ${NO_TOOLBAR_PATH.includes(pathname) ? "none" : "block"};
        }
      `}</style>
    </div>
  );
});
