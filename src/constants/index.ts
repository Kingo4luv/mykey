const BASE_URL:string= process.env.REACT_APP_VERIFRICA_BASE_URL as string
const TOKEN_KEY="MYKEY_AUTH";
const DEFAULT_ORG_ID="MYKEY_DEFAULT";

const AUTH={
  login:`${BASE_URL}/login`,
  register:`${BASE_URL}/register`,
  verifyAccount:`${BASE_URL}/user/verify`,
  forgetPassword:`${BASE_URL}/forgot`,
  resetPassword:`${BASE_URL}/post-forgot`
}

const ORGANIZATION_URLS={
  default:`${BASE_URL}/organization`,
}


export {
  AUTH,
  TOKEN_KEY,
  ORGANIZATION_URLS,
  DEFAULT_ORG_ID
}