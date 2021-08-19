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
