export interface IAuth {
  token: string | null;
  user:null;
  loadingLogin: boolean;
  loadingSignup: boolean;
  loadingAccountVerification?:boolean;
  loadingForgotPassword:boolean;
  loadingResetPassword:boolean;
  logInError?: { error: string | string[] | null; status: boolean } | null;
  signupError?: { error: string | string[] | null; status: boolean } | null;
  verifyAccountError?: { error: string | string[] | null; status: boolean } | null;
  resetPasswordError?:{ error: string | string[] | null; status: boolean } | null;
  forgetPasswordError?:{ error: string | string[] | null; status: boolean } | null;
}

