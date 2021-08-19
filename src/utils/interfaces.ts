export interface IFormValues {
  firstName?: string;
  lastName?: string;
  email?: string;
  company?: string;
  phone?: string;
  location?: string;
  password?: string;
  retypePassword?: string;
  token?:string;
  website?:string;
  role?:string;
}

export interface IAuthError{
  error:string | string[] | null
}

export type Action = {
  type: string;
  payload: any;
};