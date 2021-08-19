import React from "react";
import { FORGOT_PASSWORD, LOGIN, REGISTER, RESET_PASSWORD, VERIFY_ACCOUNT } from "../actions";
import { TOKEN_KEY } from "../constants";
import { asyncActions } from "../utils/AsyncUtils";
import { IFormValues } from "../utils/interfaces";
import * as AUTHAPI from "./Apis/authAPI";
import { api } from "../utils/axios";
import { getTokenInfo } from "../utils/helper";
import { dispatchError } from "./dispatchError";

export const persistToken = (
  token: string,
  user: Record<string, any>
): Promise<unknown> => {
  return new Promise((resolve) =>
    resolve(localStorage.setItem(TOKEN_KEY, JSON.stringify({ token, user })))
  );
};

export const setTokenAuth = (token: string) => {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const login = async (
  dispatch: React.Dispatch<any>,
  payload: IFormValues,
  cb: (data: Record<string, any>) => void
) => {
  dispatch(asyncActions(LOGIN).loading(true));
  dispatch(asyncActions(LOGIN).failure(false, null));
  try {
    const { data } = await AUTHAPI.login(payload);
    const { token, user } = data;
    setTokenAuth(token);
    await persistToken(token, user);
    setTimeout(()=>{
        dispatch(asyncActions(LOGIN).loading(false));
        cb(user)
    },3000);
    dispatch(asyncActions(LOGIN).success(user));
  } catch (e) {
    if (e && e.response) {
      dispatchError(dispatch, asyncActions, e, e.status, LOGIN)
    }
  }
};

export const signup = async (
  dispatch: React.Dispatch<any>,
  payload: IFormValues,
  cb?: (data: Record<string, any>) => void
) => {
  dispatch(asyncActions(REGISTER).loading(true));
  dispatch(asyncActions(REGISTER).failure(false, null));

  try {
    const { data } = await AUTHAPI.register(payload);
    const { token, user } = data;
    setTokenAuth(token);
    await persistToken(token, user);
    cb && cb(user);
    dispatch(asyncActions(REGISTER).success(user));
    dispatch(asyncActions(REGISTER).loading(false));
  } catch (e) {
    if (e && e.response) {
      dispatchError(dispatch, asyncActions, e, e.status, REGISTER)
    }
  }
};

export const verifyAccount = async (
  dispatch: React.Dispatch<any>,
  token: { token: string },
  cb?: (data: Record<string, any>) => void
) => {
  dispatch(asyncActions(VERIFY_ACCOUNT).loading(true));
  dispatch(asyncActions(VERIFY_ACCOUNT).failure(false, null));

  try {
    const { status } = await AUTHAPI.verifyAccount(token);
    if (status === 200) {
      let userInfo = getTokenInfo();
      const { user, token } = userInfo;
      user.verified = true;
      await persistToken(token, user);
      cb && cb(user);
    }
    dispatch(asyncActions(VERIFY_ACCOUNT).loading(false));
    dispatch(asyncActions(VERIFY_ACCOUNT).failure(false, null));
  } catch (e) {
    if (e && e.response) {
      dispatchError(dispatch, asyncActions, e, e.status, VERIFY_ACCOUNT)
    }
  }
};

export const forgotPassword = async (
  dispatch: React.Dispatch<any>,
  payload: IFormValues,
  cb?: () => void
) => {
  dispatch(asyncActions(FORGOT_PASSWORD).loading(true));
  dispatch(asyncActions(FORGOT_PASSWORD).failure(false, null));

  try {
    const { status } = await AUTHAPI.forgotPassword(payload);
    if (status === 200) {
      cb && cb();
    }
    dispatch(asyncActions(FORGOT_PASSWORD).loading(false));
    dispatch(asyncActions(FORGOT_PASSWORD).failure(false, null));
  } catch (e) {
    if (e && e.response) {
      dispatchError(dispatch, asyncActions, e, e.status, FORGOT_PASSWORD)

    }
  }
};


export const resetPassword = async (
  dispatch: React.Dispatch<any>,
  payload: IFormValues,
  cb?: () => void
) => {
  dispatch(asyncActions(RESET_PASSWORD).loading(true));
  dispatch(asyncActions(RESET_PASSWORD).failure(false, null));

  try {
    const { status } = await AUTHAPI.resetPassword(payload);
    if (status === 200) {
      cb && cb();
    }
    dispatch(asyncActions(RESET_PASSWORD).loading(false));
    dispatch(asyncActions(RESET_PASSWORD).failure(false, null));
  } catch (e) {
    if (e && e.response) {
      dispatchError(dispatch, asyncActions, e, e.status, RESET_PASSWORD)
    }
  }
};