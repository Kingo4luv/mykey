import React, { ReactNode, useReducer } from "react";
import combineReducers from "react-combine-reducers";
import AuthReducer from "../../Reducers/AuthReducer";
import OrganizationReducer from "../../Reducers/OrganizationReducer";
import { Context } from "./Context";
import { initialState } from "./initialState";

interface Props{
  children:ReactNode
}
export const Provider:React.FC<Props> = ({ children }) => {
  const [rootReducerCombined, initialStateCombined] = combineReducers({
    Auth: [AuthReducer, initialState.Auth],
    Organization:[OrganizationReducer, initialState.Organization]
  });

  const [state, dispatch] = useReducer(
    rootReducerCombined,
    initialStateCombined
  );
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};