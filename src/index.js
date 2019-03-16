import React from "react";
import ReactDOM from "react-dom";
import AppShell from "@components/AppShell";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "@routes";

// Import routes
import PageHome from "@routes/PageHome";
import PageLogin from "@routes/PageLogin";
import PageChat from "@routes/PageChat";
import PageDiscovery from "@routes/PageDiscovery";
import PageHouse from "@routes/PageHouse";
import PageProfile from "@routes/PageProfile";
import PageFindings from "@routes/PageFindings";

import "src/styles/normalize.css";
import "react-image-gallery/styles/css/image-gallery.css";

const App = () => (
  <Router>
    <AppShell>
      <Switch>
        <Route exact path={ROUTES.ROUTE_HOME} component={PageHome} />
        <Route exact path={ROUTES.ROUTE_LOGIN} component={PageLogin} />
        <Route exact path={ROUTES.ROUTE_CHAT} component={PageChat} />
        <Route exact path={ROUTES.ROUTE_DISCOVERY} component={PageDiscovery} />
        <Route exact path={ROUTES.ROUTE_HOUSE} component={PageHouse} />
        <Route exact path={ROUTES.ROUTE_PROFILE} component={PageProfile} />
        <Route exact path={ROUTES.ROUTE_FINDINGS} component={PageFindings} />
        {/* Add more routes here */}
      </Switch>
      <style jsx global>
        {`
          :root {
            font-size: 16px;
            color: black;
            font-family: "Libre Baskerville", serif;
          }
          a {
            text-decoration: none;
            display: inline;
            color: inherit;
          }
          .image-gallery-slides {
          height: 12rem;
        }
        `}
      </style>
    </AppShell>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("app"));
