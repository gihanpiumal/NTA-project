import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { RoutesConstant } from "./assets/constants";
import { Home, Login, ViewAll } from "./pages";

const App = (props) => {
  return (
    <Router>
      <main>
        <Switch>
          <Route path={RoutesConstant.login} exact>
            <Login />
          </Route>
          <Route path={RoutesConstant.viewAll} exact>
            <ViewAll />
          </Route>
          <Route path={RoutesConstant.home} exact>
            <Home />
          </Route>
          <Redirect to={RoutesConstant.home} />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
