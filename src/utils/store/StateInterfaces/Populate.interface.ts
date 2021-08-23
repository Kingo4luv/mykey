import { IBusinessType, ICountry } from "../../interfaces";

export interface IPopulateState{
  countries:ICountry[];
  businessTypes:IBusinessType[];
  verificationRanges:string[];
  loadingCountries:boolean;
  loadingBusinessTypes: boolean;
  loadingVerificationRanges:boolean;
  loadingVerificationRangesError?:{ error: string | string[] | null; status: boolean } | null;
  loadingCountriesError?:{ error: string | string[] | null; status: boolean } | null;
  loadingBusinessTypesError?:{ error: string | string[] | null; status: boolean } | null;
}