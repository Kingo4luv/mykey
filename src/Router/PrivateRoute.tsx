import { Route, Redirect, RouteProps } from "react-router-dom";
import { getTokenInfo, isLoggedIn } from "../utils/helper";

export type ProtectedRouteProps = {
  isAuthenticated?: boolean;
  authenticationPath?: string;
} & RouteProps;

const PrivateRoute=({isAuthenticated, authenticationPath, ...routeProps}: ProtectedRouteProps)=> {
    const token = getTokenInfo()
  if(isLoggedIn(token)) {
    return <Route {...routeProps} />;
  } else {
    return <Redirect to={{ pathname: authenticationPath?authenticationPath :"/" }} />;
  }
};

export default PrivateRoute;
