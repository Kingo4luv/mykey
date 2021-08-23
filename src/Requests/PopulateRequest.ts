import React from "react";
import { GET_COUNTRIES, GET_BUSINESS_TYPES, GET_VERIFICATION_RANGES } from "../actions";
import { asyncActions } from "../utils/AsyncUtils";
import * as POPULATE_API from "./Apis/populateAPI";
import { dispatchError } from "./dispatchError";

export const getCountries = async (dispatch: React.Dispatch<any>) => {
  dispatch(asyncActions(GET_COUNTRIES).loading(true));
  dispatch(asyncActions(GET_COUNTRIES).failure(false, null));
  try {
    const { data } = await POPULATE_API.populateCountry();
    dispatch(asyncActions(GET_COUNTRIES).loading(false));
    dispatch(asyncActions(GET_COUNTRIES).success(data.data));
  } catch (e) {
    if (e && e.response) {
      dispatchError(dispatch, asyncActions, e, e.status, GET_COUNTRIES);
    }
  }
};

export const getBusinessTypes = async (dispatch: React.Dispatch<any>) => {
  dispatch(asyncActions(GET_BUSINESS_TYPES).loading(true));
  dispatch(asyncActions(GET_BUSINESS_TYPES).failure(false, null));
  try {
    const { data } = await POPULATE_API.populateBusinessTypes();
    dispatch(asyncActions(GET_BUSINESS_TYPES).loading(false));
    dispatch(asyncActions(GET_BUSINESS_TYPES).success(data.data));
  } catch (e) {
    if (e && e.response) {
      dispatchError(dispatch, asyncActions, e, e.status, GET_BUSINESS_TYPES);
    }
  }
};


export const getVerificationRanges = async (dispatch: React.Dispatch<any>) => {
  dispatch(asyncActions(GET_VERIFICATION_RANGES).loading(true));
  dispatch(asyncActions(GET_VERIFICATION_RANGES).failure(false, null));
  try {
    const { data } = await POPULATE_API.populateVerificationRange();
    dispatch(asyncActions(GET_VERIFICATION_RANGES).loading(false));
    dispatch(asyncActions(GET_VERIFICATION_RANGES).success(data.data));
  } catch (e) {
    if (e && e.response) {
      dispatchError(dispatch, asyncActions, e, e.status, GET_VERIFICATION_RANGES);
    }
  }
};