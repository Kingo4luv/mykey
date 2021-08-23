import { IOrganization } from "../../interfaces";

export interface IOrganizationState{
  organization:null | IOrganization;
  organizations:IOrganization[];
  team:Record<string, any>[];
  teamMember:null;
  loadingAddTeamMember:boolean;
  loadingOrganizations: boolean;
  loadingUpdateOrganizations: boolean;
  loadingCreateOrganization:boolean;
  loadingTeams:boolean;
  loadingOrganization:boolean;
  createOrganizationError?:{ error: string | string[] | null; status: boolean } | null;
  loadingOrganizationError?:{ error: string | string[] | null; status: boolean } | null;
  updateOrganizationError?:{ error: string | string[] | null; status: boolean } | null;
  loadingOrganizationsError?:{ error: string | string[] | null; status: boolean } | null;
  addTeamMemberError?:{ error: string | string[] | null; status: boolean } | null;
  loadingTeamsError?:{ error: string | string[] | null; status: boolean } | null;
}