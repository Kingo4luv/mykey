import { IAuth } from "./StateInterfaces/Auth.interface";
import { IOrganization } from "./StateInterfaces/Organization.interface";
export type State = {
  Auth: IAuth;
  Organization:IOrganization
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
    team:[],
    loadingTeams:false,
    loadingAddTeamMember:false,
    teamMember:null
  }
};
