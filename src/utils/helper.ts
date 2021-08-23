import { DEFAULT_ORG_ID, TOKEN_KEY } from "../constants";
import jwt_decode from "jwt-decode";
import {REMOVE_TOAST, ADD_TOAST} from "../actions"
import React from "react";

export const getTokenInfo = () => {
  const data = localStorage.getItem(TOKEN_KEY);
  if (data) return JSON.parse(data as string);
  return { token: null, user: null };
};

export const isLoggedIn = (tokenInfo?: {
  token: null | string;
  user: null | { [key: string]: any };
}) => {
  const data = tokenInfo || getTokenInfo();
  if (data && data.token !== null) {
    const { exp } = jwt_decode<any>(data.token);
    const currentTime = Date.now().valueOf() / 1000;
    if (currentTime > exp) {
      localStorage.clear();
      return false;
    }
    return true;
  }
  return false;
};

export const hasOrganisation = (organsation: Record<string, any>[]) => {
  if (!organsation) return false;
  return organsation.length > 0;
};

export const setActiveOrganizaton = (
  organsations: Record<string, any>[],
  userId: string
) => {
  if (organsations.length === 0) return null;
  let org;
  org = organsations.find((org) => {
    return org.created_by === userId;
  });
  if (!org) {
    org = organsations[0];
  }
  localStorage.setItem(DEFAULT_ORG_ID, org.id);
};

export const getActiveOrganizationId = () => {
  return localStorage.getItem(DEFAULT_ORG_ID);
};

export const processFormData = (
  file: any,
  fileName: string,
  payload?: Record<string, any>
) => {
  const formData = new FormData();
  formData.append(fileName, file);
  if (payload && Object.keys(payload).length > 0) {
    Object.keys(payload).forEach((key) => {
      formData.append(key, payload[key]);
    });
  }
  return formData;
};

export const toast=(dispatch:React.Dispatch<any>, payload:{type:string, text:string})=>{
  dispatch({type:ADD_TOAST,payload});
}

export const deleteToast=(id:number, dispatch:React.Dispatch<any>)=>{
  dispatch({payload:id, type:REMOVE_TOAST});
}

export const generateToastId=()=>{
  return Math.floor((Math.random() * 100) + 1)
}

