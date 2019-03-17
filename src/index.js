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
import PageArticle from "@routes/PageArticle";
import PageQuiz from "@routes/PageQuiz";
import PageLanguage from "./routes/PageLanguage";
import PageTasks from "@routes/PageTasks";
import PageQuizDone from "@routes/PageQuizDone";
import PageOrganization from "@routes/PageOrganization";

// PWA
import * as serviceWorker from "./public/serviceWorker";

import "src/styles/normalize.css";
import "react-image-gallery/styles/css/image-gallery.css";

const App = () => (
  <Router>
    <AppShell>
      <Switch>
        <Route exact path={ROUTES.ROUTE_LOGIN} component={PageLogin} />
        <Route exact path={ROUTES.ROUTE_CHAT} component={PageChat} />
        <Route exact path={ROUTES.ROUTE_DISCOVERY} component={PageDiscovery} />
        <Route exact path={ROUTES.ROUTE_HOUSE} component={PageHouse} />
        <Route exact path={ROUTES.ROUTE_PROFILE} component={PageProfile} />
        <Route exact path={ROUTES.ROUTE_TASKS} component={PageTasks} />
        <Route
          exact
          path={ROUTES.ROUTE_ORGANIZATION}
          component={PageOrganization}
        />
        <Route exact path={ROUTES.ROUTE_FINDINGS} component={PageFindings} />
        <Route exact path={ROUTES.ROUTE_ARTICLE} component={PageArticle} />
        <Route exact path={ROUTES.ROUTE_QUIZ} component={PageQuiz} />
        <Route exact path={ROUTES.ROUTE_LANGUAGE} component={PageLanguage} />
        <Route exact path={ROUTES.ROUTE_QUIZ_DONE} component={PageQuizDone} />
        <Route path={ROUTES.ROUTE_HOME} component={PageHome} />
        {/* Add more routes here */}
      </Switch>
      <style jsx global>
        {`
          :root {
            font-size: 16px;
            color: black;
            font-family: "Open Sans", sans-serif;
            background-color: #60afffff;
          }
          a {
            text-decoration: none;
            display: inline;
            color: inherit;
          }
          .image-gallery-slides {
            height: 12rem;
          }
          .image-gallery {
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
              0 6px 20px 0 rgba(0, 0, 0, 0.19);
          }
          .card {
            width: 90%;
            margin-top: 1rem;
            margin-left: 1rem;
          }
          .MuiFab-root-30.MuiFab-disabled-36,
          #reward-tag {
            color: black;
            background-color: rgba(255, 255, 255, 1);
          }
          .no-select,
          img {
            -webkit-touch-callout: none; /* iOS Safari */
            -webkit-user-select: none; /* Safari */
            -khtml-user-select: none; /* Konqueror HTML */
            -moz-user-select: none; /* Firefox */
            -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
          }
        `}
      </style>
    </AppShell>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("app"));
serviceWorker.register();
