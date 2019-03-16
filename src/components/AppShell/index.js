import React from "react";
import Toolbar from "@components/Toolbar";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faCheckSquare,
  faCoffee,
  faSearch,
  faPiggyBank,
  faHome,
  faCog,
  faGlobeAsia
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faCheckSquare,
  faCoffee,
  faSearch,
  faPiggyBank,
  faHome,
  faCog,
  faGlobeAsia
);

export default props => (
  <div className="container">
    {props.children}
    <Toolbar />
    <style jsx>{`
      .container {
        color: grey;
        background-color:rgba(137,187,187,0.8);
        min-height: 100vh;
      }
    `}</style>
  </div>
);
