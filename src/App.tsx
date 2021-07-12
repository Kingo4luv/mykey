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
        </Switch>
    </Router>
  );
}

export default App;
