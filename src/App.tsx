import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home'
import GetAccess from './pages/GetAccess'
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Verify from "./pages/auth/Verify";
import AccountType from "./pages/account-selection";
import Account from "./pages/account-selection/account";
import Verification from "./pages/dashboard/verification";
import Integration from "./pages/dashboard/integration";
import Activation from "./pages/dashboard/activation";
import ApiLogs from "./pages/dashboard/developers/apilogs";
import Webhooks from "./pages/dashboard/developers/webhooks";
import Events from "./pages/dashboard/developers/events";


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
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/forgot-password">
            <ForgotPassword />
          </Route>
          <Route path="/verify">
            <Verify />
          </Route>
          <Route exact path="/account-type">
            <AccountType />
          </Route>
          <Route path="/account-type/:type">
            <Account />
          </Route>
          <Route path="/dashboard">
            <Verification />
          </Route>
          <Route path="/integration/:screen">
            <Integration />
          </Route>
          <Route path="/activation/:screen">
            <Activation />
          </Route>
          <Route path="/developers/api-logs">
            <ApiLogs />
          </Route>
          <Route path="/developers/webhooks">
            <Webhooks />
          </Route>
          <Route path="/developers/events">
            <Events />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
