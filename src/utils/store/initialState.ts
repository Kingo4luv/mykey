import { IAuth } from "./StateInterfaces/Auth.interface";
import { IOrganizationState } from "./StateInterfaces/Organization.interface";
import { IPopulateState } from "./StateInterfaces/Populate.interface";
export type State = {
  Auth: IAuth;
  Organization:IOrganizationState;
  Populate:IPopulateState,
  Toasts:Record<string, any>[]
};

export const initialState: State = {
  Auth: {
    token: null,
    user:null,
    loadingLogin: false,
    loadingSignup: false,
    logInError: null,
    signupError: null,
    resetPasswordError:null,
    forgetPasswordError:null,
    loadingResetPassword:false,
    loadingForgotPassword:false
  },
  Organization:{
    organization:null,
    organizations:[],
    loadingCreateOrganization:false,
    loadingOrganizations:false,
    loadingOrganization:false,
    team:[],
    loadingTeams:false,
    loadingAddTeamMember:false,
    teamMember:null,
    loadingUpdateOrganizations:false
  },
  Populate:{
    loadingBusinessTypes:false,
    loadingCountries:false,
    loadingVerificationRanges:false,
    countries:[],
    businessTypes:[],
    verificationRanges:[]
  },
  Toasts:[]
  
};
