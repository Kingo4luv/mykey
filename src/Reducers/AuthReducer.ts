import { asyncActionName } from "../utils/AsyncUtils";
import {
  LOGIN,
  REGISTER,
  VERIFY_ACCOUNT,
  RESET_PASSWORD,
  FORGOT_PASSWORD,
} from "../actions";
import { initialState } from "../utils/store/initialState";

export type Action = {
  type: string;
  payload: any;
};

const AuthReducer = (state = initialState.Auth, action: Action) => {
  switch (action.type) {
    case asyncActionName(LOGIN).success:
      return {
        ...state,
        user: action.payload,
      };

    case asyncActionName(LOGIN).failure:
      return {
        ...state,
        logInError: action.payload,
      };
    case asyncActionName(LOGIN).loading:
      return {
        ...state,
        loadingLogin: action.payload,
      };

    case asyncActionName(REGISTER).success:
      return {
        ...state,
        user: action.payload,
      };

    case asyncActionName(REGISTER).failure:
      return {
        ...state,
        signupError: action.payload,
      };
    case asyncActionName(REGISTER).loading:
      return {
        ...state,
        loadingSignup: action.payload,
      };
    case asyncActionName(VERIFY_ACCOUNT).success:
      return {
        ...state,
        user: action.payload,
      };

    case asyncActionName(VERIFY_ACCOUNT).failure:
      return {
        ...state,
        verifyAccountError: action.payload,
      };
    case asyncActionName(VERIFY_ACCOUNT).loading:
      return {
        ...state,
        loadingAccountVerification: action.payload,
      };

    case asyncActionName(FORGOT_PASSWORD).failure:
      return {
        ...state,
        forgetPasswordError: action.payload,
      };
    case asyncActionName(FORGOT_PASSWORD).loading:
      return {
        ...state,
        loadingForgotPassword: action.payload,
      };

    case asyncActionName(RESET_PASSWORD).failure:
      return {
        ...state,
        resetPasswordError: action.payload,
      };
    case asyncActionName(RESET_PASSWORD).loading:
      return {
        ...state,
        loadingResetPassword: action.payload,
      };

    default:
      return state;
  }
};
export default AuthReducer;
