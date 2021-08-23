import React from "react";
import { IActionUtil } from "../utils/AsyncUtils";

export const dispatchError = (
  dispatch: React.Dispatch<any>,
  fn: (action: string) => IActionUtil,
  error: any,
  status: number,
  actionType: string
) => {
  if (status >= 500) {
    dispatch(fn(actionType).loading(false));
    return dispatch(fn(actionType).failure(true, "Service unavailable"));
  } else {
    const { message, errors } = error.response.data;
    if (errors && Object.keys(errors).length > 0) {
      const errs: string[] = [];
      const keys = Object.keys(errors);
      keys.forEach((key) => {
        errs.push(errors[key][0]);
      });
      dispatch(fn(actionType).failure(true, errs));
    } else {
      dispatch(fn(actionType).failure(true, message));
    }
  }
  dispatch(fn(actionType).loading(false));
};

export const statelessErrorHandler=(onError:(err:string|string[])=>void, e:any)=>{
  if(onError){
    const status= e.response.status;
    if(status >= 500){
      return onError("Internal server error")
    }
    const { message, errors } = e.response.data;
    if (errors && Object.keys(errors).length > 0) {
      const errs: string[] = [];
      const keys = Object.keys(errors);
      keys.forEach((key) => {
        errs.push(errors[key][0]);
      });
      return onError(errs);
    }
    return onError(message);
  }
}
