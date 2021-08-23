import { POPULATE_URL } from "../../constants";
import { api } from "../../utils/axios";

export const populateCountry = async () => {
  try {
    return await api({
      method:"get",
      url:`${POPULATE_URL.default}/countries`
    });
  } catch (e) {
    throw e;
  }
};

export const populateBusinessTypes = async () => {
  try {
    return await api({
      method:"get",
      url:`${POPULATE_URL.default}/business-types`
    });
  } catch (e) {
    throw e;
  }
};

export const populateVerificationRange = async () => {
  try {
    return await api({
      method:"get",
      url:`${POPULATE_URL.default}/verification-ranges`
    });
  } catch (e) {
    throw e;
  }
};



