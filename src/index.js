import React from "react";
import ReactDOM from "react-dom";
import AppShell from "@components/AppShell";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "@routes";

// Import routes
import PageHome from "@routes/PageHome";
import PageDiscovery from "@routes/PageDiscovery";

// Import global style
import "src/styles/app.scss";
import "src/styles/normalize.scss";

const App = () => (
  <AppShell>
    <Router>
      <Switch>
        <Route exact path={ROUTES.ROUTE_HOME} component={PageHome} />
        <Route exact path={ROUTES.ROUTE_DISCOVERY} component={PageDiscovery} />
        {/* Add more routes here */}
      </Switch>
    </Router>
  </AppShell>
);

ReactDOM.render(<App />, document.getElementById("app"));
