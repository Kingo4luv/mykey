import { ORGANIZATION_URLS } from "../../constants";
import { api } from "../../utils/axios";
import { IFormValues } from "../../utils/interfaces";

export const CreateOrganization = async (payload: IFormValues) => {
  try {
    return await api({
      method:"post",
      data:payload,
      url:ORGANIZATION_URLS.default
    });
  } catch (e) {
    throw e;
  }
};


export const getTeamMembers = async (organizationId:string|number) => {
  try {
    return await api({
      method:"get",
      url:`${ORGANIZATION_URLS.default}/${organizationId}/users`
    });
  } catch (e) {
    throw e;
  }
};

export const addTeamMembers = async (payload:Record<string, any>, organizationId:string|number) => {
  try {
    return await api({
      method:"post",
      url:`${ORGANIZATION_URLS.default}/${organizationId}/users`,
      data:payload
    });
  } catch (e) {
    throw e;
  }
};

export const getOrganization= async (id:string|number) => {
  try {
    return await api({
      method:"get",
      url:`${ORGANIZATION_URLS.default}/${id}`,
    });
  } catch (e) {
    throw e;
  }
};

export const updateOrganization= async (id:string|number, payload:Record<string, any>) => {
  try {
    return await api({
      method:"put",
      url:`${ORGANIZATION_URLS.default}/${id}`,
      data:payload
    });
  } catch (e) {
    throw e;
  }
};


export const reserveNuban= async (organizationId:string|number, payload:Record<string, any>) => {
  try {
    return await api({
      method:"post",
      url:`${ORGANIZATION_URLS.default}/${organizationId}/reserve-account`,
      data:payload
    });
  } catch (e) {
    throw e;
  }
};

export const requestActivation= async (organizationId:string|number) => {
  try {
    return await api({
      method:"post",
      url:`${ORGANIZATION_URLS.default}/${organizationId}/request-approval`,
    });
  } catch (e) {
    throw e;
  }
};