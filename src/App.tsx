import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home'
import GetAccess from './pages/GetAccess'

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/get-access">
            <GetAccess />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
