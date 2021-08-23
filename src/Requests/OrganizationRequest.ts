import React from "react";
import {
  CREATE_ORGANIZATION,
  FETCH_TEAM_MEMBERS,
  CREATE_TEAM_MEMBER,
  FETCH_ORGANIZATION,
  UPDATE_ORGANIZATION,
} from "../actions";
import { asyncActions } from "../utils/AsyncUtils";
import { IFormValues, IOrganization } from "../utils/interfaces";
import * as ORG_API from "./Apis/organizationAPI";
import { getTokenInfo } from "../utils/helper";
import { dispatchError, statelessErrorHandler } from "./dispatchError";
import { persistToken } from "./AuthRequest";

export const createOrganization = async (
  dispatch: React.Dispatch<any>,
  payload: IFormValues,
  onDone?: (data: Record<string, any>) => void
) => {
  dispatch(asyncActions(CREATE_ORGANIZATION).loading(true));
  dispatch(asyncActions(CREATE_ORGANIZATION).failure(false, null));
  try {
    const name = payload.company;
    delete payload.company;
    const data = { ...payload, name };
    const { status } = await ORG_API.CreateOrganization(data);
    if (status === 201) {
      const { user, token } = getTokenInfo();
      user.organizations.push(payload);
      await persistToken(token, user);
      setTimeout(() => {
        dispatch(asyncActions(CREATE_ORGANIZATION).loading(false));
        dispatch(asyncActions(CREATE_ORGANIZATION).success(user));
        onDone && onDone(user);
      }, 1000);
    }
  } catch (e) {
    if (e && e.response) {
      dispatchError(
        dispatch,
        asyncActions,
        e,
        e.response.status,
        CREATE_ORGANIZATION
      );
    }
  }
};

export const getTeamMembers = async (
  dispatch: React.Dispatch<any>,
  organizationId: string | number
) => {
  dispatch(asyncActions(FETCH_TEAM_MEMBERS).loading(true));
  dispatch(asyncActions(FETCH_TEAM_MEMBERS).failure(false, null));
  try {
    const { data } = await ORG_API.getTeamMembers(organizationId);
    dispatch(asyncActions(FETCH_TEAM_MEMBERS).loading(false));
    dispatch(asyncActions(FETCH_TEAM_MEMBERS).success(data.data));
  } catch (e) {
    if (e && e.response) {
      dispatchError(
        dispatch,
        asyncActions,
        e,
        e.response.status,
        FETCH_TEAM_MEMBERS
      );
    }
  }
};

export const addTeamMembers = async (
  dispatch: React.Dispatch<any>,
  organizationId: string | number,
  payload: Record<string, any>,
  onDone: () => void
) => {
  dispatch(asyncActions(CREATE_TEAM_MEMBER).loading(true));
  dispatch(asyncActions(CREATE_TEAM_MEMBER).failure(false, null));
  try {
    const { status } = await ORG_API.addTeamMembers(payload, organizationId);
    if (status === 201) {
      dispatch(asyncActions(CREATE_TEAM_MEMBER).failure(false, null));
      dispatch(asyncActions(CREATE_TEAM_MEMBER).success(payload));
      onDone();
    }
    dispatch(asyncActions(CREATE_TEAM_MEMBER).loading(false));
  } catch (e) {
    if (e && e.response) {
      dispatchError(
        dispatch,
        asyncActions,
        e,
        e.response.status,
        CREATE_TEAM_MEMBER
      );
    }
  }
};

export const getOrganization = async (
  dispatch: React.Dispatch<any>,
  organizationId: string | number
) => {
  dispatch(asyncActions(FETCH_ORGANIZATION).loading(true));
  dispatch(asyncActions(FETCH_ORGANIZATION).failure(false, null));
  try {
    const { status, data } = await ORG_API.getOrganization(organizationId);
    if (status === 200) {
      dispatch(asyncActions(FETCH_ORGANIZATION).failure(false, null));
      dispatch(asyncActions(FETCH_ORGANIZATION).success(data.data));
    }
    dispatch(asyncActions(FETCH_ORGANIZATION).loading(false));
  } catch (e) {
    if (e && e.response) {
      dispatchError(
        dispatch,
        asyncActions,
        e,
        e.response.status,
        FETCH_ORGANIZATION
      );
    }
  }
};

export const updateOrganization = async (
  dispatch: React.Dispatch<any>,
  organizationId: string | number,
  payload: IOrganization,
  onDone?: () => void
) => {
  dispatch(asyncActions(UPDATE_ORGANIZATION).loading(true));
  dispatch(asyncActions(UPDATE_ORGANIZATION).failure(false, null));
  try {
    const { status, data } = await ORG_API.updateOrganization(
      organizationId,
      payload
    );
    if (status === 200) {
      dispatch(asyncActions(UPDATE_ORGANIZATION).failure(false, null));
      dispatch(asyncActions(UPDATE_ORGANIZATION).success(data.data));
      onDone && onDone();
    }
    dispatch(asyncActions(UPDATE_ORGANIZATION).loading(false));
  } catch (e) {
    if (e && e.response) {
      dispatchError(
        dispatch,
        asyncActions,
        e,
        e.response.status,
        UPDATE_ORGANIZATION
      );
    }
  }
};

export const reserveAccount = async (
  organizationId:string|number,
  payload: Record<string, any>,
  onDone?: () => void,
  onError?:(err:string|string[])=>void
) => {
  try {
    const { status } = await ORG_API.reserveNuban(organizationId ,payload);
    if (status === 200) {
      onDone && onDone();
    }
  } catch (e) {
    if (e && e.response) {
      if(onError){
        statelessErrorHandler(onError, e)
      }
    }
  }
};

export const requestApproval = async (
  organizationId:string|number,
  onDone?: () => void,
  onError?:(err:string|string[])=>void
) => {
  try {
    const { status } = await ORG_API.requestActivation(organizationId);
    if (status === 201) {
      onDone && onDone();
    }
  } catch (e) {
    if (e && e.response) {
      if(onError){
        statelessErrorHandler(onError, e)
      }
    }
  }
};
