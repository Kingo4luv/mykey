import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import GetAccess from "../pages/GetAccess";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import Verify from "../pages/auth/Verify";
import AccountType from "../pages/account-selection";
import Account from "../pages/account-selection/account";
import Verification from "../pages/dashboard/verification";
import Integration from "../pages/dashboard/integration";
import Activation from "../pages/dashboard/activation";
import ApiLogs from "../pages/dashboard/developers/apilogs";
import Webhooks from "../pages/dashboard/developers/webhooks";
import Events from "../pages/dashboard/developers/events";
import PrivateRoute from "./PrivateRoute";
import { isLoggedIn } from "../utils/helper";
import Overview from "../pages/dashboard/overview";
import Settings from "../pages/dashboard/settings";
import IdentityVerification from "../pages/business/identity-verification";
import DigitalIdentity from "../pages/business/digital-identity";
import PasswordFreeLogin from "../pages/business/password-free-login";
import MyIdentiKey from "../pages/individual/MyIdentiKey";
import Usecases from "../pages/Usecases";

const Navigator = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/business/identity-verification">
            <IdentityVerification />
          </Route>
          <Route exact path="/business/digital-identity">
            <DigitalIdentity />
          </Route>
          <Route exact path="/business/password-free-login">
            <PasswordFreeLogin />
          </Route>
          <Route exact path="/individual/what-is-myidentikey">
            <MyIdentiKey />
          </Route>
          <Route exact path="/usecases">
            <Usecases />
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

          <PrivateRoute
            path="/verify"
            component={Verify}
            isAuthenticated={isLoggedIn()}
          />

          <PrivateRoute
            exact
            path="/account-type"
            component={AccountType}
            isAuthenticated={isLoggedIn()}
          />

          <PrivateRoute
            exact
            path="/account-type/:type"
            component={Account}
            isAuthenticated={isLoggedIn()}
          />

          <PrivateRoute
            exact
            path="/verification"
            component={Verification}
            isAuthenticated={isLoggedIn()}
          />

          <PrivateRoute
            exact
            path="/overview"
            component={Overview}
            isAuthenticated={isLoggedIn()}
          />

          <PrivateRoute
            exact
            path="/integration/:screen"
            component={Integration}
            isAuthenticated={isLoggedIn()}
          />

          <PrivateRoute
            exact
            path="/activation/:screen"
            component={Activation}
            isAuthenticated={isLoggedIn()}
          />

          <PrivateRoute
            exact
            path="/developers/api-logs"
            component={ApiLogs}
            isAuthenticated={isLoggedIn()}
          />

          <PrivateRoute
            exact
            path="/developers/webhooks"
            component={Webhooks}
            isAuthenticated={isLoggedIn()}
          />

          <PrivateRoute
            exact
            path="/developers/events"
            component={Events}
            isAuthenticated={isLoggedIn()}
          />
          <PrivateRoute
            exact
            path="/settings/:screen"
            component={Settings}
            isAuthenticated={isLoggedIn()}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default Navigator;
