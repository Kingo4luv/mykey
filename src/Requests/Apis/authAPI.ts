import { AUTH } from "../../constants";
import { api } from "../../utils/axios";
import { IFormValues } from "../../utils/interfaces";

export const login = async (payload: IFormValues) => {
  try {
    return await api({
      method:"post",
      data:payload,
      url:AUTH.login
    });
  } catch (e) {
    throw e;
  }
};

export const register= async(payload:IFormValues)=>{
  try {
    return await api({
      method:"post",
      data:payload,
      url:AUTH.register
    });
  } catch (e) {
    throw e;
  }
}

export const verifyAccount= async(payload:Record<string, any>)=>{
  try {
    return await api({
      method:"post",
      data:payload,
      url:AUTH.verifyAccount
    });
  } catch (e) {
    throw e;
  }
}

export const forgotPassword= async(payload:Record<string, any>)=>{
  try {
    return await api({
      method:"post",
      data:payload,
      url:AUTH.forgetPassword
    });
  } catch (e) {
    throw e;
  }
}

export const resetPassword= async(payload:Record<string, any>)=>{
  try {
    return await api({
      method:"post",
      data:payload,
      url:AUTH.resetPassword
    });
  } catch (e) {
    throw e;
  }
}

