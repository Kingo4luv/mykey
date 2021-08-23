import { asyncActionName } from "../utils/AsyncUtils";
import {
  GET_COUNTRIES,GET_BUSINESS_TYPES, GET_VERIFICATION_RANGES
} from "../actions";
import { initialState } from "../utils/store/initialState";
import { Action } from "../utils/interfaces";

const PopulateReducer = (state = initialState.Populate, action: Action) => {
  switch (action.type) {
    case asyncActionName(GET_COUNTRIES).success:
      return {
        ...state,
        countries: action.payload,
      };
    case asyncActionName(GET_COUNTRIES).failure:
      return {
        ...state,
        loadingCountriesError: action.payload,
      };
    case asyncActionName(GET_COUNTRIES).loading:
      return {
        ...state,
        loadingCountries: action.payload,
      };

      case asyncActionName(GET_BUSINESS_TYPES).success:
        return {
          ...state,
          businessTypes: action.payload,
        };
      case asyncActionName(GET_BUSINESS_TYPES).failure:
        return {
          ...state,
          loadingBusinessTypesError: action.payload,
        };
      case asyncActionName(GET_BUSINESS_TYPES).loading:
        return {
          ...state,
          loadingBusinessTypes: action.payload,
        };

        case asyncActionName(GET_VERIFICATION_RANGES).success:
          return {
            ...state,
            verificationRanges: action.payload,
          };
        case asyncActionName(GET_VERIFICATION_RANGES).failure:
          return {
            ...state,
            loadingVerificationRangesError: action.payload,
          };
        case asyncActionName(GET_VERIFICATION_RANGES).loading:
          return {
            ...state,
            loadingVerificationRanges: action.payload,
          };
    default:
      return state;
  }
};
export default PopulateReducer;
