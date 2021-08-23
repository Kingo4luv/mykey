export interface IFormValues {
  firstName?: string;
  lastName?: string;
  email?: string;
  company?: string;
  phone?: string;
  location?: string;
  password?: string;
  retypePassword?: string;
  token?: string;
  website?: string;
  role?: string;
  newPassword?: string;
  rcNumber?:string;
  directorName?:string;
  address?:string;
  bvn?:string;
}

export interface IAuthError {
  error: string | string[] | null;
}

export type Action = {
  type: string;
  payload: any;
};

export interface IAPI_KEY {
  secret_key?: string;
  public_key?: string;
}
export interface IOrganization {
  name?: string;
  email?: string;
  website?: string;
  address?: string;
  api_keys?: IAPI_KEY;
  bank_info?: Record<string, any>;
  country?: any;
  industry?: any;
  logo?: any;
  verification_range?: any;
  id?: string;
  wallet?: Record<string, any>;
  created_by?: Record<string, any>;
  director_name?:string;
  rc_number?:string;
  status?:string;
  approved_at?:string;
}
export interface ICountry {
  name: string;
  id?: number | string;
}

export interface IBusinessType {
  name: string;
  id: number | string;
}
