import React from "react";
import ReactDOM from "react-dom";
import AppShell from "@components/AppShell";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "@routes";

// Import routes
import PageHome from "@routes/PageHome";
import PageLogin from "@routes/PageLogin";
import PageAI from "@routes/PageAI";
import PageDiscovery from "@routes/PageDiscovery";
import PageHouse from "@routes/PageHouse";
import PageProfile from "@routes/PageProfile";
import PageSearch from "@routes/PageSearch";

// Import global style
import "src/styles/app.scss";
import "src/styles/normalize.scss";

const App = () => (
  <AppShell>
    <Router>
      <Switch>
        <Route exact path={ROUTES.ROUTE_HOME} component={PageHome} />
        <Route exact path={ROUTES.ROUTE_LOGIN} component={PageLogin} />
        <Route exact path={ROUTES.ROUTE_AI} component={PageAI} />
        <Route exact path={ROUTES.ROUTE_DISCOVERY} component={PageDiscovery} />
        <Route exact path={ROUTES.ROUTE_HOUSE} component={PageHouse} />
        <Route exact path={ROUTES.ROUTE_PROFILE} component={PageProfile} />
        <Route exact path={ROUTES.ROUTE_SEARCH} component={PageSearch} />
        {/* Add more routes here */}
      </Switch>
    </Router>
  </AppShell>
);

ReactDOM.render(<App />, document.getElementById("app"));
